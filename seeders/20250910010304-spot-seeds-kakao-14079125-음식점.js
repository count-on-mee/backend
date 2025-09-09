'use strict';

/**
 * 카카오 북마크 크롤링으로 생성된 Spot 데이터 시드 파일
 * 폴더ID: 14079125
 * 카테고리라벨: 음식점
 * 생성일시: 2025-09-09T16:03:04.880Z
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
        name: '조선면옥',
        address: '충북 청주시 상당구 상당로69번길 58 (서문동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.634662300980956 127.4871235862818)',
          4326
        ),
        naver_spot_id: 'k11161843',
        review_count: 0,
        review_score: null,
      },
      {
        name: '차현희순두부청국장',
        address: '강원특별자치도 강릉시 초당순두부길 96 (초당동)',
        tel: '033-653-0811',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.79104416118155 128.91609435826447)',
          4326
        ),
        naver_spot_id: 'k25754890',
        review_count: 0,
        review_score: null,
      },
      {
        name: '할머니묵집',
        address: '대전 유성구 금남구즉로 1378 (봉산동)',
        tel: '042-935-5842',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.44622098655356 127.38380330203037)',
          4326
        ),
        naver_spot_id: 'k12473363',
        review_count: 0,
        review_score: null,
      },
      {
        name: '동광식당',
        address: '강원특별자치도 정선군 정선읍 녹송1길 27 (정선읍 봉양리)',
        tel: '033-563-3100',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.383006010754414 128.67156552187845)',
          4326
        ),
        naver_spot_id: 'k739219512',
        review_count: 0,
        review_score: null,
      },
      {
        name: '희락반점',
        address: '대전 중구 중앙로129번길 21 (선화동)',
        tel: '042-256-0273',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.328981736218545 127.42351333274847)',
          4326
        ),
        naver_spot_id: 'k8670704',
        review_count: 0,
        review_score: null,
      },
      {
        name: '흥흥제과',
        address: '충북 청주시 상당구 중앙로 5-3 1층 (북문로2가)',
        tel: '070-8827-7058',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.63746766770559 127.48862615055926)',
          4326
        ),
        naver_spot_id: 'k293015499',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강릉현대장칼국수 본점',
        address: '강원특별자치도 강릉시 임영로182번길 7-1 (임당동)',
        tel: '033-645-0929',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.75747930740778 128.8926666958966)',
          4326
        ),
        naver_spot_id: 'k13496738',
        review_count: 0,
        review_score: null,
      },
      {
        name: '향나무식당',
        address: '충북 충주시 수안보면 장터1길 11 1층 (수안보면 온천리)',
        tel: '043-846-2813',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.845283819495485 127.99191687872583)',
          4326
        ),
        naver_spot_id: 'k10916090',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하얀집가든',
        address: '강원특별자치도 원주시 지정면 작압길 70 (지정면 보통리)',
        tel: '033-732-4881',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.34385552353485 127.8608992795685)',
          4326
        ),
        naver_spot_id: 'k8585683',
        review_count: 0,
        review_score: null,
      },
      {
        name: '포레디',
        address: '대전 서구 도안동로11번길 54 2층 201호 (도안동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.3058074375653 127.34982782440335)',
          4326
        ),
        naver_spot_id: 'k659933814',
        review_count: 0,
        review_score: null,
      },
      {
        name: '평양숨두부',
        address: '대전 동구 대성동 163-2',
        tel: '042-284-4141',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.30128705049663 127.45671459527833)',
          4326
        ),
        naver_spot_id: 'k27069548',
        review_count: 0,
        review_score: null,
      },
      {
        name: '토미야',
        address: '대전 서구 청사서로 14 1층 (월평동)',
        tel: '042-471-1153',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.35914721428806 127.37682407121325)',
          4326
        ),
        naver_spot_id: 'k1532158905',
        review_count: 0,
        review_score: null,
      },
      {
        name: '테이블레이',
        address: '세종특별자치시 다정중앙로 39 다정센터프라자2 207호 (다정동)',
        tel: '044-866-7220',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.49400905095772 127.24856781310405)',
          4326
        ),
        naver_spot_id: 'k1299944133',
        review_count: 0,
        review_score: null,
      },
      {
        name: '태백한우마을',
        address: '강원특별자치도 태백시 번영로 349-1 1층 (황지동)',
        tel: '033-552-5349',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.17190845974326 128.99162413564426)',
          4326
        ),
        naver_spot_id: 'k2048564896',
        review_count: 0,
        review_score: null,
      },
      {
        name: '타베르나',
        address: '충북 청주시 청원구 율봉로 270 1층 102호 (율량동)',
        tel: '043-212-7950',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.66659492340467 127.49837176764619)',
          4326
        ),
        naver_spot_id: 'k1878980682',
        review_count: 0,
        review_score: null,
      },
      {
        name: '클라시코',
        address: '충남 천안시 서북구 불당5길 20 (불당동)',
        tel: '041-621-1204',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.80310870200201 127.1096898979692)',
          4326
        ),
        naver_spot_id: 'k17481755',
        review_count: 0,
        review_score: null,
      },
      {
        name: '참숯향생선구이',
        address: '대전 서구 둔산로74번길 29 1층 (둔산동)',
        tel: '042-485-4122',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.34989133495957 127.38218918462834)',
          4326
        ),
        naver_spot_id: 'k24388670',
        review_count: 0,
        review_score: null,
      },
      {
        name: '진로집',
        address: '대전 중구 중교로 45-5 (대흥동)',
        tel: '042-226-0914',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.325852183525626 127.42471699518475)',
          4326
        ),
        naver_spot_id: 'k12468740',
        review_count: 0,
        review_score: null,
      },
      {
        name: '적덕식당',
        address: '대전 동구 우암로 220-3 1층 (가양동)',
        tel: '042-633-4293',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.34309860370428 127.44121212388728)',
          4326
        ),
        naver_spot_id: 'k10711287',
        review_count: 0,
        review_score: null,
      },
      {
        name: '저문강에삽을씻고',
        address: '강원특별자치도 횡성군 횡성읍 화성로 104 (횡성읍 북천리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.49932735877785 127.99224908638706)',
          4326
        ),
        naver_spot_id: 'k10090470',
        review_count: 0,
        review_score: null,
      },
      {
        name: '장원막국수',
        address: '강원특별자치도 홍천군 홍천읍 상오안길 62 (홍천읍 상오안리)',
        tel: '033-435-5855',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.6451048917889 127.81246112494094)',
          4326
        ),
        naver_spot_id: 'k9921422',
        review_count: 0,
        review_score: null,
      },
      {
        name: '장안회집',
        address: '강원특별자치도 강릉시 사천면 진리항구길 51 1층 (사천면 사천진리)',
        tel: '033-644-1136',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.837656856812295 128.87536335854182)',
          4326
        ),
        naver_spot_id: 'k10727290',
        review_count: 0,
        review_score: null,
      },
      {
        name: '장수삼계탕',
        address: '강원특별자치도 강릉시 주문진읍 시장길 51 1층 (주문진읍 주문리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.89232748292727 128.82742966629448)',
          4326
        ),
        naver_spot_id: 'k1652068777',
        review_count: 0,
        review_score: null,
      },
      {
        name: '인삼골식당',
        address: '충남 금산군 제원면 금강로 290 (제원면 저곡리)',
        tel: '041-752-7516',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.110248183592006 127.56573148035278)',
          4326
        ),
        naver_spot_id: 'k21347050',
        review_count: 0,
        review_score: null,
      },
      {
        name: '율량반점 주중점',
        address: '충북 청주시 청원구 율량로 30 1층 (주중동)',
        tel: '043-216-7722',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.67329369570665 127.48928663452608)',
          4326
        ),
        naver_spot_id: 'k45811011',
        review_count: 0,
        review_score: null,
      },
      {
        name: '육림닭강정',
        address: '강원특별자치도 춘천시 소양고개길 46 1층 (요선동)',
        tel: '033-244-1510',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.88219624135444 127.7265790109218)',
          4326
        ),
        naver_spot_id: 'k27273000',
        review_count: 0,
        review_score: null,
      },
      {
        name: '월성식당',
        address: '강원특별자치도 강릉시 주문진읍 시장3길 4 1층 (주문진읍 주문리)',
        tel: '033-661-0997',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.89188345973741 128.82817801643876)',
          4326
        ),
        naver_spot_id: 'k8031047',
        review_count: 0,
        review_score: null,
      },
      {
        name: '월광박속낙지탕',
        address: '대전 서구 한밭대로707번길 27 2층 (월평동)',
        tel: '042-487-8253',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.35915646709911 127.37731880312182)',
          4326
        ),
        naver_spot_id: 'k1176678924',
        review_count: 0,
        review_score: null,
      },
      {
        name: '원골식당',
        address: '충남 금산군 제원면 금강로 588 (제원면 천내리)',
        tel: '041-752-2638',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.11518277369654 127.59119732111066)',
          4326
        ),
        naver_spot_id: 'k9366475',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용평회관',
        address: '강원특별자치도 평창군 대관령면 횡계2길 15 1층 (대관령면 횡계리)',
        tel: '033-335-5217',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.67355267751702 128.7091185378232)',
          4326
        ),
        naver_spot_id: 'k8461939',
        review_count: 0,
        review_score: null,
      },
      {
        name: '왕만두',
        address: '강원특별자치도 춘천시 방송길 77 타워푸르지오 프리미엄홀 지하1층 (온의동)',
        tel: '033-251-5480',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.86947659760195 127.72047155825992)',
          4326
        ),
        naver_spot_id: 'k593208960',
        review_count: 0,
        review_score: null,
      },
      {
        name: '옥천초량순대',
        address: '충북 옥천군 옥천읍 금장로 22 (옥천읍 금구리)',
        tel: '043-732-1527',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.30199052485154 127.56689489587916)',
          4326
        ),
        naver_spot_id: 'k9466426',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오한순손수제비 죽동점',
        address: '대전 유성구 죽동로279번길 89 1층 (죽동)',
        tel: '042-826-3373',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.372451317892654 127.3398382891399)',
          4326
        ),
        naver_spot_id: 'k1308797257',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영화반점',
        address: '대전 대덕구 신탄진동로23번길 46 1층 (신탄진동)',
        tel: '042-931-4158',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.449831787287266 127.4316027083015)',
          4326
        ),
        naver_spot_id: 'k9313876',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영순각',
        address: '충남 청양군 청양읍 칠갑산로 265-1 (청양읍 읍내리)',
        tel: '041-943-2218',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.45074274285912 126.80597418368524)',
          4326
        ),
        naver_spot_id: 'k10642300',
        review_count: 0,
        review_score: null,
      },
      {
        name: '연래춘대반점',
        address: '대전 유성구 대학로 78 1층 (궁동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.36043104668445 127.34438981353672)',
          4326
        ),
        naver_spot_id: 'k7999598',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아호정 어진점',
        address: '세종특별자치시 가름로 232 세종비즈니스센터 B동 1층 102호 (어진동)',
        tel: '044-998-0978',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.49561965486003 127.26560489198549)',
          4326
        ),
        naver_spot_id: 'k1508097729',
        review_count: 0,
        review_score: null,
      },
      {
        name: '싱글핀에일웍스',
        address: '강원특별자치도 양양군 현북면 하조대2길 48-42 싱글핀에일웍스 (현북면 하광정리)',
        tel: '070-8879-6181',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(38.02341772023008 128.72275915955376)',
          4326
        ),
        naver_spot_id: 'k27143822',
        review_count: 0,
        review_score: null,
      },
      {
        name: '실로암메밀국수',
        address: '강원특별자치도 양양군 강현면 장산4길 8-14 (강현면 장산리)',
        tel: '033-671-5547',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(38.137597996807266 128.59019890980085)',
          4326
        ),
        naver_spot_id: 'k7985087',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신토불이약초식당',
        address: '충북 보은군 속리산면 법주사로 268 (속리산면 사내리)',
        tel: '043-543-0433',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.531552270185635 127.82287165139718)',
          4326
        ),
        naver_spot_id: 'k17249072',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신도칼국수 본점',
        address: '대전 동구 대전로825번길 11 1층 (정동)',
        tel: '042-253-6799',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.33257044637692 127.43101290167691)',
          4326
        ),
        naver_spot_id: 'k11116260',
        review_count: 0,
        review_score: null,
      },
      {
        name: '슈엔',
        address: '충남 천안시 서북구 성정중1길 26-2 (성정동)',
        tel: '041-588-8899',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.82929162644921 127.13403835207698)',
          4326
        ),
        naver_spot_id: 'k7963664',
        review_count: 0,
        review_score: null,
      },
      {
        name: '숯골원조냉면식당',
        address: '대전 유성구 신성로 122 (신성동)',
        tel: '042-861-6730',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.39313870148382 127.35224738980905)',
          4326
        ),
        naver_spot_id: 'k21336299',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수이재1928',
        address: '충북 청주시 흥덕구 강서로71번길 4 1층 (강서동)',
        tel: '043-235-1928',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.62280230572415 127.42528500846647)',
          4326
        ),
        naver_spot_id: 'k244084380',
        review_count: 0,
        review_score: null,
      },
      {
        name: '송학반점',
        address: '충북 제천시 의병대로12길 7 1층 (명동)',
        tel: '043-646-2038',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.136437711190005 128.2074390081372)',
          4326
        ),
        naver_spot_id: 'k9839491',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소돌막국수',
        address: '강원특별자치도 강릉시 주문진읍 연주로 571 1층 (주문진읍 주문리)',
        tel: '033-662-2263',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.902972409839215 128.82204032785202)',
          4326
        ),
        naver_spot_id: 'k1629307609',
        review_count: 0,
        review_score: null,
      },
      {
        name: '설천순대국밥',
        address: '대전 서구 둔산로51번길 66 1층 101호 (둔산동)',
        tel: '042-482-4801',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.35402412587377 127.38049369167872)',
          4326
        ),
        naver_spot_id: 'k9165623',
        review_count: 0,
        review_score: null,
      },
      {
        name: '생선구이전문점 정가네',
        address: '충북 청주시 흥덕구 사운로 199 1층 (운천동)',
        tel: '043-267-1880',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.64628724065001 127.47723069128132)',
          4326
        ),
        naver_spot_id: 'k1204945904',
        review_count: 0,
        review_score: null,
      },
      {
        name: '샌마르',
        address: '강원특별자치도 강릉시 문화의길 8 1층 (임당동)',
        tel: '070-8285-0759',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.754791706306364 128.8948764943772)',
          4326
        ),
        naver_spot_id: 'k338604909',
        review_count: 0,
        review_score: null,
      },
      {
        name: '삼거리갈비',
        address: '충남 홍성군 홍성읍 월계천길 238 1층 (홍성읍 오관리)',
        tel: '041-632-2681',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.60393473678657 126.66334704595457)',
          4326
        ),
        naver_spot_id: 'k11833942',
        review_count: 0,
        review_score: null,
      },
      {
        name: '빠스타스',
        address: '세종특별자치시 달빛로 43 금강빌딩 1층 & 4층 (종촌동)',
        tel: '044-864-1992',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.50266432421491 127.25001977117688)',
          4326
        ),
        naver_spot_id: 'k940879473',
        review_count: 0,
        review_score: null,
      },
      {
        name: '부흥횟집',
        address: '강원특별자치도 동해시 일출로 93 (묵호진동)',
        tel: '033-531-5209',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55209771101208 129.11794616155106)',
          4326
        ),
        naver_spot_id: 'k12463827',
        review_count: 0,
        review_score: null,
      },
      {
        name: '부강옥 본점',
        address: '세종특별자치시 부강면 부강외천로 103 1층 (부강면 문곡리)',
        tel: '044-866-3362',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.52745590494489 127.37889830008176)',
          4326
        ),
        naver_spot_id: 'k887838514',
        review_count: 0,
        review_score: null,
      },
      {
        name: '바다마을',
        address: '강원특별자치도 삼척시 테마타운길 53 (갈천동)',
        tel: '033-572-5559',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.46752508793421 129.16905145517487)',
          4326
        ),
        naver_spot_id: 'k8379690',
        review_count: 0,
        review_score: null,
      },
      {
        name: '문정식당',
        address: '충북 옥천군 옥천읍 향수3길 20 1층 (옥천읍 하계리)',
        tel: '043-731-4407',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.31443996365428 127.58065897762944)',
          4326
        ),
        naver_spot_id: 'k11064993',
        review_count: 0,
        review_score: null,
      },
      {
        name: '목화반점',
        address: '충남 아산시 온주길26번길 7-3 1층 (읍내동)',
        tel: '041-545-8052',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.76135316899089 127.01929911236277)',
          4326
        ),
        naver_spot_id: 'k7876599',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명성각',
        address: '충남 금산군 추부면 하마전로 64 1층 (추부면 마전리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.191378540587266 127.47332139226046)',
          4326
        ),
        naver_spot_id: 'k9021717',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명물닭갈비',
        address: '강원특별자치도 춘천시 금강로62번길 8 (조양동)',
        tel: '033-244-2961',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.87949614150299 127.72789373241096)',
          4326
        ),
        naver_spot_id: 'k8337229',
        review_count: 0,
        review_score: null,
      },
      {
        name: '만남의식당',
        address: '강원특별자치도 삼척시 새천년도로 84 1층 (정하동)',
        tel: '033-574-1645',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.43915196604225 129.19073679304884)',
          4326
        ),
        naver_spot_id: 'k8334549',
        review_count: 0,
        review_score: null,
      },
      {
        name: '만나한우복수집',
        address: '대전 유성구 도안대로577번길 12 1층 (봉명동)',
        tel: '042-825-0409',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.35199073732101 127.33994987007843)',
          4326
        ),
        naver_spot_id: 'k8970899',
        review_count: 0,
        review_score: null,
      },
      {
        name: '만강',
        address: '강원특별자치도 춘천시 동내면 외솔길19번길 61 2층 (동내면 거두리)',
        tel: '033-262-5900',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.857931147775844 127.7565259227635)',
          4326
        ),
        naver_spot_id: 'k10338456',
        review_count: 0,
        review_score: null,
      },
      {
        name: '리코제이 레스토랑',
        address: '대전 유성구 대덕대로 598 더포엠2 1층 (도룡동)',
        tel: '010-5797-1153',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.38642429738327 127.37897075779439)',
          4326
        ),
        naver_spot_id: 'k1659320608',
        review_count: 0,
        review_score: null,
      },
      {
        name: '르비엣',
        address: '세종특별자치시 호려울로 29 세종시드니 2층 201호 (보람동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.47791040799546 127.29024069194058)',
          4326
        ),
        naver_spot_id: 'k1706344434',
        review_count: 0,
        review_score: null,
      },
      {
        name: '루하테이블 도안호수공원점',
        address: '대전 유성구 원신흥로55번길 6-34 1층 (원신흥동)',
        tel: '042-721-5071',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.338684999053164 127.34399553715163)',
          4326
        ),
        naver_spot_id: 'k1633887187',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라모스버거',
        address: '강원특별자치도 춘천시 옛경춘로 835 옛경춘로 835 (삼천동)',
        tel: '033-252-0006',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.871829939439024 127.70797896387698)',
          4326
        ),
        naver_spot_id: 'k24961649',
        review_count: 0,
        review_score: null,
      },
      {
        name: '디앨리스',
        address: '세종특별자치시 어울누리로 67 나릿재마을2단지 상가 근린생활시설동 46층 S4601호 (나성동)',
        tel: '044-866-2243',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.488334606849776 127.26726296440543)',
          4326
        ),
        naver_spot_id: 'k126351202',
        review_count: 0,
        review_score: null,
      },
      {
        name: '동원칼국수',
        address: '대전 서구 청사서로54번길 11 (월평동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.36270341773259 127.3773403824117)',
          4326
        ),
        naver_spot_id: 'k21338886',
        review_count: 0,
        review_score: null,
      },
      {
        name: '도어블',
        address: '대전 중구 대흥로 117 1층 (대흥동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.32358307547581 127.42520805284623)',
          4326
        ),
        naver_spot_id: 'k1520039499',
        review_count: 0,
        review_score: null,
      },
      {
        name: '더한다이닝',
        address: '대전 유성구 원신흥로40번길 81 지하 (원신흥동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.338002523871864 127.34440689221168)',
          4326
        ),
        naver_spot_id: 'k877544890',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대황하',
        address: '충남 아산시 순천향로 399-4 1층 (기산동)',
        tel: '041-547-8880',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.75799878417881 126.96997747957421)',
          4326
        ),
        naver_spot_id: 'k993056601',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대추나무집 본점',
        address: '충북 청주시 청원구 사천로18번길 5 (사천동)',
        tel: '043-217-8866',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.67726119165972 127.4806930926793)',
          4326
        ),
        naver_spot_id: 'k21346457',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대연각',
        address: '대전 유성구 엑스포로539번길 209 (탑립동)',
        tel: '042-936-9200',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.40884266726895 127.3953656234871)',
          4326
        ),
        naver_spot_id: 'k11891867',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대선칼국수',
        address: '대전 서구 둔산중로40번길 28 오성빌딩 2층 (둔산동)',
        tel: '042-471-0316',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.34996903725869 127.38827662078737)',
          4326
        ),
        naver_spot_id: 'k7825433',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대박집',
        address: '충북 옥천군 옥천읍 성왕로 1250 (옥천읍 죽향리)',
        tel: '043-733-5788',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.315424573510036 127.57682683508142)',
          4326
        ),
        naver_spot_id: 'k7825176',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대동면옥 본점',
        address: '강원특별자치도 강릉시 주문진읍 연주로 438 1층 (주문진읍 주문리)',
        tel: '033-662-0076',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.891195282704516 128.82469175333668)',
          4326
        ),
        naver_spot_id: 'k8455368',
        review_count: 0,
        review_score: null,
      },
      {
        name: '중화요리당조',
        address: '충북 청주시 상당구 상당로 40-8 (서운동)',
        tel: '043-256-1780',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.631815697433744 127.49127830026565)',
          4326
        ),
        naver_spot_id: 'k7814957',
        review_count: 0,
        review_score: null,
      },
      {
        name: '뇨끼온떨스데이',
        address: '세종특별자치시 나성북1로 51 802동 1층 124호 (나성동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.49172521047722 127.26136395889193)',
          4326
        ),
        naver_spot_id: 'k1228313470',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나루터식당',
        address: '충남 부여군 부여읍 나루터로 37 (부여읍 구아리)',
        tel: '041-835-3155',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.28567273690519 126.90914251171395)',
          4326
        ),
        naver_spot_id: 'k11017612',
        review_count: 0,
        review_score: null,
      },
      {
        name: '금학칼국수분식',
        address: '강원특별자치도 강릉시 대학길 12-6 (금학동)',
        tel: '033-646-0175',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.754418819955866 128.8963283465114)',
          4326
        ),
        naver_spot_id: 'k8793742',
        review_count: 0,
        review_score: null,
      },
      {
        name: '금성삼계탕',
        address: '대전 동구 선화로196번길 44 1층 (중동)',
        tel: '042-254-3422',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.332109920143346 127.42876499820414)',
          4326
        ),
        naver_spot_id: 'k10212613',
        review_count: 0,
        review_score: null,
      },
      {
        name: '금산관광농원',
        address: '충남 금산군 제원면 금강로 286-8 1층 (제원면 저곡리)',
        tel: '041-754-8388',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.11005579205284 127.56601441996524)',
          4326
        ),
        naver_spot_id: 'k8807982',
        review_count: 0,
        review_score: null,
      },
      {
        name: '옥천금강올갱이',
        address: '충북 옥천군 옥천읍 옥천로 1491 (옥천읍 삼양리)',
        tel: '043-731-4880',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.3096539262947 127.5615880070921)',
          4326
        ),
        naver_spot_id: 'k8689426',
        review_count: 0,
        review_score: null,
      },
      {
        name: '그린볼',
        address: '강원특별자치도 강릉시 산양큰길22번길 30 1층 (포남동)',
        tel: '010-3049-3663',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.77875224017188 128.91747937158596)',
          4326
        ),
        naver_spot_id: 'k279012480',
        review_count: 0,
        review_score: null,
      },
      {
        name: '광천식당',
        address: '대전 중구 대종로505번길 29 1-2층 (선화동)',
        tel: '042-226-4751',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.3286714374113 127.42359629650744)',
          4326
        ),
        naver_spot_id: 'k8209640',
        review_count: 0,
        review_score: null,
      },
      {
        name: '공원당 본점',
        address: '충북 청주시 상당구 상당로55번길 40-2 (남문로2가)',
        tel: '043-255-3894',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.63308827936598 127.48860297023968)',
          4326
        ),
        naver_spot_id: 'k9652315',
        review_count: 0,
        review_score: null,
      },
      {
        name: '감나무집',
        address: '충북 충주시 수안보면 미륵송계로 339-1 1-2층 (수안보면 사문리)',
        tel: '043-846-0608',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.83909124075389 128.04169179166632)',
          4326
        ),
        naver_spot_id: 'k11891748',
        review_count: 0,
        review_score: null,
      },
      {
        name: '가리산막국수',
        address: '강원특별자치도 홍천군 두촌면 가리산길23번길 7 1층 (두촌면 역내리)',
        tel: '033-435-2704',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.83812180372943 128.01391937553643)',
          4326
        ),
        naver_spot_id: 'k11042533',
        review_count: 0,
        review_score: null,
      },
      {
        name: '원조숯불닭불고기집',
        address: '강원특별자치도 춘천시 낙원길 28-4 (중앙로2가)',
        tel: '033-257-5326',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.878751404573975 127.72535851651641)',
          4326
        ),
        naver_spot_id: 'k8475106',
        review_count: 0,
        review_score: null,
      },
      {
        name: '우성닭갈비 본점',
        address: '강원특별자치도 춘천시 동면 만천양지길 87 (동면 만천리)',
        tel: '033-242-3833',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.88731061580064 127.76347880273633)',
          4326
        ),
        naver_spot_id: 'k1656759700',
        review_count: 0,
        review_score: null,
      },
      {
        name: '양지말화로구이',
        address: '강원특별자치도 홍천군 홍천읍 양지말길 17-4 (홍천읍 하오안리)',
        tel: '033-435-7533',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.6595006083027 127.83131259852674)',
          4326
        ),
        naver_spot_id: 'k7992897',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소복갈비',
        address: '충남 예산군 예산읍 천변로195번길 9 (예산읍 예산리)',
        tel: '041-335-2401',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.679571778436795 126.85022792203993)',
          4326
        ),
        naver_spot_id: 'k7959806',
        review_count: 0,
        review_score: null,
      },
      {
        name: '샘밭막국수 본점',
        address: '강원특별자치도 춘천시 신북읍 신샘밭로 644 (신북읍 천전리)',
        tel: '033-242-1712',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.929456171878684 127.78099845376397)',
          4326
        ),
        naver_spot_id: 'k11148226',
        review_count: 0,
        review_score: null,
      },
      {
        name: '납작식당',
        address: '강원특별자치도 평창군 대관령면 올림픽로 35 1층 (대관령면 횡계리)',
        tel: '033-335-5477',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.67554810108251 128.70070895482263)',
          4326
        ),
        naver_spot_id: 'k613532480',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강릉풍년갈비',
        address: '강원특별자치도 강릉시 강릉대로587번길 10-5 1층 (초당동)',
        tel: '033-651-9245',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.78511122676199 128.91930545271464)',
          4326
        ),
        naver_spot_id: 'k380643819',
        review_count: 0,
        review_score: null,
      },
      {
        name: '태백한우골실비식당',
        address: '강원특별자치도 태백시 대학길 35 (황지동)',
        tel: '033-554-4599',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.15873130028863 128.98252103745347)',
          4326
        ),
        naver_spot_id: 'k9549720',
        review_count: 0,
        review_score: null,
      },
      {
        name: '쯩라이',
        address: '강원특별자치도 강릉시 사임당로 131 유천S클래스 2층 203호 (홍제동)',
        tel: '033-641-9716',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.75646173823727 128.8656455369439)',
          4326
        ),
        naver_spot_id: 'k1892890142',
        review_count: 0,
        review_score: null,
      },
      {
        name: '우미닭갈비 본점',
        address: '강원특별자치도 춘천시 금강로62번길 4 (조양동)',
        tel: '033-253-2428',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.879549210042825 127.72805338595116)',
          4326
        ),
        naver_spot_id: 'k8021178',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서산회관',
        address: '충남 서천군 서면 서인로 320 (서면 마량리)',
        tel: '041-951-7677',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.14722664761413 126.50605883177383)',
          4326
        ),
        naver_spot_id: 'k8365828',
        review_count: 0,
        review_score: null,
      },
      {
        name: '산토리니',
        address: '강원특별자치도 춘천시 동면 순환대로 1154-97 (동면 장학리)',
        tel: '033-242-3010',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.89145249942764 127.77651329304513)',
          4326
        ),
        naver_spot_id: 'k8062956',
        review_count: 0,
        review_score: null,
      },
      {
        name: '부일막국수',
        address: '강원특별자치도 삼척시 새천년도로 596 1층 (갈천동)',
        tel: '033-572-1277',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.46709532867879 129.16379947922093)',
          4326
        ),
        naver_spot_id: 'k27385515',
        review_count: 0,
        review_score: null,
      },
      {
        name: '두일막국수',
        address: '강원특별자치도 평창군 진부면 방아다리로 324 (진부면 두일리)',
        tel: '033-335-8414',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.68550625323177 128.56176785088172)',
          4326
        ),
        naver_spot_id: 'k21342735',
        review_count: 0,
        review_score: null,
      },
      {
        name: '덕취원',
        address: '강원특별자치도 동해시 대동로 118 1층 (구미동)',
        tel: '033-521-4054',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.48248668315932 129.12722884087162)',
          4326
        ),
        naver_spot_id: 'k11842365',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대관령숯불회관',
        address: '강원특별자치도 평창군 대관령면 횡계2길 3 1층 (대관령면 횡계리)',
        tel: '033-335-0020',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.67259014836218 128.70889697982625)',
          4326
        ),
        naver_spot_id: 'k7815338',
        review_count: 0,
        review_score: null,
      },
      {
        name: '다우등심',
        address: '강원특별자치도 춘천시 스포츠타운길 399 1층 (삼천동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.871641092561646 127.70280821075394)',
          4326
        ),
        naver_spot_id: 'k8287114',
        review_count: 0,
        review_score: null,
      },
      {
        name: '홍천한우애',
        address: '강원특별자치도 홍천군 홍천읍 양지말길 12 1층 (홍천읍 상오안리)',
        tel: '033-432-9279',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.65845526869921 127.83032180114782)',
          4326
        ),
        naver_spot_id: 'k26875594',
        review_count: 0,
        review_score: null,
      },
      {
        name: '파머스키친',
        address: '강원특별자치도 양양군 현남면 동산큰길 44-39 1층 (현남면 동산리)',
        tel: '033-671-0955',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.980390527985335 128.76215048935353)',
          4326
        ),
        naver_spot_id: 'k1447764115',
        review_count: 0,
        review_score: null,
      },
      {
        name: '알로하웨이브',
        address: '강원특별자치도 양양군 현남면 새나루길 43 (현남면 시변리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.972165590178726 128.76085224110463)',
          4326
        ),
        naver_spot_id: 'k904887408',
        review_count: 0,
        review_score: null,
      },
      {
        name: '미트컬쳐',
        address: '강원특별자치도 강릉시 경강로 2629 1층 (견소동)',
        tel: '033-921-5439',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.7721204592069 128.9467963745221)',
          4326
        ),
        naver_spot_id: 'k1377594871',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라꼬시나 바이이성용',
        address: '강원특별자치도 강릉시 난설헌로 228-13 1층 (초당동)',
        tel: '033-652-1006',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.79144229721147 128.9146561741237)',
          4326
        ),
        naver_spot_id: 'k2101022057',
        review_count: 0,
        review_score: null,
      },
      {
        name: '기와집갈비',
        address: '강원특별자치도 태백시 짐대배기2길 4 기와집갈비 (황지동)',
        tel: '0507-1403-6645',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.1558019309447 128.98851806547228)',
          4326
        ),
        naver_spot_id: 'k18431680',
        review_count: 0,
        review_score: null,
      },
      {
        name: '1.5닭갈비',
        address: '강원특별자치도 춘천시 후만로 77 1층 (후평동)',
        tel: '033-253-8635',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.87635351151712 127.75313173828496)',
          4326
        ),
        naver_spot_id: 'k46094792',
        review_count: 0,
        review_score: null,
      },
      {
        name: '보테가',
        address: '충북 청주시 흥덕구 가로수로1164번길 41-20 호텔 뮤제오 2층 (강서동)',
        tel: '043-231-3205',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.62541275395409 127.42808982482993)',
          4326
        ),
        naver_spot_id: 'k1183568476',
        review_count: 0,
        review_score: null,
      },
      {
        name: '피제리아 지알로',
        address: '세종특별자치시 시청대로 137 리버피크닉 2층 (보람동)',
        tel: '044-865-6641',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.47999504244273 127.28678027664216)',
          4326
        ),
        naver_spot_id: 'k874047685',
        review_count: 0,
        review_score: null,
      },
      {
        name: '르비프',
        address: '세종특별자치시 시청대로 167 세종드림빌딩 3층 (보람동)',
        tel: '044-868-2825',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.481267472222775 127.28976667550766)',
          4326
        ),
        naver_spot_id: 'k1003278526',
        review_count: 0,
        review_score: null,
      },
      {
        name: '뜨라또리아 일 페노메논',
        address: '세종특별자치시 법원2로 12 거북선1 112,113호 (소담동)',
        tel: '044-865-6631',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.48636289264312 127.30343188121513)',
          4326
        ),
        naver_spot_id: 'k209573107',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나루터장어',
        address: '대전 대덕구 대청로 264 (용호동)',
        tel: '042-932-2404',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.44839026162063 127.45386768115803)',
          4326
        ),
        naver_spot_id: 'k8877304',
        review_count: 0,
        review_score: null,
      },
      {
        name: '띠울석갈비 본점',
        address: '대전 대덕구 신탄진로 209 (신대동)',
        tel: '042-627-4242',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.39903774349952 127.42279623653472)',
          4326
        ),
        naver_spot_id: 'k8939690',
        review_count: 0,
        review_score: null,
      },
      {
        name: '조기종의향미각 본점',
        address: '대전 대덕구 쌍청당로 14 1층 (중리동)',
        tel: '042-626-8252',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.36327404501746 127.43531813416078)',
          4326
        ),
        naver_spot_id: 'k17192409',
        review_count: 0,
        review_score: null,
      },
      {
        name: '인동왕만두',
        address: '대전 동구 대전로 697 1층 (인동)',
        tel: '042-285-5060',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.32241508860262 127.4372156037271)',
          4326
        ),
        naver_spot_id: 'k11892266',
        review_count: 0,
        review_score: null,
      },
      {
        name: '별난집',
        address: '대전 동구 중앙로193번길 8 1층 (중동)',
        tel: '042-252-7761',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.33093501911655 127.43070540658641)',
          4326
        ),
        naver_spot_id: 'k8365404',
        review_count: 0,
        review_score: null,
      },
      {
        name: '태화장',
        address: '대전 동구 중앙로203번길 78 1층 (정동)',
        tel: '042-256-2407',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.33383444416547 127.42935807845156)',
          4326
        ),
        naver_spot_id: 'k10033021',
        review_count: 0,
        review_score: null,
      },
      {
        name: '케이브파스타바',
        address: '대전 서구 갈마역로25번길 9-9 1층 (갈마동)',
        tel: '0507-1384-3419',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.35237684461507 127.37361858491471)',
          4326
        ),
        naver_spot_id: 'k873847269',
        review_count: 0,
        review_score: null,
      },
      {
        name: '트리니티비스트로',
        address: '대전 서구 계룡로583번길 60 1층 (탄방동)',
        tel: '070-8777-4631',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.34370783985296 127.39043776979959)',
          4326
        ),
        naver_spot_id: 'k403606065',
        review_count: 0,
        review_score: null,
      },
      {
        name: '인디 둔산점',
        address: '대전 서구 대덕대로 246 B동 102호 (둔산동)',
        tel: '042-471-7052',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.354735885224756 127.37998021439579)',
          4326
        ),
        naver_spot_id: 'k1837356767',
        review_count: 0,
        review_score: null,
      },
      {
        name: '누오보나폴리 궁동점',
        address: '대전 유성구 농대로 15 3층 (궁동)',
        tel: '042-322-9582',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.36195230004252 127.35301152223353)',
          4326
        ),
        naver_spot_id: 'k17469780',
        review_count: 0,
        review_score: null,
      },
      {
        name: '백마강참숯민물장어 유성점',
        address: '대전 유성구 도안대로567번길 3 (봉명동)',
        tel: '042-825-1881',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.350768871845865 127.33990445235713)',
          4326
        ),
        naver_spot_id: 'k7893813',
        review_count: 0,
        review_score: null,
      },
      {
        name: '방동가든',
        address: '대전 유성구 성북로 58 1-2층 (방동)',
        tel: '042-544-3000',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.28769921426926 127.30711795596909)',
          4326
        ),
        naver_spot_id: 'k7888718',
        review_count: 0,
        review_score: null,
      },
      {
        name: '랑골로',
        address: '대전 유성구 엑스포로151번길 19 C동 D102~D103호 (도룡동)',
        tel: '070-8826-1111',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.37586151588693 127.39596980625848)',
          4326
        ),
        naver_spot_id: 'k1438566973',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한우김삿갓',
        address: '대전 유성구 유성대로1184번길 11-27 3층 (신성동)',
        tel: '042-863-6076',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.39501769773792 127.35314314769799)',
          4326
        ),
        naver_spot_id: 'k21437937',
        review_count: 0,
        review_score: null,
      },
      {
        name: '트레비',
        address: '대전 유성구 유성대로1689번길 8-8 (전민동)',
        tel: '042-862-9300',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.399957481140085 127.3974430805084)',
          4326
        ),
        naver_spot_id: 'k8112267',
        review_count: 0,
        review_score: null,
      },
      {
        name: '피제리아다알리',
        address: '대전 유성구 지족로349번길 40-5 1층 (지족동)',
        tel: '042-825-8308',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.38766872807311 127.31680617473356)',
          4326
        ),
        naver_spot_id: 'k21853998',
        review_count: 0,
        review_score: null,
      },
      {
        name: '바질리코',
        address: '대전 유성구 한밭대로313번길 10 (장대동)',
        tel: '042-825-2825',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.365591459024714 127.33606010708925)',
          4326
        ),
        naver_spot_id: 'k11891985',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한영식당',
        address: '대전 중구 계룡로874번길 6 1층 (오류동)',
        tel: '042-533-2644',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.323420856195284 127.41077872199683)',
          4326
        ),
        naver_spot_id: 'k9589060',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대전갈비집',
        address: '대전 중구 대전천서로 419-8 (대흥동)',
        tel: '042-254-0758',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.32660179878791 127.43080629189542)',
          4326
        ),
        naver_spot_id: 'k11006001',
        review_count: 0,
        review_score: null,
      },
      {
        name: '까우',
        address: '충남 공주시 번영3로 58 1층 (신관동)',
        tel: '010-9399-9358',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.471722406819154 127.13628985627079)',
          4326
        ),
        naver_spot_id: 'k797932040',
        review_count: 0,
        review_score: null,
      },
      {
        name: '큰고개정육점',
        address: '충남 아산시 염치읍 염성길 107 (염치읍 염성리)',
        tel: '041-541-3391',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.81567433262405 126.97245199853927)',
          4326
        ),
        naver_spot_id: 'k729941412',
        review_count: 0,
        review_score: null,
      },
      {
        name: '염치정육점식당',
        address: '충남 아산시 염치읍 염성길 110 (염치읍 염성리)',
        tel: '041-542-2768',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.81611050934332 126.97262219699162)',
          4326
        ),
        naver_spot_id: 'k16599913',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나정식당',
        address: '충남 천안시 동남구 원성2교길 32 1층 (원성동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.80336676189719 127.15614903212985)',
          4326
        ),
        naver_spot_id: 'k11891820',
        review_count: 0,
        review_score: null,
      },
      {
        name: '기린더매운갈비찜 본점',
        address: '충남 천안시 서북구 불당16길 34-6 1층 (불당동)',
        tel: '041-523-9498',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.80099167451589 127.10706931117981)',
          4326
        ),
        naver_spot_id: 'k21559095',
        review_count: 0,
        review_score: null,
      },
      {
        name: '도프',
        address: '충남 천안시 서북구 불당32길 28 1층 (불당동)',
        tel: '041-568-1692',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.80908859747339 127.1055744280296)',
          4326
        ),
        naver_spot_id: 'k1737039720',
        review_count: 0,
        review_score: null,
      },
      {
        name: '동순원 성환본점',
        address: '충남 천안시 서북구 성환읍 성환중앙로 33 1층 (성환읍 성환리)',
        tel: '041-581-2070',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.916991470158315 127.12981049133539)',
          4326
        ),
        naver_spot_id: 'k9780807',
        review_count: 0,
        review_score: null,
      },
      {
        name: '진미각 본점',
        address: '충남 태안군 태안읍 원이로 352 1층 (태안읍 삭선리)',
        tel: '041-672-9888',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.78579724896997 126.27390354745233)',
          4326
        ),
        naver_spot_id: 'k1027108400',
        review_count: 0,
        review_score: null,
      },
      {
        name: '카우보이그릴',
        address: '충북 제천시 청풍면 학현소야로 415-22 (청풍면 학현리)',
        tel: '043-647-3510',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.01354939586699 128.22577464984477)',
          4326
        ),
        naver_spot_id: 'k129205227',
        review_count: 0,
        review_score: null,
      },
      {
        name: '알라팔라',
        address: '충북 진천군 덕산읍 대월1길 27-2 1층 (덕산읍 두촌리)',
        tel: '043-753-8444',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.89992796649405 127.536277077246)',
          4326
        ),
        naver_spot_id: 'k2100275007',
        review_count: 0,
        review_score: null,
      },
      {
        name: '무심천드래곤',
        address: '충북 청주시 상당구 상당로121번길 34 1층 (북문로2가)',
        tel: '043-232-0939',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.63922977650267 127.48786797379447)',
          4326
        ),
        naver_spot_id: 'k1872404464',
        review_count: 0,
        review_score: null,
      },
      {
        name: '더스프링',
        address: '충북 청주시 서원구 2순환로1814번길 56 1층 더스프링 (장성동)',
        tel: '043-294-5677',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.59118974994298 127.4778120267912)',
          4326
        ),
        naver_spot_id: 'k25973519',
        review_count: 0,
        review_score: null,
      },
      {
        name: '타볼라',
        address: '충북 청주시 서원구 사운로46번길 21 1-2층 (사직동)',
        tel: '010-8795-5082',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.633386016474965 127.4809839388026)',
          4326
        ),
        naver_spot_id: 'k213242053',
        review_count: 0,
        review_score: null,
      },
      {
        name: '푸에고네그로',
        address: '충북 청주시 청원구 상당로 314 문화제조창 본관 1층 (내덕동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.65674697025274 127.49067165446438)',
          4326
        ),
        naver_spot_id: 'k90097317',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대명도리탕',
        address: '충북 청주시 흥덕구 백봉로 188-1 1층 (봉명동)',
        tel: '043-268-2560',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.64917296341873 127.45645668220205)',
          4326
        ),
        naver_spot_id: 'k16386830',
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

    const existingImages_k11161843 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11161843'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11161843[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3e8929721461c8d89ae3c08c70873b2e0e73fe37?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7f626f1aa90698f046c332dc3a41383a8078d642?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f7d401fa3411dfc6704911b4b0f50b2514f579d4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhsbL5XLe_GAQ1qpIUh9PSjBLNvSmbvK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTAg/MDAxNzU2MjcxNzQwMTMz.YPngXSvanUeJkdpXIfvgFlY-x0QFXEoRX60Rr8tMIn0g.EszUzxg8XofB_fE_7bvyiU5v2W0G1g12h6YWqhQGALEg.JPEG/SE-46A7BBE4-4BDF-4507-AB44-AF560A3DA335.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMTU2/MDAxNzUzODg0NTU5MDQw.yPcC4t06gQAc3IfjX4EmzoaD8KKFAZ2_BCf0by1OscYg.I2VStFXreLyzVZTWa3mkB0Hin0wI48hRHEo_dx4a3Wgg.JPEG/IMG%EF%BC%BF7651.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMTg5/MDAxNzUzODg0NTU4OTg3.Ybwc6fG1TXc23A-ocDKDVABPD0bpULhTKYPPo4kGSt0g.i7bGbj32DZmAo6oB3Mv0fKOVTPtrVRrondf3zSuXwzYg.JPEG/IMG%EF%BC%BF7649.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfNzMg/MDAxNzUzODg0NTU5MTAx.l4LNPRoWf1IU2yml3EjFLTM_quljiv8j8Nt82Y2MuaQg.rNY-PcyFGir4k_r2xdtBtu14g9zmwb-R2b5MZ9nwl1Qg.JPEG/IMG%EF%BC%BF7653.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMzgg/MDAxNzUzODg0NTU4OTQ4.UFtwvvfq7Eo93n_tjbjtS9tkligNl5fVrD9qvtjQFTog.CvHaQqm0sm__pKQ2sVPIVt2lKNWnTgfhSv-VGwYsGwIg.JPEG/IMG%EF%BC%BF7648.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjgy/MDAxNzUzODg0NTU4OTc3.WMmbmnbrcC9ZFtFuf7Q7X1Re1ABkrQxeAJ95rWef7mog.HRT7CyTAvp64R8Ek7un63_eUA35XQFALgp15qpugfCMg.JPEG/IMG%EF%BC%BF7652.jpg?type=w773' }
      ]);
    }

    const existingImages_k25754890 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25754890'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k25754890[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d48aec283741580439bc14db1bcd9a82507a2c50?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/54b42690fc6af665e9a38f1ef0a7e24b86dcfc89?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a499b514625e1d4db3739a18844340d93ef6b2a4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/148a36bc096f461069fd017b5b5dd72055aaee1d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fdc044a114d10be610eee2b6c727aea680561bf0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1542a26e3d75fded4994ed0fe67d79ce50c32b7f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9dcef197699e7ee78974f3751eceac14278e43da?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1447f8b536967ca6a310c0b6f556c05502180fbe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aaeffeba6c3c8f8467876cd350b4e6144f66fbae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f5928405d513dccea1f672e9c80a085e4bd7a457?original' }
      ]);
    }

    const existingImages_k12473363 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12473363'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12473363[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed79e259adce8e2acfd0a71d5ba36bffc4c8b62a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6f383f1eb19c439b213ae448a4a2007ea28c4fe0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/31cc34c3473aa011dcd414e2ec31ed5af7d73c8f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/398609fd16decb22edcf0ef6c54f7ba7284b6180?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7685bde7df14548b44baa99fabdc555845409a6a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhcCcr6UG_jxB0DUnYeF87EpdQSP5jyk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMjA2/MDAxNzU2MjM1MTY5NzYw.w4YupH2I8BMEU3fYD7h--LzNjF6Nb4grY_xxCMSF65Eg.edDUi_Luikcr33Iq_-nb5dOR2BJMFxSJmXgu7mdNhLQg.JPEG/%EF%BC%BFDSC7501.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTg1/MDAxNzU2MjM1MTY5ODk2.1_w1r6VsLRsGnSck5_eNSbBYfckzRiCG-jvqj3J3VfUg.SgPLy3LFG-hK3J_zlS1AyrO4V8mrg0W3G6gDaeAuABAg.JPEG/%EF%BC%BFDSC7496.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMjAz/MDAxNzU2MjM1MTY5ODg0.rlPUvnKva-WRx9QXJYrhCfAGxAQScZ8IoK0OD6fBAXEg.tp4BvMv6z9ujvacU2AhLLI-1z_LlanUaBzEs-qxTMwYg.JPEG/%EF%BC%BFDSC7482.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTEw/MDAxNzU2NTU1MTk1NTM5.24FGKTp1UWE-cxsODhO6vbOWrFAXBnu52xZapYB_nyog.I76FO0PerPFJKjzLCpIb9feMRiPmDG7R_ccmvHm3BVUg.JPEG/900%EF%BC%BF20250830%EF%BC%BF125335.jpg?type=w773' }
      ]);
    }

    const existingImages_k739219512 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k739219512'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k739219512[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E1399D309E144731BB859786252202C6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjg0/MDAxNzU2OTU2OTY0NDA4.RhnJ00Hy1HrveHMjTq6KZ0j25aIW99QcbRnUN6IvFAkg.quqBRTsaVrkFCPj7iHjB-FW8nSaiwfjMtcEGnp1K46sg.JPEG/900%EF%BC%BF20250724%EF%BC%BF140116.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjY1/MDAxNzU2OTU2OTY2ODUw.bjSRL2GPzF0oAmEBJpYluEYoYyMPVZTEK72549PIktUg.FlIDIouDOAX_rttNxCyM1RgQ6p-2IV4QO-aTph6rFkIg.JPEG/900%EF%BC%BF20250724%EF%BC%BF144422.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNTUg/MDAxNzU2OTU3MDMwNDY3.SEsGooLmwnkkdWMR89iSaRvmIvHO_O4kVg_fRA4F9csg.atfatVBg7IUIgrratUQkfZyg2v2JOPYNmX8LhwtbmFAg.JPEG/900%EF%BC%BF20250724%EF%BC%BF140324.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjE5/MDAxNzU2OTU2OTQyMTEz.9FSW77u-u3WQWhMJ5wRsXtIp9D5f6aho-FwCO3VI5ekg.i9c8ZgTtRdcWDKXyxG6SRcj0smroElO6irhhHDtvaRAg.JPEG/900%EF%BC%BF20250724%EF%BC%BF140311.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTIw/MDAxNzU2OTU3MTYyNzM0.w0FKeyramDOb69mzyBK8hij5o_X06u8mrRH7vjt_BPcg.9fZAuDu3Obg-uBQtU_OQmaFTUTMG5jSo6JZWNIE4L7Ag.JPEG/900%EF%BC%BF20250724%EF%BC%BF142112.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTk5/MDAxNzU2OTU2OTY1NzY4.ths0Hpevl4InbuM10eqCZB8K-fjXyxYUTsMyU1rhWGYg.hh2xH0Ve5-y65VyhYmdtx5cGU0eA_5tYFQJ_PcGIH_wg.JPEG/900%EF%BC%BF20250724%EF%BC%BF140355.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNTQg/MDAxNzU2OTU2OTQxMzU0.rwJ44Y10rZnnXxJXCLgx_WIpfT6vWlA8HFJ4KMpCRyAg.2sjS7XcqFaJWrUKXzn8i8Tlc5jEB0hoTtikVz3U-a0Ig.JPEG/900%EF%BC%BF20250724%EF%BC%BF140304.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjgg/MDAxNzU2OTU2OTY4MTkz.Rog-r02ROWqiEuRuPyaK9DjcInFXzkACMeOW2--eWMUg.JT2Yu5Ywl5XnrMqfwrF4o6_cJ0AXmH9TUXexxSOiPSwg.JPEG/900%EF%BC%BF20250724%EF%BC%BF144419.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfNzEg/MDAxNzU2ODE3ODIyMTUx.ttaJXZMjAgcpcmi7Gmuol_CaNuhhL0xYQ0Xsb1nO5fEg.Wyomw5xeJ-QllUzaaOxA6NfljnwtzL1mEJKEVAFgc4sg.PNG/SE-07c58e9c-7161-4619-8f01-cd9155d752ee.png?type=w773' }
      ]);
    }

    const existingImages_k8670704 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8670704'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8670704[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f68754f48001014714bb74cb29e11d8aedf9a983?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db1b7dc2fd155f9eaa1126cd564ced3ca9976734?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6dbe6f5da497faba7bcd97932eecdf5c0608d0f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7f0c1da898aea6b7c8c57a27590553f4ffd2254e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f27222bf79a46f7682138150d91e2c2a31c080e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60171420fc9629413e27c058f820514f26c71a0b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d7a15ec2097209fa936944b4360d0b5cfc8413f1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a886b0a7334840bdf9f3746c15a9330781c4d905?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9f688405d0b6675cf7a263f1fa2386a3d443184c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/791fe19f4f44f9652caae5e681706be77e4a6095?original' }
      ]);
    }

    const existingImages_k293015499 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k293015499'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k293015499[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/739de39a4c5d8dc34fc4936cedbffeefeab43b20?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/57760c18de68496d7a790449d8ba746508f41ea0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/23e33e448f3c27a49387ba258b0c74c6f807c567?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/99616b5cb515d8c064af7a537c872a404d76caee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/75a2805793f394be2972f04c8d86d2fb73a9beb1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ba00a8bcd166e0e0e2d6438600f44831a944856e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a28b66a33019f92ae19dc3eec55232831cf6219c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5101580b95973aad817b72cfd5f82eb48bb76fc1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3b531e33dc3e7470ddb48dfd3d6b0be757b276b6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/924dbf43cd5677d1232310a4d7e264f60693529f?original' }
      ]);
    }

    const existingImages_k13496738 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13496738'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13496738[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a2f4d19cfe39ca893f2fd322223fcfdbad1b0df0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e53264df5725fa1c34327719fda15d71add2cff1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c24ac7ef924f12b29cb0d13840ed8f003c2d2aa8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7f067b84adc59874e1621b50c353ff2068dc8748?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1055416542b99e6344bce15646f7fa6afd2d9e6d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6a662d4e74cab79601a0447f031bbb89de5de698?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/034892519367a79c590fd79b0a826a8fd52d0f44?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b13b5f43403b90cf85b1c5ae36116cdd748eabee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7999879d9afc8270f13be34c691dab90843ffda6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7d0a43f55937fd30b7f2bb2b3dd3b61314277120?original' }
      ]);
    }

    const existingImages_k10916090 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10916090'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10916090[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/C2B6F6C8691648758239ABB20314759E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9eaef2a7792e516e7f598166f461ef55e394279b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27e1fd39c47ec3b071bf446b67a75bcb8892b76c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5013380bf7b7e8fd219a5dfd4c7f43326f0e9bb2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/234db363601554ef4d5d3df1943ea59f3c73e4ba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/72dd32ab49c4627db2f36f1737ec94c5fc5645aa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b2a33322f42847256b3afa9d288ce0b8c0084236?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqiKt5xxib_sDriT8vmXJFBTLuPKsLtlK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqiKAJ9jLo_3dDKCLJKfVlMR9DWsToJIk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqiK174uRk_udZoEABhoekCtEBKk8bBY1_img.jpg' }
      ]);
    }

    const existingImages_k8585683 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8585683'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8585683[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1b40772cb51d44b1c669f0b4144af114a3eaa9d4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMTgy/MDAxNzUzNDA4Mzk1MTk2.7dAN8b3M1Zvpy-Xx2u2VNwrjJO2JkE2h5bNrf2oX8nUg.WNhO_trJBfZv_kgMUTjvkT4rnTiMRDFngyHeU0CIgfwg.JPEG/SE-86a261d6-74d9-4e60-9854-044c42908893.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMjAw/MDAxNzUzNDA4Mzk3NTk2.ceJgJFO9KnO-4oDgXBJaUdjUyPRB1TsaOW7oFuO1l8Qg.t0ucNXkJO-ZM6e4t793oKYzubbtmBpzHt6Kwso7zNH0g.JPEG/SE-ca5f8592-e79e-45c5-90b9-481a5b5ae5d0.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfNTAg/MDAxNzUzNDA4NDAzMDkw.nIoFM5RDIrxRb9vwEnZrCOc69sDkdINsAnJAvbCpwekg.nSLDjmJ6HOIU08e2LlGNj5SezprDDQbKals60hhb8FQg.JPEG/SE-dc475c82-33fc-49d1-b840-a14cce978e6c.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMzQg/MDAxNzUzNDA4NDE4MTcw.m5PEKR5mmUE9j4aUK-riS-gRzf0YMHk775dX0iIuGaYg.P6t2qIqYIxqPjNQzTMDAn7o2AbsN8hfhSW6d0m8VtNAg.JPEG/SE-7ee6f951-f7f8-49fd-9352-65b4fcd69d3e.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTVfMTIz/MDAxNzQ0NzA1NzA1NDk3.GlqsfgPROZm0Eu57KoD4XQa3h7egS_BUmPllgclnox0g.hiDNMj_IdH0WTAccw4jRFdnpbOxK0lgvwMAbr0PGCTAg.JPEG/20250404%EF%BC%BF194348.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTVfMjI5/MDAxNzQ0NzA2MjYwNDAx.XjZYX5lnigYv7RmzaPWsAuAbxu0BI7ey24TW4MqnENYg.O8vvTaim4gF5wELXcMC--Aqy7MjCWV_lA6e_J5FNsHsg.JPEG/20250404%EF%BC%BF194407.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTVfMjY2/MDAxNzQ0NzA1NzA5NzI2.a016mYeZtAGRSBx8Abh7kD6Boc_VALDhtbn0dzCRLVsg.VGiOvAKb6KyN_I0GUdqX0QVHE5S8WqLgMyg4H311c0wg.JPEG/20250404%EF%BC%BF194430.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTVfMTU2/MDAxNzQ0NzA1NzExMDYx.5V1hvZl7MEuNQ-W2uxhd3x2L09rkMMcIsFHibC_Wcbog.VeGofQeBa_dnJj7wPSxXL3eZodXosKtM6X_mqUiA1-Qg.JPEG/20250404%EF%BC%BF211318.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTVfMjE4/MDAxNzQ0NzA1NzA2NTk5.E2JCF1hYWnX5rBWcCOctQC5crjJiGNouXh5gTYIgdwMg.9wsbGUeONxkFcuWK8y5R_ISMaII1nLSo0dROQ5ihVhcg.JPEG/20250404%EF%BC%BF211321.jpg?type=w386' }
      ]);
    }

    const existingImages_k659933814 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k659933814'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k659933814[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db0d757f2509a081f0aa2ecfa6921606b05bce57a038d8e0ff862bf7565936e2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/94096b53d70168e50c6b945cb00e5335fe17fab61659f3a6d75cdb5d8dd53891' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4191d52a18e87c1acab6146f813e9a49a950a1baecdbc5ebcf3030414403a218' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/25a1fcd2f9b46989f989365388a9227ba0179e9ae878f6e795f30d14ffc92b2d' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db3bcb8c088a341e5c549e38ad0308ff8e38f09a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1191831119165a197a682558762ab9028e2aa446?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/089e9c5d990e24379ced714cee087e8d30d15c4a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTU5/MDAxNzU2OTU3OTg5NDcx.NM8XpQVq7sytdgNlB0FqV7KoVl51Vtk9jKfcj0G2U9cg.oiMddkLmKB0nySYGCeuL0olItMrzDvqjDr0XIwv6Xr4g.JPEG/IMG%EF%BC%BF4775.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTgw/MDAxNzU2OTU3OTg5MzI5.19DAoYUnGlmEbwehd6KtQiPY6KIv9Z39XBJhJIVVqDwg.VkAPf7sRhy0NiKEnR2jQ-xzIx21MD9kGMhTkjBzNy9sg.JPEG/IMG%EF%BC%BF4782.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMzUg/MDAxNzU2OTU3OTg2ODY0.TgA_Mh2EG4Yp8KMqwWC3RWbujk6BX9SSXq5piO2S43og.h1jiUOSZ1DTWDK7aJJqy-gI0j2opnsh5qWK3XIGNEuAg.JPEG/IMG%EF%BC%BF4742.jpg?type=w466' }
      ]);
    }

    const existingImages_k27069548 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27069548'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27069548[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfJDIY0uT_aymH9bRcczDNy5eYNBt5R0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfHpq4rP0_OuP0Pk7vT3scR8WqoSceak_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfH8o3PV6_89zCnRzrJXd36Z8Q52Bib1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfH7p9Fje_HQKDRcaKZmnz9oulk9Dgok_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfH7RfmB2_7MPGtHs8qnjLhzgpuP8Rzk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMTAy/MDAxNzU1MDYxNTk4Mzgw.klwxmCt8M7q-tSLsC91VglydiQYqr3-Y3pl8zCxU2f4g.Jne8TIbJ-tHN8x4n9t44fM64PFqcRzNJDSi3hSa6ba8g.PNG/20250813_140541_2.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMjIg/MDAxNzU1MDYxNTg4OTgy.ovKPu-TofiNbL1nc73MPdcT77I6e9gr-gft6X9r80dAg.MArCOcUYCiixdaz-s5k_AC6QQOncysz6X616NZING9sg.PNG/20250813_140541_3.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDNfODMg/MDAxNzQ4OTU5MzAwMzcx.eOXnCcwWTwvxHDKniuxK5vZoIbTsMyzVRcHys5cpqN4g.6IQM_rDiUlczztj4wso1RSzcvSIpIkFRwxnpvg6tyLQg.JPEG/SE-f2c1d289-405d-11f0-ac74-97b5d1cb8bee.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDNfMTIx/MDAxNzQ4OTU5MzA1MDk3.f8RcfZG1BaMjZTYqW6StCcfMxxS9cMAq5B4pEVTTDSUg.5jUOt2pO0dU3zdn3xIW5IFCWXH7LyVXsdALHM4s7T8sg.JPEG/SE-f2c30b0a-405d-11f0-ac74-b1febc924b31.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDNfNjcg/MDAxNzQ4OTU5MjU4NDEz.gkLfGnSUJQ3o394Gc7XJhaYoGY85rHgtHXKbXUKZTmUg.goGbsdHbHQvTSZW6bafOqe5aQWSJyuzxqIb8uxZWNeUg.JPEG/SE-f2b1a5de-405d-11f0-ac74-7d4c6b42d54b.jpg?type=w966' }
      ]);
    }

    const existingImages_k1532158905 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1532158905'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1532158905[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/CDF58955C5594980A8F3B3EBD276FBE6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/38dafb3861c65b72135cb83ca939c20a6aa4ea3c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1568735dc8480d521ca5b56e7ab4d7bd4bdbb681?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a0f3bd408949c54046f1d899f26906128ab83bb0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f454631d3a7621a12e57a3a79aa2420a825c826c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d60038742d03eae5577fe957921633507fded544?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6891d2a5d1e0caed4e56a12073bc897fdfcf1a45?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f4b9c221f6c8da643b9f4c33a2d0334ec762806?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6c7c4b8a562c6c699c643aabfb40af3370c1082d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e57adff987c2f69d7191f89a96bce734c31dcbbe?original' }
      ]);
    }

    const existingImages_k1299944133 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1299944133'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1299944133[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CD682E2F972F415198B1CC46E4EF5AF3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0C729C2311714144BB241EFCB9D754DC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/00C7CA714F5145DEB72144F840810BB5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/37B7FF512DC94BEFAF697CA53BA37235' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3A8968DBC52D4E19B26D20739560951C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/16F0DA9AF95F4901BF3C62B01728AC0D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D0CD44CB74BA457483739654C2FB4147' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1EA57FA1383A487A8884F12A4967B60E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5e279a1fbe6546a0751c697f5d5339aa4b245605?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/230719f11005639b3f0dfe657fc256bf6261e4fb?original' }
      ]);
    }

    const existingImages_k2048564896 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2048564896'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2048564896[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a429ecd14c20d00cfb390637f66376d8895f59ad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjAx/MDAxNzU3MDQ5ODc4ODg3.Fw_OuPTFqJ7NdoOBIoRSzgx8RDHS0kRQuWpvx7jBfwcg.mpE4RgRh1xCccm7_tS-vNacSi5Sljd42LOUu3I0xBs0g.JPEG/900%EF%BC%BF20250905%EF%BC%BF133103.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjE1/MDAxNzU3MDQ5ODgyNDYw.rmUw4_vVkJCWO3O2DMbQ3klIUKc2l6MSg1GT-RFx3MMg.yM8fbl0iWVRZi8lBS0GwUjvzvMUAbLAp0Z0u7ZUMe8Yg.JPEG/900%EF%BC%BF20250905%EF%BC%BF133112.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfOTgg/MDAxNzU3MDQ5ODgxMDQ3.JLE-OpmnL-BSkustQZ60soCuLLHwPaZtiutTq-vj08wg.HHIPLr9vInZXFX82kHK3akUWzOOQr5PfxGb6-6WvTxgg.JPEG/900%EF%BC%BF20250905%EF%BC%BF133143.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTE0/MDAxNzU3MDQ5ODc1ODE3.VtfmF_ogElR31PH5_BjlezmjS9lQYQeJ9FMHAIk8yY0g.hAQ2SDZx1yp5vaC9SzpDHsqXrkqwBcekrDe4ideSRxog.JPEG/900%EF%BC%BF20250905%EF%BC%BF133128.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjIz/MDAxNzU3MDQ5ODc1ODY3.DODMMI4U1ucuB5-Gt37XH4La5aJvPMI7z75Y8v42bEYg.d0XPMAVwCYGw_qW6bTpBet2eSx0oGXyVsuyyxUwlsD4g.JPEG/900%EF%BC%BF20250905%EF%BC%BF140740.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjkw/MDAxNzU3MDQ5ODgyMDgx.gQuP810-knqbOh5FEPObQ-HXa-NYN9sqI1-BnBU7ut4g.25McnIvTGQ5otDcOdP1EDMe3W1btDiChzv4Elda5Jvkg.JPEG/900%EF%BC%BF20250905%EF%BC%BF132828.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfNzUg/MDAxNzU2MjgxNjk1NTM4.FHQDPkDLB_QPOMCrO0BXd1fzzpDo5lIVUgylmy8Bg2og.7IrHdCt4DyMW4E4876UtAsoDRamZ7GGbgQy3QFy84WAg.JPEG/output%EF%BC%BF4231530542.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMjU5/MDAxNzU2MjgxMTc3OTcx.86nkuRTf38klatMity1ZgbcjLULIIxX7TvHA5iMiVRAg.Fdeq6Ud8hJjdjjrNaRBTpG4L-gsqxmhZKDzkI3vTsVMg.JPEG/output%EF%BC%BF4040306754.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMjUz/MDAxNzU2MjgxMjE0MDQ0.xw_wOQ-aJjkgp3n_2vn99kQFHaU9bfUS0MwzYGTTRikg.bIwNZRwm1QO05d3e8wcm0RcRPy_h4JHXQHcEHgfWAWUg.JPEG/output%EF%BC%BF371794189.jpg?type=w386' }
      ]);
    }

    const existingImages_k1878980682 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1878980682'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1878980682[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/99D84AF0BEAB47F5AABBD4BCEEAEA650' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/88f29635063a3abf2f3e16c8d7665034d6e2efa3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdc7045aff4a680ddf1f2cbf5f3f4cd7782ff6cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6cadc4958e7c86fca46c66802efc5e1f3e52becf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9cc3d4308a4fcc928a9c35c78d4569d5933f351?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8179cb92b7edc2e83d3fb2f86cf887fa0ab8085d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dede432fa714b9cd2f27155a3619ce8dd24e5fd7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/13e16f3205195a16d0e42e9c7627503270dd4dbf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f811072be1c541cf2e6a6399879b9f01894e82f6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d0dd0eb77cdbbf43f5db5bcf7481917bbb0b8b07?original' }
      ]);
    }

    const existingImages_k17481755 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17481755'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k17481755[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fc0d9dd4aacb25f1a133e2c3193435cee0ea84a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ef3d893afba7343f2fe39f6a8245e34cb071ddd5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e45742d0901980314ce028b5bc06e418c78fb21f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b5ed2cb6b73ea65ddf1792527c28bac1cd691fe9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a20d2de479ed312043fccc16c9b8c778a2c63ea?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5acd98dfc783cef3ecf2cc7ee951409c83719560?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/74489e7be8c7bea996a29393137ff96719bb87ba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e1a7577a6f0b665e57ca07da27043cb8b6c6650e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMTEw/MDAxNzU0ODY2NzQ2NDc1.9Lv7q0GhPD5Qw1TSzIVJ2supPCfWlUXDD7n-5JcD3cUg.pZI5m2k9PTyytUmaAYAaq5DBZG3JTNT2tIXOFWYFn1wg.JPEG/IMG%EF%BC%BF0072.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMTcx/MDAxNzU0ODY4MjAyODQz.QG4tGKtgfWAi-SlrYUn0l8LPJ7pijeqWyXtiu0y6X78g.c6N-BYSarKWzpcFjxydnuQip1koxM1A14NJTXe3SA2sg.JPEG/output%EF%BC%BF1563704289.jpg?type=w966' }
      ]);
    }

    const existingImages_k24388670 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24388670'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k24388670[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4D1B8B57091F4C868BEF367147A712C7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b5963e1f66faff0853ba45e579bf8e3d69d023a7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/24efd6ff061b1e0375433d14fa2d973c5afeaa3e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c1cbd05ef654c2e67d290ee83bc59749b98765e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/371ef003f4fdee43b67fc57f86639d500de7d2c6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTJfMTUg/MDAxNzQxNzYzMDU4Mjc4.8e3lxR1f6tgHkuq1vC9DVow8Pu5_7ShF8zrcpNw8GnQg.BdZo4rsPmUvbxBzrmTwDzgkqek8xSn20qMxipi3RAp4g.JPEG/output_2742303790.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMjNfMTQw/MDAxNzQwMzE5MDQ3ODc0.DNYfsYf0USNPQTWfKJLkndUyrSuhE8SsOFSHJUyglGkg.Cw80Vyu3YYxiVeBZV0_O_XMDOgWZ1vOYKHSZHrKG_p0g.JPEG/IMG_2372.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMjNfMjEz/MDAxNzQwMzE5MDQ5MTY0.1TPhReQb36ADWBw-BPN9DR7VCkBioVqQdq73ri0hCdMg.zylgEBD1ZbIVEaY4JwJQ-MGsFddGBKZUkr1zAxg98_0g.JPEG/IMG_2384.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMjNfMjIw/MDAxNzQwMzE5MDQ3Nzc2.210mqPCRkv47H3stZnRFpg-Ac_aQ2LH2PaERTk1I6Lcg.eQILfVa_iSR317DlkN_S8_T-7_74CUfcOIVakmUxyqgg.JPEG/IMG_2373.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMjNfNDEg/MDAxNzQwMzE5MDQ5MzM3.KbyDT56MCPchCOj1tYujWkW815heSDQMRHD3rMqe-BQg.HbNxlkJhODTpH9fd2mma5wj6IqnjUcnbh0zm7fAvCI4g.JPEG/IMG_2391.jpg?type=w773' }
      ]);
    }

    const existingImages_k12468740 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12468740'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12468740[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e22e7cb1a13d1cb90248f50f1af7c70e9490caa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/56317afdc6f078cf0e7a354adaaa8914e76acd20?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3f72c5d6e230aed7bf807fb34f591c2385df2f7f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/00dc1a939a4df1006c982dbea7a1bf940c54ddcc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/102963ee40e6ea139020df4aff1eb6467c70987c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/997d7ba2e6571038eb080f9ea11d467028a64bf4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/21602a318640968e92d6f9bba357ffe4cd4c13f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e465047912e12d22d67cba59ce26515e792fd51c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d0de5deda54b3e45f4b24f5e364fa3208f1f872a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b4e35c531895409f16ba8f453a6d9bb6c3cb51d?original' }
      ]);
    }

    const existingImages_k10711287 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10711287'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10711287[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B72AE87463814E12982E38C118DB153B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AE4BB46ADB584A3CBF255ECF835BC56E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5C277B96ED934AF99123695100E3C119' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTYx/MDAxNzU2Mjk1NjUxMjkw.gvV2FVPR-EIEVtLTKEWGSFer5JM6bvdaDIoKhRzYHl0g.-wsNxmnkeRrb50lYh3ivlTIu7joLD9LIlPO6LRdEeHEg.JPEG/20241112_133258_IMG_7681.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMjcw/MDAxNzU2Mjk1NjUzMTg1.z4lXkoPlOZSBvsFovMTH-eSlVt5M9ZRV7AwRsdX4F40g.x4iXr6BUJ35lvHZ8aE4wYxMqPrdkDmujG4rE2MxrNlgg.JPEG/20241112_133654_IMG_7688.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfNDQg/MDAxNzU1NjcyMjQ1OTMy.Fl5r5dhdgRwifNJmB-pNYXNFtS-hQDHAijW52lvHY9Mg.iTlZrn57rbKybHR7FgADCHO0aJ1_gZddP9aM0NHZH2Ag.JPEG/IMG_1821.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNzIg/MDAxNzU3MDU0MzQwNTk4.Mo8hvQdMsrjwcQLZC7ywUbFBA24k1LnISKjQDkwk67Ig.u8id5ZsXd2orbFJEO3HN0g45Hfqbgng128NtjgacaCsg.JPEG/SE-3BA7D74E-AF1F-4BC3-80AB-ED99CB432817.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjc4/MDAxNzU3MDUwMzUwNjk5.a7zaArRej7tdFxjR_2MzABaPCmmS067DpOGD7D0XmNQg.oYqGi5lDfXyYs8gznjgBPARuEYamwAgbY_fGi58WQZAg.JPEG/SE-CF327EB9-AD57-4134-A5A1-F101790B4984.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjg4/MDAxNzU3MDQ5ODM3Njgx.9RC1-2vYYgZB_jbALIaohbqbYbs3hiUAGRnwMTAxQOkg.5eyhnvHk7jGBEpfPnfoHRuDMCN95j7j5Tyv-WicIN0Qg.JPEG/SE-C5805D9B-F587-48E0-BE5B-24FEB523957B.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjQ2/MDAxNzU3MDUyNjc5OTc2.6KUJApPKJFfUpik0iIgf8BvFxLuepkOG3YkZyy0UbaEg.zneiZotmivgLZC_9j7nicQWGv4Wg3kbuYcyqWPFWhpkg.JPEG/SE-9821A9DB-3504-4DC7-97B9-DAAC296FCEAE.jpg?type=w773' }
      ]);
    }

    const existingImages_k10090470 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10090470'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10090470[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/722d82b1f261bdc23da2766d7a7dae7aa90e94ec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9bc0ef551a10eafe0dbd452640520479a85bcb0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/21ea2fb16fe7b18a0abe2f81ab909558667ee4f6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eaa4dca893100ee142e39877141f1077cab8e2be?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a0aa345052f7c14411416d487d9ae271528cbead?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed6a3bc32fddd96b287dd9f38e604d946b30199d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/259aaa6740b962a5669eeef585ad4a56eb2e547c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9bd21493e3088f6d86391660ad261e03dda024b9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb53a9908fcd5d439817e92ff2e2c9a56820c5c9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6319034efa02f7320f85288920b619e1871d0ee9?original' }
      ]);
    }

    const existingImages_k9921422 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9921422'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9921422[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7fd1990c84a9e4f020f120d91067ad2cf08412fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6e07e711de01e80f5fce051d438c52f51e1ac865?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4dfae1e4e04840b2ee89def6d35bfcbb8601b9bb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e92d9c2d6811eea126ce4c0154c93ca36aec9b47?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/95cd209fb72db4ca374f7934c4cd3026faad999a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6a92cd00ff90cfa25fb9b2aa3f3eda39e7e91737?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/07551857062e6223e6d127c6ff299abea3198883?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btquI13F6mh_bKWvxlVq9nVd1rpuDqLIqk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqnNtSQjev_kdNGAs1qmAnEyGzeOjYxJ0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqnJWVL5Jl_Wcds5DNt3Q8rV6RAK6kuf1_img.jpg' }
      ]);
    }

    const existingImages_k10727290 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10727290'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10727290[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/005796cbf52b059c70e05fa465785a3f2e32d73b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/af5208a35b15fe28d76c3f4678b1e0ac1bb0a3af?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb656a93f7b60fa6525869743f40e8c4418bc11a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7786c14f9408f3cba347c8e1a00a958d3528eb2b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2bb45694ec1f8dc6dc8aae9ab4a7ddfcb47a12ec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e6e4d422b24905c5e430fc6cc1eb848b6285aa06?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c4dbdbeda94d059b39b61223b4a1229374627211?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b44b24b9e6372232617ce5f848c2f1d2d11d5d59?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e70a2da354ea89ab7e9db7852f90b3d0be402e6b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/82c577823769da8353b3bdf693e735880cd8f419?original' }
      ]);
    }

    const existingImages_k1652068777 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1652068777'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1652068777[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjEz/MDAxNzU3MTUxNTE3NzQy.Kb2Pc7LJGV9yelYD0PwfzvGzhAIF_o9ewKxG3AR_QAsg.yf8JYAuJFP_FkyadAU08XfayCU6MtbJDYo6csw_b7p8g.JPEG/900%EF%BC%BF20250905%EF%BC%BF175537.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjAx/MDAxNzU3MTUxNTIyNTM5.LhAgMZOvLxKX-_ArCrRMz0lMNFMUcuaNJuobuFInfi4g.8QHWVfvbAeTEY57edc9GYMKVBxxe73XhjRkiucYObTgg.JPEG/900%EF%BC%BF20250905%EF%BC%BF175757.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjQw/MDAxNzU3MTUxNTIzMzAz.B8WMrYAyqF4cA-2JH5PLHFG3BJiAjen1-wBhFtno8zYg.aQ7oqWfwaVPCFi-7pitsqmODz5OHJghv5sv4Q7CFvTMg.JPEG/900%EF%BC%BF20250905%EF%BC%BF175952.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjcy/MDAxNzU3MTUxNTE2MTgw.Vm9ulhPL4S8XL-CylIR4B_fsD_QeS53k5gbGddRxbWYg.eciwAUlSIfzU99GNI5K1-fJyaeh-fXLsuJxYTVy7yZ0g.JPEG/900%EF%BC%BF20250905%EF%BC%BF175925.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTIx/MDAxNzU3MTUxNTE3OTQx.zWaQ2aJkKGkNgIFHBEdwl5uo1HJlX_MD2gfKFf1hkQsg.Jef99Yjbf9QNOlVq8FAljAbaTr487Qtr1N5b9UASy60g.JPEG/900%EF%BC%BF20250905%EF%BC%BF175612.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTcy/MDAxNzU3MTUxNTE5MjE4.mRMWGs46SR0hWCmkFrJMcwXL8gMp6xV_7Jj6TRc3UDcg.vqRtIvnLjmcMLf8P8eMcGTUNFiMYbIaGrDuZ4qO95Kcg.JPEG/900%EF%BC%BF20250905%EF%BC%BF184639.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjIy/MDAxNzU3MTUxNTE4ODU4.A71QDuMzfLWqSzApYeHFFeczhvlqjfop4hdonWSwLs0g.GbE46Gq14Tfg-eDQVdH4UfcjUH7l6RSrrm24r0WphI0g.JPEG/900%EF%BC%BF20250905%EF%BC%BF175909.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfODUg/MDAxNzU3MTUxNTIxNjE5.dV3VQqcVtlxRLSaNPq2aDx6oUEkopB7f3HLQZELG830g.gpI8_bKK1pOTuIwtF25zL4T_Q8BKOktVQpGZ_CfYvS0g.JPEG/900%EF%BC%BF20250905%EF%BC%BF175807.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTkw/MDAxNzU3MTI3NjUxMDM4.wtw5uneZya9P_vD5tjqaDUMetxcVpiT9KsEnYAU48Rsg.NnghRLXNidbf-NyLYnDlNlEJRFCOnDi8PDDEtiJsgVQg.JPEG/900%EF%BC%BF1757127649029.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjIz/MDAxNzU3MTI1MTA5OTAz.LvFlXAL8TilNMqsEUGmk6l8uL8XcHi9wcWUrvXNIBXkg.UXniIQZCLhnje3-Win7gITdfYxF6B24r_hZUVjCA34kg.JPEG/900%EF%BC%BF1757125108921.jpg?type=w773' }
      ]);
    }

    const existingImages_k21347050 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21347050'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21347050[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce320792dbf4006012a2a30ecd6aae2472f70538?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzEwMTBfMTU2/MDAxNjk2ODk2NDg5MTk5.DiBpEZofmuFMSEwGIabluo0Uone19zjdyGAeAiV91LMg.mXFigrF-3xx7CQX824u_AMqsO7Dd2Hdic_HYYX-yNwMg.JPEG.newsangsikg/20231006%EF%BC%BF121133.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA4MTlfMjM1/MDAxNjYwODkzODk5MTAx.egO02E-TOqFtk1u6-aoLZNnptlSKSQKX-_GdCtyWwKYg.78mgvyoOOioA7UTrYWlrl9VLonkTcTf8SF2ycBGC95Ig.JPEG.narrics/output_3384342865.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA4MTlfMjM4/MDAxNjYwODkyMDg4MDMy.eHZtrkbCa2yoYYUVurxFpzQAMySFwlm5jGE2p8gtJUog.cNkwIaopjUqe45rR5oPY4yFHoC52flFwwrtdDeqZeNkg.JPEG.narrics/IMG_2544.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA4MTlfMjEw/MDAxNjYwODkyMTA2OTYy.CWVXUj0qzgAf4ooGxbqmSvTwm_hNA_hUGVCCrIqJtM8g.g68OvpdB6LvRJlqFzuvMfmzxrn1YH4Np0Mxuys-57WMg.JPEG.narrics/IMG_2553.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f6f233eaef8ebd8ea5b2e90206e58129a50f04e7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MTBfMjYw/MDAxNzEyNjc2NjI1MDYz.3Jhe0Qh_1RvuX9OIBWh32DgV-o9qpTGHIaM1UuAHPosg.fRciTrjj15swwacxq0uklTrt_XyZtBXlmuf26QnGDb4g.JPEG/20230909_174105.jpg?type=w773&jopt=2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MTBfMTEy/MDAxNzEyNjc2NjI1Mjg2.ncMuHPOZrOMsyqdBN4xOyW55UKPJ9-m-q0ApvUimyXYg.lBYG1P2pYcVP4lDd1w5BgcplrsbykMYHlTQuKCQL03Ag.JPEG/20230909_174126.jpg?type=w773&jopt=2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MTBfMjU1/MDAxNzEyNjc2NjI1MzIy.0ph164CBW5FmUR6jgBCSqNR_M9j1Af7q6YgKjVwSCY0g.bElmLCIrnsIzqoKQxWRnrt5APKfbAPfmHDuuG9T-mfcg.JPEG/20230909_174301.jpg?type=w773&jopt=2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MTBfMTYz/MDAxNzEyNjc2NjI0NjQy.vksJs4ORf4H4nf_Xh8aeFR6omZWuYg3im10EtTVSw4gg.qEtNulI-XY1p76VDnTulYHjFDyFr2E8o7RtZkk7rS6Qg.JPEG/20230909_175316.jpg?type=w773&jopt=2' }
      ]);
    }

    const existingImages_k45811011 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k45811011'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k45811011[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA3MjVfMjQz/MDAxNjkwMjU4MTY1NTg5.JJ8L2dMqSxmMLuaaXlpE897E2nkhDRFPM8k7Sxa8oK4g.y7ir1u-MZNZ1jYWt81EM4y_RLZJZopmpc-n0D9gnVjcg.JPEG.shinganepork/IMG_5128.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA3MjVfMTc4/MDAxNjkwMjU4MTQyOTU3.y5FD2Z42-lxTfGmJROFvmu_d58vh-j8wlT2Rh6E1KAAg.tw5i1Y9febuI3XkwcB6xm9XarpuJ5BWEnrack30vo20g.JPEG.shinganepork/IMG_5145.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAyMDVfMTQ5/MDAxNzA3MTE5OTk3MjYy.fJvDOq9a16-cQsH1n-q3Yoo7bqRvNSuKhoXLBPRPTsQg.r8QHrslqZ-0yObqB4vXm4VtVwmagdXpdgSvezT6p2jsg.JPEG.1931gksmf/IMG_1195.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAyMDVfMjIz/MDAxNzA3MTE5OTk4MjIy.j5ND8Hx6stUvJRce_CQQcnV7ypgvEzKeftPwfGYrzTgg.Ck1Xy9QTE9jHgO9VVP_0mFvP5KCTWjjE7XIJ82hp_MEg.JPEG.1931gksmf/IMG_1200.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDNfMjYw/MDAxNjkxMDM5ODg1OTA1.VQvPV61pk_gPtHBWKVmYEi_xtSnCqze5Ja5oqQC01lcg.sESQGWV-DFuX4zDg62lRICHVgXI1Tkal1zeeGlE_kzog.JPEG.shrekorz/IMG_5135.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDNfMjE0/MDAxNjkxMDM5ODkyODAw.VcftEx9ZMUjK6z58xebVK9PotaxOicMNk4lQFFfaWOEg.O4_csUAtisq_M3eEcmb7PjouVaLDEz32JmNT7IRK8Qgg.JPEG.shrekorz/IMG_5139.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA3MzFfMTIw/MDAxNjkwODAyODgyOTMy.WL2cL8Y9mOjNTkD_8APxTpgqkSsGZDmdG794SlxovyMg.MJ4kssXQix_pMc10QiDo5IqmosIvuMIEZ2gFlgQRo_Eg.JPEG.mi901027/IMG_5129.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA3MzFfMjc4/MDAxNjkwODAyODgwODU3.NyyFBFTDjXdTDQXW4f7YxIg7cnD8O7ff5Jx_Bu6i7-Ig.Q5MPLQxXllZcZtH3ReJU2I9eYXtkPWZtU2A7GKSva-Eg.JPEG.mi901027/IMG_5146.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MTBfMjc1/MDAxNjYyNzY3OTE0NzEw.mJoetvRvXEG2l598rABsvWoKZcFImGJOsS7fZYUsYjUg.xkGCTr1WdEUKq8Nv0dv69zC15PnupGwNdzW4WF2iUfIg.JPEG.jhr5572/IMG_7621.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA3MjVfMTgz/MDAxNjkwMjU4MTM5NzY2.Vqfl-QkwLgWrduqZvUKp5zKYY2oSuCLQnyt_eQmmTF4g.-MtNNRwXkXPhxIlzDEE5IkSY_Ms6afAWUxAWy0gjMiMg.JPEG.shinganepork/1.JPG?type=w966' }
      ]);
    }

    const existingImages_k27273000 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27273000'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27273000[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B75B016E68D54CD1A27C8509DC9D9D2E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/9FE8505A771A4502ABDD01DCD1009D6B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1deb9a4e097495749ada28176b434272bdca2226?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4db452684ef2755253ade69e2800d983814124c1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bea320aa06a7a6d4959c7b5d8e3e52b6c3efaa5c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bb3157e9a3c054ab66692a33889e9d14230360f1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d5620ea5f6b28caddf83bb99a6a72d5630271e20?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8843e5278880866dcde2fcb55bdb194a6f4ef0d6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eabcdd503f70c4fe1695aa939973ac6944f25378?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqq6fj1C6P_6jKY9MkJPDEC7nf6pplk51_img.jpg' }
      ]);
    }

    const existingImages_k8031047 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8031047'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8031047[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/265977a2b54ff15761d0116b296b2060e63f5d37?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c91f7e9f886193c2378799589a05494e057da5e8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e0bb5e9d7660d6c3674a423a2eae49cfb023d16?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cdc15bb7fc7a7fecbda10da8b3295fca84a4779a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ad4b3ffeec2b39553dc0ae77e50efa6af6bc27c5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8c1d90ae328be129a8b64fb88048e91e67b7d375?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a74d4e9b7a60f5aa0e21f53cf7f01a8f084759e3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0a424b138804addb9abf203b834a65de1429e21f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f5f536fdf7f99ce8cd3de4f6798f07163e8b9b52?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0014743a11149193228f2804c240e6d7a822ac65?original' }
      ]);
    }

    const existingImages_k1176678924 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1176678924'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1176678924[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTcw/MDAxNzU2OTQ5ODg4MTE2.mAuo5ETp92IPKgoOmz3j37BDvwPqsTbb3IJ20CN32owg.gBjMsi5OA5BFl7oma8Af2__3_YYEkYhBOzhPQHMw_j8g.JPEG/SE-31971b7d-892f-11f0-b868-11d35f93eb9f.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfODYg/MDAxNzU2ODc5OTg2NjU1.N-gh2QG-oqueVU-myMXukurUNzJnTnAb_RKWlJIietMg.LqsCVaOnyYtXRrGPdrYUjHOB68EpoRUCjEpuuX6HAr0g.JPEG/SE-2338307a-80b8-427d-923f-2063477b7d87.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjI3/MDAxNzU2OTQ5OTQ4NDYy.iTtdv15g8RZknmnU68ZKMJLekD4nC4DnzcbIicThiLkg.ZWxFEt_jisfnBhlPzLQ6Kq28TRcKeKBpTEKcMUlc57Ag.JPEG/SE-318c1ef8-892f-11f0-b868-634ceeea9bc2.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTk5/MDAxNzU2ODc5NjcyMjQ1.EX5o6EDB1tUYdp3ATA2FzMC2jSNITmTqjCHp9yHV_6wg.0qMXer__2VDipANZPfzvypQjX7CQ_jKQvZ-jbF2EzNUg.JPEG/SE-5f391bba-864e-4957-90a4-f9ae723b783d.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfODgg/MDAxNzU2OTQ5NjI1NTA5.AzygDDjiObUT8vRLPGeSFklcaos7imZemZa21jPPz1Mg.IpjY9wP2DuwbjR3bNOhHToSjdEu3zsAv6MHEdJ4LMaUg.JPEG/900%EF%BC%BF20250903%EF%BC%BF123528.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTM0/MDAxNzU2OTQ5NjMzNjA5.vKm7ESOmcqbppWcKqAlxlMO7A619wUmRTlUf2qR9hJAg.kb8YzVCux620YtutHNy3168-fiPaT7q7kluD7z-evhYg.JPEG/900%EF%BC%BF20250903%EF%BC%BF123900.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMjEg/MDAxNzU1NTA0ODQzMDM2.A0tHb3zHwcdWMDRfPcXrQJyYDTfG147cxAh67GrRaRsg.3rc18V5dSIvePJA0FC_Y8fZbEjrF6FUXJGCFvFqbIeQg.PNG/temp_1755504834359.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMTU3/MDAxNzU1NTA0ODczMzQ3.CbD-3t4AlbeL0b0w2dbk11c7fLM5ZOdy2zoLLF9Oeuwg._AmVovLbXFm3heUpF-umKBuEDCnCXZzIt3OH3inR3Qsg.PNG/temp_1755504870420.png?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMTE3/MDAxNzU0NDgxNzA0NzIw.V9gcKf35acw9nlUCskF40mwaCIvQJcKyQj1v9ecfk5gg.GVfVvPtOeaxwEBdoHakYD__pbwjoorq8bRPCpk025nYg.JPEG/900%EF%BC%BF20250724%EF%BC%BF191319.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMjYx/MDAxNzU0NDgxNzAzNzUw.NdgJ7114RVxLURoFvmfheePqNqrF0-IdpYxvT_ZeDR0g.O3Q6bFScZmt5aX2hu0HDu9BI0dYSCaRrTjXHhTpNFLog.JPEG/900%EF%BC%BF20250724%EF%BC%BF191322.jpg?type=w386' }
      ]);
    }

    const existingImages_k9366475 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9366475'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9366475[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6832c258e164298f40912e3736b9607c64f3d726?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/62c6735456048ff33fed71457466a57edba2e400?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/119864c4069f33d301f453827fb83e26a9f849ee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/739c3ff78741d5f1e7da898a76bf341c3960c099?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e80fb4149f52debe4b34f641fc214697401a4ed4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c3328df12770e05ec061b9f39907bc763c2966ca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ae29afe84a5b9d353728a5edf792960f1360cfa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb04e394035b8bad0c3ec35e109a293a62277929?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8d8cc75f3356a97cbc1fcf7e569e0057031cece4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3d762818e8cc467f00aa6329848031a4e10ccaa8?original' }
      ]);
    }

    const existingImages_k8461939 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8461939'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8461939[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9b7c114765d5daf1bad01c8bea66a0aac892a91f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4bd389120fed5d5139301c436dd8127991c8b652?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/641b53e71cef0499bdd09a6d298c2ecd647ccac2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0dfdef27b0ba79426445fe8108c9319d3cbc854b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/56b46ca7f971478a6984a5a72871d7c178edf362?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3482d760a7b1f9120ba31c79614626d55c769a67?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/28da96d3c0386a86cc73446c57733039ab37554c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe7d1e3a7d6047706d03974333867dfefc612510?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fc1164077d0753cb4e34c6306d998f20f946deca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e48f57f7a66bc65df16824996bf28056120a4a93?original' }
      ]);
    }

    const existingImages_k593208960 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k593208960'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k593208960[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41e3f2ac0fa84dcb865645e5c63ad5c51e10dbdd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f54d4040176c7b05f72d7f77b2abbd52cf6496b1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9e84709caf649526478eedcf54ef71cb03b591f2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c105bda763efbdfde6dd0e5def19a19830de608c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2987c44b6109266388b9f2a6123504702fbc5659?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfODMg/MDAxNzU2MjIyOTk3ODQ1.FP2EFbyakM7hEGk__7OQeU07Y145K94T0whTWHeK3_og.0DgkfRtwMPCUBbt6CYf6rtWj6cIN_MkrpDpxbS8Bw90g.JPEG/SE-E4FC8432-9F5B-4422-87EB-DC188F8C7B97.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMjA1/MDAxNzU2MjIzMDAwNjI3.eZ2oXnGpu1OwIK87w-Onv2Y8LGxsmXQouWOcjS4R1Log.x-QuunAzq5_QU_c9Vy4G7_Er_ZkwEOz3F9jKp8qhNCIg.JPEG/SE-A1B708D1-6FFF-4F72-9FAB-2FCA0DCABB6C.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMTA2/MDAxNzU2MDQyNTQ1NzQw.c8dfLyLqYs-04Mtfp_zxXa8Lk6wfeSXMtGI-0MLcrTkg.lc84u00YrKBdmS_RaCCzumBBc3s9VIL1KET7WErIG2wg.JPEG/IMG%EF%BC%BF2592.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTg5/MDAxNzU2MjIyOTk1NTc5.vxrJerlNRbYbBcpmKGNCFe_G_eGjDLycmmLuavknB2Qg.UDJpoNh5laMTcaCmmMsd5NmnkOKLOyu-ZQh2ElJwkXEg.JPEG/SE-E855CCD8-64A3-4D13-9A95-4B81EEC0DEF8.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfNTMg/MDAxNzU0NDQxNzkwMzM3.0uPBPwKjKhG3CNdr-JvjOeYyC1stBZvu-dSfMH9590Ig.w4Ulsh8mo0UWGmhmQrTfWDejbMMuhoDS-a2AEre5aD8g.JPEG/KakaoTalk_20250806_091406602_09.jpg?type=w966' }
      ]);
    }

    const existingImages_k9466426 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9466426'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9466426[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/64b29af7ad79fddaa034e78b8f6c18e032df2197?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7111d20ac3cad33c350b5a10ddc650bae185d9dc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDlfNTIg/MDAxNzU0NzAxMTEzNzY5.WSxaTRiVklcL0FzAIJ3Jbb3XKd0Duya817ADzPSGz3Ag.wtIPYRqq2qZmlNXNnYQKN9eyMdsUPv0EylU20o8zKTEg.JPEG/SE-dcd9fd9e-70e9-11f0-a6c6-bf9224677a8d.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDlfMjMw/MDAxNzU0NzAxMTE1MTA3.t9J9EYd3vJrOeMaLwMudtOYlHOl98oHh8FoBvQuyL4og.qc-CkINTn6L9x3HeNO8VVhCBhvz6qd0EZAG9Iec2q2sg.JPEG/SE-dcd6a238-70e9-11f0-a6c6-e723436d1ba3.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjIx/MDAxNzU0Mzg3Mjk1ODY1.12xiP5N79f7MsgIYfnMYJQfwMf0v0mtKg9LVALCGDmIg.l7Ps8funrO9Hn9KO0MnKoE6c7e4ebJY_P5hGWn31PEEg.JPEG/IMG%EF%BC%BF2337.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjEz/MDAxNzU0Mzg3Mjk0OTE0.V6t5F-K7kbq-6v7Sar2SnyMgL6AzV4ZmMvq7jWndgiUg.CNR-NI8n-GQW-C848jhfdYs7EZgBAcoUG9Ha1UY4hWgg.JPEG/IMG%EF%BC%BF2339.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjE4/MDAxNzU0Mzg3Mjk1NDMx.pbg-deIwKZ2OV40Qxahc7n2DtdtkazN5dGBPHHSzUPQg.FtomjNY-YAtMfl4-Q6h8vcxSAtTxNwwaQQo-Crg4L-sg.JPEG/IMG%EF%BC%BF2332.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMTYy/MDAxNzU0Mzg3Mjk0OTU0.V4cXv8Uprp3Qia2PmZR-47PDdsnDH09_DD-Ekw-v7fkg.K-fpjQqFO_3FBh5IuQahDyhcPC6ODEUgf_eIHNss8Tgg.JPEG/IMG%EF%BC%BF2338.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjdfOTEg/MDAxNzUzNTkzMjY0NTAw.jZOdnnnle6WQOvisFB4a-0jp5iMvR9x6ouX9etPfk1Eg.l74f5UHr7a7HVwJZyIX-XOXszouNFbsjwTB1HIpml_Ag.JPEG/IMG%EF%BC%BF4171.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTlfNDIg/MDAxNzUwMjY0NzUyNzE1.rjbHKDBpHdPbOaojBFEXBAotZRQ4ct7sEu9VXOEqCfQg.aPcyvY3DVLDeG2L2GWeQfZ70ZBxLcnRsjh4VEIkz4R8g.JPEG/900%EF%BC%BF1750263927516.jpg?type=w966' }
      ]);
    }

    const existingImages_k1308797257 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1308797257'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1308797257[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/058ab6fca21576bcb9f8f682a5071a66ec9fbbe8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cfc5c455dab515ca0cc1e35400d83cd2b48b3c57?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a06548e386129889849f663fe1f4dedc938f3b9b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/22751a4a38f5615025a8c479f681ea2fb40da39f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db202a224e61df79b7da235b9744629f5a82384c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b87a6bcbb240ba5fb1e1a0c243fb130e10fa6560?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/758fcfa31171b9e5ec108b397403e338bd483e4a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMTNfMzAw/MDAxNzMxNDY0NDk3MzY5.4iNivs_XG_htkRqydFkl2QjvVXHf9owOoCXsZuipWPsg.hEzLU7gWD5-Z_pAwh2UzpAn0bKpUknm5e5pA0lmO2jsg.JPEG/20241018%EF%BC%BF105927.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMTNfMjQ1/MDAxNzMxNDY0NDk5MTc4.ig_g22COTYUie92CPg7kTKsEi-s_h6mZmir4je5Xlt0g.Stck7pClt_D42FA6Opbg2sZIRbwo9oUPZqmlatKjloAg.JPEG/20241018%EF%BC%BF105931.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTdfMjQ3/MDAxNzUwMTUyMTY2MDMz.bL7XBfv1CK0iS1AHLpD38U-Qii0gOKNq6E_iB_6sorEg.flK-l7_VsHIyO1ps_v45rVTlNKX6t6o9lbKMtSzn2f8g.JPEG/KakaoTalk_20250617_153413654_28.jpg?type=w386' }
      ]);
    }

    const existingImages_k9313876 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9313876'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9313876[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a57892794b4ba9c10f628d8d244541ca651ee07b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb8c6cb665badeb7bb863e0b840b97e4c1ea7aa7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/604fa4e6ac0bc05f1d6158e31561bace5b4137fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/59ebfbf757d74d6195afd791a0c41157370cbee8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dce11bc5edd5ed0ab6e1dd5dda4242f4fdc62c53?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgdvRpjrj_kpiFukSKYzSQi2by9t21E1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTI1/MDAxNzU3MTMzNTMzMzAw.S7CEJe704trfMC4ib14_W2y642IPJNC6n2WvheIaB3Ig.FMFGcK7wNX4XhttMuxirI9-d8iOu2qUonvH-3cd5eTQg.JPEG/900%EF%BC%BF20250906%EF%BC%BF114817.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjUx/MDAxNzU3MTMzNTI5MDU3.QZFZ297pGpiIKltidbnCVobAre37GJmeQRov5qBCjLkg.UDFWo9qw5LO0UIzZpd7YDoCOt5adJMC2Fv4XHfoYoT0g.JPEG/900%EF%BC%BF20250906%EF%BC%BF114358.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjA0/MDAxNzU3MTMzNTMwOTI4.iCr4DGsOBLp6dg35rXMvaVTaRxZNLPeSXNBWfXHhHsAg.g29c34zs4Q_0RcZVsBccZREZk-GtFVvv1OmCTSVG2UEg.JPEG/900%EF%BC%BF20250906%EF%BC%BF114322.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`), img_url: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTA4MTVfMjM1/MDAxNzU1MjY1MTQ4NDEx.KIxd-EgSnd3iGJELB0u0hFVrFUVrrEg6Bl6HgzaHtu4g.MotMjjgkIY0JGzj9W5rQP39m_VPU0rtIDV3MolRadgsg.JPEG/%EC%98%81%ED%99%94%EB%B0%98%EC%A0%90_%2815%29.jpg?type=w1600' }
      ]);
    }

    const existingImages_k10642300 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10642300'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10642300[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzExMTJfODUg/MDAxNjk5NzYxMjg1Mzk5.DWSB4eteKxvvdKCFF-XxX3Y2SOPWgr_QD7Knp8wKpNUg.gSUrhvJwVXPtu-vl03vatAAXgVJrrSJvMfHfXkZ9AVwg.JPEG.elim3w/SE-357338cf-6f03-41ae-809e-3a83d6303cb3.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzExMTJfMjk1/MDAxNjk5NzYxNTM3MzQy.6VXZkgg06BN5XJcjpAoOHKCX-TRWn0buay5S3pRw7lQg.dFz0_-5xBafltgqWBA8TvwP4EJMbxSV0uuZVrbRs0vMg.JPEG.elim3w/SE-fcd2f669-fe62-4d43-be31-5dc329613cc1.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a47a1e9a3b7787a511ea57e1bf763211b21cb2f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9aa4006eef45d835dec14345425803a771eb65ed?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8c4f6503dbc25012ab4ed103b2e94d0664ed998b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/811dddf342741f6864f6ea0e070c75424f94e2aa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f30d4c49a22d701563ba187dc79241bf9464eb2d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aff1cd6391dd3b04983c7a4c722c752a7a3826f6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9f905f169d1ba7e40b7d2369da105c8f576cf707?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAxMDlfMjU1/MDAxNzA0NzkzOTc2NDEx.VUwDQ_lEC88go9raK7KcwsBHJu0bV4QiOJiFjiRd0GMg.Aq_7Srdc3TzYZShtnEfTuNw18VBP5jZh8_Vk-_s5VYEg.JPEG.skzkandl/IMG_0309.JPG?type=w966' }
      ]);
    }

    const existingImages_k7999598 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7999598'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7999598[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a9630248474010d79f55519cbaabe546c113062d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e383e048f7e153366eddcefe48e2b0dc23219dc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f61063c82adb43fb82838313a7d940351c41c1cd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfz4gLNbA_QCb8gGsnIeOgaAixuNK040_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfBmOLco1_ZBda1n3bAV7N3nrhtRU5mk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfAUY9TgU_JUCsfHjIP2xdeXzWz5di3k_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjU2/MDAxNzU2Nzc0MDE0MTAz.Ru2kyC6_qzNB9dmWRrxHZ0-nj2cdV_mY7D2r0g-Fscgg.9KGKtF4yCPE6bShPrXQo9f4DGxHzoq3B-OCuBZkiXSwg.JPEG/SE-B006BA17-A486-4148-8126-75B33904D5C1.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMzkg/MDAxNzU2Njk1Mjg1NDYx.JslQObfdFpetv7csqQpcsTgHJIATOSXA12WT1lFivQog.IO8_d8rbiYNjYhJhxl77naVcm7iCPVs5ycUQE5hV2J8g.JPEG/R0012445.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfNjUg/MDAxNzU2Njk1MzUyMzg5.Xlq7wBsIQL0obqc947bhANdM_ZF6wnGksso6pDE_0PEg.U5-zX5rbX8R0eJMbkFeIW-CImQ2eeZubzzZEK6kU8Awg.JPEG/R0012455.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfODEg/MDAxNzU2Njk1MzU0MTE2.vBfZbbL7nCPPum69z9XBrdfaqi3rQ6lFXA3xYf6RTvAg.OQ2seQmPzEgEDowHiBic1UNvXaTTbHRuq8rkzJBrZO8g.JPEG/R0012460.JPG?type=w966' }
      ]);
    }

    const existingImages_k1508097729 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1508097729'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1508097729[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a6518718e1e83e8eddeaf06357be41f3954ff9b2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ea3aad1091452dc8ab6b0d14045cd8b1795d203b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/98d45f628a5604a41c36d1ea07d10bd5971801a9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c65aeed1a60e03a825cd099465de9f61855c22e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f82168880daa2bfe1d218f0fe95bcec99f28928b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/917cf7ca33aa7af39372afb132f672a6e88544aa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjIw/MDAxNzU3MjIyNjAyNzkw.791YzNSaKmGA0eOBzuYYNeRkhRvSNs_CMk0XAtJ7TMAg.Tm5enkFmRBonYM1JCTMhuzMIa0ZxJQy91RioNEjBvEcg.JPEG/900%EF%BC%BF1757222593777.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTcy/MDAxNzU3MjI1NDQ2NDky.f6BCXzc2HevCf7Lw8peS5_rCsEkk6SsUfnBi1IAzYSMg.Lkmu5p0EAfoMskj4a6yL3SHkMDej5j5xEQCzBBDCdfog.JPEG/900%EF%BC%BF20250907%EF%BC%BF125800.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTQ1/MDAxNzU3MjI0OTMzODUw.uDD3XmmAGm6OFLLv1lbxCSSiphl_tCkg1z__5ipYWuIg.bsRvFlWg373gNMbnO1owoV7gzse_Ql-cOPJ7Gyem91wg.JPEG/900%EF%BC%BF20250907%EF%BC%BF130237.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTM1/MDAxNzU3MjIyNDkwNTU3.VjmuLy28WpPeN9Ud2StoLWA7J1LI4L4bgJBgVQe8Rpgg.kqAGQ4aH8Psv7cBWrcwuGAUoG7XQkx970OD7El68Qv4g.JPEG/900%EF%BC%BF1757222488893.jpg?type=w966' }
      ]);
    }

    const existingImages_k27143822 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27143822'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27143822[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9D9004F969004AFB8EA2033D23FA2348' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6AE82810CB63437CB572085623EA49CC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5AD83609AADA445393151173CE49FB71' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F96CACEA32264603AA324FA1ECD6976F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/102556089F644F6792A992727F53A9CE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1CE12E2FBAD24926AC6CE6E70A98F609' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2B47F3ACCD894E6C8E5B05900538B575' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AEB2D0510FC349089ED9D2D6CE3F6C54' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C4470C57BCF0445A82BDF7BEE675D766' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/029F575A9E0245AC9AE3FE6F33A2AB91' }
      ]);
    }

    const existingImages_k7985087 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7985087'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7985087[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2f1ec0c5fbbe5d130bd2881cecb1d0562d0b4962?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/15026a64dc0428c00af796db6b1b90d18f756377?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/116fbec6aac390c8f8db357fa4a6faa9b1a324df?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0ad9d6935d3dc622198f4a5eab866c3555fe1786?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f1c38949b8676d5dc4997d7ec24a5940e97c8ded?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c50817bc7d8d95bdb3bcb52e9a050b1d6a64b0e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/53770622e50890f64483550b41cc27910db675ff?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b076cb9088546a6514bef5b80e0172036a4e6c8b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5da54b412b52780cab92b8df546cc3ed5e4f8da1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b174b90dbfe4514ea741ad7462f1ddba551a7db9?original' }
      ]);
    }

    const existingImages_k17249072 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17249072'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k17249072[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjdfMTg5/MDAxNjg1MTM5ODE3OTgx.pZtfG8TcLJSe-tgcehE9uTpby_yvzpQLHNpDbJiJLy4g.aJ7DKmuYJkLaqKGzzGsUBMvFjyqqsqYn-Uoc2Qld6owg.JPEG.liebebf_/1_(3).JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjdfMjQ5/MDAxNjg1MTM5ODkyMjMx.wHcf3pumOKSPegjEFFZUKcMgfy_d0qlnNLhSs5xs7EIg.FMuUCvkvazJsXa4hIyI0mJlB7otA654-R9glNFWTcv4g.JPEG.liebebf_/6_(1).JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjdfMTgx/MDAxNjg1MTM5ODMyMDUw.hmgKFTcgpdHi8p-SlH4fsXucQmKJqmRN5-jBcgH-LRsg.6v6rKXVvoRnmrIjpUXRlMHGBKltPugmfD6k_1B7FBgcg.JPEG.liebebf_/1_(2).JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjdfODIg/MDAxNjg1MTM5ODc2MTE1.Y2xi7rZ0sAxaOfgJmzVo8GDEgy2Y_cfG2fivBB1JqI0g.i2kHjdEdTnNSkRAkecmFPzUA1i9dCVZJ8Srbmq6Rtq0g.JPEG.liebebf_/4.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjdfMjk3/MDAxNjg1MTM5ODc2MzIw.03DF1wZ69XZM2mNXbM9GxdbNt8KpU9oJrdHkF2hj_uQg.C-R7nun1awLFFvKTiqSyCHck6BHPjrt_EKljTCnfchAg.JPEG.liebebf_/3.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjdfMTI5/MDAxNjg1MTM5ODU3ODcy.LDHL6xGEpH4ciU6Gjmp4NFoOg8BNW6ChXDABGcV6zWIg.y1ZCi78VlxJNFwU3ysEeOCW3GmJuvLno2j2bT1UhzXMg.JPEG.liebebf_/1_(4).JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjdfMjY3/MDAxNjg1MTM5ODU3NzY0.52ty39JHvyziIyKJ1PYlaJGmRgq3p7ptLabfXW_wqjsg.xjNlBLn7i-gMHG1KrodtILQnMR8W4bsk_q4j7NCJHvEg.JPEG.liebebf_/1_(7).JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjdfMTYz/MDAxNjg1MTM5ODQ1Njcy.S4kRzhEMEzFUfO7zlkM2czF1QeaWE45Jx1wO_L_TP2Yg.ZUqPMUYgDdHJHDRPAFQNwyHiS5SCU8PFwjzE-xl-OU4g.JPEG.liebebf_/1_(1).JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjdfMjY3/MDAxNjg1MTM5ODc2MTcx.Mn6k5hqPtVlBu8lfcmqgFLQQ1NhZNoTZiRqhaaH696Ug.zdoItMOYRcWeAqhnNC-R9Npsznr7nBNQFllkJJvVyEIg.JPEG.liebebf_/2.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTRfNjMg/MDAxNzM0MTQwMDkwODcy.fErFNEaTW4XBMhOWDjksP3st9WZNLeQdzKrXpS-Nwwcg.Qgp_Pllh16n290YEN_jZOi5bCwOTRNeFmtGQYA0g7XAg.PNG/Photo_3.png?type=w966' }
      ]);
    }

    const existingImages_k11116260 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11116260'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11116260[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/547ae20cf4923e670bcdba75604007995f49f135?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5c92c327baf28ee92ffca9b4f27a34a636cf6aa6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3f0fbf790b80b566f02aeb03bd7b6906b3c7458a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d8b21620f7d3a9244d5e18c8f407cf30d17becff?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/596e77ed96cc337b34cc3b7780d6831771591cdd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/92d4f61dba7e789663f9e92cf0c67326c3e03915?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d8362bf32623fe59040ae953d645dd119370e611?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/784385b8105fcc14b61916492813022a88e9eeca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4647ce37f1e90dc5ceb7b7fb578534f424da8865?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/65aa64ac6de3902e20e2ef6f664349028bae7f94?original' }
      ]);
    }

    const existingImages_k7963664 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7963664'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7963664[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/514082a9b2699627c8b61c8e9a702e5762935807?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/04f7da1b9cbbc579b6087c19242f1e884c4c3e12?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4228f47d42979b7e2ad6bb304eb11c14ef219044?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6682311a807255da3e993a4fb48ee412e4111244?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4c18ef0bf789dc9bdbe877dcf501cf2a7a80653b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/055a95bd0ff7a2459dcf8f0c4200e573625c1c66?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fc7a69f5e9bf1b819b8b080bf0caf3392811b8b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9457629132c52778b2a31fa61479f5972476e07?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dadd006cdf96ebab83aab5f8ef2b9bfa3e36ae2f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b851164e1162733caaebe9485b14d685f01b41e5?original' }
      ]);
    }

    const existingImages_k21336299 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21336299'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21336299[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4c6125b254e7f5e8a90b4a36ba3e6a8d06793dff?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5b160a5ab019ed0ad007f0f8bba2dad8de01e310?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f5e4c2029b003229bd243a01040cb2278739125?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTY0/MDAxNzU2MjE0MjM3ODA0.iRXrhnmog4Vu90uYEWsuWxRsiwelE2FygRpwiETS6GAg.lmpHMUIgG6cnvya90yWtZd7kenLNTeBArefLrvD7p6sg.JPEG/IMG%EF%BC%BF8317.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfOTUg/MDAxNzU2MjE0MjM3Mzg3.9syQUd2Ifw2zN5qRsny1BXwhedWpMTzGmrbWAIYMnDgg.Z9cKiFVMbezS9Fn8Vzais6U89EbmWupxoDJG_Bnnfjkg.JPEG/IMG%EF%BC%BF8315.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMzgg/MDAxNzU2MjE0MjM4Mjc5.cyK_doJbGHQ9vEalhxGAWx2awybFoGdwn4uqmDhjJKcg.pmq4JDemum2vMruqnf6JlPRQYP5sshqLNUQmTtv8p4Ug.JPEG/IMG%EF%BC%BF8335.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjkx/MDAxNzU2MjE0MjM2NzU1.rATAuakSmQRGhWLaVgznVmS7veYu-hkJjpCGZsbm6kIg.luoYjO5aaDjiGN8t-XgThymfn2OgWfZ3NvWUFbdzONIg.JPEG/IMG%EF%BC%BF8314.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTU1/MDAxNzU2MjE0MjM4MzAy.rjqz73HxuEscDODjZ9GMEc6fr2DA3L0njzXJsvPhXtkg.5twlS3wPWaS45vfrN41bfSSdvS9dA-nb3L97R8EpSNog.JPEG/IMG%EF%BC%BF8334.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTAx/MDAxNzU2MjE0MjM3NTgx.1zlYgTwoqeQ2ePMHpS2U49JJFcNoZMCnKrWCVW1T1kgg.af4r-p4kh08eFCzj-MxUaSok1zLw50Q4lgPoYPi_D2kg.JPEG/IMG%EF%BC%BF8319.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTc3/MDAxNzU2MjE0MjM3MzMz.JI8OMJoINqV-H8cNkr1ubJqZvBbMWy8z4XF1xu9PdJsg.MhwaPpQGbEhPOtn7kIilQI-uNw4Y7IcvY-Ohzn0q1iMg.JPEG/IMG%EF%BC%BF8324.jpg?type=w773' }
      ]);
    }

    const existingImages_k244084380 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k244084380'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k244084380[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/221794485843FA2833' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/274E954E58534B940E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/27180D4D5843FA2A2F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2308AA485843FA290D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2466334D5843FA292A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/97B4F0EACE6D4B03A2896F04B0FC0655' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/2E8D65870CBA4410B250AA0543DA5151' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/6DA2F5C335F940D8BB916562FEBF261A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B2C03C93C03A4B98AE99CA4270432321' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/C40F88D8335847708BCBC03769CC43F3' }
      ]);
    }

    const existingImages_k9839491 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9839491'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9839491[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d984288f9f1d768c8effe5ae23bcfb96dab51623?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cb7d0fcd5f3b1a4491d9fe6644067b50e8bb5f1f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1595d3590f45bc2c5d8bff58461ca72fcea6b0c6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5115334efb0a7211248bb4861678f2e252eb0ffe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c5f5320d3e54ad43699818168044179d6e1db8a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/708c97cd52d3de505293e6e323e5a40a62b9faf4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjYz/MDAxNzU2MTcwNjcxMjAw.66v3I2YXez8YQWSpEXepHSxl8poFSLCQdS5dpelJN0Eg.wz6ssxBmHclmdF0NgJ93Wa-H18U4LYfwvXrgc8r4eYAg.JPEG/image_1756170667.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTdfMjA5/MDAxNzU1NDMxNjk0MjUx.X_8c70YyTp9GoDB122LVqJRBZfcgrzt_rcD8C-54tdkg.jx4dCH46kFgbCczpQB5HrTjWWLgGh7U1bX5Vl0q7JTsg.JPEG/20250307_172028.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTdfMTA5/MDAxNzU1NDMxNjk0NDI1.O4J6LXr6kLk4-C8nv5TnUdmxzlxX131M305jjHj3Kagg.ZoCz1cZZfWainP1SW1I7-hWF66kImF7VjB716L3j9Ikg.JPEG/20250307_172144.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTdfMTI3/MDAxNzU1NDMxNjk0MTMy.Tr_Ef9Ndp37gn68WzSEwxIRfgA4c695Mg9UeKmZ25e8g.xJvmYbIEZ-oCe6WJE3T9OrEG4rjdi-B1iCCuyidGwDwg.JPEG/20250307_172123.jpg?type=w466' }
      ]);
    }

    const existingImages_k1629307609 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1629307609'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1629307609[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/42f06c423c6c31fb0ff8fa62b3a737d623fc7c2b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b6c4da6450f32da3ff82bec47a529e08b0192a3a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/451adaba46f00b5b3bbf138178b538fc115d240a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5dae33dc9be0739f3b5754c8888a071fb292f794?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa2d3cc11e74eef82465424c5aeb615ab4610cb7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f8d2c941b7f7ed4a0cca6dd74dd42920fcc776d0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ad18736ff18cd6487acf0c2da70457cfb200b5aa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/632f620921ca6128b0186f8cbf5d677357960158?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d09cb58298e3ce4345981227b113555214fcae5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/232f4e8416c5ccf57fec1ec5b04bcdec552f51ab?original' }
      ]);
    }

    const existingImages_k9165623 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9165623'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9165623[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79f3cd34e9c131632cab0eea67202f51c1883fc7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/12b846d32cb33cd057fc4f5cf8f234323b54c30e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/455f68ba0c7d63c2368eefa74a5a8dfc69812d91?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d82a5c3a71d6f61b9c1f73789ffe7bc08f111e690eb5638721ab99643ebff36' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqiSdtVJQa_CyqKJNqEZgHOMsLwxn8LBk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgOXTZ1Mr_qghxPvlCRfEdES1r2gl8k1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgOMkTrxf_nUib44jSz47UukbYhPENJK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgOGSJJbg_COM0osxK8kkD5DzlMjwfjk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgOGFelGS_jTqfGKSSaBVyqF3KUWo7fK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMzkg/MDAxNzU3Mjc2NjI5NTg0.B57oVuS6jkrn75eYSf_RFwCsD-KGdsRmwwn4y4nLOtkg.uiJaOoAMvjdZIuxNdxpznpZ6_Il3jOnF8eZC2ZnY0KEg.JPEG/900%EF%BC%BF1757276628774.jpg?type=w580' }
      ]);
    }

    const existingImages_k1204945904 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1204945904'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1204945904[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/97030280FB19498BA9FE7C7D0BDA4073' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8A1107704F3F4337BE049B9793CA1774' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/367D42664DB144AB920F10E2AD282EEB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/933A8B3BA3C7453784B5D2BE6EF01D2A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/place/11CADEFA10924AFE95AE970CA75160A0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/7F803892A96E4C9CB4A74B32CFE783A2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/9238F108224641E78AA0396BC67A0659' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b1abf53d517bfc2f777358f3b44d1dd58422f799?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/14b19df5c8ec0eeb670fdc10fa2d26f308200924?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a9813094b49d9ae95885c7ab35d2a17bab96b71a?original' }
      ]);
    }

    const existingImages_k338604909 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k338604909'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k338604909[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0CA63FCE54DD48F6A32AFA5D38DAECE9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7D9A3FD7CB834EA69D482828BDC8BFC3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E67A5739F35F414EB0FA9E195401FB56' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMjY4/MDAxNzQ5MzgyOTc1ODgx.k0pAoB4o5l2uKU_WjYnHBLctDBLYm6pKSJv7EWDjYA8g.kKH68tmeq3-WwQIPLVvMerInFwkFRjAWMT6dANRKsIMg.JPEG/IMG%EF%BC%BF3143.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMjcg/MDAxNzQ5MzgyOTc1ODEy.nbUspOMnepJWP3ErlQPG00qInE7CO9LbDQOqAoMP5jog.7gJMNvzOnfMRTE8vGda0XKmDlaz5stjc5tNWsBkWS34g.JPEG/IMG%EF%BC%BF3147.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTM0/MDAxNzU3MTY5MDQ3MzQ2.njlRpPaFn_b-Ae_D5UjlhkhyerIFfzzKuLmTiyZbnKAg.R6PETBXMJdcZUlauWzbCoWAp58aAVfDfYs4QJzhmWwcg.JPEG/SE-C60CA8AF-9414-4F05-AEE5-DC994BFCE5E6.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMTkg/MDAxNzQ5MzgyOTg1NDI4.z7qVaQLFtyhRJmQXIsff3P3jfesR3-bsSAYoAOsEoAcg.cJr5k1-0-9HSwXpzBh7k_xFW6NA_G_XNzQFkCGsfHcsg.JPEG/IMG%EF%BC%BF3141.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMTgx/MDAxNzQ5MzgyOTc4MTUz.Gn-AtNfVSb381AQb1v4lFWhN28z1kIgF_Tyd_tOurv4g.jNYdBLvvwjVHl-bRQ4g7zO8EXHMI_3pUw_Y_Tjk8Uocg.JPEG/IMG%EF%BC%BF3156.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMjI4/MDAxNzQ5MzgyOTc3MjQ0.g57ey93TgpLptVliC44-1qNHYjWl1DsKmeGYoVLTt20g.aRZz-N6PTmdSFarF7yZNMzNHVrzPLrSvzZVZCD20OQog.JPEG/IMG%EF%BC%BF3181.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMTEy/MDAxNzQ5MzgyOTc3NzU4.SJcSzQWB7gEGK0Dd_3cQ7gTbbHj6nNoiOyvF0t1lw2Ag.cd81_Vl9w-ykk2LzaLsIfShJDUM_PwDaCUniUFw3I6Ig.JPEG/IMG%EF%BC%BF3183.jpg?type=w966' }
      ]);
    }

    const existingImages_k11833942 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11833942'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11833942[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqg4QbkDxB_bXoNv12QjhzX9X7EjJFX0k_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDJfMTk3/MDAxNjkwOTg0MjMxMTg0.acKUEjyS0bCqwDaF-YbP7B8JfTSgjKcjEIp6AStfib8g.TSfinK9zWe8PmmzUKk21BPsnmaZVq2yOWXH4jjydUbog.JPEG.bskks6055/KakaoTalk_20230728_233930599_09.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDJfMjM4/MDAxNjkwOTg0MjI0NDQ4.oD7kUg8X2G8HLz1018o7nmVPsl4mLnTZbFmIy6RqIYwg.PHZsgxTHU2TX1lBo3Z97D-ZMtmt_-l9rerjG85NDYhQg.JPEG.bskks6055/KakaoTalk_20230728_233930599_07.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhawcLv64_eSyKLoeEDEevHp6olPtIL1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhaw4Wo8y_JNvUEKjgKKMNK89sKgLrq1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqg9n6vqaU_E1tMqQL1URNevVuPBv2y21_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/DD9B9E6143674E18A858CC263D8AC5A3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEwMTlfMjcz/MDAxNzI5MzMzNzIwMzkz.kH-pdFQFd5a1R5j8-C9XBvWPDydWCAivnBPB15piNLkg._uqPagPXdaWBTQcJ3jI5FI9piYt8DD3OFJtuklNGOA8g.JPEG/SE-E6485B81-3E98-4AF1-B075-5EACED0AC358.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEwMTlfNTIg/MDAxNzI5MzMzNzIxMzM5.dnBh_9gxtRBd1WFhWlUXotPN_unGrMPrnhPb1kyp_zkg.2WzmUyrhdVvfxKyyR3dX9ZJKPvJ5h66oJcbqO4P44Nwg.JPEG/SE-0DB42262-18B3-4803-AF76-DA91EE1F51C3.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEwMTlfMjIg/MDAxNzI5MzMzNzIyNDUz.6uWEhSuxJ_YLF7vrn4vcae5zR0jnuHsQO0ws52ooanEg.ObYR_zPIXh_IPgv9FyT1kmYL53KgLGTqb1WW425OCnEg.JPEG/SE-25397F45-F42F-4916-94D2-F484BC6B4F51.jpg?type=w773' }
      ]);
    }

    const existingImages_k940879473 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k940879473'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k940879473[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6BE865676C05478BA17B835E3D9B9597' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/75D345FED3564F78841A38B5C9284F49' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BCD032F747BA4C979ACE441B0AA912E6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C5509C440A0644F0ACA7E2B3697AF1EE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/166079A0DCF845A3B682563BD36B9DDA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/40DEB2C726614859B45F887523BB2B12' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FB0F77ED4C4649CD821E32BE588313AA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E126580033184CD1BFAD1F2876C4B01D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/76D375E57C5143D186E867BD300E6079' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C0C3B6DD5839432A85DF39A83264A732' }
      ]);
    }

    const existingImages_k12463827 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12463827'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12463827[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/place/8F2DCC9045274CF69CE357DB43F84D8F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/D9DBEF22960D46A39A5148E7195F0957' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4406d0b53e367bb488ba0d1ab336a4cc16c58356?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f0c31acc1e417a69eb9b7d87fc27ab146820224a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/71bbfd8c9884711415ded9495ad7e7ecf7882171?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5b46ba99f266df03792c39b3457a6bfeeff1379d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa57bb8abb9c88e818ebae3c1b1fc9a3a2202e1d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ec60a5222992c64d0a8ad4a553c6afcbbfc66d94?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/053df9c281c9a072baefcc8bba19cfe7b0192032?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a516392d4f306f47e25b20535aca738d44a7d7d?original' }
      ]);
    }

    const existingImages_k887838514 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k887838514'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k887838514[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CABCD7D23997494ABA9CEB596F55F1A2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B0B4E00BB609482B83A7E350CAF89434' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D50F4A0140484C7A9E5A18A089306433' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/629DE453E75247DCA8300ED12C6284E6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/043EAF37FD414471B47A36FF194A2855' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2254B6FF91D6445D8C2E3648FCE6AB03' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FFBB39EE04D94DC4BB04A7868903D7DC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/15FD715D41B3420E963AF4323939A26F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/3A2326B8751345288DC920F121F12217' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/8611D62112F34B5F8ED5EE75D27BA3D7' }
      ]);
    }

    const existingImages_k8379690 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8379690'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8379690[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cb84b7ef40e1b4a774896b8c47a55e7dd7ff149a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d0b3e60809c5702c96cd5b3dda4cabcefaa2f627?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3128d1affd21886639019f3f37c2fcf9b2859700?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhr9VwH3Q_bQwlHPAvEZ5yPDsfoNraVK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDRfMjUx/MDAxNzQ2MzI3Mzk1NzU4.wbSjwYlf30j9cA8aQDBb5nCpKCG2iGzG0g6KLVNDA3gg.zTH5qEZiuEIFH7F5I2Lhc2igqpS07n0wriWXuAQ2Uv4g.JPEG/900%EF%BC%BF1746326885715.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDRfMTcg/MDAxNzQ2MzI1MDIyNTg5.p1PfVABzE4RFZzY8570o7zAY9rzdoeFgi5MkOLO1y98g.2E131eIyAuucRlKDTPhvdTtKeMnxdoqdZ27JyvjdTewg.JPEG/900%EF%BC%BF1746324218491.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDRfMjc2/MDAxNzQ2MzI3Mzk1NTMz.bE9mNuTXy8R_3kS79B_CyOfaL68wW6LOYXblEU-rDrYg.8smAWEUxwIUqHFxKYNHdyZv9yVwL8QhV_TSwBtQsFk8g.JPEG/900%EF%BC%BF1746326921605.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTRfMjE1/MDAxNzQ0NTk0MDAwNzI5.FBhaJtkhpjqaxZpHbxQ82xVxfpcQJYWhZialf5-anjcg.kxrwD3pftsmHMivgYm5VMn2VokxSqVNE8dMUFVgL9-wg.JPEG/IMG_1988.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTRfMTcg/MDAxNzQ0NTkzOTkzODEw.iHf2c8r4ZCdDbyDNMDKA6w9ZFxrrTPDy5BNms-oICKMg.JJWvjBZnCjwsvKOjpYsoxhG_XLOsr-WWQaVS5lii2Uog.JPEG/IMG_1987.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTRfMTEy/MDAxNzQ0NTkzOTk3OTY3.SOrIAphVWHcPpgtoKs8ftzsGLICyQIQUaCs7ScKN2qIg.NKeOW7E7e0PueYFTsfabRFFh8-6iHY2xr6t40W4epMEg.JPEG/IMG_1993.jpg?type=w580' }
      ]);
    }

    const existingImages_k11064993 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11064993'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11064993[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ddc8d5630307a38b6272084a6f97665ce3463d1f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/95c6b499787c4ea8ad32fb04be1c22566534f1ce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/70d8414aa28a9557520c157f987c765125f7628e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTQ1/MDAxNzU2OTczMzA0NDgw.TLgU7PO7Jj20QVNdyReWN6wQL2AjlQOsDKRx5bAwBOwg.xyYYD8Cdc1nozykWMCftYL7UGKCWCnzD5RB2blvXg3sg.JPEG/SE-61b7c5b8-895e-11f0-aa8d-e30f2293419e.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTI4/MDAxNzU2OTczMzAxMDU1.gx4w6-UG_HhGsg0cLERWue01z12kPP6RglTClr7qol0g.53IxaNE16KRzZZgVJA-sly-BxNNaI82JwGXA2Tujb7Eg.JPEG/SE-61b52da5-895e-11f0-aa8d-0f40c8807498.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjMz/MDAxNzU2OTczMzAyMjA3.q3mp6lIw4uLbLKchAaIURpKSLyQu4fTE8IUci0U4ZHAg.WstfECDJvpX_FikRt9BH5rv2Zk7x6r5iq5Y-oToyJKsg.JPEG/SE-61b66626-895e-11f0-aa8d-87d06cd68150.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTYy/MDAxNzU2NDY5NzYzMzE4.LpI5iDEsHEv6R3Mu79CnlaRqxvwtg3GNrSU3AuqoS4wg.dK4KYtlW_sqVlqECaZc18fqaNINS3US5zXJLEx_gt5Qg.JPEG/SE-6BC088FD-6F1B-46EF-9549-BB15F669C6FE.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTEz/MDAxNzU2NDY5NzcxMDY3.A4FZVy83elmP36BTXEkYUIb1elzzSddOemnx5w-V8dYg.OlS95ojoqhrfuDmnSZTqbuvnaSVxTwzgyl_OUvSz2mUg.JPEG/SE-E80AA7AE-CFBA-4A10-96C8-5B53086AF437.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjI2/MDAxNzU2NDY5NzkxMjIw.Tr7lnyiew8fRVR2EEdm2zvhAb4UW-eeJU70lHJZ05YQg.wsm8J5sFRcJ9cYrO-OhRMDOCGWP1fCnq88zdn8azkdUg.JPEG/SE-CB7C993A-4CCA-4CA4-B50E-2A1E6E8CB5FC.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjM1/MDAxNzU2NDY5NzY4NDE1.zWjj_hg3p7ombZkUMm5sixxIlTKx-5LrXu-Yt9RP5Lwg.OJA3-PsJi9t8dBmzX4nUA6yUvIhamhy0qhBZk1JSOZ4g.JPEG/SE-04D46E84-3065-48F8-83C9-2FDE29928CF4.jpg?type=w966' }
      ]);
    }

    const existingImages_k7876599 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7876599'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7876599[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1fc5d73154d0d27da91219e2a215e677d1c6e520?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4d7e4fde9fd15e02f06c957769514a2ce6fd7381?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41944634a44102222b43e756dfaeb7251db4956b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2e4a62131af611b2b398645fb9ee2e7026fcc663?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d18a72d6feaad515459241841255fc1d651930d8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7724dec69dc35b236e491b04edaa0c98f6bec92d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/07aa6b8f1d072c550f0934c1e324d6fd5e29f389?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fdcb9dd6d5091b19f2e3cb093a4c9052ea09b885?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/40ac95fc021fcc7058d3c68da956271580fbe4e523e6e96a8040e382530eedd0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed238e561f239871d318e866f4598c6147d03c4c?original' }
      ]);
    }

    const existingImages_k9021717 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9021717'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9021717[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b6192476e898193dc736cff84e68721b98f7438a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c8b5ccbf444e6001da3b94099f0c649a262df67f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f249cd12b5730184fcbce4d28cd7eec230575812?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bafe1988ac3767b5d5bf40d85545f5ade1324e5b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/96096cb5d89de2e84beb6b10da62304d199f2ea3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/07927005e5906a66a4d23f00b48c2112eea801fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhhmy8l0W_TDEICVZKzVGODoDsgTtbpK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhhlUvXeI_rnpkccbugnjLn102vLoGm1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhdSTBptU_skHhcGHnTyknTppwc62ad1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhdYF1WQ5_6WSIGqyS9m0ij2SIqrkHCk_img.jpg' }
      ]);
    }

    const existingImages_k8337229 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8337229'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8337229[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b504e35631ef9f30f4d56d1326110be7ded067c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/73d61d1d5e3079b78731f3868497a4eabd55c05c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/acc2b3348a278fd05023ee91773b3f343531036e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/968782556fe1ff73cf231b83a44b4a56cf138cf9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/21645c03949eafc9d8e3795c0334a0c9f1837257?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fc90796f545d1ec57edf8334e89464490bcd55b8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a42b9110823a67b220d513b57a9bde31208cbc4d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6b316940266308cd8e4a8f8d6bef7fd573700d80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e31785c78c0a59c23d43678920ce6296aeedf9a0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgQb0U7qv_FAHdpjUIAJi1rBzpFD13K1_img.jpg' }
      ]);
    }

    const existingImages_k8334549 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8334549'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8334549[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/349a8ba3d9708acc93e1046f1fb9b005369b15b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ab3c20a2fbeca341f9c29a5125cfe2ca27dccd49?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5c7d7f46e884bdb05d93eab7f0725d57aee998a9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/97624b6f97d679ecb2f83225d2604d02f42427f4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5567bc01e0608bac711f4ab3cf0dcbd7b8ccb213?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4cace28e4cce1783b89fb03b0629a20fe112e9cf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/750c2d68868aec0875104a27c57ce6a77b722d6b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4fa1c6113cc20de17f64456d7a50886341a58a06?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1bb336b5b05fad7be4e2726952c4586b2d0c5ef5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/210a93bde2bbddaf8aa361e8ca2e52c5ab5c83fda9892aec82f4faa7f9c4f19c' }
      ]);
    }

    const existingImages_k8970899 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8970899'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8970899[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqlkPysDyN_08bwfMdGuZckNtZlRmYN4K_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqlikMfBET_NZkup61O06kr6svDMqQXD1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqlg6nb0uo_C74Yhcdewpkrih1KF4JBS1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqlfqzrYAA_NqckDtMfqWPO7rL6kxPhG0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgdbyvrYQ_B4urX4m75S3rBjJIfHftK0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgciEE9FH_ZWVQaOOlr9DXM0R7Q1DQbk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgbSszpLQ_KKHegIdzFXoaG4RYMt08K0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqf7WB1meE_SOPtpiourLZoAwQjtIfIMK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqf2F8y5nZ_aPuWIODRBgU8HW2rX9saq0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMjYw/MDAxNzU0NDgzNDkwMzc1.IiFKVmCgbFpliA4DwBpxrktB7zSGwApcHy1dYViNUzkg.Cds3gUvUoxMg_7ULgUkQLwlIORNUluINqHY9aihMLhsg.JPEG/IMG%EF%BC%BF8739.JPG?type=w773' }
      ]);
    }

    const existingImages_k10338456 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10338456'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10338456[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3f92496cc0fbdcc2ad5b7745091d6f5989226106?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfNDMg/MDAxNzU2ODY5NzM5MjA3.zx0BaQMdYsxNDbY5Uu2imaL9WFtEe0b2lFoBuhtXkFMg.59tUJChGIXx-W2Ks_znhC3WIL54RXTzNO0eUm8FaF8gg.JPEG/900%EF%BC%BF1756869734344.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjc0/MDAxNzU2ODc4ODQ3ODAy.repBGYOWxQ1tbH3MxFpYlyPCrmD2C8OtDv5ajq6BM4gg.XPynDS1pqZZOUAJmTiRPHMWlYb72Sp5hfuNnz4MgjTMg.JPEG/900%EF%BC%BF20250901%EF%BC%BF120123.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTMx/MDAxNzU2ODY5NzM3Njcw.X4V5DSuWgI2UzCxygZmUnI7TUKRy6GgOuW9CJkRBIvUg.CR3-mxILq8bYH_VNTxZ-O5YDhm9A6cP40skejl3T2fEg.JPEG/900%EF%BC%BF20250901%EF%BC%BF115936.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjc4/MDAxNzU2ODc4ODQ0MjM2.0ul1TC891jNwDsR_Fr0BBxZ3oHEmh00hb-WP-0VQLTMg.mTeszWppsVfeoHbev7cU_W9AAiwcvGTkS90uqKn3_CAg.JPEG/900%EF%BC%BF20250901%EF%BC%BF120131.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjE0/MDAxNzU2ODc4ODQ2NzY4.dtApYekCnY6dgDwN-EDmyPQoV3ubNZ33f5MubBFhlJEg.u-4FVWrhO4_V5iiZjPKqzM1sgf_o8KBBxrwdqXQi-ikg.JPEG/900%EF%BC%BF20250901%EF%BC%BF120107.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjM4/MDAxNzU2ODc4ODQ1Mjgx.m3bADgC3p4VFwbwiW7-Vk1eNlcNDOE6w578ZgD6UkL8g.fX0NID9htv56gCM6mnoPwR-TihHR6UuqGhxhOz5GmEYg.JPEG/900%EF%BC%BF20250901%EF%BC%BF120140.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfNDAg/MDAxNzU2MTI5NzIzODU5.X5lfCorVKy1uP2BqBCrq1NMS2KPhIGHpTtg9XHHH5Ecg.kLjY5GKCRSjsMF2urscygzTt579rCLqVA8wkv__ZwuYg.JPEG/20250825%EF%BC%BF185922.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfOTYg/MDAxNzU2MTI5NzA1Mzgx.bYqUAXwRMbOT2qfrdOQnYoCi0FxcsIWvmKjKMFvjMjwg.yKJI_O9iDnTUS5nsmUpO_46x6YuMn43xjjRzwClzkTEg.JPEG/20250825%EF%BC%BF184216.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjAx/MDAxNzU2MTI5NzAyNzAw.lOe7826aJ0-XZ7HPke-1fWxpAbGZDULDWVZI4SqS0n8g.8ih5ToWDLMZcEZqJhOqNM5gQxFn5X0KmQB64vgg8MXsg.JPEG/20250825%EF%BC%BF184527.jpg?type=w966' }
      ]);
    }

    const existingImages_k1659320608 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1659320608'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1659320608[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_1550358063' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/89816740005E4AB2A94B46B32D2A1893' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/373FA076EE4A42F5BC9D3B4073656FAB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/200AE953D5D74B8790C2C22365CFDEFA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8A2553A98243490A835446A50EE71D79' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EF18E0ED50D841A3A4532BD37628CEB1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4474332FD364424AB44B62745FB14707' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/055862388EEB4A599A93E90E1F4E032F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5262BB647EF849738FA99DC48CBAA78E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/27101879C20F48479F29EF3C5CAC6332' }
      ]);
    }

    const existingImages_k1706344434 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1706344434'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1706344434[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bea2679bcb8a342dc6da98695e96a37309773db6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjIg/MDAxNzU3MTYxNTgxMzc0.NEImDpWTmbQLaMYw9pe0RyTOffffyFtkZ9UA9UzK21Eg.Kfr-V7v-JTGt6wve-JJKzFlKZI4cU0JCdRXL5JovaSUg.JPEG/900%EF%BC%BF20250906%EF%BC%BF141200.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTMz/MDAxNzU3MTYxMzc2NjE2.F996u_OSNrxxSY5XLVZtXdSN2Or5YS2hbxywl2GsTSgg.tE7NMuUc9NYXoyUyLI7kqQ2ezg64vvoACEgxD67zmk8g.JPEG/900%EF%BC%BF1757161371211.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjc0/MDAxNzU3MTYxMzc3NDEw._wtwAtaHaPglMOx9LiWvBNCPblj96Cto5UiFtjJIAu8g.XlX5lLM3B7so5ySx8Fs9e9_qC-cDpETvi-oSvkKl6Tsg.JPEG/900%EF%BC%BF1757161371588.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTY2/MDAxNzU3MTYxNTgzMjMz.N6h5x1APeb3RKGs3I-m2OXVqkEaTzg_V36q2xaj8fu8g.3L4BRrQuzuenNy9S4JY20qyYnQoYdfJeePDxxLbqcRcg.JPEG/900%EF%BC%BF20250906%EF%BC%BF141154.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfNjYg/MDAxNzU3MTYxNTgyMzQ0.RSHQgYQh4ftQYp6-GHIdSEyTf660iaa0B9saF6vgGgog.uekHW-g6JX4Ykyf2ypNLvKNJrVL0-eRYqs84HAhrPqQg.JPEG/900%EF%BC%BF20250906%EF%BC%BF141207.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTkw/MDAxNzU3MTYxNTAxMzQ4.bKbQSrPXNVpGZh5xvmm24ZJJmL5wMsa1cFYfGPopVywg.XPjXYuUKpMyQndqz27NXDW8YTSz1AD3qYTjrhyj_KOgg.JPEG/900%EF%BC%BF20250906%EF%BC%BF133329.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjgx/MDAxNzU3MTYyOTMwMzgy.3AFKDhwMbYyIQS2Yqd6JVCD601rqURTR2gFaUp_FgbMg.2803zQklBluoAIXuRGLCuYLGoZT7EqgWgzE3Oca64QYg.JPEG/900%EF%BC%BF20250906%EF%BC%BF141224.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTc2/MDAxNzU3MTYyNDc1ODY3.mXF1qycqEQaT9oxCjXVkmXhLIL7fvTKE98scsE826MQg.pdtN3NkBYI3DOTRcpDv564cB-DZRqGwJ2C49bJSqSCUg.JPEG/900%EF%BC%BF20250906%EF%BC%BF134246.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTgy/MDAxNzU3MTYxNzg3NjU4.s6CyRvowPhwSqiihqMkTk8f8OhYUUVmucPYdrBxzHG4g.oRy7FUA9EOF7y-pHm2xcHorI2YPZWp0T4aOLMC78Ymsg.JPEG/900%EF%BC%BF20250906%EF%BC%BF133919.jpg?type=w773' }
      ]);
    }

    const existingImages_k1633887187 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1633887187'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1633887187[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EA9C6A63EA534D61821FB00D71D7639B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DC9C84DE4C9149AD9D20F48B30EF545C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/ACE6315AE545424897DDF78912EA90B8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F45E8C582C00454C90DB10622B6B34CD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTk2/MDAxNzU2NDYyMDc5NzQ4.DL2DLWgYLN-56ybWz4Ekd5Zb2f7OnSfPLEkeQ5GZoa4g.E8T9ldkpcP_jliDkEUZjjQL18Hk8QlOtZFzDUCkoUUQg.JPEG/IMG%EF%BC%BF0687.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjc3/MDAxNzU2NDY0MjM2NTE2.FQqRbvR_Wd6seYl6v9jejFya1_A16QTDJKqiUovYdTcg.7feZilxJYdKtHusCH_KhW15tV8Rwk9DU0kf-hrkXZjsg.JPEG/IMG_0715.jpeg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjI3/MDAxNzU2NDYyMDc5NzI5.cJmim_hi1vSsV9uCw8KLiMDNblqct9tsp57H9YT8mHYg.KBoq1ovL5TbzDk4AQNO6zfW0R8AZcN1KrCVLXQTSkvUg.JPEG/IMG%EF%BC%BF0671.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTQx/MDAxNzU2NDYyMDc5NjMy.QFY3VHljegt58Nkff2_VucELBjyMZ-5s6NcjFKOkHGYg.msvcUltlNraVstCUZhc1XU_ccFd986ppJ94a6o-4g74g.JPEG/IMG%EF%BC%BF0695.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjYx/MDAxNzU2NDYyMDc5ODg5.n7aniFOXtT5FiwcbHTK2JSOFQ3MVQcv5OQXHJ4ZChGYg.tuQ_3fw2nfBCSDXvtgZy1HtRxQn_M5XjAwCFrKm7DD4g.JPEG/SE-b5a90583-adb4-4ed4-a925-807ee997fc32.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfOTYg/MDAxNzU2NDYyMDc5NTYx.62cQ06MChr45IHkrzCRXXGKQL1vp5v0D3tkhbCA9Smwg.nPFqiJBomDU7DuC59MTF9hhAsVdThQ1DdWa7T3kljCwg.JPEG/IMG%EF%BC%BF0702.jpg?type=w773' }
      ]);
    }

    const existingImages_k24961649 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24961649'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k24961649[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F347E8903263463A9B812FD35B7BCAAC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/294FB3FACF27440EBA21F4DF0BCFC84B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/556A327B90B347569054B63CFB1BA18A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/600438B7C7B4489FACFC7533683C2275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/65C651E038C449AAA896FF704BFB3704' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6BB2D8E911974BAEBF9957D49A1F8FB7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d87c6df99cfcd955294a021e8e230f87e4486f90?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d02dc6757145e9885627218ea8321f0039090243?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/23470a6fcf69804ab047eced1c53e26e4fc21ef7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/81e5b1bf212d0d48ec5d34cf938bad7243c8e2e0?original' }
      ]);
    }

    const existingImages_k126351202 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k126351202'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k126351202[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjY2/MDAxNzU2OTQ0MzIzMjEy._-qZ40jQyk87xo7qGMj_55ZgVwws9EeKQRknRqny3Jsg.kUIqe1U0Wk4WTVztYr6QWA56MOV0tCU7wW3WZQv10eMg.JPEG/output%EF%BC%BF474166239.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjYy/MDAxNzU2OTQ0MTQxMTIy.n5X570gSw26hpvZVpC6dqOazQqQUn31IWOFv6osH-Fsg.n86qbOPMon5zQOI3_ll3jMq-uxLA_yoKDxVjwE6pawQg.JPEG/output%EF%BC%BF2951454450.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNzMg/MDAxNzU2OTQ0MDI1MjMz.3nscQPR_Nb14g-RoS-1i12kguOg4-6sFp60hKSxojgIg.0p9Izymatu5cC6o5s4nme1OCpV0GIWRvlgIv8qed_jEg.JPEG/IMG%EF%BC%BF8006.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMzIg/MDAxNzU2OTQ1NTI5NzEy.PouWKj9kOpuh1AKDr59HN7sl0-JxRo6eGMpLT4VJN6gg.ZtqNeuyX8jjVAkojHcXAzzaPEiEp4Ehhij25rnQf6Rkg.JPEG/output%EF%BC%BF3644105665.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjcg/MDAxNzU2OTQ0MzgxODI5.JLi9R1WJFKBnfG8_oOqaeoqDM0X0Gm-WxuNkY-vNvPYg.gUK6212MwRRrqG5yDzOFJLajmSFPt6FFX7Sm2ULDlT0g.JPEG/output%EF%BC%BF1933125323.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMzUg/MDAxNzU2OTQ0MzkyMTE2.xlW6xPPc4S6yDqWR5iRKVeU18HbCIr8onUDBrb3-FE0g.FSmxNTfWUINe_pS6Dpk_-vfKSPpcSrKWm4gMWLPAY8wg.JPEG/output%EF%BC%BF3782359257.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjcx/MDAxNzU2OTQ0MTI5Mjc4.IUHeQK2OtZonKAfUMDv90WU_O0L5nm0cGXB4helM-9wg.Ar9sPK9FgatBkD6TXaRllDZh8ox51Hp0qtZT3GH5uUkg.JPEG/output%EF%BC%BF2279455703.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjU5/MDAxNzU2OTQ0NzkzMzUz.tuxaclmTnvTzFTEY0HAaR_lZ2ult4EOBT6pvhwKjldgg.28UUwJ1wx4hv1f_ab2Hp0Wb4IxM-pweRpg1Nh32z4_Ag.JPEG/output%EF%BC%BF3956529544.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfODQg/MDAxNzUyOTk1Nzc4MTYx.0w13TcztgtBu22Kd8SKNizQM4UyMFQLzkaK1-AwXT3Mg.BjgY6yjSncLC_nmbLOX-xLw_LkscMe6Xf5PeL_ym26Ug.JPEG/900%EF%BC%BF20250630%EF%BC%BF112006.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMTE0/MDAxNzUyOTk1ODIyOTA0.N6yvN5xhZzkwnXjBsvuC9dS-3ZCLrHLw4QFJYZ_SO8Ag.n_sfIC3o-4esAvVniha6N48zJlB-Tps5HMHzldAnuosg.JPEG/900%EF%BC%BF20250630%EF%BC%BF114043.jpg?type=w773' }
      ]);
    }

    const existingImages_k21338886 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21338886'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21338886[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e2fe7144c69ca2dcd002f15f8901703e7dbbe20?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bcf79bc8a13a268bdba5cce58eeaf4ef6ae92225?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/53b951d095544c874baf0ab078bab96ca2c1ae5c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/470f6373ffd298e1436e9a1ca1646da4c8ec6659?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d350bf9e855ae9fcfae715ebd7c595d134cce4f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eab195c9690125e629b649d3be4a68dc02f18044?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7fa468d4d7c17117c8439a9913bc97792b3fc72b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aba8c179c7870f42b3f184e42daed873c620ff36?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/430b0149475951992b2073d749357b587836dc28?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/278b2b741a616b6729ee1895f3ae2c0e4330d65a?original' }
      ]);
    }

    const existingImages_k1520039499 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1520039499'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1520039499[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMTU2/MDAxNzU2MDAyOTA2MzY5.QZa4yc5lfz8uv-4U-3ccSZ6UAcbsBx5pAH3eP-gfbuIg.s0sIQfmlCP_eDe-rWlaOBoWJqpSn6Ts70_7C4B6UDJog.JPEG/900%EF%BC%BF20250818%EF%BC%BF123656.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMjc5/MDAxNzU2MDAyODk2OTQ5.ZVk95ET-os6EJDCt3ViXRI33g9pqxU8xxmDEeS1W4yog.cayES4yZgEyUG70N2lSLXHnwauLTcAgaT5C4l2qFYmAg.JPEG/900%EF%BC%BF20250818%EF%BC%BF131535.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMzAg/MDAxNzU2MDAyODk4NTk1.ogBQI0Qhb-FCjRMq5Cx2BFImuA_7zReqxBi8VYoP86kg.PIJLYd5PVd6SCn4kEAWi4g49RwdsiFiHo5jT3aWUzzEg.JPEG/900%EF%BC%BF20250818%EF%BC%BF131401.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMjQ1/MDAxNzU2MDAyOTExMjk2.gjYwTCcRW0lQ-iOxHlFX0L5yFMQXBA7e3ekekcebiq4g.XZYhjlEbqTgvT6qsnHIhraQkfxUa4Y4mZJCtJLMsI6Mg.JPEG/900%EF%BC%BF20250818%EF%BC%BF123658.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjhfMjUw/MDAxNzUzNjczMDk4MzAy.rnxrCkcLdU19p2ttlk47ZIIFmxki3Pb0QfHSvBSYf54g.tOA3m3W1KXq10_2NpqdD1l1EuTpCatNjdrvNXRFf2z4g.JPEG/SE-43BFD434-1C19-4CCC-9889-6D394AE9FC55.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjZfMjMy/MDAxNzUzNTIyMjM3OTEw.dqf9m63gYWkJLnCdLBeaL7nnreLBWcSwRuVn8m9nJuEg.5bgpbyO5ylnFyn2jMx0DBfyWx918ouJK7qKLcxVNU5Eg.JPEG/IMG%EF%BC%BF1115.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjZfMjE1/MDAxNzUzNTIyMjE5OTE5.Ru4diqU-q9N1FvaT32MWv0I2z-WaJxznzqbOaCtaucQg.-4P37N0nZ6u63-7iDZRjjjrDX8ux9Szv1fLvKqG6s2wg.JPEG/IMG%EF%BC%BF1110.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjhfMzIg/MDAxNzUzNjczMDk5MjM2.EvKQFoWZb6MXyJvjfpPBZBB7nJG2vDkOqKIGUC2evNIg.VXFGE7TkG2pSujhCYL-4J4RotzLB_fNO64Tyds36ey0g.JPEG/SE-69EEEB55-6DE0-462C-ACCA-CDCEA235F24F.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMTc1/MDAxNzUzMzM2ODYzMTk0.LJuWbXfdvJU3sDvqRFTHtV91mp8puf-MYv1r-rUoYrAg.E24Zx2fIl5MBFC-kX_LwVB7vRcRCFTbnxZ7DFAs4n90g.JPEG/SE-ac8e619c-6850-11f0-874b-2b46e9499cf0.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfNDIg/MDAxNzUzMzM2ODc2NDU1.-T8ANXCv0FyRobkC0OG7LiDBP_kAJi9htilZabk6csYg.UxaQnlTZrVb2DBaMqWgd_jXHHRHWy3S2AgEjzDpQQZUg.JPEG/SE-fd89bcf7-6850-11f0-874b-abd44286ef27.jpg?type=w466' }
      ]);
    }

    const existingImages_k877544890 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k877544890'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k877544890[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e4b8eef95495eb526657beed7ffb3f2bd608997?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6f6d95045141aaa494e8cc822e2015e6897f2356?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjY2/MDAxNzU3MTU3MzExNTE0.ZOz4dgTzAlN6Hgu1Iqzg_jn1M3nlSIgNBlHgkyWFPFEg.ZlsF566_J-CJ7j5ikmynNiOUcw5J3Dh-EAdhcq5veqEg.JPEG/IMG%EF%BC%BF9074.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTY2/MDAxNzU3MTU4NzM5MTkw.ZS9cHKuBWnn1Ltmx0wERHaVIn6tT0SxiNWXMhxCXh5sg.wl7dJtLAWzUMqJu7IE4qEwokbyk_027Ro_G8ONA_IMUg.JPEG/output%EF%BC%BF4025573811.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfNDMg/MDAxNzU3MTU3MzExNjAy.Q-FFm0Pvi5ngAC4pkmTC4SI_t3YnWCOOmrPggGnXoRIg.hZmtg4U_DQGec8toJ78pAfRADYFwzDO6y9EadhKKMHQg.JPEG/IMG%EF%BC%BF9134.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjA0/MDAxNzU3MTU3MzEzNTA1.eLywYOBKKpimMDwJ6_Rwsba3U_9UHWHwpF3EE9yf9zUg.cd07ExQkGXgbZ4qe0MK4UABVdxxsW_lcJiCRe4_PDC4g.JPEG/IMG%EF%BC%BF9071.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMyAg/MDAxNzU3MTU3MzExMjQ1.Nnj6PpdbhUHDB3_eq5pXi5ZWAc5ZAH5AM2IQVxGg64gg.oVekdFIOPKgNrMnBaQInQMZAWBBF3yUlElf0dV9yF_cg.JPEG/IMG%EF%BC%BF9068.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjQx/MDAxNzU3MTU4MjA1MjM3.jd9azhalSNi0p6Lo2x0VcqcwU03gF15WeZ--POvNatMg.OvNsTKUgbmZF9kAx1d6Xi9NALpBRTgK5p5DZUZWUh2gg.JPEG/output%EF%BC%BF3781387388.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTIw/MDAxNzU3MTU3MzEyODIx.yX99sdeowPELWefXByGxrRmpThpHF31nVjmpsVPIPzYg.zDVwAps-GMlIZPiJCWpo-vykPXn8IQwo2b_pffUuO14g.JPEG/IMG%EF%BC%BF9117.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjMz/MDAxNzU3MTU3MzE1MzI5.mppGqKHTEN5oeWMCKxp21-DfqnO_CuAi9jYIuEO4J3Ug.44kR63mtP_wfO812gC9XEptWXPZEd1Z73g4ETo2dEUQg.JPEG/IMG%EF%BC%BF9133.jpg?type=w466' }
      ]);
    }

    const existingImages_k993056601 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k993056601'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k993056601[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/686DCA828568474CA90C7C33A23496D7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/058F0F6180454933A6A5D799A6CB057E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FDA7E01608FE4770B0C3CB2FFB9743AD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/08EC8526625D4F99807ECBDFA25D8D33' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F8C2AFDB64AD4901B906D3E3AF9F7F5A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BED3167B7D29472E957C94B07BFD4475' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/881287C49E7E4696BA93712AB75E1518' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EFD1AB0F62434BF8B1481FCF4CD964A5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7CCCE9E2F0864D749B946B7FA736BB6C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/85B42E40D5F84B3A8E24AEB7E77C3C59' }
      ]);
    }

    const existingImages_k21346457 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21346457'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21346457[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66577368b76c93849b00c2d82a978d3387f8aa3c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a2bf6602f1d942210a538e14871c03a04e3abb0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7234b7c3d03d77e0d5c7ef6591c4071b099a3f3c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d0f433c6121620049e7bd29177776e2aafe7036a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a3b6ce568c82ef86b84c583cefad0a36fe5a999c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/86a297449aa97163e0412267d5ac1b6ad5347bbe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/978d429e57b3c95659f011bed022cc0bbf756b84?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5bb743cf0728da428404d01a556b7cc6d4bb609c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e90337256b10688f44584e717508538994743a41?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ee0dfa220652a910f13e590b2d24cf67b4ce042?original' }
      ]);
    }

    const existingImages_k11891867 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11891867'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11891867[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTJfMjEx/MDAxNzE1NTEzNTk0ODU4.GDQg_ckxZL60XrH30MnOXjMQ01Ye-aMhJrPe50dZtA0g.DLpy4niOUnNhLkxVZLH78toi47hH9h5XMtu5qb7aWKcg.JPEG/IMG_8514.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTJfMTU4/MDAxNzE1NTEzNTk1NDg1.WXkvivIB8x2b9va4qOZrUBGx_t0mhgAo51BTx0qhRvwg.hSHkN8D1w_wLoZQGSgXh5_n8qrqYvXYxn3nJ-9pUNJMg.JPEG/IMG_8515.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA5MDRfNyAg/MDAxNjkzNzg4MTY2NDI2.EIAtaszYc_NmOd7_mLh7HiZ_0nrFScySupp676-6WXog.UQzkximD04JujhYSxwnsi9O6FLqYm8aaIj1xVS-TjMog.JPEG.01117166589/20230902%EF%BC%BF123438.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTJfMTIg/MDAxNzE1NTEzNTk3NDM5.SuU-V9f2Veqd4l6RFLb_q58ZCYlkQPcBCO_7Y2LWCCgg.wV92YiPTll-TnfEu403h27NHbrfKOynptf4CdLd3Wjkg.JPEG/IMG_8507.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTJfMjQz/MDAxNzE1NTEzNTk2Njg0.E_gFEvtcl6HOF6U71SMN7JMtxIgz5akg2XeVSHHISTYg.1XciOvpVIXh4FEbpXe_oBS_PeS-DGJsWoEnFppjAPMYg.JPEG/IMG_8506.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTJfODcg/MDAxNzE1NTE1OTk2NTQz.w5NPUNmHLmho2PJIi7GGSIzpk4mUDR3AQkoY81QrYrgg.v3jyTLaNrVQz_2YPodXCobLJSsZRb8cxCBJ5S4R4Kiwg.JPEG/SE-E16EF083-7575-49B5-BF64-6E4A8C47EC0D.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTJfMTkx/MDAxNzE1NTEzNTk2OTUy.LMzwDMYe2YsgjPViisoOoryh77tXgqhHRb-6mw6yzrIg.L70oA3EHGl5GnbUcikwOWTAjEwL2EFK7lOO1hYeeI0og.JPEG/IMG_8508.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTJfMTk5/MDAxNzE1NTE2MTcyNTgw.eBU_LI4sghozJ8umWSk2kK2qfkDHy9R9I_BG9veZFMMg.Uol7WRrOGOcBBSOyuf5a15ge2sYLgwABOnQePLSUFY8g.JPEG/SE-9E145255-3168-4E83-93B1-5F42EA8A24CB.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTJfMjkx/MDAxNzE1NTEzNTk3MTI1.NaMjJzrz3TtrTnLygcJfo_6041Klypxg-copnsVu-mUg.t1kmH5S1-mV8a1b-5AQQC-WEp2cCYtOV7hZ36yUkTWMg.JPEG/IMG_8518.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTJfMjU1/MDAxNzE1NTEzNTk3OTc5.VH5ZeO60dY-Dmvj41e6cm9hDbgmgRH19NjqfvtDMMYsg.MYLAtFzyyjahJlaKgRWIswP3dLOc1RmYQwNMk5LQ76cg.JPEG/IMG_8511.jpg?type=w773' }
      ]);
    }

    const existingImages_k7825433 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7825433'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7825433[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6bdcdbb8a22ab2a1947ff9867e60e6690e52c227?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c333a8731688c59373a5932ac139fa7d32759c56?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c691d7ae13c44aa48751a1e77fca65c292523065?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/95c0d7b07b159b3db2aa2244fde6ea923f4990c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca5747d65a955c6a21f33a7d697333d40612962a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/85d4aca14eb3087e109bef5437529138f7741a34?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa7954df5cc34bcaa38a92ab7912651d17958c1e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/beade7abd873778b1e3312e546584e8e4cdc55fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/151ba3686e2aef389e8f77f484c1c034cfefd877?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9062142260777764884fd1375d86b3432544d09a?original' }
      ]);
    }

    const existingImages_k7825176 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7825176'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7825176[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2e1411d025168833d203c7e96caa40398d8a2e62?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMjg5/MDAxNzU2MjYxNzA5OTQ1.DgHUoH4qvm3CSNmvnrcwZQUYCCcJawu7B_gzZsKeTZEg._veqBeP9faq4mSAJ9zEqP6dWE187ZO4CEv5pwTnafbog.JPEG/SE-3484332e-8257-11f0-b7a9-af3e65183530.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTM5/MDAxNzU2MjYxNzE0ODEy.2N6_JPK15go1US9_96BJYAj3KuI7jVPiEmZiJSOk7yAg.V5MjojpkCUoJRlreeVz2ThUOauidyeWGsAxcdU4SPY0g.JPEG/SE-3474a2c7-8257-11f0-b7a9-1dcc84cb3027.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfNDgg/MDAxNzU2MjYxNzIzNjU0.WGZWUhMFy196A-Dy3gKrl4kUBH5d2aKCIYQgP5tRF28g.PZPQ1SftyY_kq5h03v0tOacIpP3umm7ArrRBbPUfOrcg.JPEG/SE-b7ec5bf6-f1ba-49ee-867d-4836cc909746.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfNjgg/MDAxNzU2Mzg4NTU0MDUw.b8Gz0Ny1XgWzqjjHVJo6bNrVitKL-8tg77f8CL4arPQg.ckqDfrTU7zvMKg2lHY8S56WnuWfQoSsWWBBOjSgb2Osg.JPEG/SE-ffc9ff5d-0332-490d-8dcd-8a43eaafa248.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMjMx/MDAxNzU2Mzg4NTUxMzM5.hoKT43fra0DFySCC7GABa1Bs_W13mqiXMF6fIknShU4g.tLmPR6hRrlFvLbeSrRhOvxDUfEJg4eaTbea95ssNwTog.JPEG/SE-ecf57bec-0fc9-4a8f-8d9b-48e29f2a0a4d.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMTMy/MDAxNzU2Mzg4NTQyNzQz.-bE_cQG9GBVXldRq2Qyxv6c6TSs-NJV0t6qfAyqqNBgg.gpv8aBumC0c4J3-aap4Nbux2W_lWeU-qWJYNRxocuJcg.JPEG/SE-9260d59c-d19b-40fc-8fd9-dfe03d5e19bb.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfNTgg/MDAxNzU2Mzg4NTU2NjYx.OzpwiIvrI2_9DrU_ldRyBpjUqznxgdrK3juMBDtUeJIg.dwzYpcI93wmkA-YfRUWPKJGKm6TVoeEDC6adIGSdZu0g.JPEG/SE-6e4ab44d-5638-4de5-afec-7970cc2dffd6.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMzcg/MDAxNzU2Mzg4NTcwMzYz.1AlL3BQXDItkzYKTlKwGvKtxXVKtpxnE7BZs8fVW6aYg.ZJJakrEvqFlTWsTZzFfL-eoLcZt7Zd9-yNDGUWGfi9Ag.JPEG/SE-f8843e3f-c84e-461a-b352-3d79dc777aee.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMjk4/MDAxNzU2Mzg4NTQ4Mjgw.6D0acHkxu22i9QEY_ZowmE7XF0MGQugiJHpilhrkZJkg.xfl5OdnjAWpavzytoyvUUHPW4ME_arshueIKKuRxKEwg.JPEG/SE-19d6a7f6-bd82-4774-94cf-7e3b7f183f1f.jpg?type=w386' }
      ]);
    }

    const existingImages_k8455368 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8455368'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8455368[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fbc82ff78cc7372da7f9d53e2ffc9d2f1e1e2e2a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cee41f97233d678d85bc2d52fe8b7d18f5e3d6f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66f1c0bcf6f537a37021e19a91c6f7dd232651b8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/adec3586d07e85cffb1fd8e9cd4b7387fca4a13c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d29c2256f600a7a5ce9bd70f7f5f79c973e71e37?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9c65e782bf72f1077973bc0924ad2293a4e3195e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1f964bbf90beba489d918e18635e1bd707b77d1b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eecd4b9079353e4cde875ad3828ecd8c52a53fa9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a4b296c2733cdf35b92b3a90108db763121a3cf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b23ab0d4b4a30ba81ff7b0581da560a2296709e1?original' }
      ]);
    }

    const existingImages_k7814957 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7814957'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7814957[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjY5/MDAxNzU3MTYxODgwNTY4.1hva3xmV9isim6edAayFw4WdPoMPHBzo9ETR-aWPpT8g._OWD1wn5RgoK47BlcwwxMTZqSYuLVC7gl2l0BIB2QlEg.JPEG/1757161858763.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTY2/MDAxNzU3MTYxODgxNzY1.jYUtEnuaYmMp6x1Sj4voCsAbGY4lOOQsr1Nxp5SqyVMg.LzrTMOQXgIOjGi5Wp9ITtChFtUGmYM4A1GOuICnCLxYg.JPEG/20250906%EF%BC%BF182439.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTgw/MDAxNzU3MTYxODgwNjIx.iOaAPck3bpj4Pjpmo8sRNoHr5xBwdgdVfQ6dTi5jgOAg.eLXn7zhxZhEjiu-7m1C_iwnwBtEfIf3F5UhhxJLiH1Yg.JPEG/20250906%EF%BC%BF185730.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMjc2/MDAxNzU1NzYxODM0OTc3.s0YMVTt0hhHzDUPfGmmJaVN_FFfqelDxfdLlE0-P4TYg.K6np3ailE4QbbfcaVbbIwuC39ykSXfV4B5Qfb-zQP68g.JPEG/SE-c29eb1ca-7dc3-11f0-9fd7-2180ab48cda5.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTk0/MDAxNzU1NjUxMjM2NDM5.2ykk6qh6wCEvpJag2dgUAy41o31eDuuUuZ68tEyUa74g.aO5Wi0ic1vCcCyrFg8GyxpY2HJqUbEubAaQ3dg-lcs8g.JPEG/SE-fcb3c7ca-9fc6-43a0-8d2a-dcb2d6a07e9b.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjMy/MDAxNzU1NjUwNDI1ODA5.8wtvKotCGYhQF4hjYIky5pVqUwMS29kbm--xOlYEeN4g.hytUwTWOyULayeOLhHJuyeiOogqihF__jFmqt7vZQtAg.JPEG/IMG_7914.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfNDgg/MDAxNzU1NjUwNDI0MTg5.iuh8AZ0P3IRfwbTuZXtQYM4MfmtRwrMaK76Dgt-PS-Eg.PePY7JbjRNvTAAW7bbRB3eyDf2skn6H0LRxvRosIv9Ug.JPEG/IMG_7935.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfOTYg/MDAxNzU1NjUwNzcwMDQy.lrrI4VgeqnaO1X0nF3LxiWNL58UaT_sffzPMVpQfw1sg.FByKwMcyWPkqtYPJJmGNx-2PI9C2E_MHRhV3IAylTu0g.JPEG/SE-c65ac967-f525-4aae-a069-de6c1e38b925.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTY2/MDAxNzU1NjUwNDI1NDQw.7qrLyV8CCOsLwMLatn1rCUnAqH-c9ljvumgpSbe7Fkgg.hGLq2uYg5dT6lpfldWie3JH8FNrc8Vc_NkNVnVWyZ2cg.JPEG/IMG_7927.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTVfNCAg/MDAxNzUyNTA5MzcyNDA1.Q-Wslqv2Iw_-Wra0WC9JmsgX9cRj4hdgMTBXzOKexUAg.Pv_5OWqpiadf67MiAMfyxkRG0FFgExQirRljTUeG0Zwg.JPEG/KakaoTalk_20250715_005509410_01.jpg?type=w773' }
      ]);
    }

    const existingImages_k1228313470 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1228313470'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1228313470[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7b1e4181d332f263b7023b2a6c820e758dda6695?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/998d4345bfa34f39eae5b5c78a9f00934435b4fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6774844e28df40edf93ecac132c95b995480d3d6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjM1/MDAxNzU3MTM5NzczOTI4.V-vtRPH67idxx2_dr1wTTEAtBnZ5KSM3x5XziEnqZNcg.eVO5gCyHLCocfeSW9uuc-pksX7TlMZuMbbxv5svXLkYg.JPEG/output%EF%BC%BF477625237.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjg2/MDAxNzU2NjM2MDI5NDc4.m95A3P8jMqyjOSqX2mRtr_dwZqQbytBA26cAOvmGERUg.n2kkza_02k4J76X9U6LEs4SUOSBkXHMJL63bCt7SzJcg.JPEG/IMG%EF%BC%BF3767.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMTIg/MDAxNzU2NjM2MDI4NDY5.i9mwvjrlYQ8J8ZRBifaM8iYd7Yu4zXyWzudHy5toy0og.xa4onQPJXAcZDgBMBqIdT0gadBBdB62VB0PT2gyrJ9Eg.JPEG/IMG%EF%BC%BF3765.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjgy/MDAxNzU2NjM2MDI5NTQ2.sg5HegvXTZosdv3j8A3m8c9s9BkOy3Lo8yu-vWARoXUg.QjRUJXS4S_cR1cAJeqVLTw24fEAsn1rHuZzFd7xNXygg.JPEG/IMG%EF%BC%BF3792.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjU0/MDAxNzU2NjM2MDI4NzM0.SLbyhSOQKOrXChZVFFlE8VxGklstH0x_vu5f3p55LaIg.7_dDog0rOT7A4ZD-1Cexokbmvol-8auBT93cxkf2TdIg.JPEG/IMG%EF%BC%BF3771.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfOTAg/MDAxNzU2NjM2MDQyMTU5.vxjaUxU-vM_YqxS7i0_E7Weo6BmlsPiNWMIHSWJx1ucg.fEaZiOgrfrCYrpJXjBpHmGP2AFhCM5m-5ZWMlU-gR3Mg.JPEG/IMG%EF%BC%BF3788.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjg2/MDAxNzU2NjM2MDczNDcy.Z7I2HvFJG4KYPMSeJlFKuFFzP3dd8owVxllctwMvACYg.mrJdeY2DU4l5NwyX3rEyCVwOCT_xQRtwAq0LSj3lw4gg.JPEG/IMG%EF%BC%BF3789.jpg?type=w773' }
      ]);
    }

    const existingImages_k11017612 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11017612'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11017612[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e6faf629d5837cf86d35b5cbe0b0c576f5ebe003?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/74d279b9045f19fa73908e39764491694a3519cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b06bd304c69e0bd72b63a4709319b3fead11f378?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e96c0f16fe34ad9556fdcc0b96ea78ab40558572?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0b8d2e58455048e44e79e40781ab6857fe825ae3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7cd35f17caf5021f886ca5fe0c2ef4afb3b9096d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjU3/MDAxNzU0MzYzODA4MDUy.rQxTDmnvxwJJhAQx4F4AahOjz58pPjsl06RnYDSzrEsg.zvM8vMTHzQgzwYyGvBLOXtznK9c0UGvoAR5_fnsm7LQg.JPEG/900%EF%BC%BF20250804%EF%BC%BF202826.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfOCAg/MDAxNzU0MzYzODA2MjMy.9oeR0NQeT3RjCq7VeEVaTsFerNKEtHdDgJvEJO4bzOcg.B8SDoP1qp6DjcfLylIb4dnwjRX2Rm2xRCGr8zjMK7ucg.JPEG/900%EF%BC%BF20250804%EF%BC%BF183352.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjYz/MDAxNzU0MzYzODA2OTIw.N8z8kJzp4LBQViku1LBtx3uMboPZGIVXvhQc0aVqHo8g.K5GccksgEgypvxJisSVJMSLSiLqsptv321sGQcs79swg.JPEG/900%EF%BC%BF1754359886773.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMTQy/MDAxNzU0MzYzODA4Njc1.IoXy6ExwX5snd_moh9Et21NZqIcxv3daXgyvxix2RQUg.s6YXzKvbENQhYMsL0supBsoC5hlgorhGV2-p1oxN_aAg.JPEG/900%EF%BC%BF20250804%EF%BC%BF202816.jpg?type=w966' }
      ]);
    }

    const existingImages_k8793742 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8793742'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8793742[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8daf95d12bfc7660ee3f20ce2efc02ae6a3e96f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/55e112f1b818cc7741ee9ed8aa721f6ee2ff1b5c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e357c62de4143949bd0f7fee0c4fcdaa18aba17?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8c82505d610202eb53656dbcc3e59580a9a2543a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edb19803cc36fb3bc129a71f6aaf120c2f2815a0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1a0ee4925ee567010c19113cf94d29845cbd089a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e08a935d0189125b1c37d5e9f21a28f813852897?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7df77c2b09412d1555a5efee9515c37207fee1be?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d4364821fd8ccfc5a2e212d0d1e72091285c04fb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c531b0fedad6670ed1811ee041f04b25c6a33662?original' }
      ]);
    }

    const existingImages_k10212613 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10212613'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10212613[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f9fb3ab584aa1b086e08179ad7d1be3504605f38?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b3ea1412bc27e00d615a95296e55996f65ea2011?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9cc9f00c03219f0c22d51e1aa4b22cff896a79f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMTc0/MDAxNzUzMDE3MTAyOTQx.-fmpNB_j2Ne30UU8rLYtynKsWLcCgFrI9Xg000w_ggQg.JK-1Bvo28hELwTTGkjknIDIKvpJhZL3CXUt7ol6Jflkg.JPEG/20250720%EF%BC%BF122147.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjQ4/MDAxNzUzODQyODM4ODQy.iiWozQgxmaDjIqPw72MNZ6_G2PX5yZZ4ruT25y56TEsg.fc_RiUNLkWUao47i_Lv0RkjuFr-mSXloJopcWNS2214g.JPEG/SE-e788d564-b3d4-4b60-9082-112d17c5fd76.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMjI3/MDAxNzUzNzgyMDAzNjA5.uKNt5a5DpKx7HMJxJ2rXCATcN0Y_mcbGuv1OZam8Da4g.NEBuGE5WvVtkhH4E2DwFd7EhbKVDdJP891m3ZMuTeeUg.JPEG/1.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMjgz/MDAxNzUzNzgyMDAzNTk4.GQZI4pHsnRJlIeKYXuTeebabidGMeIEjMez9LzCc0Zcg.KxQgHVA5z9lIw_3kiU3T_VXr_QLrBM-gIvwFd3bHYcIg.JPEG/5.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMjcg/MDAxNzU1MDg3NjcwNjIz.n1gm7MyQwgODeu9i6b5WN4MVD1gTGf4UGUCnPpboeBEg.lXCKrxtZWndjMXZp_FyaUP1WUi0laujueWCqw6eE45sg.JPEG/IMG%EF%BC%BF3123.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMjA5/MDAxNzU1MDg3NjY5NDgw.Nj2ZhjHJvuOwV6uoAIb2MKJg6RzO6OusNOlHJevWqFYg.Tyl0pmISLNny2UDZbQsnzY91l9CKOGtuZSOw0Zf0w5Ig.JPEG/IMG%EF%BC%BF3121.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMjIy/MDAxNzU1MDg4MzgzMTcz.acB5k2ZNoh8kd7VNN2kuvBK-ptKH29WGmsKgV0Gwq3Ag.nKMdjViVdYoPy3amf_ufRtVLDPzzKg3X_TviC_1MXIsg.JPEG/output%EF%BC%BF769106640.jpg?type=w773' }
      ]);
    }

    const existingImages_k8807982 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8807982'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8807982[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3675D67C1B4647EFB87516CEA60D1C6E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D1C542C9825C460DAFFDEAE58B38AF9D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MjBfNTAg/MDAxNjYzNjYyMjk2NTA2.zFQvCuo7YYkVy2F-fXl6NQTZwXzlRf8Z2avcu8cR0-Ig.pLv6Hg93Hx8b17yTkelN7Dvv77sdIAIMidTlnAxNN7Ag.JPEG.soheui2633/IMG_9940.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MjBfMTI3/MDAxNjYzNjUzMzA2MzQx.9slX2mIZZRYi00ejHljvcWvP40w7KClbPYRVxFwwSsgg.wMv3sWtTZeQr9iKXxE7-p3J7RvNnHEycMyVcvvUnElIg.JPEG.soheui2633/IMG_9912.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MjBfMjYz/MDAxNjYzNjUzMzA2Njkx.CfA1yKCaYz3lFCu4C7g5hwKv0gNjMbMxrfofErquMpEg.jI8xSBdF_IbJn5y5B7ycW5S8piKwnnNVUks15aDcnB8g.JPEG.soheui2633/IMG_9914.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MjBfNzAg/MDAxNjYzNjUzMzA1OTc1.q2PM4SfFWQUOa6ErVn_t6IfvDXpYomvbqx2_jps6qOkg.1YJ279I4tIuXjJpmLMIZoUTaKzRyo3D9abZ83diWhZog.JPEG.soheui2633/IMG_9923.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MjBfMTEy/MDAxNjYzNjYxOTg3Njg3.75vSzhGdjPD_Y4O9YrVq-XxR6SRUreL3LNJKGqT7seQg.1x9vwwmA5SIhTukXKPKvd3iG0D6V-qnm25-wP0iToQog.JPEG.soheui2633/IMG_9941.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MjBfMTQg/MDAxNjYzNjUzMzAzODMz.y8Tp_XTFLIXfJBtF_1fqcv82oc0sPqYsQfYG6cXnoUAg.h5InawFD-r5kpOwATMnuVa6CFWDjUOgnV1F6PITgDpsg.JPEG.soheui2633/IMG_9925.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MjBfMjUz/MDAxNjYzNjUzMzA2NDQw.8fS3_0sftoCqonkG7kfSGeSZKmeQriTNJeKgt_DTcLwg.nEWrUBml2xbaciZoJPoWpt0BMkWBLjxcZ2gJZC_VDzEg.JPEG.soheui2633/IMG_9921.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAyMTNfMTM5/MDAxNjc2MjQ5NzE0NjA1.j1wyCON1aQYMA6buVEfEGQ1JSi4RBD73MKAAkkVfU3Ig.u8kCUVjdte5Q7C1sHrUvX0Q6yJd4s0wI0XDUvl9Etf4g.JPEG.ss___jjj/IMG_0584.JPG?type=w966' }
      ]);
    }

    const existingImages_k8689426 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8689426'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8689426[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d0484850f33cfbc439609868962303d381b0eb3f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cfb668c7c1b730c403d23b26405cbf086d851556?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMTY3/MDAxNzU1Nzc5MTA3OTkw.tKQaK4QcmgurzU9FzOiexJ_ORzz2j26QY4s4L3X5pUYg.QBXBnOiI3fjrMAnem7nbOf-BRFnXv2QPUoO7z-F4xvcg.JPEG/IMG%EF%BC%BF2370.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMTEz/MDAxNzU1Nzc5MTA4MDUw.pQkp6rMT5ik5dGzlKy9NhdpvCGSQGWrHw1tecVZHfTQg.y-uZkmtNCOF8tkCQBzbec_o_UNSKm4-Cow1pjS21nRgg.JPEG/IMG%EF%BC%BF2371.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfNTEg/MDAxNzU2ODA3MzczMTk1.kyLjQ0Do0I3hScWiQR3eWIh79lS7NqPEw4H-zQxLdcIg.UQyAndL49MEp439wy68-oPNlITzpDAcAeLX7ZiXRc1Yg.JPEG/output%EF%BC%BF804207413.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDJfMTIx/MDAxNzUxNDE5MjEwMzMz.6Gfoi1zlJWhKnhid6OMYys7Dlcwyq-E8Pp3UyLXInkUg.F17fV1PqRfBF6yw9lONfAJivnRZCrHBAn84trxeioBog.JPEG/900%EF%BC%BF1751419209531.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDJfMzUg/MDAxNzUxNDE3Mzg4ODc3.mmC75S5EcCR_ykkE0mCTLzbxssPHdLBzp-Fy_CQ88eog.EQYts8viQlQKVUTVmbg4Ejxu8npORQb3LibjlwQ2X6Eg.JPEG/900%EF%BC%BF1751091090473.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDJfMTc1/MDAxNzUxNDE3MzkwMTE3.vuM1bMtuaJqcwndsl1_4v-eqftuP9yBoG0gc7s-SLj8g.xv7LEpagS9iNQ8rqIAH_q9yB9gUj-5rcpwkDqxgO7z8g.JPEG/900%EF%BC%BF1751091089950.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDJfMTIw/MDAxNzUxNDE3Mzg2NzQ1.1mUhaAXomGo6Rk2qQwuYemC0ZZTLF9n4TYb4wPsUa_gg.P9TzpJv1d24PQHNbOkGFT6eqBjP8Yh0FsX_pVWuDfaEg.JPEG/900%EF%BC%BF1751091089718.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MTJfMjky/MDAxNzEyOTA5ODc0MTUx.hRuAGghdyYKek5QRHekc_diCLRpeFGuCRSEIjHp4cx8g.rUeZQ3t4xhWjvp0z8XjolGBrDqO4Q-TCiVA_PJ15QaUg.JPEG/IMG_8688.jpg?type=w580' }
      ]);
    }

    const existingImages_k279012480 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k279012480'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k279012480[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2085221691BA47418608486E7A354213' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B3E459201A9F4BCA83466129C2536504' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DF9F8389002F41FCAC22EE3FE9151DC4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/70BB29E00F71436C958483EFB4D2689C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/686ACEB4AFD940C9A13B3DB4D36FA074' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/38CEFE12B4EF4168A3ED59C08B20EA3E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4013E732DDB042F18D7D0B2BB4348ABB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/25C36429B4EF43DAACA6D788564B3987' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/ACBE7E76C7DE4127BEC14C512D256EBF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1ab450f31c3246e0b917dbb629313c29bd2f16c7?original' }
      ]);
    }

    const existingImages_k8209640 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8209640'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8209640[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/54A80E95422248729791BFEB5DF56B93' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/47295A6F12264CD48D1DD18AC8C46F4B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/4F52F19BB3BB488496C5BF12646C779B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/BBE3985B531F4C7A9F98D8C9DF2A3EAB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/EA53BE1C621B459089062EA8EF9C4403' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/D7069EC2D8914058B094F8EDF1ACD900' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/DF0762FFB29F409BA3E4F5B5924C2B19' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/478E2AB2B4CD435DB524A8B32BF9636B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/1C9FF58107C64C0DACED708089C67137' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/CF507E7C7F6E4860933E699AF09535D9' }
      ]);
    }

    const existingImages_k9652315 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9652315'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9652315[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/35bfc07579554af04ee0443c9bcce62ad22dd8ee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/31cade4aedcbdcc875ec1835242e0c6f88f56d60?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cf4ce7f17dce58d4799fe6f89f52652dc15e155b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ba1213be8e31a7c4325a2b31df7e14478a66394b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdFHNTlxR_UvKin6l1bXkdv1wHoJOL3K_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTA1/MDAxNzU2MTA0ODY1NDY4.2vXBfAdkQ4ZJE1IsfwXhgccdduSwePnmQTqSvaXJBWwg.hIZ8XWBjmrrDARLvbNo7iyyS_De-O1JlVyx3QGkNEK4g.PNG/image.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfNjQg/MDAxNzU2MTA0OTc1Mjcy.IGR4dFFzMrFhLZDNn0Xp0WUwjHHvBjEMo0BEx8SAkRwg.Ia3kwzmwSj6QOwjkGZ529GTAjTNjTW_kndg8bTqu_vAg.JPEG/SE-04052E2F-9B8E-43C0-8699-6E965E760AD3.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjk4/MDAxNzU2MTA0OTg0ODQ1.K-Np7yGcPdgByWhdliRyoJKrvm8UxXc2VHU5XLxNFtcg.JP4JMf4Sgc0j8lLNe-5yhL8b5DguHFRmwIFrth_O05Ag.JPEG/SE-C402C626-8F2D-43C9-99B4-55E6C9700643.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTAw/MDAxNzU2MTA0OTkxNTA0.qZbDhZy9rigqA88agCMjYXteTOxULZWrst_4Z7zRfWkg.dJut2tLrEHgmnseoYlDheFrKPjDNK0DB7e26065gVLUg.JPEG/SE-77D6D459-284E-438E-8CE8-BF98C05CC58E.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjU1/MDAxNzU2MTA0NzA1NDYz.PbkExqW_2Q7joeyxjvNfhAvAQntujb6wCoV8HnkdFgkg.okqrNN2R8aWgRsL0Kem9N0h169uhcyAeZHwfPApp1swg.JPEG/IMG%EF%BC%BF2020.jpg?type=w773' }
      ]);
    }

    const existingImages_k11891748 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11891748'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11891748[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/541df4fe02a2619e731416eb12095bb520c4b633?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTY0/MDAxNzU2OTk2MDg5MjEx.LtCFPLjq6ie2qx8TZ4tt575h4Ry6N0aiGNWs1LhAQKIg.xhEsVGyyiFY1uQ7iqYt53N0R4GTiGkqH_Ffg9L_USPQg.JPEG/IMG%EF%BC%BF2461.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTEx/MDAxNzU3MjI4NTIxNjg2.AK7FROAsHFX5hwitIYEW96Tzj7SWuMNerV8aPW1XK38g.aN9cvaWi06KGM9U7PFUzjztXkRcn1VQBVXlZkf4a01kg.JPEG/900%EF%BC%BF20250906%EF%BC%BF143325.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMzEg/MDAxNzU3MjI4NTI0MTc1.fWx07e8hK5NPVlvw8MYFl7i9dSCAHKJdFLyvqjBM_-4g.3BUNwgHRF1GsIJlGQL9bieSs6gUxo7BWs5u9X-kc2W0g.JPEG/900%EF%BC%BF20250906%EF%BC%BF143505.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjIz/MDAxNzU3MjI4NTIxNTMy.hF7qulQo0i8et8wAiG6rN8kexX-VLA-rMSDekmi4Sggg.4eZyH52w0aHF9Fg6semylptSKDrbB1S4dLVrxWHs5fgg.JPEG/900%EF%BC%BF20250906%EF%BC%BF143517.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjQw/MDAxNzU3MjI4NTI3NDE4.4XUnyXkqnb5OX_tNkzeY14Oug5ky8lw1ps_-XElh8Ogg.a7Us5nQB-I3AYCl1QQYHvLZZdmajnsBos9imccoFVVwg.JPEG/1757227395097.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjAx/MDAxNzU3MjI4NTI2Mjkx.BCs0ZCroFlJvkdp30kID5U9RFyxoVge_wihZy_3CHxcg.65smGUTWJvZ7Mk_42ad7DOUAcKg4inoS33e5FYEjxOIg.JPEG/900%EF%BC%BF20250906%EF%BC%BF143356.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfODMg/MDAxNzU3MjI4NTIyODcw.WOJn_BnQEtynfciepV56gHKqweYtyozT-O65-CazoaMg.sCZJuI2T8dbERlh8IHg6RSxZD6kn5a-aN2Wg-hQBvHMg.JPEG/900%EF%BC%BF20250906%EF%BC%BF143324.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfODEg/MDAxNzU3MjI4NTE5NzAy.tGJ1FMOcqPb_nAtAAKNj_zzEsh8xlqD2DFor-ykG2H0g.7rPbt0k0XaZXf3w6HBy0EcoUTCVjNdO-2zJloTrcLZog.JPEG/900%EF%BC%BF20250906%EF%BC%BF143921.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjAw/MDAxNzU3MjI4NTI2Mjc1.9P2A4FlZ050lVsT7BDPXMQ9fYOl9lf15fqaVfAJ0qh4g.vfvpKGxr9lJzhJmG7frNU8MYv8IXAVqT9hj7pcprp9Ug.JPEG/900%EF%BC%BF1757227381162.jpg?type=w773' }
      ]);
    }

    const existingImages_k11042533 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11042533'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11042533[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bd607e1e4824a7c7ab80bd95e98e090618c4f133?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/88459c304d8a85cded10b8852a0c5d3f842279e9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5146e53eae2250b0c028af123df7d080645251a7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bda6781dfef266ab977e30095947c1a762dca1d9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41126542ab9b66dbaef7f1b8c2e4b51b9b2293b2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/627038c81b9324ea6c42ba9ab5a0c951c83ab504?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1836323c738160819d1a6414a9ab235f86fc93a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/09649998eda70092ab2775b1ab7b86560ef2d78c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btquGStAZFF_KBV6SKHwUqsrfLYguk6Xjk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btquG2vVKFx_Kv4d4BvcD09vCoBxW4lYLK_img.jpg' }
      ]);
    }

    const existingImages_k8475106 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8475106'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8475106[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1c7d177bf468cbbb4cb865aa0b2631da768aba8f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e275548edd89063c861a2e07eabe7c0d1bee4b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c627baa5658f2acfe9d77f51f2a1111c08be8208?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60e4b806db4a26daca44880f9928429b0ae2422b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7800b0bd4797ea08efd63b1dce0d382d0c50dd34?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/77de0d3e057c7f0a67a33606d854480e8ecefcd7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4a3125e6d634221dc9c5f5b158720689c4cdfa2d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/05c80a9130adb941adefc3b8a3cb90ef69766a2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/03592901c708f4ba4706c7dbca21f298a6ec89c3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6e0e840f38ebb7f79c1355c7ca8143401e87d768?original' }
      ]);
    }

    const existingImages_k1656759700 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1656759700'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1656759700[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a46c2c24600b734abaf76a4756cbb4b7c21ebba8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f9742ee9021c4954333899c480bbc43012ca42d3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a6267e51dfff75bddfa81b4a4bff1fe705bdebaf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c2a7cb81134a9f7b468ce32b696b8897083e3ca3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c425929b8f70fe54e5d030ca4a973b7536854053?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fdd3d581791c32afb2ef0ac3fef6c4c9a433e86f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db9c65aac57d8ccbc8916511767f9f2e08985536?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d7b927d3fe20a9ef42301b2dacf2a8cb4b5ae363?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/44972faa73395f57c94ede2ad274c312347273db?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/87fbc8e57dcabd314c78c5dfeb46bfe872d2c870?original' }
      ]);
    }

    const existingImages_k7992897 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7992897'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7992897[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac566f69092a0976abe2ad130247036113059946?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bce5e9fe50da9f2f03a7bb9c4f2435a24cd0c305?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0e3fbce944682d9a7e212eb33523fdb7098e59fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dff3a608e0347c589d3a989daf446c3fcd4478a6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d7ae1887a7f8e5ac12419569ab73d8e7c306edb3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f12a89236593d5a3ad3d27ee4e421e1734aca20d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6c0c3c40be27b60a51c28b5efd810f35f8185603?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/210fcde93ca94061250a0abd5cfeacfe8d75df2c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2035260605b38bb9d5259b215a77f9bf74e37db9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1b72859ef36e53d3c8971c900c9c41381cbff4dd?original' }
      ]);
    }

    const existingImages_k7959806 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7959806'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7959806[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b7acc4c8a75e91f88f5c7b70b725a7d845000fb5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1cf327a95a5409050a2b640639fc365c6ec1ff9a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/371d3353987771a1a7cdd6f9ea1e4caf7771b9ab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1ce1c062153b703b972f593a5f3ba0ede9cda922?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8fedef6d05943eb616925c407facd8fa260bcc867551a1493fbb7e7365e16a05' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b622a1b85f94781c02c02c39c4c1eea1e64dc9b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c77c8fe949fdc988de79cfc3c1b15f8c6a5f9c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2814f9afed6387dee0717a34e52010b2704e995a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/02c602c96e29106f02461b6f4c66103dcb6a9e4e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/892dc354a51553cbf45febf34930b6a7c36c9a2b?original' }
      ]);
    }

    const existingImages_k11148226 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11148226'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11148226[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f274b18aef16a4ab95f159dffb7963dc4a7f25d9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/88f4324b8a562768a7966a696edc9f4f8cacf97a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4778ad8c11e26a6998f8370857611d14f2cf208c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7987150e1f56b1b779a5466ece01c237dff5bfab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc64f9dd97200d0a9271604b9be08ce6bc0ade68?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c0825b7684e2c20cbbe8b1304459f2f22e37f5f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/38d9a0dcf63e687cdeb503bbd8e54124be379729?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d279f10205285e71ff9d68bf44779f8e19d58434?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/209ccc4dec4f011da7b48edc7b8b468fe60f3847?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/25458b6ba5555931b9383825185e4ae786358ed1?original' }
      ]);
    }

    const existingImages_k613532480 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k613532480'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k613532480[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dbc94e992159007db22c61eb61959ce7fed4381d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1cdb95919d3815efa99d7661ed38325cbeefe0c0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9b009cd42861cf9ea559ba7d276f735d8aa455e1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/14e5cb7cd8e79d8dd5ee8ea732c845ae23f91de2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b96b4132b21337a7a4057d33a8f12db571863ee5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/daa3f227d75d1b958b26e9c344c13b3294490725?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjky/MDAxNzU3MDI4NDk4NDA2.baWbcOtiiUBQSy7rj-F6zHIk9aRmksY6XMLu47r4o0Ag.1P1kZpi_MhO8q5NU55ME3qs71XQygtZLdpG0jsYxR-Mg.JPEG/IMG%EF%BC%BF7668.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTAw/MDAxNzU2NTE1NDgzNjk4.c9gfBdlKbpczbybJPm8wSVJ9G9k2Ca-l_4MriIVR-28g.NsvZB7fLg_Btf6czncpftX3ff5jkgeFwl0lrochceD4g.JPEG/IMG%EF%BC%BF7407.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfNDAg/MDAxNzU2NTE1NTQzOTU1.b49AskcYfMxCXT1CNm5C3IeXp-fhVjhSoK4U7exigq8g.WvHoTF3OU6L5AXqm27O0FuFH1Gs65tGCJIFAGusPSuMg.JPEG/IMG%EF%BC%BF7419.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTIy/MDAxNzU2NTE1NTQ0MDkw.x07DTz4AQgiKHxQAL52NLyl7m1G3_L6jXU3F6no-6jgg.Uulq2NSCDcZ9sEOdBQLegG13OcD40-y351mvhwUj0Ucg.JPEG/IMG%EF%BC%BF7412.JPG?type=w466' }
      ]);
    }

    const existingImages_k380643819 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k380643819'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k380643819[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f101b42aac706dd12eb97d39be16f6803ed743e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6718a148aa418bdf3a0aae83c7f123234e0d1264?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/52698d0ecdbd4860827b8377ba6d975b9023b7ab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6beb100faedddcc9b6f0cf8efba390bc0c656f26?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/84eeb63457e93bfdcf71fa7104b5198ae758e395?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34cdab86482143174285a6b0b619a5019c1057e5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c19f580e98dfbb83dfd9ed61f05e9488b49d5f58?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b96ea833171d5d59f36d87280588869b9354ba59?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66e9063f62c373df6c3f47c06887045801374d73?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/48bb44eb2517069fb230829d9ac370a297ff59c5?original' }
      ]);
    }

    const existingImages_k9549720 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9549720'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9549720[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e6af2f2691605be93571af2a52977c2d5f69db7f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/56339947ddc50a531afc390e6779f05bd042da1c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb00a8fcaa16feff7c0c141891d4094bc5ee758a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8d67244d9e3e66d3675695317a371714b73ff078?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/86ac8e56ae6b4ba1ba309e6dc8e2c655ba073f57?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d506868677172efa3da0df2f35330021383d42f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjY5/MDAxNzU3MDQ2NDUyMjM2.oW4jYQ2uaOMFSAY69Hx7DOsr_zsFX2I5QxGWy5fMcBYg.kad1CPkXtpn4gIegvFLl2nG1esm8BQ54oC-N9p4TjuIg.JPEG/output%EF%BC%BF4235267519.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjY4/MDAxNzU3MDQ2NDUyMjc4.sj52qoHcZUCrrfqcX9gvXEA6R5XwLXVfo9lGH4OKAlkg.r7yab3kn-7qOdgVlCsPO8fsHXsSpKprQA1OYHeH2pyMg.JPEG/IMG%EF%BC%BF1610.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjc2/MDAxNzU3MDQ2NTY3MzIy.mVn3XR6ciJ9wd8kRWQHGLZ9GvcAM_R-DEOR13b1xQagg.WvRJSCdfoYDY97FHhYsMB7XWnX3oB2YHfrUU4gYXR-cg.JPEG/output%EF%BC%BF1518470055.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTYz/MDAxNzU3MDQ2NTY3NDA1.CZvi-udY-vblCuHtzLMSyfVJMnDzUB63eMqjbOLLQ2og.okxCQzn4XnL--Fi-mC24BZP4yL1LtFBpmY1HUvO4JIcg.JPEG/IMG%EF%BC%BF1607.JPG?type=w466' }
      ]);
    }

    const existingImages_k1892890142 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1892890142'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1892890142[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/81EFE0CEE38D47358B56385E2B7197DF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/E35692703223452892671BA594E5C805' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CA9F7EE8E1C343939F591000B9B3B1CD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/811E30A3F6944B6AB4A31FD8815E744F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/16B38833F4B444C5B9E98AA4C3447A3E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B465EBE6545744D2A2010E560BFD4517' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a5a75c1d0566412bf2052c5e429251b3c11db8a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bc4147174f1be8b93d014d9a237d88311df1deea?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/87f01f097b8b2ebef52b8deae58d55f023846df3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/556494586e3d0e9f548db2d944344a6f3e4f1e60?original' }
      ]);
    }

    const existingImages_k8021178 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8021178'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8021178[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2fe8058512992a89668e5b1e866bcc86e7ef07fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79719aa094639222a3613ac6987db0ed5c78a77f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6a9e65823f8a13e2378b664a54163871f2e58467?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e0722d377e1827706f30fed34f83373bc2dce8e0a2faad8c88df7ab1c50e1637' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/25ece4c3b9ca0bb4c4d5531da5368954a730e67b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27de909dc68764cc8c1432f093acd736cdb55c21?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/948e5de59d6f6b5e0415622bfbeac70ccd88b4fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8c30395cdcab59d8c98851a97786bacec12c1322?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/48a78b5e7b27a86167e49c9c28737560503e993b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/31197f156b9401b54e59ce8049e0589fb73d1e50?original' }
      ]);
    }

    const existingImages_k8365828 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8365828'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8365828[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/19e8779b848cd4b332e858e3cd1ce37f3bd47356?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/61b11011097c441a3ba515b9fe1a8d108c8a9ebe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8636c1a804341061c755e5f9b69d17a355c90b64?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d0763c4b5a8fa77b7316eefc0ebc9dcc8430412d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a4fe4055a906b0a450a07ebfa643f2e630e5d66a85e6b29537be9e6d9e2c68f7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqkySP4Uno_i6C3MrOLhwUimi4q4Nj3hK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqkxgp8rP2_7QTUM8T36mwPWuuwcnX0J0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqkxc9aJHM_IuJNqfcAt1i7Ktx7W3fQ20_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqkkVr6Gp4_Eqna1TlJ0K8gtDwczcTnW1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqkerd2rIC_1SpEiZULdkktHlx1hJXqAK_img.jpg' }
      ]);
    }

    const existingImages_k8062956 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8062956'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8062956[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/86739161B339481DAA60732D778806AB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C4BFC5D5452D45EBABE43C59465B6191' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C8CAED28BA4442019959D70DF1A64FFE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E0AC8185012D4AA2A3A243E040C0497F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7545682684F84BF492AE58F3A1D9D2F1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C90772143BDE46458C1A5684726CB51B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7E0683854E2E4586864D8AF0BDBEB4F8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/33871EA95C744132B84EBD5B8E9E1FB3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/15E7B2CE1DB44645BEB20BEE79EDC8E7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/47F3CEADC6E442089A2855AFFFF5EACE' }
      ]);
    }

    const existingImages_k27385515 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27385515'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27385515[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/011410ebacd0c0f7394678a8a33223a3a0fa345d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/016cb95371e3a8d3e9e254528c487dcb1cc7c623?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/52ee2eb47c92f115a2b1f4d67494471f189e0a07?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/952a36b3d48838e05b4c696fc91bbb5626b0566e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/452a51782ad933b823a5d59fdbf723cefee8b96a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c35c3b187b668313a939b96f27bca2196cc09d00?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7bb8ddcf610689259da968e1bd6aacac5e4de458?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3dabc4c4038b4b895eb191072434cc774feab42c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc95fc80c976569aca44f18a7c1dc9004fbf5867?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dbb78c5e7182cc09a94dcf5e23cc15532525eedf?original' }
      ]);
    }

    const existingImages_k21342735 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21342735'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21342735[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/042d90cb1a86c0d7013c2576c816820649e2201a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c2b0f0d1d6bbe7a0a5103424b4409798265b042?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3cdb5bf77f4428b3da78aa1be5dec46b1d516fed?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/16b84bb0636d3406c6a4a4f34f893d734ad84ab3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d62560d2d3a2729418d3bee4b275c440949e3656?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/baddaa162e9f7b6a7d17bd19ee4ff1bb2d9e37d8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1668186ad9d2eb739520e2d58b796912ac100d19?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/680281d2635ff0db5d19d0f593ca77c1d335b5f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdNIFN8Bm_5lJrGkIkjof0LgJu6yXUP1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdMzI7OCh_KRLehUHnhIuRMC2aghrIA0_img.jpg' }
      ]);
    }

    const existingImages_k11842365 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11842365'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11842365[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/0F94B7B5088C442EBD8A29901F8B478A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/28b79b8faa45dbb993a825c3ee69f17502952222?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dab83e5518c6e9f83eadec600f8cc6c3bbc208df?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6c52510abd124a841c4cc22f6c0106d68e1d8d80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/30dc33edb6667d3f05cf22be002560f314368fe4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a689c86d3a6232e6b7d904eda1b40abf582d294a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b8133545e514e54343f67bb9f9c01211f5a9b59b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f42e1232f77509f33f855ef77a28d70651f6ce32?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ec71adcd12824c318beb038697e9e71cf299d3de?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a65a0e9850a53ef273f2ef8b496bc3d4529b992c?original' }
      ]);
    }

    const existingImages_k7815338 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7815338'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7815338[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/13a0b69c55fef4ff88aa8cf24aaeca91157923d6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjBfNTUg/MDAxNzIxNDgyOTk5MzM0.N9wBO3AqJEr4nBLkVoymZpHiUMwCmg21f5EipEFFH3Qg.qp5QwlOv14WQT0kQyORCjezqHZ1xStehpD4xSPLihsYg.JPEG/IMG_7492.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MjFfMTUz/MDAxNzE2MjQ5MzAwMjEx.a-qodjhw7kgqvq0q9Vt1NlKp-X4iZ1uVYTznuH7-LVog.G_9aTDvHemVWlq2i13lB6q7Kg4d9Fd9kKkaZt17pI-kg.JPEG/%EB%8C%80%EA%B4%80%EB%A0%B9%EC%88%AF%EB%B6%88%ED%9A%8C%EA%B4%8024.04_(11).jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAzMDRfMzkg/MDAxNzA5NTQ2MDk2MTQ5.e0JqD12SRo6y7heJBMMltRiKSDWXm2rqoYOW1-HNC60g.5l55dJeTLGhZg3zv-WW3C2Qthe0mZ5BSSX6QKY_OsnIg.JPEG/SE-A388E2FA-71FE-4CAF-B51A-DEF746E07CFB.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAxMTZfMjE5/MDAxNzA1MzY4ODI0MDcx.tuzU5_JIpPhYa7XLqjKDtXxczcdpxPlM52L0PV_OZQwg.YM6AXpICz1rNiOx99cbJ7CELhL1cZKpoy28cqF0aG-og.JPEG.kesu2020/IMG_3286.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzEyMThfMTg0/MDAxNzAyODg5MTcyNzA5.wIfae52BqvzKdUhUnV3sQgMWmF_qQ4L7RhnvaogtvEQg.DTmiOgHnnZCvYfcOUnH-wIkvKgyUY-WCLLMIHoBN2JUg.JPEG.onmywayto/SE-fc248768-e62c-4448-b123-84d15a63470c.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b720122c6bfab8cae29d38a6b5556b43b672d17e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0539372f6b85de4367da9b7f9af046598f4c74d3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjBfMTkx/MDAxNzIxNDgzMDMyMzQ3.74e6KaxP8PGILXgb6dCWUXYFNa6M42sB_e8kC-gEIFsg.S6UbT2xHNoTdg6xe2Q2us4V1n-tb9che5s-mcARzbSwg.JPEG/IMG_7486.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjBfMTc2/MDAxNzIxNDgyOTczOTAz.T3rR9bY0SLYJn8Wl_SSHt_n3d3M_iI1ScZx6_uN5mTUg.MTCyV-sjoB1wTTElBQa2oYV-sIhsXQCvxLCt9ejkCF8g.JPEG/IMG_7484.jpg?type=w773' }
      ]);
    }

    const existingImages_k8287114 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8287114'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8287114[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MTdfNjgg/MDAxNzI2NTM3NDU1MzAw.zXWUkYLqWSbEz0zh4WM-gfmGth2qI_xnsOibRLu2NBkg.vzNq8390KVNIG__N38_LJX-tLtJGILYdOFQRn9FASZ0g.JPEG/SE-daa8686f-7445-11ef-b374-753f73b2d48b.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMThfMjcw/MDAxNzMxOTI5NjE1NjE3.raG_KrOaQFeJJMvCZaylRoumbaOlNIApRvw2gg6GCDog.kcLKVJxOToLrbd2mU_dOF62vD0HNh2gWAE3BCjUtSyog.JPEG/1731929598479.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MTdfMjk4/MDAxNzI2NTM3Nzg1Mzgz.Okz8vPQX5m_gKjFV1oh6J7JR620dL-GcNuWt8DpK8S8g.05ORhRe8Qj4TtcqaSKfxqGsHK2_gkGT60NxnDm7yE7wg.JPEG/SE-dac42ddb-7445-11ef-b374-f9ea23d6717f.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MTdfMTE4/MDAxNzI2NTM3ODk1Mjg4.tVBYZLdNkBK7Jr_s3hFlCki6fnH6QViySPjv5ge9dYkg.Hn8RzahZKyyphI2ZxW9fq4eD557AmF1qk9aMeKZ-9yog.JPEG/SE-dacd077f-7445-11ef-b374-dbd353e13308.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMThfMjEy/MDAxNzMxOTI5ODk5NzMz.VuhxCnebMDtLnfy-KwVAyFWJKJ5qhpbmbFOdYsY4_uAg.zI-K3abhBt-seMenRhi2171xA1aebx8r5Vplce0sXqwg.JPEG/1731929872103.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MTdfNzMg/MDAxNzI2NTM3OTUwMTM3.hpAaA0s-8acCs38a4nz-GmKVtLKWRM8t7LWwqN2oW9og.3A9XeC7wXS_yZfV4h0I7lzoyjDrljF-_rQxHf-Kqjt0g.JPEG/SE-3078a3f0-7446-11ef-b374-43bcb2123a30.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzExMTFfMjMz/MDAxNjk5NjQ5MTU3ODcx.T8cAOljjCM-GBfpgqf_95Y64lUJpD35LqQtxBk6a1GMg.k3dDgOT7ZQXRXARW5fCX9Ez9hmuHo6WeYYOVSU-ctSog.JPEG.lck3061/20231013%EF%BC%BF194416.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzExMTFfMTQ0/MDAxNjk5NjQ5MTU5NTI4.5UuJGeM5dunga-yABWMy02rtrS3HJGD73C_qBwAew7Eg.Usks_R5RzvLOq6yp4EjPT7MASipFZ8TWV0YYoT7B38Yg.JPEG.lck3061/20231013%EF%BC%BF202513.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzExMTFfMjIy/MDAxNjk5NjQ5MTU5ODU3.NB8FSvU3hLwQBMXrw66Ta7SbwGnPJTMYLBslmugv3a8g.VxwI7X04JVvcV-KULF3wYhA-pzQALzY7Zy8YKaH7id0g.JPEG.lck3061/20231013%EF%BC%BF204935.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzExMTFfMjk1/MDAxNjk5NjQ5MTU5ODE1.46ARYbR_YuKBZQyl_5Rh4hTTKK4KmXTS28jjcRNTP2og.m75YGMwYvIkUcdp3jspeXWWOp8U5uRPBU3bSQ4cXGKwg.JPEG.lck3061/20231013%EF%BC%BF204941.jpg?type=w966' }
      ]);
    }

    const existingImages_k26875594 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26875594'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26875594[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a0c27bc4754f876c66fde070e802516734587af3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5a965881b5d2e0905f80477cc6f77f5781ca6698?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7efc9aeae94f4570fed570b69503db5e80ca54a5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/06d7465a507535b95cafa17d267dcce3840faa9d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTgz/MDAxNzU3MTI2MDY4MDgw.2I9t43nVEL0Pcaup1yPEb2G0_eSfXsfdgyS-0tDGFmIg.kqECdobBWsXblY7BrxVEDU2GLPWdZCyhbdONacEVS7kg.JPEG/215_20250901174833_20.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjk2/MDAxNzU3MDMzNzUzMzI0.CcCPY7Cv4gJbieG3XTM22CFNFU1XCW1cQ6B_DQqxxv4g.xH8qlOSxL8uughop1_UZ9GY1gn3MTD83PmU9UBLU9N8g.PNG/image.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjIy/MDAxNzU2ODE5NjAxNTM5.JeYY_GUAl0V7Tw5bI-tURQJlc9OgPSsg1esolzsAi0Eg.TNAQjXVF3gnpqS-Ddlyvigla-0v7Vd4hDPiAGyrn8JAg.JPEG/IMG%EF%BC%BF3410.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjIy/MDAxNzU2ODE5NjIxNjc0.gATTSoJg8PwuJL9fbC87HaZTRjRIIn4D8ESHUxC4thEg.B7VUqeASAASPACREab1adm1x7CV1WpYTSa1n4c2jA6cg.JPEG/IMG%EF%BC%BF3385.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjk2/MDAxNzU2ODE5NjAzMjUx.-Muo28WM4jrY2QdIy94UAYaQp2Qpadvynm5BvcXA8Ogg.CGBSaaqPo2nWEw6R48gAXSrZvHNLkglZkurS3iGsTaQg.JPEG/IMG%EF%BC%BF3391.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjc2/MDAxNzU2ODE5NjAwMzEw.mBBbsZjtncoBa9rK7K6WyFP-bPIR3lENNV2_SzotTkQg.be5ObVCRS_p-ffsDEGlAqYpAwOEXXs_djwAmbpQvPQsg.JPEG/IMG%EF%BC%BF3374.JPG?type=w966' }
      ]);
    }

    const existingImages_k1447764115 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1447764115'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1447764115[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/48996B3BDB0C4D10BE77535E3F290308' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/E2C019520B0141118EBAA6476795E100' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNTIg/MDAxNzU3MDQ5NjkxODg3.toQfne7kvSJcaodlAARVS1u489HGb55nSlITId-Mac4g.xVSIoHxPHs4EvVUSYRtrzddfnboVAMhtbUJILjLJry8g.JPEG/IMG%EF%BC%BF5478.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfOTQg/MDAxNzU3MDQ5NjkwOTY2.oyVhCYWE27ag6_uMq4VSkj_L-0uuHjy6yKUrOPi1HwQg.Nzu0vDWzmxeM7CmDK1guMkpMOqG65-aGQArEat1c5RQg.JPEG/IMG%EF%BC%BF5475.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjk5/MDAxNzU3MDQ5NjkwMjUy.uHZzSBijaAF578nB76smAUgDkTlrq9mRxpOj1rRHkRQg.K0pf2JFcWK696AWkYGyH8KPbiivplH90_rk040Dl3acg.JPEG/IMG%EF%BC%BF5488.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMzQg/MDAxNzU3MDQ5NjkxMDk4.gR6V2K_F_zbyFlm9d-5y2BP71VEiJPyKO7hdNUA8VVUg.Nw-JB6GaPDenpb4g82n9aiLT4VT5lNcVcSTokChhq2wg.JPEG/IMG%EF%BC%BF5479.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTc0/MDAxNzU3MDQ5NjkwMTky.TN-wJI1CfKi3dfY3bD5fLREuP2aqVkp3RunfQgBhkjYg.J4Xo5wsqtMiduauz9J_qdKrIQVF7J_jmApxaoHDehJ4g.JPEG/IMG%EF%BC%BF5470.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTk3/MDAxNzU3MDQ5NjkxMzI4.wilfDQZP4q-oc0JEgQF7TPamonlrR4GVnstubqPwQ-og.yqpvCgsb7xOEd80ADTZaMZlEIxrfoz8BJDQ8XlICwqIg.JPEG/IMG%EF%BC%BF5481.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjYg/MDAxNzU3MDQ5NjkwMTc3.YY6uFd7IRd0x5iynzN0nFfgQLAz_8XAm62s9GrbYYB8g.qNeiiZncnMkY5lFEm_kAqQ7McHX0oVuxJKrFrt3nqg8g.JPEG/IMG%EF%BC%BF5489.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTdfMjY5/MDAxNzU1NDAwMjA0ODA0.u0tJRgeR7Dt8jvW_WgDhzeEnBDboe5LqWje1tauQ2Q4g.aTFN82Gbi8T5iyAwy2NbJbsww_Sg5n3GKD4rYww6Lisg.JPEG/SE-598ADBB0-553D-44F7-A087-3CBB7FAB060D.jpg?type=w966' }
      ]);
    }

    const existingImages_k904887408 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k904887408'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k904887408[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/80d05b5b6a46cc3576bafb1ce64d1c4b8a63e98b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c114c712c35ba632a8c0faf9688fc6a139ff891b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f00a9761ce9e4cfbb254b777a93bdb0ff9904ea4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/18fb5ac19b4df8090d4a98b91b3a0b2452759f859580d26d23f71a9f8c6d2f1d' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c8b9d2802bd6f40984cdf337d924438798cd722ff02a76a9e8eb619e4ffe705' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/37aad2848ac8b78a6c058f729d6581aa8089c93c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDdfNjkg/MDAxNzQ5MjcwODM0NDQw.XQZD0npz9W18ZMavnkBhnzWRzAa8unmBBIS6xT6LZtUg.qssVzXUGomKdvDZ6xDCVuv7FDBkxh-eBAanPoBOJfe8g.JPEG/IMG%EF%BC%BF8659.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDdfMjgw/MDAxNzQ5MjcwODM0OTY3.f8AlVzx1XYhcB5T7jZBzGi3KbLFKtu7GfQJMBOmjJGMg.Qlg-l4xNZo8Cycoo9S6IrV38uk6TLl0kns_wEhNKSFYg.JPEG/IMG%EF%BC%BF8670.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDdfMTUg/MDAxNzQ5MjcwODM0MzY3.G53bMa0MVaefvW4ppEVcZOKQdYhud4CXDUpyxGplUxog.SPrqbnwS5ne4x4gScynzBLplARLi48uqTmzdXLYMziwg.JPEG/IMG%EF%BC%BF8668.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMTYw/MDAxNzU1NzUwMTAyMDgy.cD9FgjX4jq1X-lnTlezmBwBwQFx_67ZTU82U5pL_ue0g.unYrOlz61mm1g7EMd_AgyHxadQFLXqIkvTpsLlU-e9sg.JPEG/SE-AC845680-0D06-4B3F-82D7-0288A6FF52C4.jpg?type=w773' }
      ]);
    }

    const existingImages_k1377594871 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1377594871'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1377594871[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/71cfc42961ea0e2332b81377155303fb97541213?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3a58bed5bc1e8512d7f4c5d3170428a9f8c08017?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27ff2aae9a2bd88255cda4a581862f6e53102b8c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6bc87245e55da6e1e1c202c51ec75983c091d16b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/795b923e17906c5d190fcb22fb9988274f2c7d4a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/473fb43c47210b017507527c68134a1937f90587?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27656fbece92f4f7f3b177beb1616e0dee4352b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/af4c1af0b5d38adf41331ddc3b83c82560f903d2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9afc258efde4f051638c9e75d1eafa2644b6349d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b68368c80683578be4bc8f2b75f8da13d3af10fd?original' }
      ]);
    }

    const existingImages_k2101022057 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2101022057'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2101022057[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f570a8992ae690df2b7d2150e809fb44e6db14c3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4a4b0c89190f95e4a90d3e4794d8ee3f3046e6cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed3c1dcfd340401dc22a3537d05edacdd996ed15?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f5025858ac288d0e87126fb300e04c5fd4c88b65?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdab2c662072afd5129b2115bdb229869df80999?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/78a5b28f5a9960135c9c3a59015a750f7891d72e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d1af55f89af4f6e7c309dbf186b84c9559a5fcb1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/331662e7fa7bd9595deb948dbc8bad4d9bf3cf3c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bf52ea88ae3ac4af9f010e3478e5472a6a301171?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d966054c0c8f95ba9f45394edd24a2bece865af9?original' }
      ]);
    }

    const existingImages_k18431680 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18431680'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k18431680[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_456447560' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_957230446' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_1930807511' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_702553836' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/59978666E0514E44A2CDAF5612D6F444' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjIw/MDAxNzU2Nzk3NDQyMjI3.hLuB7fyhA9xEN7h1S9NrT3Zd1FnLP8wWPF902sARyBYg.AWFhd6RjB3iUrtEhbOgnTSeKQM-x-OcXiptcyGpKkJ4g.JPEG/%ED%83%9C%EB%B0%B1_%EA%B8%B0%EC%99%80%EC%A7%91%EA%B0%88%EB%B9%84_(21).jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTE3/MDAxNzU2Nzk3OTg3MjQx.eIEjcOLKDOmVLDhMIxXAmaUBj17MGpsX68RRk2pHxxsg.U2JHDbpuKylH0i8o1fJvZPZ-AB7UmzR6AAcGgwvWQOog.JPEG/SE-bdc9dc62-0555-4a87-a5f3-2ec2fdf0332d.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMSAg/MDAxNzU2Nzk3NTExNTU0.FX2xNbE9SmsqhONRZsPli1h1dEiaATPSLDZjW62mCEQg.GDOlcOf4sAF2NhJVbG60SYgMwplnOvdXYP0XC_ZfAXMg.JPEG/%ED%83%9C%EB%B0%B1_%EA%B8%B0%EC%99%80%EC%A7%91%EA%B0%88%EB%B9%84_(1).jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTEg/MDAxNzU2Nzk3NDkyMDg1.r7aEC-v4XAJVzyhpBpTCLfmcleBcykduTusNmufnlJMg.DDvsQktQ5phOKjNzHtvPILkPTfTuqL49XHThxRY-_4Yg.JPEG/%ED%83%9C%EB%B0%B1_%EA%B8%B0%EC%99%80%EC%A7%91%EA%B0%88%EB%B9%84_(6).jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfNDEg/MDAxNzU2Nzk3NTM0MTM2.i2ywrorV4dBScIQsWMPusbz--JQRheuZnd8cvjCZskYg.XO4A35U7No42RWBQ18mIDp8LabAejR6I31MDt9aDgOUg.JPEG/%ED%83%9C%EB%B0%B1_%EA%B8%B0%EC%99%80%EC%A7%91%EA%B0%88%EB%B9%84_(4).jpg?type=w966' }
      ]);
    }

    const existingImages_k46094792 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k46094792'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k46094792[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjkz/MDAxNzU2OTU1OTc4OTky.yOdENorx35oM6rrYZRmiHoCknc3GltGNwvPfaHBEwXAg.KqFYDllPAhHL4ZwjwcRZ59Th9MrtNelV3sUHaVX1gdMg.JPEG/SE-06177f6e-8797-11f0-ba97-1f63bda46be9.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTI4/MDAxNzU2OTU1OTkyNDI1._xzDECQ5N4G39JAmKIs_0eSKqcg6DqWq8ijPKqRpUCsg.SkxxVL3ee54ckiteeVC4vBnSQ3cNJ4EBma48Zg-e9jQg.JPEG/SE-0625893a-8797-11f0-ba97-15bce69ac1da.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNzUg/MDAxNzU2OTU1OTg4OTU4.S5iSqPpZXBji4w_CMBOT4mdjzd9j_SENv6WyfVsy2hwg.jn-c2tijBhEnrhbPoe-FH8cJOXwfhOCUqYp8Bjogw6Ag.JPEG/SE-061fe3e6-8797-11f0-ba97-3bd013e6ea6d.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTg2/MDAxNzU2OTU1OTg3NTk3.XxU_LUD8MG3Vb70sORWZoEDqrhAi6w_vrYVOTUnHj8sg.mNWM1nTqfBBevmXLwatQBFk2xfjrabGvy4D60dfboWQg.JPEG/SE-0621b8a7-8797-11f0-ba97-557d8f082fed.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTkw/MDAxNzU2OTU1OTkwMjQz.uFJOeR4NdoabW6NvBkfPLggLm0xfF4Ulsw7yPXoTVAog.Wix_WqZal7-KoOBc-XSG1uh5Q4gOgR0-qW4tijjLNZwg.JPEG/SE-0622ca18-8797-11f0-ba97-af28d7dbeace.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTc1/MDAxNzU3MDMyMTAxNzY0.HXqtnYmvyUhlamtQavPaaRwVkGzRnbgfTTTyylFV-Twg.UcBFsYCYUJDEM_uSnY3d6XR-Havx23KuY9FOQClZX3kg.JPEG/SE-9f8e777a-ea7e-4c71-8fcc-c82b1d779e4a.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTE1/MDAxNzU3MDMyMDk4NTQz.6klBVBatH1fvI1giCkeCYSWhl2y-nJfkWXvcPxHYhgQg.LjTyZcUaq239gXZuGY06CI5QRv1ErMOG4kfv6BLsaOMg.JPEG/SE-2e10b6a3-9009-4c7c-816a-ce679e228098.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjYg/MDAxNzU2Nzg4NTM2MTM1.jvKNlRMV8zBj16RGms-jhWAZ3cR5Pq0xm0mfaZFIAawg.YAc1jUV4d2cE939bwd5wYd1IeRk-5RYz9l5EW4dTeOIg.JPEG/output%EF%BC%BF2149686274.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjY5/MDAxNzU2Nzg4NTM1NjQw.gs39fTWEpYcNmdCQeMM78IyZ6qMW8rDcjOqfM9jCliog.sblVA5aKZvCC5_P-vwTUuSs2oMSJJO1dDYWOEpLgLT0g.JPEG/IMG%EF%BC%BF1318.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTcg/MDAxNzU2OTkwMDc0NDMw.cP2RE_nZQuZYJ4ZZ6LrMYgReXtLIEoQ04fU6d7lq7Qwg.oeZDCP0X20TpsikXBi_z7J47JaqynBhzeyAADGhTOqQg.JPEG/IMG%EF%BC%BF4798.jpg?type=w580' }
      ]);
    }

    const existingImages_k1183568476 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1183568476'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1183568476[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/531e9420525d914a29e8ddcc4e6b18f7545cb1f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f97ce079f0ef3e21b40972ecef2d68a56b88c1fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ad1719a6accc68745728d618858f15dd1030371?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6056e6bc370b4fc72b1fffe8d84fb365eff660bd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2e0131ffebd3d37959776bfb5dc10fffd9444ebd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dea86ea3eb36cf18ac7dfca1cdca10a8e47cf789?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3726ad9a7bbd866b83da3bf2f20b96966b28e82a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e2f2054d05a15ab3830873a92529e74678b10cef?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a8d3f6ca28e3fa9cf55fd6fcd914cecbaf35f89c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1cd292e4c352f2922a935b3eea63ece7df58945c?original' }
      ]);
    }

    const existingImages_k874047685 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k874047685'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k874047685[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/144c7b382eeb67f5a75480198eb65f9634611e98?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/12e2e6421c0f6052c03fb2b7522aa76ed5e67f42?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/114c65f57aa5b007f5e9e73b2309c92eaec962dc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdbfbb28ca97b7fda4d4b9525cb06f8f09a4451e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe63968680bce0aa0d58b263528bc3f9c49a1331?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df3fa75fd61eeeebc89a1a62bce1504d6277bf89?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dccb0889a199b563db1a8bbe99412d038e08c227?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c3a4a81df6b92de0c1751dd590ded68a3d29644f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a3174833f7ab0d0b1088d988fa249f7b94cfed38?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5a96fe81542cc16e3a60ef2e8b9542b6e73db297?original' }
      ]);
    }

    const existingImages_k1003278526 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1003278526'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1003278526[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/59BF137476C44F049CACBF3D034E22D6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/85909025546641CC9233CC4DBC13F04F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/821D77BB844747A38398F9E16F6E1DCD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/25AD9F30381C4FD29E78CF9D27E4F777' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3d0b8735b65de0291be5a3427caf49cfa5b361f2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/06c44fc0cc49f56e1d45b70e7970a9257533d950?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1107fb3cfa39c4383a0f06a4b604a1b5d57a3fe4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMjAy/MDAxNzUzMzY3MTYxODE4.3ZvRwnp20u8-r8CG3LjX_E-SJeg-hge2vkJe4xMTSmYg.EbIfZOKOH7QdOUYNzAvcx1yf38_CxPpBM-fl3Etz6sUg.PNG/Photo_2.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDJfMTU5/MDAxNzU0MTA3NjU0MzY1._VgKFibKgckZT3JZVeRUjA3cKIcPL2p1K5Z4h1jiXNog.koGWLKxcK9_N61yseQ0hUY5U1JdIUOjkpyE3L8WJQ_Ag.JPEG/IMG%EF%BC%BF0746.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTlfMzgg/MDAxNzUyOTI4OTc1NjY2.PCWQXEH5n_4yF2jXyBAIDALqL4iZdae6860SspvWrUAg.NZClKJGYHNr34S48ja6yokdPK8HuqLBUG678AOqM0Ekg.JPEG/900%EF%BC%BF20250718%EF%BC%BF193502.jpg?type=w966' }
      ]);
    }

    const existingImages_k209573107 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k209573107'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k209573107[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/49290B0006E94A1BA84C086BD2C321FD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0C54DDEC8EAA4FE2AFDC62C62C1B03EB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b6aed974b75e6a735154c5913ca4108bf309b084?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ddd7fd509568755837576aacc82feb8a2f68ddb3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/76479b12fad86a906b48c2b2e6a2de817902e1f2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/50d1011dcafb0153bcbaf38ef23262f308f6ec9d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e619670a0cd74d9086319fef445368faf5aa1a5d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/44a11710f5448daec534c0df8feb179dce53a8db?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/05ef13d7a1c669fce9d3deed05b5568d8989059d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/03a51e59d9cfd6febbd307f98bb0e0a02ba198cf?original' }
      ]);
    }

    const existingImages_k8877304 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8877304'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8877304[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a0b6d00bfe5bebd2e4dc92cec60a07542f8cf486?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MDFfMjU4/MDAxNzQzNDgwOTg0NDA3.M129b040uUq3Er9fAf2fKg-h3dQYlJO7JkZUIJcVBsUg.pr-OBZbV-5vmp1XGfrdl8RdfMJruSRtfGbsUS2YvtVQg.PNG/Photo_1.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA3MDNfNDIg/MDAxNjU2ODUzMjM0MDM1.CZX8SBpp0v451Qg5_A2NeONqQpW_TjiOxwbfw6wKuSkg.zkpq8Wp1p-uF29m3iu2Et4TOZzXAA3KsCuaL_HEjDV0g.JPEG.tkfwk6/output_2083134491.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA3MDNfNjcg/MDAxNjU2ODU0MTQxMTg4.il1JM2FI7YsMj247wZmLNkNl-sxamKZfIgoecf10ebkg.TQZ5VnLeA1mh0h5HbHZqi79QIJpKKu7M0SoeXcRXTvwg.JPEG.tkfwk6/output_1917018560.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA3MDNfMTAg/MDAxNjU2ODUyNzg2NjAy.rI_zMORkyPHL1vc_Jt7FxDY9ykD_IoikkKsOdqKTDAIg.x2k5vuZvD7XdZJWzeP6o6i5htcXbR1vl8f9Z4_qou0cg.JPEG.tkfwk6/IMG_6474.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA3MDNfMTg5/MDAxNjU2ODUzMTgyNDY1.Nyl3VCM5ZPPjANmdYBKvg6lAMZNq-1wX8mLAhJ88vJsg.6c7jIG4XJUDmp4n8-X4d8Qam7w_kubSGLwWFaTkzeTwg.JPEG.tkfwk6/output_738774752.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA3MDNfMjM1/MDAxNjU2ODUyODEyMTU0.MvrypzwCV4EMzXuqago5-ZD2IAXf-U8fJ0KP-MK7_Hcg.zt1xrms1eLCns4UCoxoq2VnOdqRyG7gmUzjzBF0Gv5Ag.JPEG.tkfwk6/IMG_6447.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA3MDNfMTIw/MDAxNjU2ODU0MTQ5OTcw.crtpGa8ly0CYE_txvEDwvQ5-g1HmagOPoEmnq5Fx18Eg.pXclgTl1xs3y_SHL77m9--dxfVgqzuGPEAVlx67geRAg.JPEG.tkfwk6/output_2335995775.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA4MDNfNTMg/MDAxNzIyNjY4ODYxODcy.nHMOv8KtBUF5FAvABCeguIIVHcouKqNdIEMKGxJwTk0g.phK90fky1QWwSL4cyXwrL4jofcFQWU1Dc6pBsYLa1MQg.JPEG/20240803%EF%BC%BF114344.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA4MDNfNTcg/MDAxNzIyNjY4ODYwNzMz.8E4TEfbZiy8vRctuqBkD8FUy8we0fTw9tIFtWQOowXog.IG8l-iL72Bz1se6FMNppmLil61MBEQDb8akVKucGE2og.JPEG/20240803%EF%BC%BF112233.jpg?type=w773' }
      ]);
    }

    const existingImages_k8939690 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8939690'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8939690[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd88b4ec79829504869d764c33d99eaf5629b369?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/13a75c307138afe0b7b3fc5f2333bee9b620ab7a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/36ce169ead906ce0cf8bf0e655b12db456d268d7a3c3203add58f14ab519208a' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a4458b88fa53e24f16ca0f694196d1c3e898996c76bee8beb3c346fffed02676' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8da41aacdbf6338178276c30d0f535f9d2cd3e14c0b2d4f5fa49b922a1d7967c' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79c0155f6a63d410a410e0c13af4636d65247b816b74198b62f4a2d479fc81b7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/02bec08f544abc159f2e9e251f3644edb119f23d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjZfMjYx/MDAxNzUzNTEwMjAzNzA2.H-9V_T_VLzjxMTBexbaE_gtPj8cEzfCWdZIys8EZTP0g.ekqkkNJA-c6qdY97EsETJ_yEi96nGWRMTHUg8ahr6u4g.JPEG/IMG%EF%BC%BF5111.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMTcy/MDAxNzU1NTg4MzM2MjIx.tNC8rr7IpwHx2SFyKYFODQapTVl16hmUUZ87xQbP2vsg.aew-YhtG7g4CRCly8DNIAbwL-08BbI_xfx_4hoTYu9sg.JPEG/SE-0D2F15D4-ABB0-4625-A3F8-D798376E98AA.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjZfMTQy/MDAxNzUzNTEwMjAzNjgy.LmAD1IpbB__xcWKW6uLq-A3BpwPF2zdaZwd2ZadM6Vsg.cF10vVX8g-Q_3uiXPGFf-ULhCEk1opohukFPvR7yTWsg.JPEG/IMG%EF%BC%BF5138.jpg?type=w275' }
      ]);
    }

    const existingImages_k17192409 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17192409'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k17192409[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/844c200b5580a816c6b8cda8bcb1aefdc59f87f0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/32a379d22eb9b3691e183297c8528ca55a153135?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/89e360618c1c556ea7eb1e0c37d64c7548e4804c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6ff313a147543d7ac5c10710a17d78c01e0b98b6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9ab7dbc904813cbea56dab9a0338de1f576f256?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9f1678ce1581608e280118b8b6053dcd35bfd5ad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c32b50ff537875eb895a2b4454be271da51399f8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqrOXCF4Jn_MqbzpuJFrcBfRHAYzUUay1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqrPkxv7NF_B82kE3K3nbf9zum03uwOy0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqrNYuVOWH_LhfBt8DEvNDzSi5AM5hAok_img.jpg' }
      ]);
    }

    const existingImages_k11892266 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11892266'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11892266[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c8d6d07646cb6a2ca91d7e0b3b53012b51ef4927?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6cb87bdc36aa3351e63a6dd9c27f3096d3b55da5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aeb6d87dfcd921142d3f4eeb70c31323a37419a0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d3303d6e1eba2073ce1e1661be49b4dd5c2b107f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7d0d8553edd7cc78440b75c14b4a0e129580fa0f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e85c6f919b76ebea6991a6dc3c1459eb3daded1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7ba522da43e700de43e81c621a7cf088c7effb35?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/abca549d7d8c3a2df98dfd1fe84b035951bd3cc3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33b2f34e82b214b177a8229b23213609bb931fd0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cdf4bee96b65e8ffa544ab6fd42582cca745401c?original' }
      ]);
    }

    const existingImages_k8365404 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8365404'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8365404[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/646ceb83f3a5ae37b7b37c52789f088caad8faf3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6bce0dc50a4dcd258a49f7dd4f61086d1f2ed180?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4bdea8110565943e4408448a805bb77971144006?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/94f3df947a8d70749e4a1818d87153ca1948ac77?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e4bc4ef33a7916ebe1bf7bd300622c91b203762b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f628fbfc3abfdb43593d230df9aab7a2cc8b8bfb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/23c0d51e2e784a5d4e4f496173c345bb2b7d5a3e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/229a76cfe05e8412bf268a00fa6d6abd96988630?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqeM2XHFUi_Pr7gW1DdL8RzBhddU6Di60_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqeM1qXVs7_KSYkvWZRz7x6JqdxQxcXMk_img.jpg' }
      ]);
    }

    const existingImages_k10033021 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10033021'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10033021[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ab8fe4a790f9ac1342b8fee8a1562efb0d03cc47?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/36fad6675e93924b11db2e84f33143e55ff2b6e1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/38bb0b2b3732a78dc94ea18067f331ad79bdcc12?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9c7746d5321a5e065ea31a79cb09dfe040780d27?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/625c5beab11d89ebc3f435ccd6bdbfdcfcc89f08?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6958095e4de24f37549940814b50f990dd635d05?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe5604c1d4439eca03f6bda46f5ee2aba486cc2d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27b6dc8c702d4889870c50afd7742801b6b452f1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f29e611548aec6ed6422391a2de2d50a283afc45?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e4c5bc049fcc87b40a52c1467d07ffb09a5093ce?original' }
      ]);
    }

    const existingImages_k873847269 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k873847269'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k873847269[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/77F558B0820649F1B482BA6160576C93' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/691F99DABA3645819B12785A75BA2155' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/389450D566FC46FAADBB5F114BB9A960' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5373DCDC1A2C44EC9961CF2948FC1A7F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F079011C3C9D44928F1658625AC67E59' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3B48874D0AEB4D03B6C92E5BB27A62BF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/579427B4142F43F48A57DFBC443CC5D1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a3b0d0726d8e5dae320b0905095c5ad7cc37721b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f70c999ab044563aec10e63feadbc28e9763a476?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0e75cddda4c13bbf9fa1d0ffc1a82d2c5676a296?original' }
      ]);
    }

    const existingImages_k403606065 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k403606065'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k403606065[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7B85685CE17C4D7EA1F85698BC5F1E7A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/30484A83AFE64F23B3059BB49F67356B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DBC6C78DA678409E97B9AFF437E93774' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/658A2889A3D14DAE8862919B68F02626' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTgg/MDAxNzU3MTUzODIzMTA3.8RVVemwFXDRLqgKwgvxIh6V0h-c5Bt1qIgd7cSz65w8g.aUKLXLyv5M70J1vDMXaUeNskKAYgI2ZywV6kf6NhVKYg.JPEG/SE-5548D9A0-AED4-4A95-B380-B406CCCBAFB4.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTMy/MDAxNzU3MTUzODM2NzQz.zyZJcRuRvN1Wn5ceyfrEHoWIIa1De1lPI8RfRJdcIzAg.Q-VH3wM6PYGgK-SqeHlQKTBCQRvwsY2KggyHNDdFsdwg.JPEG/SE-1656E37B-DEC2-4FF6-84FE-563416E25C07.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjQ0/MDAxNzU3MTUzODMwNDYw.5uCFlBwsVJYbuFC-E_nOvVKha8zsq5Lr5a7dSXNWdu4g.j4XtMDbWiELtL7ACI35N0qLs8w9X0OFpR7JSs3pIbysg.JPEG/SE-00D3FC1A-1527-48AC-A101-F954D250DB9B.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTE3/MDAxNzU3MTUzODE2OTk0.6wbM6JT7CLjDgF6fOm-dU4q5X_zYRPHzeREWokOaM5kg.8WqNqxBW0otEars4gDNqQjrCDbTwBfXrmzpWlPALuU0g.JPEG/SE-57157AF0-542F-4F14-9C05-3F077EB80476.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTA4/MDAxNzU3MTUzODEwNzg2.IaU7k4N2A8nUTvdasArQkI7wQ9cEDQmDHYH5Lory8Xgg.7cjDjnelOe5UMOuxlsUQI1xf0dTXT7cd3iBIUfjeao8g.JPEG/SE-24C6C854-D615-4631-8667-0A9FA484AA00.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTY1/MDAxNzU3MTUzODMyMzg1.gRCgTnBS4mSU0g98E0_lQwGHYSptJMrtJdiYBylh7EMg.e6TRl9LOmX8X2KszfckmaGzct1qcwrcJhZWPUN7gNNYg.JPEG/SE-0A3B8A21-C7B3-4B4F-8810-1BE646C903A0.jpg?type=w466' }
      ]);
    }

    const existingImages_k1837356767 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1837356767'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1837356767[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41cc743a763b3bfc3fef7a289f25084e838c7ebe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7593f2805198b07ea34f29ed0b015d97bc1fb2a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca73a2fe1e47f158df7329156d73902b51420e50?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a1528755af1e750701dcd9533afcfaff080e9a12?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f50711c29a3c862dd20e5f408b3ab87f0f6850c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/673bb18a775297349e2582ca93bbe7a2fbb35e7f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b285af8bebacac4aa1995a736e67f6444404b70?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/09894e438d873d8780c19893306d6d8001239fad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29badeb4c4be7402ef0d6a6ab5794cc622613931?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9a3d318a31ae2f1cc766b36899952917a4f8d09?original' }
      ]);
    }

    const existingImages_k17469780 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17469780'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k17469780[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6aee3a78f1b51a29c7d7407fb873dc635656cfa3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d2226e24a6a668bfce1ec601bab303e4f5eed96b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e10d099f3e7c553880f021e98e21b4891c7f6174?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/37b12a6a173e47516b8d39b856a49d6f325336fb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83741801ca426d16563b9bf42c5ba6285943cf20?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f43b78abc7a63c1c210f7efa9cd1556a67ef6699?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c6f8bc57113c21a0b4df3d208b95f1a87c365611?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b875ead40e4d59b455dbeb2b3af4b6d738901a02?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7f515740f084ce6957ec9cd16c111a55e19e8715?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/44742568f97a196354f2f1b02180b7b00522d942?original' }
      ]);
    }

    const existingImages_k7893813 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7893813'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7893813[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed588c4b3f742dc0a66f6fb80c1169eb8783852e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjI5/MDAxNzU2OTUwMTIyMDE3.w7v0SCluL_JPjkvbaRAPGO2wiQ0kYrDdBysnzCIBHpAg.MH7BtqLydSV4dKJ1Xcvl36NuWGAlehyS8gPgQPUCm54g.JPEG/900%EF%BC%BFScreenshot%EF%BC%BF20250904%EF%BC%BF104010%EF%BC%BFNAVER.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTQz/MDAxNzU2OTg2MzIyODM0.OMcPyvOwdGzHfcgzABM4HKXQtAra3SUTFtHmw7h6hz4g.j3zmpnileuRjGLD0nEuIjf4P4EnG_WcKXH1zz4mIOUcg.JPEG/1756986322267.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTRfMTE3/MDAxNzU1MTc0OTU0ODY0.3UtR4b2w64_zX2u8d-rfqYSMT--pNYek4qFu7J6ejhog.KErF--LjvUJDcVKEz5lH9hX0Bqm_4wqxaMsnHzUlIZEg.PNG/image.png?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTRfNDMg/MDAxNzU1MTc0MTg1NjE1.i-UnpM-2pyBBsdvMCDgDkKAJDjx0ElkgOGdCYW0GmK0g.rubkFBqcQSXL59x_9UUgSk0I8mPsbtQ3HfpLJQkOBhwg.PNG/image.png?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTRfNiAg/MDAxNzU1MTc0MjA0Njg2.SBwEiU3yJ7G8flmwHqU28TPyhlWzaXzO4wlSUgR0Ig8g.dINe1ATRhfQLZ1L03Ov0Q2pU4aeHZfxjgRpF_2fWOWcg.PNG/image.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTRfMTA3/MDAxNzU1MTc1NDI5ODg4.oqkBNor60aLZmHdVu3Padzjdh8hcRRLC0uGiGo3kzq8g.cgZ3ch5aQzw44qRNfPdfMnVjyZIPLy9vsnSrmAnyaFsg.PNG/SE-0d89d39b-edd5-4da2-8277-13792cb54ab6.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTRfMTYy/MDAxNzU1MTc1NDI1MTc0.26ND7EczrLzaFPnzwftcuH8kuD-blh8csCw15kqm_dEg.5qCtlYorde6SUDTHnQDkjOoBMmCyK3YQ54HePEun8jog.PNG/SE-60785fa5-a30e-4ac4-bff5-7928051e1d10.png?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMTk5/MDAxNzU0MjI3MTI1MjIw._R4YW32LEyjrmsMQSEkMfw2mAwqE4wgWWuveBAtZuFMg.GMqgMULqkITWsGZAzqd0znpPzu9R9gEZgBLNAZLH3QAg.JPEG/IMG%EF%BC%BF7770.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfNzgg/MDAxNzU0MjI3MTgxNzMw.GZW9nAJJ8496dGztdNFGccJ2aiVxyakOCgp3MdJM32Eg.Id-dYm7GdhmQ5FfYFybOPqfNJ7ITDR-yuFrSSB6s5jsg.JPEG/IMG%EF%BC%BF7794.jpg?type=w773' }
      ]);
    }

    const existingImages_k7888718 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7888718'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7888718[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ac6825a3c948a8b8acadc0aa6ff73264e95ef5d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqeCU6gGip_xGkh7lWpBGRZdTOxm7kYH1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqeBimw5hp_QIthkgH8GzlnDDOZvgKmlK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMTI4/MDAxNzU0OTExNzM3NzMy.8oUrOHi5D53m95ORBjX46jjkyiwgIRX-8mfjmAx2yw4g.GAbII8uqi4B0jX5B50ZHjK1nI7kWvIt2ZvRf7vL8iLkg.JPEG/%EB%B0%A9%EB%8F%99%EC%A0%80%EC%88%98%EC%A7%80_%EB%A7%9B%EC%A7%91_(1).jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjY1/MDAxNzU0OTEyMDM4OTY3.MpKibXQGcH46T97vXSpVvMR84ZYPCPdQ12Yn1R5voFog.wuw8KFzBqDr2Uq7Q7e5Zh3SynnevVPQSRz7f1PYR0xgg.JPEG/SE-4e6ea9b8-4508-4854-be9b-9de799abef53.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMTgw/MDAxNzU0OTEyMDI4MDk1.mK0awR6jwPGSOJZonYiX8X6PmFL2G4kR2L1CYhvYJsUg.Cl2TGw0UC_f6cbbrL--f_-YbdvLH2ecEtSeTcOrVLfAg.JPEG/SE-7dc0d774-0be9-4319-9f43-68a81c5fbf98.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjYz/MDAxNzU0OTEyMjUwMzk1.4Db2hn7W0JZkxJITdgllxJ06NQrCwSpUtugzWjNCR8Mg.nsQvC-ZRFMYddAoyYiJWNRUmJVHhFoqqpoW9jA9-V2Ug.JPEG/%EB%B0%A9%EB%8F%99%EC%A0%80%EC%88%98%EC%A7%80_%EB%A7%9B%EC%A7%91_(12).jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/PSJcu/btsPqjJvZ5p/Wcsmnhz5R6PoLRkewwYtSk/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/llfO7/btsPrffobCn/LxffjT7hAGT5mfjnvlWGp1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bisAHW/btsPqjW5n3U/ekaJDyRUlZojNFXDCkdka1/img.jpg' }
      ]);
    }

    const existingImages_k1438566973 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1438566973'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1438566973[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/864ebbbd208ea408e7bf8fe8b147d9b965057208?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3000df6d1d266e116bb1adfd2042894e78716d30?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/72ccb879e6ab378eab555b9057a90442f1c1a3f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4bf0507e2c8d6ad8d93b2fb0b61f174408078dfc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2c378cb668826b9638714b64a9592c296c2593f8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c4781b99662b5efef103f18730a2c1df08555d03?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9204a0b614e6940c8f859559c295c4f63db05d35?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5fc98dd206ead68b4f2d755b887f7998e049d273?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/02ff51b9f448454ea636033addd0d8c687930c94?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/018a4984d8f0f2b11b60d3a6523c9ac6514ab32f?original' }
      ]);
    }

    const existingImages_k21437937 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21437937'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21437937[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66ad4c659386a268dba6bddd6700e99788ec75b5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjdfMjA3/MDAxNzQzMDUzOTU2ODQ1.8rW277NvcvHmDLwNV6Or98ySX19ucafJCNlk66SD1v4g.EsaHziKR1hW20MiPuacZke_xsT0N18FeUxrUdCfY9iAg.JPEG/output_538373721.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjdfODcg/MDAxNzQzMDUzOTU3OTM3.urwN8Jyh66BAAzCQEgJQwU19NSpr28WnWyqXq9lYtdUg.MWHGkRLjot-noLHwL4G57RtDeuWqMNK5KTQ84ZIohZgg.JPEG/output_37103382.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjdfNTMg/MDAxNzQzMDUzOTY0MTU4._n4x0i0Y7Erci1nOAh0jmJ-2V_EEmEMZT0iQdOYM3qQg.5sesLs367CytgbLQd4qYWX1PgrtuoB2vTXjWS4ASSv4g.JPEG/output_3866278034.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTNfMzUg/MDAxNzQxODIxNTIyNDI4.FNhExfFBEtOREnlni-5Eno3noTkibMsPmZ3YEeyvJpAg.rzVDaZWLvOs9l8AlpsEbn3BcwgForyV46kuicdM4szYg.JPEG/IMG_5305.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTdfMjU3/MDAxNzQyMjE0NjMwNzgy.6XJ9wc18AlqgE2I4MBZfUFwuj8gHDYZvUjx52ATHqf0g.GMozuJd5lEVEk7K6f768IuKAVsB71kJ47hDau6lARIog.JPEG/output_1808695390.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTNfNjIg/MDAxNzQxODIxNTIwMDA5.Op7pM9QIlkYT0kmVDCThoSIYtl9D9jaunB5_Wph_HUsg.Fd4_6vXXC5ikQadwFw-YH6lmDA30CQkW_zqh25fa32Eg.JPEG/IMG_5306.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTdfMTU5/MDAxNzQyMjE0NzI2Mzgy.eesVpDU1WFyC_N0wP3qn2Rfg8evlLwSwafntuR7snD0g.GBVlWhZtkJb5_QKMg2BlvifFNz5v-Xx6TkCJxW8y4xIg.JPEG/output_1820717062.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTNfOTQg/MDAxNzQxODIxNTI2Njky.7rBdXt6P-m3h37yQohJbCuFgzmMCMi37Xul37KM87Twg.WsgVpxmzkSv-WgU71ri91c0bu6htgh4_KsvduT_tFCcg.JPEG/IMG_5309.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTNfMTk4/MDAxNzQxODIxNTEwMzU3.eo0igpb2hR8dEV5HITuwCkvk5HN65Oq3VyCIrtHXLXsg.VaLAKxlqyhTr1gFzLE672lAysWltWawoBCytJXs8ttYg.JPEG/IMG_5297.JPG?type=w580' }
      ]);
    }

    const existingImages_k8112267 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8112267'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8112267[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f6f882b9b819449187ba54cfdc93ec0732ee0a1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/558ed58f026b782486219d119ef75baa72d882f4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MjVfMTA3/MDAxNzE0MDI4NTY1ODYz.NhrLb98ppR1thFMbEJdiy1GppoXFTZ93F3zUthQ7fkQg.QYBp1NAPeHI1s38sT3HH1NxvfHaaXouH0viVZZqcxNIg.JPEG/20240423%EF%BC%BF124454.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MDVfMjA3/MDAxNzEyMzE2ODk4NzAw.pCJCy3VTC_VGjlokwHNehcDh91N4wYVzCBj9Kl__Kz8g.yEDaVP1m4U6LNoMb8BaU16wNLHDoApAbYDlf8xKRUtcg.JPEG/output_1097600148.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MDVfMTkz/MDAxNzEyMzE2OTI0Mjg2._6-3Pjl2cyb8sfMcncIdLCsjaGgxQSrlGacdSV1C2DAg.WuRtaEOxQydlxv9YsvfMJGaxkCg0loG9ZkKDg_aklngg.JPEG/IMG_4926.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MDVfNzAg/MDAxNzEyMzI2OTYxMzk5.VVokDne1J18jtiG7VzQ7oZ5B5XkK-w5t6iQYiJhF8dgg.dciF-KjoW6nKSO1HfZkFU2GlBUr87bimJ3vpi2JnZFcg.JPEG/output_1002720676.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/FHjek/btr9BZxI4by/pJ6ML1XzWo2kQOshwMlXc1/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzEyMjVfMTgz/MDAxNzAzNDg2MDU0Njc4.sJh3FMW7q3I6ggI44oUZpjcf1Qz6TWAPpOCZfMKg7Zsg.5Ej2DpIUmL00tRjv4B6Se-7oDAyOYaUntzNbh1CgsvQg.JPEG.yena9333/20231224%EF%BC%BF200321.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzEwMDJfNDYg/MDAxNjk2MjA0MzE2OTAy.kziS70hzQs-Smol28qgETEHT65xKhanvTgfWlvJ9oLMg.SilqlvKehh2ZfE0hcwSHyxCVgltmTJCr1WAkdBWw_s4g.JPEG.w0985/SE-4e328e67-4ec9-43a3-86c2-f2b8c5c3df94.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzEwMDJfMTc4/MDAxNjk2MjA0MjUxMDgx.Y3LbYJeYAIYdfT-8bj1_ZnTSKu8ph7l82amOsSIBzIwg.6X27YC0DDOlGYrIV9V2YXHVogTjZVFqk9ngcxkOKnpIg.JPEG.w0985/KakaoTalk_20231002_083747117_04.jpg?type=w773' }
      ]);
    }

    const existingImages_k21853998 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21853998'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21853998[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aa02f646caafc2bcfaa4a40a05819598fd1f6e38?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f86936391166f997c06cf2f1cbc7a3b294fba0ab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/05e9daf5d9deb4a94a5a08b97f98e11ea9318b2d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/22c93e8415bc2efc1e42b549aebb0735e28c1a64?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/46d4349cb5b297137b7157f53ea4beab73f8315e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/40631399162000f8ff9f3f4da91a6ae7ba302568?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/04df50b19401d2d6cd4d2d65780e8542178bd3c2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvn61tz3m2pjlohb77q0nr99p/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33309994725&kamp_tidx=0&signature=fGXDlUvP%2FMM6Y0GgJA%2FLEc2Ipfg%3D&ts=1753085925' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8dce17cf5a838086d39500fb78a3306326df8840?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7bd365ecf95f19b35aa5abb22472fdc7ecce7ddc?original' }
      ]);
    }

    const existingImages_k11891985 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11891985'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11891985[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e1c2d352cf04e88163d11cd26714ce63d8b8df8d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d26192e97abc1deff0e491cbbca3ecdbcad942e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fdd727e0f177c44db5a5fcf2c075e4f1d4138dec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a74482b1e1173fbec12e3344b325cff2e661fdb5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/67de469720f87d71033dbd587ff4e7123e496aab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0d9aebe5227af3656f1b1428cc10902e2aaef9bb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a92ed3187e2d9e4881e04e71f68a683e0f3fa595?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/967ae11a871a53043d74e8b213696e86203624aa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMjQy/MDAxNzU2MDMwODMxMDUz.Mc14X6HMOqntRjQN23vxacCpQUJm3OJfu5TWn6NKz4sg.0pFZA6ydsQqFvbu4cekCxsBjb5fbfndOBvvW_M4uCNUg.JPEG/IMG%EF%BC%BF1582.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMTA1/MDAxNzU2MDMwODMxOTA1.nMFAq6TFJBcJ8kpT0fORHpw0xdMhvmAwe9zBqsIIVIIg._YfWO1CBDDN7wopWX0XciOZjl57du9AE1dl162jf1tMg.JPEG/IMG%EF%BC%BF1594.JPG?type=w773' }
      ]);
    }

    const existingImages_k9589060 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9589060'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9589060[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5F9CF6AE2705466A9604EC26EDDD4ABD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/46ff5443626dd6437aaa5d73d60a1e1c0eff0ad2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/24f9eaefa2c024e279e78567de0eecd9752129e4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb9ce3dc1539a287c09fd3c3535a7432213d4c3a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc9f035cc0c9514d8fed4cce48dee2bcddc58480?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa27fedf9027224f93600dd1a90cb4198365ec0f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/13ec78d9cccd4a7839d9c3187a64331c95a44ef4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41abeda157388e63c3eae6d0229389e7c2984bc3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfNjQg/MDAxNzU2ODA3ODE4Mjg4.D7uzb3Osxw5xdM-wh759Yfxy-jw0FKlr9vCwsQ8yv28g.-Wtl7SJ9dBJnPSz4FHZLCjVZ_UKFmTwDVGI0Oq5zBM0g.JPEG/IMG%EF%BC%BF6329.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjYy/MDAxNzU2ODA3ODE4MzA4.Oue1Lc_056IlMTJ6hJteqlfDMsO0Kkc6wpbw9YCY9WMg.b78DSV4FuKX439eGKitaikvBndMkIG9NvHP-wcqL0pMg.JPEG/IMG%EF%BC%BF6327.jpg?type=w773' }
      ]);
    }

    const existingImages_k11006001 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11006001'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11006001[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/522e30206a194c61ba55be21c920bf61fb8d5744?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e8127d9589a66a29e31e13b4e80055c60957401?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/80419df97fe090a05068555618dceae4db5ce783?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8634ca5314ec1faf4a9e20521e083712ca954c45?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8418f24933a16ce02558f9efce3f4989b58c9dd3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ad45eac068b283f2d04e4a4fa45347e5a9250230?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/758aa854cf2403356ce3f28f5e1e7da426c72d9f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e425fad916a3aed0c7393f83561514fcccea915f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9eaa7f0e5b077ea7f9580769f4c75717338c96b9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/49c1ff808b415142d451d7601fe4477253043196?original' }
      ]);
    }

    const existingImages_k797932040 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k797932040'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k797932040[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FB4D8151B3C845C4935D3F68490E7758' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/454926CEC7AC486690FC993A91117A82' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C0089DC750854DFC8FA79FB4665330DE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F0E0CA05FEEB4385A7F981015A2AEB5B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d6e88cbb781638d6c865c79e27da06c78bacb764?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e760bae42ef951da1e841dc67fbd5b8270cc16a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/82b887e2a5fe58c1a32c643f1092c0ebc06e853c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8b20be26b7665bb3a223e38fd8302f99ca79378e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f253110b30f94ff7754c3ba0d8d66bc3a38ade92?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27a4e713fa1e8859f68ba105e53cee0761fa0260?original' }
      ]);
    }

    const existingImages_k729941412 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k729941412'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k729941412[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjNfMjEy/MDAxNzI3MTAwOTQxMDg1.NvuAuzPGiI2e6fYcqfPk67Z0RpYElb98PeiIHGwG0xIg.DnRHvEuWoywYJm8lB_a8okXvUDnh6yi1DDnJH4WpdZcg.JPEG/IMG_6791.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjNfMjQy/MDAxNzI3MTAwOTM2NTkw.E4Ap7Q-mXsZ6zE5eYA-wdwKF5tOrBQCUSMNd-w8B7nQg.NY5yEh9fVyw-TBz_fXHi4k0qEgrLWPNnXcZRkiEI0y8g.JPEG/IMG_6792.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MzBfMTYg/MDAxNzI3NjU2NzU0NTIz.DbUbc7rq39z5vzHMRLDodwZ_Cx8GovB_I-N8N9ftklkg.2JE7Huqm9CJmTi38yeSh6sD1vy_mmSkR4jUy7vbYqecg.JPEG/output_226283300.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MzBfMjYg/MDAxNzI3NjU2OTA4ODAx.cMqNE096KP3c4zb1l2zF5I5SfUwR1HoZDn47Kdk27Fcg.tVXcQ0wTte60VKZIgb7bO9Y2Ng8GxqT9GmtVytME0xcg.JPEG/output_3512053144.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjNfMTIw/MDAxNzI3MTAwOTI1MTYy.RLmkh7lpLYzmx7ZNIa1WOJg2pcXllj4svaga3038_Ugg.RhM9QJM_MF30Vo3ZM2FuaRkuxHyo8y82_kLpa1lmZpwg.JPEG/IMG_6800.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjNfNDQg/MDAxNzI3MTAwOTI2OTgy.MTaR12jCAYxCJ2oCn-8GggD9UBreMq72x-XnKi65m9sg.Fmd10oZ3Hi8nRrR712NX8IH8E1XMHZFuLqDEqxTTgOkg.JPEG/IMG_6803.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjNfMTEg/MDAxNzI3MTAwOTI3NDI5.JUc_B1LKo7sZCe22bRyqzMYgwrNNmHrPp92dZ6X6CVYg.Nbn82jj3UVDD1TTEuk2DuZTcMKD7u29QdSX47nQ5tXEg.JPEG/IMG_6805.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjNfMTIz/MDAxNzI3MTAwOTI4NTQ2.c5ufMN0VoGlxqyKekkYwS39uBLXEWwxQzyTj_6gOIy0g.J8SsOxZqk_KZdsvrhWs3_r6YS6HVtR6S16B5M57wA8Eg.JPEG/IMG_6806.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjNfMTMw/MDAxNzI3MTAwOTMxNjM3.iCsktF15NBwAKg4H0InOH_Rq9-ahS5mlBmp3VyFWracg.1fgxsSYTH2qZ1agv3sgjx4_fc4grIfHAWvDYFMBQJ9Qg.JPEG/IMG_3137.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjNfMjAw/MDAxNzI3MTAxMTExMTAy.w4tXhBcxX4uQrqoWW-iZIllK4kBrTQSyOh4FFysJvwwg.jQDmGc3uS0_4SNrI9Bz9uiu1TvXZ8PI1hxb-J1X5mHMg.JPEG/output_2249436755.jpg?type=w386' }
      ]);
    }

    const existingImages_k16599913 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16599913'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16599913[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDFfMjUx/MDAxNzU0MDA4NjAyODM5.x2fxiuLapofR3TwMAHAtXrUOYfaig_fyaowxr62fidkg.NptlNJM8tregb-l7F8V6VJf4KVgt_mTTYnYldO7AzMwg.JPEG/900%EF%BC%BF1754007763936.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEwMDFfMyAg/MDAxNzI3NzQ5MjQ0MDc2.7-rkScfLBJ81nBc_p4oanZlbAJHJw6bIFbwaPnM4hFMg.CpKTsRyViBKexIcpvsiwo7wU1TlwdZ322tTKkd4ftd0g.JPEG/IMG_8895.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MzBfOTYg/MDAxNjY0NTAwMjYzMzM2.tGwSQEGNm35cw7z07IiR6rHCArVyfhKBQv2Wc6P1fisg.C1KUXj8-Xvv_x1-kV28-SGelR17jfymDV6jgjBdV4Wkg.JPEG.braindna/SE-3ae360cf-64c3-4880-b881-35df82614012.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MzBfMjAx/MDAxNjY0NTAwMjY0MzQ5.lWPI54F-VIlTw8Hgn2jMUjUffSj_wFwkpP0mzcKawFMg.WMDG8mSQyT8jszcFd3wYfzq1ZGvUVqgOMV87dCvwjpsg.JPEG.braindna/SE-70aca466-407a-4b77-9419-7d1e51f045f4.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MzBfMTc2/MDAxNjY0NTAwMjUyNDgw.xHW0lrvVjN3NsDcYRzoj1wsRXmOJas9791rVyB3ADCAg.U_xI1nopaDAT1c839gnrk5yYl3HetIaDQ1qX3nYBzeIg.JPEG.braindna/SE-3bace9e7-6896-4900-b8b0-eee4a2fc12bb.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MzBfMjI2/MDAxNjY0NTAwMjU1NTY4.zK-hcNdDNzPb_Pe2UGd9gJ4NH31gisi5EhMqCUqbndIg.dTZz8QA07RW3mbSVvFt_uuGKk81sX9tkrphHYIYLUosg.JPEG.braindna/SE-e2dc56b3-c89b-4e44-a752-310d028a7ba9.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MzBfMjIz/MDAxNjY0NTAwMjQ5NTk2.d8Xuiv17Q8gGv3NlGhuevVS0A3AFYTwBCfTOG_2ZYy0g.v2ipW551w7SN7LaKGJsC2nDn_Mv8_LPfOfw_nqR8fvMg.JPEG.braindna/SE-6f5fe5b4-f75b-474e-9cbe-d3d1a8243265.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MzBfOTIg/MDAxNjY0NTAwMjQ4MTgw.UM0u2WOvDZ6Vd2bW26dZCzxcgriYFzfNIxR-wFGVfhwg.pdbcwQwjC4rdVa9xhL9dEoL0yEgb4Yzi6u3bPSBkLLgg.JPEG.braindna/SE-90c3ad53-504c-4ab0-bf49-9c623c9fba9e.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA5MzBfMjgw/MDAxNjY0NTAwMjU0MTI5.ZD1AZj1mcuqt9FO1NWsoPCpAgmGAQ5ErAbJEwkh44H0g.5x0ri8sBCUtZbm9vxgf8N0HK_KR8vIrSAg1sC61BUS4g.JPEG.braindna/SE-ad44f968-3e0d-4e47-b9b6-c3c89a75faba.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMjJfMTE5/MDAxNzMyMjM1OTA5MDE5.8ze_1i9Fq8zH35kHwl7scrRasc2tKU46ZAXYnuRZ6jYg.VNSWlRkMDIn_cruXy15RluZfbk9DZGvd1lsb_xRT8esg.JPEG/IMG_0080.jpg?type=w773' }
      ]);
    }

    const existingImages_k11891820 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11891820'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11891820[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cbe6a99cc49cd63efcdbe2c336aeb872fafb8b1d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6bbcb8bc8d947bf4560a365d07315a1bd8be4f36?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfzpZp8l2_pJwBZNpbaH4uQ4srKbtdKk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfzFVmmOi_FidKhf78eXWBVv6SvMPGB0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfyRIv7FF_k3N6me0of1ULVmrzlbLc81_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfAzULdr1_WoRX48kOp1uBbKC6tiN9p1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNDYg/MDAxNzU2OTQ1NTIzNjMy.WajNV_FSf6xuRZnlUZjQToHF7LzJNQQ0ZbLFAmkMa_Ag.vmZnZBTtV83kfLvqyHtxIIcWv6yS73j39CI_p6THwwkg.JPEG/IMG%EF%BC%BF9200.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjg0/MDAxNzU2OTQ1NTI0MzQz.cHtSRWP747VAykZExMZHVreRnRhtMtKVHyXqiqXRh6og.b91rznGjss_6aZzFtoLUgfN-_17OErl-fy7k-G6lk7wg.JPEG/IMG%EF%BC%BF9201.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTcz/MDAxNzU2OTQ1NTIzMTM2.S5rue0cpEYc_-7brUFQcaX_4fOjwO24LImi2lsDWO4Ig.R6fYBVw-apLw1Ca7zqqaNgbIpUQUQwFt_-cBhklRmR0g.JPEG/IMG%EF%BC%BF9207.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjUz/MDAxNzU2OTQ1NTIzMDk0.Hd-gJL7qIHXmcs0iM1agAIfstbdkViVPCbILtG_dwSQg.evq_FKbQ3KdjSmdjNOnwN8W56qkIqGLxbRwAsYGuQcUg.JPEG/IMG%EF%BC%BF9203.JPG?type=w966' }
      ]);
    }

    const existingImages_k21559095 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21559095'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21559095[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9DBE444C591742E6A39DF4F284C6A96C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2FAEA735768A46F4801BA2E2E0B231C4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5B84CD2D5DEA45208BDC823F4C3FBE52' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/59E9CCD4642149F6B560CEC015CFBB5A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D968E589434B46C6BEA3C502FB3177C1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/79413458C21246ADA93F71DA82DBEA87' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/935A0F290A844878ADD4FB863E9C6411' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8C6F5BEB79404BD6B77CB180190DF91A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0690AB6BDEDE45468A51346C01CB77A8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/720931015F8141A793E00B0129DAE468' }
      ]);
    }

    const existingImages_k1737039720 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1737039720'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1737039720[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c9e963f4fb31105c786cd25f5f08799a94c5d3e7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dacc3aedc4c3bb66a2ae5f9cf7519417d4fd1963?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fac19ff8614f18d24130d12b7e2aed8c5e86942a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/62dcd30f79612e612a478ea2cbbb2a16b2aa49be?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5e6cac43ec975858ba6c223d119062f6e27186d6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e93d923208a22dfd230a36655a60187b74e6ba12?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/da58ebb5b045e66c4edad7d7457656ea6bd9c86c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aaecb105b7873156d8b497738bb033aeed857f48?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/67d94f3bc05f68b261399e4df8640795a46a4cd4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/242a6badee5887955265f43b04af2f11d4ca8e55?original' }
      ]);
    }

    const existingImages_k9780807 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9780807'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9780807[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a7131e7d7d4ad7b09635babf4b2f05b9ca1e0f47?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0b2e1c4100e6ff128f716f9284af0200897d3adc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ba93a62c014353e7d8c905a76df8943eddfa319?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6e5c3d0f147344d7626c74fd476b53a05e77312b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edd63cfcfbba98934420fab8433d8c1c4c48af1e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66a255b8c8191bd5d4bff1245fda1ec2d88c48fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1485a384605549345ecc09efab7660be60ef72f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/928f35d59e58e07d8e58aede8b38c713e8f9bc22?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4950314afd17f4c19eee3748b1bb9e67ee8f8a1b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/efb1dd62e5a57cc95f94e6ac2e123609b311d394?original' }
      ]);
    }

    const existingImages_k1027108400 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1027108400'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1027108400[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e7c4bcecc55057e82e10b8a76f05e1828a036488?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ccbc3f3b5467d87714f58b0ad4687ad84cd9ebc9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cbf987b52452352b372bed17dbe820b9fcb6e66c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f7624dbd4201009e5aadc66bde2f46e890cd1110?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/70c4962bd08a38ad7c766f068d4dbeb6d5969c0c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c244e932b66c2003d7e5fc870b460370640f6fa6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/11d05570caa114174bd1b8b69a44cf26434a31c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/73bf646f9f663b5c46229f8fed63394c4d37956e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3f88e33b84f4799675d49b06864d14d98f882c6b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4bace98684323a8b618995f1d81921a1a942ae0?original' }
      ]);
    }

    const existingImages_k129205227 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k129205227'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k129205227[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/AC555C6B6A924BE4958F0F44630FCC6F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5D4C092F1B7042B688A9D7F70AB094D0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/2771533CB1874709BD0FC405BDA3CFC2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/98C05E74235C4EA3820ABA83C8F630A2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D5F3444963864934BC0243336E969F8B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a56be0dc5d50851e7e9f6f1be4237c6408f1d16a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0eb974ff27cbc2d9cbc64fb210b7601e0bc5a385?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d71b90ac981c70ca4c82c9d572106f54ca40f705?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/418ed481113dde3fce4837528480581b18e20e6d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f924f205ebf328cf32fb08b50256f024a2b16e2c?original' }
      ]);
    }

    const existingImages_k2100275007 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2100275007'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2100275007[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41ef1c8dfab2cdc9592546a6d36e7076f3efb38a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1fb9b4c19c410f19a5480e7aa0e8296ac4449b3e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjAy/MDAxNzU2ODExMzAwMzg3.T4H6vLvr7I5XfE0wT-b7vg4qEAeQoF5j4aIyOAxDdM8g.9K2WdQzntjuZKMTE_pAkkSkMZCMzhuBhAJI87eZAlMEg.JPEG/IMG%EF%BC%BF3681.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTQx/MDAxNzU2ODExNDQ4OTU2.0oNMVGp1oNdv6Kv9nFHK0cwYXdGqsBd5fZc3CCi28Nkg.Lk2NO8rGhI107fTqOlbelvpxe2JBx__KhFm6vHUNXLEg.JPEG/IMG%EF%BC%BF3692.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfOCAg/MDAxNzU2ODExMjQ2Mjcy.puOaDXkXZli3KXEmIlFo8TlYgHGJJETHCMSqBEUCmrYg.ezkNc3uv569dTNO-B7KYRZlBKfe10yySBj_XrUWsvXkg.JPEG/output%EF%BC%BF2931342823.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTA5/MDAxNzU2ODExNTQ3ODc4.MQtGtQARQuIQS6W1mQ6pwc1xBus6OTvBLEmehN7SY3sg.W8z4Zm2jhh_4f7LaoESGejb1IRwJwc2Xq3O2lD53MxIg.JPEG/output%EF%BC%BF1285865877.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjYy/MDAxNzU2ODExMjM3MzM5.rTmlIhD04Y1yo8K8aFHxrI3mFeQQ_xVCrm-fY_-MVJgg.OHid0CS6GXhbitbPzE8uQ3fNcWh5PMqPCYYKIv-b3r0g.JPEG/output%EF%BC%BF4055015494.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjkw/MDAxNzU2ODExMTgwOTcy.nuoRcLqPQbVO0zwHJf7Hi728FShNgWBvR2AunNK0YS4g.Wh5gE7t_54cgscrOk8mBg_DYzJpmqUkjD-bT-QJ-a4kg.JPEG/IMG%EF%BC%BF3678.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTEz/MDAxNzU2ODExMzAwNDA2.gaJYaQY6iw7C8YIVHFwRs5de4_3lMK4xG6tRa58D_Lkg.jp1V2ELbqIH_U-aqKdy5JREaUWCqsRx-XCXolNcnNw0g.JPEG/IMG%EF%BC%BF3682.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTU2/MDAxNzU2ODk2OTcyODY5.ysVEvU5BsAzNrJCx6xtXFJ6rpwv3dkNzDVnKfnCFPc8g.yDlaMk9Fb2EQwk5wgm2lOaM9KSobLvsSGqKVfGLYrCUg.JPEG/IMG%EF%BC%BF4652.jpg?type=w966' }
      ]);
    }

    const existingImages_k1872404464 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1872404464'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1872404464[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/08CE0AD42F004D80A9312F780B12A6FD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7876131F7E38437185B2D22E717BF58B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/90B24E4180864EB98257A5FD630C6B46' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5DAEF97EA0C746888C3EE97D976C9999' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FC901F154B1E4755A8E43E5CC959D5C6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/12FA3E762AF94E42AF115B34E2180D1C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F5B504C3EDB842E2A7E654B346FDFE71' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/67e2e896d12d6380a7dd475eda03e49ff456fc5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f773973d550a35da17a374cf2c1a2476ea53ed5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7effe410330c300b457cdda03074478ca1854f17?original' }
      ]);
    }

    const existingImages_k25973519 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25973519'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k25973519[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/01A23A5B333A4F08B4C2E177B2C613F3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BDFC68C0F4764055B8945E8FCB84688F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8BECD04214CA4DF98998113AF97DA77F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2499ACF6112E4E79A291A497D97CF699' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2374823E543B95E634' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D70E351978F74A568AAD8743F05F6A6F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A846F02389A24434B89E140F970481E5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/79C9092742904CA98C0EF517762F4C3C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C525DF3CBEF4476A8B55084D196CEB90' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7ab10c5aa8549e33952587e8ac433d76fe3b10cb?original' }
      ]);
    }

    const existingImages_k213242053 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k213242053'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k213242053[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FBD0472A0F684E2F9098B30FDF296DD6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/ABF69E9763BC4BF8921978AF01347D49' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5338BA6E1C774C16AC9BC5E22D97649F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/50EF7B5A74AE4BF3ADEDBC050B331981' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BD4F9178D331477B90605448FF5088AD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AC7DABA891A2439394F56A49B21CBFAE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/84583CBEECB84147BAD4640DEE0A748D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/88FD49C8F4054F40B2899182031BB368' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/38EB6F07C282460AA3C870BAD450D57A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E57524A34F1C4E1D88B1148A1921F3FE' }
      ]);
    }

    const existingImages_k90097317 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k90097317'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k90097317[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/906a9c27be2b218db8fa45c3419d0621cb81730b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f85f9a9275b458a44edf55f8dc2eaf9aa99c7b7f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfNiAg/MDAxNzU0MjgwMjM1NDIz.oX-zmd8d1XXu2zfWIrxzFXOVyWrZrEhnlCGIBOgkyHMg.NZ3D4L8xFpYgV_LoEPnNSsJcXL6RZ6qBUGPajVi-AhUg.JPEG/IMG%EF%BC%BF4703.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMjE1/MDAxNzU0Mjc5MzAyMTM0.CYK998S5lQ1rpTRPbVgkIrLCre0rYYQGZXKqwIxTJW8g.P_1CwedaF0sCj9ytdDx-Gg1R7DygF3_gXE1TOwBTUgMg.JPEG/IMG%EF%BC%BF4684.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMjI3/MDAxNzU0Mjc5MTUyMTM0.hz71SP_UsOnypzH9Q_uGQ4uBkrxxbT2SGQs_ndKpowog.fpLK8X_qJ4S8WCploDZyKHolbg0V_JLgrQgGGJmcyR8g.JPEG/output%EF%BC%BF2011466533.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMjAw/MDAxNzU0Mjc5MjYwMDkz.GSZVZyC2xBNy5qIUqFOZ4B2rcOC8guObnOe7iBJBf3sg.CNGJjq26aTkMKhT4hBKCFAFiTpzXbpju31t_fqCLe9Mg.JPEG/IMG%EF%BC%BF4682.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMTQ2/MDAxNzU0Mjc5NjY1MDk0.lHbQh2-aH8pqJ2iqXUFtNpY8wBMU0mQPZj7VzqFbd1cg.13Ot_RpcO9EtvHKdBdLNPQsuuqlBstrjx69jJrLHbYQg.JPEG/IMG%EF%BC%BF4696.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTZfMjI4/MDAxNzU1MjgwOTY2NDU2.MxAg6Zht_GrevT8PHC-o7syc9HKZrsAfg5Lzu1EA78sg.XzKUlbfkypt0YOFKy8V01bUi4F0OiFCCz-aE40orhxsg.JPEG/IMG_3658.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTZfNDYg/MDAxNzU1MjgwOTY3Nzk5.0SjJvyD4hKwGsK1vtW3nAkoHKIlsEa5heVPT5VItLcQg.b4lAwBBoos2o0104TXoEtaYagj7qv_uPaHoQ5yBdroMg.JPEG/IMG_3662.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTZfMjE1/MDAxNzU1MjgwOTY5MTcx.4D5vPsGTErPzDY6ya9FdtlHB4EptsVXkSHV-dTCZvdYg.aMqvfwpDx4iG4AeYZY7LyQw2mJyM8071kXCuLtCMvgog.JPEG/IMG_3681.JPG?type=w966' }
      ]);
    }

    const existingImages_k16386830 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16386830'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16386830[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b705e2aa07156773d4c8c96275dfda44a8346692?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d6db7e90197dcddba93169fc1f0e0a0c9e004bd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/93a2bc4983b6a266cdfb052dc2d9d4e737688ce4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bcf93b114b946254f5cd45ad64fc2968441594a7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ab718bf96c45d0201730fcad85da74587c10f65f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e06333ed8dba8084b7047d096b9ac0c1773133a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/97564e3514d125c6795f512cce3cd9e6c923bb6b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e0d206d38b6e7bc8d07421e2a34e3d195b6bcb7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/11978af460846b70bcd659d3cfa86a0c885fbfd7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db25a49c2e4523ce0fc64ee70b30acd8fd5d5ffc?original' }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계: 결과에 담긴 categories 기준, 중복 방지
    const spotCategoryRelationData = [];

    const existingCats_k11161843 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11161843'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11161843 = new Set(existingCats_k11161843.map(r => r.spot_category_id));

    if (!existingSet_k11161843.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11161843' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k25754890 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25754890'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k25754890 = new Set(existingCats_k25754890.map(r => r.spot_category_id));

    if (!existingSet_k25754890.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25754890' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12473363 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12473363'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12473363 = new Set(existingCats_k12473363.map(r => r.spot_category_id));

    if (!existingSet_k12473363.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12473363' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k739219512 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k739219512'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k739219512 = new Set(existingCats_k739219512.map(r => r.spot_category_id));

    if (!existingSet_k739219512.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k739219512' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8670704 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8670704'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8670704 = new Set(existingCats_k8670704.map(r => r.spot_category_id));

    if (!existingSet_k8670704.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8670704' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k293015499 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k293015499'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k293015499 = new Set(existingCats_k293015499.map(r => r.spot_category_id));

    if (!existingSet_k293015499.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k293015499' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13496738 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13496738'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13496738 = new Set(existingCats_k13496738.map(r => r.spot_category_id));

    if (!existingSet_k13496738.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13496738' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10916090 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10916090'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10916090 = new Set(existingCats_k10916090.map(r => r.spot_category_id));

    if (!existingSet_k10916090.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10916090' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8585683 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8585683'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8585683 = new Set(existingCats_k8585683.map(r => r.spot_category_id));

    if (!existingSet_k8585683.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8585683' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k659933814 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k659933814'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k659933814 = new Set(existingCats_k659933814.map(r => r.spot_category_id));

    if (!existingSet_k659933814.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k659933814' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27069548 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27069548'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27069548 = new Set(existingCats_k27069548.map(r => r.spot_category_id));

    if (!existingSet_k27069548.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27069548' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1532158905 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1532158905'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1532158905 = new Set(existingCats_k1532158905.map(r => r.spot_category_id));

    if (!existingSet_k1532158905.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1532158905' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1299944133 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1299944133'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1299944133 = new Set(existingCats_k1299944133.map(r => r.spot_category_id));

    if (!existingSet_k1299944133.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1299944133' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2048564896 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2048564896'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2048564896 = new Set(existingCats_k2048564896.map(r => r.spot_category_id));

    if (!existingSet_k2048564896.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2048564896' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1878980682 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1878980682'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1878980682 = new Set(existingCats_k1878980682.map(r => r.spot_category_id));

    if (!existingSet_k1878980682.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1878980682' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k17481755 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17481755'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k17481755 = new Set(existingCats_k17481755.map(r => r.spot_category_id));

    if (!existingSet_k17481755.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17481755' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k24388670 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24388670'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k24388670 = new Set(existingCats_k24388670.map(r => r.spot_category_id));

    if (!existingSet_k24388670.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24388670' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12468740 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12468740'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12468740 = new Set(existingCats_k12468740.map(r => r.spot_category_id));

    if (!existingSet_k12468740.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12468740' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10711287 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10711287'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10711287 = new Set(existingCats_k10711287.map(r => r.spot_category_id));

    if (!existingSet_k10711287.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10711287' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10090470 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10090470'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10090470 = new Set(existingCats_k10090470.map(r => r.spot_category_id));

    if (!existingSet_k10090470.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10090470' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9921422 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9921422'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9921422 = new Set(existingCats_k9921422.map(r => r.spot_category_id));

    if (!existingSet_k9921422.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9921422' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10727290 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10727290'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10727290 = new Set(existingCats_k10727290.map(r => r.spot_category_id));

    if (!existingSet_k10727290.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10727290' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1652068777 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1652068777'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1652068777 = new Set(existingCats_k1652068777.map(r => r.spot_category_id));

    if (!existingSet_k1652068777.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1652068777' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21347050 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21347050'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21347050 = new Set(existingCats_k21347050.map(r => r.spot_category_id));

    if (!existingSet_k21347050.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21347050' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k45811011 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k45811011'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k45811011 = new Set(existingCats_k45811011.map(r => r.spot_category_id));

    if (!existingSet_k45811011.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k45811011' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27273000 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27273000'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27273000 = new Set(existingCats_k27273000.map(r => r.spot_category_id));

    if (!existingSet_k27273000.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27273000' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8031047 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8031047'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8031047 = new Set(existingCats_k8031047.map(r => r.spot_category_id));

    if (!existingSet_k8031047.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8031047' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1176678924 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1176678924'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1176678924 = new Set(existingCats_k1176678924.map(r => r.spot_category_id));

    if (!existingSet_k1176678924.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1176678924' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9366475 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9366475'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9366475 = new Set(existingCats_k9366475.map(r => r.spot_category_id));

    if (!existingSet_k9366475.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9366475' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8461939 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8461939'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8461939 = new Set(existingCats_k8461939.map(r => r.spot_category_id));

    if (!existingSet_k8461939.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8461939' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k593208960 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k593208960'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k593208960 = new Set(existingCats_k593208960.map(r => r.spot_category_id));

    if (!existingSet_k593208960.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k593208960' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9466426 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9466426'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9466426 = new Set(existingCats_k9466426.map(r => r.spot_category_id));

    if (!existingSet_k9466426.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9466426' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1308797257 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1308797257'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1308797257 = new Set(existingCats_k1308797257.map(r => r.spot_category_id));

    if (!existingSet_k1308797257.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1308797257' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9313876 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9313876'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9313876 = new Set(existingCats_k9313876.map(r => r.spot_category_id));

    if (!existingSet_k9313876.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9313876' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10642300 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10642300'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10642300 = new Set(existingCats_k10642300.map(r => r.spot_category_id));

    if (!existingSet_k10642300.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10642300' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7999598 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7999598'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7999598 = new Set(existingCats_k7999598.map(r => r.spot_category_id));

    if (!existingSet_k7999598.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7999598' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1508097729 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1508097729'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1508097729 = new Set(existingCats_k1508097729.map(r => r.spot_category_id));

    if (!existingSet_k1508097729.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1508097729' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27143822 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27143822'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27143822 = new Set(existingCats_k27143822.map(r => r.spot_category_id));

    if (!existingSet_k27143822.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27143822' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7985087 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7985087'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7985087 = new Set(existingCats_k7985087.map(r => r.spot_category_id));

    if (!existingSet_k7985087.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7985087' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k17249072 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17249072'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k17249072 = new Set(existingCats_k17249072.map(r => r.spot_category_id));

    if (!existingSet_k17249072.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17249072' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11116260 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11116260'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11116260 = new Set(existingCats_k11116260.map(r => r.spot_category_id));

    if (!existingSet_k11116260.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11116260' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7963664 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7963664'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7963664 = new Set(existingCats_k7963664.map(r => r.spot_category_id));

    if (!existingSet_k7963664.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7963664' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21336299 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21336299'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21336299 = new Set(existingCats_k21336299.map(r => r.spot_category_id));

    if (!existingSet_k21336299.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21336299' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k244084380 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k244084380'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k244084380 = new Set(existingCats_k244084380.map(r => r.spot_category_id));

    if (!existingSet_k244084380.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k244084380' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9839491 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9839491'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9839491 = new Set(existingCats_k9839491.map(r => r.spot_category_id));

    if (!existingSet_k9839491.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9839491' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1629307609 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1629307609'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1629307609 = new Set(existingCats_k1629307609.map(r => r.spot_category_id));

    if (!existingSet_k1629307609.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1629307609' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9165623 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9165623'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9165623 = new Set(existingCats_k9165623.map(r => r.spot_category_id));

    if (!existingSet_k9165623.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9165623' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1204945904 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1204945904'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1204945904 = new Set(existingCats_k1204945904.map(r => r.spot_category_id));

    if (!existingSet_k1204945904.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1204945904' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k338604909 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k338604909'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k338604909 = new Set(existingCats_k338604909.map(r => r.spot_category_id));

    if (!existingSet_k338604909.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k338604909' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11833942 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11833942'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11833942 = new Set(existingCats_k11833942.map(r => r.spot_category_id));

    if (!existingSet_k11833942.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833942' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k940879473 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k940879473'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k940879473 = new Set(existingCats_k940879473.map(r => r.spot_category_id));

    if (!existingSet_k940879473.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k940879473' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12463827 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12463827'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12463827 = new Set(existingCats_k12463827.map(r => r.spot_category_id));

    if (!existingSet_k12463827.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12463827' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k887838514 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k887838514'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k887838514 = new Set(existingCats_k887838514.map(r => r.spot_category_id));

    if (!existingSet_k887838514.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k887838514' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8379690 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8379690'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8379690 = new Set(existingCats_k8379690.map(r => r.spot_category_id));

    if (!existingSet_k8379690.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8379690' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11064993 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11064993'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11064993 = new Set(existingCats_k11064993.map(r => r.spot_category_id));

    if (!existingSet_k11064993.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11064993' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7876599 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7876599'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7876599 = new Set(existingCats_k7876599.map(r => r.spot_category_id));

    if (!existingSet_k7876599.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7876599' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9021717 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9021717'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9021717 = new Set(existingCats_k9021717.map(r => r.spot_category_id));

    if (!existingSet_k9021717.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9021717' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8337229 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8337229'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8337229 = new Set(existingCats_k8337229.map(r => r.spot_category_id));

    if (!existingSet_k8337229.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8337229' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8334549 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8334549'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8334549 = new Set(existingCats_k8334549.map(r => r.spot_category_id));

    if (!existingSet_k8334549.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8334549' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8970899 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8970899'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8970899 = new Set(existingCats_k8970899.map(r => r.spot_category_id));

    if (!existingSet_k8970899.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8970899' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10338456 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10338456'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10338456 = new Set(existingCats_k10338456.map(r => r.spot_category_id));

    if (!existingSet_k10338456.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10338456' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1659320608 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1659320608'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1659320608 = new Set(existingCats_k1659320608.map(r => r.spot_category_id));

    if (!existingSet_k1659320608.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1659320608' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1706344434 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1706344434'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1706344434 = new Set(existingCats_k1706344434.map(r => r.spot_category_id));

    if (!existingSet_k1706344434.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1706344434' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1633887187 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1633887187'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1633887187 = new Set(existingCats_k1633887187.map(r => r.spot_category_id));

    if (!existingSet_k1633887187.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1633887187' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k24961649 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24961649'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k24961649 = new Set(existingCats_k24961649.map(r => r.spot_category_id));

    if (!existingSet_k24961649.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24961649' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k126351202 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k126351202'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k126351202 = new Set(existingCats_k126351202.map(r => r.spot_category_id));

    if (!existingSet_k126351202.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126351202' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21338886 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21338886'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21338886 = new Set(existingCats_k21338886.map(r => r.spot_category_id));

    if (!existingSet_k21338886.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21338886' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1520039499 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1520039499'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1520039499 = new Set(existingCats_k1520039499.map(r => r.spot_category_id));

    if (!existingSet_k1520039499.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1520039499' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k877544890 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k877544890'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k877544890 = new Set(existingCats_k877544890.map(r => r.spot_category_id));

    if (!existingSet_k877544890.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k877544890' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k993056601 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k993056601'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k993056601 = new Set(existingCats_k993056601.map(r => r.spot_category_id));

    if (!existingSet_k993056601.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k993056601' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21346457 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21346457'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21346457 = new Set(existingCats_k21346457.map(r => r.spot_category_id));

    if (!existingSet_k21346457.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21346457' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11891867 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11891867'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11891867 = new Set(existingCats_k11891867.map(r => r.spot_category_id));

    if (!existingSet_k11891867.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891867' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7825433 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7825433'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7825433 = new Set(existingCats_k7825433.map(r => r.spot_category_id));

    if (!existingSet_k7825433.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825433' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7825176 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7825176'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7825176 = new Set(existingCats_k7825176.map(r => r.spot_category_id));

    if (!existingSet_k7825176.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7825176' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8455368 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8455368'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8455368 = new Set(existingCats_k8455368.map(r => r.spot_category_id));

    if (!existingSet_k8455368.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8455368' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7814957 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7814957'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7814957 = new Set(existingCats_k7814957.map(r => r.spot_category_id));

    if (!existingSet_k7814957.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7814957' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1228313470 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1228313470'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1228313470 = new Set(existingCats_k1228313470.map(r => r.spot_category_id));

    if (!existingSet_k1228313470.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1228313470' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11017612 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11017612'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11017612 = new Set(existingCats_k11017612.map(r => r.spot_category_id));

    if (!existingSet_k11017612.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11017612' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8793742 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8793742'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8793742 = new Set(existingCats_k8793742.map(r => r.spot_category_id));

    if (!existingSet_k8793742.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8793742' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10212613 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10212613'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10212613 = new Set(existingCats_k10212613.map(r => r.spot_category_id));

    if (!existingSet_k10212613.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10212613' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8807982 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8807982'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8807982 = new Set(existingCats_k8807982.map(r => r.spot_category_id));

    if (!existingSet_k8807982.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8807982' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8689426 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8689426'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8689426 = new Set(existingCats_k8689426.map(r => r.spot_category_id));

    if (!existingSet_k8689426.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8689426' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k279012480 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k279012480'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k279012480 = new Set(existingCats_k279012480.map(r => r.spot_category_id));

    if (!existingSet_k279012480.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k279012480' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8209640 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8209640'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8209640 = new Set(existingCats_k8209640.map(r => r.spot_category_id));

    if (!existingSet_k8209640.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8209640' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9652315 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9652315'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9652315 = new Set(existingCats_k9652315.map(r => r.spot_category_id));

    if (!existingSet_k9652315.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9652315' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11891748 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11891748'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11891748 = new Set(existingCats_k11891748.map(r => r.spot_category_id));

    if (!existingSet_k11891748.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891748' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11042533 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11042533'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11042533 = new Set(existingCats_k11042533.map(r => r.spot_category_id));

    if (!existingSet_k11042533.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11042533' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8475106 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8475106'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8475106 = new Set(existingCats_k8475106.map(r => r.spot_category_id));

    if (!existingSet_k8475106.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8475106' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1656759700 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1656759700'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1656759700 = new Set(existingCats_k1656759700.map(r => r.spot_category_id));

    if (!existingSet_k1656759700.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1656759700' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7992897 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7992897'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7992897 = new Set(existingCats_k7992897.map(r => r.spot_category_id));

    if (!existingSet_k7992897.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7992897' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7959806 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7959806'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7959806 = new Set(existingCats_k7959806.map(r => r.spot_category_id));

    if (!existingSet_k7959806.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7959806' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11148226 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11148226'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11148226 = new Set(existingCats_k11148226.map(r => r.spot_category_id));

    if (!existingSet_k11148226.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11148226' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k613532480 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k613532480'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k613532480 = new Set(existingCats_k613532480.map(r => r.spot_category_id));

    if (!existingSet_k613532480.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k613532480' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k380643819 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k380643819'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k380643819 = new Set(existingCats_k380643819.map(r => r.spot_category_id));

    if (!existingSet_k380643819.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380643819' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9549720 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9549720'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9549720 = new Set(existingCats_k9549720.map(r => r.spot_category_id));

    if (!existingSet_k9549720.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9549720' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1892890142 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1892890142'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1892890142 = new Set(existingCats_k1892890142.map(r => r.spot_category_id));

    if (!existingSet_k1892890142.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1892890142' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8021178 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8021178'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8021178 = new Set(existingCats_k8021178.map(r => r.spot_category_id));

    if (!existingSet_k8021178.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8021178' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8365828 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8365828'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8365828 = new Set(existingCats_k8365828.map(r => r.spot_category_id));

    if (!existingSet_k8365828.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365828' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8062956 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8062956'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8062956 = new Set(existingCats_k8062956.map(r => r.spot_category_id));

    if (!existingSet_k8062956.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8062956' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27385515 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27385515'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27385515 = new Set(existingCats_k27385515.map(r => r.spot_category_id));

    if (!existingSet_k27385515.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27385515' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21342735 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21342735'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21342735 = new Set(existingCats_k21342735.map(r => r.spot_category_id));

    if (!existingSet_k21342735.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21342735' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11842365 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11842365'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11842365 = new Set(existingCats_k11842365.map(r => r.spot_category_id));

    if (!existingSet_k11842365.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11842365' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7815338 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7815338'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7815338 = new Set(existingCats_k7815338.map(r => r.spot_category_id));

    if (!existingSet_k7815338.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815338' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8287114 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8287114'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8287114 = new Set(existingCats_k8287114.map(r => r.spot_category_id));

    if (!existingSet_k8287114.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8287114' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26875594 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26875594'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26875594 = new Set(existingCats_k26875594.map(r => r.spot_category_id));

    if (!existingSet_k26875594.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26875594' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1447764115 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1447764115'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1447764115 = new Set(existingCats_k1447764115.map(r => r.spot_category_id));

    if (!existingSet_k1447764115.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1447764115' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k904887408 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k904887408'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k904887408 = new Set(existingCats_k904887408.map(r => r.spot_category_id));

    if (!existingSet_k904887408.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k904887408' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1377594871 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1377594871'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1377594871 = new Set(existingCats_k1377594871.map(r => r.spot_category_id));

    if (!existingSet_k1377594871.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1377594871' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2101022057 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2101022057'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2101022057 = new Set(existingCats_k2101022057.map(r => r.spot_category_id));

    if (!existingSet_k2101022057.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2101022057' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k18431680 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18431680'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k18431680 = new Set(existingCats_k18431680.map(r => r.spot_category_id));

    if (!existingSet_k18431680.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18431680' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k46094792 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k46094792'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k46094792 = new Set(existingCats_k46094792.map(r => r.spot_category_id));

    if (!existingSet_k46094792.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k46094792' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1183568476 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1183568476'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1183568476 = new Set(existingCats_k1183568476.map(r => r.spot_category_id));

    if (!existingSet_k1183568476.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1183568476' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k874047685 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k874047685'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k874047685 = new Set(existingCats_k874047685.map(r => r.spot_category_id));

    if (!existingSet_k874047685.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k874047685' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1003278526 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1003278526'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1003278526 = new Set(existingCats_k1003278526.map(r => r.spot_category_id));

    if (!existingSet_k1003278526.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003278526' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k209573107 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k209573107'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k209573107 = new Set(existingCats_k209573107.map(r => r.spot_category_id));

    if (!existingSet_k209573107.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k209573107' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8877304 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8877304'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8877304 = new Set(existingCats_k8877304.map(r => r.spot_category_id));

    if (!existingSet_k8877304.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8877304' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8939690 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8939690'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8939690 = new Set(existingCats_k8939690.map(r => r.spot_category_id));

    if (!existingSet_k8939690.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8939690' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k17192409 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17192409'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k17192409 = new Set(existingCats_k17192409.map(r => r.spot_category_id));

    if (!existingSet_k17192409.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17192409' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11892266 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11892266'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11892266 = new Set(existingCats_k11892266.map(r => r.spot_category_id));

    if (!existingSet_k11892266.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892266' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8365404 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8365404'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8365404 = new Set(existingCats_k8365404.map(r => r.spot_category_id));

    if (!existingSet_k8365404.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8365404' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10033021 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10033021'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10033021 = new Set(existingCats_k10033021.map(r => r.spot_category_id));

    if (!existingSet_k10033021.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10033021' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k873847269 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k873847269'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k873847269 = new Set(existingCats_k873847269.map(r => r.spot_category_id));

    if (!existingSet_k873847269.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k873847269' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k403606065 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k403606065'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k403606065 = new Set(existingCats_k403606065.map(r => r.spot_category_id));

    if (!existingSet_k403606065.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k403606065' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1837356767 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1837356767'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1837356767 = new Set(existingCats_k1837356767.map(r => r.spot_category_id));

    if (!existingSet_k1837356767.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1837356767' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k17469780 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17469780'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k17469780 = new Set(existingCats_k17469780.map(r => r.spot_category_id));

    if (!existingSet_k17469780.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17469780' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7893813 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7893813'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7893813 = new Set(existingCats_k7893813.map(r => r.spot_category_id));

    if (!existingSet_k7893813.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7893813' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7888718 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7888718'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7888718 = new Set(existingCats_k7888718.map(r => r.spot_category_id));

    if (!existingSet_k7888718.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7888718' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1438566973 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1438566973'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1438566973 = new Set(existingCats_k1438566973.map(r => r.spot_category_id));

    if (!existingSet_k1438566973.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1438566973' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21437937 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21437937'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21437937 = new Set(existingCats_k21437937.map(r => r.spot_category_id));

    if (!existingSet_k21437937.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21437937' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8112267 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8112267'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8112267 = new Set(existingCats_k8112267.map(r => r.spot_category_id));

    if (!existingSet_k8112267.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8112267' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21853998 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21853998'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21853998 = new Set(existingCats_k21853998.map(r => r.spot_category_id));

    if (!existingSet_k21853998.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21853998' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11891985 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11891985'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11891985 = new Set(existingCats_k11891985.map(r => r.spot_category_id));

    if (!existingSet_k11891985.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891985' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9589060 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9589060'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9589060 = new Set(existingCats_k9589060.map(r => r.spot_category_id));

    if (!existingSet_k9589060.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9589060' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11006001 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11006001'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11006001 = new Set(existingCats_k11006001.map(r => r.spot_category_id));

    if (!existingSet_k11006001.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11006001' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k797932040 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k797932040'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k797932040 = new Set(existingCats_k797932040.map(r => r.spot_category_id));

    if (!existingSet_k797932040.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k797932040' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k729941412 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k729941412'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k729941412 = new Set(existingCats_k729941412.map(r => r.spot_category_id));

    if (!existingSet_k729941412.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k729941412' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16599913 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16599913'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16599913 = new Set(existingCats_k16599913.map(r => r.spot_category_id));

    if (!existingSet_k16599913.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16599913' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11891820 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11891820'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11891820 = new Set(existingCats_k11891820.map(r => r.spot_category_id));

    if (!existingSet_k11891820.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11891820' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21559095 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21559095'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21559095 = new Set(existingCats_k21559095.map(r => r.spot_category_id));

    if (!existingSet_k21559095.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21559095' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1737039720 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1737039720'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1737039720 = new Set(existingCats_k1737039720.map(r => r.spot_category_id));

    if (!existingSet_k1737039720.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1737039720' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9780807 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9780807'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9780807 = new Set(existingCats_k9780807.map(r => r.spot_category_id));

    if (!existingSet_k9780807.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9780807' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1027108400 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1027108400'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1027108400 = new Set(existingCats_k1027108400.map(r => r.spot_category_id));

    if (!existingSet_k1027108400.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1027108400' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k129205227 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k129205227'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k129205227 = new Set(existingCats_k129205227.map(r => r.spot_category_id));

    if (!existingSet_k129205227.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k129205227' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2100275007 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2100275007'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2100275007 = new Set(existingCats_k2100275007.map(r => r.spot_category_id));

    if (!existingSet_k2100275007.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2100275007' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1872404464 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1872404464'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1872404464 = new Set(existingCats_k1872404464.map(r => r.spot_category_id));

    if (!existingSet_k1872404464.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1872404464' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k25973519 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25973519'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k25973519 = new Set(existingCats_k25973519.map(r => r.spot_category_id));

    if (!existingSet_k25973519.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25973519' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k213242053 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k213242053'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k213242053 = new Set(existingCats_k213242053.map(r => r.spot_category_id));

    if (!existingSet_k213242053.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213242053' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k90097317 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k90097317'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k90097317 = new Set(existingCats_k90097317.map(r => r.spot_category_id));

    if (!existingSet_k90097317.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90097317' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16386830 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16386830'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16386830 = new Set(existingCats_k16386830.map(r => r.spot_category_id));

    if (!existingSet_k16386830.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16386830' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    if (spotCategoryRelationData.length > 0) {
      await queryInterface.bulkInsert('spot_category_relation', spotCategoryRelationData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    const ids = ['k11161843', 'k25754890', 'k12473363', 'k739219512', 'k8670704', 'k293015499', 'k13496738', 'k10916090', 'k8585683', 'k659933814', 'k27069548', 'k1532158905', 'k1299944133', 'k2048564896', 'k1878980682', 'k17481755', 'k24388670', 'k12468740', 'k10711287', 'k10090470', 'k9921422', 'k10727290', 'k1652068777', 'k21347050', 'k45811011', 'k27273000', 'k8031047', 'k1176678924', 'k9366475', 'k8461939', 'k593208960', 'k9466426', 'k1308797257', 'k9313876', 'k10642300', 'k7999598', 'k1508097729', 'k27143822', 'k7985087', 'k17249072', 'k11116260', 'k7963664', 'k21336299', 'k244084380', 'k9839491', 'k1629307609', 'k9165623', 'k1204945904', 'k338604909', 'k11833942', 'k940879473', 'k12463827', 'k887838514', 'k8379690', 'k11064993', 'k7876599', 'k9021717', 'k8337229', 'k8334549', 'k8970899', 'k10338456', 'k1659320608', 'k1706344434', 'k1633887187', 'k24961649', 'k126351202', 'k21338886', 'k1520039499', 'k877544890', 'k993056601', 'k21346457', 'k11891867', 'k7825433', 'k7825176', 'k8455368', 'k7814957', 'k1228313470', 'k11017612', 'k8793742', 'k10212613', 'k8807982', 'k8689426', 'k279012480', 'k8209640', 'k9652315', 'k11891748', 'k11042533', 'k8475106', 'k1656759700', 'k7992897', 'k7959806', 'k11148226', 'k613532480', 'k380643819', 'k9549720', 'k1892890142', 'k8021178', 'k8365828', 'k8062956', 'k27385515', 'k21342735', 'k11842365', 'k7815338', 'k8287114', 'k26875594', 'k1447764115', 'k904887408', 'k1377594871', 'k2101022057', 'k18431680', 'k46094792', 'k1183568476', 'k874047685', 'k1003278526', 'k209573107', 'k8877304', 'k8939690', 'k17192409', 'k11892266', 'k8365404', 'k10033021', 'k873847269', 'k403606065', 'k1837356767', 'k17469780', 'k7893813', 'k7888718', 'k1438566973', 'k21437937', 'k8112267', 'k21853998', 'k11891985', 'k9589060', 'k11006001', 'k797932040', 'k729941412', 'k16599913', 'k11891820', 'k21559095', 'k1737039720', 'k9780807', 'k1027108400', 'k129205227', 'k2100275007', 'k1872404464', 'k25973519', 'k213242053', 'k90097317', 'k16386830'];
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
