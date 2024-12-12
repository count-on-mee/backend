class TripsDto {
  static of(trips) {
    return trips.map((trip) => {
      const { tripId, title, startDate, endDate } = trip;
      return {
        tripId,
        title,
        startDate,
        endDate,
      };
    });
  }
}

module.exports = TripsDto;
