'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('faq', {
      faq_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      faq_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'faq_category',
          key: 'faq_category_id',
        },
      },
      question: {
        type: Sequelize.STRING(2048),
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING(2048),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('faq');
  },
};
