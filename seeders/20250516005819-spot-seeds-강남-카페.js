'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 카페
 * 생성일시: 2025-05-15T15:58:26.794Z
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
        name: 'Workshop by 배스킨라빈스',
        address: '서울 강남구 도곡동 논현로 201 1층',
        tel: '0507-2093-3216',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.485753 127.0407698)',
        4326
        ),
        naver_spot_id: '1860663446',
        review_count: 847,
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
        name: '스웨이드 베이커리 청담',
        address: '서울 강남구 청담동 도산대로62길 26 1층',
        tel: '0507-1449-4422',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5217965 127.0427749)',
        4326
        ),
        naver_spot_id: '1345851131',
        review_count: 323,
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
        review_count: 609,
        review_score: null,
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
        review_count: 254,
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
        review_count: 752,
        review_score: null,
      },
      {
        name: '어퍼앤언더',
        address: '서울 강남구 역삼동 강남대로102길 28 지하1층, 1층, 2층',
        tel: '02-557-6991',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5027449 127.0276848)',
        4326
        ),
        naver_spot_id: '1067283876',
        review_count: 3,
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
        name: 'The november 라운지 강남역KG타워점',
        address: '서울 강남구 역삼동 테헤란로5길 7 1층',
        tel: '0507-1390-1477',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4992896 127.0292371)',
        4326
        ),
        naver_spot_id: '1097569467',
        review_count: 566,
        review_score: null,
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
        review_count: 374,
        review_score: null,
      },
      {
        name: '르뱅룰즈 선릉점',
        address: '서울 강남구 삼성동 삼성로95길 27 영창빌딩 1층 LEVAINRULES',
        tel: '0507-1418-0426',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5074197 127.0537062)',
        4326
        ),
        naver_spot_id: '1235425429',
        review_count: 3,
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
        review_count: 922,
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
        review_count: 949,
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
        review_count: 459,
        review_score: null,
      },
      {
        name: '바게트케이',
        address: '서울 강남구 역삼동 테헤란로34길 21-10',
        tel: '02-567-9501',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5003416 127.0414831)',
        4326
        ),
        naver_spot_id: '37362104',
        review_count: 2,
        review_score: 4.49,
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
        review_count: 671,
        review_score: null,
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
        name: '썸띵어바웃커피',
        address: '서울 강남구 역삼동 강남대로102길 30 1, 2, 3층',
        tel: '02-538-6991',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5028451 127.0278394)',
        4326
        ),
        naver_spot_id: '1081873068',
        review_count: 4,
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
        review_count: 131,
        review_score: null,
      },
      {
        name: '레자미오네뜨',
        address: '서울 강남구 논현동 학동로5길 5 1층',
        tel: '0507-1497-1872',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5120871 127.0229232)',
        4326
        ),
        naver_spot_id: '1643374390',
        review_count: 4,
        review_score: null,
      },
      {
        name: '르푸도레',
        address: '서울 강남구 삼성동 테헤란로87길 46 오크우드호텔 1층',
        tel: '02-3466-8899',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5108135 127.0582571)',
        4326
        ),
        naver_spot_id: '1910910096',
        review_count: 2,
        review_score: 4.37,
      },
      {
        name: '파티세리 후르츠',
        address: '서울 강남구 신사동 선릉로155길 13-1 1층 파티세리 후르츠',
        tel: '02-6015-0314',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5252048 127.0385168)',
        4326
        ),
        naver_spot_id: '1182897501',
        review_count: 398,
        review_score: null,
      },
      {
        name: '헤이티 강남점',
        address: '서울 강남구 역삼동 강남대로 438 스타플렉스 2층 210호',
        tel: '0507-1320-9020',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5017236 127.0264163)',
        4326
        ),
        naver_spot_id: '1308743915',
        review_count: 380,
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
        review_count: 677,
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
        name: '꼼다비뛰드',
        address: '서울 강남구 역삼동 강남대로110길 62 지하1층',
        tel: '0507-1379-8456',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5033778 127.0295283)',
        4326
        ),
        naver_spot_id: '1167481100',
        review_count: 1,
        review_score: 4.81,
      },
      {
        name: '티하우스 청담',
        address: '서울 강남구 삼성동 삼성로120길 52-1 1층 티하우스 청담',
        tel: '0507-1345-2486',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5189262 127.0546318)',
        4326
        ),
        naver_spot_id: '1183810461',
        review_count: 925,
        review_score: 4.51,
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
        name: '노티드 삼성',
        address: '서울 강남구 삼성동 테헤란로103길 9 1층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5100993 127.0640501)',
        4326
        ),
        naver_spot_id: '1723190478',
        review_count: 135,
        review_score: null,
      },
      {
        name: '헤이티 압구정점',
        address: '서울 강남구 신사동 언주로168길 40 1층',
        tel: '02-6080-0188',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.525753 127.0367688)',
        4326
        ),
        naver_spot_id: '1342487435',
        review_count: 536,
        review_score: null,
      },
      {
        name: '호두까끼형제',
        address: '서울 강남구 도곡동 남부순환로351길 10 101호',
        tel: '0507-1381-2396',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4854963 127.0347577)',
        4326
        ),
        naver_spot_id: '1032426511',
        review_count: 783,
        review_score: 4.67,
      },
      {
        name: '차백도 강남역점',
        address: '서울 강남구 역삼동 강남대로106길 7 1층',
        tel: '0507-1439-5046',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5029758 127.0262365)',
        4326
        ),
        naver_spot_id: '1160217269',
        review_count: 53,
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
        review_count: 314,
        review_score: null,
      },
      {
        name: '한과와락',
        address: '서울 강남구 역삼동 봉은사로4길 31-5',
        tel: '0507-1443-6204',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5029355 127.0271771)',
        4326
        ),
        naver_spot_id: '1245126161',
        review_count: 3,
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
        review_count: 997,
        review_score: 4.42,
      },
      {
        name: '브레드앤워크',
        address: '서울 강남구 도곡동 양재천로 183 지하1층, 지상1층',
        tel: '0507-1346-8173',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4823626 127.0459901)',
        4326
        ),
        naver_spot_id: '1414148461',
        review_count: 1,
        review_score: null,
      },
      {
        name: '바샤커피 청담 플래그십 스토어',
        address: '서울 강남구 청담동 압구정로 432',
        tel: '0507-1444-1910',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5265823 127.0440981)',
        4326
        ),
        naver_spot_id: '1206714553',
        review_count: 307,
        review_score: null,
      },
      {
        name: '젠제로',
        address: '서울 강남구 삼성동 선릉로126길 14 예우빌딩 1층',
        tel: '02-543-1261',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5153192 127.0432696)',
        4326
        ),
        naver_spot_id: '505338596',
        review_count: 3,
        review_score: 4.63,
      },
      {
        name: '홍팥집 양재점',
        address: '서울 강남구 도곡동 남부순환로359길 31 1층',
        tel: '0507-1477-6577',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4868184 127.0356587)',
        4326
        ),
        naver_spot_id: '1119129424',
        review_count: 1,
        review_score: 4.48,
      },
      {
        name: '공차 강남본점',
        address: '서울 강남구 역삼동 테헤란로 115 1층',
        tel: '0507-1440-3489',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4989577 127.0299295)',
        4326
        ),
        naver_spot_id: '1530672038',
        review_count: 353,
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
          img_url: 'https://ldb-phinf.pstatic.net/20240312_101/1710208466476APdPb_JPEG/IMG_6659.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1130419307' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240311_295/1710123566913RhpAK_JPEG/4_%28372%29.JPG',
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
          img_url: 'https://ldb-phinf.pstatic.net/20220801_26/1659343683936GHRR0_PNG/1BAE5554.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1437513434' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20211021_32/1634780505140FJArW_JPEG/ZNdMz4tFmfu5QF55NFEHAoQG.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20240226_300/17089237149992GwRq_JPEG/1.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1860663446' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240226_14/1708923715326o1ay7_JPEG/2.JPG',
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
          img_url: 'https://ldb-phinf.pstatic.net/20241123_136/1732358829175tsVSq_JPEG/IMG_9992.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1102745487' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250514_44/174720951617896Pzn_JPEG/IMG_5283.jpeg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20230723_84/1690121689469lenqT_JPEG/20221231_164250.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '672327315' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230723_54/16901218976742YjUR_JPEG/20230206_191803.jpg',
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
          img_url: 'https://naverbooking-phinf.pstatic.net/20250426_24/1745652281935n8oqX_JPEG/_ANG5923.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1345851131' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20250426_48/1745652282211LJ9Nn_JPEG/_ANG5933.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20240101_264/1704113136861OX5ov_JPEG/1000066083.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20250221_112/1740129517909uiqas_JPEG/1740128969877.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1421920981' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250221_155/1740129518636zeFIn_JPEG/1740128947825.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20250425_194/1745571615546qXrG1_JPEG/%B9%AB%BD%BA%C4%C9%C0%CC%C5%A9_a4.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1785877248' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250421_41/1745228810216wGKPM_JPEG/%C3%B5%BF%D5%BC%BA.jpg',
        }
      ]);
    }

    // 어퍼앤언더 이미지
    const existingImages_1067283876 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1067283876'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1067283876[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1067283876' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220108_22/1641642743129dMNdJ_JPEG/78531A52-0927-43A4-AF7F-DFA8F61D4065.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1067283876' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220805_155/1659662211468dPLM9_JPEG/Screenshot_20220804-204421_Instagram.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20250414_248/17445880640991F8gj_JPEG/2024_%BA%ED%B7%E7%B8%AE%B9%F8_%BC%AD%BA%A3%C0%CC_%B8%B6%C5%A9.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1406322955' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240807_7/1723034890629dVt4u_JPEG/KakaoTalk_20240803_002746304_05.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20240418_115/17133742838989pBxw_JPEG/KakaoTalk_Photo_2024-04-18-02-15-08_001.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1097569467' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240418_130/17133742842602jeN0_JPEG/KakaoTalk_Photo_2024-04-18-02-15-08_002.jpeg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20241111_76/1731320315363m7vFn_JPEG/KakaoTalk_Photo_2024-11-11-19-18-04.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1397123488' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250424_133/1745475529856exUrd_JPEG/%C6%C4%C5%AC%BB%E7%C1%F8.jpeg',
        }
      ]);
    }

    // 르뱅룰즈 선릉점 이미지
    const existingImages_1235425429 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1235425429'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1235425429[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1235425429' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20211210_293/163910254164232T0E_JPEG/KakaoTalk_20211209_174403635_01.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1235425429' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20211213_290/1639366995672mIpAn_JPEG/1._%C0%CE%BD%BA%C5%B8_%C3%B9%B9%F8%C2%B0_%BB%E7%C1%F8.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20220708_5/1657288126137r8nlV_JPEG/908521C8-1945-4CCE-A98F-54009AB2C2FC.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1626534782' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240305_94/1709606934999BJLJc_JPEG/KakaoTalk_Photo_2024-03-05-11-47-08.jpeg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20241025_206/1729830331106QfJeO_JPEG/IMG_9225.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1689752307' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241209_191/1733731377233MT4Ke_JPEG/KakaoTalk_20241012_190105677.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20230909_120/1694237865959jgQFD_JPEG/IMG_5053.jpeg',
        }
      ]);
    }

    // 바게트케이 이미지
    const existingImages_37362104 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37362104'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37362104[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37362104' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220916_222/1663307601022vvDSo_JPEG/Screenshot_20220915-222559_KakaoMap.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20190920_204/15689768417998i9VT_JPEG/326jDaISuIrvKLVYu7G6Ddrm.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '825277299' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241029_34/1730176321901wrQQO_JPEG/1730176308488.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20240909_75/1725888668652wsU2k_JPEG/1000035995.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1507083204' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240909_106/1725888668496U5Vm0_JPEG/1000035971.jpg',
        }
      ]);
    }

    // 썸띵어바웃커피 이미지
    const existingImages_1081873068 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1081873068'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1081873068[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1081873068' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200410_63/1586525835413cIJAS_JPEG/tgP2t6xLpFwDN_PCxDkLFXzU.jpeg.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1081873068' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200410_103/15865007613020vCzW_JPEG/VY7Vs7dEYF-rs5NaDEl9fwCZ.jpeg.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20241021_275/1729507418010NPio8_JPEG/KakaoTalk_20241021_194207420_02.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1440720607' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241021_49/1729507417801Lox9f_JPEG/KakaoTalk_20241021_194207420_05.jpg',
        }
      ]);
    }

    // 레자미오네뜨 이미지
    const existingImages_1643374390 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1643374390'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1643374390[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1643374390' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221114_243/1668379529420X5d3k_JPEG/%B7%B9%C0%DA%B9%CC%BF%C0%B3%D7%B6%DF.jpg',
        }
      ]);
    }

    // 르푸도레 이미지
    const existingImages_1910910096 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1910910096'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1910910096[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1910910096' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250418_221/1744968620082yGEPP_JPEG/%B8%A3%C7%AA%B5%B5%B7%B9_%BA%F9%BC%F6_%BF%AC%C3%E2%C4%C6.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1910910096' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250418_183/1744968492187k7y6T_JPEG/%B8%A3%C7%AA%B5%B5%B7%B9_%BA%F9%BC%F6%B1%E2%BB%E7_%BB%E7%C1%F8_250418.jpg',
        }
      ]);
    }

    // 파티세리 후르츠 이미지
    const existingImages_1182897501 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1182897501'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1182897501[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1182897501' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20241004_157/1727968163045qoo7S_JPEG/KakaoTalk_20241003_232505485.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1182897501' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240330_249/1711803271160KRsdJ_JPEG/1711803145068.jpg',
        }
      ]);
    }

    // 헤이티 강남점 이미지
    const existingImages_1308743915 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1308743915'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1308743915[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1308743915' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240720_290/1721404122372agFPg_JPEG/IMG_7953.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1308743915' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240720_246/1721404122431EIMU8_JPEG/IMG_7954.jpeg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20230906_68/16939891363837qx77_JPEG/02.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1054912722' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230906_195/1693989149852m4Up0_JPEG/10.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20250428_252/1745801003787uGQgF_JPEG/%B1%EE%C4%A1%C8%AD%B9%E6_%BA%F9%BC%F6.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1497634414' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250411_35/1744331420022c9TQn_PNG/KakaoTalk_20250411_091042232.png',
        }
      ]);
    }

    // 꼼다비뛰드 이미지
    const existingImages_1167481100 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1167481100'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1167481100[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1167481100' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210403_52/1617459924276h6Ghe_JPEG/IMG_2625.JPG',
        }
      ]);
    }

    // 티하우스 청담 이미지
    const existingImages_1183810461 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1183810461'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1183810461[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1183810461' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230802_286/1690928331814dq9T2_JPEG/E1F5CD1E-2D85-43E4-AF97-E77D12833E3E.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1183810461' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230731_17/1690760653658uN7CT_PNG/4C431816-AFC5-4D59-A01B-B8A3454716DC.png',
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
          img_url: 'https://ldb-phinf.pstatic.net/20230920_245/1695214725773h5WCQ_JPEG/IMG_8734.jpeg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20250422_110/1745312600464kS5UF_PNG/1.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1723190478' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250422_299/17453126007306XThf_PNG/2.png',
        }
      ]);
    }

    // 헤이티 압구정점 이미지
    const existingImages_1342487435 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1342487435'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1342487435[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1342487435' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240315_10/1710430806746afm5x_JPEG/1111.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1342487435' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240315_210/1710432069224Jadq0_JPEG/0E4A4750.jpg',
        }
      ]);
    }

    // 호두까끼형제 이미지
    const existingImages_1032426511 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1032426511'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1032426511[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1032426511' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221210_159/16706039914749UkdL_PNG/%C8%A3%B5%CE%B1%EE%B3%A2_%B7%CE%B0%ED%28%C8%AE%C1%A4%29_%B4%EB%C1%F6_1.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1032426511' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20191225_22/1577240917066VKzyC_JPEG/nE-sF8XeehI5uIaJxeAQe9Zn.jpg',
        }
      ]);
    }

    // 차백도 강남역점 이미지
    const existingImages_1160217269 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1160217269'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1160217269[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1160217269' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250319_33/1742368589843m1P8C_PNG/naver_logo.png',
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
          img_url: 'https://ldb-phinf.pstatic.net/20240718_177/1721284684759C7o7P_JPEG/%BF%CF%B0%F8%BB%E7%C1%F8_%282%29.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1207231213' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240808_142/17230920245408SUiN_JPEG/240723_%BD%BA%C5%C4%B4%D9%B5%E5%BA%EA%B7%B9%B5%E5_08.jpg',
        }
      ]);
    }

    // 한과와락 이미지
    const existingImages_1245126161 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1245126161'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1245126161[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1245126161' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250101_299/1735688222293EYRDJ_JPEG/1728883182809.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1245126161' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250206_177/1738827911469Uui4B_JPEG/%C4%AB%C7%C7%B9%D9%B6%F3.jpg',
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
          img_url: 'https://ldb-phinf.pstatic.net/20230627_166/1687846474097MVJ0Q_JPEG/%BF%AA%BB%EF%B8%AE%B4%BA%BE%F3_2_%C0%FA%BF%EB%B7%AE.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1275470400' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230627_94/1687846494760sYFnP_JPEG/%BF%AA%BB%EF%B8%AE%B4%BA%BE%F3_1_%C0%FA%BF%EB%B7%AE.jpg',
        }
      ]);
    }

    // 브레드앤워크 이미지
    const existingImages_1414148461 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1414148461'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1414148461[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1414148461' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240416_211/1713254954848m0eaz_JPEG/KakaoTalk_Photo_2024-04-16-14-22-01_003.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1414148461' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240416_179/1713255060441lMjLs_JPEG/KakaoTalk_Photo_2024-04-16-14-22-03_012.jpeg',
        }
      ]);
    }

    // 바샤커피 청담 플래그십 스토어 이미지
    const existingImages_1206714553 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1206714553'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1206714553[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1206714553' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240731_110/1722433435588vunwk_JPEG/IMG_7984.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1206714553' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240920_235/1726794446289qYyfT_JPEG/%B9%D9%BB%FE%C4%BF%C7%C7_1%C3%FE_%C0%FC%B0%E6_%BC%F6%C1%A4.jpg',
        }
      ]);
    }

    // 젠제로 이미지
    const existingImages_505338596 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['505338596'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_505338596[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '505338596' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241105_249/1730736449836f2sxV_JPEG/IMG_1633.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '505338596' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241105_64/1730736394013KnqHp_JPEG/DCEAC77C-363F-4CDF-8FEE-30C22ADBC3C5.jpeg',
        }
      ]);
    }

    // 홍팥집 양재점 이미지
    const existingImages_1119129424 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1119129424'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1119129424[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1119129424' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210101_80/16094964453662kzru_JPEG/HCfhx0LZMr1fSqAAad7aTNQb.jpeg.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1119129424' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20201227_127/1608997552338rhQFg_JPEG/KYcE9lhPb0uB3g9mcwQGOqqK.jpeg.jpg',
        }
      ]);
    }

    // 공차 강남본점 이미지
    const existingImages_1530672038 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1530672038'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1530672038[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1530672038' LIMIT 1)`),
          img_url: 'https://naverbooking-phinf.pstatic.net/20241125_279/1732497450702bbA5k_PNG/image.png',
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

    // 어퍼앤언더 카테고리 관계
    const existingCategories_1067283876 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1067283876'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1067283876 = new Set(existingCategories_1067283876.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1067283876 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1067283876) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1067283876.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1067283876' LIMIT 1)`),
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

    // 르뱅룰즈 선릉점 카테고리 관계
    const existingCategories_1235425429 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1235425429'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1235425429 = new Set(existingCategories_1235425429.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1235425429 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1235425429) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1235425429.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1235425429' LIMIT 1)`),
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

    // 바게트케이 카테고리 관계
    const existingCategories_37362104 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37362104'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37362104 = new Set(existingCategories_37362104.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37362104 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_37362104) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37362104.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37362104' LIMIT 1)`),
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

    // 썸띵어바웃커피 카테고리 관계
    const existingCategories_1081873068 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1081873068'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1081873068 = new Set(existingCategories_1081873068.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1081873068 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1081873068) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1081873068.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1081873068' LIMIT 1)`),
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

    // 레자미오네뜨 카테고리 관계
    const existingCategories_1643374390 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1643374390'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1643374390 = new Set(existingCategories_1643374390.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1643374390 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1643374390) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1643374390.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1643374390' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 르푸도레 카테고리 관계
    const existingCategories_1910910096 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1910910096'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1910910096 = new Set(existingCategories_1910910096.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1910910096 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1910910096) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1910910096.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1910910096' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 파티세리 후르츠 카테고리 관계
    const existingCategories_1182897501 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1182897501'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1182897501 = new Set(existingCategories_1182897501.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1182897501 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1182897501) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1182897501.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1182897501' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 헤이티 강남점 카테고리 관계
    const existingCategories_1308743915 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1308743915'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1308743915 = new Set(existingCategories_1308743915.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1308743915 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1308743915) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1308743915.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1308743915' LIMIT 1)`),
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

    // 꼼다비뛰드 카테고리 관계
    const existingCategories_1167481100 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1167481100'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1167481100 = new Set(existingCategories_1167481100.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1167481100 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1167481100) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1167481100.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1167481100' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 티하우스 청담 카테고리 관계
    const existingCategories_1183810461 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1183810461'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1183810461 = new Set(existingCategories_1183810461.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1183810461 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1183810461) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1183810461.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1183810461' LIMIT 1)`),
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

    // 헤이티 압구정점 카테고리 관계
    const existingCategories_1342487435 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1342487435'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1342487435 = new Set(existingCategories_1342487435.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1342487435 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1342487435) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1342487435.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1342487435' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호두까끼형제 카테고리 관계
    const existingCategories_1032426511 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1032426511'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1032426511 = new Set(existingCategories_1032426511.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1032426511 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1032426511) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1032426511.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1032426511' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 차백도 강남역점 카테고리 관계
    const existingCategories_1160217269 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1160217269'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1160217269 = new Set(existingCategories_1160217269.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1160217269 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1160217269) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1160217269.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1160217269' LIMIT 1)`),
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

    // 한과와락 카테고리 관계
    const existingCategories_1245126161 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1245126161'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1245126161 = new Set(existingCategories_1245126161.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1245126161 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1245126161) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1245126161.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1245126161' LIMIT 1)`),
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

    // 브레드앤워크 카테고리 관계
    const existingCategories_1414148461 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1414148461'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1414148461 = new Set(existingCategories_1414148461.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1414148461 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1414148461) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1414148461.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1414148461' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 바샤커피 청담 플래그십 스토어 카테고리 관계
    const existingCategories_1206714553 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1206714553'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1206714553 = new Set(existingCategories_1206714553.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1206714553 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1206714553) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1206714553.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1206714553' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 젠제로 카테고리 관계
    const existingCategories_505338596 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['505338596'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_505338596 = new Set(existingCategories_505338596.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_505338596 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_505338596) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_505338596.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '505338596' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 홍팥집 양재점 카테고리 관계
    const existingCategories_1119129424 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1119129424'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1119129424 = new Set(existingCategories_1119129424.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1119129424 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1119129424) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1119129424.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1119129424' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공차 강남본점 카테고리 관계
    const existingCategories_1530672038 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1530672038'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1530672038 = new Set(existingCategories_1530672038.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1530672038 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1530672038) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1530672038.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1530672038' LIMIT 1)`),
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
