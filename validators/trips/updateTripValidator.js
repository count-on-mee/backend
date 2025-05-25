const { body } = require('express-validator');
const { validate } = require('../validate');

const updateTripValidationRules = [
  body('title')
    .optional()
    .isLength({ min: 1, max: 255 })
    .withMessage('여행 제목은 1자 이상 255자 이하이어야 합니다.'),
  body('startDate')
    .optional()
    .isISO8601()
    .withMessage('유효한 날짜 형식(YYYY-MM-DD)이 아닙니다.'),
  body('endDate')
    .optional()
    .isISO8601()
    .withMessage('유효한 날짜 형식(YYYY-MM-DD)이 아닙니다.'),
];

const checkRequiredFields = (req, res) => {
  if (!req.body.title && !req.body.startDate && !req.body.endDate) {
    res.status(400).json({
      message:
        '업데이트할 정보가 없습니다. 제목, 날짜 중 하나 이상을 제공해야 합니다.',
    });
    return false;
  }
  return true;
};

const updateTripValidator = [
  ...updateTripValidationRules,
  validate(checkRequiredFields),
];

module.exports = updateTripValidator;
