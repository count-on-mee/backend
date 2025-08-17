const { Inquiry, InquiryCategory, User } = require('../models');

exports.getInquiries = async (userId) => {
  const inquiries = await Inquiry.findAll({
    where: { userId },
    attributes: [
      'inquiryId',
      'inquiryCategoryId',
      'userId',
      'title',
      'content',
      'reply',
      'status',
      'createdAt',
      'updatedAt',
    ],
    include: [
      {
        model: InquiryCategory,
        as: 'inquiryCategory',
        attributes: ['inquiryCategoryId', 'type'],
      },
      {
        model: User,
        as: 'user',
        attributes: ['userId', 'nickname', 'name', 'email'],
      },
    ],
    order: [['createdAt', 'DESC']],
  });

  return inquiries;
};

exports.getAllInquiries = async () => {
  const inquiries = await Inquiry.findAll({
    attributes: [
      'inquiryId',
      'inquiryCategoryId',
      'userId',
      'title',
      'content',
      'reply',
      'status',
      'createdAt',
      'updatedAt',
    ],
    include: [
      {
        model: InquiryCategory,
        as: 'inquiryCategory',
        attributes: ['inquiryCategoryId', 'type'],
      },
      {
        model: User,
        as: 'user',
        attributes: ['userId', 'nickname', 'name', 'email'],
      },
    ],
    order: [['createdAt', 'DESC']],
  });

  return inquiries;
};

exports.getInquiryById = async (inquiryId, userId, isAdmin = false) => {
  const whereClause = isAdmin ? { inquiryId } : { inquiryId, userId };

  const inquiry = await Inquiry.findOne({
    where: whereClause,
    attributes: [
      'inquiryId',
      'inquiryCategoryId',
      'userId',
      'title',
      'content',
      'reply',
      'status',
      'createdAt',
      'updatedAt',
    ],
    include: [
      {
        model: InquiryCategory,
        as: 'inquiryCategory',
        attributes: ['inquiryCategoryId', 'type'],
      },
      {
        model: User,
        as: 'user',
        attributes: ['userId', 'nickname', 'name', 'email'],
      },
    ],
  });

  if (!inquiry) {
    throw new Error('문의를 찾을 수 없습니다.');
  }

  return inquiry;
};

exports.createInquiry = async (userId, inquiryData) => {
  const { inquiryCategoryId, title, content } = inquiryData;

  const inquiry = await Inquiry.create({
    inquiryCategoryId,
    userId,
    title,
    content,
    status: 'pending',
  });

  return inquiry;
};

exports.replyToInquiry = async (inquiryId, reply) => {
  const inquiry = await Inquiry.findByPk(inquiryId);

  if (!inquiry) {
    throw new Error('문의를 찾을 수 없습니다.');
  }

  await inquiry.update({
    status: 'resolved',
    reply,
  });

  return inquiry;
};

exports.getInquiryCategories = async () => {
  const categories = await InquiryCategory.findAll({
    attributes: ['inquiryCategoryId', 'type'],
    order: [['type', 'ASC']],
  });

  return categories;
};

exports.deleteInquiry = async (inquiryId, userId, isAdmin = false) => {
  const whereClause = isAdmin ? { inquiryId } : { inquiryId, userId };

  const inquiry = await Inquiry.findOne({
    where: whereClause,
  });

  if (!inquiry) {
    throw new Error('문의를 찾을 수 없습니다.');
  }

  await inquiry.destroy();
};
