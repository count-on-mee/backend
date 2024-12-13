class ScrapedCurationsDto {
  static of(scrapedCurations) {
    return scrapedCurations.map((scrapedCuration) => {
      const { curationScrapId, curation } = scrapedCuration;
      const { curationId, title, imgUrl } = curation;
      return {
        curationScrapId,
        curationId,
        title,
        imgUrl,
      };
    });
  }
}

module.exports = ScrapedCurationsDto;
