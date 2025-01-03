'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('spot', 'trip_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'trip',
        key: 'trip_id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('spot', 'trip_id');
  },
};
