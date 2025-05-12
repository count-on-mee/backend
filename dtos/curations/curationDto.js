const SpotDto = require('../spots/spotDto');

class CurationDto {
  static from(curation) {
    const {
      curationId,
      name,
      description,
      imgUrl,
      curationCategories,
      curationSpots,
      curationScraps,
      userCurationScrap,
    } = curation;

    return {
      curationId,
      name,
      description,
      imgUrl,
      categories: curationCategories?.map((category) => category.type) || [],
      spots: SpotDto.fromMany(
        curationSpots.map((curationSpot) => curationSpot.spot)
      ),
      scrapedCount: curationScraps?.map((scrap) => scrap.userId).length || 0,
      isScraped: Boolean(userCurationScrap?.userId),
    };
  }

  static fromMany(curations) {
    if (!Array.isArray(curations)) {
      throw new Error('큐레이션 배열이 필요합니다.');
    }
    return curations.map((curation) => CurationDto.from(curation));
  }
}

module.exports = CurationDto;
