const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define(
    'user',
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      profile_img_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      oauth_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      tableName: 'user',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'user_id' }],
        },
      ],
    }
  );
  return user;
};
