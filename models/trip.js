module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    'Trip',
    {
      tripId: {
        field: 'trip_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      destination: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      startDate: {
        field: 'start_date',
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        field: 'end_date',
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      tableName: 'trip',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  Trip.associate = function (models) {
    Trip.hasMany(models.TripItinerary, {
      foreignKey: 'trip_id',
    });
  };
  return Trip;
};
