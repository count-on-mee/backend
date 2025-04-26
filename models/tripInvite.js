'use strict';

const { up } = require('../migrations/20250423000013-create-curation-category');

module.exports = (sequelize, DataTypes) => {
  const TripInvite = sequelize.define(
    'TripInvite',
    {
      tripInviteId: {
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
      inviteCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'trip_invite',
      timestamps: true,
      updatedAt: false,
      underscored: true,
    }
  );

  TripInvite.associate = (models) => {
    TripInvite.belongsTo(models.Trip, {
      foreignKey: 'tripId',
      targetKey: 'tripId',
      as: 'trip',
    });
  };

  return TripInvite;
};
