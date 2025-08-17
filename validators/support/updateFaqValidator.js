const { body } = require('express-validator');
const { validate } = require('../validate');

const updateFaqValidationRules = [
  body('faqCategoryType')
    .optional()
    .isString()
    .isLength({ min: 1, max: 50 })
    .withMessage('FAQ 카테고리 타입은 1자 이상 50자 이하이어야 합니다.')
    .trim(),

  body('question')
    .optional()
    .isLength({ min: 1, max: 500 })
    .withMessage('질문은 1자 이상 500자 이하이어야 합니다.')
    .trim(),

  body('answer')
    .optional()
    .isLength({ min: 1, max: 2000 })
    .withMessage('답변은 1자 이상 2000자 이하이어야 합니다.')
    .trim(),
];

const updateFaqValidator = [...updateFaqValidationRules, validate()];

module.exports = updateFaqValidator;
