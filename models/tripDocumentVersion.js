'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDocumentVersion = sequelize.define(
    'TripDocumentVersion',
    {
      tripDocumentVersionId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tripDocumentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_document',
          key: 'trip_document_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      versionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      reason: {
        type: DataTypes.ENUM('INITIAL', 'INTERIM_SETTLEMENT', 'PARTICIPANT_LEFT'),
        allowNull: false,
      },
      createdByUserId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      basedOnVersionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'trip_document_version',
          key: 'trip_document_version_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      participantCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      participantUserIds: {
        // MySQL JSON
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      tableName: 'trip_document_version',
      timestamps: true,
      underscored: true,
    }
  );

  TripDocumentVersion.associate = function (models) {
    TripDocumentVersion.belongsTo(models.TripDocument, {
      foreignKey: 'tripDocumentId',
      targetKey: 'tripDocumentId',
      as: 'document',
    });

    TripDocumentVersion.belongsTo(models.User, {
      foreignKey: 'createdByUserId',
      targetKey: 'userId',
      as: 'createdBy',
    });

    TripDocumentVersion.belongsTo(models.TripDocumentVersion, {
      foreignKey: 'basedOnVersionId',
      targetKey: 'tripDocumentVersionId',
      as: 'basedOn',
    });

    TripDocumentVersion.hasMany(models.TripDocumentExpense, {
      foreignKey: 'tripDocumentVersionId',
      sourceKey: 'tripDocumentVersionId',
      as: 'expenses',
    });
  };

  return TripDocumentVersion;
};

