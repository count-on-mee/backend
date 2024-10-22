const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spot_img', {
    spot_img_id: {
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
    img_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'spot_img',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "spot_img_id" },
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
