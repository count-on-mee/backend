'use strict';

module.exports = (sequelize, DataTypes) => {
  const SpotReview = sequelize.define(
    'SpotReview',
    {
      spotReviewId: {
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
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'spot_review',
      timestamps: true,
      underscored: true,
    }
  );

  SpotReview.associate = (models) => {
    SpotReview.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'userId',
      as: 'user',
    });

    SpotReview.belongsTo(models.Spot, {
      foreignKey: 'spotId',
      targetKey: 'spotId',
      as: 'spot',
    });

    SpotReview.hasMany(models.SpotReviewImg, {
      foreignKey: 'spotReviewId',
      sourceKey: 'spotReviewId',
      as: 'spotReviewImgs',
    });
  };

  return SpotReview;
};
