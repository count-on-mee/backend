class SpotDto {
  static from(spot) {
    const {
      spotId,
      name,
      address,
      location,
      tel,
      spotCategories,
      spotImgs,
      spotScraps,
      userSpotScrap,
    } = spot;

    return {
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
