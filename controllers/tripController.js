const tripService = require('../services/tripService');
const { TripDestinationDto, TripDto, TripDetailDto } = require('../dtos');

exports.getTripDestinations = async (req, res) => {
  try {
    const tripDestinations = await tripService.getTripDestinations();

    const tripDestinationDtos = TripDestinationDto.fromMany(tripDestinations);
    res.status(200).json(tripDestinationDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '여행 목적지 조회에 실패했습니다.',
    });
  }
};

exports.createTrip = async (req, res) => {
  try {
    const { userId } = req.user;
    const { title, destinations, startDate, endDate, spotIds } = req.body;

    const trip = await tripService.createTrip(
      userId,
      title,
      destinations,
      startDate,
      endDate,
      spotIds
    );

    const tripDto = TripDto.from(trip);
    res.status(201).json(tripDto);
  } catch (error) {
    res.status(400).json({
      message: error.message || '여행 생성에 실패했습니다.',
    });
  }
};

exports.getTrips = async (req, res) => {
  try {
    const { userId } = req.user;

    const trips = await tripService.getTrips(userId);

    const tripDtos = TripDto.fromMany(trips);
    res.status(200).json(tripDtos);
  } catch (error) {
    res.status(404).json({
      message: error.message || '여행 조회에 실패했습니다.',
    });
  }
};

exports.getTripById = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;

    const tripDetail = await tripService.getTripById(userId, tripId);

    const tripDetailDto = TripDetailDto.from(tripDetail);
    res.status(200).json(tripDetailDto);
  } catch (error) {
    res.status(404).json({
      message: error.message || '여행 조회에 실패했습니다.',
    });
  }
};
