'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trip_destination_relation', {
      trip_destination_relation_id: {
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
      trip_destination_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_destination',
          key: 'trip_destination_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // 복합 유니크 인덱스 추가
    await queryInterface.addIndex(
      'trip_destination_relation',
      ['trip_id', 'trip_destination_id'],
      {
        unique: true,
        name: 'uk_tripId_tripDestinationId',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(
      'trip_destination_relation',
      'uk_tripId_tripDestinationId'
    );
    await queryInterface.dropTable('trip_destination_relation');
  },
};
