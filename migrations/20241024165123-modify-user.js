'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex('user', ['oauth_provider', 'oauth_id'], {
      name: 'unique_oauth_provider_oauth_id',
      unique: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('user', 'unique_oauth_provider_oauth_id');
  },
};
