class ScrapedSpotsDto {
  static of(scrapedSpots) {
    return scrapedSpots.map((scrapedSpot) => {
      const { spotScrapId, spot } = scrapedSpot;
      const { spotId, title, location, spotImg } = spot;
      const imgUrl = spotImg.length > 0 ? spotImg[0].imgUrl : null;

      return {
        spotScrapId,
        spotId,
        title,
        imgUrl,
        location,
      };
    });
  }
}

module.exports = ScrapedSpotsDto;
