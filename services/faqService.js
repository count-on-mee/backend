const { Faq, FaqCategory } = require('../models');

exports.getFaqs = async () => {
  const faqs = await Faq.findAll({
    attributes: ['faqId', 'question', 'answer', 'createdAt', 'updatedAt'],
    include: [
      {
        model: FaqCategory,
        as: 'faqCategory',
        attributes: ['faqCategoryId', 'type'],
      },
    ],
    order: [['createdAt', 'DESC']],
  });

  return faqs;
};

exports.getFaqById = async (faqId) => {
  const faq = await Faq.findByPk(faqId, {
    attributes: ['faqId', 'question', 'answer', 'createdAt', 'updatedAt'],
    include: [
      {
        model: FaqCategory,
        as: 'faqCategory',
        attributes: ['faqCategoryId', 'type'],
      },
    ],
  });

  if (!faq) {
    throw new Error('FAQ를 찾을 수 없습니다.');
  }

  return faq;
};

exports.getFaqCategories = async () => {
  const faqCategories = await FaqCategory.findAll({
    attributes: ['faqCategoryId', 'type'],
    order: [['type', 'ASC']],
  });

  return faqCategories;
};
