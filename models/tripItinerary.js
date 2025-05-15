'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripItinerary = sequelize.define(
    'TripItinerary',
    {
      tripItineraryId: {
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
      },
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'trip_itinerary',
      timestamps: true,
      underscored: true,
    }
  );

  TripItinerary.associate = (models) => {
    TripItinerary.belongsTo(models.Spot, {
      foreignKey: 'spotId',
      sourceKey: 'spotId',
      as: 'spot',
    });
  };

  return TripItinerary;
};
