module.exports = function (sequelize, DataTypes) {
  const SpotBusinessHour = sequelize.define(
    'SpotBusinessHour',
    {
      spotBusinessHourId: {
        field: 'spot_business_hour_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      spotBusinessHourInfoId: {
        field: 'spot_business_hour_info_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot_business_hour_info',
          key: 'spot_business_hour_info_id',
        },
      },
      week: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      openTime: {
        field: 'open_time',
        type: DataTypes.TIME,
        allowNull: true,
      },
      closeTime: {
        field: 'close_time',
        type: DataTypes.TIME,
        allowNull: true,
      },
      breakStartTime: {
        field: 'break_start_time',
        type: DataTypes.TIME,
        allowNull: true,
      },
      breakEndTime: {
        field: 'break_end_time',
        type: DataTypes.TIME,
        allowNull: true,
      },
      lastOrder: {
        field: 'last_order',
        type: DataTypes.TIME,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'spot_business_hour',
      timestamps: false,
    }
  );

  SpotBusinessHour.associate = function (models) {
    SpotBusinessHour.belongsTo(models.SpotBusinessHourInfo, {
      foreignKey: 'spot_business_hour_info_id',
      as: 'spotBusinessHourInfo',
    });
  };

  return SpotBusinessHour;
};
