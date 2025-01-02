module.exports = (sequelize, DataTypes) => {
  const TripDocumentSpotCandidateComment = sequelize.define(
    'TripDocumentSpotCandidateComment',
    {
      tripDocumentSpotCandidateCommentId: {
        field: 'trip_document_spot_candidate_comment_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tripDocumentSpotCandidateId: {
        field: 'trip_document_spot_candidate_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'trip_document_spot_candidate',
          key: 'trip_document_spot_candidate_id',
        },
        allowNull: false,
      },
      comment: {
        field: 'comment',
        type: DataTypes.TEXT,
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
      tableName: 'trip_document_spot_candidate_comment',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  TripDocumentSpotCandidateComment.associate = function (models) {
    TripDocumentSpotCandidateComment.belongsTo(
      models.TripDocumentSpotCandidate,
      {
        foreignKey: 'trip_document_spot_candidate_id',
        as: 'tripDocumentSpotCandidate',
      }
    );
    TripDocumentSpotCandidateComment.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  };

  return TripDocumentSpotCandidateComment;
};
