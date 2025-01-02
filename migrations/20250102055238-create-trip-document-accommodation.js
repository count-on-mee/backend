'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trip_document_accommodation', {
      trip_document_accommodation_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      trip_document_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_document',
          key: 'trip_document_id',
        },
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      price_per_night: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      additional_fee: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      distance_from_station: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      etc: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trip_document_accommodation');
  },
};
