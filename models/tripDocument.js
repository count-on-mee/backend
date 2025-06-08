'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDocument = sequelize.define(
    'TripDocument',
    {
      tripDocumentId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tripId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip',
          key: 'trip_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      tableName: 'trip_document',
      timestamps: true,
      underscored: true,
    }
  );

  TripDocument.associate = function (models) {
    TripDocument.belongsTo(models.Trip, {
      foreignKey: 'tripId',
      targetKey: 'tripId',
      as: 'trip',
    });

    TripDocument.hasMany(models.TripDocumentExpense, {
      foreignKey: 'tripDocumentId',
      sourceKey: 'tripDocumentId',
      as: 'expenses',
    });

    TripDocument.hasMany(models.TripDocumentAccommodation, {
      foreignKey: 'tripDocumentId',
      sourceKey: 'tripDocumentId',
      as: 'accommodations',
    });

    TripDocument.hasMany(models.TripDocumentTask, {
      foreignKey: 'tripDocumentId',
      sourceKey: 'tripDocumentId',
      as: 'tasks',
    });
  };

  return TripDocument;
};
