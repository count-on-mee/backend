'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('spot_business_hour', 'last_order', {
      type: Sequelize.TIME,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('spot_business_hour', 'last_order');
  },
};
