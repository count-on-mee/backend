'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('spot_business_hour_info', {
      spot_business_hour_info_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      spot_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      summary: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      info: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
    });

    await queryInterface.removeColumn('spot_business_hour', 'summary');
    await queryInterface.removeColumn('spot_business_hour', 'spot_id');
    await queryInterface.addColumn(
      'spot_business_hour',
      'spot_business_hour_info_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot_business_hour_info',
          key: 'spot_business_hour_info_id',
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('spot_business_hour', 'summary', {
      type: Sequelize.STRING(255),
      allowNull: false,
    });
    await queryInterface.addColumn('spot_business_hour', 'spot_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'spot',
        key: 'spot_id',
      },
    });
    await queryInterface.removeColumn(
      'spot_business_hour',
      'spot_business_hour_info_id'
    );
    await queryInterface.dropTable('spot_business_hour_info');
  },
};
