'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spot', {
      spot_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tel: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        type: Sequelize.GEOMETRY('POINT', 4326),
        allowNull: false,
      },
      naver_spot_id: {
        type: Sequelize.STRING,
        unique: true,
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

    await queryInterface.addIndex('spot', ['location'], {
      type: 'SPATIAL',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('spot');
  },
};
