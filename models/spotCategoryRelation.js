'use strict';

module.exports = (sequelize, DataTypes) => {
  const SpotCategoryRelation = sequelize.define(
    'SpotCategoryRelation',
    {
      spotCategoryRelationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      spotCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot_category',
          key: 'spot_category_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      tableName: 'spot_category_relation',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ['spot_id', 'spot_category_id'],
          name: 'uk_spotId_spotCategoryId',
        },
      ],
    }
  );

  SpotCategoryRelation.associate = (models) => {
    SpotCategoryRelation.belongsTo(models.Spot, {
      foreignKey: 'spotId',
      targetKey: 'spotId',
    });

    SpotCategoryRelation.belongsTo(models.SpotCategory, {
      foreignKey: 'spotCategoryId',
      targetKey: 'spotCategoryId',
    });
  };

  return SpotCategoryRelation;
};
