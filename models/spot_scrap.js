module.exports = function (sequelize, DataTypes) {
  const SpotScrap = sequelize.define(
    'SpotScrap',
    {
      spotScrapId: {
        field: 'spot_scrap_id',
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      spotId: {
        field: 'spot_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot',
          key: 'spot_id',
        },
      },
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
      },
      isDeleted: {
        field: 'is_deleted',
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: 'spot_scrap',
      timestamps: true,
    }
  );
  return SpotScrap;
};
