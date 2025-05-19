class ItineraryTransportationDto {
  static from(transportation, currentItineraryId) {
    const prevTransportation = transportation.find(
      (t) => t.destinationTripItineraryId === currentItineraryId
    );
    const nextTransportation = transportation.find(
      (t) => t.departureTripItineraryId === currentItineraryId
    );

    return {
      prev: prevTransportation
        ? {
            tripItineraryId: prevTransportation.departureTripItineraryId,
            type: prevTransportation.type,
            durationMinute: prevTransportation.durationMinute,
            distanceKilometer: Number(prevTransportation.distanceKilometer),
          }
        : null,
      next: nextTransportation
        ? {
            tripItineraryId: nextTransportation.destinationTripItineraryId,
            type: nextTransportation.type,
            durationMinute: nextTransportation.durationMinute,
            distanceKilometer: Number(nextTransportation.distanceKilometer),
          }
        : null,
    };
  }
}

module.exports = ItineraryTransportationDto;
