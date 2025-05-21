const { body } = require('express-validator');
const { validate } = require('../validate');

const createItineraryValidationRules = [
  body('spotId')
    .notEmpty()
    .withMessage('장소 ID는 필수 입력 항목입니다.')
    .isInt()
    .toInt()
    .withMessage('장소 ID는 정수여야 합니다.'),
  body('day')
    .notEmpty()
    .withMessage('여행 일차는 필수 입력 항목입니다.')
    .isInt({ min: 1 })
    .toInt()
    .withMessage('여행 일차는 1 이상의 정수여야 합니다.'),
  body('order')
    .notEmpty()
    .withMessage('방문 순서는 필수 입력 항목입니다.')
    .isInt({ min: 1 })
    .toInt()
    .withMessage('방문 순서는 1 이상의 정수여야 합니다.'),
];

const createItineraryValidator = [
  ...createItineraryValidationRules,
  validate(),
];

module.exports = createItineraryValidator;
