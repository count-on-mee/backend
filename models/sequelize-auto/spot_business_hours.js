const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spot_business_hours', {
    spot_business_hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    spot_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'spot',
        key: 'spot_id'
      }
    },
    week: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    open_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    close_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    break_start_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    break_end_time: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'spot_business_hours',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "spot_business_hours" },
        ]
      },
      {
        name: "spot_id_idx",
        using: "BTREE",
        fields: [
          { name: "spot_id" },
        ]
      },
    ]
  });
};
