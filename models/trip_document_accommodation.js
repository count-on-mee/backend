module.exports = (sequelize, DataTypes) => {
  const TripDocumentAccommodation = sequelize.define(
    'TripDocumentAccommodation',
    {
      tripDocumentAccommodationId: {
        field: 'trip_document_accommodation_id',
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
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      pricePerNight: {
        field: 'price_per_night',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      additionalFee: {
        field: 'additional_fee',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      distanceFromStation: {
        field: 'distance_from_station',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      etc: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'trip_document_accommodation',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
    }
  );

  TripDocumentAccommodation.associate = function (models) {
    TripDocumentAccommodation.belongsTo(models.TripDocument, {
      foreignKey: 'trip_document_id',
      as: 'tripDocument',
    });
  };

  return TripDocumentAccommodation;
};
