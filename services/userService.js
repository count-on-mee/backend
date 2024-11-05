const { User } = require('../models');

exports.createUser = async (user) => {
  const { name, nickname, email, profileImgUrl, oauthProvider, oauthId } = user;
  return User.create({
    name,
    nickname,
    email,
    profileImgUrl,
    oauthProvider,
    oauthId,
  });
};
