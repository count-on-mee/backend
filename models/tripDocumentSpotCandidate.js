'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDocumentSpotCandidate = sequelize.define(
    'TripDocumentSpotCandidate',
    {
      tripDocumentSpotCandidateId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tripDocumentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_document',
          key: 'trip_document_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
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
      tableName: 'trip_document_spot_candidate',
      timestamps: true,
      underscored: true,
    }
  );

  TripDocumentSpotCandidate.associate = (models) => {
    TripDocumentSpotCandidate.belongsTo(models.TripDocument, {
      foreignKey: 'tripDocumentId',
      targetKey: 'tripDocumentId',
      as: 'tripDocument',
    });

    TripDocumentSpotCandidate.hasMany(models.TripDocumentSpotCandidateComment, {
      foreignKey: 'tripDocumentSpotCandidateId',
      sourceKey: 'tripDocumentSpotCandidateId',
      as: 'comments',
    });

    TripDocumentSpotCandidate.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'userId',
      as: 'user',
    });
  };

  return TripDocumentSpotCandidate;
};
