const {
  sequelize,
  TripDocument,
  TripDocumentExpense,
  TripDocumentAccommodation,
  TripDocumentTask,
} = require('../models');

class RedisCacheManager {
  static redis = null;
  static CACHE_TTL = 3600; // 1시간
  static PERSISTENCE_INTERVAL = 1200; // 20분

  static setRedisClient(redisClient) {
    this.redis = redisClient;
  }

  static getDocumentKey(tripDocumentId, type) {
    return `document:${tripDocumentId}:${type}`;
  }

  static getDirtyFlagKey(tripDocumentId, type) {
    return `document:${tripDocumentId}:${type}:dirty`;
  }

  static getDeletedKey(tripDocumentId, type) {
    return `document:${tripDocumentId}:${type}:deleted`;
  }

  static async getDocument(tripDocumentId, type) {
    try {
      const key = this.getDocumentKey(tripDocumentId, type);
      const data = await this.redis.get(key);

      if (data) {
        await this.redis.expire(key, this.CACHE_TTL);
        return JSON.parse(data);
      }

      const dbData = await this.loadFromDatabase(tripDocumentId, type);
      await this.setDocument(tripDocumentId, type, dbData);
      return dbData;
    } catch (error) {
      console.error('Failed to get document:', error);
      throw error;
    }
  }

  static async setDocument(tripDocumentId, type, data) {
    try {
      const key = this.getDocumentKey(tripDocumentId, type);
      await this.redis.set(key, JSON.stringify(data), 'EX', this.CACHE_TTL);
    } catch (error) {
      console.error('Failed to set document:', error);
      throw error;
    }
  }

  static async updateDocumentWithDirtyFlag(tripDocumentId, type, data) {
    try {
      const key = this.getDocumentKey(tripDocumentId, type);
      const dirtyFlagKey = this.getDirtyFlagKey(tripDocumentId, type);
      const expiryTime = Date.now() + this.CACHE_TTL * 1000;

      const multi = this.redis.multi();
      multi.set(key, JSON.stringify(data), 'EX', this.CACHE_TTL);
      multi.set(dirtyFlagKey, expiryTime.toString());
      await multi.exec();
    } catch (error) {
      console.error('Failed to update document with dirty flag:', error);
      throw error;
    }
  }

  static async addDeletedId(tripDocumentId, type, id) {
    try {
      const deletedKey = this.getDeletedKey(tripDocumentId, type);
      const deletedIds = await this.redis.get(deletedKey);
      const updatedDeletedIds = deletedIds
        ? [...JSON.parse(deletedIds), id]
        : [id];
      await this.redis.set(deletedKey, JSON.stringify(updatedDeletedIds));
    } catch (error) {
      console.error('Failed to add deleted id:', error);
      throw error;
    }
  }

  static async getDeletedIds(tripDocumentId, type) {
    try {
      const deletedKey = this.getDeletedKey(tripDocumentId, type);
      const deletedIds = await this.redis.get(deletedKey);
      return deletedIds ? JSON.parse(deletedIds) : [];
    } catch (error) {
      console.error('Failed to get deleted ids:', error);
      throw error;
    }
  }

  static async clearDirtyState(tripDocumentId, type) {
    try {
      const flagKey = this.getDirtyFlagKey(tripDocumentId, type);
      const deletedKey = this.getDeletedKey(tripDocumentId, type);

      const multi = this.redis.multi();
      multi.del(flagKey);
      multi.del(deletedKey);
      await multi.exec();
    } catch (error) {
      console.error('Failed to clear dirty state:', error);
      throw error;
    }
  }

  static async startPersistenceWorker(
    interval = this.PERSISTENCE_INTERVAL * 1000
  ) {
    setInterval(async () => {
      try {
        const dirtyFlags = await this.redis.keys('document:*:dirty');

        for (const flagKey of dirtyFlags) {
          const [_, tripDocumentId, type] = flagKey.split(':');
          const dataKey = this.getDocumentKey(tripDocumentId, type);

          const expiryTimeStr = await this.redis.get(flagKey);
          if (!expiryTimeStr) continue;

          const expiryTime = parseInt(expiryTimeStr);
          const data = await this.redis.get(dataKey);
          const deletedIds = await this.getDeletedIds(tripDocumentId, type);

          if (data) {
            await this.persistToDatabase(
              tripDocumentId,
              type,
              JSON.parse(data),
              deletedIds
            );
            await this.clearDirtyState(tripDocumentId, type);
          } else if (Date.now() < expiryTime) {
            const dbData = await this.loadFromDatabase(tripDocumentId, type);
            await this.setDocument(tripDocumentId, type, dbData);
            await this.clearDirtyState(tripDocumentId, type);
          } else {
            await this.clearDirtyState(tripDocumentId, type);
          }
        }
      } catch (error) {
        console.error('Failed to persist changes:', error);
      }
    }, interval);
  }

  static async loadFromDatabase(tripDocumentId, type) {
    try {
      if (type === 'participant_count') {
        const { participantCount } = await TripDocument.findByPk(
          tripDocumentId,
          {
            attributes: ['participantCount'],
          }
        );
        return participantCount;
      }

      const tripDocument = await TripDocument.findByPk(tripDocumentId, {
        include: [
          {
            model:
              type === 'expenses'
                ? TripDocumentExpense
                : type === 'accommodations'
                ? TripDocumentAccommodation
                : type === 'tasks'
                ? TripDocumentTask
                : null,
            as: type,
            attributes:
              type === 'expenses'
                ? ['tripDocumentExpenseId', 'type', 'detail', 'amount']
                : type === 'accommodations'
                ? [
                    'tripDocumentAccommodationId',
                    'accommodation',
                    'checkInDate',
                    'checkOutDate',
                    'memo',
                  ]
                : type === 'tasks'
                ? ['tripDocumentTaskId', 'task', 'isCompleted']
                : [],
          },
        ],
      });

      if (!tripDocument) {
        throw new Error(`TripDocument not found: ${tripDocumentId}`);
      }

      const data = tripDocument[type].map((item) => item.get({ plain: true }));
      return data;
    } catch (error) {
      console.error('Failed to load from database:', error);
      throw error;
    }
  }

  static async persistToDatabase(tripDocumentId, type, data, deletedIds = []) {
    try {
      const tripDocument = await TripDocument.findByPk(tripDocumentId);
      if (!tripDocument) {
        throw new Error('Trip document not found');
      }

      const transaction = await sequelize.transaction();

      try {
        deletedIds.length > 0 &&
          (await this.deleteFromDatabase(
            tripDocumentId,
            type,
            deletedIds,
            transaction
          ));

        await this.updateDatabase(tripDocumentId, type, data, transaction);

        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    } catch (error) {
      console.error('Failed to persist to database:', error);
      throw error;
    }
  }

  static async deleteFromDatabase(
    tripDocumentId,
    type,
    deletedIds,
    transaction
  ) {
    switch (type) {
      case 'expenses':
        await TripDocumentExpense.destroy({
          where: {
            tripDocumentExpenseId: deletedIds,
            tripDocumentId,
          },
          transaction,
        });
        break;
      case 'accommodations':
        await TripDocumentAccommodation.destroy({
          where: {
            tripDocumentAccommodationId: deletedIds,
            tripDocumentId,
          },
          transaction,
        });
        break;
      case 'tasks':
        await TripDocumentTask.destroy({
          where: {
            tripDocumentTaskId: deletedIds,
            tripDocumentId,
          },
          transaction,
        });
        break;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }

  static async updateDatabase(tripDocumentId, type, data, transaction) {
    switch (type) {
      case 'participant_count':
        await TripDocument.update(
          { participantCount: data },
          { where: { tripDocumentId }, transaction }
        );
        break;
      case 'expenses':
        await TripDocumentExpense.bulkCreate(
          data.map((expense) => ({
            ...expense,
            tripDocumentId,
          })),
          {
            transaction,
            updateOnDuplicate: ['type', 'detail', 'amount'],
          }
        );
        break;
      case 'accommodations':
        await TripDocumentAccommodation.bulkCreate(
          data.map((accommodation) => ({
            ...accommodation,
            tripDocumentId,
          })),
          {
            transaction,
            updateOnDuplicate: [
              'accommodation',
              'checkInDate',
              'checkOutDate',
              'memo',
            ],
          }
        );
        break;
      case 'tasks':
        await TripDocumentTask.bulkCreate(
          data.map((task) => ({
            ...task,
            tripDocumentId,
          })),
          {
            transaction,
            updateOnDuplicate: ['task', 'isCompleted'],
          }
        );
        break;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }

  static async invalidateTripDocumentCache(tripDocumentId) {
    const pattern = `document:${tripDocumentId}:*`;
    const keys = await this.redis.keys(pattern);
    if (keys.length > 0) {
      await this.redis.del(keys);
    }
  }
}

module.exports = RedisCacheManager;
