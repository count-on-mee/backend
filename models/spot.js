module.exports = function (sequelize, DataTypes) {
  const Spot = sequelize.define(
    'Spot',
    {
      spotId: {
        field: 'spot_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tel: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      location: {
        type: DataTypes.GEOMETRY('POINT', 4326),
        allowNull: false,
      },
      naverSpotId: {
        field: 'naver_spot_id',
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true,
      },
      reviewCount: {
        field: 'review_count',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reviewScore: {
        field: 'review_score',
        type: DataTypes.DECIMAL(5, 3),
        allowNull: true,
      },
      tripId: {
        field: 'trip_id',
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Trip',
          key: 'trip_id',
        },
      },
    },
    {
      tableName: 'spot',
      timestamps: false,
      indexes: [
        {
          fields: ['location'],
          type: 'SPATIAL',
          name: 'spot_location_idx',
        },
      ],
      hooks: {
        beforeCreate: async (spot, options) => {
          if (spot.location && spot.location.coordinates) {
            spot.location = sequelize.fn(
              'ST_GeomFromText',
              `POINT(${spot.location.coordinates[0]} ${spot.location.coordinates[1]})`,
              4326
            );
          }
        },
      },
    }
  );

  Spot.associate = function (models) {
    Spot.hasMany(models.SpotCategoryRelation, {
      foreignKey: 'spot_id',
    });
    Spot.hasMany(models.SpotImg, {
      foreignKey: 'spot_id',
      as: 'spotImg',
    });
    Spot.hasMany(models.CurationSpot, {
      foreignKey: 'spot_id',
    });
    Spot.hasOne(models.SpotBusinessHourInfo, {
      foreignKey: 'spot_id',
      as: 'spotBusinessHourInfo',
    });
    Spot.belongsToMany(models.SpotCategory, {
      through: models.SpotCategoryRelation,
      foreignKey: 'spot_id',
      otherKey: 'spot_category_id',
    });
    Spot.hasMany(models.TripItinerary, {
      foreignKey: 'spot_id',
    });
    Spot.hasMany(models.SpotPhotoDump, {
      foreignKey: 'spot_id',
    });
  };

  return Spot;
};
