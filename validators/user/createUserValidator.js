const { body } = require('express-validator');

const createUserValidator = [
  body('name')
    .isString()
    .isLength({ min: 1, max: 50 })
    .withMessage('Name must be between 1 and 50 characters long'),
];

module.exports = createUserValidator;
