module.exports = function (sequelize, DataTypes) {
  const SpotCategory = sequelize.define(
    'SpotCategory',
    {
      spotCategoryId: {
        field: 'spot_category_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'spot_category',
      timestamps: false,
    }
  );
  return SpotCategory;
};
