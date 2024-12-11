class NoticesDto {
  static of(notices) {
    return notices.map((notice) => {
      const { noticeId, title, content, created_at } = notice;
      const createdAt = new Date(created_at).toISOString().split('T')[0];
      return {
        noticeId,
        title,
        content,
        createdAt,
      };
    });
  }
}

module.exports = NoticesDto;
