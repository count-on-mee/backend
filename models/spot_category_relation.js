module.exports = function (sequelize, DataTypes) {
  const SpotCategoryRelation = sequelize.define(
    'SpotCategoryRelation',
    {
      spotCategoryRelationId: {
        field: 'spot_category_relation_id',
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
      spotCategoryId: {
        field: 'spot_category_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'spot_category',
          key: 'spot_category_id',
        },
      },
    },
    {
      sequelize,
      tableName: 'spot_category_relation',
      timestamps: false,
    }
  );

  SpotCategoryRelation.associate = function (models) {
    SpotCategoryRelation.belongsTo(models.Spot, {
      foreignKey: 'spot_id',
    });
    SpotCategoryRelation.belongsTo(models.SpotCategory, {
      foreignKey: 'spot_category_id',
    });
  };

  return SpotCategoryRelation;
};
