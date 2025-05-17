'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trip_itinerary_transportation', {
      trip_itinerary_transportation_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      departure_trip_itinerary_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_itinerary',
          key: 'trip_itinerary_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      destination_trip_itinerary_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_itinerary',
          key: 'trip_itinerary_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      type: {
        type: Sequelize.ENUM(
          'WALK',
          'BUS',
          'SUBWAY',
          'TAXI',
          'CAR',
          'TRAIN',
          'PLANE',
          'OTHER'
        ),
        allowNull: false,
      },
      duration_minutes: {
        type: Sequelize.INTEGER,
        allowNull: false,
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

    // 출발지-도착지 쌍의 유니크 인덱스 추가
    await queryInterface.addIndex('trip_itinerary_transportation', {
      fields: ['departure_trip_itinerary_id', 'destination_trip_itinerary_id'],
      unique: true,
      name: 'uk_departure_destination',
    });

    // 출발지 인덱스 추가
    await queryInterface.addIndex('trip_itinerary_transportation', {
      fields: ['departure_trip_itinerary_id'],
      name: 'idx_departure_trip_itinerary_id',
    });

    // 도착지 인덱스 추가
    await queryInterface.addIndex('trip_itinerary_transportation', {
      fields: ['destination_trip_itinerary_id'],
      name: 'idx_destination_trip_itinerary_id',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trip_itinerary_transportation');
  },
};
