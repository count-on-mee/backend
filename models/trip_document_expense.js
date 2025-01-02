module.exports = (sequelize, DataTypes) => {
  const TripDocumentExpense = sequelize.define(
    'TripDocumentExpense',
    {
      tripDocumentExpenseId: {
        field: 'trip_document_expense_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tripDocumentId: {
        field: 'trip_document_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'trip_document',
          key: 'trip_document_id',
        },
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(50),
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
      createdAt: 'created_at',
      updatedAt: false,
    }
  );

  TripDocumentExpense.associate = function (models) {
    TripDocumentExpense.belongsTo(models.TripDocument, {
      foreignKey: 'trip_document_id',
      as: 'tripDocument',
    });
  };

  return TripDocumentExpense;
};
