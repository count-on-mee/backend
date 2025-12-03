'use strict';

/**
 * 카카오 북마크 크롤링으로 생성된 Spot 데이터 시드 파일
 * 폴더ID: 18589771
 * 카테고리라벨: 음식점
 * 생성일시: 2025-12-03T17:40:16.550Z
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
        name: '봉가면옥',
        address: '전북특별자치도 남원시 소리길 177 1-2층 (신촌동)',
        tel: '063-634-2002',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.40934188066556 127.394167396508)',
          4326
        ),
        naver_spot_id: 'k20169194',
        review_count: 0,
        review_score: null,
      },
      {
        name: '광한루석쇠구이',
        address: '전북특별자치도 남원시 광한서로 37 1층 (금동)',
        tel: '063-626-7788',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.40460240632747 127.3779218982563)',
          4326
        ),
        naver_spot_id: 'k201733788',
        review_count: 0,
        review_score: null,
      },
      {
        name: '또랑메기국',
        address: '경남 함양군 함양읍 기동길 27 1층 (함양읍 신천리)',
        tel: '055-963-8999',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.52395574387527 127.73939561072689)',
          4326
        ),
        naver_spot_id: 'k23841409',
        review_count: 0,
        review_score: null,
      },
      {
        name: '두레식당',
        address: '전북특별자치도 남원시 서문1길 14 (왕정동)',
        tel: '063-626-3384',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.40998001442375 127.37607539705792)',
          4326
        ),
        naver_spot_id: 'k10283822',
        review_count: 0,
        review_score: null,
      },
      {
        name: '풍경인',
        address: '전북특별자치도 남원시 운봉읍 운성로 88-107 1층 (운봉읍 북천리)',
        tel: '010-3131-1088',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.43983954396092 127.53699757334226)',
          4326
        ),
        naver_spot_id: 'k1765101641',
        review_count: 0,
        review_score: null,
      },
      {
        name: '열선수애호박찌개국밥 남원도통맛집점',
        address: '전북특별자치도 남원시 시청동로 9 1층 (도통동)',
        tel: '063-633-1116',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.414646749724255 127.39259016366812)',
          4326
        ),
        naver_spot_id: 'k181200383',
        review_count: 0,
        review_score: null,
      },
      {
        name: '등구령쉼터',
        address: '전북특별자치도 남원시 산내면 중황리 1010',
        tel: '063-636-3514',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.42912018216536 127.65814124297117)',
          4326
        ),
        naver_spot_id: 'k13592026',
        review_count: 0,
        review_score: null,
      },
      {
        name: '까만집',
        address: '전북특별자치도 남원시 산내면 황치길 10 (산내면 대정리)',
        tel: '063-636-3714',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.42139574386257 127.6349644587049)',
          4326
        ),
        naver_spot_id: 'k997227109',
        review_count: 0,
        review_score: null,
      },
      {
        name: '남원밥심',
        address: '전북특별자치도 남원시 향단로 42-12 1층 (죽항동)',
        tel: '010-2632-9741',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.40699357808666 127.38336271342129)',
          4326
        ),
        naver_spot_id: 'k1928135272',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라이첸',
        address: '전남 곡성군 오곡면 기차마을로 237 1층 (오곡면 오지리)',
        tel: '061-363-7654',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.27729455247471 127.30692702341138)',
          4326
        ),
        naver_spot_id: 'k380910251',
        review_count: 0,
        review_score: null,
      },
      {
        name: '열라불라연탄집',
        address: '전북특별자치도 남원시 큰들길 27 1층 (도통동)',
        tel: '063-635-5902',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.41623729018828 127.39681261458814)',
          4326
        ),
        naver_spot_id: 'k16839602',
        review_count: 0,
        review_score: null,
      },
      {
        name: '맛고기',
        address: '전북특별자치도 남원시 검멀2길 37 (금동)',
        tel: '063-625-2567',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.40454537024721 127.37771466850795)',
          4326
        ),
        naver_spot_id: 'k477470235',
        review_count: 0,
        review_score: null,
      },
      {
        name: '길흥식당',
        address: '전북특별자치도 남원시 광한북로 28 (쌍교동)',
        tel: '063-625-4385',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.40529558784881 127.37991112127236)',
          4326
        ),
        naver_spot_id: 'k8698310',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마시로이',
        address: '전북특별자치도 남원시 비석길 79 1층 (죽항동)',
        tel: '063-625-1248',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.40786691558761 127.38422556237802)',
          4326
        ),
        naver_spot_id: 'k1131145815',
        review_count: 0,
        review_score: null,
      },
      {
        name: '황토식당',
        address: '전북특별자치도 남원시 동헌길 155 1층 (죽항동)',
        tel: '063-626-3389',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.40786094074591 127.38496975232964)',
          4326
        ),
        naver_spot_id: 'k9610995',
        review_count: 0,
        review_score: null,
      },
      {
        name: '연기나는굴뚝',
        address: '광주 북구 안산로 17 1층 (오치동)',
        tel: '062-262-4555',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.18874606903138 126.90205764865362)',
          4326
        ),
        naver_spot_id: 'k16808622',
        review_count: 0,
        review_score: null,
      },
      {
        name: '해뜨는집',
        address: '광주 광산구 용아로 230 1층 (우산동)',
        tel: '062-955-5869',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.163620426358996 126.80212530339337)',
          4326
        ),
        naver_spot_id: 'k16920986',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강천회관',
        address: '광주 북구 평교로30번길 14 (문흥동)',
        tel: '062-262-8001',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.17976390250978 126.92595738255591)',
          4326
        ),
        naver_spot_id: 'k8692469',
        review_count: 0,
        review_score: null,
      },
      {
        name: '캐치스피자 동명동 1호점',
        address: '광주 동구 동명로 3 1층 (장동)',
        tel: '062-232-1769',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14989772760313 126.92219170436339)',
          4326
        ),
        naver_spot_id: 'k1664310575',
        review_count: 0,
        review_score: null,
      },
      {
        name: '피아노줄타는돼지',
        address: '광주 북구 안산로 41 (오치동)',
        tel: '062-269-9282',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.19081185482582 126.90191023543856)',
          4326
        ),
        naver_spot_id: 'k1627850139',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신돈지마을',
        address: '광주 광산구 수완로52번길 40 1층 (수완동)',
        tel: '062-959-3376',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.1901532634864 126.83105196619657)',
          4326
        ),
        naver_spot_id: 'k15558354',
        review_count: 0,
        review_score: null,
      },
      {
        name: '원두막',
        address: '광주 서구 상무중앙로 6-28 (치평동)',
        tel: '062-571-3385',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14789026969 126.85010697493294)',
          4326
        ),
        naver_spot_id: 'k12159218',
        review_count: 0,
        review_score: null,
      },
      {
        name: '태화오리탕',
        address: '광주 북구 중가로37번길 30-4 1-2층 (유동)',
        tel: '062-529-5866',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.161040820255906 126.90515533228519)',
          4326
        ),
        naver_spot_id: 'k10897211',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소보쿠',
        address: '광주 동구 장동로 51-1 1층 (동명동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14721119612266 126.92722913684375)',
          4326
        ),
        naver_spot_id: 'k27341750',
        review_count: 0,
        review_score: null,
      },
      {
        name: '황톳길 본점',
        address: '광주 동구 동명로26번길 5-1 (동명동)',
        tel: '062-226-1550',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15139539159428 126.92441153177086)',
          4326
        ),
        naver_spot_id: 'k12958056',
        review_count: 0,
        review_score: null,
      },
      {
        name: '캬베츠',
        address: '광주 동구 동명로 33-3 1층 (동명동)',
        tel: '062-234-0333',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.152051507738946 126.92429239866978)',
          4326
        ),
        naver_spot_id: 'k1478420701',
        review_count: 0,
        review_score: null,
      },
      {
        name: '돈카츠아라타',
        address: '광주 동구 동명로25번길 9-9 1층 (동명동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.151264338867875 126.92242306395697)',
          4326
        ),
        naver_spot_id: 'k1684390518',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하이스트리트 동명본점',
        address: '광주 동구 동명로 7-3 1층 (장동)',
        tel: '062-710-0323',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15015027733191 126.92245484963915)',
          4326
        ),
        naver_spot_id: 'k2043797572',
        review_count: 0,
        review_score: null,
      },
      {
        name: '타코초',
        address: '광주 동구 충장로 85-7 1층 (충장로2가)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.148401475396916 126.91677627911871)',
          4326
        ),
        naver_spot_id: 'k1248472923',
        review_count: 0,
        review_score: null,
      },
      {
        name: '야레타',
        address: '광주 동구 장동로 1-2 1층 (장동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14929228891887 126.92262247277188)',
          4326
        ),
        naver_spot_id: 'k1429519259',
        review_count: 0,
        review_score: null,
      },
      {
        name: '더 앨리웨이',
        address: '광주 동구 동계로1번길 10-15 1층 (동명동)',
        tel: '070-4006-0612',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15276106642968 126.92315914679132)',
          4326
        ),
        naver_spot_id: 'k1559726567',
        review_count: 0,
        review_score: null,
      },
      {
        name: '양육점 첨단점',
        address: '광주 광산구 임방울대로826번길 31 1층 (쌍암동)',
        tel: '0503-7152-0841',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.21595554166843 126.84891877855718)',
          4326
        ),
        naver_spot_id: 'k1322271168',
        review_count: 0,
        review_score: null,
      },
      {
        name: '미노루',
        address: '광주 동구 동명로25번길 7-2 1층 (동명동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15147733172954 126.92284867556435)',
          4326
        ),
        naver_spot_id: 'k1522674512',
        review_count: 0,
        review_score: null,
      },
      {
        name: '미네',
        address: '광주 동구 동명로26번길 3 (동명동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.151337517958034 126.92411307718032)',
          4326
        ),
        naver_spot_id: 'k126962018',
        review_count: 0,
        review_score: null,
      },
      {
        name: '중앙교포장마차',
        address: '광주 동구 필문대로287번길 13-1 1층 (지산동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14534791609859 126.92846424596515)',
          4326
        ),
        naver_spot_id: 'k1844675998',
        review_count: 0,
        review_score: null,
      },
      {
        name: '무등골전집',
        address: '광주 북구 북문대로33번길 52 1층 (운암동)',
        tel: '062-521-9994',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.172820041700724 126.88096053755176)',
          4326
        ),
        naver_spot_id: 'k21243751',
        review_count: 0,
        review_score: null,
      },
      {
        name: '온전한실내',
        address: '광주 동구 제봉로98번길 11-11 지하 1층 (장동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14784284791358 126.92254044167288)',
          4326
        ),
        naver_spot_id: 'k820507070',
        review_count: 0,
        review_score: null,
      },
      {
        name: '펑키청크피자샵',
        address: '광주 동구 서석로85번길 8-7 1층 (대의동)',
        tel: '0502-5551-8393',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15010205134141 126.92036537023851)',
          4326
        ),
        naver_spot_id: 'k996176623',
        review_count: 0,
        review_score: null,
      },
      {
        name: '베스트 진월본점',
        address: '광주 남구 광복마을길 7 1층 (진월동)',
        tel: '062-655-9296',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.11839702591425 126.89806541348187)',
          4326
        ),
        naver_spot_id: 'k660668538',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하늘천따지',
        address: '광주 동구 필문대로273번길 6 (동명동)',
        tel: '062-228-8584',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14655915051969 126.92813396842708)',
          4326
        ),
        naver_spot_id: 'k16549731',
        review_count: 0,
        review_score: null,
      },
      {
        name: '어부의술상',
        address: '광주 북구 중가로65번길 2 1층 (중흥동)',
        tel: '062-522-0639',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15912080922027 126.9073351212702)',
          4326
        ),
        naver_spot_id: 'k1218788195',
        review_count: 0,
        review_score: null,
      },
      {
        name: '꼼사랑일번지',
        address: '광주 북구 자동차로 39 1층 (신안동)',
        tel: '062-526-1090',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.16311779601795 126.90095564408237)',
          4326
        ),
        naver_spot_id: 'k12053650',
        review_count: 0,
        review_score: null,
      },
      {
        name: '제우스',
        address: '광주 남구 대남대로149번길 16 1층 (봉선동)',
        tel: '062-433-5311',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.13221081951092 126.90872614557327)',
          4326
        ),
        naver_spot_id: 'k16664017',
        review_count: 0,
        review_score: null,
      },
      {
        name: '토라카츠',
        address: '서울 성북구 장월로1길 90 1층 (상월곡동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.60499310300253 127.04373199288668)',
          4326
        ),
        naver_spot_id: 'k1696274858',
        review_count: 0,
        review_score: null,
      },
      {
        name: '더테이블',
        address: '서울 동대문구 회기로 14 1층 (제기동)',
        tel: '02-928-5097',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.591090980671794 127.03803984644432)',
          4326
        ),
        naver_spot_id: 'k1575631836',
        review_count: 0,
        review_score: null,
      },
      {
        name: '제주고깃집 안암점',
        address: '서울 성북구 안암로 69-1 1층 (안암동5가)',
        tel: '02-926-3696',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58260261911569 127.02888779960863)',
          4326
        ),
        naver_spot_id: 'k24923695',
        review_count: 0,
        review_score: null,
      },
      {
        name: '말질로',
        address: '서울 중구 퇴계로86길 15-29 1층 (신당동)',
        tel: '010-7904-7905',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56477913711187 127.02023792035388)',
          4326
        ),
        naver_spot_id: 'k1135113992',
        review_count: 0,
        review_score: null,
      },
      {
        name: '동래고려삼계탕 본점',
        address: '부산 동래구 명륜로94번길 44-4 1층 (수안동)',
        tel: '051-558-3926',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.20419889002674 129.08427152042373)',
          4326
        ),
        naver_spot_id: 'k8661341',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소문난원조조방낙지 본점',
        address: '부산 동래구 명륜로94번길 37 1층 (명륜동)',
        tel: '051-555-7763',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.20398109624345 129.0839409692846)',
          4326
        ),
        naver_spot_id: 'k18179603',
        review_count: 0,
        review_score: null,
      },
      {
        name: '만월',
        address: '전북특별자치도 남원시 가방뜰길 49 (금동)',
        tel: '063-625-0048',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.4009050724277 127.37157272307887)',
          4326
        ),
        naver_spot_id: 'k2142329234',
        review_count: 0,
        review_score: null,
      },
      {
        name: '모두랑즉석떡볶이',
        address: '서울 동대문구 회기로23가길 20 지하1층, 1층 (회기동)',
        tel: '02-965-5696',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.59207931764938 127.05429547573627)',
          4326
        ),
        naver_spot_id: 'k27173207',
        review_count: 0,
        review_score: null,
      },
      {
        name: '넘버원양꼬치 한남점',
        address: '서울 용산구 대사관로 76 2층 (한남동)',
        tel: '02-797-6518',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.53305472885618 127.00649420807139)',
          4326
        ),
        naver_spot_id: 'k1314055071',
        review_count: 0,
        review_score: null,
      },
      {
        name: '형제정육점',
        address: '서울 성북구 돌곶이로41길 41 1층 (장위동)',
        tel: '02-917-9942',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.617371557959586 127.04669324881449)',
          4326
        ),
        naver_spot_id: 'k21525252',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포양지설렁탕 도화점',
        address: '서울 마포구 새창로 6 1-2층 (도화동)',
        tel: '02-716-8616',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.542029311349644 126.95050684717809)',
          4326
        ),
        naver_spot_id: 'k26973107',
        review_count: 0,
        review_score: null,
      },
      {
        name: '연원참숯구이',
        address: '서울 마포구 마포대로4길 42 1층 (도화동)',
        tel: '010-6578-5553',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.53785778541337 126.94660830421101)',
          4326
        ),
        naver_spot_id: 'k1740157382',
        review_count: 0,
        review_score: null,
      },
      {
        name: '숙련도',
        address: '서울 마포구 도화길 49 1-2층 (도화동)',
        tel: '070-4038-1101',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54199343763984 126.9509051694821)',
          4326
        ),
        naver_spot_id: 'k1907966550',
        review_count: 0,
        review_score: null,
      },
      {
        name: '달비촌대구막창',
        address: '서울 동작구 동작대로1길 52 (사당동)',
        tel: '02-521-3733',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.477396055494566 126.97852848997437)',
          4326
        ),
        naver_spot_id: 'k16444107',
        review_count: 0,
        review_score: null,
      },
      {
        name: '환대',
        address: '서울 마포구 연남로1길 70 신원빌딩 1층 hwandae (연남동)',
        tel: '0507-1317-8221',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55926817230439 126.91951605846425)',
          4326
        ),
        naver_spot_id: 'k1201308083',
        review_count: 0,
        review_score: null,
      },
      {
        name: '주막',
        address: '서울 마포구 동교로23길 64 1층 (연남동)',
        tel: '02-338-5664',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55854693536802 126.91887398309272)',
          4326
        ),
        naver_spot_id: 'k2066571743',
        review_count: 0,
        review_score: null,
      },
      {
        name: '옥동식 서교점',
        address: '서울 마포구 양화로7길 44-10 1층 (서교동)',
        tel: '010-5571-9915',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55267656940555 126.91452107150735)',
          4326
        ),
        naver_spot_id: 'k1797997961',
        review_count: 0,
        review_score: null,
      },
      {
        name: '군산찜',
        address: '서울 마포구 새터산길 2 1층 (성산동)',
        tel: '02-306-3977',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56497160720438 126.90739883546969)',
          4326
        ),
        naver_spot_id: 'k16050290',
        review_count: 0,
        review_score: null,
      },
      {
        name: '비스트로해선',
        address: '서울 마포구 독막로 76-1 1층 4호 (상수동)',
        tel: '010-2281-2572',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.547560413015624 126.92190956397289)',
          4326
        ),
        naver_spot_id: 'k1725619650',
        review_count: 0,
        review_score: null,
      },
      {
        name: '스파카나폴리',
        address: '서울 마포구 양화로6길 28 2층 (합정동)',
        tel: '02-326-2323',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54889675943679 126.91560270383808)',
          4326
        ),
        naver_spot_id: 'k16050660',
        review_count: 0,
        review_score: null,
      },
      {
        name: '합정광안리 숙성횟집 2호점',
        address: '서울 마포구 독막로3길 50 지하1층 (서교동)',
        tel: '02-332-7367',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55029313119774 126.91790970626717)',
          4326
        ),
        naver_spot_id: 'k1461411521',
        review_count: 0,
        review_score: null,
      },
      {
        name: '칸다소바 홍대점',
        address: '서울 마포구 와우산로 51-6 1층 (상수동)',
        tel: '02-332-1660',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.549287231370265 126.92267727780285)',
          4326
        ),
        naver_spot_id: 'k2057792795',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서담해물',
        address: '서울 마포구 독막로15길 3-7 이현S 지하1층 (상수동)',
        tel: '010-2635-4467',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.548270135302424 126.9215104916525)',
          4326
        ),
        naver_spot_id: 'k1818725499',
        review_count: 0,
        review_score: null,
      },
      {
        name: '어리광',
        address: '서울 마포구 독막로12길 5 (상수동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54745832365107 126.92014888139632)',
          4326
        ),
        naver_spot_id: 'k1676572134',
        review_count: 0,
        review_score: null,
      },
      {
        name: '정돈',
        address: '서울 마포구 어울마당로 46 1-2층 (서교동)',
        tel: '02-336-0923',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5490662762738 126.92099815699298)',
          4326
        ),
        naver_spot_id: 'k90725902',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아소토',
        address: '서울 마포구 독막로2길 34 1층 (합정동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54713700378772 126.91420602087159)',
          4326
        ),
        naver_spot_id: 'k563859861',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마포소금구이',
        address: '서울 마포구 양화로 27 (합정동)',
        tel: '02-324-2198',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5491970798632 126.91228892696333)',
          4326
        ),
        naver_spot_id: 'k16297161',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이가네양갈비양꼬치 합정역점',
        address: '서울 마포구 월드컵로1길 14 딜라이트스퀘어1차 L층 B118-1~B118-2호 (합정동)',
        tel: '02-338-6788',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54973752350752 126.9120800706392)',
          4326
        ),
        naver_spot_id: 'k108150613',
        review_count: 0,
        review_score: null,
      },
      {
        name: '순대일번지',
        address: '서울 마포구 월드컵로 117 1층 (망원동)',
        tel: '02-334-9210',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55864668272603 126.90748815166015)',
          4326
        ),
        naver_spot_id: 'k16931682',
        review_count: 0,
        review_score: null,
      },
      {
        name: '망원동 즉석우동 전문돈까스 본점',
        address: '서울 마포구 동교로 83 1층 (망원동)',
        tel: '02-336-1330',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5542454081282 126.91113318815265)',
          4326
        ),
        naver_spot_id: 'k15526158',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강화통통생고기 본점',
        address: '서울 마포구 동교로 90 (서교동)',
        tel: '02-322-1838',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55417047312679 126.91213371224815)',
          4326
        ),
        naver_spot_id: 'k8173650',
        review_count: 0,
        review_score: null,
      },
      {
        name: '담택',
        address: '서울 마포구 동교로12안길 51 1층 (서교동)',
        tel: '02-336-0974',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.554453802225325 126.91516638445539)',
          4326
        ),
        naver_spot_id: 'k1534943798',
        review_count: 0,
        review_score: null,
      },
      {
        name: '우동카덴 연희점',
        address: '서울 서대문구 연희로 173 거화빌딩 1층 (연희동)',
        tel: '02-3142-6362',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57240343339889 126.93502377053203)',
          4326
        ),
        naver_spot_id: 'k1449183784',
        review_count: 0,
        review_score: null,
      },
      {
        name: '우정초밥',
        address: '서울 성북구 종암로3길 31 1층 (종암동)',
        tel: '070-4320-2333',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.592977006012156 127.03428609425117)',
          4326
        ),
        naver_spot_id: 'k743447746',
        review_count: 0,
        review_score: null,
      },
      {
        name: '합정옥',
        address: '서울 마포구 양화로1길 21 2층 (합정동)',
        tel: '02-322-4822',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.54953452009278 126.91050958744867)',
          4326
        ),
        naver_spot_id: 'k27493864',
        review_count: 0,
        review_score: null,
      },
      {
        name: '둥둥막창구이',
        address: '서울 마포구 월드컵로3길 27 대광빌딩 1층 (합정동)',
        tel: '02-335-3199',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55025227772391 126.91125562139013)',
          4326
        ),
        naver_spot_id: 'k27279915',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나나',
        address: '서울 마포구 희우정로20길 75 1층 (망원동)',
        tel: '070-4151-3237',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.556301618712105 126.90438553947017)',
          4326
        ),
        naver_spot_id: 'k205785452',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한강껍데기',
        address: '서울 마포구 망원로 48-1 (망원동)',
        tel: '02-6083-3733',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.556678313670666 126.90227999983655)',
          4326
        ),
        naver_spot_id: 'k22705945',
        review_count: 0,
        review_score: null,
      },
      {
        name: '강동원',
        address: '서울 마포구 망원로 3 1-2층 (망원동)',
        tel: '02-335-0202',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55591726239207 126.89731491743935)',
          4326
        ),
        naver_spot_id: 'k16471669',
        review_count: 0,
        review_score: null,
      },
      {
        name: '만복기사식당',
        address: '서울 마포구 희우정로 121 1층 (망원동)',
        tel: '02-3141-8314',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55527078786076 126.89992783839737)',
          4326
        ),
        naver_spot_id: 'k11969069',
        review_count: 0,
        review_score: null,
      },
      {
        name: '요코쵸',
        address: '서울 마포구 성미산로 161-15 1층 (연남동)',
        tel: '02-324-8875',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.565321929081755 126.92352546566052)',
          4326
        ),
        naver_spot_id: 'k27272826',
        review_count: 0,
        review_score: null,
      },
      {
        name: '갓잇 연남점',
        address: '서울 마포구 성미산로 161-13 1층 갓잇 (연남동)',
        tel: '070-7657-3114',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.565231885238 126.9236115806907)',
          4326
        ),
        naver_spot_id: 'k607192266',
        review_count: 0,
        review_score: null,
      },
      {
        name: '바다회사랑',
        address: '서울 마포구 동교로27길 60 1층 (연남동)',
        tel: '02-338-0872',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56041168065391 126.92106314231776)',
          4326
        ),
        naver_spot_id: 'k9012776',
        review_count: 0,
        review_score: null,
      },
      {
        name: '다퍼줘',
        address: '서울 동대문구 왕산로 155-1 1층 (제기동)',
        tel: '010-7601-2020',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57891951775963 127.04058764550669)',
          4326
        ),
        naver_spot_id: 'k1116271250',
        review_count: 0,
        review_score: null,
      },
      {
        name: '동강주막호프',
        address: '서울 종로구 지봉로7길 1 1층 (창신동)',
        tel: '02-747-0027',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.57453945072664 127.01539550534052)',
          4326
        ),
        naver_spot_id: 'k16500083',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한성돼',
        address: '서울 성북구 동소문로2길 63 1층 (동소문동2가)',
        tel: '010-3968-8076',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5888838947116 127.00945193673799)',
          4326
        ),
        naver_spot_id: 'k1051522023',
        review_count: 0,
        review_score: null,
      },
      {
        name: '참새방앗간',
        address: '서울 성북구 삼선교로11길 20 1층 (삼선동2가)',
        tel: '010-7320-7541',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58867482768905 127.00990027595314)',
          4326
        ),
        naver_spot_id: 'k2057101586',
        review_count: 0,
        review_score: null,
      },
      {
        name: '희로',
        address: '서울 서대문구 성산로 325 (연희동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.56641589512456 126.9266121684861)',
          4326
        ),
        naver_spot_id: 'k134473495',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대물섬',
        address: '서울 용산구 독서당로 65-11 (한남동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.53407095651412 127.00813257857132)',
          4326
        ),
        naver_spot_id: 'k1827653054',
        review_count: 0,
        review_score: null,
      },
      {
        name: '8번대물집',
        address: '서울 영등포구 의사당대로 38 여의도더샵아일랜드파크 1층 101-114호 (여의도동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.52525303428713 126.91862949319601)',
          4326
        ),
        naver_spot_id: 'k467436206',
        review_count: 0,
        review_score: null,
      },
      {
        name: '방울과꼬막',
        address: '서울 용산구 대사관로30길 11-5 1층 (한남동)',
        tel: '02-749-1019',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.532679949777965 127.0057746118707)',
          4326
        ),
        naver_spot_id: 'k175302923',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소소막창 본점',
        address: '서울 용산구 대사관로 56 광창빌딩 2층 202호 (한남동)',
        tel: '02-749-0600',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.53328188548789 127.00418617469509)',
          4326
        ),
        naver_spot_id: 'k96112066',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신동궁감자탕뼈숯불구이 선릉직영점',
        address: '서울 강남구 선릉로86길 39 1층 (대치동)',
        tel: '02-558-7944',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.50408482034085 127.05289263360058)',
          4326
        ),
        naver_spot_id: 'k11356521',
        review_count: 0,
        review_score: null,
      },
      {
        name: '뽕나무쟁이 선릉본점',
        address: '서울 강남구 역삼로65길 31 1층 (대치동)',
        tel: '02-558-9279',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.50322745508812 127.05200989184767)',
          4326
        ),
        naver_spot_id: 'k11190567',
        review_count: 0,
        review_score: null,
      },
      {
        name: '농민백암순대 본점',
        address: '서울 강남구 선릉로86길 40-4 알앤지타운 1층 (대치동)',
        tel: '02-555-9603',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.503709949477866 127.05300998815514)',
          4326
        ),
        naver_spot_id: 'k17163273',
        review_count: 0,
        review_score: null,
      },
      {
        name: '몽탄',
        address: '서울 용산구 백범로99길 50 (한강로1가)',
        tel: '02-794-8592',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.53599611733113 126.97224805047642)',
          4326
        ),
        naver_spot_id: 'k220597413',
        review_count: 0,
        review_score: null,
      },
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

    const existingImages_k20169194 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k20169194'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k20169194[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8a73bfc00ecf5f649fe6943aec6eb3da9c44d8ef?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d2a6f7c3b68e76c12b2f79ee123a93d6b969a06d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ada00614966d6fd9cdb2bc34dd3e9d3fd29e910e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8489471e04251becd4ae8e03c65fd21dead94a72?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0a0dbbfd7cdcd7e8d386f6c6da3250e4f2ff827e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a56d2ceac2a928170fa7f8e35abdda97a22e512?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d93e1bf352301c6fc7ffe1f99b39814a03af9a73?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/816ab79074b11f1b1a51d2be50fb11c815e4adf2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ef4a9ef68bdccdd0c05bf7961dbab8f76fe6cf3b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca09ca933d53c1b7b609fb14ec264e285f9769a4?original' }
      ]);
    }

    const existingImages_k201733788 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k201733788'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k201733788[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/027a19efad0258332923848bd201e22340d39907?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/77c679177f5265e2bc4d3003c99b32d9aa57cf4e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c46f682a328ff6e3d8d953e1f85316cfe9e65a29?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/37e6ea25979f3ce288affed0b2f552888c67bcd7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6306f63791ead89ec314b56d47b25fcd3f024e70?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d71d057c152824c38f99ceaddd0a96de827af79?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b2f2d8562c182704cd368c4dbc0e7179695c249?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c5d12a0acf138b00f5e1af955f7db577d98e3b1b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a94f3309e7de1e396096841f29bdec66c4c73f21?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ae976eb63e2b61e52b3c3e9794c1281c6f5ec030347cc646246ad7f59a7f5566' }
      ]);
    }

    const existingImages_k23841409 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k23841409'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k23841409[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/lkqEd/btsOhoD2Jur/joA7Gop2HbsHx11qf0wvGK/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/1jMfu/btsOfAZ3rKB/0rQyjSC13LVXgmJvAOkTK0/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA3MjVfMTkw/MDAxNjkwMjYxMDU0ODQ5.AvPe1Ydx6hQ-Pu5l8tqc26239mDeQIaB6sLGBJlD7xgg.211kVVX6nZ2tmG-JzNoR-wavLHXAaCxwad52S7UTctkg.JPEG.wjddk1122/IMG_1036.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/cf8YLj/btsOgNqNpYr/RifHA9tqM9Z8PQkVZnX35k/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/nuyVj/btsOfu0b8Mc/SdftOXmhKT44SmySpkKn11/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bXYmNi/btsOfPDlpA7/0DJbBk0t7mVM9oFdtBGDnK/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bmxtbx/btsOf3t7klN/MUkU9sBLFcTO2rDoGg3Hf1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bL3cAQ/btsOfPiUVvS/008eRzYvVWQ8mMaRe2KYF1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/c2gr3O/btsOg285B9B/KWzGlPdYVEQKMxV5GlYGB1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/br9odz/btsOg6xqY76/F4iokrzSG2yfFgcoDikXFk/img.jpg' }
      ]);
    }

    const existingImages_k10283822 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10283822'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10283822[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7C0079062CC34D69ACF51C800FC0B19F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3507EDBC3C5E4B76BA23A8DB03C396C8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/962F9E1605C24694AB5A4B77FAD17C2C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/1F9167FF96624A9F824BDCD72F6F1B78' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/6C54843BEFD64DC18F827406D1406738' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B0695753EE9B4CC3BBF9F989A49073FD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27c4959b926594e41f93806f31e31ade63d8e2f6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/182f487e90b5d6869cde5caf52eebcbc5a5f5289?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e1a17ae7e97a0f105bc28cbc86182a494ef3fe0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/75860edd8ff0469d59f4619be4b10fa61bb2b0b1?original' }
      ]);
    }

    const existingImages_k1765101641 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1765101641'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1765101641[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/38F0352448B74652B6D76F36DA39233F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AB595EBF4A25423CBE6361B055899B3B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ea778c2a621c7db064d9ec464bbefbae8c971fa9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0ba74d25d908f52691a4c877db32871c35642412?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9dda2dc5b6eebe2e2d340379a9931fa1c62de1b5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/106d53620adf2f9fd82e8b94f87ff4941cd01f5f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDVfMjUx/MDAxNzQ2NDMyNjAzODEy.axMoac-p_sC05R4j4Qf4ioV-4p79wIeRyzjqmJ40n60g.q7Kgh1qu5Ek5TaheDOnjfKp-meTZbW5zYor-fgGlzv8g.JPEG/IMG_3261.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDVfMjEg/MDAxNzQ2NDMyNjAzNzY1.qnD4SHQx5FBHvsBJG41N9uO-2PGDGUxx4cRy4FMOVTkg.9COlMFaSoyK5HwZRjFIimfzK9QVeb4E9AXCFHoiA44Yg.JPEG/IMG_3260.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDVfMTc3/MDAxNzQ2NDMyNjAzNzcz.n0syBUCydPWfVngcAD1o8ClzT3w5qyi81dQ-a0pNK4Eg.gM0VdlRs-udVaBh24601825PPJT5BXkT7Q9Ly3tx-90g.JPEG/IMG_3263.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTZfMjE1/MDAxNzM0Mjk2Mzk0NjIx.zb-uub8FjZPIWtD-GxsUz2flnRqpOqr30Osrn3J4g-8g.Dw0lB0deMx06X9kuhNwE3o7CbEF3i4g7K2d_gysmD5Ug.JPEG/%ED%92%8D%EA%B2%BD%EC%9D%B8_5.jpg?type=w773' }
      ]);
    }

    const existingImages_k181200383 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k181200383'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k181200383[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c1824a9e3ac92654a8d1c927763680c862e6b94d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5c59f90597983ecbf2dad44818e7f7eee6eaf120?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjNfMjk5/MDAxNzIxNzExMTkwOTY2.clSBOJ2XG3nqaMyaZVnjm__D0-UPfx255wD_16p77Lsg.n1-RyOWdg4WOp86iGrblapShrNeqSeRfBqFrb5RXvV8g.JPEG/KakaoTalk_20240723_115304542_09.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjNfMTkw/MDAxNzIxNzEyNDc1MDA1.4OYbPX34TCnTbKoMQ5FVfFU834wJAFVDBJYwY99rW_og.UTEZ5_9PheyhkDXOs8p5wKrOmynVZM_evOLwHq1yiJUg.JPEG/KakaoTalk_20240723_115304542_10.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjNfMjY5/MDAxNzIxNzEyNjE3ODM5.yi1LjuwHn14Q2BfAapMnRRgjNe9UFO6f4kAmjmYH4rAg.y6WS6nqFccRD-zGlTN1vyo-RgA74KiMumkfG_KNmfeEg.JPEG/SE-affb7990-9d3c-417e-83b0-77f59befa56d.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjNfMTgy/MDAxNzIxNzEyNzY2MDA4.W8BdWZ8lleJuYbMC6ETHd6GX6Qw4BXmxd6-ChmvZRA4g.V-Vy1LFQjkoHrRTrgUgj_VUg7tvla3YwOPXR6KDHrvIg.JPEG/KakaoTalk_20240723_115304542_16.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjNfNjcg/MDAxNzIxNzEyOTgwMjI5.ul_caBSC-OvC9DpM--gKdD_tNZTEiuCTxYKkHtm2Qbog.8Wwc3F-YQSdTLWeg2vaeTh0Hp0AwryQx-Ht1Q4h4K-8g.JPEG/KakaoTalk_20240723_115304542_20.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MTFfMjE3/MDAxNzIwNjkzNTI5Mjc4.DhG4dZR2fHwcktQwB-ljASFAz_wlGCqS7IC21gV83UYg.9xeJpPD8TO19AMvWWxxbgl4CPUnwxBRbyyVCZ_NudNgg.JPEG/1720693527590.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA2MTRfMTA3/MDAxNzE4MzI2MzU3MzEy.t1VeaBlodUOV--Jzk19zJixzR4K-EIolfT0zsEMRiS8g.CrXGB4k4n28NLqJ8guIf2AH_SqruAzOqJvotkGQB91wg.JPEG/SE-66be6064-7ccd-4cea-b86c-53afbcfebf99.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA2MTRfMTUg/MDAxNzE4MzI2MzU4MzI5.8U-fti1TPSiM0UIkkT9sJyUcUrQiLoDg2cUlsaGIkRUg.ljXCiImWXKAFDEoCjHznRhomXE0daZXEVrpkNoP8-Ycg.JPEG/SE-7914af55-642b-43c6-96f9-56bed3a89df1.jpg?type=w773' }
      ]);
    }

    const existingImages_k13592026 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13592026'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13592026[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfODkg/MDAxNzQ4NDM5MDk3OTY1.Ff3c1BarAvev36H5nkiULvip38zNrQQigWjZhbs1q7Ig.Ai_f3qhT2IUvhgNnw0iH6JVRu59-RRrcMCM9uV_aMMgg.JPEG/SE-616a51e1-8f57-4a46-9b35-8b81d30bb22e.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfMTkw/MDAxNzQ4NDM5MDk5MTE1.v7yp1w3cxb-MWAEQO_ZpZbay0lFGMOIgeeWtmrhS608g.uz2L1GJ3b2XJ40n3C8Vchm5VBSm5OaMLMjElpkLwxSkg.JPEG/SE-4e49fc3a-2529-41ff-8af6-40b22eb42a61.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfNjcg/MDAxNzQ4NDM4NTUwODgx._fnVVBRAktqWd-hsJKARMFt7xN3D_MFCNmnNqf5OMxUg.nCTHf-2rjRj4fuRphw0bmT_BipL77SPEyoI8V55R0log.JPEG/SE-68a95ec4-14bb-4ae5-8cda-3558574cdb9a.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfMTc2/MDAxNzQ4NDM4NTM1ODY5.dqoV9gru2iMOFpn7ZN7uqGGNYFHoqIDaA6nUjIwq_p4g.1ENoUvmHp_y00Po-iaHwIv4JwnPqj5-zFS_nAKoKKk0g.JPEG/SE-a83c0792-d9a9-4c21-8385-6b6cf123a0fa.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfMzAw/MDAxNzQ4NDM4NTQ3ODUx.Bjeh9rAyQ2oINUinX2US_hVN5sCcO2iGaJioLjQfvm0g.e8M5SVNjLnLCxLmR97PQ5304DllfH10O0W_NNy10UAwg.JPEG/SE-65361ba9-d57c-4801-9fd6-ceabeb1f1b8e.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfNjEg/MDAxNzQ4NDM4NTE0NzE4.HpKQdqI18gahJ841aonHae9eGWDXONi9tkeKYSggZ6og.um3I3OcHPxTB9CdnNNM_yClh-BzEXkBYGAc12ALnRlog.JPEG/SE-00d8917a-3dac-4a90-9ca2-e62b5722e7d9.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfNzAg/MDAxNzQ4NDM4NTA4MjQ5.o8H8yX81GLbSwIBvx3CauZ9QxBhPBFa3wpCwk91vtvsg.TsOO0Wfbkffm-LRiDVhPj1MfMHCiCsNGIrABsHGEF4Mg.JPEG/SE-22c5ece6-9468-4e20-a4df-5e0011271775.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfMTQ3/MDAxNzQ4NDM4NTM3Mjc3.812F3BYHGuRER7R21N3Av_GwYmG9dXQm-RXDUR-bgh0g.HDupVr9ZFVBAkdIBhP2xGZosKQ8ew52bmNA93TqIPv4g.JPEG/SE-5a2b3717-d51e-43dc-a1d7-e91195e3edcc.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfMTYw/MDAxNzQ4NDM4NTI5Njk2.qu865-jm7EeTCSXWYvZWLHArWxVm2H8trniK13KR9dYg.YbOrcVyhmjP62RkWcOGdCoHMr1xkPpCCn75kNWUy_3Qg.JPEG/SE-c5b75734-7953-4f94-941d-2b032c33ef97.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjhfMyAg/MDAxNzQ4NDM4NTExNTA3.gLsHO7TT3T8U-RcV0aukbsyQRWx61FJFrA2P8tRYrlMg.Iq2lVIK-ReuHPFzTbssJOf23MMzW4IdfSrK5ozADVNEg.JPEG/SE-8d09b1f3-421f-4ee4-9270-505940cf0dde.jpg?type=w466' }
      ]);
    }

    const existingImages_k997227109 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k997227109'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k997227109[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMjk4/MDAxNzU1NTI3MjA1MDkz.qH8yZEpEJmz6vHSVSm9rbPSfEN9mHTFyp9MBCdcWR9Ig.q6JtnDoSFu9i9EP0yx7vzDQKCTB_LfhY5QFQlBCxe58g.JPEG/900%EF%BC%BF1755527196015.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTBfMjcg/MDAxNzQ2ODUzNzEyOTk4.bVZ352PiMbCFKxws8uBzBE55mbLRD6lABeTq3ItIAu4g.Cuw7cmHrlYG-ZnnWvuVxczZL_ZcEUg23kvef94OeGeog.JPEG/IMG_5433.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTBfNTQg/MDAxNzQ2ODUzNzEyNTg1.oj1uCNuHhitDSvhkvje3sU9Ayxw1lizCGvbBBF-Z2Fgg.MVMOyCthUoxgHzU4vDU90UPvGi2rQ4uxh2Eurvf2vggg.JPEG/IMG_5434.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTBfMjgx/MDAxNzQ2ODUzNzEyODMy.YC3DvwZxC1IgUDxS1HG9rrj8kkk50Yt1LLmd4ZJTE9Ag.IrNyFzPpXjeqFUZ42uj7HGuVHLy6BuIitb8kTKfHzGIg.JPEG/IMG_5436.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfMTIx/MDAxNzQ3NjE4OTgwMDE3.N2XO5PfkIiXkLzGueYf4wQt0QEBKMgwU3O12C3NxqLUg.s3fXyJf4C7dIpSj11LBqoXpdhm_7h1b7Ot-kVDR6kpMg.JPEG/%EA%BE%B8%EB%AF%B8%EA%B8%B01KakaoTalk_20250519_094346089_14.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfMjE0/MDAxNzQ3NjE5MTQzMTE5.P6ndNUYyilsu6xU-H60K_u5LqkkNqNG30BlccEHjyZEg.9yxS5RDNxl92g7YGvhBmo9wOS22ZChe5HoyC4pTDMw8g.JPEG/%EA%BE%B8%EB%AF%B8%EA%B8%B01KakaoTalk_20250519_094346089_09.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfMjkz/MDAxNzQ3NjE3MjI2OTg3.lEAdu9bOMN5EqXzRLmBQqE0xm_u3LZM40h6M7WtTVf0g.TWRf2jxtYBtLL-NUIV2Dlt3hjM57GcKHhGPDZ3XKotog.JPEG/%EA%BE%B8%EB%AF%B8%EA%B8%B01KakaoTalk_20250519_094346089_23.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfMTUx/MDAxNzQ3NjE4NTE2NTM0.SS_EeYfP3iw3KVdqo6FDzcHCLmmMOgqvAfN17Bjn5jMg.px_Nz4Ol8E-6hG-09vIE6jOs8I_SI71eEMCsEzzDskEg.JPEG/%EA%BE%B8%EB%AF%B8%EA%B8%B01KakaoTalk_20250519_094346089_13.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfMjEy/MDAxNzQ3NjE4NTExMjk2.yUJgOIQiSiY02pW2bnnWHMcaPLHMciV1tcE3qwGrsYEg.BqDWsFI6Q_K6iyU21lG6cTHwOtcD68I1BpKWpaitzksg.JPEG/%EA%BE%B8%EB%AF%B8%EA%B8%B01KakaoTalk_20250519_094346089_12.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfMjg2/MDAxNzQ3NjE4Mjc2MjQ4.AjFbcYbS4_gZYEpNN95BE6z4x8hAnY1vYMB1szCT7Scg.Dy_vJwgCLQ8OOTVdoqKINArNnl6ZtyGHP34GTwJBCr0g.JPEG/%EA%BE%B8%EB%AF%B8%EA%B8%B01KakaoTalk_20250519_094346089_21.jpg?type=w466' }
      ]);
    }

    const existingImages_k1928135272 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1928135272'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1928135272[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2197224d3fb802b0c95e58371df80623760a4bcb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4ab099b858b5e74707384e6d3773aa75311883d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e7be8c612325b377db2d9771f4319b0df688a39?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/42e2ea06bfa0ec003566509fc56064065a1849e0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cb0ce3cadad95682c250a978a34e38e8662d3d9496eefa1b4df2f14ff97675f4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTJfMjI5/MDAxNzQxNzU0MzczNzc5.e_x4KNnP9HoOrdtarQ18WxzquuHI_ZOx0oUfYnn8G6Ug.9VQC9MSUD5nT94Xk1Seh7Kv8bh7WEKJ-Znua5jUmSPog.JPEG/IMG_9585.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTJfMTMy/MDAxNzQxNzU0MzczNTcx.EdYif72_aZU-wdCdMFapXTwGocKkF8HuHzGdS-tDmecg.R8dJ4L1qqi7rdRGzaqEfQfnaxQ0kDYtl0t4eptUol3Eg.JPEG/IMG_9586.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTJfMTQy/MDAxNzQxNzU0MzczNzQz.1BfsoAbxMvPWuin6sBkooWnda3VpDW0WLNxXovBX-_Mg.CM2jExkyzatDsxRI-qiLPSEn3SVbNn_dhcE-m3oaC-0g.JPEG/IMG_9582.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMTJfNzcg/MDAxNzQxNzU0Mzc3MjQw.vEaPpgNLP-xPUBAxpDvEayD_aZXOxO56Ei1DK1FsS3Ag.g-udCI_37oOW6Y3z_hBMJqC6SXMQM9po_sN1MvDUYUAg.JPEG/IMG_9610.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDZfMTQz/MDAxNzMzNDg1OTQ3MzA4.0nJ-64P_8Q9-lkMGVEvHT89HLKDPrrrp-8gWMyyTvcsg.0cKKW8PhPOsQGovW38uhiM0UHv_8ka2trknASVvBajkg.JPEG/900%EF%BC%BF1733485933913.jpg?type=w466' }
      ]);
    }

    const existingImages_k380910251 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k380910251'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k380910251[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e03ee2cdfcab60ac306dbb3fdd7da67166295799?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fc7dbbd78dbb17473e1552653ee894c457393826?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d07fdcf81508c7c02b86e467896c8c0a54342aba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/36e84492c5b86ac05c51b01c56d762d874763de3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1257744db3670625b01fe6cceea23f55be475ffe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjNfMjY1/MDAxNzYxMjA4MDE5Mjg1.rB0l-XR55PPoT14J7ZcFfAlsslpzVdS-dQ2uqTqxhSYg.cxl8FA6E0XJoUrDON3SB0gUSV1jv14yiDGypGyAZ7hEg.JPEG/20251023_121013.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MjlfMTcy/MDAxNzU5MTMwNDk3MTgz.tYGj5N-xjAGwu1Z6uQ2JlTjd75cpu7V2pRF3m6HUoSQg.1tN5xEsa1_0P1kDPeYLE5tw_hAKz0ee1VBNUCUy_5G0g.JPEG/SE-adcd3ef7-9c3e-11f0-9281-6dfeefa2b17e.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTFfMTQ5/MDAxNzU3NTcwODcxNTM2.TklI9tj3pg_baoJXB2vZYmKOTtIlXoEN__78DfOu1t4g.2S8DhBSpO2ySwYJIJOLzuCOe90LJwutrga46_IODT_Yg.JPEG/20250527_125918.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'https://mblogthumb-phinf.pstatic.net/MjAyMzA4MjhfMTI1/MDAxNjkzMTk0NTU5Njgy.kqTW5iXc7xiF64Qy1ZGZSFDvcBCOBqIz3kSxwxqviekg.lQKsyKrZaC08EIXrKG0BY8N9_g_GkUdAoPrRjRnq04Ig.JPEG.bonami514/20190101_072817.jpg?type=w800' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTFfNzQg/MDAxNzU3NTcwODcxNDA4.DW0RbtJZJYmoZfQ3xg0q0VsXZTD7iBtdk0kE0vrOiB8g.Sn4i6p2e0DqGj8sQ0nzNZCUjv0DZDBWi4cLy1ig7ikEg.JPEG/20250527_122825.jpg?type=w773' }
      ]);
    }

    const existingImages_k16839602 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16839602'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16839602[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a3c1bf2444fb5989fed035bd86128a38948a233?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8dd56f5d84a5491f4595f1bc38b61ce31803f3fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjZfMjU1/MDAxNzY0MTUyODU5NTU0.LQ5RhK0m-w_71ehwmtF4K5_68D_6Zb87tsuv9wo4EHYg.w6WVnBYnoC_q8t2m5DHRPxzO-vMXoYlWg_1oMUwxfwUg.JPEG/20251126%EF%BC%BF170422.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjZfMTM0/MDAxNzY0MTUyNTM0NDA1.BzBQglibj_A2QFotbHcNAWjFcGYmbOpTFU0m7JEI4yMg.Oub-jT8BDp_QALtcCamrmI07fTEw8aOEK08yK_0vLY4g.JPEG/20251126%EF%BC%BF165231.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTBfMTQ2/MDAxNzQ0Mjg4MjY0NzM1.73-amDnwWC-ZFrfkGXSoxOCMo8vY74Mdkpjf8IjnWrwg.dtygUcAbBG1UlNWscaTq3AsJXqXhQAECzxA5Srp5vX8g.JPEG/7.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTBfMzkg/MDAxNzQ0Mjg2OTI4NjQw.hiDIpPFqpjdPQN9ageDjgvgmgqIAKW9a3Xbj8LVQdPAg.6L3tMqhIj35UejYd38oYZHXJEnLQ7mJUY9tzhUinDZcg.JPEG/SE-4fe190ac-89e1-4a77-af2c-43f8b528a427.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTBfMTU0/MDAxNzQ0Mjg4MjYzNzU3.HAidKGQyyxEICZXsQiTmJPbru0o4zPuIfKLhPwP-cEQg.khJZAaDUX1akHSLEyrkNrD10LneYyvBgS8dIoAMUlR8g.JPEG/6.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTBfMjE2/MDAxNzQ0Mjg2NzIyNzY3.SabGjzGgRRKVy3e3ziy2hoaFgwqXXB33LvXjg2Ckfpsg.MGx6Sg-fUbrQQkxTXnwQtbPnViYSQhgH5XV6_azDowQg.JPEG/KakaoTalk_20250409_225900527_08.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTBfMjIw/MDAxNzQ0Mjg4OTE4NjUz.oJCrOYDacSUbda_5NAKbvLKiNVlOCXWO49lMbiM3AJMg.f-LDH6Hy4ARMxW_K1t8MkZQmReWEnBnHEFLHzXQ63vsg.JPEG/1.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTBfMjUy/MDAxNzQ0Mjg4NDQ5NTg5.zwTmdTei2TmLt3UewUpKytSsAvv5KdZ7ZGys8fLfLOkg.JRYiqKAwE3k7GVyjBmi_sVdu9nCfQBJ6OJDNVn_OKIwg.JPEG/2.jpg?type=w966' }
      ]);
    }

    const existingImages_k477470235 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k477470235'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k477470235[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ad176808a741aff3b38d9312789e67dc35e6a891?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b4fab769a033a3ca011b6ccb29faa714f7917ae1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d3dfaeea7834f9da8d74b7e48a4929b425535be?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc27421ef23e92ee6bb8842f504e418d9700a327?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a91ba1e8effa248007e97c067fc91ea19c370c62?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfODIg/MDAxNzQ3NjE1Mjk3Mzgy.Q49Q5jQQnNQIb2II41228o5VRPkEpua--h7v5fGIPUAg.ysA-uruzCga2Pdv9loLUu23f23D0jgJf3kaXKr8tF24g.JPEG/900%EF%BC%BF20250511%EF%BC%BF121507.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfMTcz/MDAxNzQ3NjE1MzE4OTky.CJ1jIYA__Iau9j8uXBp7oBJ4Gbk_ypzWo-vCIS3HFAgg.VTPr7WhFtl-KRC6-kP1PPT3M8JZ3fGE52mvFSnKHdVUg.JPEG/900%EF%BC%BF20250511%EF%BC%BF121459.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfMTAg/MDAxNzQ3NjE1MzA2NjAx.G_nPavYfni0JxFlXjn7tK0pq6IKbh7pm9DVY8OxmnX0g.blaF7jy55CLU3PbDOQnneXeOj1brC_3jI1PoV_8tl0Mg.JPEG/900%EF%BC%BF20250511%EF%BC%BF121512.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfMTMz/MDAxNzQ3NjE1MzA1ODg2._iONdNSwhOZkTPBl7XThEIj5bQTddVk7Cr9z53NHChUg.Q15B9l451H9K41cGRtVsDkP4wUOD0TYaaexfhxqK80Qg.JPEG/900%EF%BC%BF20250511%EF%BC%BF121524.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTlfODMg/MDAxNzQ3NjE1MjkzNzk1.G1z9xAnzQVwm25GxkPQzNme_5x9ftvx_y-A58y2Egikg.Pg77AWFL-J4shqr6aT7Fm4UkKjoM0M-ijB1Nbp6Hhskg.JPEG/900%EF%BC%BF20250511%EF%BC%BF121522.jpg?type=w466' }
      ]);
    }

    const existingImages_k8698310 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8698310'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8698310[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5d870bf34ff9db6a4b53f5d9941cace226b90c14?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bSE9SK/btsQrUv0tfw/Zsiv2Ys5v1GhU7Ub2QZsh1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/byuLzV/btsQu2lo5Y9/6s6p0IZhWF3mmCkwIjngCK/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjU5/MDAxNzU2NDU5MTYwNzQy.tvIn9QedJe0Nc3TOFwyaG-iMhlfqxTVjRnr1EZSJAsAg.D14OQ6UycgrTdusw1iZi6y2nMboyEhNX-Bv2Z_vojxgg.JPEG/KakaoTalk_20250822_141219580.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjc5/MDAxNzU2NDU5OTEwMTQw.UMG6_jzvbjHSOpiN6MRt0uJQQktR061ocMWmLHFDd_Ag.q8jhK3IyYNcmjdDYy-DcJbs0P9JHinAFtCWkES_bCi0g.JPEG/KakaoTalk_20250822_141219580_05.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfNTMg/MDAxNzU2NDU5OTA3MTQy.RnZn3FJmdUzSNuFw-TNT9SJ57VLZT_EP3XqAbZO5yDIg.ufRSttcyoRQcsMnV0uIl72RwZzm1fFQpQL13ZZLu5f4g.JPEG/KakaoTalk_20250822_141219580_04.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjkx/MDAxNzU0NTM0NzQ2NDQ4.vdYLXJKcjQhAKwzp-Af1dLyBcKNfisLv-c1yBOiiFB0g.RA_SgFiiHP1IjMcxKlS99u2h1DIPEs6Is20OnnE7VBIg.JPEG/KakaoTalk_20250807_105320450_11.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjQ5/MDAxNzU0NTM0OTYzNDQ1.OEK-Suyn5d8fFzHvHO7ObvKf3cIfTftP5wy_va_tvtsg.8iJghL2iEHqohpZAj_r-IxVBSsy9_vqCBZ4L_kJb1xsg.JPEG/KakaoTalk_20250807_105320450_11.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjkw/MDAxNzU0NTM0MjQ3Mzk3.zYAvv9LRSCENoD_8tbCETVTyfzanzxCxeHA_Qo83EV0g.ixB5eDybH9H7e2H8SjZRfQ6tYy0OIHJn8U-9cOmED0wg.JPEG/KakaoTalk_20250807_105320450_21.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMTQ3/MDAxNzU0NTM0Mzg2MzI1.nThUR_HzQ1ALWtuUyCQWorWubcmT0vyho0nWV1r_pnwg.nSfk94jsU85noXcgwnvlu-bZgzWyb5F5nngnCfu8Qrkg.JPEG/SE-47c15d05-9286-409a-b4cc-f1ffbffcc634.jpg?type=w773' }
      ]);
    }

    const existingImages_k1131145815 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1131145815'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1131145815[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7bc696b25ba7ccef7492c1d092c5c0049df7d7fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTVfMjU4/MDAxNzYzMTY3NjQ5NzIz.GN6nms1HtztJ_h4xpiM-ViOn8fm6yymzlFjTwS1KyuUg.ziAl1mgxG-9r98msXQ5Ox1aA6dzayM0M66T_AuhbILYg.JPEG/downloaded_image10.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTVfMjA2/MDAxNzYzMTY3NjQ5MTQz.otG6gfruQknz4FuNWfUjiBTtwLbgk5gLHettRESedi8g.1i-z05HbfxS_WwVJMR14AGsYEu3fMDnbHsAf8IL8DL0g.JPEG/downloaded_image6.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTVfMTY2/MDAxNzYzMTY3NjQ5MTI5.BpsX8Fpce_fHDwS7mXFhPqhgOuM_rTUUfKOR0ApJf0sg.vrBNBhSurWkY_hXM0fKqt_90Bn1e8AYGLPOYxxoX-Tcg.JPEG/downloaded_image1.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTVfMjY1/MDAxNzYzMTY3NjQ5MTMw.qwUeFhbb4K3LLTF5k9gxMod5fSMOFyWYblcdC0qWBMkg.eMkfdYf0g_fkXymFn3Ucj7befxZ5QvxtmXLL207YABgg.JPEG/downloaded_image3.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMjk5/MDAxNzUzMTQ4MTk3MjYy.5ZB8Bz4cCh2WTDHlPe7YNrpT-E_0d69a9CCw9tkqvFUg.GzyEs2r7S-W2ctY9Y_4dGK8-5HG741yVuRi_ecUm7c8g.JPEG/900%EF%BC%BF20250721%EF%BC%BF200253.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfNTUg/MDAxNzUzMTQ4MjYwNjQz.yGcXyL8jd6Og8aBBoAa7s96K4e3ez4MAlU8QVTrPesgg.fVGHwnDiYlHjKr4okBEygj-sQopnxR8RMdFq9bvydhYg.JPEG/900%EF%BC%BF20250721%EF%BC%BF182523.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfNyAg/MDAxNzUzMTQ4MjYwNjQ3.cQyUecRMxYM8GWQtC0O4HcBEyWrQPZ5bWSpJagKfS_kg.cEB0sNZN9uxa7o6FLPF2y4ImQ9HwOfe4fF321wR0izwg.JPEG/900%EF%BC%BF20250721%EF%BC%BF182706.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTVfMTQ4/MDAxNzM0MTkxMjQ2MDk1.Swy2_3tXSqOO89qrgA-J_TvmJ8jtItqRK1HWFsF-YLog.I6-cQ_lJzNFa4oMy3rnShqkxqfx9ohHkoJrq8kveeXYg.JPEG/%EB%A7%88%EC%8B%9C%EB%A1%9C%EC%9D%B4_3.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTVfNTMg/MDAxNzM0MTkxMjYzMzI1.VA185EOayeThD5PrGmLc74rNEN_a06Ixv9NE1dXysBUg.ttaeHDh3Otv2sWgYCpS-5-MDMClxfZk-Nqu-qoOT3Zsg.JPEG/%EB%A7%88%EC%8B%9C%EB%A1%9C%EC%9D%B4_7.jpg?type=w773' }
      ]);
    }

    const existingImages_k9610995 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9610995'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9610995[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0d7ecf467c0adfb03f2ab1d32cec13ae90c9a0d1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/de084ec766451bf583d1a673adf98ca1e86d876f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfNSAg/MDAxNzY0NTYxNTMyMjc3.Yh7TtjAfwgSgwiJfW_wAACsu-wNcRX_2nE6mi-sYIlQg.mUV4zR13stoh4wJzzanTVT2vakjD4kSJdyqGNJnmK70g.JPEG/IMG%EF%BC%BF6765.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMjQw/MDAxNzY0NTYxNTMwNjgw.lAk5N1qLWk1u-tIXPUpy5_gkJ3BMx6aTxKUt6yt5dx4g.GQ0iT6Q-LaTIj-zgFX0kPzwQnSejGrIV_XKDUg345asg.JPEG/IMG%EF%BC%BF6738.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMTk4/MDAxNzY0NTYxNTMwMjMy.bY8TuKsqlyCQi33LxvcJbyCSHahWYMR6Kj__INiFQhUg.9eADJ8BzxSbcJojY2O1pFAaTjhT0kFrP2We1UPqXPx8g.JPEG/IMG%EF%BC%BF6731.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMjMx/MDAxNzY0NTYxNTMwMjgy.fUK6gc5Vfx5B6Q5O1WmvH_Q_bzqJuIFZMlNJTKejgeEg.pUheFAq9n5oWm5GtFGhlocBmav9P5PeDttNA3Q09aU0g.JPEG/IMG%EF%BC%BF6732.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMTQ4/MDAxNzY0NTYxNTMwMTE3.Ufm7zgaC8itYFZrxH1uKiAoPYbzbijqTuMB0Eo-wAnEg.dVPhIQFGO6kIPXQhGxhj_1TNVK5DVZoKdM90aA5g8twg.JPEG/IMG%EF%BC%BF6729.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMTU0/MDAxNzY0NTYxNTMwNzY0.BBjH-oDOcsf09HlxhbCiGgA_pkGw8z9m2HA4CWOVifcg.ywnUs9HKGDl3VTWFcUYQFSadspsw1wcK7rHPeahn1Ccg.JPEG/IMG%EF%BC%BF6737.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMSAg/MDAxNzY0NTYxNTMwMTAx.ddgL8xu4syqG5q-qwM3N-9HxQvsb3_Spze352jV3RuAg.jNBjD2j5sW_e2JCRcQDxs_4PdZBRryPC8Ub0pkxKoD4g.JPEG/IMG%EF%BC%BF6763.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjlfMjc1/MDAxNzY0NDE5MzQ1NDQ5.mMTB72FSAdPl8tY3ZGljGEY7e2GKnoDlHawqS2trf_sg.hOtWwTKUdvoxB4F66__G0l29NMeInhAwz178cW2e-hwg.JPEG/SE-3970518c-3431-4cd4-9841-a9de1d30e00c.jpg?type=w773' }
      ]);
    }

    const existingImages_k16808622 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16808622'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16808622[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMTQ0/MDAxNzUzMTYzOTA4NjM2.hl4_V2LoiLZ4jQmFKtdUQLJhI2R-uGUw2tXvzQj8bskg.6iSzfm5H2_8OvSylQ4rbNdwANVjG57Cs7lD17vWPlL8g.JPEG/900%EF%BC%BF20250718%EF%BC%BF191839.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMTQ5/MDAxNzUzMTcyNjE5Mzkx.0_mMrHPfzOlztMSb72-P898856_UCfLX09tss3TDuPEg.trMwDx0YLq9soe9CxFCsjL2vokm1cFu_-DHWHX5rulgg.JPEG/900%EF%BC%BF1753172616580.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfNTcg/MDAxNzUzMTYzOTA2MTky.WqEDHH2WkDdtAuKnlAcByQ5nJ4OaMCGBXRuogeBrAUwg.03VJapJ3dSCltXjN2tB36dT-4dQkwN73GAZRqHUYTqUg.JPEG/900%EF%BC%BF20250718%EF%BC%BF191849.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMTM3/MDAxNzUzMTcyNjE5MzQw.3KS2g6j3xl7aGLG_1qgaFb2VRsmTafuA-O964MuQyuQg.EWHlf6IW6xzOL5-FEHrHv1pSR271Zvf_65qOBcnbQqYg.JPEG/900%EF%BC%BF1753172617064.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTdfMTcg/MDAxNzQ3NDQzMDQxMDA3.f95oX1dilbJoGmyXfDQh97Bw6peOhJ6yd101uJxeejEg.wFY1SNv03gVUt8BWTx_vUXWTLnCP8psuP7HWggyn5L8g.JPEG/900%EF%BC%BF1747295086433%EF%BC%8D22.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTdfMTEw/MDAxNzQ3NDQyNjg2ODA4.N27Hni9meMbDL-eW19ipLmKWDvQq49XLWVQVIAXXqdcg.KBxBfPq_SP5guMjEmdYpdEbSMTqE-z-6a4yvIuXDu48g.JPEG/900%EF%BC%BFScreenshot%EF%BC%BF20250515%EF%BC%BF164359%EF%BC%BFKakaoTalk.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTlfMTIx/MDAxNzQ1MDY1MDEyMzQx.7WpS7QEjh8Qdx7zrkyMX7yqDWRcFKoK7F54Tb2GxOk4g.jSEZGE_rFpINu-dibNce9UavRjTTW5zRY4FwE8R6h0cg.JPEG/output_1701984067.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjZfMjQ5/MDAxNzQyOTI5MTQ4ODQx.yXx6JRTLF_VKVTmu2_YhcsMpXmrCvSDPkQ-9FlmwlvEg._pbbHm6x-Xb76O-L5Lf2jFWI-qFFouPN041o9pi2_OMg.JPEG/900%EF%BC%BF20250323%EF%BC%BF200300.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjZfMTcg/MDAxNzQyOTI5MTQ2ODY2.yYqOuW742esGocCxvRUw15f97JaUeJSyp7SVEbdE3JUg.LEk1ekqMhm53cXb4c3uxFSntYw1HXF8_LDhf1BLrmfMg.JPEG/900%EF%BC%BF20250323%EF%BC%BF195945.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjZfMTkz/MDAxNzQyOTI5MTQzOTk1.BR0X_tWVzwqQsYzjVMuovvZw-fSWUOCPy-hWwXsYHaEg.DzhG-jPX9sRRNg0HOkA_0ckVaRhlOxX3v4dmLwclU6Ag.JPEG/900%EF%BC%BF20250323%EF%BC%BF200241.jpg?type=w386' }
      ]);
    }

    const existingImages_k16920986 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16920986'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16920986[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/061f6914e72a16b28a40511e58aa35991c019a07?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMjM1/MDAxNzQ2NTgyMDg1ODEy.qi3gQL4K-NRFrXmb-XHi9NR2UJI6IWwzuxoIX7tUxtMg.mdE7mlihGMPdEOArVRXvBWT48G4dAGvojADPfpx5PoAg.JPEG/output_3320504847.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfNDcg/MDAxNzQ2NTgyMDIzMjM4.B_HBa9ETF95HXYpT8degqKDN0RkJNQrn_Jg4wxSbkjog.ckku5K-xCrPVgcxeDatUJ8r0FmUHgqkmMB8z1_4SIKgg.JPEG/IMG_3319.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAxMjdfMjk1/MDAxNzA2MzQ0OTQzNTI0.4sfSQyTm6yp1FqpVHFKAuRIHKcmr7H3-tauIkXHt4dYg.dKxDDOBWt3tkRcoTscY3C_phzCdZPdQ0CChBsBbr0ksg.JPEG.fltmzkdnek/IMG_7627.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAxMjdfMjM3/MDAxNzA2MzQ0OTQ0MDA5.y-yODhYTIwqZLZ0MlDovAWjEN-M_TayU7Eg5t3nOkCIg.MUEkJVwJ_d_DvfQS5MWpBrQ1t_e_cGQ4d0MBjaPTCQAg.JPEG.fltmzkdnek/IMG_7629.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMTYy/MDAxNzQ2NTgyMDIwNTY5.-RIeUuvmjFLDbGK-SsRNSxHkP9PoP0WWt01-4PSjv1cg.UPUK-t5wBqxr8amIDLrA3_JgkflaiSN8oB7upUkzD0gg.JPEG/IMG_3315.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMzUg/MDAxNzQ2NTgyMDE4NjIz.6vCtlw5Pzkw_yTyihoam5etTafmzAAFuG3k07WYvMtMg.TqzzTEDsLWshcbZYYwM1TpP-sOHy618V841xpXNWkHYg.JPEG/IMG_3324.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMjA1/MDAxNzQ2NTgyMDE4NTg4.bkG7SCIV-DG7Q6qzN6_51HojYm-rmHH34iD8HYxcttwg.I_nwUyAeFA55dhX5eS9I7hI4UyZ2uov9RxUKuXzPpYkg.JPEG/IMG_3327.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMTQ0/MDAxNzQ2NTgyMDE5NTY2.NQlU2dPyv8zq1ib6y7mjq2tNA6gJnxQjrWqyweWJgWwg.kB_oUFukpi5hyDlZsITYe1GthoZmfvE8DqdRdiS4g6wg.JPEG/IMG_3330.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfODIg/MDAxNzQ2NTgyMDY5NDY0.2g-Eez-VjBrV2n_9ClG1f0V9WHqdIpRz-YNBVczRjlAg.3VUsiLNH-29y8tCXZwEWHf7-ElJeUziYboNkFOlcumMg.JPEG/output_480201700.jpg?type=w773' }
      ]);
    }

    const existingImages_k8692469 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8692469'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8692469[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMDlfMzIg/MDAxNzM5MDg5MjA5MTUx.Q23OLAxeYT0P71ZMEXLOVZauKvTnxNNadDSqB4Fe4wMg.vbEmmT2d5rnHDEDRdJb7eFnYGy13xff2ncOJ8V7SlkEg.JPEG/IMG_1488.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMDlfMTEw/MDAxNzM5MDg5MjA4OTc5.llJTl6VGKISigj5S7_KPPFty1U60RYfmbfPH4abBkykg.XkUn6OSnNK3izLSlRoxVhexC6SZ4okPfxi7Cni6I4YUg.JPEG/IMG_1482.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDFfMjcw/MDAxNjkwODY0MjIyNTk4.nLrvqQ8VHl32HrZq4hSNM-vGLuHb2iynhZVEciXRy3kg.jrVlWb71LlZT9R0p9AVNWIWcVVwY-eSThgl45fJFYx0g.JPEG.tnwls0427/output_511888072.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMDlfMjEx/MDAxNzM5MDg5MjA5NDc4.C5bHWlQY-yedg4Ej6ujfkLhWai5uidCj6S7GW5l0w3kg.0nXyk5vrwbVVlDW6eQzEVSH9-Snuc1zJwSYjBscvBhMg.JPEG/IMG_1490.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMDlfMjMg/MDAxNzM5MDg5MjA5NDMz.00wrmLyMoUcHF6qhx5UpEYWKvMI27HAizk0D6_T-_e4g.2CO9xVMeMwzqHIDugjootle1xRkD_2UiIU2yCcIpNzgg.JPEG/IMG_1485.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMDlfMjEw/MDAxNzM5MDg5MjA5NTQy.aVi7nFKQlJ7MmeesLHtpdjkskKkqTTiUeMbxXwlQwrkg.D1_hse9d6JLCRvxTSQb-ydBKdMjbbwu2qGKa-CmG9-kg.JPEG/IMG_1491.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMDlfMTYx/MDAxNzM5MDg5MjA4OTMz.NW5zlt77Ba8XcCGsWwUZBbxKSK3VRsKMvEUYrTeU0ZIg.BDXy803dEYcArsNyybzmVMG02CvW_s5GJjMTAJl33Acg.JPEG/IMG_1483.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMDlfMTU5/MDAxNzM5MDg5MjA5MTI0.3g1Kz1kATekB3y883jXmn_UuYFfPlSDoyDkafc-cHB8g.cJx1vB9HSHprfeoiU3PudT6a-z0uvUzkP-079Wl5jgYg.JPEG/IMG_1486.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f8c450508852a3fdea0cdec72240ce068621f9a7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMTVfNzkg/MDAxNzMxNjY2NDQwNjQx.RTNlVg37fgGf9KUt_TDXdA1fM3HrLvHYSrPAtDZVwBkg.8VoQ4yvn0aHCnDi47TFMeytYV0s0HI2SEnhgt7fmZuEg.JPEG/IMG_8049.jpg?type=w773' }
      ]);
    }

    const existingImages_k1664310575 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1664310575'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1664310575[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/075F3E2A613548FC89C926FD14881E2B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7B37189D2F6D45659E835B64853AB66B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/79EAC4789B3840FA9D580E0D21C16FBF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4D02169037464A4A9FD19E4E7AA4FE80' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B3F346608ECF483D86D2FAE900B2B79D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/347C60B80C454089A7178585990F2C4D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8264F9D4248149D9B0D9A4A9F89D36B8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2933EFB103FD495F87C5180DDD949F67' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BF69E988C3CA4BAA9CD44766D54BE182' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AA306E75DBFB46ABBC8F1FE1BA1A123B' }
      ]);
    }

    const existingImages_k1627850139 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1627850139'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1627850139[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMyAg/MDAxNzU1NTYxNjUyNzUx.W1Ibf-3l7I04Yo65BvLShcJLcSAYH4lmTL7uavKtuIkg.1HfSBbWhSnXGuxFyIyIRntrriufgh5aKJOFKmYCGwyAg.JPEG/SE-36fff386-74bc-4f52-9eac-0e6c2203cc88.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfNzEg/MDAxNzU1NTYxNzIyNzM2.Q2zOHMaby7MkHVGPa8aYUt9kJFdtCuP00PvInAJ6HMwg.Nl0M0XMCU2X_AZnz1ibLqi8pwLs0Cke5-7AXSIK0dyMg.JPEG/KakaoTalk_20250819_084727062_04.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTZfMjcz/MDAxNzUyNjQxMDIxMDY2.7ZbgfdOlBFT9s_J3bZlkig1n3qp6kVMDsbWBhtMp8TIg.ijdxu69t2wv3oqSObSqSAMngz2y93iqBgoYRQq6rKCIg.JPEG/IMG%EF%BC%BF3588.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTZfNSAg/MDAxNzUyNjQxMDIxNjg3.0qOq_HZqiGIn9Bm0OSwKOHhUHQVIBcnAfQxVH8ufgVog.9uRRLGHOnmuQPo0KWZJqnpPDBtNiQUY3E34lgyZw9lgg.JPEG/IMG%EF%BC%BF3592.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTZfMjc4/MDAxNzUyNjQxMDIyMzE0.DQRLVfqYL7S2gGIf4l5CUL3m0VOfOWyeFi-uNrpJIHAg.ee2V1_cNBXyvUPWt7lY9t8qrNqrIyPuriy1h5zmFRhsg.JPEG/IMG%EF%BC%BF3593.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjZfMjAx/MDAxNzUwODY3ODM3MTI4.4x0a1cyUzHNkgh6EUG_I6jdPnm8XKT1KVlg_4_iPxqog._7aTAW7TSAkM9Zb9DTjmpcnkMwzSleN6RPg0yycfiVMg.JPEG/IMG_6838.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjZfMTY4/MDAxNzUwODY3ODM3MTY0.vOgYIVutTKpkqLVds0YhoL9xB788GSfOqxh1emnrc4Mg.DuNL1GUpXhZ1nQ2la9Ly4k5y5HEYKleYOeI3DvvlS2og.JPEG/IMG_6840.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjZfMTk5/MDAxNzUwODY3ODM5MzQx.1XtHsVURtU4xC57xcI1Zc4gxbnA97wNSsoPBNcEj6cAg.0w5nox89SuzbxqiIohtCXVdDcGEXIKY3_tNo_fbvADMg.JPEG/IMG_6855.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjZfMjU1/MDAxNzUwODY3ODM3MjM4.dJOkUcugIuTFGVzAMyvj_0ZA1BO9ydiPjmwVG5j-T4Mg._ibwpHIv_eUFrBSfp1CMUqX-y83zMA3AgDYUX-4zd8Yg.JPEG/IMG_6836.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjVfMTEz/MDAxNzUwNzc5ODUyNzAy.2lcgeHT9ZAwHJu-C-rK9jraSs-7YFYZkZDtBa5rUqmog.8dGj8U3ZkdFdp-Q0Cfcbpl9TByoumE_ybbNwRjqFX8Ag.JPEG/output%EF%BC%BF568154255.jpg?type=w966' }
      ]);
    }

    const existingImages_k15558354 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15558354'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15558354[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTlfMjcx/MDAxNzYzNTQ2NTM3NjYx.MWlAxQEncf8o_kC-nGMpexgAYnmRv_QBXEctJulw_mIg.25mhE9AU3KtwbA-uBgILzeUp2qY-Ht3KxhuXJIfWVUYg.JPEG/IMG%EF%BC%BF4585.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTlfMTIy/MDAxNzYzNTQ2NTM3NjI3.7jgDpsAPy4l_CqOuC_V2mqmtN1UZdg10ZM0S7xSkIH4g.IqaoxXt3yn1R-CPpaj2tp44keMRK2ZRUQnLiGSbcb3cg.JPEG/IMG%EF%BC%BF4616.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTlfMTUw/MDAxNzYzNTQ2NTM3NzA3.GizQLvpSTYmQT_cw8Bj9Q-pLVQCD0UaFI1j8KS6k88og.lH_LiPqKU-UmOO_VEIRbgBliItZqNoNLismUjPrvb-cg.JPEG/IMG%EF%BC%BF4590.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfMjg2/MDAxNzYyMzI4NzgzMzUx.3oELgORw6w5T1cXBGnSHA0An7Pa23o6A0ISkP_ONUJQg.ELd4FgSJckVApbdfiBgKYaxhfp5zXXeubsopBOaTDL4g.JPEG/IMG%EF%BC%BF6449.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfMjcy/MDAxNzYyMzI4NzMwODUy.M6LNlN46HH4atUOjNQkDTa7RLMsWuOI4gF06hUrihscg.Y7vQ-VBDwGU1sOSS5lTs8nXPO8fCCT5m8UI_xPYzWnAg.JPEG/output%EF%BC%BF658002185.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjJfMTg3/MDAxNzYxMTMyNTAyNTU0.LwgLRc_BcmA_GWR0IsI_5VKuipGiAeekMdcNlB1Sxlwg.yztQ30mmORMl6Czj7HU3rVXwVikWw67bMBDLg9-yx_sg.JPEG/20251021_120127.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjJfMTkg/MDAxNzYxMTMyNDk1MDY1.np9tALAgtwk8y7YabMscLHMw8n3pw8PfLJwwE1QjfDcg.kHYjRShAX6Q1vRNLyfgpSyedrxMRAHHtbwHk3baWYvog.JPEG/20251021_120102.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMTVfMTky/MDAxNzYwNDg4NTQ4Mzkz.hXDIrmIRgD6D0DcDxYhS9-LuEirIUEIWcjv31_yBA5gg.s4gAPLAxRO-Xd-Qf6lnA4QsXp5phAabAabC7d2hGjMQg.JPEG/KakaoTalk_20251014_135731602_02.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMTVfMjA5/MDAxNzYwNDkwODk5MTI3.19K7B6Jh2EHYauiKZ7Bu2DRVTbExS44YhS4IqA5fxhAg.5geVwJDEY_fD2OSjywPfz4zfPopkVhwV_sn0pyPxsPQg.JPEG/KakaoTalk_20251014_135731602_12.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMTVfMjg1/MDAxNzYwNDg4MzIwMjUy.-fuoev7_J4E-EooXOU82KxI4Mf0oRUQwxgQoPg2XVjEg.YI_iV_Br_xlIA0SbB2twQuVYY5igskRoS7CEwdfHmpEg.JPEG/KakaoTalk_20251014_135731602.jpg?type=w966' }
      ]);
    }

    const existingImages_k12159218 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12159218'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12159218[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/844f2dd6def7f849e8c1229bfb0b1faad45e8fbe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa3e71f1cf28026be3d9298d9e66afabf449972c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMjcw/MDAxNzYzODY0MzI3NTAy.f9lqCAZeGyn5A8P1nOrwA8LSZpV6JKMiMPtAJEKq6Pwg.VFVMDu-fs8HOZkFqSxDLNevzp7iiJ85xMYfBS6EzXYsg.JPEG/IMG%EF%BC%BF2183.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMjIg/MDAxNzYzODY1MTA0Njcz.rExkvqoqnEl-86-f_xfGm5qlWBjY3188MYnQda-qT68g.061lyxhQKLfJII-hjJXMdKbVr9Z2LHN9MoaICUihmZ8g.JPEG/output%EF%BC%BF3206647550.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfNTEg/MDAxNzYzODY0MzI2NDMw.lbrjBzD5hxPokvQdhZ95CSvYbrgH1QlZPnxEP6BifwEg.AxU2DIxSnJ0XTNkKuZBs6hPS0Pe6q9HvO6IRgUqROOEg.JPEG/IMG%EF%BC%BF2007.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMjIg/MDAxNzYzODY0MzI0MDA3.HwcLsRB8XfOEffY2DSl2J4IPdwYE2cuT7hEoZQgBSP0g.f603jgDAkrYizG10d-GipGk2TPWweeVLoNJGrmb9Ku8g.JPEG/IMG%EF%BC%BF1940.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMjcx/MDAxNzYzODY0MzI0Njkz.rmtfRKjZOXEdPt91MRZsfFBD9PuBKUw2NhLDA2KwcDUg.Fzhd8pSBk9b_ghhLREy_pJDGHTm_XyNboUgkCcdGAxsg.JPEG/IMG%EF%BC%BF1959.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMTk4/MDAxNzYzODY1ODk2NjM5.OQMdffeyNroPqPG4yBa2BWRZdCfuWCdyMK1yxaV5Jn4g.SZ1LR-mhIOOFSmHYi44bLD9PR1VcHbsZmSrF0iUqX9cg.JPEG/output%EF%BC%BF899786589.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMTIw/MDAxNzYzODY0MzI0MDA3.KHAAYXHBJGU87_X2bcB19sV7FPbFKO0F7y9D4jE3r0cg.ym7GB09XW-8Tu8lkplJiL2SvOlJv1_60SpYdh60x2A8g.JPEG/IMG%EF%BC%BF1896.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMjE5/MDAxNzYzODY0MzI2MjE0.usOAOq8iNHxfreL_7hFqy-jD0RCzEkWL6BUO707L-bgg.v1gI4nulpEuQP6u3RjLuetk9-YbA_pHt5DQJLZy1VP4g.JPEG/IMG%EF%BC%BF2014.jpg?type=w773' }
      ]);
    }

    const existingImages_k10897211 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10897211'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10897211[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4BCB5CE620EC4465985B8B9EE70EAB02' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/D86C3DC4C7EF499289A9A4A5B7C616DE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6bbfbb0c03bf077c8980145195d2d3103add81a1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f0ffa3ebd8f8f8bff1263d35af3d0306bedf62f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e8c4d748ee8194bc3b89c242181b7626ffcd6c2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca591eca632fc7e4acc7442abea4d81e550c4dc1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/05566242670d98d8b701c31887c1d4e7acf55780?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4c399fd683478247fe1eb40bea72bd13037f188a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjFfMjQ2/MDAxNzYzNzIwNTk1MjE1.MSVTolkhfew5DufLAkUgMrvRcIlq9eWfxClDxy6LFW4g.sjstSax6EFvgfqwp4PCA2SWggebpZGSZ3BKdJEiBt0Ag.JPEG/IMG%EF%BC%BF1212.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjFfMTUz/MDAxNzYzNzIwNTk2MDEy.vmgJ27qlqpPHHF1O9gD7MAulTBvQ-Jn05BGGhd-ddSgg.-KNaYi_uYyRICxHyjreybPz_TeF9fftprparRoq-k5wg.JPEG/IMG%EF%BC%BF1218.jpg?type=w773' }
      ]);
    }

    const existingImages_k27341750 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27341750'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27341750[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/769bdc698277b59f3bcb34b65ac3e38243199293?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8d178eb22cb943bfd5ccba324a691d67de7b2233?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5948b59a07f8cc6d4d78175417128fc40563201a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cabd1230128c9e1f3dc0619be96b4656c3c41e60?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4acce82f9b6322d45ab051a231ddb0fe3d4f2f87?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1fc40dbda5b82c8edc8661872dce2753ed7d150e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce43610d1376967e9f3a01a0fce45b67f3cc7476?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eb00283de2b7e9963ee3d25bb58ecc9f18666fe9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d39a26ea872d134e6fc55a2f8a91facd7ca503b2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/85aaf35e7af8ff434aef35fb0e06dc4569de8c7c?original' }
      ]);
    }

    const existingImages_k12958056 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12958056'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12958056[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2c8ab398f5495b64878a44c81d46a85ed779e9fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d73deb45206eb64784eff75ad1a88be96a5784b9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b0b0d79ff251c22a3f6c854bdf8f45bd97a8e1fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/61a67cbff8b7dbbeeeb2bf93a5885787b4c50edc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34cf7cb488a9d2683560ed00bdff5ea07073d2e5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4fe1ef996fc893246273fb52256be5be94525876?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3e2597e555332f4ea6c44e1aed153d297a9438a9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/cKdx4W/dJMcagRvhfo/KlZxIkpWp3Eeum1BdvyhbK/tfile.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjgy/MDAxNzY0MjQ2MjUzMjkz.2fso0BQzM-cCf7P9u_JHH2LENUcwagEb4m4B88h7v-gg.FluKg3TG07yoriBhajjYK4Tnh4Gs5fT_Y1kTf-8gKdgg.JPEG/SE-c0ba7dc1-2487-40b3-ab4a-6e38e5b8158e.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfNzYg/MDAxNzY0MjQ3NTEzOTgw.Cvs0E2KHNYAqh32y4d3WH0jh2tkhEIpYNKw2v5XlVo0g.xd10M6qV29cta7NiDRhW0lwAHdvfQCn9EP2NRcY4ZF8g.JPEG/IMG_7343.JPG?type=w966' }
      ]);
    }

    const existingImages_k1478420701 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1478420701'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1478420701[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3e279ac181660b1741a8df5f94eb741d1e495002?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/91de1c8bcbb57b655916d87ec4d7cf2632a250b9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b27fe927e1713e6ee11863e59f303d710a24a58e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfODkg/MDAxNzY0NjUyMzIwMzM2.g3qzYEP3dQKR18Elut45W4usBaaEN_RPxQijhJqxzXUg.7ejOXa8ieZLTshXBSa7JwF2S4z0jnNILfR3EKdwcgJAg.JPEG/IMG%EF%BC%BF9513.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjcy/MDAxNzY0NjUyMzM5ODE1.DVMm1RS0Nk4M2jQuPoFvPcS4lIPR2rfsvaSiSrIU5C4g.QOH7FykiyKNDhqG8svQf5KxOqd6KBezNheOHzf5EP0cg.JPEG/IMG%EF%BC%BF9524.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfNzcg/MDAxNzY0NjUxOTc2Mzgw.6rAbKbaTzIJGEwDhmna_uBN1c6OEIH1Cs03zxwAY2UAg.8mB_Y8DX3uMKykahw_IJ-FKiBPvch7sl4LaeHLT-dfAg.JPEG/IMG%EF%BC%BF9510.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfNjcg/MDAxNzY0NjUyMzM5OTMx.SAq1gdIk12mT5_Yri_QCuJKNgUWQ3MB2MRCJ8W-p_Scg.mCn-qWK8cgSgBbYPQj6fXmbYx31zugcSmd7OcCzjmVwg.JPEG/IMG%EF%BC%BF9515.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMTMw/MDAxNzY0MzE2Njc5NjQz.EvgRkMsyVnp_pteh-tOdrGxBghhYiCC5PFJBV5NrfJQg.xKleEk34ngyX5-0EwgTEjuT-EektLxqKgv6djnwDw0wg.JPEG/output%EF%BC%BF4172421173.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfNzMg/MDAxNzY0MzE2NzE0MDY2.etybm_KMWavpEzDj2QnUY2GKzjScC8Fv6no8lRRSAvgg.bqIBpRdqic26J_0cz4MqHXX-f5TgOdDh9Ic6GMjqYq4g.JPEG/output%EF%BC%BF1339697312.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfNjYg/MDAxNzY0MzE2NzAzNTMy.LANsKSyiu_XyzmUuUVKYL3oNMvKHTudm4KKrRJWalCog.ZBqKrrQ65OmWVSMZF-LaI0vgv7co8VLKSAApU6Gm8Dgg.JPEG/output%EF%BC%BF2616186543.jpg?type=w773' }
      ]);
    }

    const existingImages_k1684390518 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1684390518'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1684390518[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9c50a5ba74c4accbf7b0269728fd6f8f81f4869?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e5b1435fe4d88c190dc28f66079d43bc4b397778?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a283c1c7d177586b354f7212de870ca94292c242?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bebd71a7d6fa32ae240bf7f26684bcc1ccee6376?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f0644884f164636fc8d7276e39d640dec96c0029?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a45ab5b5f92cdb6ff949b4964f047003770597ec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7b0b15082d9321e69e0304339986930398ecba8f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/780632daa85466b69ec685ca609baa3354cb621e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/49ea50427f6b3d1bcb6a946a204fd9c453055fe2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e0ce16ce593e765213af6849c2d0c43774142579?original' }
      ]);
    }

    const existingImages_k2043797572 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2043797572'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2043797572[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DFA94A46AE8B4743BDACD66BAB848B19' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1F679F4ECDEC4FFB85A096819F85B879' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C4682B00B3E546188AC34BDB463FC517' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9DA6877B2E55429CB36ECAA2778BC2BE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9908EA50612D4F159A2AE1FCF7F41D7E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B4B505D43D2D484583DFEF0EDCFA6416' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9A98D2F99D2444AAB739B20D51D05FE3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/316951FAC34A4FC3BF399B46618ED44E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6AE264CB7A9D4D3FAA4F585AFB06BCE2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D94FB4F8FCE44F82B829CD71422E7530' }
      ]);
    }

    const existingImages_k1248472923 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1248472923'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1248472923[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5bce0f58858ee59b261bd43c331ce1a2ef323173?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8568ba551d2ef169939f2ef405a9e28a8825a801?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjA0/MDAxNzY0Njc1MzAxNDE1.eMXiiRfoG5RoBcAwlHr-dvY51IZIU9HT_pjeA2OZzNcg.J9y0ZTpbpd-bFPWe8h2s3UJ2RmuDzbm0aDmnsg5tvBUg.JPEG/IMG%EF%BC%BF2139.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjE1/MDAxNzY0Njc1MzMxMjU4.MG30DjnaX7-R1dlGeW2mbJ2CkpwVfy3Z-bzcDFqVEJwg.Y1G0HS0LDR-ZBBf2JzkAMUe77RIRTRh3oRo5Y87_ZTYg.JPEG/IMG%EF%BC%BF2140.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjAw/MDAxNzY0Njc1MzE2NDU3.1pohNY_i4FiOSltNcFNU6v6Y0i8jnfgNaLyB64ps2kcg.N0jZ-NG3TREsyjP7lCxB702gqyeRjYm3WBGHtN4y07kg.JPEG/IMG%EF%BC%BF2143.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMTcw/MDAxNzYzMzAyMDcxODIw.BUFVfjLYYR7Ah2NB2QedUnszyQ6mQqE5F_kIQVoVsMcg.phgWS2MX5Wka_qQ7k0t_AbXrSmLh7WqsDw6uMS4Gu5Eg.JPEG/output%EF%BC%BF2785207014.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMjg2/MDAxNzYzMzAwMTAxMjE1.xJs-SA_bQzgPHrBQeS2_Rz2QB1JFCjYq-mMIZWUbQz4g.86eQjgH7zmUWkim54I1SSaY58KShjayXbSzisyd4z6Mg.JPEG/IMG%EF%BC%BF5340.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMjE2/MDAxNzYzMjk5NDMyNDI2.fFKzl1fly6uc_jtbD7burLAHSmtc1FJy-h-T4R0cuFMg.TrCkRGDUZzsbZ_xTXZS0c_jkzEshp4SjssXqHMMIOU8g.JPEG/SE-32E8C714-6970-48FE-8886-1BFA9887603E.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMjk2/MDAxNzYzMjk5NDIzNDc2.jC0uRuzx6ptCuX2_vzz4ZTQfpj9Y9AsEsWsVO2w1A3Yg.iFtTLflTiytAFBk1riRliXkR3b7zrIBtttxlp6Y0dWEg.JPEG/SE-E8714C2F-81C2-4DE2-B5CF-6582F33EF346.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMjMg/MDAxNzYzMjk5MzgwMjUx.QC5fAxGrcJpTJDC-6bGmAS1DuhLdiCs0d-ei-Mb8Ivgg.4NEPZiGvo6KrTEeL5EUl8EhydpES9RymqXdMk0F35ucg.JPEG/SE-FB3EED92-AE18-4A6E-86AA-B25F4FFC9607.jpg?type=w773' }
      ]);
    }

    const existingImages_k1429519259 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1429519259'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1429519259[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjdfMjE4/MDAxNzQ4MzAxNjUyNzAw.RrBPwj9r_yq5EJActs8j9OhpzcQpVg5NQI9ST4f-wMMg.arUzMtt1jdvAhPDojRGTwc9ZOyOodVxY8EruZ8Dm7ewg.JPEG/IMG_3908.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjdfMjg3/MDAxNzQ4MzAxNjU0Nzg4.-TF1hFyt59Lyp-0_Z4babxug8MvXOXvgv5k9PbxFvWkg.6Ufeb50GuKOjwkDkIawfd9kO0h5rdvGxYifSFbQsAP0g.JPEG/IMG_3909.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjdfNzAg/MDAxNzQ4MzAxNjU0MTM0.rN4YI4gSvTulG91UF61v6EfCfPJU5kntbUaQ-d_1tZ0g.aqzPOr8U3aYhHp5xFCGryIxgnyxJtJuvooE1d6PEttEg.JPEG/IMG_3918.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjdfMTIy/MDAxNzQ4MzAxNjUyNDM5.ZNLcTH-MeTZahYfMjQJBujxpbvDWsV_du1RylOQqr-Qg.3EmY_fBBrr94leIbwi1MAAuCODXetDVWMzBTJeg4Td4g.JPEG/IMG_3906.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfNTIg/MDAxNzU2MDk0MjUyODQ0.W4_4RSh0OMFMWYU_O-DBaaB84REJG4kxm0esadSX4mIg.iRs1V5METLLYu_tLd1UQEI6m72xj5DBQ_9jbChcuOKUg.JPEG/IMG%EF%BC%BF4590.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTNfMTAx/MDAxNzU3NzQxOTIxNTg1.vB-krxi6LzOvz2WvVOPn-VxnJyzztcngpLIPKus-wtkg.zll0ENEkW4xpwcIM04l_Up4DXiXghGYP98AtNDGMcIAg.JPEG/IMG%EF%BC%BF6488.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTNfOTMg/MDAxNzU3NzQxOTIwMjY4.XnAQYRTlFskPq7y2wjsckH6BMHoElnEwtdpl82v2VhMg.4IFblt_pXQknQ2RlaFY31Hih4XmyxIpzqI1OVB--2IQg.JPEG/IMG%EF%BC%BF6487.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTNfMTQ4/MDAxNzU3NzQxOTIxNTM4.p26PVfINiJQVEZ2cpVFQ3VOz1rampTupGB_4BaelfVsg.laJA-fUQqvvijhLXxDW_eHwGX3MJ1llGl171WIJbpnkg.JPEG/IMG%EF%BC%BF6489.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTYx/MDAxNzU2MDk0MjUzMzI4.tvHLu62rctL8Up7A410U_Fn3DNj3hYetX5hbE6GrBSkg._hM0TpsmVNaM9eDZ4OXuY9LjkgKRCyXsuLEAAPLUdhgg.JPEG/IMG%EF%BC%BF4591.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjg4/MDAxNzU2MDk0MjUyNzcx.GtXR2Le50KsWAOYwMugMYxBPMrTlL5V-RW3Tl1K5Dmsg.HB0c4REdfULaCNJMu0LPIzUgHHS8EmVJ5QhGzSvDgDIg.JPEG/IMG%EF%BC%BF4589.jpg?type=w773' }
      ]);
    }

    const existingImages_k1559726567 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1559726567'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1559726567[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/610B56494F3C49988BC618F283D9F460' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/176BC12A62834ED9A90171BF87E5C4DA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EBECAB5DF2EC4E10814E4D577EBF93E9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B06541F84A9947B1AB5920B253D610A7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F097033AADC943CAA3E5787E7E49A761' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/06A37937289747189F58569A21E43586' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7796066EF639452B9F0086FAD76FF2A3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/957CBB36CDFB40FA9E3892E58FD67DBE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E2B185F069EC4B49A0213C822F56854A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/010F7F2411254B358B27BC121CB68E1F' }
      ]);
    }

    const existingImages_k1322271168 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1322271168'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1322271168[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F6D1E8E2523848E6A0B0338D3D044D87' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/21FD006856CF4F449F79F7CD05384644' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/77AAB97FB8A74EC2AE110FBB445916A7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D4C28BCB4F7443DC8FAA4101614AC14E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7B36015558FF425CAEC2C5437DD4CC7E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/97F9BE95FF984A1194E6C4BBD7EF07AC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5CC0761B32DE4E8CBD44775F17F698D1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2A5B593DE5BC4A36BE2DE9ED610A965D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/512C0854DA4F4A52B4BAACB60AA23993' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/60725BA70B0948EFBB56AAC559E28606' }
      ]);
    }

    const existingImages_k1522674512 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1522674512'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1522674512[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/85b85f7da61296770b7041db98427a41be5f621e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6bd186690bff7618e004ee328aa3dd71d976d0fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ec4146ecfc192b8119614987a58ba7797634d13f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a9454b5bb35844866fff4253420e76ddc307f8c2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7436297bf54e51ed6190e9f577004df46dba8a44?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c54cb4290c7678685c305e5f066f4078367062d8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/387f79377c76132d5d9b06e8cb7bbe3db2339755?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/169dbc984b0059aa6d10f2f5691b9626a0fb9b8e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMTk2/MDAxNzY0Mjg2MTc2NzQz.8ZRU-h5RkdxkH9BlRw75NNdfZZomnFI_eaEzzXC89gwg.mzg8i3bczfmgwlxAucBVhur6-ICyP5PuYbtGXSTKbCkg.JPEG/IMG%EF%BC%BF9668.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMzMg/MDAxNzY0Mjg2MTc2NzA4.xU6MrZ1YVa4L5Osf3Lzn9jYis_mGOJPRZiKpF7wb3fog.14VLGSRY-Pgpdxkd-MVVGCwwuVKwP1yKOlekXhhXwpQg.JPEG/IMG%EF%BC%BF9669.jpg?type=w275' }
      ]);
    }

    const existingImages_k126962018 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k126962018'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k126962018[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9c86906c5abd2853e8c89721a25421d94562ae2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3a183d7b598a8d774954a4d33b3269b53d0f6fbc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a4f4fd412be35e51d3c3be84fbd0fae125b6416a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/036eee74392722bd4ce44bc5c5db53b867a465bc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41c9c171aaf7093965d8f21ca654c2bcee56f609?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2f1ba60805c1d4ce8ee69b6e7090a42c64262f4e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27586e79a3109a29bff1bf815eac5e02b69e0746?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMzMg/MDAxNzY0NTYyNTQ3MzY4.nVX9Of2pjYFl72xljzFmZMsfhKWFWXC-Nvg0U8g4mu4g.3AU_vO7F5x7_qOuS2IKnmWWtvhVVQc-IqnTJZJb37wEg.JPEG/F3700C65%EF%BC%8D6DE4%EF%BC%8D4E0B%EF%BC%8D8C87%EF%BC%8D44121A5FB644.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMjU0/MDAxNzY0NTYyNTQ3NDU2.E0u2WOKv2Vo1ANgqRywAloMD-CN3TsZ_IKykCdgzRDUg.j-UlV9egsGNV4z3ySABgZi42yMp07J_Ob3NOuGgzS0sg.JPEG/B9C35C81%EF%BC%8D65AF%EF%BC%8D4356%EF%BC%8D8C72%EF%BC%8D137F75B57713.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjRfMjAx/MDAxNzYzOTQ5NDM0NjEx.lGTWIfUwjZ4KCB8Ym_NmgeYw7EIbbM_m7ROkEDp0ZmYg.FFONPt_ZFuXlgGWSVMaRfNqkW1DKD8SAyGblKay-rf4g.JPEG/SE-05DC5071-B8FB-4029-8527-3405B7A6CAD3.jpg?type=w466' }
      ]);
    }

    const existingImages_k1844675998 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1844675998'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1844675998[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca30d1cc7cfcc1805af4faf4e56ad8a194105b38?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c91c6a2a72500fa8ba2889257b72dc9338608bab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfNDcg/MDAxNzQ2NjE4MTYzMzE3.PjVodofLLSPIgbKnTIxPCYx9kp2K7ftO00PaU80Dlrwg.IioAIlJK-SiWw-EZxt6AB90qug_9kOI3plClpWuG6sIg.JPEG/KakaoTalk_20250507_202627163_14.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfNjYg/MDAxNzQ2NjE4MTYzMjky.LsuqUIJ8OtoiJPxnEagB9lgiUe00pnMsHrlGC5rQOq0g.1pHU83vCOygoDlCPJ0bpKQ3kh9U_ITvFpQaKwWNj5mgg.JPEG/KakaoTalk_20250507_202627163_12.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTJfMjI4/MDAxNzQ3MDEwNTY1MzA1.R7eySA1oBCF907thvWRwl3_M9R0rj1o-TsKKVwOR1ncg.2o96zV6gtgMBMl-mph8VBMSraLmL8wqwWK5cJvCTyvIg.PNG/SE-28d57b3e-30f2-4fc0-8bee-28a4c61c9a38.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTJfMTc4/MDAxNzQ3MDEwMjc4NDg5.u7P48GCd9qy5if7LMjGtpFTma4TDczKcol-lFKK2pJUg.14kBOGFb8pyiaYgmEjIzlznzwDP12DWBy7wiKquWN-Qg.JPEG/SE-2F1C7A00-DE98-4B16-851C-B2E68761CF73.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTFfMjMg/MDAxNzQ2OTM4MjI5MDkx.Up734LcFMAj3L0prbDq7uXv1F88sq7hvRTlZTAneSdog.QpOqDzJM3pFUg2ysxnEVrT1XiW63V19IIBiFYZbZiJIg.JPEG/IMG_1129.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTFfMjMw/MDAxNzQ2OTM4MjI3MzMz.ddUF25UsqHWesd0m6if3YomzQScuTx9XxgEHGprLlBsg.B_xW3hFhNJLMiDlpQ01KcTvdSoJjGaE2kBnvegiJGnog.JPEG/IMG_1128.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjRfODEg/MDAxNzQyODI0ODIzNDEy.KufD62zNQzriiM3Ymma43AgueAS4gSPv-1uYVmzDwM4g.kLrUI9Py7c9TTASIoUjDH6_koXawHNk15ZUHuB7Gdlgg.JPEG/IMG_3266.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjRfMTYz/MDAxNzQyODAxNzg0MTEy.h_uat3-h9ivUKZ6pE1LChjM0JoqMe_MNU3i0hGBQ0eMg.tEmSlSz-NPTFmK-Fh12Fm2NhQp_ebZPpO7xTcGtSff4g.JPEG/output_2476636139.jpg?type=w386' }
      ]);
    }

    const existingImages_k21243751 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21243751'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21243751[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/0EDE79148FCA40E69D1EAB57F6B691AB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f75508312dc8d2566d02161e0fdd09a1e364bb37?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1fcec291521d916983f564e090f3759cff36432f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/834c31ce3460564bdfb57de46299b2e7d0f70dbb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTkx/MDAxNzY0MjE0MDMzMjg1.KvjG7t65ftwbF05l8vnc1RdmwyS7m_ts373kO0_NyJgg.3pK-4YnfsO207xShAvxqguzmqT3LWVAmrEVff2J_uxkg.JPEG/IMG%EF%BC%BF3649.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTcw/MDAxNzY0MjE0MDMzMzg4.30EnB71Msm7ZzSfdlFKYRZ6JqxTn_auZat4y1Ni_pEsg.6AX3c-nyOfVpTr5ZTu4OvpSxoG9Tv5MxWY5H-mCpAFcg.JPEG/IMG%EF%BC%BF3650.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjk5/MDAxNzY0MjE0MDM0MTE0.igePdUm_DU4kNrv6_bWqRsTIapsmkUafqgPDipQ4BYMg.U5z2Z5xSyv-UZcm-Iq2PLxTqhmwiX-Z-i6D3AWvGbWog.JPEG/IMG%EF%BC%BF3659.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjM4/MDAxNzY0MjE0MDM3Mjky.CTKT-YA5nUnLAlKjIMzwzjXaCzhq0tDBZN3UAEC28Uog.AdXIUKVC6wiE7AeVD3OBXmo0G2hB_sSW_oI0rEFdCz4g.JPEG/output%EF%BC%BF227865316.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTkz/MDAxNzY0MjE0MDMzMTcx.NzgRCjnUe6cvImITTr7Aa_UNlo-TiukKYG8RBRvh4ikg._OOGoyUBMFrNrykgPUJYcN6nAME9hCXFihF8aFaTiSMg.JPEG/output%EF%BC%BF85980642.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMzYg/MDAxNzY0MjE0MDMzNDI4.hncxGTEvRitg4Hl96JZvnWP_S7EgYPHMSWV6AcpsecEg.owhG3kwdl7N7BdEPEPMRYh3Fj6pPJMB1TGeAN5k2UMgg.JPEG/IMG%EF%BC%BF3662.jpg?type=w386' }
      ]);
    }

    const existingImages_k820507070 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k820507070'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k820507070[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/282611c714d481303fcc8016b42bca2408a6c91c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMjMy/MDAxNzYzNDQ1ODU2MzY5.RA8OboVfh-G3fEt_KEcjK0AoOqwy-2bJNHTKBjCPabog.B1rX3CUfMgu6haR6DRj9q4ywko1m9aEK34vi-Z_kB3gg.JPEG/IMG%EF%BC%BF5891.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfODYg/MDAxNzYzNDQ2MzA1NjA5.25xAayuNPaF5vALi4p10Idprt7fH_ip2x8m1RLCsWa8g.phYYIUUnfJiIBBZUlWckWOXLMZ-P3lzDqj2NleRfp90g.JPEG/IMG%EF%BC%BF0737.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMTE5/MDAxNzYzNDQ2NDQ0MTMz.3pZ1u6vxHodbIiweTUxWv7bkPKbPl4Qr9urxvZ8yt8kg.gbYMqMrEmCzfFAIxKuhrAC48xdq9u8AN3IFNh-vVZo4g.JPEG/IMG%EF%BC%BF0722.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMTkg/MDAxNzYzNDQ2MTI0MTk3.g1m_nrkgSbIQer8bQK9DVzR_56fsoy6N2Xiss7A9Lp8g.BD0iFChOilRMJ0mOztY6vHn3xwkB2glUk5_W5LAzYGQg.JPEG/IMG%EF%BC%BF8982.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMjE2/MDAxNzYzNDQ1MjUyMzAx.T781SC_lrecs8lT8F24w4O9KL4YXeWJnF2pLmo823B8g.-aS0EO74-2MXIyyF2nyKn3fiDOqrDcfiY1uNPT5KnG8g.JPEG/IMG%EF%BC%BF0255.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMjkw/MDAxNzYzNDQ2MTIzODY4.04yjIHTDhox49ehHhSWvHyRFZu4vMNXQGsWwpPu-W2Ig.F4Sqkp96atUQgzgWDEVNw31nrhMzGhAdayKhNgXJv90g.JPEG/output%EF%BC%BF596093093.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfNTUg/MDAxNzYzNDQ2MzA1NjY3.j_GVQJgY-JL5EwFQRM60Cz0398ET0Q966oWxAuoZH9Yg.2pIvHORW1ck7r8kRjQVEJPpUtPZCoNo2x6fF6Ni50ykg.JPEG/IMG%EF%BC%BF0734.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMjg5/MDAxNzYzNDQ2NDQ0MDA1.cQ6D3_a2dORqJcCpKQMb5kkmCY9ZQ9VD70KQfFW4LGQg.xfDfB3IMLWETdAQV9wlDKx86OtL0NmfBkC8XFg0HRsYg.JPEG/IMG%EF%BC%BF9256.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfNjIg/MDAxNzYzNDQ1OTkzMzQ0.zeORwXuSjm8nbTSJkJ7b2gi6TxZhR9My7YzZPgzgRM0g.2da-moN_6-bwkE6P-42-OPirdjj9l7nrY4gR6vQ2yckg.JPEG/IMG%EF%BC%BF8228.jpg?type=w773' }
      ]);
    }

    const existingImages_k996176623 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k996176623'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k996176623[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fbdc2028be4061736cce667d2a40d33af3d0a310?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dc5dc5dcbefbe51f5fc8a6c3a72ec3704a267e51?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e914b0eb2069a281171430d5f830de8e305bf167?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ecf57df12e3e8556c3b17cb0b703ac85a25a8a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c3a4a0a4d55b408f9bf5ea525dac2b365fecc681?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1831018be21d3b84b2d161813cbec312ad810891?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MjFfMTg2/MDAxNzU4Mzg4NzQ2NzI1.MQp9G6p3Zp-FV6WgEJjeag9emVGShWHlOrQYRAwsElcg.fIrWBiO3RrB80s3VHlDumNQsKOsoACuZujB_699YAZ8g.JPEG/output%EF%BC%BF2287377728.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MjFfMTUz/MDAxNzU4Mzg4NzQ3MTc5.NMK9Z6bXZsPQlVJou2d0t3u28uqfH5_bdEZYnCnRtQ4g.cNGDY4OB9cfifFyJKbBUtqdcX8_GbJamsMxr-XDUEeMg.JPEG/output%EF%BC%BF3543177369.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MjFfMTgy/MDAxNzU4NDQ3NTQ2Mjc4._R_sLlLJDS8284Rjx2Y1DQbc5Rm4CY_9LoUF59oIptwg.nNKS9hZIfGx-te6zQpgKKBlalK1AdPjUaBUfRNmb8-Eg.JPEG/output%EF%BC%BF61505940.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MjFfMTAx/MDAxNzU4NDQ3NTQ0Nzc0.NPEoqbLG6kzAEoKlQ1w5xNrPhzqATAJRTMESzgbdUOgg.bL_vOZhsMRijzYn6hvpaX2oiJq_JBEntZGqC7PAnVl0g.JPEG/output%EF%BC%BF627399864.jpg?type=w466' }
      ]);
    }

    const existingImages_k660668538 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k660668538'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k660668538[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce5935371d9d61d257f63c44217d51c806b998e5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2efc48111b06e846767ec04c0bb058dfc08cfc90?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe93c7d8a5862bb8d648b093099569ce6efd2d5f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ab4637ae2be63a137ce91edde6e371f51c89928c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/baa64220e6bf7e1603e3b3f43cc2cef4bebe94df?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9f6b486e0fea03c8d3bf1d48cf2eabb6a49ca878?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c791d52eca44ee95780a0266a2412b8b88d162eb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aedbba5c56ba55f27add1ba694b62df5d3a078b8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2f97813cc7f3d91d183471c30e3901b436847448?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/dnZ5lJ/btsO2XgmZzQ/mfRIpsE65rqBQZJ1tDcbz0/img.png' }
      ]);
    }

    const existingImages_k16549731 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16549731'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16549731[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6b7148d80cfa0be9cac076895f67cc7d08105b3a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMjc1/MDAxNzY0NTY5OTcxNDUx.3bDBCs-rsWySQ7sn4KCseY10CqsGo6nq30VF7ORdwpEg.Df1VFMDZBwN13elLKevPdICv0fyYaBByQxVTYufqGo0g.JPEG/SE-C54CD9AA-669A-4224-B1A4-E57B517D920C.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMTIy/MDAxNzY0NTY5OTI2ODY4.NBWjiztIf3DDvVRnPrrKNEF_cDDGEsvieQ9iwPN0HPYg.uRKsnc4CkTTIJBIrKY9rFeZ9hBzp2LhhP_EpPd2Ju1gg.JPEG/SE-F021A211-F0B8-4B91-A75E-036FB3EC5B76.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMTQz/MDAxNzY0NTcwMDQ4ODYz.kcXpcN3PTL3IdiV5-F9y_rTJheakgkNTZdBzMIRhxvwg.OUEk_4mCGhTj7MgqzfLcHyKxNj7-MDd5Skl6jdSbmTcg.JPEG/SE-1B629663-7783-45C5-89C7-B359936657C5.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjZfMjk3/MDAxNzYxNDA3OTY2Njgy.e0XBxTrPjf-GXjAxWxa_U7i4NgJVj_BjJpxOgbNz7wwg.Sw5MuYjtAfHb9-GRUCo4plTtTgiR0aqk88sifx3W4t0g.JPEG/IMG_8986.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjZfMTUz/MDAxNzYxNDA3OTcwMTc2.JjSNeL8UB1KnreLeLsq_pZ6DXbg6KyEL4y9HNhekBkYg.MpnznVaMj9swZVOTXUM4DB76L3I9WvAfgfUAw1e4lwwg.JPEG/IMG_8989.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjZfMzkg/MDAxNzYxNDA3OTcxNjAw.fwPexGimPZHoD7uKsSPSz_qDLpTFrBM7tv0qpCD7mhwg.TRKtCvJZsHbYFpnegF-19VAhE7vcB-8WPJIChkYwLB0g.JPEG/IMG_8991.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjZfMTk2/MDAxNzYxNDA3OTU2MTQ5.DyJ8WfRNIV3UQLkjbb1HYF3gQ9qdD7UCPwx_3_05JZ0g.Ub0xeZHJu83lJjKM53bwtwKcBPXrfMBZyiXsqxJiP6Ag.JPEG/IMG_8982.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjdfNTgg/MDAxNzYxNTY4OTYwOTY2.oKgmPy7LyBFUfTFOR2Ghz-GIWDRzYbi3rVdd4hgZR1Yg.9RGkfsKPXSscgNYvMJbbeU_ahafAYHA322IqV7ptdlcg.JPEG/SE-B741685D-4E64-4547-A9C7-C38B86C4BE23.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjdfMzUg/MDAxNzYxNTY4OTY0MTM3.JBtbStMhZMKcndCCAtPP-z7czyG59YmFKtI3YOpGJrgg.FRRO6sW776ozNAUQ4F3u30YFTNI7hYAnKW-_aMHc3ssg.JPEG/SE-112D244F-C1D9-44DD-9E88-9AF9EB915BB6.jpg?type=w773' }
      ]);
    }

    const existingImages_k1218788195 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1218788195'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1218788195[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMTcw/MDAxNzYzODYyNjM2NDEz.HVkF3Q0V0UDv2vbi9M5kfG5NlJh1-Z7cZkPbINYDBvYg.c8RUoXkY5O9ViJuICdh_DIUZu6L9DUTQsJs1Gw0AKKUg.JPEG/SE-9293363A-D2E6-469A-9571-44E545524FCC.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMTQx/MDAxNzYzODYyNjM3MjQ2.drk78itlOhDJ6-7RRGQ7SV-WYXlD-FrwgWB1ajWH3nog.iyae4VQTO1bH7moP4GAjLSRCM9W-FpWhUXgsaSK3B6Qg.JPEG/SE-61AFA12E-0E0F-4BE9-9DBF-616DA0CFE88C.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMTEz/MDAxNzYzODYyNjM1NTU5.JhydLVj6AbBDB7BzwiZAoNEI39VuVkms85s9cAH6OGIg.nQIs3Nk71r565tE8_KJ7AX928iZtRFSbzbLbM8MaMKcg.JPEG/SE-641786E9-6AD8-48B6-9D95-C7E0A8653855.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMjAw/MDAxNzYzODYyNjQwNDU0.weTAVXmPiExFr7TxFeu3syqabSl4FjCSCrmRAFSuD60g.UJdee1Vg0N1nKhQnP-anuSKTrtZHw9zRKxDZW2xjqVEg.JPEG/SE-4002C0B8-40D7-4C14-94E3-6E9680EB1903.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDFfMTY3/MDAxNzYxOTcwOTgwODgz.92bHIjk877phJpspSmwe2riYsGNtB8mk08Gie8EPG8Eg.2ifDtDdR7noUhcYDFHWDWF0KLMYB4s82OnFf1Io5rlYg.JPEG/IMG%EF%BC%BF6605.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDFfMTUx/MDAxNzYxOTcxMDE2MDY0.4LSsv7LiILS9DI48fIJKadMbBP-6tknjrJ4reDEa4vsg.-Sg88J2j8j8SYL9e9SVl_p4PDnjUbZchpkTP_63BhkMg.JPEG/IMG%EF%BC%BF6830.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjdfMzcg/MDAxNzYxNTYwMjUyNTU5.w-L8gX6uO2XkVFPmd-_kyTHiRh2lnG8UARQ0H_-eGp0g.DMYN4N4EEFVokYPVixWFiZFYTqM_TzG-M4EFfqKgWxYg.JPEG/SE-1A51B43B-BD38-4D8F-8D30-ECFD54F15B36.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjFfNTcg/MDAxNzQ3ODE0MDUwNzg0.dQxjiJyVPm6pF8CVCIrAGrVI9FnD4qOZdD1Cg1dZXzkg.YHva02K3d1RpClMAr6qagU6zrjA6iiYxCtDNrRL2U7cg.JPEG/output%EF%BC%BF4080605339.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjFfOTQg/MDAxNzQ3ODE0NDY2NTM3.9R2kxH-bqBcHd7xSu_-QRnqLzk_ESHtzz9nrEqnrzUog.PRI_WXj6PJ3Ibcz6U1dD99htARBfRGWitv1t-MUO2i4g.JPEG/IMG%EF%BC%BF4590.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMzFfMTkz/MDAxNzQzNDA4MTQzNjI5.7Pw93r-brqmDtxqfeF07MAaWXOyIkEcdGanE3EPS2vkg.EAeEFTezuJ6UVYcZ4eQegbN0_Zfj5ICBZ97PYoA3sD4g.JPEG/IMG_9748.jpg?type=w773' }
      ]);
    }

    const existingImages_k12053650 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12053650'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12053650[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/8279274AB51642899D4D3B684DDDB4A4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAzMjNfMTU2/MDAxNjc5NTAyNTM5OTg5.1tkvbvCPjd-7-HKz-C0p8eJFjKvWZZpWSeN0v4hSJmkg.uEA6VXM1I3QL-qF5gO2fWHKCu_AOW8Uo9mdRYeyWfLgg.JPEG.damin0722/IMG_7496.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAzMjNfOTEg/MDAxNjc5NTAyNTQwNDI0.abGkudP8XgVHO26UFCdVil66HIGI_4NNY_BeS6evyjMg.1VkmZHzpchZK5cu-ZWoLWoECTfNUEpQgh6QWFdJKQxAg.JPEG.damin0722/IMG_7499.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMTlfNzQg/MDAxNzMxOTgzOTExNzM1.vr6JqqeG5siRT6FFBDZ9J-ybcpPczR7CIB5LrbePdSIg.DaZYDrCMWReUxDpWBNV9_wSgFij6pinzqdVh-U7kvr8g.JPEG/KakaoTalk_20241119_101440495_18.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/987E3B2356AE4F64A47E2C67A16BA6B6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAzMjNfMTI5/MDAxNjc5NTAyNTM5OTI3.ThpxYJmyfSwFyIMz9GumRDVamj_iyygPg-rYvv7-sWIg.4YARkTQlQ8NdascvkRTwb2iYhhqGSxe4m_27xkdfDVEg.JPEG.damin0722/IMG_1392.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAzMjNfMTkx/MDAxNjc5NTAyNTM5MDg5.PsE7v3Vsw0khdutjUpcpga3FZRHFmf0enWh1cgdZuHwg.oAkcP-gRv6eDk0QSUG_eiRvbfwg-B3Ki4EWePgafvJMg.JPEG.damin0722/IMG_7095.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAzMjNfMTUg/MDAxNjc5NTAyNTM5MTM3.UC6eqzGhD9Woe0is7p6m1Q1VXI6lyM6zEPuhYu465YIg.SacaC8dblJ6nRE-2n7mY_ZzawtM9VtxX88GkxZHkTvsg.JPEG.damin0722/870C839C-8628-4350-84AD-F0C8D4DE8E88.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAzMjNfMTIx/MDAxNjc5NTAyNTM5MTQ3.x21fueVJQ2cgjniYZpps8NZK8bou1yXk8H8vJLeH3u0g.jxNEXzhxlkKEW5xMlbXN9MAfe0tYDyiGiWHA3Lx1cvgg.JPEG.damin0722/5B4DDBEC-91E0-47F5-B4EF-B8A7BB4B511C.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAzMjNfOTcg/MDAxNjc5NTAyNTM5NzEz.z0sIkpWQMXlqZfVqIldlVfftp7ffIKhsGBAS8KDeIB8g.EMBkLE-Bc3-VTmudJypapntEMrmYMdKrD-bS2T72JlMg.JPEG.damin0722/IMG_7088.jpg?type=w580' }
      ]);
    }

    const existingImages_k16664017 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16664017'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16664017[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMjgx/MDAxNzY0MzMyMTA5Njgy.vq6P9F-VK2eWDUY1h9NbFD3WI80J9Q6EcCiaKBRL5Uwg.MgCUe_Ew8-YwuZZa1_hYuqPzwP1SB50hMwPaCf0F_r8g.JPEG/SE-26F6440B-DEE2-4A0A-AE8D-C3EF313E8DD1.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfNzEg/MDAxNzY0MjA0NDY3NzM3.Eb6JJ9_PNFJPGRqlthx55DKVunb-bhan4625LY6yhW0g.kRUCXYgfnhx1FRNmYE6IeV6LXQ-VP2b1Kz4fyvp4Ftcg.JPEG/IMG%EF%BC%BF4046.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjIx/MDAxNzY0MjA0NDY2NDEy.393i0X0j87vEhKTFTC-ZP9qI0n_7y1G5p6WdVRtD1asg.AFFYNp2BnB_AenlH8rPtHZL2sMO0pifq8ME3qWo-CIwg.JPEG/IMG%EF%BC%BF4045.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMTQy/MDAxNzY0MzMyMTAxMzQz.eCfyupES9QolpX0P2_DFT-xBeMf_eLEpVGcyrGVJiS4g.lkRTC7iwlJaKvBZAO9iaezRWogevQlSRVTy3h4ya1AAg.JPEG/SE-9DD925FB-9D7A-42A3-BE11-09E9AF02EB9A.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMzIg/MDAxNzY0MDQ3MDc4NTYz.3blsugYlambL7-4LG-BNPLhX5AgKi_P7mt6Ubs59vckg.ep-Ofi2ywCM1v1PNtJhycssRg-JosD9qn8eHjiimdHcg.JPEG/900%EF%BC%BF20251030%EF%BC%BF172015.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfNjYg/MDAxNzY0MDQ3MDc3NDE2.Lf12VrdGL_zpHL2ACw1lQ13s22T1CSK457O7EK4GcTEg.5uLH5bsa2__SJqYlSro58goNiYa1hbEBTSGLwk36Nm8g.JPEG/900%EF%BC%BF20251030%EF%BC%BF175258.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfMTYw/MDAxNzYzNjE3OTAxMDc3.EvX9lL2902eiFVWoFKMGuJF6QWvGMys4fqfMjhDe4Awg.w8NxidVSYza4lyX_SDEyJ-jy7avf3qWqH1YWkrQlbcUg.JPEG/IMG%EF%BC%BF3556.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfMjIy/MDAxNzYzNjE4MTM4MTY4.CBspiHB5NzDIj4P8h-j1Ex2SEa_tCrCcV1Tq33rhnVQg.cawN1p-kCZCYnRMj5g87-hd2Z7B1MuAgNKHA95Rtk6Ug.JPEG/output%EF%BC%BF1302197038.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfMjIw/MDAxNzYzNjE3ODk4OTk3.mMpQkGeKh5W4vrn9kICPI5wI15LfqPu0MogipBabn_Ag.eRsMbX1c3zu82Sw_jzqa9k8_u2gnDYaIvMCjqFlSkWQg.JPEG/IMG%EF%BC%BF3529.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfMTAw/MDAxNzYzNjE4MTIxNzEz.iveCH4HMMs5Rs2y7cfBOHRlz7EJut2we3TA4g8t-_QEg.9oPfMq_HudWIW9ZgvDVr2CFoOTPhsb9bdOBnwmfJnFUg.JPEG/output%EF%BC%BF3255376199.jpg?type=w580' }
      ]);
    }

    const existingImages_k1696274858 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1696274858'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1696274858[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ccea613db170a88716827937402823a5c43ebc9d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/95c655f7429aba7947fbc6e3a7c02297585a8db9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3668c1e9dd27ebaf8a97b55f05fae74a4aae5d85?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff40957322f02b080cee5419e312c342e1d5632f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e68e512e7e9097d5d263d995cea5e367390418be?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d3ad2a1a439ccc5864cbfde832657e1abb5b5da3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a72cb4ebc681284302e82bcf9aa706de53352ba2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f33a91baaeff24cfb5817ee0008269d981621449?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0509f474f852961e837d186a2a00d18f796f9d4a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f99c50e2fc14c78c7b2597856fc71d1e9e337dbe?original' }
      ]);
    }

    const existingImages_k1575631836 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1575631836'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1575631836[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c149da8c707dee7fe4b015aa8ce72ae3bde7c092?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a58a309643adc787b361be3544028d9b061f261d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/35783bac6b5c445d3a8a117599f067ea0939cb45?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2c61010c15ae288dda166f2531d96166cdc6402a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fba2e5455917b70a696da26d2d62b054e91fb248?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ee89148624752912c3892c3bd9b939cb170da604?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df99626ff8ab0bcf89b504e896a125e4f9a373e1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/06e24471123081da2b099a03c5ef6d0e051f752a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjlfODAg/MDAxNzYxNzE2NTk2MTQy.XdEC6mxE1g_ENnAwmMFKm1Nnf6wTHBA1J1QmF2X5YC8g.f9m9nwZVNiN6Hf475bem9SHWHeJDngQzZwA8NsA53fAg.JPEG/900%EF%BC%BF20251028%EF%BC%BF191458.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjlfMTkz/MDAxNzYxNzE2NTk1NTg3.YsB6Rg_Bm0fmAjwk5DdSmbn2Nuj-r3w6ux52MqTneRog.He2uAXrbVmRXksrEGh6VV90tTmZpSSGi01bp6HOEzbcg.JPEG/900%EF%BC%BF20251028%EF%BC%BF192152.jpg?type=w580' }
      ]);
    }

    const existingImages_k24923695 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24923695'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k24923695[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3f9ec5a71a760379d52b674ef43d9c5a8cfded98?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/994a236768063d806129af01de75bfcbfb98b031?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/69d2423162bff4ef85b540820bf772787487ee52?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aa7dc914bef40938fa3669bd086cc8ece985d1c2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/54eac8c6e984ca906599fc60718269fedd55b4e8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/022078c47412594202fe404e168b5350849f79c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/61a7c0ef9a7cf217b631b980a4fdbaabf88eee3a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2437fc90eef94aa9637972ac4c35f0099f3d48b6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/84866e2c8ecb1660e5c93e6c21af4f10a503b0c1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcNAhWE01_XXMNnud3N9me4uREk8Qki1_img.jpg' }
      ]);
    }

    const existingImages_k1135113992 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1135113992'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1135113992[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0E4015FC82E24CADB92FE1470B625FF8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E5F3D01B8D5C4964B1A32CFE3B93FC60' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5EEF8D99797641548C30C752D009FAFC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EE1D84569E7843B9B8CC65CD26647086' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D9D1323EEF8B47289EB6632A38DADBCD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1fbec62da306bfb3e0a3396808d8f27e7a4458db?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5a9fd621bde54fe8f294ec99f84d200e5861f08c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e37b93fae1681ecc3a84be6f68486a362172da0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c6ec31071136d1753000ebe2eb3a5424c6e6fce2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b8c1c3371fbaaaabee307d63d4b0f0f414134024?original' }
      ]);
    }

    const existingImages_k8661341 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8661341'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8661341[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMjE3/MDAxNzUzNzYzNDI3NTcz.GgYmBjunjVn6DBFIY8Qcb98qONGJxz1WWMKD4Zk1VLcg.RJ2jSG-3PauSQHjwYJIfVtnpvOHhBbqS8lzowPuQaq0g.JPEG/SE-61B4AD9D-73CF-45CE-A49F-69C37A7609B2.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTVfNTMg/MDAxNzUyNTg3ODMwNDU1.LOAVaaAMpx_BowEeGV_hSjDZ-BdGn4DwddWj0A_-Phkg.VFVzwExUlP75D0nVUrJXC34YPMfc6g92BzawsXx3-64g.JPEG/IMG%EF%BC%BF4343.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTZfODUg/MDAxNzUyNjQxMzU0ODE1.aJe3F-UIN28gfoyPgQ4KJvsqwC5t31WGRSLvGETJM5Ig.Xq8zPUNNbZuTBrKUliiQcXIer-ua-yCju_LnwZQlF1gg.JPEG/SE-6BA3FAB9-BD87-459E-893C-9588341107DE.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMjYz/MDAxNzUzMDE0NTEyMjUz.sPn55VpbnGelkAtwkSax-86GM45UU3IGl5J9yGdgVaEg.9xto1SUN6BAHGG6PahhfIx_DZY7CmWYJCkfBAJNBmsAg.JPEG/SE-397220B5-675E-4713-9F5F-0FE65A337F9F.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMTY5/MDAxNzUzMDE0NTAzMTgw.iER6RlZY8BSWK7PugMas3HQ_LqVk95TxcXEjOrdtIMEg.FPUrLIBhymV1c0Hy0_gx5N2LkbclEv5We7eWNj6zHbYg.JPEG/SE-26351211-A354-49F4-A036-A75CE3A07E4F.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMjU2/MDAxNzUzMDE0NDk2NDk4.PleVqLMD8e5s991FqjOYFFNqdAJBuq00VvXu0kPBoLIg.Zi1wUhpUqhJlsn1TmhnG23NatB_sQL3FxcyVd_JG7ikg.JPEG/SE-F8567377-98CA-4164-873C-3F552AEAD2D0.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMjkw/MDAxNzUzMDE0NTA5MDgx.ysQNd9DzMOzRqYH7oz4GeeTS7QCJpgwxnLD--ApSdSQg.6iwyCiAlKyr9ZayvH2QqCt1U6KKgsaECXezlGuZsjh8g.JPEG/SE-EB3B7622-9790-4909-B3AA-249819C16684.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMzIg/MDAxNzUzMDE0NTAxMzE2.YYN9UCaIYpKzlUuf_afGqztsa16DARbTC2vshcTisAsg.m3wypVwSecDZvGBiDyx-uNAlllgzWxa7OH1oQMAZQj8g.JPEG/SE-2FD45264-F823-4998-95A6-654826CBE28F.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMTY0/MDAxNzUyOTk0MjQxODk1.npqWfdLFcEzB_v26eoNEVc1UEWSai4bXTUuDTiafFPAg.kaFDbPhzq4RBpmWuNIcz10LPiU9OsyRvgfvWi6HxocAg.JPEG/IMG_3296.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfNDgg/MDAxNzUyOTk0MjI4OTYz.QlJJzohlaOlugYv1EeS2fs-7vfhWcLHirXPAVwhxkgsg.86SzqJOC9m5suPbocP_aVn8oMIgRoG3M426ziqHqJ98g.JPEG/IMG_3298.JPG?type=w773' }
      ]);
    }

    const existingImages_k18179603 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18179603'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k18179603[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8fc99235ffdcac61bee863280e547b9d5cbf3528?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/273fc436628b8ef1dfc005412d297f82961cfa79?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/850f986b83cf6972e9cc5e5259faa4af02524928?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0e404c81ef44079b17d70b6d9a16415c23bd4efe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8d4c74c8c44cc6f4afb11a6fc392ac6d102b1e58?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a30825cb16a8b348356d75c443cb6b7f47394b5a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1448ea394b7cadf477933969f057a01f356ebe0a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a97f0f7b64194c67532895268f80621f60824065?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9e78eed26f6b6d63c3a01795489957609a2f70d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/253405ca4d59f949b14994a533981eb3bbf8b70c?original' }
      ]);
    }

    const existingImages_k2142329234 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2142329234'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2142329234[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fd0aa96b956fdf93c6d245ce5b3cf2469d6e2649?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjZfOTAg/MDAxNzY0MTMwMTYxMzE5.xoCn_3v5by27IQ4XxM9b8QDIUOFVU7EITM6tHO-3VKcg.vejAsEz0f53RQUi8SxB_HKYSxTc6uPMnBLKyrperMQsg.JPEG/IMG%EF%BC%BF5317.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjZfODYg/MDAxNzY0MTMxMDczNDc3.1FylL4c3XYQBG9Oi-mAigMRZEs-S97RiEl8sdECJwbQg.soBpfnaFe_0wUwIubaxYY_1fCZs-XmI3rnDiMAC4lvIg.JPEG/SE-02889AA1-2276-498E-A99A-AC80756BFD06.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjZfOSAg/MDAxNzY0MTMxMTIwMDA2.hHul4y4vUPil5go9ecDPioaI8xrb9Ui-WB8BUG3FAl0g.3vHWS1svTG6aahP2mVFtG5DLn6KgAr7ACD8SPLb9c9cg.JPEG/SE-97078194-6433-41E9-9EC3-AC2A5CF97CDA.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMTRfMjQ1/MDAxNzYwNDMyMjE2MDI5.HwJjBQra8UarwgZFIfYe4i8HpejO6S5sGBlFY--fGPog.bq7yj0Vg_Uon2AfeY0LWkDomXAV1hnzevCiAdDV6qMUg.JPEG/IMG%EF%BC%BF2002.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMTRfMjI5/MDAxNzYwNDMyMjE1NzY4.A-TVRvB2xIUXwY-GmTLSqbBEWms_R6z1dCP6bxV-zNEg.UOSveUgmO3ZWvB2qsOhwpbDdcp7vN73LjToNiLobEQUg.JPEG/IMG%EF%BC%BF1999.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMTRfOTkg/MDAxNzYwNDMyMjE0NzE0.slMRcilzFkwo0h3b8yx1NabCLre-IEI_Mw4V68VEzHgg.bILnic2xyogq1jvLVrqi-K9vkqYUaXNps2RXZieR6y4g.JPEG/IMG%EF%BC%BF1993.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjlfOTgg/MDAxNzYxNzEzMDQzOTEw.7vsnTqxEX_ENeAfljC6aH1GvfEsJvyiTIksMpBAcXp4g.Q4KW1RMnPxusAUfKD-jd7oQBP5GfdWRPxduZTSG7Sfgg.JPEG/SE-772355C4-1F29-441B-B827-BD539AEAE2FD.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjVfMjQy/MDAxNzYxMzk2NDE2NDQy.q6aIBeE6ZC4ATfGVG9cEieWaF6pApCYDZlQ-YFDZY5Yg.-Ief4JY48dEt2G15upnzWQBVTZ9oz3Lm1Meuo2peHRIg.JPEG/IMG_6950.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjVfMjQ5/MDAxNzYxMzk2NDE0Njky.YmhJNKKXMuDGgUWnG5qyoVZcgJwcS0YLLoQe-WD0JIsg.8W57MkmYcOoWUZCGdQbYmR6OCy160C2Ye9OoqNQ3JYAg.JPEG/output_2038914619.jpg?type=w580' }
      ]);
    }

    const existingImages_k27173207 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27173207'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27173207[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/59ef2913aa1e744e687b52a2f635c3cfc7fa2a66?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a8ffc2771d9ef6dd916cca8ddca41e1af8820c29?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/53546633d6e719c95acb07f706c95b4ba6c6d295?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/188e9fb3b1e18a5772816314ac1dc16eedb74191?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/224ea761ebfd47d3419d37f121daa7ebc579a5de?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f304c8d23e1e336a45c9e9a30285c2215db779c4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd79aa12f074e7f109b5d6410b7e71e2ea0315c6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce9bc68f4edc3522a62bb589fbdf4a5ef3333ecb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/12ab26661d46433b2fe4b457706f6ebf06580001?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDJfMTYw/MDAxNzYyMDc1NzE5Nzg2.d8oK0MKc4rlQ9TWoyfkkLJhKXXyjTTpbZNKBZnWK96Qg.6ZHlYhCud6V8aZwaSpPsKXWKRWqxGyC1P9z3sMYCGYog.JPEG/SE-D0D36D9A-EC61-4134-8A50-C1F9E98B25D9.jpg?type=w466' }
      ]);
    }

    const existingImages_k1314055071 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1314055071'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1314055071[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e31cb8ae92d24f46022e88b3f78fd4addabf8b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/62413bf411bbbb8cd8caea1de2806e48217c978a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f921a3492761623e779b1153320409eb84d1edc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83df81171f54c79d9d684b95645a1e90d65f35b5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/51df2a8146bafa1c60ba48e4f0ed5cae5956e3d2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/14767348c1e94f31313acffc9bef2b7addf1326a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMjIw/MDAxNzY0MzEyODY5MTMx.MlzKPRXEmBDd9bQdRVSy4oA63XaX_r0vdfrSTNGJ6wsg.5tmL9ILwILBFmnW6-ELStxCUpUcL1CaXKhLqAEgxZ8gg.JPEG/output_139987839.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfOTEg/MDAxNzY0MzEyNjc1NjY0.ALqpJZ4PUoEW8NyBJphC5qFdPzDq5gtbzczOOA6JzZsg.o0dcsXvuZOlC3-eZvj2VnCTT3cbQAabkymvKcVzVGMgg.JPEG/IMG_0512.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMjQ1/MDAxNzYzNDc0OTA4NzAx.fET9t9oL_4rLh2Pcl_RG8nsMbnFfMy6PcVJjIXts6eIg.FCecWox48APAUktdTg4wfQTdo0MOw3NQWdajj2jDDdEg.JPEG/3378228F-817A-4B7D-8B4C-21AC8F1481F6_1_102_o.jpeg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMjA0/MDAxNzYzNDc0ODkyNDg5.lG_iQDum5WaSfV2KgukLYDCYUs1Iro2SphcelW2xYksg.9D8dzMRAPBu4PN_o7b94YdnClpOk7uAbrb4I60JR57cg.JPEG/ADE84346-5B26-43B1-AF70-30E39E089D79_1_105_c.jpeg?type=w966' }
      ]);
    }

    const existingImages_k21525252 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21525252'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21525252[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/17864C72F27748A5A30403E282FDBB92' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDVfMzkg/MDAxNjgzMjgwNDMyODAz.vBBh28kN2aqMdG6-e8bW5Hmo2kwT9r231gsx1rE6qV4g.ZvjDtfVcEGgytxcmBQrPaqGfiNy3gvoq-q3_vP-f6hUg.JPEG.wldms8131/IMG_9007.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDVfMjA4/MDAxNjgzMjgwNDMzNzkx.AUW5pZ_BAat86e5V1VYl8kTdj7qwDIvS3v5Uniweengg.iSsC7CLhN30hGoJ4FzMlOrfMNucfMxDqkxe1iqnWD2sg.JPEG.wldms8131/IMG_9008.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDVfMTQz/MDAxNjgzMjg0Mzg2Mjky.bqP4tVkcR2Uj7WWNdSSYWQChQTgJtBpAHJN58zOgHdcg.-cFlgFr5QAt7mkzpQetW6_PXZZEOKuW_QAHvOxOyumMg.JPEG.wldms8131/IMG_9031.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDVfNSAg/MDAxNjgzMjgwNzU2MTk5.pid5QzAlsJIQvwzCqdkw--74q7fnzyDgvABFkJP5bLwg.SitgZwilWn7yp3rOIiHwlayfc7-FF1AIQuc4vojsAtkg.JPEG.wldms8131/output_3668643048.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDZfMzkg/MDAxNjgzMzc1OTc3NTA5.VtCdPHA5DGt_wC2uMNY0ZXENqgnG4XiWtzFdR8eN5bEg.IAh2gTHA1oOap8qrduDmW2Kch0klldsZNayJ05BP0Dsg.JPEG.wldms8131/output_1964328229.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDVfMjAw/MDAxNjgzMjgwNDQ5MzE4.L5R7vaFNPxG1lLPyrmM5ozBU5HCzqp-7yThfIPwxVuog.M4BrPw1Bll3leXw155uHmC63IJ8Zt0EKpfLZtK-tdhog.JPEG.wldms8131/output_3386741115.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDVfMjQ0/MDAxNjgzMjgwNjY4Nzg0.ndnss5Tno94EUcsWKyapslYOG4IbDrhlk2oN-MgRdNsg.eY04jyB6cP9KMir4SFiJjuaA7Vqxur2ocf082Violx4g.JPEG.wldms8131/output_2650182704.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDVfMTQ2/MDAxNjgzMjgwNjg5MDU4.3zC3FKjevfu6g_aI6OERPMzHyANTGST-a3Lk6d2dtFwg.QcykUhw6REE3dUvZ51XD7ShIPs_ZRvL_yn_GQovjl8Mg.JPEG.wldms8131/output_1867019387.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDZfOTMg/MDAxNjgzMzgyMzMxMTcx.H2keENS9aijusg-mxQQ_ubPvMW8_iw-YMEMqRsAugDcg.NRxp-adNES-h4753jPlOaf8nBQp9BOWPG_LtUJZOXVgg.JPEG.wldms8131/output_2569186442.jpg?type=w966' }
      ]);
    }

    const existingImages_k26973107 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26973107'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26973107[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6294c7a803410700ff7c20b21f381b7313caf2c5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2e6e1b8f815800c0110b7daf994874a571f30505?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2622547043052b0521f11b1009cdc7a2f157ed50?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a286e8fccc59ee7639a9473fc60de659ac2ce4ef?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c6a919e94b55e13921cb63c5fc6f72c0fe4ca235?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMzIg/MDAxNzY0MzA1NDk3MjQ3.Z0jLRiXFQhiW6sSluemhOAupW0IZNuVcAo1Qug5HsR8g.ZiHol4ogm8ItgaBDSktZ_kgS67aQ6HcVGqQVbVDHuz0g.JPEG/IMG%EF%BC%BF3981.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfNjYg/MDAxNzY0MzA1NDk1OTIw.Imx2Bl6Rjfbyu7q-kmYmHOTyNB9wEydzbOJ6LUb9rcog.u10IIpvADqbfPMXVnYUs0zk4L2znVrWuLdl_V1HaC60g.JPEG/IMG%EF%BC%BF3980.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMjY5/MDAxNzY0MDM1MzI2OTky.YAwgh7qJnIoTq4etO0j3t5dqKhpYC-1KY6WMbMpHK-gg.Za8SVjk70yNCLgdCfC6ML3ElzCoYXpopgO-3VRvOqR4g.JPEG/20251124%EF%BC%BF123712.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMjQ0/MDAxNzYzNDM3OTQzMzAx.e7iXchIX-xanLLoby_73umFdM18Vube9XjwTFM_JtUEg.SFZZ-Ow5-VDopJWPLxoULHTqMDzlLn0vBTC_B_buj84g.JPEG/20251116_184407.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMjgg/MDAxNzYzNDM3OTQzNDAw.GobupeicessAXOG3z6_RQPJenh5nj9i4BP2X3QpDH4wg.bMOhGBzOGq1wtD8E-2jwQP8ey2X6Z2rXWW-lkbLFVRwg.JPEG/20251116_184426.jpg?type=w386' }
      ]);
    }

    const existingImages_k1740157382 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1740157382'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1740157382[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/81EBB89B205D403C93C0007AEC4E584A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjcz/MDAxNzY0MjEzODU3NjAy.J8yjSLknXiU9k0s9h9VsB1k3kLvOHuI8yrdE_1HomNog.FSQiwo-fCnPAh4wUaUmqVjdBwB0ezZRwPf5iymvCwFkg.JPEG/output%EF%BC%BF2833853220.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfNzMg/MDAxNzY0MjEzNDQ3NjYw.H4I8fz7Hpc7XjH3oyfeKn1s2vrIAzbGmTvEKxk33cLwg.yCTa55LyzZ3zhjWqacockEoaA1VYphGnjkoqthGn1qIg.JPEG/IMG%EF%BC%BF9579.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMzEg/MDAxNzY0MjEzODY2MjQ5.0IULZWUcielcIzv2XEHer1Fwy8I6hFZM3RkzKBQ3xLsg.vnKM5oGZUBGDggEDfBVkM_wfCPfNXJyeWTHnnEGCeYAg.JPEG/output%EF%BC%BF1005689302.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjgx/MDAxNzY0MjEzODE4Njg1.OK2d_21NrnTpIZLuXnJCRYsLZeeKjuG3aeCnJSuLpTIg.pF8XESMmkEQWGZ_Hz7GI7R-MM8qKU6p0PgDX5CrcE2sg.JPEG/output%EF%BC%BF3342506666.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTYx/MDAxNzY0MjEzODc2NzE4.frYkmyFPq5kypTUWoulhmDXiMX3A-CXNepuHgkHUJscg.p4UNJpT96EyRTNDRsERmiOdT1b3Ompxi3vJIbRPrrGsg.JPEG/output%EF%BC%BF3608186461.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfNzIg/MDAxNzYyMzIyNzE3NjIz.mUAS-9HwtwUr4JMzt3nb-fPRf8jqjevFhWhz-SqqrjYg.hfawTU3O2tg-CZGp-ZidhU4rIwja_oSB0wsxb4eNNVYg.JPEG/SE-9a4dfc2e-a035-4053-b22c-dc4263debfcf.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfMjAy/MDAxNzYyMzIyNjk4Mzkx.1Z40wwk0K1GrgQWm96sSL3j5aG-ZjUPxdUMJ6Fo0Nbcg.cqRM_5mqBzFRqkvGbCd49XamGzLgVoAwdsxGAAmxtZ8g.JPEG/SE-725a9824-b872-4000-85da-43a63acc6f5d.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfNjcg/MDAxNzYyMzIyNTk4MjM3.Op-Sn0Bqhvtt2_XJxRl_MIiPxHZe2ade831S90m_3Ucg.krRDXelvGHOervjryuwnhiZ5npPsLBuIm5Dp-5Ep8HEg.JPEG/SE-5e16443a-47fa-467d-b604-4dbf6815b09a.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfMTUz/MDAxNzYyMzIyNjg1MzQ1.6L4xTdqJgF1vNFZSfI0QRbufxA05zExFHZ5l03ETjAog.o3JEOYQm8xGmRJ3tz-4TXKn3BBJFe3ta8JecK9ykqCcg.JPEG/SE-4f20be04-23f0-436c-b11c-561aefd2675e.jpg?type=w966' }
      ]);
    }

    const existingImages_k1907966550 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1907966550'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1907966550[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjRfMjUz/MDAxNzYzOTkyMTkzNTg5.8Qi9jHIqIQhkdKpiXnHGKpjeDY-IvjOrkq7NlfSpHqog.PxAzu4G2OjocnKzzZF1IwHruwYvtgqpBjz9fln60lcMg.JPEG/IMG%EF%BC%BF2428.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjRfMTc4/MDAxNzYzOTkyMTkzOTIw.M1P5su4oRoR7yTu_Klh1nuyW5QIDoZdFfjhkPsU4nA4g.AOOh3Nohi0QxA1F1MlHUjdhj8ORcDalqIhzIBsH-2rUg.JPEG/IMG%EF%BC%BF2442.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMTg5/MDAxNzY0MjgwMzkyNDY2.-EN4voEY_HNbZF-4sWDrDuzTV9ofLxWr5kYqnBYW62Mg.1Iv8JM56rwBvFJ9Q-_XpnsZGa-hSEolNqlUc7JrhKzgg.JPEG/IMG%EF%BC%BF2903.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfNjEg/MDAxNzY0MjgwMzg5ODIz.Qs3Oohe8nGyUj0AZfy4dhTcgQcHk_KVtQlnI1UBHjZcg.xivPXgCxBtc7Fz-NLKFvUv_2GPBambt17owpjSeek4Ig.JPEG/IMG%EF%BC%BF2877.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTdfNjEg/MDAxNzYzMzY5MDY5MDY5.aidVQkaga7O1vcAOSi_ql9pQuAv1jnZdQM7pOTZZzgcg.1XDrLU-ywb1Ov1iIRsySGjQs5C_z4trvM5fib1w7fTwg.JPEG/SE-b41e1d3d-7a60-4dad-a13f-a789c238fe68.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTdfMTYg/MDAxNzYzMzY5MTIxMzQ3.I5NtdYi2o89EuOmhxvNth-q08Cq04lOYzkkqN-E58Zsg.VcTCksNkRwxL5WQ1rb_I6ppKwi1aMLCf-IriCaa2FR0g.JPEG/SE-e2bfcd0e-68b8-4072-9c7f-f88643803a22.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTdfMjAg/MDAxNzYzMzY5MDY2MzE2.nt7Z29zN2h1Sjy5icsQiljeqzmacWuWmOEptyhC9ASog.M-b4vPevPd6H39slK7IQM8zQ2pon8WChLZz3kB00yesg.JPEG/SE-4b62362f-b741-471b-a493-3365b8316d33.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTdfMjg5/MDAxNzYzMzcwMTg4MjY1.nKsnTLydGXHXX8P21BCHC7CGOCKiqZHNziO91cdHt60g.M4zreV660TjGROVvShXf4gJ3Dh6zK_Wj5lZIjB43xawg.JPEG/SE-ca31eae2-5ce6-4c59-843f-7ab048c15b41.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTdfNjgg/MDAxNzYzMzY5MjE4ODYw.h_InRLkKTPNSd5RcIBT1PA6fpvFjlGpgS8QlN05afccg.UdnTG4NU5B3WS1pKYcDYxtE7L1QF6I5gbq2xpho5MvUg.JPEG/SE-b9b16e8d-b1a0-4c01-a10a-8bf8dfedd658.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTdfMTMw/MDAxNzYzMzY5MTA1ODM3.9KNGsGtzooiOkQPilFyTRTfXabCRXjDLaGEcZaZ-bLcg.eMatgH0Q37kGHB5blea8EsAEgkaW5pKoXYX4x0M7Vx4g.JPEG/SE-e579fd63-2153-49ba-a6f4-7d113a5719fb.jpg?type=w966' }
      ]);
    }

    const existingImages_k16444107 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16444107'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16444107[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b454e33aec7e8f713256d437a5a6eb673d307e3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b22752958ec8f0acb5d4a74831c948691e907564?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8aa0c8d7496b5c4c86e5d27ac6d4aa525997bba4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c5d1c28b5bba883fddd2419cd2230c093718ac0f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/81268926f1b50ef32130160a8f158a6e35146329?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b374d82b719d7ea7faf9f8f3aa96f4dac0dfbeb2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMTY2/MDAxNzY0NjY0Mjc5NzY2.lI5ItDC3A_7ah9JBKAW1QU9PBsrPnOd2EQQOW-7Kq38g.bSMz7e7nUKMdw14OKiY9JHCkPL773C3yz6p87_DE2nYg.JPEG/900%EF%BC%BF1764664193871.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMzBfMTgz/MDAxNzY0NTEzMDEwMDQ3.cDyYyGz1BN3qBasENLW359bWNsVkCPGC3C_1OoliwYYg.sHluEvgQxJoXite7eyAcCQ3azB1Qeq_aSpsBa3B8ldIg.JPEG/SE-d1f39aa4-84e6-433d-bafd-60bb888b0bdf.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfOTMg/MDAxNzY0NTQzNzE5ODc1.r7qhCZQQrzMRUSaED-kG_ppfO2_0Tg-54HFxkVcboP4g.EMjUmn9Bzi8IOqNF4ru2CK77YCNRftvIpoai9sZ_wf0g.JPEG/900%EF%BC%BF1764543531687.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMjgy/MDAxNzY0NTQzNzE4MTQ5.fM0lSsFeA9mMjl7SWrfxKxWUsjytiAuQA9aheo0C_Q4g.cf0VtOtaovp5eVqB1CwuQeN_yiuznIMRJUKZ_Fcwn7Yg.JPEG/900%EF%BC%BF20251128%EF%BC%BF174411.jpg?type=w386' }
      ]);
    }

    const existingImages_k1201308083 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1201308083'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1201308083[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6392FF80ACE947FAA6525E03A728415A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EAF1F08C68A94F749691A0E4E3E06444' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0315EAEE1EE14B6189C19E660AEEE039' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/42D22D65950B4E10A84D83EFCD4547DB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/95E03CA7822542F6B827CB2539598100' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3BD70CF904514AE5B66C94504D7056C3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/830E59AF10D1406DA104891B91F0DD6F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5DA21B39813F4055846BE73DE3CF9F45' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EC1F7A2FCA334392B43595759D1F9104' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0DD495C3F9C2401A8C41E5C87E0E7F46' }
      ]);
    }

    const existingImages_k2066571743 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2066571743'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2066571743[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/afb675c76cea1d96315f754fa6dfd5988104ab96?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b000798c32cdfebf51d12385afd11080a948a1c1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c44fd5cbd5233ca456135b01447d4dbcae14526?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed7d1140d303b179c024dc08e6fd253029a05797?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f8d7125c25fa7696085f2172df7ad69c8d57fd68?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3426eadee92900e711dddcbebfa5b81a8682e04a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/84de779be1745fb42b0d16a3f6731823314e31ef?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e6560e99710c553d739614b0cdce08b6a43c4c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ac2b50f11c1df9a47525cd1d17ae37a87a2c623?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqoJRsvg7t_ceraIFoYATVkin5kNlaV81_img.jpg' }
      ]);
    }

    const existingImages_k1797997961 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1797997961'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1797997961[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e1f7e004698b34eeb7edb5859ef25e2729e8c8d3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d78613e1c5b0d9d61e2ba27938423210f9132a26?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/31e7f777af2695c930dce367f5dbcc1d977b0290?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/21bd6991a48e5d114e8555e81085ce958aa644bb187ae7306031cc5db47cf7df' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ff0b08f6dae135bba4eb282168736284293c3da?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9a6ebfddde88e8164d86188225774c61b489187?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8c81c4a43f37aee856b572e4808403e394270a73?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/38040214b4f1041ed673d8b40dd5854d223fcf6b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c365389e165f32e342154914a40cc030e142c5d1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d6eecaed3c7e305cd75fb8b6544465cce05d8a48?original' }
      ]);
    }

    const existingImages_k16050290 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16050290'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16050290[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvz7z81rm80epv8oig2tl2t4q/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311382442&kamp_tidx=0&signature=QaRTuEtUmeQ%2FsZfIT%2BgzQxa%2F8e4%3D&ts=1754473642' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvddzu6acfs88ril7iotnp5kl/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311382438&kamp_tidx=0&signature=lisx6NvfDeCvJmTvpUBh3pleVgc%3D&ts=1754473638' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvm2lztsvcglyhh6ia2k5iwa2/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311382441&kamp_tidx=0&signature=T3WcYMp9NLdcqkQ%2BgAjAauWQMw8%3D&ts=1754473641' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvih13wkqycesnkzqnuz9aqaa/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311382464&kamp_tidx=0&signature=QHDEo0rGJ6uJ0j%2B0X8a3fZ9%2BE%2F8%3D&ts=1754473664' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvtyzqo3mfzt9vk63o436n6ag/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311382440&kamp_tidx=0&signature=ds2mQRdVkOn%2F32byy2yDDW5zZFo%3D&ts=1754473640' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvmms92xlzclb08jyok4t6qse/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311382439&kamp_tidx=0&signature=9FERhvROnns0G8i5lcetrzxr8j8%3D&ts=1754473639' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvbxj6vzrrw2trned22hu9t5k/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311382440&kamp_tidx=0&signature=N7HgWbTie5AdNOyIRvQLbdVWGNA%3D&ts=1754473640' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6382d470236e7e5f5823d9934371782a827f3db8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ef1ae4af3b7847f45d0af02f3a1199faa11c596?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d04ae2f0c9bf7fe75d86484f02851566e8fe6418?original' }
      ]);
    }

    const existingImages_k1725619650 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1725619650'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1725619650[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1c9f0e942280de26e92c65801d96298c22d71cd3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/de84337940086b39703bcde1a24e664c7a81843c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fd25df428b533464c0fd1974bc41725f3a988671?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d24e0e9e61e1e8e992f6323267023588aa8e72f8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5d3b8ef17fc60a3e9a732e89a5eae2cbaa3da3f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b059042d4c2c9a96ca163332db933ab8da282e18?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5042122477dc27ce026d437f507c05e70145199c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b8f80fc58dba73203b5ccddd2fa0afc7773850e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfMTUy/MDAxNzY0NTQzOTM0MDE0.7VcRR50E_k60sCtebUZG57DZhoXXCUi_x7i3UXrQGMYg.GQ8so0N4WhZM_vgov0HbEdQ4O6AM3FJePJNcvHQ5DFUg.JPEG/900%EF%BC%BF1764543241603.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDFfODIg/MDAxNzY0NTQzOTMzMzM5.j6CqvyFhkaxPNgPfc06d4UWjepb9YOE_3YGXIn3-oWkg.2sZ4F4VoHWA5UWf96lnNO6ZHycuao10t9mgj_8ELtgkg.JPEG/900%EF%BC%BF20251128%EF%BC%BF180110.jpg?type=w386' }
      ]);
    }

    const existingImages_k16050660 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16050660'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16050660[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/622858C9C48948C0946D4316BECFF1B8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/72f25af9c7d7b4e1e0bd2b57f5d542f880d547fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/077dcf73c83865335b147e230f283c21382f6ab4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7155a578f452d5ba7261b8e4f489b851fb4ec1ea?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9c88a768e23b45349513db5f38db40b2c87afc68?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1899f0e0f1c3eef75a5e19915ebfa6d8a0b6f4b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2557872a494776767cf153896b28666c61c5ecfd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aae4228258ee4580e605ab1198acd4a6545ba965?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1c196ce675afd5375e129c80c5f86835f637c8f2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9462b472225673d869ef916dd15f9e5b23aefa95?original' }
      ]);
    }

    const existingImages_k1461411521 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1461411521'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1461411521[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/2064845365784A3B961ACE9655AA28E1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/E201346D547943F18945434DBF285456' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/F33FA28E0A4F4903BE01BACF923FBF0D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/6991187AE56B471F9E26A2894A53E16C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjlfMjYg/MDAxNzY0NDAwNjk4MjE0.JBWFJE5fHJriAvDewEhGVLme-pxTo_l2hLzQj5JLLycg.-Gs8MN5bgS8NnxBy1xU6egT2-9qzPhFntAVZ1BLaSHIg.JPEG/01_final.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjlfMjMz/MDAxNzY0NDAwNjk4MjI5.9jN4PeGY8_9-_COcnhhm3-RzYnEEJpBPHTxbR2ppI7kg.ZWU8675i4HEC9bPlP1iozPMJBxFN6j_aRYX-iGhN0YEg.JPEG/02_final.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjlfMjMg/MDAxNzY0NDAwNjk4MjMy.LS_RY7KjvSr7e7wv-KWGDRRatPNyMCBLd7PTc2z2Tw0g.dCHbK77azjSkYpz0EGjkSs2DJGCAJASx9WhA--Avk-wg.JPEG/05_final.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMzBfMTY5/MDAxNzY0NDcyMDgzMDAz.MOgA8iQOz4IxW5H3OzqA0WyMbUGUdJ5KSP78Wq0inpAg.7_0Ry9_YeC3uI26rjd9Qt0zuXKdL2M1JG1FxEdJQfQYg.JPEG/IMG%EF%BC%BF5078.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMTQy/MDAxNzY0MzMzMzk5Mjk4.KXOlyc7xtt6C3AL7fa9zTlVgyp-sUNU-D0gzY6kN9-8g.nXzVDPciw2D9kTiR_1CBCoSsbJP-MPga5PcqyquodOEg.JPEG/KakaoTalk_20251127_214119825_02.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMTQ5/MDAxNzY0MzMzNTcxMDk0.3dY_4sVNXMjqR0iiJTeESB6SkewZhbs5tYV-2NnQ7Acg.N--grtmYhXiLAMLCmXhLrEBtJkrPkwdzti7QxvcZdCwg.JPEG/KakaoTalk_20251127_214119825_11.jpg?type=w773' }
      ]);
    }

    const existingImages_k2057792795 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2057792795'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2057792795[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c38293623d1e186e322c1175145a0206d7bfa877?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ae42b5083677fec885a85e2ea2da940b05722668?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9131b23dacca28c67eb7c47d1d9cfc626aab25ef?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6b8acea59c9ff443a3d458fdbf1ccd6cdc2ae66d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b0dfc4274a5389d59fe56e11a00a26640fb6e7e0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c204d9635ee204ada4925701b4a6101c767a390?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d00b056cea23949ec9a3456cc88a51f5f8644ab8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/150901749928251148425b17ad7618e0603081d8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa06a23ac121c78fc2356d93b7aa41a03c398785?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cfb3e2949583fe0ff95059ce77a3c70748f5193b?original' }
      ]);
    }

    const existingImages_k1818725499 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1818725499'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1818725499[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8B48BB55B2CD4E20AEE721647B990618' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AF7170298CDD4AC0BD2723C52D6362CC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0F6C2714B82949ED80618DA49D678C53' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9E3FBEDB3A09458490BBEC9203E1D4AD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6FCA4EC2AF53498F8C21E437B737C7B6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9DD26B17DA6B40D2A45BBF5FF572AF8A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DB692FC0B5274A7EA46FC965E78DC816' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/ACD035154968408EBA1236F707B877A6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/756A871B0301454BB1EECB611CD5BDE9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/78B1F5DD31F0458B8C06B2E4D8C192E4' }
      ]);
    }

    const existingImages_k1676572134 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1676572134'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1676572134[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f09a63348eed9a402f9e3e932ddd3cc005523eca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c882bb9285ea79fa293cf5f862973f6ea7a2bda3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e1bed697ee08458df3b6802b6a6e84d447dfb342?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7963213118650035283d89b60a19fb2582c1e531?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0e0a3cdb2d66d7b43969021b785d192044db0b23?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/550beecbc4478aab24375c4b87e3a472887c9d4f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/25e615fb40f11c35f256762321a604e09ce1cd51?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfMjUy/MDAxNzYzNTY1MDM3Mzg1.Z4h8wwJWXoV4MnKIlw11erNigdVq5hbaTC1r1PegSfwg.lZHM_N1ZZabq1m3mQtU9yprsaH5-jCFHkGRDm3BwuMsg.JPEG/IMG%EF%BC%BF7036.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTFfMTc4/MDAxNzUyMjQwMTk4Mzcw.OoUHuuPx0ccykkuXKyJCclcm4jAhNciid2ooM9DL-1Qg.LVseDzQKYoezHqdb4Km3q2WGNCv7Zoe5NcZ_gVhTinUg.JPEG/900%EF%BC%BF20250710%EF%BC%BF191001.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTFfMjA5/MDAxNzUyMjQwMTk2ODY1.NnKgk-YT4Zu8b-m_F0SDZhmbRu7HVwufJIi1qGGcf5Ig.qDiit7ekM-0KUm5QkvYdotaqD2D5IWDARNUpWm6YFM0g.JPEG/900%EF%BC%BF20250710%EF%BC%BF190246.jpg?type=w773' }
      ]);
    }

    const existingImages_k90725902 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k90725902'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k90725902[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/711b0815f5ca9ef0ffd12f538ab6a3b8514aab26?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/86379eb229bab603e807c001668679fca73b4f35?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0eae1fe5ce8e998f109470ad67ddc840c8bd5cf4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4ce2c819aca77eac4e36c449e77bfcb754baa591?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f7fe0d1acebd179a4008932dea3d9fb6016211e4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a56c674f2f9bffa18aca69772d6dcc01939f7c9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a99198b602f09c7aee7113795d92ac1a044b69a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6012bd03485e81b731b02207a95afc1a0f82085f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d93c63ecbd5fde67d3525d2e82b911d289ec23b9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7397801230527f136dba9411b49476ad3d659304?original' }
      ]);
    }

    const existingImages_k563859861 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k563859861'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k563859861[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMzBfMTM0/MDAxNzY0NDQwNDY4OTQx.U88QAcUVQ3PvHhY__bL6-g34MgIv3wGO4BexZCaVaR0g.pMn33Wj0cb6Mp0yO5SkGkWkIQQiErWPrLfCM4mZkhGog.JPEG/IMG%EF%BC%BF2208.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfODEg/MDAxNzY0MjE3NDQ0Mjc3.6_EUXb1DGKoGEfVkf0YlRyHqZJiOI04LuUUA2Lcy5wwg.35vv_iTjcqwg-TKYCzXoSMliSvhxoUvFVkAeTyNuC-4g.JPEG/IMG%EF%BC%BF4648.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTY5/MDAxNzY0MjE3NDQzNDAz.TtT5-8tGdbTMXSjt_O6K_jrMVgNRH9wM62TV0Cv4fr0g.ySxVh88s7SRSXtngokkRtKd5Jlqm3IBbmmP7Ed6vowkg.JPEG/IMG%EF%BC%BF4641.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTgw/MDAxNzY0MjE4MTA4OTY0.NdhxSp_lQPza8PY3vEOHzsuKgAZWTAQXX81d6fOlLpgg.cfmfeGvRbT3t3KKDyQHsm_HfD8KAZbefewSVUGQFLjcg.JPEG/SE-AB1C885E-4570-4811-B0F8-F6BB07E3DF29.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjU1/MDAxNzY0MjE3NDQzNDk0.Dn3RniDXjpgBokXw_1-FqUEm15hz7ChpGsToZU07h80g.dD-sSuU0ykSllQgKAHPUzaAf0N4l8hwocZfOFjKAydUg.JPEG/IMG%EF%BC%BF4640.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfNjIg/MDAxNzYzNDc0ODE1NTgz.eJ3L4uEuQG956b24kAWVzAKnvwQC5xo_6WOxvB2fuFEg.kK2Nvew0K1NlKJVBeOWEayRawA1I1SIHoWaslWk8t5cg.JPEG/output%EF%BC%BF3899289567.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDNfMjkx/MDAxNzYyMTM3OTI4MDc0.6JbgLiLXiNaWlNjfNtKfb4xTRgQIab8rqsAKc5hwkRMg.YqZ03cc1ir4GzbHhJWjWm5vptaDRjQOKvCCMet3HLXwg.JPEG/IMG%EF%BC%BF2194.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDNfNzMg/MDAxNzYyMTM3OTI3NTIy.yuCbWVm2znCod9xVjE_rVTg4bsJyQMrRuincdIIP8u8g.TV6cDllZg9xw9SPvNHOBLo0gOvB9O7hxD7FLktnNAE8g.JPEG/IMG%EF%BC%BF2188.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDZfMjc1/MDAxNzYyMzk4NjUyNjk2.rcIV0G_kUYLAGQxPE-jKys0PoF8GRieyZKli31SQSdsg.RD586Q4v_qIshnSv4imeHpsrkRUe4M7hpCvzyQXJkYog.JPEG/SE-5AB64636-C26A-4F38-A667-B089DDE3EE9E.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDZfMTIw/MDAxNzYyMzk5NTQ5OTY4.ZjaD2ahmrLoiBMo_1bfUh6yE3d9myoixufptjjhwXkkg.PcrIZFGtCtH_eiychitVFLiP_pf2-RWX-ebksN1dJRsg.JPEG/IMG%EF%BC%BF9861.JPG?type=w386' }
      ]);
    }

    const existingImages_k16297161 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16297161'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16297161[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/385739dab44b2e4b838233ea10cdeecca3f11be7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c476c91aaa729da762dbc5f9c3c8c84940a2c049?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b90cb3e42b819b601a5e18108202f5f7c34c4cf6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b7f2c579960606f3c556bcf8620c7d05d7081f00?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d660c7525b76782230bf696b1c6631e6a4c46f42?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c1748cefe6b6ef9c615a4b02b93206074c281e47?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqftsud998_t5cITUKh1wKXrLDjBW1ZPk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfsDQjcOJ_nnulmrw8X1Fr70rmrj1RC1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfnmVWhCW_RDo4afHaLbHNaCSRiVYPi1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWaiDoLbNx_M3h6K6b9voSyZLLKDYPFOk_lkage8AHc0u.jpeg' }
      ]);
    }

    const existingImages_k108150613 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k108150613'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k108150613[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/050fdf3044b38e443bb4ad1a55157a8c2153d97b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvd82ybxzjetg0lnsjt5v7q8y/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33311218667&kamp_tidx=0&signature=DLUP9hb%2BzfdhON9Qi57Gy8yH24g%3D&ts=1754309867' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dbd4ba36d2df6cd98f3519c565ac345f71f95786?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ec08899066615dc6a959cad8cad7e4e0900aa15e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/446819d78a995f459b616435573b2911ee34fa8b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f07a14cbc9c3539aa3255224dbc81e35ab71537f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/09bac7d820e5f47334a91b5fd9f4d7ae18dd977f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ad6861c2afc5ae722ce3f70715e496e9c1a0b3cf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c02bd037f0ba9932466b564126f5f60dbce793c3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79b80f381e127e4f48980add5865e86a63c6ac26?original' }
      ]);
    }

    const existingImages_k16931682 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16931682'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16931682[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9b81a7032dec369c83ab6af1bfd8141245c2929b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e1c4989df23338517642f897c764b507b1c9347a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2e64a77cc0808c71216d23b499ea7bbe6baebd81?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e2bd4aec8839698acc6376d32fe06db090d8968?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fee4cef0ed79ec75ae8a7cd1f7c9bd71c5c610ca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9a06907eb9306a4cddfb55934394a30cb47b4a95?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b7d86c4e0a45674ba45229bb05aa2925921c72ae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83f1a89cc050178cc0d03fea1dbd272f6b678ad5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9a8d741aec7aa2af150bde8d58f47bf7693c5e96?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/816630aee0771f5d0d18f258532cec188b5ce67f?original' }
      ]);
    }

    const existingImages_k15526158 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15526158'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15526158[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/029457e89671eac32355e9b26cc0f25f76151174?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79eb8559bb0ac76c225ee4172161e0b136dae45c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/adf917955b8f6213951779a59135b96dedc1872e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83f12e81afa3c9c10411593fafbd1dabda7c1d8c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/12a8996c340703e9a0675d5dbb5ddb3a34ea85b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/148558f7c74b875b3185a993746219b642c013d5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f0fcbc94448c25d35f4a0b6172dfb0ddd0e41ac8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7d4b38a1153fc7080e69c3c2b713ea52c3f2890e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f0678fc73e3a8a50ba22e9a38e4b853649f53e7b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b3486ad0d1559b89adf3d8c476df8485d413f597?original' }
      ]);
    }

    const existingImages_k8173650 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8173650'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8173650[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/490f47a4a0c1b58cdc712eeb23a02f3bd83a0886?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/686384f54583e035340cbf99683fd68d543c0983?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7f2cd9ab976b7cfac81843fd554bcacf2bbe4e36?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3a7d3f062a9673bdb8cc436ff490b69749fea52b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed376b9aadb3fbd2abd9b38b7375e6ce982b5020?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f5219fca57dd3110a80ec4ddc171573755d31adc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e221dde0ae8c0b79cac9bd3fe361687fac7ff5c3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a1091af061508fb58f8abb0e487f6306f5350603?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/775f422b340933ba47e2840ed472f77131844c5a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2894c6be7e5d186427801b9fbf50e44ad00e6f1f?original' }
      ]);
    }

    const existingImages_k1534943798 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1534943798'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1534943798[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9c34a06516c18d24bede6e876616cda8baa5fd8c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/300242cfbead81b6908da275591de75f35971d2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/662467f31b39b23ffb991554b4998524a4c01051?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/978c6ce63846bf11b562fbeec30cc4aef143c8f6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5922ca9c13917633658696dd153ab11dbc68dbb2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e0fc7a8a282402bd28ad5cb483e8bb8fe019cac3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7cc3fb128ba14890a83f5e0d900118898ffb4fcd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33892d22e12fcee42510846badb7f1802cace0cf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dbc6f3a0f9ce4a7daee10796b29c018daa7d95cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/851ac86a9f71e9678d7319b4e176f508a0490e61?original' }
      ]);
    }

    const existingImages_k1449183784 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1449183784'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1449183784[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a25c00c99cfa7aa3b7b71481f22c776de181b41b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d57fdf6e7924e4da4ffedcda9b54363a175dfbf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9ee1ca67a61ae078778739718368b948710fa56?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/30ac128365f568b55f1d73542aad8f1baa223a0d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ca63e29b9649727a5a397ee06911d353ad39ac8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/879675eacf8828973e5b8ec4eafb65d622b4cf58?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/70e51c2ba240d8b2f68ee49bdb0bb7166b1e6c80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7087b572fd173c97295e2edbfe969b100abdc8a0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0f907fbfefc4894ff12bbdeadeaca68fd26e8737?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/05c846dd1f3bd384a3b50da0aa8377107b35f90c?original' }
      ]);
    }

    const existingImages_k743447746 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k743447746'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k743447746[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F3DAF0E1889E414383D35D36D1A31653' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/54964689d80d91cf8e1832d0e6b390c67cb43328?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9981be53e1eefe91992e2146299512473d14f44c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f54397b6d1b59047708e407a7b045d628399354c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/36b213fb409bc73908977a306422eb8d47ec1b3c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5c854bc6ca6556b5e39be6d359cf150a66c57763?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9e604a0648518cdccf1fd13a282303798dbd3f8e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a8d6ceeea47c85a0126353fcd657c680138f27fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/026d27a0fb67181f64cb1e28262a68cfa5750e4d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d8a264ede0da1a3f896afef5bdb391768d574594?original' }
      ]);
    }

    const existingImages_k27493864 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27493864'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27493864[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2de31b4649edaedfe79bc002e1a4baf833d341c4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/62b551a49c4121ffb0e82e65a9b3434696d17d8f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5b9172945c5988a33adca19b8aecf5ee2b6022cb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca6445027ca842ac1ec02496152be711d8e69a53?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/63e2fa9db74ea208b33b3c2de3c94341c57e6812?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bceb93985be2760b99e54b9dec268abb485175d0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f354f95962335bbaa7e74a6bcf0addbe792381a3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/457b6148dff05cea1e9d1cabc26339222890f494?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2869211de631b94b8fb75928fa7c3976b0be4bd1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/557327fc18c8f04091f1c7d9e0b99124cf68324f?original' }
      ]);
    }

    const existingImages_k27279915 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27279915'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27279915[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a1f0b2cf8b666918d9844317064d6e09f5c839da?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f898aee375d369164cf9454c1e461091ad52b0b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0a1fd91057cce3ce76c1508045f46ac338930b3d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2aa226d17c7d98b5626fd4a5cbc7a2b4ea763b6e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/23790db56e1844991a6898e75df963ca4698e3d5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b7e35a20cfd1afe689a90b01dc39a65c744542f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66648ba65c4150471e327f782fe6231803057085?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5a110eaf324ecc17993d0c3cf03f582a6eb2749f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0fce0aa30f653e6cdc0e357288fb1c61882886b5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/07ea5a4a2fe6b0dc93b6de3f87cbd8658816661c?original' }
      ]);
    }

    const existingImages_k205785452 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k205785452'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k205785452[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8c407689540df1bf795fce2d03cb1613a8537c51?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/579d7033e97b7b58a3861249334b14415d7d6ac8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e1ebff7b399e0ce9a9c0f929f0e08b1755cc3150?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a450017f4fadf3d3ecd36fef538afd2411c544e3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3d31335018700a90bab73d7b0f3ae2b412128e1c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f13c01bb6dd7335d1b032fc3cbdc5e17fac3b08c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d53196928599abe230b978646ee49007294f4309?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9818445970a379ad4aaadbc87895332d8c3acb11?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9139aa5e17d104c4239954e947554eccbd9fcfc9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bd3b46781ee4b6f24c844257d076b81c11e47565?original' }
      ]);
    }

    const existingImages_k22705945 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k22705945'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k22705945[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c3dc32a2a9e7a3ec18f8264faefb4d0d34e48474?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdd4b78959e040bf6b6c6aafc4204c41d4cb72a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8634a29feea470699c01f905e2ff9af33868256a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f9ceef3d99f94d6a4b425e4c32cfc9603a198cde?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cbb3940748a6a69bc22ebd2d2a67b0ddb9ab1227?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvkx06ohy0z1ghm2uz394yltm/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33313426433&kamp_tidx=0&signature=SNv%2FBuUi6EIqKKiQ6FQcjSP6X%2Bk%3D&ts=1756517633' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/364160c140acab08b47a99d1e054301849637024?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b314ae4b039bc5345444e47328725dc5d342f293?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff1c26c079fe255169d86cb955503b1c4098b15b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33426b83bc65ac068c60c7454832bc4ddee769aa?original' }
      ]);
    }

    const existingImages_k16471669 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16471669'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16471669[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8026898d2153612bae19e14b801aeb147cda2c80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d020d595f1f154e8e261c97b55041f6f5d367716?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3549a71a38e1376d0109d61c316e0978aace24d3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvv8nlh7t6y4xovtkm9wyquuj/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33310442187&kamp_tidx=0&signature=fwZetbZ4wkGHTWzIPBa6abl5s3k%3D&ts=1753533387' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/10c3afc69227ec91e32c82f85eeab8027093d706?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/35139930ff08b83c7214fa53a2715ef5cdb9a555?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/708be6fe83f6f5c53332d02ecaa51643a8f11c6c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e851c62c08037183cdc394aa81b3810f12969e33?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/648df40773caae6440d3cf0f777827402d7ce18d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7d93950c8191996769ec64b29f70625fe3aefa93?original' }
      ]);
    }

    const existingImages_k11969069 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11969069'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11969069[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4269734be90b4dfe6db100c1dc0c9e9694e8f0e7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4e0dbddc95e155ce3879fdef8dd0226eb588fa8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a0f0c98b922dab946b7fc07cdc41818ce29eff1e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/31d5048e9b55198ad4b083486e0d50604543146f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b53e0c8acf227fdb22247a2f991c85fcb6af7100?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a955b5ed2545107ee57ddcc4317112cc55737a88?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8459841c6154de0a8484cbb900eed629c4259d94?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/00c601b8674fd47a1665f93c4ca4ff5920b8845e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7667efeb5944c8633ff3f1fafc9c54340d79891b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqu2a6jpet_KDTBCIs1Ro5E6WCRzVRM5k_img.jpg' }
      ]);
    }

    const existingImages_k27272826 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27272826'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27272826[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd95cfe7093445d21579800ade35428afa30bde8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b9a3420d4bae26da1d2b6d99d53ab4897a6bc742?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/01621ada545a20c7b08a81ce4a57314f5f72d437?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/391f0963c743c83e9dc4e7db09780680d7e031ca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/089aaf89c0b0508191bf24be39e97dfd9648cb04?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f958586f0d655a2df56b4b31de415f390fc625c1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a5ee6d1c3f88fd2ed1ffc839e15a4ac46476374f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/82cf00d590a3ea52b73433c4782dd8bfb8d74aea?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e70406c2fca807c971292b4bd01e457d3444b90?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/89b2d8bcb03b052a749d3d79794a1086875f38c6?original' }
      ]);
    }

    const existingImages_k607192266 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k607192266'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k607192266[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AD433AB6E366484FA5D139895386224F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce33a3628aec6c5829501bfa3fa11ae92c132379?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a1ac21f8113c8f4765dfb066240c5be5c39569d6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8ac47388d3d414af72d8e7e20bfe26c61910c8e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/520beff490acf12a3591aeb730e3533cfc27a585?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d4dab4f5086eff960dc089e831a0eada418a1b6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/54cd062e70022ed5607ec16232174cd9b6b55bc6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/af6ad057e30395407ab52c6b32ad473e549a2c6c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f36edc45315e8cb33d6244972714f04e6fe93d32c622c30c0b8ca81952aa3622' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5b23bda05ea00a96df2ff9850ee4842a219353ec?original' }
      ]);
    }

    const existingImages_k9012776 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9012776'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9012776[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/155BE0444E0008D137' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/144B8E454E0008EA31' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/146CB23D4E0008BF13' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/206288454E0008C60D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/1642C0434E0008DD02' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/185FA7454E0008E410' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/1865E1454E0008D707' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/137E8D444E0008CB0D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c36cb33fb468ad1105b43dc5d81f826e6b96b77e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/291c90540be4bf2c68669fef510346943b659c2a?original' }
      ]);
    }

    const existingImages_k1116271250 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1116271250'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1116271250[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e558393a356700f0a8daae23a2c1d99633c3c906926620e230adfc494a9b024' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff484346eacccf53f25f77a06ac45d86c5997016?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/146bb5ac6a45f8d5dbdda92048c6610128da3267?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d7bdb8fb55c12e94b381f37f82c89973d77d4d62?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d5e873e52a0f385d5f68d4a767bd04cc8c488731?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3a5834bd9294cfc9f4a5fbe1cef947555c921517?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2e6ca52bff4513826ed8aac85e6d4c8b15edae15?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1f98d8870ef56e2e96293f9f1c1db1ba3b1aacd4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cedc7a9401ca7c87175ea3fc5d6bc97ea1928eb0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/57cc9ac4012d888f17aabb75cc3a1c89192f0694?original' }
      ]);
    }

    const existingImages_k16500083 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16500083'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16500083[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/00efc4311b7cd7b14cdc3586c2b1e300bbcea50e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMzBfMjA1/MDAxNzY0NDcyODcwNzI4.HR9MoWKLJYJL64A2NYT3r1tckFkeo-OqSdLf3qHpdIwg.TMyvBNlzsEhD198aziMxk_XTyrCRaFu6yNNvwOVHKXkg.JPEG/IMG%EF%BC%BF1734.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfMjMz/MDAxNzYzNjE3NzMyNDQy.NwGm8xBiRYGd-H7L0vGudLIdB8vigUgjGYijO7geJXQg.ZhQE9s1nUz9oPBq7x9SpEnhD-P0UvIeI2rIduhB6h-kg.JPEG/IMG%EF%BC%BF8599.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfNjEg/MDAxNzYzNjE3NzE1NDM2.HZD2mZHcolh2R_Wdgg3YbxFaV3yMifYTB8AD33SZCAIg.qOkuSVnrx6sBmShRxali3pTyYHhoKzTFtKR8PKhUcqEg.JPEG/IMG%EF%BC%BF8594.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfMjQ1/MDAxNzYzNjE3NzUwOTAy.2vLebapneQjSZMG8bJTv9KipvJQneb6KVQMEuW1Lx9Ig.EMtNRLBkH_bGss9HBdHFgn1iixsrB8h44aTovDHeGdwg.JPEG/IMG%EF%BC%BF8602.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfMTU5/MDAxNzYzNjE3NzE1NTE0.T-IRzqi8cIfIXZpLSAadKp52MddX0kr3ckqgkTOBBfwg.86uq7GHrOVydvTQHCf58kD46QTBF2v5Yo-LfYVUH1ikg.JPEG/IMG%EF%BC%BF8593.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfMjAy/MDAxNzYyMzA2MDMyMzAw.5dDMi2erBTt51wPUoyj4XGQmdh-rWc2IjQq3rgqMuX4g.Ruq3zd0sB5q6zBWEn-Em8vUVwAsusALL178ynQKECIwg.JPEG/SE-b7b8c5f6-4da7-416a-8e9e-e736a91ec325.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfMjQw/MDAxNzYyMzA2MDM4OTY4.OfJaRMHTjJl_luPWpqCKSw0fq0igU6h7PtpppqGA9wQg.2TrHCKU7D7SoFMpmvnU36NSpjooKISU2Ce4SfHG9cUMg.JPEG/SE-74020f00-fc02-4a4e-9214-9ea856584010.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfNDgg/MDAxNzYyMzA2MDM1Mzg3.HjEC5iZMivlX5Dl4mUewRl3ZVPVJKiia9-hje8BocKsg.5B3YAKEwcFBujPOmtv9oK_6Dw3T3TmJNxJq2GgVoNPUg.JPEG/SE-750a9653-2be3-473c-8171-7948f5758f5e.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDVfMTM2/MDAxNzYyMzA2MDI1ODI1.qzPbrqg5kh0UVvGD3cjKYTxVVNx_7z0CleFYZePhMlgg.sJP-XY7BaMYMQ2EYvNlJB7q1_PNRqRosxMm-XR_crAUg.JPEG/SE-973382be-7b92-467a-9575-d19d1c9af264.jpg?type=w773' }
      ]);
    }

    const existingImages_k1051522023 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1051522023'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1051522023[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjhfMjE0/MDAxNzUxMTE1NzgwMjUx.8nR5LzK2aa14xVMRpZMCrJDvIh79uBxjOCNdcD_f1ssg.-8caPxwnYqIbxbkaqhbhM1lEZDDAaB2mYjWOLTo9l30g.JPEG/IMG%EF%BC%BF8431.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjhfMjAw/MDAxNzUxMTE1Nzc5MjM5.naDW_Z9Ur-o388N9nzo3kaHGb3ktsUCnUYDvXzc4a9og.gvNMwlbhvCm3p_74_VMtePsN4i3MC0mG-K2SOQqO6Pkg.JPEG/IMG%EF%BC%BF8412.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfMTM3/MDAxNzQ5MDQ4Mjk2ODc1.EYnHHqQ5mFhpST_6ZaKd4S0ruzqrGGMhQkt646BurpAg.1uWXgkVF1RLv3jdr3EO9hrD2OunJ1BMrv5pAf5NKl4Yg.JPEG/IMG%EF%BC%BF0594.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfMTE4/MDAxNzQ5MDQ4Mjk2OTAx.1i-Q0DlaHOaXE72IUMBTDDgQ08Ikhcqu7xtcAkm6vpkg.ulla7AkGO-i0oXVSksPbtDbW5Qh1mHr3n_veitLSGscg.JPEG/IMG%EF%BC%BF0593.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTRfMTU3/MDAxNzQ5ODkyNTYxNzI5.I9rNOMPFX3gahzdYypvBKbtDSxPeGI899rRFWXPlT0Ig.YKuDpCMKzF0vCwK0GjRnBNLwW4lGypPbAmV4ro6tJN0g.JPEG/output%EF%BC%BF238313980.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMjEw/MDAxNzQ5MzYxNzQxNzgz.iyJ-2ArdvI-YFNonl4TD57aq0RCkOtjdgw0eTfBFNnEg.nHgxx8Vw6OOgsHVozTl44Y3VDixazg77k4MclYx3RUEg.JPEG/output%EF%BC%BF614708289.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfNjkg/MDAxNzQ5MDA1OTM0MTk0.1C8_Z1XawqjiRgcDy7a0qPMxpv1y7dUEUaI9WoYzW_gg.-KIb0RnM2D5FFsm5c8aMMBbo1i7Ll2GHJV3tRglGz-Mg.JPEG/IMG_1037.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfMTEw/MDAxNzQ5MDA2MDExNTU3.LL2MBt8yOahTiklZalbMVfCfGlD1faD_8EEJVYcjStUg.A2kLPRV4TIxgoaekGYAy7XjO7dyo0u3JAk_Q984irKUg.JPEG/output_4103530511.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjJfMTc5/MDAxNzQ3OTA5NjMxMDg1.Suo8D2LJBsYFvmbwjPrelw2Lx5VOIZUueZXdqtdHLFog.SQ5R9OM9gc55CdJQUm8ZYnIx78mNzEBSdEFh4oLH1Akg.JPEG/SE-e9152b9a-2dc5-45fb-aa62-036ea3b8001d.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjJfNjUg/MDAxNzQ3OTA5NTU1NjU0.yI3DHbnS5gcKMA3XZzrGSEvk_26hF097S_At83RA8L8g.iNDaCoUFWolOEQigRKNOkLfzsP_S04z3PFV5FSk2xusg.JPEG/KakaoTalk_20250521_220431210_03.jpg?type=w466' }
      ]);
    }

    const existingImages_k2057101586 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2057101586'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2057101586[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/681CEF32213C41EF92CEEFBBD67544A2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2178F6D098C64AEE8449411AC8F6F9DE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CDA5AAC669C6443289CA98D4146D8C48' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTNfMjg1/MDAxNzU3NzI5NzA3MjQ4.YeqOcXkkYnW_j_wVvRTagnpWkEWTU2qmYbarbJSH7xcg.o4VGqrYojJminZk3SMdfOrIZl-D4TJ32EAX0EPFBLnwg.JPEG/output%EF%BC%BF2695351225.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTNfMjMx/MDAxNzU3NzI4ODQwMDMz.RXl-k6yaDfJux8AFum4VxFJacbixMZY5b1xU0KZpvm0g.0-C3zs1IVKSU7BCum4LCuB7RtY3diW6O7Y33CAnnrG4g.JPEG/IMG%EF%BC%BF2177.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTNfMjIy/MDAxNzU3NzI4ODM3MjQw._chg7W8YbOrsceMoT1GOGUfXfvPJOiOsLAw_bDmOdhwg.z328YkFo8VDcEargga4IMvAaBj-VFNBI6dsYdoz3Xbgg.JPEG/IMG%EF%BC%BF2154.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTNfMTc4/MDAxNzU3NzI4OTk0MTAx.ehoRFGTIrHF5q4GBpLNbN0_GSkP5fiDZ4tatJBy1lKog.4IrAiaQ-PS3EpVmFoLopzBAirfHEe-1uJ6YBuAcaaa0g.JPEG/output%EF%BC%BF3994052558.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MTNfMjE1/MDAxNzU3NzI4ODM4NTk4.I4OyUOHsN6oKsWyE-AXlaZwD0_rn5sDQER0U9hV0RUsg.TpaK-O8QsZ9TmkWGq1jd2ECOMaPbDeNyQdntzH96PVMg.JPEG/IMG%EF%BC%BF2142.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfNCAg/MDAxNzU0NjQ2NzQ4ODk4.UkvkcUqyqloGRiszChROSo20zCTq_DWam-L81J63hFYg.WhOuY0syoKtSH0In_5zfgLbhhsrJ_G5KoCCJcOOsziUg.JPEG/KakaoTalk_20250808_184631347_06.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfODcg/MDAxNzU0NjQ2NzQ4OTAx.3hns9bX9dOK0rPO8HT67zOVppRyBl0CvRDmOFugXjMQg.G9SR8UQZVlq4HTDNAnEh4uv_jV4t6RHuGJmCNlM-HT4g.JPEG/KakaoTalk_20250808_184631347_01.jpg?type=w773' }
      ]);
    }

    const existingImages_k134473495 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k134473495'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k134473495[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fc9e8d5480481c03af107ff216625a1416538473?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d337be1af603222b649b6f6b044c7e9f130d7fb0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c4aef18566b5d1f3d67cdce62632b5fe338b4915?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e4b60f1d419f619412871432779b863336ce947?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/63ef0ebcdbf8c797955f61470f6ce5cc3eea80cb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8b9927f2ac2eb6b83b39cee27b7c05149185981b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2bb253d63edf2f2b856a03f8daad8eb6e13aa467?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/92b53bbfeb6135ee5d572149702ebbbceb21acfc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c0608443b05a6055776bef7ab1422e0e9bb0d7d1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/08887f348ac4a11e048bbd2e737d9288da1a65eb?original' }
      ]);
    }

    const existingImages_k1827653054 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1827653054'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1827653054[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMjM2/MDAxNzY0MDUyMzM1NjQ2.93iCvbFmuJC-baSoPPZ1RPv5vXSjmFNqFqm_KlDVQkkg.7CiUJroHO74mfxG2dv66nYpEtDRMXt2dDkkuBBnqeWEg.JPEG/IMG%EF%BC%BF5681.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTdfNjIg/MDAxNzYzMzkwMzk2NTkx.cJzwg575B6riizY-cgYiU6jTpIK5Vuyw23YfFhinak8g.q9NzNgNril1GW-m0lQYgnf3N6XMU7YuDg02pdmgUTvcg.JPEG/IMG_8200.JPG?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTdfMjY2/MDAxNzYzMzkwMzk1MTY5.GIAYOYoPxkH8HhXdjjOtVTXDKqQpxZKv7b3BuStmaMgg.wl01fZ36E8nf_Sky9PL0ZD1OLjDJ0kLQ1-PiBLJRZ9gg.JPEG/IMG_8196.JPG?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMjYw/MDAxNzY0MzMxNTcyNTQ1.H4bCm6DgvwTXhe6LBDUUDA7Sb3GOOm9pJ2jyt3pya_Mg.8S5ApcWpOQymim67GLfoxj7lr9L3jz4yEs6jU2Oxg-8g.JPEG/output%EF%BC%BF1487285600.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfODgg/MDAxNzY0MzMxNTE5MTA4.TqjO3GnWw3frtXdFAQMjeSXySy5Spt_dATMDBxZjtnQg.m3UtekxDj6fnuLbpl6DXWQuXbkJof4nl33liZfknOusg.JPEG/IMG%EF%BC%BF0990.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfODgg/MDAxNzY0MzMxNTQ4NDY1.G5vfKa7Uf3cdpA4U15AfSSBDwLKNfpqxkOzqEl1gjPYg.c98pgZg2EiHOAqYVd5EotIIvzxEe9CMSimzkZzJQMksg.JPEG/output%EF%BC%BF1304349249.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMjU4/MDAxNzY0MzMxNTE5MTMw.t7sbYIWthxxGuvnpkMDW3Ndn9em_6J1L2dF1XQb0NIcg.p9owMFKfdFXWFxpYzINHR4Usn2mbxPlv-RUKtx_-Wkcg.JPEG/IMG%EF%BC%BF0967.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfOTcg/MDAxNzY0MzMxNTE5MTIz.c9q4hE840I9-6pCGtlPBbjDRXMVk1hREh7OASfDvQwUg.DCgHo1BFTnLCr1W_ebz8UsfLppsdkp4m2HH5JwlhREsg.JPEG/IMG%EF%BC%BF0968.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfODIg/MDAxNzY0MzMxNTE4NjE2.UU89HVvqUOV48KdihtY-OLDCqE_V9S452F7M42frd6Eg.qIj4oirkHyanakPd1DNaKvBFHuX6N5-5KiiO-t2WBwMg.JPEG/IMG%EF%BC%BF0970.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfNjIg/MDAxNzY0MzA3NDgzOTI0.5Tqohw9CcgSx8nzWMIli3uEOiiJyt_q-2KP_IY_z5DYg.mjnnrdLdCJceKEx3WL3ls1nYeBFyPiRmQmWtjhtkMpQg.JPEG/IMG%EF%BC%BF6525.jpg?type=w966' }
      ]);
    }

    const existingImages_k467436206 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k467436206'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k467436206[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMTk3/MDAxNzY0MzIyMjk1NzIy.ZHoY2Hiefmvn7PYRVpyBk5xQgB0dRY9k_44BY8tE-MUg.415B8Jkh4bzXiNiLvLJxtFA8hhI8WUXTfDqhAtBePtog.JPEG/IMG%EF%BC%BF0691.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjBfMTA0/MDAxNzYzNjIwNDI1Nzg5.HKjTMmGCayjTa9pTcn8uNdIUGdkFSETjCpjDAqaNWWkg.HhcRMBCTU44f_v76jgZ2bkAKzvJX0ofbLSdKujNTYdgg.JPEG/SE-D1FD8DCC-2BAB-469D-ADA6-042B5920D6D1.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjNfMjY2/MDAxNzYzODkzNDYyOTE0.-AjjCmA-I6o36gvH6eQbnl-lkcYicPsNWAOSGl3RMt8g.rfoLiRKJED4CwN78aJVQ1PZkV0lq6OGjlSWMrrAdj5Ag.JPEG/SE-be514b1a-0182-4e7b-973a-b5fde4de6cb0.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMTc2/MDAxNzYzMzAwMDA4OTk3.MNYoBfoSrRa4VB7MAaUu3aNkmn534pV7qPGi1dusGjsg.GP_DGJ6-WDTS9sLQ7IhO6COOr8QyrHq6tvvQiDcTmtsg.JPEG/output%EF%BC%BF2211171811.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTRfMjEz/MDAxNzYzMTEwNjIxODY2.PB2Ua0gkPVWtFnnNbVAdhhBa2R-sjpevzvXKan5OeeIg.OsIMklezQ18maASNFq3G2MHnAy2ZaeKjb3mP7F9jovkg.JPEG/IMG_4662.jpeg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDlfNzcg/MDAxNzYyNjg1MjcyODMy.rlANgueIqNbF9Fvg_xlCH40Y7qCQ2yPmfcYsqzRsVxog.a7ZkakZfo1z4SHD7iqnCv6QeI-MHajGWIaKg0FoiTccg.JPEG/IMG%EF%BC%BF6151.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDlfMjEg/MDAxNzYyNjg1MjcyNzc2.79B2MpqvNr9UicWiERhCXusX8uRyai58IrstKPRSCFMg.3boOg_WRD9Su3TehJlQCQko7agMUKVoZWNxOq6mD6icg.JPEG/IMG%EF%BC%BF6149.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDlfMTkg/MDAxNzYyNjg1MjcyODEx.a0nHrH0qDcZh0h9SU43S3Jfwcfxb-pg79O15gQDGAJog.RnfdmwNk4bKm07_-jnPJ_qjx0ELPnei3ubkhJ8whYugg.JPEG/IMG%EF%BC%BF6147.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMzFfMzIg/MDAxNzYxOTAxMjI0NTQ3.g4FLTvGZVj0SVj8NCxKIAnHzew5BhXMhKPWQe6anLoYg.4znidB-Xfo90VE1zNlIwYTMqdTmCzQSlWlEcVmYCkKQg.JPEG/IMG%EF%BC%BF0989.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDZfMTIg/MDAxNzYyNDE1MDEzNzc5.k5NpQ0r557qzBbhiGA-xcJsdfvXDJJmtaz3nQY5lbjEg.FpzzWJ874oU_fcH24joIv2rmcBuN1F_AgH1lGjsHD1Mg.JPEG/SE-400314a5-b5e4-11f0-a39c-674c08ec126b.jpg?type=w773' }
      ]);
    }

    const existingImages_k175302923 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k175302923'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k175302923[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fcb378475dc1625ceed3445c255cb1b98219ca4f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d8179ac6db6cd59f3f1f8877ec98388ae8e6e133?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/549d066d8e5cf0e48b1dc91a5f2bf21c4dea517e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca51b302e969c49d41540e94a53b9f740a7aa26a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e38e3229d3bff784aad01ddb02d676686c7ec514?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b73e0a5fa60097235f79e4c6d2662de01af0cc9e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/099f9bf7263a2c6c801292173f7c841b8513a742?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eb106c93bbd8bf5d811404a906ae0d27b5cfb875?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ed754064434ac415c7b88fcf3c8d991a27d15d1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjMz/MDAxNzY0NjMwMTYyMTcz.RNknYEcRMz7urDjyNdGA8QN7DkCiIXjinYT8wFBDtJMg.Kku56N6I5PuoVzUR4PS4FkYbOmbEiamAEP3aqQkyoZ0g.JPEG/IMG%EF%BC%BF1106.jpg?type=w466' }
      ]);
    }

    const existingImages_k96112066 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k96112066'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k96112066[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8aaae06728a50b3774034660e9a87a2cd6a6387b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d3c5ee2610fba3a8ec02b2328dd87e3a5a616525?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/301e49e82dc03db71e12508d286e6149e6bc4570?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60fd06687a2f88c03e77d9a47b3a59884e9e4587?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bacadf5a45f5729554f7a7b9f6cb65737ea0400a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/73192f83cdc7bd86408bd0484c0368d695445fc2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMjUz/MDAxNzY0MzA5ODg0NDkw.EDfbddI01V3ShxX57QTSZSVwg1FLDre6RA7cuF_WNxAg.NjvrswrmDMly-g3sBPG10RmekkMjbwYmMzHlzz8JdMwg.JPEG/IMG%EF%BC%BF6754.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMjg0/MDAxNzY0MzA5ODg1Nzk3.2dcyxIsPKao8yGnRywRIKP3DP-xVUFm5CF88TwpgGUYg.wzBWDj-qsOe5fi0HYdYJPux0Xo9kUBASbZ6-2qLyCtUg.JPEG/IMG%EF%BC%BF6760.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMjMx/MDAxNzY0MzA5ODg1NzA1.4UXPfwYEeKGyJOHcCSrEg5047HEnyQ5bU8ELiv8wOKUg.qwXNyTe8qy1G3cf8Q9_k8dQfoZy-_dulDX9fDKPCaKQg.JPEG/IMG%EF%BC%BF6759.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMzBfMjQx/MDAxNzYxODA0NTc3NDQ2.dqohdblJ0IlyHRNrAOeWpoU56iLYRWScsr3PNcr5PxIg.BujI_0vwATLPDD8afhP2eA3WpmuT6rPMmzhxNIqqdLEg.JPEG/SE-5216FBCF-06F7-41D4-9E2B-19605E12979A.jpg?type=w966' }
      ]);
    }

    const existingImages_k11356521 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11356521'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11356521[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a37162209d09f9e36b72af13f5d589f2c3938754?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ebc96191cde6e74f2fe3687ed9fad1aca6dc37b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/08362325e8ffc5b254255e99e35c4ff18a5aee5c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29f6d59e0837451da7afa9dc64dde1d0f93e0497?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f909982ca5eb343e24743138b9ed28cd2d981910?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4c8967738435f5fe1ad47636e93972b095f42f34?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1b802923df7486757afc0813fa7495d43bf37c32?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c9cef84b82bfd8e7ca9aaf791065f064130fb108?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f59ff3ccd87a169ac1340c3c41bcc000f4ab6a65?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9dedec14e4df61116564b65b13562d672737bf25?original' }
      ]);
    }

    const existingImages_k11190567 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11190567'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11190567[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/140a15fb277f83362baa88666cb44b0a01768b44?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6c2f3d1189ce8a95354a4b699e8d1079777ae94c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b5bf00288656080e61516367e1d09be5c8025c3e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fc227273e3ecc0c782ff94fe027345b7c9c5e7e7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29815ef497e40a225f2e944150e94a264838646a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd1a5ffb606cb4d9f24c860961445c344908aaa8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e6e5727dba22b595b1c3aa44e1679c49634c34d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/78df5cc3913952d41f4abc6adfcc0beda5cc7c3d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/02768b9d503da07609ade0c040956624ae6bb99b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8b1a52c1bfad73cff3ae82300459baef00aa3d5?original' }
      ]);
    }

    const existingImages_k17163273 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17163273'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k17163273[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd88d580912b320bfdc2618030c5d3495749a16c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d519f906bfe3f1621150f3dcf1da46b66f2750f0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9cc39d8527532e7b669e6d6aad7fc58a5a5a01a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b5989c539d716dd5471cd42a0487bc0b547e63f5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1c1b07b8b5fd2ad705b78994c8d49fdaecb613cb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvf8kakavottj3plit0pmj66b/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33312552071&kamp_tidx=0&signature=YVjzeDPTjxhbDix2sEYOEVAuJyM%3D&ts=1755643271' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdafc04a69df1e14d593316dbc8e47e6687ca230?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5dc8ddcb24dc537e98c46ff8facca82f2851abcd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/91b38e650bfe9421648bc13998249e3e4d1aab41?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvettywr3z0ar498i000c2b3x/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33307327837&kamp_tidx=0&signature=5kECqb4btO%2F%2BA07vujoC2wz22ok%3D&ts=1750419037' }
      ]);
    }

    const existingImages_k220597413 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k220597413'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k220597413[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/9D96CE0AF47646C48E7B41BF852F0E5E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/42F0E8B92BBD4145B7B7F3A8C66092AD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/14A4F85D29FD48FA91B0359EDF16052A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfODUg/MDAxNzY0Njc0NzU2NjQy.neNlQJHUW-3fkZmlCW-nzHIIiSDshLvnYcAeDvhd9WMg.oHZvcQTY3OEKgImbtYiAvOnIG2hg0Hm7LDaZaQ_fUxgg.JPEG/IMG%EF%BC%BF5600.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjU3/MDAxNzY0Njc0NzU2ODIw.PzCaPwN4B1XWCxjeWvq1a2Z6hRPuDuqTl7zy2JxMV18g.5j5wnxGAAEjzZd5yOXF6Pd5J3M6rdDUc9mw4TwZ3flwg.JPEG/IMG%EF%BC%BF5603.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfODkg/MDAxNzY0MzE5ODQxMDU2.OKBj0UqUk7j24fV1xxzcHWuWSyippvUulABHHZIhyXwg.1qlrHnGG6V5cv8ulz_cNWCHCIo3zR0rCS4lzkODuG3Ug.JPEG/SE-c53224db-024d-4dc4-8cd1-86fe3fc38d0e.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjlfMjMg/MDAxNzY0NDA5NTgyNDEy.4YOT4efeRMgWftLC9vCiPEJYlSrYgVe-E63-_pppdpQg.cf4_jEjyjuQxLbESXls87FTr2zyHptcb_Rz_4NFl3ZEg.JPEG/IMG_8068.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjlfMjk1/MDAxNzY0NDA5ODY5MDU0.tNuzRSmWpAAxityk9W2A5UjJZ3E7wT57gLG-OcQNdSAg.u2wVV3-ue8orh0Fc5lPdyv61NhJHmpnYRPWs0yLVBYsg.JPEG/IMG_8077.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjlfMjc2/MDAxNzY0NDEwOTg0MDAw.2LQ11psJrhOjBXERC855nGH_vpqLU4LDDVlqwQNqMQ8g.i-ratpvSuSeZJdUS1ajxUnQiCpnsdKehKyYfd9Cykdcg.JPEG/IMG_8120.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjlfMTkx/MDAxNzY0NDIwMzEwOTM3.InA4moAOJnWJCppZbJ66JBERChoD0WXoVIMKwxCL1uwg.Sr7YhAf0jyGX_cw_gSE0hMZWu0qzVrzKsDCfvt78rSgg.JPEG/IMG_8122.jpg?type=w966' }
      ]);
    }

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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMThfMTUw/MDAxNzYwNzc2NTg4ODEw.drhKpYOAPX7ZDwSBIiZAQVUjCjqkrUUs2_NbX2xCU98g.ETNLaDHaTSAZzJ3HgRJ9I8Ppw65sxfzwNLzpLWHPUFAg.JPEG/SE-D3FCC289-5C50-4E53-9D70-B77AFF5D5A7C.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMThfODUg/MDAxNzYwNzc2NTQzMjEw.QvedSzeNv4tGojyXZYEozECYcwI9Q3yea8LhFi5UF2Mg.jwzfBA4tk_kEH0j0d0fwDsmNUNv2smQf6VXlgwVXAVsg.JPEG/SE-E3E76FA4-1091-42FC-A851-849E8B4E54DA.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMThfMSAg/MDAxNzYwNzc2NTM4Mzg2.Z8nvNy58Z6aqS70A2f1drMkBJOGfwmL_8e8ip8i7Kpog.IOUDFRpmLn2bJZ-D7Ol5DY2LzfJ3SWNJt3r8xoNs0AEg.JPEG/SE-89655759-C14E-4040-B56B-0594EB31B398.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMThfNjAg/MDAxNzYwNzc2NTg3NzAx.8V7NXGjLNTVejCum9SVHuFR9d3KMzaFBMZpCsoQGT4Mg.Xw95HBLyDzM-huIr4-i4bZnj1c-LJb-DFaiSEeICiTEg.JPEG/SE-19703D20-1D5C-4C5E-9440-8F6030C8AE77.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMThfNjgg/MDAxNzYwNzc2NTczMTUw.scqHpCnTLbPTDjKYx517dDj_C9XvV_MtsADRhE83VwAg.61tfwi-LeycHyhxslB1C_xTO4lYDGH4wCSmCOQZ0CTog.JPEG/SE-B484A502-198E-46F2-816D-B720A2F50BB0.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMThfMTgy/MDAxNzYwNzc2NTcxOTcx.zXYx40qBnNyD-eTxgc2-wDp7cNGU9ft3kFmlD1YpXDUg.027HZ2wlNul5mEjYhFmZ3ndRFAMJ6BN5YGGDe-8ZmLAg.JPEG/SE-CA147D6D-4FBA-4FCF-9189-E05E06D41330.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMThfMTg1/MDAxNzYwNzc2NTM0MzE4.itVT37ddxdHTkOKW6vLHchuDJl1vRiOK7Ti6A6I045gg.QPE28TwLrd07NgoLS7PvGBOsv5E6b-Z_SNlZJXKz6FAg.JPEG/SE-CA2B6FE7-9B2C-4650-8A90-7B9250CAC221.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMThfMjA0/MDAxNzYwNzc2NTMyNzcw.V-T2hsrzCggys12U8-4GTEgzCP5CTzbEs-kAgGT2zX0g.EDNv_vL338U48gS3jF-jzkGuXlbBr8aOE2c5U5xpQ74g.JPEG/SE-C4BB031F-D2F8-43BA-9002-6FE47F44F836.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjAz/MDAxNzU1NjQzMDE1OTUx.gpiek9aFjrMAwwFiNqO41HUKMTWYdlgiooStRjTV0_og.Jpi1xzzAXepve4BwpPYMuIlCUAmLmg_jaOSTznpAo-Mg.JPEG/IMG%EF%BC%BF1150.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057764323' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTcw/MDAxNzU1NjQzMDIwMTM1.LxHiB6d7ZekB9-RaWFH8bhlGn6NrSDsQ98eZeCYdDVUg.4duLQVgISC-ljsErBpI1Uo4UrMyA8acMNrFFpRrAyQQg.JPEG/IMG%EF%BC%BF1153.jpg?type=w386' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMzFfNTMg/MDAxNzYxODczOTAwMDI2.4ytZ4I5XAN2LVCxV8o0nWD4D1aAyEazXw4qTpwUcKQ8g.LAfGSRUYQwnMA_BejRyeMwkeka55-0whJlaf2wUpu2sg.JPEG/SE-5428F7C2-BEC9-4437-A17C-60118541E168.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMzFfNjQg/MDAxNzYxODczOTAxNjMz.S3OkhHahWElhdJqIEiba_d6WIf5GiiwhbNcee31zQN4g.fmK-cFhUbqr1I2ZpR1AiyW5PnSwLD7TKnjWUSnJja50g.JPEG/SE-16839C40-4AF2-4D02-9483-95306D0DC2A2.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMzFfMjc5/MDAxNzYxODczOTA4NzA2.gttqw7Gw9vkTBZI9o_v0Q6oFh56nWA0NhMF-XQ3WCc8g.0vrnWER2Bg8Ivf79BUyXyT5IfotAiEKnHAiRgf9vWs8g.JPEG/SE-29EDA0FB-3F74-4C89-AD0E-359C56F5035A.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMzFfNzUg/MDAxNzYxOTAwNjY0OTI4.RhM_EmL3RqfWPaiNgWmGzEbVkoxMTyGOfb6ZV4HIvyQg.-5eOY4gCBRueMez0NIz7-zjEECuneMVLC4XLopQ1i_Ag.JPEG/SE-1301DA66-D4EF-4C77-9FBD-7A7FC18A27BF.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMzFfMzUg/MDAxNzYxODczOTAyOTQ3.WzJQgfGZC7JIp7prkpADw5qoTmbqvNLYGFWzVFiUIWIg.sVC3ZiSsKQfPVnzR0C_HWFUGSrpf-B3sQgJ8jgyncFgg.JPEG/SE-C598BCC8-429F-4207-B553-E8ECB677A380.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMzFfNjgg/MDAxNzYxODczOTE2NTUx.DBama927T29g7UJyAi3U2yk_CtHZSRvQtBj7dtLwwHQg.qZsv8EEj14ELe5DVAs4ayitmFF8UEdt3dHOdoNgi1nwg.JPEG/SE-0863AE04-D334-4BD1-9A1A-F6158FD79582.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MjRfNTAg/MDAxNzU4Njk0ODU2ODM4.KGY9Z431hH-OBkB3xqLFghZl5VFqyO2MKbRfEnVjVUUg.xBizzRRxQmb7aEkb_jxy9VseD-aJD-6g4Q1hQv7Z0Q4g.JPEG/SE-49B37713-00AE-4FCB-8EE6-297CB503D18A.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27292203' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMTE3/MDAxNzU0MjE0NzQ5MDMw.MI0SK_ZiOIaNeToPM8tLDOnehIrkKV-E8gGys_XLyVMg.nAwnLvhMXaQ_Tz8xPk0Cr53ZZcxOv9JBPFoBrT_4738g.JPEG/1754214748486.jpg?type=w966' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4c95fbe5a6515649f162e669ac304d051afefc1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17703669' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bd2513c93938833dab89b909d2f8600510fec50b?original' },
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/533502673554c1e5ba059f260495bd06d04cb709?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3cbd365b24d318eca2d618c063a3e7595c5b6435?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff18c3c2405e14fb8baf9494760225d9f53f4add?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d048caff946e6671250363ac817e4787c05fb6d1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ea7ca9ea080b59485bbb8d80d574524a0ee1f2c8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dd461dd0c1a2aaf0866bc9ef408981a53ac0681c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/11abcd798d8944b1820d4f879bc5f4b3b8d8328f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjY3/MDAxNzU2NzcyNDYzNzMz.Cgex08G6tEJTrdkneEt8lOlTCavCOR307i02ggXyZxYg.XOlCTg1vU9mQeuQUvXjZ_H4NbIehtpYZyZRx__wNOp4g.JPEG/output%EF%BC%BF1693640660.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTc2/MDAxNzU2NzcyNDE2NjY1.nkvGM5YNWyNxjOs42cBM0XuQIDw9fk642Gw4sifc48Ag.fe22ZYXt7Nl-8muU1ySKmVXpp43QIKHUyLjtf_eXfZgg.JPEG/output%EF%BC%BF1405088465.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16740149' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTZfMjY1/MDAxNzUyNjY2NzU1NzEw.YVRnMOdrDaP_lYlY_qZ9ZbcmgojqVpJyAnMJmMobJfsg.JICIoOqJxbDmchCDyCHp7MBZJDr090q1RspcMc4r7Tgg.JPEG/IMG_2673.jpg?type=w773' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edc972f4477e162118f7cefbd40b9a0148d054a5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edb32acc40ef56c750aa303e341d938cdd81e4ebd1abfdd3b22661803303dcac' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc010bd2788bc29f602fb877535ec5f5e9a7b6511612937a722432ce1f241989' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a47ef0e73d3a32a1d3863cae61b03c4eee060eb90f60c84b2cdc80a91ac10ef9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c0a116039e3150ae4aabeee5f56fd8a9d614657?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4823094fde676303587435906fcc295a1a1f1fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k251321963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ef3c6861a71a35f98a8234c3bac3cb1981d075e0?original' }
      ]);
    }

    const existingImages_k11831433 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11831433'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11831433[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/506a7f7929442d153b70bd288fb3ba5d3b30aef7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjE1/MDAxNzY0MjEyMjEwOTY0.RAaAznahbn6INq3kN5hfW9fZFz7dZHvkJnC9HAKz2TUg.bDt7VXZ2a10DgZt-y1foym4YqtZEYW7MQig9HHdGPq0g.JPEG/IMG%EF%BC%BF5838.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTIg/MDAxNzY0MjEyMTk2MjM0.UiJr2LCx_52FA6XWNMhbe_tIWoDwTZgqeaU_38qfYGog.mb8PXeaTx6bOg6BJ4i_QqI65lRRWduRFF6OE5lg-Grkg.JPEG/IMG%EF%BC%BF5831.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTA3/MDAxNzY0MjEyMTU0Njky.yHeipiDEzv_q9a9-NH7fFsauhJVvt0U1BvRXpGdXmWwg.9KCRInqemh1HjJUR7ob8zgeSOyvb0dzXAWjrbDZFT4cg.JPEG/IMG%EF%BC%BF5826.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjQ1/MDAxNzY0MjE2MzAzMjQ4.JjcOY6-y8qwyCSCDRqsJj4K3SIUab0wQftpKi_Ut1W8g.P7pToaAiAz5z4QatUWbOmzhCQw2J5OfyVAhmmJWLuSog.JPEG/IMG%EF%BC%BF5853.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTk3/MDAxNzY0MjEyMjEwOTE2.Zm3wDXtDFKj_5sZmYwqLPmK1_QDs8gFxQWKV0tM94Hog.Nyh9-iRPvrrNsW6IcD5axp6XIFJbVb5rImnmJE0fIpwg.JPEG/IMG%EF%BC%BF5835.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTgx/MDAxNzY0MjEyMTg2OTY2.51loK5gSiQURu_Cccl43AGha82ep1zffdw89xp1hNa0g.GByJffmFJahBJEOOduLeytue_4jBBW3yh0Wc-J_QCnIg.JPEG/output%EF%BC%BF2637696279.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTY0/MDAxNzY0MjEyMTk2NDI3.Thn91T6H9tYzEY9QPfumsk9J2n5tn2diU0gy0PSvIGAg.AbPCet2rFqFt_UVPiQmWx8p4D9L1B6Gl5glLech3TNcg.JPEG/IMG%EF%BC%BF5832.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjYx/MDAxNzY0MjEyMTU0NDQ5.HoUCTN-WUYCMr5i_m_SuGweS0RWsHe4080Ihs5OBsYMg.92CSJj21HJbcfk4zEw6wxa1WIjjmxRiH9754iH8nFG0g.JPEG/IMG%EF%BC%BF5824.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831433' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjk1/MDAxNzY0MjEyMjAwMTUy.6SmaNOoLMBIOWOCtq7kL0Upc7_l2omiNwKuRtZFfshYg.NHgBLjvcGB62OxU4Alkd3m7qZDtfxgXuVBNwDhy4vDsg.JPEG/IMG%EF%BC%BF5834.jpg?type=w386' }
      ]);
    }

    const existingImages_k1598052634 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1598052634'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1598052634[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1927308577277d1901e77533af8f484d466f5d2a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/159058688da642717eb77bdce8319632cf593d64?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ea3f326e40781487f4d3a7804f5501ecea107916?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/52486812ebd46d7c0c133a1df10f159fddf0c292?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6925d08758b8e85f3455521f937353324efae0d4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/09335ec62e9b2ee808fa3826581d613baf7d4334?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/579a962e79f5233396f3ba20b5864e64c01945f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0948b053b7bca4b16df5cb4599a2205ca6a96ea9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/10dc35f71090d5525921555435e07621e4befef7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1598052634' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6e36037abdbb9e2a823fac82e5fae8117d8a559a?original' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e239b5199f2db7ff0b32e004a9c02aaf08394eb7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b4c799f7d45799768d9a9460c8a5129121330f69?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1b2d656b07137b5c3630f9b6c7a569e9944bf7f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/995c05c30990b437bb121f3ef74a7702582da12c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/516cd1202205aaf29a39ab0870e1e55a267c2a48?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6f00d7b89816e45bbc086476d5453c347ebf39c5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/abb840d0091ab4722bffc4f7d02783705add5d6a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/896d6936812c385ba549cbd23d908930c310ad23?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/39f800437d22a03ffc3d1da2fa8fa44a216cc573?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2099116820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/325e2399eafb50a341e0793b2491fe60d0932a88?original' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjlfMTYz/MDAxNzY0Mzk4NTkwNzg4._AEbKlYPqsgT6XbwtPEPTWzlf3eiwKykofZLeLLUgBcg.tgjU4JSCdmY1lHp9RsDi9cOIE8HhDX8jSSRrCrkk3bgg.JPEG/%EB%A7%9B%EC%A2%8B%EC%9D%80%EC%88%9C%EB%8C%80%EA%B5%AD_1.jpeg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDNfMjUg/MDAxNzYyMTczODg1NjAw.r0DxCBIWKB1-fcEcecE3R6WCn8Tg2cabJrFehF43tJgg.Ug6kAz0DWQ618ML6_SdFao9sNwUw7HXQuV5uE__OeeAg.JPEG/KakaoTalk_20251103_195248409.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDdfMTY1/MDAxNzYyNTE5NjgwOTgx.7PKKSx05l466BbnedbRD4BJbvvrV5ujOyRBmovjgCJ0g.Q3GunagZ9MvQ8noT45fO5FVG7X-h-HOK_Fo2jz-t2Swg.JPEG/output%EF%BC%BF3631986000.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDdfMjkx/MDAxNzYyNTE5Mzc5OTc2.RmYp5eXEebOsXoDpGa8Tv9xkTEgveFK3etSHGbB2qIkg.isgWqRt21TZEfCTuGY5M1WRrdExnhBltUpCo1cOydgcg.JPEG/output%EF%BC%BF3843359146.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDdfMjAy/MDAxNzYyNTE5MzY0OTQ0.eNvuUcWJgtPWGUi0hRYuSRWpl2XeSwWmHC8WSRxilJQg.B1XH6s-_8f6-Knp0QahR-K7AuAheJraCHSgEIoZURIsg.JPEG/output%EF%BC%BF3021913913.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDdfMTU0/MDAxNzYyNTE5NjEyMTU1.-MjsbqeXps-HgvRuLBAqUymYJblGIEKpfr0b0WUaMvwg.QKJ3QNMVsuaFQoD_NiJSTu9agE59XuhDTNim2A6rsLMg.JPEG/output%EF%BC%BF1496294878.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDdfODYg/MDAxNzYyNTE5NTMwOTU2.-NEhb1sRahk0HxpemGzdJ3qvfghlmooNb3eJiB7xX8kg.DQSdqI64tX94W7t1-2b2xis79IzzEDJG9VhWlChziXwg.JPEG/output%EF%BC%BF3343752020.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10346328' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDRfMTc1/MDAxNzYyMjE5NDE4NTE5.Lw-Geyq2b9V62MNmBdsyKVY3339JZbe4rEP0LiJXeggg.FXBv-181SQra0UxBoZ5c1sGtahBzj6l7Ev-Pif3xMp0g.JPEG/rP2265221.jpg?type=w386' }
      ]);
    }

    const existingImages_k327142548 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k327142548'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k327142548[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMTgy/MDAxNzY0MzIyMzU1Mzk2.QKCqxNzmB8lPupXVO4r0QfOQTDyf-iP7MWTjWJz3-MUg.xKWJ_KzZJUvB0UIjcTwB7Nf3YxbfuYnaeEOD3xcGlAgg.JPEG/random%EF%BC%BF6D709AFA%EF%BC%8D1677%EF%BC%8D412B%EF%BC%8D82C3%EF%BC%8D3CFE11D1E534.jpeg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjhfMSAg/MDAxNzY0MzIyNDMxMzEz.4QbsU0Kxgwb8aWN8zwFoqpb3iQO8qy20RgjSnXSAfZog.nDFK1Y9CoVLmI_QLI2da3gSOqCN9_k_Hkrre4Efx3acg.JPEG/output%EF%BC%BF2114785747.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMTgx/MDAxNzY0MDc1NjYyODEx.f4t_-WnljvdRG0gqTsdWY0qLg_sN6DsPMt8Q_7XojmMg.ma8Y6LHgOZIpNmgCeRU56kJcfwiyzJdQ4JFB6dButcAg.JPEG/IMG%EF%BC%BF0151.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjZfMjky/MDAxNzY0MTIyMzU4NTM1.SyMibrAj6Typ1zpwtPT2zRUQGO59tFQfEPYDxiL3FJIg.hBM63Sw9nQIJq5U11wGeqgQX57WfPEOMyeeTXQoX_yEg.JPEG/SE-67929797-6BD4-4929-8F15-7961E0C20D81.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMjM2/MDAxNzY0MDc1NjUxNzg3.RyecW5dT4dUIuuwXKa5UU1TINt71RFc4r1eoUQVEnEEg.0A_7gxz1oGlE2eqr95WWQIG6Sea5xw8ka89PheozSXwg.JPEG/IMG%EF%BC%BF0159.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMjE2/MDAxNzY0MDc1NjY3Mzgy.0gbozqS9iGwnTwLbwLGYsbu_rfJEM_p_6riTcNFmi2cg.2zOUidHe5Vd9anBRgjkDS_8uG4rk8wti3KjTNBxEJJog.JPEG/IMG%EF%BC%BF0162.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMTAy/MDAxNzY0MDc1NjYyNDcz.m0JCkDWhRPhQyZdRPXcjS2C-VWJTZHt_VwD0QqKPZf4g.WCHzqsUylh-wZd6kgvLFyUxD1at2txWVTzkmNgWz9K0g.JPEG/IMG%EF%BC%BF0152.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfNDEg/MDAxNzY0MDc1NjY4NzIx.OwdyNNu_RYQUDYSC55w3EE87nS7mnG-6PP-5YkiWx3sg.YbKv0CG_Op8CPRcO3-vyqiB-CtqK4sTbctKN0ZPYaMUg.JPEG/D01006FA%EF%BC%8D248E%EF%BC%8D4A73%EF%BC%8DA294%EF%BC%8DB57A7A63A676.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMjM5/MDAxNzY0MDc1NjY0OTQ0.w61uKlseCCGwYdHmyNL09RJ2OvJ94XHjQv5WS9hT_yQg.VCksIjvzbQ9iZreNBrZgtE469U7esNOkOyyTPCZnbvwg.JPEG/IMG%EF%BC%BF0153.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k327142548' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjZfMzYg/MDAxNzY0MTIyNDM4Nzkx.67Q89CT57vJCv0W76dSys6lpaUO9xwGwj5RGXaDu0zog.FDZTvbKwQd4zjlvbofrPAcX3JwQT_TbYogpitDiSp9sg.JPEG/SE-D670E932-6D85-4DCF-B0F6-8F73144E069C.jpg?type=w580' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjMx/MDAxNzY0NjAyNDcyNDU0.goHhqDemIvxLn2VfnZ24n3g-UF56dJybCwqN7iYZOQ4g.GVJ9m5bzzsTPcsYCJNWYBWnC-aVHlUgX9j8DUC4saEwg.JPEG/output%EF%BC%BF2335540555.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjM2/MDAxNzY0NjAyNDg0Njc4.79_t_kn4BjwZl7EgOm_lHSICrbuPBns4tbMwRSy4Xd8g.DkL5auNRxdKn7kfYnzGA-dErFuFaarjXHxV-5v7tlf8g.JPEG/output%EF%BC%BF3093277657.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjI5/MDAxNzY0NjAyNDcyNTUw.XwVIu7FG3GXn9-N3kW2htzLaGzOMRradWeH8f47F_8Yg.ym-ItPL1YNUQa4imD5W2PL2Y3A0lNsiCwUenbfEofnAg.JPEG/output%EF%BC%BF303431211.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjUw/MDAxNzY0NjAyNDkyNDky.0MthK15eW-22pkcef57I7pFr_4pIyWtu3D_lwoHgzXkg.ZuDjmjPcG1kyhXRkgde5kil-2pcQ-xNeZ0WXGNdpM4Eg.JPEG/output%EF%BC%BF709327674.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1282659967' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEyMDJfMjI2/MDAxNzY0NjAyNDkyNjcw.4p9P28tK2UX8Rg3xorXK-zZAO-_UNOzSmHQalqvQs5Eg.edfbNSeHfaaaUl-9OfHTqcGuGXXUtmtjtsccsqXH8okg.JPEG/output%EF%BC%BF1128804049.jpg?type=w773' }
      ]);
    }

    const existingImages_k24725293 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24725293'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k24725293[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ab1302223e47f2af0907fe0354c00b1c8c348343?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1cadbcfdc4597fddebc984642efc84ec104e31ce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db6a74c5473714e72719839eb0ce045a06b68765?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ced4cc2c33aea6fa237d2aa1f4537b12ce15b698?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/535ff84ce90101d8d5f5e9199626cede9074caaa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a7773036bc7709a755f78649401bbb4588fee6cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/606d0b972d17254125fb531d071f7f49907a7b2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/925c57bd4b4d5dc08f699d3f864bdd7324849f5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/baccffd4476095a549e911fb142e2b3205f85931?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24725293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/977f66a9ac6c9e68fe3dc8d20b694f24abe448ff?original' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c0a49162c2a34bf9ff18a4921390823e3a1cae2b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/71c44bd8b06772857068bb9997692e881127c830?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7485d9f4694aac4c95658f3addaf551797ce2651?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/731aa6e81b7ca8c51be5778bd83c819a73e7aa6a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4c81cb7be52bd494fab9fcb11f92d8500ad13a69?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e1bf67b3f301392a6e0298570ff67c1ca1bd2b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/153f1f39ab78a4379576147900b0d907df8a1c26?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/24227deab168a34fb4adf1d0c905a260690c3b05?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/da4c44f40a07104faa918ac75c85d48de1111fae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11231325' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a363f0df018a1d49c9ea771b8219c5ef37c3f633?original' }
      ]);
    }

    const existingImages_k15847929 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15847929'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15847929[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTM5/MDAxNzY0MjA2MTg5OTM2.9q8EGC9Fghkt2qgchRiAybK8uD2ZnnQVOcsQzyZmEKsg.PedmPjUh2vSEif92lhUA4RSFaXXd4Ewn43ypAFhehi4g.JPEG/IMG%EF%BC%BF9414.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjE4/MDAxNzY0MjA2MTMxMzY0.b-qdkKApDdKfSnhQkL2BoRm4LTPfoMloo3lmmwfxZtMg.0yz6U-JBitSxDgpLnreqMRi2ysOzbmATkgOo0nrfk0Yg.JPEG/IMG%EF%BC%BF9408.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfNDEg/MDAxNzY0MjA2MTg5OTU4.Wrr4lHsKLK979AYYePir6xAH1kkW-oqqIQCgiBrlOgcg.-X3_OWcFaPtk7JIf91lPEPqFe6Q6exqHUeBJXBoUwxEg.JPEG/IMG%EF%BC%BF9413.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjQ2/MDAxNzY0MjA2MTkwMDA5.LPQtVUx3tJNAAog4FdnjJr6VIwnu2gUlMC3hx0VlZtUg.LLCv9ixE5x30mAxjGcZqKsHfdurnCvYUAu-IbTgFVyEg.JPEG/IMG%EF%BC%BF9415.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMjMg/MDAxNzY0MjA2MTkwMTYx.deoyzPguSiFvpn4IqU1b5wKj63XfAgqq7xcZP2Eu25Yg.NGULqJwa5oswhXgixAHccVJJTsdYGj3vgqKtC22dO3Eg.JPEG/IMG%EF%BC%BF9528.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjdfMTY1/MDAxNzY0MjA2MTAxNDE1.MGWe_7y0lULN1NWJTLEv3VnoC94eWdZF4Nx7eC5Kygog.CimsucLU6pNOTEajos6elRcnfJDi-8va_ou4f3qFLegg.JPEG/IMG%EF%BC%BF9409.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMDlfMjk0/MDAxNzYyNjk0ODY1NDg1.9Q5YyspKTxPeQc971CIwhU_cU8-nwxAIRSKnWbKpM3Yg.AxJTloqUq9rlr1ToVcX6gBlwYmQOJRmpyaHth_5eOvUg.JPEG/IMG%EF%BC%BF7647.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTBfMjM4/MDAxNzYyNzU3NTQ2MDY5.kpC_j4OAQRmqv2fq5TguuL2TwEFrjCIP8FrrzQCS0kUg.VdylmSJ9qvi2wjOEDVlgEeTByOWroT2Fa11ULXOBldEg.JPEG/SE-fdfd6c63-502e-4f77-be44-a7a289c45d92.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTBfMTIz/MDAxNzYyNzU3NTQ4NTc2.IcGQcQuX6NAJdLHSMYHiyj1TpaP7XwlJtg0oYQoPhK0g.9JQ8DxIzSQt4GSHNaSnnZ28Kh30xzdjhUwDZyo7egNcg.JPEG/SE-870fe557-b794-411d-a0a7-3c84fc9f6b54.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15847929' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjBfMjEx/MDAxNzYwOTE2MjY4OTE5.Cu69uTYx9t9eJRgyQ3obF3ayEGZEAq5Ok6nnRIuBP6Ag.8Dgx7VrGUdSEMed3mFiA1sQ_Qf2zAoXGUg_ldAGyKzkg.JPEG/SE-e946f659-abfe-11f0-bdb6-2fc4613e02c4.jpg?type=w773' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ad4c5b021c822c7f423f81a0acf3302b4eaadde?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1985785355' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/63f9a571f7c61046db364f47167a4b10f545a4f5?original' },
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjhfMTAz/MDAxNzYxNTg4NTE1Mzk0.Xt-z0Ur0YG1Nf_Ge8R9EenXyzV0Aj_ENJ8Rx2DmPxeQg.6O8_4nk50t0VvjGO-ScOpFWp3XDl7dBxyWjlSHtqTS4g.JPEG/IMG_3996.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjhfODIg/MDAxNzYxNTg5MDc3ODQ0.PxJtoYmNReZL4S5ZQNM-8lk50Uy4teDqAGKggrP7hZMg.HNEPtbBczO4iMNRhPMuhkSoPMh_AVq2Xbj9qIL4AzmEg.JPEG/output_421435655.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMjhfMjM1/MDAxNzYxNTg4NTE1MjE1.3zQ-VL2GPMWyc_h7305eZa6V4bUp7zoO_9EuJJff4_cg.4aTlYhI0JEgqYs_--EVkJFNN6jJJFR7JGGwiHQax0vwg.JPEG/IMG_4245.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMjAg/MDAxNzQ5MzU2NzA0NTg1.SbFGfDqy_0mxBrjskr-xuNdLqkXTHGdMgPQBQg7LKlog.apISAF203nQG6QEuzzG_oVqf4arWagWJUb4XoVgbagMg.JPEG/output%EF%BC%BF3180444842.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjBfMTkg/MDAxNzQ3NzA5MzAzOTc0.IP_0n4eXchf8QZ3l9udZrbf6ddEM3jlfaXG8IVcmbPog.2rbKZBnv6iMTF6HuDeOTBmSORe2XL_v5loAOX0BQ8DUg.JPEG/IMG_9020.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjBfMiAg/MDAxNzQ3NzA5MzAzOTM4.Q82WVbzYibITi855fA_dAjkxqztfDc9Y92ESAuLIjwYg.5yLY9_cJikBNV5h2BecNnhTcZHAPA7NNx1lAXfCh7Lgg.JPEG/IMG_9021.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MjBfMiAg/MDAxNzQ3NzA5MjUxNDQy.M9_JhiOmalRSsOgrUJqmaR75rrS3bciAV-Q8kyCArrYg.LyYml0aTLyMrf1X0MJUAI-vk5Kb_qWILM2kgBbW3Iqgg.JPEG/IMG_9004.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjhfNDgg/MDAxNzQ1ODA5OTM1Mzk5.l2xC95H-tzlpUl7Ut43Km4ilgI7lSix5EI7-jxQ1oDog.VDIqN0Qn66b1ctHrbfry-wFV_z4t6xU4mWXTuejSkEEg.JPEG/900%EF%BC%BF20250426%EF%BC%BF200644.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjhfMTcx/MDAxNzQ1ODEwOTgzMDk2.f6MY4BumqettyepPMJhoNhHGZx1mTXeb0Bki70Vdcmcg.3YwN5c6MMC2I69QSSUNTffk0jlakxHBQHT09PsTIsZwg.JPEG/900%EF%BC%BF20250428%EF%BC%BF072919.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k42143703' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjhfMjc3/MDAxNzQ1ODA5OTkxODQx.LxluwLCGqqoLzOfpqiZrTRMQMZXlb5Q5EmUktQYSDyog.pjzT0kCZ-CrrjEQghnVg5ZURwGt_-U9K2VqodxznYygg.JPEG/900%EF%BC%BF20250426%EF%BC%BF201150.jpg?type=w773' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/28c74666ef59fc60090d883ddda657d59d12db0f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cf2dd7ffcd1cf922e907c3ce089c67507dc39e6f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/20f8faa30cb4d73ab7c3f7b15dd659c07ebff7fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdd24e6ea21014584f5b8a60320fb7daa6d84a49?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ef6eb7d702eabd147df2e86eddd9222246ca435a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0f0656c170e1b5f08d230a488327873feef94517?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/494b4ea3d1abe8b7315f6b914cabf137a0001c8b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a282544feeb5d345f62f3eb6dd3b390ff82de04?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5131e77be4617ae2bf25c5139986d95d17384139?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9348308' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a6534b090d12f710622685e41a9903a919553355?original' }
      ]);
    }

    const existingImages_k8025375 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8025375'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8025375[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6f374f6e6a670a03e744f5b802ad9123072b7686?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/68b0c70d55d02aaa25ad6c3fd08e839a1639af91?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a20a848c6e5c7dac313879956c6c56193c0749da?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9fb978dadfa8dfcc9cafccc27276bfc30a25f23c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fd0050e2f2cfdfc199a4d17e89fa61d36ddf2bfb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed16fcd3b99f0aafeb6868ce52d7106f278f3802?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9b5c845b247e1555d8d6dc6bc0d34cafdfa873b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c3ee9a6e4931a08310c9ea43b97a0621332582bc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5004a5108cf470e30f3623edc2c329443769fb8c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8025375' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/518d0b1c6f597394350c9eeea27a5251b0f6adda?original' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a32ed6a5d26aed6347b57e72cdccff02f33e6044?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11128820' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f1ffa8cad357a7be012517c40f23f530ac79bba?original' },
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhAfVMsty_8us0uxZhqNFsb1hrsv8xhK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhAJu5tT2_rk8s1whHkbYuWkUuNbFhA0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqh3qIoJaU_5T4h4xKBsQ9UmwZRWqBVy1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqh3SkjgoE_V8phJu2MkbT3otkDP3NO71_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqh2QAwAW3_rnFkltWC9JoS99L62Fgkq0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16853817' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMTEw/MDAxNzYzMjU0NDgyOTA2.eM05_IyxLyTGyFhb7RSTatNfo8aJ3CFwMF1tLDgAJVUg.n5KD-XEzwyGu8NdIA8vu7cRqfQggP5AE2fEYhZJPbM8g.JPEG/IMG%EF%BC%BF0551.jpg?type=w773' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15751933' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTNfMjI3/MDAxNzYzMDA4MDQ3NDAw.rvjHBmXLV0BI_SLHgD-C1cDxlj8yJUJbPaLZ_j-QBmIg.XgX_o0ZLu05DyY8PbmsgzdRSXJrTYAg3aUU2S7mzfRwg.JPEG/1763008046468.jpg?type=w773' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/800950b0d2c3586810fdab9642878e97ec153739?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0b57deb2ba6e14c54be2f6c1f3a077b7235a10cf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/58eb7674f2888edecb6338844e2186293ea96885?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3428e39b4a9c47b660ccb29d9e6789cb438f0bfd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16904322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2c7ce809f918df292c6b8dfaf96ab53391ba409f?original' },
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/248c3885b4d1624d33fa62da6cc28718cf79bcb5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/04a0df419b2ab8de907580fac309f490080e6f13?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/485936eb1b85ac7428d3fea13e3ea821773d95fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b20f0f85a0755d0e5852575adff1eb109683aaac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83b1a02aa4fed9157753b1d1b147d33a0ad82140?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/564a7a2328e5c1379f6c7c8a5663cbada4f032ad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c53421e5cf1c3e5719e80cf0992154a853e2de29?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/93db18caf83bda0c2ea8215e6044ecacfb5efe14?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9d6f2253d87c88b909c8fd95cd35b2f562a69f7a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25048467' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0a4d428ce149c57c73238938bb32f25153dd8dab?original' }
      ]);
    }

    const existingImages_k16296804 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16296804'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16296804[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f3f287c48c514df36e832550887b0f6efa550358?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2f7257b8d8896ec6b38e35d9262035aa95537c3e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/84404e76eaecc1da22fadcfb48ca480f54a9c40a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ea23888b5d7eba7a47a0770f62252c2a06f2372?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5055274137e694908168e66d1d9f3eb1f0b209f4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMTdfNTAg/MDAxNzYwNjk0NTUwNDA1.UbT2rOmdppLM-C5fcP87-q4E0MaKWlzzimpTjFp-FWcg.v04ospQdMB3OEr9IC3JtVqyvJMU_Ec7Jp40gpQEO5C0g.PNG/SE-3A6E2433-D510-43DC-8FE8-307A5431FB0A.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAzMjVfMjcy/MDAxNzExMzczNzI3MTYy.vvjWSGoApFcUvBYKmNECGvCS7rWTbjOJyZ4RmRyKxEQg.SYi2NW8PI4q6NCf1lj4BHTPBvxs8Z4HPm9bO_9oRRCIg.JPEG/IMG_0580.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMjgz/MDAxNzU1Nzg4MjU0MDc2.WToGFB1Q4sxW1mrzvj-VxyoSRugog3g8EV_Bgldrizwg.8m1j7WicVK-YWFIQzhiLdFMBdansKkU0ivKobMz9Wikg.JPEG/SE-e84a84bd-75c5-11f0-8d80-ebb3ea971e7c.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMjk1/MDAxNzU1Nzg3Nzk1Mjk2.Sdl-uzBQtenVPqSLuoaIzyYozq8Ahz70TnRBNmnLVcsg.RYtbbZHJwQfdFRwiMHYwDxA5yRT2C4gxR-ACFWJAI9Ug.JPEG/SE-e82c9c78-75c5-11f0-8d80-556dcc15c510.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16296804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMjY3/MDAxNzU1Nzg3OTM0Mzc1.biulKQuYyAWQM_sakk9JDndzcw6zrWnJk8N6a46Ppncg.SoJvgERvL6XxQ9QI36nHbKFDL54z4C7ZEiFJQUDb_dsg.JPEG/SE-e838f889-75c5-11f0-8d80-df760bb96355.jpg?type=w773' }
      ]);
    }

    const existingImages_k13093208 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13093208'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13093208[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f9439e0c32462410d43976db476f31ce724ed331?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c78a561d8202f078b0565130b2a6d9a3316a3c28?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5cde54a452059535cab66c543fe33a1f7035331a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/966830af1213d951a4e522f22c0c3fb9144d6812?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9c751e154d08c7b0c5b7c5be77fb99967aefaba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9cf26698acbe0cbf0957e5f7010ab010b0b8ce80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f1d68067d3f89538823191cac9a2704a43400eb7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d02547f6c2be517db317c4164ce218a5fb226e8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e5f6d5c09b2aea96cb6021c8c66c34418baa1c1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13093208' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db309035f51f921a4ea14a44fa3c2e154b189671?original' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjZfMTM0/MDAxNzY0MTQyNzE1Njgy.TMGnbfXT_pUyzaZBt11_y1ddqjOnH3vIvhLb4mO5Km8g.mhxE9WObuWWqASz5jIfQFu2BTEP3Jm1yhiNHXKZ02vwg.JPEG/SE-35c5b52e-6afb-4171-8c99-dc34263ab31f.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjFfMTAy/MDAxNzYzNjgyNjk5MjU1.s809O26ur4_A78iuvtxoBMlGhvxXKqYJKl92JQ9f4X0g.wOKfOAGUOpOnlvJNciMzaNzDWqafTxnYjCB0GULnChMg.JPEG/IMG%EF%BC%BF8012.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjFfMTUz/MDAxNzYzNjgyNzczODU0.XpsHrLlQpwenPRpCA72Uta3g3TWgj8bE-czW6Vk4AZkg.ugI51X-q1p-SuVxCtytYqdAt7Rok18XUZt1skymmEpog.JPEG/IMG%EF%BC%BF8011.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMThfMTIx/MDAxNzYzNDQyNjg4NTky.sQZPeCE5uobII1NXMXwCnnRy_NlxaDwMrgbuDdSjwXkg.vyAk_WDhoab_8myxbUndsNGTIg4-DGITbDR2isl48Ewg.JPEG/900%EF%BC%BF20251114%EF%BC%BF193531.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjM1/MDAxNzU3MDc0NTgzMzUx.K1NZnIZvknmz7iDD4By92ObPLZLz9K_JcSeiz1oEYcMg.52Gyqp0cAWPQ2oRVkRSrFFMK_widjq2CWIzH-ji50Pog.JPEG/SE-6AE36DEA-984F-470B-BFC1-2B06E0C5B67C.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTM3/MDAxNzU3MDc0NTc1MzE5.JPJv0dW7qCA93L1vGEHneFhW2zd-wvK3sevgXJpGVc4g.k_AO2cTeSA5PteQJ0Imgg5ZCnE37d1HoEdjz9fwAelYg.JPEG/SE-0DDDD3B2-2518-4070-9046-437A0EAF4473.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTAw/MDAxNzU3MDc0NTY5NjQ4.wZDZ2NSn3TnzibjcvrAlHuW9CniLxKr8jBrSc_EyPsEg.ckSKjJVXOLcAfSiP_Vo7LS94-B225tdzn2bSUR04sZog.JPEG/SE-0BBDFCF3-7F51-4A8A-9B8B-D004A43029D0.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjAw/MDAxNzU3MDc0NTczMDk5.ghoB3Sazi2u8OfW2VuKlnnrAARl6FYCMhdIq9-aiBGwg.XPNwKtCgmwRjunrJ8cxGqTp8kjr-nC8epYPqGqzT6Tcg.JPEG/SE-F6BC3D5D-2420-497E-9699-FFB2EC2D813D.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8002833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDlfMjY2/MDAxNzU3Mzc4NDY4NTky.-OlDQFHOLFkwz_sBvgReH_jL0baJbtlbKBoC_77iOmcg.JJkK3BYV15HiWkw276EQTMBtuWJ4gjaB61_WsHJ5dTkg.JPEG/KakaoTalk_20240901_224901597_04.jpg?type=w966' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1297162293' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eb9cb6277ac78441ed4629f206d98665a45c2f9b?original' }
      ]);
    }

    const existingImages_k21405938 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21405938'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21405938[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTRfNTgg/MDAxNzQ3MTUwNTU5OTQx.5zy48dWs01LxX1odVyvJj0OzNDjf6bqthQE_5zBLsSQg.wMmJXVgPCZlae9MBknKNDVwtmXn8Sy9XD2prq5QqCNQg.JPEG/IMG_2654.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTVfMTM4/MDAxNzQ3MzE5MDg3MDE1.H93Mu6ClnRpGgLx4B1OYeLeK-4UifsKQbwDd7Ei6yJsg.vG9ywEnt5s2Qs581JU0XlzKwwOm0CtUO4I9zXm8-qQ8g.JPEG/SE-27F5046C-05B6-496D-9F5A-9FFBE18D1700.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTVfMjM3/MDAxNzQ3MzE5MDcxOTE0.DzuC02sy2-QlvkRU7_NJmriiNaqWNUUPKDIIf2d3Q5wg.xw7bxJ-rDukDhBuuQUuTwEb6ANxaaSMl7x_CYxjAtswg.JPEG/SE-0A71637C-C60E-480E-A0A8-5649119CF117.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTRfNTUg/MDAxNzQ3MTUwNTYwOTk3.bLsOUA22URPGdpY4nUnPQQ2wwMlUVlud6cdv6jPhzBIg.fDEL4sUqBCa9rPS85t8FsUeSiXW4aAdcqkd2tbSrhmEg.JPEG/IMG_2671.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTRfMjI5/MDAxNzQ3MTUwNTU5ODMz.lySMoTwQr5G7oOVAYyGZkv0JnkFv_p0cWn1BquNyUeog.RPfGiO7PhBwIuDANunOmtig3HnP11UUDvAsVrCJ6Tw0g.JPEG/IMG_2665.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjhfMzYg/MDAxNjg1MjIzMTU2MzM1.J3-g0HsidOJEGgd4SEdHwbnp-5fe9E0e-mHFUL4O0ggg.eoULEJpQZNnvQVEiHu3Xz3e1rHBYNn5pLso3oagGQv8g.JPEG.whitemi10917/KakaoTalk_20230527_173714536.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21405938' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MjhfODkg/MDAxNjg1MjIzMTY0MDM5.A3EeG0u5dpbfg2yTlT0huis1q-fA_-ib7zIqldekM-Ag.pv0REXgmKvHZW15xmc7-uB0LLVbdApDjvW_bp4UcI3Eg.JPEG.whitemi10917/KakaoTalk_20230527_173714536_02.jpg?type=w773' },
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMjQw/MDAxNzYzOTk3OTg2ODc5.3jAtMXNFWm1hf8c6ISgpbMTSkAhHnZ9Acqm5LSB6s1kg.BfOSrS1ixq7sR-GmLWrIET7YBUwPCW_phmW4xqUhUT8g.JPEG/KakaoTalk_20251122_144649776_21.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjVfMjQz/MDAxNzYzOTk2NDAxNTU3.2n7odCViuvxwy9vgOCSNPtrYaY73apU_yMjPjym7hNIg.DVjX87HENhSlRmrJL8uM4hqkR-h4-HhKNZe0Xn47d18g.JPEG/SE-7a6b88ad-6a7f-4eb4-943d-42b4ac3043c8.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMjRfMjYz/MDAxNzYzOTk1NTQ0Mzg0.0zJ_SrKay3qisr8YdSq3KDoZ1tACgxWCeqpuMGqhWxcg.EeQtCbUm1Ga10G9pUuUVukT7qWI3i78cSKJ0GhwVAb0g.JPEG/SE-505d2a1c-2cc7-47e0-9c6a-84b997982ad0.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMjUz/MDAxNzYzMzAwNzc2NTE1.5gfI1TKB2mQKAhNYN595v7VIvLRFCXxJhDSop61FtOQg.pVIKMpBCOFFIyAo_Ai2P9X_Ugcd1MaQ9iTdjIxoClFQg.JPEG/KakaoTalk_20251116_221633723_05.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMjA1/MDAxNzYzMzAwNjYxMzY0.4HBTEWajPHlLpbdysIvKg0z-i5Tp6feuhjuat1nFSQMg.HaW7UJxnioP43lKPmVtiYZkR7y26GUk34G4QaAywSDsg.JPEG/KakaoTalk_20251116_221633723_03.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTExMTZfMjYw/MDAxNzYzMjk5OTYwMjU3.SqwYy-4n2sEx5-9jtxdhNQ0rLQ1U9rkc6GW7vr3-DXAg.VE1l5qGTm0Xjydgt7SpuowUV-B-LoyJBPX2bGSd8a38g.JPEG/SE-e1ec2841-5391-43de-8507-c15142f6edef.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2061622071' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTEwMDRfNTIg/MDAxNzU5NTY4MTAzNTA5.8jHktuDeBMCe6Nv-lbY_D1hGEPL_7boWvOmlv94t820g.wQNiNmTkysdi4Qt9hSD6pjNaZlmZkZ-S9y5iL3bsje0g.PNG/image.png?type=w773' }
      ]);
    }

    const existingImages_k1420643780 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1420643780'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1420643780[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/577aaf733662fbbec46b1dd0ae59d0dabf88003f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d0dcb695cd17a9672bdcf5210c5dc91258256669?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/05b35ed7802e251bfdb8482b3e26441b4efa8129?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvqb7dqlahq574uiwqmjkg0hj/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33317019524&kamp_tidx=0&signature=mRFtKbTrGGBX0JdFDCbZoT%2FJpjA%3D&ts=1760110724' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a2e89da43f0de7e7a0e94d9d8105ccc6325a5072?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3d75e2213dd2ecbdd07afa582b0d58a3742eead9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dde3731ca8313579249e1104444a3bb9d6e7d8e8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/26cd3981b7f65ca3081299410d8842aa46f0961b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8b6cf2d3e868296e4de5d2917abd1526a48235d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1420643780' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ffcf5f73858874de82e1b613885829182e8b1468?original' }
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
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f6ce1a24ce922613f3f17ce969d0a0b32d223687?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df13756ea9d6ffb9f2bf6a912ccf86dfa3dbedd0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c45612c2a0a37bd95f017f95674e5c484626b369?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/691ebd7adb6af4e667fdc42f1e0b809284714444?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/750fb932fb2c0096e2896d736c1e29a07272b209?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6808ebeb07456ba87cffdef7f574227c5402ef79?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1039797847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/271d17450fa4b55129aeca40582010a45142ebb8?original' }
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

    const existingCats_k20169194 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k20169194'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k20169194 = new Set(existingCats_k20169194.map(r => r.spot_category_id));

    if (!existingSet_k20169194.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20169194' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k201733788 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k201733788'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k201733788 = new Set(existingCats_k201733788.map(r => r.spot_category_id));

    if (!existingSet_k201733788.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k201733788' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k23841409 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k23841409'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k23841409 = new Set(existingCats_k23841409.map(r => r.spot_category_id));

    if (!existingSet_k23841409.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k23841409' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10283822 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10283822'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10283822 = new Set(existingCats_k10283822.map(r => r.spot_category_id));

    if (!existingSet_k10283822.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10283822' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1765101641 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1765101641'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1765101641 = new Set(existingCats_k1765101641.map(r => r.spot_category_id));

    if (!existingSet_k1765101641.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1765101641' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k181200383 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k181200383'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k181200383 = new Set(existingCats_k181200383.map(r => r.spot_category_id));

    if (!existingSet_k181200383.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k181200383' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13592026 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13592026'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13592026 = new Set(existingCats_k13592026.map(r => r.spot_category_id));

    if (!existingSet_k13592026.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13592026' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k997227109 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k997227109'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k997227109 = new Set(existingCats_k997227109.map(r => r.spot_category_id));

    if (!existingSet_k997227109.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k997227109' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1928135272 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1928135272'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1928135272 = new Set(existingCats_k1928135272.map(r => r.spot_category_id));

    if (!existingSet_k1928135272.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1928135272' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k380910251 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k380910251'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k380910251 = new Set(existingCats_k380910251.map(r => r.spot_category_id));

    if (!existingSet_k380910251.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k380910251' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16839602 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16839602'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16839602 = new Set(existingCats_k16839602.map(r => r.spot_category_id));

    if (!existingSet_k16839602.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16839602' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k477470235 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k477470235'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k477470235 = new Set(existingCats_k477470235.map(r => r.spot_category_id));

    if (!existingSet_k477470235.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k477470235' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8698310 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8698310'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8698310 = new Set(existingCats_k8698310.map(r => r.spot_category_id));

    if (!existingSet_k8698310.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8698310' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1131145815 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1131145815'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1131145815 = new Set(existingCats_k1131145815.map(r => r.spot_category_id));

    if (!existingSet_k1131145815.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1131145815' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9610995 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9610995'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9610995 = new Set(existingCats_k9610995.map(r => r.spot_category_id));

    if (!existingSet_k9610995.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9610995' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16808622 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16808622'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16808622 = new Set(existingCats_k16808622.map(r => r.spot_category_id));

    if (!existingSet_k16808622.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16808622' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16920986 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16920986'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16920986 = new Set(existingCats_k16920986.map(r => r.spot_category_id));

    if (!existingSet_k16920986.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16920986' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8692469 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8692469'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8692469 = new Set(existingCats_k8692469.map(r => r.spot_category_id));

    if (!existingSet_k8692469.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8692469' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1664310575 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1664310575'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1664310575 = new Set(existingCats_k1664310575.map(r => r.spot_category_id));

    if (!existingSet_k1664310575.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1664310575' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1627850139 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1627850139'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1627850139 = new Set(existingCats_k1627850139.map(r => r.spot_category_id));

    if (!existingSet_k1627850139.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1627850139' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15558354 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15558354'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15558354 = new Set(existingCats_k15558354.map(r => r.spot_category_id));

    if (!existingSet_k15558354.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15558354' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12159218 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12159218'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12159218 = new Set(existingCats_k12159218.map(r => r.spot_category_id));

    if (!existingSet_k12159218.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12159218' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10897211 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10897211'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10897211 = new Set(existingCats_k10897211.map(r => r.spot_category_id));

    if (!existingSet_k10897211.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10897211' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27341750 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27341750'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27341750 = new Set(existingCats_k27341750.map(r => r.spot_category_id));

    if (!existingSet_k27341750.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27341750' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12958056 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12958056'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12958056 = new Set(existingCats_k12958056.map(r => r.spot_category_id));

    if (!existingSet_k12958056.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12958056' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1478420701 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1478420701'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1478420701 = new Set(existingCats_k1478420701.map(r => r.spot_category_id));

    if (!existingSet_k1478420701.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1478420701' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1684390518 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1684390518'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1684390518 = new Set(existingCats_k1684390518.map(r => r.spot_category_id));

    if (!existingSet_k1684390518.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1684390518' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2043797572 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2043797572'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2043797572 = new Set(existingCats_k2043797572.map(r => r.spot_category_id));

    if (!existingSet_k2043797572.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2043797572' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1248472923 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1248472923'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1248472923 = new Set(existingCats_k1248472923.map(r => r.spot_category_id));

    if (!existingSet_k1248472923.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1248472923' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1429519259 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1429519259'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1429519259 = new Set(existingCats_k1429519259.map(r => r.spot_category_id));

    if (!existingSet_k1429519259.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1429519259' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1559726567 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1559726567'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1559726567 = new Set(existingCats_k1559726567.map(r => r.spot_category_id));

    if (!existingSet_k1559726567.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1559726567' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1322271168 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1322271168'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1322271168 = new Set(existingCats_k1322271168.map(r => r.spot_category_id));

    if (!existingSet_k1322271168.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1322271168' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1522674512 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1522674512'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1522674512 = new Set(existingCats_k1522674512.map(r => r.spot_category_id));

    if (!existingSet_k1522674512.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1522674512' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k126962018 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k126962018'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k126962018 = new Set(existingCats_k126962018.map(r => r.spot_category_id));

    if (!existingSet_k126962018.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k126962018' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1844675998 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1844675998'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1844675998 = new Set(existingCats_k1844675998.map(r => r.spot_category_id));

    if (!existingSet_k1844675998.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1844675998' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21243751 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21243751'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21243751 = new Set(existingCats_k21243751.map(r => r.spot_category_id));

    if (!existingSet_k21243751.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21243751' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k820507070 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k820507070'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k820507070 = new Set(existingCats_k820507070.map(r => r.spot_category_id));

    if (!existingSet_k820507070.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k820507070' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k996176623 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k996176623'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k996176623 = new Set(existingCats_k996176623.map(r => r.spot_category_id));

    if (!existingSet_k996176623.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996176623' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k660668538 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k660668538'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k660668538 = new Set(existingCats_k660668538.map(r => r.spot_category_id));

    if (!existingSet_k660668538.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k660668538' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16549731 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16549731'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16549731 = new Set(existingCats_k16549731.map(r => r.spot_category_id));

    if (!existingSet_k16549731.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16549731' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1218788195 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1218788195'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1218788195 = new Set(existingCats_k1218788195.map(r => r.spot_category_id));

    if (!existingSet_k1218788195.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1218788195' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12053650 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12053650'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12053650 = new Set(existingCats_k12053650.map(r => r.spot_category_id));

    if (!existingSet_k12053650.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12053650' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16664017 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16664017'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16664017 = new Set(existingCats_k16664017.map(r => r.spot_category_id));

    if (!existingSet_k16664017.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16664017' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1696274858 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1696274858'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1696274858 = new Set(existingCats_k1696274858.map(r => r.spot_category_id));

    if (!existingSet_k1696274858.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1696274858' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1575631836 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1575631836'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1575631836 = new Set(existingCats_k1575631836.map(r => r.spot_category_id));

    if (!existingSet_k1575631836.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1575631836' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k24923695 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24923695'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k24923695 = new Set(existingCats_k24923695.map(r => r.spot_category_id));

    if (!existingSet_k24923695.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24923695' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1135113992 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1135113992'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1135113992 = new Set(existingCats_k1135113992.map(r => r.spot_category_id));

    if (!existingSet_k1135113992.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1135113992' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8661341 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8661341'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8661341 = new Set(existingCats_k8661341.map(r => r.spot_category_id));

    if (!existingSet_k8661341.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8661341' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k18179603 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18179603'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k18179603 = new Set(existingCats_k18179603.map(r => r.spot_category_id));

    if (!existingSet_k18179603.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18179603' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2142329234 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2142329234'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2142329234 = new Set(existingCats_k2142329234.map(r => r.spot_category_id));

    if (!existingSet_k2142329234.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2142329234' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27173207 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27173207'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27173207 = new Set(existingCats_k27173207.map(r => r.spot_category_id));

    if (!existingSet_k27173207.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27173207' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1314055071 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1314055071'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1314055071 = new Set(existingCats_k1314055071.map(r => r.spot_category_id));

    if (!existingSet_k1314055071.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1314055071' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21525252 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21525252'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21525252 = new Set(existingCats_k21525252.map(r => r.spot_category_id));

    if (!existingSet_k21525252.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21525252' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26973107 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26973107'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26973107 = new Set(existingCats_k26973107.map(r => r.spot_category_id));

    if (!existingSet_k26973107.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26973107' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1740157382 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1740157382'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1740157382 = new Set(existingCats_k1740157382.map(r => r.spot_category_id));

    if (!existingSet_k1740157382.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1740157382' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1907966550 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1907966550'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1907966550 = new Set(existingCats_k1907966550.map(r => r.spot_category_id));

    if (!existingSet_k1907966550.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1907966550' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16444107 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16444107'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16444107 = new Set(existingCats_k16444107.map(r => r.spot_category_id));

    if (!existingSet_k16444107.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16444107' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1201308083 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1201308083'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1201308083 = new Set(existingCats_k1201308083.map(r => r.spot_category_id));

    if (!existingSet_k1201308083.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1201308083' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2066571743 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2066571743'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2066571743 = new Set(existingCats_k2066571743.map(r => r.spot_category_id));

    if (!existingSet_k2066571743.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2066571743' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1797997961 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1797997961'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1797997961 = new Set(existingCats_k1797997961.map(r => r.spot_category_id));

    if (!existingSet_k1797997961.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1797997961' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16050290 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16050290'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16050290 = new Set(existingCats_k16050290.map(r => r.spot_category_id));

    if (!existingSet_k16050290.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050290' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1725619650 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1725619650'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1725619650 = new Set(existingCats_k1725619650.map(r => r.spot_category_id));

    if (!existingSet_k1725619650.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1725619650' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16050660 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16050660'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16050660 = new Set(existingCats_k16050660.map(r => r.spot_category_id));

    if (!existingSet_k16050660.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16050660' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1461411521 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1461411521'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1461411521 = new Set(existingCats_k1461411521.map(r => r.spot_category_id));

    if (!existingSet_k1461411521.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1461411521' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2057792795 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2057792795'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2057792795 = new Set(existingCats_k2057792795.map(r => r.spot_category_id));

    if (!existingSet_k2057792795.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057792795' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1818725499 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1818725499'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1818725499 = new Set(existingCats_k1818725499.map(r => r.spot_category_id));

    if (!existingSet_k1818725499.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1818725499' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1676572134 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1676572134'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1676572134 = new Set(existingCats_k1676572134.map(r => r.spot_category_id));

    if (!existingSet_k1676572134.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1676572134' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k90725902 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k90725902'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k90725902 = new Set(existingCats_k90725902.map(r => r.spot_category_id));

    if (!existingSet_k90725902.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k90725902' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k563859861 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k563859861'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k563859861 = new Set(existingCats_k563859861.map(r => r.spot_category_id));

    if (!existingSet_k563859861.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k563859861' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16297161 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16297161'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16297161 = new Set(existingCats_k16297161.map(r => r.spot_category_id));

    if (!existingSet_k16297161.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16297161' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k108150613 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k108150613'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k108150613 = new Set(existingCats_k108150613.map(r => r.spot_category_id));

    if (!existingSet_k108150613.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108150613' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16931682 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16931682'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16931682 = new Set(existingCats_k16931682.map(r => r.spot_category_id));

    if (!existingSet_k16931682.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16931682' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15526158 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15526158'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15526158 = new Set(existingCats_k15526158.map(r => r.spot_category_id));

    if (!existingSet_k15526158.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15526158' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8173650 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8173650'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8173650 = new Set(existingCats_k8173650.map(r => r.spot_category_id));

    if (!existingSet_k8173650.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8173650' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1534943798 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1534943798'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1534943798 = new Set(existingCats_k1534943798.map(r => r.spot_category_id));

    if (!existingSet_k1534943798.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1534943798' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1449183784 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1449183784'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1449183784 = new Set(existingCats_k1449183784.map(r => r.spot_category_id));

    if (!existingSet_k1449183784.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1449183784' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k743447746 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k743447746'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k743447746 = new Set(existingCats_k743447746.map(r => r.spot_category_id));

    if (!existingSet_k743447746.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743447746' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27493864 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27493864'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27493864 = new Set(existingCats_k27493864.map(r => r.spot_category_id));

    if (!existingSet_k27493864.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27493864' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27279915 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27279915'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27279915 = new Set(existingCats_k27279915.map(r => r.spot_category_id));

    if (!existingSet_k27279915.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27279915' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k205785452 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k205785452'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k205785452 = new Set(existingCats_k205785452.map(r => r.spot_category_id));

    if (!existingSet_k205785452.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k205785452' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k22705945 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k22705945'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k22705945 = new Set(existingCats_k22705945.map(r => r.spot_category_id));

    if (!existingSet_k22705945.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k22705945' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16471669 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16471669'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16471669 = new Set(existingCats_k16471669.map(r => r.spot_category_id));

    if (!existingSet_k16471669.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16471669' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11969069 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11969069'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11969069 = new Set(existingCats_k11969069.map(r => r.spot_category_id));

    if (!existingSet_k11969069.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11969069' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27272826 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27272826'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27272826 = new Set(existingCats_k27272826.map(r => r.spot_category_id));

    if (!existingSet_k27272826.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27272826' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k607192266 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k607192266'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k607192266 = new Set(existingCats_k607192266.map(r => r.spot_category_id));

    if (!existingSet_k607192266.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k607192266' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9012776 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9012776'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9012776 = new Set(existingCats_k9012776.map(r => r.spot_category_id));

    if (!existingSet_k9012776.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9012776' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1116271250 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1116271250'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1116271250 = new Set(existingCats_k1116271250.map(r => r.spot_category_id));

    if (!existingSet_k1116271250.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1116271250' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16500083 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16500083'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16500083 = new Set(existingCats_k16500083.map(r => r.spot_category_id));

    if (!existingSet_k16500083.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16500083' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1051522023 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1051522023'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1051522023 = new Set(existingCats_k1051522023.map(r => r.spot_category_id));

    if (!existingSet_k1051522023.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1051522023' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2057101586 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2057101586'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2057101586 = new Set(existingCats_k2057101586.map(r => r.spot_category_id));

    if (!existingSet_k2057101586.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2057101586' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k134473495 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k134473495'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k134473495 = new Set(existingCats_k134473495.map(r => r.spot_category_id));

    if (!existingSet_k134473495.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134473495' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1827653054 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1827653054'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1827653054 = new Set(existingCats_k1827653054.map(r => r.spot_category_id));

    if (!existingSet_k1827653054.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1827653054' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k467436206 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k467436206'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k467436206 = new Set(existingCats_k467436206.map(r => r.spot_category_id));

    if (!existingSet_k467436206.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k467436206' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k175302923 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k175302923'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k175302923 = new Set(existingCats_k175302923.map(r => r.spot_category_id));

    if (!existingSet_k175302923.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175302923' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k96112066 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k96112066'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k96112066 = new Set(existingCats_k96112066.map(r => r.spot_category_id));

    if (!existingSet_k96112066.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k96112066' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11356521 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11356521'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11356521 = new Set(existingCats_k11356521.map(r => r.spot_category_id));

    if (!existingSet_k11356521.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11356521' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11190567 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11190567'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11190567 = new Set(existingCats_k11190567.map(r => r.spot_category_id));

    if (!existingSet_k11190567.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11190567' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k17163273 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17163273'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k17163273 = new Set(existingCats_k17163273.map(r => r.spot_category_id));

    if (!existingSet_k17163273.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17163273' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k220597413 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k220597413'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k220597413 = new Set(existingCats_k220597413.map(r => r.spot_category_id));

    if (!existingSet_k220597413.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k220597413' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

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
    const ids = ['k20169194', 'k201733788', 'k23841409', 'k10283822', 'k1765101641', 'k181200383', 'k13592026', 'k997227109', 'k1928135272', 'k380910251', 'k16839602', 'k477470235', 'k8698310', 'k1131145815', 'k9610995', 'k16808622', 'k16920986', 'k8692469', 'k1664310575', 'k1627850139', 'k15558354', 'k12159218', 'k10897211', 'k27341750', 'k12958056', 'k1478420701', 'k1684390518', 'k2043797572', 'k1248472923', 'k1429519259', 'k1559726567', 'k1322271168', 'k1522674512', 'k126962018', 'k1844675998', 'k21243751', 'k820507070', 'k996176623', 'k660668538', 'k16549731', 'k1218788195', 'k12053650', 'k16664017', 'k1696274858', 'k1575631836', 'k24923695', 'k1135113992', 'k8661341', 'k18179603', 'k2142329234', 'k27173207', 'k1314055071', 'k21525252', 'k26973107', 'k1740157382', 'k1907966550', 'k16444107', 'k1201308083', 'k2066571743', 'k1797997961', 'k16050290', 'k1725619650', 'k16050660', 'k1461411521', 'k2057792795', 'k1818725499', 'k1676572134', 'k90725902', 'k563859861', 'k16297161', 'k108150613', 'k16931682', 'k15526158', 'k8173650', 'k1534943798', 'k1449183784', 'k743447746', 'k27493864', 'k27279915', 'k205785452', 'k22705945', 'k16471669', 'k11969069', 'k27272826', 'k607192266', 'k9012776', 'k1116271250', 'k16500083', 'k1051522023', 'k2057101586', 'k134473495', 'k1827653054', 'k467436206', 'k175302923', 'k96112066', 'k11356521', 'k11190567', 'k17163273', 'k220597413', 'k19033655', 'k16903726', 'k2057764323', 'k1681972370', 'k27292203', 'k27175293', 'k12096004', 'k17703669', 'k16740149', 'k251321963', 'k11831433', 'k1598052634', 'k2131538567', 'k7819490', 'k2099116820', 'k10346328', 'k327142548', 'k1282659967', 'k24725293', 'k8612493', 'k11231325', 'k15847929', 'k1985785355', 'k560657944', 'k42143703', 'k8503628', 'k9348308', 'k8025375', 'k11128820', 'k16853817', 'k15751933', 'k16904322', 'k25048467', 'k16296804', 'k13093208', 'k263607084', 'k8002833', 'k1297162293', 'k21405938', 'k2061622071', 'k1420643780', 'k1039797847', 'k7886148'];
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
