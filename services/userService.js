const { User } = require('../models');
const { S3Uploader } = require('../utils');

exports.getUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    return user;
  } catch (error) {
    throw error;
  }
};

exports.updateUser = async (userId, userData) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    const updateData = {};
    if (userData.nickname !== undefined) {
      updateData.nickname = userData.nickname;
    }
    if (userData.profileImgUrl) {
      updateData.profileImgUrl = userData.profileImgUrl.location;
    }

    await user.update(updateData);
    return user;
  } catch (error) {
    throw error;
  }
};
