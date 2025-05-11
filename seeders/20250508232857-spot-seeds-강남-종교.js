'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 종교
 * 생성일시: 2025-05-08T14:29:05.116Z
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
        name: '봉은사',
        address: '서울 강남구 삼성동 봉은사로 531 봉은사',
        tel: '0507-1429-4800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5149197 127.0576546)',
        4326
        ),
        naver_spot_id: '11664007',
        review_count: 6,
        review_score: null,
      },
      {
        name: '충현교회',
        address: '서울 강남구 역삼동 테헤란로27길 40 충현교회',
        tel: '02-552-8200',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5049892 127.0372499)',
        4326
        ),
        naver_spot_id: '18579378',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소망교회',
        address: '서울 강남구 신사동 압구정로36길 55 교회',
        tel: '02-512-9191',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5251035 127.0317454)',
        4326
        ),
        naver_spot_id: '12095391',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교논현2동성당',
        address: '서울 강남구 논현동 선릉로145길 17',
        tel: '02-516-5066',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5209227 127.0383938)',
        4326
        ),
        naver_spot_id: '13124329',
        review_count: 0,
        review_score: null,
      },
      {
        name: '불국사',
        address: '서울 강남구 일원동 광평로10길 30-71',
        tel: '02-445-4543',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4773763 127.0749125)',
        4326
        ),
        naver_spot_id: '18537102',
        review_count: 0,
        review_score: null,
      },
      {
        name: '능인선원',
        address: '서울 강남구 개포동 양재대로 340 능인선원',
        tel: '02-577-5800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4716779 127.0525916)',
        4326
        ),
        naver_spot_id: '11737282',
        review_count: 0,
        review_score: null,
      },
      {
        name: '광림교회',
        address: '서울 강남구 신사동 논현로175길 49 교회',
        tel: '02-2056-5600',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5244084 127.0256305)',
        4326
        ),
        naver_spot_id: '12135195',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교역삼동교회',
        address: '서울 강남구 역삼동 언주로85길 23-11 역삼동천주교회',
        tel: '02-553-0801',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5004915 127.0417863)',
        4326
        ),
        naver_spot_id: '13139489',
        review_count: 0,
        review_score: null,
      },
      {
        name: '베이직교회',
        address: '서울 강남구 논현동 도산대로24길 29',
        tel: '02-518-1335',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5172122 127.0272713)',
        4326
        ),
        naver_spot_id: '32812203',
        review_count: 0,
        review_score: null,
      },
      {
        name: '청담동성당',
        address: '서울 강남구 청담동 삼성로 720 청담동천주교회',
        tel: '02-3447-0750',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5203767 127.0499851)',
        4326
        ),
        naver_spot_id: '13139942',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대한불교조계종 전국비구니회관 법룡사',
        address: '서울 강남구 수서동 광평로31길 56 전국비구니회관 법룡사',
        tel: '02-3411-8104',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4860481 127.0884056)',
        4326
        ),
        naver_spot_id: '18850975',
        review_count: 0,
        review_score: null,
      },
      {
        name: '세곡동 성당',
        address: '서울 강남구 율현동 밤고개로21길 50',
        tel: '02-459-8211',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4729561 127.1122055)',
        4326
        ),
        naver_spot_id: '1439475592',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교수서동성당',
        address: '서울 강남구 수서동 광평로 199',
        tel: '02-2226-0231',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4846816 127.0948749)',
        4326
        ),
        naver_spot_id: '13139318',
        review_count: 0,
        review_score: null,
      },
      {
        name: '순복음강남교회',
        address: '서울 강남구 역삼동 역삼로8길 12 순복음강남교회',
        tel: '02-3469-4600',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4933127 127.0334431)',
        4326
        ),
        naver_spot_id: '12034730',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교압구정성당',
        address: '서울 강남구 신사동 논현로175길 33 압구정성당',
        tel: '02-515-1784',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5250899 127.0262966)',
        4326
        ),
        naver_spot_id: '13139463',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교일원동교회',
        address: '서울 강남구 개포동 개포로109길 38 일원동천주교회',
        tel: '02-2226-2291',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.494405 127.0780263)',
        4326
        ),
        naver_spot_id: '11853872',
        review_count: 0,
        review_score: null,
      },
      {
        name: '청운교회',
        address: '서울 강남구 역삼동 언주로65길 6 교회',
        tel: '02-569-7001',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4957785 127.0451633)',
        4326
        ),
        naver_spot_id: '12324933',
        review_count: 0,
        review_score: null,
      },
      {
        name: '우리들 교회',
        address: '서울 강남구 대치동 역삼로 541 휘문중고등학교',
        tel: '02-558-3882',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5051534 127.0621845)',
        4326
        ),
        naver_spot_id: '11557301',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한우리교회',
        address: '서울 강남구 도곡동 강남대로54길 10',
        tel: '02-3462-9191',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.488095 127.0335537)',
        4326
        ),
        naver_spot_id: '11613104',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교개포동교회',
        address: '서울 강남구 개포동 선릉로4길 25',
        tel: '02-574-4744',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4833063 127.062853)',
        4326
        ),
        naver_spot_id: '13138240',
        review_count: 3,
        review_score: null,
      },
      {
        name: '덕암사',
        address: '서울 강남구 율현동 밤고개로23길 24-18',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4731169 127.1092113)',
        4326
        ),
        naver_spot_id: '18536306',
        review_count: 0,
        review_score: null,
      },
      {
        name: '남서울은혜장로교회',
        address: '서울 강남구 수서동 광평로20길 17',
        tel: '02-3412-5555',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4824403 127.0872007)',
        4326
        ),
        naver_spot_id: '12096474',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교 도곡동성당',
        address: '서울 강남구 도곡동 언주로30길 10 현대비전21',
        tel: '02-3463-3801',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4872846 127.0514499)',
        4326
        ),
        naver_spot_id: '967702484',
        review_count: 0,
        review_score: null,
      },
      {
        name: '양재동성당',
        address: '서울 강남구 도곡동 강남대로48길 14 양재동성당',
        tel: '02-3462-9981',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.486672 127.0344932)',
        4326
        ),
        naver_spot_id: '13139473',
        review_count: 0,
        review_score: null,
      },
      {
        name: '감람교회',
        address: '서울 강남구 역삼동 논현로85길 71 감람교회',
        tel: '02-557-6515',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4973371 127.0326556)',
        4326
        ),
        naver_spot_id: '248876907',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울영동교회',
        address: '서울 강남구 논현동 논현로132길 18',
        tel: '02-544-8001',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5150737 127.031981)',
        4326
        ),
        naver_spot_id: '12412244',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교논현동교회',
        address: '서울 강남구 논현동 논현로119길 5 논현동천주교 성당',
        tel: '02-548-2443',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.510292 127.0318868)',
        4326
        ),
        naver_spot_id: '13138504',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교압구정1동교회',
        address: '서울 강남구 신사동 언주로167길 27',
        tel: '02-541-9241',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5263617 127.030906)',
        4326
        ),
        naver_spot_id: '13139455',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교대치동교회',
        address: '서울 강남구 대치동 삼성로57길 11',
        tel: '02-562-0195',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.497745 127.0598365)',
        4326
        ),
        naver_spot_id: '13032895',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영동중앙교회',
        address: '서울 강남구 논현동 도산대로24길 8',
        tel: '02-518-1009',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5181674 127.026293)',
        4326
        ),
        naver_spot_id: '12310460',
        review_count: 0,
        review_score: null,
      },
      {
        name: '남서울중앙교회',
        address: '서울 강남구 개포동 삼성로 40 청동빌딩',
        tel: '02-3411-9191',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4890021 127.0666853)',
        4326
        ),
        naver_spot_id: '12087231',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대치2동성당',
        address: '서울 강남구 대치동 도곡로 540',
        tel: '02-565-1994',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5003456 127.0665903)',
        4326
        ),
        naver_spot_id: '12822367',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울교회',
        address: '서울 강남구 대치동 삼성로51길 7 교회',
        tel: '02-558-1106',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4965628 127.0613403)',
        4326
        ),
        naver_spot_id: '12083648',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영동교회',
        address: '서울 강남구 개포동 논현로6길 6',
        tel: '0507-1360-7333',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4729219 127.0503693)',
        4326
        ),
        naver_spot_id: '13375306',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천주교삼성동성당',
        address: '서울 강남구 삼성동 선릉로112길 68',
        tel: '02-2108-9400',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5124667 127.0492)',
        4326
        ),
        naver_spot_id: '21844814',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울연합교회',
        address: '서울 강남구 대치동 도곡로 412 기독교대한감리교',
        tel: '02-562-4123',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.496911 127.055676)',
        4326
        ),
        naver_spot_id: '11871808',
        review_count: 2,
        review_score: null,
      },
      {
        name: '개포동교회',
        address: '서울 강남구 개포동 선릉로18길 8 교회',
        tel: '02-572-6104',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4840645 127.0598033)',
        4326
        ),
        naver_spot_id: '12781446',
        review_count: 0,
        review_score: null,
      },
      {
        name: '삼성제일교회',
        address: '서울 강남구 삼성동 영동대로118길 39 교회',
        tel: '02-511-3212',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5178667 127.061325)',
        4326
        ),
        naver_spot_id: '19931979',
        review_count: 0,
        review_score: null,
      },
      {
        name: '임마누엘교회',
        address: '서울 강남구 율현동 밤고개로23길 7 임마누엘교회',
        tel: '0507-1381-1918',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4733469 127.1075786)',
        4326
        ),
        naver_spot_id: '1326142007',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영동제일교회',
        address: '서울 강남구 논현동 학동로6길 31',
        tel: '02-518-5561',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5103352 127.0253809)',
        4326
        ),
        naver_spot_id: '246317788',
        review_count: 0,
        review_score: null,
      },
      {
        name: '압구정교회',
        address: '서울 강남구 압구정동 압구정로29길 17 압구정교회',
        tel: '02-540-4400',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5285078 127.0279176)',
        4326
        ),
        naver_spot_id: '11568097',
        review_count: 2,
        review_score: null,
      },
      {
        name: '강남교회',
        address: '서울 강남구 논현동 언주로121길 5',
        tel: '02-548-2380',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5115167 127.0353375)',
        4326
        ),
        naver_spot_id: '13446923',
        review_count: 0,
        review_score: null,
      },
      {
        name: '원불교 강남교당',
        address: '서울 강남구 자곡동 자곡로 204-19 원불교강남교당',
        tel: '0507-1409-9962',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4737527 127.1041626)',
        4326
        ),
        naver_spot_id: '13015156',
        review_count: 0,
        review_score: null,
      },
      {
        name: '주기쁨교회',
        address: '서울 강남구 도곡동 남부순환로365길 26',
        tel: '070-4158-3107',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4870246 127.039592)',
        4326
        ),
        naver_spot_id: '20640735',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수서교회',
        address: '서울 강남구 수서동 광평로34길 10 대한예수교장로회 수서교회',
        tel: '02-451-0620',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4836977 127.0943018)',
        4326
        ),
        naver_spot_id: '12293619',
        review_count: 0,
        review_score: null,
      },
      {
        name: '충무성결교회',
        address: '서울 강남구 대치동 삼성로85길 25',
        tel: '02-558-1009',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5045783 127.0552282)',
        4326
        ),
        naver_spot_id: '35155977',
        review_count: 0,
        review_score: null,
      },
      {
        name: '극동교회',
        address: '서울 강남구 대치동 삼성로 150 극동교회',
        tel: '02-501-0691',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4942712 127.0704634)',
        4326
        ),
        naver_spot_id: '18819591',
        review_count: 0,
        review_score: null,
      },
      {
        name: '탄허기념불교박물관',
        address: '서울 강남구 자곡동 밤고개로14길 13-51 탄허기념불교박물관',
        tel: '02-445-8486',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4790124 127.1028981)',
        4326
        ),
        naver_spot_id: '13581899',
        review_count: 1,
        review_score: null,
      },
      {
        name: '불교총지종 총지사',
        address: '서울 강남구 역삼동 도곡로25길 35',
        tel: '02-552-1081',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4951043 127.0403174)',
        4326
        ),
        naver_spot_id: '35993223',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강남성은교회',
        address: '서울 강남구 대치동 남부순환로391길 25 강남성은교회',
        tel: '02-568-8361',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.493521 127.0565865)',
        4326
        ),
        naver_spot_id: '19931837',
        review_count: 0,
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

    // 봉은사 이미지
    const existingImages_11664007 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11664007'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11664007[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11664007' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_263/1441013645471rTy35_JPEG/11664007_0.jpg',
        }
      ]);
    }

    // 충현교회 이미지
    const existingImages_18579378 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18579378'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18579378[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18579378' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200612_75/1591953817006zx3R4_JPEG/7IPPw1fU3J-v5aMVTo_q23X5.jpg',
        }
      ]);
    }

    // 소망교회 이미지
    const existingImages_12095391 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12095391'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12095391[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12095391' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_193/1441013935720N2xqk_JPEG/12095391_0.jpg',
        }
      ]);
    }

    // 천주교논현2동성당 이미지
    const existingImages_13124329 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13124329'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13124329[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13124329' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_152/14409903428840lTLw_JPEG/106564426725284_0.jpg',
        }
      ]);
    }

    // 능인선원 이미지
    const existingImages_11737282 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11737282'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11737282[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11737282' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_201/14410333282021OYDT_JPEG/11737282_0.jpg',
        }
      ]);
    }

    // 광림교회 이미지
    const existingImages_12135195 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12135195'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12135195[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12135195' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200530_207/1590821232142HnJTL_JPEG/cj3Md3qSMY4_QM7zzvB1a-Go.jpeg.jpg',
        }
      ]);
    }

    // 천주교역삼동교회 이미지
    const existingImages_13139489 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139489'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13139489[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139489' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200130_276/1580390276175ioeNF_JPEG/IoQbyjuiQr9TycGQ6Pywf96I.jpeg.jpg',
        }
      ]);
    }

    // 베이직교회 이미지
    const existingImages_32812203 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['32812203'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_32812203[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '32812203' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_203/1441039651695PVdBC_JPEG/SUBMIT_1375344383279_32812203.jpg',
        }
      ]);
    }

    // 청담동성당 이미지
    const existingImages_13139942 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139942'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13139942[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139942' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200605_206/1591342151727mO5ef_JPEG/M3pvfdzYB1U-3r9eDqGd5GSv.jpg',
        }
      ]);
    }

    // 대한불교조계종 전국비구니회관 법룡사 이미지
    const existingImages_18850975 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18850975'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18850975[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18850975' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220101_6/1641016677392S9jwJ_JPEG/%B9%FD%B7%E6%BB%E7.jpg',
        }
      ]);
    }

    // 세곡동 성당 이미지
    const existingImages_1439475592 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1439475592'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1439475592[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1439475592' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230716_161/1689471486141NXzFn_PNG/%BC%BC%B0%EE%B5%BF%BC%BA%B4%E7_%B3%D7%C0%CC%B9%F6_%BD%C5%B1%D4_%C7%C3%B7%B9%C0%CC%BD%BA_%B5%EE%B7%CF.png',
        }
      ]);
    }

    // 천주교수서동성당 이미지
    const existingImages_13139318 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139318'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13139318[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139318' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200206_51/1580985178162geUP6_JPEG/RO4u6GoWwGQlaQHtJKZCCsaF.jpeg.jpg',
        }
      ]);
    }

    // 순복음강남교회 이미지
    const existingImages_12034730 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12034730'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12034730[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12034730' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200811_264/1597084541829MdaSs_JPEG/qHxcOeL0ggPclo73YWhKhE60.jpg',
        }
      ]);
    }

    // 천주교압구정성당 이미지
    const existingImages_13139463 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139463'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13139463[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139463' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_11/1440992867325YvAqo_PNG/116254558252564_0.png',
        }
      ]);
    }

    // 천주교일원동교회 이미지
    const existingImages_11853872 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11853872'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11853872[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11853872' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_177/1441056375352tQU6n_JPEG/11853872_0.jpg',
        }
      ]);
    }

    // 한우리교회 이미지
    const existingImages_11613104 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11613104'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11613104[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11613104' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240324_73/17112344164900BAts_JPEG/KakaoTalk_20240323_094751533_01.jpg',
        }
      ]);
    }

    // 남서울은혜장로교회 이미지
    const existingImages_12096474 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12096474'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12096474[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12096474' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200415_101/1586945533482XM4QK_JPEG/7UsqmywZzR0bTaKVYVm0iKJl.jpg',
        }
      ]);
    }

    // 천주교 도곡동성당 이미지
    const existingImages_967702484 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['967702484'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_967702484[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '967702484' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20170307_18/14888700229334Emuk_PNG/186257563042.PNG',
        }
      ]);
    }

    // 양재동성당 이미지
    const existingImages_13139473 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139473'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13139473[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139473' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_289/1440992868208lIQfK_JPEG/116260513438665_0.jpg',
        }
      ]);
    }

    // 감람교회 이미지
    const existingImages_248876907 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['248876907'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_248876907[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '248876907' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20170717_182/1500275717417pbyhk_JPEG/186667564537246_0.jpeg',
        }
      ]);
    }

    // 천주교압구정1동교회 이미지
    const existingImages_13139455 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139455'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13139455[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139455' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20191126_215/15747446396009rSq5_JPEG/B-lBzPb9V68rrJ2sYcUOpDf9.jpeg.jpg',
        }
      ]);
    }

    // 남서울중앙교회 이미지
    const existingImages_12087231 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12087231'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12087231[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12087231' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200312_164/1583965877625E2ase_JPEG/Pkh7wtBC5Y-WxkZ_Z9Gd_vsj.jpeg.jpg',
        }
      ]);
    }

    // 대치2동성당 이미지
    const existingImages_12822367 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12822367'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12822367[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12822367' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_145/1441026206381Q6p6r_JPEG/96352567941753_0.jpg',
        }
      ]);
    }

    // 서울교회 이미지
    const existingImages_12083648 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12083648'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12083648[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12083648' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_125/1441013845284PP5Af_JPEG/107059537549570_0.jpg',
        }
      ]);
    }

    // 영동교회 이미지
    const existingImages_13375306 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13375306'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13375306[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13375306' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200609_140/1591689378625DDyBc_JPEG/iJ4KJ5Pq2YgC7zAfbCqH6Zbq.jpg',
        }
      ]);
    }

    // 천주교삼성동성당 이미지
    const existingImages_21844814 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21844814'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_21844814[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21844814' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210130_235/16120036133877K7qD_JPEG/cZuzthAE3aL9citC9dGO31gz.jpg',
        }
      ]);
    }

    // 서울연합교회 이미지
    const existingImages_11871808 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11871808'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11871808[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11871808' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20191111_212/1573455918031RG49W_JPEG/3cfkJMWb7telpHuWfh4PbiLa.jpg',
        }
      ]);
    }

    // 개포동교회 이미지
    const existingImages_12781446 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12781446'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12781446[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12781446' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_14/1441020321599Hv3DC_JPEG/116276568073504_0.jpg',
        }
      ]);
    }

    // 삼성제일교회 이미지
    const existingImages_19931979 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19931979'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_19931979[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19931979' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220607_144/16545683040115bBHV_PNG/%BD%BA%C5%A9%B8%B0%BC%A6_2022-06-07_%BF%C0%C0%FC_11.16.21_%BA%B9%BB%E7.png',
        }
      ]);
    }

    // 임마누엘교회 이미지
    const existingImages_1326142007 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1326142007'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1326142007[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1326142007' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20231006_120/1696568069982BXwLU_JPEG/IMG_8221.jpeg',
        }
      ]);
    }

    // 영동제일교회 이미지
    const existingImages_246317788 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['246317788'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_246317788[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '246317788' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200627_238/1593212860951UEAha_JPEG/fCcJf9nVf99bybuyvSv9Kj1g.jpg',
        }
      ]);
    }

    // 원불교 강남교당 이미지
    const existingImages_13015156 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13015156'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13015156[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13015156' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20161110_275/1478749976049vvAKq_PNG/177060528275843_0.png',
        }
      ]);
    }

    // 주기쁨교회 이미지
    const existingImages_20640735 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20640735'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20640735[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20640735' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250318_247/1742292502273EiOcu_JPEG/1742292436563.jpg',
        }
      ]);
    }

    // 수서교회 이미지
    const existingImages_12293619 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12293619'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12293619[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12293619' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190903_35/1567467302132g4xaE_JPEG/IMOssbSNfu7CCH1JPe4OL3Yl.jpg',
        }
      ]);
    }

    // 충무성결교회 이미지
    const existingImages_35155977 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35155977'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35155977[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35155977' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190125_9/154841476024017PfC_JPEG/zA8QU7grHA7NP2z1lviGETdL.jpg',
        }
      ]);
    }

    // 극동교회 이미지
    const existingImages_18819591 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18819591'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18819591[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18819591' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241207_151/1733571932641Rxzpr_JPEG/%B1%D8%B5%BF%B1%B3%C8%B8_%B9%AB%C1%F6%B0%B3.jpeg',
        }
      ]);
    }

    // 탄허기념불교박물관 이미지
    const existingImages_13581899 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13581899'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13581899[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13581899' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200321_216/1584764946874jhgnc_JPEG/_CqGqwGd-G7lYMcdINckRwzV.jpeg.jpg',
        }
      ]);
    }

    // 불교총지종 총지사 이미지
    const existingImages_35993223 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35993223'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35993223[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35993223' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_111/14410348145260bXz8_JPEG/157069498231565_0.jpeg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 봉은사 카테고리 관계
    const existingCategories_11664007 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11664007'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11664007 = new Set(existingCategories_11664007.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11664007 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_11664007) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11664007.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11664007' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 충현교회 카테고리 관계
    const existingCategories_18579378 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18579378'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18579378 = new Set(existingCategories_18579378.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18579378 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18579378) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18579378.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18579378' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 소망교회 카테고리 관계
    const existingCategories_12095391 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12095391'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12095391 = new Set(existingCategories_12095391.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12095391 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12095391) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12095391.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12095391' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교논현2동성당 카테고리 관계
    const existingCategories_13124329 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13124329'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13124329 = new Set(existingCategories_13124329.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13124329 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13124329) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13124329.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13124329' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 불국사 카테고리 관계
    const existingCategories_18537102 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18537102'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18537102 = new Set(existingCategories_18537102.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18537102 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18537102) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18537102.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18537102' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 능인선원 카테고리 관계
    const existingCategories_11737282 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11737282'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11737282 = new Set(existingCategories_11737282.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11737282 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_11737282) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11737282.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11737282' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 광림교회 카테고리 관계
    const existingCategories_12135195 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12135195'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12135195 = new Set(existingCategories_12135195.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12135195 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12135195) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12135195.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12135195' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교역삼동교회 카테고리 관계
    const existingCategories_13139489 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139489'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13139489 = new Set(existingCategories_13139489.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13139489 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13139489) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13139489.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139489' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 베이직교회 카테고리 관계
    const existingCategories_32812203 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['32812203'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_32812203 = new Set(existingCategories_32812203.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_32812203 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_32812203) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_32812203.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '32812203' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청담동성당 카테고리 관계
    const existingCategories_13139942 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139942'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13139942 = new Set(existingCategories_13139942.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13139942 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13139942) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13139942.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139942' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대한불교조계종 전국비구니회관 법룡사 카테고리 관계
    const existingCategories_18850975 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18850975'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18850975 = new Set(existingCategories_18850975.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18850975 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18850975) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18850975.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18850975' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 세곡동 성당 카테고리 관계
    const existingCategories_1439475592 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1439475592'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1439475592 = new Set(existingCategories_1439475592.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1439475592 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1439475592) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1439475592.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1439475592' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교수서동성당 카테고리 관계
    const existingCategories_13139318 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139318'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13139318 = new Set(existingCategories_13139318.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13139318 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13139318) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13139318.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139318' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 순복음강남교회 카테고리 관계
    const existingCategories_12034730 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12034730'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12034730 = new Set(existingCategories_12034730.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12034730 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12034730) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12034730.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12034730' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교압구정성당 카테고리 관계
    const existingCategories_13139463 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139463'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13139463 = new Set(existingCategories_13139463.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13139463 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13139463) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13139463.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139463' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교일원동교회 카테고리 관계
    const existingCategories_11853872 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11853872'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11853872 = new Set(existingCategories_11853872.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11853872 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_11853872) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11853872.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11853872' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청운교회 카테고리 관계
    const existingCategories_12324933 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12324933'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12324933 = new Set(existingCategories_12324933.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12324933 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12324933) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12324933.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12324933' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 우리들 교회 카테고리 관계
    const existingCategories_11557301 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11557301'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11557301 = new Set(existingCategories_11557301.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11557301 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_11557301) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11557301.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11557301' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한우리교회 카테고리 관계
    const existingCategories_11613104 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11613104'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11613104 = new Set(existingCategories_11613104.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11613104 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_11613104) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11613104.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11613104' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교개포동교회 카테고리 관계
    const existingCategories_13138240 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13138240'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13138240 = new Set(existingCategories_13138240.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13138240 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13138240) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13138240.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13138240' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 덕암사 카테고리 관계
    const existingCategories_18536306 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18536306'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18536306 = new Set(existingCategories_18536306.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18536306 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18536306) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18536306.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18536306' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 남서울은혜장로교회 카테고리 관계
    const existingCategories_12096474 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12096474'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12096474 = new Set(existingCategories_12096474.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12096474 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12096474) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12096474.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12096474' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교 도곡동성당 카테고리 관계
    const existingCategories_967702484 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['967702484'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_967702484 = new Set(existingCategories_967702484.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_967702484 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_967702484) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_967702484.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '967702484' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 양재동성당 카테고리 관계
    const existingCategories_13139473 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139473'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13139473 = new Set(existingCategories_13139473.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13139473 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13139473) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13139473.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139473' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 감람교회 카테고리 관계
    const existingCategories_248876907 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['248876907'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_248876907 = new Set(existingCategories_248876907.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_248876907 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_248876907) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_248876907.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '248876907' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울영동교회 카테고리 관계
    const existingCategories_12412244 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12412244'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12412244 = new Set(existingCategories_12412244.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12412244 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12412244) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12412244.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12412244' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교논현동교회 카테고리 관계
    const existingCategories_13138504 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13138504'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13138504 = new Set(existingCategories_13138504.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13138504 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13138504) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13138504.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13138504' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교압구정1동교회 카테고리 관계
    const existingCategories_13139455 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13139455'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13139455 = new Set(existingCategories_13139455.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13139455 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13139455) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13139455.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13139455' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교대치동교회 카테고리 관계
    const existingCategories_13032895 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13032895'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13032895 = new Set(existingCategories_13032895.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13032895 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13032895) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13032895.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13032895' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 영동중앙교회 카테고리 관계
    const existingCategories_12310460 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12310460'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12310460 = new Set(existingCategories_12310460.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12310460 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12310460) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12310460.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12310460' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 남서울중앙교회 카테고리 관계
    const existingCategories_12087231 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12087231'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12087231 = new Set(existingCategories_12087231.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12087231 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12087231) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12087231.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12087231' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대치2동성당 카테고리 관계
    const existingCategories_12822367 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12822367'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12822367 = new Set(existingCategories_12822367.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12822367 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12822367) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12822367.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12822367' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울교회 카테고리 관계
    const existingCategories_12083648 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12083648'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12083648 = new Set(existingCategories_12083648.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12083648 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12083648) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12083648.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12083648' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 영동교회 카테고리 관계
    const existingCategories_13375306 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13375306'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13375306 = new Set(existingCategories_13375306.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13375306 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13375306) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13375306.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13375306' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천주교삼성동성당 카테고리 관계
    const existingCategories_21844814 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21844814'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21844814 = new Set(existingCategories_21844814.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21844814 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_21844814) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21844814.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21844814' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울연합교회 카테고리 관계
    const existingCategories_11871808 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11871808'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11871808 = new Set(existingCategories_11871808.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11871808 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_11871808) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11871808.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11871808' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 개포동교회 카테고리 관계
    const existingCategories_12781446 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12781446'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12781446 = new Set(existingCategories_12781446.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12781446 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12781446) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12781446.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12781446' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 삼성제일교회 카테고리 관계
    const existingCategories_19931979 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19931979'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19931979 = new Set(existingCategories_19931979.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19931979 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_19931979) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19931979.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19931979' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 임마누엘교회 카테고리 관계
    const existingCategories_1326142007 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1326142007'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1326142007 = new Set(existingCategories_1326142007.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1326142007 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1326142007) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1326142007.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1326142007' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 영동제일교회 카테고리 관계
    const existingCategories_246317788 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['246317788'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_246317788 = new Set(existingCategories_246317788.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_246317788 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_246317788) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_246317788.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '246317788' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 압구정교회 카테고리 관계
    const existingCategories_11568097 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11568097'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11568097 = new Set(existingCategories_11568097.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11568097 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_11568097) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11568097.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11568097' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남교회 카테고리 관계
    const existingCategories_13446923 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13446923'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13446923 = new Set(existingCategories_13446923.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13446923 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13446923) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13446923.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13446923' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 원불교 강남교당 카테고리 관계
    const existingCategories_13015156 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13015156'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13015156 = new Set(existingCategories_13015156.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13015156 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13015156) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13015156.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13015156' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 주기쁨교회 카테고리 관계
    const existingCategories_20640735 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20640735'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20640735 = new Set(existingCategories_20640735.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20640735 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_20640735) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20640735.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20640735' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 수서교회 카테고리 관계
    const existingCategories_12293619 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12293619'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12293619 = new Set(existingCategories_12293619.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12293619 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12293619) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12293619.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12293619' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 충무성결교회 카테고리 관계
    const existingCategories_35155977 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35155977'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35155977 = new Set(existingCategories_35155977.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35155977 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_35155977) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35155977.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35155977' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 극동교회 카테고리 관계
    const existingCategories_18819591 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18819591'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18819591 = new Set(existingCategories_18819591.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18819591 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18819591) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18819591.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18819591' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 탄허기념불교박물관 카테고리 관계
    const existingCategories_13581899 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13581899'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13581899 = new Set(existingCategories_13581899.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13581899 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_13581899) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13581899.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13581899' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 불교총지종 총지사 카테고리 관계
    const existingCategories_35993223 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35993223'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35993223 = new Set(existingCategories_35993223.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35993223 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_35993223) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35993223.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35993223' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남성은교회 카테고리 관계
    const existingCategories_19931837 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19931837'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19931837 = new Set(existingCategories_19931837.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19931837 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_19931837) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19931837.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19931837' LIMIT 1)`),
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
