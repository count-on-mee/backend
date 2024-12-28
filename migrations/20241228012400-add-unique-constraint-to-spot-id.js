'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('spot_category_relation', {
      fields: ['spot_id'],
      type: 'unique',
      name: 'unique_spot_id_in_spot_category_relation',
    });
    await queryInterface.addConstraint('spot_business_hour_info', {
      fields: ['spot_id'],
      type: 'unique',
      name: 'unique_spot_id_in_spot_business_hour_info',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'spot_category_relation',
      'unique_spot_id_in_spot_category_relation'
    );
    await queryInterface.removeConstraint(
      'spot_business_hour_info',
      'unique_spot_id_in_spot_business_hour_info'
    );
  },
};
