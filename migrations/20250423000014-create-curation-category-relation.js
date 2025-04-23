'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('curation_category_relation', {
      curation_category_relation_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      curation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'curation',
          key: 'curation_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      curation_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'curation_category',
          key: 'curation_category_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });

    // 복합 유니크 인덱스 추가
    await queryInterface.addIndex(
      'curation_category_relation',
      ['curation_id', 'curation_category_id'],
      {
        unique: true,
        name: 'uk_curationId_curationCategoryId',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex(
      'curation_category_relation',
      'uk_curationId_curationCategoryId'
    );
    await queryInterface.dropTable('curation_category_relation');
  },
};
