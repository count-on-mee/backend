'use strict';

module.exports = (sequelize, DataTypes) => {
  const CurationScrap = sequelize.define(
    'CurationScrap',
    {
      curationScrapId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      curationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'curation',
          key: 'curation_id',
        },
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'curation_scrap',
      timestamps: true,
      underscored: true,
    }
  );

  CurationScrap.associate = (models) => {
    CurationScrap.belongsTo(models.Curation, {
      foreignKey: 'curationId',
      targetKey: 'curationId',
      as: 'curation',
    });
  };

  return CurationScrap;
};
