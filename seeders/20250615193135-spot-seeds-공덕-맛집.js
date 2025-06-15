'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 맛집
 * 생성일시: 2025-06-15T10:31:45.518Z
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
        name: '사위식당 공덕점',
        address: '서울 마포구 공덕동 마포대로 109 지하1층 B121호',
        tel: '0507-1378-0646',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5444789 126.9505495)',
        4326
        ),
        naver_spot_id: '1496907883',
        review_count: 4,
        review_score: null,
      },
      {
        name: '야키토리 쇼몽',
        address: '서울 마포구 염리동 독막로 291-5 1층',
        tel: '0507-1354-9272',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450946 126.9457422)',
        4326
        ),
        naver_spot_id: '1904953828',
        review_count: 1,
        review_score: null,
      },
      {
        name: '장인닭갈비 공덕점',
        address: '서울 마포구 도화동 마포대로 92 B동 1층 3호',
        tel: '0507-1429-1730',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5425631 126.9520735)',
        4326
        ),
        naver_spot_id: '1932768057',
        review_count: 1,
        review_score: null,
      },
      {
        name: '다가생구이 서울본점',
        address: '서울 마포구 도화동 새창로4길 16-10 1층',
        tel: '0507-1333-9307',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5415891 126.9508832)',
        4326
        ),
        naver_spot_id: '1517993013',
        review_count: 1,
        review_score: null,
      },
      {
        name: '고기꾼김춘배 공덕직영점',
        address: '서울 마포구 염리동 독막로 291-5 1층 101호',
        tel: '0507-1361-6461',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450925 126.9458202)',
        4326
        ),
        naver_spot_id: '1268167159',
        review_count: 2,
        review_score: null,
      },
      {
        name: '박만배아리랑보쌈 공덕점',
        address: '서울 마포구 염리동 독막로 310 1층',
        tel: '02-6953-0004',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5435551 126.9470612)',
        4326
        ),
        naver_spot_id: '1797049113',
        review_count: 144,
        review_score: null,
      },
      {
        name: '마포진짜원조최대포 본점',
        address: '서울 마포구 공덕동 만리재로1길 1-2 1층',
        tel: '0507-1333-9293',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5445629 126.9519507)',
        4326
        ),
        naver_spot_id: '11678405',
        review_count: 1,
        review_score: null,
      },
      {
        name: '봉평옹심이메밀칼국수',
        address: '서울 마포구 공덕동 만리재옛길 19 1층 봉평옹심이메밀칼국수',
        tel: '0507-1351-0058',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5459556 126.9552378)',
        4326
        ),
        naver_spot_id: '37696107',
        review_count: 2,
        review_score: null,
      },
      {
        name: '두껍삼 마포직영점',
        address: '서울 마포구 도화동 독막로 331',
        tel: '02-588-3092',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5428987 126.9493317)',
        4326
        ),
        naver_spot_id: '1680291472',
        review_count: 2,
        review_score: null,
      },
      {
        name: '마키노차야 마포점',
        address: '서울 마포구 도화동 마포대로 92 효성해링턴스퀘어 A동 9층',
        tel: '02-565-1116',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5428726 126.9510426)',
        4326
        ),
        naver_spot_id: '1811035562',
        review_count: 3,
        review_score: null,
      },
      {
        name: '숙성육관by해봉',
        address: '서울 마포구 염리동 토정로37길 41 2층',
        tel: '02-712-9929',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.542715 126.94672)',
        4326
        ),
        naver_spot_id: '1818021799',
        review_count: 421,
        review_score: null,
      },
      {
        name: '김막회',
        address: '서울 마포구 도화동 도화길 20-1 1층',
        tel: '0507-1451-5311',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5403095 126.9483427)',
        4326
        ),
        naver_spot_id: '1673141274',
        review_count: 1,
        review_score: null,
      },
      {
        name: '서울가든호텔 라스텔라',
        address: '서울 마포구 도화동 마포대로 58 서울가든호텔 1층',
        tel: '0507-1448-7272',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.540838 126.9482894)',
        4326
        ),
        naver_spot_id: '11714858',
        review_count: 2,
        review_score: null,
      },
      {
        name: '찬란한아구 공덕직영점',
        address: '서울 마포구 도화동 마포대로 92 B동 1층 8호',
        tel: '0507-1495-2929',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5423608 126.9522643)',
        4326
        ),
        naver_spot_id: '1115466752',
        review_count: 1,
        review_score: null,
      },
      {
        name: '일류곱창 마포공덕본점',
        address: '서울 마포구 도화동 새창로 26 2층',
        tel: '02-711-1425',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5417897 126.9527677)',
        4326
        ),
        naver_spot_id: '1791385995',
        review_count: 471,
        review_score: null,
      },
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
        name: '색동저고리',
        address: '서울 마포구 도화동 도화길 27',
        tel: '02-711-1211',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5408646 126.9489049)',
        4326
        ),
        naver_spot_id: '37746316',
        review_count: 2,
        review_score: 4.28,
      },
      {
        name: '우수',
        address: '서울 마포구 공덕동 마포대로 109 롯데캐슬프레지던트 상가 지하2층 201호',
        tel: '0507-1471-4117',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450054 126.9512549)',
        4326
        ),
        naver_spot_id: '1365318364',
        review_count: 343,
        review_score: null,
      },
      {
        name: '애슐리퀸즈 공덕점',
        address: '서울 마포구 공덕동 마포대로 144 마포T타운 지하1층',
        tel: '0507-1355-6372',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5469842 126.9537474)',
        4326
        ),
        naver_spot_id: '1700334714',
        review_count: 1,
        review_score: null,
      },
      {
        name: '락희옥 마포본점',
        address: '서울 마포구 공덕동 백범로 170 공덕더샵아파트 101동 1층 1호',
        tel: '0507-1444-9797',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5443604 126.9494971)',
        4326
        ),
        naver_spot_id: '36665426',
        review_count: 1,
        review_score: null,
      },
      {
        name: '김숙성 마포역점',
        address: '서울 마포구 도화동 도화길 14-1 1층 제1호',
        tel: '0507-1381-3759',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.540114 126.9478713)',
        4326
        ),
        naver_spot_id: '1076282133',
        review_count: 1,
        review_score: null,
      },
      {
        name: '오롯로바타',
        address: '서울 마포구 공덕동 백범로 152 공덕파크자이 202동 1층 5,6호',
        tel: '0507-1308-3560',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5455967 126.9465758)',
        4326
        ),
        naver_spot_id: '1193300495',
        review_count: 1,
        review_score: null,
      },
      {
        name: '무쇠뚜껑',
        address: '서울 마포구 염리동 독막로 311 재화스퀘어 지하 1층 육미전복',
        tel: '0507-1308-8487',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5439964 126.9474882)',
        4326
        ),
        naver_spot_id: '1133945423',
        review_count: 858,
        review_score: null,
      },
      {
        name: '곱 마포직영점',
        address: '서울 마포구 도화동 도화길 31-1',
        tel: '0507-1324-5201',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5410047 126.9493851)',
        4326
        ),
        naver_spot_id: '33331941',
        review_count: 7,
        review_score: 4.46,
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
        name: '맥도날드 공덕점',
        address: '서울 마포구 도화동 마포대로 55-1 마포트라팰리스 1층',
        tel: '02-6743-6300',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5410909 126.9470909)',
        4326
        ),
        naver_spot_id: '20610310',
        review_count: 9,
        review_score: 4.38,
      },
      {
        name: 'vivo pizza 공덕점',
        address: '서울 마포구 공덕동 백범로 152 제201동 1층 15호',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5451415 126.9471026)',
        4326
        ),
        naver_spot_id: '1149870074',
        review_count: 43,
        review_score: null,
      },
      {
        name: '솜솜',
        address: '서울 마포구 염리동 백범로26길 6 1층',
        tel: '0507-1329-4096',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5456359 126.9460533)',
        4326
        ),
        naver_spot_id: '1519637167',
        review_count: 1,
        review_score: null,
      },
      {
        name: '카츠업 공덕점',
        address: '서울 마포구 공덕동 백범로 152 202동 1층 3호',
        tel: '0507-1359-5780',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5455357 126.9467158)',
        4326
        ),
        naver_spot_id: '1780792032',
        review_count: 701,
        review_score: null,
      },
      {
        name: '진대감 마포점',
        address: '서울 마포구 공덕동 마포대로12길 54 1층',
        tel: '0507-1439-1559',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5466313 126.9544398)',
        4326
        ),
        naver_spot_id: '13114967',
        review_count: 2,
        review_score: 4.51,
      },
      {
        name: '하하 공덕점',
        address: '서울 마포구 도화동 새창로 28',
        tel: '02-706-0212',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5416508 126.9529299)',
        4326
        ),
        naver_spot_id: '147393801',
        review_count: 560,
        review_score: 4.36,
      },
      {
        name: '우양돈',
        address: '서울 마포구 도화동 마포대로 92 효성 해링턴스퀘어 B동 1층 14호',
        tel: '0507-1493-0295',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5421699 126.9524587)',
        4326
        ),
        naver_spot_id: '1241961611',
        review_count: 295,
        review_score: null,
      },
      {
        name: '마포양지설렁탕',
        address: '서울 마포구 도화동 새창로 6',
        tel: '02-716-8616',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5420571 126.9504338)',
        4326
        ),
        naver_spot_id: '37365482',
        review_count: 4,
        review_score: 4.32,
      },
      {
        name: '형제특수부위',
        address: '서울 마포구 도화동 도화길 50-1 형제특수부위',
        tel: '0507-1323-5701',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5419087 126.9510395)',
        4326
        ),
        naver_spot_id: '1090542652',
        review_count: 2,
        review_score: null,
      },
      {
        name: '삼덕통닭 마포점',
        address: '서울 마포구 도화동 마포대로 53 1층 110, 111호',
        tel: '02-716-6806',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5414263 126.9475618)',
        4326
        ),
        naver_spot_id: '1341967882',
        review_count: 2,
        review_score: null,
      },
      {
        name: '미스터리브루잉컴퍼니',
        address: '서울 마포구 염리동 독막로 311',
        tel: '0507-1363-6337',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5440084 126.9472621)',
        4326
        ),
        naver_spot_id: '1027233132',
        review_count: 1,
        review_score: null,
      },
      {
        name: '이아초밥 공덕점',
        address: '서울 마포구 공덕동 백범로 170 102동 1층 2호',
        tel: '0507-1336-6941',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5444687 126.9490757)',
        4326
        ),
        naver_spot_id: '1614627890',
        review_count: 580,
        review_score: null,
      },
      {
        name: '고반식당블랙 마포본점',
        address: '서울 마포구 도화동 도화길 16 1층 고반식당블랙 마포본점',
        tel: '0507-1493-6712',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5401687 126.9480108)',
        4326
        ),
        naver_spot_id: '1238417603',
        review_count: 760,
        review_score: null,
      },
      {
        name: '우대포 공덕점',
        address: '서울 마포구 도화동 도화4길 9 1층',
        tel: '0507-1488-1094',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5414046 126.9506716)',
        4326
        ),
        naver_spot_id: '1273786403',
        review_count: 484,
        review_score: null,
      },
      {
        name: '양산도 공덕점',
        address: '서울 마포구 공덕동 백범로 152 공덕파크자이 101동 4호',
        tel: '0507-1496-1057',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5448328 126.9484685)',
        4326
        ),
        naver_spot_id: '1235412532',
        review_count: 500,
        review_score: null,
      },
      {
        name: '채담화',
        address: '서울 마포구 염리동 독막로 311 지하1층',
        tel: '0507-1388-5666',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5438726 126.9475287)',
        4326
        ),
        naver_spot_id: '1380810258',
        review_count: 2,
        review_score: null,
      },
      {
        name: '아소정',
        address: '서울 마포구 염리동 백범로25길 9',
        tel: '02-703-5959',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5466065 126.9463933)',
        4326
        ),
        naver_spot_id: '11603394',
        review_count: 1,
        review_score: 4.27,
      },
      {
        name: '솥고집 공덕점',
        address: '서울 마포구 공덕동 백범로 170 101동 1층 6호',
        tel: '02-318-4441',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5441508 126.949241)',
        4326
        ),
        naver_spot_id: '1351521039',
        review_count: 503,
        review_score: null,
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
        name: '월화식당 마포본점',
        address: '서울 마포구 도화동 도화길 29 1, 2층',
        tel: '0507-1410-7596',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5408671 126.9491679)',
        4326
        ),
        naver_spot_id: '1905133643',
        review_count: 2,
        review_score: null,
      },
      {
        name: '참나무본가 공덕점',
        address: '서울 마포구 공덕동 마포대로6길 10 2층',
        tel: '0507-1445-9997',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5452482 126.9530924)',
        4326
        ),
        naver_spot_id: '36925310',
        review_count: 960,
        review_score: 4.32,
      },
      {
        name: '금고기 마포본점',
        address: '서울 마포구 도화동 도화길 20-6 1층, 2층',
        tel: '0507-1306-1488',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5402745 126.948287)',
        4326
        ),
        naver_spot_id: '1814374180',
        review_count: 1,
        review_score: null,
      },
      {
        name: '복성각 마포본점',
        address: '서울 마포구 도화동 마포대로 63-8 삼창주택 지하 1층 복성각, 삼창 프라자 지하상가 - 복성각 -공덕역 1번 출구 뚜레주르 끼고 돌아서 오시면동서식품 뒷편 삼창프라자 지하상',
        tel: '02-703-3700',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5420105 126.9478369)',
        4326
        ),
        naver_spot_id: '31238198',
        review_count: 2,
        review_score: null,
      },
      {
        name: '동아냉면 공덕점',
        address: '서울 마포구 공덕동 백범로31길 8 sk리더스뷰상가 2동 101호 동아냉면',
        tel: '02-717-8650',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5452273 126.9499049)',
        4326
        ),
        naver_spot_id: '1537997018',
        review_count: 370,
        review_score: null,
      },
      {
        name: '장수갈매기 본점',
        address: '서울 마포구 도화동 도화길 46',
        tel: '02-716-6070',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5417388 126.9507161)',
        4326
        ),
        naver_spot_id: '11824283',
        review_count: 1,
        review_score: 4.43,
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

    // 사위식당 공덕점 이미지
    const existingImages_1496907883 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1496907883'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1496907883[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1496907883' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230825_286/16929528807836fnuz_JPEG/%BB%E7%C0%A76.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1496907883' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230825_139/1692952823737acd56_JPEG/%BB%E7%C0%A74.jpg',
        }
      ]);
    }

    // 야키토리 쇼몽 이미지
    const existingImages_1904953828 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1904953828'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1904953828[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1904953828' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241113_29/1731432391102mu7xf_JPEG/IMG_4752.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1904953828' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241113_84/1731432178421aARQW_JPEG/IMG_4750.jpeg',
        }
      ]);
    }

    // 장인닭갈비 공덕점 이미지
    const existingImages_1932768057 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1932768057'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1932768057[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1932768057' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250305_33/1741152610219hCNS0_JPEG/%C0%E5%C0%CE%B4%DF%B0%A5%BA%F1_%B0%F8%B4%F6%C1%A1_%C6%C4%BF%F6%B8%B5%C5%A9_%C0%CC%B9%CC%C1%F6.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1932768057' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250305_211/1741152695505eRrpy_JPEG/KakaoTalk_20240305_154931729_01.jpg',
        }
      ]);
    }

    // 다가생구이 서울본점 이미지
    const existingImages_1517993013 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1517993013'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1517993013[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1517993013' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240709_253/1720492351947i8cjj_JPEG/IMG_3908.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1517993013' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240203_268/17069552152714FHw6_JPEG/74056CF6-1FEA-4491-8B8F-D7FB1FA75591.jpeg',
        }
      ]);
    }

    // 고기꾼김춘배 공덕직영점 이미지
    const existingImages_1268167159 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1268167159'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1268167159[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1268167159' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250110_22/1736498114490frSJw_JPEG/1000014413.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1268167159' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250101_1/1735717590037CHBEz_JPEG/IMG_2688.jpeg',
        }
      ]);
    }

    // 박만배아리랑보쌈 공덕점 이미지
    const existingImages_1797049113 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1797049113'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1797049113[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1797049113' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250411_31/1744361416175dP5E8_JPEG/1.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1797049113' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250325_112/1742896859398W2jv8_JPEG/2.jpg',
        }
      ]);
    }

    // 마포진짜원조최대포 본점 이미지
    const existingImages_11678405 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11678405'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11678405[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11678405' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20211026_180/16352279169275CRRq_JPEG/YTRVKxz5ttybLpqKeW8_Mp7O.JPG.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11678405' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221010_122/1665383287352TvrWI_JPEG/1665383263550.jpg',
        }
      ]);
    }

    // 봉평옹심이메밀칼국수 이미지
    const existingImages_37696107 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37696107'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37696107[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37696107' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221012_186/1665527187487ryORO_JPEG/Screenshot_20221012_070729_Coupang_Eats.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37696107' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221012_258/1665527177529uu8br_JPEG/Screenshot_20221012_070716_Coupang_Eats.jpg',
        }
      ]);
    }

    // 두껍삼 마포직영점 이미지
    const existingImages_1680291472 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1680291472'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1680291472[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1680291472' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20171229_229/1514519451925J3cOp_JPEG/R8I1uocwC0l55hb5BL9Bv7xQ.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1680291472' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240910_82/1725944575477SG1x1_JPEG/IMG_0940.jpg',
        }
      ]);
    }

    // 마키노차야 마포점 이미지
    const existingImages_1811035562 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1811035562'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1811035562[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1811035562' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241121_240/17321873490212MaQJ_JPEG/KakaoTalk_20241121_193109566.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1811035562' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241121_253/1732187349064HMf8B_JPEG/KakaoTalk_20241121_195855646_01.jpg',
        }
      ]);
    }

    // 숙성육관by해봉 이미지
    const existingImages_1818021799 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1818021799'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1818021799[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1818021799' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230418_123/1681744310980MQiEd_JPEG/1681744123718.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1818021799' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230418_82/1681744301470TeRba_JPEG/1681744146547.jpg',
        }
      ]);
    }

    // 김막회 이미지
    const existingImages_1673141274 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1673141274'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1673141274[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1673141274' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241010_128/1728536377419mJR9f_JPEG/%B8%B7%C8%B8%C7%D1%BB%F3.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1673141274' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250610_88/1749521769533k6ua4_JPEG/1000010959.jpg',
        }
      ]);
    }

    // 서울가든호텔 라스텔라 이미지
    const existingImages_11714858 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11714858'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11714858[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11714858' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230314_140/1678765150059PMjQT_JPEG/JMJ00049%28%BE%F7%B7%CE%B5%E5%29.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11714858' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220311_119/1646980176500JFAXt_JPEG/JMJ01058.jpg',
        }
      ]);
    }

    // 찬란한아구 공덕직영점 이미지
    const existingImages_1115466752 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1115466752'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1115466752[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1115466752' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230503_233/1683078806050IX8jQ_JPEG/KakaoTalk_20230503_105157696.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1115466752' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20240317_165/1710640697344Wf7wY_JPEG/%BF%EC%BB%EF%B0%E3.jpg',
        }
      ]);
    }

    // 일류곱창 마포공덕본점 이미지
    const existingImages_1791385995 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1791385995'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1791385995[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1791385995' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241025_199/1729822789618v10g5_JPEG/A7406375.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1791385995' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241025_35/1729822801050akU79_JPEG/A7406188.jpg',
        }
      ]);
    }

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

    // 색동저고리 이미지
    const existingImages_37746316 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37746316'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37746316[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37746316' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20171130_24/1511986388026iQPO8_JPEG/image.JPEG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37746316' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20171130_156/1511986388358Io29X_JPEG/_IMG_9528.JPG',
        }
      ]);
    }

    // 우수 이미지
    const existingImages_1365318364 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1365318364'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1365318364[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1365318364' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250605_246/17491157750088YxOF_PNG/20250605_182841.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1365318364' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250605_167/1749114670082m4eno_JPEG/KakaoTalk_20250605_181038337.jpg',
        }
      ]);
    }

    // 애슐리퀸즈 공덕점 이미지
    const existingImages_1700334714 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1700334714'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1700334714[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1700334714' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250521_188/17478131859393mL8P_JPEG/%B8%C5%C0%E5DID_%C4%A1%C1%EE1.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1700334714' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250521_30/1747813182907a99fl_JPEG/%B8%C5%C0%E5DID_%C4%A1%C1%EE2.jpg',
        }
      ]);
    }

    // 락희옥 마포본점 이미지
    const existingImages_36665426 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36665426'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36665426[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36665426' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231127_107/1701045523626WO1vu_PNG/1_%BA%B8%BD%D3.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36665426' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240430_292/1714439474105Wxf5f_PNG/KakaoTalk_20230414_110908206_%BA%B8%C1%A4_1%3B1.png',
        }
      ]);
    }

    // 김숙성 마포역점 이미지
    const existingImages_1076282133 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1076282133'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1076282133[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1076282133' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240919_69/1726731697805DfRQ0_JPEG/KakaoTalk_20240919_162131859_04.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1076282133' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241204_52/1733301622390pBhgy_JPEG/KakaoTalk_20241204_173946593_04.jpg',
        }
      ]);
    }

    // 오롯로바타 이미지
    const existingImages_1193300495 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1193300495'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1193300495[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1193300495' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241213_27/1734076037199ueXOI_JPEG/KakaoTalk_Photo_2024-12-13-16-45-04.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1193300495' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240212_5/1707739022288AriGz_JPEG/KakaoTalk_Photo_2023-11-06-22-47-30.jpeg',
        }
      ]);
    }

    // 무쇠뚜껑 이미지
    const existingImages_1133945423 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1133945423'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1133945423[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1133945423' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240126_269/1706256945060kSqBB_JPEG/1706074240136.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1133945423' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240126_248/1706256945077fb4wk_JPEG/1706074256816.jpg',
        }
      ]);
    }

    // 곱 마포직영점 이미지
    const existingImages_33331941 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33331941'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_33331941[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33331941' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210304_215/1614840759468xRBmp_JPEG/FVhITCLogWihThMCEKt4lhLY.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33331941' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250415_64/174470434606294VCe_JPEG/KakaoTalk_20250415_170103540.jpg',
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

    // 맥도날드 공덕점 이미지
    const existingImages_20610310 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20610310'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20610310[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20610310' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150901_272/1441057437372rwxFF_JPEG/20610310_0.jpg',
        }
      ]);
    }

    // vivo pizza 공덕점 이미지
    const existingImages_1149870074 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1149870074'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1149870074[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1149870074' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250422_216/1745293551202t0iHc_JPEG/IMG_3926.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1149870074' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250422_95/1745293564543L6QHC_JPEG/IMG_3930.jpeg',
        }
      ]);
    }

    // 솜솜 이미지
    const existingImages_1519637167 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1519637167'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1519637167[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1519637167' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240613_47/1718251938698C2rLS_PNG/20240613_130843.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1519637167' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240613_241/1718251938666AJeQa_PNG/20240613_131010.png',
        }
      ]);
    }

    // 카츠업 공덕점 이미지
    const existingImages_1780792032 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1780792032'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1780792032[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1780792032' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240725_279/1721882967514BuJ3r_JPEG/%B1%E8%C4%A1%B3%AA%BA%A3-04020.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1780792032' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240725_178/17218829798769x24E_JPEG/%B9%DD%B9%DD%C4%AB%C3%F7_1_1.jpg',
        }
      ]);
    }

    // 진대감 마포점 이미지
    const existingImages_13114967 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13114967'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13114967[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13114967' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250120_96/1737338510626jxpzm_JPEG/123.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13114967' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240306_284/1709690677963msgXN_JPEG/001.jpg',
        }
      ]);
    }

    // 하하 공덕점 이미지
    const existingImages_147393801 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['147393801'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_147393801[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '147393801' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20170213_129/1486964759906EmEhz_JPEG/186160575653379_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '147393801' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200124_66/1579874765994uRLl9_JPEG/4N8o2m4ta4kYWPgu9Dpl_74i.jpeg.jpg',
        }
      ]);
    }

    // 우양돈 이미지
    const existingImages_1241961611 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1241961611'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1241961611[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1241961611' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250331_76/1743421898603qNnuY_JPEG/IMG_2326.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1241961611' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250331_229/1743388413192IY7qI_JPEG/IMG_2304.jpeg',
        }
      ]);
    }

    // 마포양지설렁탕 이미지
    const existingImages_37365482 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37365482'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37365482[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37365482' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221013_79/16656361619494qDvO_PNG/Z1AkhVDvBE0z6YlCOp1B0jan.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37365482' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221013_239/1665636168495eoohF_PNG/9MtYXa9nA2C77WKrTgPbfQ-1.png',
        }
      ]);
    }

    // 형제특수부위 이미지
    const existingImages_1090542652 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1090542652'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1090542652[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1090542652' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230526_134/1685075339119PYLfN_JPEG/KakaoTalk_20230526_132235627_01.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1090542652' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230526_103/1685075358165GlHBA_JPEG/KakaoTalk_20230526_132235627_03.jpg',
        }
      ]);
    }

    // 삼덕통닭 마포점 이미지
    const existingImages_1341967882 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1341967882'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1341967882[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1341967882' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230120_273/1674182831210TykDx_JPEG/158061114_702922557050307_8789063647771865922_n.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1341967882' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230202_75/167532146834780RrK_JPEG/KakaoTalk_20230202_150333714_04.jpg',
        }
      ]);
    }

    // 미스터리브루잉컴퍼니 이미지
    const existingImages_1027233132 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1027233132'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1027233132[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1027233132' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200930_25/1601446112406F7yPd_JPEG/8Adc4TqsSh3cBmf2nvbBjGH8.JPG.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1027233132' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241219_169/1734584418447SrqId_JPEG/IMG_0909_%BA%B9%BB%E7%BA%BB.JPG',
        }
      ]);
    }

    // 이아초밥 공덕점 이미지
    const existingImages_1614627890 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1614627890'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1614627890[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1614627890' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230505_249/1683265260373wIN3f_JPEG/0BB46833-3334-490F-BB5E-911AC005B2BE.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1614627890' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230505_62/1683265260607B5PG2_JPEG/02E7FDED-DD54-4A8E-B20D-2FEE6F6CBC78.jpeg',
        }
      ]);
    }

    // 고반식당블랙 마포본점 이미지
    const existingImages_1238417603 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1238417603'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1238417603[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1238417603' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250108_110/1736316736165R450h_JPEG/%C7%C3%B7%B9%C0%CC%BD%BA%BF%EB2.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1238417603' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250108_56/17363138676914G0Je_JPEG/2411271183.jpg',
        }
      ]);
    }

    // 우대포 공덕점 이미지
    const existingImages_1273786403 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1273786403'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1273786403[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1273786403' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241231_13/17356217124692XMGl_JPEG/batch_KakaoTalk_20241231_140029505_12.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1273786403' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241231_128/1735621719139Rn9Mr_JPEG/batch_KakaoTalk_20241231_135941993_02.jpg',
        }
      ]);
    }

    // 양산도 공덕점 이미지
    const existingImages_1235412532 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1235412532'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1235412532[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1235412532' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250123_96/17376024923385Kjuf_PNG/1.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1235412532' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250123_32/1737602485731Re4jL_PNG/4.png',
        }
      ]);
    }

    // 채담화 이미지
    const existingImages_1380810258 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1380810258'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1380810258[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1380810258' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20230824_202/1692866481011s1J8b_JPEG/%BA%F1%BA%F6%B9%E42.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1380810258' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20230724_124/1690161114640QOsLT_JPEG/image.jpg',
        }
      ]);
    }

    // 아소정 이미지
    const existingImages_11603394 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11603394'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11603394[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11603394' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_72/1441003132840dU32F_JPEG/11603394_0.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11603394' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_18/1441003133135g6bnM_JPEG/11603394_1.jpg',
        }
      ]);
    }

    // 솥고집 공덕점 이미지
    const existingImages_1351521039 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1351521039'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1351521039[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1351521039' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250317_235/1742186873731Ej9Bt_JPEG/IMG_1795.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1351521039' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250317_68/17421868682442IHzN_JPEG/IMG_1796.jpeg',
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

    // 월화식당 마포본점 이미지
    const existingImages_1905133643 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1905133643'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1905133643[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1905133643' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240814_65/17236237034050E2M6_JPEG/%B9%D0%B6%F8%BB%EF%B0%E3%BB%EC.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1905133643' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250415_55/1744704499669jU9Os_JPEG/KakaoTalk_20250415_170103540.jpg',
        }
      ]);
    }

    // 참나무본가 공덕점 이미지
    const existingImages_36925310 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36925310'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36925310[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36925310' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20161002_130/1475404713947qRwp8_JPEG/176952596852958_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36925310' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20161002_9/14754047140862XHmI_JPEG/176952596852958_1.jpeg',
        }
      ]);
    }

    // 금고기 마포본점 이미지
    const existingImages_1814374180 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1814374180'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1814374180[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1814374180' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250613_40/174982203426224thL_JPEG/1000014640.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1814374180' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250613_157/1749824401303IqsmY_PNG/1000014643.png',
        }
      ]);
    }

    // 복성각 마포본점 이미지
    const existingImages_31238198 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31238198'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_31238198[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31238198' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20171130_131/1511981278370AvVHn_JPEG/ggg.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31238198' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_225/1440988249635c58jG_JPEG/SUBMIT_1358385031451_31238198.jpg',
        }
      ]);
    }

    // 동아냉면 공덕점 이미지
    const existingImages_1537997018 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1537997018'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1537997018[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1537997018' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220104_203/1641265265580LA2Ps_JPEG/1641265217071.jpg',
        }
      ]);
    }

    // 장수갈매기 본점 이미지
    const existingImages_11824283 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11824283'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11824283[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11824283' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20161202_52/1480653402630EwdPS_JPEG/177152536662482_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11824283' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20161202_268/1480653402813y76iL_JPEG/177152536662482_4.jpeg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 사위식당 공덕점 카테고리 관계
    const existingCategories_1496907883 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1496907883'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1496907883 = new Set(existingCategories_1496907883.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1496907883 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1496907883) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1496907883.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1496907883' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 야키토리 쇼몽 카테고리 관계
    const existingCategories_1904953828 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1904953828'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1904953828 = new Set(existingCategories_1904953828.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1904953828 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1904953828) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1904953828.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1904953828' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 장인닭갈비 공덕점 카테고리 관계
    const existingCategories_1932768057 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1932768057'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1932768057 = new Set(existingCategories_1932768057.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1932768057 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1932768057) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1932768057.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1932768057' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 다가생구이 서울본점 카테고리 관계
    const existingCategories_1517993013 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1517993013'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1517993013 = new Set(existingCategories_1517993013.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1517993013 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1517993013) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1517993013.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1517993013' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 고기꾼김춘배 공덕직영점 카테고리 관계
    const existingCategories_1268167159 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1268167159'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1268167159 = new Set(existingCategories_1268167159.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1268167159 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1268167159) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1268167159.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1268167159' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 박만배아리랑보쌈 공덕점 카테고리 관계
    const existingCategories_1797049113 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1797049113'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1797049113 = new Set(existingCategories_1797049113.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1797049113 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1797049113) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1797049113.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1797049113' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포진짜원조최대포 본점 카테고리 관계
    const existingCategories_11678405 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11678405'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11678405 = new Set(existingCategories_11678405.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11678405 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_11678405) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11678405.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11678405' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 봉평옹심이메밀칼국수 카테고리 관계
    const existingCategories_37696107 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37696107'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37696107 = new Set(existingCategories_37696107.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37696107 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_37696107) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37696107.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37696107' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 두껍삼 마포직영점 카테고리 관계
    const existingCategories_1680291472 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1680291472'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1680291472 = new Set(existingCategories_1680291472.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1680291472 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1680291472) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1680291472.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1680291472' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마키노차야 마포점 카테고리 관계
    const existingCategories_1811035562 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1811035562'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1811035562 = new Set(existingCategories_1811035562.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1811035562 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1811035562) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1811035562.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1811035562' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 숙성육관by해봉 카테고리 관계
    const existingCategories_1818021799 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1818021799'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1818021799 = new Set(existingCategories_1818021799.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1818021799 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1818021799) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1818021799.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1818021799' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 김막회 카테고리 관계
    const existingCategories_1673141274 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1673141274'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1673141274 = new Set(existingCategories_1673141274.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1673141274 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1673141274) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1673141274.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1673141274' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울가든호텔 라스텔라 카테고리 관계
    const existingCategories_11714858 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11714858'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11714858 = new Set(existingCategories_11714858.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11714858 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_11714858) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11714858.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11714858' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 찬란한아구 공덕직영점 카테고리 관계
    const existingCategories_1115466752 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1115466752'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1115466752 = new Set(existingCategories_1115466752.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1115466752 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1115466752) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1115466752.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1115466752' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 일류곱창 마포공덕본점 카테고리 관계
    const existingCategories_1791385995 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1791385995'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1791385995 = new Set(existingCategories_1791385995.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1791385995 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1791385995) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1791385995.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1791385995' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

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

    // 색동저고리 카테고리 관계
    const existingCategories_37746316 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37746316'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37746316 = new Set(existingCategories_37746316.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37746316 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_37746316) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37746316.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37746316' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 우수 카테고리 관계
    const existingCategories_1365318364 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1365318364'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1365318364 = new Set(existingCategories_1365318364.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1365318364 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1365318364) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1365318364.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1365318364' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 애슐리퀸즈 공덕점 카테고리 관계
    const existingCategories_1700334714 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1700334714'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1700334714 = new Set(existingCategories_1700334714.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1700334714 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1700334714) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1700334714.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1700334714' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 락희옥 마포본점 카테고리 관계
    const existingCategories_36665426 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36665426'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36665426 = new Set(existingCategories_36665426.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36665426 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_36665426) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36665426.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36665426' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 김숙성 마포역점 카테고리 관계
    const existingCategories_1076282133 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1076282133'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1076282133 = new Set(existingCategories_1076282133.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1076282133 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1076282133) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1076282133.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1076282133' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오롯로바타 카테고리 관계
    const existingCategories_1193300495 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1193300495'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1193300495 = new Set(existingCategories_1193300495.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1193300495 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1193300495) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1193300495.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1193300495' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 무쇠뚜껑 카테고리 관계
    const existingCategories_1133945423 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1133945423'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1133945423 = new Set(existingCategories_1133945423.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1133945423 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1133945423) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1133945423.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1133945423' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 곱 마포직영점 카테고리 관계
    const existingCategories_33331941 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33331941'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33331941 = new Set(existingCategories_33331941.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33331941 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_33331941) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33331941.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33331941' LIMIT 1)`),
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

    // 맥도날드 공덕점 카테고리 관계
    const existingCategories_20610310 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20610310'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20610310 = new Set(existingCategories_20610310.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20610310 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_20610310) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20610310.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20610310' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // vivo pizza 공덕점 카테고리 관계
    const existingCategories_1149870074 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1149870074'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1149870074 = new Set(existingCategories_1149870074.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1149870074 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1149870074) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1149870074.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1149870074' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 솜솜 카테고리 관계
    const existingCategories_1519637167 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1519637167'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1519637167 = new Set(existingCategories_1519637167.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1519637167 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1519637167) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1519637167.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1519637167' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 카츠업 공덕점 카테고리 관계
    const existingCategories_1780792032 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1780792032'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1780792032 = new Set(existingCategories_1780792032.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1780792032 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1780792032) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1780792032.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1780792032' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 진대감 마포점 카테고리 관계
    const existingCategories_13114967 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13114967'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13114967 = new Set(existingCategories_13114967.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13114967 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_13114967) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13114967.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13114967' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 하하 공덕점 카테고리 관계
    const existingCategories_147393801 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['147393801'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_147393801 = new Set(existingCategories_147393801.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_147393801 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_147393801) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_147393801.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '147393801' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 우양돈 카테고리 관계
    const existingCategories_1241961611 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1241961611'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1241961611 = new Set(existingCategories_1241961611.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1241961611 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1241961611) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1241961611.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1241961611' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포양지설렁탕 카테고리 관계
    const existingCategories_37365482 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37365482'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37365482 = new Set(existingCategories_37365482.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37365482 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_37365482) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37365482.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37365482' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 형제특수부위 카테고리 관계
    const existingCategories_1090542652 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1090542652'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1090542652 = new Set(existingCategories_1090542652.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1090542652 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1090542652) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1090542652.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1090542652' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 삼덕통닭 마포점 카테고리 관계
    const existingCategories_1341967882 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1341967882'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1341967882 = new Set(existingCategories_1341967882.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1341967882 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1341967882) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1341967882.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1341967882' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 미스터리브루잉컴퍼니 카테고리 관계
    const existingCategories_1027233132 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1027233132'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1027233132 = new Set(existingCategories_1027233132.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1027233132 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1027233132) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1027233132.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1027233132' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이아초밥 공덕점 카테고리 관계
    const existingCategories_1614627890 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1614627890'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1614627890 = new Set(existingCategories_1614627890.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1614627890 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1614627890) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1614627890.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1614627890' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 고반식당블랙 마포본점 카테고리 관계
    const existingCategories_1238417603 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1238417603'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1238417603 = new Set(existingCategories_1238417603.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1238417603 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1238417603) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1238417603.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1238417603' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 우대포 공덕점 카테고리 관계
    const existingCategories_1273786403 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1273786403'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1273786403 = new Set(existingCategories_1273786403.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1273786403 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1273786403) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1273786403.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1273786403' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 양산도 공덕점 카테고리 관계
    const existingCategories_1235412532 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1235412532'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1235412532 = new Set(existingCategories_1235412532.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1235412532 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1235412532) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1235412532.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1235412532' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 채담화 카테고리 관계
    const existingCategories_1380810258 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1380810258'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1380810258 = new Set(existingCategories_1380810258.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1380810258 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1380810258) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1380810258.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1380810258' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아소정 카테고리 관계
    const existingCategories_11603394 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11603394'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11603394 = new Set(existingCategories_11603394.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11603394 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_11603394) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11603394.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11603394' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 솥고집 공덕점 카테고리 관계
    const existingCategories_1351521039 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1351521039'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1351521039 = new Set(existingCategories_1351521039.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1351521039 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1351521039) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1351521039.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1351521039' LIMIT 1)`),
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

    // 월화식당 마포본점 카테고리 관계
    const existingCategories_1905133643 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1905133643'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1905133643 = new Set(existingCategories_1905133643.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1905133643 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1905133643) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1905133643.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1905133643' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 참나무본가 공덕점 카테고리 관계
    const existingCategories_36925310 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36925310'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36925310 = new Set(existingCategories_36925310.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36925310 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_36925310) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36925310.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36925310' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 금고기 마포본점 카테고리 관계
    const existingCategories_1814374180 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1814374180'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1814374180 = new Set(existingCategories_1814374180.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1814374180 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1814374180) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1814374180.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1814374180' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 복성각 마포본점 카테고리 관계
    const existingCategories_31238198 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31238198'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_31238198 = new Set(existingCategories_31238198.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_31238198 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_31238198) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_31238198.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31238198' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 동아냉면 공덕점 카테고리 관계
    const existingCategories_1537997018 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1537997018'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1537997018 = new Set(existingCategories_1537997018.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1537997018 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1537997018) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1537997018.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1537997018' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 장수갈매기 본점 카테고리 관계
    const existingCategories_11824283 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11824283'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11824283 = new Set(existingCategories_11824283.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11824283 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_11824283) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11824283.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11824283' LIMIT 1)`),
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
