const { body } = require('express-validator');
const { validate } = require('../validate');

const updateNoticeValidationRules = [
  body('title')
    .optional()
    .isLength({ min: 1, max: 200 })
    .withMessage('제목은 1자 이상 200자 이하이어야 합니다.')
    .trim(),

  body('content')
    .optional()
    .isLength({ min: 1, max: 5000 })
    .withMessage('내용은 1자 이상 5000자 이하이어야 합니다.')
    .trim(),
];

const updateNoticeValidator = [...updateNoticeValidationRules, validate()];

module.exports = updateNoticeValidator;
