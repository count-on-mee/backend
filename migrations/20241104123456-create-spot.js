'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('spot', {
      spot_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      tel: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      review_count: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      review_score: {
        type: Sequelize.DECIMAL(5, 3),
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('spot');
  },
};
