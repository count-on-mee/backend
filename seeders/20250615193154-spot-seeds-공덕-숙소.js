'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 숙소
 * 생성일시: 2025-06-15T10:32:01.540Z
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
        name: '신라스테이 마포',
        address: '서울 마포구 도화동 마포대로 83',
        tel: '02-6979-9000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5428347 126.9496856)',
        4326
        ),
        naver_spot_id: '34827664',
        review_count: 742,
        review_score: 4.27,
      },
      {
        name: '서울가든호텔',
        address: '서울 마포구 도화동 마포대로 58 가든호텔',
        tel: '02-710-7111',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5408379 126.9482893)',
        4326
        ),
        naver_spot_id: '11659089',
        review_count: 837,
        review_score: 4.34,
      },
      {
        name: '롯데시티호텔 마포',
        address: '서울 마포구 공덕동 마포대로 109',
        tel: '02-6009-1000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5446166 126.9504885)',
        4326
        ),
        naver_spot_id: '13069031',
        review_count: 710,
        review_score: 4.46,
      },
      {
        name: '글래드 마포',
        address: '서울 마포구 도화동 마포대로 92 효성해링턴스퀘어 A동 9층',
        tel: '02-2197-5000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5429467 126.9512678)',
        4326
        ),
        naver_spot_id: '1905269536',
        review_count: 717,
        review_score: 4.47,
      },
      {
        name: '로이넷호텔 서울 마포',
        address: '서울 마포구 도화동 마포대로 67',
        tel: '02-3702-0300',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5418493 126.9483004)',
        4326
        ),
        naver_spot_id: '1258989658',
        review_count: 58,
        review_score: null,
      },
      {
        name: '소담스테이',
        address: '서울 마포구 공덕동 마포대로14길 12-17',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5479877 126.9559753)',
        4326
        ),
        naver_spot_id: '1677912375',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나루호스텔',
        address: '서울 마포구 공덕동 마포대로12길 31',
        tel: '0507-1315-9562',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5474467 126.9548658)',
        4326
        ),
        naver_spot_id: '1284077645',
        review_count: 7,
        review_score: null,
      },
      {
        name: '공덕스테이마실',
        address: '서울 마포구 도화동 새창로4가길 11 지층',
        tel: '0507-1346-1008',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.541665 126.9523789)',
        4326
        ),
        naver_spot_id: '1276271056',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포록수',
        address: '서울 마포구 공덕동 마포대로12길 37',
        tel: '02-703-0563',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5471492 126.9547816)',
        4326
        ),
        naver_spot_id: '1181965902',
        review_count: 3,
        review_score: null,
      },
      {
        name: '쉼스테이',
        address: '서울 마포구 공덕동 마포대로14길 21 3층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5484643 126.9569965)',
        4326
        ),
        naver_spot_id: '1566501738',
        review_count: 0,
        review_score: null,
      },
      {
        name: '미담스테이',
        address: '서울 마포구 공덕동 만리재옛6길 11-1 1층',
        tel: '0507-1374-1752',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5481831 126.9583554)',
        4326
        ),
        naver_spot_id: '1795981163',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공덕푸르지오시티',
        address: '서울 마포구 공덕동 마포대로 156',
        tel: '02-714-3318',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5479515 126.9543486)',
        4326
        ),
        naver_spot_id: '654400991',
        review_count: 13,
        review_score: 3.17,
      },
      {
        name: '도화스테이',
        address: '서울 마포구 도화동 새창로4가길 9 1층',
        tel: '0507-1367-9649',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5417268 126.952299)',
        4326
        ),
        naver_spot_id: '1131079773',
        review_count: 0,
        review_score: null,
      },
      {
        name: '메이플스테이',
        address: '서울 마포구 공덕동 마포대로12길 56-1',
        tel: '0507-1446-7850',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.546425 126.9543786)',
        4326
        ),
        naver_spot_id: '1686933954',
        review_count: 0,
        review_score: null,
      },
      {
        name: '코업시티하우스 공덕동점',
        address: '서울 마포구 공덕동 만리재로 81',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5478739 126.9582869)',
        4326
        ),
        naver_spot_id: '999368631',
        review_count: 0,
        review_score: null,
      },
      {
        name: '석이한옥',
        address: '서울 마포구 염리동 백범로24길 1-8',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5458272 126.9454685)',
        4326
        ),
        naver_spot_id: '1981558865',
        review_count: 0,
        review_score: null,
      },
      {
        name: '루비하우스',
        address: '서울 마포구 공덕동 만리재로6길 3-16 1층 201호',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5482658 126.9596847)',
        4326
        ),
        naver_spot_id: '1140154999',
        review_count: 0,
        review_score: null,
      },
      {
        name: '호유즈',
        address: '서울 마포구 도화동 새창로6가길 13',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5413667 126.9534513)',
        4326
        ),
        naver_spot_id: '1091644987',
        review_count: 0,
        review_score: null,
      },
      {
        name: 'EZ렌트하우스',
        address: '서울 마포구 신공덕동 백범로 205',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5433004 126.9534672)',
        4326
        ),
        naver_spot_id: '522679589',
        review_count: 0,
        review_score: null,
      },
      {
        name: '알프스 프라이빗 스튜디오',
        address: '서울 마포구 도화동 마포대로 73 421호',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5423377 126.9488976)',
        4326
        ),
        naver_spot_id: '37848943',
        review_count: 1,
        review_score: null,
      },
      {
        name: '가나모텔',
        address: '서울 마포구 도화동 삼개로 13',
        tel: '02-712-7192',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5391333 126.9476625)',
        4326
        ),
        naver_spot_id: '18767584',
        review_count: 12,
        review_score: 4.5,
      },
      {
        name: '더하이드아웃빌라 홍대',
        address: '서울 마포구 염리동 숭문2길 13 2층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5470511 126.9462786)',
        4326
        ),
        naver_spot_id: '1350577409',
        review_count: 0,
        review_score: null,
      },
      {
        name: '호텔 나루 서울 엠갤러리',
        address: '서울 마포구 마포동 마포대로 8 호텔 나루 서울 엠갤러리',
        tel: '02-6410-1000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5374497 126.9442803)',
        4326
        ),
        naver_spot_id: '1923905766',
        review_count: 469,
        review_score: null,
      },
      {
        name: 'YD레지던스',
        address: '서울 마포구 공덕동 만리재로 123',
        tel: '070-7770-0050',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5509201 126.9611924)',
        4326
        ),
        naver_spot_id: '33284264',
        review_count: 0,
        review_score: null,
      },
      {
        name: '블루하우스',
        address: '서울 마포구 공덕동 만리재로16안길 9 101호',
        tel: '0507-1388-9838',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5499142 126.9628138)',
        4326
        ),
        naver_spot_id: '1864376791',
        review_count: 0,
        review_score: null,
      },
      {
        name: '진양모텔',
        address: '서울 용산구 청파동2가 효창원로 220',
        tel: '02-713-9524',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.546858 126.963557)',
        4326
        ),
        naver_spot_id: '1476436892',
        review_count: 4,
        review_score: null,
      },
      {
        name: '한스하우스',
        address: '서울 마포구 도화동 마포대로4길 47-3 2층',
        tel: '0507-1425-8483',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5375488 126.9469294)',
        4326
        ),
        naver_spot_id: '1516223987',
        review_count: 0,
        review_score: null,
      },
      {
        name: '옥상달빛',
        address: '서울 용산구 효창동 백범로47길 31 옥상달빛',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5413011 126.9595885)',
        4326
        ),
        naver_spot_id: '1587730391',
        review_count: 0,
        review_score: null,
      },
      {
        name: '낙원하우스',
        address: '서울 마포구 대흥동 백범로17길 47-6 1층',
        tel: '0507-1342-2268',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.549498 126.9447472)',
        4326
        ),
        naver_spot_id: '1132820832',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포 아줌마 게스트하우스',
        address: '서울 마포구 도화동 삼개로 33 우성 아파트 17동 702호',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5361106 126.9492256)',
        4326
        ),
        naver_spot_id: '1744406397',
        review_count: 5,
        review_score: null,
      },
      {
        name: 'GETTY게스트하우스',
        address: '서울 마포구 대흥동 큰우물로 8',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5447158 126.9404959)',
        4326
        ),
        naver_spot_id: '1129051213',
        review_count: 0,
        review_score: null,
      },
      {
        name: '에스엔제이하우스',
        address: '서울 용산구 산천동 효창원로15길 34-26 1층',
        tel: '0507-1487-5840',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5367551 126.9539529)',
        4326
        ),
        naver_spot_id: '1773287634',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한강게스트하우스',
        address: '서울 마포구 마포동 마포대로4길 120-39',
        tel: '0507-1439-5595',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5360755 126.9453844)',
        4326
        ),
        naver_spot_id: '34949968',
        review_count: 202,
        review_score: 4.49,
      },
      {
        name: '관숙',
        address: '서울 마포구 대흥동 백범로15길 27 콘크리트 단독 건물',
        tel: '0507-1403-9314',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5488213 126.943151)',
        4326
        ),
        naver_spot_id: '1093618224',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라 비다 렌타',
        address: '서울 마포구 대흥동 대흥로 120 *상세주소는 예약확정 후 안내',
        tel: '0507-1337-1470',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5499534 126.9440615)',
        4326
        ),
        naver_spot_id: '1641559848',
        review_count: 0,
        review_score: null,
      },
      {
        name: '에그하우스 이대점',
        address: '서울 마포구 대흥동 대흥로 116-2',
        tel: '0507-1410-8843',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5498068 126.9438839)',
        4326
        ),
        naver_spot_id: '38484127',
        review_count: 0,
        review_score: null,
      },
      {
        name: '루루디자인',
        address: '서울 용산구 용문동 효창원로 75-10',
        tel: '0507-1307-8971',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5368921 126.9569741)',
        4326
        ),
        naver_spot_id: '1043311826',
        review_count: 1,
        review_score: null,
      },
      {
        name: '제로워터스테이',
        address: '서울 마포구 대흥동 광성로6길 70 1층 103호',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5471612 126.9402888)',
        4326
        ),
        naver_spot_id: '1683239135',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신도여관',
        address: '서울 마포구 아현동 신촌로30길 3-12',
        tel: '02-313-6584',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5568286 126.9526767)',
        4326
        ),
        naver_spot_id: '18763874',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울큐브이화',
        address: '서울 마포구 염리동 대흥로30길 18-10 서울큐브이화',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5560207 126.9468543)',
        4326
        ),
        naver_spot_id: '1604269186',
        review_count: 1,
        review_score: 4.86,
      },
      {
        name: 'K-하우스2',
        address: '서울 용산구 청파동2가 효창원로86길 59-13',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5469089 126.9663364)',
        4326
        ),
        naver_spot_id: '1283675160',
        review_count: 0,
        review_score: null,
      },
      {
        name: '쉼스테이',
        address: '서울 용산구 서계동 만리재로26길 7 1층',
        tel: '0507-1304-3718',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5526028 126.9645333)',
        4326
        ),
        naver_spot_id: '2088380954',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공간 온유',
        address: '서울 용산구 서계동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5521141 126.9659734)',
        4326
        ),
        naver_spot_id: '1971575910',
        review_count: 2,
        review_score: null,
      },
      {
        name: '헬로하루',
        address: '서울 용산구 서계동 만리재로26길 7 지하1층',
        tel: '0507-1397-5161',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5526028 126.9645333)',
        4326
        ),
        naver_spot_id: '2090784799',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이수행',
        address: '서울 용산구 청파동2가 청파로47다길 17',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5455565 126.9662225)',
        4326
        ),
        naver_spot_id: '343573283',
        review_count: 0,
        review_score: null,
      },
      {
        name: '코지용산캐슬',
        address: '서울 용산구 원효로3가 원효로35나길 6 3층',
        tel: '0507-1337-0821',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5347397 126.9561506)',
        4326
        ),
        naver_spot_id: '1093733362',
        review_count: 0,
        review_score: null,
      },
      {
        name: 'CBS챌린저캠프',
        address: '서울 용산구 청파동1가 청파로73나길 9-3',
        tel: '02-704-9010',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5504843 126.966953)',
        4326
        ),
        naver_spot_id: '20083895',
        review_count: 4,
        review_score: null,
      },
      {
        name: '정가네 Guesthouse',
        address: '서울 용산구 원효로4가 효창원로8길 16',
        tel: '070-7566-2043',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5337095 126.9514345)',
        4326
        ),
        naver_spot_id: '1741202652',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이젤하우스',
        address: '서울 용산구 원효로3가 원효로41가길 25 1층',
        tel: '0507-1457-8757',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5343054 126.9567508)',
        4326
        ),
        naver_spot_id: '1657096026',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이화게스하우스',
        address: '서울 마포구 염리동 대흥로30길 23',
        tel: '02-718-0880',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5564297 126.9473748)',
        4326
        ),
        naver_spot_id: '731135428',
        review_count: 2,
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

    // 신라스테이 마포 이미지
    const existingImages_34827664 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34827664'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_34827664[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34827664' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221213_59/1670914684585DwDXE_JPEG/%C5%A9%B1%E2%BA%AF%C8%AF%B8%B6%C6%F7%BD%C5%B6%F3%BD%BA%C5%D7%C0%CC.jpg',
        }
      ]);
    }

    // 서울가든호텔 이미지
    const existingImages_11659089 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11659089'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11659089[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11659089' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20160516_207/1463383336283r2rb6_JPEG/_2016.jpg',
        }
      ]);
    }

    // 롯데시티호텔 마포 이미지
    const existingImages_13069031 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13069031'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13069031[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13069031' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210406_249/1617674780320vbQTC_JPEG/%BC%F6%C1%A4%B5%CA_%C0%FC%B0%E6.jpg',
        }
      ]);
    }

    // 글래드 마포 이미지
    const existingImages_1905269536 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1905269536'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1905269536[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1905269536' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190614_211/1560499277019zkRrD_JPEG/ia8WgVH3pmuCYeIOvX3RGG01.jpg',
        }
      ]);
    }

    // 로이넷호텔 서울 마포 이미지
    const existingImages_1258989658 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1258989658'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1258989658[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1258989658' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220324_158/1648096781429xWYKB_JPEG/%C8%A3_%BF%DC%B0%FC.jpg',
        }
      ]);
    }

    // 소담스테이 이미지
    const existingImages_1677912375 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1677912375'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1677912375[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1677912375' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190415_239/1555262016090H8UAu_JPEG/TPuhbqQAPoI3uYBsaA4keHhd.jpg',
        }
      ]);
    }

    // 나루호스텔 이미지
    const existingImages_1284077645 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1284077645'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1284077645[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1284077645' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220723_208/1658557145587h98I6_JPEG/18-09-27-13-23-58-861_deco.jpg',
        }
      ]);
    }

    // 공덕스테이마실 이미지
    const existingImages_1276271056 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1276271056'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1276271056[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1276271056' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240315_136/1710513269191vsDlo_JPEG/KakaoTalk_20240315_220435667.jpg',
        }
      ]);
    }

    // 쉼스테이 이미지
    const existingImages_1566501738 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1566501738'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1566501738[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1566501738' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240719_114/1721391663450lNFPC_JPEG/1000013047.jpg',
        }
      ]);
    }

    // 미담스테이 이미지
    const existingImages_1795981163 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1795981163'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1795981163[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1795981163' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240704_203/1720082903441vWe3j_JPEG/KakaoTalk_20240606_173222629_17.jpg',
        }
      ]);
    }

    // 도화스테이 이미지
    const existingImages_1131079773 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1131079773'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1131079773[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1131079773' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250129_125/1738078128260cyiAf_JPEG/1000000672.jpg',
        }
      ]);
    }

    // 메이플스테이 이미지
    const existingImages_1686933954 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1686933954'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1686933954[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1686933954' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250130_171/1738194249736qIgaF_JPEG/KakaoTalk_20250116_180021624.jpg',
        }
      ]);
    }

    // 석이한옥 이미지
    const existingImages_1981558865 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1981558865'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1981558865[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1981558865' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20191023_131/1571812498872HAWKH_JPEG/Td2VrWN-wvom7f1CxujTfEQA.jpg',
        }
      ]);
    }

    // 루비하우스 이미지
    const existingImages_1140154999 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1140154999'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1140154999[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1140154999' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250203_21/1738568856652OSkhp_JPEG/KakaoTalk_20250116_203449984.jpg',
        }
      ]);
    }

    // 가나모텔 이미지
    const existingImages_18767584 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18767584'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18767584[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18767584' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200328_268/1585367323341xB0Jg_JPEG/3zD11Hk6Fjk5I-c6ZWqIi0rg.jpeg.jpg',
        }
      ]);
    }

    // 더하이드아웃빌라 홍대 이미지
    const existingImages_1350577409 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1350577409'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1350577409[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1350577409' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250314_131/17419154071990q0b2_JPEG/KakaoTalk_20250310_110026407.jpg',
        }
      ]);
    }

    // 호텔 나루 서울 엠갤러리 이미지
    const existingImages_1923905766 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1923905766'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1923905766[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1923905766' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240912_278/17261179792554eHEn_JPEG/HotelNaruSeoul_MGallery_Exterior_Night_low.jpg',
        }
      ]);
    }

    // 블루하우스 이미지
    const existingImages_1864376791 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1864376791'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1864376791[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1864376791' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240803_48/1722693036599RDTBS_JPEG/IMG_9521.JPG',
        }
      ]);
    }

    // 한스하우스 이미지
    const existingImages_1516223987 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1516223987'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1516223987[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1516223987' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241119_78/1732009106354M2zdf_PNG/%C7%D1%BD%BA%C7%CF%BF%EC%BD%BA_%B0%A3%C6%C7.png',
        }
      ]);
    }

    // 옥상달빛 이미지
    const existingImages_1587730391 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1587730391'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1587730391[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1587730391' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221214_12/1671011463092TTzzT_JPEG/MyPhoto_1227889134_0050.jpg',
        }
      ]);
    }

    // 낙원하우스 이미지
    const existingImages_1132820832 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1132820832'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1132820832[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1132820832' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240703_181/1719992836931lT3GS_PNG/5.png',
        }
      ]);
    }

    // 에스엔제이하우스 이미지
    const existingImages_1773287634 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1773287634'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1773287634[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1773287634' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241030_175/1730268624515fWNjs_JPEG/1576041791597.jpg',
        }
      ]);
    }

    // 한강게스트하우스 이미지
    const existingImages_34949968 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34949968'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_34949968[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34949968' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20170728_197/1501224943180H6B69_JPEG/186678558563019_3.jpeg',
        }
      ]);
    }

    // 관숙 이미지
    const existingImages_1093618224 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1093618224'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1093618224[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1093618224' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240604_198/1717427334172mgkNx_PNG/kwansook.png',
        }
      ]);
    }

    // 라 비다 렌타 이미지
    const existingImages_1641559848 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1641559848'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1641559848[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1641559848' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220411_58/1649676915162yj6Ac_JPEG/IMG_3570.jpg',
        }
      ]);
    }

    // 에그하우스 이대점 이미지
    const existingImages_38484127 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38484127'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38484127[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38484127' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20160823_42/1471936436982zAlM7_JPEG/176770533976715_0.jpeg',
        }
      ]);
    }

    // 루루디자인 이미지
    const existingImages_1043311826 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1043311826'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1043311826[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1043311826' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20181120_158/1542681532609R4Q14_JPEG/6c255c40-a714-482b-b32c-06c159b758ac.jpg',
        }
      ]);
    }

    // 제로워터스테이 이미지
    const existingImages_1683239135 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1683239135'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1683239135[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1683239135' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250201_147/17383368936794sHJB_JPEG/KakaoTalk_20250201_002040686_01.jpg',
        }
      ]);
    }

    // 서울큐브이화 이미지
    const existingImages_1604269186 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1604269186'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1604269186[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1604269186' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20181021_106/15401317663995f3wg_JPEG/E5_OYphyabrGB6vLbxMSxl82.JPG.jpg',
        }
      ]);
    }

    // 쉼스테이 이미지
    const existingImages_2088380954 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['2088380954'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_2088380954[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '2088380954' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250510_131/1746845597285EpVoO_JPEG/1746840776189-8.jpg',
        }
      ]);
    }

    // 헬로하루 이미지
    const existingImages_2090784799 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['2090784799'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_2090784799[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '2090784799' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250507_116/1746629404174hk18d_JPEG/KakaoTalk_20250507_232922049.jpg',
        }
      ]);
    }

    // 코지용산캐슬 이미지
    const existingImages_1093733362 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1093733362'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1093733362[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1093733362' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241213_248/17340506234777fLoG_PNG/KakaoTalk_20241122_160846277.png',
        }
      ]);
    }

    // 정가네 Guesthouse 이미지
    const existingImages_1741202652 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1741202652'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1741202652[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1741202652' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20201009_271/1602243725977Fbxup_JPEG/_cC_Cxljhttrvj_s0Kve4cGK.jpg',
        }
      ]);
    }

    // 이젤하우스 이미지
    const existingImages_1657096026 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1657096026'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1657096026[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1657096026' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241009_111/1728460179348RS9O5_JPEG/IMG_1635.jpeg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 신라스테이 마포 카테고리 관계
    const existingCategories_34827664 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34827664'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_34827664 = new Set(existingCategories_34827664.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_34827664 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_34827664) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_34827664.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34827664' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울가든호텔 카테고리 관계
    const existingCategories_11659089 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11659089'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11659089 = new Set(existingCategories_11659089.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11659089 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11659089) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11659089.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11659089' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 롯데시티호텔 마포 카테고리 관계
    const existingCategories_13069031 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13069031'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13069031 = new Set(existingCategories_13069031.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13069031 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_13069031) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13069031.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13069031' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 글래드 마포 카테고리 관계
    const existingCategories_1905269536 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1905269536'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1905269536 = new Set(existingCategories_1905269536.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1905269536 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1905269536) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1905269536.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1905269536' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 로이넷호텔 서울 마포 카테고리 관계
    const existingCategories_1258989658 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1258989658'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1258989658 = new Set(existingCategories_1258989658.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1258989658 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1258989658) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1258989658.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1258989658' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 소담스테이 카테고리 관계
    const existingCategories_1677912375 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1677912375'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1677912375 = new Set(existingCategories_1677912375.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1677912375 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1677912375) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1677912375.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1677912375' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 나루호스텔 카테고리 관계
    const existingCategories_1284077645 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1284077645'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1284077645 = new Set(existingCategories_1284077645.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1284077645 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1284077645) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1284077645.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1284077645' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공덕스테이마실 카테고리 관계
    const existingCategories_1276271056 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1276271056'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1276271056 = new Set(existingCategories_1276271056.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1276271056 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1276271056) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1276271056.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1276271056' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포록수 카테고리 관계
    const existingCategories_1181965902 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1181965902'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1181965902 = new Set(existingCategories_1181965902.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1181965902 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1181965902) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1181965902.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1181965902' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 쉼스테이 카테고리 관계
    const existingCategories_1566501738 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1566501738'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1566501738 = new Set(existingCategories_1566501738.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1566501738 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1566501738) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1566501738.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1566501738' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 미담스테이 카테고리 관계
    const existingCategories_1795981163 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1795981163'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1795981163 = new Set(existingCategories_1795981163.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1795981163 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1795981163) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1795981163.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1795981163' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공덕푸르지오시티 카테고리 관계
    const existingCategories_654400991 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['654400991'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_654400991 = new Set(existingCategories_654400991.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_654400991 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_654400991) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_654400991.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '654400991' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도화스테이 카테고리 관계
    const existingCategories_1131079773 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1131079773'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1131079773 = new Set(existingCategories_1131079773.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1131079773 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1131079773) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1131079773.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1131079773' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 메이플스테이 카테고리 관계
    const existingCategories_1686933954 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1686933954'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1686933954 = new Set(existingCategories_1686933954.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1686933954 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1686933954) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1686933954.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1686933954' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코업시티하우스 공덕동점 카테고리 관계
    const existingCategories_999368631 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['999368631'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_999368631 = new Set(existingCategories_999368631.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_999368631 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_999368631) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_999368631.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '999368631' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 석이한옥 카테고리 관계
    const existingCategories_1981558865 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1981558865'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1981558865 = new Set(existingCategories_1981558865.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1981558865 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1981558865) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1981558865.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1981558865' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 루비하우스 카테고리 관계
    const existingCategories_1140154999 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1140154999'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1140154999 = new Set(existingCategories_1140154999.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1140154999 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1140154999) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1140154999.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1140154999' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호유즈 카테고리 관계
    const existingCategories_1091644987 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1091644987'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1091644987 = new Set(existingCategories_1091644987.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1091644987 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1091644987) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1091644987.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1091644987' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // EZ렌트하우스 카테고리 관계
    const existingCategories_522679589 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['522679589'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_522679589 = new Set(existingCategories_522679589.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_522679589 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_522679589) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_522679589.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '522679589' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 알프스 프라이빗 스튜디오 카테고리 관계
    const existingCategories_37848943 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37848943'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37848943 = new Set(existingCategories_37848943.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37848943 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_37848943) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37848943.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37848943' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 가나모텔 카테고리 관계
    const existingCategories_18767584 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18767584'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18767584 = new Set(existingCategories_18767584.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18767584 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_18767584) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18767584.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18767584' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 더하이드아웃빌라 홍대 카테고리 관계
    const existingCategories_1350577409 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1350577409'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1350577409 = new Set(existingCategories_1350577409.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1350577409 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1350577409) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1350577409.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1350577409' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 호텔 나루 서울 엠갤러리 카테고리 관계
    const existingCategories_1923905766 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1923905766'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1923905766 = new Set(existingCategories_1923905766.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1923905766 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1923905766) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1923905766.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1923905766' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // YD레지던스 카테고리 관계
    const existingCategories_33284264 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33284264'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33284264 = new Set(existingCategories_33284264.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33284264 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_33284264) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33284264.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33284264' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 블루하우스 카테고리 관계
    const existingCategories_1864376791 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1864376791'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1864376791 = new Set(existingCategories_1864376791.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1864376791 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1864376791) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1864376791.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1864376791' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 진양모텔 카테고리 관계
    const existingCategories_1476436892 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1476436892'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1476436892 = new Set(existingCategories_1476436892.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1476436892 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1476436892) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1476436892.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1476436892' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한스하우스 카테고리 관계
    const existingCategories_1516223987 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1516223987'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1516223987 = new Set(existingCategories_1516223987.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1516223987 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1516223987) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1516223987.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1516223987' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 옥상달빛 카테고리 관계
    const existingCategories_1587730391 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1587730391'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1587730391 = new Set(existingCategories_1587730391.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1587730391 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1587730391) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1587730391.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1587730391' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 낙원하우스 카테고리 관계
    const existingCategories_1132820832 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1132820832'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1132820832 = new Set(existingCategories_1132820832.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1132820832 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1132820832) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1132820832.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1132820832' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포 아줌마 게스트하우스 카테고리 관계
    const existingCategories_1744406397 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1744406397'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1744406397 = new Set(existingCategories_1744406397.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1744406397 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1744406397) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1744406397.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1744406397' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // GETTY게스트하우스 카테고리 관계
    const existingCategories_1129051213 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1129051213'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1129051213 = new Set(existingCategories_1129051213.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1129051213 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1129051213) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1129051213.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1129051213' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 에스엔제이하우스 카테고리 관계
    const existingCategories_1773287634 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1773287634'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1773287634 = new Set(existingCategories_1773287634.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1773287634 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1773287634) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1773287634.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1773287634' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한강게스트하우스 카테고리 관계
    const existingCategories_34949968 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34949968'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_34949968 = new Set(existingCategories_34949968.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_34949968 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_34949968) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_34949968.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34949968' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 관숙 카테고리 관계
    const existingCategories_1093618224 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1093618224'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1093618224 = new Set(existingCategories_1093618224.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1093618224 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1093618224) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1093618224.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1093618224' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 라 비다 렌타 카테고리 관계
    const existingCategories_1641559848 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1641559848'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1641559848 = new Set(existingCategories_1641559848.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1641559848 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1641559848) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1641559848.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1641559848' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 에그하우스 이대점 카테고리 관계
    const existingCategories_38484127 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38484127'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38484127 = new Set(existingCategories_38484127.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38484127 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_38484127) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38484127.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38484127' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 루루디자인 카테고리 관계
    const existingCategories_1043311826 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1043311826'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1043311826 = new Set(existingCategories_1043311826.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1043311826 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1043311826) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1043311826.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1043311826' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 제로워터스테이 카테고리 관계
    const existingCategories_1683239135 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1683239135'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1683239135 = new Set(existingCategories_1683239135.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1683239135 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1683239135) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1683239135.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1683239135' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울큐브이화 카테고리 관계
    const existingCategories_1604269186 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1604269186'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1604269186 = new Set(existingCategories_1604269186.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1604269186 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1604269186) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1604269186.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1604269186' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // K-하우스2 카테고리 관계
    const existingCategories_1283675160 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1283675160'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1283675160 = new Set(existingCategories_1283675160.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1283675160 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1283675160) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1283675160.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1283675160' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 쉼스테이 카테고리 관계
    const existingCategories_2088380954 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['2088380954'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_2088380954 = new Set(existingCategories_2088380954.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_2088380954 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_2088380954) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_2088380954.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '2088380954' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공간 온유 카테고리 관계
    const existingCategories_1971575910 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1971575910'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1971575910 = new Set(existingCategories_1971575910.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1971575910 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1971575910) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1971575910.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1971575910' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 헬로하루 카테고리 관계
    const existingCategories_2090784799 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['2090784799'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_2090784799 = new Set(existingCategories_2090784799.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_2090784799 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_2090784799) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_2090784799.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '2090784799' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이수행 카테고리 관계
    const existingCategories_343573283 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['343573283'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_343573283 = new Set(existingCategories_343573283.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_343573283 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_343573283) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_343573283.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '343573283' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코지용산캐슬 카테고리 관계
    const existingCategories_1093733362 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1093733362'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1093733362 = new Set(existingCategories_1093733362.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1093733362 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1093733362) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1093733362.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1093733362' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // CBS챌린저캠프 카테고리 관계
    const existingCategories_20083895 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20083895'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20083895 = new Set(existingCategories_20083895.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20083895 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_20083895) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20083895.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20083895' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 정가네 Guesthouse 카테고리 관계
    const existingCategories_1741202652 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1741202652'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1741202652 = new Set(existingCategories_1741202652.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1741202652 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1741202652) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1741202652.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1741202652' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이젤하우스 카테고리 관계
    const existingCategories_1657096026 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1657096026'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1657096026 = new Set(existingCategories_1657096026.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1657096026 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1657096026) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1657096026.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1657096026' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 이화게스하우스 카테고리 관계
    const existingCategories_731135428 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['731135428'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_731135428 = new Set(existingCategories_731135428.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_731135428 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_731135428) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_731135428.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '731135428' LIMIT 1)`),
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
