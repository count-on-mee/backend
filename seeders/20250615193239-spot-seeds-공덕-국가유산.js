'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 국가유산
 * 생성일시: 2025-06-15T10:32:46.778Z
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
        name: '효창공원',
        address: '서울 용산구 효창동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5452339 126.95993)',
        4326
        ),
        naver_spot_id: '13491304',
        review_count: 210,
        review_score: 4.2,
      },
      {
        name: '용강동정구중가',
        address: '서울 마포구 용강동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5430895 126.9418301)',
        4326
        ),
        naver_spot_id: '18768797',
        review_count: 0,
        review_score: null,
      },
      {
        name: '쾌자',
        address: '서울 용산구 청파동2가',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5461298 126.9649013)',
        4326
        ),
        naver_spot_id: '18717472',
        review_count: 1,
        review_score: null,
      },
      {
        name: '국기복색소선및사절복색자장요람',
        address: '서울 용산구 청파동2가',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5461298 126.9649013)',
        4326
        ),
        naver_spot_id: '18717545',
        review_count: 12,
        review_score: 4.55,
      },
      {
        name: '용산신학교',
        address: '서울 용산구 원효로4가',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5341059 126.953892)',
        4326
        ),
        naver_spot_id: '18720632',
        review_count: 6,
        review_score: null,
      },
      {
        name: '예공',
        address: '서울 용산구 청파동1가',
        tel: '02-6085-1020',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5482974 126.9697048)',
        4326
        ),
        naver_spot_id: '19558415',
        review_count: 0,
        review_score: null,
      },
      {
        name: '옛신촌역사',
        address: '서울 서대문구 신촌동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5595522 126.9427903)',
        4326
        ),
        naver_spot_id: '18745624',
        review_count: 52,
        review_score: null,
      },
      {
        name: '서울역사',
        address: '서울 중구 봉래동2가',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5558841 126.970897)',
        4326
        ),
        naver_spot_id: '18692066',
        review_count: 1,
        review_score: 5,
      },
      {
        name: '청초중단',
        address: '서울 서대문구 대현동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5609994 126.9456823)',
        4326
        ),
        naver_spot_id: '18744660',
        review_count: 11,
        review_score: 4.28,
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

    // 효창공원 이미지
    const existingImages_13491304 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13491304'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13491304[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13491304' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150901_100/1441045601014Dwjkq_JPEG/13491304_0.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 효창공원 카테고리 관계
    const existingCategories_13491304 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13491304'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13491304 = new Set(existingCategories_13491304.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13491304 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_13491304) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13491304.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13491304' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용강동정구중가 카테고리 관계
    const existingCategories_18768797 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18768797'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18768797 = new Set(existingCategories_18768797.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18768797 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18768797) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18768797.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18768797' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 쾌자 카테고리 관계
    const existingCategories_18717472 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18717472'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18717472 = new Set(existingCategories_18717472.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18717472 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18717472) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18717472.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18717472' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국기복색소선및사절복색자장요람 카테고리 관계
    const existingCategories_18717545 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18717545'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18717545 = new Set(existingCategories_18717545.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18717545 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18717545) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18717545.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18717545' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용산신학교 카테고리 관계
    const existingCategories_18720632 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18720632'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18720632 = new Set(existingCategories_18720632.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18720632 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18720632) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18720632.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18720632' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 예공 카테고리 관계
    const existingCategories_19558415 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19558415'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19558415 = new Set(existingCategories_19558415.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19558415 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_19558415) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19558415.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19558415' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 옛신촌역사 카테고리 관계
    const existingCategories_18745624 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18745624'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18745624 = new Set(existingCategories_18745624.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18745624 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18745624) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18745624.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18745624' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울역사 카테고리 관계
    const existingCategories_18692066 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18692066'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18692066 = new Set(existingCategories_18692066.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18692066 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18692066) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18692066.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18692066' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청초중단 카테고리 관계
    const existingCategories_18744660 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18744660'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18744660 = new Set(existingCategories_18744660.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18744660 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18744660) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18744660.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18744660' LIMIT 1)`),
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
