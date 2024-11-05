const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const SpotImg = sequelize.define(
    'spot_img',
    {
      spot_img_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      spot_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      img_url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'spot_img',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'spot_img_id' }],
        },
        {
          name: 'spot_img_spot_id_idx',
          using: 'BTREE',
          fields: [{ name: 'spot_id' }],
        },
      ],
    }
  );
  return SpotImg;
};
