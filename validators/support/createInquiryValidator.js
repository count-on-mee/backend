const { body } = require('express-validator');
const { validate } = require('../validate');

const createInquiryValidationRules = [
  body('inquiryCategoryId')
    .isInt({ min: 1 })
    .withMessage('유효한 문의 카테고리 ID를 입력해주세요.'),

  body('title')
    .isLength({ min: 1, max: 100 })
    .withMessage('제목은 1자 이상 100자 이하이어야 합니다.')
    .trim(),

  body('content')
    .isLength({ min: 1, max: 1000 })
    .withMessage('내용은 1자 이상 1000자 이하이어야 합니다.')
    .trim(),
];

const createInquiryValidator = [...createInquiryValidationRules, validate()];

module.exports = createInquiryValidator;
