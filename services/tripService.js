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
  TripInvitation,
  TripItinerary,
  TripItineraryTransportation,
  TripDocument,
  TripDocumentExpense,
  TripDocumentAccommodation,
  TripDocumentTask,
} = require('../models');
const { Op } = require('sequelize');
const crypto = require('crypto');
const routeService = require('./routeService');
const { RedisCacheManager } = require('../utils');

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

const verifyTrip = async (tripId) => {
  const trip = await Trip.findOne({
    where: { tripId },
  });
  if (!trip) {
    throw new Error('여행 정보를 찾을 수 없습니다.');
  }
  return trip;
};
const verifyTripParticipant = async (userId, tripId) => {
  const tripParticipant = await TripUser.findOne({
    where: { tripId, userId },
  });
  if (!tripParticipant) {
    throw new Error('여행 참여자가 아닙니다.');
  }
  return tripParticipant;
};

const verifyItineraryOrder = async (tripId, day, order) => {
  const lastOrder = await TripItinerary.max('order', {
    where: { tripId, day },
  });
  if (lastOrder && order > lastOrder + 1) {
    throw new Error('유효하지 않은 일정 순서입니다.');
  }
  return lastOrder;
};

const verifyItinerary = async (tripId, tripItineraryIds) => {
  const itineraries = await TripItinerary.findAll({
    where: {
      tripItineraryId: tripItineraryIds,
      tripId,
    },
  });
  if (itineraries.length !== tripItineraryIds.length) {
    throw new Error('일부 일정을 찾을 수 없습니다.');
  }
  return itineraries;
};

exports.getTripById = async (userId, tripId) => {
  await verifyTripParticipant(userId, tripId);

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
  const trip = await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);

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
  const trip = await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);

  await trip.destroy();
};

exports.createItinerary = async (userId, tripId, spotId, day, order) => {
  await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);
  await verifyItineraryOrder(tripId, day, order);

  const transaction = await sequelize.transaction();

  try {
    const existedItineraries = await TripItinerary.findAll({
      where: {
        tripId,
        day,
        order: {
          [Op.gte]: order,
        },
      },
      order: [['order', 'DESC']],
      transaction,
    });

    for (const existedItinerary of existedItineraries) {
      await existedItinerary.increment('order', { transaction });
    }

    const newItinerary = await TripItinerary.create(
      {
        tripId,
        spotId,
        day,
        order,
      },
      { transaction }
    );

    const prevItinerary = await TripItinerary.findOne({
      where: {
        tripId,
        day,
        order: order - 1,
      },
      transaction,
    });

    const nextItinerary = await TripItinerary.findOne({
      where: {
        tripId,
        day,
        order: order + 1,
      },
      transaction,
    });

    if (prevItinerary && nextItinerary) {
      await TripItineraryTransportation.destroy({
        where: {
          departureTripItineraryId: prevItinerary.tripItineraryId,
          destinationTripItineraryId: nextItinerary.tripItineraryId,
        },
        transaction,
      });
    }

    if (prevItinerary) {
      const [prevSpot, newSpot] = await Promise.all([
        Spot.findByPk(prevItinerary.spotId),
        Spot.findByPk(spotId),
      ]);

      const { durationMinute, distanceKilometer } =
        await routeService.getDuration(prevSpot, newSpot);

      await TripItineraryTransportation.create(
        {
          departureTripItineraryId: prevItinerary.tripItineraryId,
          destinationTripItineraryId: newItinerary.tripItineraryId,
          type: 'CAR',
          durationMinute,
          distanceKilometer,
        },
        { transaction }
      );
    }

    if (nextItinerary) {
      const [newSpot, nextSpot] = await Promise.all([
        Spot.findByPk(spotId),
        Spot.findByPk(nextItinerary.spotId),
      ]);

      const { durationMinute, distanceKilometer } =
        await routeService.getDuration(newSpot, nextSpot);

      await TripItineraryTransportation.create(
        {
          departureTripItineraryId: newItinerary.tripItineraryId,
          destinationTripItineraryId: nextItinerary.tripItineraryId,
          type: 'CAR',
          durationMinute,
          distanceKilometer,
        },
        { transaction }
      );
    }

    await transaction.commit();
    return newItinerary;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.moveItineraries = async (userId, tripId, moves) => {
  await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);
  await verifyItinerary(
    tripId,
    moves.map((move) => move.itineraryId)
  );

  const transaction = await sequelize.transaction();

  try {
    for (const move of moves) {
      const { itineraryId, day, order } = move;

      const itinerary = await TripItinerary.findOne({
        where: { tripItineraryId: itineraryId },
        transaction,
      });

      await TripItineraryTransportation.destroy({
        where: {
          [Op.or]: [
            { departureTripItineraryId: itineraryId },
            { destinationTripItineraryId: itineraryId },
          ],
        },
        transaction,
      });

      if (itinerary.day !== day) {
        const existedItineraries = await TripItinerary.findAll({
          where: {
            tripId,
            day: itinerary.day,
            order: { [Op.gt]: itinerary.order },
          },
          order: [['order', 'DESC']],
          transaction,
        });

        for (const existedItinerary of existedItineraries) {
          await existedItinerary.increment('order', { by: -1, transaction });
        }

        const newDayItineraries = await TripItinerary.findAll({
          where: {
            tripId,
            day,
            order: { [Op.gte]: order },
          },
          order: [['order', 'DESC']],
          transaction,
        });

        for (const newDayItinerary of newDayItineraries) {
          await newDayItinerary.increment('order', { by: 1, transaction });
        }
      } else if (itinerary.order !== order) {
        if (itinerary.order < order) {
          const betweenItineraries = await TripItinerary.findAll({
            where: {
              tripId,
              day,
              order: {
                [Op.gt]: itinerary.order,
                [Op.lte]: order,
              },
            },
            order: [['order', 'DESC']],
            transaction,
          });

          for (const betweenItinerary of betweenItineraries) {
            await betweenItinerary.increment('order', { by: -1, transaction });
          }
        } else {
          const betweenItineraries = await TripItinerary.findAll({
            where: {
              tripId,
              day,
              order: {
                [Op.gte]: order,
                [Op.lt]: itinerary.order,
              },
            },
            order: [['order', 'ASC']],
            transaction,
          });

          for (const betweenItinerary of betweenItineraries) {
            await betweenItinerary.increment('order', { by: 1, transaction });
          }
        }
      }

      await itinerary.update({ day, order }, { transaction });

      const [prevItinerary, nextItinerary] = await Promise.all([
        TripItinerary.findOne({
          where: {
            tripId,
            day,
            order: order - 1,
          },
          transaction,
        }),
        TripItinerary.findOne({
          where: {
            tripId,
            day,
            order: order + 1,
          },
          transaction,
        }),
      ]);

      if (prevItinerary) {
        const [prevSpot, currentSpot] = await Promise.all([
          Spot.findByPk(prevItinerary.spotId),
          Spot.findByPk(itinerary.spotId),
        ]);

        const { durationMinute, distanceKilometer } =
          await routeService.getDuration(prevSpot, currentSpot);

        await TripItineraryTransportation.create(
          {
            departureTripItineraryId: prevItinerary.tripItineraryId,
            destinationTripItineraryId: itineraryId,
            type: 'CAR',
            durationMinute,
            distanceKilometer,
          },
          { transaction }
        );
      }

      if (nextItinerary) {
        const [currentSpot, nextSpot] = await Promise.all([
          Spot.findByPk(itinerary.spotId),
          Spot.findByPk(nextItinerary.spotId),
        ]);

        const { durationMinute, distanceKilometer } =
          await routeService.getDuration(currentSpot, nextSpot);

        await TripItineraryTransportation.create(
          {
            departureTripItineraryId: itineraryId,
            destinationTripItineraryId: nextItinerary.tripItineraryId,
            type: 'CAR',
            durationMinute,
            distanceKilometer,
          },
          { transaction }
        );
      }
    }

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.deleteItinerary = async (userId, tripId, itineraryId) => {
  await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);
  await verifyItinerary(tripId, [itineraryId]);

  const transaction = await sequelize.transaction();

  try {
    const itinerary = await TripItinerary.findOne({
      where: { tripItineraryId: itineraryId },
      transaction,
    });

    await TripItineraryTransportation.destroy({
      where: {
        [Op.or]: [
          { departureTripItineraryId: itineraryId },
          { destinationTripItineraryId: itineraryId },
        ],
      },
      transaction,
    });

    const [prevItinerary, nextItinerary] = await Promise.all([
      TripItinerary.findOne({
        where: {
          tripId,
          day: itinerary.day,
          order: itinerary.order - 1,
        },
        transaction,
      }),
      TripItinerary.findOne({
        where: {
          tripId,
          day: itinerary.day,
          order: itinerary.order + 1,
        },
        transaction,
      }),
    ]);

    if (prevItinerary && nextItinerary) {
      const [prevSpot, nextSpot] = await Promise.all([
        Spot.findByPk(prevItinerary.spotId),
        Spot.findByPk(nextItinerary.spotId),
      ]);

      const { durationMinute, distanceKilometer } =
        await routeService.getDuration(prevSpot, nextSpot);

      await TripItineraryTransportation.create(
        {
          departureTripItineraryId: prevItinerary.tripItineraryId,
          destinationTripItineraryId: nextItinerary.tripItineraryId,
          type: 'CAR',
          durationMinute,
          distanceKilometer,
        },
        { transaction }
      );
    }

    await itinerary.destroy({ transaction });

    const remainingItineraries = await TripItinerary.findAll({
      where: {
        tripId,
        day: itinerary.day,
        order: { [Op.gt]: itinerary.order },
      },
      order: [['order', 'ASC']],
      transaction,
    });

    for (const remainingItinerary of remainingItineraries) {
      await remainingItinerary.increment('order', { by: -1, transaction });
    }

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

exports.createInvitation = async (userId, tripId) => {
  await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);

  const existedInvitation = await TripInvitation.findOne({
    where: { tripId },
  });

  if (existedInvitation) {
    return existedInvitation.invitationCode;
  }

  const invitationCode = crypto.randomBytes(16).toString('hex');
  const invitation = await TripInvitation.create({
    tripId,
    invitationCode,
  });

  return invitation.invitationCode;
};

exports.acceptInvitation = async (userId, invitationCode) => {
  const invitation = await TripInvitation.findOne({
    where: { invitationCode },
  });

  if (!invitation) {
    throw new Error('초대 코드를 찾을 수 없습니다.');
  }

  const trip = await Trip.findOne({
    where: { tripId: invitation.tripId },
  });

  const tripParticipant = await TripUser.findOne({
    where: { tripId: trip.tripId, userId },
  });

  if (tripParticipant) {
    throw new Error('이미 참여한 여행입니다.');
  }

  await TripUser.create({
    tripId: trip.tripId,
    userId,
  });

  return trip.tripId;
};

exports.getDocuments = async (userId, tripId) => {
  await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);

  const document = await TripDocument.findOne({
    where: { tripId },
    attributes: ['tripDocumentId'],
  });

  const { tripDocumentId } = document;
  const expenses = await RedisCacheManager.getDocument(
    tripDocumentId,
    'expenses'
  );
  const accommodations = await RedisCacheManager.getDocument(
    tripDocumentId,
    'accommodations'
  );
  const tasks = await RedisCacheManager.getDocument(tripDocumentId, 'tasks');

  return { document, expenses, accommodations, tasks };
};

exports.getExpenses = async (userId, tripId) => {
  await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);

  const { tripDocumentId } = await TripDocument.findOne({
    where: { tripId },
    attributes: ['tripDocumentId'],
  });

  return await RedisCacheManager.getDocument(tripDocumentId, 'expenses');
};

exports.getAccommodations = async (userId, tripId) => {
  await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);

  const { tripDocumentId } = await TripDocument.findOne({
    where: { tripId },
    attributes: ['tripDocumentId'],
  });

  return await RedisCacheManager.getDocument(tripDocumentId, 'accommodations');
};

exports.getTasks = async (userId, tripId) => {
  await verifyTrip(tripId);
  await verifyTripParticipant(userId, tripId);

  const { tripDocumentId } = await TripDocument.findOne({
    where: { tripId },
    attributes: ['tripDocumentId'],
  });

  return await RedisCacheManager.getDocument(tripDocumentId, 'tasks');
};
