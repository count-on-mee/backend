const UserDto = require('../../../../dtos/users/userDto');

describe('UserDto 클래스 테스트', () => {
  // 테스트에 사용할 유효한 사용자 데이터
  const userData = {
    userId: '123e4567-e89b-12d3-a456-426614174000',
    name: '홍길동',
    nickname: '행복한 호랑이',
    email: 'test@example.com',
    profileImgUrl: 'https://example.com/profile.jpg',
    oauthProvider: 'google',
    oauthId: '12345678',
    createdAt: new Date('2025-04-01'),
    updatedAt: new Date('2025-04-01'),
  };

  describe('from 메서드 테스트', () => {
    it('유효한 Sequelize 사용자 객체를 DTO로 변환해야 함', () => {
      // Given
      const user = userData;

      // When
      const result = UserDto.from(user);

      // Then
      expect(result).toEqual({
        userId: '123e4567-e89b-12d3-a456-426614174000',
        name: '홍길동',
        nickname: '행복한 호랑이',
        email: 'test@example.com',
        profileImgUrl: 'https://example.com/profile.jpg',
      });
    });

    it('사용자 정보가 null이면 에러를 발생시켜야 함', () => {
      // When & Then
      expect(() => UserDto.from(null)).toThrow('사용자 정보가 필요합니다.');
    });

    it('사용자 정보가 undefined면 에러를 발생시켜야 함', () => {
      // When & Then
      expect(() => UserDto.from(undefined)).toThrow(
        '사용자 정보가 필요합니다.'
      );
    });

    it('userId가 없으면 에러를 발생시켜야 함', () => {
      // Given
      const { userId, ...userWithoutId } = userData;
      const user = userWithoutId;

      // When & Then
      expect(() => UserDto.from(user)).toThrow('사용자 ID는 필수 항목입니다.');
    });

    it('name이 없으면 에러를 발생시켜야 함', () => {
      // Given
      const { name, ...userWithoutName } = userData;
      const user = userWithoutName;

      // When & Then
      expect(() => UserDto.from(user)).toThrow(
        '사용자 이름은 필수 항목입니다.'
      );
    });

    it('nickname이 없으면 에러를 발생시켜야 함', () => {
      // Given
      const { nickname, ...userWithoutNickname } = userData;
      const user = userWithoutNickname;

      // When & Then
      expect(() => UserDto.from(user)).toThrow(
        '사용자 닉네임은 필수 항목입니다.'
      );
    });

    it('email이 없으면 에러를 발생시켜야 함', () => {
      // Given
      const { email, ...userWithoutEmail } = userData;
      const user = userWithoutEmail;

      // When & Then
      expect(() => UserDto.from(user)).toThrow(
        '사용자 이메일은 필수 항목입니다.'
      );
    });

    it('profileImgUrl이 없으면 에러를 발생시켜야 함', () => {
      // Given
      const { profileImgUrl, ...userWithoutProfileImg } = userData;
      const user = userWithoutProfileImg;

      // When & Then
      expect(() => UserDto.from(user)).toThrow(
        '사용자 프로필 이미지는 필수 항목입니다.'
      );
    });
  });

  describe('fromMany 메서드 테스트', () => {
    it('유효한 Sequelize 사용자 배열을 DTO 배열로 변환해야 함', () => {
      // Given
      const user1 = userData;
      const user2 = {
        userId: '223e4567-e89b-12d3-a456-426614174001',
        name: '김철수',
        nickname: '즐거운 토끼',
        email: 'test2@example.com',
        profileImgUrl: 'https://example.com/profile2.jpg',
        oauthProvider: 'kakao',
        oauthId: '87654321',
        createdAt: new Date('2025-04-01'),
        updatedAt: new Date('2025-04-01'),
      };

      const users = [user1, user2];

      // When
      const result = UserDto.fromMany(users);

      // Then
      expect(result).toEqual([
        {
          userId: '123e4567-e89b-12d3-a456-426614174000',
          name: '홍길동',
          nickname: '행복한 호랑이',
          email: 'test@example.com',
          profileImgUrl: 'https://example.com/profile.jpg',
        },
        {
          userId: '223e4567-e89b-12d3-a456-426614174001',
          name: '김철수',
          nickname: '즐거운 토끼',
          email: 'test2@example.com',
          profileImgUrl: 'https://example.com/profile2.jpg',
        },
      ]);
    });

    it('배열이 아닌 값이 전달되면 에러를 발생시켜야 함', () => {
      // When & Then
      expect(() => UserDto.fromMany('not an array')).toThrow(
        '사용자 배열이 필요합니다.'
      );
      expect(() => UserDto.fromMany({})).toThrow('사용자 배열이 필요합니다.');
      expect(() => UserDto.fromMany(null)).toThrow('사용자 배열이 필요합니다.');
      expect(() => UserDto.fromMany(undefined)).toThrow(
        '사용자 배열이 필요합니다.'
      );
    });

    it('배열 내 잘못된 사용자 객체가 있으면 에러를 발생시켜야 함', () => {
      // Given - 두 번째 사용자는 userId가 누락됨
      const users = [
        userData,
        {
          name: '김철수',
          nickname: '즐거운 토끼',
          email: 'test2@example.com',
          profileImgUrl: 'https://example.com/profile2.jpg',
          oauthProvider: 'kakao',
          oauthId: '87654321',
          createdAt: new Date('2025-04-01'),
          updatedAt: new Date('2025-04-01'),
        },
      ];

      // When & Then
      expect(() => UserDto.fromMany(users)).toThrow(
        '사용자 ID는 필수 항목입니다.'
      );
    });

    it('빈 배열이 전달되면 빈 배열을 반환해야 함', () => {
      // When
      const result = UserDto.fromMany([]);

      // Then
      expect(result).toEqual([]);
    });
  });
});
