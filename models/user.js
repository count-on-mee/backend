module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      profile_img_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      oauth_provider: {
        type: DataTypes.ENUM('google', 'kakao', 'naver'),
        allowNull: false,
      },
      oauth_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: 'user',
      timestamps: true,
      indexes: [
        {
          name: 'unique_oauth_provider_oauth_id',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'oauth_provider' }, { name: 'oauth_id' }],
        },
      ],
    }
  );
  return User;
};
