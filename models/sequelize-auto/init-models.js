var DataTypes = require("sequelize").DataTypes;
var _announcement = require("./announcement");
var _category = require("./category");
var _curation = require("./curation");
var _curation_scrap = require("./curation_scrap");
var _curation_spot = require("./curation_spot");
var _document_category = require("./document_category");
var _faq = require("./faq");
var _inquiry = require("./inquiry");
var _inquiry_type = require("./inquiry_type");
var _spot = require("./spot");
var _spot_business_hours = require("./spot_business_hours");
var _spot_category = require("./spot_category");
var _spot_img = require("./spot_img");
var _spot_photo_dump = require("./spot_photo_dump");
var _spot_photo_dump_img = require("./spot_photo_dump_img");
var _spot_scrap = require("./spot_scrap");
var _trip = require("./trip");
var _trip_document = require("./trip_document");
var _trip_document_category = require("./trip_document_category");
var _trip_document_history = require("./trip_document_history");
var _trip_itinerary = require("./trip_itinerary");
var _trip_user = require("./trip_user");
var _user = require("./user");

function initModels(sequelize) {
  var announcement = _announcement(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var curation = _curation(sequelize, DataTypes);
  var curation_scrap = _curation_scrap(sequelize, DataTypes);
  var curation_spot = _curation_spot(sequelize, DataTypes);
  var document_category = _document_category(sequelize, DataTypes);
  var faq = _faq(sequelize, DataTypes);
  var inquiry = _inquiry(sequelize, DataTypes);
  var inquiry_type = _inquiry_type(sequelize, DataTypes);
  var spot = _spot(sequelize, DataTypes);
  var spot_business_hours = _spot_business_hours(sequelize, DataTypes);
  var spot_category = _spot_category(sequelize, DataTypes);
  var spot_img = _spot_img(sequelize, DataTypes);
  var spot_photo_dump = _spot_photo_dump(sequelize, DataTypes);
  var spot_photo_dump_img = _spot_photo_dump_img(sequelize, DataTypes);
  var spot_scrap = _spot_scrap(sequelize, DataTypes);
  var trip = _trip(sequelize, DataTypes);
  var trip_document = _trip_document(sequelize, DataTypes);
  var trip_document_category = _trip_document_category(sequelize, DataTypes);
  var trip_document_history = _trip_document_history(sequelize, DataTypes);
  var trip_itinerary = _trip_itinerary(sequelize, DataTypes);
  var trip_user = _trip_user(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  spot_category.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(spot_category, { as: "spot_categories", foreignKey: "category_id"});
  curation_scrap.belongsTo(curation, { as: "curation", foreignKey: "curation_id"});
  curation.hasMany(curation_scrap, { as: "curation_scraps", foreignKey: "curation_id"});
  curation_spot.belongsTo(curation, { as: "curation", foreignKey: "curation_id"});
  curation.hasMany(curation_spot, { as: "curation_spots", foreignKey: "curation_id"});
  trip_document_category.belongsTo(document_category, { as: "trip_document_category", foreignKey: "trip_document_category_id"});
  document_category.hasOne(trip_document_category, { as: "trip_document_category", foreignKey: "trip_document_category_id"});
  inquiry.belongsTo(inquiry_type, { as: "type", foreignKey: "type_id"});
  inquiry_type.hasMany(inquiry, { as: "inquiries", foreignKey: "type_id"});
  curation_spot.belongsTo(spot, { as: "spot", foreignKey: "spot_id"});
  spot.hasMany(curation_spot, { as: "curation_spots", foreignKey: "spot_id"});
  spot_business_hours.belongsTo(spot, { as: "spot", foreignKey: "spot_id"});
  spot.hasMany(spot_business_hours, { as: "spot_business_hours", foreignKey: "spot_id"});
  spot_category.belongsTo(spot, { as: "spot", foreignKey: "spot_id"});
  spot.hasMany(spot_category, { as: "spot_categories", foreignKey: "spot_id"});
  spot_img.belongsTo(spot, { as: "spot", foreignKey: "spot_id"});
  spot.hasMany(spot_img, { as: "spot_imgs", foreignKey: "spot_id"});
  spot_photo_dump.belongsTo(spot, { as: "spot", foreignKey: "spot_id"});
  spot.hasMany(spot_photo_dump, { as: "spot_photo_dumps", foreignKey: "spot_id"});
  spot_scrap.belongsTo(spot, { as: "spot", foreignKey: "spot_id"});
  spot.hasMany(spot_scrap, { as: "spot_scraps", foreignKey: "spot_id"});
  trip_itinerary.belongsTo(spot, { as: "spot", foreignKey: "spot_id"});
  spot.hasMany(trip_itinerary, { as: "trip_itineraries", foreignKey: "spot_id"});
  spot_photo_dump_img.belongsTo(spot_photo_dump, { as: "spot_photo_dump", foreignKey: "spot_photo_dump_id"});
  spot_photo_dump.hasMany(spot_photo_dump_img, { as: "spot_photo_dump_imgs", foreignKey: "spot_photo_dump_id"});
  trip_document.belongsTo(trip, { as: "trip", foreignKey: "trip_id"});
  trip.hasMany(trip_document, { as: "trip_documents", foreignKey: "trip_id"});
  trip_itinerary.belongsTo(trip, { as: "trip", foreignKey: "trip_id"});
  trip.hasMany(trip_itinerary, { as: "trip_itineraries", foreignKey: "trip_id"});
  trip_user.belongsTo(trip, { as: "trip", foreignKey: "trip_id"});
  trip.hasMany(trip_user, { as: "trip_users", foreignKey: "trip_id"});
  trip_document_category.belongsTo(trip_document, { as: "trip_document", foreignKey: "trip_document_id"});
  trip_document.hasMany(trip_document_category, { as: "trip_document_categories", foreignKey: "trip_document_id"});
  trip_document_history.belongsTo(trip_document, { as: "trip_document", foreignKey: "trip_document_id"});
  trip_document.hasMany(trip_document_history, { as: "trip_document_histories", foreignKey: "trip_document_id"});
  curation.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(curation, { as: "curations", foreignKey: "user_id"});
  curation_scrap.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(curation_scrap, { as: "curation_scraps", foreignKey: "user_id"});
  inquiry.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(inquiry, { as: "inquiries", foreignKey: "user_id"});
  spot_photo_dump.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(spot_photo_dump, { as: "spot_photo_dumps", foreignKey: "user_id"});
  spot_scrap.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(spot_scrap, { as: "spot_scraps", foreignKey: "user_id"});
  trip_document_history.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(trip_document_history, { as: "trip_document_histories", foreignKey: "user_id"});
  trip_user.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(trip_user, { as: "trip_users", foreignKey: "user_id"});

  return {
    announcement,
    category,
    curation,
    curation_scrap,
    curation_spot,
    document_category,
    faq,
    inquiry,
    inquiry_type,
    spot,
    spot_business_hours,
    spot_category,
    spot_img,
    spot_photo_dump,
    spot_photo_dump_img,
    spot_scrap,
    trip,
    trip_document,
    trip_document_category,
    trip_document_history,
    trip_itinerary,
    trip_user,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
