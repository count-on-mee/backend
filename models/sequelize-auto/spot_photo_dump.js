const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spot_photo_dump', {
    spot_photon_dump_id: {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    content: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'spot_photo_dump',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "spot_photon_dump_id" },
        ]
      },
      {
        name: "user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
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
