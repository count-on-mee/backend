const { Trip, TripItinerary } = require('../models');
const { differenceInDays } = require('date-fns');

const createTrip = async (tripData) => {
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
    return newTrip;
  } catch (error) {
    throw new Error('여행 생성 실패: ' + error.message);
  }
};

module.exports = { createTrip };
