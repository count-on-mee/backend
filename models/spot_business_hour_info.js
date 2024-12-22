module.exports = function (sequelize, DataTypes) {
  const SpotBusinessHourInfo = sequelize.define(
    'SpotBusinessHourInfo',
    {
      spotBusinessHourInfoId: {
        field: 'spot_business_hour_info_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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
      summary: {
        type: DataTypes.STRING(256),
        allowNull: true,
      },
      info: {
        type: DataTypes.STRING(256),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'spot_business_hour_info',
      timestamps: false,
    }
  );

  SpotBusinessHourInfo.associate = function (models) {
    SpotBusinessHourInfo.belongsTo(models.Spot, {
      foreignKey: 'spot_id',
      as: 'spot',
    });
    SpotBusinessHourInfo.hasMany(models.SpotBusinessHour, {
      foreignKey: 'spot_business_hour_info_id',
      as: 'spotBusinessHour',
    });
  };

  return SpotBusinessHourInfo;
};
