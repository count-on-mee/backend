'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 카페
 * 생성일시: 2025-06-15T10:31:53.626Z
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
        name: '프릳츠 도화점',
        address: '서울 마포구 도화동 새창로2길 17',
        tel: '02-3275-2045',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5410245 126.9490443)',
        4326
        ),
        naver_spot_id: '35524251',
        review_count: 12,
        review_score: 4.44,
      },
      {
        name: '파네트',
        address: '서울 마포구 공덕동 마포대로11길 17 1층',
        tel: '02-719-4600',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5488291 126.9531978)',
        4326
        ),
        naver_spot_id: '36534279',
        review_count: 3,
        review_score: 4.44,
      },
      {
        name: '아이엠베이글 공덕점',
        address: '서울 마포구 공덕동 백범로 152 101동 1층',
        tel: '0507-1363-2881',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5446928 126.9482171)',
        4326
        ),
        naver_spot_id: '37463455',
        review_count: 4,
        review_score: 4.57,
      },
      {
        name: '코쿤',
        address: '서울 용산구 효창동 임정로 65-1 1층 카페 코쿤',
        tel: '0507-1448-8242',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5455892 126.958446)',
        4326
        ),
        naver_spot_id: '1755180693',
        review_count: 97,
        review_score: null,
      },
      {
        name: '브라우닝커피',
        address: '서울 마포구 공덕동 백범로 152 201동 1층 9호',
        tel: '0507-1416-7523',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5452765 126.9468006)',
        4326
        ),
        naver_spot_id: '1981327552',
        review_count: 338,
        review_score: null,
      },
      {
        name: '포멜로빈 공덕점',
        address: '서울 마포구 공덕동 백범로 170 102동 상가 7-1호',
        tel: '0507-1313-3032',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5444288 126.9486203)',
        4326
        ),
        naver_spot_id: '1318599055',
        review_count: 2,
        review_score: 4.57,
      },
      {
        name: '비파티세리 공덕점',
        address: '서울 마포구 공덕동 마포대로14길 4 1층',
        tel: '02-702-1220',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5487011 126.9551043)',
        4326
        ),
        naver_spot_id: '1469875009',
        review_count: 4,
        review_score: 4.49,
      },
      {
        name: '스타벅스 공덕오거리점',
        address: '서울 마포구 도화동 마포대로 86 (도화동) 창강빌딩',
        tel: '1522-3232',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.542464 126.9505773)',
        4326
        ),
        naver_spot_id: '36943358',
        review_count: 4,
        review_score: 4.44,
      },
      {
        name: '수더분',
        address: '서울 마포구 공덕동 백범로 152',
        tel: '0507-1317-8269',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5454017 126.946748)',
        4326
        ),
        naver_spot_id: '1411194664',
        review_count: 1,
        review_score: 4.72,
      },
      {
        name: '겟앤쇼카페 공덕점',
        address: '서울 마포구 도화동 마포대로 89 1층',
        tel: '02-326-2771',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.543266 126.9499068)',
        4326
        ),
        naver_spot_id: '1999643675',
        review_count: 327,
        review_score: 4.62,
      },
      {
        name: '치즈당 마포공덕점',
        address: '서울 마포구 공덕동 마포대로 173 1층 105호',
        tel: '0507-1392-8306',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5499081 126.9544556)',
        4326
        ),
        naver_spot_id: '1124407498',
        review_count: 1,
        review_score: null,
      },
      {
        name: '크리핀',
        address: '서울 마포구 공덕동 백범로 152 102동 1호 크리핀',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5449509 126.9479323)',
        4326
        ),
        naver_spot_id: '1266420060',
        review_count: 81,
        review_score: null,
      },
      {
        name: '설빙 마포공덕점',
        address: '서울 마포구 도화동 도화길 31-1',
        tel: '02-711-0334',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5410384 126.9493922)',
        4326
        ),
        naver_spot_id: '1893531981',
        review_count: 1,
        review_score: 4.29,
      },
      {
        name: '마타사 공덕',
        address: '서울 마포구 도화동 새창로6나길 31',
        tel: '02-711-0520',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5411015 126.9543569)',
        4326
        ),
        naver_spot_id: '1035788762',
        review_count: 246,
        review_score: null,
      },
      {
        name: '뺑스톡 공덕점',
        address: '서울 마포구 공덕동 백범로31길 8 201동 113호',
        tel: '0507-1332-0577',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5448463 126.9494532)',
        4326
        ),
        naver_spot_id: '1337467260',
        review_count: 1,
        review_score: null,
      },
      {
        name: '스타벅스 마포염리점',
        address: '서울 마포구 염리동 독막로 311 (염리동)',
        tel: '1522-3232',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.543876 126.94768)',
        4326
        ),
        naver_spot_id: '38704457',
        review_count: 6,
        review_score: 4.45,
      },
      {
        name: '복호두 공덕점',
        address: '서울 마포구 공덕동 마포대로 156 공덕푸르지오시티 1층 101호',
        tel: '0507-1392-0606',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5478388 126.9542271)',
        4326
        ),
        naver_spot_id: '1809215204',
        review_count: 577,
        review_score: null,
      },
      {
        name: '투썸플레이스 마포대로점',
        address: '서울 마포구 도화동 마포대로 67 1층',
        tel: '02-2039-8166',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.541659 126.9481297)',
        4326
        ),
        naver_spot_id: '1079801331',
        review_count: 3,
        review_score: null,
      },
      {
        name: '황인상브레드 공덕점',
        address: '서울 마포구 신공덕동 백범로 199 104호',
        tel: '0507-1318-4312',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.543349 126.9529494)',
        4326
        ),
        naver_spot_id: '1225468813',
        review_count: 1,
        review_score: 4.51,
      },
      {
        name: '빽다방 마포경찰서점',
        address: '서울 마포구 아현동 마포대로 179',
        tel: '02-363-6383',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5503223 126.9548389)',
        4326
        ),
        naver_spot_id: '1949972063',
        review_count: 820,
        review_score: 4.5,
      },
      {
        name: '스타벅스 공덕점',
        address: '서울 마포구 공덕동 마포대로 130 (공덕동)',
        tel: '1522-3232',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.545913 126.952956)',
        4326
        ),
        naver_spot_id: '1024248869',
        review_count: 5,
        review_score: 4.48,
      },
      {
        name: '할리스 공덕경의선숲길점',
        address: '서울 마포구 염리동 백범로28길 22',
        tel: '02-701-3967',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5447219 126.9466739)',
        4326
        ),
        naver_spot_id: '1766702669',
        review_count: 3,
        review_score: 4.44,
      },
      {
        name: '영앤도터스',
        address: '서울 마포구 공덕동 마포대로 156 푸르지오시티 1층 107호',
        tel: '02-6487-0207',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5481367 126.9543574)',
        4326
        ),
        naver_spot_id: '1734297335',
        review_count: 1,
        review_score: 4.46,
      },
      {
        name: '도화아파트먼트 마포',
        address: '서울 마포구 도화동 도화2길 27 1층 B101호~102호',
        tel: '070-7808-0990',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5395358 126.9494918)',
        4326
        ),
        naver_spot_id: '1236259036',
        review_count: 1,
        review_score: 4.52,
      },
      {
        name: '고효동',
        address: '서울 용산구 효창동 임정로 63 1F',
        tel: '0507-1305-9366',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5452959 126.9581416)',
        4326
        ),
        naver_spot_id: '1016376574',
        review_count: 522,
        review_score: 4.64,
      },
      {
        name: '베로커피',
        address: '서울 마포구 공덕동 백범로 152 101동1층 13호',
        tel: '0507-1315-3543',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5447239 126.9480188)',
        4326
        ),
        naver_spot_id: '1486490704',
        review_count: 70,
        review_score: null,
      },
      {
        name: '오티오커피',
        address: '서울 용산구 효창동 임정로 59-1 1층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.545084 126.9579706)',
        4326
        ),
        naver_spot_id: '1306448070',
        review_count: 195,
        review_score: null,
      },
      {
        name: '빽다방 공덕역롯데캐슬점',
        address: '서울 마포구 공덕동 마포대로 109 지1층 B104-1호',
        tel: '0507-2093-3292',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450054 126.9512549)',
        4326
        ),
        naver_spot_id: '1125214233',
        review_count: 195,
        review_score: null,
      },
      {
        name: '뚜레쥬르 공덕해링턴점',
        address: '서울 마포구 도화동',
        tel: '02-2197-0207',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5426934 126.9520269)',
        4326
        ),
        naver_spot_id: '757188582',
        review_count: 4,
        review_score: 4.41,
      },
      {
        name: '메가MGC커피 공덕SK리더스뷰점',
        address: '서울 마포구 공덕동 백범로31길 7',
        tel: '0507-2093-5008',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5451199 126.9488474)',
        4326
        ),
        naver_spot_id: '1414758325',
        review_count: 2,
        review_score: null,
      },
      {
        name: '투썸플레이스 공덕풍림빌딩점',
        address: '서울 마포구 공덕동 마포대로 127 103호 투썸플레이스',
        tel: '0507-1374-3992',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5463852 126.9522926)',
        4326
        ),
        naver_spot_id: '1953959793',
        review_count: 921,
        review_score: 4.44,
      },
      {
        name: '37.5 익스프레스 공덕점',
        address: '서울 마포구 공덕동 마포대로11길 44-19 1층 브런치카페 37.5',
        tel: '0507-1411-3705',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5497883 126.9524206)',
        4326
        ),
        naver_spot_id: '1369652009',
        review_count: 2,
        review_score: 4.67,
      },
      {
        name: '투썸플레이스 공덕해링턴스퀘어점',
        address: '서울 마포구 도화동',
        tel: '02-2197-0222',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5425952 126.9520067)',
        4326
        ),
        naver_spot_id: '435150272',
        review_count: 2,
        review_score: 4.32,
      },
      {
        name: '커피앳웍스 경의선숲길점',
        address: '서울 마포구 대흥동 독막로 279 1동1층',
        tel: '02-3275-3429',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5454986 126.9445859)',
        4326
        ),
        naver_spot_id: '2098494923',
        review_count: 114,
        review_score: null,
      },
      {
        name: '스타벅스 마포아크로점',
        address: '서울 마포구 도화동 마포대로 68 (도화동) 마포아크로타워',
        tel: '1522-3232',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5413348 126.9488666)',
        4326
        ),
        naver_spot_id: '12950359',
        review_count: 3,
        review_score: 4.47,
      },
      {
        name: '공덕로스터리',
        address: '서울 마포구 공덕동 백범로31길 8',
        tel: '0507-2093-5923',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5448588 126.9496364)',
        4326
        ),
        naver_spot_id: '1805780662',
        review_count: 523,
        review_score: 4.26,
      },
      {
        name: '다람제과',
        address: '서울 마포구 신공덕동 백범로 205 101동 1층 (공덕 푸르지오 펜트라우스) 다람제과',
        tel: '0507-1338-5278',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5440083 126.9539171)',
        4326
        ),
        naver_spot_id: '1317732543',
        review_count: 181,
        review_score: null,
      },
      {
        name: '플러피 베이크샵',
        address: '서울 마포구 공덕동 백범로31길 8 2동 상가 1층 106호',
        tel: '0507-1408-6114',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5451725 126.9497848)',
        4326
        ),
        naver_spot_id: '1661166837',
        review_count: 2,
        review_score: null,
      },
      {
        name: '뚜레쥬르 공덕역점',
        address: '서울 마포구 공덕동 백범로 178',
        tel: '02-2123-9999',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5440227 126.949975)',
        4326
        ),
        naver_spot_id: '11779023',
        review_count: 2,
        review_score: 4.26,
      },
      {
        name: '바이러닉 에스프레소바 공덕점',
        address: '서울 마포구 도화동 마포대로 92 효성해링턴스퀘어 A동 1층',
        tel: '0507-1389-0983',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5430378 126.9511563)',
        4326
        ),
        naver_spot_id: '1135730725',
        review_count: 108,
        review_score: null,
      },
      {
        name: '할리스 공덕점',
        address: '서울 마포구 공덕동 마포대로 143',
        tel: '02-701-5785',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5476447 126.9533518)',
        4326
        ),
        naver_spot_id: '1124396971',
        review_count: 2,
        review_score: 4.37,
      },
      {
        name: '메가MGC커피 서울공덕초교점',
        address: '서울 마포구 신공덕동 만리재옛길 6 1층',
        tel: '0507-1397-5541',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5449065 126.9544209)',
        4326
        ),
        naver_spot_id: '1939906103',
        review_count: 1,
        review_score: null,
      },
      {
        name: '메가MGC커피 공덕푸르지오시티점',
        address: '서울 마포구 공덕동 마포대로 156 1층 105호',
        tel: '070-4117-4268',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5479194 126.954371)',
        4326
        ),
        naver_spot_id: '1164855479',
        review_count: 42,
        review_score: null,
      },
      {
        name: '녹기 전에',
        address: '서울 마포구 염리동 백범로 127-24',
        tel: '0507-1425-8020',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5466763 126.9455621)',
        4326
        ),
        naver_spot_id: '815032618',
        review_count: 1,
        review_score: 4.48,
      },
      {
        name: '그로토',
        address: '서울 마포구 도화동 새창로4길 9 지하1층',
        tel: '02-702-4196',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5417311 126.9517701)',
        4326
        ),
        naver_spot_id: '1664706768',
        review_count: 588,
        review_score: 4.56,
      },
      {
        name: '한스 공덕점',
        address: '서울 마포구 신공덕동 백범로 202 마포KCC웰츠타워 108호',
        tel: '02-704-7049',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5428989 126.9527723)',
        4326
        ),
        naver_spot_id: '1886372274',
        review_count: 2,
        review_score: 4.47,
      },
      {
        name: '곤트란쉐리에 공덕역점',
        address: '서울 마포구 도화동 새창로 30 2층',
        tel: '02-717-8860',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5416476 126.9531355)',
        4326
        ),
        naver_spot_id: '1281622516',
        review_count: 811,
        review_score: null,
      },
      {
        name: '파리바게트 공덕역사점',
        address: '서울 마포구 공덕동 백범로 200 공덕역사 내 1023호',
        tel: '0507-2093-5407',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5435269 126.9519475)',
        4326
        ),
        naver_spot_id: '1835667418',
        review_count: 5,
        review_score: 4.4,
      },
      {
        name: '스트라다로스터스 공덕점',
        address: '서울 마포구 공덕동 마포대로8길 35 1층',
        tel: '0507-1425-1509',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5460266 126.9549509)',
        4326
        ),
        naver_spot_id: '1105908490',
        review_count: 357,
        review_score: 4.53,
      },
      {
        name: '스타벅스 마포경찰서후문점',
        address: '서울 마포구 아현동 마포대로 173-14 (아현동)',
        tel: '1522-3232',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5508 126.953432)',
        4326
        ),
        naver_spot_id: '1426392068',
        review_count: 3,
        review_score: 4.48,
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

    // 프릳츠 도화점 이미지
    const existingImages_35524251 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35524251'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35524251[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35524251' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230801_175/1690852955655Jcb3N_JPEG/%B5%B5%C8%AD%B8%C5%C0%E5_01.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35524251' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230801_188/16908529670684D7Vt_JPEG/%B5%B5%C8%AD%B8%C5%C0%E5_08.jpg',
        }
      ]);
    }

    // 파네트 이미지
    const existingImages_36534279 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36534279'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36534279[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36534279' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220803_234/1659478787105O2jJW_JPEG/20220714_101040.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36534279' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190408_158/1554696796270UVLYO_JPEG/LUUyAGAxqQo87MZqVfahcXXt.jpg',
        }
      ]);
    }

    // 아이엠베이글 공덕점 이미지
    const existingImages_37463455 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37463455'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37463455[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37463455' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240313_104/17103334658796k76J_JPEG/5.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37463455' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230101_251/1672539439200mdkmu_JPEG/sKcWI3OoKXAXCQ6b8KgTA1_i_ae4c6de8f9bc.jpeg',
        }
      ]);
    }

    // 코쿤 이미지
    const existingImages_1755180693 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1755180693'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1755180693[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1755180693' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240827_34/1724758755507iDnP6_JPEG/output_3762075693.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1755180693' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250218_130/1739855972930YeTvN_JPEG/%C1%A6%B8%F1_%BE%F8%B4%C2_%BE%C6%C6%AE%BF%F6%C5%A9.jpeg',
        }
      ]);
    }

    // 브라우닝커피 이미지
    const existingImages_1981327552 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1981327552'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1981327552[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1981327552' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240304_198/1709555865500NAPCG_JPEG/IMG_1027.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1981327552' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240322_25/1711111573500NMlvu_JPEG/IMG_6933.jpeg',
        }
      ]);
    }

    // 포멜로빈 공덕점 이미지
    const existingImages_1318599055 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1318599055'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1318599055[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1318599055' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200308_92/15835986877253DOnX_JPEG/PjIgsDfpNwWE57FOp1KDecIl.jpeg.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1318599055' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200308_199/1583598714280fiVls_JPEG/fpDRTzVP3HGA3ynA9y2Slo2u.jpeg.jpg',
        }
      ]);
    }

    // 비파티세리 공덕점 이미지
    const existingImages_1469875009 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1469875009'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1469875009[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1469875009' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231102_154/1698901313055pw3o6_JPEG/4.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1469875009' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231102_132/1698901341144guXWh_JPEG/0.jpg',
        }
      ]);
    }

    // 스타벅스 공덕오거리점 이미지
    const existingImages_36943358 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36943358'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36943358[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36943358' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190828_93/1566953601239OT9MQ_PNG/xX7Wv642gXMoTI0DAv0hRymS.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36943358' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20240611_265/1718104156568ARPQh_JPEG/image.jpg',
        }
      ]);
    }

    // 수더분 이미지
    const existingImages_1411194664 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1411194664'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1411194664[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1411194664' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200419_207/1587280378927TOLom_JPEG/gLI16IXCeDqEcphBdaU_DTON.jpeg.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1411194664' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221201_257/1669832441230rwDPD_JPEG/20221130_115111.jpg',
        }
      ]);
    }

    // 겟앤쇼카페 공덕점 이미지
    const existingImages_1999643675 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1999643675'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1999643675[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1999643675' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190524_278/1558688358702dAilN_JPEG/IAyxS7J2oUEmSuMo1_h4Vgd6.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1999643675' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190524_172/155868835101486hdQ_JPEG/-8V8DVoB5uDGBdn3BP9Jdrg6.JPG.jpg',
        }
      ]);
    }

    // 치즈당 마포공덕점 이미지
    const existingImages_1124407498 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1124407498'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1124407498[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1124407498' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241105_75/1730788397238WbxzB_JPEG/IMG_5839.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1124407498' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241105_298/1730788408668TcFMJ_PNG/%BD%BA%C5%A9%B8%B0%BC%A6_2024-08-06_%BF%C0%C8%C4_2.01.50.png',
        }
      ]);
    }

    // 크리핀 이미지
    const existingImages_1266420060 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1266420060'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1266420060[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1266420060' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240220_217/1708412702508uikV5_JPEG/1708141618500-0.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1266420060' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240220_151/1708412702381a3jX8_JPEG/1708141605959.jpg',
        }
      ]);
    }

    // 설빙 마포공덕점 이미지
    const existingImages_1893531981 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1893531981'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1893531981[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1893531981' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220704_284/1656903860415MQoGM_JPEG/%BC%B3%BA%F9%BF%DC%BA%CE%BB%E7%C1%F8.jpg',
        }
      ]);
    }

    // 마타사 공덕 이미지
    const existingImages_1035788762 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1035788762'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1035788762[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1035788762' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230722_257/1690009735480DOvkR_JPEG/IMG_9007.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1035788762' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220809_231/1660020562626RXCgB_JPEG/876CE032-DD40-4A39-9B37-C71F99D4EA79.jpeg',
        }
      ]);
    }

    // 뺑스톡 공덕점 이미지
    const existingImages_1337467260 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1337467260'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1337467260[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1337467260' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250502_205/1746154713051KNiDC_PNG/KakaoTalk_20250502_115027882_01.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1337467260' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210919_251/1632025983876htW38_JPEG/kjiK8pv6xtWg-8KUsQVrmF9h.jpg',
        }
      ]);
    }

    // 스타벅스 마포염리점 이미지
    const existingImages_38704457 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38704457'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38704457[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38704457' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190828_93/1566953601239OT9MQ_PNG/xX7Wv642gXMoTI0DAv0hRymS.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38704457' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20241218_52/1734464901471sxbnD_JPEG/image.jpg',
        }
      ]);
    }

    // 복호두 공덕점 이미지
    const existingImages_1809215204 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1809215204'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1809215204[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1809215204' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250604_98/17490219832564TbaK_JPEG/%B0%F8%BD%C4_%BA%B9%C8%A3%B5%CE_20%B0%B3%C0%D4_%B0%A8%BC%BA.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1809215204' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250604_197/1749021983237OrrjJ_JPEG/%B0%F8%BD%C4_%BA%B9%C8%A3%B5%CE_%C6%D0%C5%B0%C1%F6_%B0%A8%BC%BA.jpg',
        }
      ]);
    }

    // 투썸플레이스 마포대로점 이미지
    const existingImages_1079801331 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1079801331'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1079801331[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1079801331' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240425_30/1714027286569AjoeW_PNG/1000039458.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1079801331' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20211027_150/1635330867984h4Rk3_JPEG/DWmS8hwDCXNGznovA9oVf3AP.jpg',
        }
      ]);
    }

    // 황인상브레드 공덕점 이미지
    const existingImages_1225468813 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1225468813'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1225468813[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1225468813' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20181008_69/1538977697313FQIoh_JPEG/g1HwR2AU6Gc_prYQRniyXTSB.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1225468813' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20181008_12/1538992946183nOvMw_JPEG/KjChFWmmq-Wrr2skqlHhPpQD.jpg',
        }
      ]);
    }

    // 빽다방 마포경찰서점 이미지
    const existingImages_1949972063 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1949972063'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1949972063[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1949972063' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200409_90/1586429649530tvkQi_JPEG/e2thmaVQy7CS8d_c6HfVm-o1.jpeg.jpg',
        }
      ]);
    }

    // 스타벅스 공덕점 이미지
    const existingImages_1024248869 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1024248869'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1024248869[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1024248869' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190828_93/1566953601239OT9MQ_PNG/xX7Wv642gXMoTI0DAv0hRymS.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1024248869' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20240611_165/1718104264859dcLoh_JPEG/image.jpg',
        }
      ]);
    }

    // 할리스 공덕경의선숲길점 이미지
    const existingImages_1766702669 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1766702669'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1766702669[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1766702669' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210302_125/161464487124061agC_JPEG/K15utTFWXeuNEny1JMXiV57W.jpg',
        }
      ]);
    }

    // 영앤도터스 이미지
    const existingImages_1734297335 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1734297335'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1734297335[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1734297335' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200126_289/1580022799879mfm0I_JPEG/ufF2KuGjCrNXOyIez-lC1WKR.jpeg.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1734297335' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231230_99/1703916686625xxMFf_JPEG/05_%B5%F6%C4%AB%B6%F3%B8%E1%B6%F3%B6%BC.jpg',
        }
      ]);
    }

    // 도화아파트먼트 마포 이미지
    const existingImages_1236259036 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1236259036'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1236259036[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1236259036' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210514_198/1620977686134aQvOT_JPEG/sKCQxl02-w6twXj0lWGOExN6.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1236259036' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231106_60/1699244469389dEhIA_PNG/%C0%DA%BB%E7%B8%F4_%BD%BA%C5%E4%BE%EE.png',
        }
      ]);
    }

    // 고효동 이미지
    const existingImages_1016376574 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1016376574'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1016376574[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1016376574' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240525_272/1716594162546NIvjk_JPEG/20240514_140536.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1016376574' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231211_144/1702292336860RvPPn_JPEG/temp_file.jpg',
        }
      ]);
    }

    // 베로커피 이미지
    const existingImages_1486490704 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1486490704'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1486490704[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1486490704' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240902_124/1725234849119xevhS_JPEG/IMG_8819.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1486490704' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250417_262/1744893104149Lp8CG_JPEG/25%3A4_%B5%F0%C0%FA%C6%AE%B8%DE%B4%BA%C6%C7_.jpeg',
        }
      ]);
    }

    // 오티오커피 이미지
    const existingImages_1306448070 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1306448070'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1306448070[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1306448070' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250515_173/1747302411707tiB0e_JPEG/IMG_3813.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1306448070' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250515_240/1747302412201Hoze8_JPEG/IMG_3682.jpeg',
        }
      ]);
    }

    // 뚜레쥬르 공덕해링턴점 이미지
    const existingImages_757188582 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['757188582'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_757188582[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '757188582' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250124_220/1737677960736uzsLV_JPEG/%B3%D7%C0%CC%B9%F6_TLJ4.0_%B7%CE%B0%ED.jpg',
        }
      ]);
    }

    // 메가MGC커피 공덕SK리더스뷰점 이미지
    const existingImages_1414758325 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1414758325'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1414758325[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1414758325' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200930_204/1601474416342qhl8E_JPEG/TBP52WZn9zxIcXavtxqP0FKJ.jpeg.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1414758325' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200930_220/1601474423185bLf79_JPEG/jyDnncFLRQ0Nn0rjJaltJek1.jpeg.jpg',
        }
      ]);
    }

    // 투썸플레이스 공덕풍림빌딩점 이미지
    const existingImages_1953959793 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1953959793'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1953959793[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1953959793' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220915_179/1663252791419dT25x_JPEG/1663252742099.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1953959793' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230414_103/1681472145961UGjsN_JPEG/1681472024840.jpg',
        }
      ]);
    }

    // 37.5 익스프레스 공덕점 이미지
    const existingImages_1369652009 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1369652009'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1369652009[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1369652009' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210716_142/1626445005866AucML_JPEG/N3zZg3fNaSenEdRxVqxhEXmT.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1369652009' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210716_262/1626444997734rrjUD_JPEG/sE5QIS-lLlPZbhm0DXpKO-rN.jpg',
        }
      ]);
    }

    // 투썸플레이스 공덕해링턴스퀘어점 이미지
    const existingImages_435150272 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['435150272'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_435150272[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '435150272' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20170508_57/1494205026128Fhh1T_JPEG/186458498725_0.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '435150272' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20170508_14/1494205026338FJ0bH_JPEG/186458498725_1.JPG',
        }
      ]);
    }

    // 커피앳웍스 경의선숲길점 이미지
    const existingImages_2098494923 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['2098494923'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_2098494923[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '2098494923' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250602_69/1748831449158qHs85_PNG/%C6%C4%C0%CF111.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '2098494923' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250602_161/1748831448966qihUi_PNG/%C6%C4%C0%CF222.png',
        }
      ]);
    }

    // 스타벅스 마포아크로점 이미지
    const existingImages_12950359 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12950359'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12950359[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12950359' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190828_93/1566953601239OT9MQ_PNG/xX7Wv642gXMoTI0DAv0hRymS.png',
        }
      ]);
    }

    // 공덕로스터리 이미지
    const existingImages_1805780662 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1805780662'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1805780662[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1805780662' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230501_169/1682934900115JgKfv_JPEG/IMG_0280.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1805780662' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230501_20/16829348945788Gb68_JPEG/IMG_0281.JPG',
        }
      ]);
    }

    // 다람제과 이미지
    const existingImages_1317732543 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1317732543'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1317732543[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1317732543' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250420_21/1745149123770I62kt_JPEG/IMG_1273.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1317732543' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230625_181/1687678058594aUEOm_JPEG/597D619D-87FF-47BB-AE42-4B1D930848AF.jpeg',
        }
      ]);
    }

    // 플러피 베이크샵 이미지
    const existingImages_1661166837 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1661166837'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1661166837[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1661166837' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230608_205/16862277127669qS1S_JPEG/Screenshot_20230608_213439_Gallery.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1661166837' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220525_215/1653485643220WDWj5_JPEG/20220504_102837.jpg',
        }
      ]);
    }

    // 뚜레쥬르 공덕역점 이미지
    const existingImages_11779023 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11779023'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11779023[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11779023' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190903_21/1567473898951KUfwL_JPEG/47EY0vGa5DpSkKRp6os526Xf.jpeg.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11779023' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190903_56/1567495756046KytKu_JPEG/GhW7tve4PM7Fzew0m2fked7n.jpg',
        }
      ]);
    }

    // 바이러닉 에스프레소바 공덕점 이미지
    const existingImages_1135730725 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1135730725'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1135730725[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1135730725' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241020_227/17293532719824UsOV_PNG/KakaoTalk_Photo_2024-01-27-00-08-23.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1135730725' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241020_270/1729353208604hs19M_JPEG/IMG_3824.JPG',
        }
      ]);
    }

    // 할리스 공덕점 이미지
    const existingImages_1124396971 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1124396971'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1124396971[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1124396971' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210302_125/161464487124061agC_JPEG/K15utTFWXeuNEny1JMXiV57W.jpg',
        }
      ]);
    }

    // 메가MGC커피 서울공덕초교점 이미지
    const existingImages_1939906103 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1939906103'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1939906103[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1939906103' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220422_181/1650618067784xeIDE_JPEG/1C98C280-96BB-4676-B59F-D66211B207EE.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1939906103' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220428_136/1651131031883SKUBg_JPEG/KakaoTalk_20220428_162958575_01.jpg',
        }
      ]);
    }

    // 메가MGC커피 공덕푸르지오시티점 이미지
    const existingImages_1164855479 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1164855479'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1164855479[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1164855479' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250331_138/1743387759361ryIqR_JPEG/KakaoTalk_20230607_214621535.jpg',
        }
      ]);
    }

    // 녹기 전에 이미지
    const existingImages_815032618 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['815032618'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_815032618[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '815032618' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20170713_161/1499907778703LgX9p_JPEG/186663503278545_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '815032618' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200609_169/1591699919685ueawV_JPEG/Fk_dnoOk2wuLp7IcMDu9ugZj.jpg',
        }
      ]);
    }

    // 그로토 이미지
    const existingImages_1664706768 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1664706768'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1664706768[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1664706768' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241117_46/1731794344044giJoP_JPEG/IMG_7811.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1664706768' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250117_171/1737107982844si3XK_JPEG/IMG_8791.jpeg',
        }
      ]);
    }

    // 한스 공덕점 이미지
    const existingImages_1886372274 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1886372274'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1886372274[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1886372274' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20250516_120/17473806930944TU50_JPEG/0516.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1886372274' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20250502_5/1746151088535YwaXk_PNG/%B8%C1%B0%ED%BB%FD%C5%A9%B8%B2.png',
        }
      ]);
    }

    // 곤트란쉐리에 공덕역점 이미지
    const existingImages_1281622516 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1281622516'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1281622516[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1281622516' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230403_246/1680491688701AmVaF_JPEG/1.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1281622516' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230403_238/1680491694387eVPix_JPEG/2.jpg',
        }
      ]);
    }

    // 파리바게트 공덕역사점 이미지
    const existingImages_1835667418 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1835667418'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1835667418[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1835667418' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250213_126/1739427901524y2uCs_JPEG/%B0%F8%B4%F6%BF%AA%BB%E71.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1835667418' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250213_212/1739427900533r6Yvq_JPEG/%B0%F8%B4%F6%BF%AA%BB%E72.jpg',
        }
      ]);
    }

    // 스트라다로스터스 공덕점 이미지
    const existingImages_1105908490 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1105908490'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1105908490[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1105908490' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231227_251/1703644916653onWAT_JPEG/1000004929.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1105908490' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240610_16/1717985613049eLdtw_JPEG/1000006517.jpg',
        }
      ]);
    }

    // 스타벅스 마포경찰서후문점 이미지
    const existingImages_1426392068 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1426392068'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1426392068[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1426392068' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190828_93/1566953601239OT9MQ_PNG/xX7Wv642gXMoTI0DAv0hRymS.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1426392068' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20240611_159/1718104306668Dawdl_JPEG/image.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 프릳츠 도화점 카테고리 관계
    const existingCategories_35524251 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35524251'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35524251 = new Set(existingCategories_35524251.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35524251 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_35524251) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35524251.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35524251' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 파네트 카테고리 관계
    const existingCategories_36534279 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36534279'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36534279 = new Set(existingCategories_36534279.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36534279 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_36534279) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36534279.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36534279' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아이엠베이글 공덕점 카테고리 관계
    const existingCategories_37463455 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37463455'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37463455 = new Set(existingCategories_37463455.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37463455 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_37463455) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37463455.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37463455' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코쿤 카테고리 관계
    const existingCategories_1755180693 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1755180693'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1755180693 = new Set(existingCategories_1755180693.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1755180693 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1755180693) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1755180693.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1755180693' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 브라우닝커피 카테고리 관계
    const existingCategories_1981327552 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1981327552'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1981327552 = new Set(existingCategories_1981327552.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1981327552 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1981327552) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1981327552.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1981327552' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 포멜로빈 공덕점 카테고리 관계
    const existingCategories_1318599055 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1318599055'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1318599055 = new Set(existingCategories_1318599055.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1318599055 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1318599055) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1318599055.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1318599055' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 비파티세리 공덕점 카테고리 관계
    const existingCategories_1469875009 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1469875009'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1469875009 = new Set(existingCategories_1469875009.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1469875009 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1469875009) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1469875009.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1469875009' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스타벅스 공덕오거리점 카테고리 관계
    const existingCategories_36943358 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36943358'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36943358 = new Set(existingCategories_36943358.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36943358 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_36943358) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36943358.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36943358' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 수더분 카테고리 관계
    const existingCategories_1411194664 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1411194664'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1411194664 = new Set(existingCategories_1411194664.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1411194664 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1411194664) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1411194664.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1411194664' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 겟앤쇼카페 공덕점 카테고리 관계
    const existingCategories_1999643675 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1999643675'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1999643675 = new Set(existingCategories_1999643675.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1999643675 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1999643675) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1999643675.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1999643675' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 치즈당 마포공덕점 카테고리 관계
    const existingCategories_1124407498 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1124407498'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1124407498 = new Set(existingCategories_1124407498.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1124407498 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1124407498) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1124407498.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1124407498' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 크리핀 카테고리 관계
    const existingCategories_1266420060 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1266420060'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1266420060 = new Set(existingCategories_1266420060.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1266420060 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1266420060) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1266420060.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1266420060' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 설빙 마포공덕점 카테고리 관계
    const existingCategories_1893531981 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1893531981'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1893531981 = new Set(existingCategories_1893531981.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1893531981 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1893531981) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1893531981.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1893531981' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마타사 공덕 카테고리 관계
    const existingCategories_1035788762 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1035788762'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1035788762 = new Set(existingCategories_1035788762.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1035788762 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1035788762) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1035788762.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1035788762' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 뺑스톡 공덕점 카테고리 관계
    const existingCategories_1337467260 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1337467260'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1337467260 = new Set(existingCategories_1337467260.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1337467260 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1337467260) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1337467260.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1337467260' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스타벅스 마포염리점 카테고리 관계
    const existingCategories_38704457 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38704457'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38704457 = new Set(existingCategories_38704457.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38704457 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_38704457) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38704457.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38704457' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 복호두 공덕점 카테고리 관계
    const existingCategories_1809215204 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1809215204'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1809215204 = new Set(existingCategories_1809215204.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1809215204 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1809215204) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1809215204.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1809215204' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 투썸플레이스 마포대로점 카테고리 관계
    const existingCategories_1079801331 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1079801331'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1079801331 = new Set(existingCategories_1079801331.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1079801331 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1079801331) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1079801331.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1079801331' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 황인상브레드 공덕점 카테고리 관계
    const existingCategories_1225468813 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1225468813'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1225468813 = new Set(existingCategories_1225468813.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1225468813 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1225468813) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1225468813.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1225468813' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 빽다방 마포경찰서점 카테고리 관계
    const existingCategories_1949972063 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1949972063'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1949972063 = new Set(existingCategories_1949972063.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1949972063 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1949972063) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1949972063.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1949972063' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스타벅스 공덕점 카테고리 관계
    const existingCategories_1024248869 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1024248869'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1024248869 = new Set(existingCategories_1024248869.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1024248869 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1024248869) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1024248869.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1024248869' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 할리스 공덕경의선숲길점 카테고리 관계
    const existingCategories_1766702669 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1766702669'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1766702669 = new Set(existingCategories_1766702669.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1766702669 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1766702669) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1766702669.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1766702669' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 영앤도터스 카테고리 관계
    const existingCategories_1734297335 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1734297335'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1734297335 = new Set(existingCategories_1734297335.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1734297335 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1734297335) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1734297335.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1734297335' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도화아파트먼트 마포 카테고리 관계
    const existingCategories_1236259036 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1236259036'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1236259036 = new Set(existingCategories_1236259036.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1236259036 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1236259036) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1236259036.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1236259036' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 고효동 카테고리 관계
    const existingCategories_1016376574 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1016376574'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1016376574 = new Set(existingCategories_1016376574.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1016376574 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1016376574) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1016376574.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1016376574' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 베로커피 카테고리 관계
    const existingCategories_1486490704 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1486490704'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1486490704 = new Set(existingCategories_1486490704.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1486490704 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1486490704) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1486490704.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1486490704' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오티오커피 카테고리 관계
    const existingCategories_1306448070 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1306448070'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1306448070 = new Set(existingCategories_1306448070.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1306448070 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1306448070) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1306448070.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1306448070' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 빽다방 공덕역롯데캐슬점 카테고리 관계
    const existingCategories_1125214233 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1125214233'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1125214233 = new Set(existingCategories_1125214233.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1125214233 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1125214233) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1125214233.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1125214233' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 뚜레쥬르 공덕해링턴점 카테고리 관계
    const existingCategories_757188582 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['757188582'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_757188582 = new Set(existingCategories_757188582.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_757188582 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_757188582) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_757188582.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '757188582' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 메가MGC커피 공덕SK리더스뷰점 카테고리 관계
    const existingCategories_1414758325 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1414758325'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1414758325 = new Set(existingCategories_1414758325.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1414758325 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1414758325) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1414758325.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1414758325' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 투썸플레이스 공덕풍림빌딩점 카테고리 관계
    const existingCategories_1953959793 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1953959793'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1953959793 = new Set(existingCategories_1953959793.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1953959793 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1953959793) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1953959793.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1953959793' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 37.5 익스프레스 공덕점 카테고리 관계
    const existingCategories_1369652009 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1369652009'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1369652009 = new Set(existingCategories_1369652009.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1369652009 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1369652009) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1369652009.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1369652009' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 투썸플레이스 공덕해링턴스퀘어점 카테고리 관계
    const existingCategories_435150272 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['435150272'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_435150272 = new Set(existingCategories_435150272.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_435150272 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_435150272) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_435150272.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '435150272' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 커피앳웍스 경의선숲길점 카테고리 관계
    const existingCategories_2098494923 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['2098494923'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_2098494923 = new Set(existingCategories_2098494923.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_2098494923 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_2098494923) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_2098494923.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '2098494923' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스타벅스 마포아크로점 카테고리 관계
    const existingCategories_12950359 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12950359'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12950359 = new Set(existingCategories_12950359.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12950359 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_12950359) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12950359.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12950359' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공덕로스터리 카테고리 관계
    const existingCategories_1805780662 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1805780662'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1805780662 = new Set(existingCategories_1805780662.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1805780662 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1805780662) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1805780662.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1805780662' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 다람제과 카테고리 관계
    const existingCategories_1317732543 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1317732543'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1317732543 = new Set(existingCategories_1317732543.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1317732543 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1317732543) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1317732543.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1317732543' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 플러피 베이크샵 카테고리 관계
    const existingCategories_1661166837 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1661166837'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1661166837 = new Set(existingCategories_1661166837.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1661166837 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1661166837) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1661166837.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1661166837' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 뚜레쥬르 공덕역점 카테고리 관계
    const existingCategories_11779023 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11779023'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11779023 = new Set(existingCategories_11779023.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11779023 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_11779023) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11779023.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11779023' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 바이러닉 에스프레소바 공덕점 카테고리 관계
    const existingCategories_1135730725 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1135730725'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1135730725 = new Set(existingCategories_1135730725.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1135730725 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1135730725) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1135730725.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1135730725' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 할리스 공덕점 카테고리 관계
    const existingCategories_1124396971 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1124396971'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1124396971 = new Set(existingCategories_1124396971.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1124396971 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1124396971) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1124396971.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1124396971' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 메가MGC커피 서울공덕초교점 카테고리 관계
    const existingCategories_1939906103 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1939906103'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1939906103 = new Set(existingCategories_1939906103.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1939906103 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1939906103) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1939906103.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1939906103' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 메가MGC커피 공덕푸르지오시티점 카테고리 관계
    const existingCategories_1164855479 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1164855479'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1164855479 = new Set(existingCategories_1164855479.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1164855479 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1164855479) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1164855479.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1164855479' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 녹기 전에 카테고리 관계
    const existingCategories_815032618 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['815032618'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_815032618 = new Set(existingCategories_815032618.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_815032618 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_815032618) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_815032618.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '815032618' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 그로토 카테고리 관계
    const existingCategories_1664706768 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1664706768'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1664706768 = new Set(existingCategories_1664706768.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1664706768 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1664706768) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1664706768.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1664706768' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한스 공덕점 카테고리 관계
    const existingCategories_1886372274 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1886372274'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1886372274 = new Set(existingCategories_1886372274.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1886372274 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1886372274) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1886372274.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1886372274' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 곤트란쉐리에 공덕역점 카테고리 관계
    const existingCategories_1281622516 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1281622516'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1281622516 = new Set(existingCategories_1281622516.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1281622516 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1281622516) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1281622516.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1281622516' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 파리바게트 공덕역사점 카테고리 관계
    const existingCategories_1835667418 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1835667418'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1835667418 = new Set(existingCategories_1835667418.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1835667418 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1835667418) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1835667418.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1835667418' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스트라다로스터스 공덕점 카테고리 관계
    const existingCategories_1105908490 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1105908490'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1105908490 = new Set(existingCategories_1105908490.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1105908490 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1105908490) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1105908490.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1105908490' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스타벅스 마포경찰서후문점 카테고리 관계
    const existingCategories_1426392068 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1426392068'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1426392068 = new Set(existingCategories_1426392068.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1426392068 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1426392068) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1426392068.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1426392068' LIMIT 1)`),
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
