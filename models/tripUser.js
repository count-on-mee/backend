'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripUser = sequelize.define(
    'TripUser',
    {
      tripUserId: {
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
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
    },
    {
      tableName: 'trip_user',
      timestamps: true,
      underscored: true,
    }
  );

  return TripUser;
};
