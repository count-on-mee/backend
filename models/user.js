'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      profileImgUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      oauthProvider: {
        type: DataTypes.ENUM('google', 'naver', 'kakao'),
        allowNull: false,
      },
      oauthId: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: 'user',
      timestamps: true,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ['oauth_provider', 'oauth_id'],
          name: 'uk_oauth_provider_oauth_id',
        },
      ],
    }
  );

  return User;
};
