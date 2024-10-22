const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trip_document', {
    trip_document_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'trip',
        key: 'trip_id'
      }
    },
    trip_document_category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trip_document',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trip_document_id" },
        ]
      },
      {
        name: "trip_id_idx",
        using: "BTREE",
        fields: [
          { name: "trip_id" },
        ]
      },
    ]
  });
};
