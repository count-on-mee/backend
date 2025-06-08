'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // 외래 키 제약 조건 삭제
    await queryInterface.removeConstraint(
      'trip_document_spot_candidate',
      'trip_document_spot_candidate_ibfk_1'
    );
    await queryInterface.removeConstraint(
      'trip_document_spot_candidate',
      'trip_document_spot_candidate_ibfk_2'
    );
    await queryInterface.removeConstraint(
      'trip_document_spot_candidate',
      'trip_document_spot_candidate_ibfk_3'
    );

    // 인덱스 삭제
    await queryInterface.removeIndex('trip_document_spot_candidate', [
      'trip_document_id',
    ]);
    await queryInterface.removeIndex('trip_document_spot_candidate', [
      'spot_id',
    ]);
    await queryInterface.removeIndex('trip_document_spot_candidate', [
      'user_id',
    ]);

    // 테이블 삭제
    await queryInterface.dropTable('trip_document_spot_candidate');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('trip_document_spot_candidate', {
      trip_document_spot_candidate_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      trip_document_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_document',
          key: 'trip_document_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      spot_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
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

    // 인덱스 재생성
    await queryInterface.addIndex('trip_document_spot_candidate', [
      'trip_document_id',
    ]);
    await queryInterface.addIndex('trip_document_spot_candidate', ['spot_id']);
    await queryInterface.addIndex('trip_document_spot_candidate', ['user_id']);
  },
};
