const { validationResult } = require('express-validator');
const createUserValidator = require('./user/createUserValidator');
const updateUserValidator = require('./user/updateUserValidator');

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
  updateUserValidator,
};

module.exports = validators;
