class UserDto {
  static ofJWT(user) {
    return {
      userId: user.userId,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      profileImgUrl: user.profileImgUrl,
    };
  }

  static ofDB(user) {
    return {
      userId: user.user_id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      profileImgUrl: user.profile_img_url,
    };
  }
}

module.exports = UserDto;
