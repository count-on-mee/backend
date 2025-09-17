const updateUserValidator = require('./users/updateUserValidator');
const getSpotValidator = require('./spots/getSpotValidator');
const searchSpotValidator = require('./spots/searchSpotValidator');
const geocodeValidator = require('./maps/geocodeValidator');
const createSpotReviewValidator = require('./spots/createSpotReviewValidator');
const createSpotValidator = require('./spots/createSpotValidator');
const createCurationValidator = require('./curations/createCurationValidator');
const searchCurationValidator = require('./curations/searchCurationValidator');
const updateCurationValidator = require('./curations/updateCurationValidator');
const createTripValidator = require('./trips/createTripValidator');
const updateTripValidator = require('./trips/updateTripValidator');
const createItineraryValidator = require('./trips/createItineraryValidator');
const moveItinerariesValidator = require('./trips/moveItinerariesValidator');
const createInquiryValidator = require('./support/createInquiryValidator');
const replyInquiryValidator = require('./support/replyInquiryValidator');
const createNoticeValidator = require('./support/createNoticeValidator');
const updateNoticeValidator = require('./support/updateNoticeValidator');
const createFaqValidator = require('./support/createFaqValidator');
const updateFaqValidator = require('./support/updateFaqValidator');

module.exports = {
  updateUserValidator,
  getSpotValidator,
  searchSpotValidator,
  geocodeValidator,
  createSpotReviewValidator,
  createSpotValidator,
  createCurationValidator,
  searchCurationValidator,
  updateCurationValidator,
  createTripValidator,
  updateTripValidator,
  createItineraryValidator,
  moveItinerariesValidator,
  createInquiryValidator,
  replyInquiryValidator,
  createNoticeValidator,
  updateNoticeValidator,
  createFaqValidator,
  updateFaqValidator,
};
