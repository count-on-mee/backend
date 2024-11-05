const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const Spot = sequelize.define(
    'Spot',
    {
      spot_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tel: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      review_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      review_score: {
        type: DataTypes.DECIMAL(5, 3),
        allowNull: true,
      },
      naver_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      tableName: 'spot',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'spot_id' }],
        },
      ],
    }
  );
  return Spot;
};
