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
        type: DataTypes.STRING(300),
        allowNull: true,
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
    },
    {
      sequelize,
      tableName: 'spot_business_hour',
      timestamps: false,
    }
  );
  return SpotBusinessHour;
};
