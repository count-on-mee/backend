const {
  NoticesDto,
  NoticeDto,
  FaqsDto,
  InquiryDto,
  InquiriesDto,
} = require('../dtos');
const supportService = require('../services/supportService');

exports.getNotices = async (req, res) => {
  try {
    const notices = await supportService.getNotices();
    if (notices) {
      res.status(200).json(NoticesDto.of(notices));
    } else {
      res.status(404).json({ message: 'Notice not found' });
    }
  } catch (error) {
    console.error('Error fetching notices:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getNoticeById = async (req, res) => {
  try {
    const { noticeId } = req.params;
    const notice = await supportService.getNoticeById(noticeId);

    if (notice) {
      res.status(200).json(NoticeDto.of(notice));
    } else {
      res.status(404).json({ message: 'Notice not found' });
    }
  } catch (error) {
    console.error('Error fetching notice by ID:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getFaqs = async (req, res) => {
  try {
    const faqs = await supportService.getFaqs();
    if (faqs) {
      res.status(201).json(FaqsDto.of(faqs));
    } else {
      res.status(404).json({ message: 'Faq not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createInquiry = async (req, res) => {
  try {
    const userId = req.user.userId;
    const inquiry = req.body;
    const createdInquiry = await supportService.createInquiry(userId, inquiry);
    if (createdInquiry) {
      res.status(201).json(InquiryDto.of(createdInquiry));
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInquiries = async (req, res) => {
  try {
    const userId = req.user.userId;
    const inquiries = await supportService.getInquiries(userId);
    if (inquiries) {
      res.status(201).json(InquiriesDto.of(inquiries));
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.replyInquiry = async (req, res) => {
  try {
    const { inquiryId } = req.params;
    const { reply } = req.body;
    const inquiry = await supportService.replyInquiry(inquiryId, reply);
    if (inquiry) {
      res.status(200).json(InquiryDto.of(inquiry));
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
