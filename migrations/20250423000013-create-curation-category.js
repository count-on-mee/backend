'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('curation_category', {
      curation_category_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });

    await queryInterface.addIndex('curation_category', ['type'], {
      unique: true,
      name: 'uk_type',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('curation_category', 'uk_type');
    await queryInterface.dropTable('curation_category');
  },
};
