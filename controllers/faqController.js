const faqService = require('../services/faqService');
const { FaqDto } = require('../dtos');

exports.getFaqs = async (req, res) => {
  try {
    const faqs = await faqService.getFaqs();

    const faqDtos = FaqDto.fromMany(faqs);
    res.status(200).json(faqDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || 'FAQ 조회에 실패했습니다.',
    });
  }
};

exports.getFaqById = async (req, res) => {
  try {
    const { faqId } = req.params;

    const faq = await faqService.getFaqById(faqId);

    const faqDto = FaqDto.from(faq);
    res.status(200).json(faqDto);
  } catch (error) {
    res.status(404).json({
      message: error.message || 'FAQ 조회에 실패했습니다.',
    });
  }
};

exports.getFaqCategories = async (req, res) => {
  try {
    const categories = await faqService.getFaqCategories();

    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({
      message: error.message || 'FAQ 카테고리 조회에 실패했습니다.',
    });
  }
};
