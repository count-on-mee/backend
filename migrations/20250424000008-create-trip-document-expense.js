'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trip_document_expense', {
      trip_document_expense_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      trip_document_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_document',
          key: 'trip_document_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      type: {
        type: Sequelize.ENUM(
          'transportation',
          'accommodation',
          'meal',
          'other'
        ),
        allowNull: false,
      },
      detail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // 성능 향상을 위한 인덱스 추가
    await queryInterface.addIndex('trip_document_expense', [
      'trip_document_id',
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trip_document_expense');
  },
};
