'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 숙소
 * 생성일시: 2025-05-08T14:28:09.337Z
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
        name: '그랜드 인터컨티넨탈 서울 파르나스',
        address: '서울 강남구 삼성동 테헤란로 521 그랜드 인터컨티넨탈 서울 파르나스',
        tel: '02-555-5656',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5095449 127.0608688)',
        4326
        ),
        naver_spot_id: '11583199',
        review_count: 3,
        review_score: 4.46,
      },
      {
        name: '노보텔 앰배서더 서울 강남',
        address: '서울 강남구 역삼동 봉은사로 130',
        tel: '02-567-1101',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.50539 127.0290022)',
        4326
        ),
        naver_spot_id: '11559924',
        review_count: 868,
        review_score: 4.45,
      },
      {
        name: '조선 팰리스 서울 강남',
        address: '서울 강남구 역삼동 테헤란로 231 센터필드타워 웨스트동',
        tel: '02-727-7200',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5029272 127.0411011)',
        4326
        ),
        naver_spot_id: '1384506674',
        review_count: 718,
        review_score: 4.52,
      },
      {
        name: '도미인 서울 강남',
        address: '서울 강남구 역삼동 봉은사로 134',
        tel: '02-548-5489',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5056299 127.0294946)',
        4326
        ),
        naver_spot_id: '578893981',
        review_count: 389,
        review_score: 4.68,
      },
      {
        name: '그랜드 머큐어 임피리얼 팰리스 서울 강남',
        address: '서울 강남구 논현동 언주로 640',
        tel: '02-3440-8000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5138761 127.0358099)',
        4326
        ),
        naver_spot_id: '36170631',
        review_count: 391,
        review_score: 4.3,
      },
      {
        name: '신라스테이 삼성',
        address: '서울 강남구 삼성동 영동대로 506',
        tel: '02-2175-9000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5099463 127.0631739)',
        4326
        ),
        naver_spot_id: '1138352479',
        review_count: 978,
        review_score: 4.37,
      },
      {
        name: '엘리에나 호텔 서울강남',
        address: '서울 강남구 논현동 논현로 645 엘리에나호텔',
        tel: '02-3443-5670',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.511176 127.0315912)',
        4326
        ),
        naver_spot_id: '1354448162',
        review_count: 327,
        review_score: 4.5,
      },
      {
        name: '아난티 앳 강남',
        address: '서울 강남구 논현동 논현로 734',
        tel: '02-2190-4000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5175769 127.029631)',
        4326
        ),
        naver_spot_id: '1398321943',
        review_count: 276,
        review_score: null,
      },
      {
        name: '신라스테이 역삼',
        address: '서울 강남구 역삼동 언주로 517',
        tel: '02-2054-9000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5050333 127.0412409)',
        4326
        ),
        naver_spot_id: '35532451',
        review_count: 427,
        review_score: 4.37,
      },
      {
        name: '호텔리베라 청담',
        address: '서울 강남구 청담동 영동대로 737',
        tel: '02-3438-4000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5238673 127.0543277)',
        4326
        ),
        naver_spot_id: '11583207',
        review_count: 507,
        review_score: 4.29,
      },
      {
        name: '안다즈 서울강남',
        address: '서울 강남구 신사동 논현로 854',
        tel: '02-2193-1234',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5255774 127.0289046)',
        4326
        ),
        naver_spot_id: '1848029285',
        review_count: 1,
        review_score: 4.44,
      },
      {
        name: '파크 하얏트 서울',
        address: '서울 강남구 대치동 테헤란로 606',
        tel: '0507-1442-1234',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5086243 127.0641468)',
        4326
        ),
        naver_spot_id: '11728211',
        review_count: 963,
        review_score: 4.57,
      },
      {
        name: '글래드 강남 코엑스센터',
        address: '서울 강남구 대치동 테헤란로 610',
        tel: '02-6474-5000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5088358 127.064558)',
        4326
        ),
        naver_spot_id: '1071743467',
        review_count: 894,
        review_score: 4.46,
      },
      {
        name: '오크우드 프리미어 코엑스 센터',
        address: '서울 강남구 삼성동 테헤란로87길 46',
        tel: '0507-1353-7013',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5109812 127.0579973)',
        4326
        ),
        naver_spot_id: '12309433',
        review_count: 644,
        review_score: 4.48,
      },
      {
        name: 'L7 강남 바이 롯데',
        address: '서울 강남구 삼성동 테헤란로 415',
        tel: '02-2011-1000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5057154 127.0516501)',
        4326
        ),
        naver_spot_id: '1536938247',
        review_count: 931,
        review_score: 4.56,
      },
      {
        name: '보코 서울 강남 BY IHG',
        address: '서울 강남구 논현동 도산대로 144 보코서울강남',
        tel: '02-3017-5003',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5177059 127.024711)',
        4326
        ),
        naver_spot_id: '1507543905',
        review_count: 37,
        review_score: null,
      },
      {
        name: '삼정호텔',
        address: '서울 강남구 역삼동 봉은사로 150',
        tel: '02-557-1221',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5058727 127.0310561)',
        4326
        ),
        naver_spot_id: '11658929',
        review_count: 229,
        review_score: 4.29,
      },
      {
        name: '이비스 스타일 앰배서더 강남',
        address: '서울 강남구 대치동 삼성로 431 이비스 스타일 앰배서더 강남 호텔',
        tel: '02-3011-8888',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.505102 127.057088)',
        4326
        ),
        naver_spot_id: '11569344',
        review_count: 109,
        review_score: 4.47,
      },
      {
        name: 'AC 호텔 바이 메리어트 서울 강남',
        address: '서울 강남구 역삼동 테헤란로25길 10',
        tel: '02-2050-6000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5012691 127.0355647)',
        4326
        ),
        naver_spot_id: '1727726600',
        review_count: 198,
        review_score: null,
      },
      {
        name: '호텔뉴브',
        address: '서울 강남구 역삼동 선릉로85길 6',
        tel: '02-740-5000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5030264 127.0491089)',
        4326
        ),
        naver_spot_id: '1577293666',
        review_count: 261,
        review_score: 4.4,
      },
      {
        name: '포포인츠 바이 쉐라톤 서울 강남',
        address: '서울 강남구 신사동 도산대로 203',
        tel: '0507-1427-9037',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5203178 127.0284974)',
        4326
        ),
        naver_spot_id: '1146070872',
        review_count: 173,
        review_score: 4.46,
      },
      {
        name: '안테룸 서울',
        address: '서울 강남구 신사동 도산대로 153',
        tel: '02-542-2391',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5188922 127.0252452)',
        4326
        ),
        naver_spot_id: '1100956876',
        review_count: 346,
        review_score: 4.48,
      },
      {
        name: 'Hotel in 9',
        address: '서울 강남구 삼성동 영동대로 618 Hotel in 9',
        tel: '0507-1487-9001',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5155895 127.0600186)',
        4326
        ),
        naver_spot_id: '1245880236',
        review_count: 243,
        review_score: 4.37,
      },
      {
        name: '호텔 카푸치노',
        address: '서울 강남구 논현동 봉은사로 155 호텔 카푸치노',
        tel: '0507-1441-9500',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5068952 127.0315038)',
        4326
        ),
        naver_spot_id: '37182405',
        review_count: 580,
        review_score: 4.26,
      },
      {
        name: '호텔 페이토 삼성',
        address: '서울 강남구 삼성동 테헤란로87길 9',
        tel: '02-6936-9703',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5084491 127.0587107)',
        4326
        ),
        naver_spot_id: '37244057',
        review_count: 217,
        review_score: 4.34,
      },
      {
        name: '베스트웨스턴 프리미어 강남호텔',
        address: '서울 강남구 논현동 봉은사로 139 베스트웨스턴 강남호텔',
        tel: '02-6474-2000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.506397 127.0298082)',
        4326
        ),
        naver_spot_id: '11655597',
        review_count: 61,
        review_score: 4.25,
      },
      {
        name: '알로프트 서울 강남',
        address: '서울 강남구 청담동 영동대로 736',
        tel: '0507-1441-9702',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5237282 127.0557611)',
        4326
        ),
        naver_spot_id: '35438508',
        review_count: 279,
        review_score: 4.18,
      },
      {
        name: '리치웰호텔',
        address: '서울 강남구 역삼동 테헤란로37길 13-10',
        tel: '02-553-6655',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.502966 127.039844)',
        4326
        ),
        naver_spot_id: '36640336',
        review_count: 48,
        review_score: 4.28,
      },
      {
        name: '에이치에비뉴 역삼점',
        address: '서울 강남구 역삼동 테헤란로29길 12 에이치에비뉴 호텔 역삼',
        tel: '02-508-6247',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5024918 127.038775)',
        4326
        ),
        naver_spot_id: '1333454053',
        review_count: 88,
        review_score: 4.5,
      },
      {
        name: '라까사호텔 서울',
        address: '서울 강남구 신사동 도산대로1길 83 라까사호텔',
        tel: '02-6711-9000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5221247 127.0194875)',
        4326
        ),
        naver_spot_id: '20127347',
        review_count: 156,
        review_score: null,
      },
      {
        name: '서울인호텔바이더디자이너스',
        address: '서울 강남구 역삼동 테헤란로28길 3-4 서울인호텔바이더디자이너스',
        tel: '0507-1498-0021',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5008392 127.0389983)',
        4326
        ),
        naver_spot_id: '1071776268',
        review_count: 35,
        review_score: null,
      },
      {
        name: '화이트 린넨 하우스',
        address: '서울 강남구 논현동 논현로149길 40',
        tel: '0507-1364-9069',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5177535 127.0252987)',
        4326
        ),
        naver_spot_id: '1520173510',
        review_count: 481,
        review_score: 5,
      },
      {
        name: '호텔선샤인 서울',
        address: '서울 강남구 신사동 도산대로 205 선샤인 관광호텔',
        tel: '02-548-8222',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.520626 127.0288468)',
        4326
        ),
        naver_spot_id: '11595764',
        review_count: 146,
        review_score: 4.35,
      },
      {
        name: '호텔 크레센도 서울',
        address: '서울 강남구 삼성동 봉은사로 428 호텔 크레센도 서울',
        tel: '0507-1370-8800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5108166 127.0469875)',
        4326
        ),
        naver_spot_id: '1986144087',
        review_count: 126,
        review_score: 4.04,
      },
      {
        name: '호텔 더 디자이너스 리즈강남프리미어',
        address: '서울 강남구 논현동 봉은사로 113',
        tel: '0507-1446-4000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5052828 127.0258988)',
        4326
        ),
        naver_spot_id: '37072605',
        review_count: 330,
        review_score: 4.35,
      },
      {
        name: '오월호텔',
        address: '서울 강남구 역삼동 언주로85길 27',
        tel: '02-557-5001',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5005806 127.041063)',
        4326
        ),
        naver_spot_id: '1927343001',
        review_count: 74,
        review_score: 4.43,
      },
      {
        name: '호텔컬리넌 역삼',
        address: '서울 강남구 역삼동 언주로87길 11',
        tel: '02-562-3520',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.501364 127.0420955)',
        4326
        ),
        naver_spot_id: '38642535',
        review_count: 44,
        review_score: 4.57,
      },
      {
        name: '에이든 바이 베스트웨스턴 청담',
        address: '서울 강남구 논현동 도산대로 216',
        tel: '02-6711-1234',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5200753 127.0304852)',
        4326
        ),
        naver_spot_id: '1206416222',
        review_count: 145,
        review_score: 4.3,
      },
      {
        name: '호텔엔트라',
        address: '서울 강남구 청담동 도산대로 508',
        tel: '02-500-1500',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5240505 127.0484962)',
        4326
        ),
        naver_spot_id: '38703748',
        review_count: 190,
        review_score: 4.16,
      },
      {
        name: '역삼아르누보씨티',
        address: '서울 강남구 역삼동 언주로 506 역삼 아르누보씨티',
        tel: '1644-3184',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5033582 127.0428374)',
        4326
        ),
        naver_spot_id: '200749713',
        review_count: 29,
        review_score: null,
      },
      {
        name: '호텔데님',
        address: '서울 강남구 개포동 논현로 66',
        tel: '02-2058-1000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4761992 127.04667)',
        4326
        ),
        naver_spot_id: '35849267',
        review_count: 66,
        review_score: 3.96,
      },
      {
        name: '역삼브라운도트호텔',
        address: '서울 강남구 역삼동 테헤란로37길 13-5 브라운도트호텔 역삼점',
        tel: '0507-1442-8025',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5028452 127.0402862)',
        4326
        ),
        naver_spot_id: '1208859093',
        review_count: 19,
        review_score: null,
      },
      {
        name: '사월 호텔',
        address: '서울 강남구 역삼동 언주로89길 13',
        tel: '0507-1422-4900',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5016924 127.0418435)',
        4326
        ),
        naver_spot_id: '19449251',
        review_count: 66,
        review_score: 4.21,
      },
      {
        name: '프리미어호텔 XYM',
        address: '서울 강남구 역삼동 테헤란로28길 3-12',
        tel: '02-553-6333',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5010764 127.0396515)',
        4326
        ),
        naver_spot_id: '38526230',
        review_count: 29,
        review_score: 4.14,
      },
      {
        name: 'UH 스위트 더 코엑스',
        address: '서울 강남구 삼성동 선릉로92길 37-1 B2, 1-12층',
        tel: '0507-1378-5791',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5061671 127.0515774)',
        4326
        ),
        naver_spot_id: '1978611306',
        review_count: 0,
        review_score: null,
      },
      {
        name: '파티오세븐호텔',
        address: '서울 강남구 논현동 논현로 736',
        tel: '02-517-8833',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5178459 127.0293181)',
        4326
        ),
        naver_spot_id: '1260749795',
        review_count: 118,
        review_score: 4.22,
      },
      {
        name: '스테이호텔 강남',
        address: '서울 강남구 역삼동 논현로87길 15-4 강남스테이 관광호텔',
        tel: '02-568-6200',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.499391 127.0354923)',
        4326
        ),
        naver_spot_id: '39116941',
        review_count: 92,
        review_score: 4.29,
      },
      {
        name: '호텔 디아티스트',
        address: '서울 강남구 역삼동 테헤란로29길 11',
        tel: '0507-1318-4920',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5024019 127.0384825)',
        4326
        ),
        naver_spot_id: '1086668480',
        review_count: 174,
        review_score: 4.77,
      },
      {
        name: '호텔더디자이너스 리즈스윗 역삼',
        address: '서울 강남구 역삼동 테헤란로37길 13-12',
        tel: '02-501-3171',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5029241 127.0396283)',
        4326
        ),
        naver_spot_id: '1739442740',
        review_count: 22,
        review_score: null,
      },
      {
        name: '마리 호텔',
        address: '서울 강남구 역삼동 언주로87길 10',
        tel: '0507-1493-0331',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5015951 127.0420546)',
        4326
        ),
        naver_spot_id: '20585501',
        review_count: 13,
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

    // 그랜드 인터컨티넨탈 서울 파르나스 이미지
    const existingImages_11583199 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11583199'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11583199[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11583199' LIMIT 1)`),
          image_url: 'https://naverbooking-phinf.pstatic.net/20230810_117/1691659685079Q6EaH_JPEG/%BC%F6%C1%A41124_inter_0309_7_Sunset_3.jpg',
        }
      ]);
    }

    // 노보텔 앰배서더 서울 강남 이미지
    const existingImages_11559924 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11559924'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11559924[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11559924' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220211_240/16445609520215EKpM_JPEG/%B3%EB%BA%B8%C5%DA_%C0%FC%B0%E6_800.jpg',
        }
      ]);
    }

    // 조선 팰리스 서울 강남 이미지
    const existingImages_1384506674 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1384506674'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1384506674[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1384506674' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210526_192/1621990396114jFXhx_JPEG/pXtiz5ddxhJZN1n5QbxRDSoc.jpg',
        }
      ]);
    }

    // 도미인 서울 강남 이미지
    const existingImages_578893981 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['578893981'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_578893981[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '578893981' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241108_61/1731045600400QsDCA_PNG/%BD%BA%C5%A9%B8%B0%BC%A6_2024-11-08_%BF%C0%C8%C4_2.59.43.png',
        }
      ]);
    }

    // 그랜드 머큐어 임피리얼 팰리스 서울 강남 이미지
    const existingImages_36170631 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36170631'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36170631[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36170631' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241206_258/1733467446894qbA5D_JPEG/%BF%DC%B0%FC%BB%E7%C1%F8.jpg',
        }
      ]);
    }

    // 신라스테이 삼성 이미지
    const existingImages_1138352479 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1138352479'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1138352479[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1138352479' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20221213_67/1670918259684IThM5_JPEG/%C5%A9%B1%E2%BA%AF%C8%AF%BF%DC%B0%E6%BE%DF%B0%E6.jpg',
        }
      ]);
    }

    // 엘리에나 호텔 서울강남 이미지
    const existingImages_1354448162 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1354448162'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1354448162[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1354448162' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241019_275/1729330206704WAoN9_JPEG/%B0%C7%B9%B0_%BF%DC%B0%FC.jpg',
        }
      ]);
    }

    // 아난티 앳 강남 이미지
    const existingImages_1398321943 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1398321943'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1398321943[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1398321943' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230331_290/1680228638161SfI0l_JPEG/221026_ananti_at_gangnam_019.jpg',
        }
      ]);
    }

    // 신라스테이 역삼 이미지
    const existingImages_35532451 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35532451'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35532451[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35532451' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20221213_188/1670915560859WCQcr_JPEG/%C5%A9%B1%E2%BA%AF%C8%AFShilla_Stay_Property_Image.jpg',
        }
      ]);
    }

    // 호텔리베라 청담 이미지
    const existingImages_11583207 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11583207'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11583207[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11583207' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210510_298/1620629369917bwS5C_JPEG/%C1%D6%B0%E6.jpg',
        }
      ]);
    }

    // 안다즈 서울강남 이미지
    const existingImages_1848029285 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1848029285'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1848029285[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1848029285' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230117_74/1673940511012LzkhY_JPEG/Andaz-Seoul-Gangnam-Exterior-Entrance.jpg',
        }
      ]);
    }

    // 파크 하얏트 서울 이미지
    const existingImages_11728211 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11728211'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11728211[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11728211' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240724_217/17217831697646HuRL_JPEG/SELPH_Presidential_Suite_Living_Room_Sofa.jpg',
        }
      ]);
    }

    // 글래드 강남 코엑스센터 이미지
    const existingImages_1071743467 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1071743467'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1071743467[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1071743467' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210614_254/1623633401039N1GxR_JPEG/%BC%F6%C1%A4-1214_glad__0095_2.jpg',
        }
      ]);
    }

    // 오크우드 프리미어 코엑스 센터 이미지
    const existingImages_12309433 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12309433'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12309433[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12309433' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200630_51/15934857576817O9VR_JPEG/ieg8U7vX68ifC4b9ym3hgbwZ.jpg',
        }
      ]);
    }

    // L7 강남 바이 롯데 이미지
    const existingImages_1536938247 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1536938247'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1536938247[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1536938247' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190818_147/1566128623611Sza2N_JPEG/HRHuwpFTsYn9Wgod3-j3NdBk.jpeg.jpg',
        }
      ]);
    }

    // 보코 서울 강남 BY IHG 이미지
    const existingImages_1507543905 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1507543905'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1507543905[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1507543905' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220406_121/1649230483776G2tGr_JPEG/lobby_%283%29dd.jpg',
        }
      ]);
    }

    // 삼정호텔 이미지
    const existingImages_11658929 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11658929'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11658929[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11658929' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_250/1441012562416UK8RV_JPEG/116666555079375_0.jpg',
        }
      ]);
    }

    // 이비스 스타일 앰배서더 강남 이미지
    const existingImages_11569344 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11569344'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11569344[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11569344' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230328_210/1679968851695msxMu_JPEG/ibis_styles_gangnam%283730%29.jpg',
        }
      ]);
    }

    // AC 호텔 바이 메리어트 서울 강남 이미지
    const existingImages_1727726600 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1727726600'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1727726600[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1727726600' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220722_104/1658474244962CBG54_JPEG/Premier_Pool_Suite_2%28%C0%FA%29.jpg',
        }
      ]);
    }

    // 호텔뉴브 이미지
    const existingImages_1577293666 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1577293666'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1577293666[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1577293666' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20221209_11/1670566724837E1Irx_JPEG/%BF%DC%B0%FC%28%BE%DF%B0%A3%29.jpg',
        }
      ]);
    }

    // 포포인츠 바이 쉐라톤 서울 강남 이미지
    const existingImages_1146070872 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1146070872'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1146070872[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1146070872' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210825_150/1629867104402WkzH9_JPEG/hgXx9FPQZQbIxn-bPajOg0rQ.jpg',
        }
      ]);
    }

    // 안테룸 서울 이미지
    const existingImages_1100956876 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1100956876'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1100956876[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1100956876' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220425_281/1650863746631mN56H_PNG/%BF%C2%B6%F3%C0%CE_%B8%DE%C0%CE.PNG',
        }
      ]);
    }

    // Hotel in 9 이미지
    const existingImages_1245880236 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1245880236'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1245880236[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1245880236' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230926_127/16957149971437Vj4H_JPEG/about_04.jpg',
        }
      ]);
    }

    // 호텔 카푸치노 이미지
    const existingImages_37182405 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37182405'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37182405[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37182405' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20151119_1/1447917198920za8aK_JPEG/167069564338703_0.jpeg',
        }
      ]);
    }

    // 호텔 페이토 삼성 이미지
    const existingImages_37244057 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37244057'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37244057[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37244057' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250401_135/1743474539935TBc8b_JPEG/%C8%A3%C5%DA_%C6%E4%C0%CC%C5%E4_%BB%EF%BC%BA-%BF%DC%B0%FC.jpg',
        }
      ]);
    }

    // 베스트웨스턴 프리미어 강남호텔 이미지
    const existingImages_11655597 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11655597'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11655597[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11655597' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240814_83/1723599823125AyX3f_JPEG/%C8%A3%C5%DA_%C1%A4%B8%E9%BB%E7%C1%F8%28Full%29.jpg',
        }
      ]);
    }

    // 알로프트 서울 강남 이미지
    const existingImages_35438508 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35438508'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35438508[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35438508' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20170717_264/1500254952483Kno1H_JPEG/186667505931003_0.jpeg',
        }
      ]);
    }

    // 리치웰호텔 이미지
    const existingImages_36640336 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36640336'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36640336[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36640336' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20221223_68/1671760688078owct3_PNG/1._%B8%DE%C0%CE.png',
        }
      ]);
    }

    // 에이치에비뉴 역삼점 이미지
    const existingImages_1333454053 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1333454053'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1333454053[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1333454053' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220811_131/1660197722383fgRYE_JPEG/3foOT-Uby1785zszpUjY90Q6.jpg',
        }
      ]);
    }

    // 라까사호텔 서울 이미지
    const existingImages_20127347 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20127347'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20127347[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20127347' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230410_15/1681084526241EddzB_JPEG/lacasa-facade_00.jpg',
        }
      ]);
    }

    // 서울인호텔바이더디자이너스 이미지
    const existingImages_1071776268 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1071776268'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1071776268[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1071776268' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241104_62/1730708429180zaJ4J_JPEG/CZ9A4600-2.jpg',
        }
      ]);
    }

    // 화이트 린넨 하우스 이미지
    const existingImages_1520173510 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1520173510'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1520173510[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1520173510' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210324_245/1616570505769yjPUc_JPEG/KakaoTalk_20200923_121331243.jpg',
        }
      ]);
    }

    // 호텔선샤인 서울 이미지
    const existingImages_11595764 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11595764'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11595764[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11595764' LIMIT 1)`),
          image_url: 'https://naverbooking-phinf.pstatic.net/20221021_34/166633813882154Pwi_JPEG/%BC%B1%BB%FE%C0%CE%BD%BA%C0%A7%C6%AE2.jpg',
        }
      ]);
    }

    // 호텔 크레센도 서울 이미지
    const existingImages_1986144087 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1986144087'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1986144087[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1986144087' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230216_47/1676513686848sCd4l_JPEG/--Hotel_Exterior_%281%29.jpg',
        }
      ]);
    }

    // 호텔 더 디자이너스 리즈강남프리미어 이미지
    const existingImages_37072605 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37072605'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37072605[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37072605' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150904_26/1441356606600HVGMm_JPEG/SUBMIT_1441356601588_37072605.jpg',
        }
      ]);
    }

    // 오월호텔 이미지
    const existingImages_1927343001 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1927343001'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1927343001[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1927343001' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20181121_192/1542786631357s2Q32_JPEG/yBVxDV8oIL4exF5-eKdTjmwm.jpeg.jpg',
        }
      ]);
    }

    // 호텔컬리넌 역삼 이미지
    const existingImages_38642535 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38642535'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38642535[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38642535' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200821_192/15979882321719Qlq5_JPEG/CZ9A6381.JPG',
        }
      ]);
    }

    // 에이든 바이 베스트웨스턴 청담 이미지
    const existingImages_1206416222 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1206416222'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1206416222[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1206416222' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200811_207/1597133507532x0OJR_JPEG/cvOwbi5RmWCJ6AMlqkj1LYTB.jpg',
        }
      ]);
    }

    // 호텔엔트라 이미지
    const existingImages_38703748 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38703748'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38703748[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38703748' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210317_128/1615950541402xD9hi_JPEG/89611569.jpg',
        }
      ]);
    }

    // 역삼아르누보씨티 이미지
    const existingImages_200749713 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['200749713'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_200749713[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '200749713' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190529_198/15591098793203zhD7_JPEG/D8hJpJzSzP5rhIUKIQcYG5o7.jpeg.jpg',
        }
      ]);
    }

    // 역삼브라운도트호텔 이미지
    const existingImages_1208859093 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1208859093'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1208859093[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1208859093' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220324_104/1648110449919SSgrG_JPEG/KakaoTalk_20220324_170804186.jpg',
        }
      ]);
    }

    // 사월 호텔 이미지
    const existingImages_19449251 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19449251'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_19449251[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19449251' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230328_120/1679973096093P5P1q_JPEG/7.jpg',
        }
      ]);
    }

    // 프리미어호텔 XYM 이미지
    const existingImages_38526230 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38526230'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38526230[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38526230' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200601_223/15909941305635o9l4_JPEG/CZ9A2977.JPG',
        }
      ]);
    }

    // UH 스위트 더 코엑스 이미지
    const existingImages_1978611306 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1978611306'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1978611306[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1978611306' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250225_137/17404663558068M8LP_PNG/%C0%FA%BF%EB%B7%AE_%BF%DC%B0%FC_2.png',
        }
      ]);
    }

    // 파티오세븐호텔 이미지
    const existingImages_1260749795 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1260749795'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1260749795[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1260749795' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190312_41/1552376320904l7xUA_JPEG/H1jchaQ4-oaiWJIHwEZHybwD.jpg',
        }
      ]);
    }

    // 호텔 디아티스트 이미지
    const existingImages_1086668480 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1086668480'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1086668480[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1086668480' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190225_244/1551072488695pOOXn_JPEG/4tL5DImv2prQemqisk9vUNUP.jpg',
        }
      ]);
    }

    // 호텔더디자이너스 리즈스윗 역삼 이미지
    const existingImages_1739442740 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1739442740'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1739442740[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1739442740' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250218_77/1739840670359SDFek_PNG/003.png',
        }
      ]);
    }

    // 마리 호텔 이미지
    const existingImages_20585501 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20585501'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20585501[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20585501' LIMIT 1)`),
          image_url: 'https://naverbooking-phinf.pstatic.net/20230327_252/1679920557772uB66s_JPEG/%BD%BA%C0%A7%C6%AE1.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 그랜드 인터컨티넨탈 서울 파르나스 카테고리 관계
    const existingCategories_11583199 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11583199'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11583199 = new Set(existingCategories_11583199.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11583199 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11583199) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11583199.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11583199' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 노보텔 앰배서더 서울 강남 카테고리 관계
    const existingCategories_11559924 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11559924'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11559924 = new Set(existingCategories_11559924.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11559924 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11559924) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11559924.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11559924' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 조선 팰리스 서울 강남 카테고리 관계
    const existingCategories_1384506674 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1384506674'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1384506674 = new Set(existingCategories_1384506674.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1384506674 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1384506674) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1384506674.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1384506674' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도미인 서울 강남 카테고리 관계
    const existingCategories_578893981 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['578893981'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_578893981 = new Set(existingCategories_578893981.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_578893981 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_578893981) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_578893981.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '578893981' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 그랜드 머큐어 임피리얼 팰리스 서울 강남 카테고리 관계
    const existingCategories_36170631 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36170631'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36170631 = new Set(existingCategories_36170631.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36170631 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_36170631) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36170631.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36170631' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신라스테이 삼성 카테고리 관계
    const existingCategories_1138352479 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1138352479'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1138352479 = new Set(existingCategories_1138352479.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1138352479 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1138352479) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1138352479.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1138352479' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 엘리에나 호텔 서울강남 카테고리 관계
    const existingCategories_1354448162 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1354448162'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1354448162 = new Set(existingCategories_1354448162.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1354448162 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1354448162) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1354448162.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1354448162' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아난티 앳 강남 카테고리 관계
    const existingCategories_1398321943 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1398321943'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1398321943 = new Set(existingCategories_1398321943.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1398321943 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1398321943) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1398321943.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1398321943' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신라스테이 역삼 카테고리 관계
    const existingCategories_35532451 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35532451'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35532451 = new Set(existingCategories_35532451.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35532451 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_35532451) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35532451.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35532451' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔리베라 청담 카테고리 관계
    const existingCategories_11583207 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11583207'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11583207 = new Set(existingCategories_11583207.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11583207 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11583207) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11583207.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11583207' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 안다즈 서울강남 카테고리 관계
    const existingCategories_1848029285 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1848029285'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1848029285 = new Set(existingCategories_1848029285.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1848029285 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1848029285) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1848029285.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1848029285' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 파크 하얏트 서울 카테고리 관계
    const existingCategories_11728211 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11728211'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11728211 = new Set(existingCategories_11728211.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11728211 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11728211) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11728211.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11728211' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 글래드 강남 코엑스센터 카테고리 관계
    const existingCategories_1071743467 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1071743467'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1071743467 = new Set(existingCategories_1071743467.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1071743467 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1071743467) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1071743467.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1071743467' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오크우드 프리미어 코엑스 센터 카테고리 관계
    const existingCategories_12309433 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12309433'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12309433 = new Set(existingCategories_12309433.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12309433 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_12309433) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12309433.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12309433' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // L7 강남 바이 롯데 카테고리 관계
    const existingCategories_1536938247 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1536938247'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1536938247 = new Set(existingCategories_1536938247.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1536938247 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1536938247) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1536938247.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1536938247' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 보코 서울 강남 BY IHG 카테고리 관계
    const existingCategories_1507543905 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1507543905'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1507543905 = new Set(existingCategories_1507543905.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1507543905 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1507543905) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1507543905.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1507543905' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 삼정호텔 카테고리 관계
    const existingCategories_11658929 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11658929'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11658929 = new Set(existingCategories_11658929.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11658929 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11658929) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11658929.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11658929' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이비스 스타일 앰배서더 강남 카테고리 관계
    const existingCategories_11569344 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11569344'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11569344 = new Set(existingCategories_11569344.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11569344 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11569344) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11569344.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11569344' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // AC 호텔 바이 메리어트 서울 강남 카테고리 관계
    const existingCategories_1727726600 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1727726600'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1727726600 = new Set(existingCategories_1727726600.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1727726600 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1727726600) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1727726600.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1727726600' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔뉴브 카테고리 관계
    const existingCategories_1577293666 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1577293666'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1577293666 = new Set(existingCategories_1577293666.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1577293666 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1577293666) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1577293666.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1577293666' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 포포인츠 바이 쉐라톤 서울 강남 카테고리 관계
    const existingCategories_1146070872 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1146070872'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1146070872 = new Set(existingCategories_1146070872.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1146070872 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1146070872) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1146070872.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1146070872' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 안테룸 서울 카테고리 관계
    const existingCategories_1100956876 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1100956876'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1100956876 = new Set(existingCategories_1100956876.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1100956876 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1100956876) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1100956876.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1100956876' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // Hotel in 9 카테고리 관계
    const existingCategories_1245880236 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1245880236'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1245880236 = new Set(existingCategories_1245880236.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1245880236 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1245880236) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1245880236.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1245880236' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔 카푸치노 카테고리 관계
    const existingCategories_37182405 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37182405'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37182405 = new Set(existingCategories_37182405.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37182405 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_37182405) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37182405.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37182405' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔 페이토 삼성 카테고리 관계
    const existingCategories_37244057 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37244057'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37244057 = new Set(existingCategories_37244057.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37244057 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_37244057) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37244057.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37244057' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 베스트웨스턴 프리미어 강남호텔 카테고리 관계
    const existingCategories_11655597 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11655597'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11655597 = new Set(existingCategories_11655597.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11655597 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11655597) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11655597.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11655597' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 알로프트 서울 강남 카테고리 관계
    const existingCategories_35438508 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35438508'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35438508 = new Set(existingCategories_35438508.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35438508 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_35438508) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35438508.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35438508' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 리치웰호텔 카테고리 관계
    const existingCategories_36640336 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36640336'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36640336 = new Set(existingCategories_36640336.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36640336 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_36640336) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36640336.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36640336' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 에이치에비뉴 역삼점 카테고리 관계
    const existingCategories_1333454053 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1333454053'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1333454053 = new Set(existingCategories_1333454053.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1333454053 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1333454053) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1333454053.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1333454053' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 라까사호텔 서울 카테고리 관계
    const existingCategories_20127347 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20127347'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20127347 = new Set(existingCategories_20127347.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20127347 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_20127347) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20127347.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20127347' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울인호텔바이더디자이너스 카테고리 관계
    const existingCategories_1071776268 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1071776268'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1071776268 = new Set(existingCategories_1071776268.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1071776268 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1071776268) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1071776268.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1071776268' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 화이트 린넨 하우스 카테고리 관계
    const existingCategories_1520173510 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1520173510'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1520173510 = new Set(existingCategories_1520173510.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1520173510 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1520173510) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1520173510.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1520173510' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔선샤인 서울 카테고리 관계
    const existingCategories_11595764 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11595764'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11595764 = new Set(existingCategories_11595764.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11595764 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11595764) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11595764.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11595764' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔 크레센도 서울 카테고리 관계
    const existingCategories_1986144087 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1986144087'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1986144087 = new Set(existingCategories_1986144087.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1986144087 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1986144087) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1986144087.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1986144087' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔 더 디자이너스 리즈강남프리미어 카테고리 관계
    const existingCategories_37072605 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37072605'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37072605 = new Set(existingCategories_37072605.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37072605 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_37072605) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37072605.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37072605' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오월호텔 카테고리 관계
    const existingCategories_1927343001 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1927343001'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1927343001 = new Set(existingCategories_1927343001.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1927343001 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1927343001) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1927343001.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1927343001' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔컬리넌 역삼 카테고리 관계
    const existingCategories_38642535 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38642535'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38642535 = new Set(existingCategories_38642535.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38642535 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_38642535) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38642535.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38642535' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 에이든 바이 베스트웨스턴 청담 카테고리 관계
    const existingCategories_1206416222 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1206416222'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1206416222 = new Set(existingCategories_1206416222.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1206416222 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1206416222) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1206416222.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1206416222' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔엔트라 카테고리 관계
    const existingCategories_38703748 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38703748'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38703748 = new Set(existingCategories_38703748.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38703748 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_38703748) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38703748.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38703748' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 역삼아르누보씨티 카테고리 관계
    const existingCategories_200749713 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['200749713'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_200749713 = new Set(existingCategories_200749713.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_200749713 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_200749713) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_200749713.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '200749713' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔데님 카테고리 관계
    const existingCategories_35849267 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35849267'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35849267 = new Set(existingCategories_35849267.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35849267 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_35849267) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35849267.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35849267' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 역삼브라운도트호텔 카테고리 관계
    const existingCategories_1208859093 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1208859093'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1208859093 = new Set(existingCategories_1208859093.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1208859093 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1208859093) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1208859093.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1208859093' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 사월 호텔 카테고리 관계
    const existingCategories_19449251 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19449251'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19449251 = new Set(existingCategories_19449251.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19449251 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_19449251) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19449251.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19449251' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 프리미어호텔 XYM 카테고리 관계
    const existingCategories_38526230 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38526230'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38526230 = new Set(existingCategories_38526230.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38526230 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_38526230) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38526230.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38526230' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // UH 스위트 더 코엑스 카테고리 관계
    const existingCategories_1978611306 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1978611306'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1978611306 = new Set(existingCategories_1978611306.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1978611306 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1978611306) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1978611306.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1978611306' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 파티오세븐호텔 카테고리 관계
    const existingCategories_1260749795 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1260749795'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1260749795 = new Set(existingCategories_1260749795.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1260749795 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1260749795) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1260749795.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1260749795' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스테이호텔 강남 카테고리 관계
    const existingCategories_39116941 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['39116941'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_39116941 = new Set(existingCategories_39116941.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_39116941 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_39116941) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_39116941.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '39116941' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔 디아티스트 카테고리 관계
    const existingCategories_1086668480 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1086668480'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1086668480 = new Set(existingCategories_1086668480.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1086668480 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1086668480) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1086668480.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1086668480' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔더디자이너스 리즈스윗 역삼 카테고리 관계
    const existingCategories_1739442740 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1739442740'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1739442740 = new Set(existingCategories_1739442740.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1739442740 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1739442740) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1739442740.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1739442740' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마리 호텔 카테고리 관계
    const existingCategories_20585501 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20585501'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20585501 = new Set(existingCategories_20585501.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20585501 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_20585501) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20585501.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20585501' LIMIT 1)`),
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
