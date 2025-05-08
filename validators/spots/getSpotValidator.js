const { query } = require('express-validator');
const { validate } = require('../validate');

const spotValidationRules = [
  query('lat')
    .exists()
    .withMessage('위도는 필수입니다.')
    .isFloat({ min: -90, max: 90 })
    .withMessage('위도는 -90에서 90 사이여야 합니다.'),
  query('lng')
    .exists()
    .withMessage('경도는 필수입니다.')
    .isFloat({ min: -180, max: 180 })
    .withMessage('경도는 -180에서 180 사이여야 합니다.'),
  query('zoom')
    .exists()
    .withMessage('줌 레벨은 필수입니다.')
    .isInt({ min: 1, max: 21 })
    .withMessage('줌 레벨은 1에서 21 사이여야 합니다.'),
];

const getSpotValidator = [...spotValidationRules, validate()];

module.exports = getSpotValidator;
