'use strict';

const { body } = require('express-validator');
const { validate } = require('../validate');

const updateTripDocumentVersionNameValidator = [
  body('name')
    .exists()
    .withMessage('name은 필수입니다.')
    .bail()
    .isString()
    .withMessage('name은 문자열이어야 합니다.')
    .bail()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('name은 1자 이상 50자 이하이어야 합니다.'),
  validate(),
];

module.exports = updateTripDocumentVersionNameValidator;

