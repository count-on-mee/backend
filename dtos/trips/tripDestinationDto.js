class TripDestinationDto {
  static from(tripDestination) {
    const { tripDestinationId, name, imgUrl } = tripDestination;

    return {
      tripDestinationId,
      name,
      imgUrl,
    };
  }

  static fromMany(tripDestinations) {
    if (!Array.isArray(tripDestinations)) {
      throw new Error('여행 목적지 배열이 필요합니다.');
    }
    return tripDestinations.map((tripDestination) =>
      TripDestinationDto.from(tripDestination)
    );
  }
}

module.exports = TripDestinationDto;
