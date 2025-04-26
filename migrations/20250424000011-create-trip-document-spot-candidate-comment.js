'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trip_document_spot_candidate_comment', {
      trip_document_spot_candidate_comment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      trip_document_spot_candidate_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_document_spot_candidate',
          key: 'trip_document_spot_candidate_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      comment: {
        type: Sequelize.STRING,
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

    // 성능 향상을 위한 인덱스 추가
    await queryInterface.addIndex(
      'trip_document_spot_candidate_comment',
      ['trip_document_spot_candidate_id'],
      {
        name: 'idx_trip_document_spot_candidate_id',
      }
    );
    await queryInterface.addIndex(
      'trip_document_spot_candidate_comment',
      ['user_id'],
      {
        name: 'idx_user_id',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trip_document_spot_candidate_comment');
  },
};
