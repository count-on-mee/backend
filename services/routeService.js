const axios = require('axios');

exports.getDuration = async (departureSpot, destinationSpot) => {
  try {
    const response = await axios.get(
      'https://maps.apigw.ntruss.com/map-direction/v1/driving',
      {
        params: {
          start: `${departureSpot.location.longitude},${departureSpot.location.latitude}`,
          goal: `${destinationSpot.location.longitude},${destinationSpot.location.latitude}`,
        },
        headers: {
          'X-NCP-APIGW-API-KEY-ID': process.env.NCP_MAP_ID,
          'X-NCP-APIGW-API-KEY': process.env.NCP_MAP_SECRET,
        },
      }
    );
    const durationMilliseconds =
      response.data.route.traoptimal[0].summary.duration;
    const distanceMeter = response.data.route.traoptimal[0].summary.distance;

    const durationMinute = Math.ceil(durationMilliseconds / 1000 / 60);
    const distanceKilometer = distanceMeter / 1000;
    return { durationMinute, distanceKilometer };
  } catch (error) {
    throw error;
  }
};
