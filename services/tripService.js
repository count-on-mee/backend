const { where } = require('sequelize');
const {
  Trip,
  TripItinerary,
  TripUser,
  Spot,
  SpotCategory,
  SpotCategoryRelation,
  SpotBusinessHour,
  SpotBusinessHourInfo,
} = require('../models');
const { getCategories, getBusinessHours } = require('./spotService');
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

    // spotIds를 category별로 분류 및 spotId를 기반으로 spot 관련 데이터 추출
    const categorizedSpots = {};

    for (const spotId of spotIds) {
      const spot = await Spot.findOne({
        where: { spotId },
        include: [
          {
            model: SpotCategoryRelation,
            include: [SpotCategory],
          },
          {
            model: SpotBusinessHourInfo,
            as: 'spotBusinessHourInfo',
            include: {
              model: SpotBusinessHour,
              as: 'spotBusinessHour',
            },
          },
        ],
      });

      const category = getCategories(spot);

      if (!categorizedSpots[category]) {
        categorizedSpots[category] = [];
      }
      categorizedSpots[category].push({
        spotId: spot.spotId,
        title: spot.title,
        category: category[0],
        lng: spot.location.coordinates[0],
        lat: spot.location.coordinates[1],
        businessHour: getBusinessHours(spot),
      });
    }

    // categorizedSpots 활용한 변수
    // k-means, tsp 적용 위치
    // trip_itinerary 테이블의 데이터 생성
    // day: 여행 날짜(?) ex. 1일차, 2일차
    // order: 하루 일정 내의 스팟 순서
    let currentDay = 1;
    for (const category in categorizedSpots) {
      const shuffledSpots = categorizedSpots[category].sort(
        () => 0.5 - Math.random()
      );
      let order = 1;
      for (let i = 0; i < shuffledSpots.length; i++) {
        await TripItinerary.create({
          tripId: newTrip.tripId,
          spotId: shuffledSpots[i].spotId,
          day: currentDay,
          order: order,
        });

        order++;
        if ((i + 1) % Math.ceil(shuffledSpots.length / daysBetween) === 0) {
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
