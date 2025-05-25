'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spot_category', {
      spot_category_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      parent_spot_category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'spot_category',
          key: 'spot_category_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    });

    await queryInterface.addIndex('spot_category', ['type'], {
      unique: true,
      name: 'uk_type',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('spot_category', 'uk_type');
    await queryInterface.dropTable('spot_category');
  },
};
