class SpotReviewDto {
  static from(spotReview) {
    const {
      spotReviewId,
      spotId,
      content,
      createdAt,
      updatedAt,
      spotReviewImgs,
      user,
    } = spotReview;
    const { userId, nickname, imgUrl } = user;

    return {
      spotReviewId,
      spotId,
      content,
      createdAt,
      updatedAt,
      imgUrls: spotReviewImgs?.map((img) => img.imgUrl) || [],
      author: {
        userId,
        nickname,
        imgUrl,
      },
    };
  }

  static fromMany(spotReviews) {
    if (!Array.isArray(spotReviews)) {
      throw new Error('스팟 리뷰 배열이 필요합니다.');
    }
    return spotReviews.map((spotReview) => SpotReviewDto.from(spotReview));
  }
}

module.exports = SpotReviewDto;
