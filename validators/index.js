const updateUserValidator = require('./users/updateUserValidator');
const getSpotValidator = require('./spots/getSpotValidator');
const searchSpotValidator = require('./spots/searchSpotValidator');
const createSpotReviewValidator = require('./spots/createSpotReviewValidator');
const createCurationValidator = require('./curations/createCurationValidator');
const searchCurationValidator = require('./curations/searchCurationValidator');
const createTripValidator = require('./trips/createTripValidator');
const updateTripValidator = require('./trips/updateTripValidator');
const createItineraryValidator = require('./trips/createItineraryValidator');
const moveItinerariesValidator = require('./trips/moveItinerariesValidator');

module.exports = {
  updateUserValidator,
  getSpotValidator,
  searchSpotValidator,
  createSpotReviewValidator,
  createCurationValidator,
  searchCurationValidator,
  createTripValidator,
  updateTripValidator,
  createItineraryValidator,
  moveItinerariesValidator,
};
