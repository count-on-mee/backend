const { where } = require('sequelize');
const {
  Trip,
  TripItinerary,
  TripUser,
  Spot,
  SpotCategory,
  SpotCategoryRelation,
} = require('../models');
const { differenceInDays } = require('date-fns');

const createTrip = async (userId, tripData) => {
  const { title, destination, startDate, endDate, spotIds } = tripData;

  try {
    const newTrip = await Trip.create({
      title,
      destination,
      startDate,
      endDate,
    });

    const daysBetween =
      differenceInDays(new Date(endDate), new Date(startDate)) + 1;

    // spotIds를 category별로 분류
    const categorizedSpots = {};
    for (const spotId of spotIds) {
      const spotCategoryRelations = await SpotCategoryRelation.findAll({
        where: { spotId },
        include: [{ model: SpotCategory, attributes: ['type'] }],
      });

      for (const relation of spotCategoryRelations) {
        const category = relation.SpotCategory.type;
        if (!categorizedSpots[category]) {
          categorizedSpots[category] = [];
        }
        categorizedSpots[category].push(spotId);
      }
    }

    // k-means, tsp 적용 위치
    // trip_itinerary 테이블의 데이터 생성
    // day: 여행 날짜(?) ex. 1일차, 2일차
    // order: 하루 일정 내의 스팟 순서
    // 각 category별로 spotIds를 섞고 일정에 추가
    let currentDay = 1;
    for (const category in categorizedSpots) {
      const shuffledSpotIds = categorizedSpots[category].sort(
        () => 0.5 - Math.random()
      );
      let order = 1;
      for (let i = 0; i < shuffledSpotIds.length; i++) {
        await TripItinerary.create({
          tripId: newTrip.tripId,
          spotId: shuffledSpotIds[i],
          day: currentDay,
          order: order,
        });

        order++;
        if ((i + 1) % Math.ceil(shuffledSpotIds.length / daysBetween) === 0) {
          currentDay++;
          order = 1;
        }
      }
    }

    const { tripId } = newTrip;

    await TripUser.create({
      tripId,
      userId,
    });

    return newTrip;
  } catch (error) {
    throw new Error('여행 생성 실패: ' + error.message);
  }
};

const getTrips = async (userId) => {
  const findTrips = await Trip.findAll({
    include: {
      model: TripUser,
      as: 'tripUser',
      where: { userId },
    },
  });

  return findTrips;
};

const getTrip = async (userId, tripId) => {
  const trip = await Trip.findOne({
    where: {
      tripId,
    },
    include: [
      {
        model: TripUser,
        as: 'tripUser',
        where: { userId },
      },
      {
        model: TripItinerary,
        as: 'tripItinerary',
        include: {
          model: Spot,
        },
      },
    ],
  });

  return transformTrip(trip);
};

const transformTrip = (trip) => {
  const tripItineraries = trip.tripItinerary.reduce((acc, item) => {
    const dayIndex = acc.findIndex((day) => day.day === item.day);
    const itinerary = {
      tripItineraryId: item.tripItineraryId,
      order: item.order,
      spotId: item.spotId,
      title: item.Spot.title,
      address: item.Spot.address,
      location: item.Spot.location,
    };

    if (dayIndex > -1) {
      acc[dayIndex].itineraries.push(itinerary);
    } else {
      acc.push({
        day: item.day,
        itineraries: [itinerary],
      });
    }

    return acc;
  }, []);

  return {
    tripId: trip.tripId,
    title: trip.title,
    destination: trip.destination,
    startDate: trip.startDate,
    endDate: trip.endDate,
    tripItineraries,
  };
};

module.exports = { createTrip, getTrips, getTrip };
