'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 도서관
 * 생성일시: 2025-05-07T10:28:44.497Z
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
        name: '별마당 도서관',
        address: '서울 강남구 삼성동 영동대로 513 스타필드 코엑스몰 B1',
        tel: '02-6002-3031',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.060182 37.5100516)'
        ),
        naver_spot_id: '214665616',
        review_count: 204,
        review_score: null,
      },
      {
        name: '국립어린이청소년도서관',
        address: '서울 강남구 역삼동 테헤란로7길 21 국립어린이청소년도서관',
        tel: '02-3413-4800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0296909 37.5009712)'
        ),
        naver_spot_id: '11797439',
        review_count: 7,
        review_score: null,
      },
      {
        name: '강남구립 개포하늘꿈도서관',
        address: '서울 강남구 일원동 개포로110길 54',
        tel: '02-451-1511',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0803569 37.4906693)'
        ),
        naver_spot_id: '1707276455',
        review_count: 2,
        review_score: null,
      },
      {
        name: '논현문화마루도서관',
        address: '서울 강남구 논현동 논현로131길 40',
        tel: '02-512-8580',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0271061 37.5138471)'
        ),
        naver_spot_id: '1363801518',
        review_count: 3,
        review_score: null,
      },
      {
        name: '소전서림',
        address: '서울 강남구 청담동 영동대로138길 23 지하1층',
        tel: '0507-1411-0820',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0561268 37.5237089)'
        ),
        naver_spot_id: '1609022606',
        review_count: 233,
        review_score: 4.49,
      },
      {
        name: '도곡정보문화도서관',
        address: '서울 강남구 도곡동 도곡로18길 57 도곡정보문화도서관',
        tel: '1644-3227',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0386752 37.4884378)'
        ),
        naver_spot_id: '20481471',
        review_count: 1,
        review_score: null,
      },
      {
        name: '현대카드 쿠킹라이브러리',
        address: '서울 강남구 신사동 압구정로46길 46',
        tel: '02-513-2900',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0356863 37.525663)'
        ),
        naver_spot_id: '813993515',
        review_count: 2,
        review_score: null,
      },
      {
        name: '못골한옥어린이도서관',
        address: '서울 강남구 자곡동 자곡로7길 3',
        tel: '02-2226-5930',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0994191 37.4731055)'
        ),
        naver_spot_id: '1670200001',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울특별시교육청 강남도서관',
        address: '서울 강남구 삼성동 선릉로116길 45 서울특별시교육청 강남도서관',
        tel: '02-3448-4741',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0469807 37.5137232)'
        ),
        naver_spot_id: '11591979',
        review_count: 0,
        review_score: null,
      },
      {
        name: '못골도서관',
        address: '서울 강남구 자곡동 자곡로 116',
        tel: '02-459-5522',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0962423 37.4716827)'
        ),
        naver_spot_id: '1198601582',
        review_count: 5,
        review_score: null,
      },
      {
        name: '역삼도서관',
        address: '서울 강남구 역삼동 역삼로7길 16 역삼1문화센터 5층',
        tel: '02-508-1139',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0331975 37.4954127)'
        ),
        naver_spot_id: '13456238',
        review_count: 1,
        review_score: null,
      },
      {
        name: '독학재수학원 잇올 스파르타  대치센터 1관',
        address: '서울 강남구 대치동 역삼로 428 우일빌딩 2, 3, 4층',
        tel: '0507-1398-1673',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0539386 37.5013051)'
        ),
        naver_spot_id: '1314987148',
        review_count: 50,
        review_score: 4.46,
      },
      {
        name: '강남구립논현도서관',
        address: '서울 강남구 논현동 학동로43길 17 논현2문화센터 6층',
        tel: '02-3443-7650',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0371909 37.5171836)'
        ),
        naver_spot_id: '13445491',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강남구립 행복한도서관',
        address: '서울 강남구 대치동 영동대로65길 24 대치2동주민센터 3층',
        tel: '02-567-3833',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0643221 37.5024045)'
        ),
        naver_spot_id: '13182267',
        review_count: 0,
        review_score: null,
      },
      {
        name: '일원라온영어도서관',
        address: '서울 강남구 일원동 영동대로 22 B1',
        tel: '02-6712-0595',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0765476 37.4915016)'
        ),
        naver_spot_id: '1676340566',
        review_count: 0,
        review_score: null,
      },
      {
        name: '역삼푸른솔도서관',
        address: '서울 강남구 역삼동 테헤란로8길 36 4층',
        tel: '02-2051-1178',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0319368 37.4964208)'
        ),
        naver_spot_id: '13441777',
        review_count: 1,
        review_score: null,
      },
      {
        name: '정다운도서관',
        address: '서울 강남구 청담동 학동로67길 11 청담평생학습관 3층',
        tel: '02-512-9326',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0463444 37.5189899)'
        ),
        naver_spot_id: '13446053',
        review_count: 0,
        review_score: null,
      },
      {
        name: '즐거운 도서관',
        address: '서울 강남구 대치4동 도곡로77길 23 대치4동주민센터',
        tel: '02-565-7533',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0578185 37.4997257)'
        ),
        naver_spot_id: '13462097',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강남구립 대치도서관',
        address: '서울 강남구 대치동 삼성로 212 은마아파트 복지상가 2층 215호',
        tel: '02-565-6666',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0639536 37.4958832)'
        ),
        naver_spot_id: '13457473',
        review_count: 0,
        review_score: null,
      },
      {
        name: '열린도서관',
        address: '서울 강남구 일원동 일원로 115 삼성생명빌딩 B동 203호',
        tel: '02-3412-3970',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0847672 37.4841336)'
        ),
        naver_spot_id: '34259452',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울특별시교육청 개포도서관',
        address: '서울 강남구 개포2동 선릉로4길 30 개포도서관',
        tel: '02-3460-8200',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0638859 37.4831038)'
        ),
        naver_spot_id: '11591991',
        review_count: 1,
        review_score: null,
      },
      {
        name: '역삼2 작은도서관',
        address: '서울 강남구 역삼동 언주로 314 강남프라자 2층',
        tel: '02-567-0930',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0464934 37.495899)'
        ),
        naver_spot_id: '36818290',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강남구립청담도서관',
        address: '서울 강남구 청담동 압구정로79길 26 청담동주민센터',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.049385 37.5251297)'
        ),
        naver_spot_id: '1626725566',
        review_count: 0,
        review_score: null,
      },
      {
        name: '세곡마루도서관',
        address: '서울 강남구 세곡동 헌릉로590길 68',
        tel: '02-2176-0634',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1027605 37.4610881)'
        ),
        naver_spot_id: '1642554970',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강남구립삼성도서관',
        address: '서울 강남구 삼성동 봉은사로 616',
        tel: '02-568-9984',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0628074 37.5143647)'
        ),
        naver_spot_id: '13445770',
        review_count: 1,
        review_score: null,
      },
      {
        name: '독학재수학원 잇올 스파르타 강남센터',
        address: '서울 강남구 역삼동 강남대로78길 12 예미프레스티지빌딩 5, 6층',
        tel: '0507-1347-0871',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0303765 37.4948606)'
        ),
        naver_spot_id: '1444989802',
        review_count: 20,
        review_score: 3.75,
      },
      {
        name: '논현문화마루도서관 별관',
        address: '서울 강남구 논현동 학동로 169 3층',
        tel: '02-511-7466',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0293308 37.5138827)'
        ),
        naver_spot_id: '21349025',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대치1 작은도서관',
        address: '서울 강남구 대치1동 남부순환로391길 19 대치1문화센터 지하1층',
        tel: '02-3452-1170',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.05675 37.49325)'
        ),
        naver_spot_id: '13444186',
        review_count: 0,
        review_score: null,
      },
      {
        name: '청운도서관',
        address: '서울 강남구 역삼동 언주로65길 5',
        tel: '02-569-7061',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.045516 37.495185)'
        ),
        naver_spot_id: '18793326',
        review_count: 0,
        review_score: null,
      },
      {
        name: '개포도서관스마트도서관',
        address: '서울 강남구 개포동 선릉로4길 30',
        tel: '02-3460-8251',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0634433 37.4835689)'
        ),
        naver_spot_id: '1323875812',
        review_count: 0,
        review_score: null,
      },
      {
        name: '통계청 나라셈도서관',
        address: '서울 강남구 논현동 언주로 721 서울세관 별관 4층',
        tel: '02-3438-8500',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0338164 37.5182805)'
        ),
        naver_spot_id: '36860245',
        review_count: 0,
        review_score: null,
      },
      {
        name: '독학재수학원 잇올 스파르타 대치센터 2관',
        address: '서울 강남구 대치동 역삼로 428 우일빌딩 5, 6, 7층',
        tel: '0507-1366-6205',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0539121 37.5013046)'
        ),
        naver_spot_id: '1537658691',
        review_count: 23,
        review_score: null,
      },
      {
        name: '잇올 스파르타 대치센터 3관',
        address: '서울 강남구 대치동 역삼로 428 우일빌딩 5, 6, 7층',
        tel: '0507-1398-5272',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0539453 37.5013348)'
        ),
        naver_spot_id: '1083415611',
        review_count: 3,
        review_score: null,
      },
      {
        name: '세곡도서관',
        address: '서울 강남구 율현동 밤고개로 286',
        tel: '02-445-0297',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1069349 37.4690458)'
        ),
        naver_spot_id: '13461532',
        review_count: 2,
        review_score: null,
      },
      {
        name: '율현공원 책쉼터',
        address: '서울 강남구 율현동 밤고개로21길 85',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1150605 37.4746397)'
        ),
        naver_spot_id: '1799213783',
        review_count: 1,
        review_score: null,
      },
      {
        name: '신사동 작은도서관',
        address: '서울 강남구 신사동 압구정로 128',
        tel: '02-3423-7334',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0227995 37.5239832)'
        ),
        naver_spot_id: '36818242',
        review_count: 0,
        review_score: null,
      },
      {
        name: '관리형독서실 잇올 스파르타 강남센터',
        address: '서울 강남구 역삼동 강남대로78길 12 예미프레스티지 빌딩 5층, 6층',
        tel: '0507-1353-0871',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0303768 37.4948886)'
        ),
        naver_spot_id: '1340782203',
        review_count: 2,
        review_score: null,
      },
      {
        name: '개포4동 작은도서관',
        address: '서울 강남구 개포동 개포로24길 33 3층',
        tel: '02-3423-7884',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0498361 37.4771773)'
        ),
        naver_spot_id: '36332534',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수서동 작은도서관',
        address: '서울 강남구 수서동 광평로 301-4 수서동주민센터2층',
        tel: '02-3423-8584',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1049709 37.4889249)'
        ),
        naver_spot_id: '36818073',
        review_count: 0,
        review_score: null,
      },
      {
        name: '다움영어도서관',
        address: '서울 강남구 일원동 개포로124길 7',
        tel: '02-445-0714',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0828779 37.4941231)'
        ),
        naver_spot_id: '36818849',
        review_count: 0,
        review_score: null,
      },
      {
        name: '압구정동작은도서관',
        address: '서울 강남구 압구정동 압구정로33길 48 압구정동주민센터',
        tel: '02-3423-7634',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0307591 37.5306401)'
        ),
        naver_spot_id: '11843711',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수서동구립도서관(2026년12월예정)',
        address: '서울 강남구 수서동 null',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0938456 37.4838153)'
        ),
        naver_spot_id: '1489194370',
        review_count: 0,
        review_score: null,
      },
      {
        name: '데시앙포레숲속작은도서관',
        address: '서울 강남구 수서동 광평로34길 55 강남데시앙포레아파트',
        tel: '0507-1400-4301',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0919495 37.4811727)'
        ),
        naver_spot_id: '37445620',
        review_count: 0,
        review_score: null,
      },
      {
        name: '일원1동작은도서관',
        address: '서울 강남구 일원동 양재대로55길 14',
        tel: '02-3423-8384',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0880441 37.4918671)'
        ),
        naver_spot_id: '1993683100',
        review_count: 0,
        review_score: null,
      },
      {
        name: '도곡2동 작은 도서관',
        address: '서울 강남구 도곡동 남부순환로378길 34-9 도곡2동주민센터',
        tel: '02-3423-7584',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.04636 37.48371)'
        ),
        naver_spot_id: '36332565',
        review_count: 0,
        review_score: null,
      },
      {
        name: '빛어린이도서관',
        address: '서울 강남구 신사동 논현로153길 26',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.025806 37.5207155)'
        ),
        naver_spot_id: '1803956250',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아름다운도서관',
        address: '서울 강남구 대치동 삼성로70길 4 지층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0597511 37.5020239)'
        ),
        naver_spot_id: '1841844952',
        review_count: 0,
        review_score: null,
      },
      {
        name: '루디아어린이영어도서관',
        address: '서울 강남구 세곡동 헌릉로 569 8층',
        tel: '070-7092-8315',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1012407 37.4657594)'
        ),
        naver_spot_id: '1791122569',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한국무역협회도서관',
        address: '서울 강남구 삼성동 영동대로 511',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.06085 37.5102917)'
        ),
        naver_spot_id: '1105992417',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울특별시립강남도서관 어린이실',
        address: '서울 강남구 삼성2동 선릉로116길 57',
        tel: '02-3448-4742',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0467662 37.5146351)'
        ),
        naver_spot_id: '1713974105',
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

    // 별마당 도서관 이미지
    const existingImages_214665616 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['214665616'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_214665616[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '214665616' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190319_33/1552967920088148O7_JPEG/9-0j9Ot1jftF4yMiHpZdX1Tp.jpg',
        }
      ]);
    }

    // 국립어린이청소년도서관 이미지
    const existingImages_11797439 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11797439'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11797439[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11797439' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230720_262/1689811424559ku00M_JPEG/%B5%B5%BC%AD%B0%FC_%C0%FC%B0%E6%282%29-1.JPG',
        }
      ]);
    }

    // 강남구립 개포하늘꿈도서관 이미지
    const existingImages_1707276455 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1707276455'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1707276455[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1707276455' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20231124_100/1700787129516hqUf4_JPEG/%C5%A9%B1%E2%BA%AF%C8%AF%B0%B3%C6%F7%C7%CF%B4%C3%B2%DE%B5%B5%BC%AD%B0%FC_%C0%FC%B0%E6_%281%29.jpg',
        }
      ]);
    }

    // 소전서림 이미지
    const existingImages_1609022606 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1609022606'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1609022606[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1609022606' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20191127_270/1574824349098hVQAQ_JPEG/MeF17-ZKjWqU0qS0MRExnN7m.jpg',
        }
      ]);
    }

    // 도곡정보문화도서관 이미지
    const existingImages_20481471 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20481471'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20481471[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20481471' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_228/14410517881633s724_JPEG/146261595124928_0.jpeg',
        }
      ]);
    }

    // 못골한옥어린이도서관 이미지
    const existingImages_1670200001 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1670200001'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1670200001[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1670200001' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200313_85/15840998243932Kdg6_JPEG/ePLSgIPQHUKFtMlrhzbKwx8L.jpeg.jpg',
        }
      ]);
    }

    // 서울특별시교육청 강남도서관 이미지
    const existingImages_11591979 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11591979'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11591979[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11591979' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20241112_234/1731386968899bmS6H_JPEG/%B5%B5%BC%AD%B0%FC_%C0%FC%B0%E6_1.jpg',
        }
      ]);
    }

    // 못골도서관 이미지
    const existingImages_1198601582 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1198601582'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1198601582[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1198601582' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200205_269/1580855657951R3SDv_JPEG/4VsyrIpS34O56JwJ4Vehb-Cq.jpg',
        }
      ]);
    }

    // 독학재수학원 잇올 스파르타  대치센터 1관 이미지
    const existingImages_1314987148 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1314987148'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1314987148[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1314987148' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220106_21/1641454258992larV7_JPEG/%B4%EB%C4%A12%B0%FC_%2824%29.jpg',
        }
      ]);
    }

    // 강남구립 대치도서관 이미지
    const existingImages_13457473 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13457473'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13457473[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13457473' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240811_26/1723340916682km9jA_JPEG/%B4%EB%C4%A1%B5%B5%BC%AD%B0%FC_%C0%D4%B1%B8.JPG',
        }
      ]);
    }

    // 열린도서관 이미지
    const existingImages_34259452 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34259452'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_34259452[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34259452' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200420_281/1587353487818YrJ54_JPEG/SUHbVZCGy8GhJ6aHcrZ-j1zs.jpg',
        }
      ]);
    }

    // 서울특별시교육청 개포도서관 이미지
    const existingImages_11591991 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11591991'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11591991[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11591991' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240724_55/1721805785963h8uHI_PNG/%C8%DE%B0%FC%BE%C8%B3%BB_%C0%D3%BD%C3%BB%E7%B9%AB%BD%C7%C1%D6%BC%D2_-001.png',
        }
      ]);
    }

    // 세곡마루도서관 이미지
    const existingImages_1642554970 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1642554970'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1642554970[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1642554970' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20201116_8/1605495208262eClrY_JPEG/QPtAq67YASKhjQ0LzEGHpsqQ.jpg',
        }
      ]);
    }

    // 독학재수학원 잇올 스파르타 강남센터 이미지
    const existingImages_1444989802 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1444989802'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1444989802[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1444989802' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250313_98/1741826849716jwOVk_PNG/%B0%AD%B3%B2%BC%BE%C5%CD_0.png',
        }
      ]);
    }

    // 개포도서관스마트도서관 이미지
    const existingImages_1323875812 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1323875812'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1323875812[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1323875812' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210827_270/1630028230907FJWtm_JPEG/l4HbTJ9PQqH69psxwtT65suN.jpg',
        }
      ]);
    }

    // 통계청 나라셈도서관 이미지
    const existingImages_36860245 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36860245'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36860245[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36860245' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20160616_141/1466045075528hxui0_PNG/176566517455377_0.png',
        }
      ]);
    }

    // 독학재수학원 잇올 스파르타 대치센터 2관 이미지
    const existingImages_1537658691 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1537658691'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1537658691[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1537658691' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220415_75/1649991313133IR7VU_JPEG/%B4%EB%C4%A12%B0%FC_%287%29.jpg',
        }
      ]);
    }

    // 잇올 스파르타 대치센터 3관 이미지
    const existingImages_1083415611 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1083415611'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1083415611[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1083415611' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220415_201/1650000639151AmVif_JPEG/%B7%CE%B0%ED%C1%B6%B8%ED.jpg',
        }
      ]);
    }

    // 율현공원 책쉼터 이미지
    const existingImages_1799213783 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1799213783'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1799213783[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1799213783' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240709_81/1720484679557vIiPd_JPEG/IMG_1521.jpeg',
        }
      ]);
    }

    // 관리형독서실 잇올 스파르타 강남센터 이미지
    const existingImages_1340782203 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1340782203'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1340782203[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1340782203' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250313_107/1741826852735lUuwq_PNG/%B0%AD%B3%B2%BC%BE%C5%CD_0.png',
        }
      ]);
    }

    // 개포4동 작은도서관 이미지
    const existingImages_36332534 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36332534'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36332534[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36332534' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20221202_71/1669960561741jxeov_JPEG/1669960544915.jpg',
        }
      ]);
    }

    // 다움영어도서관 이미지
    const existingImages_36818849 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36818849'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36818849[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36818849' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200202_128/1580627573572SMCNc_JPEG/nrnn0R2EakRz6B69E1i8TvaD.jpg',
        }
      ]);
    }

    // 데시앙포레숲속작은도서관 이미지
    const existingImages_37445620 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37445620'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37445620[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37445620' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20160108_231/1452228431049jN9jt_JPEG/176054524830097_0.jpeg',
        }
      ]);
    }

    // 빛어린이도서관 이미지
    const existingImages_1803956250 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1803956250'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1803956250[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1803956250' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190525_103/15587215679016ps2h_JPEG/MmOdQUSan_s0WZblql0nR2Fa.jpg',
        }
      ]);
    }

    // 루디아어린이영어도서관 이미지
    const existingImages_1791122569 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1791122569'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1791122569[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1791122569' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190604_111/1559617710882i8Kte_JPEG/Z-ZCaCWk7kyLxr-83YMMectl.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 별마당 도서관 카테고리 관계
    const existingCategories_214665616 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['214665616'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_214665616 = new Set(existingCategories_214665616.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_214665616 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_214665616) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_214665616.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '214665616' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 국립어린이청소년도서관 카테고리 관계
    const existingCategories_11797439 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11797439'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11797439 = new Set(existingCategories_11797439.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11797439 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11797439) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11797439.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11797439' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남구립 개포하늘꿈도서관 카테고리 관계
    const existingCategories_1707276455 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1707276455'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1707276455 = new Set(existingCategories_1707276455.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1707276455 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1707276455) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1707276455.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1707276455' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 논현문화마루도서관 카테고리 관계
    const existingCategories_1363801518 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1363801518'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1363801518 = new Set(existingCategories_1363801518.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1363801518 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1363801518) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1363801518.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1363801518' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 소전서림 카테고리 관계
    const existingCategories_1609022606 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1609022606'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1609022606 = new Set(existingCategories_1609022606.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1609022606 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1609022606) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1609022606.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1609022606' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도곡정보문화도서관 카테고리 관계
    const existingCategories_20481471 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20481471'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20481471 = new Set(existingCategories_20481471.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20481471 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_20481471) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20481471.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20481471' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 현대카드 쿠킹라이브러리 카테고리 관계
    const existingCategories_813993515 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['813993515'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_813993515 = new Set(existingCategories_813993515.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_813993515 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_813993515) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_813993515.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '813993515' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 못골한옥어린이도서관 카테고리 관계
    const existingCategories_1670200001 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1670200001'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1670200001 = new Set(existingCategories_1670200001.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1670200001 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1670200001) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1670200001.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1670200001' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울특별시교육청 강남도서관 카테고리 관계
    const existingCategories_11591979 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11591979'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11591979 = new Set(existingCategories_11591979.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11591979 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11591979) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11591979.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11591979' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 못골도서관 카테고리 관계
    const existingCategories_1198601582 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1198601582'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1198601582 = new Set(existingCategories_1198601582.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1198601582 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1198601582) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1198601582.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1198601582' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 역삼도서관 카테고리 관계
    const existingCategories_13456238 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13456238'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13456238 = new Set(existingCategories_13456238.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13456238 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13456238) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13456238.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13456238' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 독학재수학원 잇올 스파르타  대치센터 1관 카테고리 관계
    const existingCategories_1314987148 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1314987148'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1314987148 = new Set(existingCategories_1314987148.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1314987148 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1314987148) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1314987148.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1314987148' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남구립논현도서관 카테고리 관계
    const existingCategories_13445491 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13445491'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13445491 = new Set(existingCategories_13445491.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13445491 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13445491) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13445491.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13445491' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남구립 행복한도서관 카테고리 관계
    const existingCategories_13182267 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13182267'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13182267 = new Set(existingCategories_13182267.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13182267 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13182267) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13182267.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13182267' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 일원라온영어도서관 카테고리 관계
    const existingCategories_1676340566 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1676340566'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1676340566 = new Set(existingCategories_1676340566.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1676340566 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1676340566) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1676340566.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1676340566' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 역삼푸른솔도서관 카테고리 관계
    const existingCategories_13441777 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13441777'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13441777 = new Set(existingCategories_13441777.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13441777 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13441777) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13441777.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13441777' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 정다운도서관 카테고리 관계
    const existingCategories_13446053 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13446053'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13446053 = new Set(existingCategories_13446053.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13446053 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13446053) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13446053.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13446053' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 즐거운 도서관 카테고리 관계
    const existingCategories_13462097 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13462097'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13462097 = new Set(existingCategories_13462097.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13462097 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13462097) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13462097.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13462097' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남구립 대치도서관 카테고리 관계
    const existingCategories_13457473 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13457473'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13457473 = new Set(existingCategories_13457473.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13457473 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13457473) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13457473.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13457473' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 열린도서관 카테고리 관계
    const existingCategories_34259452 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34259452'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_34259452 = new Set(existingCategories_34259452.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_34259452 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_34259452) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_34259452.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34259452' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울특별시교육청 개포도서관 카테고리 관계
    const existingCategories_11591991 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11591991'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11591991 = new Set(existingCategories_11591991.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11591991 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11591991) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11591991.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11591991' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 역삼2 작은도서관 카테고리 관계
    const existingCategories_36818290 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36818290'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36818290 = new Set(existingCategories_36818290.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36818290 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36818290) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36818290.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36818290' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남구립청담도서관 카테고리 관계
    const existingCategories_1626725566 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1626725566'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1626725566 = new Set(existingCategories_1626725566.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1626725566 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1626725566) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1626725566.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1626725566' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 세곡마루도서관 카테고리 관계
    const existingCategories_1642554970 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1642554970'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1642554970 = new Set(existingCategories_1642554970.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1642554970 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1642554970) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1642554970.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1642554970' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남구립삼성도서관 카테고리 관계
    const existingCategories_13445770 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13445770'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13445770 = new Set(existingCategories_13445770.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13445770 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13445770) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13445770.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13445770' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 독학재수학원 잇올 스파르타 강남센터 카테고리 관계
    const existingCategories_1444989802 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1444989802'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1444989802 = new Set(existingCategories_1444989802.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1444989802 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1444989802) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1444989802.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1444989802' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 논현문화마루도서관 별관 카테고리 관계
    const existingCategories_21349025 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21349025'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21349025 = new Set(existingCategories_21349025.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21349025 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_21349025) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21349025.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21349025' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대치1 작은도서관 카테고리 관계
    const existingCategories_13444186 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13444186'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13444186 = new Set(existingCategories_13444186.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13444186 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13444186) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13444186.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13444186' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청운도서관 카테고리 관계
    const existingCategories_18793326 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18793326'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18793326 = new Set(existingCategories_18793326.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18793326 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_18793326) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18793326.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18793326' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 개포도서관스마트도서관 카테고리 관계
    const existingCategories_1323875812 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1323875812'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1323875812 = new Set(existingCategories_1323875812.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1323875812 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1323875812) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1323875812.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1323875812' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 통계청 나라셈도서관 카테고리 관계
    const existingCategories_36860245 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36860245'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36860245 = new Set(existingCategories_36860245.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36860245 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36860245) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36860245.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36860245' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 독학재수학원 잇올 스파르타 대치센터 2관 카테고리 관계
    const existingCategories_1537658691 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1537658691'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1537658691 = new Set(existingCategories_1537658691.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1537658691 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1537658691) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1537658691.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1537658691' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 잇올 스파르타 대치센터 3관 카테고리 관계
    const existingCategories_1083415611 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1083415611'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1083415611 = new Set(existingCategories_1083415611.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1083415611 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1083415611) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1083415611.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1083415611' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 세곡도서관 카테고리 관계
    const existingCategories_13461532 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13461532'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13461532 = new Set(existingCategories_13461532.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13461532 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_13461532) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13461532.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13461532' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 율현공원 책쉼터 카테고리 관계
    const existingCategories_1799213783 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1799213783'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1799213783 = new Set(existingCategories_1799213783.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1799213783 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1799213783) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1799213783.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1799213783' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신사동 작은도서관 카테고리 관계
    const existingCategories_36818242 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36818242'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36818242 = new Set(existingCategories_36818242.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36818242 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36818242) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36818242.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36818242' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 관리형독서실 잇올 스파르타 강남센터 카테고리 관계
    const existingCategories_1340782203 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1340782203'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1340782203 = new Set(existingCategories_1340782203.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1340782203 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1340782203) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1340782203.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1340782203' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 개포4동 작은도서관 카테고리 관계
    const existingCategories_36332534 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36332534'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36332534 = new Set(existingCategories_36332534.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36332534 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36332534) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36332534.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36332534' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 수서동 작은도서관 카테고리 관계
    const existingCategories_36818073 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36818073'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36818073 = new Set(existingCategories_36818073.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36818073 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36818073) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36818073.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36818073' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 다움영어도서관 카테고리 관계
    const existingCategories_36818849 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36818849'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36818849 = new Set(existingCategories_36818849.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36818849 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36818849) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36818849.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36818849' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 압구정동작은도서관 카테고리 관계
    const existingCategories_11843711 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11843711'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11843711 = new Set(existingCategories_11843711.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11843711 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_11843711) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11843711.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11843711' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 수서동구립도서관(2026년12월예정) 카테고리 관계
    const existingCategories_1489194370 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1489194370'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1489194370 = new Set(existingCategories_1489194370.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1489194370 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1489194370) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1489194370.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1489194370' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 데시앙포레숲속작은도서관 카테고리 관계
    const existingCategories_37445620 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37445620'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37445620 = new Set(existingCategories_37445620.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37445620 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_37445620) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37445620.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37445620' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 일원1동작은도서관 카테고리 관계
    const existingCategories_1993683100 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1993683100'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1993683100 = new Set(existingCategories_1993683100.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1993683100 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1993683100) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1993683100.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1993683100' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도곡2동 작은 도서관 카테고리 관계
    const existingCategories_36332565 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36332565'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36332565 = new Set(existingCategories_36332565.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36332565 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_36332565) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36332565.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36332565' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 빛어린이도서관 카테고리 관계
    const existingCategories_1803956250 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1803956250'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1803956250 = new Set(existingCategories_1803956250.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1803956250 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1803956250) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1803956250.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1803956250' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아름다운도서관 카테고리 관계
    const existingCategories_1841844952 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1841844952'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1841844952 = new Set(existingCategories_1841844952.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1841844952 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1841844952) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1841844952.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1841844952' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 루디아어린이영어도서관 카테고리 관계
    const existingCategories_1791122569 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1791122569'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1791122569 = new Set(existingCategories_1791122569.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1791122569 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1791122569) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1791122569.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1791122569' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한국무역협회도서관 카테고리 관계
    const existingCategories_1105992417 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1105992417'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1105992417 = new Set(existingCategories_1105992417.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1105992417 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1105992417) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1105992417.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1105992417' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울특별시립강남도서관 어린이실 카테고리 관계
    const existingCategories_1713974105 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1713974105'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1713974105 = new Set(existingCategories_1713974105.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1713974105 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1713974105) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1713974105.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1713974105' LIMIT 1)`),
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
