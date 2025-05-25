'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('faq_category', {
      faq_category_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    await queryInterface.addIndex('faq_category', ['type'], {
      unique: true,
      name: 'uk_type',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('faq_category', 'uk_type');
    await queryInterface.dropTable('faq_category');
  },
};
