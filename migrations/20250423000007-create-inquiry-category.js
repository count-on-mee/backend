'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inquiry_category', {
      inquiry_category_id: {
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

    await queryInterface.addIndex('inquiry_category', ['type'], {
      unique: true,
      name: 'uk_type',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('inquiry_category', 'uk_type');
    await queryInterface.dropTable('inquiry_category');
  },
};
