'use strict';

module.exports = (sequelize, DataTypes) => {
  const CurationSpot = sequelize.define(
    'CurationSpot',
    {
      curationSpotId: {
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
      },
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: 'curation_spot',
      timestamps: true,
      underscored: true,
    }
  );

  CurationSpot.associate = (models) => {
    CurationSpot.belongsTo(models.Curation, {
      foreignKey: 'curationId',
      targetKey: 'curationId',
      as: 'curation',
    });

    CurationSpot.belongsTo(models.Spot, {
      foreignKey: 'spotId',
      targetKey: 'spotId',
      as: 'spot',
    });
  };

  return CurationSpot;
};
