'use strict';

module.exports = (sequelize, DataTypes) => {
  const CurationCategoryRelation = sequelize.define(
    'CurationCategoryRelation',
    {
      curationCategoryRelationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      curationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'curation',
          key: 'curation_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      curationCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'curation_category',
          key: 'curation_category_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      tableName: 'curation_category_relation',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ['curation_id', 'curation_category_id'],
          name: 'uk_curationId_curationCategoryId',
        },
      ],
    }
  );
  
  return CurationCategoryRelation;
};
