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

exports.createNotice = async (req, res) => {
  try {
    const { title, content } = req.body;

    const notice = await noticeService.createNotice({
      title,
      content,
    });

    const noticeDto = NoticeDto.from(notice);
    res.status(201).json(noticeDto);
  } catch (error) {
    res.status(400).json({
      message: error.message || '공지사항 등록에 실패했습니다.',
    });
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const { noticeId } = req.params;
    const updateData = {};

    if (req.body.title !== undefined) {
      updateData.title = req.body.title;
    }
    if (req.body.content !== undefined) {
      updateData.content = req.body.content;
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        message: '업데이트할 데이터가 없습니다.',
      });
    }

    const notice = await noticeService.updateNotice(noticeId, updateData);

    const noticeDto = NoticeDto.from(notice);
    res.status(200).json(noticeDto);
  } catch (error) {
    res.status(400).json({
      message: error.message || '공지사항 수정에 실패했습니다.',
    });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    const { noticeId } = req.params;

    await noticeService.deleteNotice(noticeId);

    res.status(204).json({ message: '공지사항이 성공적으로 삭제되었습니다.' });
  } catch (error) {
    res.status(404).json({
      message: error.message || '공지사항 삭제에 실패했습니다.',
    });
  }
};
