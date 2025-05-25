const SpotBasicDto = require('./spotBasicDto');

class SpotDto {
  static from(spot) {
    const { spotScraps, userSpotScrap } = spot;

    return {
      ...SpotBasicDto.from(spot),
      scrapedCount: spotScraps?.map((scrap) => scrap.userId).length || 0,
      isScraped: Boolean(userSpotScrap?.userId),
    };
  }

  static fromMany(spots) {
    if (!Array.isArray(spots)) {
      throw new Error('스팟 배열이 필요합니다.');
    }
    return spots.map((spot) => SpotDto.from(spot));
  }
}

module.exports = SpotDto;
