const { User } = require('../models');

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

exports.updateUser = async (userId, nickname, imgUrl) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    const updateData = {};
    if (nickname) {
      updateData.nickname = nickname;
    }
    if (imgUrl) {
      const baseUrl = process.env.AWS_PUBLIC_BASE_URL;
      const key = imgUrl.key;

      const normalizedBase = baseUrl.replace(/\/$/, '');
      const normalizedKey = key.startsWith('/') ? key.slice(1) : key;

      updateData.imgUrl = `${normalizedBase}/${normalizedKey}`;
    }

    await user.update(updateData);
    return user;
  } catch (error) {
    throw error;
  }
};
