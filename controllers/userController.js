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
