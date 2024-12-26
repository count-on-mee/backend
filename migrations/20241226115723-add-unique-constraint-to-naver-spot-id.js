'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('spot', 'naver_spot_id', {
      type: Sequelize.STRING(50),
      allowNull: true,
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('spot', 'naver_spot_id', {
      type: Sequelize.STRING(50),
      allowNull: true,
      unique: false,
    });
  },
};
