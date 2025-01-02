module.exports = (sequelize, DataTypes) => {
  const TripDocumentTask = sequelize.define(
    'TripDocumentTask',
    {
      tripDocumentTaskId: {
        field: 'trip_document_task_id',
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
      title: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      isCompleted: {
        field: 'is_completed',
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'trip_document_task',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  TripDocumentTask.associate = function (models) {
    TripDocumentTask.belongsTo(models.TripDocument, {
      foreignKey: 'trip_document_id',
      as: 'tripDocument',
    });
  };

  return TripDocumentTask;
};
