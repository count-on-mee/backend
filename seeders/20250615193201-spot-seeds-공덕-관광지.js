'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 관광지
 * 생성일시: 2025-06-15T10:32:09.317Z
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
        name: '경의선광장',
        address: '서울 마포구 염리동 백범로28길 17',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5445517 126.9477684)',
        4326
        ),
        naver_spot_id: '38258804',
        review_count: 6,
        review_score: null,
      },
      {
        name: '공덕동족발골목',
        address: '서울 마포구 공덕동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5447951 126.9530548)',
        4326
        ),
        naver_spot_id: '20743661',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포전골목',
        address: '서울 마포구 공덕동 만리재로 19',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5449527 126.9538051)',
        4326
        ),
        naver_spot_id: '35418674',
        review_count: 0,
        review_score: null,
      },
      {
        name: '잼플레이스',
        address: '서울 마포구 공덕동 마포대로 144 (마포T타운) 1층',
        tel: '0507-1421-0073',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5469457 126.9535876)',
        4326
        ),
        naver_spot_id: '1784802388',
        review_count: 0,
        review_score: null,
      },
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
        name: '백범김구기념관',
        address: '서울 용산구 효창동 임정로 26 백범김구기념관',
        tel: '02-799-3400',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5442417 126.9592773)',
        4326
        ),
        naver_spot_id: '12145357',
        review_count: 96,
        review_score: null,
      },
      {
        name: '서울특별시서부공원녹지사업소 경의선숲길공원 커뮤니티센터',
        address: '서울 마포구 도화동 새창로 37',
        tel: '02-719-8830',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5416651 126.9540882)',
        4326
        ),
        naver_spot_id: '1554525191',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포갈매기골목',
        address: '서울 마포구 도화동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5418218 126.9507304)',
        4326
        ),
        naver_spot_id: '36343556',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공덕소담길',
        address: '서울 마포구 공덕동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5476566 126.9548283)',
        4326
        ),
        naver_spot_id: '1795100109',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공덕소공원',
        address: '서울 마포구 공덕동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.548735 126.9546784)',
        4326
        ),
        naver_spot_id: '1892397617',
        review_count: 9,
        review_score: null,
      },
      {
        name: '도화동상점가',
        address: '서울 마포구 도화동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5402706 126.9482378)',
        4326
        ),
        naver_spot_id: '21714815',
        review_count: 8,
        review_score: null,
      },
      {
        name: '공덕리금표',
        address: '서울 마포구 공덕동 마포대로 109',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5449352 126.9506002)',
        4326
        ),
        naver_spot_id: '1253519582',
        review_count: 1,
        review_score: null,
      },
      {
        name: '대원군별장아소정터',
        address: '서울 마포구 염리동 백범로 139',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5458244 126.9471553)',
        4326
        ),
        naver_spot_id: '1257827724',
        review_count: 4,
        review_score: null,
      },
      {
        name: '품위있는어른세상',
        address: '서울 마포구 도화동 독막로 320',
        tel: '02-6352-2845',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5429883 126.9478769)',
        4326
        ),
        naver_spot_id: '1213181344',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아자스쿨',
        address: '서울 마포구 공덕동 백범로31길 21 서울창업허브',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5466768 126.9497275)',
        4326
        ),
        naver_spot_id: '38729099',
        review_count: 12,
        review_score: 4,
      },
      {
        name: '마포걷고싶은길3코스(마포나루길)',
        address: '서울 마포구 염리동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5429271 126.9438762)',
        4326
        ),
        naver_spot_id: '1992419673',
        review_count: 1,
        review_score: null,
      },
      {
        name: '경성감옥 터',
        address: '서울 마포구 공덕동 마포대로 174',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5496735 126.9552904)',
        4326
        ),
        naver_spot_id: '1230004008',
        review_count: 0,
        review_score: null,
      },
      {
        name: '바바그라운드',
        address: '서울 마포구 공덕동 마포대로 122 프론트원 13층',
        tel: '0507-1346-1917',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5453949 126.9525692)',
        4326
        ),
        naver_spot_id: '1382018372',
        review_count: 9,
        review_score: null,
      },
      {
        name: '김익상집터',
        address: '서울 마포구 공덕동 마포대로7길 22',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.547963 126.9529016)',
        4326
        ),
        naver_spot_id: '1803061975',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명성종합레저타운',
        address: '서울 마포구 공덕동 만리재로 14',
        tel: '02-766-4000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5440022 126.9528911)',
        4326
        ),
        naver_spot_id: '1770752884',
        review_count: 0,
        review_score: null,
      },
      {
        name: '유명산 숲학교',
        address: '서울 마포구 도화동 큰우물로 76',
        tel: '070-7757-0049',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5408027 126.9459541)',
        4326
        ),
        naver_spot_id: '12080715',
        review_count: 0,
        review_score: null,
      },
      {
        name: '백범김구묘역',
        address: '서울 용산구 효창동 효창원로 177-18',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5452538 126.9594882)',
        4326
        ),
        naver_spot_id: '31161993',
        review_count: 3,
        review_score: null,
      },
      {
        name: '효창공원배드민턴장',
        address: '서울 용산구 효창동 임정로 54 (사)대한노인회 중앙회',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5438246 126.9582452)',
        4326
        ),
        naver_spot_id: '1601777254',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창공원 게이트볼장',
        address: '서울 용산구 효창동 임정로 54',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5438774 126.95825)',
        4326
        ),
        naver_spot_id: '1829537722',
        review_count: 0,
        review_score: null,
      },
      {
        name: '다시쓰는유럽',
        address: '서울 마포구 도화동 큰우물로 76 4층',
        tel: '0507-1381-7331',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5408037 126.9459479)',
        4326
        ),
        naver_spot_id: '1580341027',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창공원백범김구묘역',
        address: '서울 용산구 효창동 임정로 58',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5452239 126.9594769)',
        4326
        ),
        naver_spot_id: '31875129',
        review_count: 1,
        review_score: null,
      },
      {
        name: '효창공원반공투사위령탑',
        address: '서울 용산구 효창동 효창원로 177-18',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5458941 126.9600224)',
        4326
        ),
        naver_spot_id: '31161992',
        review_count: 1,
        review_score: null,
      },
      {
        name: '블루라이프',
        address: '서울 마포구 공덕동 마포대로16길 8 302호',
        tel: '02-6326-6651',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5507505 126.9563309)',
        4326
        ),
        naver_spot_id: '13401797',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창공원의열사',
        address: '서울 용산구 효창동 효창원로 177-18',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.545328 126.9605329)',
        4326
        ),
        naver_spot_id: '18721077',
        review_count: 7,
        review_score: null,
      },
      {
        name: '쌍룡산근린공원',
        address: '서울 마포구 아현동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5527962 126.9504197)',
        4326
        ),
        naver_spot_id: '37046727',
        review_count: 4,
        review_score: null,
      },
      {
        name: '경의선공원',
        address: '서울 마포구 대흥동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5462736 126.943193)',
        4326
        ),
        naver_spot_id: '21440517',
        review_count: 25,
        review_score: 4.25,
      },
      {
        name: '효창공원 이봉창의사동상',
        address: '서울 용산구 효창동 효창원로 177-18',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5446914 126.9606266)',
        4326
        ),
        naver_spot_id: '1794990085',
        review_count: 1,
        review_score: null,
      },
      {
        name: '정구중가옥',
        address: '서울 마포구 용강동 큰우물로2길 22',
        tel: '02-7316-4349',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5430669 126.9418525)',
        4326
        ),
        naver_spot_id: '36932246',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창6소공원',
        address: '서울 용산구 효창동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5482837 126.9631118)',
        4326
        ),
        naver_spot_id: '1690926453',
        review_count: 1,
        review_score: null,
      },
      {
        name: '효창공원삼의사묘역',
        address: '서울 용산구 효창동 효창원로 177-18',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5453363 126.9614868)',
        4326
        ),
        naver_spot_id: '31161990',
        review_count: 7,
        review_score: null,
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
        name: '마포음식문화거리',
        address: '서울 마포구 용강동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5417771 126.9410248)',
        4326
        ),
        naver_spot_id: '31397224',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용산구_1711-03서울유아숲체험장',
        address: '서울 용산구 효창동 효창원로 177-18 효창공원',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.545534 126.9622304)',
        4326
        ),
        naver_spot_id: '1430820682',
        review_count: 89,
        review_score: 4.24,
      },
      {
        name: '아현공원',
        address: '서울 마포구 아현동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5528574 126.9567925)',
        4326
        ),
        naver_spot_id: '18764547',
        review_count: 8,
        review_score: null,
      },
      {
        name: '효창공원관리사무소',
        address: '서울 용산구 효창동 효창원로 177-18',
        tel: '02-2199-8820',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5449574 126.962291)',
        4326
        ),
        naver_spot_id: '36919836',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포전차종점(3.1운동만세시위지)',
        address: '서울 마포구 마포동 마포대로 20 다보빌딩',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5383296 126.9448368)',
        4326
        ),
        naver_spot_id: '1172302841',
        review_count: 5,
        review_score: null,
      },
      {
        name: '용강동상점가',
        address: '서울 마포구 용강동 토정로 277',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5421598 126.9406383)',
        4326
        ),
        naver_spot_id: '21714796',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창공원원효대사동상',
        address: '서울 용산구 효창동 효창원로 177-18 효창공원',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.545449 126.9630271)',
        4326
        ),
        naver_spot_id: '1533658663',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창공원 배드민턴장',
        address: '서울 용산구 청파동2가 효창원로 177-18',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5449243 126.9628127)',
        4326
        ),
        naver_spot_id: '1617695258',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창공원농구장',
        address: '서울 용산구 효창동 효창원로 177-18 효창공원',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450252 126.963328)',
        4326
        ),
        naver_spot_id: '1788669264',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창공원음수대',
        address: '서울 용산구 효창동 효창원로 177-18 효창공원',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5443483 126.9623838)',
        4326
        ),
        naver_spot_id: '1230838346',
        review_count: 1,
        review_score: null,
      },
      {
        name: '효창공원 농구장',
        address: '서울 용산구 청파동2가 효창원로 177-18',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450148 126.9631518)',
        4326
        ),
        naver_spot_id: '1389938638',
        review_count: 0,
        review_score: null,
      },
      {
        name: '효창공원임정요인묘역',
        address: '서울 용산구 청파동2가',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5443827 126.962784)',
        4326
        ),
        naver_spot_id: '31161991',
        review_count: 6,
        review_score: null,
      },
      {
        name: '효창공원어린이놀이터',
        address: '서울 용산구 효창동 효창원로 177-18 효창공원',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5447419 126.9632646)',
        4326
        ),
        naver_spot_id: '1851121171',
        review_count: 0,
        review_score: null,
      },
      {
        name: '염리동소금길',
        address: '서울 마포구 염리동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5542842 126.9486624)',
        4326
        ),
        naver_spot_id: '37873304',
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

    // 경의선광장 이미지
    const existingImages_38258804 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38258804'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38258804[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38258804' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20160628_149/1467095964800Ow4oK_JPEG/176578556940_0.JPG',
        }
      ]);
    }

    // 마포전골목 이미지
    const existingImages_35418674 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35418674'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35418674[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35418674' LIMIT 1)`),
          img_url: 'http://blogfiles.naver.net/MjAxODAxMDFfMjM0/MDAxNTE0Nzk5NTY5MjQ2.U8h4dDoBWT2r70Gkm_mTrwLteAEm22JWUZiPl7Zas1sg.pAIklpZFH_nJgZloEBztKIeR-aJ38NwpIzL4hZKm6WEg.JPEG.kaite1130/IMG_3375.JPG#740x740',
        }
      ]);
    }

    // 잼플레이스 이미지
    const existingImages_1784802388 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1784802388'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1784802388[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1784802388' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240709_192/1720517405709Wv8rl_JPEG/C0083T01.JPG',
        }
      ]);
    }

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

    // 백범김구기념관 이미지
    const existingImages_12145357 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12145357'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12145357[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12145357' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220126_203/1643158639604bdQFP_JPEG/1.jpg',
        }
      ]);
    }

    // 서울특별시서부공원녹지사업소 경의선숲길공원 커뮤니티센터 이미지
    const existingImages_1554525191 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1554525191'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1554525191[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1554525191' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20180205_144/1517805295288JRyOT_JPEG/9v6vZR5etam8sMZvpH7u8-nY.JPG.jpg',
        }
      ]);
    }

    // 공덕리금표 이미지
    const existingImages_1253519582 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1253519582'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1253519582[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1253519582' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230424_288/1682316880274InFnd_JPEG/20230424_150554.jpg',
        }
      ]);
    }

    // 경성감옥 터 이미지
    const existingImages_1230004008 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1230004008'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1230004008[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1230004008' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230520_230/16845125796501yYq5_JPEG/%B0%E6%BC%BA%B0%A8%BF%C1_%C5%CD4.jpg',
        }
      ]);
    }

    // 바바그라운드 이미지
    const existingImages_1382018372 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1382018372'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1382018372[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1382018372' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221226_234/1672035843683fGSgf_JPEG/123421.jpg',
        }
      ]);
    }

    // 유명산 숲학교 이미지
    const existingImages_12080715 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12080715'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12080715[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12080715' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20170807_68/1502100979439VULaO_GIF/186757594638390_0.gif',
        }
      ]);
    }

    // 효창공원의열사 이미지
    const existingImages_18721077 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18721077'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18721077[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18721077' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190918_105/1568815366944wuAdl_JPEG/qDYDjfVWDiqLlrMfh1LMHrUB.jpg',
        }
      ]);
    }

    // 염리동소금길 이미지
    const existingImages_37873304 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37873304'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37873304[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37873304' LIMIT 1)`),
          img_url: 'http://blogfiles.naver.net/MjAxNjEyMjlfMjY2/MDAxNDgyOTk2MjAyODUy.sRn722sS_Bp2cZEXLfsGNFS-Yg0FGrJqecqceHjYJ10g.z1dzr93XqQ7W6wNIfc4X-DABbiCmqoQ3cCb7jvJNNNgg.JPEG.jib8949/IMG_0104.JPG#740x495',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 공덕동족발골목 카테고리 관계
    const existingCategories_20743661 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20743661'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20743661 = new Set(existingCategories_20743661.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20743661 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_20743661) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20743661.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20743661' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포전골목 카테고리 관계
    const existingCategories_35418674 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35418674'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35418674 = new Set(existingCategories_35418674.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35418674 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_35418674) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35418674.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35418674' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 잼플레이스 카테고리 관계
    const existingCategories_1784802388 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1784802388'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1784802388 = new Set(existingCategories_1784802388.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1784802388 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1784802388) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1784802388.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1784802388' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

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

    // 백범김구기념관 카테고리 관계
    const existingCategories_12145357 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12145357'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12145357 = new Set(existingCategories_12145357.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12145357 = [...new Set([
      '관광지',
      '역사'
    ])];

    for (const category of uniqueCategories_12145357) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12145357.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12145357' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울특별시서부공원녹지사업소 경의선숲길공원 커뮤니티센터 카테고리 관계
    const existingCategories_1554525191 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1554525191'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1554525191 = new Set(existingCategories_1554525191.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1554525191 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1554525191) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1554525191.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1554525191' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포갈매기골목 카테고리 관계
    const existingCategories_36343556 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36343556'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36343556 = new Set(existingCategories_36343556.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36343556 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_36343556) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36343556.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36343556' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공덕소담길 카테고리 관계
    const existingCategories_1795100109 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1795100109'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1795100109 = new Set(existingCategories_1795100109.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1795100109 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1795100109) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1795100109.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1795100109' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공덕소공원 카테고리 관계
    const existingCategories_1892397617 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1892397617'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1892397617 = new Set(existingCategories_1892397617.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1892397617 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1892397617) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1892397617.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1892397617' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도화동상점가 카테고리 관계
    const existingCategories_21714815 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21714815'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21714815 = new Set(existingCategories_21714815.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21714815 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_21714815) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21714815.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21714815' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공덕리금표 카테고리 관계
    const existingCategories_1253519582 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1253519582'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1253519582 = new Set(existingCategories_1253519582.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1253519582 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1253519582) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1253519582.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1253519582' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대원군별장아소정터 카테고리 관계
    const existingCategories_1257827724 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1257827724'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1257827724 = new Set(existingCategories_1257827724.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1257827724 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1257827724) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1257827724.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1257827724' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 품위있는어른세상 카테고리 관계
    const existingCategories_1213181344 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1213181344'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1213181344 = new Set(existingCategories_1213181344.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1213181344 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1213181344) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1213181344.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1213181344' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아자스쿨 카테고리 관계
    const existingCategories_38729099 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38729099'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38729099 = new Set(existingCategories_38729099.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38729099 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_38729099) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38729099.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38729099' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포걷고싶은길3코스(마포나루길) 카테고리 관계
    const existingCategories_1992419673 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1992419673'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1992419673 = new Set(existingCategories_1992419673.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1992419673 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1992419673) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1992419673.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1992419673' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 경성감옥 터 카테고리 관계
    const existingCategories_1230004008 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1230004008'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1230004008 = new Set(existingCategories_1230004008.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1230004008 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1230004008) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1230004008.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1230004008' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 바바그라운드 카테고리 관계
    const existingCategories_1382018372 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1382018372'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1382018372 = new Set(existingCategories_1382018372.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1382018372 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1382018372) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1382018372.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1382018372' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 김익상집터 카테고리 관계
    const existingCategories_1803061975 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1803061975'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1803061975 = new Set(existingCategories_1803061975.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1803061975 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1803061975) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1803061975.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1803061975' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 유명산 숲학교 카테고리 관계
    const existingCategories_12080715 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12080715'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12080715 = new Set(existingCategories_12080715.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12080715 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_12080715) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12080715.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12080715' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 백범김구묘역 카테고리 관계
    const existingCategories_31161993 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31161993'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_31161993 = new Set(existingCategories_31161993.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_31161993 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_31161993) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_31161993.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31161993' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원배드민턴장 카테고리 관계
    const existingCategories_1601777254 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1601777254'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1601777254 = new Set(existingCategories_1601777254.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1601777254 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1601777254) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1601777254.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1601777254' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원 게이트볼장 카테고리 관계
    const existingCategories_1829537722 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1829537722'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1829537722 = new Set(existingCategories_1829537722.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1829537722 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1829537722) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1829537722.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1829537722' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원백범김구묘역 카테고리 관계
    const existingCategories_31875129 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31875129'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_31875129 = new Set(existingCategories_31875129.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_31875129 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_31875129) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_31875129.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31875129' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 블루라이프 카테고리 관계
    const existingCategories_13401797 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13401797'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13401797 = new Set(existingCategories_13401797.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13401797 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_13401797) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13401797.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13401797' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원의열사 카테고리 관계
    const existingCategories_18721077 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18721077'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18721077 = new Set(existingCategories_18721077.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18721077 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_18721077) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18721077.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18721077' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 쌍룡산근린공원 카테고리 관계
    const existingCategories_37046727 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37046727'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37046727 = new Set(existingCategories_37046727.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37046727 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_37046727) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37046727.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37046727' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 경의선공원 카테고리 관계
    const existingCategories_21440517 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21440517'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21440517 = new Set(existingCategories_21440517.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21440517 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_21440517) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21440517.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21440517' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원 이봉창의사동상 카테고리 관계
    const existingCategories_1794990085 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1794990085'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1794990085 = new Set(existingCategories_1794990085.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1794990085 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1794990085) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1794990085.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1794990085' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 정구중가옥 카테고리 관계
    const existingCategories_36932246 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36932246'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36932246 = new Set(existingCategories_36932246.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36932246 = [...new Set([
      '복합 문화 공간',
      '관광지'
    ])];

    for (const category of uniqueCategories_36932246) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36932246.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36932246' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창6소공원 카테고리 관계
    const existingCategories_1690926453 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1690926453'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1690926453 = new Set(existingCategories_1690926453.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1690926453 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1690926453) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1690926453.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1690926453' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원삼의사묘역 카테고리 관계
    const existingCategories_31161990 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31161990'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_31161990 = new Set(existingCategories_31161990.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_31161990 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_31161990) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_31161990.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31161990' LIMIT 1)`),
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

    // 마포음식문화거리 카테고리 관계
    const existingCategories_31397224 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31397224'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_31397224 = new Set(existingCategories_31397224.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_31397224 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_31397224) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_31397224.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31397224' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용산구_1711-03서울유아숲체험장 카테고리 관계
    const existingCategories_1430820682 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1430820682'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1430820682 = new Set(existingCategories_1430820682.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1430820682 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1430820682) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1430820682.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1430820682' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아현공원 카테고리 관계
    const existingCategories_18764547 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18764547'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18764547 = new Set(existingCategories_18764547.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18764547 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18764547) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18764547.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18764547' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원관리사무소 카테고리 관계
    const existingCategories_36919836 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36919836'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36919836 = new Set(existingCategories_36919836.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36919836 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_36919836) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36919836.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36919836' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포전차종점(3.1운동만세시위지) 카테고리 관계
    const existingCategories_1172302841 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1172302841'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1172302841 = new Set(existingCategories_1172302841.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1172302841 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1172302841) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1172302841.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1172302841' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용강동상점가 카테고리 관계
    const existingCategories_21714796 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21714796'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21714796 = new Set(existingCategories_21714796.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21714796 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_21714796) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21714796.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21714796' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원원효대사동상 카테고리 관계
    const existingCategories_1533658663 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1533658663'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1533658663 = new Set(existingCategories_1533658663.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1533658663 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1533658663) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1533658663.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1533658663' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원 배드민턴장 카테고리 관계
    const existingCategories_1617695258 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1617695258'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1617695258 = new Set(existingCategories_1617695258.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1617695258 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1617695258) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1617695258.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1617695258' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원농구장 카테고리 관계
    const existingCategories_1788669264 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1788669264'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1788669264 = new Set(existingCategories_1788669264.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1788669264 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1788669264) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1788669264.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1788669264' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원음수대 카테고리 관계
    const existingCategories_1230838346 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1230838346'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1230838346 = new Set(existingCategories_1230838346.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1230838346 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1230838346) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1230838346.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1230838346' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원 농구장 카테고리 관계
    const existingCategories_1389938638 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1389938638'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1389938638 = new Set(existingCategories_1389938638.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1389938638 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1389938638) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1389938638.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1389938638' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원임정요인묘역 카테고리 관계
    const existingCategories_31161991 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31161991'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_31161991 = new Set(existingCategories_31161991.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_31161991 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_31161991) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_31161991.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31161991' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 효창공원어린이놀이터 카테고리 관계
    const existingCategories_1851121171 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1851121171'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1851121171 = new Set(existingCategories_1851121171.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1851121171 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1851121171) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1851121171.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1851121171' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 염리동소금길 카테고리 관계
    const existingCategories_37873304 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37873304'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37873304 = new Set(existingCategories_37873304.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37873304 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_37873304) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37873304.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37873304' LIMIT 1)`),
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
