class FaqDto {
  static from(faq) {
    const { faqId, question, answer, createdAt, updatedAt, faqCategory } = faq;
    const { type: faqCategoryType } = faqCategory;
    return {
      faqId,
      question,
      answer,
      createdAt,
      updatedAt,
      faqCategoryType,
    };
  }

  static fromMany(faqs) {
    if (!Array.isArray(faqs)) {
      throw new Error('FAQ 배열이 필요합니다.');
    }
    return faqs.map((faq) => FaqDto.from(faq));
  }
}

module.exports = FaqDto;
