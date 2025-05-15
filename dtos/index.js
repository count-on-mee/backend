const UserDto = require('./users/userDto');
const SpotDto = require('./spots/spotDto');
const SpotReviewDto = require('./spots/spotReviewDto');
const CurationDto = require('./curations/curationDto');
const ScrapedSpotDto = require('./scraps/scrapedSpotDto');
const ScrapedCurationDto = require('./scraps/scrapedCurationDto');
const TripDestinationDto = require('./trips/tripDestinationDto');
const TripDto = require('./trips/tripDto');

const dtos = {
  UserDto,
  SpotDto,
  SpotReviewDto,
  CurationDto,
  ScrapedSpotDto,
  ScrapedCurationDto,
  TripDestinationDto,
  TripDto,
};

module.exports = dtos;
