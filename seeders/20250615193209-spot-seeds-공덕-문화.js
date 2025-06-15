'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 문화
 * 생성일시: 2025-06-15T10:32:16.915Z
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
        name: '삼천리자전거 마포점',
        address: '서울 마포구 공덕동 백범로 152 공덕파크자이201동3호',
        tel: '02-715-3000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5454342 126.9470969)',
        4326
        ),
        naver_spot_id: '38563049',
        review_count: 220,
        review_score: 4.5,
      },
      {
        name: '클럽스트라이크 볼링장',
        address: '서울 마포구 도화동 마포대로 52 4층 클럽스트라이크 볼링장',
        tel: '0507-1344-5645',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.540328 126.9476654)',
        4326
        ),
        naver_spot_id: '1512061509',
        review_count: 468,
        review_score: 4.5,
      },
      {
        name: '이루리북스',
        address: '서울 마포구 도화동 독막로 320 태영데시앙루브 B105호',
        tel: '070-7715-1027',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5429729 126.9478679)',
        4326
        ),
        naver_spot_id: '35603828',
        review_count: 115,
        review_score: 4.82,
      },
      {
        name: '한국예술진흥원',
        address: '서울 마포구 공덕동 마포대로7길 33 102호',
        tel: '0507-1364-8177',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5476103 126.9515628)',
        4326
        ),
        naver_spot_id: '1074506977',
        review_count: 33,
        review_score: 4.61,
      },
      {
        name: '도화동주민센터',
        address: '서울 마포구 도화동 도화길 37 주민자치센터',
        tel: '02-3153-6560',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5415123 126.9498798)',
        4326
        ),
        naver_spot_id: '18767648',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명동사진관',
        address: '서울 마포구 신공덕동 백범로 199 메트로디오빌 지하 1층',
        tel: '02-712-3122',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5434586 126.9526324)',
        4326
        ),
        naver_spot_id: '36772092',
        review_count: 162,
        review_score: 4.28,
      },
      {
        name: '서점극장 라블레',
        address: '서울 마포구 염리동 백범로25길 5 1층',
        tel: '02-6368-1578',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.546345 126.9463081)',
        4326
        ),
        naver_spot_id: '1278654320',
        review_count: 69,
        review_score: 4.9,
      },
      {
        name: '마포문화원',
        address: '서울 마포구 신공덕동 백범로 227 공덕동자치회관',
        tel: '02-312-1100',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5422421 126.9554853)',
        4326
        ),
        naver_spot_id: '35022284',
        review_count: 50,
        review_score: 4.42,
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
        name: '클라쓰 클라블라우',
        address: '서울 마포구 공덕동 백범로 169-19',
        tel: '0507-1408-0783',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5456123 126.9502793)',
        4326
        ),
        naver_spot_id: '1233874713',
        review_count: 0,
        review_score: null,
      },
      {
        name: 'DGT 아트센터',
        address: '서울 마포구 염리동 독막로 308 지하 1층',
        tel: '0507-1388-1328',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5436454 126.946895)',
        4326
        ),
        naver_spot_id: '1148751474',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오늘은',
        address: '서울 마포구 도화동 독막로 331 마스터즈타워 4층',
        tel: '02-6958-1960',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54296 126.9493909)',
        4326
        ),
        naver_spot_id: '1734312215',
        review_count: 0,
        review_score: null,
      },
      {
        name: '노인생애체험센터',
        address: '서울 용산구 효창동 효창원로 177-18',
        tel: '02-712-6400',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5446097 126.9586463)',
        4326
        ),
        naver_spot_id: '18721473',
        review_count: 0,
        review_score: null,
      },
      {
        name: '풀잎문화센터 마포공덕지부',
        address: '서울 마포구 신공덕동 만리재옛길 6 401호',
        tel: '02-711-9061',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5448569 126.9543937)',
        4326
        ),
        naver_spot_id: '11598153',
        review_count: 6,
        review_score: null,
      },
      {
        name: '마포문고',
        address: '서울 마포구 용강동 큰우물로 60',
        tel: '0507-1315-0066',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5418478 126.9447619)',
        4326
        ),
        naver_spot_id: '1807308118',
        review_count: 223,
        review_score: 4.38,
      },
      {
        name: '사진과좋은사람들',
        address: '서울 마포구 도화동 마포대로 63-8 삼창플라자빌딩 B1 36호',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5422493 126.9477979)',
        4326
        ),
        naver_spot_id: '30999731',
        review_count: 11,
        review_score: 5,
      },
      {
        name: '한우리문고 공덕점',
        address: '서울 마포구 공덕동 마포대로 100',
        tel: '02-6741-2306',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5445268 126.9513638)',
        4326
        ),
        naver_spot_id: '1691216525',
        review_count: 34,
        review_score: null,
      },
      {
        name: '호우주의보',
        address: '서울 마포구 공덕동 마포대로 127 1414호',
        tel: '0507-1448-1365',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.546194 126.9521422)',
        4326
        ),
        naver_spot_id: '154314559',
        review_count: 5,
        review_score: null,
      },
      {
        name: '켤쳐비즈',
        address: '서울 마포구 도화동 독막로 331',
        tel: '02-706-4879',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5430202 126.9493907)',
        4326
        ),
        naver_spot_id: '18304623',
        review_count: 0,
        review_score: null,
      },
      {
        name: '금성출판사',
        address: '서울 마포구 공덕동 만리재옛길 23 금성출판사',
        tel: '080-969-1000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5462378 126.9553861)',
        4326
        ),
        naver_spot_id: '12081247',
        review_count: 56,
        review_score: 4.43,
      },
      {
        name: '상상생생사회적협동조합',
        address: '서울 마포구 공덕동 백범로31길 21 중부50플러스캠퍼스 1층 공유사무실',
        tel: '0507-1406-2270',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5466768 126.9497275)',
        4326
        ),
        naver_spot_id: '1162730110',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한국아동출판협회',
        address: '서울 마포구 도화동 큰우물로 75',
        tel: '02-702-5097',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5412649 126.9462973)',
        4326
        ),
        naver_spot_id: '1341015302',
        review_count: 1,
        review_score: null,
      },
      {
        name: '혜윤오르프뮤직',
        address: '서울 마포구 공덕동',
        tel: '02-512-7722',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450439 126.9509409)',
        4326
        ),
        naver_spot_id: '38457371',
        review_count: 19,
        review_score: 4,
      },
      {
        name: '공감합창단',
        address: '서울 마포구 공덕동 백범로 169-19',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.545492 126.9500258)',
        4326
        ),
        naver_spot_id: '1093512036',
        review_count: 1,
        review_score: null,
      },
      {
        name: '더재즈컴퍼니 서울',
        address: '서울 마포구 공덕동 마포대로 173 마포현대하이엘',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5499081 126.9544556)',
        4326
        ),
        naver_spot_id: '1180504210',
        review_count: 0,
        review_score: null,
      },
      {
        name: '해금협회',
        address: '서울 마포구 공덕동 마포대로14나길 5 1층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5481387 126.9556159)',
        4326
        ),
        naver_spot_id: '35563159',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오즈갤러리',
        address: '서울 마포구 도화동 마포대로 49 성우빌딩 10층 9호',
        tel: '02-707-0797',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5408682 126.9468958)',
        4326
        ),
        naver_spot_id: '1409201940',
        review_count: 5,
        review_score: null,
      },
      {
        name: '디지탈포토샵',
        address: '서울 마포구 공덕동 마포대로 143',
        tel: '02-2652-0496',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5474434 126.9530883)',
        4326
        ),
        naver_spot_id: '1581270388',
        review_count: 32,
        review_score: null,
      },
      {
        name: 'KIIX 아이돌 트레이닝 스튜디오',
        address: '서울 마포구 도화동 독막로 331 24층 03호',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54296 126.9493909)',
        4326
        ),
        naver_spot_id: '1816803270',
        review_count: 0,
        review_score: null,
      },
      {
        name: '갤러리헤아',
        address: '서울 용산구 효창동 효창원로93길 50 1층',
        tel: '0507-1362-7185',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5474135 126.9612333)',
        4326
        ),
        naver_spot_id: '1359971666',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한진관광 한투어',
        address: '서울 마포구 공덕동 만리재로 15 제일빌딩 511호',
        tel: '02-738-5800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5445519 126.9526289)',
        4326
        ),
        naver_spot_id: '11641979',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한국파룬따파불학회',
        address: '서울 마포구 공덕동 만리재로 14 르네상스빌딩 808호',
        tel: '1544-8808',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5440163 126.9529645)',
        4326
        ),
        naver_spot_id: '13581711',
        review_count: 1,
        review_score: null,
      },
      {
        name: '네팔 관광청 한국사무소',
        address: '서울 마포구 도화동 마포대로 73 SK허브그린',
        tel: '02-730-4855',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5424302 126.9489891)',
        4326
        ),
        naver_spot_id: '11876785',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한국미술진흥원',
        address: '서울 마포구 공덕동 마포대로 109 0-1604호(공덕동, 롯데캐슬프레지 던트)',
        tel: '02-703-1642',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450794 126.9509885)',
        4326
        ),
        naver_spot_id: '1574210083',
        review_count: 0,
        review_score: null,
      },
      {
        name: '비소갤러리',
        address: '서울 마포구 공덕동 마포대로 109',
        tel: '02-6356-0167',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5449325 126.9505776)',
        4326
        ),
        naver_spot_id: '37296732',
        review_count: 5,
        review_score: null,
      },
      {
        name: '사단법인 한국이엠피협회',
        address: '서울 마포구 신공덕동 만리재옛길 36',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5470814 126.9562978)',
        4326
        ),
        naver_spot_id: '37815069',
        review_count: 4,
        review_score: null,
      },
      {
        name: '더홀릭스',
        address: '서울 마포구 도화동 마포대로 53 A동 31층 3112호',
        tel: '02-6418-9433',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5415418 126.9473839)',
        4326
        ),
        naver_spot_id: '35452059',
        review_count: 1,
        review_score: null,
      },
      {
        name: '나의여행',
        address: '서울 마포구 공덕동 마포대로 127 1525호',
        tel: '0507-1327-1688',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.546194 126.9521422)',
        4326
        ),
        naver_spot_id: '1080068093',
        review_count: 0,
        review_score: null,
      },
      {
        name: '비스포커 스튜디오',
        address: '서울 마포구 신공덕동 만리재로 35 201호',
        tel: '0507-1318-1925',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5450294 126.9550259)',
        4326
        ),
        naver_spot_id: '1960077375',
        review_count: 2,
        review_score: null,
      },
      {
        name: '용강동 주민센터',
        address: '서울 마포구 용강동 토정로31길 31 용강동주민센터',
        tel: '02-3153-6590',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5422117 126.9426765)',
        4326
        ),
        naver_spot_id: '11813567',
        review_count: 0,
        review_score: null,
      },
      {
        name: '상상나눔',
        address: '서울 마포구 공덕동 마포대로 119',
        tel: '02-718-9110',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5457569 126.95201)',
        4326
        ),
        naver_spot_id: '480600643',
        review_count: 0,
        review_score: null,
      },
      {
        name: '베이스먼트워크샵',
        address: '서울 용산구 효창동 임정로 43 1층',
        tel: '02-711-2365',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5435292 126.9577336)',
        4326
        ),
        naver_spot_id: '1068442695',
        review_count: 0,
        review_score: null,
      },
      {
        name: '극연구소 마찰',
        address: '서울 마포구 신공덕동 임정로15길 33',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5427449 126.9564865)',
        4326
        ),
        naver_spot_id: '1915339288',
        review_count: 0,
        review_score: null,
      },
      {
        name: '진향국악연구소',
        address: '서울 용산구 효창동 임정로 43-1',
        tel: '02-704-7482',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5436274 126.9576272)',
        4326
        ),
        naver_spot_id: '1125697915',
        review_count: 0,
        review_score: null,
      },
      {
        name: '알슬비츠',
        address: '서울 마포구 도화동 마포대로 53',
        tel: '02-717-0411',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5414289 126.9470577)',
        4326
        ),
        naver_spot_id: '1970473338',
        review_count: 1,
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
        name: '귀빈칼라',
        address: '서울 마포구 도화동 삼개로 10',
        tel: '02-719-8028',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5395309 126.947437)',
        4326
        ),
        naver_spot_id: '13160210',
        review_count: 41,
        review_score: 4.38,
      },
      {
        name: '제일스튜디오',
        address: '서울 마포구 아현동 마포대로 196 고려아카데미텔 지하 1층',
        tel: '02-393-3439',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5513312 126.9561484)',
        4326
        ),
        naver_spot_id: '13154594',
        review_count: 50,
        review_score: 4.03,
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

    // 삼천리자전거 마포점 이미지
    const existingImages_38563049 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38563049'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38563049[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38563049' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20180704_61/1530676787321QfO3Y_JPEG/QI28LhGxXcKV5Jveg7y8cB6X.jpg',
        }
      ]);
    }

    // 클럽스트라이크 볼링장 이미지
    const existingImages_1512061509 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1512061509'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1512061509[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1512061509' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200116_117/15791575336622fjNK_PNG/SR-DIKRanaZ-gZOjAgXa1Nbq.PNG.png',
        }
      ]);
    }

    // 이루리북스 이미지
    const existingImages_35603828 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35603828'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35603828[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35603828' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250421_118/1745203498430iYFOu_PNG/250421_%B8%DE%B4%BA%C6%C7%BC%F6%C1%A4.png',
        }
      ]);
    }

    // 한국예술진흥원 이미지
    const existingImages_1074506977 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1074506977'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1074506977[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1074506977' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200213_72/1581582567999L4DJN_JPEG/UZkBq3g6sZYAnSVuS1b5fiOL.jpg',
        }
      ]);
    }

    // 도화동주민센터 이미지
    const existingImages_18767648 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18767648'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18767648[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18767648' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190712_253/15628611282015vp59_JPEG/xfpIRIoCJ5qFrvuHNWOsvC2P.jpeg.jpg',
        }
      ]);
    }

    // 명동사진관 이미지
    const existingImages_36772092 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36772092'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36772092[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36772092' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250609_45/1749428095996w642g_JPEG/1.jpg',
        }
      ]);
    }

    // 서점극장 라블레 이미지
    const existingImages_1278654320 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1278654320'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1278654320[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1278654320' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210403_60/1617433973714GjH4e_JPEG/JQUZjST4en8TQY8W3gaZPppV.jpeg.jpg',
        }
      ]);
    }

    // 마포문화원 이미지
    const existingImages_35022284 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35022284'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35022284[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35022284' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190827_62/1566912992529KNcEx_JPEG/CWjMED3qe7rYsNfxKV6De7a1.jpg',
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

    // 클라쓰 클라블라우 이미지
    const existingImages_1233874713 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1233874713'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1233874713[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1233874713' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230110_181/1673345856860owEcs_JPEG/Klarblau1-02_160p.jpg',
        }
      ]);
    }

    // DGT 아트센터 이미지
    const existingImages_1148751474 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1148751474'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1148751474[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1148751474' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231202_259/1701501088393Mcxdz_JPEG/1000049919.jpg',
        }
      ]);
    }

    // 노인생애체험센터 이미지
    const existingImages_18721473 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18721473'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18721473[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18721473' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20210309_194/1615265457589xCPdm_JPEG/VigM9PtWaTtMhpeB2K-1WPaL.jpg',
        }
      ]);
    }

    // 풀잎문화센터 마포공덕지부 이미지
    const existingImages_11598153 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11598153'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11598153[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11598153' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200810_261/1596986477382sQevv_JPEG/UMmFyvzlWDncyajNytdIOeG6.jpg',
        }
      ]);
    }

    // 마포문고 이미지
    const existingImages_1807308118 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1807308118'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1807308118[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1807308118' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20171223_24/1514011250628HwScO_JPEG/iJsbB525pj45Ahbj7pLfx-_h.jpg',
        }
      ]);
    }

    // 사진과좋은사람들 이미지
    const existingImages_30999731 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['30999731'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_30999731[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '30999731' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200504_158/1588575993113bklv3_JPEG/EgU1ugr7RLbWeh_nip_H3Yl9.jpg',
        }
      ]);
    }

    // 호우주의보 이미지
    const existingImages_154314559 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['154314559'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_154314559[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '154314559' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20201011_80/1602415135064dFzHq_JPEG/0nS1NlFXD4rUnLUV4IygmaCj.jpeg.jpg',
        }
      ]);
    }

    // 금성출판사 이미지
    const existingImages_12081247 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12081247'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12081247[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12081247' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241126_7/1732597306277l43EY_PNG/010.png',
        }
      ]);
    }

    // 혜윤오르프뮤직 이미지
    const existingImages_38457371 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38457371'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38457371[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38457371' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20160812_181/14710021470679vpMP_JPEG/176762607245628_0.jpeg',
        }
      ]);
    }

    // 공감합창단 이미지
    const existingImages_1093512036 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1093512036'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1093512036[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1093512036' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190111_275/1547171437498WoVmh_JPEG/rqj85koWUkLlsfdPQ71HQ8sV.jpg',
        }
      ]);
    }

    // 더재즈컴퍼니 서울 이미지
    const existingImages_1180504210 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1180504210'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1180504210[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1180504210' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250109_134/1736395981138LRzUA_JPEG/IMG_0577.jpeg',
        }
      ]);
    }

    // 해금협회 이미지
    const existingImages_35563159 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35563159'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_35563159[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35563159' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20211024_36/1635080164773Vh2hH_JPEG/DaL6vTLa31RT8lmEVonxjGDT.jpg',
        }
      ]);
    }

    // 오즈갤러리 이미지
    const existingImages_1409201940 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1409201940'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1409201940[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1409201940' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190429_200/155653605042082AQC_JPEG/pA60kbHzZw9MNG2hpiXXLyHI.jpg',
        }
      ]);
    }

    // KIIX 아이돌 트레이닝 스튜디오 이미지
    const existingImages_1816803270 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1816803270'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1816803270[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1816803270' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20250419_34/17450339064371Xmq0_PNG/LOGO_1080x1080.png',
        }
      ]);
    }

    // 갤러리헤아 이미지
    const existingImages_1359971666 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1359971666'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1359971666[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1359971666' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231019_39/1697716610900fT6nR_PNG/%BD%BA%C5%A9%B8%B0%BC%A6_2023-10-19_%BF%C0%C8%C4_8.56.14.png',
        }
      ]);
    }

    // 한진관광 한투어 이미지
    const existingImages_11641979 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11641979'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11641979[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11641979' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240311_177/1710162211009FGgDb_JPEG/%C7%D1%C5%F5%BE%EE_%BB%E7%C1%F8.jpg',
        }
      ]);
    }

    // 네팔 관광청 한국사무소 이미지
    const existingImages_11876785 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11876785'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11876785[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11876785' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_184/14409913580501GcOR_GIF/11876785_0.gif',
        }
      ]);
    }

    // 한국미술진흥원 이미지
    const existingImages_1574210083 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1574210083'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1574210083[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1574210083' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20221005_286/1664937394507MusKF_PNG/%C7%D1%B1%B9%B9%CC%BC%FA%C1%F8%C8%EF%BF%F8_211022_%B4%EB%C1%F6_1_%BB%E7%BA%BB_10.png',
        }
      ]);
    }

    // 비소갤러리 이미지
    const existingImages_37296732 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37296732'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_37296732[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37296732' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20151119_285/1447897093916FoMz4_JPEG/167063517275784_0.jpeg',
        }
      ]);
    }

    // 비스포커 스튜디오 이미지
    const existingImages_1960077375 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1960077375'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1960077375[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1960077375' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20180918_61/1537264495638B8Cu1_JPEG/G490PczGAzpdWC2UF7ltvfAR.jpg',
        }
      ]);
    }

    // 용강동 주민센터 이미지
    const existingImages_11813567 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11813567'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11813567[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11813567' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150901_54/1441044782182uPaR5_JPEG/11813567_0.jpg',
        }
      ]);
    }

    // 상상나눔 이미지
    const existingImages_480600643 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['480600643'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_480600643[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '480600643' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20170303_94/1488519497440tOSW0_JPEG/186253546836710_0.jpeg',
        }
      ]);
    }

    // 베이스먼트워크샵 이미지
    const existingImages_1068442695 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1068442695'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1068442695[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1068442695' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190523_194/1558622921470drKWr_JPEG/E7LW4dHY55Z2VcNlI8RGHQTB.jpeg.jpg',
        }
      ]);
    }

    // 귀빈칼라 이미지
    const existingImages_13160210 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13160210'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13160210[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13160210' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_269/14409995997108rx7h_JPEG/106652468470126_0.jpg',
        }
      ]);
    }

    // 제일스튜디오 이미지
    const existingImages_13154594 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13154594'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13154594[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13154594' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230630_212/16881277573980XoTB_JPEG/%B0%DF%BA%BB1.JPG',
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

    // 한국예술진흥원 카테고리 관계
    const existingCategories_1074506977 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1074506977'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1074506977 = new Set(existingCategories_1074506977.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1074506977 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1074506977) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1074506977.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1074506977' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도화동주민센터 카테고리 관계
    const existingCategories_18767648 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18767648'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18767648 = new Set(existingCategories_18767648.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18767648 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_18767648) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18767648.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18767648' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 명동사진관 카테고리 관계
    const existingCategories_36772092 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36772092'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36772092 = new Set(existingCategories_36772092.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36772092 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_36772092) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36772092.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36772092' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서점극장 라블레 카테고리 관계
    const existingCategories_1278654320 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1278654320'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1278654320 = new Set(existingCategories_1278654320.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1278654320 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1278654320) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1278654320.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1278654320' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포문화원 카테고리 관계
    const existingCategories_35022284 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35022284'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35022284 = new Set(existingCategories_35022284.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35022284 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_35022284) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35022284.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35022284' LIMIT 1)`),
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

    // 클라쓰 클라블라우 카테고리 관계
    const existingCategories_1233874713 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1233874713'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1233874713 = new Set(existingCategories_1233874713.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1233874713 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1233874713) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1233874713.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1233874713' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // DGT 아트센터 카테고리 관계
    const existingCategories_1148751474 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1148751474'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1148751474 = new Set(existingCategories_1148751474.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1148751474 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1148751474) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1148751474.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1148751474' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오늘은 카테고리 관계
    const existingCategories_1734312215 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1734312215'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1734312215 = new Set(existingCategories_1734312215.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1734312215 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1734312215) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1734312215.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1734312215' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 노인생애체험센터 카테고리 관계
    const existingCategories_18721473 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18721473'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18721473 = new Set(existingCategories_18721473.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18721473 = [...new Set([
      '관광지',
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_18721473) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18721473.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18721473' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 풀잎문화센터 마포공덕지부 카테고리 관계
    const existingCategories_11598153 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11598153'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11598153 = new Set(existingCategories_11598153.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11598153 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_11598153) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11598153.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11598153' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포문고 카테고리 관계
    const existingCategories_1807308118 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1807308118'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1807308118 = new Set(existingCategories_1807308118.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1807308118 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1807308118) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1807308118.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1807308118' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 사진과좋은사람들 카테고리 관계
    const existingCategories_30999731 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['30999731'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_30999731 = new Set(existingCategories_30999731.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_30999731 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_30999731) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_30999731.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '30999731' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한우리문고 공덕점 카테고리 관계
    const existingCategories_1691216525 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1691216525'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1691216525 = new Set(existingCategories_1691216525.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1691216525 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_1691216525) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1691216525.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1691216525' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 켤쳐비즈 카테고리 관계
    const existingCategories_18304623 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18304623'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18304623 = new Set(existingCategories_18304623.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18304623 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_18304623) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18304623.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18304623' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 상상생생사회적협동조합 카테고리 관계
    const existingCategories_1162730110 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1162730110'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1162730110 = new Set(existingCategories_1162730110.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1162730110 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1162730110) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1162730110.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1162730110' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한국아동출판협회 카테고리 관계
    const existingCategories_1341015302 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1341015302'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1341015302 = new Set(existingCategories_1341015302.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1341015302 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1341015302) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1341015302.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1341015302' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 더재즈컴퍼니 서울 카테고리 관계
    const existingCategories_1180504210 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1180504210'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1180504210 = new Set(existingCategories_1180504210.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1180504210 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1180504210) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1180504210.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1180504210' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 해금협회 카테고리 관계
    const existingCategories_35563159 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35563159'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35563159 = new Set(existingCategories_35563159.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35563159 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_35563159) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35563159.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35563159' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 오즈갤러리 카테고리 관계
    const existingCategories_1409201940 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1409201940'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1409201940 = new Set(existingCategories_1409201940.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1409201940 = [...new Set([
      '미술관',
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1409201940) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1409201940.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1409201940' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 디지탈포토샵 카테고리 관계
    const existingCategories_1581270388 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1581270388'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1581270388 = new Set(existingCategories_1581270388.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1581270388 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1581270388) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1581270388.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1581270388' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 갤러리헤아 카테고리 관계
    const existingCategories_1359971666 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1359971666'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1359971666 = new Set(existingCategories_1359971666.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1359971666 = [...new Set([
      '미술관',
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1359971666) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1359971666.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1359971666' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 네팔 관광청 한국사무소 카테고리 관계
    const existingCategories_11876785 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11876785'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11876785 = new Set(existingCategories_11876785.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11876785 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_11876785) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11876785.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11876785' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한국미술진흥원 카테고리 관계
    const existingCategories_1574210083 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1574210083'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1574210083 = new Set(existingCategories_1574210083.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1574210083 = [...new Set([
      '미술관',
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1574210083) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1574210083.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1574210083' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 비소갤러리 카테고리 관계
    const existingCategories_37296732 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37296732'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37296732 = new Set(existingCategories_37296732.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37296732 = [...new Set([
      '미술관',
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_37296732) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37296732.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37296732' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 더홀릭스 카테고리 관계
    const existingCategories_35452059 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35452059'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35452059 = new Set(existingCategories_35452059.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35452059 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_35452059) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35452059.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35452059' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 용강동 주민센터 카테고리 관계
    const existingCategories_11813567 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11813567'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11813567 = new Set(existingCategories_11813567.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11813567 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_11813567) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11813567.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11813567' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 진향국악연구소 카테고리 관계
    const existingCategories_1125697915 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1125697915'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1125697915 = new Set(existingCategories_1125697915.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1125697915 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_1125697915) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1125697915.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1125697915' LIMIT 1)`),
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

    // 귀빈칼라 카테고리 관계
    const existingCategories_13160210 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13160210'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13160210 = new Set(existingCategories_13160210.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13160210 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_13160210) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13160210.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13160210' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 제일스튜디오 카테고리 관계
    const existingCategories_13154594 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13154594'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13154594 = new Set(existingCategories_13154594.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13154594 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_13154594) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13154594.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13154594' LIMIT 1)`),
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
