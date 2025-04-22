'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('curation_spot', {
      curation_spot_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      curation_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'curation',
          key: 'curation_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      spot_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // 조회 성능 향상을 위한 인덱스 추가
    await queryInterface.addIndex('curation_spot', ['curation_id', 'spot_id']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('curation_spot');
  },
};
