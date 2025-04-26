'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDestinationRelation = sequelize.define(
    'TripDestinationRelation',
    {
      tripDestinationRelationId: {
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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      tripDestinationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_destination',
          key: 'trip_destination_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      tableName: 'trip_destination_relation',
      timestamps: true,
      updatedAt: false,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ['trip_id', 'trip_destination_id'],
          name: 'uk_tripId_tripDestinationId',
        },
      ],
    }
  );

  return TripDestinationRelation;
};
