'use strict';

const VERSION_TABLE = 'trip_document_version';
const DOCUMENT_TABLE = 'trip_document';
const EXPENSE_TABLE = 'trip_document_expense';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(VERSION_TABLE, {
      trip_document_version_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      trip_document_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: DOCUMENT_TABLE,
          key: 'trip_document_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      version_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reason: {
        type: Sequelize.ENUM(
          'INITIAL',
          'INTERIM_SETTLEMENT',
          'PARTICIPANT_LEFT'
        ),
        allowNull: false,
      },
      created_by_user_id: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      based_on_version_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: VERSION_TABLE,
          key: 'trip_document_version_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      participant_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      participant_user_ids: {
        type: Sequelize.JSON,
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

    await queryInterface.addIndex(VERSION_TABLE, ['trip_document_id'], {
      name: 'idx_trip_document_version_document_id',
    });

    await queryInterface.addIndex(VERSION_TABLE, ['trip_document_id', 'version_number'], {
      unique: true,
      name: 'uk_trip_document_version_document_version_number',
    });

    // created_by_user_id를 user_id와 동일 타입(CHAR(36) utf8mb4_bin)으로 맞춤
    await queryInterface.sequelize.query(`
      ALTER TABLE \`${VERSION_TABLE}\`
      MODIFY COLUMN \`created_by_user_id\` CHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL
    `);

    await queryInterface.addConstraint(VERSION_TABLE, {
      fields: ['created_by_user_id'],
      type: 'foreign key',
      name: 'trip_document_version_created_by_user_id_foreign_idx',
      references: {
        table: 'user',
        field: 'user_id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    // TripDocument.active_version_id 추가
    await queryInterface.addColumn(DOCUMENT_TABLE, 'active_version_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addConstraint(DOCUMENT_TABLE, {
      fields: ['active_version_id'],
      type: 'foreign key',
      name: 'trip_document_active_version_id_foreign_idx',
      references: {
        table: VERSION_TABLE,
        field: 'trip_document_version_id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addIndex(DOCUMENT_TABLE, ['active_version_id'], {
      name: 'idx_trip_document_active_version_id',
    });

    // expense에 trip_document_version_id 추가 + backfill
    await queryInterface.addColumn(EXPENSE_TABLE, 'trip_document_version_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addConstraint(EXPENSE_TABLE, {
      fields: ['trip_document_version_id'],
      type: 'foreign key',
      name: 'trip_document_expense_version_id_foreign_idx',
      references: {
        table: VERSION_TABLE,
        field: 'trip_document_version_id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addIndex(EXPENSE_TABLE, ['trip_document_version_id'], {
      name: 'idx_trip_document_expense_version_id',
    });

    // 기존 TripDocument마다 version1 생성
    await queryInterface.sequelize.query(`
      INSERT INTO \`${VERSION_TABLE}\`
        (trip_document_id, version_number, reason, participant_count, created_at, updated_at)
      SELECT
        trip_document_id, 1, 'INITIAL', participant_count, NOW(), NOW()
      FROM \`${DOCUMENT_TABLE}\`
    `);

    // TripDocument.active_version_id 세팅
    await queryInterface.sequelize.query(`
      UPDATE \`${DOCUMENT_TABLE}\` d
      JOIN \`${VERSION_TABLE}\` v
        ON v.trip_document_id = d.trip_document_id
       AND v.version_number = 1
      SET d.active_version_id = v.trip_document_version_id
    `);

    // 기존 expense를 version1에 매핑
    await queryInterface.sequelize.query(`
      UPDATE \`${EXPENSE_TABLE}\` e
      JOIN \`${VERSION_TABLE}\` v
        ON v.trip_document_id = e.trip_document_id
       AND v.version_number = 1
      SET e.trip_document_version_id = v.trip_document_version_id
    `);

    // NOT NULL로 변경
    await queryInterface.changeColumn(EXPENSE_TABLE, 'trip_document_version_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // expense 컬럼/제약 제거
    await queryInterface.removeConstraint(
      EXPENSE_TABLE,
      'trip_document_expense_version_id_foreign_idx'
    );
    await queryInterface.removeIndex(EXPENSE_TABLE, 'idx_trip_document_expense_version_id');
    await queryInterface.removeColumn(EXPENSE_TABLE, 'trip_document_version_id');

    // TripDocument.active_version_id 제거
    await queryInterface.removeConstraint(
      DOCUMENT_TABLE,
      'trip_document_active_version_id_foreign_idx'
    );
    await queryInterface.removeIndex(DOCUMENT_TABLE, 'idx_trip_document_active_version_id');
    await queryInterface.removeColumn(DOCUMENT_TABLE, 'active_version_id');

    // version 테이블 제거
    await queryInterface.dropTable(VERSION_TABLE);
  },
};

