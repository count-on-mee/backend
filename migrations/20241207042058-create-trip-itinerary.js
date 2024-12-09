'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trip_itinerary', {
      trip_itinerary_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      trip_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trip',
          key: 'trip_id',
        },
      },
      spot_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      day: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trip_itinerary');
  },
};
