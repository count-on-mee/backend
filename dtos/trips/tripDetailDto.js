const TripDto = require('./tripDto');
const SpotBasicDto = require('../spots/spotBasicDto');
const ItineraryTransportationDto = require('./itineraryTransportationDto');

class TripDetailDto {
  static from(trip, transportation) {
    const { itineraries } = trip;

    return {
      ...TripDto.from(trip),
      itineraries: itineraries.map((itinerary) => {
        const { tripItineraryId, day, order, spot } = itinerary;

        return {
          tripItineraryId,
          day,
          order,
          spot: SpotBasicDto.from(spot),
          transportation: ItineraryTransportationDto.from(
            transportation,
            tripItineraryId
          ),
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
