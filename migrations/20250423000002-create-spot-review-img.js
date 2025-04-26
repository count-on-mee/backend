'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spot_review_img', {
      spot_review_img_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      spot_review_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot_review',
          key: 'spot_review_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      img_url: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('spot_review_img');
  },
};
