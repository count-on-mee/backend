'use strict';

module.exports = (sequelize, DataTypes) => {
  const Faq = sequelize.define(
    'Faq',
    {
      faqId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      faqCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'faq_category',
          key: 'faq_category_id',
        },
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: 'faq',
      timestamps: true,
      underscored: true,
    }
  );

  return Faq;
};
