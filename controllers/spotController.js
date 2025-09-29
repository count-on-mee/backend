const spotService = require('../services/spotService');
const { SpotDto, SpotReviewDto } = require('../dtos');

exports.getMySpotReviews = async (req, res) => {
  try {
    const { userId } = req.user;

    const spotReviews = await spotService.getMySpotReviews(userId);

    const spotReviewDtos = SpotReviewDto.fromMany(spotReviews);
    res.status(200).json(spotReviewDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '내 리뷰 조회에 실패했습니다.',
    });
  }
};

exports.getSpots = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { lat, lng, zoom } = req.query;

    const spots = await spotService.getSpots(
      userId,
      parseFloat(lat),
      parseFloat(lng),
      parseInt(zoom)
    );

    const spotDtos = SpotDto.fromMany(spots);
    res.status(200).json(spotDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '스팟 조회에 실패했습니다.',
    });
  }
};

exports.getSpotById = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { spotId } = req.params;

    const spot = await spotService.getSpotById(userId, spotId);

    const spotDto = SpotDto.from(spot);
    res.status(200).json(spotDto);
  } catch (error) {
    res.status(404).json({
      message: error.message || '스팟 조회에 실패했습니다.',
    });
  }
};

exports.getSpotReviewsBySpotId = async (req, res) => {
  try {
    const { spotId } = req.params;

    const spotReviews = await spotService.getSpotReviewsBySpotId(spotId);

    const spotReviewDtos = SpotReviewDto.fromMany(spotReviews);
    res.status(200).json(spotReviewDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '스팟 리뷰 조회에 실패했습니다.',
    });
  }
};

exports.createSpotReview = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { spotId } = req.params;
    const { content } = req.body;
    const reviewImages = req.files;

    await spotService.createSpotReview(userId, spotId, content, reviewImages);

    res.status(201).json({ message: '리뷰가 생성되었습니다.' });
  } catch (error) {
    res.status(400).json({
      message: error.message || '리뷰 생성에 실패했습니다.',
    });
  }
};

exports.searchSpots = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { name: spotName, categories } = req.query;
    const spotCategories = categories
      ? Array.isArray(categories)
        ? categories
        : [categories]
      : [];

    const searchedSpots = await spotService.searchSpots(
      userId,
      spotName,
      spotCategories
    );

    const searchedSpotDtos = SpotDto.fromMany(searchedSpots);
    res.status(200).json(searchedSpotDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '스팟 검색에 실패했습니다.',
    });
  }
};

exports.createSpot = async (req, res) => {
  try {
    const { name, address, tel, latitude, longitude, categories } = req.body;
    const spotImages = req.files;

    await spotService.createSpot(
      name,
      address,
      tel,
      latitude,
      longitude,
      categories,
      spotImages
    );

    res.status(201).json({ message: '스팟이 생성되었습니다.' });
  } catch (error) {
    res.status(400).json({
      message: error.message || '스팟 생성에 실패했습니다.',
    });
  }
};

exports.deleteSpotReview = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { spotReviewId } = req.params;

    await spotService.deleteSpotReview(userId, spotReviewId);

    res.status(204).json({ message: '리뷰가 삭제되었습니다.' });
  } catch (error) {
    res.status(404).json({
      message: error.message || '리뷰 삭제에 실패했습니다.',
    });
  }
};

exports.updateSpotReview = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { spotReviewId } = req.params;
    const { content, deleteImgUrls } = req.body;
    const reviewImages = req.files;

    await spotService.updateSpotReview(
      userId,
      spotReviewId,
      content,
      deleteImgUrls,
      reviewImages
    );

    res.status(204).json({ message: '리뷰가 수정되었습니다.' });
  } catch (error) {
    res.status(400).json({
      message: error.message || '리뷰 수정에 실패했습니다.',
    });
  }
};
