'use strict';

/**
 * 카카오 북마크 크롤링으로 생성된 Spot 데이터 시드 파일
 * 폴더ID: 18589856
 * 카테고리라벨: 음식점
 * 생성일시: 2025-09-09T16:12:01.103Z
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    // 기존 스팟 데이터 조회 (naver_spot_id 기준 중복 방지)
    const existingSpots = await queryInterface.sequelize.query(
      'SELECT spot_id, naver_spot_id FROM spot WHERE naver_spot_id IS NOT NULL',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSpotMap = new Map(existingSpots.map(s => [s.naver_spot_id, s.spot_id]));

    const spotData = [
      {
        name: '갸우뚱',
        address: '서울 종로구 대학로9길 25 1층 (명륜4가)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58157541649787 127.00041209494835)',
          4326
        ),
        naver_spot_id: 'k545884369',
        review_count: 0,
        review_score: null,
      },
      {
        name: '환식당',
        address: '서울 종로구 창경궁로29길 28 1층 (명륜2가)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.583903558728636 126.99754093928175)',
          4326
        ),
        naver_spot_id: 'k1326299984',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아시안테이블',
        address: '서울 종로구 성균관로3길 11 1층 (명륜3가)',
        tel: '02-6013-1763',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58344224948117 126.99750925405264)',
          4326
        ),
        naver_spot_id: 'k1189993823',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서울가야밀면',
        address: '서울 종로구 성균관로3길 13 1층 (명륜3가)',
        tel: '02-766-8114',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58334133667273 126.99743679944862)',
          4326
        ),
        naver_spot_id: 'k1730426627',
        review_count: 0,
        review_score: null,
      },
      {
        name: '세아중식당',
        address: '서울 종로구 성균관로 20 1층 (명륜2가)',
        tel: '02-766-9979',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.584491006135714 126.99753186257324)',
          4326
        ),
        naver_spot_id: 'k1152401909',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나누미떡볶이 성대본점',
        address: '서울 종로구 성균관로 9-1 1층 (명륜2가)',
        tel: '02-747-0881',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58370174345993 126.99791682343135)',
          4326
        ),
        naver_spot_id: 'k10199904',
        review_count: 0,
        review_score: null,
      },
      {
        name: '도스타코스 성균관대점',
        address: '서울 종로구 창경궁로29길 5 1층 (명륜3가)',
        tel: '02-3676-3358',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58321521255144 126.99825648313164)',
          4326
        ),
        naver_spot_id: 'k887468017',
        review_count: 0,
        review_score: null,
      },
      {
        name: '히메카츠',
        address: '서울 종로구 창경궁로 266 1층 (혜화동)',
        tel: '02-745-6063',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58474330730837 127.00080158128252)',
          4326
        ),
        naver_spot_id: 'k389025057',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수도원',
        address: '서울 종로구 동숭3길 16 지하 1층 (동숭동)',
        tel: '02-747-1933',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58172308385812 127.0047685366763)',
          4326
        ),
        naver_spot_id: 'k27559253',
        review_count: 0,
        review_score: null,
      },
      {
        name: '혜화동버거',
        address: '서울 종로구 동숭3길 6-4 1층 (동숭동)',
        tel: '02-744-0125',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58112843003937 127.00471868537207)',
          4326
        ),
        naver_spot_id: 'k800964702',
        review_count: 0,
        review_score: null,
      },
      {
        name: '골목냉면 혜화점',
        address: '서울 종로구 혜화로 2 1층 (혜화동)',
        tel: '02-765-6580',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.586080380360265 127.00089217139617)',
          4326
        ),
        naver_spot_id: 'k26794813',
        review_count: 0,
        review_score: null,
      },
      {
        name: '혜화칼국수',
        address: '서울 종로구 창경궁로35길 13 1층 (혜화동)',
        tel: '02-743-8212',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58657772224769 127.00150356788946)',
          4326
        ),
        naver_spot_id: 'k8176347',
        review_count: 0,
        review_score: null,
      },
      {
        name: '반미362 대학로점',
        address: '서울 종로구 대학로 85-1 1층 (연건동)',
        tel: '070-8883-5199',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57877871628594 127.00194266066164)',
          4326
        ),
        naver_spot_id: 'k1603488884',
        review_count: 0,
        review_score: null,
      },
      {
        name: '광나루찌개',
        address: '서울 종로구 대학로5가길 1 1층 (연건동)',
        tel: '02-744-9260',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57834624229155 127.00173887501037)',
          4326
        ),
        naver_spot_id: 'k20745026',
        review_count: 0,
        review_score: null,
      },
      {
        name: '연건삼계탕',
        address: '서울 종로구 대학로5가길 11 1,2층 (연건동)',
        tel: '02-762-5084',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5786778082593 127.00172982604026)',
          4326
        ),
        naver_spot_id: 'k10661169',
        review_count: 0,
        review_score: null,
      },
      {
        name: '호호식당 대학로점',
        address: '서울 종로구 대학로9길 35 1층 (명륜4가)',
        tel: '02-741-2384',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58190337889544 127.00000905707157)',
          4326
        ),
        naver_spot_id: 'k561633351',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오이지',
        address: '서울 종로구 대학로9길 33 (명륜4가)',
        tel: '0507-1355-9977',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58184571516628 127.00018114129152)',
          4326
        ),
        naver_spot_id: 'k1194074731',
        review_count: 0,
        review_score: null,
      },
      {
        name: '야스미',
        address: '서울 종로구 대명길 39-10 1,2층 (명륜4가)',
        tel: '010-7662-2550',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58251245002113 126.99965129990414)',
          4326
        ),
        naver_spot_id: 'k13495138',
        review_count: 0,
        review_score: null,
      },
      {
        name: '머노까머나 대학로점',
        address: '서울 종로구 창경궁로 236 이화빌딩 2층 (명륜4가)',
        tel: '02-763-8850',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58256290047929 126.9988406846133)',
          4326
        ),
        naver_spot_id: 'k12980859',
        review_count: 0,
        review_score: null,
      },
      {
        name: '뎁짜이',
        address: '서울 종로구 대학로11길 41-4 1층 (명륜4가)',
        tel: '02-763-1915',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58237910068156 126.99918485837271)',
          4326
        ),
        naver_spot_id: 'k916333750',
        review_count: 0,
        review_score: null,
      },
      {
        name: '멘야산다이메 대학로점',
        address: '서울 종로구 창경궁로26길 38-2 1층 (명륜4가)',
        tel: '0502-5551-7802',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5818096751939 126.99970564554317)',
          4326
        ),
        naver_spot_id: 'k14503615',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이화동개성만두',
        address: '서울 종로구 율곡로 223 1층 (이화동)',
        tel: '02-741-1280',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57629913879069 127.00367689545367)',
          4326
        ),
        naver_spot_id: 'k2128022891',
        review_count: 0,
        review_score: null,
      },
      {
        name: '치티',
        address: '서울 종로구 창경궁로26길 17-2 유빌리지 지하1층 B102호 (명륜4가)',
        tel: '010-8447-0601',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58193580856514 126.9987999374976)',
          4326
        ),
        naver_spot_id: 'k1261018229',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서양집 혜화대학로본점',
        address: '서울 종로구 대학로9길 23-2 2층 (명륜4가)',
        tel: '02-764-7725',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.581478108962926 127.00047096504228)',
          4326
        ),
        naver_spot_id: 'k1663022585',
        review_count: 0,
        review_score: null,
      },
      {
        name: '스케치테이블',
        address: '서울 종로구 율곡로 206 지하1층, 1-2층 (연건동)',
        tel: '070-7757-2617',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57596401363127 127.00171617873394)',
          4326
        ),
        naver_spot_id: 'k1140862035',
        review_count: 0,
        review_score: null,
      },
      {
        name: '디마떼오 대학로점',
        address: '서울 종로구 동숭길 29 (동숭동)',
        tel: '02-747-4444',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58001483057139 127.0039306697696)',
          4326
        ),
        naver_spot_id: 'k7852526',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마당너른집',
        address: '서울 종로구 낙산길 3-4 1층 (동숭동)',
        tel: '02-3675-3838',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58066712178253 127.00470507087526)',
          4326
        ),
        naver_spot_id: 'k15625134',
        review_count: 0,
        review_score: null,
      },
      {
        name: '돈텐동식당',
        address: '서울 종로구 동숭길 51 (동숭동)',
        tel: '070-4103-4132',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.580541001131856 127.00421598998659)',
          4326
        ),
        naver_spot_id: 'k21329976',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소바의온도 본점',
        address: '서울 종로구 대학로12길 43 1층 (동숭동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58212675910129 127.00395342354793)',
          4326
        ),
        naver_spot_id: 'k1438226039',
        review_count: 0,
        review_score: null,
      },
      {
        name: '핏제리아오',
        address: '서울 종로구 동숭길 86 2-3층 (동숭동)',
        tel: '02-3673-5005',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.582097912451 127.00437457694568)',
          4326
        ),
        naver_spot_id: 'k21555096',
        review_count: 0,
        review_score: null,
      },
      {
        name: '겐로쿠우동 대학로점',
        address: '서울 종로구 대학로 129-9 (명륜4가)',
        tel: '02-742-8555',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58268182975293 127.00133593196531)',
          4326
        ),
        naver_spot_id: 'k13603063',
        review_count: 0,
        review_score: null,
      },
      {
        name: '칸다소바 혜화점',
        address: '서울 종로구 대학로 131-1 1층 (명륜4가)',
        tel: '02-747-1662',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58288365187298 127.00137216433302)',
          4326
        ),
        naver_spot_id: 'k1340493944',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소친친',
        address: '서울 종로구 대명길 39-9 2층 (명륜4가)',
        tel: '02-742-8594',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.582609757598924 126.99976451391447)',
          4326
        ),
        naver_spot_id: 'k26628758',
        review_count: 0,
        review_score: null,
      },
      {
        name: '제순식당 대학로직영점',
        address: '서울 종로구 대명길 39-4 1층 (명륜4가)',
        tel: '02-765-8220',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58278635128326 126.999452040699)',
          4326
        ),
        naver_spot_id: 'k371263730',
        review_count: 0,
        review_score: null,
      },
      {
        name: '해피니스 대학로점',
        address: '서울 종로구 대학로11길 40 세훈빌딩 1층 (명륜4가)',
        tel: '02-743-1811',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58243676667964 126.99969205736994)',
          4326
        ),
        naver_spot_id: 'k1770240772',
        review_count: 0,
        review_score: null,
      },
      {
        name: '버거파크 혜화점',
        address: '서울 종로구 대학로11길 5 1층 (명륜4가)',
        tel: '02-747-3005',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5821844810736 127.00135856584224)',
          4326
        ),
        naver_spot_id: 'k1252440966',
        review_count: 0,
        review_score: null,
      },
      {
        name: '정돈',
        address: '서울 종로구 대학로9길 12 지하1층 (명륜4가)',
        tel: '02-987-0924',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58178804662707 127.00109590396839)',
          4326
        ),
        naver_spot_id: 'k27306859',
        review_count: 0,
        review_score: null,
      },
      {
        name: '중차이',
        address: '서울 종로구 대학로7길 7 1층 101호 (연건동)',
        tel: '02-765-0692',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5789409017436 127.0014943575965)',
          4326
        ),
        naver_spot_id: 'k1405512420',
        review_count: 0,
        review_score: null,
      }
    ];

    // 업데이트 또는 삽입
    for (const row of spotData) {
      const existingId = existingSpotMap.get(row.naver_spot_id);
      if (existingId) {
        await queryInterface.bulkUpdate('spot', row, { naver_spot_id: row.naver_spot_id });
      } else {
        await queryInterface.bulkInsert('spot', [row], {});
      }
    }

    // 이미지: 기존 이미지가 없을 때만 추가
    const spotImgData = [];

    const existingImages_k545884369 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k545884369'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k545884369[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edea8c43f2c6ec9402c36c354ead33898930e7a9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e1fa3e1a20ab17850fb8574e9a8a16d9012a67a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8c9a9ee9cce380979e5358c53305d863efe7bddf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a332113b8a93d3be7a14b1417c46e3b478ea3be3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4a75aef3793acc99a0e08435e165c2d2e6b93182?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bd2105abbd46e6e1d17dcded816922e57401c290?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/86036e2daf8ff26119a1f392ae208fe8befa0c5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a511aef74f638cb65da3ee4be14294e0e258f3d8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/99905fb67963d6b8fd07f47100d38125fcaae5d7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41c70a2eb4627e38c4364ad7576250550c77cfd9?original' }
      ]);
    }

    const existingImages_k1326299984 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1326299984'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1326299984[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd2f47cc47474b20324c6105fa2adc1566b8a144?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/970f8d26b78f17263cc710b46d3d2257a943abad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d26f0c6a0140a1bd0794ab4b99d45a913047b0a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b37f7d5427a4230d3b3391ac1513b9823699e5a6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cfe492b5e1553e505274d6de5803afc13815b9dc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cdc320608cf1fe4582cfb4fda4b9e6d22dba006e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ea9e6f5f6d7557616df4a2855ef0911b4b76af4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e74c4b9c9322c56d083a9ae7ee5fe08cdc49493a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/350667f883a57f167a38ff155b2f33515bc839a77dac2139e9e692288ff660b4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTNfNjAg/MDAxNzQ3MTE0OTA3MDk5.E1GuURmXZ1gk1VtIUfaQfBM4bALHjbiXZyb9YOu32fMg.C1fot0OrYzrCxMAqHLw7giECtwoxWOJiA4tCyrQRyDsg.JPEG/900%EF%BC%BF20250513%EF%BC%BF121628.jpg?type=w580' }
      ]);
    }

    const existingImages_k1189993823 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1189993823'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1189993823[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/97FA80D3BAFF44CAA0DF90868D18ACAD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/61F80B2945CE4365BA6CF88B7DE0F131' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/98D8AC90BF444A7095DB021144F776E3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0962EAFBD4B844089B155D4099F013CA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4EB711559C954E5084411B27F1D8D679' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EE3293F589624D18B721B8A0998737BE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D2A5F3A6D38E4488AA93B3290133B78A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/78C13370E1D74F8299A2C7C6382D0526' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6BF54DBC9FE24D2BBC62304544650808' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A06B2B58BE8E4BB5874B442F6F9CFF33' }
      ]);
    }

    const existingImages_k1730426627 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1730426627'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1730426627[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3a7d9711caa20c1d63ef8f1c9b61a6c3778642e5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8539873142e445d577dd1030bc37a488e05de87?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d2d8b0579f9b3d34dbe6953265009ba56fcf4fcc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0450a1548b3a5f9a3e8ecb1c5eef4c0643428fa4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6a6318086dfc585561a9d1997f891dc40e988bb1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bcc36543165e08f92c2e09e9d6c2785e19ade730?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d86442797309f4ba778451d5e2d22af0a8bd887d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9e7ec3b4996f690031383337063d9608a0385d3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/25b5a1273f1d473fb628e7305fbfa17dd052e9df?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2395178bf974fd4e5feb0e129e4206af053240bd?original' }
      ]);
    }

    const existingImages_k1152401909 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1152401909'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1152401909[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0da530c08cc2d79659489b34db704600d73cd555?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c644cb011fef6a64b90d1126858a687655674e3f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/459c07e1260e8702b6176dc43676ea093e7b1908673f5710ecf6085f4ea1d536' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca65f648285e48a30feb4796fdec1547ae4e14be?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MjlfMTIy/MDAxNzE2OTkzMzE1NzIx.1HJ5M--dnbJZJT4yrLkn622QyS2Aa_Bw1GHTyHYpm0sg.L9uBr5YAJlKKhvWBCbu8uSOurF8eQls2h0UcL4BP0SMg.JPEG/KakaoTalk_20240523_231637271_07.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAyMDhfODMg/MDAxNzA3MzU0NzQ4MTIy.x30j67xk-f4YPamDC9Yl_r3XO4z5mPrQE1ZIhkm0r_8g.U76ISl_EsJJUJPgRm242cid_mklJgtiN33mZOL0TUckg.JPEG.glady317/1707354743892.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAyMDhfNTEg/MDAxNzA3MzU0NzQ3ODk4.I_1pKTAXSTShbXxwPkSf6h-CY_iUMO5fPNxwlO_nZQ8g.g_qy6NKJI-Y8eeBJAoz7-yEVbNHxHQnMpVUzqIYG0e4g.JPEG.glady317/1707354743061.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAzMTBfNzQg/MDAxNzEwMDU3NDE5NDk2.VL8xdjyVNOJyJD1wIGWcHrEcahdawqjqRHBEcaf4As8g.bi1hA_rptGxRmPoEF5gBwzJ71d-57fIWHNlBh__rSaIg.JPEG/IMG_4899.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAxMjFfMjQz/MDAxNzA1ODMwMzU4OTgy.-8YkQnYZKS4s-y-vgTlxku_oSlCoLV8IvFE0VWOsu6Ag.7c5ta09x29XtGLIcna9QdDY3itkqhaz7kuTk0bMPQu8g.JPEG.eunk8497/SE-45ee6c42-b1c9-11ee-b98b-71f414d080b2.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAxMjFfODEg/MDAxNzA1ODMwMzYwMDU1.6_HztqofTQ-yFqdhgRvihx6vkUx8kUbYHtqE7D6EETMg.AbhyWzPSKNDfc-E9rrjHEyBeO6NNQW1-uh53DNjFtAAg.JPEG.eunk8497/SE-45f54a13-b1c9-11ee-b98b-b7d8002578c0.jpg?type=w773' }
      ]);
    }

    const existingImages_k10199904 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10199904'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10199904[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/07831ec02b0183913c6f512c11b1253d6f04d5c0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d95d8f70cec0e04f9871fa58cc8ad116a69c63e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/98089bb3ec5d6302d398bf0feb57899ab1b34371?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0fabcb9cb0648c7bb795c9f2f806c151dc278264?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a0bc30241e82ff90c0a6ef8f06848bc6f5999ede?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4c5ce8339d96ce414e45dbb28d02d30f9d3983e1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rv6pkqz1ov2m2v08shqw0zw8x/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33313457777&kamp_tidx=0&signature=5nYOE%2Feazya5%2Fsc4TZSIy%2FGSE%2BU%3D&ts=1756548977' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1f2cca8a2e57e04ffb20a8fec3a70058b0bbd0f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34a43cbb6291737dc2c72d23d84fe27c1bd95ae7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b511442c644f9480f56468d140480104c8b545a1?original' }
      ]);
    }

    const existingImages_k887468017 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k887468017'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k887468017[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/85282c243ee9a4693a71eedb1e58b122269de5d0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cfb060c178a534b88c1d689513abfa0bc2833d2c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/54a8c1619fdf392c73bda2cd40991f40c77780ae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4915dadee35b0ab335f53e8c4416c5ab65067eca9af316c87ae16fd63cc6278a' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA1MjdfMTAx%2FMDAxNzE2NzgzOTk5OTEz.-rB9J7QGoME2nhJIzziTadRQchAOfr5D_-HRXLZoZCkg.BBLmcokOKRyMWodEy75zzYh35xggQE20GuJGIMElMu0g.JPEG%2F20240527_124406.jpg.jpg%3Ftype%3Dw1500_60_sharpen' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTc0/MDAxNzU1ODY0NDM4MTcx.7BlO1nkzGr3UhILCwCld_S63bM9C8yDRBSsdn-4iiYUg.tmgrgOp68Y04s42eolRj544aQt28Za8VU3-MoCX8ofUg.JPEG/IMG%EF%BC%BF5818.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTE2/MDAxNzU1ODY0NDM3OTQy.qCFVeus3hyti8msHR9KEuk5eBLOhI7ZpdZ6-Mq8o7vwg.jT4Kfm7ES5stBCND_6SF-266DsbyVGGSSEjdYC-eeiwg.JPEG/IMG%EF%BC%BF5816.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTU4/MDAxNzU1ODY0NTA3NTA1.BNqlgAZJ-7IipDGsVQEXjPBp9JLJBJKhMD0fi32WiNog.Ko_v_tqIGTOnkYRCs80akZYd8k-0XZWmLq8ardEeCeEg.JPEG/IMG%EF%BC%BF5799.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTQ4/MDAxNzU2MDk4NjcyMzM3.5LwKOX1tPpzHYOVgfoMF9dM0zzrkh9pwSWUvmlo-QYEg.oKiTwsS4f_cqsORLCA-SdFmw25YasTJCEVBLkV04iFQg.JPEG/output%EF%BC%BF1103468316.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTgz/MDAxNzU2MTI3MDg0NjUx.iYK9KT0QinAMwHu27Vyd5EcnkVpeRVeheIMFLng_UzUg.oeVi6hIdAamiHDtBJpdfjQxHZel0FbEkfgEOKSE3BHAg.JPEG/output%EF%BC%BF3854845612.jpg?type=w773' }
      ]);
    }

    const existingImages_k389025057 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k389025057'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k389025057[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb3ffc8e8343fef7b2072cce67ab780b1e322bf4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2c4b2bbac0292bd5ced9a08fea907e86cc4635f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1a9bef7e75aa223538d3b83314effb6a2cc33c29?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eed61e50afcec0febbacf44981b351193f9a4c1f01b21092f9a97712fc954242' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTAy/MDAxNzU2NzIyMTc0MjAw.1Cyz1rYVhTBZa-nwqfv03Uh_BslbRCHEAHwDC_cavEMg.AJp1vnWTdow3SwQi96BK3N02TW5njhNSFgn2fcMUzeQg.JPEG/900%EF%BC%BF1756722173187.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfOTEg/MDAxNzU2NzIwNzcwMTg0.8KB8A8ig5BXJ5FAoS9Al6kjBdc39GLWZ1_vDDgZ8Clsg.jHBpqgQXDrbhpmFE3wKtWpQvmi_DXdL6OxCK23DtmoQg.JPEG/900%EF%BC%BF1756720769254.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfOTgg/MDAxNzU2NzIwOTc0ODc2.a4DlglPXeFaXPc5XvbqIlLrrwqPgXvrgAX4YbBSdSP8g.aR0UGOkr5JqNrllLpltImzmyOc0_KJ33Knx76W74Vb0g.JPEG/900%EF%BC%BF20250829%EF%BC%BF131201.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMjQw/MDAxNzU2NzIyMjk3MjQw.h8c9OTWJsQH70bIHX1Mk-sogCOQe_JS9O9m5P8WCwwYg.y5w0-_hYMg4LqBSUjLp7rRDJ6OUGA-x6BxwIpl8wJjog.JPEG/900%EF%BC%BF20250829%EF%BC%BF134028.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMjE2/MDAxNzU2NzIxNDQxMjgz.jpyaCnaw-ZOERujRYwp6mo6Od0YqLZcUtbsRb_hb2hIg.9_noVt_FhA593biXdfU-CZwrLmkJ0nvbuAt6NR3k-3Eg.JPEG/900%EF%BC%BF1756721440256.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMjY1/MDAxNzU2NzIyMjk3MDM4.9pY67iEcLyjV9JSQ2fwau5T2_lgz3HI2RDx7IfKXN2gg.tFZhZTROj8_qNsm4GSmU0GDP1dSBtdvqPc4sFwhVPw4g.JPEG/900%EF%BC%BF20250829%EF%BC%BF134005.jpg?type=w773' }
      ]);
    }

    const existingImages_k27559253 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27559253'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27559253[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/270A5A3856F152AE32' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b14ac35f3e63f79ffc666eaef31858048b0e88cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/17d023e84335230e426987a543a7cd5ee8ff001b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ed9aad8e5fad3203d1dc4d1a041fd1cd72070dd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d7704e107b9e5d5b7c9061e6aeab028812855745?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6626d065bf85704a8333941e0d46290be81bed73?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/56e03391190b0d74d1c34ba28f4188df5c25cabf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/542a794b065d8b9f3731a8035827d88196c284af?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ecca50c1e6ac6701825d6da377a1c20b41f935d2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/747d0fe606a04601a8e6352d5889799aaf4118e8?original' }
      ]);
    }

    const existingImages_k800964702 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k800964702'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k800964702[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTdfMTU4/MDAxNzU1NDA2MDM1NDQ1.emPyO3ppsniJnXq20E9iOnuqrjqe_bQ33gwwTkbNjoIg.1z3OsMJhFdCFSbfRC4wA56hNTeqtxHefbr116iuByPIg.PNG/20250817_131636.png?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTdfMjg4/MDAxNzU1NDA2MDIwODQ4.u5SIx1AbN1g7fWn6wX_9DHM6uQEWAnQYt93yvunUoawg.YXKAW-1R39rETfYdKJJD3XRHMIU3Es_5klS6fx-S7LAg.PNG/20250817_131619.png?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNTYg/MDAxNzU3MDQ0NDU1OTY0.LXzpJHi0Ft_pE6Zqz7hkEJcwcfp7NqDBWnq7XPrAVLYg.cY2NKHt2gdfCyDeWrNb_Y8ZFBw2sJceT28Wtrm-ULqgg.JPEG/900%EF%BC%BF20250904%EF%BC%BF123639.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjMw/MDAxNzU3MDQ0NDU2MjA1.MMTbgq2aBK000eAOYvPaImN96OgIEpnE1pXE6OkOQxMg.dGXZsq2qbiYaAxfDC6X3Xej4JUMAm5q9IxP7HrFgYb4g.JPEG/900%EF%BC%BF20250904%EF%BC%BF123635.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjIg/MDAxNzU3MDQ0NDU4ODk2.5WurcELPtAuzk0XbpPHxMEqQGwi6FYzkQiOS3Omn8BIg.SCxyBCwlhtxxI-K0hl435-6yi04oJYpUXpYmLjh2Nu0g.JPEG/900%EF%BC%BF20250904%EF%BC%BF123644.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjA5/MDAxNzU3MDQ0NDU3MzA1.rqsLHqAVNhJVoSL642dsfCIxB5oRFnwh-pLFfIiq6q8g.8s9ckdDd-GwN8BQnY9niFMcdydjRKTpAmFVw_oqWQ-Ag.JPEG/900%EF%BC%BF20250904%EF%BC%BF123512.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjMg/MDAxNzU2NjA5ODUyMzY2.-AifrwlzfnX4cOMIgu6TvsvVORSTDmwErZ-3_VbRHLYg.8U5_0XV75UfSNsqs_dv-Soqfj6eQ2M-LdY6Ea3T6PoQg.JPEG/900%EF%BC%BF20250830%EF%BC%BF171613.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjI1/MDAxNzU2NjA5ODU1MTcx.0-VNUbQlBWeZtpbe_f89qa_IbjE0R7wPyV-25gvxpWUg.JrJlUBWT3yqwIvc8nQcatPhoYbkoVpqyo1WYkQZ6ep0g.JPEG/900%EF%BC%BF20250830%EF%BC%BF165836.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfNTYg/MDAxNzU2NjA5ODUzMTYz.Jvy8I_khZF5bTA-F3_A8l9yKw7Dd7du74aG2Ju83mPog.dpB_evH5CMz1wvjP7wzZr8ZhBRW7R5k5qj7TFIYX8Ywg.JPEG/900%EF%BC%BF20250830%EF%BC%BF171508.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjU2/MDAxNzU2NjA5ODUyMjQy._mVlFCy6gw0qCeDyQGrjqrRL-K7zyrfcPvmF62lVcL4g.kzzJRQl8bfKG6OSB-d-56icf_887AM4LgxI_SnX2S5sg.JPEG/900%EF%BC%BF20250830%EF%BC%BF170131.jpg?type=w773' }
      ]);
    }

    const existingImages_k26794813 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26794813'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26794813[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df9310f1b8c5bf17cceecc91322250c7435352a3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aad9d2626238e4b80f75e9189540a14fe927db62?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f04412e0cd2e3571a3c7006ca57b4abeae2519ba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eef79e5e656b2f569d111327c68b234228ac6ce1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/356980a0f33becf5228c3840f2bfc73a94298131?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/52459b32383463b68ec9cb85abef5850b1d7330b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e1e3ac9a041ebac6a97217ac6c53556c1d5ebf58?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2dc527b2e89f9d1f4cf86567d95ac92be2b32a7e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c8d8ab1e199c96d2440df4f62b8aee5a16db2e26?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8a9faefd14a19a198bfd20b6ad5f3ab746b67f86?original' }
      ]);
    }

    const existingImages_k8176347 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8176347'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8176347[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4df6ed0cef5e5227e9f35562b898ac7917a1f642?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0171a48aaff009a248cfe913ecb7233dec032951?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ad19c415a1209933467c514f2d15056a15358cf0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f21f3159340997880b8ba4e2c8e2cfcedc655087?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5450f5d5c8967e830d0584c2e208e31f8e11ef97?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/497fed6f103a944e4fd48a5f27b9764fda46962f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79c1c9328a398df1f310c04a0743b84a4c0a3bd2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6e1f0e1d25ccf679841e4212770c1eb83e403e47?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3743fb808d907994e294679cc98b64ccef199ef0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/17cddc32b04fab0715604ed0db92eff48d7bb2b2?original' }
      ]);
    }

    const existingImages_k1603488884 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1603488884'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1603488884[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b47f6403a9615cac086fc3b2777228cbdacd73e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfMTMx/MDAxNzQ4OTY1NTAwODEz.Iy0XNo4joW-3L0icidPvc8md5grDe7zKhlUJYAQBGhMg.f_gADspAImabO9oqfgD6kqk4SJI6H8lnhKQkLzY5aTUg.JPEG/IMG%EF%BC%BF0206.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfMzEg/MDAxNzQ4OTY1NTAwOTA5.0mv8SSKowASwhK-7txAJfNpPLaenJ-xZ36cPzeWG8cMg.L3qvIjofv2Ouitg4Kad_b2V374kT-Y2IYkqqo6O7ni0g.JPEG/IMG%EF%BC%BF0200.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfMjcw/MDAxNzQ4OTY1NTAwOTE1.6UTkAeGsIdsLL6hMZGKb9kGLyqpiINT2s8w-QNVf1Gcg.Pn8aZSPsH9hhIB1ZmFqTOgh3NDsxeKTMzarauhYCcJgg.JPEG/IMG%EF%BC%BF0204.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAyMTVfNDkg/MDAxNzA3OTk5MDQwNzMw.8dXNlXQXnUW7wbhJ3tK3Lhg7_lBrUlgiBfxOjHrWwwog.ntFQRy76I2Z_IENtOg7JsDk5cq-gDGk6XuLKyNMX3xIg.JPEG.kyn9158/IMG_4038.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzEyMThfMjA1/MDAxNzAyODgyMTA3MDI5.pew5HxF3XEtGdwvAGUREQheafZ0tx50g2j4S_zTjYJ0g.wlUENuxz48keZCTjEbpl0gDivp4A17yjdUQXc_E61H8g.JPEG.adelaide_j/KakaoTalk_20231218_153801321_08.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzEyMThfMTEz/MDAxNzAyODgyMTA3NTA3.ODlg-GixvZorm6Z06ta8SrTMZrVYRqnwCdhOA_85AQkg.9c696j_FJJ7Xgws-Cs8Ld-3tb-MVAbkeQxMNGT1WW1Ig.JPEG.adelaide_j/KakaoTalk_20231218_153801321_16.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MTNfMjg3/MDAxNjkxODUzNzU5Mjk5.G9gBwZF87hysP7DFIjQSyht8EFQQY0IUQABM8udaZxsg.1hrYXrYGkK8wunt8xmd0-8CUETZVjJrBCCa2Z6Lc-UUg.JPEG.sim_vi/IMG_1695.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MTNfMTE0/MDAxNjkxODUzNzYwMjQ0.WiIqtlGc4B7ybX1TcDcxc8bjDmsvhx-8zpcwSCPiB7Mg.1s7M2wEXFrOFu5lL6gW5tP9YQAUADgz3vd4CZX6PEVAg.JPEG.sim_vi/IMG_1697.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MTNfMjM5/MDAxNjkxODUzNzU4MTg3.hVmv6G_0q0csncL_8H86yLZi7MVvVnIpnvYaVGIIi6Ug.F74AhyXjwGpE0QQJ6oFNz4WmPwoIPi7XWUb_MMMmvmQg.JPEG.sim_vi/IMG_1694.jpg?type=w773' }
      ]);
    }

    const existingImages_k20745026 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k20745026'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k20745026[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjZfMTY5/MDAxNzUwODk4Njg1NDc2.Rw4Zbi4oOFbwJcvU6xcUi-Z3ku9-tqYtt6zVYODW0nUg.l7ATBhq26eI7_YclbJv8Lr9BGuL1DU6aFcubjDI8M74g.JPEG/20250610%EF%BC%BF111831.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjZfOTcg/MDAxNzUwODk4Njg0NjQx.zwR87eqoGWlSXbcRaID-Px4URss77Y9N4tIORM3wNxIg.8tEtqQKvOjxEkhGFrj4uDFZaJnwnDjXtn6VHB1o6K7Ag.JPEG/20250610%EF%BC%BF110909.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MDVfMjY2/MDAxNzI1NDkzNzEzMzk3.xgFPTksbitZCLoC7Bl6_SvPG7KxNwlVa2NANAQ5PsPsg.e4Y94ymLI07jSFThpnEujqHuSUwxSi84MkjWHyEizVIg.JPEG/SE-851d8fe5-154f-11ed-a742-ddcdb111ecd2.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDZfNzgg/MDAxNjkxMjg4NTI0OTU4.mMJ1o8OKSUoOvS9dG5CbODF6fJH5y65DvulKlwfUpvEg._SkuBpw9dbzgsEN9iJiiWn3_w2CR_Ky7mEd5AEkgZYYg.JPEG.milkinw529/SE-f85f7505-18b0-11ee-95e2-877bcbcfa17d.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjZfNTIg/MDAxNzUwODk4Njg0NjYw.26ZEMPO14NQ8JhSyY1P7ZkPDzx8fDlVRtkI5JhHDzlEg.5O5D_w_9bI_R0_fRYTkOLAsMMf7mmLYBoWh1Mriyzzkg.JPEG/20250610%EF%BC%BF111834.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjZfNjEg/MDAxNzUwODk4Njg0NzU3.D5PL6qGbGWiBbJAMNn8LDDZRihdp1yKkQ4l5p_Ya3fkg.MueQXN97v3QLTmxThVL2TLNe-NqsG-Jd0NqvwpcdVk4g.JPEG/20250610%EF%BC%BF110914.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjZfNzUg/MDAxNzUwODk4Njg2NDM0.Y2Hz007Xn4Rl4vY3EyO2-NifDpWFHjaK2EBo5WiZlPkg.r70rL3lAL3PM5NwpSEMN23uGvLevpFE6nl9d_3g_iKgg.JPEG/20250610%EF%BC%BF111828.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDZfNTgg/MDAxNjkxMjg4NTIzMjE1.55xzcGvU6hBALy7PrOiS74I9wN3qKQcLcIF74caWLjEg.Lo36vsvEv3wUOgi9DlZafro3x9txn8eGaPFrZIWq35gg.JPEG.milkinw529/SE-f85c67c1-18b0-11ee-95e2-d31df2183ae0.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA3MDJfMTIw/MDAxNjg4Mjg1ODg2NjM3.eSlx7xzq11CzPWDM4WHUhWZHHZxkQSuB8hcCwOjqfyMg.Njmn880FqIXHOm_nmOM_HX-kLnL4xqpe4sgj7PVtGDMg.JPEG.milkinw529/20230622%EF%BC%BF120359.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA3MDJfMTU3/MDAxNjg4Mjg1ODg2NTk5.9FshEbjuTStNI3tYWemwy7egsFwXyZiPtnguWVQq5dcg.N0iU6y2uvSPDUD_RfszDpaVczYY5Orlo7J-sTVAbW68g.JPEG.milkinw529/20230622%EF%BC%BF115954.jpg?type=w773' }
      ]);
    }

    const existingImages_k10661169 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10661169'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10661169[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1de3dfff0a6a7b274339a54c2452c3c787e7ca10?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f98a4bf04ded18bdbaece9808e120c017770929c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/275e8e477ab96504c43ac2e88bbac1794fa870a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMjU1/MDAxNzU2NTMzMjY3MDMy.hTGZOuQHT7fVDcaDAlFDjRN-NymZ69J7SabMot98f5cg.mWvacT9qqD8mSbLib4LL35QwxsXDxmqWoH5O4f8NHoEg.JPEG/900%EF%BC%BF20250830%EF%BC%BF132736.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTgx/MDAxNzU2NTMzMjcwODM1.rUU97zPwvDJMoa7E8fUOUVOR0hY1X4hiSckuIMKLAlQg.YEKPlCZlK9BaBhS-A8LuljXPE5IC1LYqGpP5iguqDUMg.JPEG/900%EF%BC%BF20250830%EF%BC%BF132602.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTY4/MDAxNzU2NTMzMjY4MDkz.MjtFfWDeeiWmZgM5hxlxNZ_hvSDe5dHTceFWM3qiP8Ag.4Tb2J7UOT8b6pIF6dZlk5ePL96-TtQmxPTY3tzK1y8Mg.JPEG/900%EF%BC%BF20250830%EF%BC%BF132739.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfNTEg/MDAxNzUzODI4ODcyNjk5.5G6vvjX23SJns_FqFVgohCm4HZfpEAXanooMd2WRz74g.C6DMsMC8h5w8laJwj2soq-jXwxjHVaa2adUFRjaPjX8g.JPEG/IMG%EF%BC%BF0603.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjE2/MDAxNzUzODM0MzQ2ODIw.avNbYCh3Xa2JoufJ4eim4zfDByU-zxVTUSQqOZSwNNAg.hEf5D7O8GOWC9B1UDF6bxAJGMQncTrwu4AKZURPOjhEg.JPEG/output_2990198908.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMTAw/MDAxNzUzOTMxNzQwNDM0.e5zolGWWGBUv89NVqy4CP8U-H13lMXsY1KSscVtjydYg.xqM-MEi0o3kEtmtIRG1eMgH97M0-2d0N_3aAzQZUA6kg.JPEG/IMG_2942.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMTI5/MDAxNzUzOTMxNzM5NDg2.l_bnUjr6_HZMBu2lbVImTLdCEo_undyTIaZjJ6NyUhkg.62GpABzxOrW7VpTZyAhtdBFU9JV7lw5OJe8SRf_ocq4g.JPEG/IMG_2943.jpg?type=w773' }
      ]);
    }

    const existingImages_k561633351 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k561633351'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k561633351[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fcc33d621332b608f04516efba854c68611dcb25?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ae437bf6f8eef06645ed6083439f8973d4d562e6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d0adae14c37deba0925c0f37ef5de39fcdfbffba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/72aed95738502c3775275a65a1600cf2f634083f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/223cdb564b7bd265f337f4a37cdbed3d0d7157b3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/103530596bba9f85d0db4aabbf9d8a1bad7cfa5d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9a622bd7fe7c792f3b7d47947141d886e4d86b8d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/604c1db8a7201021a0858b22904e5e66e7e8bb10?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83106682508bae9e945d5c095174d4ae529d5cb0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/be94846afddda964f6f02089b1dc2560f258f795?original' }
      ]);
    }

    const existingImages_k1194074731 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1194074731'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1194074731[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dd058743849528ef2fb4cfafefe3509963dbe30f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/23c1c8156712dea292805205e1a23448f57ddba2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/96c71d9c7dc8c5cd969367d3379b424691e4eceb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe4d59c319aa551f53cee56e14a6dc83e0dec7fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/06238d6e84b4457fc1dc2d22a792e33bc4f4a248?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d2d0c2229f0e60cdaf912c13669922bf5306e540?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c1b1b99de256b55bdc8c8d2d5829d9fe729cf300?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9749e12564acf41b71b0fd4703de2660a1ed7bd2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9a2faed53f870e8f4110cbc9d3708a51a7b6276f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/639dd831fbe208da722eaafabed641979b7853d1?original' }
      ]);
    }

    const existingImages_k13495138 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13495138'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13495138[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca51667220851c97ac4636f85f427aec95351f19?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d35633ead14a9d37f93bf71dc783d3ab34a2aee9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9966cb8d25100f646918278755a67c8f77f916ac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7b3d8451dfe9cc5ea6a4b4b2213723b9ba33234a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2f2754683abbd3a3983c8965ff1a52e1066bf176?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f3eb100a5180c2355b0e5f4c17c4f911a8b67fb5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d29a8476a87417b87d67e5da14cdd26d83421158?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/38d53d6bced3483ce3311a12287b494434be9081?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8d6f6633ae1b29efec00f488dae0a238900d53ff?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTA4/MDAxNzU3MDM4MDY4MTMz.4KTpEsbzlqDQtJz04qnyrgtKdckpSretIV-CVorePKgg.YtH5hSVDu0chwrEFQfAQQcGSB7GO9x98UOogaN9d7tcg.JPEG/1.jpg?type=w773' }
      ]);
    }

    const existingImages_k12980859 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12980859'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12980859[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/56a01871766d2d2a29e5d533b1d95f2e3176f0b1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a5916f88b082d0bf5e5d5c72937ed53232a6abd4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1a90231b3a4f1d31be284e86c3c97f26caf164af?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0507362787e04fe56ed453ee47bb7acc3586975e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfcqw6OkY_fIhKTz8Q8VkvVoXcN6qRtk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfcNFHAyy_UA63CjWX1UEwDjzvyKKfo1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfbM8eRfm_Odus8oumiY5jPBWxgZRKt0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNTYg/MDAxNzU3MDQ4NTQyMjU2.FsAU0_WFRFwJhp4ZG_xSogbUkZYAwVlo7gs7x3tZu2cg.vpngbYb4t67YMBFw9iYOjRvAmN6Wgk5oCPl4C_AzoQwg.JPEG/900%EF%BC%BF20250824%EF%BC%BF185025.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMTA0/MDAxNzU2NjAzNjU2MzQw.6yqmO7E2dUqFHiDx-YrsXGATdkiKX07rvexIT9Tqi6Yg.D_1SGOdie_oBRcymK4fFLKa1lMDUKFEzQrUyFo3TSHIg.JPEG/900%EF%BC%BF20250825%EF%BC%BF194147.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMTE5/MDAxNzU2NjAzNjU4Mzcy.Bi8IWd0FutAX00CDHKSOwB7USLxKGMqkdlERn0p9bBwg.y8NDeRMd0IPXoSsb2gxxHA38RVr3v8oheAn3KIyg3UUg.JPEG/900%EF%BC%BF20250825%EF%BC%BF194204.jpg?type=w580' }
      ]);
    }

    const existingImages_k916333750 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k916333750'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k916333750[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0872f5b7ea467417d509177ca234375576c2b27d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7696218cc69f8ec6dc5f09056f01b167bd886f5b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0553b0693bbd79634784ed4487fde238abd98684?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27501549532c6b79c4c20745fa49b290c31e8416?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b71828a6c3b2a1fc9ea618720012ebc0ba629bf8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3a393b0df00606c80819219a7c2898dbae54bfe2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/241e611a695c93352b4d2c862fe97eabeabf39ea?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca6ae9af73bb27cb055e052381b687b4a9105620?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3cc77540ace378592270d3a8185a81f52a278e53?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a19a16929c9c5b324ecb5e81f490098dc70f5ec0?original' }
      ]);
    }

    const existingImages_k14503615 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14503615'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k14503615[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/6a2dde8a476073c1015b3ae1b2e25902512b82ae' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/485b5327109c7f1a4a84baa15093e0d546737b08' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/2269a91fedc2c0bd67ba8ff2ec6d53c00fb12f3c' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/80006f45e20f851fe8246eb6c4c574abcd380717' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/1a73474888254f010d4ec105f05806d53a84023a' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/e28d47d4ecb23b4a8ef3d532744b65efafdcd47a' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/4ef469412861023cd0231a0994537cc41ce82810' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/8e849b4a4769a7cbe4f8a84bdc144e8ddf8472c2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/8f33ae1aee9fa7355fa1be4a9ca9b5fbbabb5d80' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/6bd9bf2b8f055f6bbad5e4e54f0a0d4d44366b0e' }
      ]);
    }

    const existingImages_k2128022891 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2128022891'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2128022891[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8898a223c490f02bef644fe6ef680074439601a9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDFfMTkw/MDAxNzU0MDQ2MDM4NDE0.CLb5OhutTEj_xhv5Wn38-LsTJP0VVTLbQ--FfThvfAQg.Ip2l2ukHmbyGAF6TSYQ80O6qhaGdY-ASM5NahShYagMg.JPEG/%EA%B0%80%EA%B2%8C%EC%99%B8%EA%B4%80-1.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDFfODMg/MDAxNzU0MDQ2NDU0NjIy.Y902y4uQ7mSgiv0lpju26WvKGa3fYG25dYncnnB8_msg.a7cl9_w69nPwNgDQm6hqEpfayy7DqCfVWufLziIevLIg.JPEG/%EA%B0%80%EA%B2%8C%EC%8B%A4%EB%82%B4-1.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMTkw/MDAxNzU0Nzg5NzE5NzIz.Ywxpvk7Oy5pTj7dYima-X46I9eAfu8FFEYukwJyE3QAg.6IfzU8A7aZZXe0PdNfRuFmZDyKL-iw6weoH8fjR0Ntwg.JPEG/KakaoTalk_20250810_101304338_10.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMzIg/MDAxNzU0Nzg5OTI2Nzgw.hdEetkdwQPLJ_yI_3I66GQ57hE-Btjy6HT8BYebKTtQg.tsJlA-Tkyz40URPPA24uXmFud2NR-0-UX6_9AStOutEg.JPEG/SE-01f1229f-c8ec-4144-a580-42e1b61f039e.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMiAg/MDAxNzU0Nzg5MTU4NjEw.uvCo7c_Y8fpYPZA1AdsQNBXnMQVuTe4O6XdayA7Afrog.9XChh8BOvWDbgCTgius1EcbEdj2NaJ7RX8ID_VQ-Ly4g.JPEG/KakaoTalk_20250810_101304338.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMTgx/MDAxNzU0NzkwMDQ0MzA5.4RexpdiEVwbWYV1vcwnfmFykyHiE108iuDhbs07TAnwg.Tcm6S7yKwQWWH9li3phzL6WghVshU1tomqfE6NVLxHgg.JPEG/SE-7d9f0cc7-d371-4124-98c1-b6224750888e.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMjAw/MDAxNzU0Nzg5MjQ0NTQz.uhX_1-PeIm-f3zqW20gVctshKjQJJw4gPTbHTOAsw-Qg.LEF8jRbS2uuQN77Ex3SWiOcHOxyS2AnS42m8G7urdrgg.JPEG/KakaoTalk_20250810_101304338_03.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjFfNjYg/MDAxNzUzMDc1OTc2NDYx.77CdiTMkP_Cyqr-HomtFN7ooi9TQfA5PwKDrPWODKywg.KK8luRuiFtqIUbXiG5c8qGjMb3R3mAkrSN8VXvVMRlgg.JPEG/output%EF%BC%BF2621890083.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjZfODEg/MDAxNzQ1NjY0OTMxMjU0.x16-cqLy9MdhO7sUh7dsvKJTZBe3C3PwlLiayXxfyX8g.8ED8t7HzJWUU6JHMfs0toRFI3aVEHJDrkEgQKBRETDgg.JPEG/SE-581B8DE7-1217-471A-9B85-876E5265437F.jpg?type=w773' }
      ]);
    }

    const existingImages_k1261018229 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1261018229'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1261018229[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfODQg/MDAxNzU2NjQ5MTgyMjU4.txCu-GopC8XAnuWT2gWUNMX9OiqSXJv3NrO_YBEYdL8g.l_wKqfRPBKVzUQngWL2k95fJ9l-Di_n1yPswQHnm2t8g.JPEG/SE-9845c7f3-02ee-446f-9cc9-f19ba55eaf84.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMTQw/MDAxNzU2NjQ5MDg3MDk5.PGhOg3-jJjULdUzdd4Zv13FQTRyqdWJqs38q01sO_GMg.tLmk7kJH4H1fiiOOrEldZRYn21AVnUsZEdcRyRlLWXUg.JPEG/IMG_8336.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfNTkg/MDAxNzU2NjQ5MDkwNTA0.0LHGNxS4ECJX0dcgywTrye9SYIeY5PGAaL_pPC2y4cog.QvdRX1bDTjtZx8CsuMh0rkg91Y9UAwXHQXSPwmWWVL4g.JPEG/IMG_8346.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMjEx/MDAxNzU1ODY0NTQzNjMw.5FgMTSVzaaqK-VvId8ygqv8EmB6p9BLHC6NMsayaeZUg.G3cdpCaFWwcPrzM2bw2n8XVDObGwQnIRPzQdMh0tt_sg.JPEG/IMG%EF%BC%BF4867.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMjQ3/MDAxNzU1ODY0NTQ0NzE2.lO6Nr8TLdWAgrfwD5_9D0-4LUU5j_qj0uyA2V2O0xLAg.v97J4_Uvpr7g4iwcNp3oCnqq-gE9mZVRoKKVmWkUBVwg.JPEG/IMG%EF%BC%BF4865.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTEy/MDAxNzU1ODY0NTQzMTY0.Jcj7VONfpP7fCj5XujYW6envLQwCZBEhOaOdnZMLf9wg.OBdqaQ2J2hekUiXSxkZNLKe2-86pHj0fxoZ76duBzHkg.JPEG/IMG%EF%BC%BF5135.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMjEg/MDAxNzU1ODY0NTQzNDA4.MoVtlDvsHwjyWXdw4K1I-IXKoN3ZCdVXz9UlwU91bs0g.A9eumZa64GCvf1_2ueJIk1uHGALMGU4MabzmJo8m764g.JPEG/IMG%EF%BC%BF4872.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMTc2/MDAxNzUxNjc1Mjk2NjU3.5h81ViC4TXkyO86DhPFB8LHWNRat2iHv6y4lyPLmWNEg.Cz7Xh6kNY5VHZ8mFf7fwDYmkGMo4ElVsWkkdz5op5MQg.JPEG/%EA%BE%B8%EB%AF%B8%EA%B8%B0%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%98KakaoTalk_20250705_085626803.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMjA0/MDAxNzUxNjc1NzgzNDQx.iOcHOc6fYwW87ZMnzOgbdC1PnZdYfJuR30gcHxJ2Z5Ig.RqCL-d8tIRX_E0UjDQISJiheOn_YkTbzlv0foCpNVB0g.JPEG/%EA%BE%B8%EB%AF%B8%EA%B8%B0%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%98KakaoTalk_20250705_085626803_11.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMjgg/MDAxNzUxNjc1Mjk2Njkz.G_5UQKo8M9zwHgMNOjKw2V_H0ObISJ7PAK2x-j3BTvwg.DqXtFvHCF5YVlk6TeRMsDRWviMpibhCoI32WjWxSL3Qg.JPEG/%EA%BE%B8%EB%AF%B8%EA%B8%B0%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%98KakaoTalk_20250705_085626803_01.jpg?type=w966' }
      ]);
    }

    const existingImages_k1663022585 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1663022585'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1663022585[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNDIg/MDAxNzU3MDQ3NDkwNjYw.NvgbeiIYylJLSu39iIap4JnpM2I0NbLkmzX4aGE7OcQg.VsHNY2YtNAYZCW1BZuDefNVhkKGx29P2iST98rxgGJMg.JPEG/KakaoTalk_Photo_2025-09-05-13-37-12_001.jpeg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNjQg/MDAxNzU3MDQ3NDkwNzE4.5aK6W3f-U-EP9jgqJVNJHJijheMx9V8tLZKHqEN6Lu8g.eBYsF1PjD3KdNKSwuuUtLetTWb0TqERSmIHbj3SBVT8g.JPEG/KakaoTalk_Photo_2025-09-05-13-37-12_002.jpeg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTgy/MDAxNzU3MDQ3NDkzMjI3.QPR0HiX69pvFjwwcsPwtyklp08QajGi3TrWVVjs_T1gg.5pHyeOiXMmTk6rgCNytTURANz9SsPqit7gEBzun6-IAg.JPEG/KakaoTalk_Photo_2025-09-05-13-37-14_011.jpeg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTE5/MDAxNzU3MDQ4MDEwNjAy.TodpRbL5aKgNePBqF6-zg44lwm8Lx0_7Ph6cMU8xudcg.uqGlAMvt1PDFUW5adDHDUSoS2FbYXw9UnYkVZAbMlO4g.JPEG/SE-d5e4670b-56d5-4369-a5fc-250f544cc7b6.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjM4/MDAxNzU3MDQ4MDEyNDQ4.IR17x6gwp24maWmSaPHDMLSXEYhwuBIqwQfTthZFbhAg.HnbjRgtLX-fKvEV_HwT-6yyX9OqcIk88m595nAM0lCsg.JPEG/SE-5255b474-71f3-46cd-a68f-ee6ccf48379b.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTg0/MDAxNzU3MDQ3NDk0Mjkw.STM6o1PNF5AJzNoZQBMIwrnlkvDmP9RppafvN-yAoMAg.hgdlriZadTRLGW8CUop6hN-iJpoS4KMGQJogdge0Xukg.JPEG/KakaoTalk_Photo_2025-09-05-13-37-15_012.jpeg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjYz/MDAxNzU3MDQ4MDE5MTkx.yvo6VD6Tis6GasNLjEtgFpTIn5JGj5VVqQCqjA_xQT8g.4hv8W9suWyNPU7STT3yf_hmH1ROUtaEbmvMLcvpv4Z8g.JPEG/SE-8486afac-ebf5-42ff-8e29-d96201d49de6.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTY5/MDAxNzU3MDQ3NDkwNzcy.aajnsgV58ByJ42MKVPR1p3SBc1VAQWDfYHwz52edX_wg.nbHWNcmcGf7slQ3HFHeNlb4cThVYo_stU2yQUnrc-Ekg.JPEG/KakaoTalk_Photo_2025-09-05-13-37-17_027.jpeg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMzkg/MDAxNzU3MDQ4MDE0MTQ2.Il-_2lT9xKaE-O3iPdYML4b0Btb2x6cT6fh_eisiPywg.W2Jrfw-H-HhSj7udtB9QmiRsOL-baH3LwxLnO2NhdZIg.JPEG/SE-4e3a6995-ac1d-4124-baa7-54d7f8ace60b.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjg5/MDAxNzU3MDQ3NDk1NDM4.EdoW1lWjDnx84Tmec5QLqJVi_e2Ap9STQ1M5ysB_yg8g.gvV38BZAM7TbLf-g070-6tIcC_yfu5Jp1tTSCch_3j8g.JPEG/KakaoTalk_Photo_2025-09-05-13-37-15_017.jpeg?type=w966' }
      ]);
    }

    const existingImages_k1140862035 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1140862035'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1140862035[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3748E56CC0C54C7D8CFA3AD2F83709F7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff172fb8349a44675c61a26b25f24d0a530ceb1f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8fc5920f2597241640a5ae3fad00fc88976b5027?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d6b6893d661a09c9b053e3416421509ae2ae3c48?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfNTgg/MDAxNzU0NDgxMjg3Nzgy.ouYdyzkLJCbltQ3RY9vI9OOA7Qv5gErYfhI7hHBMljQg.94fDuZyQCuuFSjEGyOp_WSlp2WgpsHpVAXSiiXtVka4g.JPEG/IMG%EF%BC%BF9770.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfODcg/MDAxNzU0NDgxMjk0NjE2.WEkpZr1p661SMdiYga-GdbWAQ2OBkkJGzoOhZ4mPoCQg.cBJsqXAqxWWCUZMKdlGVzxTNJ4GTQemf4f1HC3iasaIg.JPEG/IMG%EF%BC%BF9778.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMjE5/MDAxNzU0NDgxMjg4OTkz.jm3NvsB2HcHIP3GULI1gSrAWzV4GSzGH5_mdWDk4AfAg.MqIssnY2ABoDjNLWnhfuctULo1t3MJV4y5VvqVUWmy0g.JPEG/IMG%EF%BC%BF9781.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMjcw/MDAxNzU0NDgxMjg5MTk0.hCSfhypoxc7VSDwy84lKnpz0aCkWc14X2YPZW0aPDNIg.vKOD_rgSJen9wVAEEdoFuEk0M0Rt8A9ZgzDXjdWmo7gg.JPEG/IMG%EF%BC%BF9774.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMjA1/MDAxNzU0NDgxMjg3NzQz.JA-LKDlG05ZWufYUOg43BWzjVSyH_rjfavanVFRzmCAg.z6Kt4RIdsfAxNX0XMbHH9GVOM-ownLrwdPWksjlYsQYg.JPEG/IMG%EF%BC%BF9780.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMTg4/MDAxNzU0NDgxMjg5NzU0.bl193_ScSUwQ4RDs6oazFO-8Fn6QqF6KQN2Ez8JFF8Mg.CeCiLFd2J3eAQCvOS3YFvU1qQwaQxkqf1LFr_ZRGbTEg.JPEG/IMG%EF%BC%BF9773.JPG?type=w773' }
      ]);
    }

    const existingImages_k7852526 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7852526'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7852526[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjI4/MDAxNzU3MTU4MTYyNjQy.hPhot845HmhW3nG5G5xcMwSg7YG5TZozxxCPCMHLwfwg.pavUj13qt_pRc9w0vKH-PrXcfQNI2azp4Wrgvr0Vf0kg.JPEG/KakaoTalk_20250906_194900483_23.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjkw/MDAxNzU3MTU4NTI4MTkw.By8KGEZ1hcYf14phWZx-kE35WAtJ9tHMt8lMshbJWg4g.Tzfzl1WrAPis6rz41KGmiZyQzpMc_44lTlmGYtWZjLAg.JPEG/KakaoTalk_20250906_194900483_10.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfNzUg/MDAxNzU3MTU3MTM2NzYw.PJoWZe8Dr1lu--A47_ILK9T2_-6N59zvMkkdT0Vvdpkg.mXBlzJu78Ox5rKLm6PF6HB8un2htR_uMXH1PrnjT0yUg.JPEG/SE-975a289f-6e25-418f-b6dc-81877f3c3aa4.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfODYg/MDAxNzU3MTU3MTE0Njk4.wp3wxfTrEt0PWeJMHVQmkLi_GXUquCKNQS7ywm828tcg.QrGpVvEulX2-4hruSubWKUlonYYVPrUyTpSQ5_AXWEEg.JPEG/KakaoTalk_20250906_194900483_13.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTIz/MDAxNzU3MTU3MDUyNTg1.yjmDNY_MYSbJsqvpdfltZY9ZJnVsOjMIjtm60gwU2zIg.niMAT55kRk8goms8eo6smLw3Z40weqK5VaKLrZTlAi4g.JPEG/KakaoTalk_20250906_194900483_07.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjM2/MDAxNzU3MTU3MTE0NjQ0.26ffezFQRPWr7SWLQSSIlyuwQzLe26UTqqrDNjjDMbcg.RmUPWnos-_u9TSnupklQDNW3Sr3Vq6932pxwNVmEsgsg.JPEG/KakaoTalk_20250906_194903533_03.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjMz/MDAxNzU3MTU2NzM1NTk5.ed-dvGoUy4ExTOskv4N1TWbcdLM7_2aC1I889yxbwQog.6v1MmP1q69YsZxHEg53C2bPQDqS-9BzL3ymFwvU72wIg.JPEG/KakaoTalk_20250906_194900483_02.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjEw/MDAxNzU3MTU3MDY4MDg3.Z9yjZ4RmUajARI0wr_9QKSdXk6ZHzMB6lAxPCzS5lFog.mBpHY_6S_zGGs6ke593zRBckdmTiD7sueduUtP8JHyQg.JPEG/KakaoTalk_20250906_194900483_11.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjUg/MDAxNzU3MTU2MTA4ODA2.z0E0h3_rZKvRPMDzdg180Ea8WZHojnFjuhG7Yf0AY2kg.arsiwj0BkYcp8_vwVGGjm2_lOLnXhXgZiiCDysWMD2wg.JPEG/SE-b8f17a25-4309-41f7-9bff-7496d4d6ac25.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMTU3/MDAxNzU2NTkwNDIyMzY1.ncSZs8pmeQu2vNYo8kSwD__sYdmB9QEwROOZXhTqBM4g.opzUrkXcMtQzeiENSEyqRTB9x0n6EZiaITCfrdu10nUg.JPEG/20250819_121029.jpg?type=w773' }
      ]);
    }

    const existingImages_k15625134 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15625134'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15625134[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0851c8d63e95a16305e93986ffa4a499e4f37849?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/da0fa32bbf1d76339862e9d1eca01d2581fb6caa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3c1b76ef377abd2097d37bbf9496ceedb7a3620d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9766ca1cda802ddb87a33979ef6e6400db952d8e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/976f529c607fab409b755deb2b45938c708d8dc1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e471519675f2e81902ac0cd473b2951b6ac5fd22?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjM3/MDAxNzU2ODU0MjgzMjQy.fJnOA5bGRDSap7o4TjO4yJcguo4eKh1UGW8jUZx8GEwg.HymMRYmkxdu0sc9sEMMzPRB7NKT06FSPh03g37GsVQIg.JPEG/IMG%EF%BC%BF6185.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTkg/MDAxNzU2ODU0MjgzMjg3.m0-oB3tI8o3h-ERg8gFfNzAztQ-ZOQfKCIJmtjHINagg.FsJIURfYZ_3RR0gt1oLVsqZ4DGa8wvsFWiifjqAcG_4g.JPEG/IMG%EF%BC%BF6183.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjg3/MDAxNzU2ODU0Mjc5OTMw.836E_oMDZKaGSwFW2wq1IO8DduJTj7U7X2sX0M1LXqQg.yDsuRIDotQ56ytgs5gMBWcv7mZBtCBn_hQgcpfi86CQg.JPEG/IMG%EF%BC%BF6188.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTA4/MDAxNzU2ODU0MjgwMzI5.AFZfpBECK3oSxShxS-QAzenaq36MRw-miuQcz1ijYfwg.M_BX9DFpUZsOfe45r6hwtXepkNu2yRmKHdtjrF1KjuMg.JPEG/IMG%EF%BC%BF6184.jpg?type=w580' }
      ]);
    }

    const existingImages_k21329976 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21329976'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21329976[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/adf4a49d7adc6b25f4452fecbe92717edd60c263?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d1739040fc7e8779aaebc5290a03c92d5ec6592d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a772d0472be8f4d42c1bac4fb1621a8f7909cdbb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f7524e58a2b490a86fa7d09ac9e5a772a1bf7696?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a64b9fe496aa82096cee2241935488f3ad4aa798?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b102cd216876d12448e0f7ea81d177410adc5f13?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ec41a74255e0d3cefeef02e394fcdeb0c2d398a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fc803d86dffce607657ba674e5c7be79f4036e1b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5d4e1c5b145ba2205ba14cf9f5596c8ff0d54936?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b60afd47f8ac21be53d3f35ca58869137cfd60eb?original' }
      ]);
    }

    const existingImages_k1438226039 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1438226039'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1438226039[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9a7c93f7289f4dc7ad495d553599f5807dcba82d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5851cb1a600643d0e38bf095f29d6824ac43f771?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2157cf4414e5da5000bd5bc80a7a423d7f7e401e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c899ccf8460ae26e4d5ea5e232f4e9d18fab8bac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6177c3f40b8b129dbe8fd79e714f50fb6d747966?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/432aabd34f87184ac6212ba5e7001fdb79ec9f0e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/479f9eba7619cc9fa955bb3e200cb931a569c60a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/75a845f4443fd8a3d6de57059536cbbd1e5325fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTYg/MDAxNzU2OTg1MTk1MDAy.vFZE0FxSwL-PbV84FlKNY8L2xbXOT-r0risfInEPrZ8g.lWUfz9Nd4qXADBHDHuirvL77SddP81_c6cSU8IVnBAog.JPEG/SE-e653ca18-4099-41c9-9c54-9ec39d07123f.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfOCAg/MDAxNzU2OTg1MTg5NDMw.xN7xlhxYvj6IupBAzX3NbMpgxR51wUL2ZpLsKK3L0ygg.ZTlTlTtqynuuA3jMzxAnfirQN_TabKeAOq_CjCJPtykg.JPEG/SE-ed8bc928-151a-473b-abe4-ce32735bf12c.jpg?type=w966' }
      ]);
    }

    const existingImages_k21555096 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21555096'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21555096[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F57104EF78124BAEBB4D162F36D2D41E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6B61309B41004E7A854328959E49A863' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/31CA96D1318F4ED6BDE626A919D8C063' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3725FFC7A9AA412280521D5FE75F1064' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0981001052034666B5060EB45C662FA3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/82EA442125B448919FC38F1A9BD6778E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D9B41B012D14432DA43E3DD8AD9F3A65' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D5477F485101404086DC526DBC276A08' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/87C4CFC6D84D4008BCC3B7C7C18662D2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D66F212532084588B123B43FC6AC2145' }
      ]);
    }

    const existingImages_k13603063 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13603063'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13603063[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8a56d1964a09f2ec842fb3bf53abfc454fb2bb67?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3b691e8fff858d21c1205579f521166e81bb6cec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6dc21b42603a0f78e2f00359d6a74c75b8ad1721?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1fe7987e0c9fdbf4df9881d573d6408dc6ba73db?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/02768f0ae40af218f9b16e567639498db76acccc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e356bffca7038268c2b3b9fae8d42b9b04de5c42?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cbee9a1c64da6a772d14c2b6e47978087843e288?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1f4ef4cc2e851e697458a87c1b89bc801b80a060?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ee87ebaaef473c84d0581a92cc1b235962d2aed2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/94719720b8b4fa1ae3634b95e7c7efcbbd27b489?original' }
      ]);
    }

    const existingImages_k1340493944 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1340493944'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1340493944[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvqz8dq4p0iyhuu7se9ia51xw/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311897725&kamp_tidx=0&signature=VhVUqNpEtkgJwhPFLPxTP1KMoMM%3D&ts=1754988925' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvffjthitbkwgvzf061jmftao/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311897719&kamp_tidx=0&signature=J5LKjfpgc%2BIhgXE7WGUR34NyeUM%3D&ts=1754988919' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4915b3cf12ec36366f9d2fad0df2a8711c1338c2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8916f8ab2db906463a653e206401b7ac34fd06a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvzam0k6dr05xvx6d1iekwb4q/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33306285305&kamp_tidx=0&signature=Sbr1maZ3IiEOjP8XEUCwSg%2FWUMU%3D&ts=1749376505' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/84b1c6338431dba0138d7b3410b29b37f3c83b22?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0ee5feaa1825b97f04602f73f0abba55eafaa9a1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/614bd9d3d9efec1b6337509d30db6d6bbafc446c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/866e1dadd4e34d98375b193a3790cde0e7a8cf69?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1b6b4c2a37ceeab8b9529d91375ed96d5b0b9899?original' }
      ]);
    }

    const existingImages_k26628758 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26628758'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26628758[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/517b3cb167bbe0fe7db353a2695b42ab5d455295?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/814aba5beb4b6be7dc27ffd2de095682b451416a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edaaa49a7139b41b491a9bbe510214855c5daa4d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cb34714a753e95f319dc8c3130d94dd0673de2b1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/613deb338260e4766e815a56d530b7fa08b1031b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/50cc32e28d573366a3204b29f8ca391d71b57fdb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/472a52c3e18437ff1d3123d77f3d241959155992?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a7a8f6cd64a5d16e1be46bde13181fba3ee4ddac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3589f1e05f108446729250491a74242a2391b4a7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bb5c7d3f7ee3d7f44b0a39da5a66dbd63ecebbeb?original' }
      ]);
    }

    const existingImages_k371263730 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k371263730'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k371263730[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/570b7ed662c121fef8c8c70fede28cb8ecdc1bf2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a76dcd8a18dcf2c3d17bbd7bad35a12850dd3941?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edc5ccc4a823fadf7ef6591485a627373b878e2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34968a626c3259fcc47dcdf8a38fa56fcf8058dd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/94b0be2dbed7062360bb1dc89e3a1a054a41bbe4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e579ac0604a75c3e5800c2efb752cfe53dce19d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjgg/MDAxNzU3MTQ0NTczMTg0.X5fF51vcHnGev7-CyoDnWhoXiRZE1fVwiK2DRl7rCWAg.eGlg9nkvaRUk9DxLXAMeZxBecKtYnGSKsZz9cjQlxOQg.JPEG/IMG%EF%BC%BF7059.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjUz/MDAxNzU2ODg3NzY2NjIw.AsD4BBw2SbQpj79ZZ38TUmwy8JTeJVMYAevXC5w7bw0g.n7EIAZ7ldqYg_o-wUpNGezTxWlY-M-HM_HP6-9GBUrkg.JPEG/IMG%EF%BC%BF7005.JPG?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMTQz/MDAxNzU0NjIyNzA5NzI0.QrxYFM1SeW69nKvOsVu-iykaWrR9GVG5mwCGeSUGt8Qg.aKSTMerQylwTtEpfzk5IyCJ9cKiSr3OsEXhjwLZEVPwg.JPEG/SE-82b8aa4d-f847-49c8-99f6-a1f84a97b62a.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMjc4/MDAxNzU0NjIyNzg0MTUy.XqhvOTkiN_mDudDAvknSLDZenM4NoYUVcOT2hqiiJB4g.TsZkkDvTXtACBlyac8DakZa5eNxa-O502NMOd5zQVtsg.JPEG/SE-9ea65f4a-7620-4940-a2e2-537d67df7574.jpg?type=w966' }
      ]);
    }

    const existingImages_k1770240772 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1770240772'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1770240772[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DD152C1E9AB243C1B81A27244CFB4569' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E4F1DC1039C840F0829C53A820730AEE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/21DBF8E4379A431596A27ADA4EE2B482' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D45A5FF8F9C843948E95E07882554BAC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E463C172D0A8434DA392B257EA911FF2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/934304C8D54B4FC691A6964393F03393' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B601B7EBBAEF4C9390D0E90C0EE5973D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4A8F8760173C4E9B99DDE1E0415F82EE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/47FAB78CAD694561AA1CB8A333E88782' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0C74E82AFBC1422685B18872CE99E317' }
      ]);
    }

    const existingImages_k1252440966 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1252440966'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1252440966[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9dd650c016653928998664add32dc6c412e8fc13?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8dcdf432da82e92d0223e6f44f1432d299750738?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/40da3439fdbe273451de6b3e22fe1eadb2be2be5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33327345c222baf6dff75245565f2de23dc83ea0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/17be62909e2334aeca9608571c22ffb1476bbffe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/20efb08044a385e808b02bc65ac53c280e1b77af?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/05793357b0ac4d51bb20563de40562ab54cdfb27?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/828ba519b5532156c36fd37b7dbb7eb45cf4a990?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/12c7466a668b3df0ee90d5abc86a85e623b227b5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9eca7a0212dca724409d4c28472650f8ccb36208?original' }
      ]);
    }

    const existingImages_k27306859 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27306859'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27306859[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a90c1f32ff18c0983f17820863ac196c1da645d0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bf4ae5bd7041fbe9d2977f215973ed39edcbb42d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b3692fbc1bd15a95db775d02259e165d12fd061d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed916fed21b59ee934e26158bfb696bf02b8c926?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/714d0733ca7be7b243fe17ac2ad2bf9e46d7754d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e3161f1f97d3486fde8acf5c5fef91a919486108?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e15b73befeff56d6e3092b60892df44a5e9ad6d5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3e1fe69dba60c174b3dcaf5ea9e12ef47157bf8c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6e6b9ebdcf55d3da2d58e2053ac24e5b93d65dc3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/99165fe1ca6aefe3d3567f0807bafa04f04c9982?original' }
      ]);
    }

    const existingImages_k1405512420 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1405512420'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1405512420[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/C0868A4290294F2AA1F037140B4878FC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/FA3AAA0AC1E447A08F7E5399EC7C4303' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/411688F985774A548E06C6326CEA64ED' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/B253A30E1F7C49D6B8091B30D4223728' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/DEFCE559164A45268754B11F25F09941' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/20BF60F23A7B4112ACB214A83F55D04B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/35BEC001C6D4483AAAF8375C753BF7C1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/EF587234C7D744D9814D675C2257C493' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/38BAFF1E425D44798F446BA42F5C8641' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/F1E44C090BF24179B30081AAFE0D60B7' }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계: 결과에 담긴 categories 기준, 중복 방지
    const spotCategoryRelationData = [];

    const existingCats_k545884369 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k545884369'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k545884369 = new Set(existingCats_k545884369.map(r => r.spot_category_id));

    if (!existingSet_k545884369.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545884369' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1326299984 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1326299984'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1326299984 = new Set(existingCats_k1326299984.map(r => r.spot_category_id));

    if (!existingSet_k1326299984.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1326299984' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1189993823 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1189993823'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1189993823 = new Set(existingCats_k1189993823.map(r => r.spot_category_id));

    if (!existingSet_k1189993823.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1189993823' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1730426627 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1730426627'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1730426627 = new Set(existingCats_k1730426627.map(r => r.spot_category_id));

    if (!existingSet_k1730426627.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1730426627' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1152401909 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1152401909'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1152401909 = new Set(existingCats_k1152401909.map(r => r.spot_category_id));

    if (!existingSet_k1152401909.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1152401909' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10199904 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10199904'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10199904 = new Set(existingCats_k10199904.map(r => r.spot_category_id));

    if (!existingSet_k10199904.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10199904' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k887468017 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k887468017'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k887468017 = new Set(existingCats_k887468017.map(r => r.spot_category_id));

    if (!existingSet_k887468017.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887468017' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k389025057 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k389025057'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k389025057 = new Set(existingCats_k389025057.map(r => r.spot_category_id));

    if (!existingSet_k389025057.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k389025057' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27559253 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27559253'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27559253 = new Set(existingCats_k27559253.map(r => r.spot_category_id));

    if (!existingSet_k27559253.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27559253' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k800964702 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k800964702'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k800964702 = new Set(existingCats_k800964702.map(r => r.spot_category_id));

    if (!existingSet_k800964702.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k800964702' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26794813 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26794813'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26794813 = new Set(existingCats_k26794813.map(r => r.spot_category_id));

    if (!existingSet_k26794813.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26794813' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8176347 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8176347'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8176347 = new Set(existingCats_k8176347.map(r => r.spot_category_id));

    if (!existingSet_k8176347.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8176347' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1603488884 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1603488884'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1603488884 = new Set(existingCats_k1603488884.map(r => r.spot_category_id));

    if (!existingSet_k1603488884.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1603488884' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k20745026 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k20745026'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k20745026 = new Set(existingCats_k20745026.map(r => r.spot_category_id));

    if (!existingSet_k20745026.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20745026' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10661169 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10661169'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10661169 = new Set(existingCats_k10661169.map(r => r.spot_category_id));

    if (!existingSet_k10661169.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10661169' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k561633351 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k561633351'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k561633351 = new Set(existingCats_k561633351.map(r => r.spot_category_id));

    if (!existingSet_k561633351.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k561633351' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1194074731 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1194074731'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1194074731 = new Set(existingCats_k1194074731.map(r => r.spot_category_id));

    if (!existingSet_k1194074731.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1194074731' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13495138 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13495138'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13495138 = new Set(existingCats_k13495138.map(r => r.spot_category_id));

    if (!existingSet_k13495138.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13495138' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12980859 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12980859'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12980859 = new Set(existingCats_k12980859.map(r => r.spot_category_id));

    if (!existingSet_k12980859.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12980859' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k916333750 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k916333750'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k916333750 = new Set(existingCats_k916333750.map(r => r.spot_category_id));

    if (!existingSet_k916333750.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k916333750' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k14503615 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14503615'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k14503615 = new Set(existingCats_k14503615.map(r => r.spot_category_id));

    if (!existingSet_k14503615.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14503615' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2128022891 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2128022891'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2128022891 = new Set(existingCats_k2128022891.map(r => r.spot_category_id));

    if (!existingSet_k2128022891.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2128022891' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1261018229 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1261018229'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1261018229 = new Set(existingCats_k1261018229.map(r => r.spot_category_id));

    if (!existingSet_k1261018229.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1261018229' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1663022585 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1663022585'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1663022585 = new Set(existingCats_k1663022585.map(r => r.spot_category_id));

    if (!existingSet_k1663022585.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1663022585' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1140862035 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1140862035'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1140862035 = new Set(existingCats_k1140862035.map(r => r.spot_category_id));

    if (!existingSet_k1140862035.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1140862035' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7852526 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7852526'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7852526 = new Set(existingCats_k7852526.map(r => r.spot_category_id));

    if (!existingSet_k7852526.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7852526' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15625134 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15625134'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15625134 = new Set(existingCats_k15625134.map(r => r.spot_category_id));

    if (!existingSet_k15625134.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15625134' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21329976 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21329976'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21329976 = new Set(existingCats_k21329976.map(r => r.spot_category_id));

    if (!existingSet_k21329976.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21329976' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1438226039 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1438226039'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1438226039 = new Set(existingCats_k1438226039.map(r => r.spot_category_id));

    if (!existingSet_k1438226039.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438226039' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21555096 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21555096'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21555096 = new Set(existingCats_k21555096.map(r => r.spot_category_id));

    if (!existingSet_k21555096.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21555096' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13603063 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13603063'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13603063 = new Set(existingCats_k13603063.map(r => r.spot_category_id));

    if (!existingSet_k13603063.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13603063' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1340493944 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1340493944'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1340493944 = new Set(existingCats_k1340493944.map(r => r.spot_category_id));

    if (!existingSet_k1340493944.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1340493944' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26628758 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26628758'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26628758 = new Set(existingCats_k26628758.map(r => r.spot_category_id));

    if (!existingSet_k26628758.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26628758' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k371263730 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k371263730'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k371263730 = new Set(existingCats_k371263730.map(r => r.spot_category_id));

    if (!existingSet_k371263730.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k371263730' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1770240772 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1770240772'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1770240772 = new Set(existingCats_k1770240772.map(r => r.spot_category_id));

    if (!existingSet_k1770240772.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1770240772' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1252440966 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1252440966'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1252440966 = new Set(existingCats_k1252440966.map(r => r.spot_category_id));

    if (!existingSet_k1252440966.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1252440966' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27306859 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27306859'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27306859 = new Set(existingCats_k27306859.map(r => r.spot_category_id));

    if (!existingSet_k27306859.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27306859' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1405512420 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1405512420'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1405512420 = new Set(existingCats_k1405512420.map(r => r.spot_category_id));

    if (!existingSet_k1405512420.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1405512420' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    if (spotCategoryRelationData.length > 0) {
      await queryInterface.bulkInsert('spot_category_relation', spotCategoryRelationData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    const ids = ['k545884369', 'k1326299984', 'k1189993823', 'k1730426627', 'k1152401909', 'k10199904', 'k887468017', 'k389025057', 'k27559253', 'k800964702', 'k26794813', 'k8176347', 'k1603488884', 'k20745026', 'k10661169', 'k561633351', 'k1194074731', 'k13495138', 'k12980859', 'k916333750', 'k14503615', 'k2128022891', 'k1261018229', 'k1663022585', 'k1140862035', 'k7852526', 'k15625134', 'k21329976', 'k1438226039', 'k21555096', 'k13603063', 'k1340493944', 'k26628758', 'k371263730', 'k1770240772', 'k1252440966', 'k27306859', 'k1405512420'];
    const rows = await queryInterface.sequelize.query(
      'SELECT spot_id FROM spot WHERE naver_spot_id IN (?)',
      { replacements: [ids], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const spotIds = rows.map(r => r.spot_id);
    if (spotIds.length > 0) {
      await queryInterface.bulkDelete('spot_category_relation', { spot_id: spotIds }, {});
      await queryInterface.bulkDelete('spot_img', { spot_id: spotIds }, {});
      await queryInterface.bulkDelete('spot', { spot_id: spotIds }, {});
    }
  }
};
