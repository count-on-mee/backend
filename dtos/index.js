const UserDto = require('./users/userDto');
const SpotDto = require('./spots/spotDto');
const SpotReviewDto = require('./spots/spotReviewDto');
const CurationDto = require('./curations/curationDto');
const ScrapedSpotDto = require('./scraps/scrapedSpotDto');
const ScrapedCurationDto = require('./scraps/scrapedCurationDto');

const dtos = {
  UserDto,
  SpotDto,
  SpotReviewDto,
  CurationDto,
  ScrapedSpotDto,
  ScrapedCurationDto,
};

module.exports = dtos;
