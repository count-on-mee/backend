'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDocumentExpenseParticipant = sequelize.define(
    'TripDocumentExpenseParticipant',
    {
      tripDocumentExpenseParticipantId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tripDocumentExpenseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_document_expense',
          key: 'trip_document_expense_id',
        },
      },
      participantUserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      sharedAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'trip_document_expense_participant',
      timestamps: true,
      underscored: true,
    }
  );

  TripDocumentExpenseParticipant.associate = (models) => {
    TripDocumentExpenseParticipant.belongsTo(models.TripDocumentExpense, {
      foreignKey: 'tripDocumentExpenseId',
      targetKey: 'tripDocumentExpenseId',
      as: 'expense',
    });

    TripDocumentExpenseParticipant.belongsTo(models.User, {
      foreignKey: 'participantUserId',
      targetKey: 'userId',
      as: 'participant',
    });
  };

  return TripDocumentExpenseParticipant;
};
