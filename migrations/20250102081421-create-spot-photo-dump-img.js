'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('spot_photo_dump_img', {
      spot_photo_dump_img_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      spot_photo_dump_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot_photo_dump',
          key: 'spot_photo_dump_id',
        }
      },
      img_url: {
        type: Sequelize.TEXT,
        allowNull: true,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('spot_photo_dump_img');
  }
};
