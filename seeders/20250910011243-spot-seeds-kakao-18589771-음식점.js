'use strict';

/**
 * 카카오 북마크 크롤링으로 생성된 Spot 데이터 시드 파일
 * 폴더ID: 18589771
 * 카테고리라벨: 음식점
 * 생성일시: 2025-09-09T16:12:43.203Z
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
        name: '본전횟집',
        address: '서울 마포구 동교로 68 1층 (합정동)',
        tel: '02-333-5266',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55345867441053 126.90973081042193)',
          4326
        ),
        naver_spot_id: 'k19033655',
        review_count: 0,
        review_score: null,
      },
      {
        name: '진성한우곱창',
        address: '서울 중구 다산로 243-1 1층 (무학동)',
        tel: '02-2234-0777',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56484467326921 127.01589606280898)',
          4326
        ),
        naver_spot_id: 'k16903726',
        review_count: 0,
        review_score: null,
      },
      {
        name: '긴토리',
        address: '서울 성북구 화랑로15길 29 1층 (하월곡동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.60520899621622 127.04465169870008)',
          4326
        ),
        naver_spot_id: 'k2057764323',
        review_count: 0,
        review_score: null,
      },
      {
        name: '합정광안리',
        address: '서울 마포구 독막로3길 38 1층 (서교동)',
        tel: '02-332-7366',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.549860400067416 126.9175480532369)',
          4326
        ),
        naver_spot_id: 'k1681972370',
        review_count: 0,
        review_score: null,
      },
      {
        name: '동원생돼지연탄구이',
        address: '서울 성북구 오패산로4길 52 1층 (하월곡동)',
        tel: '02-912-7311',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.60397435833934 127.04043364891332)',
          4326
        ),
        naver_spot_id: 'k27292203',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나정순할매쭈꾸미',
        address: '서울 동대문구 무학로 144 1층 (용두동)',
        tel: '02-928-0231',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57707726921612 127.03069243401164)',
          4326
        ),
        naver_spot_id: 'k27175293',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아구와해물마을',
        address: '서울 성북구 화랑로11길 7 2층 (하월곡동)',
        tel: '02-943-4477',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.602734271015564 127.04137064589823)',
          4326
        ),
        naver_spot_id: 'k12096004',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천지양꼬치',
        address: '서울 마포구 포은로 74 (망원동)',
        tel: '02-322-1020',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55383406339614 126.90585085983466)',
          4326
        ),
        naver_spot_id: 'k17703669',
        review_count: 0,
        review_score: null,
      },
      {
        name: '낙성곱창 본점',
        address: '서울 관악구 봉천로 495-3 1층 (봉천동)',
        tel: '02-872-1118',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.48145842982895 126.95509190551381)',
          4326
        ),
        naver_spot_id: 'k16740149',
        review_count: 0,
        review_score: null,
      },
      {
        name: '호요',
        address: '서울 동작구 동작대로13길 6-7 1층 (사당동)',
        tel: '02-6409-0809',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.482049310793805 126.98112759736533)',
          4326
        ),
        naver_spot_id: 'k251321963',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명동곰돌이',
        address: '서울 서초구 서초대로55길 11 (서초동)',
        tel: '02-594-3989',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4956298058511 127.01538833884227)',
          4326
        ),
        naver_spot_id: 'k11831433',
        review_count: 0,
        review_score: null,
      },
      {
        name: '스시소라 서초점',
        address: '서울 서초구 서초대로 254 오퓨런스 1층 104호 (서초동)',
        tel: '02-522-4500',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.49200836682649 127.00963420905995)',
          4326
        ),
        naver_spot_id: 'k1598052634',
        review_count: 0,
        review_score: null,
      },
      {
        name: '스시 윤슬',
        address: '서울 서초구 서초대로 266 지하 1층 B101호 (서초동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.49254885275276 127.01099121910967)',
          4326
        ),
        naver_spot_id: 'k2131538567',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대우부대찌개',
        address: '서울 강남구 테헤란로25길 34 1층 (역삼동)',
        tel: '02-552-1663',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.502696655575825 127.03521737405278)',
          4326
        ),
        naver_spot_id: 'k7819490',
        review_count: 0,
        review_score: null,
      },
      {
        name: '양양집',
        address: '서울 송파구 삼학사로 83 1층 (삼전동)',
        tel: '02-420-8729',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.504575878063534 127.09692370834745)',
          4326
        ),
        naver_spot_id: 'k2099116820',
        review_count: 0,
        review_score: null,
      },
      {
        name: '맛좋은순대국',
        address: '서울 광진구 자양번영로1길 22 (자양동)',
        tel: '02-458-5737',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.53086591734669 127.07367881830592)',
          4326
        ),
        naver_spot_id: 'k10346328',
        review_count: 0,
        review_score: null,
      },
      {
        name: '프레고클럽',
        address: '서울 성동구 상원2길 1-10 지하 1층 (성수동1가)',
        tel: '02-467-6845',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.546199204997016 127.04932843370366)',
          4326
        ),
        naver_spot_id: 'k327142548',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하니칼국수',
        address: '서울 중구 퇴계로 411-15 1층 (흥인동)',
        tel: '02-3298-6909',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.566167156686376 127.01717312221653)',
          4326
        ),
        naver_spot_id: 'k1282659967',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이문설농탕',
        address: '서울 종로구 우정국로 38-13 1층 (견지동)',
        tel: '02-733-6526',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57273376409386 126.98390755738502)',
          4326
        ),
        naver_spot_id: 'k24725293',
        review_count: 0,
        review_score: null,
      },
      {
        name: '할매집',
        address: '서울 종로구 사직로12길 1-5 1층 (내자동)',
        tel: '02-735-2608',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57567225331516 126.97144090520023)',
          4326
        ),
        naver_spot_id: 'k8612493',
        review_count: 0,
        review_score: null,
      },
      {
        name: '필동면옥',
        address: '서울 중구 서애로 26 1-2층 (필동3가)',
        tel: '02-2266-2611',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56039838477835 126.99693958988966)',
          4326
        ),
        naver_spot_id: 'k11231325',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신촌황소곱창 신촌본점',
        address: '서울 서대문구 연세로9길 31 1층 (창천동)',
        tel: '02-337-2640',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55845243343754 126.93506304949054)',
          4326
        ),
        naver_spot_id: 'k15847929',
        review_count: 0,
        review_score: null,
      },
      {
        name: '미분당 신촌점',
        address: '서울 서대문구 연세로5길 26-7 1층 (창천동)',
        tel: '02-3141-9494',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5566361209675 126.93524117887407)',
          4326
        ),
        naver_spot_id: 'k1985785355',
        review_count: 0,
        review_score: null,
      },
      {
        name: '사루카메',
        address: '서울 마포구 연남로 15 1층 (연남동)',
        tel: '070-999-9999',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.561036257187816 126.92270588289915)',
          4326
        ),
        naver_spot_id: 'k560657944',
        review_count: 0,
        review_score: null,
      },
      {
        name: '연희김밥 연희1호점',
        address: '서울 서대문구 연희맛로 25 1층 (연희동)',
        tel: '02-338-8882',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.567373137996185 126.93021977045376)',
          4326
        ),
        naver_spot_id: 'k42143703',
        review_count: 0,
        review_score: null,
      },
      {
        name: '연희동칼국수 본점',
        address: '서울 서대문구 연희맛로 37 2층 (연희동)',
        tel: '02-333-3955',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56822398928324 126.93074871839382)',
          4326
        ),
        naver_spot_id: 'k8503628',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이품',
        address: '서울 서대문구 연희로11길 20 1층 (연희동)',
        tel: '02-322-6172',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5675280073419 126.9300475747327)',
          4326
        ),
        naver_spot_id: 'k9348308',
        review_count: 0,
        review_score: null,
      },
      {
        name: '우래옥 본점',
        address: '서울 중구 창경궁로 62-29 1-2층 (주교동)',
        tel: '02-2265-0151',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56821185731751 126.99871865898974)',
          4326
        ),
        naver_spot_id: 'k8025375',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수복센타',
        address: '부산 중구 남포길 25-3 1층 (남포동2가)',
        tel: '051-245-9986',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.09888917508958 129.03143214668353)',
          4326
        ),
        naver_spot_id: 'k11128820',
        review_count: 0,
        review_score: null,
      },
      {
        name: '상도실내포장마차',
        address: '서울 동작구 상도로 288 1층 (상도1동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.50182570284895 126.94847511579289)',
          4326
        ),
        naver_spot_id: 'k16853817',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공평동꼼장어 본점',
        address: '서울 종로구 우정국로 29 (공평동)',
        tel: '02-738-1769',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.571810990068414 126.98280747026384)',
          4326
        ),
        naver_spot_id: 'k15751933',
        review_count: 0,
        review_score: null,
      },
      {
        name: '녹원쌈밥',
        address: '서울 서대문구 연희로25길 22 (연희동)',
        tel: '02-336-9483',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57247503125937 126.9341543392284)',
          4326
        ),
        naver_spot_id: 'k16904322',
        review_count: 0,
        review_score: null,
      },
      {
        name: '을밀대 본점',
        address: '서울 마포구 숭문길 24 1층 (염리동)',
        tel: '02-717-1922',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54748717494083 126.94552866760061)',
          4326
        ),
        naver_spot_id: 'k25048467',
        review_count: 0,
        review_score: null,
      },
      {
        name: '피노키오',
        address: '서울 마포구 월드컵북로 125 1층 (성산동)',
        tel: '02-323-3556',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56412862057828 126.91257929106045)',
          4326
        ),
        naver_spot_id: 'k16296804',
        review_count: 0,
        review_score: null,
      },
      {
        name: '평양면옥 본점',
        address: '서울 중구 장충단로 207 1층 (장충동1가)',
        tel: '02-2267-7784',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56324898802232 127.00669603403833)',
          4326
        ),
        naver_spot_id: 'k13093208',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공작 퓨전비스트로',
        address: '서울 서대문구 연희맛로 17-35 1층 (연희동)',
        tel: '02-323-5433',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56650707631636 126.92837331645379)',
          4326
        ),
        naver_spot_id: 'k263607084',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영덕회식당',
        address: '서울 중구 창경궁로1길 6 1층 (충무로4가)',
        tel: '02-2267-0942',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56295723816635 126.99800342157062)',
          4326
        ),
        naver_spot_id: 'k8002833',
        review_count: 0,
        review_score: null,
      },
      {
        name: '포케올데이 공덕점',
        address: '서울 마포구 독막로 311 재화스퀘어 지하1층 107호 (염리동)',
        tel: '02-715-5357',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.543995787626415 126.94748201796932)',
          4326
        ),
        naver_spot_id: 'k1297162293',
        review_count: 0,
        review_score: null,
      },
      {
        name: '김해집',
        address: '부산 중구 자갈치해안로 52 (남포동4가)',
        tel: '051-253-2857',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.09665555057211 129.03092496734257)',
          4326
        ),
        naver_spot_id: 'k21405938',
        review_count: 0,
        review_score: null,
      },
      {
        name: '백화양곱창 1호',
        address: '부산 중구 자갈치로23번길 6 1층 (남포동6가)',
        tel: '051-245-0105',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.096933901074706 129.02700204451276)',
          4326
        ),
        naver_spot_id: 'k2061622071',
        review_count: 0,
        review_score: null,
      },
      {
        name: '합천국밥집',
        address: '부산 남구 용호로 237 1층 (용호동)',
        tel: '051-622-4898',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.11111688189439 129.11131901074347)',
          4326
        ),
        naver_spot_id: 'k1420643780',
        review_count: 0,
        review_score: null,
      },
      {
        name: '섬광',
        address: '서울 중구 창경궁로1길 38 5층 (충무로4가)',
        tel: '070-8866-8485',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56252111563513 126.99632830914481)',
          4326
        ),
        naver_spot_id: 'k1039797847',
        review_count: 0,
        review_score: null,
      },
      {
        name: '백촌막국수',
        address: '강원특별자치도 고성군 토성면 백촌1길 10 1층 (토성면 백촌리)',
        tel: '033-632-5422',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(38.2929859675109 128.54180730693253)',
          4326
        ),
        naver_spot_id: 'k7886148',
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

    const existingImages_k19033655 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19033655'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k19033655[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27729b7f12dfdea91219923f578ca5d4ad337677?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a9593c8247d7dcf4877b9fe82af223bd8aab245b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1ec6f6c76aa023472946e461b6e1c96ddddaede8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/09fa74ab323d14b37b3ae66fe16015a1eac97216?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bd46fb56e3de97f0446428398f0415439a8fbaaa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/25b3dfda833099080248019b69c8784cad2d2a9f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cf0188756c30b5a9c13a62107cc4394aff145dbc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dd3a4a26729d8aaa3067dbc0979d2730c2bd0ed7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6119986097d26fa5b5231791e9beddcf0dcef9b3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3703a4ad077034eb29d9764326277fb5f96e11d3?original' }
      ]);
    }

    const existingImages_k16903726 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16903726'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16903726[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a1d7f1e9c878c5a4d89d1e23312f68eee2859094?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8807ba6d10fbd4d4c66d094188f6595379d444d8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4bfc41a7702835d1f2a3bb4bc1f705a950d6581a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4614d36c163d257ceea64940820de0f855d4e13e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/432339e3231ea94f1b60eab332ea5397aae9f6ec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/62027f0b245866a7ca390238f2fe4e16bd741027?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2387d9137e94fdadaef1c2eadc94158fc8fe7b5c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5b58fc4fb8d266aee8a929079a8e93b2644e3241?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c46c84d34927ab2f87b03405d05cfa566b903ca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e530963b1fef3fb8f068d6bd236c1423f9aa9b0e?original' }
      ]);
    }

    const existingImages_k2057764323 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2057764323'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2057764323[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjEx/MDAxNzU1NjQzMDE0NTYw._PAdu2b_EQ2BR3jYY9h1K2Ml80i_BiGeDDEl50SMZ7kg.Uzk2RhiuV2VDxr-KWLBkL-HsK0RtDNMwkKQyF6oPvMkg.JPEG/IMG%EF%BC%BF1165.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfOTMg/MDAxNzU1NjQzMDk3MzIx.vieGaay9bchFwnGyjy9zoi8ZPUnccFSwTHrBdJlWL3Qg.pvfX3z6v96w6rVULlW2gdSwBv-6TvYPRCVOpcYLaYqog.JPEG/output%EF%BC%BF2017966367.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjAz/MDAxNzU1NjQzMDE1OTUx.gpiek9aFjrMAwwFiNqO41HUKMTWYdlgiooStRjTV0_og.Jpi1xzzAXepve4BwpPYMuIlCUAmLmg_jaOSTznpAo-Mg.JPEG/IMG%EF%BC%BF1150.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTE2/MDAxNzU1NjQzMDE1NTk2.IntPQYlZGv1WVRSzllTl66knVJdb_lKkZ1NLKbLbs9gg.Qk9l7gJUIzXaMo7QcMhhmqExukokr0vuXvwI-CX5qEkg.JPEG/IMG%EF%BC%BF1151.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTcw/MDAxNzU1NjQzMDIwMTM1.LxHiB6d7ZekB9-RaWFH8bhlGn6NrSDsQ98eZeCYdDVUg.4duLQVgISC-ljsErBpI1Uo4UrMyA8acMNrFFpRrAyQQg.JPEG/IMG%EF%BC%BF1153.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfNzYg/MDAxNzU1NjQzMDIzMDY0.YGBxBuI9RF0UjO2Sr-3BhpUoyqIx3ZZDyzuTs0M1Ycsg.9SZTB4aMSEqJikKXVIy5WQU8LeYbxRAPT8phGbx6FZMg.JPEG/IMG%EF%BC%BF1152.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjUx/MDAxNzU0ODY5ODU5MDE4.x5bCi_SL3ATdYlh37eZ3pllvD3OzMJ_kaFmHhrEjhKQg.ha_P1hIpC9u85GHcVo6IFdPnepmJMcoKFset6DK3eMEg.JPEG/IMG%EF%BC%BF9682.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfOTMg/MDAxNzU0ODc0MjM1NzQ1.mPqy6Zg0NmvtCV4bRcT150pGmOM6qFtCFw9uSEgZ15og.tvvSv-f6MRafwq02vg7XKayWmYHn7Nzi71dOszlSG3cg.JPEG/output%EF%BC%BF2883218791.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMjI3/MDAxNzU0NjM3NzQ2NzQy.HWK29uJharfRaLzzk-zqMfzMFce-Bmru8qpdpl7rKvkg.1DUKyxVHCRK2PEf4p6pnu-M1qzTBA4yMio6UjqliKbIg.JPEG/output%EF%BC%BF1145243855.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjAx/MDAxNzU0ODY5ODYwMTA1.k8cX2v_0WimMe5bi04ueXJ4jrA5qFLzR7j-VEok_-68g.6OUpmzHRbbLkc9WeWGqLb13b8tp2VzAU9B00ajLLlAAg.JPEG/IMG%EF%BC%BF8964.jpg?type=w386' }
      ]);
    }

    const existingImages_k1681972370 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1681972370'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1681972370[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MDdfMTg0/MDAxNjQ5MzQyNjgxODMw.7fbG5yxqhtdqvJ9edkB-Mf138AiTSftL85NCwhlOiaog.fFurDORFbQH7gIogZvphbLy1lz9eIQfrGdJ-Y6eD0LQg.JPEG.sjw5911/IMG_0874.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MTlfMjE1/MDAxNjUwMzY3ODg2NzM2.hQeY7bJkwWm4MX2woda1AyaaIrSMv0i2L70yPQ-8Iiog.XRNsYGsckAPRCNG5jg7zt0uZlZkRHrHc5Pdf-JqwoLcg.JPEG.llcksdnjsll/output_771512771.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MTlfMTY5/MDAxNjUwMzY3OTA1MDIw.Rpx6lhi66HzijEP7TQkbswBkXXuHvnRb9BSZnjmBCSsg.qkQgnIVslKgMrzFkwUiLs-1XFqEoP0_O6hi9xcmPmVgg.JPEG.llcksdnjsll/IMG_1699.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MTlfMjQ4/MDAxNjUwMzY3OTU0MzA4.hzb3XAN5t5_-hmr3rBFLQK5yK-Ok42z-3lm9UVRd7KIg._3UxjxXuQ9KYeYJhZ9PQKjslt84bc6D3TmnDvqCmlpUg.JPEG.llcksdnjsll/IMG_1705.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MTlfMjgz/MDAxNjUwMzY4MTU3MDYy.t8EwAlrrcjfQEuhRUe4X31NYhc5qghlD3HlR7Td_-Iog.OQDdiaLVyYne46quy-zdm6GxKMAqlMA-ExgxyWAOMZsg.JPEG.llcksdnjsll/IMG_1752.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MDZfMzgg/MDAxNjQ5MjI4NjIwNTA1.EJVayGXIXFWPk6KimX5-PcGNHTqu0V50KjS7nkMRUBQg.DxiSC1PPZUnY95J5Q_4LkO1AMvzw2pl26zHQlizkGO0g.JPEG.thank2008/SE-c991c46a-3fb7-4c6d-be10-2d3b6cceba32.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MDZfMjMw/MDAxNjQ5MjI4NTgwNDU4.x4JmTOaq0M8Os7uXezeS-0qELIzIKhk80zbOXzch9g4g.wa26dUnyuOC-J0GEDGfvLaPA-wxOr2xyqqqmDX21Hfcg.JPEG.thank2008/SE-116ba104-813a-40fd-b332-c45af51a2a92.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MDZfMiAg/MDAxNjQ5MjI4NTg4ODM5.BA9M90KUs_jlTJpYbifKoUd7tN7jAxy3MikC1EoTbG8g.ytimot472Y7jhPbXg9Dfp5ucHKV6wPmAO6stfYtbDe4g.JPEG.thank2008/SE-971be454-90fe-4bf1-9587-d365c4f10226.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MDZfNTYg/MDAxNjQ5MjI4NTkyMzQw.rf9NkTMXU4rbWLcdCn5zIjUu-AYHO1MDGADlmDrbYZ0g.qsvBH4pMLTvpzx6_3iqd3cHerCBqjaKMHVQ_RiV2cykg.JPEG.thank2008/SE-bd245948-aa7d-487c-a2f8-596c43c0d53d.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MDhfMjY4/MDAxNjQ5Mzk3Njg3MjIx.pqbV27_wfqqBdW2uPuaVxRV7qeUCUx7M-1PRFHaEBUAg.ev6tP81HwKVbGDNeCRRyzu6CdJyZQ4_FTbHHZXcxYN0g.JPEG.shy6023/20220405%EF%BC%BF185639.jpg?type=w773' }
      ]);
    }

    const existingImages_k27292203 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27292203'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27292203[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ddbaf95bdfc5a8ede1c85a69b51c278d0fb85f06?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/051238ebeab998fe6019137ac0bc7a59a24fbae5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMTE3/MDAxNzU0MjE0NzQ5MDMw.MI0SK_ZiOIaNeToPM8tLDOnehIrkKV-E8gGys_XLyVMg.nAwnLvhMXaQ_Tz8xPk0Cr53ZZcxOv9JBPFoBrT_4738g.JPEG/1754214748486.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDJfMzYg/MDAxNzU0MTM1Mzc3MjM3.uBfOmUve2WDe06R1cnAs8MDI1vCjfhmPSfzioR3gYQwg.Ctw7M6Oq9Ofq9ItFzJkRXJ0-sjY-FKAPdQ3bKnzsQrkg.JPEG/900%EF%BC%BF20250801%EF%BC%BF175412.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfODcg/MDAxNzUzMjMwMDI4OTUx.TUSvKEg9IPxPOLV1GhkuFBQLzWw8Th0dfd-NzSTLZ_Eg.G3a2KyvwoOsuCIMTHy8nl3_l843eBOPEAybKsVnF7Igg.PNG/Photo_1.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfNiAg/MDAxNzUzMjMwMDg3Mjgw.BQJGV1b4ipOAAUCGmoROLrqy7jkAwmi5_WGe9ep-ioAg.HIvlteC1ML-whvzwnZkiO2CHSCrf3uLkHnFIXgfKxv8g.PNG/Photo_2.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfMTAz/MDAxNzUzMjE0ODA1MDY1.sjia0xFT3bba0Opk0WdsghcCylgpuQIP_G4OUQ_OJQwg.Zv_yKO10L3jGKc_Kmtk2fNpwoiSdZ-plqZGRlJt4-dUg.PNG/Photo_2.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfMjgx/MDAxNzUzMjE0NzkwNDUy.sV23JfOKcZQ-M_kDoOwtp-s7M7Cry5_pDBCv_WuDXtEg.Od2zatd1XM06SHVMRUIVx-I1SRC0ghOWWsklEcTUOLkg.PNG/Photo_1.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMTg2/MDAxNzUzMDA4MjA2MDgy.Kxe-e63Rf35MXAPAkieonsQxVqYY5Y7gv5Ka71MeLvAg.PkUgW8c6Uz8McFm6UWDGUhpJVlfeLPglQorKPNg2vawg.JPEG/900%EF%BC%BF20250718%EF%BC%BF171935.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMTM2/MDAxNzUzMDA4MjA0Njg0.G9Lk4g7n1L4Z5t2rk_BWrNDLmkOVrcei1qj0EIoriGIg.Vq32cxIebpWoONlvnUf1PQ60nuoWfQ-EkNLf4qtuezwg.JPEG/900%EF%BC%BF20250718%EF%BC%BF172133.jpg?type=w773' }
      ]);
    }

    const existingImages_k27175293 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27175293'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27175293[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9d473540e3ed15dd519e8e2e9dc3aafb9364355?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6db18b200df015b7538595aa23ed60601b820e3d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rv78hl83tni9uvvtj3dvh0ecm/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311383382&kamp_tidx=0&signature=2IlZivfnVYhkATpgnsr3Na5m89M%3D&ts=1754474582' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c30ba3a20350852b40c6cc130c1fec076592cfd4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9b5079e53cdcc6fe072fcf2a9cd8a6424ba4aa41?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/51e555324a49dcc4b9e302a9933ca9d770bdcbb5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9c6fa59fca4cddc0478f4cc79a74b6e06711b30?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c5e9d59b2816767ec2840abbad9bd780a5e56df7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/111ab3d2e32bacbb2a39702a4c8c9f1e2b246e16?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2cc62fb6a5b255124b2e4fe2e963d4a4c065ef459387e4527f68bb3a31db8977' }
      ]);
    }

    const existingImages_k12096004 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12096004'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12096004[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce182bad6336c95733915c6bbcfe71553dabb56b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7531490cc0c47271be3411a664de9625698cb792?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/845b99be814f063aad5d7d8f192a5b568cb99ca4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/67f0f637e08bdcb69635c42f91d2f2fcac037a77?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bb18732980fda3396454809948a9ccfd4b16f6c2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cdb904bbbcebc2c4ceeb8a6a3dd85c76ef073e0d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/80fa08a813ee56ec4150af1d4a9606a018442db1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41f5c921d6cb63f1b0f579caf41833e9919504b0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/58661220ad57a0f15b351cfca07576ea10cdeca8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e196b6a8dd1078dcfa70872a2cfee1aa454302d2?original' }
      ]);
    }

    const existingImages_k17703669 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17703669'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k17703669[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/91e7c92043a71ade6509f96e01f1983674fc21c5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bd2513c93938833dab89b909d2f8600510fec50b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4c95fbe5a6515649f162e669ac304d051afefc1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9c9a606163222904864d50995d644ebe19a9a4a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c928e124da25b69d998990f4538b94e064a1ac7a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db39a290debb3b8c6a83a1a8d1bcf7c4e8a658d5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d83b04d0c4a921c32617c0604af3d0cb837952eb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/997f9ae5a254db02ecccda63a096eb3657db9ce6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/147ddadeaed58f33068af2f41ec1ed4f1c7d2264?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a3848867aad3c22b70b92bfd6983c9522d8a5578?original' }
      ]);
    }

    const existingImages_k16740149 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16740149'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16740149[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff18c3c2405e14fb8baf9494760225d9f53f4add?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d048caff946e6671250363ac817e4787c05fb6d1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ea7ca9ea080b59485bbb8d80d574524a0ee1f2c8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dd461dd0c1a2aaf0866bc9ef408981a53ac0681c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/11abcd798d8944b1820d4f879bc5f4b3b8d8328f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTc2/MDAxNzU2NzcyNDE2NjY1.nkvGM5YNWyNxjOs42cBM0XuQIDw9fk642Gw4sifc48Ag.fe22ZYXt7Nl-8muU1ySKmVXpp43QIKHUyLjtf_eXfZgg.JPEG/output%EF%BC%BF1405088465.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjY3/MDAxNzU2NzcyNDYzNzMz.Cgex08G6tEJTrdkneEt8lOlTCavCOR307i02ggXyZxYg.XOlCTg1vU9mQeuQUvXjZ_H4NbIehtpYZyZRx__wNOp4g.JPEG/output%EF%BC%BF1693640660.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTZfMjY1/MDAxNzUyNjY2NzU1NzEw.YVRnMOdrDaP_lYlY_qZ9ZbcmgojqVpJyAnMJmMobJfsg.JICIoOqJxbDmchCDyCHp7MBZJDr090q1RspcMc4r7Tgg.JPEG/IMG_2673.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/Nl6xj/btsO91h64AC/sF4K7NkVuyYV4DkVqfwjK0/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDdfNzYg/MDAxNzUxODYyMzM1NjMz.bMguUpLa9LBh02IYCPUeNaCFWq5myYm7_fJ3yUuZX3Ag._IRBFQpxZQvgIvgnptU7VqlmNeOkkVvpOieggAaq-kcg.JPEG/900%EF%BC%BF20250628%EF%BC%BF173111.jpg?type=w966' }
      ]);
    }

    const existingImages_k251321963 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k251321963'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k251321963[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_1630619464' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e87f89464eb110499aca5b718ff14dcf941e0a9b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5d13f4981d545ebe7d28515fec3fa084e7cf81fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edb32acc40ef56c750aa303e341d938cdd81e4ebd1abfdd3b22661803303dcac' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc010bd2788bc29f602fb877535ec5f5e9a7b6511612937a722432ce1f241989' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a47ef0e73d3a32a1d3863cae61b03c4eee060eb90f60c84b2cdc80a91ac10ef9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edc972f4477e162118f7cefbd40b9a0148d054a5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c0a116039e3150ae4aabeee5f56fd8a9d614657?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4823094fde676303587435906fcc295a1a1f1fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/944995111dc2ab43de765874a3bf8154641b297e?original' }
      ]);
    }

    const existingImages_k11831433 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11831433'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11831433[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/506a7f7929442d153b70bd288fb3ba5d3b30aef7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTdfMjE5/MDAxNzUyNzIxODYxMDU4.us6j35YyDry9RpyXFZY37fpI10Qnv1ah63xG4Do9jdkg.Ud3HtBGUBcZfV8H46SCwXcKfGoPjdjkcI2-6cNsFEhEg.JPEG/900%EF%BC%BF20250711%EF%BC%BF174451.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTdfMjc4/MDAxNzUyNzU4ODAyMDAy.R4qC-W8BIWFwwxYw1yFIzZTjKlzoYqinNL_10hZVMYMg.gxmZtUGrwFReUKaonBxmSi4QZ85Bh5ImsKWyCKLMSCYg.JPEG/SE-a8723a91-62bb-11f0-a4d3-a7322ec74b2c.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTdfNzcg/MDAxNzUyNzU4ODExOTMz.EZhXsrfgsbpTJ66ZlnIPyNFD4XQxXmvNtqO0Pqu-GPcg.gCXtOYAo7LUPAuY8HJpFlDp9rkEIIIIGEdbQpiontJUg.JPEG/SE-a8806b6a-62bb-11f0-a4d3-25cd11a04dde.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjJfNzgg/MDAxNzQ1MzE0NDUwNjM0.Su3vK_-OARDLqqMSSE3L_zeS8kgomKZfjYhfWnyEHEQg.0dWXZnziJFZZR98-vSjlQDAw4uetPWDMzuj0E0BpgHcg.PNG/SE-6e8c08e1-b3c4-455e-8e48-aba2ebdccda5.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjJfMjg2/MDAxNzQ1MzE0NDUxODUy.j6vMbvTHxtiljQrlmXJK2kCzKmMhCzPVbsQ2wt4hL2Mg.1_xgiShcyLAnq0fR8zUvGpAdjwrSbQeeIa8CSby_Bmgg.PNG/SE-d0e1990c-7b50-4354-8acd-fa373b48827c.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjJfNDkg/MDAxNzQ1MzE0NDUxMjUy.hi4o6w2bpyXZ-Hw98SlaPrFffwVSFuzGbqOW1EOaIfog.6JmogIM5wUZWliedp8lrXOY1JNEPQibeH0idZIIrolog.PNG/SE-bc601b9b-e45f-4768-9d44-97cfb6ece353.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjJfMjEx/MDAxNzQ1MzE1NDkzODM1.ndreYSvfM2cfZLBZ4a9uKwINWxPt-m9l50KpPaadjygg.7-kttfmX_2lJVLcwXTDQwzSagC8Qrr_I8obkmsXM5BUg.PNG/SE-0e87942c-a32f-4ec5-b741-ed0462ba91d0.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjJfMjQ2/MDAxNzQ1MzE0NDUyNzA5.0XO6nL4MPoTRvcw_EjnUn2pfObdhMvQimeH5vnMyaZkg.LC8MeegeQTeE9K-5U9B9TkbGBNcprwEkx0JisxAEul8g.PNG/SE-4986119e-9b1e-4844-8e0d-0a8c30fe405d.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjJfMjcg/MDAxNzQ1MzE0NDUzMjk0.fO-Dbu4SZRHZo5bt3YSiN6BR0aJMuH3pBLqKCAbsyUwg.EaZ6GoxPnZZk2Lnxgf-ov5A6xWik0RxPaaSFcfSAMYUg.PNG/SE-b7b0e794-63b4-4eb8-90de-25be8190a395.png?type=w966' }
      ]);
    }

    const existingImages_k1598052634 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1598052634'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1598052634[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0948b053b7bca4b16df5cb4599a2205ca6a96ea9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/10dc35f71090d5525921555435e07621e4befef7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6e36037abdbb9e2a823fac82e5fae8117d8a559a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/38169a8512d17163893ff6d9059cebfc4a92ce2c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d3cc5916864710931a23731760383fb306f5c6b1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fcb9308d9da7fb0a81115e5c32576e73e36d4be4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5cfe3f67d4cb701f45ca9d116b3abcd7abaf0902?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d2b0e75892a58cb0a216a07985d9b68f7c5ce9f8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b283bc522734bf2d127033053be9756a1f1b01f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/adbc6c719606d78e9a8afb32cdb95937de3e8f7c?original' }
      ]);
    }

    const existingImages_k2131538567 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2131538567'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2131538567[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ee0eda6db9dd12c8eb1a20d637a94cd28079b3b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/523d71abc956e3a15d3c3be0d499dc39230b424e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/087c75232566eb79a61ce17a1445bebf704f0c5f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b60343cb4e1cbeffe106c3e2c14f9482dc9bfa71?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/32347fb78fa1939e2337d2b78aba37bef00ad82b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff7e969414b211306de5df5f5c400b6a47007bda?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/56def6cfdc8b9d89281cff14b8d88d162923d6e5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1a5f20c08b66581698596da937df4ea8a85ecd1b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f28def7d73e682efc36f2ec913d80c8113c09c57?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/89c46c7b294e7981e1c2cae37328339732e02938?original' }
      ]);
    }

    const existingImages_k7819490 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7819490'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7819490[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/052dda7cb3bd5351e2aee5e4e5c92e44ec07e6fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6ddce005668ce9d87c608171fc21afee3b667c9f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e0c699e88ea8f548b172509f76751a525d7ba5f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/73fdde8d4d8a30fdf0a73a9f90a83b57c36dabac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0f85b3bcf3ac8123050f801e073b23ced7ae6478?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d240cbf92f96ef6fce22f2e05ca6c555587634e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1a08478c01b10e37dbd2ff958e9b01c1572ff343?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/108b3d1e56c5298086a91930dc49a88de1ffb7d7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ced8d45467801eb3132b156291a1477e77689e61?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/106a5a509e2743baf345c42e7761e77c69479b7e?original' }
      ]);
    }

    const existingImages_k2099116820 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2099116820'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2099116820[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F69579DA3AF748F0AAE5DFDB37FA2827' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e239b5199f2db7ff0b32e004a9c02aaf08394eb7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b4c799f7d45799768d9a9460c8a5129121330f69?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1b2d656b07137b5c3630f9b6c7a569e9944bf7f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/995c05c30990b437bb121f3ef74a7702582da12c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/516cd1202205aaf29a39ab0870e1e55a267c2a48?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6f00d7b89816e45bbc086476d5453c347ebf39c5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/abb840d0091ab4722bffc4f7d02783705add5d6a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/896d6936812c385ba549cbd23d908930c310ad23?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/39f800437d22a03ffc3d1da2fa8fa44a216cc573?original' }
      ]);
    }

    const existingImages_k10346328 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10346328'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10346328[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a13321d904651497e6bd46f22bb0929030322a91?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0d7c3d9a2b5f011f539e50a45485e6a0e0aeb16e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMTMz/MDAxNzU2MzUyNTM2MzY5.KYFLCyYBWFln_ENZrq20ICJh5TgJoLJt5IY5i9PcHYkg.hbPhKTjZwSVezSTp1ZHuIh_8hAzRghWROAtlvlFuEesg.JPEG/output%EF%BC%BF853442843.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMTM2/MDAxNzU2MzUyMTU5MzA3.9joi17VKMIgJMlDnLuOlab3adWugpdm36Ih2ciDPWpsg.NHUX-IDMi0iuDcXKc2XcBevQBFTNAba_Co9BhaPAPyAg.JPEG/output%EF%BC%BF465398544.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfNjcg/MDAxNzU2MzUyNTM2Mzgz.nfHmyCNJ_SfX3h8S-tiy8nPzkC4kQkpF4x5o-ftywpwg.FsTL-Uroqmn3-AoYaVcEHWjpXIufSSzfCJlQz-1fDoog.JPEG/output%EF%BC%BF3877585608.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMjk2/MDAxNzU2MzUyNTM2Mzgz.n8MgYYc752q4jIdLyZlVSSGMM8gPFn3Bjhhq9U5jbEMg.dhsVPoGx0eWRhbk7D_1CcFKYp1ydnni-yuBqW2DwHGQg.JPEG/output%EF%BC%BF4057678731.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMTUx/MDAxNzU2MzU3ODA3NTIz.SpwXWWdUW99qmu-JbEAGCxbPFH2JjdpdvJodPRe-47sg.uoHDzPdRuWTUTrJ5Dqe90nZ0gbutLTq9abGdyeuGYdUg.JPEG/SE-092224EA-16DD-4EFE-991C-6CFE872DC3AC.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMTE0/MDAxNzU2MzU3ODA1Njkz.ZU8060T38L9Dl0BNkesmw8XcTbgT7cuIJVmNeGB4mfgg.B9tNRJEP59vZG-Odyk6FBQkbDn-Qyoo3K6mbJwYFNicg.JPEG/SE-ACDE4AE3-6C35-445C-80CA-E57B6EEC3608.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMjYw/MDAxNzU2MzU3ODEyMTQ1.Uhf1JnahQYA-QGF8erBv-fkQQmlcSWATtjpRUbH8Ducg.oI25QXHy-IZaclzz77U-_VOsOlb_BNBUU0t0jjaKY8Ig.JPEG/SE-1AEE7880-6931-4D63-8104-9F130E01D483.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMjE2/MDAxNzU2MzU3ODEwNjkw.JIDmnUywiSY2Ntj3yEByWP6NyNMHXWaBoi1PlkjR1MIg.H2G6bPTEVC4AXoBYHoQZCj853NejfZC_iygY1J6njJUg.JPEG/SE-135CB358-1309-4E1D-91B1-535E37C7C617.jpg?type=w773' }
      ]);
    }

    const existingImages_k327142548 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k327142548'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k327142548[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTM2/MDAxNzU2NTYyNzE0NDY0.k6RMrFJ0eyBQsXvjSDhdjmpTL8FVTGLFe3uXeihEK3Ug.PpZWJ8mY07MTvGXWfDDZ9vHVadH0crOHKrlwaTmPXd4g.JPEG/IMG%EF%BC%BF8930.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMjQx/MDAxNzU2NTYzMzU0MzM1.QodzkrPp7GhPnTk6n_v6UJqzD08OBTS3bz14asmq8EUg.23i1Kth1p98v6_0J_qvx5onUqDTF8LgxTzn3wjxXM0cg.JPEG/SE-11F8D7EB-DF07-44E2-888A-BB13F1806E92.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMjg0/MDAxNzU2NTYyNzEyODM4.ax6WM87oprfbem8Kf5EyCElDs1JmnUFnFK1wqImFfHAg.j-hPz5vv89t1voiEH6f6TcpLL6xVy-Xag8au76vgbDcg.JPEG/IMG%EF%BC%BF8947.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTQ4/MDAxNzU2NTYzMzQ2NDYz.2acHK4Bd6odekcbN17CptaUtIMK8r9hKzGrWTNaIYzwg.dWvFb10ZPiuHXDSnWTKK5gFGlUW0uqnQQJQuSTB0vUog.JPEG/SE-0717D0CC-BB13-48D9-8A88-4381B9B339B1.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTIy/MDAxNzU2NTYzMzUyNjA3.NeJo9rmrWaWBA5sNWnU8TLEr1r5ioV42EHZROsrPZyIg.muN47AVisqPNUzc-jV01JD_LOCtbwsVp_n1XOwnn7KAg.JPEG/SE-3D28C544-176D-4587-9BB5-B9F9699E5322.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTg5/MDAxNzU2NTYyNzEzOTgz.z5PnNaGOeuUyGT7Jf0UGp4epTc9JEV_WkTkd97j5dlAg.bWeLUHJ5Aa_t_fImVPTLwQttL5QBa5jKfXlxXf11KiQg.JPEG/IMG%EF%BC%BF8933.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfNiAg/MDAxNzU2NTYzMzUwMzQ5.pjc27jlDtOIQoBoWy2NUItyqfSfF_hLcpwJI9tYzTKIg.fCxUlZKGQczAsTJ7vgJaE0OgZi_a0YaCj1CQOgA8kEkg.JPEG/SE-86347C0A-979A-4E45-AB72-63907E72118F.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTcg/MDAxNzU2NTYzMzU1ODE0.uokiGDgIo-LpgMCK66WFOIPtgUAePS9AUNikxaTPyagg.cwn7r633lih-NLwM0lYmkpYsjoPO7B4CCf7Uwu2sBL8g.JPEG/SE-4D3D1287-BE9B-40CD-87B0-1C23010134D7.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfNiAg/MDAxNzU2NTYyNzEyNzgx.H2jloI6Y_7ueEKEcItq1jR1AOswKrLLRBrm3PzrA3vQg.Qn_B6UZtnmXEGXTzxvXvyUBY1CkZDD60VqjTvRd6VhIg.JPEG/IMG%EF%BC%BF8948.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMjUw/MDAxNzU2NTYyNzEyODQ2.Og_He7VA0KRE0UJfy47nBsSnZ29ccWP9cRAn8xgUQ2Eg._mrIi3FQB0SPwfSf3wdDK4Qk2f5hRjNNPj_hiRJwm60g.JPEG/IMG%EF%BC%BF8949.jpg?type=w773' }
      ]);
    }

    const existingImages_k1282659967 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1282659967'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1282659967[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/place/F431EEF134F045D09CA6C7E53389F603' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5BAD97AF0B8B4D299A82A9880844AB7D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B6FDCDF38158479B8B3C55EFF7F40890' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DB2B2B378AD947578F1512ED87EF46E2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/D4E644ECD2C24DCBA94DCE5713EFD0DC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfNDMg/MDAxNzU2NTU3NTg1MDQx.TCqq5HIUPaMKS7F-QRzJwmu9tn5fn4ezRLuE1sfDzegg.3-k84RrICkWbPkl-tn2EYZLr_3DK0l7i48vzvBU2X6Eg.JPEG/IMG%EF%BC%BF0521.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfNDkg/MDAxNzU2NTU4ODcxNjcy.1LPAg6R_Vddvvi0NC_U66jPYjiFF9cLSnPMttzRm8fgg.lt574P0eg8mgp_SNEp7zr_9hu3vbLQhFRcvtzXWjZucg.JPEG/output%EF%BC%BF3148749353.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMjIg/MDAxNzU2NTU3NTgzNTYw.iq8xOlMCi_i3x7E9diwaLgfNpIAVRMO66j9-Q99eNSIg.lD7gFhPmtxyEnjzDGBhIN-S2Eg_GJ_kXKn-iMnzKYjsg.JPEG/IMG%EF%BC%BF0519.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMjg2/MDAxNzU2NTU3NTgzNjMw.qlZoj2XU78tGOq5GGtvwpRIVygm6YONKAtq2GKRFvGQg.4wsQ81_RLIvqOV8gnknrXpVYvSYeHyKDB6xpWhgWLFIg.JPEG/IMG%EF%BC%BF0520.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfNDcg/MDAxNzU2NTU3NTg1MDAx.8aX9tMX3VOigq0G2m06bt-jKDE_OxOoeKN5M8lE-6nsg.RcW5N6yx3JxdM1WE9o71aG_u0_rZFEUQZbrA3yF6qT4g.JPEG/IMG%EF%BC%BF0524.jpg?type=w966' }
      ]);
    }

    const existingImages_k24725293 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24725293'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k24725293[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db6a74c5473714e72719839eb0ce045a06b68765?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ced4cc2c33aea6fa237d2aa1f4537b12ce15b698?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/535ff84ce90101d8d5f5e9199626cede9074caaa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a7773036bc7709a755f78649401bbb4588fee6cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/606d0b972d17254125fb531d071f7f49907a7b2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/925c57bd4b4d5dc08f699d3f864bdd7324849f5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/baccffd4476095a549e911fb142e2b3205f85931?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/94ab2ce1af8a747789a92c767b1b8b410fd4be33?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66af5a43e8a71a2d55db7784d4f45954d7661986?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/036e7bc3d58b0546a61c48f1c49ddf30af7bbe31?original' }
      ]);
    }

    const existingImages_k8612493 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8612493'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8612493[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7d01a17d9d4cba8688ce56b2ee03d9cd7126b981?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/109003fc6114949e80b1e73a28bc3938787d6c47?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/76af61aea483994d0e69dd0fe5b7653876918641?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e18d9cac3f3bd4526efcb95165b878e4692bb43f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f34da782c727b29ad2dd54a1aa875b9596522d72?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c71f80038cd1f1cc35f58e1d7026e5151a003d5f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/be444680fc9bdc00d1b6ec01918d382a3927e236?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d7192feed95a10a78b4deaaec1519833cf5e21f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/219b336b6caf9d58da974be6e76ecc506cb62f7c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/195dcca974d8637975c7589c25713804ae59139e?original' }
      ]);
    }

    const existingImages_k11231325 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11231325'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11231325[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ed9f64bd1c54fda66199a6ebb2e097e5e12e63c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/63617f4c79ce2e293624ce8d629f3cfa665e1888?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eb094eeeca5867b467a57adc06efcc4ba7411dbe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0005447fc7d166f1a491939ae025fb943ee04445?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8adcc0c9d909d23a8139bd0d4bf824fd0df31cd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c720ad5b60960aa85809b762f2d40b8e0124e8e0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4a0f2ec2a5716139a82509790709c3a8e1b84a81?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd29dad411fc68db8f2ec554e4db4b692ebff7d8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/140725f7bb05b64b0a4a95c096a35e2c69c86032?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6cba6dcaf465221bc5425e70d54dd4543ff3c218?original' }
      ]);
    }

    const existingImages_k15847929 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15847929'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15847929[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjA2/MDAxNzU2NzgxMTA2OTky.Gk7Gl6QySGnhseaC4RyAxPgrsG4VKVcD87ESpr5rVsYg.h7YtMTnmyJ0FnIOGVlH1o9L9_6GY5pwCE5XdygUNWyQg.JPEG/IMG%EF%BC%BF1505.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTY3/MDAxNzU2NTA4NDg1OTMw.ipFQ4qy-xM0g7WYfj956GL2lnbGjoKi_BjyNpe226sAg.86sUGMFeWg4J6TSQmR0-v2Fu6f8ASdz7xEbnUkD8vEAg.JPEG/SE-ae72390f-8529-11f0-971e-194d959c7bdb.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTEy/MDAxNzU2NTA4NDg2ODk4.oxe8w2qu0z-8D4r6baSZ7MNsR8WQP1VvH0-OJoPZPjwg.fuVRlsC-curNuFhEZVG8PL1knK9-L74jlCCaGtcgeVwg.JPEG/SE-ae72ae40-8529-11f0-971e-8f9a641f129a.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjg3/MDAxNzU2MTc4OTc4ODM0.c2xOvi8KTphhKwzrmtlZ7pRvVZNMYhkhIAJSXHhLUNcg.PXhIh1c8Jd79dK7CN-YBWAt-TPMmPxAQMRFt1aE4RF0g.JPEG/KakaoTalk_20250826_121334392.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjAw/MDAxNzU2MTc5MTk1OTg4.ErpFBrQwkEBa4A4PwVMqzYkDMi9NR7mY0j1v7AwcN70g.u7Lb3rv-f5UMZQGpi10ryKIqUvp8RjLHcc_-PRMU8iIg.JPEG/KakaoTalk_20250826_121334392_01.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMTg4/MDAxNzU1NDQ1OTA3MDcw.TBS1eOLAC-d0eA6Oj1UVwgsWtrImld8fzLVDO2_xZCMg.IpYoWMzXpP6DTlZXxCa21zIj_gx3YYqbctpXxiqFT_Ug.JPEG/IMG%EF%BC%BF1009.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfODYg/MDAxNzU1NzM1MzIwMTU3.AkUnH_JW7--agYr4idnnPQcj0pFHgPRY4vZ7cLtFyqIg.aPWNAgH_PIui9UduYAdf5_x056MPJhrzFMyMu2tjm-8g.JPEG/SE-753A3353-4CE9-4D2F-8654-E5172B2FDA5E.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMTU5/MDAxNzU1NzM2MzE3NTQy.Kijabwx473k6TtutPBxRgaguwGFFFOEotJlPsuJLNeUg.ZuGUXyFZowHOxNhEmhqgp96BBWKBeIsx5C3j0ve6CGwg.JPEG/SE-48398A9F-EB93-496F-96C1-D78A322DB0B8.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjhfMTAz/MDAxNzUzNjg2ODcwNDMw.d7NHIX573uvSymYrqlB1asZEsLRHALCPfA11mAMUacAg.cB05otS5ZbawWRAdvoMospIMi6xVOhreikzInAGDspEg.JPEG/SE-e229b615-205f-48ab-bd11-8b30e6a9557e.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjhfMjM0/MDAxNzUzNjg2Mjg2Njgy.9i7uqkkFFtIJnZHcCu9f1TrINSp_lqoI75njNCiEx58g.l8RJNYA0XIt8dnWtVT5K4bHBXv9M4mp5Hpx2_zCKngwg.JPEG/SE-a3c59d2b-7c2b-4973-8dcc-eed18d0afdb2.jpg?type=w466' }
      ]);
    }

    const existingImages_k1985785355 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1985785355'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1985785355[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/37baa22a2942f326d5f9d0737e5f39c74803972b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/95b1836c0c493061e4697f15dd8db1b284613d1c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f164837107a41d08a2534011c24af33f724f4aac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c494e3c867d990ca70a9c1cbc7ba5a79998a490e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/63f9a571f7c61046db364f47167a4b10f545a4f5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ad4c5b021c822c7f423f81a0acf3302b4eaadde?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8d2fb34bb625a07eceec02d2df3b41b8f9b9a694?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/88857d66954d538f7cbf572e1211f1dc66b60a04?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1f100f9223ce6e00a39f5618474945153b3a54b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dc8bc86963ddb8615fec29b6d410f848ab6d9a70?original' }
      ]);
    }

    const existingImages_k560657944 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k560657944'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k560657944[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A7383B5D2BA64830BD0B59EFF2BACDE5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/50E5717E75DC4631A9B9B2F3581D3E4A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E58E9603128F4194B662EE4E55985E1D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3DD996E4DE484C718EF2EBCABFF69048' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8BC38626721F4DBA8B3BDF385F2E7A7B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4D938110CC714E9F8948D2AA47D51600' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A7DF2641D5E44A22B69FA02DC83F0D03' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E46A9F989DBE45FCBC551C123F83ACE4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E691DD2F3E3242E588B11E300D040748' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4A14363FD7EE49899DFE94061F5DC0AF' }
      ]);
    }

    const existingImages_k42143703 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k42143703'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k42143703[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMjAg/MDAxNzQ5MzU2NzA0NTg1.SbFGfDqy_0mxBrjskr-xuNdLqkXTHGdMgPQBQg7LKlog.apISAF203nQG6QEuzzG_oVqf4arWagWJUb4XoVgbagMg.JPEG/output%EF%BC%BF3180444842.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjBfMiAg/MDAxNzQ3NzA5MzAzOTM4.Q82WVbzYibITi855fA_dAjkxqztfDc9Y92ESAuLIjwYg.5yLY9_cJikBNV5h2BecNnhTcZHAPA7NNx1lAXfCh7Lgg.JPEG/IMG_9021.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjBfMiAg/MDAxNzQ3NzA5MjUxNDQy.M9_JhiOmalRSsOgrUJqmaR75rrS3bciAV-Q8kyCArrYg.LyYml0aTLyMrf1X0MJUAI-vk5Kb_qWILM2kgBbW3Iqgg.JPEG/IMG_9004.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjBfMTkg/MDAxNzQ3NzA5MzAzOTc0.IP_0n4eXchf8QZ3l9udZrbf6ddEM3jlfaXG8IVcmbPog.2rbKZBnv6iMTF6HuDeOTBmSORe2XL_v5loAOX0BQ8DUg.JPEG/IMG_9020.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjhfMjc3/MDAxNzQ1ODA5OTkxODQx.LxluwLCGqqoLzOfpqiZrTRMQMZXlb5Q5EmUktQYSDyog.pjzT0kCZ-CrrjEQghnVg5ZURwGt_-U9K2VqodxznYygg.JPEG/900%EF%BC%BF20250426%EF%BC%BF201150.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjhfNDgg/MDAxNzQ1ODA5OTM1Mzk5.l2xC95H-tzlpUl7Ut43Km4ilgI7lSix5EI7-jxQ1oDog.VDIqN0Qn66b1ctHrbfry-wFV_z4t6xU4mWXTuejSkEEg.JPEG/900%EF%BC%BF20250426%EF%BC%BF200644.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjhfMTQg/MDAxNzQ1ODA5OTM0OTEx.OZciftLvqMEvFfrc0NMGTiLdshSIeH0_QQyOze3xDOQg.G8ZYENqVGyGkGe9LliLMgFpdQJ436QPlOk6Qd-UfdEog.JPEG/900%EF%BC%BF20250426%EF%BC%BF200733.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjhfNTUg/MDAxNzQ1ODA5OTMyNDE5.qYu_nlS1VgaXbTMcmjEuz-abAaJEnH6-J7yGyBB7jLQg.SZlLmtqO8X0bw54I-NX1TahSqC3Whs-jc1X7EoWK50Eg.JPEG/900%EF%BC%BF20250426%EF%BC%BF200918.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjhfMTcx/MDAxNzQ1ODEwOTgzMDk2.f6MY4BumqettyepPMJhoNhHGZx1mTXeb0Bki70Vdcmcg.3YwN5c6MMC2I69QSSUNTffk0jlakxHBQHT09PsTIsZwg.JPEG/900%EF%BC%BF20250428%EF%BC%BF072919.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjhfNzEg/MDAxNzQ1ODA5OTkxNjY0.9LgJSBEKOrZ-J3x-xK8dZh1D4_Jlim2cTstt2ZURiK4g.xSOJDgN08gsVze-iFyu0WltoyhSvHl-wMxizJuebmrgg.JPEG/900%EF%BC%BF20250426%EF%BC%BF200953.jpg?type=w773' }
      ]);
    }

    const existingImages_k8503628 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8503628'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8503628[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/47d5fea862ab3a93446cc0daca0524b3da061c6d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f412a059762ebc05e25e8b3cfd927e5c228ab4cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9f6fd7e31607c5f647e000b217a5d8f2fb389e84?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f9df470440d2a668fd3f1502d42d624c2d456f6d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e0dde45448027ead9db5e731570f964874ee358f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d6766ceee7c5901f197c687281b8eeb2be2a20de?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/89ec1c79ea9baeb508b455a7ec76acc1ff8768b1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/19b37345677d82902324b77ec731ffe9af383c7e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4f6817d47c113095780c850161a0e10ae3165d25?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cb3a7702f0d0a09ced7cbda2d3f5487902e9ce9e?original' }
      ]);
    }

    const existingImages_k9348308 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9348308'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9348308[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cf2dd7ffcd1cf922e907c3ce089c67507dc39e6f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/20f8faa30cb4d73ab7c3f7b15dd659c07ebff7fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdd24e6ea21014584f5b8a60320fb7daa6d84a49?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ef6eb7d702eabd147df2e86eddd9222246ca435a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0f0656c170e1b5f08d230a488327873feef94517?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/494b4ea3d1abe8b7315f6b914cabf137a0001c8b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a282544feeb5d345f62f3eb6dd3b390ff82de04?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5131e77be4617ae2bf25c5139986d95d17384139?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a6534b090d12f710622685e41a9903a919553355?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/78137f150cbef24f0fd927d387e3519d22673ece?original' }
      ]);
    }

    const existingImages_k8025375 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8025375'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8025375[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d003bf7d6747fb07270807955a19edf6bdd124e7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/18d46903b582fef2cf45a73457155854cd936418?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ee8760a2996330d21f6ce885b057a6d89c04ff3b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8b8e0f8c0bf88e404a31fecb766604fc67951323?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc34283df8cf4d7abe63152a98c5cfade1a28bd8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5c8a0e9d0b29cebf7d12b5ebcc5dc1ba6e1566fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7b8883a10e8dd76ffd2b2e7f635c05671b834395?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/48ed42ef7bb47ab8756c6411f11955f1a3f92546?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a1ff8f85c1ae2a10d9f64ab18db405f972ce2475?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/187cfe5c06d6f8fa1eec3b2bd7099128ddc3a394?original' }
      ]);
    }

    const existingImages_k11128820 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11128820'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11128820[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/15ed0de0f1ae35fd2276cd8af7158aeb6abfedd2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34dbbc7cbf9e8f0dbd0c8265cab24ab0f1407098?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f1ffa8cad357a7be012517c40f23f530ac79bba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a32ed6a5d26aed6347b57e72cdccff02f33e6044?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0d924696e87929ea39e21d3e2a9f1f7a18ffde60?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a7b55eb2c8b29a300aafde5e0c94126b2a3f9714?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/513ee2e793753d4f5616c195210a085a72ccd853?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/94b86eccfdec54846a68c80f4b06408f15a592b1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c93ad2a1ceb18665533739634fa578bc57a1b54?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f865fd1c20e2bb7f856f67c27b90c35781062154?original' }
      ]);
    }

    const existingImages_k16853817 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16853817'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16853817[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/19224e08e3b49eab588e485da9e67f8d01153c05?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dd375f17f169074c14851659762176b6564a1d91?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4a03170ed9d57bbf08c52a5b5738413ae33373f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqicmY8OZG_ZD9xKz6eUQyfgKT0YoahJ1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqh3qIoJaU_5T4h4xKBsQ9UmwZRWqBVy1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqh3SkjgoE_V8phJu2MkbT3otkDP3NO71_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqh2QAwAW3_rnFkltWC9JoS99L62Fgkq0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhAfVMsty_8us0uxZhqNFsb1hrsv8xhK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhAJu5tT2_rk8s1whHkbYuWkUuNbFhA0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjI2/MDAxNzU2MTA4NjIxNTM2.Pbcdz0Dpeufxz6X3yF9kKMQciBE4tNFYC_Repyg-TXEg.9m7G95-3SfAXaFFPKsTblC2G5cb4aCwzblq-hPQOfE4g.JPEG/SE-D13ECE2C-16E8-4A2B-8970-789EBFB6EFE8.jpg?type=w386' }
      ]);
    }

    const existingImages_k15751933 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15751933'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15751933[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d67044080549b84c98ecd1444dd58b18ebba9222?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/706d65f866c456f327d374ffcaac7569175be225?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3fca85e086ae1ccd621accea97cc7e526f1cf4b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e28da267c05b1e46d2d94b112070348322b8be5d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/820a0636a5a8e84d1658d901001d8493750d561b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3977a8256c149c28385e27472755a73e293d58f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e6a7243bc791ac53c403a898c1167a1b126cdbe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/089e24158e21caefd664513b9b4e8a5e9542d135?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWaiw4empV_xPk8hFGYnQG2QyjBj6Oi31_lkageum4C0G.jpeg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMTkg/MDAxNzU2MzQ2MDgzNzM1.K303CgTnHWQHvuwQumP1ELkKZ0Q8BU-ldZkp95e17jsg.ZwnPgKtHAewAkeRYmBLoTmzCSc-QPD_TE5l8fpSiY6sg.JPEG/IMG%EF%BC%BF3846.JPG?type=w773' }
      ]);
    }

    const existingImages_k16904322 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16904322'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16904322[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9220fb6e30e423fc547b9bc2972cad7f816e2ed?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a04ab5a02bd6f12e292205ecc2b0840cc208a8cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c6da911ee926907dc78835a5c411dc372bab4c05?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0b57deb2ba6e14c54be2f6c1f3a077b7235a10cf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/800950b0d2c3586810fdab9642878e97ec153739?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/58eb7674f2888edecb6338844e2186293ea96885?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2c7ce809f918df292c6b8dfaf96ab53391ba409f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3428e39b4a9c47b660ccb29d9e6789cb438f0bfd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b540725db9510449f8a9401a2a885af7409ddec3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/95c2ac22066503a38e0aa82978d72a68b51a45dd?original' }
      ]);
    }

    const existingImages_k25048467 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25048467'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k25048467[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0a4d428ce149c57c73238938bb32f25153dd8dab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/348d0408f0ccde9f9847d89ec46338b68a5d79ad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca8f095becb9fdfb6f083e4cea8a7cef07049ade?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c3d889b1f035d9ff18364752a26aaa6a1e84af03?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b5f158c86d72050b1f99d63857e67752bd866c44?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/35e32c234e7057d8e9f509568f8f822fdcb6f8b2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f1e4e662b3c8d37829d84139b373b9b07296ae31?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/998c6d55a4f572f8ce230235abfcac17c06d5900?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/597ee286d57e67f982e42bc58c0df61168335cc598694acac4ad0972ddd7541c' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3b1ce00c26111220c1fe9127c905beb3622eed9c?original' }
      ]);
    }

    const existingImages_k16296804 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16296804'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16296804[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/84404e76eaecc1da22fadcfb48ca480f54a9c40a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ea23888b5d7eba7a47a0770f62252c2a06f2372?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5055274137e694908168e66d1d9f3eb1f0b209f4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMjk1/MDAxNzU1Nzg3Nzk1Mjk2.Sdl-uzBQtenVPqSLuoaIzyYozq8Ahz70TnRBNmnLVcsg.RYtbbZHJwQfdFRwiMHYwDxA5yRT2C4gxR-ACFWJAI9Ug.JPEG/SE-e82c9c78-75c5-11f0-8d80-556dcc15c510.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMjgz/MDAxNzU1Nzg4MjU0MDc2.WToGFB1Q4sxW1mrzvj-VxyoSRugog3g8EV_Bgldrizwg.8m1j7WicVK-YWFIQzhiLdFMBdansKkU0ivKobMz9Wikg.JPEG/SE-e84a84bd-75c5-11f0-8d80-ebb3ea971e7c.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMjY3/MDAxNzU1Nzg3OTM0Mzc1.biulKQuYyAWQM_sakk9JDndzcw6zrWnJk8N6a46Ppncg.SoJvgERvL6XxQ9QI36nHbKFDL54z4C7ZEiFJQUDb_dsg.JPEG/SE-e838f889-75c5-11f0-8d80-df760bb96355.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjZfMjM5/MDAxNzUzNTI4Nzg5OTUz.WuaSeY3ht-_6zsd9Qg7x666KdnuNQTt6SQFhzk-nE8Mg.hTCMNEXkCro7W8s6WXEwqhwZf4TNMbU5R0yuhmB4suQg.JPEG/900%EF%BC%BF20250723%EF%BC%BF192907.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTdfMTkz/MDAxNzUyNzE0MzY3MTU3.fOIUlLHb1lonZKuQffjwZ1UtWfiLulKx03HVtN-zHOEg.SqkK6ExUCovnzWL2mC2uAJnzgXJrrHbs69APtOdXD9Ag.JPEG/KakaoTalk_20250717_093834345_05.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDhfMjE2/MDAxNzUxOTQxOTc0NTAz.DEIg5SA9LQ9YsE3Su8uy5OqVwER0CGQvw8kqiTWceFgg._2rC2HVjcphDzFxOGLAksAndqanvtZaa0LgWPVdRRy8g.JPEG/KakaoTalk_20250708_112424467_01.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDJfNDUg/MDAxNzUxNDE2NTE2NDU5.pcubMBGtIid5u7nEJt91BZvZPjKOI6L6Ri47dKh8uSgg.lJ41Tgy--yNBL7-aw47WDrXRBnaiZ9pqIZrkh5EweKIg.JPEG/900%EF%BC%BF20250630%EF%BC%BF192129.jpg?type=w966' }
      ]);
    }

    const existingImages_k13093208 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13093208'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13093208[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9cf26698acbe0cbf0957e5f7010ab010b0b8ce80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f1d68067d3f89538823191cac9a2704a43400eb7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d02547f6c2be517db317c4164ce218a5fb226e8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f8afcccc519892b24f857971b68dd260e267260e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e5f6d5c09b2aea96cb6021c8c66c34418baa1c1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/234d1feb97229334ba064f31b5d2dcbb82c675dd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db309035f51f921a4ea14a44fa3c2e154b189671?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/09747f4808ba26e7c475bb76b4a05a5a8bebce80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/18f3c71b0369304ea9ab24aa73fd7006f0a6d195?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d6436446de46255785a9ff60ad02ca7fe072e81?original' }
      ]);
    }

    const existingImages_k263607084 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k263607084'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k263607084[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F7B15F1D604A4E6A91AAE171A665E238' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4442C2720B5342D88F96DA48A95FF556' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7C8E1E95F45D4E099A2FE0A09BF9E3E2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E00CB2C63A7E4B7AA87AB2E76AD7FA96' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5BC081F0F58744D09DC2264A3F53D340' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/73FB5B5E551A4AB28731E6100D06F656' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AF6F2BA7FD0F44A5ABF1B79AAEA105D6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5FF4D60081BE4DCCAEA311A887DE12CF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BA4376BD725C4CC990F04CD6BBF3D1E2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B9CF8B1665354031B03DD9F93C003C55' }
      ]);
    }

    const existingImages_k8002833 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8002833'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8002833[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7101FE1ABE1740248C9D20DDA04FD5DB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjZfMTE2/MDAxNzQ4MjQ3OTcyMTQw.pEZFuF16vGIV0VAVJRUb9OYVt-50CzI3A0XrI4uIOE0g.7TLHbstIhK5DW5SuNKFxyYVLbHYRVz2-ikDQYwNWXEUg.JPEG/SE-85EDE823-F8C1-4ADA-85FE-73620F163A7D.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjZfMjk0/MDAxNzQ4MjQ3OTcwNDYx.cd9SklnxLjVoF4vMGLCD9XcGmNi2JSZr2oLe0mVTxckg.xWgzljvFUzQEbqbKYOGrkWnZA-clNav6RD18OVqG5gAg.JPEG/SE-AB5BA797-1C1F-4BEB-9170-C40A634040F7.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjA3/MDAxNzU2MDcxMTk0OTYw.nppLtVG9dV1mBiPyA4v-cZPO8ziZDe8vcV23B0rtf9wg.DMTI2F1erZwTsTjZ9KwPCLi4n-gIVwI-D-LeflGvyrAg.JPEG/%EC%98%81%EB%8D%95%ED%9A%8C%EC%8B%9D%EB%8B%B92.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfOTkg/MDAxNzU2MTMzNjA1NDkz.dQzZ4zUDdc6vTe8sWSlOUuR_k6uLwSNU-Iqe7VO-cb8g.TL1kcXfxdxwoc85GlS0p1tXcWMiteTfXgRh9NET-d-wg.JPEG/%EC%98%81%EB%8D%95%ED%9A%8C%EC%8B%9D%EB%8B%B99.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTgy/MDAxNzU2MTMxNTAwMDcw.ueh8K-Xb161UIKPJj0kts9TiDxzLK002J7bRby3ehM8g.29A7q_sHeWUZBpo8OhG8cNJYwrhow1M8oNwBh-MGA9Ag.JPEG/SE-9f73e7da-5ea7-4c67-bfe7-c21537a350fa.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTQ2/MDAxNzU2MDc0MTQzMDYx.jg0qqxO5L2IFRBnrxiPE0ecuZoh3PHeti62ADAsddZ4g.cxSRSX1VZV38e4aLUJRmFpzhgQWlbnglypY0oGWDQKwg.JPEG/%EC%98%81%EB%8D%95%ED%9A%8C%EC%8B%9D%EB%8B%B912.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTcy/MDAxNzU2MDc0MTQyMzE2.d2WBGlcHwhdiP5i0Pkjdj4AhVAOLyprgPH592tl7-yMg.0-PO_MVGJXNkR8XAwD_CPbb_goy1wF9AZ707WedacWAg.JPEG/%EC%98%81%EB%8D%95%ED%9A%8C%EC%8B%9D%EB%8B%B94.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjgz/MDAxNzU2MDc0MTQyMzMy.QKAoTEKd6cjgfisEmIwDZ0peCE6Upv7avOAQE9pKoskg.IU5Q8F34k_aVJlP6VPDqBSkWGDfH_rbAm0oXZa9I6T0g.JPEG/%EC%98%81%EB%8D%95%ED%9A%8C%EC%8B%9D%EB%8B%B911.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMTQ0/MDAxNzUzNzcwODU0MTQy.fPNyhhfYboXJ0kQnzh5gAWxCga6vdX6M7pNJ7RvfNYwg.DrSLiqdlvXy_bVsg4M4E_1wyIFfmMzCiEAp5Q2hagpog.PNG/Photo_1.png?type=w966' }
      ]);
    }

    const existingImages_k1297162293 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1297162293'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1297162293[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/29595D14EC034DE99758E1693C2EF787' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C165284A66BB44F8A376ABBD26CE4CC1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8A097E0AE3164A8C83AF832CF56B89D3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3D10BA4CD4CB46299C9AC9B389DC8444' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/857434D0065541989304DFA081695A4D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FC4308655A79451FA3871A98D872D82B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5C17989A61F24A639953DAA70F0F37E9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/45DB08B9A69C4B179FA6A3A54C1C5BC9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4928AED7A4EC4960ADF544DBF7075428' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5D2073378E024E3BAB602C3063926F82' }
      ]);
    }

    const existingImages_k21405938 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21405938'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21405938[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTVfMTM4/MDAxNzQ3MzE5MDg3MDE1.H93Mu6ClnRpGgLx4B1OYeLeK-4UifsKQbwDd7Ei6yJsg.vG9ywEnt5s2Qs581JU0XlzKwwOm0CtUO4I9zXm8-qQ8g.JPEG/SE-27F5046C-05B6-496D-9F5A-9FFBE18D1700.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTVfMjM3/MDAxNzQ3MzE5MDcxOTE0.DzuC02sy2-QlvkRU7_NJmriiNaqWNUUPKDIIf2d3Q5wg.xw7bxJ-rDukDhBuuQUuTwEb6ANxaaSMl7x_CYxjAtswg.JPEG/SE-0A71637C-C60E-480E-A0A8-5649119CF117.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTRfNTgg/MDAxNzQ3MTUwNTU5OTQx.5zy48dWs01LxX1odVyvJj0OzNDjf6bqthQE_5zBLsSQg.wMmJXVgPCZlae9MBknKNDVwtmXn8Sy9XD2prq5QqCNQg.JPEG/IMG_2654.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTRfMjI5/MDAxNzQ3MTUwNTU5ODMz.lySMoTwQr5G7oOVAYyGZkv0JnkFv_p0cWn1BquNyUeog.RPfGiO7PhBwIuDANunOmtig3HnP11UUDvAsVrCJ6Tw0g.JPEG/IMG_2665.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTRfNTUg/MDAxNzQ3MTUwNTYwOTk3.bLsOUA22URPGdpY4nUnPQQ2wwMlUVlud6cdv6jPhzBIg.fDEL4sUqBCa9rPS85t8FsUeSiXW4aAdcqkd2tbSrhmEg.JPEG/IMG_2671.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjhfODkg/MDAxNjg1MjIzMTY0MDM5.A3EeG0u5dpbfg2yTlT0huis1q-fA_-ib7zIqldekM-Ag.pv0REXgmKvHZW15xmc7-uB0LLVbdApDjvW_bp4UcI3Eg.JPEG.whitemi10917/KakaoTalk_20230527_173714536_02.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjhfMzYg/MDAxNjg1MjIzMTU2MzM1.J3-g0HsidOJEGgd4SEdHwbnp-5fe9E0e-mHFUL4O0ggg.eoULEJpQZNnvQVEiHu3Xz3e1rHBYNn5pLso3oagGQv8g.JPEG.whitemi10917/KakaoTalk_20230527_173714536.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjhfMTkx/MDAxNjg1MjIzMTcyMDI2.YGeNBSozTQnoJS3fvN7pIB9jhKWTPWgz2ZgWHP-iYFog.2IGQ-bVHNGwyFMKop2z9jJhR49LVMgY0eZH74FjjIH0g.JPEG.whitemi10917/KakaoTalk_20230527_173714536_03.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MTlfMTAg/MDAxNzIxMzk1MTI4NTA5.8am_vHOKjPiHRczSlX4DgInN5V6pnNSO_d1NB2Z1X94g.kNIp39ycfrhKuqRQ9l_pQSyJqIq6JYj8yb0KmTTX5jIg.JPEG/IMG_1281.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAxMDdfMTA5/MDAxNzA0NjI3OTQ5Mjcw.S6DyfHJRJWsG9fUTFlvHvnlQ3z_IkVrjEp4gJhKVxVsg.hDJdWKy7RlYI2X_d91AfSYN5ZCHuy9cMOzYvZqrsuTEg.JPEG.kge10103/IMG_9303.jpg?type=w773' }
      ]);
    }

    const existingImages_k2061622071 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2061622071'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2061622071[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce40eed15fbe60714bc23458590fc53b69bcc1ae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d0c85dcc76f1d409eea34554c98178de821978e9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/49aad884a004192d385df3b09210e1660bcae86a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMjYx/MDAxNzU2Njk3ODM1NDU4.FHD2iQUe97DEx3zt63-hzieBhXWmjYaqPWhJ8gPTC2Ag.hu6yNAAk0opTcRBOKWhCsWOkt1Mm8doB51w_skvSBFYg.JPEG/output%EF%BC%BF3894877846.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMjkw/MDAxNzU1ODI5Njc5Mjc2.pg_8eXQKYkUgrAJryKO-6eHjXXwIG3ohokA1zsfg5Egg.bpKCbMNBw3TCDpJ_AuY8rjkH3vZHD52ygGxFaZ-6XxYg.JPEG/IMG%EF%BC%BF9525.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTYw/MDAxNzU1ODI5NjE1MTkz.uoeLRCiD-qnDWtf8zFBAKtP2JKeurFgGeaK5rrDnTDEg.-dOnxUZu85V07IKMY9z03wTqmrU_GFFM1sE7YsFzaMAg.JPEG/IMG%EF%BC%BF9537.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMjM5/MDAxNzU1ODI5NjQwMjQ1.DhzJ7KHosPdGzUmZG35e221Z8n9XBL7FKXVN2I7a3fog.hVB1bS1SW3GKRrNe7rEpHvXtxd8G8QCVAoucpwaPl_Ug.JPEG/IMG%EF%BC%BF9518.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTU2/MDAxNzU1ODI5ODIwNTQ4.rEKq8mSphOlCiALXCQnEEyzQX4QUpYfYof4nTLimsIEg.waUuewUYx7MqFKsEiguso2wOqD8Qh3T_F0s-_AXygGEg.JPEG/IMG%EF%BC%BF9537.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDNfMjgg/MDAxNzQ2MjY4MjEwMjQy.DtkYiNVUAVXkI708jt5Zxi919SKuRGzwhXa1JGcrjiog.v3Akf7ocdHWoX_nVOkAfQR22u4RArkKG4De4nSeezGMg.JPEG/900%EF%BC%BF20250501%EF%BC%BF175846.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDNfNDUg/MDAxNzQ2MjY4MjEyOTgz.VORfa8wq6lErffzyJ6P1L71YWvCoAMtAHS5M_zU0dlcg.xlW6uvCyrln2q2RsMt7Mog_ijfz6j_Sf_c7pNESU_10g.JPEG/900%EF%BC%BF20250501%EF%BC%BF192509.jpg?type=w773' }
      ]);
    }

    const existingImages_k1420643780 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1420643780'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1420643780[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a2e89da43f0de7e7a0e94d9d8105ccc6325a5072?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3d75e2213dd2ecbdd07afa582b0d58a3742eead9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dde3731ca8313579249e1104444a3bb9d6e7d8e8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/26cd3981b7f65ca3081299410d8842aa46f0961b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8b6cf2d3e868296e4de5d2917abd1526a48235d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ffcf5f73858874de82e1b613885829182e8b1468?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e07e23b962c429b3d30e0ae0f5d2a831452de4a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/39733dff50c1085218718e831e7cbf8f8b0e2d61?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/74125895d1d95bddabe9a9e791cca30778446da2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ffe0ca2a9e197cd1a910737232f9fa29dc2c97f5?original' }
      ]);
    }

    const existingImages_k1039797847 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1039797847'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1039797847[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/febbd164df41f16a2a8e076292598687cb6a317a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0427101ca2d1d47f3e1f802edd0e3351570c1b68?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aef43820c2f875d8d1e9c1bc52d8230395e5c9b9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/67ee1a641f69dd6003681cccdccdfb9c3b5c614b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/24fc117538562249bdd70baea3e8ebe7412b3b57?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df13756ea9d6ffb9f2bf6a912ccf86dfa3dbedd0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f6ce1a24ce922613f3f17ce969d0a0b32d223687?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c45612c2a0a37bd95f017f95674e5c484626b369?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/691ebd7adb6af4e667fdc42f1e0b809284714444?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/750fb932fb2c0096e2896d736c1e29a07272b209?original' }
      ]);
    }

    const existingImages_k7886148 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7886148'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7886148[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5DD5CC5211AC4DDB9EC399D4EA69E55F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/145D46014B0B72056C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/165D46014B0B71F86A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/205D46014B0B71EF68' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/175D46014B0B720A6D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/185D46014B0B72006B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/135D46014B0B71F369' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/166758044B0B73FCAC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5E0DB820482A49DAA222A311B478DEFA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/7364553351BD46A38092D0F20CEBAF97' }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계: 결과에 담긴 categories 기준, 중복 방지
    const spotCategoryRelationData = [];

    const existingCats_k19033655 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19033655'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k19033655 = new Set(existingCats_k19033655.map(r => r.spot_category_id));

    if (!existingSet_k19033655.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19033655' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16903726 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16903726'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16903726 = new Set(existingCats_k16903726.map(r => r.spot_category_id));

    if (!existingSet_k16903726.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16903726' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2057764323 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2057764323'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2057764323 = new Set(existingCats_k2057764323.map(r => r.spot_category_id));

    if (!existingSet_k2057764323.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1681972370 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1681972370'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1681972370 = new Set(existingCats_k1681972370.map(r => r.spot_category_id));

    if (!existingSet_k1681972370.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1681972370' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27292203 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27292203'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27292203 = new Set(existingCats_k27292203.map(r => r.spot_category_id));

    if (!existingSet_k27292203.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27175293 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27175293'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27175293 = new Set(existingCats_k27175293.map(r => r.spot_category_id));

    if (!existingSet_k27175293.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27175293' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12096004 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12096004'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12096004 = new Set(existingCats_k12096004.map(r => r.spot_category_id));

    if (!existingSet_k12096004.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12096004' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k17703669 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17703669'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k17703669 = new Set(existingCats_k17703669.map(r => r.spot_category_id));

    if (!existingSet_k17703669.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16740149 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16740149'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16740149 = new Set(existingCats_k16740149.map(r => r.spot_category_id));

    if (!existingSet_k16740149.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k251321963 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k251321963'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k251321963 = new Set(existingCats_k251321963.map(r => r.spot_category_id));

    if (!existingSet_k251321963.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11831433 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11831433'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11831433 = new Set(existingCats_k11831433.map(r => r.spot_category_id));

    if (!existingSet_k11831433.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1598052634 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1598052634'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1598052634 = new Set(existingCats_k1598052634.map(r => r.spot_category_id));

    if (!existingSet_k1598052634.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2131538567 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2131538567'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2131538567 = new Set(existingCats_k2131538567.map(r => r.spot_category_id));

    if (!existingSet_k2131538567.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2131538567' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7819490 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7819490'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7819490 = new Set(existingCats_k7819490.map(r => r.spot_category_id));

    if (!existingSet_k7819490.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7819490' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2099116820 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2099116820'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2099116820 = new Set(existingCats_k2099116820.map(r => r.spot_category_id));

    if (!existingSet_k2099116820.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10346328 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10346328'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10346328 = new Set(existingCats_k10346328.map(r => r.spot_category_id));

    if (!existingSet_k10346328.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k327142548 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k327142548'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k327142548 = new Set(existingCats_k327142548.map(r => r.spot_category_id));

    if (!existingSet_k327142548.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1282659967 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1282659967'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1282659967 = new Set(existingCats_k1282659967.map(r => r.spot_category_id));

    if (!existingSet_k1282659967.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k24725293 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24725293'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k24725293 = new Set(existingCats_k24725293.map(r => r.spot_category_id));

    if (!existingSet_k24725293.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8612493 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8612493'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8612493 = new Set(existingCats_k8612493.map(r => r.spot_category_id));

    if (!existingSet_k8612493.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8612493' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11231325 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11231325'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11231325 = new Set(existingCats_k11231325.map(r => r.spot_category_id));

    if (!existingSet_k11231325.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15847929 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15847929'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15847929 = new Set(existingCats_k15847929.map(r => r.spot_category_id));

    if (!existingSet_k15847929.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1985785355 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1985785355'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1985785355 = new Set(existingCats_k1985785355.map(r => r.spot_category_id));

    if (!existingSet_k1985785355.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k560657944 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k560657944'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k560657944 = new Set(existingCats_k560657944.map(r => r.spot_category_id));

    if (!existingSet_k560657944.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k560657944' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k42143703 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k42143703'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k42143703 = new Set(existingCats_k42143703.map(r => r.spot_category_id));

    if (!existingSet_k42143703.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8503628 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8503628'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8503628 = new Set(existingCats_k8503628.map(r => r.spot_category_id));

    if (!existingSet_k8503628.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8503628' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9348308 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9348308'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9348308 = new Set(existingCats_k9348308.map(r => r.spot_category_id));

    if (!existingSet_k9348308.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8025375 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8025375'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8025375 = new Set(existingCats_k8025375.map(r => r.spot_category_id));

    if (!existingSet_k8025375.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11128820 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11128820'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11128820 = new Set(existingCats_k11128820.map(r => r.spot_category_id));

    if (!existingSet_k11128820.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16853817 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16853817'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16853817 = new Set(existingCats_k16853817.map(r => r.spot_category_id));

    if (!existingSet_k16853817.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15751933 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15751933'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15751933 = new Set(existingCats_k15751933.map(r => r.spot_category_id));

    if (!existingSet_k15751933.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16904322 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16904322'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16904322 = new Set(existingCats_k16904322.map(r => r.spot_category_id));

    if (!existingSet_k16904322.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k25048467 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25048467'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k25048467 = new Set(existingCats_k25048467.map(r => r.spot_category_id));

    if (!existingSet_k25048467.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16296804 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16296804'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16296804 = new Set(existingCats_k16296804.map(r => r.spot_category_id));

    if (!existingSet_k16296804.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13093208 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13093208'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13093208 = new Set(existingCats_k13093208.map(r => r.spot_category_id));

    if (!existingSet_k13093208.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k263607084 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k263607084'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k263607084 = new Set(existingCats_k263607084.map(r => r.spot_category_id));

    if (!existingSet_k263607084.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k263607084' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8002833 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8002833'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8002833 = new Set(existingCats_k8002833.map(r => r.spot_category_id));

    if (!existingSet_k8002833.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1297162293 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1297162293'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1297162293 = new Set(existingCats_k1297162293.map(r => r.spot_category_id));

    if (!existingSet_k1297162293.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21405938 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21405938'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21405938 = new Set(existingCats_k21405938.map(r => r.spot_category_id));

    if (!existingSet_k21405938.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2061622071 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2061622071'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2061622071 = new Set(existingCats_k2061622071.map(r => r.spot_category_id));

    if (!existingSet_k2061622071.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1420643780 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1420643780'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1420643780 = new Set(existingCats_k1420643780.map(r => r.spot_category_id));

    if (!existingSet_k1420643780.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1039797847 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1039797847'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1039797847 = new Set(existingCats_k1039797847.map(r => r.spot_category_id));

    if (!existingSet_k1039797847.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7886148 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7886148'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7886148 = new Set(existingCats_k7886148.map(r => r.spot_category_id));

    if (!existingSet_k7886148.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7886148' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    if (spotCategoryRelationData.length > 0) {
      await queryInterface.bulkInsert('spot_category_relation', spotCategoryRelationData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    const ids = ['k19033655', 'k16903726', 'k2057764323', 'k1681972370', 'k27292203', 'k27175293', 'k12096004', 'k17703669', 'k16740149', 'k251321963', 'k11831433', 'k1598052634', 'k2131538567', 'k7819490', 'k2099116820', 'k10346328', 'k327142548', 'k1282659967', 'k24725293', 'k8612493', 'k11231325', 'k15847929', 'k1985785355', 'k560657944', 'k42143703', 'k8503628', 'k9348308', 'k8025375', 'k11128820', 'k16853817', 'k15751933', 'k16904322', 'k25048467', 'k16296804', 'k13093208', 'k263607084', 'k8002833', 'k1297162293', 'k21405938', 'k2061622071', 'k1420643780', 'k1039797847', 'k7886148'];
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
