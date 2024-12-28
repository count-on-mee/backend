const { where } = require('sequelize');
const { Trip, TripItinerary, TripUser, Spot } = require('../models');
const { differenceInDays } = require('date-fns');

const createTrip = async (userId, tripData) => {
  //TODO: transaction 설정
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

    const shuffledSpotIds = spotIds.sort(() => 0.5 - Math.random());

    let currentDay = 1;
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
