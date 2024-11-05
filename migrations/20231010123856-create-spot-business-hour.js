'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('spot_business_hour', {
      spot_business_hour_id: {
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
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      week: {
        type: Sequelize.STRING(5),
        allowNull: true,
      },
      open_time: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      close_time: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      break_start_time: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      break_end_time: {
        type: Sequelize.TIME,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('spot_business_hour');
  },
};
