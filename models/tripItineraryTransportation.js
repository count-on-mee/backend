'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripItineraryTransportation = sequelize.define(
    'TripItineraryTransportation',
    {
      tripItineraryTransportationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      departureTripItineraryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_itinerary',
          key: 'trip_itinerary_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      destinationTripItineraryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_itinerary',
          key: 'trip_itinerary_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      type: {
        type: DataTypes.ENUM(
          'WALK',
          'BUS',
          'SUBWAY',
          'TAXI',
          'CAR',
          'TRAIN',
          'PLANE',
          'OTHER'
        ),
        allowNull: false,
      },
      distanceKilometer: {
        type: DataTypes.DECIMAL(10, 1),
        allowNull: false,
      },
      durationMinute: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'trip_itinerary_transportation',
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: [
            'departure_trip_itinerary_id',
            'destination_trip_itinerary_id',
          ],
          name: 'uk_departure_destination',
        },
      ],
    }
  );

  return TripItineraryTransportation;
};
