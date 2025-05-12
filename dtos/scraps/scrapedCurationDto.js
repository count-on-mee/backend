class ScrapedCurationDto {
  static from(curationScrap) {
    const { curationScrapId, curation } = curationScrap;
    const { curationId, name, description, imgUrl, curationCategories } =
      curation;

    return {
      curationScrapId,
      curationId,
      name,
      description,
      imgUrl,
      categories: curationCategories?.map((category) => category.type) || [],
    };
  }

  static fromMany(curationScraps) {
    if (!Array.isArray(curationScraps)) {
      throw new Error('큐레이션 스크랩 배열이 필요합니다.');
    }
    return curationScraps.map((curationScrap) =>
      ScrapedCurationDto.from(curationScrap)
    );
  }
}

module.exports = ScrapedCurationDto;
