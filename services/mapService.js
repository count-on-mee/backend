const axios = require('axios');

exports.geocodeAddress = async (address) => {
  try {
    const response = await axios.get(
      'https://maps.apigw.ntruss.com/map-geocode/v2/geocode',
      {
        params: { query: address },
        headers: {
          'X-NCP-APIGW-API-KEY-ID': process.env.NCP_MAP_ID,
          'X-NCP-APIGW-API-KEY': process.env.NCP_MAP_SECRET,
        },
      }
    );

    const { addresses, status, errorMessage } = response.data || {};

    if (status !== 'OK') {
      throw new Error(errorMessage || '지오코딩 API 호출에 실패했습니다.');
    }

    if (!addresses || addresses.length === 0) {
      throw new Error('주소를 좌표로 변환하지 못했습니다.');
    }

    const { x, y } = addresses[0];
    const longitude = parseFloat(x);
    const latitude = parseFloat(y);

    if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
      throw new Error('좌표 파싱에 실패했습니다.');
    }

    return { latitude, longitude };
  } catch (error) {
    throw error;
  }
};

exports.buildNaverDirectionsLink = (origin, destination, waypoints = []) => {
  const base = 'https://map.naver.com/v5/directions/';

  const formatPoint = (p, suffix) =>
    `${p.lng},${p.lat},${encodeURIComponent(p.name)},,${suffix}`;

  const originPart = formatPoint(origin, '/');
  const destinationPart = formatPoint(destination, '/');

  const hasWaypoints = Array.isArray(waypoints) && waypoints.length > 0;
  const waypointParts = hasWaypoints
    ? (waypoints || []).map((p, idx, arr) => {
        const isLast = idx === arr.length - 1;
        return formatPoint(p, isLast ? '/' : ':');
      })
    : [];

  const mode = 'car';

  const waypointSection = hasWaypoints ? waypointParts.join('') : '-/';
  return base + originPart + destinationPart + waypointSection + mode;
};
