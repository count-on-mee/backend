class TripDto {
  static from(trip) {
    const { tripId, title, startDate, endDate } = trip;

    return {
      tripId,
      title,
      startDate,
      endDate,
    };
  }

  static fromMany(trips) {
    if (!Array.isArray(trips)) {
      throw new Error('여행 배열이 필요합니다.');
    }

    return trips.map((trip) => TripDto.from(trip));
  }
}

module.exports = TripDto;
