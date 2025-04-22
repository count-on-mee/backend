'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spot_category_relation', {
      spot_category_relation_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      spot_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      spot_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot_category',
          key: 'spot_category_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });

    await queryInterface.addIndex(
      'spot_category_relation',
      ['spot_id', 'spot_category_id'],
      {
        unique: true,
        name: 'uk_spotId_spotCategoryId',
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('spot_category_relation');
  },
};
