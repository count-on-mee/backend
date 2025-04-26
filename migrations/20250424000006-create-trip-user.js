'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trip_user', {
      trip_user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      trip_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trip',
          key: 'trip_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // 복합 유니크 인덱스 추가
    await queryInterface.addIndex('trip_user', ['trip_id', 'user_id'], {
      unique: true,
      name: 'uk_tripId_userId',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('trip_user', 'uk_tripId_userId');
    await queryInterface.dropTable('trip_user');
  },
};
