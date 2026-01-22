'use strict';

module.exports = (sequelize, DataTypes) => {
  const KakaoSeedJob = sequelize.define(
    'KakaoSeedJob',
    {
      kakaoSeedJobId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      folderId: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      categoryLabel: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      lastRunAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'kakao_seed_job',
      timestamps: true,
      underscored: true,
    }
  );

  KakaoSeedJob.associate = (models) => {
    KakaoSeedJob.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'userId',
      as: 'user',
    });
  };

  return KakaoSeedJob;
};
