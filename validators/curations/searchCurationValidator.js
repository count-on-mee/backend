const { query } = require('express-validator');
const { validate } = require('../validate');

const VALID_CATEGORIES = ['여행', '식당', '카페', '자연'];

const searchCurationValidationRules = [
  query('name')
    .optional()
    .isString()
    .withMessage('큐레이션명은 문자열이어야 합니다.')
    .isLength({ min: 1, max: 255 })
    .withMessage('큐레이션명은 1자 이상 255자 이하여야 합니다.'),

  query('categories')
    .optional()
    .customSanitizer((value) => (Array.isArray(value) ? value : [value]))
    .isArray()
    .withMessage('카테고리는 배열 형태로 전달해야 합니다.')
    .custom((categories) =>
      categories.every((category) => VALID_CATEGORIES.includes(category))
    )
    .withMessage('유효하지 않은 카테고리가 포함되어 있습니다.'),
];

const checkRequiredFields = (req, res) => {
  const { name, categories } = req.query;

  if (!name && !categories) {
    res.status(400).json({
      message:
        '검색어(큐레이션명) 또는 카테고리 중 하나는 필수로 입력해야 합니다.',
    });
    return false;
  }
  return true;
};

const searchCurationValidator = [
  ...searchCurationValidationRules,
  validate(checkRequiredFields),
];

module.exports = searchCurationValidator;
