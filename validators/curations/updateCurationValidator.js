const { body, param } = require('express-validator');
const { validate } = require('../validate');

const updateCurationValidationRules = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('큐레이션 이름은 1자 이상 100자 이하여야 합니다.'),

  body('description')
    .optional()
    .trim()
    .isLength({ min: 1, max: 1000 })
    .withMessage('큐레이션 설명은 1자 이상 1000자 이하여야 합니다.'),

  body('categories')
    .optional()
    .isArray({ min: 1 })
    .withMessage('카테고리는 최소 1개 이상 포함된 배열 형태여야 합니다.'),

  body('spots')
    .optional()
    .isArray({ min: 1 })
    .withMessage('스팟은 최소 1개 이상 포함된 배열 형태여야 합니다.'),
  body('spots.*.spotId')
    .optional()
    .isInt()
    .toInt()
    .withMessage('스팟 ID는 정수여야 합니다.'),
  body('spots.*.order')
    .optional()
    .isInt()
    .toInt()
    .withMessage('스팟 순서는 정수여야 합니다.'),
];

const checkRequiredFields = (req, res) => {
  if (
    !req.body.name &&
    !req.body.description &&
    !req.body.categories &&
    !req.body.spots
  ) {
    res.status(400).json({
      message:
        '업데이트할 정보가 없습니다. name, description, categories, spots 중 하나 이상을 제공해야 합니다.',
    });
    return false;
  }
  return true;
};

const updateCurationValidator = [
  ...updateCurationValidationRules,
  validate(checkRequiredFields),
];

module.exports = updateCurationValidator;
