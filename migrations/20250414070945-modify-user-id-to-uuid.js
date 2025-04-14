'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // 기존 테이블 삭제
    await queryInterface.dropTable('user');

    // UUID 컬럼으로 테이블 재생성
    await queryInterface.createTable('user', {
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      nickname: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      profile_img_url: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      oauth_provider: {
        type: Sequelize.ENUM('google', 'naver', 'kakao'),
        allowNull: false,
      },
      oauth_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
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

    // 인덱스 생성
    await queryInterface.addIndex('user', ['oauth_provider', 'oauth_id'], {
      unique: true,
      name: 'uk_oauth_provider_oauth_id',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
    await queryInterface.createTable('user', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      nickname: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      profile_img_url: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      oauth_provider: {
        type: Sequelize.ENUM('google', 'naver', 'kakao'),
        allowNull: false,
      },
      oauth_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
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
  },
};
