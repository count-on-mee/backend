const { Trip } = require('../models');
class TripService {
  async createTrip(tripData) {
    const { title, destination, start_date, end_date } = tripData;

    try {
      const newTrip = await Trip.create({
        title,
        destination,
        start_date,
        end_date,
      });
      return newTrip;
    } catch (error) {
      throw new Error('여행 생성 실패: ' + error.message);
    }
  }
}

module.exports = new TripService();
