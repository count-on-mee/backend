'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'trip_document_accommodation',
      'check_in_date',
      {
        type: Sequelize.DATEONLY,
        allowNull: false,
      }
    );

    await queryInterface.changeColumn(
      'trip_document_accommodation',
      'check_out_date',
      {
        type: Sequelize.DATEONLY,
        allowNull: false,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'trip_document_accommodation',
      'check_in_date',
      {
        type: Sequelize.DATE,
        allowNull: false,
      }
    );

    await queryInterface.changeColumn(
      'trip_document_accommodation',
      'check_out_date',
      {
        type: Sequelize.DATE,
        allowNull: false,
      }
    );
  },
};
