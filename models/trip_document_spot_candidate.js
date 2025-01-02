module.exports = (sequelize, DataTypes) => {
  const TripDocumentSpotCandidate = sequelize.define(
    'TripDocumentSpotCandidate',
    {
      tripDocumentSpotCandidateId: {
        field: 'trip_document_spot_candidate_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tripDocumentId: {
        field: 'trip_document_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'trip_document',
          key: 'trip_document_id',
        },
        allowNull: false,
      },
      spotId: {
        field: 'spot_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'spot',
          key: 'spot_id',
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
      tableName: 'trip_document_spot_candidate',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  TripDocumentSpotCandidate.associate = function (models) {
    TripDocumentSpotCandidate.belongsTo(models.TripDocument, {
      foreignKey: 'trip_document_id',
      as: 'tripDocument',
    });
    TripDocumentSpotCandidate.hasMany(models.TripDocumentSpotCandidateComment, {
      foreignKey: 'trip_document_spot_candidate_id',
      as: 'tripDocumentSpotCandidateComment',
    });
  };

  return TripDocumentSpotCandidate;
};
