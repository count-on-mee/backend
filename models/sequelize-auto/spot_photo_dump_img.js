const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spot_photo_dump_img', {
    spot_photo_dump_img_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    spot_photo_dump_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'spot_photo_dump',
        key: 'spot_photon_dump_id'
      }
    },
    img_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'spot_photo_dump_img',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "spot_photo_dump_img_id" },
        ]
      },
      {
        name: "spot_photo_dump_id_idx",
        using: "BTREE",
        fields: [
          { name: "spot_photo_dump_id" },
        ]
      },
    ]
  });
};
