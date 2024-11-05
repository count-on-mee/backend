const { validationResult } = require('express-validator');
const createUserValidator = require('./user/createUserValidator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

const validators = {
  validate,
  createUserValidator,
};

module.exports = validators;
