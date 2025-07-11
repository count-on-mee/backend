const noticeService = require('../services/noticeService');
const { NoticeDto } = require('../dtos');

exports.getNotices = async (req, res) => {
  try {
    const notices = await noticeService.getNotices();

    const noticeDtos = NoticeDto.fromMany(notices);
    res.status(200).json(noticeDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '공지사항 조회에 실패했습니다.',
    });
  }
};

exports.getNoticeById = async (req, res) => {
  try {
    const { noticeId } = req.params;

    const notice = await noticeService.getNoticeById(noticeId);

    const noticeDto = NoticeDto.from(notice);
    res.status(200).json(noticeDto);
  } catch (error) {
    res.status(404).json({
      message: error.message || '공지사항 조회에 실패했습니다.',
    });
  }
};
