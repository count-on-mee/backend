'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 카페
 * 생성일시: 2025-05-08T14:28:01.579Z
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
        name: '어반누크 베이커리 카페 신사',
        address: '서울 강남구 신사동 도산대로25길 26 1층, 101호',
        tel: '0507-1448-0856',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5214207 127.0269771)',
        4326
        ),
        naver_spot_id: '1041215062',
        review_count: 171,
        review_score: null,
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
        review_count: 259,
        review_score: null,
      },
      {
        name: '투아투아',
        address: '서울 강남구 신사동 압구정로48길 34 1층',
        tel: '080-1234-5678',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5263765 127.0368149)',
        4326
        ),
        naver_spot_id: '1175794841',
        review_count: 1,
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
        name: '카페 공명 신사 가로수길점',
        address: '서울 강남구 신사동 도산대로15길 32-4 지하1층, 1층, 2층, 3층',
        tel: '0507-1490-7709',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5206435 127.0239065)',
        4326
        ),
        naver_spot_id: '1020170491',
        review_count: 536,
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
        name: '마일드하이클럽 압구정점',
        address: '서울 강남구 신사동 언주로170길 22 1층',
        tel: '0507-1307-1707',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5266943 127.0354652)',
        4326
        ),
        naver_spot_id: '1130419307',
        review_count: 1,
        review_score: null,
      },
      {
        name: '포스톤즈 삼성본점',
        address: '서울 강남구 삼성동 테헤란로103길 5 포스톤즈커피로스터스',
        tel: '02-568-7778',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5098375 127.0641123)',
        4326
        ),
        naver_spot_id: '1437513434',
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
        review_count: 8,
        review_score: null,
      },
      {
        name: '힉스커피',
        address: '서울 강남구 역삼동 강남대로110길 51 1층',
        tel: '0507-1474-3130',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5038144 127.0290784)',
        4326
        ),
        naver_spot_id: '1785877248',
        review_count: 738,
        review_score: null,
      },
      {
        name: 'VIEW376',
        address: '서울 강남구 압구정동',
        tel: '0507-1387-7941',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5315187 127.0427147)',
        4326
        ),
        naver_spot_id: '1440720607',
        review_count: 127,
        review_score: null,
      },
      {
        name: '헤이즈 밀 베이커리',
        address: '서울 강남구 신사동 압구정로14길 36',
        tel: '02-545-7372',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5220135 127.0233791)',
        4326
        ),
        naver_spot_id: '1490521556',
        review_count: 962,
        review_score: null,
      },
      {
        name: '퀸즈베리도넛하우스 양재점',
        address: '서울 강남구 도곡동 양재천로 175 1층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4820115 127.045264)',
        4326
        ),
        naver_spot_id: '1129021823',
        review_count: 494,
        review_score: null,
      },
      {
        name: '트키 도산',
        address: '서울 강남구 신사동 도산대로45길 10-2 1층 트키',
        tel: '0507-1370-2654',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.523097 127.0359807)',
        4326
        ),
        naver_spot_id: '1942663107',
        review_count: 613,
        review_score: null,
      },
      {
        name: '낫배드커피 도산',
        address: '서울 강남구 신사동 언주로164길 21-3',
        tel: '02-511-2220',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5257437 127.0352276)',
        4326
        ),
        naver_spot_id: '1732573285',
        review_count: 836,
        review_score: 4.63,
      },
      {
        name: '런던베이글뮤지엄 도산점',
        address: '서울 강남구 신사동 언주로168길 33 1, 2층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5260816 127.0364528)',
        4326
        ),
        naver_spot_id: '1967647240',
        review_count: 5,
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
        name: '르봉구떼',
        address: '서울 강남구 신사동 언주로164길 34-2 1층',
        tel: '0507-1496-7931',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5251991 127.0362383)',
        4326
        ),
        naver_spot_id: '1421920981',
        review_count: 243,
        review_score: null,
      },
      {
        name: '팡뮤제 베이커리 강남본점',
        address: '서울 강남구 역삼동 테헤란로8길 40 1층',
        tel: '0507-1476-8318',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.496307 127.0321763)',
        4326
        ),
        naver_spot_id: '1992203822',
        review_count: 604,
        review_score: null,
      },
      {
        name: '메종알리스',
        address: '서울 강남구 삼성동 삼성로119길 14 주호빌딩',
        tel: '02-517-0204',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5160103 127.0503244)',
        4326
        ),
        naver_spot_id: '825277299',
        review_count: 668,
        review_score: null,
      },
      {
        name: '자연도소금빵in 도산',
        address: '서울 강남구 신사동 도산대로49길 41 1층',
        tel: '02-512-2245',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5257505 127.0369258)',
        4326
        ),
        naver_spot_id: '1617930791',
        review_count: 912,
        review_score: null,
      },
      {
        name: '마이페이보릿쿠키테리아',
        address: '서울 강남구 신사동 압구정로14길 15',
        tel: '070-7779-0066',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5233914 127.0233592)',
        4326
        ),
        naver_spot_id: '1499609775',
        review_count: 458,
        review_score: null,
      },
      {
        name: '팬케이크샵 가로수길점',
        address: '서울 강남구 신사동 강남대로162길 21 1층',
        tel: '0507-1426-4440',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5202598 127.0201089)',
        4326
        ),
        naver_spot_id: '1626534782',
        review_count: 918,
        review_score: null,
      },
      {
        name: '더스퀘어',
        address: '서울 강남구 논현동 학동로21길 13 1층',
        tel: '070-8823-7495',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5140358 127.0277234)',
        4326
        ),
        naver_spot_id: '1774528563',
        review_count: 113,
        review_score: null,
      },
      {
        name: '누데이크 신사',
        address: '서울 강남구 신사동 강남대로162길 43 Le82빌딩 1-2층',
        tel: '0507-1431-6977',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5210194 127.0218345)',
        4326
        ),
        naver_spot_id: '1054912722',
        review_count: 674,
        review_score: null,
      },
      {
        name: '팀홀튼 신논현역점',
        address: '서울 강남구 논현동 강남대로 476 1층 팀홀튼 신논현역점',
        tel: '070-7450-1001',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5049325 127.0247878)',
        4326
        ),
        naver_spot_id: '1790202634',
        review_count: 1,
        review_score: null,
      },
      {
        name: '코코로미',
        address: '서울 강남구 신사동 도산대로49길 36 1층 1-1호',
        tel: '070-7600-1111',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5252536 127.0371645)',
        4326
        ),
        naver_spot_id: '1921032013',
        review_count: 867,
        review_score: null,
      },
      {
        name: '다크그림 신논현역점',
        address: '서울 강남구 논현동 강남대로112길 12 1층 다크그림 신논현',
        tel: '0507-1485-2486',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5053453 127.0254259)',
        4326
        ),
        naver_spot_id: '1102745487',
        review_count: 2,
        review_score: null,
      },
      {
        name: '슬로우커피',
        address: '서울 강남구 역삼동 역삼로 136 신명빌딩 1층 슬로우커피',
        tel: '0507-1339-0364',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4942498 127.0344592)',
        4326
        ),
        naver_spot_id: '1689752307',
        review_count: 905,
        review_score: null,
      },
      {
        name: '스탠다드브레드 도산',
        address: '서울 강남구 신사동 도산대로53길 13 1층',
        tel: '0507-1433-2096',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5240582 127.0382819)',
        4326
        ),
        naver_spot_id: '1207231213',
        review_count: 310,
        review_score: null,
      },
      {
        name: '알렉산디노 강남역삼점',
        address: '서울 강남구 역삼동 테헤란로30길 31 지하1층',
        tel: '0507-1364-8759',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4992542 127.0400568)',
        4326
        ),
        naver_spot_id: '1008000996',
        review_count: 192,
        review_score: null,
      },
      {
        name: '껠끄쇼즈',
        address: '서울 강남구 대치동 도곡로70길 5',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4969632 127.0566731)',
        4326
        ),
        naver_spot_id: '672327315',
        review_count: 1,
        review_score: 4.58,
      },
      {
        name: '제이엠커피 신사라운지',
        address: '서울 강남구 신사동 도산대로11길 15 1~4층',
        tel: '070-4245-3104',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5184303 127.0224188)',
        4326
        ),
        naver_spot_id: '1211777625',
        review_count: 83,
        review_score: null,
      },
      {
        name: '노티드 삼성',
        address: '서울 강남구 삼성동 테헤란로103길 9 1층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5100993 127.0640501)',
        4326
        ),
        naver_spot_id: '1723190478',
        review_count: 128,
        review_score: null,
      },
      {
        name: '브라이언스커피 도곡',
        address: '서울 강남구 도곡동 언주로30길 39 지하1층, 지상1층',
        tel: '0507-1478-6399',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.488788 127.0534912)',
        4326
        ),
        naver_spot_id: '1881502126',
        review_count: 34,
        review_score: null,
      },
      {
        name: '까치화방 강남역점',
        address: '서울 강남구 역삼동 봉은사로4길 23 1층',
        tel: '0507-1497-5535',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5032355 127.0267278)',
        4326
        ),
        naver_spot_id: '1497634414',
        review_count: 2,
        review_score: null,
      },
      {
        name: '브라이언스커피 본점',
        address: '서울 강남구 도곡동 논현로26길 46 1층, 2층',
        tel: '02-529-6399',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4839461 127.0457942)',
        4326
        ),
        naver_spot_id: '34259240',
        review_count: 4,
        review_score: null,
      },
      {
        name: '스탠다드시스템',
        address: '서울 강남구 청담동 선릉로148길 48-5',
        tel: '0507-1493-1922',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5225903 127.0436034)',
        4326
        ),
        naver_spot_id: '1016539900',
        review_count: 531,
        review_score: 4.78,
      },
      {
        name: '뉴욕러브베이글 강남본점',
        address: '서울 강남구 역삼동 봉은사로2길 31 W빌딩 1층',
        tel: '02-557-8803',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5026122 127.026386)',
        4326
        ),
        naver_spot_id: '1507083204',
        review_count: 7,
        review_score: null,
      },
      {
        name: 'LOWIDE 압구정',
        address: '서울 강남구 신사동 압구정로 146 1, 2층',
        tel: '0507-1488-2218',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5251104 127.0248805)',
        4326
        ),
        naver_spot_id: '1729388685',
        review_count: 605,
        review_score: null,
      },
      {
        name: '스웨이드 베이커리 청담',
        address: '서울 강남구 청담동 도산대로62길 26 1층',
        tel: '0507-1449-4422',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5217965 127.0427749)',
        4326
        ),
        naver_spot_id: '1345851131',
        review_count: 300,
        review_score: null,
      },
      {
        name: '베통 역삼 센트럴키친',
        address: '서울 강남구 역삼동 테헤란로44길 8',
        tel: '02-556-2111',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5023174 127.0445456)',
        4326
        ),
        naver_spot_id: '1275470400',
        review_count: 995,
        review_score: 4.42,
      },
      {
        name: '뚜레쥬르 압구정직영점',
        address: '서울 강남구 신사동 압구정로 152 극동타워 1층',
        tel: '02-3442-3717',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5255661 127.0260696)',
        4326
        ),
        naver_spot_id: '1780280358',
        review_count: 47,
        review_score: null,
      },
      {
        name: 'The november 라운지 강남역KG타워점',
        address: '서울 강남구 역삼동 테헤란로5길 7 1층',
        tel: '0507-1390-1477',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4992896 127.0292371)',
        4326
        ),
        naver_spot_id: '1097569467',
        review_count: 557,
        review_score: null,
      },
      {
        name: '마일스톤 커피',
        address: '서울 강남구 신사동 논현로159길 49',
        tel: '0507-1425-1195',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5218928 127.0243176)',
        4326
        ),
        naver_spot_id: '33972716',
        review_count: 2,
        review_score: 4.63,
      },
      {
        name: '파티클리에',
        address: '서울 강남구 신사동 압구정로28길 22 1층 101호',
        tel: '0507-1376-3773',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5252148 127.0276015)',
        4326
        ),
        naver_spot_id: '1397123488',
        review_count: 364,
        review_score: null,
      },
      {
        name: '차선책 압구정점',
        address: '서울 강남구 신사동 선릉로155길 14 1층',
        tel: '0507-1445-8766',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5255525 127.0386274)',
        4326
        ),
        naver_spot_id: '1406322955',
        review_count: 645,
        review_score: null,
      },
      {
        name: '팀홀튼 선릉역점',
        address: '서울 강남구 대치동 테헤란로 408 1층',
        tel: '070-7450-1002',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5045883 127.0503179)',
        4326
        ),
        naver_spot_id: '1922470330',
        review_count: 1,
        review_score: null,
      },
      {
        name: '테라로사 포스코센터점',
        address: '서울 강남구 대치동 테헤란로 440 포스코센터 1층',
        tel: '1668-2764',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5060634 127.0560829)',
        4326
        ),
        naver_spot_id: '1542149931',
        review_count: 6,
        review_score: 4.49,
      },
      {
        name: 'Workshop by 배스킨라빈스',
        address: '서울 강남구 도곡동 논현로 201 1층',
        tel: '0507-2093-3216',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.485753 127.0407698)',
        4326
        ),
        naver_spot_id: '1860663446',
        review_count: 841,
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
          image_url: 'https://ldb-phinf.pstatic.net/20250405_247/1743847222587TnTc0_JPEG/IMG_4494.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1041215062' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250406_45/17439425208576fdyC_JPEG/KakaoTalk_Photo_2025-03-26-18-11-57_007.jpeg',
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
          image_url: 'https://ldb-phinf.pstatic.net/20250408_30/1744105280284ghXkK_JPEG/1000029831.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1452822415' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250304_229/1741088303306vEkMT_JPEG/1000028424.jpg',
        }
      ]);
    }

    // 투아투아 이미지
    const existingImages_1175794841 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1175794841'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1175794841[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1175794841' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230920_245/1695214725773h5WCQ_JPEG/IMG_8734.jpeg',
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
          image_url: 'https://ldb-phinf.pstatic.net/20240906_186/1725619575624GCybh_JPEG/KakaoTalk_20240810_142920660.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1776798877' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240906_102/1725619574933XIpzz_JPEG/KakaoTalk_20240405_161404318_03.jpg',
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
          image_url: 'https://ldb-phinf.pstatic.net/20241028_113/1730105026006B9YRI_JPEG/%B0%F8%B8%ED_%B0%A1%B7%CE%BC%F6%B1%E6%C1%A1_023.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1020170491' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250422_35/1745311189370LMCPT_JPEG/KakaoTalk_20230509_143322293.jpg',
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
          image_url: 'https://ldb-phinf.pstatic.net/20240704_147/1720070043214CucXu_JPEG/DSC07766.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1668757640' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230302_128/16777416791781iqm4_JPEG/21CAF0A5-C049-446D-9A0F-427A20A51AC7.jpeg',
        }
      ]);
    }

    // 마일드하이클럽 압구정점 이미지
    const existingImages_1130419307 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1130419307'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1130419307[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1130419307' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240312_101/1710208466476APdPb_JPEG/IMG_6659.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1130419307' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240311_295/1710123566913RhpAK_JPEG/4_%28372%29.JPG',
        }
      ]);
    }

    // 포스톤즈 삼성본점 이미지
    const existingImages_1437513434 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1437513434'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1437513434[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1437513434' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220801_26/1659343683936GHRR0_PNG/1BAE5554.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1437513434' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20211021_32/1634780505140FJArW_JPEG/ZNdMz4tFmfu5QF55NFEHAoQG.jpg',
        }
      ]);
    }

    // 힉스커피 이미지
    const existingImages_1785877248 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1785877248'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1785877248[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1785877248' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250425_194/1745571615546qXrG1_JPEG/%B9%AB%BD%BA%C4%C9%C0%CC%C5%A9_a4.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1785877248' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250421_41/1745228810216wGKPM_JPEG/%C3%B5%BF%D5%BC%BA.jpg',
        }
      ]);
    }

    // VIEW376 이미지
    const existingImages_1440720607 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1440720607'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1440720607[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1440720607' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241021_275/1729507418010NPio8_JPEG/KakaoTalk_20241021_194207420_02.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1440720607' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241021_49/1729507417801Lox9f_JPEG/KakaoTalk_20241021_194207420_05.jpg',
        }
      ]);
    }

    // 헤이즈 밀 베이커리 이미지
    const existingImages_1490521556 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1490521556'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1490521556[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1490521556' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250301_153/17408390954794jPya_JPEG/DSCF1542.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1490521556' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250224_81/17403869696030G8kS_JPEG/250223HM_11677.jpg',
        }
      ]);
    }

    // 퀸즈베리도넛하우스 양재점 이미지
    const existingImages_1129021823 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1129021823'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1129021823[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1129021823' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250109_124/1736387757077T2A0t_JPEG/B.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1129021823' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250109_143/1736387732034NytQe_JPEG/A.JPG',
        }
      ]);
    }

    // 트키 도산 이미지
    const existingImages_1942663107 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1942663107'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1942663107[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1942663107' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241210_180/1733840572357hGnaY_JPEG/IMG_5986.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1942663107' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241210_55/17338405522053kTEm_JPEG/IMG_5985.jpeg',
        }
      ]);
    }

    // 낫배드커피 도산 이미지
    const existingImages_1732573285 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1732573285'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1732573285[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1732573285' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241223_42/1734935914372izm4b_JPEG/1.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1732573285' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241223_94/1734935915103FlUTl_JPEG/3.jpg',
        }
      ]);
    }

    // 런던베이글뮤지엄 도산점 이미지
    const existingImages_1967647240 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1967647240'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1967647240[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1967647240' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240619_136/1718755889599smMbU_JPEG/KakaoTalk_Photo_2024-06-19-09-10-18_002.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1967647240' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240619_275/1718755887565C307Q_JPEG/KakaoTalk_Photo_2024-06-19-09-10-18_003.jpeg',
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
          image_url: 'https://ldb-phinf.pstatic.net/20250401_118/1743497751933IHiod_PNG/%B4%EB%C1%F6_17_6.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1850375355' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250317_107/1742196409941vM0mE_JPEG/%C5%EB%C5%EB%C0%CC%B4%C2_%BF%DC%B0%E8%C0%CE.jpg',
        }
      ]);
    }

    // 르봉구떼 이미지
    const existingImages_1421920981 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1421920981'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1421920981[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1421920981' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250221_112/1740129517909uiqas_JPEG/1740128969877.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1421920981' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250221_155/1740129518636zeFIn_JPEG/1740128947825.jpg',
        }
      ]);
    }

    // 팡뮤제 베이커리 강남본점 이미지
    const existingImages_1992203822 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1992203822'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1992203822[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1992203822' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240101_264/1704113136861OX5ov_JPEG/1000066083.jpg',
        }
      ]);
    }

    // 메종알리스 이미지
    const existingImages_825277299 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['825277299'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_825277299[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '825277299' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190920_204/15689768417998i9VT_JPEG/326jDaISuIrvKLVYu7G6Ddrm.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '825277299' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241029_34/1730176321901wrQQO_JPEG/1730176308488.jpg',
        }
      ]);
    }

    // 자연도소금빵in 도산 이미지
    const existingImages_1617930791 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1617930791'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1617930791[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1617930791' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240720_6/1721458721446OWyQ1_JPEG/KakaoTalk_20240720_155713986.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1617930791' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240720_136/1721458731249qDM2C_JPEG/KakaoTalk_20240720_154434226.jpg',
        }
      ]);
    }

    // 마이페이보릿쿠키테리아 이미지
    const existingImages_1499609775 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1499609775'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1499609775[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1499609775' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230909_120/1694237865959jgQFD_JPEG/IMG_5053.jpeg',
        }
      ]);
    }

    // 팬케이크샵 가로수길점 이미지
    const existingImages_1626534782 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1626534782'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1626534782[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1626534782' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220708_5/1657288126137r8nlV_JPEG/908521C8-1945-4CCE-A98F-54009AB2C2FC.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1626534782' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240305_94/1709606934999BJLJc_JPEG/KakaoTalk_Photo_2024-03-05-11-47-08.jpeg',
        }
      ]);
    }

    // 더스퀘어 이미지
    const existingImages_1774528563 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1774528563'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1774528563[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1774528563' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20211224_274/1640323816167flvJS_JPEG/5DD2FE81-05E9-4A76-A6BB-A590248CC374.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1774528563' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20211224_229/16403249198551fzX9_JPEG/image.jpg',
        }
      ]);
    }

    // 누데이크 신사 이미지
    const existingImages_1054912722 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1054912722'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1054912722[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1054912722' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230906_68/16939891363837qx77_JPEG/02.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1054912722' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230906_195/1693989149852m4Up0_JPEG/10.jpg',
        }
      ]);
    }

    // 팀홀튼 신논현역점 이미지
    const existingImages_1790202634 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1790202634'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1790202634[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1790202634' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240430_177/1714440697850tuw0a_JPEG/pos%B4%F5%B9%CC.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1790202634' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240430_233/17144406838789JsjE_JPEG/231208_TH_Menu_KV-7_ver3_OL-%281%29.jpg',
        }
      ]);
    }

    // 코코로미 이미지
    const existingImages_1921032013 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1921032013'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1921032013[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1921032013' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250304_205/1741086683598Xi01H_JPEG/TalkMedia_i_380c43a41070.jpeg.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1921032013' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250228_282/1740742050108IjlUJ_JPEG/%BD%BA%C5%A9%B8%B0%BC%A6_28-2-2025_202642_.jpeg',
        }
      ]);
    }

    // 다크그림 신논현역점 이미지
    const existingImages_1102745487 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1102745487'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1102745487[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1102745487' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241123_136/1732358829175tsVSq_JPEG/IMG_9992.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1102745487' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250120_111/1737354714195JIeho_JPEG/IMG_2083.jpeg',
        }
      ]);
    }

    // 슬로우커피 이미지
    const existingImages_1689752307 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1689752307'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1689752307[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1689752307' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241025_206/1729830331106QfJeO_JPEG/IMG_9225.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1689752307' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241209_191/1733731377233MT4Ke_JPEG/KakaoTalk_20241012_190105677.jpg',
        }
      ]);
    }

    // 스탠다드브레드 도산 이미지
    const existingImages_1207231213 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1207231213'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1207231213[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1207231213' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240718_177/1721284684759C7o7P_JPEG/%BF%CF%B0%F8%BB%E7%C1%F8_%282%29.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1207231213' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240808_142/17230920245408SUiN_JPEG/240723_%BD%BA%C5%C4%B4%D9%B5%E5%BA%EA%B7%B9%B5%E5_08.jpg',
        }
      ]);
    }

    // 알렉산디노 강남역삼점 이미지
    const existingImages_1008000996 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1008000996'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1008000996[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1008000996' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241223_237/1734960609573p4Bdb_JPEG/KakaoTalk_20241221_154957657_02.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1008000996' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241223_95/1734960607148m0deK_JPEG/KakaoTalk_20241221_154952281.jpg',
        }
      ]);
    }

    // 껠끄쇼즈 이미지
    const existingImages_672327315 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['672327315'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_672327315[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '672327315' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230723_84/1690121689469lenqT_JPEG/20221231_164250.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '672327315' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230723_54/16901218976742YjUR_JPEG/20230206_191803.jpg',
        }
      ]);
    }

    // 제이엠커피 신사라운지 이미지
    const existingImages_1211777625 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1211777625'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1211777625[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1211777625' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250507_174/1746583153013NECCA_JPEG/%BD%C3%C1%F0%B8%DE%B4%BA_A2%2CA3%2CA4.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1211777625' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250507_257/1746583156033YLPV8_JPEG/A2%2CA3%2CA4.jpg',
        }
      ]);
    }

    // 노티드 삼성 이미지
    const existingImages_1723190478 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1723190478'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1723190478[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1723190478' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250422_110/1745312600464kS5UF_PNG/1.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1723190478' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250422_299/17453126007306XThf_PNG/2.png',
        }
      ]);
    }

    // 브라이언스커피 도곡 이미지
    const existingImages_1881502126 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1881502126'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1881502126[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1881502126' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250319_95/1742375811815kGNWT_JPEG/IMG_0778%281%29.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1881502126' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250319_196/1742375961291jhUaq_JPEG/IMG_0952%281%29.JPG',
        }
      ]);
    }

    // 까치화방 강남역점 이미지
    const existingImages_1497634414 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1497634414'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1497634414[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1497634414' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250428_252/1745801003787uGQgF_JPEG/%B1%EE%C4%A1%C8%AD%B9%E6_%BA%F9%BC%F6.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1497634414' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250411_35/1744331420022c9TQn_PNG/KakaoTalk_20250411_091042232.png',
        }
      ]);
    }

    // 브라이언스커피 본점 이미지
    const existingImages_34259240 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34259240'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_34259240[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34259240' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240903_148/1725341275687146GC_JPEG/IMG_9074.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34259240' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240909_197/17258582149390R9jJ_JPEG/IMG_1927_A_%281%29.jpg',
        }
      ]);
    }

    // 스탠다드시스템 이미지
    const existingImages_1016539900 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1016539900'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1016539900[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1016539900' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230328_279/16799331702399uBvX_JPEG/intro02.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1016539900' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230328_95/1679933170267ygylU_JPEG/intro03.jpg',
        }
      ]);
    }

    // 뉴욕러브베이글 강남본점 이미지
    const existingImages_1507083204 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1507083204'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1507083204[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1507083204' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240909_75/1725888668652wsU2k_JPEG/1000035995.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1507083204' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240909_106/1725888668496U5Vm0_JPEG/1000035971.jpg',
        }
      ]);
    }

    // LOWIDE 압구정 이미지
    const existingImages_1729388685 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1729388685'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1729388685[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1729388685' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230619_14/1687143343206S3wJp_JPEG/KakaoTalk_20230616_193659635_12.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1729388685' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230619_263/1687143475890fWsa8_JPEG/KakaoTalk_20230616_193659635.jpg',
        }
      ]);
    }

    // 스웨이드 베이커리 청담 이미지
    const existingImages_1345851131 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1345851131'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1345851131[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1345851131' LIMIT 1)`),
          image_url: 'https://naverbooking-phinf.pstatic.net/20250426_24/1745652281935n8oqX_JPEG/_ANG5923.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1345851131' LIMIT 1)`),
          image_url: 'https://naverbooking-phinf.pstatic.net/20250426_48/1745652282211LJ9Nn_JPEG/_ANG5933.jpg',
        }
      ]);
    }

    // 베통 역삼 센트럴키친 이미지
    const existingImages_1275470400 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1275470400'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1275470400[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1275470400' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230627_166/1687846474097MVJ0Q_JPEG/%BF%AA%BB%EF%B8%AE%B4%BA%BE%F3_2_%C0%FA%BF%EB%B7%AE.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1275470400' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230627_94/1687846494760sYFnP_JPEG/%BF%AA%BB%EF%B8%AE%B4%BA%BE%F3_1_%C0%FA%BF%EB%B7%AE.jpg',
        }
      ]);
    }

    // 뚜레쥬르 압구정직영점 이미지
    const existingImages_1780280358 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1780280358'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1780280358[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1780280358' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250124_220/1737677960736uzsLV_JPEG/%B3%D7%C0%CC%B9%F6_TLJ4.0_%B7%CE%B0%ED.jpg',
        }
      ]);
    }

    // The november 라운지 강남역KG타워점 이미지
    const existingImages_1097569467 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1097569467'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1097569467[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1097569467' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240418_115/17133742838989pBxw_JPEG/KakaoTalk_Photo_2024-04-18-02-15-08_001.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1097569467' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240418_130/17133742842602jeN0_JPEG/KakaoTalk_Photo_2024-04-18-02-15-08_002.jpeg',
        }
      ]);
    }

    // 마일스톤 커피 이미지
    const existingImages_33972716 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33972716'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_33972716[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33972716' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200604_8/15912405422364IGU7_JPEG/yNl1tP7ql63NU4QaM5gu-P7e.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33972716' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190220_228/1550635655819bgdf1_JPEG/nqiXYt3Dr4cyr-tE0CYOvCi0.JPG.jpg',
        }
      ]);
    }

    // 파티클리에 이미지
    const existingImages_1397123488 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1397123488'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1397123488[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1397123488' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241111_76/1731320315363m7vFn_JPEG/KakaoTalk_Photo_2024-11-11-19-18-04.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1397123488' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250424_133/1745475529856exUrd_JPEG/%C6%C4%C5%AC%BB%E7%C1%F8.jpeg',
        }
      ]);
    }

    // 차선책 압구정점 이미지
    const existingImages_1406322955 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1406322955'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1406322955[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1406322955' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250414_248/17445880640991F8gj_JPEG/2024_%BA%ED%B7%E7%B8%AE%B9%F8_%BC%AD%BA%A3%C0%CC_%B8%B6%C5%A9.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1406322955' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240807_7/1723034890629dVt4u_JPEG/KakaoTalk_20240803_002746304_05.jpg',
        }
      ]);
    }

    // 팀홀튼 선릉역점 이미지
    const existingImages_1922470330 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1922470330'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1922470330[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1922470330' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240430_177/1714440697850tuw0a_JPEG/pos%B4%F5%B9%CC.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1922470330' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240430_233/17144406838789JsjE_JPEG/231208_TH_Menu_KV-7_ver3_OL-%281%29.jpg',
        }
      ]);
    }

    // 테라로사 포스코센터점 이미지
    const existingImages_1542149931 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1542149931'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1542149931[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1542149931' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180406_281/1522999750979nBQie_JPEG/SJglMNIovCOSk4LQDzWdAcUU.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1542149931' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180406_73/1522999751187m0zR0_JPEG/jTMhWmilsUruLioQHjQi1LU0.jpg',
        }
      ]);
    }

    // Workshop by 배스킨라빈스 이미지
    const existingImages_1860663446 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1860663446'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1860663446[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1860663446' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240226_300/17089237149992GwRq_JPEG/1.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1860663446' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240226_14/1708923715326o1ay7_JPEG/2.JPG',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

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

    // 투아투아 카테고리 관계
    const existingCategories_1175794841 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1175794841'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1175794841 = new Set(existingCategories_1175794841.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1175794841 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1175794841) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1175794841.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1175794841' LIMIT 1)`),
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

    // 마일드하이클럽 압구정점 카테고리 관계
    const existingCategories_1130419307 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1130419307'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1130419307 = new Set(existingCategories_1130419307.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1130419307 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1130419307) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1130419307.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1130419307' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 포스톤즈 삼성본점 카테고리 관계
    const existingCategories_1437513434 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1437513434'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1437513434 = new Set(existingCategories_1437513434.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1437513434 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1437513434) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1437513434.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1437513434' LIMIT 1)`),
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

    // 힉스커피 카테고리 관계
    const existingCategories_1785877248 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1785877248'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1785877248 = new Set(existingCategories_1785877248.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1785877248 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1785877248) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1785877248.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1785877248' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // VIEW376 카테고리 관계
    const existingCategories_1440720607 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1440720607'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1440720607 = new Set(existingCategories_1440720607.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1440720607 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1440720607) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1440720607.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1440720607' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 헤이즈 밀 베이커리 카테고리 관계
    const existingCategories_1490521556 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1490521556'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1490521556 = new Set(existingCategories_1490521556.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1490521556 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1490521556) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1490521556.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1490521556' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 퀸즈베리도넛하우스 양재점 카테고리 관계
    const existingCategories_1129021823 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1129021823'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1129021823 = new Set(existingCategories_1129021823.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1129021823 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1129021823) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1129021823.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1129021823' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 트키 도산 카테고리 관계
    const existingCategories_1942663107 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1942663107'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1942663107 = new Set(existingCategories_1942663107.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1942663107 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1942663107) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1942663107.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1942663107' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 낫배드커피 도산 카테고리 관계
    const existingCategories_1732573285 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1732573285'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1732573285 = new Set(existingCategories_1732573285.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1732573285 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1732573285) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1732573285.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1732573285' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 런던베이글뮤지엄 도산점 카테고리 관계
    const existingCategories_1967647240 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1967647240'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1967647240 = new Set(existingCategories_1967647240.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1967647240 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1967647240) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1967647240.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1967647240' LIMIT 1)`),
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

    // 르봉구떼 카테고리 관계
    const existingCategories_1421920981 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1421920981'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1421920981 = new Set(existingCategories_1421920981.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1421920981 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1421920981) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1421920981.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1421920981' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 팡뮤제 베이커리 강남본점 카테고리 관계
    const existingCategories_1992203822 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1992203822'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1992203822 = new Set(existingCategories_1992203822.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1992203822 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1992203822) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1992203822.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1992203822' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 메종알리스 카테고리 관계
    const existingCategories_825277299 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['825277299'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_825277299 = new Set(existingCategories_825277299.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_825277299 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_825277299) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_825277299.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '825277299' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 자연도소금빵in 도산 카테고리 관계
    const existingCategories_1617930791 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1617930791'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1617930791 = new Set(existingCategories_1617930791.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1617930791 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1617930791) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1617930791.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1617930791' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마이페이보릿쿠키테리아 카테고리 관계
    const existingCategories_1499609775 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1499609775'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1499609775 = new Set(existingCategories_1499609775.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1499609775 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1499609775) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1499609775.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1499609775' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 팬케이크샵 가로수길점 카테고리 관계
    const existingCategories_1626534782 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1626534782'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1626534782 = new Set(existingCategories_1626534782.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1626534782 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1626534782) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1626534782.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1626534782' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 더스퀘어 카테고리 관계
    const existingCategories_1774528563 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1774528563'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1774528563 = new Set(existingCategories_1774528563.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1774528563 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1774528563) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1774528563.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1774528563' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 누데이크 신사 카테고리 관계
    const existingCategories_1054912722 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1054912722'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1054912722 = new Set(existingCategories_1054912722.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1054912722 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1054912722) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1054912722.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1054912722' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 팀홀튼 신논현역점 카테고리 관계
    const existingCategories_1790202634 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1790202634'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1790202634 = new Set(existingCategories_1790202634.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1790202634 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1790202634) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1790202634.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1790202634' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코코로미 카테고리 관계
    const existingCategories_1921032013 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1921032013'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1921032013 = new Set(existingCategories_1921032013.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1921032013 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1921032013) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1921032013.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1921032013' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 다크그림 신논현역점 카테고리 관계
    const existingCategories_1102745487 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1102745487'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1102745487 = new Set(existingCategories_1102745487.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1102745487 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1102745487) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1102745487.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1102745487' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 슬로우커피 카테고리 관계
    const existingCategories_1689752307 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1689752307'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1689752307 = new Set(existingCategories_1689752307.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1689752307 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1689752307) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1689752307.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1689752307' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스탠다드브레드 도산 카테고리 관계
    const existingCategories_1207231213 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1207231213'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1207231213 = new Set(existingCategories_1207231213.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1207231213 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1207231213) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1207231213.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1207231213' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 알렉산디노 강남역삼점 카테고리 관계
    const existingCategories_1008000996 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1008000996'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1008000996 = new Set(existingCategories_1008000996.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1008000996 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1008000996) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1008000996.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1008000996' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 껠끄쇼즈 카테고리 관계
    const existingCategories_672327315 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['672327315'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_672327315 = new Set(existingCategories_672327315.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_672327315 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_672327315) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_672327315.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '672327315' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 제이엠커피 신사라운지 카테고리 관계
    const existingCategories_1211777625 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1211777625'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1211777625 = new Set(existingCategories_1211777625.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1211777625 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1211777625) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1211777625.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1211777625' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 노티드 삼성 카테고리 관계
    const existingCategories_1723190478 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1723190478'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1723190478 = new Set(existingCategories_1723190478.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1723190478 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1723190478) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1723190478.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1723190478' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 브라이언스커피 도곡 카테고리 관계
    const existingCategories_1881502126 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1881502126'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1881502126 = new Set(existingCategories_1881502126.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1881502126 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1881502126) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1881502126.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1881502126' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 까치화방 강남역점 카테고리 관계
    const existingCategories_1497634414 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1497634414'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1497634414 = new Set(existingCategories_1497634414.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1497634414 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1497634414) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1497634414.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1497634414' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 브라이언스커피 본점 카테고리 관계
    const existingCategories_34259240 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34259240'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_34259240 = new Set(existingCategories_34259240.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_34259240 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_34259240) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_34259240.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34259240' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스탠다드시스템 카테고리 관계
    const existingCategories_1016539900 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1016539900'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1016539900 = new Set(existingCategories_1016539900.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1016539900 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1016539900) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1016539900.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1016539900' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 뉴욕러브베이글 강남본점 카테고리 관계
    const existingCategories_1507083204 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1507083204'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1507083204 = new Set(existingCategories_1507083204.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1507083204 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1507083204) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1507083204.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1507083204' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // LOWIDE 압구정 카테고리 관계
    const existingCategories_1729388685 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1729388685'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1729388685 = new Set(existingCategories_1729388685.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1729388685 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1729388685) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1729388685.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1729388685' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스웨이드 베이커리 청담 카테고리 관계
    const existingCategories_1345851131 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1345851131'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1345851131 = new Set(existingCategories_1345851131.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1345851131 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1345851131) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1345851131.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1345851131' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 베통 역삼 센트럴키친 카테고리 관계
    const existingCategories_1275470400 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1275470400'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1275470400 = new Set(existingCategories_1275470400.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1275470400 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1275470400) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1275470400.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1275470400' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 뚜레쥬르 압구정직영점 카테고리 관계
    const existingCategories_1780280358 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1780280358'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1780280358 = new Set(existingCategories_1780280358.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1780280358 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1780280358) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1780280358.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1780280358' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // The november 라운지 강남역KG타워점 카테고리 관계
    const existingCategories_1097569467 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1097569467'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1097569467 = new Set(existingCategories_1097569467.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1097569467 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1097569467) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1097569467.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1097569467' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마일스톤 커피 카테고리 관계
    const existingCategories_33972716 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33972716'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33972716 = new Set(existingCategories_33972716.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33972716 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_33972716) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33972716.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33972716' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 파티클리에 카테고리 관계
    const existingCategories_1397123488 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1397123488'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1397123488 = new Set(existingCategories_1397123488.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1397123488 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1397123488) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1397123488.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1397123488' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 차선책 압구정점 카테고리 관계
    const existingCategories_1406322955 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1406322955'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1406322955 = new Set(existingCategories_1406322955.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1406322955 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1406322955) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1406322955.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1406322955' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 팀홀튼 선릉역점 카테고리 관계
    const existingCategories_1922470330 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1922470330'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1922470330 = new Set(existingCategories_1922470330.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1922470330 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1922470330) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1922470330.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1922470330' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 테라로사 포스코센터점 카테고리 관계
    const existingCategories_1542149931 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1542149931'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1542149931 = new Set(existingCategories_1542149931.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1542149931 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1542149931) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1542149931.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1542149931' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // Workshop by 배스킨라빈스 카테고리 관계
    const existingCategories_1860663446 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1860663446'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1860663446 = new Set(existingCategories_1860663446.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1860663446 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1860663446) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1860663446.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1860663446' LIMIT 1)`),
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
