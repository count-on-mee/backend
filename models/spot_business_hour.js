const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const SpotBusinessHour = sequelize.define(
    'spot_business_hour',
    {
      spot_business_hour_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      spot_id: {
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
      open_time: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      close_time: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      break_start_time: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      break_end_time: {
        type: DataTypes.TIME,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'spot_business_hour',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'spot_business_hour' }],
        },
        {
          name: 'spot_business_hour_spot_id_idx',
          using: 'BTREE',
          fields: [{ name: 'spot_id' }],
        },
      ],
    }
  );
  return SpotBusinessHour;
};
