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

exports.createFaq = async (faqData) => {
  const { faqCategoryType, question, answer } = faqData;

  const category = await FaqCategory.findOne({
    where: { type: faqCategoryType },
  });

  if (!category) {
    throw new Error('존재하지 않는 FAQ 카테고리입니다.');
  }

  const faq = await Faq.create({
    faqCategoryId: category.faqCategoryId,
    question,
    answer,
  });

  const createdFaq = await Faq.findByPk(faq.faqId, {
    attributes: ['faqId', 'question', 'answer', 'createdAt', 'updatedAt'],
    include: [
      {
        model: FaqCategory,
        as: 'faqCategory',
        attributes: ['faqCategoryId', 'type'],
      },
    ],
  });

  return createdFaq;
};

exports.updateFaq = async (faqId, faqData) => {
  const faq = await Faq.findByPk(faqId);

  if (!faq) {
    throw new Error('FAQ를 찾을 수 없습니다.');
  }

  const updateData = { ...faqData };

  if (faqData.faqCategoryType) {
    const category = await FaqCategory.findOne({
      where: { type: faqData.faqCategoryType },
    });

    if (!category) {
      throw new Error('존재하지 않는 FAQ 카테고리입니다.');
    }

    updateData.faqCategoryId = category.faqCategoryId;
    delete updateData.faqCategoryType;
  }

  await faq.update(updateData);

  const updatedFaq = await Faq.findByPk(faq.faqId, {
    include: [
      {
        model: FaqCategory,
        as: 'faqCategory',
        attributes: ['faqCategoryId', 'type'],
      },
    ],
  });

  return updatedFaq;
};

exports.deleteFaq = async (faqId) => {
  const faq = await Faq.findByPk(faqId);

  if (!faq) {
    throw new Error('FAQ를 찾을 수 없습니다.');
  }

  await faq.destroy();
};
