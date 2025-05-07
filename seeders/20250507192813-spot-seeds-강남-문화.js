'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 문화
 * 생성일시: 2025-05-07T10:28:20.496Z
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
        name: '코엑스',
        address: '서울 강남구 삼성동 영동대로 513',
        tel: '02-6000-0114',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0594274 37.511662)'
        ),
        naver_spot_id: '11576171',
        review_count: 6,
        review_score: 4.3,
      },
      {
        name: '코엑스아쿠아리움',
        address: '서울 강남구 삼성동 영동대로 513',
        tel: '0507-1435-7203',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0583802 37.513368)'
        ),
        naver_spot_id: '11606845',
        review_count: 45,
        review_score: 4.5,
      },
      {
        name: 'K현대미술관',
        address: '서울 강남구 신사동 선릉로 807 K현대미술관',
        tel: '0507-1405-0952',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0390957 37.5242986)'
        ),
        naver_spot_id: '123980096',
        review_count: 1,
        review_score: 4.28,
      },
      {
        name: '마이아트뮤지엄',
        address: '서울 강남구 대치동 테헤란로 518 섬유센터빌딩 B1층',
        tel: '02-567-8878',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0604816 37.5075923)'
        ),
        naver_spot_id: '1035412616',
        review_count: 2,
        review_score: 4.47,
      },
      {
        name: '코엑스 Hall A',
        address: '서울 강남구 삼성동 영동대로 513 코엑스',
        tel: '02-6000-0114',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0590924 37.5114256)'
        ),
        naver_spot_id: '19512501',
        review_count: 56,
        review_score: 4,
      },
      {
        name: 'SETEC',
        address: '서울 강남구 대치동 남부순환로 3104 SETEC',
        tel: '02-2187-4600',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0719667 37.4956835)'
        ),
        naver_spot_id: '11639873',
        review_count: 694,
        review_score: 4.13,
      },
      {
        name: '메가박스 코엑스점',
        address: '서울 강남구 삼성동 봉은사로 524',
        tel: '1544-0070',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0588053 37.5126636)'
        ),
        naver_spot_id: '12307868',
        review_count: 15,
        review_score: 4.47,
      },
      {
        name: '코엑스 Hall C',
        address: '서울 강남구 삼성동 영동대로 513 코엑스 3층',
        tel: '02-6000-0114',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0591501 37.5113964)'
        ),
        naver_spot_id: '13412850',
        review_count: 56,
        review_score: 4.58,
      },
      {
        name: '코엑스 Hall D',
        address: '서울 강남구 삼성동 영동대로 513 코엑스',
        tel: '02-6000-0114',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0590105 37.5123523)'
        ),
        naver_spot_id: '13412854',
        review_count: 56,
        review_score: 4,
      },
      {
        name: '광림아트센터 BBCH홀',
        address: '서울 강남구 신사동 논현로163길 33',
        tel: '02-2056-5787',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0258064 37.5239736)'
        ),
        naver_spot_id: '33431886',
        review_count: 64,
        review_score: 4.38,
      },
      {
        name: '백암아트홀',
        address: '서울 강남구 삼성동 테헤란로113길 7 백암아트센터',
        tel: '02-559-1333',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.066052 37.5103944)'
        ),
        naver_spot_id: '11639876',
        review_count: 27,
        review_score: 4.25,
      },
      {
        name: 'coex신한카드artium',
        address: '서울 강남구 삼성동 영동대로 513 코엑스아티움 5층',
        tel: '1661-5628',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0616835 37.5098411)'
        ),
        naver_spot_id: '1883271096',
        review_count: 8,
        review_score: null,
      },
      {
        name: '수서역 (고속철도)',
        address: '서울 강남구 수서동 밤고개로 99',
        tel: '1800-1472',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1043773 37.4855438)'
        ),
        naver_spot_id: '64419030',
        review_count: 0,
        review_score: null,
      },
      {
        name: '코엑스 코베 베이비페어',
        address: '서울 강남구 삼성동 영동대로 513',
        tel: '0507-1373-6458',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0598182 37.5117734)'
        ),
        naver_spot_id: '21652591',
        review_count: 5,
        review_score: null,
      },
      {
        name: '4233마음센터 압구정점',
        address: '서울 강남구 신사동 언주로170길 22 B1',
        tel: '0507-1406-4233',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.035422 37.5266091)'
        ),
        naver_spot_id: '1296974626',
        review_count: 509,
        review_score: 4.86,
      },
      {
        name: 'KT&G 상상마당 대치아트홀',
        address: '서울 강남구 대치동 영동대로 416 KT&G타워 3층',
        tel: '0507-1404-4311',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0653979 37.5064122)'
        ),
        naver_spot_id: '13280871',
        review_count: 15,
        review_score: 4.45,
      },
      {
        name: '코엑스 Hall B',
        address: '서울 강남구 삼성동 봉은사로 524',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0590101 37.512332)'
        ),
        naver_spot_id: '1022119007',
        review_count: 83,
        review_score: 4.33,
      },
      {
        name: '베페베이비페어',
        address: '서울 강남구 삼성동 영동대로 513',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0591474 37.5126015)'
        ),
        naver_spot_id: '1117698303',
        review_count: 45,
        review_score: 4.58,
      },
      {
        name: '라움아트센터',
        address: '서울 강남구 역삼동 언주로 564 라움아트센터',
        tel: '02-6925-4733',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0397224 37.5081005)'
        ),
        naver_spot_id: '19847263',
        review_count: 119,
        review_score: 4.34,
      },
      {
        name: '현대 모터스튜디오 서울',
        address: '서울 강남구 논현동 언주로 738',
        tel: '1899-6611',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0343923 37.5212673)'
        ),
        naver_spot_id: '34745051',
        review_count: 104,
        review_score: 4.17,
      },
      {
        name: '위글위글집 도산',
        address: '서울 강남구 신사동 언주로168길 31',
        tel: '0507-1340-2057',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0363006 37.5260905)'
        ),
        naver_spot_id: '1729099036',
        review_count: 4,
        review_score: null,
      },
      {
        name: '선정릉',
        address: '서울 강남구 삼성동 선릉로100길 1 선릉정릉',
        tel: '02-568-1291',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0493651 37.5090947)'
        ),
        naver_spot_id: '13542608',
        review_count: 272,
        review_score: 4.52,
      },
      {
        name: '송은',
        address: '서울 강남구 청담동 도산대로 441',
        tel: '0507-1466-0259',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0441206 37.5241628)'
        ),
        naver_spot_id: '13558974',
        review_count: 2,
        review_score: 4.63,
      },
      {
        name: '서울리빙디자인페어',
        address: '서울 강남구 삼성동 영동대로 513 서울 코엑스',
        tel: '02-2262-7206',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0594275 37.5116621)'
        ),
        naver_spot_id: '13336757',
        review_count: 12,
        review_score: 4.44,
      },
      {
        name: 'L7 강남 바이 롯데',
        address: '서울 강남구 삼성동 테헤란로 415',
        tel: '02-2011-1000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0516501 37.5057154)'
        ),
        naver_spot_id: '1536938247',
        review_count: 931,
        review_score: 4.56,
      },
      {
        name: '롯데시네마 도곡',
        address: '서울 강남구 도곡동 남부순환로 2753',
        tel: '1544-8855',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0472059 37.4875017)'
        ),
        naver_spot_id: '1787836446',
        review_count: 655,
        review_score: 4.38,
      },
      {
        name: '키이스케이프 메모리컴퍼니',
        address: '서울 강남구 역삼동 봉은사로2길 7 지하1층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0256431 37.5041603)'
        ),
        naver_spot_id: '1584371654',
        review_count: 32,
        review_score: null,
      },
      {
        name: 'CGV 압구정',
        address: '서울 강남구 신사동 논현로 848',
        tel: '1544-1122',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0288499 37.5245166)'
        ),
        naver_spot_id: '12197890',
        review_count: 2,
        review_score: 4.38,
      },
      {
        name: '일상비일상의틈byU+',
        address: '서울 강남구 역삼동 강남대로 426',
        tel: '070-4090-8005',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0267823 37.5005331)'
        ),
        naver_spot_id: '1900685487',
        review_count: 240,
        review_score: 4.63,
      },
      {
        name: 'CGV 강남',
        address: '서울 강남구 역삼동 강남대로 438 스타플렉스',
        tel: '1544-1122',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0262445 37.5017831)'
        ),
        naver_spot_id: '12272750',
        review_count: 3,
        review_score: 4.35,
      },
      {
        name: '최인아책방',
        address: '서울 강남구 역삼동 선릉로 521 4층',
        tel: '02-2088-7330',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0479557 37.5060349)'
        ),
        naver_spot_id: '38457339',
        review_count: 527,
        review_score: 4.53,
      },
      {
        name: '삼정호텔',
        address: '서울 강남구 역삼동 봉은사로 150',
        tel: '02-557-1221',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0310561 37.5058727)'
        ),
        naver_spot_id: '11658929',
        review_count: 228,
        review_score: 4.29,
      },
      {
        name: '홍수환스타복싱체육관',
        address: '서울 강남구 대치동 선릉로82길 7 FPS빌딩 지하1층',
        tel: '0507-1401-7845',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.050714 37.5026494)'
        ),
        naver_spot_id: '12951209',
        review_count: 150,
        review_score: 4.75,
      },
      {
        name: 'CGV 청담씨네시티',
        address: '서울 강남구 신사동 도산대로 323 씨네시티빌딩',
        tel: '1544-1122',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0370619 37.5228611)'
        ),
        naver_spot_id: '20574013',
        review_count: 902,
        review_score: 4.39,
      },
      {
        name: '한솥 아트스페이스',
        address: '서울 강남구 청담동 압구정로 459 B1층',
        tel: '02-2033-9642',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0470017 37.5254471)'
        ),
        naver_spot_id: '1337616617',
        review_count: 2,
        review_score: null,
      },
      {
        name: '더샵갤러리',
        address: '서울 강남구 자곡동 자곡로 210 더샵갤러리',
        tel: '1577-8674',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1058504 37.4751039)'
        ),
        naver_spot_id: '1796610552',
        review_count: 7,
        review_score: 4.92,
      },
      {
        name: '북쌔즈',
        address: '서울 강남구 역삼동 테헤란로 311 2층',
        tel: '02-501-8804',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0447405 37.5040263)'
        ),
        naver_spot_id: '1526151711',
        review_count: 522,
        review_score: 4.47,
      },
      {
        name: '키이스케이프 로그인2',
        address: '서울 강남구 역삼동 강남대로98길 16 5층',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0280214 37.5006969)'
        ),
        naver_spot_id: '1068140037',
        review_count: 25,
        review_score: null,
      },
      {
        name: 'Kia360',
        address: '서울 강남구 압구정동 압구정로 417',
        tel: '02-518-0360',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0429225 37.5276447)'
        ),
        naver_spot_id: '494684198',
        review_count: 11,
        review_score: null,
      },
      {
        name: '식물관PH',
        address: '서울 강남구 수서동 광평로34길 24',
        tel: '02-445-0405',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0943672 37.4826902)'
        ),
        naver_spot_id: '1121708764',
        review_count: 755,
        review_score: 4.34,
      },
      {
        name: '메종에르메스도산파크',
        address: '서울 강남구 신사동 도산대로45길 7',
        tel: '02-540-0901',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.035296 37.5227624)'
        ),
        naver_spot_id: '18834405',
        review_count: 178,
        review_score: 4.61,
      },
      {
        name: '시그널헌터 가로수길점',
        address: '서울 강남구 신사동 강남대로152길 40 석천빌딩 4층',
        tel: '0507-1347-6027',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0225419 37.5179612)'
        ),
        naver_spot_id: '1473752908',
        review_count: 16,
        review_score: null,
      },
      {
        name: '알라딘 중고서점 강남점',
        address: '서울 강남구 역삼동 강남대로 438 스타플렉스 지하1층',
        tel: '1544-2514',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0263152 37.5014285)'
        ),
        naver_spot_id: '30833453',
        review_count: 4,
        review_score: 4.53,
      },
      {
        name: '우리동네사진관 강남역',
        address: '서울 강남구 역삼동 테헤란로 111 대건빌딩 6층 603호',
        tel: '02-533-5242',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0292963 37.4988903)'
        ),
        naver_spot_id: '31949675',
        review_count: 726,
        review_score: null,
      },
      {
        name: '한국도심공항',
        address: '서울 강남구 삼성동 테헤란로87길 22 도심공항터미널',
        tel: '1588-7946',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0594112 37.5097047)'
        ),
        naver_spot_id: '11623586',
        review_count: 0,
        review_score: null,
      },
      {
        name: 'GS아트센터',
        address: '서울 강남구 역삼동 논현로 508 GS아트센터',
        tel: '02-2005-0101',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0375081 37.5022971)'
        ),
        naver_spot_id: '1890616739',
        review_count: 0,
        review_score: null,
      },
      {
        name: '코엑스 오디토리움',
        address: '서울 강남구 삼성동 봉은사로 524 코엑스 컨벤션 3F',
        tel: '02-6000-0114',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0587711 37.5127413)'
        ),
        naver_spot_id: '11663721',
        review_count: 15,
        review_score: 4.63,
      },
      {
        name: '현대백화점 무역센터점 문화홀',
        address: '서울 강남구 삼성동 테헤란로 517 현대백화점 무역센터점 10층 문화홀',
        tel: '02-3467-6608',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0600805 37.5087123)'
        ),
        naver_spot_id: '1552142776',
        review_count: 336,
        review_score: 4.34,
      },
      {
        name: 'THEPLATZ 코엑스',
        address: '서울 강남구 삼성동 영동대로 513 코엑스 2층 더플라츠',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0602919 37.5112175)'
        ),
        naver_spot_id: '1472554585',
        review_count: 0,
        review_score: null,
      },
      {
        name: '놀숲 압구정역점',
        address: '서울 강남구 신사동 압구정로28길 22-6 지하 1층',
        tel: '02-544-6250',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.027056 37.525289)'
        ),
        naver_spot_id: '38632459',
        review_count: 200,
        review_score: 4.25,
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

    // 코엑스 이미지
    const existingImages_11576171 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11576171'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11576171[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11576171' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAyNDAxMTNfMjMg/MDAxNzA1MTQ2MjAyNzM2.m5hhoi_fx4aaiayul3TPf4VPZJ6zsKDbITDqF3J2C1Ig.bHt-PDdHDoKdtkV0SZ23Em6eHW0snZwfEhb1mwRDd30g.JPEG.ksh5059/IMG_2513.JPG#900x1200',
        }
      ]);
    }

    // 코엑스아쿠아리움 이미지
    const existingImages_11606845 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11606845'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11606845[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11606845' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250430_114/1746003878139P7ONN_PNG/WG_%B3%D7%C0%CC%B9%F6%BD%E6%B3%D7%C0%CF_%BA%AE%B5%B9-01.png',
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
        }
      ]);
    }

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
        }
      ]);
    }

    // 코엑스 Hall A 이미지
    const existingImages_19512501 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19512501'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_19512501[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19512501' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/20150212_25/bluyuna_1423752035267vLTii_JPEG/2015.02.13_078.jpg',
        }
      ]);
    }

    // SETEC 이미지
    const existingImages_11639873 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11639873'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11639873[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11639873' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_175/1441010832949FSuaS_JPEG/11639873_0.jpg',
        }
      ]);
    }

    // 메가박스 코엑스점 이미지
    const existingImages_12307868 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12307868'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12307868[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12307868' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230921_133/1695276081291C0iwI_JPEG/%B8%DE%B0%A1%B9%DA%BD%BA-%B7%CE%B0%ED.jpg',
        }
      ]);
    }

    // 코엑스 Hall C 이미지
    const existingImages_13412850 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13412850'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13412850[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13412850' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxNzA3MzFfMjcy/MDAxNTAxNDk5MDM5NzUy.7cGWe3xf87xfnuRunO01H4W_yBN-NYXz7IOAmqh_yacg.IV8x8nlryOLApyR_3Mh9tL4RBWCbQ48Un0xxT_CIrO0g.JPEG.piiin/piiin_%B3%B2%C0%CC%BC%B6%C0%E7%B4%DC_%B3%AA%B9%CC%C4%E1%C4%ED%B8%A3%C0%E7%B4%DC_%BA%CF%BE%C6%C6%AE%C6%E4%BE%EE_%2819%29.jpg#2160x2433',
        }
      ]);
    }

    // 코엑스 Hall D 이미지
    const existingImages_13412854 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13412854'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13412854[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13412854' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/20150723_295/juhr0129_1437659649719KsD39_JPEG/%C4%DA%BF%A2%BD%BA_%C0%FC%BD%C3%C8%B8_%C5%B0%B4%FA%C6%AE%C6%E4%BE%EE027.JPG',
        }
      ]);
    }

    // 광림아트센터 BBCH홀 이미지
    const existingImages_33431886 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33431886'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_33431886[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33431886' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAyNDAxMjdfMTYy/MDAxNzA2MzQ1NDc0MDAx.Gz-0R5QG0VyR8sgH09PR7OX5snIvRgJN05KT0NX2SREg.YYvxmGNbuMgC686XVdwpI-xp2-hrWuCN1w4Hyjal564g.JPEG.suza95/IMG_8105.jpg#900x900',
        }
      ]);
    }

    // 백암아트홀 이미지
    const existingImages_11639876 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11639876'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11639876[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11639876' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxNzExMjNfNzQg/MDAxNTExNDQzNzY5MDQy.90NMQ2DDnxu9gFS4B6LxHciDeFqsN4wIMCvJdJWXh3Eg.8nXeekVZ1sIrVOkiYktOLVQtLHirbWwUGXcXiZsvvIQg.JPEG.saekomgod/IMG_4776.jpg#900x1200',
        }
      ]);
    }

    // coex신한카드artium 이미지
    const existingImages_1883271096 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1883271096'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1883271096[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1883271096' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20211019_55/163460866808447MmE_JPEG/UjAB3mzvGtoYwNbjrlKGa3eX.jpg',
        }
      ]);
    }

    // 수서역 (고속철도) 이미지
    const existingImages_64419030 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['64419030'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_64419030[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '64419030' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190916_199/1568637502078eahzC_JPEG/o23Js6sGboGD1sqIuFGuTJHH.jpg',
        }
      ]);
    }

    // 코엑스 코베 베이비페어 이미지
    const existingImages_21652591 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21652591'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_21652591[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21652591' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230320_193/16792807617538PnxI_PNG/%C1%A6%B8%F1%C0%BB_%C0%D4%B7%C2%C7%CF%BC%BC%BF%E4_%2865%29.png',
        }
      ]);
    }

    // 4233마음센터 압구정점 이미지
    const existingImages_1296974626 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1296974626'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1296974626[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1296974626' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250213_233/1739409742615wyNXJ_JPEG/%BD%E1%B8%D3%C1%F8_%BB%E7%C1%F818.jpg',
        }
      ]);
    }

    // KT&G 상상마당 대치아트홀 이미지
    const existingImages_13280871 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13280871'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13280871[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13280871' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20170704_170/14991347154334oh5D_JPEG/186654514854646_0.jpeg',
        }
      ]);
    }

    // 라움아트센터 이미지
    const existingImages_19847263 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19847263'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_19847263[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19847263' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20161124_203/147996244663219TAS_JPEG/177074537066463_0.jpeg',
        }
      ]);
    }

    // 현대 모터스튜디오 서울 이미지
    const existingImages_34745051 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34745051'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_34745051[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34745051' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220323_231/1648014280243S4dIG_JPEG/%BC%AD%BF%EF_1.jpg',
        }
      ]);
    }

    // 위글위글집 도산 이미지
    const existingImages_1729099036 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1729099036'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1729099036[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1729099036' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230416_9/1681655595083a4t0l_JPEG/%B1%D7%B8%B213.jpg',
        }
      ]);
    }

    // 선정릉 이미지
    const existingImages_13542608 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13542608'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13542608[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13542608' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190916_25/1568595239731lIJGq_JPEG/7hQK5lF6NKMu3Lcq_K8aFNKZ.jpeg.jpg',
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

    // 서울리빙디자인페어 이미지
    const existingImages_13336757 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13336757'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13336757[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13336757' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220808_13/1659921213161hPtad_PNG/%B7%CE%B0%ED_2023.png',
        }
      ]);
    }

    // L7 강남 바이 롯데 이미지
    const existingImages_1536938247 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1536938247'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1536938247[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1536938247' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190818_147/1566128623611Sza2N_JPEG/HRHuwpFTsYn9Wgod3-j3NdBk.jpeg.jpg',
        }
      ]);
    }

    // 롯데시네마 도곡 이미지
    const existingImages_1787836446 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1787836446'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1787836446[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1787836446' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180601_285/15278189727220i12u_JPEG/IRtWK0eh0St0LbyTILYswKRT.jpg',
        }
      ]);
    }

    // 키이스케이프 메모리컴퍼니 이미지
    const existingImages_1584371654 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1584371654'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1584371654[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1584371654' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20221024_50/1666599693987tIlGf_JPEG/image01.jpg',
        }
      ]);
    }

    // CGV 압구정 이미지
    const existingImages_12197890 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12197890'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12197890[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12197890' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190909_31/1568029121469QDD5m_JPEG/NTQ2FVPVimOAvhpsv4omETX-.jpg',
        }
      ]);
    }

    // 일상비일상의틈byU+ 이미지
    const existingImages_1900685487 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1900685487'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1900685487[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1900685487' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210325_123/1616634006790Dg5X9_PNG/%C0%CF%BB%F3%BA%F1%C0%CF%BB%F3%C0%C7%C6%B4_%B0%C7%B9%B0%C4%C6.png',
        }
      ]);
    }

    // CGV 강남 이미지
    const existingImages_12272750 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12272750'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12272750[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12272750' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190909_31/1568029121469QDD5m_JPEG/NTQ2FVPVimOAvhpsv4omETX-.jpg',
        }
      ]);
    }

    // 최인아책방 이미지
    const existingImages_38457339 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38457339'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38457339[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38457339' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190621_118/1561109622158dSUMY_JPEG/mw3Hq10AkYQ06usFmn6kVG6l.jpeg.jpg',
        }
      ]);
    }

    // 삼정호텔 이미지
    const existingImages_11658929 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11658929'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11658929[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11658929' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_250/1441012562416UK8RV_JPEG/116666555079375_0.jpg',
        }
      ]);
    }

    // 홍수환스타복싱체육관 이미지
    const existingImages_12951209 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12951209'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12951209[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12951209' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20220723_160/1658539518615of9AC_JPEG/0lLEjkn7RtcuWoaEvZt1iXzm.jpg',
        }
      ]);
    }

    // CGV 청담씨네시티 이미지
    const existingImages_20574013 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20574013'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20574013[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20574013' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190909_31/1568029121469QDD5m_JPEG/NTQ2FVPVimOAvhpsv4omETX-.jpg',
        }
      ]);
    }

    // 한솥 아트스페이스 이미지
    const existingImages_1337616617 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1337616617'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1337616617[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1337616617' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250326_180/1742969509895xb3Qr_JPEG/sns_1.jpg',
        }
      ]);
    }

    // 더샵갤러리 이미지
    const existingImages_1796610552 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1796610552'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1796610552[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1796610552' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230913_158/1694585724593OhzUO_JPEG/%B4%F5%BC%A5%B0%B6%B7%AF%B8%AE2.0.jpg',
        }
      ]);
    }

    // 북쌔즈 이미지
    const existingImages_1526151711 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1526151711'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1526151711[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1526151711' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180821_293/1534821489981tTnjV_JPEG/cYRvYf0Xg6Kbcr6-mui0oQcW.jpg',
        }
      ]);
    }

    // 키이스케이프 로그인2 이미지
    const existingImages_1068140037 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1068140037'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1068140037[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1068140037' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230509_232/1683606790084v5RJS_JPEG/KakaoTalk_20230509_133249592.jpg',
        }
      ]);
    }

    // Kia360 이미지
    const existingImages_494684198 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['494684198'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_494684198[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '494684198' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210818_270/1629270009045hQHCp_JPEG/d6bhY1mX6naXQAyFYKsFCWLU.jpg',
        }
      ]);
    }

    // 시그널헌터 가로수길점 이미지
    const existingImages_1473752908 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1473752908'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1473752908[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1473752908' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200313_87/1584081117623RxqHy_JPEG/ififT_Qhs3V0m16tZBvMpJBk.jpg',
        }
      ]);
    }

    // 알라딘 중고서점 강남점 이미지
    const existingImages_30833453 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['30833453'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_30833453[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '30833453' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20160422_144/1461310432490QKVIz_JPEG/176372566371038_0.jpeg',
        }
      ]);
    }

    // 우리동네사진관 강남역 이미지
    const existingImages_31949675 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31949675'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_31949675[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31949675' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240904_148/1725422488128KVSPy_JPEG/112.jpg',
        }
      ]);
    }

    // 한국도심공항 이미지
    const existingImages_11623586 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11623586'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11623586[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11623586' LIMIT 1)`),
          image_url: 'https://naverbooking-phinf.pstatic.net/20230614_70/1686701457051F9yEA_JPEG/%B5%B5%BD%C9%B0%F8%C7%D7%B8%AE%B9%AB%C1%F8%2C_%C4%AE%C6%AE%B7%CE%C1%F6%BD%BA_%BA%B8%C1%A4%BA%BB-120.JPG',
        }
      ]);
    }

    // GS아트센터 이미지
    const existingImages_1890616739 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1890616739'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1890616739[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1890616739' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250213_41/17394248807877a7xk_PNG/GAC_%B7%CE%B0%ED%C5%B8%C0%D4_%B1%E2%BA%BB%C7%FC_%281%29.png',
        }
      ]);
    }

    // 코엑스 오디토리움 이미지
    const existingImages_11663721 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11663721'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11663721[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11663721' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxNzEwMDRfMTg1/MDAxNTA3MDkyOTY3Mzk4.ucGUqVAeHXe4p2IZIKm0aB-lJtY4spyvf6rbc41i3q8g.9-mkiuyjr64MU4LgoILVsiMoT12EX3mpBvvUq2FyuiIg.JPEG.envywho/%C5%A9%B1%E2%BA%AF%C8%AF_06.jpg#900x450',
        }
      ]);
    }

    // 현대백화점 무역센터점 문화홀 이미지
    const existingImages_1552142776 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1552142776'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1552142776[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1552142776' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20180405_132/1522894252245t0nDB_JPEG/MxoZjnYnsneIpVxILJg_7Cb5.jpg',
        }
      ]);
    }

    // THEPLATZ 코엑스 이미지
    const existingImages_1472554585 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1472554585'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1472554585[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1472554585' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20250423_31/17453734118223tmrv_JPEG/%B4%F5_%C7%C3%B6%F3%C3%F7_%C0%FC%BD%C3%C8%A6.jpg',
        }
      ]);
    }

    // 놀숲 압구정역점 이미지
    const existingImages_38632459 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38632459'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38632459[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38632459' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230516_227/1684219676236NtXKt_JPEG/KakaoTalk_20230515_161726215_02.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 코엑스 카테고리 관계
    const existingCategories_11576171 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11576171'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11576171 = new Set(existingCategories_11576171.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11576171 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_11576171) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11576171.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11576171' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코엑스아쿠아리움 카테고리 관계
    const existingCategories_11606845 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11606845'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11606845 = new Set(existingCategories_11606845.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11606845 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_11606845) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11606845.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11606845' LIMIT 1)`),
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

    // 코엑스 Hall A 카테고리 관계
    const existingCategories_19512501 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19512501'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19512501 = new Set(existingCategories_19512501.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19512501 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_19512501) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19512501.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19512501' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // SETEC 카테고리 관계
    const existingCategories_11639873 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11639873'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11639873 = new Set(existingCategories_11639873.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11639873 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_11639873) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11639873.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11639873' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 메가박스 코엑스점 카테고리 관계
    const existingCategories_12307868 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12307868'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12307868 = new Set(existingCategories_12307868.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12307868 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_12307868) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12307868.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12307868' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코엑스 Hall C 카테고리 관계
    const existingCategories_13412850 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13412850'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13412850 = new Set(existingCategories_13412850.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13412850 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_13412850) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13412850.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13412850' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코엑스 Hall D 카테고리 관계
    const existingCategories_13412854 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13412854'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13412854 = new Set(existingCategories_13412854.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13412854 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_13412854) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13412854.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13412854' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 광림아트센터 BBCH홀 카테고리 관계
    const existingCategories_33431886 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33431886'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33431886 = new Set(existingCategories_33431886.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33431886 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_33431886) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33431886.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33431886' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 백암아트홀 카테고리 관계
    const existingCategories_11639876 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11639876'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11639876 = new Set(existingCategories_11639876.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11639876 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_11639876) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11639876.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11639876' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // coex신한카드artium 카테고리 관계
    const existingCategories_1883271096 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1883271096'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1883271096 = new Set(existingCategories_1883271096.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1883271096 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1883271096) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1883271096.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1883271096' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 수서역 (고속철도) 카테고리 관계
    const existingCategories_64419030 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['64419030'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_64419030 = new Set(existingCategories_64419030.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_64419030 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_64419030) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_64419030.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '64419030' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코엑스 코베 베이비페어 카테고리 관계
    const existingCategories_21652591 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21652591'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21652591 = new Set(existingCategories_21652591.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21652591 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_21652591) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21652591.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21652591' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 4233마음센터 압구정점 카테고리 관계
    const existingCategories_1296974626 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1296974626'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1296974626 = new Set(existingCategories_1296974626.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1296974626 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1296974626) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1296974626.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1296974626' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // KT&G 상상마당 대치아트홀 카테고리 관계
    const existingCategories_13280871 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13280871'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13280871 = new Set(existingCategories_13280871.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13280871 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_13280871) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13280871.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13280871' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코엑스 Hall B 카테고리 관계
    const existingCategories_1022119007 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1022119007'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1022119007 = new Set(existingCategories_1022119007.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1022119007 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1022119007) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1022119007.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1022119007' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 베페베이비페어 카테고리 관계
    const existingCategories_1117698303 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1117698303'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1117698303 = new Set(existingCategories_1117698303.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1117698303 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1117698303) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1117698303.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1117698303' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 라움아트센터 카테고리 관계
    const existingCategories_19847263 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19847263'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19847263 = new Set(existingCategories_19847263.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19847263 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_19847263) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19847263.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19847263' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 현대 모터스튜디오 서울 카테고리 관계
    const existingCategories_34745051 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34745051'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_34745051 = new Set(existingCategories_34745051.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_34745051 = [...new Set([
      '관광지',
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_34745051) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_34745051.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34745051' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 위글위글집 도산 카테고리 관계
    const existingCategories_1729099036 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1729099036'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1729099036 = new Set(existingCategories_1729099036.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1729099036 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1729099036) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1729099036.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1729099036' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 선정릉 카테고리 관계
    const existingCategories_13542608 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13542608'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13542608 = new Set(existingCategories_13542608.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13542608 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_13542608) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13542608.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13542608' LIMIT 1)`),
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

    // 서울리빙디자인페어 카테고리 관계
    const existingCategories_13336757 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13336757'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13336757 = new Set(existingCategories_13336757.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13336757 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_13336757) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13336757.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13336757' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // L7 강남 바이 롯데 카테고리 관계
    const existingCategories_1536938247 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1536938247'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1536938247 = new Set(existingCategories_1536938247.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1536938247 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_1536938247) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1536938247.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1536938247' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 롯데시네마 도곡 카테고리 관계
    const existingCategories_1787836446 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1787836446'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1787836446 = new Set(existingCategories_1787836446.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1787836446 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1787836446) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1787836446.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1787836446' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 키이스케이프 메모리컴퍼니 카테고리 관계
    const existingCategories_1584371654 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1584371654'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1584371654 = new Set(existingCategories_1584371654.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1584371654 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1584371654) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1584371654.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1584371654' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // CGV 압구정 카테고리 관계
    const existingCategories_12197890 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12197890'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12197890 = new Set(existingCategories_12197890.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12197890 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_12197890) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12197890.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12197890' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 일상비일상의틈byU+ 카테고리 관계
    const existingCategories_1900685487 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1900685487'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1900685487 = new Set(existingCategories_1900685487.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1900685487 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1900685487) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1900685487.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1900685487' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // CGV 강남 카테고리 관계
    const existingCategories_12272750 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12272750'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12272750 = new Set(existingCategories_12272750.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12272750 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_12272750) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12272750.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12272750' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 최인아책방 카테고리 관계
    const existingCategories_38457339 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38457339'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38457339 = new Set(existingCategories_38457339.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38457339 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_38457339) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38457339.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38457339' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 삼정호텔 카테고리 관계
    const existingCategories_11658929 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11658929'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11658929 = new Set(existingCategories_11658929.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11658929 = [...new Set([
      '숙소'
    ])];

    for (const category of uniqueCategories_11658929) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11658929.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11658929' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 홍수환스타복싱체육관 카테고리 관계
    const existingCategories_12951209 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12951209'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12951209 = new Set(existingCategories_12951209.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12951209 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_12951209) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12951209.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12951209' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // CGV 청담씨네시티 카테고리 관계
    const existingCategories_20574013 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20574013'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20574013 = new Set(existingCategories_20574013.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20574013 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_20574013) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20574013.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20574013' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한솥 아트스페이스 카테고리 관계
    const existingCategories_1337616617 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1337616617'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1337616617 = new Set(existingCategories_1337616617.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1337616617 = [...new Set([
      '미술관',
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1337616617) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1337616617.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1337616617' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 더샵갤러리 카테고리 관계
    const existingCategories_1796610552 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1796610552'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1796610552 = new Set(existingCategories_1796610552.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1796610552 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1796610552) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1796610552.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1796610552' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 북쌔즈 카테고리 관계
    const existingCategories_1526151711 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1526151711'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1526151711 = new Set(existingCategories_1526151711.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1526151711 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1526151711) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1526151711.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1526151711' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 키이스케이프 로그인2 카테고리 관계
    const existingCategories_1068140037 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1068140037'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1068140037 = new Set(existingCategories_1068140037.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1068140037 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1068140037) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1068140037.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1068140037' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // Kia360 카테고리 관계
    const existingCategories_494684198 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['494684198'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_494684198 = new Set(existingCategories_494684198.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_494684198 = [...new Set([
      '관광지',
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_494684198) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_494684198.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '494684198' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 식물관PH 카테고리 관계
    const existingCategories_1121708764 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1121708764'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1121708764 = new Set(existingCategories_1121708764.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1121708764 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1121708764) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1121708764.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1121708764' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 메종에르메스도산파크 카테고리 관계
    const existingCategories_18834405 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18834405'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18834405 = new Set(existingCategories_18834405.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18834405 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_18834405) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18834405.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18834405' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 시그널헌터 가로수길점 카테고리 관계
    const existingCategories_1473752908 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1473752908'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1473752908 = new Set(existingCategories_1473752908.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1473752908 = [...new Set([
      '카페'
    ])];

    for (const category of uniqueCategories_1473752908) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1473752908.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1473752908' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 알라딘 중고서점 강남점 카테고리 관계
    const existingCategories_30833453 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['30833453'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_30833453 = new Set(existingCategories_30833453.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_30833453 = [...new Set([
      '도서관'
    ])];

    for (const category of uniqueCategories_30833453) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_30833453.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '30833453' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 우리동네사진관 강남역 카테고리 관계
    const existingCategories_31949675 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['31949675'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_31949675 = new Set(existingCategories_31949675.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_31949675 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_31949675) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_31949675.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '31949675' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한국도심공항 카테고리 관계
    const existingCategories_11623586 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11623586'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11623586 = new Set(existingCategories_11623586.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11623586 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_11623586) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11623586.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11623586' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // GS아트센터 카테고리 관계
    const existingCategories_1890616739 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1890616739'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1890616739 = new Set(existingCategories_1890616739.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1890616739 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1890616739) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1890616739.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1890616739' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 코엑스 오디토리움 카테고리 관계
    const existingCategories_11663721 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11663721'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11663721 = new Set(existingCategories_11663721.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11663721 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_11663721) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11663721.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11663721' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 현대백화점 무역센터점 문화홀 카테고리 관계
    const existingCategories_1552142776 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1552142776'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1552142776 = new Set(existingCategories_1552142776.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1552142776 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1552142776) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1552142776.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1552142776' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // THEPLATZ 코엑스 카테고리 관계
    const existingCategories_1472554585 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1472554585'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1472554585 = new Set(existingCategories_1472554585.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1472554585 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1472554585) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1472554585.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1472554585' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 놀숲 압구정역점 카테고리 관계
    const existingCategories_38632459 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38632459'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38632459 = new Set(existingCategories_38632459.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38632459 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_38632459) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38632459.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38632459' LIMIT 1)`),
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
