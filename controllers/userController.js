const userService = require('../services/userService');
const { UserDto } = require('../dtos');

exports.getUser = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await userService.getUserById(userId);

    const userDto = UserDto.from(user);
    res.status(200).json(userDto);
  } catch (error) {
    res.status(404).json({
      message: error.message || '사용자 정보를 조회하는데 실패했습니다.',
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.user;
    const { nickname } = req.body;
    const profileImgUrl = req.file;

    const userData = {
      nickname,
      profileImgUrl,
    };

    const updatedUser = await userService.updateUser(userId, userData);

    const userDto = UserDto.from(updatedUser);
    res.status(200).json(userDto);
  } catch (error) {
    res.status(400).json({
      message: error.message || '프로필 업데이트에 실패했습니다.',
    });
  }
};
