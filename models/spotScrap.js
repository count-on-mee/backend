'use strict';

module.exports = (sequelize, DataTypes) => {
  const SpotScrap = sequelize.define(
    'SpotScrap',
    {
      spotScrapId: {
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
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: 'spot_scrap',
      timestamps: true,
      underscored: true,
    }
  );

  SpotScrap.associate = (models) => {
    SpotScrap.belongsTo(models.Spot, {
      foreignKey: 'spotId',
      targetKey: 'spotId',
      as: 'spot',
    });
  };

  return SpotScrap;
};
