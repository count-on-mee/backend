'use strict';

module.exports = (sequelize, DataTypes) => {
  const SpotCategory = sequelize.define(
    'SpotCategory',
    {
      spotCategoryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      parentSpotCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'spot_category',
          key: 'spot_category_id',
        },
      },
    },
    {
      tableName: 'spot_category',
      timestamps: false,
      underscored: true,
    }
  );

  SpotCategory.associate = (models) => {
    SpotCategory.belongsToMany(models.Spot, {
      through: models.SpotCategoryRelation,
      foreignKey: 'spotCategoryId',
      otherKey: 'spotId',
      as: 'spots',
    });

    SpotCategory.hasMany(models.SpotCategory, {
      foreignKey: 'parentSpotCategoryId',
      sourceKey: 'spotCategoryId',
      as: 'childSpotCategories',
    });

    SpotCategory.belongsTo(models.SpotCategory, {
      foreignKey: 'spotCategoryId',
      targetKey: 'parentSpotCategoryId',
      as: 'parentSpotCategory',
    });
  };

  return SpotCategory;
};
