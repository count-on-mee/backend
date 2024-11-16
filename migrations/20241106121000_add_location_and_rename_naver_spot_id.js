'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('spot', 'location', {
      type: Sequelize.GEOMETRY('POINT', 4326),
      allowNull: true,
    });

    await queryInterface.renameColumn('spot', 'naver_id', 'naver_spot_id');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('spot', 'location');

    await queryInterface.renameColumn('spot', 'naver_spot_id', 'naver_id');
  },
};
