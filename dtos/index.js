const UserDto = require('./user/userDto');
const SpotDto = require('./spot/spotDto');
const ScrapedSpotsDto = require('./scrap/scrapedSpotDto');
const ScrapedCurationsDto = require('./scrap/scrapedCurationDto');
const NoticesDto = require('./notice/noticesDto');
const FaqsDto = require('./faq/faqsDto');
const InquiryDto = require('./inquiry/inquiryDto');
const InquiriesDto = require('./inquiry/inquiriesDto');
const TripsDto = require('./trip/tripsDto');

const dtos = {
  UserDto,
  SpotDto,
  ScrapedSpotsDto,
  ScrapedCurationsDto,
  NoticesDto,
  FaqsDto,
  InquiryDto,
  InquiriesDto,
  TripsDto,
};

module.exports = dtos;
