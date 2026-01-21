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

    const { trip, transportation } = await tripService.getTripById(
      userId,
      tripId
    );

    const tripDetailDto = TripDetailDto.from(trip, transportation);
    res.status(200).json(tripDetailDto);
  } catch (error) {
    res.status(404).json({
      message: error.message || '여행 조회에 실패했습니다.',
    });
  }
};

exports.updateTrip = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;
    const { title, startDate, endDate } = req.body;

    const updatedTrip = await tripService.updateTrip(
      userId,
      tripId,
      title,
      startDate,
      endDate
    );

    const tripDto = TripDto.from(updatedTrip);
    res.status(200).json(tripDto);
  } catch (error) {
    res.status(400).json({
      message: error.message || '여행 수정에 실패했습니다.',
    });
  }
};

exports.deleteTrip = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;

    await tripService.deleteTrip(userId, tripId);

    res.status(204).json({
      message: '여행 삭제에 성공했습니다.',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || '여행 삭제에 실패했습니다.',
    });
  }
};

exports.createItinerary = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;
    const { spotId, day, order } = req.body;

    await tripService.createItinerary(userId, tripId, spotId, day, order);

    res.status(201).json({ message: '여행 일정 생성에 성공했습니다.' });
  } catch (error) {
    res.status(400).json({
      message: error.message || '여행 일정 생성에 실패했습니다.',
    });
  }
};

exports.moveItineraries = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;
    const { moves } = req.body;

    await tripService.moveItineraries(userId, tripId, moves);

    res.status(200).json({ message: '여행 일정이 성공적으로 이동되었습니다.' });
  } catch (error) {
    res.status(400).json({
      message: error.message || '여행 일정 이동에 실패했습니다.',
    });
  }
};

exports.deleteItinerary = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId, itineraryId } = req.params;

    await tripService.deleteItinerary(userId, tripId, itineraryId);

    res.status(204).json({ message: '여행 일정 삭제에 성공했습니다.' });
  } catch (error) {
    res.status(400).json({
      message: error.message || '여행 일정 삭제에 실패했습니다.',
    });
  }
};

exports.createInvitation = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;

    const invitationCode = await tripService.createInvitation(userId, tripId);

    res.status(201).json({ invitationCode });
  } catch (error) {
    res.status(400).json({
      message: error.message || '여행 초대 생성에 실패했습니다.',
    });
  }
};

exports.acceptInvitation = async (req, res) => {
  try {
    const { userId } = req.user;
    const { invitationCode } = req.params;

    const tripId = await tripService.acceptInvitation(userId, invitationCode);

    res.status(200).json({ tripId });
  } catch (error) {
    res.status(400).json({
      message: error.message || '여행 초대 수락에 실패했습니다.',
    });
  }
};

exports.getDocuments = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;

    const documents = await tripService.getDocuments(userId, tripId);

    res.status(200).json(documents);
  } catch (error) {
    res.status(404).json({
      message: error.message || '여행 문서 조회에 실패했습니다.',
    });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;

    const result = await tripService.getExpenses(userId, tripId);

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: error.message || '여행 경비 조회에 실패했습니다.',
    });
  }
};

exports.getAccommodations = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;

    const accommodations = await tripService.getAccommodations(userId, tripId);

    res.status(200).json({ accommodations });
  } catch (error) {
    res.status(404).json({
      message: error.message || '여행 숙소 조회에 실패했습니다.',
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { userId } = req.user;
    const { tripId } = req.params;

    const tasks = await tripService.getTasks(userId, tripId);

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).json({
      message: error.message || '여행 할 일 조회에 실패했습니다.',
    });
  }
};
