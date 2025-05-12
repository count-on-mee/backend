const curationService = require('../services/curationService');
const { CurationDto } = require('../dtos');

exports.createCuration = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, description, categories, spots } = req.body;

    await curationService.createCuration(
      userId,
      name,
      description,
      categories,
      spots
    );

    res.status(201).json({ message: '큐레이션이 생성되었습니다.' });
  } catch (error) {
    res.status(400).json({
      message: error.message || '큐레이션 생성에 실패했습니다.',
    });
  }
};

exports.getCurations = async (req, res) => {
  try {
    const userId = req.user?.userId;

    const curations = await curationService.getCurations(userId);

    const curationDtos = CurationDto.fromMany(curations);
    res.status(200).json(curationDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '큐레이션 조회에 실패했습니다.',
    });
  }
};

exports.getCurationById = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { curationId } = req.params;

    const curation = await curationService.getCurationById(userId, curationId);

    const curationDto = CurationDto.from(curation);
    res.status(200).json(curationDto);
  } catch (error) {
    res.status(404).json({
      message: error.message || '큐레이션 조회에 실패했습니다.',
    });
  }
};

exports.searchCurations = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { name: curationName, categories } = req.query;
    const curationCategories = categories
      ? Array.isArray(categories)
        ? categories
        : [categories]
      : [];

    const searchedCurations = await curationService.searchCurations(
      userId,
      curationName,
      curationCategories
    );

    const searchedCurationDtos = CurationDto.fromMany(searchedCurations);
    res.status(200).json(searchedCurationDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '큐레이션 검색에 실패했습니다.',
    });
  }
};
