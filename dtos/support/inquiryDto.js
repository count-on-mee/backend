class InquiryDto {
  static from(inquiry) {
    const {
      inquiryId,
      title,
      content,
      reply,
      status,
      createdAt,
      updatedAt,
      inquiryCategory,
      user,
    } = inquiry;

    const { type: inquiryCategoryType } = inquiryCategory || {};
    const { userId, nickname, name, email } = user || {};

    return {
      inquiryId,
      inquiryCategoryType,
      title,
      content,
      reply,
      status,
      createdAt,
      updatedAt,
      author: {
        userId,
        nickname,
        name,
        email,
      },
    };
  }

  static fromMany(inquiries) {
    if (!Array.isArray(inquiries)) {
      throw new Error('문의 배열이 필요합니다.');
    }
    return inquiries.map((inquiry) => InquiryDto.from(inquiry));
  }
}

module.exports = InquiryDto;
