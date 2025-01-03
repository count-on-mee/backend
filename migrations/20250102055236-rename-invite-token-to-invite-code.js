'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      'trip_invite',
      'invite_token',
      'invite_code'
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn(
      'trip_invite',
      'invite_code',
      'invite_token'
    );
  },
};
