'use strict';

module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    'Trip',
    {
      tripId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      tableName: 'trip',
      timestamps: true,
      underscored: true,
    }
  );

  Trip.associate = (models) => {
    Trip.belongsToMany(models.User, {
      through: models.TripUser,
      foreignKey: 'tripId',
      otherKey: 'userId',
      as: 'participants',
    });

    Trip.belongsToMany(models.TripDestination, {
      through: models.TripDestinationRelation,
      foreignKey: 'tripId',
      otherKey: 'tripDestinationId',
      as: 'tripDestinations',
    });

    Trip.hasMany(models.TripItinerary, {
      foreignKey: 'tripId',
      sourceKey: 'tripId',
      as: 'itineraries',
    });
  };

  return Trip;
};
