const updateUserValidator = require('./users/updateUserValidator');
const getSpotValidator = require('./spots/getSpotValidator');
const searchSpotValidator = require('./spots/searchSpotValidator');
const createSpotReviewValidator = require('./spots/createSpotReviewValidator');
const createCurationValidator = require('./curations/createCurationValidator');
const searchCurationValidator = require('./curations/searchCurationValidator');
module.exports = {
  updateUserValidator,
  getSpotValidator,
  searchSpotValidator,
  createSpotReviewValidator,
  createCurationValidator,
  searchCurationValidator,
};
