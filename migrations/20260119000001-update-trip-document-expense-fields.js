'use strict';

const TABLE = 'trip_document_expense';
const CATEGORY_ENUM = [
  'TRANSPORTATION',
  'ACCOMMODATION',
  'MEAL',
  'TOUR',
  'ACTIVITIES',
  'SHOPPING',
  'BUDGET',
];
const CATEGORY_ENUM_OLD = [
  'transportation',
  'accommodation',
  'meal',
  'other',
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. trip_document_expense 테이블 컬럼 리네임
    await queryInterface.renameColumn(TABLE, 'type', 'expense_category');
    await queryInterface.renameColumn(TABLE, 'detail', 'description');
    await queryInterface.renameColumn(TABLE, 'amount', 'total_amount');

    // 2. ENUM을 VARCHAR로 먼저 변경 (값 변환을 위해)
    await queryInterface.changeColumn(TABLE, 'expense_category', {
      type: Sequelize.STRING(255),
      allowNull: false,
    });

    // 3. ENUM 값들을 대문자로 정규화하고, 'other' 및 알 수 없는 값은 BUDGET으로 통일
    await queryInterface.sequelize.query(`
      UPDATE ${TABLE}
      SET expense_category = CASE expense_category
        WHEN 'transportation' THEN 'TRANSPORTATION'
        WHEN 'accommodation' THEN 'ACCOMMODATION'
        WHEN 'meal' THEN 'MEAL'
        WHEN 'tour' THEN 'TOUR'
        WHEN 'activities' THEN 'ACTIVITIES'
        WHEN 'shopping' THEN 'SHOPPING'
        WHEN 'budget' THEN 'BUDGET'
        WHEN 'other' THEN 'BUDGET'
        ELSE 'BUDGET'
      END
    `);

    // 4. expense_category를 새로운 ENUM 타입으로 변경
    await queryInterface.changeColumn(TABLE, 'expense_category', {
      type: Sequelize.ENUM(...CATEGORY_ENUM),
      allowNull: false,
    });

    // 4. 새 컬럼 추가 (nullable first)
    await queryInterface.addColumn(TABLE, 'payment_method', {
      type: Sequelize.ENUM('CASH', 'CARD'),
      allowNull: true,
    });

    await queryInterface.addColumn(TABLE, 'expense_date', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.addColumn(TABLE, 'expense_type', {
      type: Sequelize.ENUM('SHARED', 'PERSONAL'),
      allowNull: true,
    });

    // 5. pay_user_id 컬럼 추가 (FK to user) - payer_user_id가 아닌 pay_user_id로 직접 추가
    await queryInterface.addColumn(TABLE, 'pay_user_id', {
      type: Sequelize.UUID,
      allowNull: true,
    });

    // 5-1. pay_user_id 컬럼 타입을 user_id와 동일하게 변경 (CHAR(36) utf8mb4_bin)
    await queryInterface.sequelize.query(`
      ALTER TABLE \`${TABLE}\`
      MODIFY COLUMN \`pay_user_id\` CHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL
    `);

    // 5-2. 외래키 제약조건 추가
    await queryInterface.addConstraint(TABLE, {
      fields: ['pay_user_id'],
      type: 'foreign key',
      name: 'trip_document_expense_pay_user_id_foreign_idx',
      references: {
        table: 'user',
        field: 'user_id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    // 6. 새 컬럼들에 기본값 설정
    await queryInterface.sequelize.query(`
      UPDATE ${TABLE}
      SET
        payment_method = COALESCE(payment_method, 'CASH'),
        expense_type = COALESCE(expense_type, 'PERSONAL'),
        expense_date = COALESCE(expense_date, CURDATE())
    `);

    // 7. NOT NULL 제약조건 추가
    await queryInterface.changeColumn(TABLE, 'payment_method', {
      type: Sequelize.ENUM('CASH', 'CARD'),
      allowNull: false,
    });

    await queryInterface.changeColumn(TABLE, 'expense_date', {
      type: Sequelize.DATEONLY,
      allowNull: false,
    });

    await queryInterface.changeColumn(TABLE, 'expense_type', {
      type: Sequelize.ENUM('SHARED', 'PERSONAL'),
      allowNull: false,
    });

    // 8. trip_document_expense_participant 테이블 생성 (외래키는 나중에 추가)
    await queryInterface.createTable('trip_document_expense_participant', {
      trip_document_expense_participant_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      trip_document_expense_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      participant_user_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      shared_amount: {
        type: Sequelize.INTEGER,
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

    // 8-0. participant_user_id 컬럼 타입을 user_id와 동일하게 변경 (CHAR(36) utf8mb4_bin)
    await queryInterface.sequelize.query(`
      ALTER TABLE \`trip_document_expense_participant\`
      MODIFY COLUMN \`participant_user_id\` CHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
    `);

    // 8-1. 외래키 제약조건 추가
    await queryInterface.addConstraint('trip_document_expense_participant', {
      fields: ['trip_document_expense_id'],
      type: 'foreign key',
      name: 'trip_document_expense_participant_ibfk_1',
      references: {
        table: 'trip_document_expense',
        field: 'trip_document_expense_id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('trip_document_expense_participant', {
      fields: ['participant_user_id'],
      type: 'foreign key',
      name: 'trip_document_expense_participant_ibfk_2',
      references: {
        table: 'user',
        field: 'user_id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    // 9. trip_document_expense_participant 인덱스 추가
    await queryInterface.addIndex(
      'trip_document_expense_participant',
      ['trip_document_expense_id'],
      {
        name: 'idx_expense_participant_expense_id',
      }
    );

    await queryInterface.addIndex(
      'trip_document_expense_participant',
      ['participant_user_id'],
      {
        name: 'idx_expense_participant_user_id',
      }
    );

    // 10. 복합 유니크 인덱스 추가 (같은 지출에 같은 참가자가 중복되지 않도록)
    await queryInterface.addIndex(
      'trip_document_expense_participant',
      ['trip_document_expense_id', 'participant_user_id'],
      {
        unique: true,
        name: 'uk_expense_participant_expense_user',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    // 1. trip_document_expense_participant 테이블 삭제
    await queryInterface.dropTable('trip_document_expense_participant');

    // 2. trip_document_expense 새 컬럼 삭제
    await queryInterface.removeColumn(TABLE, 'pay_user_id');
    await queryInterface.removeColumn(TABLE, 'expense_type');
    await queryInterface.removeColumn(TABLE, 'expense_date');
    await queryInterface.removeColumn(TABLE, 'payment_method');

    // 3. ENUM 값들을 소문자로 되돌리고 새 카테고리를 "other"로 매핑
    await queryInterface.sequelize.query(`
      UPDATE ${TABLE}
      SET expense_category = CASE expense_category
        WHEN 'TRANSPORTATION' THEN 'transportation'
        WHEN 'ACCOMMODATION' THEN 'accommodation'
        WHEN 'MEAL' THEN 'meal'
        WHEN 'TOUR' THEN 'other'
        WHEN 'ACTIVITIES' THEN 'other'
        WHEN 'SHOPPING' THEN 'other'
        WHEN 'BUDGET' THEN 'other'
        ELSE 'other'
      END
    `);

    // 4. expense_category ENUM 타입 되돌리기
    await queryInterface.changeColumn(TABLE, 'expense_category', {
      type: Sequelize.ENUM(...CATEGORY_ENUM_OLD),
      allowNull: false,
    });

    // 5. 컬럼 이름 되돌리기
    await queryInterface.renameColumn(TABLE, 'expense_category', 'type');
    await queryInterface.renameColumn(TABLE, 'description', 'detail');
    await queryInterface.renameColumn(TABLE, 'total_amount', 'amount');
  },
};
