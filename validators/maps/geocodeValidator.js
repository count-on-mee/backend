const { query } = require('express-validator');
const { validate } = require('../validate');

const geocodeValidationRules = [
  query('address')
    .exists()
    .withMessage('주소는 필수입니다.')
    .isString()
    .withMessage('주소는 문자열이어야 합니다.')
    .isLength({ min: 1, max: 200 })
    .withMessage('주소 길이는 1자 이상 200자 이하여야 합니다.'),
];

const geocodeValidator = [...geocodeValidationRules, validate()];

module.exports = geocodeValidator;
