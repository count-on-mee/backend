'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nickname_word', {
      nickname_word_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      word: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM('adjective', 'noun'),
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

    // 조회 성능 향상을 위한 인덱스 추가
    await queryInterface.addIndex('nickname_word', ['type'], {
      name: 'idx_nickname_word_type',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('nickname_word');
  },
};
