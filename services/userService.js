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
