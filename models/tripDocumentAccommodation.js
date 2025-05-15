'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDocumentAccommodation = sequelize.define(
    'TripDocumentAccommodation',
    {
      tripDocumentAccommodationId: {
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
      accommodation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      checkInDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      checkOutDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      memo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'trip_document_accommodation',
      timestamps: true,
      underscored: true,
    }
  );

  TripDocumentAccommodation.associate = (models) => {
    TripDocumentAccommodation.belongsTo(models.TripDocument, {
      foreignKey: 'tripDocumentId',
      targetKey: 'tripDocumentId',
      as: 'tripDocument',
    });
  };

  return TripDocumentAccommodation;
};
