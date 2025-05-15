const SpotBasicDto = require('../spots/spotBasicDto');

class ScrapedSpotDto {
  static from(spotScrap) {
    const { spotScrapId, spot } = spotScrap;

    return {
      spotScrapId,
      ...SpotBasicDto.from(spot),
    };
  }

  static fromMany(spotScraps) {
    if (!Array.isArray(spotScraps)) {
      throw new Error('스팟 스크랩 배열이 필요합니다.');
    }
    return spotScraps.map((spotScrap) => ScrapedSpotDto.from(spotScrap));
  }
}

module.exports = ScrapedSpotDto;
