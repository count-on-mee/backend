'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDestination = sequelize.define(
    'TripDestination',
    {
      tripDestinationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'trip_destination',
      timestamps: true,
      underscored: true,
    }
  );

  return TripDestination;
};
