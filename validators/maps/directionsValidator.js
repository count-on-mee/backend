const { body } = require('express-validator');
const { validate } = require('../validate');

const pointRules = (path) => [
  body(`${path}.lat`)
    .exists()
    .withMessage(`${path}.lat 는 필수입니다.`)
    .isFloat({ min: -90, max: 90 })
    .withMessage(`${path}.lat 는 -90에서 90 사이여야 합니다.`),
  body(`${path}.lng`)
    .exists()
    .withMessage(`${path}.lng 는 필수입니다.`)
    .isFloat({ min: -180, max: 180 })
    .withMessage(`${path}.lng 는 -180에서 180 사이여야 합니다.`),
  body(`${path}.name`)
    .exists()
    .withMessage(`${path}.name 는 필수입니다.`)
    .isString()
    .isLength({ min: 1, max: 100 })
    .withMessage(`${path}.name 길이는 1자 이상 100자 이하여야 합니다.`),
];

const directionsValidationRules = [
  ...pointRules('origin'),
  ...pointRules('destination'),
  body('waypoints')
    .optional({ nullable: true })
    .isArray()
    .withMessage('waypoints 는 배열이어야 합니다.'),
  body('waypoints.*.lat')
    .optional({ nullable: true })
    .isFloat({ min: -90, max: 90 })
    .withMessage('waypoints.*.lat 는 -90에서 90 사이여야 합니다.'),
  body('waypoints.*.lng')
    .optional({ nullable: true })
    .isFloat({ min: -180, max: 180 })
    .withMessage('waypoints.*.lng 는 -180에서 180 사이여야 합니다.'),
  body('waypoints.*.name')
    .optional({ nullable: true })
    .isString()
    .isLength({ min: 1, max: 100 })
    .withMessage('waypoints.*.name 길이는 1자 이상 100자 이하여야 합니다.'),
];

const directionsValidator = [...directionsValidationRules, validate()];

module.exports = directionsValidator;
