module.exports = function (sequelize, DataTypes) {
  const InquiryCategory = sequelize.define(
    'InquiryCategory',
    {
      inquiryCategoryId: {
        field: 'inquiry_category_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: 'inquiry_category',
      timestamps: false,
    }
  );

  InquiryCategory.associate = function (models) {
    InquiryCategory.hasMany(models.Inquiry, {
      foreignKey: 'inquiry_category_id',
    });
  };

  return InquiryCategory;
};
