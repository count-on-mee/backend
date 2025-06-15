'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 도서관
 * 생성일시: 2025-06-15T10:32:39.422Z
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
        name: '꿈을 이루는 작은도서관',
        address: '서울 마포구 공덕동 마포대로7길 18',
        tel: '02-706-4785',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5470999 126.9521499)',
        4326
        ),
        naver_spot_id: '32875971',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포평생학습관아현분관스마트도서관',
        address: '서울 마포구 공덕동 마포대로 100 지하1층',
        tel: '0507-1306-3026',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450371 126.951793)',
        4326
        ),
        naver_spot_id: '1034141951',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포구립 늘푸른소나무 작은도서관',
        address: '서울 마포구 신공덕동 백범로 227 마포문화원 3층',
        tel: '0507-1423-4785',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5422077 126.9553899)',
        4326
        ),
        naver_spot_id: '33133585',
        review_count: 0,
        review_score: null,
      },
      {
        name: '도화1동문고',
        address: '서울 마포구 도화동 도화길 32 삼성아파트',
        tel: '02-712-2614',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5408641 126.9496443)',
        4326
        ),
        naver_spot_id: '11845213',
        review_count: 0,
        review_score: null,
      },
      {
        name: '도화동문고',
        address: '서울 마포구 도화동 도화길 37 도화 공영주차장 및 주민센터',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5415852 126.9499228)',
        4326
        ),
        naver_spot_id: '36325315',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공감홀작은도서관',
        address: '서울 마포구 공덕동 백범로 169-19',
        tel: '02-717-0709',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5454973 126.9500086)',
        4326
        ),
        naver_spot_id: '36817242',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포어린이영어도서관',
        address: '서울 마포구 도화동 도화4길 53 2층',
        tel: '02-716-3987',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5395433 126.9519169)',
        4326
        ),
        naver_spot_id: '18305605',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신공덕동문고',
        address: '서울 마포구 신공덕동 백범로 227 공덕동자치회관',
        tel: '02-712-1828',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.542251 126.9554142)',
        4326
        ),
        naver_spot_id: '11845340',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신덕교회도서관',
        address: '서울 마포구 신공덕동 만리재로 48',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54533 126.95607)',
        4326
        ),
        naver_spot_id: '36325141',
        review_count: 0,
        review_score: null,
      },
      {
        name: 'TheLogiSCMLibrary',
        address: '서울 마포구 도화동 마포대로 63-8 삼창프라자빌딩',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5422964 126.9479127)',
        4326
        ),
        naver_spot_id: '1731331533',
        review_count: 1,
        review_score: null,
      },
      {
        name: '아이도북센터',
        address: '서울 마포구 신공덕동 만리재로 29',
        tel: '02-6371-1059',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5447599 126.95456)',
        4326
        ),
        naver_spot_id: '36325217',
        review_count: 0,
        review_score: null,
      },
      {
        name: '복사골작은도서관',
        address: '서울 마포구 도화동 도화4길 53',
        tel: '02-716-5800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5394999 126.9519006)',
        4326
        ),
        naver_spot_id: '33133913',
        review_count: 0,
        review_score: null,
      },
      {
        name: '초록숲작은도서관',
        address: '서울 마포구 아현동 마포대로11길 44-81 아현문화건강센터 지하1층',
        tel: '02-313-4785',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5521612 126.9512201)',
        4326
        ),
        naver_spot_id: '1371976674',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용강동작은도서관',
        address: '서울 마포구 용강동 토정로31길 31 용강동복합청사 2층',
        tel: '02-716-4785',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5424076 126.9427807)',
        4326
        ),
        naver_spot_id: '36459747',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포역스마트도서관',
        address: '서울 마포구 도화동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5397401 126.9466246)',
        4326
        ),
        naver_spot_id: '1026576440',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용강도도서관',
        address: '서울 마포구 용강동 토정로31길 31',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5423063 126.9428149)',
        4326
        ),
        naver_spot_id: '1447707715',
        review_count: 0,
        review_score: null,
      },
      {
        name: '염산문고',
        address: '서울 마포구 염리동 숭문2길 5-3',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5470739 126.9458187)',
        4326
        ),
        naver_spot_id: '36325263',
        review_count: 0,
        review_score: null,
      },
      {
        name: '염리동문고',
        address: '서울 마포구 염리동 숭문길 14',
        tel: '02-716-5130',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54706 126.94564)',
        4326
        ),
        naver_spot_id: '36325203',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공덕1동문고',
        address: '서울 마포구 공덕동 만리재옛길 84 공덕동주민센터',
        tel: '02-713-9892',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5501614 126.96001)',
        4326
        ),
        naver_spot_id: '11845207',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포소금나루도서관',
        address: '서울 마포구 염리동 숭문길 72',
        tel: '02-3153-1600',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5495973 126.9461342)',
        4326
        ),
        naver_spot_id: '1766485473',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아현1동문고',
        address: '서울 마포구 아현동',
        tel: '02-364-5674',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5523414 126.9585176)',
        4326
        ),
        naver_spot_id: '11845347',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울특별시교육청 마포평생학습관 아현분관',
        address: '서울 마포구 아현동 마포대로 224',
        tel: '02-362-8785',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5538448 126.9571988)',
        4326
        ),
        naver_spot_id: '13306194',
        review_count: 3,
        review_score: null,
      },
      {
        name: '솔틴비전센터(평화나루도서관 갤러리)',
        address: '서울 마포구 염리동 대흥로24바길 11 솔틴비전센터(평화나루도서관 갤러리)',
        tel: '02-716-0732',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5543363 126.9488695)',
        4326
        ),
        naver_spot_id: '1163763133',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창독서마당',
        address: '서울 용산구 효창동 효창원로 161',
        tel: '02-2199-8520',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.542481 126.9618226)',
        4326
        ),
        naver_spot_id: '36818121',
        review_count: 0,
        review_score: null,
      },
      {
        name: '햇빛꿈이있는도서관',
        address: '서울 용산구 청파동1가 효창원로86가길 28',
        tel: '02-706-1344',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5482 126.96534)',
        4326
        ),
        naver_spot_id: '36332381',
        review_count: 0,
        review_score: null,
      },
      {
        name: '솔로몬도서관',
        address: '서울 마포구 토정동 토정로32길 11',
        tel: '02-717-8611',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5394099 126.94132)',
        4326
        ),
        naver_spot_id: '36325403',
        review_count: 0,
        review_score: null,
      },
      {
        name: '고래이야기',
        address: '서울 용산구 효창동 효창원로 157 효창맨션 1층 제디형 101호 고래이야기 작은도서관',
        tel: '070-8950-0615',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5418765 126.9619203)',
        4326
        ),
        naver_spot_id: '36817347',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대흥동문고',
        address: '서울 마포구 대흥동',
        tel: '02-718-0338',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5503887 126.9444024)',
        4326
        ),
        naver_spot_id: '11845212',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용마루어린이도서관',
        address: '서울 용산구 용문동 효창원로37길 1 1층',
        tel: '02-707-1030',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5369446 126.9583137)',
        4326
        ),
        naver_spot_id: '1876693237',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창사랑작은도서관',
        address: '서울 용산구 청파동3가 효창원로 160',
        tel: '02-713-2309',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5422687 126.962673)',
        4326
        ),
        naver_spot_id: '36332378',
        review_count: 0,
        review_score: null,
      },
      {
        name: '북카페 두드림',
        address: '서울 용산구 산천동 효창원로8길 3',
        tel: '02-2199-8500',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5343711 126.9515341)',
        4326
        ),
        naver_spot_id: '36818122',
        review_count: 0,
        review_score: null,
      },
      {
        name: '숙명여자대학교 도서관',
        address: '서울 용산구 청파동2가 청파로47길 100',
        tel: '02-710-9125',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5441008 126.9661079)',
        4326
        ),
        naver_spot_id: '11592563',
        review_count: 0,
        review_score: null,
      },
      {
        name: '희망작은도서관',
        address: '서울 용산구 효창동 효창원로62길 16 잉한빌딩',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5397148 126.9625323)',
        4326
        ),
        naver_spot_id: '1435550173',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서강대학교 로욜라 도서관',
        address: '서울 마포구 신수동 백범로 35',
        tel: '02-705-8195',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5516257 126.942096)',
        4326
        ),
        naver_spot_id: '11592558',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아현역스마트도서관',
        address: '서울 마포구 아현동 신촌로 270',
        tel: '0507-1351-8634',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5574135 126.955946)',
        4326
        ),
        naver_spot_id: '1135663232',
        review_count: 0,
        review_score: null,
      },
      {
        name: '손기정어린이도서관',
        address: '서울 중구 만리동2가 손기정로 101-1 손기정공원',
        tel: '02-2230-2945',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5551622 126.9647479)',
        4326
        ),
        naver_spot_id: '1113363839',
        review_count: 3,
        review_score: null,
      },
      {
        name: '청파어린이영어도서관',
        address: '서울 용산구 청파동2가 청파로49길 34 4층 청파어린이영어도서관',
        tel: '02-702-0641',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5454435 126.9684356)',
        4326
        ),
        naver_spot_id: '13341352',
        review_count: 0,
        review_score: null,
      },
      {
        name: '손기정문화도서관',
        address: '서울 중구 만리동2가 손기정로 101-3 손기정공원',
        tel: '0507-1382-2950',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5559135 126.9645362)',
        4326
        ),
        naver_spot_id: '1061242345',
        review_count: 26,
        review_score: null,
      },
      {
        name: '구립청파도서관',
        address: '서울 용산구 서계동 청파로93길 27',
        tel: '02-714-3931',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5540246 126.9675447)',
        4326
        ),
        naver_spot_id: '13286790',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울비젼문고',
        address: '서울 용산구 원효로2가 원효로71길 24',
        tel: '02-703-9641',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.53806 126.96388)',
        4326
        ),
        naver_spot_id: '36332376',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용산꿈나무도서관',
        address: '서울 용산구 원효로1가 백범로 329',
        tel: '02-707-0138',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5388292 126.9653568)',
        4326
        ),
        naver_spot_id: '1646471548',
        review_count: 0,
        review_score: null,
      },
      {
        name: '북아현마을 북카페',
        address: '서울 서대문구 북아현동 북아현로 24 북아현동주민센터 3층',
        tel: '02-330-8672',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5594713 126.9570419)',
        4326
        ),
        naver_spot_id: '36818238',
        review_count: 2,
        review_score: null,
      },
      {
        name: '해오름작은도서관',
        address: '서울 마포구 노고산동 신촌로26길 10 우리마포복지관 2층',
        tel: '02-714-8080',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5559648 126.942411)',
        4326
        ),
        naver_spot_id: '33133577',
        review_count: 0,
        review_score: null,
      },
      {
        name: '노고산동문고',
        address: '서울 마포구 노고산동 신촌로26길 10',
        tel: '02-715-4397',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5558693 126.9426388)',
        4326
        ),
        naver_spot_id: '11845209',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신수동문고',
        address: '서울 마포구 신수동 독막로 192',
        tel: '02-3153-6680',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5471 126.9351)',
        4326
        ),
        naver_spot_id: '36325411',
        review_count: 0,
        review_score: null,
      },
      {
        name: '더다운 도서관',
        address: '서울 서대문구 창천동 연세로7안길 10 6층',
        tel: '0507-1462-7876',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.558148 126.9364584)',
        4326
        ),
        naver_spot_id: '1640869477',
        review_count: 14,
        review_score: null,
      },
      {
        name: '연세대학교 의학도서관',
        address: '서울 서대문구 신촌동 연세로 50-1',
        tel: '02-2228-2913',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5614456 126.9403143)',
        4326
        ),
        naver_spot_id: '1766706349',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용산e편한세상 북카페',
        address: '서울 용산구 신계동 원효로 216',
        tel: '070-8899-8842',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5367458 126.9665267)',
        4326
        ),
        naver_spot_id: '36817348',
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

    // 꿈을 이루는 작은도서관 이미지
    const existingImages_32875971 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['32875971'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_32875971[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '32875971' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150901_137/14410424940859Mjy4_JPEG/146667567962057_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '32875971' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150901_29/1441042494289MNCXQ_JPEG/146667567962057_1.jpeg',
        }
      ]);
    }

    // 마포어린이영어도서관 이미지
    const existingImages_18305605 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18305605'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18305605[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18305605' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20171128_49/1511841465877Epg1c_JPEG/hUDWh-vZ-2VfnllgOJ8rL3Ai.JPG.jpg',
        }
      ]);
    }

    // 서울특별시교육청 마포평생학습관 아현분관 이미지
    const existingImages_13306194 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13306194'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13306194[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13306194' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200701_149/1593609546388NvTR8_JPEG/Fmu8y3ghIzyjtunV8LN4Qg6m.jpg',
        }
      ]);
    }

    // 솔틴비전센터(평화나루도서관 갤러리) 이미지
    const existingImages_1163763133 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1163763133'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1163763133[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1163763133' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220810_130/1660109544498A5l1J_JPEG/%BF%B0%BB%EA%B1%B3%C8%B8%C0%FC%B0%E620210701%28%B1%E8%BC%B1%C1%F6%29.jpg',
        }
      ]);
    }

    // 고래이야기 이미지
    const existingImages_36817347 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36817347'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36817347[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36817347' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200527_280/1590536335527rb9qo_JPEG/GZC-KLXkFXELSfpaPM6NfdwK.jpeg.jpg',
        }
      ]);
    }

    // 용마루어린이도서관 이미지
    const existingImages_1876693237 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1876693237'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1876693237[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1876693237' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241007_123/17282765319268AkyY_JPEG/2024_09_30_%BF%EB%B8%B6%B7%E7_%BE%EE%B8%B0%C0%CC_%B5%B5%BC%AD%B0%FC01.jpg',
        }
      ]);
    }

    // 손기정어린이도서관 이미지
    const existingImages_1113363839 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1113363839'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1113363839[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1113363839' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200611_6/1591842275336wRT0i_JPEG/o7ScG1G6zO7W7GJ_wcIetBNt.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1113363839' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200704_160/1593866324622WWMuW_JPEG/rOhWsjEJiOjJsJeJ0pKSgk-J.jpg',
        }
      ]);
    }

    // 청파어린이영어도서관 이미지
    const existingImages_13341352 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13341352'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13341352[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13341352' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200505_155/15886062063808JOO6_JPEG/WRV70Sy2G3X_DFR2-u8RzVms.jpg',
        }
      ]);
    }

    // 손기정문화도서관 이미지
    const existingImages_1061242345 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1061242345'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1061242345[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1061242345' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230201_82/1675233185460Kn46r_PNG/%BC%D5%B1%E2%C1%A41.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1061242345' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230201_154/1675233191121YgCnq_PNG/%BC%D5%B1%E2%C1%A42.png',
        }
      ]);
    }

    // 더다운 도서관 이미지
    const existingImages_1640869477 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1640869477'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1640869477[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1640869477' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241129_144/1732862866415QTlGV_JPEG/IMG_3559.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1640869477' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241129_203/1732863024454xk9CI_JPEG/IMG_3786.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 꿈을 이루는 작은도서관 카테고리 관계
    const existingCategories_32875971 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['32875971'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_32875971 = new Set(existingCategories_32875971.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_32875971 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_32875971) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_32875971.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '32875971' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포평생학습관아현분관스마트도서관 카테고리 관계
    const existingCategories_1034141951 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1034141951'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1034141951 = new Set(existingCategories_1034141951.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1034141951 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1034141951) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1034141951.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1034141951' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포구립 늘푸른소나무 작은도서관 카테고리 관계
    const existingCategories_33133585 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33133585'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33133585 = new Set(existingCategories_33133585.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33133585 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_33133585) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33133585.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33133585' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도화1동문고 카테고리 관계
    const existingCategories_11845213 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11845213'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11845213 = new Set(existingCategories_11845213.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11845213 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11845213) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11845213.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11845213' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도화동문고 카테고리 관계
    const existingCategories_36325315 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36325315'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36325315 = new Set(existingCategories_36325315.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36325315 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36325315) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36325315.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36325315' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공감홀작은도서관 카테고리 관계
    const existingCategories_36817242 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36817242'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36817242 = new Set(existingCategories_36817242.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36817242 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36817242) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36817242.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36817242' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포어린이영어도서관 카테고리 관계
    const existingCategories_18305605 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18305605'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18305605 = new Set(existingCategories_18305605.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18305605 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_18305605) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18305605.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18305605' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신공덕동문고 카테고리 관계
    const existingCategories_11845340 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11845340'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11845340 = new Set(existingCategories_11845340.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11845340 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11845340) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11845340.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11845340' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신덕교회도서관 카테고리 관계
    const existingCategories_36325141 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36325141'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36325141 = new Set(existingCategories_36325141.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36325141 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36325141) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36325141.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36325141' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // TheLogiSCMLibrary 카테고리 관계
    const existingCategories_1731331533 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1731331533'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1731331533 = new Set(existingCategories_1731331533.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1731331533 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1731331533) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1731331533.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1731331533' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아이도북센터 카테고리 관계
    const existingCategories_36325217 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36325217'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36325217 = new Set(existingCategories_36325217.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36325217 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36325217) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36325217.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36325217' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 복사골작은도서관 카테고리 관계
    const existingCategories_33133913 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33133913'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33133913 = new Set(existingCategories_33133913.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33133913 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_33133913) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33133913.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33133913' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 초록숲작은도서관 카테고리 관계
    const existingCategories_1371976674 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1371976674'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1371976674 = new Set(existingCategories_1371976674.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1371976674 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1371976674) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1371976674.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1371976674' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용강동작은도서관 카테고리 관계
    const existingCategories_36459747 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36459747'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36459747 = new Set(existingCategories_36459747.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36459747 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36459747) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36459747.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36459747' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포역스마트도서관 카테고리 관계
    const existingCategories_1026576440 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1026576440'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1026576440 = new Set(existingCategories_1026576440.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1026576440 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1026576440) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1026576440.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1026576440' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용강도도서관 카테고리 관계
    const existingCategories_1447707715 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1447707715'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1447707715 = new Set(existingCategories_1447707715.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1447707715 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1447707715) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1447707715.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1447707715' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 염산문고 카테고리 관계
    const existingCategories_36325263 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36325263'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36325263 = new Set(existingCategories_36325263.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36325263 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36325263) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36325263.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36325263' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 염리동문고 카테고리 관계
    const existingCategories_36325203 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36325203'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36325203 = new Set(existingCategories_36325203.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36325203 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36325203) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36325203.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36325203' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공덕1동문고 카테고리 관계
    const existingCategories_11845207 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11845207'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11845207 = new Set(existingCategories_11845207.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11845207 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11845207) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11845207.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11845207' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포소금나루도서관 카테고리 관계
    const existingCategories_1766485473 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1766485473'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1766485473 = new Set(existingCategories_1766485473.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1766485473 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1766485473) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1766485473.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1766485473' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아현1동문고 카테고리 관계
    const existingCategories_11845347 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11845347'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11845347 = new Set(existingCategories_11845347.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11845347 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11845347) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11845347.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11845347' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울특별시교육청 마포평생학습관 아현분관 카테고리 관계
    const existingCategories_13306194 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13306194'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13306194 = new Set(existingCategories_13306194.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13306194 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13306194) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13306194.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13306194' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 솔틴비전센터(평화나루도서관 갤러리) 카테고리 관계
    const existingCategories_1163763133 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1163763133'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1163763133 = new Set(existingCategories_1163763133.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1163763133 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1163763133) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1163763133.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1163763133' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창독서마당 카테고리 관계
    const existingCategories_36818121 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36818121'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36818121 = new Set(existingCategories_36818121.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36818121 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36818121) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36818121.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36818121' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 햇빛꿈이있는도서관 카테고리 관계
    const existingCategories_36332381 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36332381'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36332381 = new Set(existingCategories_36332381.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36332381 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36332381) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36332381.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36332381' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 솔로몬도서관 카테고리 관계
    const existingCategories_36325403 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36325403'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36325403 = new Set(existingCategories_36325403.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36325403 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36325403) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36325403.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36325403' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 고래이야기 카테고리 관계
    const existingCategories_36817347 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36817347'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36817347 = new Set(existingCategories_36817347.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36817347 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36817347) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36817347.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36817347' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대흥동문고 카테고리 관계
    const existingCategories_11845212 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11845212'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11845212 = new Set(existingCategories_11845212.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11845212 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11845212) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11845212.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11845212' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용마루어린이도서관 카테고리 관계
    const existingCategories_1876693237 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1876693237'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1876693237 = new Set(existingCategories_1876693237.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1876693237 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1876693237) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1876693237.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1876693237' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창사랑작은도서관 카테고리 관계
    const existingCategories_36332378 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36332378'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36332378 = new Set(existingCategories_36332378.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36332378 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36332378) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36332378.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36332378' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 북카페 두드림 카테고리 관계
    const existingCategories_36818122 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36818122'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36818122 = new Set(existingCategories_36818122.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36818122 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36818122) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36818122.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36818122' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 숙명여자대학교 도서관 카테고리 관계
    const existingCategories_11592563 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11592563'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11592563 = new Set(existingCategories_11592563.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11592563 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11592563) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11592563.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11592563' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 희망작은도서관 카테고리 관계
    const existingCategories_1435550173 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1435550173'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1435550173 = new Set(existingCategories_1435550173.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1435550173 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1435550173) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1435550173.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1435550173' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서강대학교 로욜라 도서관 카테고리 관계
    const existingCategories_11592558 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11592558'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11592558 = new Set(existingCategories_11592558.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11592558 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11592558) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11592558.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11592558' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아현역스마트도서관 카테고리 관계
    const existingCategories_1135663232 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1135663232'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1135663232 = new Set(existingCategories_1135663232.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1135663232 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1135663232) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1135663232.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1135663232' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 손기정어린이도서관 카테고리 관계
    const existingCategories_1113363839 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1113363839'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1113363839 = new Set(existingCategories_1113363839.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1113363839 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1113363839) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1113363839.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1113363839' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청파어린이영어도서관 카테고리 관계
    const existingCategories_13341352 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13341352'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13341352 = new Set(existingCategories_13341352.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13341352 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13341352) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13341352.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13341352' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 손기정문화도서관 카테고리 관계
    const existingCategories_1061242345 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1061242345'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1061242345 = new Set(existingCategories_1061242345.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1061242345 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1061242345) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1061242345.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1061242345' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 구립청파도서관 카테고리 관계
    const existingCategories_13286790 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13286790'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13286790 = new Set(existingCategories_13286790.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13286790 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13286790) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13286790.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13286790' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울비젼문고 카테고리 관계
    const existingCategories_36332376 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36332376'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36332376 = new Set(existingCategories_36332376.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36332376 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36332376) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36332376.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36332376' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용산꿈나무도서관 카테고리 관계
    const existingCategories_1646471548 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1646471548'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1646471548 = new Set(existingCategories_1646471548.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1646471548 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1646471548) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1646471548.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1646471548' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 북아현마을 북카페 카테고리 관계
    const existingCategories_36818238 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36818238'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36818238 = new Set(existingCategories_36818238.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36818238 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36818238) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36818238.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36818238' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 해오름작은도서관 카테고리 관계
    const existingCategories_33133577 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33133577'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33133577 = new Set(existingCategories_33133577.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33133577 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_33133577) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33133577.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33133577' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 노고산동문고 카테고리 관계
    const existingCategories_11845209 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11845209'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11845209 = new Set(existingCategories_11845209.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11845209 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11845209) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11845209.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11845209' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신수동문고 카테고리 관계
    const existingCategories_36325411 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36325411'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36325411 = new Set(existingCategories_36325411.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36325411 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36325411) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36325411.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36325411' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 더다운 도서관 카테고리 관계
    const existingCategories_1640869477 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1640869477'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1640869477 = new Set(existingCategories_1640869477.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1640869477 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1640869477) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1640869477.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1640869477' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 연세대학교 의학도서관 카테고리 관계
    const existingCategories_1766706349 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1766706349'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1766706349 = new Set(existingCategories_1766706349.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1766706349 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1766706349) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1766706349.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1766706349' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용산e편한세상 북카페 카테고리 관계
    const existingCategories_36817348 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36817348'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36817348 = new Set(existingCategories_36817348.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36817348 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36817348) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36817348.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36817348' LIMIT 1)`),
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
