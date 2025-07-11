class NoticeDto {
  static from(notice) {
    const { noticeId, title, content, createdAt, updatedAt } = notice;
    return { noticeId, title, content, createdAt, updatedAt };
  }

  static fromMany(notices) {
    if (!Array.isArray(notices)) {
      throw new Error('공지사항 배열이 필요합니다.');
    }
    return notices.map((notice) => NoticeDto.from(notice));
  }
}

module.exports = NoticeDto;
