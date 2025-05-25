'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripInvitation = sequelize.define(
    'TripInvitation',
    {
      tripInvitationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tripId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'trip',
          key: 'trip_id',
        },
      },
      invitationCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'trip_invitation',
      timestamps: true,
      updatedAt: false,
      underscored: true,
    }
  );

  TripInvitation.associate = (models) => {
    TripInvitation.belongsTo(models.Trip, {
      foreignKey: 'tripId',
      targetKey: 'tripId',
      as: 'trip',
    });
  };

  return TripInvitation;
};
