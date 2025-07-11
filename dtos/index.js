const UserDto = require('./users/userDto');
const SpotDto = require('./spots/spotDto');
const SpotBasicDto = require('./spots/spotBasicDto');
const SpotReviewDto = require('./spots/spotReviewDto');
const CurationDto = require('./curations/curationDto');
const ScrapedSpotDto = require('./scraps/scrapedSpotDto');
const ScrapedCurationDto = require('./scraps/scrapedCurationDto');
const TripDestinationDto = require('./trips/tripDestinationDto');
const TripDto = require('./trips/tripDto');
const TripDetailDto = require('./trips/tripDetailDto');
const ItineraryTransportationDto = require('./trips/itineraryTransportationDto');
const NoticeDto = require('./support/noticeDto');
const FaqDto = require('./support/faqDto');
const InquiryDto = require('./support/inquiryDto');

const dtos = {
  UserDto,
  SpotDto,
  SpotBasicDto,
  SpotReviewDto,
  CurationDto,
  ScrapedSpotDto,
  ScrapedCurationDto,
  TripDestinationDto,
  TripDto,
  TripDetailDto,
  ItineraryTransportationDto,
  NoticeDto,
  FaqDto,
  InquiryDto,
};

module.exports = dtos;
