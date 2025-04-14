'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('user', 'profile_img_url', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('user', 'profile_img_url', {
      type: Sequelize.STRING(500),
      allowNull: true,
    });
  },
};
