'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDocumentTask = sequelize.define(
    'TripDocumentTask',
    {
      tripDocumentTaskId: {
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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      task: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'trip_document_task',
      timestamps: true,
      underscored: true,
    }
  );

  TripDocumentTask.associate = (models) => {
    TripDocumentTask.belongsTo(models.TripDocument, {
      foreignKey: 'tripDocumentId',
      targetKey: 'tripDocumentId',
      as: 'tripDocument',
    });
  };

  return TripDocumentTask;
};
