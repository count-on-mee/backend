class FaqsDto {
  static of(faqs) {
    return faqs.map((faq) => {
      const { faqId, question, answer } = faq;
      const faqCategoryType = faq.faqCategory.type;
      return {
        faqId,
        question,
        answer,
        faqCategoryType,
      };
    });
  }
}

module.exports = FaqsDto;
