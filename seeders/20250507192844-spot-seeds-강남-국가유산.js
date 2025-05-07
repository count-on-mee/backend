'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 국가유산
 * 생성일시: 2025-05-07T10:28:52.152Z
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
        name: '봉은사선불당',
        address: '서울 강남구 삼성동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.057739 37.5155219)'
        ),
        naver_spot_id: '18812750',
        review_count: 24,
        review_score: null,
      },
      {
        name: '안중근의사유묵',
        address: '서울 강남구 청담동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0425095 37.5251779)'
        ),
        naver_spot_id: '18808737',
        review_count: 1,
        review_score: null,
      },
      {
        name: '자수가사',
        address: '서울 강남구 논현동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0333148 37.5153911)'
        ),
        naver_spot_id: '18844011',
        review_count: 9,
        review_score: null,
      },
      {
        name: '디자인제이앤비',
        address: '서울 강남구 도곡2동 논현로26길 46-12',
        tel: '02-3447-8506',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0462526 37.4833194)'
        ),
        naver_spot_id: '31600954',
        review_count: 0,
        review_score: null,
      },
      {
        name: '자수사계분경도',
        address: '서울 강남구 논현동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.033325 37.5154167)'
        ),
        naver_spot_id: '802090834',
        review_count: 2,
        review_score: null,
      },
      {
        name: '에치엔씨시티디엔디',
        address: '서울 강남구 청담동 영동대로 738 현대 오피스텔',
        tel: '02-3443-8771',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.055382 37.5240775)'
        ),
        naver_spot_id: '21829529',
        review_count: 0,
        review_score: null,
      },
      {
        name: '국가유산진흥원 한국문화의집',
        address: '서울 강남구 대치동 테헤란로92길 12-9',
        tel: '02-3011-1788',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0605528 37.5067954)'
        ),
        naver_spot_id: '1995239605',
        review_count: 9,
        review_score: null,
      },
      {
        name: '국가유산진흥원',
        address: '서울 강남구 삼성동 봉은사로 406',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0445664 37.5099804)'
        ),
        naver_spot_id: '1257820189',
        review_count: 115,
        review_score: 4.45,
      },
      {
        name: '국가유산진흥원 생물방',
        address: '서울 강남구 삼성동 봉은사로 406',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0445671 37.5099804)'
        ),
        naver_spot_id: '1298180898',
        review_count: 676,
        review_score: 4.59,
      },
      {
        name: '하나은행365 국가유산진흥원',
        address: '서울 강남구 삼성동 봉은사로 406 국가유산진흥원',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0445664 37.5099804)'
        ),
        naver_spot_id: '1222301773',
        review_count: 0,
        review_score: null,
      },
      {
        name: '국가무형유산전수교육관',
        address: '서울 강남구 삼성동 봉은사로 406',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0446375 37.5102417)'
        ),
        naver_spot_id: '18813592',
        review_count: 3,
        review_score: null,
      },
      {
        name: '국가무형유산전수교육관',
        address: '서울 강남구 삼성동 봉은사로 406 국가무형유산전수교육관',
        tel: '02-566-6300',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0446399 37.5099907)'
        ),
        naver_spot_id: '11572028',
        review_count: 23,
        review_score: 4.32,
      },
      {
        name: '서울새남굿보존회',
        address: '서울 강남구 삼성동 봉은사로 406',
        tel: '02-568-9786',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.04465 37.5101917)'
        ),
        naver_spot_id: '1985161210',
        review_count: 1,
        review_score: null,
      },
      {
        name: '서울석촌동고분군',
        address: '서울 송파구 석촌동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1022941 37.5021842)'
        ),
        naver_spot_id: '1564447451',
        review_count: 30,
        review_score: 4.79,
      },
      {
        name: '헤리티지프로젝트',
        address: '서울 강남구 논현동 강남대로 584 6층 6026호',
        tel: '0507-1349-6700',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0206351 37.5139392)'
        ),
        naver_spot_id: '270469319',
        review_count: 1,
        review_score: null,
      },
      {
        name: '서울방이동고분군',
        address: '서울 송파구 방이동 null',
        tel: '02-2147-2800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1178677 37.5081666)'
        ),
        naver_spot_id: '13542568',
        review_count: 10,
        review_score: 5,
      },
      {
        name: '청권사',
        address: '서울 서초구 방배동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(126.9990821 37.482008)'
        ),
        naver_spot_id: '18216470',
        review_count: 9,
        review_score: null,
      },
      {
        name: '석촌동백제초기적석총',
        address: '서울 송파구 석촌동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1022941 37.5021842)'
        ),
        naver_spot_id: '20098705',
        review_count: 10,
        review_score: 4.6,
      },
      {
        name: '건국대학교 서울캠퍼스도정궁경원당',
        address: '서울 광진구 화양동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0804576 37.5422816)'
        ),
        naver_spot_id: '18832267',
        review_count: 5,
        review_score: null,
      },
      {
        name: '흥무대왕김유신사당',
        address: '서울 용산구 보광동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0007111 37.5239641)'
        ),
        naver_spot_id: '18733545',
        review_count: 1,
        review_score: null,
      },
      {
        name: '청권사 부묘소',
        address: '서울 서초구 방배동 null',
        tel: '02-584-3121',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0001685 37.4826054)'
        ),
        naver_spot_id: '20104013',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한국무형유산진흥센터',
        address: '서울 송파구 문정동 충민로 10 가든파이브 툴관 E-26,27호',
        tel: '02-739-6867',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1189685 37.4786597)'
        ),
        naver_spot_id: '33874380',
        review_count: 1,
        review_score: null,
      },
      {
        name: '거창신씨묘역',
        address: '서울 송파구 오금동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1304487 37.5013632)'
        ),
        naver_spot_id: '20104008',
        review_count: 0,
        review_score: null,
      },
      {
        name: '뚝섬만세운동기념비',
        address: '서울 성동구 성수동1가 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0454483 37.5377488)'
        ),
        naver_spot_id: '1010431884',
        review_count: 0,
        review_score: null,
      },
      {
        name: '건축도감',
        address: '서울 서초구 양재2동 마방로10길 15 트윈타워',
        tel: '02-529-8680',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0439025 37.4769385)'
        ),
        naver_spot_id: '31498374',
        review_count: 1,
        review_score: null,
      },
      {
        name: '성남모덕재',
        address: '성남 수정구 복정동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1242526 37.454014)'
        ),
        naver_spot_id: '19218490',
        review_count: 0,
        review_score: null,
      },
      {
        name: '문화류씨묘역',
        address: '서울 송파구 오금동 null',
        tel: '02-410-3412',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1308043 37.5010063)'
        ),
        naver_spot_id: '20095559',
        review_count: 1,
        review_score: null,
      },
      {
        name: '몽산화상법어약록',
        address: '서울 서초구 잠원동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.019825 37.5122196)'
        ),
        naver_spot_id: '647145293',
        review_count: 1,
        review_score: null,
      },
      {
        name: '장단지',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0030033 37.4975985)'
        ),
        naver_spot_id: '18763419',
        review_count: 0,
        review_score: null,
      },
      {
        name: '낙안읍지',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0029911 37.4975229)'
        ),
        naver_spot_id: '18762628',
        review_count: 0,
        review_score: null,
      },
      {
        name: '집어',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0029168 37.4976553)'
        ),
        naver_spot_id: '18763160',
        review_count: 31,
        review_score: null,
      },
      {
        name: '안중근의사유묵',
        address: '서울 용산구 한남동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0097138 37.5368349)'
        ),
        naver_spot_id: '18730380',
        review_count: 5,
        review_score: null,
      },
      {
        name: '유합',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0029142 37.4976087)'
        ),
        naver_spot_id: '18764693',
        review_count: 3,
        review_score: null,
      },
      {
        name: '잡동산이',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0028935 37.4972596)'
        ),
        naver_spot_id: '18764703',
        review_count: 1,
        review_score: null,
      },
      {
        name: '곡성군읍지',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0029586 37.4975876)'
        ),
        naver_spot_id: '18766140',
        review_count: 0,
        review_score: null,
      },
      {
        name: '좌간필어',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.002759 37.4974743)'
        ),
        naver_spot_id: '18764601',
        review_count: 0,
        review_score: null,
      },
      {
        name: '장암일고',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0028421 37.4978386)'
        ),
        naver_spot_id: '18761909',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하학지남',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0030007 37.4975233)'
        ),
        naver_spot_id: '18765951',
        review_count: 0,
        review_score: null,
      },
      {
        name: '야은일고',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0027841 37.4974851)'
        ),
        naver_spot_id: '18762569',
        review_count: 0,
        review_score: null,
      },
      {
        name: '양등시과',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0028034 37.4974482)'
        ),
        naver_spot_id: '18764810',
        review_count: 0,
        review_score: null,
      },
      {
        name: '필득',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0027597 37.4976402)'
        ),
        naver_spot_id: '18761356',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신자하외제현유묵',
        address: '서울 서초구 반포동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0027638 37.4975335)'
        ),
        naver_spot_id: '18761365',
        review_count: 0,
        review_score: null,
      },
      {
        name: '국가유산청 헌릉관리소',
        address: '서울 서초구 내곡동 헌인릉길 36-10 헌인릉',
        tel: '02-445-0347',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0828341 37.466188)'
        ),
        naver_spot_id: '12261219',
        review_count: 40,
        review_score: 4.6,
      },
      {
        name: '국가유산체험센터',
        address: '서울 송파구 잠실동 올림픽로 240 롯데월드 어드벤처 3층 민속박물관 옆',
        tel: '0507-1395-6705',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0980305 37.5110875)'
        ),
        naver_spot_id: '1120383635',
        review_count: 79,
        review_score: 5,
      },
      {
        name: '국가유산수리협회',
        address: '서울 서초구 서초동 서초중앙로 43 7층',
        tel: '02-584-1866',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0156608 37.4855783)'
        ),
        naver_spot_id: '38233952',
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

    // 디자인제이앤비 이미지
    const existingImages_31600954 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31600954'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_31600954[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31600954' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_45/1441002836437wSzqN_JPEG/31600954_0.jpeg',
        }
      ]);
    }

    // 국가유산진흥원 한국문화의집 이미지
    const existingImages_1995239605 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1995239605'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1995239605[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1995239605' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240703_277/1719985644610FOlKf_JPEG/%C6%F7%B8%CB%BA%AF%C8%AF_66A0773na.jpg',
        }
      ]);
    }

    // 국가유산진흥원 이미지
    const existingImages_1257820189 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1257820189'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1257820189[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1257820189' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180418_94/1524041601851KfraM_JPEG/IMG_9845.jpg',
        }
      ]);
    }

    // 하나은행365 국가유산진흥원 이미지
    const existingImages_1222301773 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1222301773'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1222301773[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1222301773' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250108_91/1736317857056wNuef_PNG/naver_place%28%B0%A1%B7%CE%C7%FC%29.png',
        }
      ]);
    }

    // 국가무형유산전수교육관 이미지
    const existingImages_11572028 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11572028'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11572028[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11572028' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220704_231/1656866640817j9pvq_JPEG/%B1%B9%B0%A1%B9%AB%C7%FC%B9%AE%C8%AD%C0%E7%C0%FC%BC%F6%B1%B3%C0%B0%B0%FC_%BF%DC%B0%E6%282021%29-1.jpg',
        }
      ]);
    }

    // 서울새남굿보존회 이미지
    const existingImages_1985161210 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1985161210'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1985161210[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1985161210' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20170926_221/1506413821494CxlCL_JPEG/p0cklxfABl5jrCDCjBJn9cWB.JPG.jpg',
        }
      ]);
    }

    // 서울방이동고분군 이미지
    const existingImages_13542568 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13542568'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13542568[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13542568' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxNjExMThfODYg/MDAxNDc5NDc0NzA4MzUx.L1tFl9osWmfHhX-gjeA_rNi0aYXwTGE2u9rdyi-LyO8g.6S1NiBS5J1Io7PacIFPsZy0oK997X4pxVNX3Tzfkb68g.JPEG.bogirang/P1015197.JPG#4032x3024',
        }
      ]);
    }

    // 석촌동백제초기적석총 이미지
    const existingImages_20098705 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20098705'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20098705[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20098705' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/20150622_289/sstsms_1434939374326JpElw_JPEG/P6217936.JPG#550x412',
        }
      ]);
    }

    // 건국대학교 서울캠퍼스도정궁경원당 이미지
    const existingImages_18832267 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18832267'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18832267[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18832267' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190702_100/1562050050165p93UJ_JPEG/h7lPcJuS8d6YNvjfc2zDVclK.jpg',
        }
      ]);
    }

    // 청권사 부묘소 이미지
    const existingImages_20104013 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20104013'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20104013[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20104013' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/20140725_120/cognos57_1406293630213eX3qb_JPEG/121.jpg#900x674',
        }
      ]);
    }

    // 국가유산청 헌릉관리소 이미지
    const existingImages_12261219 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12261219'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12261219[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12261219' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_215/14410151711820DSmJ_JPEG/116167535822211_0.jpg',
        }
      ]);
    }

    // 국가유산체험센터 이미지
    const existingImages_1120383635 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1120383635'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1120383635[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1120383635' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240909_4/1725858979653iwUG5_JPEG/1.jpg',
        }
      ]);
    }

    // 국가유산수리협회 이미지
    const existingImages_38233952 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38233952'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38233952[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38233952' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240415_294/1713148720131C3agm_PNG/%C7%F9%C8%B8_%B7%CE%B0%ED1.png',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 봉은사선불당 카테고리 관계
    const existingCategories_18812750 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18812750'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18812750 = new Set(existingCategories_18812750.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18812750 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18812750) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18812750.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18812750' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 안중근의사유묵 카테고리 관계
    const existingCategories_18808737 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18808737'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18808737 = new Set(existingCategories_18808737.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18808737 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18808737) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18808737.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18808737' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 자수가사 카테고리 관계
    const existingCategories_18844011 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18844011'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18844011 = new Set(existingCategories_18844011.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18844011 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18844011) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18844011.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18844011' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 디자인제이앤비 카테고리 관계
    const existingCategories_31600954 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31600954'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_31600954 = new Set(existingCategories_31600954.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_31600954 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_31600954) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_31600954.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31600954' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 자수사계분경도 카테고리 관계
    const existingCategories_802090834 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['802090834'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_802090834 = new Set(existingCategories_802090834.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_802090834 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_802090834) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_802090834.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '802090834' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 에치엔씨시티디엔디 카테고리 관계
    const existingCategories_21829529 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21829529'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21829529 = new Set(existingCategories_21829529.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21829529 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_21829529) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21829529.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21829529' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국가유산진흥원 한국문화의집 카테고리 관계
    const existingCategories_1995239605 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1995239605'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1995239605 = new Set(existingCategories_1995239605.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1995239605 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1995239605) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1995239605.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1995239605' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국가유산진흥원 카테고리 관계
    const existingCategories_1257820189 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1257820189'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1257820189 = new Set(existingCategories_1257820189.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1257820189 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_1257820189) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1257820189.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1257820189' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국가유산진흥원 생물방 카테고리 관계
    const existingCategories_1298180898 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1298180898'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1298180898 = new Set(existingCategories_1298180898.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1298180898 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1298180898) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1298180898.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1298180898' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 하나은행365 국가유산진흥원 카테고리 관계
    const existingCategories_1222301773 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1222301773'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1222301773 = new Set(existingCategories_1222301773.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1222301773 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_1222301773) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1222301773.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1222301773' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국가무형유산전수교육관 카테고리 관계
    const existingCategories_18813592 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18813592'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18813592 = new Set(existingCategories_18813592.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18813592 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_18813592) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18813592.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18813592' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국가무형유산전수교육관 카테고리 관계
    const existingCategories_11572028 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11572028'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11572028 = new Set(existingCategories_11572028.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11572028 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_11572028) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11572028.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11572028' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울새남굿보존회 카테고리 관계
    const existingCategories_1985161210 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1985161210'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1985161210 = new Set(existingCategories_1985161210.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1985161210 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_1985161210) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1985161210.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1985161210' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울석촌동고분군 카테고리 관계
    const existingCategories_1564447451 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1564447451'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1564447451 = new Set(existingCategories_1564447451.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1564447451 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_1564447451) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1564447451.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1564447451' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 헤리티지프로젝트 카테고리 관계
    const existingCategories_270469319 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['270469319'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_270469319 = new Set(existingCategories_270469319.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_270469319 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_270469319) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_270469319.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '270469319' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울방이동고분군 카테고리 관계
    const existingCategories_13542568 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13542568'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13542568 = new Set(existingCategories_13542568.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13542568 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_13542568) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13542568.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13542568' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청권사 카테고리 관계
    const existingCategories_18216470 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18216470'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18216470 = new Set(existingCategories_18216470.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18216470 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18216470) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18216470.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18216470' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 석촌동백제초기적석총 카테고리 관계
    const existingCategories_20098705 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20098705'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20098705 = new Set(existingCategories_20098705.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20098705 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_20098705) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20098705.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20098705' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 건국대학교 서울캠퍼스도정궁경원당 카테고리 관계
    const existingCategories_18832267 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18832267'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18832267 = new Set(existingCategories_18832267.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18832267 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18832267) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18832267.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18832267' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 흥무대왕김유신사당 카테고리 관계
    const existingCategories_18733545 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18733545'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18733545 = new Set(existingCategories_18733545.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18733545 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18733545) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18733545.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18733545' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청권사 부묘소 카테고리 관계
    const existingCategories_20104013 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20104013'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20104013 = new Set(existingCategories_20104013.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20104013 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_20104013) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20104013.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20104013' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한국무형유산진흥센터 카테고리 관계
    const existingCategories_33874380 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33874380'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33874380 = new Set(existingCategories_33874380.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33874380 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_33874380) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33874380.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33874380' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 거창신씨묘역 카테고리 관계
    const existingCategories_20104008 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20104008'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20104008 = new Set(existingCategories_20104008.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20104008 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_20104008) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20104008.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20104008' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 뚝섬만세운동기념비 카테고리 관계
    const existingCategories_1010431884 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1010431884'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1010431884 = new Set(existingCategories_1010431884.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1010431884 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_1010431884) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1010431884.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1010431884' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 건축도감 카테고리 관계
    const existingCategories_31498374 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31498374'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_31498374 = new Set(existingCategories_31498374.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_31498374 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_31498374) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_31498374.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31498374' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 성남모덕재 카테고리 관계
    const existingCategories_19218490 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19218490'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19218490 = new Set(existingCategories_19218490.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19218490 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_19218490) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19218490.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19218490' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 문화류씨묘역 카테고리 관계
    const existingCategories_20095559 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20095559'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20095559 = new Set(existingCategories_20095559.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20095559 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_20095559) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20095559.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20095559' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 몽산화상법어약록 카테고리 관계
    const existingCategories_647145293 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['647145293'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_647145293 = new Set(existingCategories_647145293.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_647145293 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_647145293) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_647145293.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '647145293' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 장단지 카테고리 관계
    const existingCategories_18763419 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18763419'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18763419 = new Set(existingCategories_18763419.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18763419 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18763419) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18763419.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18763419' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 낙안읍지 카테고리 관계
    const existingCategories_18762628 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18762628'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18762628 = new Set(existingCategories_18762628.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18762628 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18762628) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18762628.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18762628' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 집어 카테고리 관계
    const existingCategories_18763160 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18763160'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18763160 = new Set(existingCategories_18763160.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18763160 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18763160) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18763160.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18763160' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 안중근의사유묵 카테고리 관계
    const existingCategories_18730380 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18730380'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18730380 = new Set(existingCategories_18730380.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18730380 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18730380) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18730380.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18730380' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 유합 카테고리 관계
    const existingCategories_18764693 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18764693'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18764693 = new Set(existingCategories_18764693.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18764693 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18764693) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18764693.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18764693' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 잡동산이 카테고리 관계
    const existingCategories_18764703 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18764703'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18764703 = new Set(existingCategories_18764703.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18764703 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18764703) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18764703.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18764703' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 곡성군읍지 카테고리 관계
    const existingCategories_18766140 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18766140'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18766140 = new Set(existingCategories_18766140.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18766140 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18766140) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18766140.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18766140' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 좌간필어 카테고리 관계
    const existingCategories_18764601 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18764601'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18764601 = new Set(existingCategories_18764601.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18764601 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18764601) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18764601.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18764601' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 장암일고 카테고리 관계
    const existingCategories_18761909 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18761909'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18761909 = new Set(existingCategories_18761909.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18761909 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18761909) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18761909.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18761909' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 하학지남 카테고리 관계
    const existingCategories_18765951 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18765951'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18765951 = new Set(existingCategories_18765951.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18765951 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18765951) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18765951.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18765951' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 야은일고 카테고리 관계
    const existingCategories_18762569 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18762569'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18762569 = new Set(existingCategories_18762569.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18762569 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18762569) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18762569.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18762569' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 양등시과 카테고리 관계
    const existingCategories_18764810 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18764810'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18764810 = new Set(existingCategories_18764810.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18764810 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18764810) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18764810.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18764810' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 필득 카테고리 관계
    const existingCategories_18761356 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18761356'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18761356 = new Set(existingCategories_18761356.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18761356 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18761356) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18761356.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18761356' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신자하외제현유묵 카테고리 관계
    const existingCategories_18761365 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18761365'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18761365 = new Set(existingCategories_18761365.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18761365 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_18761365) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18761365.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18761365' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국가유산청 헌릉관리소 카테고리 관계
    const existingCategories_12261219 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12261219'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12261219 = new Set(existingCategories_12261219.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12261219 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_12261219) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12261219.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12261219' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국가유산체험센터 카테고리 관계
    const existingCategories_1120383635 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1120383635'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1120383635 = new Set(existingCategories_1120383635.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1120383635 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1120383635) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1120383635.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1120383635' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국가유산수리협회 카테고리 관계
    const existingCategories_38233952 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38233952'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38233952 = new Set(existingCategories_38233952.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38233952 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_38233952) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38233952.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38233952' LIMIT 1)`),
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
