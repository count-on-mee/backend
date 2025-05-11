class ScrapedSpotDto {
  static from(spotScrap) {
    const { spotScrapId, spot } = spotScrap;
    const { spotId, name, address, location, tel, spotCategories, spotImgs } =
      spot;

    return {
      spotScrapId,
      spotId,
      name,
      address,
      location: {
        lat: location.latitude,
        lng: location.longitude,
      },
      tel,
      categories: spotCategories?.map((category) => category.type) || [],
      imgUrls: spotImgs?.map((img) => img.imageUrl) || [],
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
