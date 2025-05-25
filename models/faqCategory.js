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
        unique: true,
      },
    },
    {
      tableName: 'faq_category',
      timestamps: false,
      underscored: true,
      indexes: [
        {
          unique: true,
          fields: ['type'],
          name: 'uk_type',
        },
      ],
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
