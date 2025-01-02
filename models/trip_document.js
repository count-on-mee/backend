module.exports = (sequelize, DataTypes) => {
  const TripDocument = sequelize.define(
    'TripDocument',
    {
      tripDocumentId: {
        field: 'trip_document_id',
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
    },
    {
      tableName: 'trip_document',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  TripDocument.associate = function (models) {
    TripDocument.belongsTo(models.Trip, {
      foreignKey: 'trip_id',
      as: 'trip',
    });
    TripDocument.hasMany(models.TripDocumentExpense, {
      foreignKey: 'trip_document_id',
      as: 'tripDocumentExpense',
    });
    TripDocument.hasMany(models.TripDocumentAccommodation, {
      foreignKey: 'trip_document_id',
      as: 'tripDocumentAccommodation',
    });
    TripDocument.hasMany(models.TripDocumentTask, {
      foreignKey: 'trip_document_id',
      as: 'tripDocumentTask',
    });
    TripDocument.hasMany(models.TripDocumentSpotCandidate, {
      foreignKey: 'trip_document_id',
      as: 'tripDocumentSpotCandidate',
    });
  };

  return TripDocument;
};
