const InquiryDto = require('./inquiryDto');

class InquiriesDto {
  static of(inquiries) {
    return inquiries.map((inquiry) => InquiryDto.of(inquiry));
  }
}

module.exports = InquiriesDto;
