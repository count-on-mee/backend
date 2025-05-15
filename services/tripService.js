const {
  sequelize,
  TripDestination,
  Trip,
  TripDestinationRelation,
  TripUser,
  TripItinerary,
  TripDocument,
  TripDocumentExpense,
  TripDocumentAccommodation,
  TripDocumentSpotCandidate,
  TripDocumentTask,
} = require('../models');

const getTripDestinationIds = async (destinations) => {
  const tripDestinations = await TripDestination.findAll({
    where: {
      name: destinations,
    },
  });
  return tripDestinations.map(
    (tripDestination) => tripDestination.tripDestinationId
  );
};

exports.getTripDestinations = async () => {
  const tripDestinations = await TripDestination.findAll();
  return tripDestinations;
};

exports.createTrip = async (
  userId,
  title,
  destinations,
  startDate,
  endDate,
  spotIds
) => {
  const transaction = await sequelize.transaction();
  try {
    const trip = await Trip.create({
      title,
      startDate,
      endDate,
    });

    const tripDestinationIds = await getTripDestinationIds(destinations);
    if (tripDestinationIds && tripDestinationIds.length > 0) {
      const tripDestinations = tripDestinationIds.map((tripDestinationId) => ({
        tripId: trip.tripId,
        tripDestinationId,
      }));
      await TripDestinationRelation.bulkCreate(tripDestinations);
    }

    await TripUser.create({
      tripId: trip.tripId,
      userId,
    });

    if (spotIds && spotIds.length > 0) {
      // 여행 기간 계산 (일 단위)
      const start = new Date(startDate);
      const end = new Date(endDate);
      const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

      // 각 날짜별로 방문할 장소 수 계산
      const spotsPerDay = Math.ceil(spotIds.length / totalDays);

      // 데이터 생성
      const tripItineraries = spotIds.map((spotId, index) => {
        const day = Math.floor(index / spotsPerDay) + 1;
        const order = (index % spotsPerDay) + 1;

        return {
          tripId: trip.tripId,
          spotId,
          day,
          order,
        };
      });

      await TripItinerary.bulkCreate(tripItineraries);
    }

    const tripDocument = await TripDocument.create({
      tripId: trip.tripId,
    });

    const expenseTypes = [
      { type: 'transportation', detail: '수단명' },
      { type: 'accommodation', detail: '숙소명' },
      { type: 'meal', detail: '식당명' },
      { type: 'other', detail: '항목명' },
    ];
    const defaultTripDocumentExpenses = expenseTypes.map(
      ({ type, detail }) => ({
        tripDocumentId: tripDocument.tripDocumentId,
        expenseType: type,
        expenseDetail: detail,
        amount: 0,
      })
    );
    await TripDocumentExpense.bulkCreate(defaultTripDocumentExpenses);

    await transaction.commit();
    return trip;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
