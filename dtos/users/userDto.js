class UserDto {
  static from(user) {
    if (!user) {
      throw new Error('사용자 정보가 필요합니다.');
    }

    if (!user.userId) {
      throw new Error('사용자 ID는 필수 항목입니다.');
    }
    if (!user.name) {
      throw new Error('사용자 이름은 필수 항목입니다.');
    }
    if (!user.nickname) {
      throw new Error('사용자 닉네임은 필수 항목입니다.');
    }
    if (!user.email) {
      throw new Error('사용자 이메일은 필수 항목입니다.');
    }
    if (!user.imgUrl) {
      throw new Error('프로필 이미지가 없습니다.');
    }

    const { userId, name, nickname, email, imgUrl } = user;
    return {
      userId,
      name,
      nickname,
      email,
      imgUrl,
    };
  }

  static fromMany(users) {
    if (!Array.isArray(users)) {
      throw new Error('사용자 배열이 필요합니다.');
    }
    return users.map((user) => UserDto.from(user));
  }
}

module.exports = UserDto;
