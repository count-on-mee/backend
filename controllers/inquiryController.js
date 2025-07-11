const inquiryService = require('../services/inquiryService');
const { InquiryDto } = require('../dtos');

exports.getInquiries = async (req, res) => {
  try {
    const { userId } = req.user;

    const inquiries = await inquiryService.getInquiries(userId);

    const inquiryDtos = InquiryDto.fromMany(inquiries);
    res.status(200).json(inquiryDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '내 문의 목록 조회에 실패했습니다.',
    });
  }
};

exports.getInquiryById = async (req, res) => {
  try {
    const { userId } = req.user;
    const { inquiryId } = req.params;

    const inquiry = await inquiryService.getInquiryById(inquiryId, userId);

    const inquiryDto = InquiryDto.from(inquiry);
    res.status(200).json(inquiryDto);
  } catch (error) {
    res.status(404).json({
      message: error.message || '문의 조회에 실패했습니다.',
    });
  }
};

exports.createInquiry = async (req, res) => {
  try {
    const { userId } = req.user;
    const { inquiryCategoryId, title, content } = req.body;

    const inquiry = await inquiryService.createInquiry(userId, {
      inquiryCategoryId,
      title,
      content,
    });

    const inquiryDto = InquiryDto.from(inquiry);
    res.status(201).json(inquiryDto);
  } catch (error) {
    res.status(400).json({
      message: error.message || '문의 등록에 실패했습니다.',
    });
  }
};

exports.replyToInquiry = async (req, res) => {
  try {
    const { inquiryId } = req.params;
    const { reply } = req.body;

    const inquiry = await inquiryService.replyToInquiry(inquiryId, reply);

    const inquiryDto = InquiryDto.from(inquiry);
    res.status(201).json(inquiryDto);
  } catch (error) {
    res.status(404).json({
      message: error.message || '문의 답변에 실패했습니다.',
    });
  }
};

exports.getInquiryCategories = async (req, res) => {
  try {
    const categories = await inquiryService.getInquiryCategories();

    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({
      message: error.message || '문의 카테고리 조회에 실패했습니다.',
    });
  }
};
