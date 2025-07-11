const { Notice } = require('../models');

exports.getNotices = async () => {
  const notices = await Notice.findAll({
    order: [['createdAt', 'DESC']],
  });

  return notices;
};

exports.getNoticeById = async (noticeId) => {
  const notice = await Notice.findByPk(noticeId);

  if (!notice) {
    throw new Error('공지사항을 찾을 수 없습니다.');
  }

  return notice;
};
