const { where } = require('sequelize');
const {
  Notice,
  Faq,
  FaqCategory,
  Inquiry,
  InquiryCategory,
} = require('../models');

const getNotices = async () => {
  const notices = await Notice.findAll();
  return notices;
};

const getNoticeById = async (noticeId) => {
  const notice = await Notice.findOne({
    where: { noticeId },
  });
  return notice;
};

const getFaqs = async () => {
  const faqs = await Faq.findAll({
    include: {
      model: FaqCategory,
      as: 'faqCategory',
    },
  });
  return faqs;
};

const createInquiry = async (userId, inquiry) => {
  const { inquiryCategoryType, title, content } = inquiry;

  const inquiryCategory = await InquiryCategory.findOne({
    where: { type: inquiryCategoryType },
  });

  const createdInquiry = await Inquiry.create({
    userId,
    inquiryCategoryId: inquiryCategory.inquiryCategoryId,
    title,
    content,
  });

  const inquiryWithCategory = await Inquiry.findOne({
    where: { inquiryId: createdInquiry.inquiryId },
    include: {
      model: InquiryCategory,
      as: 'inquiryCategory',
    },
  });

  return inquiryWithCategory;
};

const getInquiries = async (userId) => {
  return Inquiry.findAll({
    where: {
      userId,
    },
    include: {
      model: InquiryCategory,
      as: 'inquiryCategory',
    },
  });
};

const getInquiry = async (userId, inquiryId) => {
  return Inquiry.findOne({
    where: {
      userId,
      inquiryId,
    },
    include: {
      model: InquiryCategory,
      as: 'inquiryCategory',
    },
  });
};

const replyInquiry = async (inquiryId, reply) => {
  const updatedInquiry = await Inquiry.update(
    {
      reply,
      status: 'resolved',
    },
    { where: { inquiryId } }
  );

  if (updatedInquiry) {
    const repliedInquiry = await Inquiry.findOne({
      where: {
        inquiryId,
      },
      include: {
        model: InquiryCategory,
        as: 'inquiryCategory',
      },
    });
    return repliedInquiry;
  }
};

module.exports = {
  getNotices,
  getFaqs,
  createInquiry,
  getInquiries,
  getInquiry,
  replyInquiry,
  getNoticeById,
};
