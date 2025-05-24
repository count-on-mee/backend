const { body } = require('express-validator');
const { validate } = require('../validate');

const moveItinerariesValidationRules = [
  body('moves')
    .isArray()
    .withMessage('이동할 일정 목록이 필요합니다.')
    .notEmpty()
    .withMessage('이동할 일정 목록이 비어있을 수 없습니다.'),
  body('moves.*.itineraryId')
    .isInt()
    .withMessage('이동할 일정 ID가 정수여야 합니다.'),
  body('moves.*.day')
    .isInt({ min: 1 })
    .withMessage('이동할 일정 일차가 1 이상의 정수여야 합니다.'),
  body('moves.*.order')
    .isInt({ min: 1 })
    .withMessage('이동할 일정 순서가 1 이상의 정수여야 합니다.'),
];

const moveItinerariesValidator = [
  ...moveItinerariesValidationRules,
  validate(),
];

module.exports = moveItinerariesValidator;
