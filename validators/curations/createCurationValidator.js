const { body } = require('express-validator');
const { validate } = require('../validate');

const VALID_CATEGORIES = ['여행', '식당', '카페', '자연'];

const createCurationValidationRules = [
  body('name').notEmpty().withMessage('이름은 필수 입력 항목입니다.'),
  body('description').notEmpty().withMessage('설명은 필수 입력 항목입니다.'),
  body('categories')
    .isArray({ min: 1 })
    .withMessage('카테고리는 최소 1개 이상 포함된 배열 형태여야 합니다.')
    .custom((categories) =>
      categories.every((category) => VALID_CATEGORIES.includes(category))
    )
    .withMessage('유효하지 않은 카테고리가 포함되어 있습니다.'),
  body('spots')
    .isArray({ min: 1 })
    .withMessage('스팟은 최소 1개 이상 포함된 배열 형태여야 합니다.'),
  body('spots.*.spotId')
    .isInt()
    .toInt()
    .withMessage('스팟 ID는 정수여야 합니다.'),
  body('spots.*.order')
    .isInt()
    .toInt()
    .withMessage('스팟 순서는 정수여야 합니다.'),
];

const createCurationValidator = [...createCurationValidationRules, validate()];

module.exports = createCurationValidator;
