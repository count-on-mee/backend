module.exports = (sequelize, DataTypes) => {
  const TripItinerary = sequelize.define(
    'TripItinerary',
    {
      tripItineraryId: {
        field: 'trip_itinerary_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tripId: {
        field: 'trip_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip',
          key: 'trip_id',
        },
      },
      spotId: {
        field: 'spot_id',
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
      timestamps: false,
    }
  );

  TripItinerary.associate = function (models) {
    TripItinerary.belongsTo(models.Trip, {
      foreignKey: 'trip_id',
    });
    TripItinerary.belongsTo(models.Spot, {
      foreignKey: 'spot_id',
    });
  };

  return TripItinerary;
};
