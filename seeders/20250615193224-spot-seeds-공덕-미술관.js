'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 미술관
 * 생성일시: 2025-06-15T10:32:31.821Z
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    // 기존 스팟 데이터 조회
    const existingSpots = await queryInterface.sequelize.query(
      'SELECT spot_id, naver_spot_id FROM spot WHERE naver_spot_id IS NOT NULL',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSpotMap = new Map(existingSpots.map(spot => [spot.naver_spot_id, spot.spot_id]));

    // 장소 데이터 추가/업데이트
    const spotData = [
      {
        name: '김세중미술관',
        address: '서울 용산구 효창동 효창원로70길 35 김세중미술관',
        tel: '02-717-5129',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5420487 126.9638724)',
        4326
        ),
        naver_spot_id: '37116561',
        review_count: 1,
        review_score: null,
      },
      {
        name: '한국미술관',
        address: '서울 서대문구 대현동 이화여대1길 10 예스에이피엠 1층',
        tel: '0507-1329-7833',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5576576 126.9449706)',
        4326
        ),
        naver_spot_id: '1739445330',
        review_count: 1,
        review_score: null,
      },
      {
        name: '이화여자대학교담인복식미술관',
        address: '서울 서대문구 대현동 이화여대길 52',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5610187 126.9456819)',
        4326
        ),
        naver_spot_id: '18744159',
        review_count: 12,
        review_score: null,
      }
    ];

    // 기존 데이터 업데이트 및 새 데이터 삽입
    for (const spot of spotData) {
      const existingSpotId = existingSpotMap.get(spot.naver_spot_id);
      if (existingSpotId) {
        // 기존 데이터 업데이트
        await queryInterface.bulkUpdate('spot', spot, {
          naver_spot_id: spot.naver_spot_id
        });
      } else {
        // 새 데이터 삽입
        await queryInterface.bulkInsert('spot', [spot], {});
      }
    }

    // 이미지 데이터 처리 - 기존 이미지가 있으면 스킵
    const spotImgData = [];

    // 김세중미술관 이미지
    const existingImages_37116561 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37116561'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37116561[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37116561' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20211119_220/1637286457861krwih_JPEG/1.jpg',
        }
      ]);
    }

    // 한국미술관 이미지
    const existingImages_1739445330 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1739445330'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1739445330[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1739445330' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210705_146/1625444515506MoOLi_JPEG/DypGl_9U_RC8jEeIoz7tW0_P.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1739445330' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210608_141/1623128816664S3MIm_JPEG/ppI30zcEqNyMYvsL_DWRc527.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 김세중미술관 카테고리 관계
    const existingCategories_37116561 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37116561'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37116561 = new Set(existingCategories_37116561.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37116561 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_37116561) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37116561.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37116561' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한국미술관 카테고리 관계
    const existingCategories_1739445330 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1739445330'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1739445330 = new Set(existingCategories_1739445330.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1739445330 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1739445330) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1739445330.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1739445330' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이화여자대학교담인복식미술관 카테고리 관계
    const existingCategories_18744159 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18744159'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18744159 = new Set(existingCategories_18744159.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18744159 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_18744159) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18744159.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18744159' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    if (spotCategoryRelationData.length > 0) {
      await queryInterface.bulkInsert('spot_category_relation', spotCategoryRelationData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    // 시드 파일로 추가/수정된 데이터만 삭제
    const insertedSpots = await queryInterface.sequelize.query(
      'SELECT spot_id FROM spot WHERE naver_spot_id IN (?)',
      {
        replacements: [results.map(spot => spot.naverSpotId)],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const spotIds = insertedSpots.map(spot => spot.spot_id);

    if (spotIds.length > 0) {
      await queryInterface.bulkDelete('spot_category_relation', {
        spot_id: spotIds
      }, {});
      await queryInterface.bulkDelete('spot_img', {
        spot_id: spotIds
      }, {});
      await queryInterface.bulkDelete('spot', {
        spot_id: spotIds
      }, {});
    }
  }
};
