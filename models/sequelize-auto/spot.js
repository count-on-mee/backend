const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spot', {
    spot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titile: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    addr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'spot',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "spot_id" },
        ]
      },
    ]
  });
};
