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

exports.createFaq = async (req, res) => {
  try {
    const { faqCategoryType, question, answer } = req.body;

    const faq = await faqService.createFaq({
      faqCategoryType,
      question,
      answer,
    });

    const faqDto = FaqDto.from(faq);
    res.status(201).json(faqDto);
  } catch (error) {
    res.status(400).json({
      message: error.message || 'FAQ 등록에 실패했습니다.',
    });
  }
};

exports.updateFaq = async (req, res) => {
  try {
    const { faqId } = req.params;
    const updateData = {};

    if (req.body.faqCategoryType !== undefined) {
      updateData.faqCategoryType = req.body.faqCategoryType;
    }
    if (req.body.question !== undefined) {
      updateData.question = req.body.question;
    }
    if (req.body.answer !== undefined) {
      updateData.answer = req.body.answer;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        message: '업데이트할 데이터가 없습니다.',
      });
    }

    const faq = await faqService.updateFaq(faqId, updateData);

    const faqDto = FaqDto.from(faq);
    res.status(200).json(faqDto);
  } catch (error) {
    res.status(400).json({
      message: error.message || 'FAQ 수정에 실패했습니다.',
    });
  }
};

exports.deleteFaq = async (req, res) => {
  try {
    const { faqId } = req.params;

    await faqService.deleteFaq(faqId);

    res.status(204).json({ message: 'FAQ가 성공적으로 삭제되었습니다.' });
  } catch (error) {
    res.status(404).json({
      message: error.message || 'FAQ 삭제에 실패했습니다.',
    });
  }
};
