'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('user', 'name', {
      type: Sequelize.STRING(30),
      allowNull: false,
    });
    await queryInterface.changeColumn('user', 'nickname', {
      type: Sequelize.STRING(30),
      allowNull: false,
    });
    await queryInterface.changeColumn('user', 'email', {
      type: Sequelize.STRING(100),
      allowNull: false,
    });
    await queryInterface.changeColumn('user', 'oauth_provider', {
      type: Sequelize.ENUM('google', 'kakao', 'naver'),
      allowNull: false,
      unique: true,
    });
    await queryInterface.changeColumn('user', 'oauth_id', {
      type: Sequelize.STRING(50),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('user', 'name', {
      type: Sequelize.STRING(30),
      allowNull: true,
    });
    await queryInterface.changeColumn('user', 'nickname', {
      type: Sequelize.STRING(30),
      allowNull: true,
    });
    await queryInterface.changeColumn('user', 'email', {
      type: Sequelize.STRING(100),
      allowNull: true,
    });
    await queryInterface.changeColumn('user', 'oauth_provider', {
      type: Sequelize.ENUM('google', 'kakao', 'naver'),
      allowNull: true,
      unique: false,
    });
    await queryInterface.changeColumn('user', 'oauth_id', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
  },
};
