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

exports.deleteUser = async (userId) => {
  const deleted = await User.destroy({ where: { id: userId } });
  return deleted > 0;
}

exports.findOne = async (options) => {
  return await User.findOne(options);
}

exports.updateUser = async (userId, updateData) => {
  const [updated] = await User.update(updateData, { where: { userId }});
  if(!updated) return null;
  return await User.findOne ({ where: { userId }});
};