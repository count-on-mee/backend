const inquiryService = require('../services/inquiryService');
const { InquiryDto } = require('../dtos');

exports.getInquiries = async (req, res) => {
  try {
    const { userId, role } = req.user;

    // admin인 경우 모든 문의 조회, 일반 사용자는 본인 문의만 조회
    const inquiries =
      role === 'admin'
        ? await inquiryService.getAllInquiries()
        : await inquiryService.getInquiries(userId);

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
    const { userId, role } = req.user;
    const { inquiryId } = req.params;

    const isAdmin = role === 'admin';
    const inquiry = await inquiryService.getInquiryById(
      inquiryId,
      userId,
      isAdmin
    );

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

exports.deleteInquiry = async (req, res) => {
  try {
    const { userId, role } = req.user;
    const { inquiryId } = req.params;

    const isAdmin = role === 'admin';
    await inquiryService.deleteInquiry(inquiryId, userId, isAdmin);

    res.status(204).json({ message: '문의가 성공적으로 삭제되었습니다.' });
  } catch (error) {
    res.status(404).json({
      message: error.message || '문의 삭제에 실패했습니다.',
    });
  }
};
