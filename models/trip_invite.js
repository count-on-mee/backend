module.exports = (sequelize, DataTypes) => {
  const TripInvite = sequelize.define(
    'TripInvite',
    {
      tripInviteId: {
        field: 'trip_invite_id',
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
      inviteCode: {
        field: 'invite_code',
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'trip_invite',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  TripInvite.associate = function (models) {
    TripInvite.belongsTo(models.Trip, {
      foreignKey: 'trip_id',
      as: 'trip',
    });
  };

  return TripInvite;
};
