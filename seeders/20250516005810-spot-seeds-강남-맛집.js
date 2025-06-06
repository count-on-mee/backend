'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 맛집
 * 생성일시: 2025-05-15T15:58:18.525Z
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
        name: '들밥차반 신사점',
        address: '서울 강남구 신사동 도산대로 307 지하1층',
        tel: '0507-1441-9072',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5222797 127.0349155)',
        4326
        ),
        naver_spot_id: '1681547627',
        review_count: 265,
        review_score: null,
      },
      {
        name: '육미안 강남점',
        address: '서울 강남구 역삼동 강남대로106길 9 1층',
        tel: '0507-1440-4244',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5029887 127.0263989)',
        4326
        ),
        naver_spot_id: '1645027803',
        review_count: 1,
        review_score: null,
      },
      {
        name: '마초 스테이크',
        address: '서울 강남구 신사동 논현로159길 10 지상1층 102호',
        tel: '0507-1388-1340',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5231164 127.0273583)',
        4326
        ),
        naver_spot_id: '1981347065',
        review_count: 650,
        review_score: null,
      },
      {
        name: '신사화로 신사본점',
        address: '서울 강남구 신사동 강남대로152길 44 지상1층',
        tel: '0507-1374-9166',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5181093 127.0228628)',
        4326
        ),
        naver_spot_id: '1045639997',
        review_count: 1,
        review_score: null,
      },
      {
        name: '82올리언즈 강남점',
        address: '서울 강남구 역삼동 강남대로98길 28 1층',
        tel: '0507-1353-5076',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.500872 127.0287379)',
        4326
        ),
        naver_spot_id: '1481312779',
        review_count: 2,
        review_score: null,
      },
      {
        name: '이치규 강남신논현점',
        address: '서울 강남구 역삼동 봉은사로4길 19 2층',
        tel: '0507-1338-5742',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5035097 127.0266393)',
        4326
        ),
        naver_spot_id: '1751230621',
        review_count: 1,
        review_score: null,
      },
      {
        name: '치보 강남신사점',
        address: '서울 강남구 신사동 강남대로154길 21 1층 101호',
        tel: '0507-1432-1973',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5180183 127.0208478)',
        4326
        ),
        naver_spot_id: '1150149433',
        review_count: 480,
        review_score: null,
      },
      {
        name: '고우가 강남 역삼역점',
        address: '서울 강남구 역삼동 테헤란로 152 지하1층 8호',
        tel: '0507-1403-9554',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5000263 127.0365456)',
        4326
        ),
        naver_spot_id: '1193392480',
        review_count: 200,
        review_score: null,
      },
      {
        name: '돌산등대집',
        address: '서울 강남구 대치동 테헤란로70길 16 1층 돌산등대집',
        tel: '02-558-1116',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5042596 127.0533887)',
        4326
        ),
        naver_spot_id: '1964934333',
        review_count: 406,
        review_score: null,
      },
      {
        name: '꾸아 강남역CGV점',
        address: '서울 강남구 역삼동 강남대로102길 11 2층',
        tel: '0507-1487-6710',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5019226 127.0267526)',
        4326
        ),
        naver_spot_id: '1124418533',
        review_count: 3,
        review_score: null,
      },
      {
        name: '테보',
        address: '서울 강남구 신사동 압구정로4길 13-3 1층',
        tel: '0507-1438-8978',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5219464 127.0205246)',
        4326
        ),
        naver_spot_id: '1932482885',
        review_count: 1,
        review_score: null,
      },
      {
        name: '삼해수산 강남본점',
        address: '서울 강남구 역삼동 강남대로94길 9 1층',
        tel: '0507-1404-9901',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4994289 127.0281405)',
        4326
        ),
        naver_spot_id: '1777288696',
        review_count: 494,
        review_score: null,
      },
      {
        name: '모던샤브하우스 GFC점',
        address: '서울 강남구 역삼동 테헤란로 152 강남파이낸스센터 별관(후문) 1층',
        tel: '02-569-8330',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.499839 127.0370016)',
        4326
        ),
        naver_spot_id: '1917236245',
        review_count: 58,
        review_score: null,
      },
      {
        name: '어반누크 베이커리 카페 신사',
        address: '서울 강남구 신사동 도산대로25길 26 1층, 101호',
        tel: '0507-1448-0856',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5214207 127.0269771)',
        4326
        ),
        naver_spot_id: '1041215062',
        review_count: 203,
        review_score: null,
      },
      {
        name: '퍼스트커피랩 강남점',
        address: '서울 강남구 역삼동 봉은사로6길 39 1층',
        tel: '0507-1315-7680',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5026909 127.0279657)',
        4326
        ),
        naver_spot_id: '1668757640',
        review_count: 1,
        review_score: null,
      },
      {
        name: '오레노이키루미치 압구정본점',
        address: '서울 강남구 신사동 압구정로50길 8 1층',
        tel: '0507-1306-7709',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5278066 127.0380375)',
        4326
        ),
        naver_spot_id: '1138883521',
        review_count: 370,
        review_score: null,
      },
      {
        name: '태양의토마토라멘',
        address: '서울 강남구 역삼동 강남대로106길 7 2층',
        tel: '02-501-0120',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5029758 127.0262365)',
        4326
        ),
        naver_spot_id: '1185221694',
        review_count: 1,
        review_score: null,
      },
      {
        name: '고든램지 스트리트 버거 무역센터점',
        address: '서울 강남구 삼성동 테헤란로 517 현대백화점 무역센터점 B1층',
        tel: '0507-1399-6769',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5087084 127.0602437)',
        4326
        ),
        naver_spot_id: '1111204384',
        review_count: 2,
        review_score: null,
      },
      {
        name: '이치규 본점',
        address: '서울 강남구 대치동 삼성로86길 14 지상2층',
        tel: '0507-1360-5742',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5057025 127.0586754)',
        4326
        ),
        naver_spot_id: '1204687706',
        review_count: 1,
        review_score: null,
      },
      {
        name: '꼬끼오 장작구이',
        address: '서울 강남구 역삼동 강남대로84길 34 1, 2층',
        tel: '0507-1321-9010',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4970832 127.0313145)',
        4326
        ),
        naver_spot_id: '1553521994',
        review_count: 643,
        review_score: null,
      },
      {
        name: '새로도원 팝업스토어',
        address: '서울 강남구 신사동 도산대로51길 44 1-2층',
        tel: '0507-1381-1765',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.525996 127.0384031)',
        4326
        ),
        naver_spot_id: '1770062563',
        review_count: 773,
        review_score: null,
      },
      {
        name: '우곱집 선릉점',
        address: '서울 강남구 대치동 삼성로81길 36 1층',
        tel: '070-7585-8903',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5039285 127.0546279)',
        4326
        ),
        naver_spot_id: '1051362303',
        review_count: 307,
        review_score: null,
      },
      {
        name: '신정',
        address: '서울 강남구 세곡동 헌릉로569길 39-3 주차는 발렛 주차',
        tel: '02-554-1033',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4664141 127.0986084)',
        4326
        ),
        naver_spot_id: '11725305',
        review_count: 527,
        review_score: 4.01,
      },
      {
        name: '오레노라멘 강남점',
        address: '서울 강남구 역삼동 테헤란로1길 28-9 2F',
        tel: '0507-1377-3539',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5004882 127.0280926)',
        4326
        ),
        naver_spot_id: '1621911428',
        review_count: 3,
        review_score: 4.71,
      },
      {
        name: '쿄코코 신논현점',
        address: '서울 강남구 역삼동 강남대로106길 23 지하1층',
        tel: '0507-1474-2254',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.503269 127.0274027)',
        4326
        ),
        naver_spot_id: '1581701475',
        review_count: 2,
        review_score: null,
      },
      {
        name: '초원 도산대로점',
        address: '서울 강남구 논현동 도산대로 232 A동 1층 초원 (큰도로변)',
        tel: '0507-1362-5949',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5208348 127.0326541)',
        4326
        ),
        naver_spot_id: '1264462595',
        review_count: 9,
        review_score: null,
      },
      {
        name: '다몽집 신논현본점',
        address: '서울 강남구 역삼동 강남대로100길 13 지하1층/2층 다몽집',
        tel: '0507-1468-4245',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5017942 127.0271567)',
        4326
        ),
        naver_spot_id: '1028354634',
        review_count: 3,
        review_score: 4.68,
      },
      {
        name: '단성무이 강남점',
        address: '서울 강남구 역삼동 강남대로96길 16 1층',
        tel: '0507-1424-4655',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4998707 127.0282604)',
        4326
        ),
        naver_spot_id: '1243453068',
        review_count: 262,
        review_score: null,
      },
      {
        name: '셀렉티드닉스',
        address: '서울 강남구 역삼동 테헤란로4길 37 1층',
        tel: '0507-1393-5905',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4961927 127.030907)',
        4326
        ),
        naver_spot_id: '1776798877',
        review_count: 3,
        review_score: null,
      },
      {
        name: '한성칼국수 논현본점',
        address: '서울 강남구 논현동 언주로148길 14 청호상가빌딩 가동 2층',
        tel: '02-544-0540',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.520425 127.0355282)',
        4326
        ),
        naver_spot_id: '12915620',
        review_count: 976,
        review_score: 4.14,
      },
      {
        name: '미림양장 압구정점',
        address: '서울 강남구 신사동 언주로168길 40 지하1층',
        tel: '0507-1331-8986',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.525739 127.0367813)',
        4326
        ),
        naver_spot_id: '1733733737',
        review_count: 1,
        review_score: null,
      },
      {
        name: '스타벅스 리저브도산점',
        address: '서울 강남구 신사동 선릉로155길 23 (신사동)',
        tel: '1522-3232',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5255931 127.0377164)',
        4326
        ),
        naver_spot_id: '1916229887',
        review_count: 14,
        review_score: null,
      },
      {
        name: '동명닭집 논현직영점',
        address: '서울 강남구 논현동 강남대로116길 8 1층, 2층',
        tel: '0507-1470-0382',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5061152 127.0247474)',
        4326
        ),
        naver_spot_id: '1170792433',
        review_count: 737,
        review_score: null,
      },
      {
        name: '이웃집통통이',
        address: '서울 강남구 신사동 선릉로161길 19 1층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5273706 127.0388289)',
        4326
        ),
        naver_spot_id: '1850375355',
        review_count: 2,
        review_score: 4.59,
      },
      {
        name: '행운간',
        address: '서울 강남구 도곡동 양재천로 189 1층',
        tel: '0507-1485-7939',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4825591 127.0463116)',
        4326
        ),
        naver_spot_id: '1452822415',
        review_count: 286,
        review_score: null,
      },
      {
        name: '솥내음 스타필드 코엑스몰점',
        address: '서울 강남구 삼성동 영동대로 513 지하1층 O-107호 라운지',
        tel: '0507-1434-3066',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5137711 127.0589214)',
        4326
        ),
        naver_spot_id: '1066276781',
        review_count: 5,
        review_score: null,
      },
      {
        name: '갓잇 압구정 도산공원점',
        address: '서울 강남구 신사동 언주로164길 24 아크로스빌딩 지상1층 GODEAT',
        tel: '0507-1339-9451',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5253822 127.0355325)',
        4326
        ),
        naver_spot_id: '1135036261',
        review_count: 3,
        review_score: 4.62,
      },
      {
        name: '논두렁오리주물럭 선릉직영점',
        address: '서울 강남구 대치동 삼성로81길 44 1층',
        tel: '0507-1460-7831',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5037412 127.054115)',
        4326
        ),
        naver_spot_id: '1089192231',
        review_count: 918,
        review_score: null,
      },
      {
        name: '양재족발 참족',
        address: '서울 강남구 도곡동 도곡로2길 14 1층',
        tel: '0507-1407-5772',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4887831 127.0331974)',
        4326
        ),
        naver_spot_id: '38226320',
        review_count: 4,
        review_score: 4.78,
      },
      {
        name: '카페 공명 신사 가로수길점',
        address: '서울 강남구 신사동 도산대로15길 32-4 지하1층, 1층, 2층, 3층',
        tel: '0507-1490-7709',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5206435 127.0239065)',
        4326
        ),
        naver_spot_id: '1020170491',
        review_count: 555,
        review_score: null,
      },
      {
        name: '돼봉삼겹살 신논현점',
        address: '서울 강남구 역삼동 봉은사로2길 21 1층',
        tel: '0507-1486-9005',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5032866 127.026076)',
        4326
        ),
        naver_spot_id: '1218830542',
        review_count: 1,
        review_score: null,
      },
      {
        name: '수묵',
        address: '서울 강남구 대치동 테헤란로70길 13 1층',
        tel: '0507-1422-1614',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5048287 127.053537)',
        4326
        ),
        naver_spot_id: '1355794902',
        review_count: 650,
        review_score: null,
      },
      {
        name: '동어동락 삼성2호점',
        address: '서울 강남구 삼성동 삼성로92길 27 1층 동어동락 삼성2호점',
        tel: '0507-1350-4938',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.50838 127.0585572)',
        4326
        ),
        naver_spot_id: '1697208386',
        review_count: 375,
        review_score: null,
      },
      {
        name: '스시이찌 선릉점',
        address: '서울 강남구 삼성동 테헤란로63길 9 2층 203호',
        tel: '0507-1402-5647',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5057545 127.0500421)',
        4326
        ),
        naver_spot_id: '1526819157',
        review_count: 188,
        review_score: null,
      },
      {
        name: '메르밀진미집 논현직영점',
        address: '서울 강남구 논현동 강남대로 506 1층 101호, 102호',
        tel: '0507-1422-1975',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.507534 127.0234031)',
        4326
        ),
        naver_spot_id: '1340394906',
        review_count: 1,
        review_score: null,
      },
      {
        name: '우슴 강남논현 본점',
        address: '서울 강남구 논현동 강남대로122길 15 상당빌딩 지상 1층 101호',
        tel: '0507-1381-1515',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5081567 127.0242684)',
        4326
        ),
        naver_spot_id: '1136987923',
        review_count: 1,
        review_score: null,
      },
      {
        name: '금돈옥 청담점',
        address: '서울 강남구 청담동 삼성로133길 14 101호',
        tel: '0507-1488-9095',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5194224 127.0483836)',
        4326
        ),
        naver_spot_id: '1834308627',
        review_count: 752,
        review_score: null,
      },
      {
        name: '주신당 강남',
        address: '서울 강남구 역삼동 강남대로96길 9 B1',
        tel: '0507-1349-4225',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4999163 127.0276743)',
        4326
        ),
        naver_spot_id: '1916994932',
        review_count: 2,
        review_score: null,
      },
      {
        name: '조선펍차 신사본점',
        address: '서울 강남구 신사동 압구정로2길 46 1층 13호 조선펍차',
        tel: '0507-1337-8673',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5187695 127.0208804)',
        4326
        ),
        naver_spot_id: '1685786797',
        review_count: 1,
        review_score: null,
      },
      {
        name: '멜팅샵 치즈룸 파르나스몰',
        address: '서울 강남구 삼성동 테헤란로 521 파르나스몰 지하1층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5092185 127.0616778)',
        4326
        ),
        naver_spot_id: '1036294902',
        review_count: 3,
        review_score: 5,
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

    // 들밥차반 신사점 이미지
    const existingImages_1681547627 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1681547627'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1681547627[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1681547627' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250421_202/1745225187637EDtSD_JPEG/00_%B8%C7%BE%D5%C0%E5.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1681547627' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250422_16/1745311023219CMhv9_JPEG/w.jpg',
        }
      ]);
    }

    // 육미안 강남점 이미지
    const existingImages_1645027803 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1645027803'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1645027803[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1645027803' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230922_56/1695394328811AYVvi_JPEG/315940580_596721502208189_7622762615213332008_n.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1645027803' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250210_250/1739114611926xBtpA_JPEG/%B0%ED%BF%C0%B1%DE_%BF%EC%B5%BF_%282%29.jpg',
        }
      ]);
    }

    // 마초 스테이크 이미지
    const existingImages_1981347065 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1981347065'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1981347065[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1981347065' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250406_269/17439139026117km4H_JPEG/KakaoTalk_20250406_130907464.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1981347065' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250424_9/1745470698772nNRnY_JPEG/%B8%B6%C3%CA%C3%DF%BC%BA%C8%C6%BD%E6%B3%D7%C0%CF.jpg',
        }
      ]);
    }

    // 신사화로 신사본점 이미지
    const existingImages_1045639997 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1045639997'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1045639997[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1045639997' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241210_209/1733804475325Qdck0_JPEG/KakaoTalk_20241106_130530209.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1045639997' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241210_263/1733804461683qg1j5_JPEG/KakaoTalk_20241106_130530209_06.jpg',
        }
      ]);
    }

    // 82올리언즈 강남점 이미지
    const existingImages_1481312779 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1481312779'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1481312779[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1481312779' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250205_202/17387294131055X4D4_JPEG/0344_2k.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1481312779' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240420_149/1713603664913mSCvW_JPEG/24.04.05_82Orleans_11997.jpg',
        }
      ]);
    }

    // 이치규 강남신논현점 이미지
    const existingImages_1751230621 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1751230621'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1751230621[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1751230621' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250205_98/1738731339629OvvIz_JPEG/KakaoTalk_20240930_155551676_25.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1751230621' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250205_238/1738731338976N6FUO_JPEG/KakaoTalk_20240930_155551676_15.jpg',
        }
      ]);
    }

    // 치보 강남신사점 이미지
    const existingImages_1150149433 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1150149433'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1150149433[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1150149433' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250403_14/1743639715221OSdx6_PNG/20250403_091419.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1150149433' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250407_103/1744025127644SaMIN_PNG/20250407_202330.png',
        }
      ]);
    }

    // 고우가 강남 역삼역점 이미지
    const existingImages_1193392480 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1193392480'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1193392480[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1193392480' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250401_220/1743479317520IBCkA_JPEG/%BC%EE%C0%D7%C7%D4.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1193392480' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20250423_294/1745411765352VFEoz_JPEG/%BF%AA%BB%EF%BA%ED%B7%E7%B8%AE%BA%BB2.jpg',
        }
      ]);
    }

    // 돌산등대집 이미지
    const existingImages_1964934333 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1964934333'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1964934333[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1964934333' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250507_199/1746611538827RaOoE_JPEG/%B0%AB%B1%E8%C4%A1%B5%EE%B0%A5%BA%F1%C2%F23.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1964934333' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250514_141/1747193020409e84Fn_JPEG/%BC%AD%BF%EF%B0%AD%B3%B2%BE%DF%C0%E5%B8%C0%C1%FD3.jpg',
        }
      ]);
    }

    // 꾸아 강남역CGV점 이미지
    const existingImages_1124418533 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1124418533'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1124418533[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1124418533' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250511_22/1746974164122AQWuj_JPEG/KakaoTalk_20240811_234607623_02.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1124418533' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240913_247/1726224253587j1coh_JPEG/KakaoTalk_20240913_194257099.jpg',
        }
      ]);
    }

    // 테보 이미지
    const existingImages_1932482885 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1932482885'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1932482885[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1932482885' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240710_158/1720600320597jOGxu_JPEG/934F6650-437F-42A5-87FB-C81169F6FCFB.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1932482885' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240710_1/17206004446385C0gh_JPEG/IMG_9885.jpeg',
        }
      ]);
    }

    // 삼해수산 강남본점 이미지
    const existingImages_1777288696 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1777288696'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1777288696[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1777288696' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241102_38/1730553154996KxFG9_JPEG/KakaoTalk_20241102_210523167_16.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1777288696' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241102_188/1730553154475bD92I_JPEG/KakaoTalk_20241102_210523167_09.jpg',
        }
      ]);
    }

    // 모던샤브하우스 GFC점 이미지
    const existingImages_1917236245 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1917236245'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1917236245[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1917236245' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250310_31/1741589337834sYegl_JPEG/20-08-140134__small.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1917236245' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250310_12/1741589346498SeQv8_JPEG/20-11-060248%28small%29.jpg',
        }
      ]);
    }

    // 어반누크 베이커리 카페 신사 이미지
    const existingImages_1041215062 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1041215062'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1041215062[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1041215062' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250405_247/1743847222587TnTc0_JPEG/IMG_4494.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1041215062' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250406_45/17439425208576fdyC_JPEG/KakaoTalk_Photo_2025-03-26-18-11-57_007.jpeg',
        }
      ]);
    }

    // 퍼스트커피랩 강남점 이미지
    const existingImages_1668757640 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1668757640'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1668757640[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1668757640' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240704_147/1720070043214CucXu_JPEG/DSC07766.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1668757640' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230302_128/16777416791781iqm4_JPEG/21CAF0A5-C049-446D-9A0F-427A20A51AC7.jpeg',
        }
      ]);
    }

    // 오레노이키루미치 압구정본점 이미지
    const existingImages_1138883521 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1138883521'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1138883521[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1138883521' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250107_13/1736232289303DncY9_JPEG/KakaoTalk_20250107_154437967.jpg',
        }
      ]);
    }

    // 태양의토마토라멘 이미지
    const existingImages_1185221694 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1185221694'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1185221694[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1185221694' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250409_270/1744163183179Vi8qc_JPEG/0_%F3%A2%F9%EA2880-2304%28%C5%A9%B1%E2_%C1%B6%C0%FD%29.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1185221694' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250409_182/1744163182552seY7w_JPEG/KakaoTalk_20250408_153609600_01.jpg',
        }
      ]);
    }

    // 고든램지 스트리트 버거 무역센터점 이미지
    const existingImages_1111204384 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1111204384'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1111204384[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1111204384' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250113_267/1736743384379QmK6g_JPEG/ogr.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1111204384' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230330_118/1680157497910y69DI_JPEG/KakaoTalk_20230330_095539026.jpg',
        }
      ]);
    }

    // 이치규 본점 이미지
    const existingImages_1204687706 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1204687706'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1204687706[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1204687706' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250331_164/1743395243012mf7FG_JPEG/IMG_9622.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1204687706' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250331_190/17433952429981Dov5_JPEG/IMG_0084.jpeg',
        }
      ]);
    }

    // 꼬끼오 장작구이 이미지
    const existingImages_1553521994 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1553521994'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1553521994[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1553521994' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240426_242/1714124019043NbMkY_JPEG/IMG_7198.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1553521994' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240426_4/1714124018584ABBYY_JPEG/IMG_7197.jpeg',
        }
      ]);
    }

    // 새로도원 팝업스토어 이미지
    const existingImages_1770062563 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1770062563'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1770062563[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1770062563' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250331_231/1743389842066rr70u_PNG/1-3.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1770062563' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250415_147/17446856931360d6Q2_JPEG/CR5_1128.jpg',
        }
      ]);
    }

    // 우곱집 선릉점 이미지
    const existingImages_1051362303 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1051362303'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1051362303[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1051362303' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250311_30/1741670856269h51nk_JPEG/%B4%D9%BF%EE%B7%CE%B5%E5.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1051362303' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250307_56/17413488604703ytcv_JPEG/DSC08541.jpg',
        }
      ]);
    }

    // 신정 이미지
    const existingImages_11725305 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11725305'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11725305[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11725305' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250514_174/1747212569206QCjly_JPEG/1.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11725305' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250513_198/1747062426571n6FHm_JPEG/DSC08148.jpg',
        }
      ]);
    }

    // 오레노라멘 강남점 이미지
    const existingImages_1621911428 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1621911428'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1621911428[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1621911428' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230519_196/16844772544736p1JM_JPEG/2303201002220C00s.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1621911428' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240530_25/1717046087518cU4ox_PNG/%B9%CC%BD%A6%B8%B06%B3%E2%C0%CC%B9%CC%C1%F6.png',
        }
      ]);
    }

    // 쿄코코 신논현점 이미지
    const existingImages_1581701475 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1581701475'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1581701475[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1581701475' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240826_1/1724673794062acKDf_JPEG/search.pstatic.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1581701475' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250424_168/1745504530966hTNsA_JPEG/KakaoTalk_20250424_141442044_01.jpg',
        }
      ]);
    }

    // 초원 도산대로점 이미지
    const existingImages_1264462595 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1264462595'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1264462595[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1264462595' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250506_159/1746541229221Rn1do_JPEG/KakaoTalk_20250429_121712724_18.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1264462595' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250506_296/1746541280144Nk3PA_JPEG/KakaoTalk_20250429_121712724_08.jpg',
        }
      ]);
    }

    // 다몽집 신논현본점 이미지
    const existingImages_1028354634 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1028354634'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1028354634[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1028354634' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250205_294/1738733013695kS1eD_PNG/KakaoTalk_20250204_142820908.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1028354634' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250223_98/1740278932354u4vdJ_JPEG/1000356569.jpg',
        }
      ]);
    }

    // 단성무이 강남점 이미지
    const existingImages_1243453068 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1243453068'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1243453068[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1243453068' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241108_105/1731046881007H14ew_JPEG/5.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1243453068' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241108_224/1731046880548aT94d_JPEG/7%282%29.JPG',
        }
      ]);
    }

    // 셀렉티드닉스 이미지
    const existingImages_1776798877 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1776798877'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1776798877[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1776798877' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240906_186/1725619575624GCybh_JPEG/KakaoTalk_20240810_142920660.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1776798877' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240906_102/1725619574933XIpzz_JPEG/KakaoTalk_20240405_161404318_03.jpg',
        }
      ]);
    }

    // 한성칼국수 논현본점 이미지
    const existingImages_12915620 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12915620'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12915620[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12915620' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20211214_109/1639461380764qs1MO_JPEG/KakaoTalk_20211214_144622075.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12915620' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20211214_105/16394613805825BmhD_JPEG/KakaoTalk_20211214_145419844.jpg',
        }
      ]);
    }

    // 미림양장 압구정점 이미지
    const existingImages_1733733737 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1733733737'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1733733737[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1733733737' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241229_97/17354494636851JRDz_JPEG/KakaoTalk_Photo_2024-12-29-14-17-12_022.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1733733737' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241229_199/1735449464540HcoYA_JPEG/KakaoTalk_Photo_2024-12-29-14-17-07_004.jpeg',
        }
      ]);
    }

    // 동명닭집 논현직영점 이미지
    const existingImages_1170792433 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1170792433'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1170792433[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1170792433' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241105_155/1730744588504RECUE_JPEG/IMG_5513.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1170792433' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231028_138/1698465433594vC7BJ_JPEG/IMG_9910.jpeg',
        }
      ]);
    }

    // 이웃집통통이 이미지
    const existingImages_1850375355 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1850375355'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1850375355[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1850375355' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250401_118/1743497751933IHiod_PNG/%B4%EB%C1%F6_17_6.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1850375355' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250317_107/1742196409941vM0mE_JPEG/%C5%EB%C5%EB%C0%CC%B4%C2_%BF%DC%B0%E8%C0%CE.jpg',
        }
      ]);
    }

    // 행운간 이미지
    const existingImages_1452822415 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1452822415'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1452822415[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1452822415' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250512_20/1747047549833CKjMo_JPEG/1000032227.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1452822415' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250304_229/1741088303306vEkMT_JPEG/1000028424.jpg',
        }
      ]);
    }

    // 솥내음 스타필드 코엑스몰점 이미지
    const existingImages_1066276781 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1066276781'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1066276781[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1066276781' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241119_154/1732017976177Al1KO_JPEG/078A6103.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1066276781' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250305_225/1741167083478xu0DS_JPEG/13.jpg',
        }
      ]);
    }

    // 갓잇 압구정 도산공원점 이미지
    const existingImages_1135036261 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1135036261'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1135036261[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1135036261' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250310_291/1741597488987UNlLD_JPEG/%B0%AB%C0%D5_%B8%DE%B4%BA%C6%C7.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1135036261' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240220_163/1708423177439pEjdS_JPEG/11.jpg',
        }
      ]);
    }

    // 논두렁오리주물럭 선릉직영점 이미지
    const existingImages_1089192231 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1089192231'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1089192231[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1089192231' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250423_190/1745407588615qFe47_JPEG/DSC04205.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1089192231' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250423_65/1745407700731hL2mV_JPEG/DSC04202.jpg',
        }
      ]);
    }

    // 양재족발 참족 이미지
    const existingImages_38226320 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38226320'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38226320[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38226320' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231111_249/1699690012796elwJ5_JPEG/scaled_20231110_181149-02.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38226320' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231111_246/1699689955607a2BY3_JPEG/scaled_20231103_181757-01.jpg',
        }
      ]);
    }

    // 카페 공명 신사 가로수길점 이미지
    const existingImages_1020170491 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1020170491'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1020170491[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1020170491' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241028_113/1730105026006B9YRI_JPEG/%B0%F8%B8%ED_%B0%A1%B7%CE%BC%F6%B1%E6%C1%A1_023.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1020170491' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250422_35/1745311189370LMCPT_JPEG/KakaoTalk_20230509_143322293.jpg',
        }
      ]);
    }

    // 돼봉삼겹살 신논현점 이미지
    const existingImages_1218830542 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1218830542'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1218830542[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1218830542' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241104_200/1730716017999znquI_JPEG/%B5%C5%BA%C0_%B8%DE%C0%CE1.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1218830542' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241104_292/1730716014760GAHOQ_JPEG/%B5%C5%BA%C0_%B8%DE%C0%CE2.jpeg',
        }
      ]);
    }

    // 수묵 이미지
    const existingImages_1355794902 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1355794902'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1355794902[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1355794902' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250423_269/1745396917317F8cXq_PNG/2.PNG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1355794902' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250423_219/1745396917288z9LaU_PNG/1.PNG',
        }
      ]);
    }

    // 동어동락 삼성2호점 이미지
    const existingImages_1697208386 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1697208386'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1697208386[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1697208386' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250312_247/1741721371469NsxKv_JPEG/IMG_7776.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1697208386' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250316_176/1742058509075u8lUQ_JPEG/%B5%BF%BE%EE%B5%BF%B6%F4-77683-99.jpg',
        }
      ]);
    }

    // 스시이찌 선릉점 이미지
    const existingImages_1526819157 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1526819157'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1526819157[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1526819157' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250228_245/1740701630506gPkpW_JPEG/IMG_6838.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1526819157' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20250405_190/1743859547601bHcqN_JPEG/image.jpg',
        }
      ]);
    }

    // 메르밀진미집 논현직영점 이미지
    const existingImages_1340394906 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1340394906'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1340394906[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1340394906' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250430_50/1745978218480tdgQA_JPEG/%BF%F9%B0%A3%B8%DE%B8%A3%B9%D0_5%BF%F9%C8%A3_%C8%E6%C0%D3%C0%DA%C4%E1%B1%B9%BC%F6_%C0%CE%BD%BA%C5%B8%B1%D7%B7%A5%2C_%C7%C3%B7%B9%C0%CC%BD%BA%BF%EB.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1340394906' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250404_212/1743752780662RRNbA_PNG/%B4%D9%BF%EE%B7%CE%B5%E5.png',
        }
      ]);
    }

    // 우슴 강남논현 본점 이미지
    const existingImages_1136987923 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1136987923'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1136987923[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1136987923' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240408_27/17125618074759a9By_JPEG/%BF%EC%BD%BF_04.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1136987923' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240408_164/1712561808410lKf8o_JPEG/%BF%EC%BD%BF_35.jpg',
        }
      ]);
    }

    // 금돈옥 청담점 이미지
    const existingImages_1834308627 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1834308627'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1834308627[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1834308627' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240517_25/17159169579683bIlY_JPEG/%B8%C5%C0%E5%BF%DC%BA%CE%B0%A1%B3%AD.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1834308627' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240517_259/1715916958002GGsTQ_JPEG/%B8%C5%C0%E5%C3%E2%C0%D4%B1%B8.jpg',
        }
      ]);
    }

    // 주신당 강남 이미지
    const existingImages_1916994932 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1916994932'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1916994932[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1916994932' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240808_37/1723083601139ynTE4_JPEG/%C3%D6%C1%BE%BA%BB.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1916994932' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240808_76/1723083562174SGxWA_JPEG/KakaoTalk_20240807_111004040_03.jpg',
        }
      ]);
    }

    // 조선펍차 신사본점 이미지
    const existingImages_1685786797 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1685786797'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1685786797[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1685786797' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240705_228/1720147290133EJCy2_JPEG/DSC_9556.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1685786797' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231026_278/1698324726707eCmAf_JPEG/IMG_5598.JPG',
        }
      ]);
    }

    // 멜팅샵 치즈룸 파르나스몰 이미지
    const existingImages_1036294902 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1036294902'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1036294902[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1036294902' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231025_242/1698213585327PKc8e_JPEG/%C6%C42.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1036294902' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231025_278/1698213585980YOnpI_JPEG/%B1%D7%B8%B26.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 들밥차반 신사점 카테고리 관계
    const existingCategories_1681547627 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1681547627'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1681547627 = new Set(existingCategories_1681547627.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1681547627 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1681547627) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1681547627.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1681547627' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 육미안 강남점 카테고리 관계
    const existingCategories_1645027803 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1645027803'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1645027803 = new Set(existingCategories_1645027803.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1645027803 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1645027803) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1645027803.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1645027803' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마초 스테이크 카테고리 관계
    const existingCategories_1981347065 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1981347065'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1981347065 = new Set(existingCategories_1981347065.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1981347065 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1981347065) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1981347065.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1981347065' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신사화로 신사본점 카테고리 관계
    const existingCategories_1045639997 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1045639997'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1045639997 = new Set(existingCategories_1045639997.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1045639997 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1045639997) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1045639997.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1045639997' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 82올리언즈 강남점 카테고리 관계
    const existingCategories_1481312779 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1481312779'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1481312779 = new Set(existingCategories_1481312779.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1481312779 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1481312779) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1481312779.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1481312779' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이치규 강남신논현점 카테고리 관계
    const existingCategories_1751230621 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1751230621'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1751230621 = new Set(existingCategories_1751230621.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1751230621 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1751230621) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1751230621.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1751230621' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 치보 강남신사점 카테고리 관계
    const existingCategories_1150149433 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1150149433'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1150149433 = new Set(existingCategories_1150149433.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1150149433 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1150149433) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1150149433.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1150149433' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 고우가 강남 역삼역점 카테고리 관계
    const existingCategories_1193392480 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1193392480'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1193392480 = new Set(existingCategories_1193392480.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1193392480 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1193392480) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1193392480.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1193392480' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 돌산등대집 카테고리 관계
    const existingCategories_1964934333 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1964934333'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1964934333 = new Set(existingCategories_1964934333.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1964934333 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1964934333) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1964934333.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1964934333' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 꾸아 강남역CGV점 카테고리 관계
    const existingCategories_1124418533 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1124418533'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1124418533 = new Set(existingCategories_1124418533.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1124418533 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1124418533) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1124418533.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1124418533' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 테보 카테고리 관계
    const existingCategories_1932482885 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1932482885'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1932482885 = new Set(existingCategories_1932482885.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1932482885 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1932482885) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1932482885.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1932482885' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 삼해수산 강남본점 카테고리 관계
    const existingCategories_1777288696 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1777288696'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1777288696 = new Set(existingCategories_1777288696.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1777288696 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1777288696) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1777288696.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1777288696' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 모던샤브하우스 GFC점 카테고리 관계
    const existingCategories_1917236245 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1917236245'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1917236245 = new Set(existingCategories_1917236245.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1917236245 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1917236245) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1917236245.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1917236245' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 어반누크 베이커리 카페 신사 카테고리 관계
    const existingCategories_1041215062 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1041215062'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1041215062 = new Set(existingCategories_1041215062.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1041215062 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1041215062) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1041215062.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1041215062' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 퍼스트커피랩 강남점 카테고리 관계
    const existingCategories_1668757640 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1668757640'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1668757640 = new Set(existingCategories_1668757640.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1668757640 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1668757640) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1668757640.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1668757640' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오레노이키루미치 압구정본점 카테고리 관계
    const existingCategories_1138883521 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1138883521'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1138883521 = new Set(existingCategories_1138883521.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1138883521 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1138883521) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1138883521.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1138883521' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 태양의토마토라멘 카테고리 관계
    const existingCategories_1185221694 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1185221694'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1185221694 = new Set(existingCategories_1185221694.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1185221694 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1185221694) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1185221694.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1185221694' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 고든램지 스트리트 버거 무역센터점 카테고리 관계
    const existingCategories_1111204384 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1111204384'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1111204384 = new Set(existingCategories_1111204384.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1111204384 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1111204384) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1111204384.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1111204384' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이치규 본점 카테고리 관계
    const existingCategories_1204687706 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1204687706'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1204687706 = new Set(existingCategories_1204687706.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1204687706 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1204687706) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1204687706.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1204687706' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 꼬끼오 장작구이 카테고리 관계
    const existingCategories_1553521994 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1553521994'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1553521994 = new Set(existingCategories_1553521994.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1553521994 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1553521994) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1553521994.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1553521994' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 새로도원 팝업스토어 카테고리 관계
    const existingCategories_1770062563 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1770062563'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1770062563 = new Set(existingCategories_1770062563.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1770062563 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1770062563) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1770062563.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1770062563' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 우곱집 선릉점 카테고리 관계
    const existingCategories_1051362303 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1051362303'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1051362303 = new Set(existingCategories_1051362303.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1051362303 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1051362303) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1051362303.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1051362303' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신정 카테고리 관계
    const existingCategories_11725305 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11725305'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11725305 = new Set(existingCategories_11725305.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11725305 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_11725305) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11725305.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11725305' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오레노라멘 강남점 카테고리 관계
    const existingCategories_1621911428 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1621911428'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1621911428 = new Set(existingCategories_1621911428.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1621911428 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1621911428) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1621911428.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1621911428' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 쿄코코 신논현점 카테고리 관계
    const existingCategories_1581701475 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1581701475'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1581701475 = new Set(existingCategories_1581701475.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1581701475 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1581701475) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1581701475.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1581701475' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 초원 도산대로점 카테고리 관계
    const existingCategories_1264462595 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1264462595'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1264462595 = new Set(existingCategories_1264462595.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1264462595 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1264462595) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1264462595.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1264462595' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 다몽집 신논현본점 카테고리 관계
    const existingCategories_1028354634 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1028354634'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1028354634 = new Set(existingCategories_1028354634.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1028354634 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1028354634) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1028354634.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1028354634' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 단성무이 강남점 카테고리 관계
    const existingCategories_1243453068 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1243453068'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1243453068 = new Set(existingCategories_1243453068.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1243453068 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1243453068) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1243453068.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1243453068' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 셀렉티드닉스 카테고리 관계
    const existingCategories_1776798877 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1776798877'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1776798877 = new Set(existingCategories_1776798877.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1776798877 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1776798877) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1776798877.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1776798877' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한성칼국수 논현본점 카테고리 관계
    const existingCategories_12915620 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12915620'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12915620 = new Set(existingCategories_12915620.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12915620 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_12915620) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12915620.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12915620' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 미림양장 압구정점 카테고리 관계
    const existingCategories_1733733737 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1733733737'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1733733737 = new Set(existingCategories_1733733737.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1733733737 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1733733737) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1733733737.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1733733737' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스타벅스 리저브도산점 카테고리 관계
    const existingCategories_1916229887 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1916229887'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1916229887 = new Set(existingCategories_1916229887.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1916229887 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1916229887) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1916229887.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1916229887' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 동명닭집 논현직영점 카테고리 관계
    const existingCategories_1170792433 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1170792433'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1170792433 = new Set(existingCategories_1170792433.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1170792433 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1170792433) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1170792433.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1170792433' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이웃집통통이 카테고리 관계
    const existingCategories_1850375355 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1850375355'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1850375355 = new Set(existingCategories_1850375355.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1850375355 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1850375355) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1850375355.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1850375355' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 행운간 카테고리 관계
    const existingCategories_1452822415 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1452822415'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1452822415 = new Set(existingCategories_1452822415.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1452822415 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1452822415) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1452822415.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1452822415' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 솥내음 스타필드 코엑스몰점 카테고리 관계
    const existingCategories_1066276781 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1066276781'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1066276781 = new Set(existingCategories_1066276781.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1066276781 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1066276781) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1066276781.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1066276781' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 갓잇 압구정 도산공원점 카테고리 관계
    const existingCategories_1135036261 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1135036261'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1135036261 = new Set(existingCategories_1135036261.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1135036261 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1135036261) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1135036261.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1135036261' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 논두렁오리주물럭 선릉직영점 카테고리 관계
    const existingCategories_1089192231 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1089192231'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1089192231 = new Set(existingCategories_1089192231.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1089192231 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1089192231) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1089192231.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1089192231' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 양재족발 참족 카테고리 관계
    const existingCategories_38226320 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38226320'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38226320 = new Set(existingCategories_38226320.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38226320 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_38226320) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38226320.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38226320' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 카페 공명 신사 가로수길점 카테고리 관계
    const existingCategories_1020170491 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1020170491'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1020170491 = new Set(existingCategories_1020170491.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1020170491 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1020170491) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1020170491.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1020170491' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 돼봉삼겹살 신논현점 카테고리 관계
    const existingCategories_1218830542 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1218830542'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1218830542 = new Set(existingCategories_1218830542.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1218830542 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1218830542) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1218830542.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1218830542' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 수묵 카테고리 관계
    const existingCategories_1355794902 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1355794902'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1355794902 = new Set(existingCategories_1355794902.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1355794902 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1355794902) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1355794902.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1355794902' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 동어동락 삼성2호점 카테고리 관계
    const existingCategories_1697208386 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1697208386'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1697208386 = new Set(existingCategories_1697208386.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1697208386 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1697208386) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1697208386.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1697208386' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스시이찌 선릉점 카테고리 관계
    const existingCategories_1526819157 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1526819157'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1526819157 = new Set(existingCategories_1526819157.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1526819157 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1526819157) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1526819157.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1526819157' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 메르밀진미집 논현직영점 카테고리 관계
    const existingCategories_1340394906 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1340394906'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1340394906 = new Set(existingCategories_1340394906.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1340394906 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1340394906) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1340394906.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1340394906' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 우슴 강남논현 본점 카테고리 관계
    const existingCategories_1136987923 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1136987923'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1136987923 = new Set(existingCategories_1136987923.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1136987923 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1136987923) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1136987923.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1136987923' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 금돈옥 청담점 카테고리 관계
    const existingCategories_1834308627 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1834308627'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1834308627 = new Set(existingCategories_1834308627.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1834308627 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1834308627) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1834308627.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1834308627' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 주신당 강남 카테고리 관계
    const existingCategories_1916994932 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1916994932'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1916994932 = new Set(existingCategories_1916994932.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1916994932 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1916994932) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1916994932.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1916994932' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 조선펍차 신사본점 카테고리 관계
    const existingCategories_1685786797 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1685786797'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1685786797 = new Set(existingCategories_1685786797.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1685786797 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1685786797) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1685786797.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1685786797' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 멜팅샵 치즈룸 파르나스몰 카테고리 관계
    const existingCategories_1036294902 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1036294902'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1036294902 = new Set(existingCategories_1036294902.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1036294902 = [...new Set([
      '식당'
    ])];

    for (const category of uniqueCategories_1036294902) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1036294902.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1036294902' LIMIT 1)`),
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
