'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
      imgUrl: {
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

  User.associate = (models) => {
    User.belongsToMany(models.Trip, {
      through: models.TripUser,
      foreignKey: 'userId',
      otherKey: 'tripId',
      as: 'trips',
    });

    User.hasMany(models.Curation, {
      foreignKey: 'userId',
      sourceKey: 'userId',
      as: 'curations',
    });

    User.hasMany(models.SpotReview, {
      foreignKey: 'userId',
      sourceKey: 'userId',
      as: 'spotReviews',
    });

    User.hasMany(models.SpotScrap, {
      foreignKey: 'userId',
      sourceKey: 'userId',
      as: 'spotScraps',
    });

    User.hasMany(models.CurationScrap, {
      foreignKey: 'userId',
      sourceKey: 'userId',
      as: 'curationScraps',
    });

    User.hasMany(models.Inquiry, {
      foreignKey: 'userId',
      sourceKey: 'userId',
      as: 'inquiries',
    });
  };

  return User;
};
