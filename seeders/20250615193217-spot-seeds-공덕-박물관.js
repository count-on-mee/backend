'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 박물관
 * 생성일시: 2025-06-15T10:32:24.395Z
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
        name: '숙명여자대학교박물관',
        address: '서울 용산구 청파동3가 청파로47길 99 르네상스플라자 B1',
        tel: '02-710-9134',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5448639 126.9641107)',
        4326
        ),
        naver_spot_id: '11621163',
        review_count: 0,
        review_score: null,
      },
      {
        name: '숙명여자대학교 정영양자수박물관',
        address: '서울 용산구 청파동3가 청파로47길 99 르네상스플라자 1F',
        tel: '02-710-9133',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5445806 126.9641163)',
        4326
        ),
        naver_spot_id: '13416086',
        review_count: 1,
        review_score: null,
      },
      {
        name: '식민지역사박물관',
        address: '서울 용산구 청파동2가 청파로47다길 27 1층',
        tel: '02-2139-0427',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5457753 126.9668201)',
        4326
        ),
        naver_spot_id: '1513079234',
        review_count: 2,
        review_score: null,
      },
      {
        name: '서강대학교 박물관',
        address: '서울 마포구 신수동 백범로 35 아루페관 6층',
        tel: '02-705-8215',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5501226 126.9387789)',
        4326
        ),
        naver_spot_id: '11620581',
        review_count: 16,
        review_score: null,
      },
      {
        name: '이화여자대학교 자연사박물관',
        address: '서울 서대문구 대현동 이화여대길 52',
        tel: '02-3277-4700',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5606017 126.9478377)',
        4326
        ),
        naver_spot_id: '11620679',
        review_count: 4,
        review_score: null,
      },
      {
        name: '서소문성지역사박물관',
        address: '서울 중구 의주로2가 칠패로 5',
        tel: '02-3147-2401',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5605975 126.9688662)',
        4326
        ),
        naver_spot_id: '1453840411',
        review_count: 811,
        review_score: null,
      },
      {
        name: '이화여자대학교 박물관',
        address: '서울 서대문구 대현동 이화여대길 52 이화여자대학교',
        tel: '02-3277-3152',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5604345 126.9447918)',
        4326
        ),
        naver_spot_id: '11784521',
        review_count: 11,
        review_score: null,
      },
      {
        name: '고촌이종근기념관',
        address: '서울 서대문구 충정로3가 충정로 8 종근당빌딩',
        tel: '0507-1389-4510',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.559678 126.9632022)',
        4326
        ),
        naver_spot_id: '35251915',
        review_count: 4,
        review_score: null,
      },
      {
        name: '연세대학교 의과대학 동은의학박물관',
        address: '서울 서대문구 신촌동 연세로 50',
        tel: '02-2228-2550',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5615197 126.9407473)',
        4326
        ),
        naver_spot_id: '21829167',
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

    // 숙명여자대학교박물관 이미지
    const existingImages_11621163 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11621163'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11621163[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11621163' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210602_288/16226150174139d4Sh_JPEG/0tKuTHOX8YXLGCHv0oPDUsaU.JPG.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11621163' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210602_80/1622615033624molap_JPEG/q7y7RBs117BfVUP3D4y9JZW7.JPG.jpg',
        }
      ]);
    }

    // 숙명여자대학교 정영양자수박물관 이미지
    const existingImages_13416086 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13416086'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13416086[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13416086' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210602_224/1622615564702mVRRr_JPEG/gvsQsbp-Rq-gzOTutVBWOOvv.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13416086' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210602_180/1622615591059KIBHG_JPEG/SibkrMtz_Y94djti8mn9_fyC.jpg',
        }
      ]);
    }

    // 식민지역사박물관 이미지
    const existingImages_1513079234 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1513079234'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1513079234[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1513079234' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250304_158/1741068067852tYLbv_JPEG/20240802_160905.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1513079234' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230303_242/1677794515798lMm6p_JPEG/20230301_145203.jpg',
        }
      ]);
    }

    // 이화여자대학교 자연사박물관 이미지
    const existingImages_11620679 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620679'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11620679[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620679' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_258/1441006806695GdtOh_JPEG/116454555624517_0.jpg',
        }
      ]);
    }

    // 서소문성지역사박물관 이미지
    const existingImages_1453840411 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1453840411'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1453840411[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1453840411' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190523_236/1558578161545dVSPq_PNG/Dq7EFv0ai1U5v1enojrSxosd.PNG.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1453840411' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190523_118/1558578085047nf8Bz_JPEG/rT9fgEDkCZF_HtrN9M9nvncE.JPG.jpg',
        }
      ]);
    }

    // 이화여자대학교 박물관 이미지
    const existingImages_11784521 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11784521'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11784521[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11784521' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240809_215/1723183083552Rq3Dl_JPEG/%C0%CC%C8%AD%BF%A9%B4%EB%B9%DA%B9%B0%B0%FC_001.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11784521' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240809_215/1723183083919i3Izy_JPEG/%C0%CC%C8%AD%BF%A9%B4%EB%B9%DA%B9%B0%B0%FC_002.jpg',
        }
      ]);
    }

    // 고촌이종근기념관 이미지
    const existingImages_35251915 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35251915'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35251915[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35251915' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_138/1440989696294yT5fY_JPEG/156652547233908_4.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35251915' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_145/1440989695901LRVIW_JPEG/156652547233908_2.jpeg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 숙명여자대학교박물관 카테고리 관계
    const existingCategories_11621163 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11621163'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11621163 = new Set(existingCategories_11621163.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11621163 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11621163) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11621163.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11621163' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 숙명여자대학교 정영양자수박물관 카테고리 관계
    const existingCategories_13416086 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13416086'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13416086 = new Set(existingCategories_13416086.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13416086 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_13416086) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13416086.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13416086' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 식민지역사박물관 카테고리 관계
    const existingCategories_1513079234 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1513079234'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1513079234 = new Set(existingCategories_1513079234.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1513079234 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1513079234) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1513079234.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1513079234' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서강대학교 박물관 카테고리 관계
    const existingCategories_11620581 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620581'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11620581 = new Set(existingCategories_11620581.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11620581 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11620581) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11620581.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620581' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이화여자대학교 자연사박물관 카테고리 관계
    const existingCategories_11620679 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620679'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11620679 = new Set(existingCategories_11620679.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11620679 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11620679) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11620679.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620679' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서소문성지역사박물관 카테고리 관계
    const existingCategories_1453840411 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1453840411'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1453840411 = new Set(existingCategories_1453840411.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1453840411 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1453840411) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1453840411.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1453840411' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이화여자대학교 박물관 카테고리 관계
    const existingCategories_11784521 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11784521'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11784521 = new Set(existingCategories_11784521.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11784521 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11784521) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11784521.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11784521' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 고촌이종근기념관 카테고리 관계
    const existingCategories_35251915 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35251915'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35251915 = new Set(existingCategories_35251915.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35251915 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_35251915) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35251915.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35251915' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 연세대학교 의과대학 동은의학박물관 카테고리 관계
    const existingCategories_21829167 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21829167'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21829167 = new Set(existingCategories_21829167.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21829167 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_21829167) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21829167.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21829167' LIMIT 1)`),
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
