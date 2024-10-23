const User = require('../models/user');

exports.findUserById = async (id) => {
  return await User.findByPk(id);
};
