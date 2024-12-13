const NoticeDto = require('./noticeDto');

class NoticesDto {
  static of(notices) {
    return notices.map(notice => NoticeDto.of(notice));
  }
}

module.exports = NoticesDto;
