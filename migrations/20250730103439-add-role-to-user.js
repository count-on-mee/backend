'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('user', 'role', {
      type: Sequelize.ENUM('user', 'admin'),
      defaultValue: 'user',
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('user', 'role');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS enum_user_role;');
  },
};
