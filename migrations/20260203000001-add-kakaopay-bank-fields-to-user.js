'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('user', 'kakao_pay_id', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });

    await queryInterface.addColumn('user', 'bank_name', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });

    await queryInterface.addColumn('user', 'account_number', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('user', 'account_number');
    await queryInterface.removeColumn('user', 'bank_name');
    await queryInterface.removeColumn('user', 'kakao_pay_id');
  },
};
