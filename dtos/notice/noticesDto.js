class NoticesDto {
  static of(notices) {
    return notices.map((notice) => {
      const { noticeId, title, content } = notice;
      return {
        noticeId,
        title,
        content,
      };
    });
  }
}

module.exports = NoticesDto;
