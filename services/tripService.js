const {
  sequelize,
  User,
  Spot,
  SpotCategory,
  SpotImg,
  TripDestination,
  Trip,
  TripDestinationRelation,
  TripUser,
  TripItinerary,
  TripItineraryTransportation,
  TripDocument,
  TripDocumentExpense,
  TripDocumentAccommodation,
  TripDocumentSpotCandidate,
  TripDocumentTask,
} = require('../models');
const { Op } = require('sequelize');
const routeService = require('./routeService');

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

const createTripBasicInfo = async (title, startDate, endDate, transaction) => {
  return await Trip.create(
    {
      title,
      startDate,
      endDate,
    },
    { transaction }
  );
};

const createTripDestinations = async (tripId, destinations, transaction) => {
  const tripDestinationIds = await getTripDestinationIds(destinations);
  if (tripDestinationIds && tripDestinationIds.length > 0) {
    const tripDestinations = tripDestinationIds.map((tripDestinationId) => ({
      tripId,
      tripDestinationId,
    }));
    await TripDestinationRelation.bulkCreate(tripDestinations, { transaction });
  }
};

const createTripParticipant = async (tripId, userId, transaction) => {
  await TripUser.create(
    {
      tripId,
      userId,
    },
    { transaction }
  );
};

const createTripItineraries = async (
  tripId,
  spotIds,
  startDate,
  endDate,
  transaction
) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  const spotsPerDay = Math.ceil(spotIds.length / totalDays);

  const tripItineraries = spotIds.map((spotId, index) => {
    const day = Math.floor(index / spotsPerDay) + 1;
    const order = (index % spotsPerDay) + 1;

    return {
      tripId,
      spotId,
      day,
      order,
    };
  });

  return await TripItinerary.bulkCreate(tripItineraries, { transaction });
};

const createTripItineraryTransportation = async (
  tripItineraries,
  transaction
) => {
  const result = [];

  for (let i = 0; i < tripItineraries.length - 1; i++) {
    const currentItinerary = tripItineraries[i];
    const nextItinerary = tripItineraries[i + 1];

    if (currentItinerary.day === nextItinerary.day) {
      try {
        const [currentSpot, nextSpot] = await Promise.all([
          Spot.findByPk(currentItinerary.spotId),
          Spot.findByPk(nextItinerary.spotId),
        ]);

        const { durationMinute, distanceKilometer } =
          await routeService.getDuration(currentSpot, nextSpot);

        const transportation = await TripItineraryTransportation.create(
          {
            departureTripItineraryId: currentItinerary.tripItineraryId,
            destinationTripItineraryId: nextItinerary.tripItineraryId,
            type: 'CAR',
            durationMinute,
            distanceKilometer,
          },
          { transaction }
        );

        result.push(transportation);
      } catch (error) {
        const transportation = await TripItineraryTransportation.create(
          {
            departureTripItineraryId: currentItinerary.tripItineraryId,
            destinationTripItineraryId: nextItinerary.tripItineraryId,
            type: 'CAR',
            durationMinute: 0,
            distanceKilometer: 0,
          },
          { transaction }
        );

        result.push(transportation);
      }
    }
  }

  return result;
};

const createTripDocument = async (tripId, transaction) => {
  const tripDocument = await TripDocument.create(
    {
      tripId,
    },
    { transaction }
  );

  const expenseTypes = [
    { type: 'transportation', detail: '수단명' },
    { type: 'accommodation', detail: '숙소명' },
    { type: 'meal', detail: '식당명' },
    { type: 'other', detail: '항목명' },
  ];

  const defaultTripDocumentExpenses = expenseTypes.map(({ type, detail }) => ({
    tripDocumentId: tripDocument.tripDocumentId,
    type,
    detail,
    amount: 0,
  }));

  await TripDocumentExpense.bulkCreate(defaultTripDocumentExpenses, {
    transaction,
  });
  return tripDocument;
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
    const trip = await createTripBasicInfo(
      title,
      startDate,
      endDate,
      transaction
    );

    await createTripDestinations(trip.tripId, destinations, transaction);

    await createTripParticipant(trip.tripId, userId, transaction);

    if (spotIds && spotIds.length > 0) {
      const tripItineraries = await createTripItineraries(
        trip.tripId,
        spotIds,
        startDate,
        endDate,
        transaction
      );

      await createTripItineraryTransportation(tripItineraries, transaction);
    }

    await createTripDocument(trip.tripId, transaction);

    await transaction.commit();
    return trip;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.getTrips = async (userId) => {
  const trips = await Trip.findAll({
    include: [
      {
        model: User,
        as: 'participants',
        attributes: ['userId'],
        through: {
          attributes: [],
        },
        where: {
          userId,
        },
      },
    ],
  });

  return trips;
};

exports.getTripById = async (userId, tripId) => {
  const tripParticipant = await TripUser.findOne({
    where: { tripId, userId },
  });
  if (!tripParticipant) {
    throw new Error('여행 참여자가 아닙니다.');
  }

  const trip = await Trip.findOne({
    where: { tripId },
    include: [
      {
        model: TripItinerary,
        as: 'itineraries',
        attributes: ['tripItineraryId', 'spotId', 'day', 'order'],
        include: [
          {
            model: Spot,
            as: 'spot',
            attributes: ['spotId', 'name', 'address', 'tel', 'location'],
            include: [
              {
                model: SpotCategory,
                as: 'spotCategories',
                attributes: ['type'],
                through: { attributes: [] },
              },
              {
                model: SpotImg,
                as: 'spotImgs',
                attributes: ['imgUrl'],
              },
            ],
          },
        ],
      },
    ],
    order: [
      ['itineraries', 'day', 'ASC'],
      ['itineraries', 'order', 'ASC'],
    ],
  });

  const transportation = await TripItineraryTransportation.findAll({
    where: {
      [Op.or]: [
        {
          departureTripItineraryId: trip.itineraries.map(
            (itinerary) => itinerary.tripItineraryId
          ),
        },
        {
          destinationTripItineraryId: trip.itineraries.map(
            (itinerary) => itinerary.tripItineraryId
          ),
        },
      ],
    },
    attributes: [
      'departureTripItineraryId',
      'destinationTripItineraryId',
      'type',
      'durationMinute',
      'distanceKilometer',
    ],
  });

  return { trip, transportation };
};

exports.updateTrip = async (userId, tripId, title, startDate, endDate) => {
  const trip = await Trip.findOne({
    where: { tripId },
  });
  if (!trip) {
    throw new Error('여행 정보를 찾을 수 없습니다.');
  }

  const tripParticipant = await TripUser.findOne({
    where: { tripId, userId },
  });
  if (!tripParticipant) {
    throw new Error('여행 참여자가 아닙니다.');
  }

  const updateData = {};
  if (title) {
    updateData.title = title;
  }
  if (startDate) {
    updateData.startDate = startDate;
  }
  if (endDate) {
    updateData.endDate = endDate;
  }

  await trip.update(updateData);
  return trip;
};

exports.deleteTrip = async (userId, tripId) => {
  const trip = await Trip.findOne({
    where: { tripId },
  });
  if (!trip) {
    throw new Error('여행 정보를 찾을 수 없습니다.');
  }

  const tripParticipant = await TripUser.findOne({
    where: { tripId, userId },
  });
  if (!tripParticipant) {
    throw new Error('여행 참여자가 아닙니다.');
  }

  await trip.destroy();
};
