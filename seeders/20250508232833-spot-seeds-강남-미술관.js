'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 미술관
 * 생성일시: 2025-05-08T14:28:41.020Z
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
        name: '마이아트뮤지엄',
        address: '서울 강남구 대치동 테헤란로 518 섬유센터빌딩 B1층',
        tel: '02-567-8878',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5075923 127.0604816)',
        4326
        ),
        naver_spot_id: '1035412616',
        review_count: 2,
        review_score: null,
      },
      {
        name: '송은',
        address: '서울 강남구 청담동 도산대로 441',
        tel: '0507-1466-0259',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5241628 127.0441206)',
        4326
        ),
        naver_spot_id: '13558974',
        review_count: 2,
        review_score: null,
      },
      {
        name: 'K현대미술관',
        address: '서울 강남구 신사동 선릉로 807 K현대미술관',
        tel: '0507-1405-0952',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5242986 127.0390957)',
        4326
        ),
        naver_spot_id: '123980096',
        review_count: 1,
        review_score: null,
      },
      {
        name: '포스코미술관',
        address: '서울 강남구 대치동 테헤란로 440 지하1층',
        tel: '02-3457-1665',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.505783 127.0558659)',
        4326
        ),
        naver_spot_id: '11785858',
        review_count: 8,
        review_score: null,
      },
      {
        name: '에스파스 루이 비통 서울',
        address: '서울 강남구 청담동 압구정로 454 루이 비통 메종 서울 4층',
        tel: '02-3432-1854',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.525626 127.0462434)',
        4326
        ),
        naver_spot_id: '1275364153',
        review_count: 222,
        review_score: null,
      },
      {
        name: '플랫폼엘',
        address: '서울 강남구 논현동 언주로133길 11',
        tel: '02-6929-4470',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5161707 127.0342941)',
        4326
        ),
        naver_spot_id: '37620674',
        review_count: 278,
        review_score: null,
      },
      {
        name: '화이트 큐브 서울',
        address: '서울 강남구 신사동 도산대로45길 6',
        tel: '0507-1430-9094',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5228375 127.0363088)',
        4326
        ),
        naver_spot_id: '1024484292',
        review_count: 0,
        review_score: null,
      },
      {
        name: '밀알미술관',
        address: '서울 강남구 일원동 일원로 90 밀알학교',
        tel: '02-3412-0061',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4859382 127.0822266)',
        4326
        ),
        naver_spot_id: '19570302',
        review_count: 2,
        review_score: null,
      },
      {
        name: '에스투에이',
        address: '서울 강남구 대치동 영동대로 325 1층, S2A',
        tel: '02-6252-7777',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5033344 127.0655457)',
        4326
        ),
        naver_spot_id: '1191783554',
        review_count: 34,
        review_score: null,
      },
      {
        name: '오치균미술관',
        address: '서울 강남구 신사동 논현로159길 34 Oh Musuem of Art',
        tel: '02-6205-9411',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5227357 127.0253064)',
        4326
        ),
        naver_spot_id: '1158995940',
        review_count: 0,
        review_score: null,
      },
      {
        name: '131갤러리',
        address: '서울 강남구 신사동 논현로159길 34 4층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5226113 127.0252985)',
        4326
        ),
        naver_spot_id: '1336506265',
        review_count: 0,
        review_score: null,
      },
      {
        name: 'Oh Museum of Art',
        address: '서울 강남구 신사동 논현로159길 34 오뮤지엄오브아트',
        tel: '02-515-9411',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5227351 127.0252921)',
        4326
        ),
        naver_spot_id: '1117801240',
        review_count: 1,
        review_score: null,
      },
      {
        name: '스타갤러리',
        address: '서울 강남구 신사동 도산대로 335 14층',
        tel: '0507-1414-0878',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5233726 127.03852)',
        4326
        ),
        naver_spot_id: '37114200',
        review_count: 3,
        review_score: null,
      },
      {
        name: '에스티에스',
        address: '서울 강남구 역삼동 테헤란로4길 45 지하1층',
        tel: '02-555-7150',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.495495 127.0310749)',
        4326
        ),
        naver_spot_id: '1848469710',
        review_count: 0,
        review_score: null,
      },
      {
        name: '문암미술관',
        address: '서울 강남구 도곡동 도곡로18길 13',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4904269 127.03828)',
        4326
        ),
        naver_spot_id: '944574139',
        review_count: 1,
        review_score: null,
      },
      {
        name: '선&석 갤러리미술관',
        address: '서울 강남구 역삼동 논현로 534',
        tel: '070-4153-2905',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5041297 127.0358471)',
        4326
        ),
        naver_spot_id: '1004026322',
        review_count: 0,
        review_score: null,
      },
      {
        name: '갤러리브릭스',
        address: '서울 강남구 역삼동 논현로99길 14',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.503824 127.03419)',
        4326
        ),
        naver_spot_id: '1035140440',
        review_count: 2,
        review_score: null,
      },
      {
        name: '청담아트센터',
        address: '서울 강남구 청담동 도산대로81길 51',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5270494 127.0457406)',
        4326
        ),
        naver_spot_id: '637447632',
        review_count: 6,
        review_score: null,
      },
      {
        name: '러브유어디포 강남파빌리온',
        address: '서울 강남구 수서동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.484117 127.0957699)',
        4326
        ),
        naver_spot_id: '1993015068',
        review_count: 1,
        review_score: null,
      },
      {
        name: '리움미술관',
        address: '서울 용산구 한남동 이태원로55길 60-16',
        tel: '02-2014-6900',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5380141 126.9994097)',
        4326
        ),
        naver_spot_id: '11582919',
        review_count: 420,
        review_score: null,
      },
      {
        name: '디뮤지엄',
        address: '서울 성동구 성수동1가 왕십리로 83-21 디뮤지엄',
        tel: '02-6233-7200',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.543826 127.0442175)',
        4326
        ),
        naver_spot_id: '36992369',
        review_count: 3,
        review_score: null,
      },
      {
        name: '소마미술관',
        address: '서울 송파구 방이동 올림픽로 424',
        tel: '02-425-1077',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5169172 127.1179749)',
        4326
        ),
        naver_spot_id: '11785944',
        review_count: 406,
        review_score: null,
      },
      {
        name: 'K&L 뮤지엄',
        address: '과천 과천동 뒷골2로 19 K&L MUSEUM',
        tel: '0507-1421-8116',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4543686 127.0017989)',
        4326
        ),
        naver_spot_id: '1250642070',
        review_count: 65,
        review_score: null,
      },
      {
        name: '예술의전당한가람디자인미술관',
        address: '서울 서초구 서초동 남부순환로 2406',
        tel: '1668-1352',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4798436 127.0127084)',
        4326
        ),
        naver_spot_id: '13549528',
        review_count: 179,
        review_score: null,
      },
      {
        name: '롯데뮤지엄',
        address: '서울 송파구 신천동 올림픽로 300 롯데월드타워 7층',
        tel: '02-1544-7744',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.512492 127.102829)',
        4326
        ),
        naver_spot_id: '1000381360',
        review_count: 4,
        review_score: null,
      },
      {
        name: '넥스트 뮤지엄',
        address: '서울 송파구 신천동 올림픽로 300 롯데월드몰 2층 넥스트뮤지엄',
        tel: '02-425-3332',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5134524 127.1029911)',
        4326
        ),
        naver_spot_id: '1854075589',
        review_count: 286,
        review_score: null,
      },
      {
        name: '갤러리바톤',
        address: '서울 용산구 한남동 독서당로 116 1층',
        tel: '02-597-5701',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5364251 127.0121759)',
        4326
        ),
        naver_spot_id: '34714075',
        review_count: 142,
        review_score: null,
      },
      {
        name: '한원미술관',
        address: '서울 서초구 서초동 남부순환로 2423 한원빌딩 본관 B1F',
        tel: '0507-1402-5642',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4817537 127.0153203)',
        4326
        ),
        naver_spot_id: '11620360',
        review_count: 0,
        review_score: null,
      },
      {
        name: 'Kontemporary1',
        address: '서울 용산구 한남동 이태원로54길 48',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5363466 127.0012899)',
        4326
        ),
        naver_spot_id: '1241089043',
        review_count: 119,
        review_score: null,
      },
      {
        name: '한전갤러리',
        address: '서울 서초구 서초동 효령로72길 60 한전아트센터 1층',
        tel: '02-3456-7970',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4858412 127.0279546)',
        4326
        ),
        naver_spot_id: '11785927',
        review_count: 267,
        review_score: null,
      },
      {
        name: '뮤지엄한미 방이',
        address: '서울 송파구 방이동 위례성대로 14 19층',
        tel: '02-418-1315',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5166031 127.1139677)',
        4326
        ),
        naver_spot_id: '11785954',
        review_count: 62,
        review_score: null,
      },
      {
        name: '송파구립 예송미술관',
        address: '서울 송파구 삼전동 백제고분로 242 송파구민회관 1층 예송미술관',
        tel: '0507-1411-3579',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5023664 127.0935189)',
        4326
        ),
        naver_spot_id: '37069948',
        review_count: 0,
        review_score: null,
      },
      {
        name: '유리지공예관',
        address: '서울 서초구 우면동 중앙로 555',
        tel: '02-578-6663',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4577928 127.0123282)',
        4326
        ),
        naver_spot_id: '11665595',
        review_count: 0,
        review_score: null,
      },
      {
        name: '부띠크모나코뮤지엄',
        address: '서울 서초구 서초동 서초대로 397 지하 1층 부띠크모나코뮤지엄',
        tel: '02-535-5844',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.497345 127.02449)',
        4326
        ),
        naver_spot_id: '110051033',
        review_count: 4,
        review_score: null,
      },
      {
        name: '샘미술관',
        address: '서울 서초구 서초동 서초중앙로 96 사향융합체육관 1층',
        tel: '02-3475-2490',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4893223 127.0169358)',
        4326
        ),
        naver_spot_id: '1997730041',
        review_count: 2,
        review_score: null,
      },
      {
        name: '공간유보',
        address: '서울 송파구 풍납동 바람드리길 14 지하1층',
        tel: '0507-1325-9504',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5379221 127.1174646)',
        4326
        ),
        naver_spot_id: '1509540682',
        review_count: 0,
        review_score: null,
      },
      {
        name: 'LIG아트스페이스',
        address: '서울 용산구 한남동 대사관로11길 30',
        tel: '02-6405-5700',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5349159 127.0018533)',
        4326
        ),
        naver_spot_id: '13437741',
        review_count: 0,
        review_score: null,
      },
      {
        name: '예술의전당디자인미술관',
        address: '서울 서초구 서초동 남부순환로 2406 예술의전당',
        tel: '1668-1352',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4798511 127.0128419)',
        4326
        ),
        naver_spot_id: '37591725',
        review_count: 29,
        review_score: null,
      },
      {
        name: '생각꿈틀미술관',
        address: '서울 서초구 양재동 동산로13길 35',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4724341 127.0433439)',
        4326
        ),
        naver_spot_id: '18751385',
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

    // 마이아트뮤지엄 이미지
    const existingImages_1035412616 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1035412616'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1035412616[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1035412616' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190902_263/1567400150935lT0nN_JPEG/EkOiRmENoFIYHIiLxwWUyplL.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1035412616' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250212_211/1739328655668vEWrX_JPEG/%28%BC%F6%C1%A4%29%B9%AB%C7%CF%C6%F7%BD%BA%C5%CD_%BF%C2%B6%F3%C0%CE%BF%EB.jpg',
        }
      ]);
    }

    // 송은 이미지
    const existingImages_13558974 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13558974'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13558974[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13558974' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210913_234/1631502223110sYb86_JPEG/1._ST__SongEun_Building.jpg',
        }
      ]);
    }

    // K현대미술관 이미지
    const existingImages_123980096 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['123980096'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_123980096[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '123980096' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180523_222/1527052998225iNE9N_JPEG/GJlxeC85g5SsovQz85IAr08r.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '123980096' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200326_185/1585201794496GPm42_PNG/MGZ6XzPFrEBsHYLpX4UP6YTb.PNG.png',
        }
      ]);
    }

    // 포스코미술관 이미지
    const existingImages_11785858 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785858'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11785858[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785858' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240613_114/1718255260225L7Dyu_PNG/KakaoTalk_20240613_135905827.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785858' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250421_295/1745194948854YU5Y8_JPEG/0421-0518_%C8%DE%B0%FC_%C1%A4%B9%E6%C7%FC.jpg',
        }
      ]);
    }

    // 에스파스 루이 비통 서울 이미지
    const existingImages_1275364153 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1275364153'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1275364153[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1275364153' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240423_230/1713860595660DNaTA_PNG/ELV_SEOUL_SH_POSTER__2000x2000.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1275364153' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240423_28/17138606090104KOdl_JPEG/ELV_SEOUL_SH_ANOTHER_BREAK_IN_THE_WALL_1.jpg',
        }
      ]);
    }

    // 플랫폼엘 이미지
    const existingImages_37620674 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37620674'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37620674[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37620674' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20160602_248/1464831098233uN4mX_JPEG/176552506157879_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37620674' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180525_282/15272379298567IA4G_JPEG/eRzV7Idjp_99P0Mvx9shtoO8.jpg',
        }
      ]);
    }

    // 화이트 큐브 서울 이미지
    const existingImages_1024484292 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1024484292'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1024484292[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1024484292' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20231010_290/1696918066252FuUoE_PNG/45A6D64C-DEA4-454F-A9F5-63DB62F225BB.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1024484292' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20231010_225/16969180659350uHIf_PNG/8288C1C1-61FB-4FA1-AFC0-5C5C66CFF0A6.png',
        }
      ]);
    }

    // 밀알미술관 이미지
    const existingImages_19570302 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19570302'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_19570302[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19570302' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200611_255/1591842852798jcLz9_JPEG/0eY8TmGQ7PeMZ8MkzmEPl_yq.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19570302' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200611_129/1591842834187W2Dny_JPEG/9COgMJnPNsLc_7dfqyMhAZgo.jpg',
        }
      ]);
    }

    // 에스투에이 이미지
    const existingImages_1191783554 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1191783554'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1191783554[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1191783554' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250421_130/1745225139341OuISC_JPEG/%C0%AF%BF%B5%C7%CF%B4%C2%BC%B1_instagram_1.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1191783554' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250114_227/1736845305979cvivE_JPEG/%C7%CA%B0%FA%B9%AC%C0%C7%BC%BC%B0%E8_%C6%F7%BD%BA%C5%CD_10801080_0110.jpg',
        }
      ]);
    }

    // 오치균미술관 이미지
    const existingImages_1158995940 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1158995940'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1158995940[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1158995940' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240514_106/1715654194213thQae_JPEG/noname01.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1158995940' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240606_27/1717640136315TddqE_JPEG/KakaoTalk_20240606_111249099.jpg',
        }
      ]);
    }

    // Oh Museum of Art 이미지
    const existingImages_1117801240 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1117801240'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1117801240[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1117801240' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240409_113/1712627293888pWr43_JPEG/12312312.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1117801240' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240515_298/1715741115628nYC8w_JPEG/%BB%E7%C1%F82.jpg',
        }
      ]);
    }

    // 스타갤러리 이미지
    const existingImages_37114200 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37114200'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37114200[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37114200' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230822_246/1692692420822I6XmH_JPEG/KakaoTalk_20230819_074033183_01.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37114200' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230822_71/1692692420842Eh5yk_JPEG/story03.jpg',
        }
      ]);
    }

    // 에스티에스 이미지
    const existingImages_1848469710 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1848469710'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1848469710[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1848469710' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241016_173/1729065825245h0Tpk_JPEG/KakaoTalk_20241016_170301383_05.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1848469710' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241016_288/1729065839593Mbf8C_JPEG/KakaoTalk_20241016_170301383_04.jpg',
        }
      ]);
    }

    // 선&석 갤러리미술관 이미지
    const existingImages_1004026322 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1004026322'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1004026322[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1004026322' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200720_223/15952176729658VDXc_JPEG/v7V6F33yt4tUxFUFKh7SmhpP.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1004026322' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230226_190/1677416775143lLMyS_JPEG/20230218_152044262.jpg',
        }
      ]);
    }

    // 리움미술관 이미지
    const existingImages_11582919 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11582919'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11582919[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11582919' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250217_49/1739761296902KPv9A_JPEG/%B0%ED%B9%CC%BC%FA_%C0%FC%BD%C3_%284%29_re.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11582919' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250217_130/1739761290867AodjU_JPEG/%BF%DC%B0%FC_re.jpg',
        }
      ]);
    }

    // 디뮤지엄 이미지
    const existingImages_36992369 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36992369'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36992369[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36992369' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241016_43/1729071692098Tvdbi_JPEG/ALLA_29CM_%BE%F3%B8%AE%B9%F6%B5%E5_%BD%E6%B3%D7%C0%CF_1015.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36992369' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230317_295/1679017845698df8Gc_JPEG/%B5%F0%B9%C2%C1%F6%BE%F6_%BF%DC%B0%FC2_%281%29.jpeg',
        }
      ]);
    }

    // 소마미술관 이미지
    const existingImages_11785944 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785944'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11785944[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785944' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250411_66/1744359823748Aqc9J_JPEG/%C6%F7%BD%BA%C5%CD_%B3%B7%B0%F8%BF%F8%C0%C7%B3%B7%B0%FA%B9%E3_2025_1%B0%FC_%BB%F3%B9%DD%B1%E2.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785944' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250411_21/1744359815100bmfgy_JPEG/%C6%F7%BD%BA%C5%CD_%B9%E3%B0%F8%BF%F8%C0%C7%B3%B7%B0%FA%B9%E3_2025_1%B0%FC_%BB%F3%B9%DD%B1%E2_1.jpg',
        }
      ]);
    }

    // K&L 뮤지엄 이미지
    const existingImages_1250642070 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1250642070'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1250642070[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1250642070' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230908_182/1694163740769panVa_JPEG/6_William_Mulvihill-high_%BC%F6%C1%A4_%B9%E8%B0%E6_%C7%D5%BC%BA.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1250642070' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241224_103/1735015132854wqBFr_PNG/Screenshot_2024-12-24_at_1.36.52_PM.png',
        }
      ]);
    }

    // 예술의전당한가람디자인미술관 이미지
    const existingImages_13549528 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13549528'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13549528[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13549528' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230316_70/1678948106701j4Y3X_JPEG/%BF%B9%BC%FA%C0%C7%C0%FC%B4%E7.jpg',
        }
      ]);
    }

    // 롯데뮤지엄 이미지
    const existingImages_1000381360 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1000381360'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1000381360[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1000381360' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250217_225/1739777638916r9F1V_JPEG/%B7%D4%B5%A5%B9%C2%C1%F6%BE%F6_%BB%E7%C1%F8%28%BD%C5%B1%D4%B7%CE%B0%ED%29.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1000381360' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250217_248/1739778282363rVHHw_JPEG/_BCJ0560.jpg',
        }
      ]);
    }

    // 넥스트 뮤지엄 이미지
    const existingImages_1854075589 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1854075589'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1854075589[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1854075589' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230104_153/1672823987357NS9p9_JPEG/TYK03877.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1854075589' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230104_218/1672823980887WutFH_JPEG/DSC00415.jpg',
        }
      ]);
    }

    // 갤러리바톤 이미지
    const existingImages_34714075 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34714075'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_34714075[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34714075' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220531_105/1653972185390JwmNJ_JPEG/Web_PR_Image_.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34714075' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220531_263/1653973511788v3J7R_JPEG/GB2.jpg',
        }
      ]);
    }

    // 한원미술관 이미지
    const existingImages_11620360 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620360'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11620360[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620360' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210703_272/1625278500423Pw8B8_JPEG/JPmlf7XM1lxbmvx0ZJ1AI2aJ.JPG.jpg',
        }
      ]);
    }

    // Kontemporary1 이미지
    const existingImages_1241089043 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1241089043'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1241089043[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1241089043' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20181009_159/1539095849141JWhsV_JPEG/dmMjv5Bo--c4bBqpVi1Kfeqk.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1241089043' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200215_272/1581731223383szon3_JPEG/_ROu56iNSmsbLotd5t_H9crB.jpeg.jpg',
        }
      ]);
    }

    // 한전갤러리 이미지
    const existingImages_11785927 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785927'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11785927[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785927' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250507_211/1746579869001re4pA_JPEG/IMG_3042.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785927' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250507_120/1746579902068HcGIJ_JPEG/IMG_2048.jpeg',
        }
      ]);
    }

    // 뮤지엄한미 방이 이미지
    const existingImages_11785954 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785954'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11785954[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785954' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200615_50/1592213342489Y0DQB_PNG/y73EWGcjPJL-7j2gowHEFIIQ.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785954' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200615_160/1592213379213cQEsn_PNG/BqgDnQCMJz0uRWMLfnClOFvR.png',
        }
      ]);
    }

    // 송파구립 예송미술관 이미지
    const existingImages_37069948 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37069948'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37069948[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37069948' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240201_252/170676450380366Odq_PNG/%B8%B6%C0%BD%C0%C7_%C1%FD_%C6%F7%BD%BA%C5%CD.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37069948' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230721_245/16899194754558NdQ4_JPEG/SNS_%BE%F7%B7%CE%B5%E5%BF%EB_%C6%F7%BD%BA%C5%CD.jpg',
        }
      ]);
    }

    // 유리지공예관 이미지
    const existingImages_11665595 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11665595'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11665595[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11665595' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_178/1441013980531FdjSh_JPEG/11665595_0.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11665595' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200408_292/1586321211674cXCiw_JPEG/uqJHTs7vMYyuK6mIIu1aCtzO.jpg',
        }
      ]);
    }

    // 부띠크모나코뮤지엄 이미지
    const existingImages_110051033 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['110051033'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_110051033[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '110051033' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220802_46/1659404059440MiShi_JPEG/info_0.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '110051033' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220802_120/1659404072634RlFWf_JPEG/play2.jpg',
        }
      ]);
    }

    // 샘미술관 이미지
    const existingImages_1997730041 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1997730041'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1997730041[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1997730041' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210923_285/1632389975433eY1GX_JPEG/G3nMvF4DYvBh8hexCZD68H0J.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1997730041' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210903_230/1630633060774d5KsC_JPEG/5ZQu_7mpH3rM8nZXZLVNzqzs.JPG.jpg',
        }
      ]);
    }

    // 공간유보 이미지
    const existingImages_1509540682 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1509540682'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1509540682[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1509540682' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240807_214/1722961739832N532a_JPEG/1722961115302-66546a13-c854-40dd-a59f-a2394f2d0b71_1.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1509540682' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240807_5/1722961727397C7S4B_JPEG/IMG_9737.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 마이아트뮤지엄 카테고리 관계
    const existingCategories_1035412616 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1035412616'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1035412616 = new Set(existingCategories_1035412616.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1035412616 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1035412616) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1035412616.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1035412616' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 송은 카테고리 관계
    const existingCategories_13558974 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13558974'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13558974 = new Set(existingCategories_13558974.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13558974 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_13558974) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13558974.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13558974' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // K현대미술관 카테고리 관계
    const existingCategories_123980096 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['123980096'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_123980096 = new Set(existingCategories_123980096.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_123980096 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_123980096) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_123980096.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '123980096' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 포스코미술관 카테고리 관계
    const existingCategories_11785858 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785858'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11785858 = new Set(existingCategories_11785858.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11785858 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_11785858) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11785858.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785858' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 에스파스 루이 비통 서울 카테고리 관계
    const existingCategories_1275364153 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1275364153'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1275364153 = new Set(existingCategories_1275364153.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1275364153 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1275364153) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1275364153.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1275364153' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 플랫폼엘 카테고리 관계
    const existingCategories_37620674 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37620674'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37620674 = new Set(existingCategories_37620674.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37620674 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_37620674) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37620674.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37620674' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 화이트 큐브 서울 카테고리 관계
    const existingCategories_1024484292 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1024484292'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1024484292 = new Set(existingCategories_1024484292.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1024484292 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1024484292) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1024484292.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1024484292' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 밀알미술관 카테고리 관계
    const existingCategories_19570302 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19570302'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19570302 = new Set(existingCategories_19570302.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19570302 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_19570302) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19570302.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19570302' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 에스투에이 카테고리 관계
    const existingCategories_1191783554 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1191783554'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1191783554 = new Set(existingCategories_1191783554.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1191783554 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1191783554) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1191783554.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1191783554' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오치균미술관 카테고리 관계
    const existingCategories_1158995940 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1158995940'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1158995940 = new Set(existingCategories_1158995940.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1158995940 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1158995940) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1158995940.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1158995940' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 131갤러리 카테고리 관계
    const existingCategories_1336506265 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1336506265'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1336506265 = new Set(existingCategories_1336506265.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1336506265 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1336506265) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1336506265.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1336506265' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // Oh Museum of Art 카테고리 관계
    const existingCategories_1117801240 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1117801240'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1117801240 = new Set(existingCategories_1117801240.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1117801240 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1117801240) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1117801240.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1117801240' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스타갤러리 카테고리 관계
    const existingCategories_37114200 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37114200'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37114200 = new Set(existingCategories_37114200.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37114200 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_37114200) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37114200.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37114200' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 에스티에스 카테고리 관계
    const existingCategories_1848469710 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1848469710'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1848469710 = new Set(existingCategories_1848469710.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1848469710 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1848469710) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1848469710.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1848469710' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 문암미술관 카테고리 관계
    const existingCategories_944574139 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['944574139'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_944574139 = new Set(existingCategories_944574139.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_944574139 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_944574139) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_944574139.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '944574139' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 선&석 갤러리미술관 카테고리 관계
    const existingCategories_1004026322 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1004026322'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1004026322 = new Set(existingCategories_1004026322.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1004026322 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1004026322) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1004026322.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1004026322' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 갤러리브릭스 카테고리 관계
    const existingCategories_1035140440 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1035140440'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1035140440 = new Set(existingCategories_1035140440.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1035140440 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1035140440) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1035140440.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1035140440' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청담아트센터 카테고리 관계
    const existingCategories_637447632 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['637447632'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_637447632 = new Set(existingCategories_637447632.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_637447632 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_637447632) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_637447632.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '637447632' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 러브유어디포 강남파빌리온 카테고리 관계
    const existingCategories_1993015068 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1993015068'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1993015068 = new Set(existingCategories_1993015068.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1993015068 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1993015068) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1993015068.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1993015068' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 리움미술관 카테고리 관계
    const existingCategories_11582919 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11582919'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11582919 = new Set(existingCategories_11582919.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11582919 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_11582919) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11582919.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11582919' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 디뮤지엄 카테고리 관계
    const existingCategories_36992369 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36992369'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36992369 = new Set(existingCategories_36992369.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36992369 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_36992369) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36992369.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36992369' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 소마미술관 카테고리 관계
    const existingCategories_11785944 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785944'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11785944 = new Set(existingCategories_11785944.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11785944 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_11785944) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11785944.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785944' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // K&L 뮤지엄 카테고리 관계
    const existingCategories_1250642070 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1250642070'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1250642070 = new Set(existingCategories_1250642070.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1250642070 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1250642070) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1250642070.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1250642070' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 예술의전당한가람디자인미술관 카테고리 관계
    const existingCategories_13549528 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13549528'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13549528 = new Set(existingCategories_13549528.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13549528 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_13549528) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13549528.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13549528' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 롯데뮤지엄 카테고리 관계
    const existingCategories_1000381360 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1000381360'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1000381360 = new Set(existingCategories_1000381360.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1000381360 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1000381360) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1000381360.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1000381360' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 넥스트 뮤지엄 카테고리 관계
    const existingCategories_1854075589 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1854075589'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1854075589 = new Set(existingCategories_1854075589.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1854075589 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1854075589) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1854075589.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1854075589' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 갤러리바톤 카테고리 관계
    const existingCategories_34714075 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34714075'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_34714075 = new Set(existingCategories_34714075.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_34714075 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_34714075) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_34714075.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34714075' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한원미술관 카테고리 관계
    const existingCategories_11620360 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620360'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11620360 = new Set(existingCategories_11620360.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11620360 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_11620360) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11620360.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620360' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // Kontemporary1 카테고리 관계
    const existingCategories_1241089043 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1241089043'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1241089043 = new Set(existingCategories_1241089043.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1241089043 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1241089043) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1241089043.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1241089043' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한전갤러리 카테고리 관계
    const existingCategories_11785927 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785927'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11785927 = new Set(existingCategories_11785927.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11785927 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_11785927) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11785927.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785927' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 뮤지엄한미 방이 카테고리 관계
    const existingCategories_11785954 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785954'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11785954 = new Set(existingCategories_11785954.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11785954 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_11785954) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11785954.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785954' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 송파구립 예송미술관 카테고리 관계
    const existingCategories_37069948 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37069948'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37069948 = new Set(existingCategories_37069948.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37069948 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_37069948) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37069948.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37069948' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 유리지공예관 카테고리 관계
    const existingCategories_11665595 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11665595'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11665595 = new Set(existingCategories_11665595.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11665595 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_11665595) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11665595.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11665595' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 부띠크모나코뮤지엄 카테고리 관계
    const existingCategories_110051033 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['110051033'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_110051033 = new Set(existingCategories_110051033.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_110051033 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_110051033) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_110051033.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '110051033' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 샘미술관 카테고리 관계
    const existingCategories_1997730041 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1997730041'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1997730041 = new Set(existingCategories_1997730041.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1997730041 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1997730041) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1997730041.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1997730041' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공간유보 카테고리 관계
    const existingCategories_1509540682 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1509540682'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1509540682 = new Set(existingCategories_1509540682.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1509540682 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_1509540682) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1509540682.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1509540682' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // LIG아트스페이스 카테고리 관계
    const existingCategories_13437741 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13437741'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13437741 = new Set(existingCategories_13437741.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13437741 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_13437741) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13437741.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13437741' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 예술의전당디자인미술관 카테고리 관계
    const existingCategories_37591725 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37591725'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37591725 = new Set(existingCategories_37591725.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37591725 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_37591725) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37591725.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37591725' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 생각꿈틀미술관 카테고리 관계
    const existingCategories_18751385 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18751385'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18751385 = new Set(existingCategories_18751385.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18751385 = [...new Set([
      '미술관'
    ])];

    for (const category of uniqueCategories_18751385) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18751385.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18751385' LIMIT 1)`),
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
