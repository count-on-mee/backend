'use strict';

module.exports = (sequelize, DataTypes) => {
  const SpotImg = sequelize.define(
    'SpotImg',
    {
      spotImgId: {
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
      imgUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'spot_img',
      timestamps: false,
      underscored: true,
    }
  );

  SpotImg.associate = (models) => {
    SpotImg.belongsTo(models.Spot, {
      foreignKey: 'spotId',
      targetKey: 'spotId',
      as: 'spot',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return SpotImg;
};
