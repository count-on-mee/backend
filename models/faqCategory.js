'use strict';

module.exports = (sequelize, DataTypes) => {
  const FaqCategory = sequelize.define(
    'FaqCategory',
    {
      faqCategoryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'faq_category',
      timestamps: false,
      underscored: true,
    }
  );

  FaqCategory.associate = (models) => {
    FaqCategory.hasMany(models.Faq, {
      foreignKey: 'faqCategoryId',
      sourceKey: 'faqCategoryId',
      as: 'faqs',
    });
  };

  return FaqCategory;
};
