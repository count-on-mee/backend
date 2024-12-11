module.exports = function (sequelize, DataTypes) {
  const Faq = sequelize.define(
    'Faq',
    {
      faqId: {
        field: 'faq_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      faqCategoryId: {
        field: 'faq_category_id',
        type: DataTypes.INTEGER,
        references: {
          model: 'FaqCategory',
          key: 'faq_category_id',
        },
        allowNull: false,
      },
      question: {
        type: DataTypes.STRING(2048),
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING(2048),
        allowNull: false,
      },
    },
    {
      tableName: 'faq',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );

  Faq.associate = function (models) {
    Faq.belongsTo(models.FaqCategory, {
      as: 'faqCategory',
      foreignKey: 'faq_category_id',
    });
  };

  return Faq;
};
