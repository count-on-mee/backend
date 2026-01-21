'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDocumentExpense = sequelize.define(
    'TripDocumentExpense',
    {
      tripDocumentExpenseId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tripDocumentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_document',
          key: 'trip_document_id',
        },
      },
      payUserId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      expenseCategory: {
        type: DataTypes.ENUM(
          'TRANSPORTATION',
          'ACCOMMODATION',
          'MEAL',
          'TOUR',
          'ACTIVITIES',
          'SHOPPING',
          'BUDGET'
        ),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      paymentMethod: {
        type: DataTypes.ENUM('CASH', 'CARD'),
        allowNull: false,
      },
      expenseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      expenseType: {
        type: DataTypes.ENUM('SHARED', 'PERSONAL'),
        allowNull: false,
      },
    },
    {
      tableName: 'trip_document_expense',
      timestamps: true,
      underscored: true,
    }
  );

  TripDocumentExpense.associate = (models) => {
    TripDocumentExpense.belongsTo(models.TripDocument, {
      foreignKey: 'tripDocumentId',
      targetKey: 'tripDocumentId',
      as: 'tripDocument',
    });

    TripDocumentExpense.belongsTo(models.User, {
      foreignKey: 'payUserId',
      targetKey: 'userId',
      as: 'payer',
    });

    TripDocumentExpense.hasMany(models.TripDocumentExpenseParticipant, {
      foreignKey: 'tripDocumentExpenseId',
      sourceKey: 'tripDocumentExpenseId',
      as: 'participants',
    });
  };

  return TripDocumentExpense;
};
