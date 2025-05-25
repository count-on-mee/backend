'use strict';

module.exports = (sequelize, DataTypes) => {
  const InquiryCategory = sequelize.define(
    'InquiryCategory',
    {
      inquiryCategoryId: {
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
      tableName: 'inquiry_category',
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

  InquiryCategory.associate = (models) => {
    InquiryCategory.hasMany(models.Inquiry, {
      foreignKey: 'inquiryCategoryId',
      sourceKey: 'inquiryCategoryId',
      as: 'inquiries',
    });
  };

  return InquiryCategory;
};
