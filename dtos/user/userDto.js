class UserDto {
  static of(user) {
    const { userId, name, nickname, email, profileImgUrl } = user;
    return {
      userId,
      name,
      nickname,
      email,
      profileImgUrl,
    };
  }
}

module.exports = UserDto;
