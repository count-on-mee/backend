'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spot_scrap', {
      spot_scrap_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
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
      is_deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

    // 복합 유니크 인덱스 추가
    await queryInterface.addIndex('spot_scrap', ['user_id', 'spot_id'], {
      unique: true,
      name: 'ux_userId_spotId',
      where: {
        is_deleted: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('spot_scrap');
  },
};
