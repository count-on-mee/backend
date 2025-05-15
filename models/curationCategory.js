'use strict';

module.exports = (sequelize, DataTypes) => {
  const CurationCategory = sequelize.define(
    'CurationCategory',
    {
      curationCategoryId: {
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
    },
    {
      tableName: 'curation_category',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ['type'],
          name: 'uk_type',
        },
      ],
    }
  );

  CurationCategory.associate = (models) => {
    CurationCategory.belongsToMany(models.Curation, {
      through: models.CurationCategoryRelation,
      foreignKey: 'curationCategoryId',
      otherKey: 'curationId',
      as: 'curations',
    });
  };

  return CurationCategory;
};
