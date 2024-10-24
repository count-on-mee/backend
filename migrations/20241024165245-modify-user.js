'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeIndex('user', 'oauth_provider');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addIndex('user', ['oauth_provider'], {
      name: 'unique_oauth_provider',
      unique: true,
    });
  },
};
