'use strict';

module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    'Spot',
    {
      spotId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.GEOMETRY('POINT', 4326),
        allowNull: false,
        get() {
          const point = this.getDataValue('location');
          return point
            ? {
                longitude: point.coordinates[0],
                latitude: point.coordinates[1],
              }
            : null;
        },
        set(value) {
          this.setDataValue('location', {
            type: 'Point',
            coordinates: [value.longitude, value.latitude],
            crs: { type: 'name', properties: { name: 'EPSG:4326' } },
          });
        },
      },
      naverSpotId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
      reviewCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      reviewScore: {
        type: DataTypes.DECIMAL(5, 3),
        allowNull: true,
      },
    },
    {
      tableName: 'spot',
      timestamps: false,
      underscored: true,
    }
  );

  Spot.associate = (models) => {
    Spot.belongsToMany(models.SpotCategory, {
      through: models.SpotCategoryRelation,
      foreignKey: 'spotId',
      otherKey: 'spotCategoryId',
      as: 'spotCategories',
    });

    Spot.hasMany(models.SpotImg, {
      foreignKey: 'spotId',
      sourceKey: 'spotId',
      as: 'spotImgs',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    Spot.hasMany(models.SpotScrap, {
      foreignKey: 'spotId',
      sourceKey: 'spotId',
      as: 'spotScraps',
    });
  };

  return Spot;
};
