'use strict';

const TABLE = 'trip_user';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(TABLE, 'status', {
      type: Sequelize.ENUM('ACTIVE', 'LEFT'),
      allowNull: false,
      defaultValue: 'ACTIVE',
    });

    await queryInterface.addColumn(TABLE, 'left_at', {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.addIndex(TABLE, ['trip_id', 'user_id', 'status'], {
      name: 'idx_trip_user_trip_user_status',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(TABLE, 'idx_trip_user_trip_user_status');
    await queryInterface.removeColumn(TABLE, 'left_at');
    await queryInterface.removeColumn(TABLE, 'status');
  },
};

