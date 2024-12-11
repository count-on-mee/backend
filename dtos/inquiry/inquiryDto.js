class InquiryDto {
  static of(inquiry) {
    const {
      inquiryId,
      title,
      content,
      reply,
      inquiryCategory,
      status,
      created_at,
    } = inquiry;
    const createdAt = new Date(created_at).toISOString().split('T')[0];
    const { type: inquiryCategoryType } = inquiryCategory;

    return {
      inquiryId,
      title,
      content,
      reply,
      inquiryCategoryType,
      status,
      createdAt,
    };
  }
}

module.exports = InquiryDto;
