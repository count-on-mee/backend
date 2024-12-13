class NoticeDto {
  static of(notice) {
    const { noticeId, title, content, created_at } = notice;
    const createdAt = new Date(created_at).toISOString().split('T')[0];
    return {
      noticeId,
      title,
      content,
      createdAt,
    };
  }
}

module.exports = NoticeDto;
