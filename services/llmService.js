const axios = require('axios');

exports.optimizeItinerary = async (spots, startDate, endDate) => {
  try {
    const prompt = {
      spots: spots.map((spot) => ({
        spotId: spot.spotId,
        name: spot.name,
        categories: spot.spotCategories.map((cat) => cat.type),
        address: spot.address,
        location: spot.location,
      })),
      startDate,
      endDate,
      totalDays:
        Math.ceil(
          (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
        ) + 1,
    };

    const response = await axios.post(
      'https://clovastudio.apigw.ntruss.com/testapp/v1/chat-completions/HCX-003',
      {
        messages: [
          {
            role: 'system',
            content: `
              당신은 여행 일정을 최적화하는 전문가입니다. 요구사항을 참고하여 주어진 장소들을 이동 경로를 고려하여 여행 기간에 맞게 최적의 순서로 배치해주세요.
              응답은 다음과 같은 JSON 형식으로 해주세요: { days: [{ spots: [{ spotId: string, order: number }] }] }

              카테고리에 대한 요구사항은 다음과 같습니다.
              - 식당: 최대한 연속되지 않도록 배치해주세요.
              - 숙소: 하루에 한 번 마지막에 배치해주세요. 단, 여행 기간보다 숙소가 많은 경우 마지막 날에 포함해주세요.
              `,
          },
          {
            role: 'user',
            content: JSON.stringify(prompt),
          },
        ],
        temperature: 0.01,
        maxTokens: 4096,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NCP_CLOVA_TEST_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return JSON.parse(response.data.result.message.content);
  } catch (error) {
    throw error;
  }
};
