'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 박물관
 * 생성일시: 2025-05-07T10:28:28.616Z
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
        name: '피규어뮤지엄w',
        address: '서울 강남구 청담동 선릉로158길 3 Ys Roo',
        tel: '02-512-8865',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0404047 37.5257643)'
        ),
        naver_spot_id: '36368850',
        review_count: 1,
        review_score: null,
      },
      {
        name: '호림박물관 신사분관',
        address: '서울 강남구 신사동 도산대로 317 호림박물관 신사분관',
        tel: '02-541-3525',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0364857 37.5227581)'
        ),
        naver_spot_id: '37392356',
        review_count: 146,
        review_score: null,
      },
      {
        name: '국립관세박물관',
        address: '서울 강남구 논현동 언주로 721 서울본부세관 본관 1층',
        tel: '02-510-1083',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0346256 37.5185352)'
        ),
        naver_spot_id: '13475891',
        review_count: 0,
        review_score: null,
      },
      {
        name: '탄허기념불교박물관',
        address: '서울 강남구 자곡동 밤고개로14길 13-51 탄허기념불교박물관',
        tel: '02-445-8486',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1028981 37.4790124)'
        ),
        naver_spot_id: '13581899',
        review_count: 1,
        review_score: null,
      },
      {
        name: '경운박물관',
        address: '서울 강남구 개포동 삼성로 29 경기여고 100주년기념관 1층',
        tel: '02-3463-1336',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0662043 37.4878706)'
        ),
        naver_spot_id: '12779777',
        review_count: 0,
        review_score: null,
      },
      {
        name: '세계골프역사박물관',
        address: '서울 강남구 대치동 테헤란로 528 슈페리어타워 B2',
        tel: '02-2192-3005',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0620152 37.508102)'
        ),
        naver_spot_id: '34585596',
        review_count: 15,
        review_score: null,
      },
      {
        name: '올드스토리뮤지엄',
        address: '서울 강남구 논현동 도산대로 202 을지대학교 강남을지병원 2층',
        tel: '0507-1411-1322',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0286184 37.5193885)'
        ),
        naver_spot_id: '36424279',
        review_count: 0,
        review_score: null,
      },
      {
        name: '르노안경 뮤지엄',
        address: '서울 강남구 신사동 선릉로153길 19 B1층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0378151 37.5246556)'
        ),
        naver_spot_id: '1779648805',
        review_count: 0,
        review_score: null,
      },
      {
        name: '코리아나화장박물관',
        address: '서울 강남구 신사동 언주로 827',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.032826 37.524005)'
        ),
        naver_spot_id: '1793878498',
        review_count: 2,
        review_score: null,
      },
      {
        name: '민폐류박물관',
        address: '서울 강남구 역삼2동 역삼로38길 8',
        tel: '02-558-5592',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0434823 37.4972927)'
        ),
        naver_spot_id: '18589582',
        review_count: 11,
        review_score: null,
      },
      {
        name: '올림픽공원한성백제박물관',
        address: '서울 송파구 방이동 위례성대로 71',
        tel: '02-2152-5800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1206146 37.5155717)'
        ),
        naver_spot_id: '18882132',
        review_count: 471,
        review_score: null,
      },
      {
        name: '송파책박물관',
        address: '서울 송파구 가락동 송파대로37길 77',
        tel: '0507-1362-2486',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1046179 37.49892)'
        ),
        naver_spot_id: '1906572873',
        review_count: 726,
        review_score: null,
      },
      {
        name: '롯데월드민속박물관',
        address: '서울 송파구 잠실동 올림픽로 240 롯데월드',
        tel: '02-411-4764',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0981638 37.5110794)'
        ),
        naver_spot_id: '11620605',
        review_count: 2,
        review_score: null,
      },
      {
        name: '오디움',
        address: '서울 서초구 신원동 헌릉로8길 6',
        tel: '02-574-5175',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0589664 37.4568974)'
        ),
        naver_spot_id: '1538888364',
        review_count: 16,
        review_score: null,
      },
      {
        name: '서울백제어린이박물관',
        address: '서울 송파구 방이동 올림픽로 424 서울백제어린이박물관',
        tel: '02-2152-5900',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1243042 37.5238986)'
        ),
        naver_spot_id: '11620616',
        review_count: 1,
        review_score: null,
      },
      {
        name: '수도박물관',
        address: '서울 성동구 성수동1가 왕십리로 27',
        tel: '02-3146-5921',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0428042 37.5384287)'
        ),
        naver_spot_id: '13017518',
        review_count: 12,
        review_score: null,
      },
      {
        name: '키즈마린파크',
        address: '서울 송파구 가락동 송파대로28길 28 1층 키즈마린파크',
        tel: '02-6956-5278',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.121036 37.4945486)'
        ),
        naver_spot_id: '1967672838',
        review_count: 0,
        review_score: null,
      },
      {
        name: '전기박물관',
        address: '서울 서초구 서초동 효령로72길 60 한전아트센터',
        tel: '02-2105-8190',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0281415 37.4860563)'
        ),
        naver_spot_id: '11620550',
        review_count: 2,
        review_score: null,
      },
      {
        name: '추사박물관',
        address: '과천 주암동 추사로 78',
        tel: '02-2150-3650',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.028739 37.4526708)'
        ),
        naver_spot_id: '21135846',
        review_count: 8,
        review_score: null,
      },
      {
        name: '아해박물관',
        address: '과천 주암동 추사로 133 아해한국전통문화어린이박물관',
        tel: '02-3418-5501',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0299884 37.4575827)'
        ),
        naver_spot_id: '19497338',
        review_count: 1,
        review_score: null,
      },
      {
        name: '렛츠런파크 서울 말박물관',
        address: '과천 주암동 경마공원대로 107',
        tel: '02-509-1287',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.012159 37.447852)'
        ),
        naver_spot_id: '11620645',
        review_count: 30,
        review_score: null,
      },
      {
        name: '국악박물관',
        address: '서울 서초구 서초동 남부순환로 2364',
        tel: '02-580-3130',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0095536 37.4773967)'
        ),
        naver_spot_id: '1102659180',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한국광고박물관',
        address: '서울 송파구 신천동 올림픽로35길 137 한국광고문화회관',
        tel: '02-2144-0116',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0997471 37.5156732)'
        ),
        naver_spot_id: '13170569',
        review_count: 24,
        review_score: null,
      },
      {
        name: '한익환서울아트박물관',
        address: '서울 용산구 한남동 한남대로 108',
        tel: '02-796-0100',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0050035 37.5380357)'
        ),
        naver_spot_id: '21423937',
        review_count: 3,
        review_score: null,
      },
      {
        name: '건국대학교 박물관',
        address: '서울 광진구 화양동 능동로 120 건국대학교',
        tel: '0507-1430-3880',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0756501 37.5424068)'
        ),
        naver_spot_id: '11785116',
        review_count: 0,
        review_score: null,
      },
      {
        name: '분재박물관',
        address: '서울 서초구 내곡동 신흥안길 40-10',
        tel: '02-577-0002',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0758123 37.4532041)'
        ),
        naver_spot_id: '11784531',
        review_count: 2,
        review_score: null,
      },
      {
        name: '기록매체박물관',
        address: '서울 서초구 반포동 반포대로 201 국립중앙도서관',
        tel: '02-535-4142',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0042226 37.4977122)'
        ),
        naver_spot_id: '84136431',
        review_count: 19,
        review_score: null,
      },
      {
        name: '서울올림픽기념관',
        address: '서울 송파구 방이동 올림픽로 424',
        tel: '02-410-1354',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1155411 37.5203253)'
        ),
        naver_spot_id: '11620325',
        review_count: 6,
        review_score: null,
      },
      {
        name: '국립스포츠박물관(2026년예정)',
        address: '서울 송파구 방이동 올림픽로 448 서울올림픽파크텔',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1152765 37.5202094)'
        ),
        naver_spot_id: '1247172122',
        review_count: 0,
        review_score: null,
      },
      {
        name: '디지털박물관',
        address: '서울 서초구 반포동 신반포로 176 센트럴시티',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0041491 37.5048272)'
        ),
        naver_spot_id: '1563048969',
        review_count: 0,
        review_score: null,
      },
      {
        name: '우면동금속박물관',
        address: '서울 서초구 우면동 중앙로 555',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0123942 37.4577231)'
        ),
        naver_spot_id: '18756802',
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

    // 피규어뮤지엄w 이미지
    const existingImages_36368850 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36368850'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36368850[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36368850' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180706_200/1530865520610TSd9m_JPEG/%28.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36368850' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180706_234/1530865520635p5jhX_JPEG/1.jpg',
        }
      ]);
    }

    // 호림박물관 신사분관 이미지
    const existingImages_37392356 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37392356'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37392356[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37392356' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220412_16/16497253725446OR6j_JPEG/KakaoTalk_20220407_093239937.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37392356' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240202_222/17068369938270KFTV_JPEG/HORIM_06.jpg',
        }
      ]);
    }

    // 국립관세박물관 이미지
    const existingImages_13475891 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13475891'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13475891[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13475891' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20211206_117/1638755742592rsb5N_JPEG/3X3A3800.JPG',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13475891' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20211206_248/16387557599970luj7_JPEG/%C0%D4%B1%B8_%B0%FC%BC%BC%C3%BB_CI_%C1%B6%C7%FC%B9%B0_%B9%E8%B0%E6_%C1%A6%B0%C5%C7%CF%B0%ED_%B9%E6%C6%D0%BF%CD_%C7%CF%B4%DC_%C1%B6%B8%ED%B8%B8_%BB%F0%C0%D4.JPG',
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

    // 경운박물관 이미지
    const existingImages_12779777 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12779777'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12779777[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12779777' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250423_249/1745403113555IJtgb_JPEG/20250418_200143.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12779777' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250423_115/1745403113637WW5aI_JPEG/20250418_200655.jpg',
        }
      ]);
    }

    // 세계골프역사박물관 이미지
    const existingImages_34585596 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34585596'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_34585596[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34585596' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_209/1441101075486q0aeW_JPEG/156756558521211_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34585596' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_262/1441101075708sh8qh_JPEG/156756558521211_1.jpeg',
        }
      ]);
    }

    // 올드스토리뮤지엄 이미지
    const existingImages_36424279 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36424279'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36424279[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36424279' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_59/14410718873136gMoF_JPEG/166265567673684_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36424279' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_250/1441071887509Ghdwp_JPEG/166265567673684_1.jpeg',
        }
      ]);
    }

    // 르노안경 뮤지엄 이미지
    const existingImages_1779648805 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1779648805'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1779648805[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1779648805' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20221125_179/1669342004070Se8jl_JPEG/KakaoTalk_Photo_2022-11-25-11-05-51.jpeg',
        }
      ]);
    }

    // 올림픽공원한성백제박물관 이미지
    const existingImages_18882132 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18882132'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18882132[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18882132' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250304_219/1741049070372VjoiW_JPEG/%C7%D1%BC%BA%B9%E9%C1%A6%B9%DA%B9%B0%B0%FC_%C8%F7%C5%B8%C0%CC%C6%AE_%C6%F7%BD%BA%C5%CD.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18882132' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241108_22/1731032017501UvhCE_JPEG/%C6%F7%BD%BA%C5%CD_%C3%D6%C1%BE.jpg',
        }
      ]);
    }

    // 송파책박물관 이미지
    const existingImages_1906572873 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1906572873'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1906572873[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1906572873' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190423_110/1555994285004BnOC2_PNG/bVmZUb_l6iodcuvc26l6wkJl.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1906572873' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190423_11/1555994284800RptkR_PNG/T50tTJk4wd-Uq_R5IsoEk-6l.png',
        }
      ]);
    }

    // 롯데월드민속박물관 이미지
    const existingImages_11620605 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620605'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11620605[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620605' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190827_105/1566869781522F5iK1_JPEG/IMGL6085.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620605' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190827_202/1566869781506nPdBD_JPEG/_MGL6029.jpg',
        }
      ]);
    }

    // 오디움 이미지
    const existingImages_1538888364 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1538888364'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1538888364[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1538888364' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250213_283/1739423325470I9ClT_JPEG/_DSF4609_%BC%F6%C1%A4.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1538888364' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250213_269/1739423325311Qeduz_JPEG/_DSF9568_%BC%F6%C1%A4.jpg',
        }
      ]);
    }

    // 서울백제어린이박물관 이미지
    const existingImages_11620616 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620616'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11620616[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620616' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240705_113/1720152029787yrAyr_JPEG/%BE%EE%B9%DA%C0%FC%B0%E6%BB%E7%C1%F8_240627_%283%29.jpg',
        }
      ]);
    }

    // 수도박물관 이미지
    const existingImages_13017518 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13017518'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13017518[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13017518' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_150/1441050510580VAiPm_JPEG/116358474563418_0.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13017518' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_225/1441050510748LSWg1_JPEG/116358474563418_1.jpg',
        }
      ]);
    }

    // 키즈마린파크 이미지
    const existingImages_1967672838 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1967672838'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1967672838[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1967672838' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220929_175/1664414135455hVMTS_PNG/%C7%C3%B7%B9%C0%CC%BD%BA_%B5%EE%B7%CF-001.png',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1967672838' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220528_6/1653746309147LlkrT_JPEG/Screenshot_20220528-225732_Naver_Cafe.jpg',
        }
      ]);
    }

    // 추사박물관 이미지
    const existingImages_21135846 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21135846'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_21135846[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21135846' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_67/1441078192044zyzx2_JPEG/146470627625166_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21135846' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_26/1441078192283CCUuD_JPEG/146470627625166_1.jpeg',
        }
      ]);
    }

    // 아해박물관 이미지
    const existingImages_19497338 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19497338'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_19497338[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19497338' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190103_251/1546495946352MGBpl_JPEG/wHjrvqr-yECNA7UpTTjGpM-u.JPG.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19497338' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190103_297/15464959603186UWoc_JPEG/wPTASKxhIMxX74c2itfsN68G.JPG.jpg',
        }
      ]);
    }

    // 렛츠런파크 서울 말박물관 이미지
    const existingImages_11620645 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620645'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11620645[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620645' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_171/1441006793948Gwdhg_JPEG/11620645_0.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620645' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_240/1441006794144Y63gz_JPEG/11620645_1.jpg',
        }
      ]);
    }

    // 국악박물관 이미지
    const existingImages_1102659180 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1102659180'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1102659180[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1102659180' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220722_108/1658468612365XD6AB_JPEG/6828C124-A37E-4165-B985-2133624DAA5F.jpeg',
        }
      ]);
    }

    // 한익환서울아트박물관 이미지
    const existingImages_21423937 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21423937'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_21423937[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21423937' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_42/1441089130304AD9RS_JPEG/21423937_0.jpeg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21423937' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_156/1441089130548GoHBq_JPEG/21423937_1.jpeg',
        }
      ]);
    }

    // 건국대학교 박물관 이미지
    const existingImages_11785116 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785116'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11785116[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785116' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_183/14410390455278zeRK_JPEG/11785116_0.jpg',
        }
      ]);
    }

    // 분재박물관 이미지
    const existingImages_11784531 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11784531'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11784531[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11784531' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_198/1441038834161RHhbX_JPEG/11784531_0.jpg',
        },
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11784531' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_198/14410388343898iKPz_JPEG/11784531_1.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 피규어뮤지엄w 카테고리 관계
    const existingCategories_36368850 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36368850'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36368850 = new Set(existingCategories_36368850.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36368850 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_36368850) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36368850.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36368850' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호림박물관 신사분관 카테고리 관계
    const existingCategories_37392356 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37392356'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37392356 = new Set(existingCategories_37392356.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37392356 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_37392356) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37392356.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37392356' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국립관세박물관 카테고리 관계
    const existingCategories_13475891 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13475891'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13475891 = new Set(existingCategories_13475891.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13475891 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_13475891) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13475891.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13475891' LIMIT 1)`),
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

    // 경운박물관 카테고리 관계
    const existingCategories_12779777 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12779777'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12779777 = new Set(existingCategories_12779777.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12779777 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_12779777) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12779777.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12779777' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 세계골프역사박물관 카테고리 관계
    const existingCategories_34585596 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34585596'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_34585596 = new Set(existingCategories_34585596.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_34585596 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_34585596) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_34585596.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34585596' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 올드스토리뮤지엄 카테고리 관계
    const existingCategories_36424279 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36424279'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36424279 = new Set(existingCategories_36424279.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36424279 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_36424279) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36424279.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36424279' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 르노안경 뮤지엄 카테고리 관계
    const existingCategories_1779648805 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1779648805'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1779648805 = new Set(existingCategories_1779648805.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1779648805 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1779648805) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1779648805.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1779648805' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코리아나화장박물관 카테고리 관계
    const existingCategories_1793878498 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1793878498'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1793878498 = new Set(existingCategories_1793878498.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1793878498 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1793878498) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1793878498.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1793878498' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 민폐류박물관 카테고리 관계
    const existingCategories_18589582 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18589582'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18589582 = new Set(existingCategories_18589582.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18589582 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_18589582) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18589582.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18589582' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 올림픽공원한성백제박물관 카테고리 관계
    const existingCategories_18882132 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18882132'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18882132 = new Set(existingCategories_18882132.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18882132 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_18882132) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18882132.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18882132' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 송파책박물관 카테고리 관계
    const existingCategories_1906572873 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1906572873'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1906572873 = new Set(existingCategories_1906572873.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1906572873 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1906572873) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1906572873.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1906572873' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 롯데월드민속박물관 카테고리 관계
    const existingCategories_11620605 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620605'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11620605 = new Set(existingCategories_11620605.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11620605 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11620605) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11620605.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620605' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오디움 카테고리 관계
    const existingCategories_1538888364 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1538888364'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1538888364 = new Set(existingCategories_1538888364.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1538888364 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1538888364) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1538888364.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1538888364' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울백제어린이박물관 카테고리 관계
    const existingCategories_11620616 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620616'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11620616 = new Set(existingCategories_11620616.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11620616 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11620616) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11620616.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620616' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 수도박물관 카테고리 관계
    const existingCategories_13017518 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13017518'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13017518 = new Set(existingCategories_13017518.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13017518 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_13017518) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13017518.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13017518' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 키즈마린파크 카테고리 관계
    const existingCategories_1967672838 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1967672838'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1967672838 = new Set(existingCategories_1967672838.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1967672838 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1967672838) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1967672838.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1967672838' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 전기박물관 카테고리 관계
    const existingCategories_11620550 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620550'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11620550 = new Set(existingCategories_11620550.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11620550 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11620550) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11620550.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620550' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 추사박물관 카테고리 관계
    const existingCategories_21135846 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21135846'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21135846 = new Set(existingCategories_21135846.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21135846 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_21135846) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21135846.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21135846' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아해박물관 카테고리 관계
    const existingCategories_19497338 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19497338'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19497338 = new Set(existingCategories_19497338.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19497338 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_19497338) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19497338.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19497338' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 렛츠런파크 서울 말박물관 카테고리 관계
    const existingCategories_11620645 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620645'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11620645 = new Set(existingCategories_11620645.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11620645 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11620645) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11620645.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620645' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국악박물관 카테고리 관계
    const existingCategories_1102659180 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1102659180'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1102659180 = new Set(existingCategories_1102659180.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1102659180 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1102659180) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1102659180.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1102659180' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한국광고박물관 카테고리 관계
    const existingCategories_13170569 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13170569'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13170569 = new Set(existingCategories_13170569.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13170569 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_13170569) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13170569.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13170569' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한익환서울아트박물관 카테고리 관계
    const existingCategories_21423937 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21423937'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21423937 = new Set(existingCategories_21423937.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21423937 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_21423937) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21423937.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21423937' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 건국대학교 박물관 카테고리 관계
    const existingCategories_11785116 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11785116'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11785116 = new Set(existingCategories_11785116.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11785116 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11785116) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11785116.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11785116' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 분재박물관 카테고리 관계
    const existingCategories_11784531 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11784531'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11784531 = new Set(existingCategories_11784531.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11784531 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_11784531) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11784531.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11784531' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 기록매체박물관 카테고리 관계
    const existingCategories_84136431 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['84136431'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_84136431 = new Set(existingCategories_84136431.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_84136431 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_84136431) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_84136431.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '84136431' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울올림픽기념관 카테고리 관계
    const existingCategories_11620325 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620325'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11620325 = new Set(existingCategories_11620325.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11620325 = [...new Set([
      '관광지',
      '역사'
    ])];

    for (const category of uniqueCategories_11620325) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11620325.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620325' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국립스포츠박물관(2026년예정) 카테고리 관계
    const existingCategories_1247172122 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1247172122'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1247172122 = new Set(existingCategories_1247172122.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1247172122 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1247172122) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1247172122.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1247172122' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 디지털박물관 카테고리 관계
    const existingCategories_1563048969 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1563048969'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1563048969 = new Set(existingCategories_1563048969.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1563048969 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_1563048969) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1563048969.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1563048969' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 우면동금속박물관 카테고리 관계
    const existingCategories_18756802 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18756802'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18756802 = new Set(existingCategories_18756802.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18756802 = [...new Set([
      '박물관'
    ])];

    for (const category of uniqueCategories_18756802) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18756802.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18756802' LIMIT 1)`),
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
