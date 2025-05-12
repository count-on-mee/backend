const curationService = require('../services/curationService');

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
