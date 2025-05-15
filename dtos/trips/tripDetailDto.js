const TripDto = require('./tripDto');
const SpotBasicDto = require('../spots/spotBasicDto');

class TripDetailDto {
  static from(trip) {
    const { itineraries } = trip;

    return {
      ...TripDto.from(trip),
      itineraries: itineraries.map((itinerary) => {
        const { day, order, spot } = itinerary;

        return {
          day,
          order,
          spot: SpotBasicDto.from(spot),
        };
      }),
    };
  }

  static fromMany(trips) {
    if (!Array.isArray(trips)) {
      throw new Error('여행 상세 배열이 필요합니다.');
    }

    return trips.map((trip) => TripDetailDto.from(trip));
  }
}

module.exports = TripDetailDto;
