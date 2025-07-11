const { body } = require('express-validator');
const { validate } = require('../validate');

const replyInquiryValidationRules = [
  body('reply')
    .isLength({ min: 1, max: 1000 })
    .withMessage('답변은 1자 이상 1000자 이하이어야 합니다.')
    .trim(),
];

const replyInquiryValidator = [...replyInquiryValidationRules, validate()];

module.exports = replyInquiryValidator;
