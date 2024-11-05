const { User } = require('../models');

exports.createUser = async (user) => {
  const { name, nickname, email, profile_img_url, oauth_provider, oauth_id } =
    user;
  return User.create({
    name,
    nickname,
    email,
    profile_img_url,
    oauth_provider,
    oauth_id,
  });
};
