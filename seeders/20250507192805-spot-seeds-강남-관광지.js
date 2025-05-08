'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 강남 관광지
 * 생성일시: 2025-05-07T10:28:12.831Z
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
          'POINT(127.0576546 37.5149197)'
        ),
        naver_spot_id: '11664007',
        review_count: 6,
        review_score: null,
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
        name: '양재천',
        address: '서울 강남구 대치동',
        tel: '02-3423-6255',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0574234 37.4881032)'
        ),
        naver_spot_id: '12375874',
        review_count: 183,
        review_score: null,
      },
      {
        name: '가로수길',
        address: '서울 강남구 신사동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0231136 37.5197043)'
        ),
        naver_spot_id: '13491811',
        review_count: 25,
        review_score: null,
      },
      {
        name: '도산공원',
        address: '서울 강남구 신사동 도산대로45길 20 도산전시관',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0350296 37.5246752)'
        ),
        naver_spot_id: '11622407',
        review_count: 93,
        review_score: 4.17,
      },
      {
        name: '스머프 매직 포레스트 강남점',
        address: '서울 강남구 역삼동 강남대로106길 29 지하1층',
        tel: '02-564-1114',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0278592 37.5034617)'
        ),
        naver_spot_id: '1716057332',
        review_count: 641,
        review_score: null,
      },
      {
        name: '삼성해맞이공원',
        address: '서울 강남구 삼성동 영동대로128길 39',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0620585 37.5197622)'
        ),
        naver_spot_id: '1213220888',
        review_count: 31,
        review_score: null,
      },
      {
        name: '대모산',
        address: '서울 강남구 개포동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0790098 37.4748289)'
        ),
        naver_spot_id: '11491346',
        review_count: 38,
        review_score: null,
      },
      {
        name: '선릉성종왕릉',
        address: '서울 강남구 삼성동 선릉로100길 1',
        tel: '02-568-1291',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0454398 37.5087684)'
        ),
        naver_spot_id: '12182110',
        review_count: 151,
        review_score: 4.41,
      },
      {
        name: '압구정로데오거리',
        address: '서울 강남구 신사동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0361236 37.5268138)'
        ),
        naver_spot_id: '13491361',
        review_count: 1,
        review_score: null,
      },
      {
        name: '은진농장',
        address: '서울 강남구 세곡동 헌릉로718길 44 은진농장',
        tel: '0507-1321-7463',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1175663 37.4620997)'
        ),
        naver_spot_id: '1430820935',
        review_count: 125,
        review_score: null,
      },
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
        review_score: 4.35,
      },
      {
        name: '마루공원',
        address: '서울 강남구 일원동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0808482 37.4962948)'
        ),
        naver_spot_id: '18850444',
        review_count: 17,
        review_score: 4.83,
      },
      {
        name: '율현공원',
        address: '서울 강남구 율현동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.115249 37.4725132)'
        ),
        naver_spot_id: '814449025',
        review_count: 8,
        review_score: null,
      },
      {
        name: '대치유수지체육공원',
        address: '서울 강남구 대치동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0690499 37.502425)'
        ),
        naver_spot_id: '431256125',
        review_count: 6,
        review_score: null,
      },
      {
        name: '구룡마을',
        address: '서울 강남구 개포동 양재대로 478 구룡마을 8지구 희망본부',
        tel: '0507-1493-5432',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0659615 37.4784668)'
        ),
        naver_spot_id: '33997153',
        review_count: 3,
        review_score: null,
      },
      {
        name: '일원에코파크',
        address: '서울 강남구 일원동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0874426 37.4951936)'
        ),
        naver_spot_id: '1792059339',
        review_count: 8,
        review_score: null,
      },
      {
        name: '학동공원',
        address: '서울 강남구 논현동 강남대로140길 47',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0252224 37.5154929)'
        ),
        naver_spot_id: '13491285',
        review_count: 64,
        review_score: null,
      },
      {
        name: '청담근린공원',
        address: '서울 강남구 청담동',
        tel: '02-3423-6245',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0525708 37.5218371)'
        ),
        naver_spot_id: '13542595',
        review_count: 11,
        review_score: 5,
      },
      {
        name: '도곡공원',
        address: '서울 강남구 도곡동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0450337 37.4903126)'
        ),
        naver_spot_id: '18852184',
        review_count: 41,
        review_score: null,
      },
      {
        name: '도산 안창호 기념관',
        address: '서울 강남구 신사동 도산대로45길 20 도산전시관',
        tel: '02-541-1800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0356302 37.5239977)'
        ),
        naver_spot_id: '11620336',
        review_count: 4,
        review_score: null,
      },
      {
        name: '아노블리81',
        address: '서울 강남구 청담동 도산대로 419',
        tel: '02-3448-0441',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0416493 37.5238471)'
        ),
        naver_spot_id: '1318284239',
        review_count: 3,
        review_score: null,
      },
      {
        name: '서울둘레길9코스(대모구룡산)',
        address: '서울 강남구 개포동 양재대로 478',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0691749 37.4716958)'
        ),
        naver_spot_id: '1880081503',
        review_count: 5,
        review_score: null,
      },
      {
        name: '강남세곡체육공원',
        address: '서울 강남구 율현동 ',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1137532 37.4675392)'
        ),
        naver_spot_id: '1817628634',
        review_count: 6,
        review_score: null,
      },
      {
        name: '매봉산',
        address: '서울 강남구 도곡동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0448857 37.4907106)'
        ),
        naver_spot_id: '37490211',
        review_count: 26,
        review_score: null,
      },
      {
        name: '전주이씨광평대군묘역',
        address: '서울 강남구 수서동 광평로31길 20',
        tel: '02-459-4733',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0925393 37.4874111)'
        ),
        naver_spot_id: '20104032',
        review_count: 0,
        review_score: null,
      },
      {
        name: '논현동가구거리',
        address: '서울 강남구 논현동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0256712 37.5130215)'
        ),
        naver_spot_id: '18843331',
        review_count: 2,
        review_score: null,
      },
      {
        name: '생각하는박물관',
        address: '서울 강남구 청담동 삼성로147길 34 2층 (파란대문)',
        tel: '02-723-7814',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0466176 37.5208073)'
        ),
        naver_spot_id: '12331878',
        review_count: 1,
        review_score: null,
      },
      {
        name: '청담동명품거리',
        address: '서울 강남구 청담동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.046307 37.5260738)'
        ),
        naver_spot_id: '34615836',
        review_count: 0,
        review_score: null,
      },
      {
        name: '역삼문화공원',
        address: '서울 강남구 역삼동 테헤란로7길 21 국립어린이청소년도서관',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0304888 37.5013931)'
        ),
        naver_spot_id: '13542444',
        review_count: 68,
        review_score: 4,
      },
      {
        name: '아쿠아트',
        address: '서울 강남구 삼성동 영동대로 513 코엑스아쿠아리움 가기 전 어항만들기 체험장',
        tel: '0507-1377-1758',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0594275 37.5116621)'
        ),
        naver_spot_id: '1621292145',
        review_count: 12,
        review_score: null,
      },
      {
        name: '대모산숲속야생화원',
        address: '서울 강남구 일원동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.079531 37.4803617)'
        ),
        naver_spot_id: '1045285278',
        review_count: 4,
        review_score: null,
      },
      {
        name: '대치동학원가',
        address: '서울 강남구 대치동 도곡로 445-2 구두수선대',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0579918 37.4979664)'
        ),
        naver_spot_id: '20649246',
        review_count: 29,
        review_score: null,
      },
      {
        name: '럭셔리멀티스파',
        address: '서울 강남구 역삼동 봉은사로 138',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0298417 37.5057709)'
        ),
        naver_spot_id: '1185330823',
        review_count: 0,
        review_score: null,
      },
      {
        name: '청담배수지공원',
        address: '서울 강남구 삼성동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0614108 37.5210611)'
        ),
        naver_spot_id: '826700069',
        review_count: 2,
        review_score: null,
      },
      {
        name: '봉은사 템플스테이',
        address: '서울 강남구 삼성동 봉은사로 531',
        tel: '02-3218-4826',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0573624 37.5155999)'
        ),
        naver_spot_id: '18817018',
        review_count: 193,
        review_score: 4.54,
      },
      {
        name: '논현동먹자골목',
        address: '서울 강남구 논현동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0233947 37.5097183)'
        ),
        naver_spot_id: '36774284',
        review_count: 1,
        review_score: null,
      },
      {
        name: '대모산도시자연공원',
        address: '서울 강남구 일원동',
        tel: '02-2104-1912',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0809639 37.4796489)'
        ),
        naver_spot_id: '13470517',
        review_count: 2,
        review_score: null,
      },
      {
        name: '한솔공원',
        address: '서울 강남구 일원동 광평로10길 14-17',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0779136 37.4808777)'
        ),
        naver_spot_id: '18850484',
        review_count: 0,
        review_score: null,
      },
      {
        name: '역삼개나리공원',
        address: '서울 강남구 역삼동 논현로79길 24',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0362049 37.4976865)'
        ),
        naver_spot_id: '18789937',
        review_count: 2,
        review_score: null,
      },
      {
        name: '늘벗공원',
        address: '서울 강남구 대치동 선릉로 118',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0570478 37.4895141)'
        ),
        naver_spot_id: '18820036',
        review_count: 4,
        review_score: null,
      },
      {
        name: '논현까치공원',
        address: '서울 강남구 논현동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0251224 37.5085159)'
        ),
        naver_spot_id: '18836081',
        review_count: 4,
        review_score: null,
      },
      {
        name: '은곡마을공원',
        address: '서울 강남구 세곡동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1005122 37.4679756)'
        ),
        naver_spot_id: '18848431',
        review_count: 4,
        review_score: null,
      },
      {
        name: '강남메디컬투어센터',
        address: '서울 강남구 압구정동 압구정로 161 강남관광정보센터 1층',
        tel: '02-1661-2230',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0269907 37.5268119)'
        ),
        naver_spot_id: '980722330',
        review_count: 3,
        review_score: null,
      },
      {
        name: '율현공원',
        address: '서울 강남구 율현동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1151288 37.475264)'
        ),
        naver_spot_id: '1676685553',
        review_count: 1,
        review_score: null,
      },
      {
        name: '탄천어울림공원',
        address: '서울 강남구 수서동 광평로60길 16',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.1063298 37.4876603)'
        ),
        naver_spot_id: '18851069',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대청공원',
        address: '서울 강남구 일원동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0825552 37.4924993)'
        ),
        naver_spot_id: '18849559',
        review_count: 2,
        review_score: null,
      },
      {
        name: '세천공원',
        address: '서울 강남구 세곡동',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.095569 37.4665734)'
        ),
        naver_spot_id: '1716735682',
        review_count: 2,
        review_score: null,
      },
      {
        name: '역삼문화 휴가든',
        address: '서울 강남구 역삼동 테헤란로7길 21',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(127.0304598 37.5013852)'
        ),
        naver_spot_id: '1084823048',
        review_count: 9,
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

    // 양재천 이미지
    const existingImages_12375874 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12375874'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12375874[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12375874' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxNzA2MDVfMTkx/MDAxNDk2NjQ4MTM0OTA2.ej4HLNpZDvi70FTqNj5rfO78TioFSgB2hw7MEkutrtAg.kh3Gl8dGChyWnGuF8LyOBB-ER4HW8YUVyCNE80KAW4Ag.JPEG.mementosyhk/_DSC1928_00001.jpg#740x493',
        }
      ]);
    }

    // 가로수길 이미지
    const existingImages_13491811 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13491811'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13491811[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13491811' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAyMzAzMjJfMjYy/MDAxNjc5NDk2NDcwODkz.MK_a1xIeAFjHQlzCJEIlz6iIHiX-aaA4U4TyW4WOKJ0g.37Szqtplj_JwloBub6kDzbdN2HV8s46AvKJCLY-O5acg.JPEG.hexeph/20230312_175833.jpg#4000x3000',
        }
      ]);
    }

    // 도산공원 이미지
    const existingImages_11622407 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11622407'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11622407[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11622407' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_158/1441007211120pT9l2_JPEG/106977548050318_0.jpg',
        }
      ]);
    }

    // 스머프 매직 포레스트 강남점 이미지
    const existingImages_1716057332 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1716057332'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1716057332[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1716057332' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230125_19/1674636838121KswRv_JPEG/902A1105-A3E6-45A1-873C-C1F9AE012745.jpeg',
        }
      ]);
    }

    // 삼성해맞이공원 이미지
    const existingImages_1213220888 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1213220888'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1213220888[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1213220888' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAyMzA5MTFfMTcg/MDAxNjk0NDMzOTk0MDI3.HIC-zrO6M4Hn141XOshZMfXijTV8DE1Ya3vngxpsXDsg.XrtSoFrDjRbP9_gcPbYNNgSEtA0sActVrlgHsr2tNZIg.JPEG.travelgeo/20230910%A3%DF214218.jpg#4000x3000',
        }
      ]);
    }

    // 대모산 이미지
    const existingImages_11491346 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11491346'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11491346[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11491346' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxNzAzMTVfMjIx/MDAxNDg5NTczNzYzODkw.Xqw2QjpfsmHzBF_YhRTkAMj-3YjpaRpZ4QWH5PuRvVog._6l-mWNhTxper8a_449-ISvlVNzYRze39_3-4rHWEDMg.JPEG.jh94645/170315_%BC%AD%BF%EF%B0%AD%B3%B2_%B4%EB%B8%F0%BB%EA_4.JPG#900x600',
        }
      ]);
    }

    // 선릉성종왕릉 이미지
    const existingImages_12182110 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12182110'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12182110[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12182110' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxODA0MjFfMjMy/MDAxNTI0MzE0OTU4MTk3.ZmjdNqSnVXcr3gP7Vc4xXV__WV57n3frybEhJdsBSwIg.EqkZduUCoZJBj2qVNs4UPHhyW1iJxa3dP93pJRjEcZ4g.JPEG.ohmark/IMG_9819.jpg#2000x1333',
        }
      ]);
    }

    // 은진농장 이미지
    const existingImages_1430820935 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1430820935'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1430820935[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1430820935' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240404_194/1712227964207fV6Fj_JPEG/20240404_083711.jpg',
        }
      ]);
    }

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
        }
      ]);
    }

    // 마루공원 이미지
    const existingImages_18850444 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18850444'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18850444[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18850444' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200202_268/1580628994517HiN1z_JPEG/OfKRMy186UeagZarwVNLXYNg.jpg',
        }
      ]);
    }

    // 율현공원 이미지
    const existingImages_814449025 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['814449025'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_814449025[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '814449025' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200118_52/1579323845064XJV5s_JPEG/9z63xstZVspOt4M_Cipip-98.jpg',
        }
      ]);
    }

    // 대치유수지체육공원 이미지
    const existingImages_431256125 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['431256125'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_431256125[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '431256125' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200218_34/1581995009380h2pHz_JPEG/Eg-wpUGPStDS4CHFFVC338BY.jpg',
        }
      ]);
    }

    // 구룡마을 이미지
    const existingImages_33997153 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33997153'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_33997153[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33997153' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20210128_189/1611798677269loOoF_JPEG/qMOK3Fl8jGBrJkFUvX6--SFF.jpg',
        }
      ]);
    }

    // 일원에코파크 이미지
    const existingImages_1792059339 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1792059339'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1792059339[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1792059339' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200202_175/1580606731016wlPwt_JPEG/MbagT9t9KpSMhRStVzcgeO4R.jpg',
        }
      ]);
    }

    // 학동공원 이미지
    const existingImages_13491285 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13491285'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13491285[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13491285' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxNjExMjFfMjg1/MDAxNDc5NzE5ODI2Nzk3.lsh6IaiQ0xRok5jyQHNhZs8y3gsQcZWKrckaIKZZFkog.HRMTmx2pE43DH3IYX4opoOq-7e9Wc-cqzgsuX1tZvSkg.JPEG.rgongsil/%B7%B9%C0%CE%BA%B8%BF%EC%BA%CE%B5%BF%BB%EA_%C7%D0%B5%BF%B1%D9%B8%B0%B0%F8%BF%F8.jpg#900x506',
        }
      ]);
    }

    // 청담근린공원 이미지
    const existingImages_13542595 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13542595'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13542595[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13542595' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxNjEwMjBfMTUx/MDAxNDc2OTM4NTU0MTU3.ym72zXi4xHiteBXRKqpFOBhXlqwLM88MPvA7tUtqXdAg.9Ko1Jq1Z8TfYtmL9e3hr-DWBDIotcxervE3Rwsw4eewg.JPEG.kimjeehyoung/KakaoTalk_20161020_132723335.jpg#900x506',
        }
      ]);
    }

    // 도산 안창호 기념관 이미지
    const existingImages_11620336 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620336'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_11620336[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620336' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150831_64/144100669577626Sys_JPEG/11620336_0.jpg',
        }
      ]);
    }

    // 강남세곡체육공원 이미지
    const existingImages_1817628634 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1817628634'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1817628634[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1817628634' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAyMzEwMjRfMTI0/MDAxNjk4MTEwNzEyNTg0.BktE1jypMIcne8LpNoV01Ex0HQHqW1tPhplfGbNRv0Ug.y_ZYK02exnwpMohXHdIeyJh7a6GSBalRB_McZjqHHYIg.JPEG.alicegangnam/%BC%BC%B0%EE%C3%BC%C0%B0%B0%F8%BF%F8_%C3%E0%B1%B8%C0%E5.jpg#4000x2664',
        }
      ]);
    }

    // 전주이씨광평대군묘역 이미지
    const existingImages_20104032 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20104032'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20104032[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20104032' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20190905_158/1567670370909LdknK_JPEG/lqOJNkKjFlHQnVvxAsScMe0_.jpg',
        }
      ]);
    }

    // 생각하는박물관 이미지
    const existingImages_12331878 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12331878'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12331878[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12331878' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20230316_252/1678929803528isMWS_PNG/1111%B7%CE%B0%ED.png',
        }
      ]);
    }

    // 청담동명품거리 이미지
    const existingImages_34615836 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34615836'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_34615836[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34615836' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAxNzAxMDhfMjcg/MDAxNDgzODEwOTE0OTA5.0vjU0HXF0nhYXd-gHme7l_lDU6-7C5VQaOqtwpzdPcog.DNL6G3IPKEPvIM2JblGagxE5BGKlAURnFxUFmGeswbwg.JPEG.hjjo100/IMG_6993.JPG#900x600',
        }
      ]);
    }

    // 아쿠아트 이미지
    const existingImages_1621292145 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1621292145'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1621292145[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1621292145' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20240404_9/1712208881522S77nB_PNG/5.png',
        }
      ]);
    }

    // 대모산숲속야생화원 이미지
    const existingImages_1045285278 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1045285278'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1045285278[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1045285278' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200426_264/1587877718199cCBqX_JPEG/npepX3XepZmKqbLE9Vwx2xDN.jpeg.jpg',
        }
      ]);
    }

    // 청담배수지공원 이미지
    const existingImages_826700069 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['826700069'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_826700069[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '826700069' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20170525_157/1495681646563PzeYn_JPEG/186475523743_0.jpg',
        }
      ]);
    }

    // 대모산도시자연공원 이미지
    const existingImages_13470517 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13470517'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13470517[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13470517' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20150901_173/1441042325679OkVou_JPEG/116677585055571_0.jpg',
        }
      ]);
    }

    // 역삼개나리공원 이미지
    const existingImages_18789937 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18789937'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18789937[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18789937' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAyMDA1MDZfMjE3/MDAxNTg4NzczODM2NTUy.iJsoJRdM_13xNwenjMCRu_6_qnlORzDxfyhmumzLNXAg.Kvytia-Qqyo_NnuAqNxiUqM1Y2dE8tor4Yy7dNmGsuwg.JPEG.jhj8637/20200506_170123.jpg#900x900',
        }
      ]);
    }

    // 논현까치공원 이미지
    const existingImages_18836081 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18836081'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18836081[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18836081' LIMIT 1)`),
          image_url: 'http://blogfiles.naver.net/MjAyMTEyMDhfMTgz/MDAxNjM4OTAxNzE4NDgy.76Qo-vArP1r0JlWA6o4YZ01jECpvRcwJoNGp_SuDzIsg.CX6QlXhiwp_NqRMdZn4ny8v7AVO3sDjdc6FbmMa0uJMg.JPEG.pakkh6969/20211208%A3%DF012652.jpg#900x675',
        }
      ]);
    }

    // 강남메디컬투어센터 이미지
    const existingImages_980722330 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['980722330'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_980722330[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '980722330' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20231122_126/1700631485629LLGeY_JPEG/%BC%BE%C5%CD%28%C3%E0%BC%D2%29.jpg',
        }
      ]);
    }

    // 대청공원 이미지
    const existingImages_18849559 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18849559'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18849559[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18849559' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200202_30/1580648437807DRnHV_JPEG/bJZuJSIfNWXDpGKJLV8pVsjD.jpg',
        }
      ]);
    }

    // 세천공원 이미지
    const existingImages_1716735682 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1716735682'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1716735682[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1716735682' LIMIT 1)`),
          image_url: 'https://ldb-phinf.pstatic.net/20200314_271/15841597925255VIRI_JPEG/hMVz9VBHQ_4iSlZvSUTmZydI.jpeg.jpg',
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

    // 양재천 카테고리 관계
    const existingCategories_12375874 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12375874'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12375874 = new Set(existingCategories_12375874.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12375874 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_12375874) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12375874.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12375874' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 가로수길 카테고리 관계
    const existingCategories_13491811 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13491811'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13491811 = new Set(existingCategories_13491811.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13491811 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_13491811) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13491811.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13491811' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도산공원 카테고리 관계
    const existingCategories_11622407 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11622407'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11622407 = new Set(existingCategories_11622407.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11622407 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_11622407) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11622407.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11622407' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 스머프 매직 포레스트 강남점 카테고리 관계
    const existingCategories_1716057332 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1716057332'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1716057332 = new Set(existingCategories_1716057332.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1716057332 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1716057332) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1716057332.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1716057332' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 삼성해맞이공원 카테고리 관계
    const existingCategories_1213220888 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1213220888'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1213220888 = new Set(existingCategories_1213220888.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1213220888 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1213220888) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1213220888.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1213220888' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대모산 카테고리 관계
    const existingCategories_11491346 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11491346'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11491346 = new Set(existingCategories_11491346.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11491346 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_11491346) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11491346.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11491346' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 선릉성종왕릉 카테고리 관계
    const existingCategories_12182110 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12182110'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12182110 = new Set(existingCategories_12182110.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12182110 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_12182110) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12182110.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12182110' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 압구정로데오거리 카테고리 관계
    const existingCategories_13491361 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13491361'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13491361 = new Set(existingCategories_13491361.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13491361 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_13491361) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13491361.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13491361' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 은진농장 카테고리 관계
    const existingCategories_1430820935 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1430820935'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1430820935 = new Set(existingCategories_1430820935.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1430820935 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1430820935) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1430820935.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1430820935' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

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

    // 마루공원 카테고리 관계
    const existingCategories_18850444 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18850444'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18850444 = new Set(existingCategories_18850444.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18850444 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18850444) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18850444.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18850444' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 율현공원 카테고리 관계
    const existingCategories_814449025 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['814449025'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_814449025 = new Set(existingCategories_814449025.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_814449025 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_814449025) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_814449025.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '814449025' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대치유수지체육공원 카테고리 관계
    const existingCategories_431256125 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['431256125'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_431256125 = new Set(existingCategories_431256125.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_431256125 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_431256125) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_431256125.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '431256125' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 구룡마을 카테고리 관계
    const existingCategories_33997153 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33997153'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33997153 = new Set(existingCategories_33997153.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33997153 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_33997153) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33997153.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33997153' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 일원에코파크 카테고리 관계
    const existingCategories_1792059339 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1792059339'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1792059339 = new Set(existingCategories_1792059339.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1792059339 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1792059339) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1792059339.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1792059339' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 학동공원 카테고리 관계
    const existingCategories_13491285 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13491285'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13491285 = new Set(existingCategories_13491285.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13491285 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_13491285) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13491285.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13491285' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청담근린공원 카테고리 관계
    const existingCategories_13542595 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13542595'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13542595 = new Set(existingCategories_13542595.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13542595 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_13542595) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13542595.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13542595' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도곡공원 카테고리 관계
    const existingCategories_18852184 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18852184'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18852184 = new Set(existingCategories_18852184.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18852184 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18852184) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18852184.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18852184' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 도산 안창호 기념관 카테고리 관계
    const existingCategories_11620336 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['11620336'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_11620336 = new Set(existingCategories_11620336.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_11620336 = [...new Set([
      '관광지',
      '역사'
    ])];

    for (const category of uniqueCategories_11620336) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_11620336.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '11620336' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아노블리81 카테고리 관계
    const existingCategories_1318284239 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1318284239'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1318284239 = new Set(existingCategories_1318284239.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1318284239 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1318284239) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1318284239.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1318284239' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울둘레길9코스(대모구룡산) 카테고리 관계
    const existingCategories_1880081503 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1880081503'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1880081503 = new Set(existingCategories_1880081503.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1880081503 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1880081503) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1880081503.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1880081503' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남세곡체육공원 카테고리 관계
    const existingCategories_1817628634 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1817628634'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1817628634 = new Set(existingCategories_1817628634.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1817628634 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1817628634) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1817628634.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1817628634' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 매봉산 카테고리 관계
    const existingCategories_37490211 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['37490211'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_37490211 = new Set(existingCategories_37490211.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_37490211 = [...new Set([
      '자연'
    ])];

    for (const category of uniqueCategories_37490211) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_37490211.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '37490211' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 전주이씨광평대군묘역 카테고리 관계
    const existingCategories_20104032 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20104032'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20104032 = new Set(existingCategories_20104032.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20104032 = [...new Set([
      '역사'
    ])];

    for (const category of uniqueCategories_20104032) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20104032.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20104032' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 논현동가구거리 카테고리 관계
    const existingCategories_18843331 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18843331'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18843331 = new Set(existingCategories_18843331.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18843331 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18843331) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18843331.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18843331' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 생각하는박물관 카테고리 관계
    const existingCategories_12331878 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12331878'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12331878 = new Set(existingCategories_12331878.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12331878 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_12331878) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12331878.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12331878' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청담동명품거리 카테고리 관계
    const existingCategories_34615836 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['34615836'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_34615836 = new Set(existingCategories_34615836.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_34615836 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_34615836) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_34615836.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '34615836' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 역삼문화공원 카테고리 관계
    const existingCategories_13542444 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13542444'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13542444 = new Set(existingCategories_13542444.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13542444 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_13542444) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13542444.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13542444' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 아쿠아트 카테고리 관계
    const existingCategories_1621292145 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1621292145'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1621292145 = new Set(existingCategories_1621292145.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1621292145 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1621292145) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1621292145.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1621292145' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대모산숲속야생화원 카테고리 관계
    const existingCategories_1045285278 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1045285278'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1045285278 = new Set(existingCategories_1045285278.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1045285278 = [...new Set([
      '복합 문화 공간'
    ])];

    for (const category of uniqueCategories_1045285278) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1045285278.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1045285278' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대치동학원가 카테고리 관계
    const existingCategories_20649246 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20649246'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20649246 = new Set(existingCategories_20649246.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20649246 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_20649246) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20649246.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20649246' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 럭셔리멀티스파 카테고리 관계
    const existingCategories_1185330823 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1185330823'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1185330823 = new Set(existingCategories_1185330823.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1185330823 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1185330823) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1185330823.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1185330823' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 청담배수지공원 카테고리 관계
    const existingCategories_826700069 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['826700069'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_826700069 = new Set(existingCategories_826700069.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_826700069 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_826700069) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_826700069.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '826700069' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 봉은사 템플스테이 카테고리 관계
    const existingCategories_18817018 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18817018'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18817018 = new Set(existingCategories_18817018.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18817018 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18817018) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18817018.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18817018' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 논현동먹자골목 카테고리 관계
    const existingCategories_36774284 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36774284'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36774284 = new Set(existingCategories_36774284.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36774284 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_36774284) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36774284.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36774284' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대모산도시자연공원 카테고리 관계
    const existingCategories_13470517 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13470517'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13470517 = new Set(existingCategories_13470517.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13470517 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_13470517) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13470517.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13470517' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한솔공원 카테고리 관계
    const existingCategories_18850484 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18850484'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18850484 = new Set(existingCategories_18850484.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18850484 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18850484) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18850484.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18850484' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 역삼개나리공원 카테고리 관계
    const existingCategories_18789937 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18789937'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18789937 = new Set(existingCategories_18789937.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18789937 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18789937) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18789937.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18789937' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 늘벗공원 카테고리 관계
    const existingCategories_18820036 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18820036'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18820036 = new Set(existingCategories_18820036.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18820036 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18820036) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18820036.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18820036' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 논현까치공원 카테고리 관계
    const existingCategories_18836081 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18836081'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18836081 = new Set(existingCategories_18836081.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18836081 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18836081) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18836081.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18836081' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 은곡마을공원 카테고리 관계
    const existingCategories_18848431 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18848431'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18848431 = new Set(existingCategories_18848431.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18848431 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18848431) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18848431.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18848431' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 강남메디컬투어센터 카테고리 관계
    const existingCategories_980722330 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['980722330'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_980722330 = new Set(existingCategories_980722330.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_980722330 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_980722330) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_980722330.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '980722330' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 율현공원 카테고리 관계
    const existingCategories_1676685553 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1676685553'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1676685553 = new Set(existingCategories_1676685553.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1676685553 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1676685553) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1676685553.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1676685553' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 탄천어울림공원 카테고리 관계
    const existingCategories_18851069 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18851069'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18851069 = new Set(existingCategories_18851069.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18851069 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18851069) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18851069.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18851069' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대청공원 카테고리 관계
    const existingCategories_18849559 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18849559'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18849559 = new Set(existingCategories_18849559.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18849559 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_18849559) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18849559.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18849559' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 세천공원 카테고리 관계
    const existingCategories_1716735682 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1716735682'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1716735682 = new Set(existingCategories_1716735682.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1716735682 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1716735682) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1716735682.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1716735682' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 역삼문화 휴가든 카테고리 관계
    const existingCategories_1084823048 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1084823048'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1084823048 = new Set(existingCategories_1084823048.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1084823048 = [...new Set([
      '관광지'
    ])];

    for (const category of uniqueCategories_1084823048) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1084823048.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1084823048' LIMIT 1)`),
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
