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
      expenseType: {
        type: DataTypes.ENUM(
          'transportation',
          'accommodation',
          'meal',
          'other'
        ),
        allowNull: false,
      },
      expenseDetail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
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
  };

  return TripDocumentExpense;
};
