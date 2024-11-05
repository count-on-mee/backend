const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const SpotCategory = sequelize.define(
    'SpotCategory',
    {
      spot_category_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'spot_category',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'spot_category_id' }],
        },
      ],
    }
  );
  return SpotCategory;
};
