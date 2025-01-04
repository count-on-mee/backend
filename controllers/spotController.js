const spotService = require('../services/spotService');
const { SpotPhotoDump, SpotPhotoDumpImg } = require('../models');
const auth = require('../middlewares/auth');

exports.getSpot = async (req, res) => {
  try {
    const spotId = req.params.spotId;
    const spot = await spotService.getSpotById(spotId);
    if (spot) {
      res.status(200).json(spot);
    } else {
      res.status(404).json({ message: 'Spot not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSpotsByLocation = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { lat, lng, zoom } = req.query;
    const spots = await spotService.getSpotsByLocation(
      userId,
      parseFloat(lat),
      parseFloat(lng),
      parseInt(zoom)
    );
    res.status(200).json(spots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPhotoDump = async (req, res) => {
  try {
    const spotId = req.params.spotId;
    const photoDump = await SpotPhotoDump.findAll({ 
      where: { spotId },
      include: [{ model: SpotPhotoDumpImg }],
    });
    res.status(200).json(photoDump);
  } catch (error) {
    res.status(500).json({ error: 'photodump 가져오기 실패' }); 
  }
};

exports.addPhotoDump = [
  auth.verifyToken,
  async (req, res) => {
    try {
      const spotId = req.params.spotId;
      console.log(spotId);
      const userId = req.user?.userId;
      console.log(userId);
      const content = req.body.text;
      console.log(content);
      const files = req.files;
      console.log(files);
      const baseUrl = `${req.protocol}://${req.get('host')}`;
        files.imgUrl = `${baseUrl}/uploads/${files.filename}`;

        const newPhotoDump = await SpotPhotoDump.create({
          spotId: spotId,
          userId: userId,
          content: content,
        }, { returning: true });
        
        console.log('생성된 Photo Dump:', newPhotoDump);
        console.log('생성된 Photo Dump ID:', newPhotoDump.id);
        
        const newPhotoDumpImg = files.map((file) => ({
          spotPhotoDumpId: newPhotoDump.get('spotPhotoDumpId'),
          imgUrl: `${baseUrl}/uploads/${file.filename}`,
        }));
        
        console.log('삽입할 이미지 데이터:', newPhotoDumpImg);
        
        await SpotPhotoDumpImg.bulkCreate(newPhotoDumpImg);
      

      res.status(201).json({ message: 'photodump 추가 완료'});
    } catch (error) {
      res.status(500).json({ error: 'Photodump 추가 실패'});
    }
  },
];