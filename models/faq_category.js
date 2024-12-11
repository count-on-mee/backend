module.exports = function (sequelize, DataTypes) {
  const FaqCategory = sequelize.define(
    'FaqCategory',
    {
      faqCategoryId: {
        field: 'faq_category_id',
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
      tableName: 'faq_category',
      timestamps: false,
    }
  );

  FaqCategory.associate = function (models) {
    FaqCategory.hasMany(models.Faq, {
      foreignKey: 'faq_category_id',
    });
  };

  return FaqCategory;
};
