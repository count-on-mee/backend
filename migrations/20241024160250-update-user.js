'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('user', 'oauth_provider', {
      type: Sequelize.ENUM('google', 'kakao', 'naver'),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('user', 'oauth_provider');
  },
};
