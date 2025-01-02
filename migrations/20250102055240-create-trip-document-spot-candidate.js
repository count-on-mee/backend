'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trip_document_spot_candidate', {
      trip_document_spot_candidate_id: {
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
      spot_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trip_document_spot_candidate');
  },
};
