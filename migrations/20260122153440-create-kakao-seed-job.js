'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kakao_seed_job', {
      kakao_seed_job_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      folder_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      category_label: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: true,
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

    // user_id 컬럼 타입을 user_id와 동일하게 변경 (CHAR(36) utf8mb4_bin)
    await queryInterface.sequelize.query(`
      ALTER TABLE \`kakao_seed_job\`
      MODIFY COLUMN \`user_id\` CHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL
    `);

    // 외래키 제약조건 추가
    await queryInterface.addConstraint('kakao_seed_job', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'kakao_seed_job_user_id_foreign_idx',
      references: {
        table: 'user',
        field: 'user_id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    // folder_id에 인덱스 추가 (조회 성능 향상)
    await queryInterface.addIndex('kakao_seed_job', ['folder_id'], {
      name: 'idx_kakao_seed_job_folder_id',
    });

    // user_id에 인덱스 추가 (조회 성능 향상)
    await queryInterface.addIndex('kakao_seed_job', ['user_id'], {
      name: 'idx_kakao_seed_job_user_id',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kakao_seed_job');
  },
};
