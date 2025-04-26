'use strict';

module.exports = (sequelize, DataTypes) => {
  const TripDocumentSpotCandidateComment = sequelize.define(
    'TripDocumentSpotCandidateComment',
    {
      tripDocumentSpotCandidateCommentId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      tripDocumentSpotCandidateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trip_document_spot_candidate',
          key: 'trip_document_spot_candidate_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'trip_document_spot_candidate_comment',
      timestamps: true,
      underscored: true,
    }
  );

  TripDocumentSpotCandidateComment.associate = (models) => {
    TripDocumentSpotCandidateComment.belongsTo(
      models.TripDocumentSpotCandidate,
      {
        foreignKey: 'tripDocumentSpotCandidateId',
        targetKey: 'tripDocumentSpotCandidateId',
        as: 'spotCandidate',
      }
    );

    TripDocumentSpotCandidateComment.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'userId',
      as: 'author',
    });
  };

  return TripDocumentSpotCandidateComment;
};
