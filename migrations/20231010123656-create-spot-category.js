'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('spot_category', {
      spot_category_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('spot_category');
  },
};
