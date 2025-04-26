'use strict';

module.exports = (sequelize, DataTypes) => {
  const SpotReviewImg = sequelize.define(
    'SpotReviewImg',
    {
      spotReviewImgId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      spotReviewId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot_review',
          key: 'spot_review_id',
        },
      },
      imgUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'spot_review_img',
      timestamps: false,
      underscored: true,
    }
  );

  SpotReviewImg.associate = (models) => {
    SpotReviewImg.belongsTo(models.SpotReview, {
      foreignKey: 'spotReviewId',
      targetKey: 'spotReviewId',
      as: 'spotReview',
    });
  };

  return SpotReviewImg;
};
