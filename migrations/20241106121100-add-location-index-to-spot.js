'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('spot', 'location', {
      type: Sequelize.GEOMETRY('POINT', 4326),
      allowNull: false,
    });
    await queryInterface.addIndex('spot', {
      fields: ['location'],
      type: 'SPATIAL',
      name: 'spot_location_idx',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('spot', 'spot_location_idx');
    await queryInterface.changeColumn('spot', 'location', {
      type: Sequelize.GEOMETRY('POINT', 4326),
      allowNull: true,
    });
  },
};
