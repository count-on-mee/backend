const { body } = require('express-validator');
const { validate } = require('../validate');

const reviewContentValidationRules = [
  body('content')
    .notEmpty()
    .withMessage('리뷰 내용은 필수 입력 항목입니다.')
    .isLength({ max: 1000 })
    .withMessage('리뷰 내용은 1,000자를 초과할 수 없습니다.')
    .matches(/^[^<>]*$/)
    .withMessage('HTML 태그는 사용할 수 없습니다.'),
];

const checkReviewImages = (req, res) => {
  if (!req.files || req.files.length === 0) {
    res.status(400).json({
      message: '리뷰 이미지는 최소 1장 이상 첨부해야 합니다.',
    });
    return false;
  }

  return true;
};

const createReviewValidator = [
  ...reviewContentValidationRules,
  validate(checkReviewImages),
];

module.exports = createReviewValidator;
