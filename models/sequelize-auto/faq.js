const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faq', {
    faq_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'faq',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "faq_id" },
        ]
      },
    ]
  });
};
