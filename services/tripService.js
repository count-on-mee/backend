const { Trip } = require('../models');

const createTrip = async (tripData) => {
  const { title, destination, startDate, endDate } = tripData;

  try {
    const newTrip = await Trip.create({
      title,
      destination,
      startDate,
      endDate,
    });
    return newTrip;
  } catch (error) {
    throw new Error('여행 생성 실패: ' + error.message);
  }
};

module.exports = { createTrip };
