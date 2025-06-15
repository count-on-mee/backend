'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: 공덕 종교
 * 생성일시: 2025-06-15T10:32:54.338Z
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
        name: '공덕동성당',
        address: '서울 마포구 공덕동 마포대로14길 15-1',
        tel: '02-718-1040',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5485749 126.9564624)',
        4326
        ),
        naver_spot_id: '13138266',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공덕교회',
        address: '서울 마포구 공덕동 마포대로11길 30',
        tel: '02-716-0005',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5491904 126.9526854)',
        4326
        ),
        naver_spot_id: '13107281',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공덕감리교회',
        address: '서울 마포구 공덕동 백범로 169-19',
        tel: '02-717-0709',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54555 126.9500195)',
        4326
        ),
        naver_spot_id: '18765576',
        review_count: 0,
        review_score: null,
      },
      {
        name: '염리동성당',
        address: '서울 마포구 염리동 마포대로11가길 28',
        tel: '0507-1390-3511',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5474364 126.9494282)',
        4326
        ),
        naver_spot_id: '1687981534',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포중앙감리교회',
        address: '서울 마포구 도화동 새창로6라길 22',
        tel: '02-716-0202',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5406949 126.9542318)',
        4326
        ),
        naver_spot_id: '13018626',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신덕교회',
        address: '서울 마포구 신공덕동 만리재로 36',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54514 126.9557833)',
        4326
        ),
        naver_spot_id: '18301421',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포교회',
        address: '서울 마포구 염리동 백범로36길 12-8 대한예수교장로회마포교회',
        tel: '02-711-1004',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5437853 126.9484049)',
        4326
        ),
        naver_spot_id: '18325357',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하나님의교회세계복음선교협회',
        address: '서울 마포구 공덕동 임정로 83',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5464159 126.960068)',
        4326
        ),
        naver_spot_id: '36200496',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대한불교조계종 서원사',
        address: '서울 마포구 공덕동 효창목길 27',
        tel: '02-713-4100',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5475723 126.9607953)',
        4326
        ),
        naver_spot_id: '1974203701',
        review_count: 0,
        review_score: null,
      },
      {
        name: '방주교회',
        address: '서울 마포구 아현동 마포대로 173-16',
        tel: '02-362-7716',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5510534 126.9531378)',
        4326
        ),
        naver_spot_id: '1291911627',
        review_count: 0,
        review_score: null,
      },
      {
        name: '에벤에셀교회',
        address: '서울 마포구 도화동',
        tel: '02-3142-8290',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5432544 126.9498499)',
        4326
        ),
        naver_spot_id: '35032386',
        review_count: 0,
        review_score: null,
      },
      {
        name: '회현교회',
        address: '서울 마포구 공덕동 마포대로 115-8',
        tel: '02-715-8291',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54573 126.951302)',
        4326
        ),
        naver_spot_id: '38286665',
        review_count: 0,
        review_score: null,
      },
      {
        name: '초심사',
        address: '서울 마포구 신공덕동 임정로21길 44',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5444132 126.9571234)',
        4326
        ),
        naver_spot_id: '1509296060',
        review_count: 0,
        review_score: null,
      },
      {
        name: '예가교회',
        address: '서울 마포구 도화동 새창로4길 25',
        tel: '02-716-0690',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5410049 126.9512112)',
        4326
        ),
        naver_spot_id: '1798709266',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영광교회',
        address: '서울 마포구 도화동 새창로4라길 3',
        tel: '02-718-9802',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5411419 126.951325)',
        4326
        ),
        naver_spot_id: '18303957',
        review_count: 0,
        review_score: null,
      },
      {
        name: '제일장로교회',
        address: '서울 마포구 공덕동 마포대로11길 73',
        tel: '02-702-0690',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5487978 126.950118)',
        4326
        ),
        naver_spot_id: '13517538',
        review_count: 0,
        review_score: null,
      },
      {
        name: '동원교회',
        address: '서울 마포구 염리동 큰우물로 51',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5424458 126.9443989)',
        4326
        ),
        naver_spot_id: '1689649840',
        review_count: 0,
        review_score: null,
      },
      {
        name: '산마루교회',
        address: '서울 마포구 신공덕동 만리재로 74 신공덕2차삼성래미안',
        tel: '02-3273-0891',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5470382 126.9580069)',
        4326
        ),
        naver_spot_id: '12900101',
        review_count: 0,
        review_score: null,
      },
      {
        name: '갈보리침례교회',
        address: '서울 마포구 도화동 큰우물로 76 고려빌딩 6층',
        tel: '0507-1386-1611',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5408037 126.9459479)',
        4326
        ),
        naver_spot_id: '1234109323',
        review_count: 0,
        review_score: null,
      },
      {
        name: '여의도순복음교회 마포1공덕8교구기도처',
        address: '서울 마포구 대흥동 토정로31길 57 지하1층',
        tel: '02-6181-6066',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5432337 126.9439946)',
        4326
        ),
        naver_spot_id: '1082997094',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신덕교회신덕비젼센터',
        address: '서울 마포구 신공덕동 만리재로 48',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5452868 126.9560687)',
        4326
        ),
        naver_spot_id: '1971868628',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천성교회',
        address: '서울 마포구 도화동 새창로 30',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5416523 126.9530652)',
        4326
        ),
        naver_spot_id: '1456353805',
        review_count: 0,
        review_score: null,
      },
      {
        name: '참사랑교회',
        address: '서울 마포구 공덕동 효창목4길 6',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5471879 126.959468)',
        4326
        ),
        naver_spot_id: '1798035146',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울은천교회',
        address: '서울 마포구 도화동 도화2안길 23',
        tel: '02-702-1181',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.539033 126.948888)',
        4326
        ),
        naver_spot_id: '1378248232',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소망교회',
        address: '서울 마포구 도화동 새창로6길 2',
        tel: '02-712-1694',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.541815 126.9524209)',
        4326
        ),
        naver_spot_id: '20825026',
        review_count: 0,
        review_score: null,
      },
      {
        name: '쉴만한교회',
        address: '서울 마포구 염리동 큰우물로 49 엘지상가',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5425714 126.9441236)',
        4326
        ),
        naver_spot_id: '18773231',
        review_count: 0,
        review_score: null,
      },
      {
        name: '혜원교회',
        address: '서울 마포구 대흥동 토정로31길 57-5',
        tel: '02-701-1890',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5434 126.94395)',
        4326
        ),
        naver_spot_id: '12015460',
        review_count: 0,
        review_score: null,
      },
      {
        name: '길교회',
        address: '서울 마포구 공덕동 마포대로11나길 38 길교회',
        tel: '02-716-0191',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5517882 126.9506245)',
        4326
        ),
        naver_spot_id: '1036257946',
        review_count: 0,
        review_score: null,
      },
      {
        name: '회개와거룩함사역회 서울',
        address: '서울 마포구 염리동 백범로 133 3층',
        tel: '0507-1373-5259',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5463218 126.9459721)',
        4326
        ),
        naver_spot_id: '1386388511',
        review_count: 0,
        review_score: null,
      },
      {
        name: '만리현교회',
        address: '서울 마포구 공덕동 용산구 효창원로93길 24',
        tel: '02-717-9534',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5481906 126.9619466)',
        4326
        ),
        naver_spot_id: '1240753321',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서부교회',
        address: '서울 마포구 아현동 마포대로 197 서부교회',
        tel: '02-362-6488',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5519634 126.9541162)',
        4326
        ),
        naver_spot_id: '36178075',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울행복한교회',
        address: '서울 마포구 공덕동 만리재옛길 74',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5495886 126.9589411)',
        4326
        ),
        naver_spot_id: '1889608032',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울교회',
        address: '서울 마포구 아현동 마포대로16가길 3',
        tel: '02-363-0885',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5509785 126.9571114)',
        4326
        ),
        naver_spot_id: '13083319',
        review_count: 0,
        review_score: null,
      },
      {
        name: '능하사',
        address: '서울 마포구 공덕동 마포대로16길 6',
        tel: '02-701-7488',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5507939 126.9561919)',
        4326
        ),
        naver_spot_id: '12965420',
        review_count: 0,
        review_score: null,
      },
      {
        name: '여호와의증인의서울공덕회중',
        address: '서울 마포구 공덕동 마포대로 115-8',
        tel: '02-3273-0673',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5464979 126.9512881)',
        4326
        ),
        naver_spot_id: '18294229',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대한민국국가조찬기도회',
        address: '서울 마포구 도화동 마포대로 53 트라팰리스 C동 218호',
        tel: '02-761-9185',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5415418 126.9473839)',
        4326
        ),
        naver_spot_id: '18573408',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천부교마포교회',
        address: '서울 마포구 신공덕동 백범로 220',
        tel: '02-712-0364',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5421851 126.9542201)',
        4326
        ),
        naver_spot_id: '18301414',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한국기독실업인회',
        address: '서울 마포구 도화동 큰우물로 75',
        tel: '02-717-0111',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5412579 126.9462963)',
        4326
        ),
        naver_spot_id: '18303591',
        review_count: 0,
        review_score: null,
      },
      {
        name: '가나안교회',
        address: '서울 마포구 용강동 토정로31길 20',
        tel: '02-717-7072',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54165 126.942775)',
        4326
        ),
        naver_spot_id: '18312205',
        review_count: 0,
        review_score: null,
      },
      {
        name: '태일암',
        address: '서울 마포구 도화동 삼개로5안길 7',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.538423 126.9482744)',
        4326
        ),
        naver_spot_id: '1708565755',
        review_count: 0,
        review_score: null,
      },
      {
        name: '세대비전교회',
        address: '서울 마포구 도화동 새창로 52 도화동현대아파트',
        tel: '02-706-0191',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5395746 126.9542774)',
        4326
        ),
        naver_spot_id: '1195811497',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신촌감리교회',
        address: '서울 마포구 염리동 숭문6길 22 신촌교회',
        tel: '0507-1404-6412',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5499263 126.9472962)',
        4326
        ),
        naver_spot_id: '19931968',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하나님의교회세계복음선교협회',
        address: '서울 용산구 도원동 새창로8길 29',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5390927 126.9551668)',
        4326
        ),
        naver_spot_id: '33942128',
        review_count: 0,
        review_score: null,
      },
      {
        name: '꿈의교회',
        address: '서울 마포구 대흥동 독막로 276 2층',
        tel: '02-2455-5652',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5453633 126.9438793)',
        4326
        ),
        naver_spot_id: '1739567716',
        review_count: 0,
        review_score: null,
      },
      {
        name: '창일교회',
        address: '서울 용산구 효창동 임정로11길 9',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5428167 126.95855)',
        4326
        ),
        naver_spot_id: '18721334',
        review_count: 0,
        review_score: null,
      },
      {
        name: '원불교 마포교당',
        address: '서울 마포구 대흥동 독막로 275 1층',
        tel: '02-713-4376',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5456391 126.943975)',
        4326
        ),
        naver_spot_id: '13016064',
        review_count: 0,
        review_score: null,
      },
      {
        name: '더기쁨의교회',
        address: '서울 마포구 염리동 숭문길 28 3층',
        tel: '0507-1324-7723',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5476355 126.9455592)',
        4326
        ),
        naver_spot_id: '1862659733',
        review_count: 0,
        review_score: null,
      },
      {
        name: '기독교대한감리회 효창교회',
        address: '서울 용산구 효창동 백범로43길 2',
        tel: '02-713-1492',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5410495 126.9580387)',
        4326
        ),
        naver_spot_id: '12011241',
        review_count: 0,
        review_score: null,
      },
      {
        name: '사단법인 한지터',
        address: '서울 마포구 도화동 마포대로 38 일신빌딩 1103호',
        tel: '02-704-4018',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5393993 126.9466388)',
        4326
        ),
        naver_spot_id: '21278859',
        review_count: 1,
        review_score: null,
      },
      {
        name: '풍성한침례교회',
        address: '서울 마포구 염리동 숭문길 36 풍성한빌딩',
        tel: '02-702-2787',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5481233 126.9457011)',
        4326
        ),
        naver_spot_id: '18772923',
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

    // 공덕동성당 이미지
    const existingImages_13138266 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13138266'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13138266[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13138266' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190607_240/1559916654711R1ESl_JPEG/l0y_nR5Einlj19TPEApbxr0P.jpeg.jpg',
        }
      ]);
    }

    // 공덕교회 이미지
    const existingImages_13107281 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13107281'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13107281[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13107281' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190809_78/1565357811866vppn8_JPEG/Nfzq3jLq6ZIWM3CNxsqZGqFR.jpeg.jpg',
        }
      ]);
    }

    // 공덕감리교회 이미지
    const existingImages_18765576 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18765576'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18765576[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18765576' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_212/1440995570163BsGGh_JPEG/146655484427131_0.jpeg',
        }
      ]);
    }

    // 염리동성당 이미지
    const existingImages_1687981534 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1687981534'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1687981534[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1687981534' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240313_101/1710311118804fQe7e_JPEG/%BC%BA%B4%E7%C0%FC%B0%E6.JPG',
        }
      ]);
    }

    // 마포중앙감리교회 이미지
    const existingImages_13018626 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13018626'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13018626[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13018626' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150901_20/1441050627555iRsVa_JPEG/97166567755011_0.jpg',
        }
      ]);
    }

    // 신덕교회 이미지
    const existingImages_18301421 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18301421'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18301421[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18301421' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190917_47/156870859375458KgY_JPEG/lGZ79WPW5k68oS1pNk2rhmBR.jpeg.jpg',
        }
      ]);
    }

    // 마포교회 이미지
    const existingImages_18325357 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18325357'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18325357[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18325357' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200210_82/1581312280225oMP1B_JPEG/dET4xNij37A3Bll0mF3xk1G7.jpg',
        }
      ]);
    }

    // 하나님의교회세계복음선교협회 이미지
    const existingImages_36200496 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36200496'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36200496[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36200496' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200528_223/1590640498358GhPDO_JPEG/OIz1KfIhTNG1eJ9n6f4JYGE3.jpeg.jpg',
        }
      ]);
    }

    // 대한불교조계종 서원사 이미지
    const existingImages_1974203701 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1974203701'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1974203701[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1974203701' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20241115_144/1731658352156iV769_JPEG/%C3%E2%C0%D4%B1%B8_%B1%D9%C3%B3_%BB%E7%C1%F8.jpg',
        }
      ]);
    }

    // 방주교회 이미지
    const existingImages_1291911627 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1291911627'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1291911627[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1291911627' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190814_28/156572326866830H31_JPEG/UY9LuFGLitWRO0YT2yY9MdJu.jpeg.jpg',
        }
      ]);
    }

    // 회현교회 이미지
    const existingImages_38286665 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38286665'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_38286665[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38286665' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200104_276/1578132433345efyVU_JPEG/8L0w9avDcdIAekKeiJMLQOY5.jpg',
        }
      ]);
    }

    // 초심사 이미지
    const existingImages_1509296060 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1509296060'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1509296060[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1509296060' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20230601_265/16856264282523odSB_JPEG/BandPhoto_2023_06_01_22_33_13.jpg',
        }
      ]);
    }

    // 예가교회 이미지
    const existingImages_1798709266 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1798709266'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1798709266[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1798709266' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200107_33/1578403609713uxu74_JPEG/EW6s4V6vUvUdsSNVylqyBBl-.jpg',
        }
      ]);
    }

    // 제일장로교회 이미지
    const existingImages_13517538 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13517538'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13517538[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13517538' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20191018_59/15714023432937x1Ub_JPEG/YrHpqHnZ17IIKJp_DNyK3xp1.jpeg.jpg',
        }
      ]);
    }

    // 갈보리침례교회 이미지
    const existingImages_1234109323 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1234109323'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1234109323[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1234109323' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240328_300/1711605857922iY9OL_JPEG/%B8%B6%C6%F7%B1%B8_%C7%D1%B1%B9%BE%EE_%BE%E0%B5%B5.jpg',
        }
      ]);
    }

    // 여의도순복음교회 마포1공덕8교구기도처 이미지
    const existingImages_1082997094 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1082997094'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1082997094[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1082997094' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20180503_107/1525309483583O1kyL_JPEG/sOGaurvn6pahWSmbnHL-lhSC.jpg',
        }
      ]);
    }

    // 신덕교회신덕비젼센터 이미지
    const existingImages_1971868628 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1971868628'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1971868628[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1971868628' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200302_240/1583150040501BE3Qa_JPEG/x7hRK9bYU5oPZ8_G6-Qtt6Wz.jpeg.jpg',
        }
      ]);
    }

    // 천성교회 이미지
    const existingImages_1456353805 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1456353805'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1456353805[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1456353805' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190827_8/15668681804903srDp_JPEG/rVCARl1ZLUTxzPBMHGlMeWv_.jpg',
        }
      ]);
    }

    // 소망교회 이미지
    const existingImages_20825026 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20825026'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_20825026[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20825026' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190709_133/1562670813082XvC7H_JPEG/VlgsVVWEDqXTw0BfFtUQhvIG.jpeg.jpg',
        }
      ]);
    }

    // 쉴만한교회 이미지
    const existingImages_18773231 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18773231'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18773231[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18773231' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190902_255/1567398141710abIlb_JPEG/1xA4jzQ3vYhN8zogselDXwIg.jpeg.jpg',
        }
      ]);
    }

    // 혜원교회 이미지
    const existingImages_12015460 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12015460'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12015460[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12015460' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150831_120/1441000497951YI8Dk_JPEG/12015460_0.jpg',
        }
      ]);
    }

    // 길교회 이미지
    const existingImages_1036257946 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1036257946'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1036257946[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1036257946' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20240521_36/17162640959652ASwD_JPEG/20240508_215555.jpg',
        }
      ]);
    }

    // 회개와거룩함사역회 서울 이미지
    const existingImages_1386388511 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1386388511'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1386388511[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1386388511' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20231001_211/1696160865957k82yw_JPEG/%BA%F1%B5%D1%B1%E2_%BA%B9%BB%E7.jpg',
        }
      ]);
    }

    // 만리현교회 이미지
    const existingImages_1240753321 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1240753321'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1240753321[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1240753321' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20220419_132/1650349449986ccdCi_PNG/%B8%B8%B8%AE%C7%F6%B1%B3%C8%B8.png',
        }
      ]);
    }

    // 서부교회 이미지
    const existingImages_36178075 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36178075'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_36178075[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36178075' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190722_286/1563799649939iUq5z_JPEG/_-YDbkynpaq10GGFg8rwzT8Z.jpeg.jpg',
        }
      ]);
    }

    // 서울행복한교회 이미지
    const existingImages_1889608032 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1889608032'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_1889608032[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1889608032' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190916_182/1568620231412wgy4f_JPEG/Svn6TLwN0bGiLj3RsrOqdYkb.jpeg.jpg',
        }
      ]);
    }

    // 서울교회 이미지
    const existingImages_13083319 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13083319'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13083319[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13083319' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190813_298/15657053633487aKro_JPEG/35cSbuHna-CZ2harCxyuh81j.jpeg.jpg',
        }
      ]);
    }

    // 가나안교회 이미지
    const existingImages_18312205 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18312205'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18312205[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18312205' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20200226_259/1582725134003bDzXG_JPEG/c5C-2uGLkw-JtDndxjDBh8lH.jpeg.jpg',
        }
      ]);
    }

    // 하나님의교회세계복음선교협회 이미지
    const existingImages_33942128 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33942128'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_33942128[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33942128' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190601_206/1559386296350mwjnF_JPEG/UMaKBuWGI9_JLcaVzLpx-9xj.jpeg.jpg',
        }
      ]);
    }

    // 원불교 마포교당 이미지
    const existingImages_13016064 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13016064'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_13016064[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13016064' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20150901_213/1441050278709njErO_JPEG/97162516848249_0.jpg',
        }
      ]);
    }

    // 기독교대한감리회 효창교회 이미지
    const existingImages_12011241 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12011241'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_12011241[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12011241' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190728_5/1564302353890zJSWS_JPEG/8ZF9wbH2jFW4FJohq4b_E2QE.jpeg.jpg',
        }
      ]);
    }

    // 풍성한침례교회 이미지
    const existingImages_18772923 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18772923'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_18772923[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
        {
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18772923' LIMIT 1)`),
          img_url: 'https://ldb-phinf.pstatic.net/20190810_53/1565416885791XcKDU_JPEG/NP-l4-cq15QZnD3XuygWAbUC.JPG.jpg',
        }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];

    // 공덕동성당 카테고리 관계
    const existingCategories_13138266 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13138266'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13138266 = new Set(existingCategories_13138266.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13138266 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13138266) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13138266.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13138266' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공덕교회 카테고리 관계
    const existingCategories_13107281 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13107281'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13107281 = new Set(existingCategories_13107281.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13107281 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13107281) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13107281.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13107281' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 공덕감리교회 카테고리 관계
    const existingCategories_18765576 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18765576'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18765576 = new Set(existingCategories_18765576.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18765576 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18765576) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18765576.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18765576' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 염리동성당 카테고리 관계
    const existingCategories_1687981534 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1687981534'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1687981534 = new Set(existingCategories_1687981534.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1687981534 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1687981534) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1687981534.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1687981534' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포중앙감리교회 카테고리 관계
    const existingCategories_13018626 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13018626'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13018626 = new Set(existingCategories_13018626.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13018626 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13018626) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13018626.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13018626' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신덕교회 카테고리 관계
    const existingCategories_18301421 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18301421'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18301421 = new Set(existingCategories_18301421.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18301421 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18301421) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18301421.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18301421' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 마포교회 카테고리 관계
    const existingCategories_18325357 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18325357'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18325357 = new Set(existingCategories_18325357.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18325357 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18325357) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18325357.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18325357' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 하나님의교회세계복음선교협회 카테고리 관계
    const existingCategories_36200496 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36200496'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36200496 = new Set(existingCategories_36200496.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36200496 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_36200496) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36200496.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36200496' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 방주교회 카테고리 관계
    const existingCategories_1291911627 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1291911627'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1291911627 = new Set(existingCategories_1291911627.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1291911627 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1291911627) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1291911627.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1291911627' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 에벤에셀교회 카테고리 관계
    const existingCategories_35032386 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['35032386'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_35032386 = new Set(existingCategories_35032386.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_35032386 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_35032386) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_35032386.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '35032386' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 회현교회 카테고리 관계
    const existingCategories_38286665 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['38286665'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_38286665 = new Set(existingCategories_38286665.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_38286665 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_38286665) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_38286665.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '38286665' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 초심사 카테고리 관계
    const existingCategories_1509296060 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1509296060'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1509296060 = new Set(existingCategories_1509296060.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1509296060 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1509296060) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1509296060.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1509296060' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 예가교회 카테고리 관계
    const existingCategories_1798709266 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1798709266'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1798709266 = new Set(existingCategories_1798709266.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1798709266 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1798709266) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1798709266.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1798709266' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 영광교회 카테고리 관계
    const existingCategories_18303957 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18303957'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18303957 = new Set(existingCategories_18303957.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18303957 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18303957) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18303957.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18303957' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 제일장로교회 카테고리 관계
    const existingCategories_13517538 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13517538'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13517538 = new Set(existingCategories_13517538.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13517538 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13517538) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13517538.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13517538' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 동원교회 카테고리 관계
    const existingCategories_1689649840 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1689649840'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1689649840 = new Set(existingCategories_1689649840.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1689649840 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1689649840) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1689649840.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1689649840' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 산마루교회 카테고리 관계
    const existingCategories_12900101 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12900101'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12900101 = new Set(existingCategories_12900101.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12900101 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12900101) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12900101.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12900101' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 갈보리침례교회 카테고리 관계
    const existingCategories_1234109323 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1234109323'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1234109323 = new Set(existingCategories_1234109323.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1234109323 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1234109323) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1234109323.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1234109323' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 여의도순복음교회 마포1공덕8교구기도처 카테고리 관계
    const existingCategories_1082997094 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1082997094'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1082997094 = new Set(existingCategories_1082997094.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1082997094 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1082997094) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1082997094.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1082997094' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천성교회 카테고리 관계
    const existingCategories_1456353805 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1456353805'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1456353805 = new Set(existingCategories_1456353805.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1456353805 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1456353805) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1456353805.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1456353805' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 참사랑교회 카테고리 관계
    const existingCategories_1798035146 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1798035146'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1798035146 = new Set(existingCategories_1798035146.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1798035146 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1798035146) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1798035146.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1798035146' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울은천교회 카테고리 관계
    const existingCategories_1378248232 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1378248232'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1378248232 = new Set(existingCategories_1378248232.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1378248232 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1378248232) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1378248232.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1378248232' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 소망교회 카테고리 관계
    const existingCategories_20825026 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['20825026'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_20825026 = new Set(existingCategories_20825026.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_20825026 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_20825026) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_20825026.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '20825026' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 쉴만한교회 카테고리 관계
    const existingCategories_18773231 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18773231'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18773231 = new Set(existingCategories_18773231.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18773231 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18773231) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18773231.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18773231' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 혜원교회 카테고리 관계
    const existingCategories_12015460 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12015460'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12015460 = new Set(existingCategories_12015460.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12015460 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12015460) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12015460.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12015460' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 길교회 카테고리 관계
    const existingCategories_1036257946 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1036257946'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1036257946 = new Set(existingCategories_1036257946.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1036257946 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1036257946) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1036257946.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1036257946' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 회개와거룩함사역회 서울 카테고리 관계
    const existingCategories_1386388511 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1386388511'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1386388511 = new Set(existingCategories_1386388511.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1386388511 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1386388511) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1386388511.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1386388511' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 만리현교회 카테고리 관계
    const existingCategories_1240753321 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1240753321'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1240753321 = new Set(existingCategories_1240753321.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1240753321 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1240753321) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1240753321.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1240753321' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서부교회 카테고리 관계
    const existingCategories_36178075 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['36178075'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_36178075 = new Set(existingCategories_36178075.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_36178075 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_36178075) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_36178075.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '36178075' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울행복한교회 카테고리 관계
    const existingCategories_1889608032 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1889608032'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1889608032 = new Set(existingCategories_1889608032.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1889608032 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1889608032) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1889608032.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1889608032' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 서울교회 카테고리 관계
    const existingCategories_13083319 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13083319'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13083319 = new Set(existingCategories_13083319.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13083319 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13083319) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13083319.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13083319' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 능하사 카테고리 관계
    const existingCategories_12965420 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12965420'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12965420 = new Set(existingCategories_12965420.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12965420 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12965420) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12965420.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12965420' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 여호와의증인의서울공덕회중 카테고리 관계
    const existingCategories_18294229 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18294229'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18294229 = new Set(existingCategories_18294229.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18294229 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18294229) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18294229.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18294229' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 대한민국국가조찬기도회 카테고리 관계
    const existingCategories_18573408 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18573408'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18573408 = new Set(existingCategories_18573408.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18573408 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18573408) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18573408.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18573408' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 천부교마포교회 카테고리 관계
    const existingCategories_18301414 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18301414'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18301414 = new Set(existingCategories_18301414.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18301414 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18301414) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18301414.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18301414' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 한국기독실업인회 카테고리 관계
    const existingCategories_18303591 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18303591'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18303591 = new Set(existingCategories_18303591.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18303591 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18303591) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18303591.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18303591' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 가나안교회 카테고리 관계
    const existingCategories_18312205 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18312205'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18312205 = new Set(existingCategories_18312205.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18312205 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18312205) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18312205.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18312205' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 세대비전교회 카테고리 관계
    const existingCategories_1195811497 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1195811497'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1195811497 = new Set(existingCategories_1195811497.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1195811497 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1195811497) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1195811497.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1195811497' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 신촌감리교회 카테고리 관계
    const existingCategories_19931968 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['19931968'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_19931968 = new Set(existingCategories_19931968.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_19931968 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_19931968) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_19931968.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '19931968' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 하나님의교회세계복음선교협회 카테고리 관계
    const existingCategories_33942128 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['33942128'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_33942128 = new Set(existingCategories_33942128.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_33942128 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_33942128) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_33942128.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '33942128' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 꿈의교회 카테고리 관계
    const existingCategories_1739567716 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1739567716'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1739567716 = new Set(existingCategories_1739567716.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1739567716 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1739567716) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1739567716.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1739567716' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 창일교회 카테고리 관계
    const existingCategories_18721334 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18721334'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18721334 = new Set(existingCategories_18721334.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18721334 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18721334) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18721334.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18721334' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 원불교 마포교당 카테고리 관계
    const existingCategories_13016064 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['13016064'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_13016064 = new Set(existingCategories_13016064.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_13016064 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_13016064) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_13016064.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '13016064' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 더기쁨의교회 카테고리 관계
    const existingCategories_1862659733 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['1862659733'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_1862659733 = new Set(existingCategories_1862659733.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_1862659733 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_1862659733) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_1862659733.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '1862659733' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 기독교대한감리회 효창교회 카테고리 관계
    const existingCategories_12011241 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['12011241'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_12011241 = new Set(existingCategories_12011241.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_12011241 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_12011241) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_12011241.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '12011241' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 사단법인 한지터 카테고리 관계
    const existingCategories_21278859 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['21278859'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_21278859 = new Set(existingCategories_21278859.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_21278859 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_21278859) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_21278859.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '21278859' LIMIT 1)`),
          spot_category_id: categoryId[category],
        });
      }
    }

    // 풍성한침례교회 카테고리 관계
    const existingCategories_18772923 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['18772923'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_18772923 = new Set(existingCategories_18772923.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_18772923 = [...new Set([
      '종교'
    ])];

    for (const category of uniqueCategories_18772923) {
      const categoryId = {"식당":1,"카페":2,"숙소":3,"관광지":4,"자연":5,"복합 문화 공간":6,"박물관":7,"미술관":8,"도서관":9,"역사":10,"종교":11};
      if (categoryId[category] && !existingCategoryIds_18772923.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = '18772923' LIMIT 1)`),
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
