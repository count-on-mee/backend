const updateUserValidator = require('./users/updateUserValidator');
const getSpotValidator = require('./spots/getSpotValidator');
const searchSpotValidator = require('./spots/searchSpotValidator');
const createSpotReviewValidator = require('./spots/createSpotReviewValidator');
const createSpotValidator = require('./spots/createSpotValidator');
const createCurationValidator = require('./curations/createCurationValidator');
const searchCurationValidator = require('./curations/searchCurationValidator');
const createTripValidator = require('./trips/createTripValidator');
const updateTripValidator = require('./trips/updateTripValidator');
const createItineraryValidator = require('./trips/createItineraryValidator');
const moveItinerariesValidator = require('./trips/moveItinerariesValidator');
const createInquiryValidator = require('./support/createInquiryValidator');
const replyInquiryValidator = require('./support/replyInquiryValidator');

module.exports = {
  updateUserValidator,
  getSpotValidator,
  searchSpotValidator,
  createSpotReviewValidator,
  createSpotValidator,
  createCurationValidator,
  searchCurationValidator,
  createTripValidator,
  updateTripValidator,
  createItineraryValidator,
  moveItinerariesValidator,
  createInquiryValidator,
  replyInquiryValidator,
};
