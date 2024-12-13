module.exports = (sequelize, DataTypes) => {
  const TripUser = sequelize.define(
    'TripUser',
    {
      tripUserId: {
        field: 'trip_user_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tripId: {
        field: 'trip_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'trip',
          key: 'trip_id',
        },
        allowNull: false,
      },
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'user_id',
        },
        allowNull: false,
      },
    },
    {
      tableName: 'trip_user',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  TripUser.associate = function (models) {
    TripUser.belongsTo(models.Trip, {
      foreignKey: 'trip_id',
      as: 'trip',
    });
    TripUser.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };

  return TripUser;
};
