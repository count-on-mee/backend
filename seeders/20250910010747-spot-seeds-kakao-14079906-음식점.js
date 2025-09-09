'use strict';

/**
 * 카카오 북마크 크롤링으로 생성된 Spot 데이터 시드 파일
 * 폴더ID: 14079906
 * 카테고리라벨: 음식점
 * 생성일시: 2025-09-09T16:07:47.636Z
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
        name: '거부갈비',
        address: '제주특별자치도 제주시 제원4길 3 1층 (연동)',
        tel: '064-745-7782',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.48635130639625 126.48880114440432)',
          4326
        ),
        naver_spot_id: 'k1957836536',
        review_count: 0,
        review_score: null,
      },
      {
        name: '페를로',
        address: '제주특별자치도 서귀포시 안덕면 덕수회관로74번길 33 1층 (안덕면 덕수리)',
        tel: '010-5752-9501',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.25673168238657 126.30613608734677)',
          4326
        ),
        naver_spot_id: 'k334369411',
        review_count: 0,
        review_score: null,
      },
      {
        name: '춘미향식당',
        address: '제주특별자치도 서귀포시 안덕면 산방로 378 1층 (안덕면 사계리)',
        tel: '064-794-5558',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.23146854972567 126.29652568900728)',
          4326
        ),
        naver_spot_id: 'k20125337',
        review_count: 0,
        review_score: null,
      },
      {
        name: '해비치호텔앤리조트 제주 이디',
        address: '제주특별자치도 서귀포시 표선면 민속해안로 537 1층 (표선면 표선리)',
        tel: '064-780-8314',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.32317057897325 126.84454266521611)',
          4326
        ),
        naver_spot_id: 'k21301540',
        review_count: 0,
        review_score: null,
      },
      {
        name: '윤옥',
        address: '제주특별자치도 제주시 구남동2길 19-4 혁진빌 1층 (이도이동)',
        tel: '010-2492-4636',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.489190483337985 126.53578053842539)',
          4326
        ),
        naver_spot_id: 'k1010408190',
        review_count: 0,
        review_score: null,
      },
      {
        name: '유일반점',
        address: '제주특별자치도 제주시 광양7길 13 1층 (이도이동)',
        tel: '064-722-4100',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.50101111170279 126.53071113681627)',
          4326
        ),
        naver_spot_id: 'k8536676',
        review_count: 0,
        review_score: null,
      },
      {
        name: '윌리스',
        address: '제주특별자치도 제주시 지석15길 7 1층 (삼양이동)',
        tel: '010-7689-1036',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.52188062551622 126.58621080001511)',
          4326
        ),
        naver_spot_id: 'k107042576',
        review_count: 0,
        review_score: null,
      },
      {
        name: '앞돈지',
        address: '제주특별자치도 제주시 중앙로1길 28 1층 (건입동)',
        tel: '064-723-0987',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.516048331811554 126.52751715849442)',
          4326
        ),
        naver_spot_id: 'k9236847',
        review_count: 0,
        review_score: null,
      },
      {
        name: '스트라토',
        address: '제주특별자치도 제주시 사장길 17 1층 (연동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.48406118571184 126.49582549673633)',
          4326
        ),
        naver_spot_id: 'k1352434661',
        review_count: 0,
        review_score: null,
      },
      {
        name: '세몰라',
        address: '제주특별자치도 제주시 서광로11길 38 1층 101호 (삼도일동)',
        tel: '010-4940-0473',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.503294276089015 126.51672554846853)',
          4326
        ),
        naver_spot_id: 'k981558300',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서귀포흑돼지명가',
        address: '제주특별자치도 서귀포시 태평로 122 (호근동)',
        tel: '064-739-7347',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.244044296412255 126.53635099002814)',
          4326
        ),
        naver_spot_id: 'k1875134440',
        review_count: 0,
        review_score: null,
      },
      {
        name: '서귀포괸당네',
        address: '제주특별자치도 서귀포시 칠십리로 123 (서귀동)',
        tel: '064-732-3757',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.243100167711376 126.56760582808325)',
          4326
        ),
        naver_spot_id: 'k8195159',
        review_count: 0,
        review_score: null,
      },
      {
        name: '베메로',
        address: '제주특별자치도 서귀포시 중문관광로72번길 29-5 신우성타운 라동 (색달동)',
        tel: '064-738-7832',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.249856844115655 126.41082683099276)',
          4326
        ),
        naver_spot_id: 'k367412374',
        review_count: 0,
        review_score: null,
      },
      {
        name: '모리노아루요',
        address: '제주특별자치도 제주시 애월읍 하소로 769-58 (애월읍 유수암리)',
        tel: '064-799-4253',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.419428915484666 126.40198608440059)',
          4326
        ),
        naver_spot_id: 'k27321409',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명랑스낵',
        address: '제주특별자치도 제주시 한림읍 한림로 585 1층 (한림읍 한림리)',
        tel: '070-7755-4548',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.40917141817178 126.25881715454115)',
          4326
        ),
        naver_spot_id: 'k27357866',
        review_count: 0,
        review_score: null,
      },
      {
        name: '만선식당',
        address: '제주특별자치도 서귀포시 대정읍 하모항구로 44 1층 (대정읍 하모리)',
        tel: '064-794-6300',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.217862544149604 126.2498106873043)',
          4326
        ),
        naver_spot_id: 'k16260200',
        review_count: 0,
        review_score: null,
      },
      {
        name: '도라지식당',
        address: '제주특별자치도 제주시 연삼로 128 (오라삼동)',
        tel: '064-722-3142',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.49271035395259 126.50594628309452)',
          4326
        ),
        naver_spot_id: 'k15942374',
        review_count: 0,
        review_score: null,
      },
      {
        name: '덕성원 본점',
        address: '제주특별자치도 서귀포시 태평로401번길 4 (서귀동)',
        tel: '064-762-2402',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.24488869033401 126.56338650792027)',
          4326
        ),
        naver_spot_id: 'k15838018',
        review_count: 0,
        review_score: null,
      },
      {
        name: '더스푼',
        address: '제주특별자치도 제주시 구남동1길 45 1층 (아라이동)',
        tel: '064-725-1324',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.493379458338566 126.5411514454185)',
          4326
        ),
        naver_spot_id: 'k1802546975',
        review_count: 0,
        review_score: null,
      },
      {
        name: '스톤',
        address: '제주특별자치도 서귀포시 김정문화로 6 상가동 1층 102호 (강정동)',
        tel: '010-6877-8009',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.25154629758935 126.50556936404655)',
          4326
        ),
        naver_spot_id: 'k545169922',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대유가든',
        address: '제주특별자치도 서귀포시 남원읍 태위로2번길 2 (남원읍 위미리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.27120658943378 126.6478862693898)',
          4326
        ),
        naver_spot_id: 'k11010333',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오르막가든 중문본점',
        address: '제주특별자치도 서귀포시 대포중앙로 12 오르막 (대포동)',
        tel: '064-738-7755',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.25026000495037 126.43316548308528)',
          4326
        ),
        naver_spot_id: 'k8450432',
        review_count: 0,
        review_score: null,
      },
      {
        name: '풍로 블랙본점',
        address: '제주특별자치도 서귀포시 안덕면 신화역사로 423 상가동 2층 2203호 (안덕면 동광리)',
        tel: '064-792-1108',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.31001566655998 126.33292858172653)',
          4326
        ),
        naver_spot_id: 'k1680496738',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신우가촌',
        address: '제주특별자치도 서귀포시 이어도로 1042 1층 (서호동)',
        tel: '064-739-1854',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.24451137147588 126.52253675125102)',
          4326
        ),
        naver_spot_id: 'k7979469',
        review_count: 0,
        review_score: null,
      },
      {
        name: '꺼멍목장',
        address: '제주특별자치도 서귀포시 이어도로 338 1층 (하원동)',
        tel: '064-739-9289',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.242952798349485 126.45484830511084)',
          4326
        ),
        naver_spot_id: 'k236724227',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라스또르따스',
        address: '제주특별자치도 제주시 광양11길 8-1 (이도이동)',
        tel: '064-799-5100',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.49918059614019 126.53111272962798)',
          4326
        ),
        naver_spot_id: 'k367189126',
        review_count: 0,
        review_score: null,
      },
      {
        name: '도남오거리식당',
        address: '제주특별자치도 제주시 도남로6길 16 (도남동)',
        tel: '064-757-9118',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.49651441490562 126.52609091915832)',
          4326
        ),
        naver_spot_id: 'k8260298',
        review_count: 0,
        review_score: null,
      },
      {
        name: '르부이부이',
        address: '제주특별자치도 제주시 사라봉7길 32 성원연립 1층 101호 (건입동)',
        tel: '070-4187-4732',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.5153942322691 126.53961018352518)',
          4326
        ),
        naver_spot_id: 'k1205344363',
        review_count: 0,
        review_score: null,
      },
      {
        name: '탐라가든',
        address: '제주특별자치도 제주시 서사로 51 1층 (삼도이동)',
        tel: '064-757-5187',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.50779087637613 126.52029952386242)',
          4326
        ),
        naver_spot_id: 'k10817173',
        review_count: 0,
        review_score: null,
      },
      {
        name: '리보스코화덕피자',
        address: '제주특별자치도 제주시 수목원길 27 (연동)',
        tel: '0507-1448-0906',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.46944434343961 126.48785908504806)',
          4326
        ),
        naver_spot_id: 'k1923949718',
        review_count: 0,
        review_score: null,
      },
      {
        name: '연정식당',
        address: '제주특별자치도 제주시 신광로10길 29 (연동)',
        tel: '064-747-3959',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.483767865142845 126.48674619832268)',
          4326
        ),
        naver_spot_id: 'k9251493',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명호마농갈비 본점',
        address: '제주특별자치도 제주시 신대로12길 15 1층 (연동)',
        tel: '064-744-8985',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.48858682431613 126.49485238687139)',
          4326
        ),
        naver_spot_id: 'k673097455',
        review_count: 0,
        review_score: null,
      },
      {
        name: '해오름식당',
        address: '제주특별자치도 제주시 오일장서길 21 1층 (도두일동)',
        tel: '0503-7151-7500',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.49495315520689 126.47600974729316)',
          4326
        ),
        naver_spot_id: 'k10915490',
        review_count: 0,
        review_score: null,
      },
      {
        name: '숙성도 제주본점',
        address: '제주특별자치도 제주시 제원길 30 2층 (연동)',
        tel: '064-743-8877',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.48729288311495 126.4888773878573)',
          4326
        ),
        naver_spot_id: 'k316010726',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오팬파이어',
        address: '제주특별자치도 제주시 조천읍 남조로 1781 1층 (조천읍 교래리)',
        tel: '010-2181-1119',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.42694356713148 126.67368426028624)',
          4326
        ),
        naver_spot_id: 'k534840856',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아카이브',
        address: '제주특별자치도 제주시 조천읍 와선로 204 1층 (조천읍 와산리)',
        tel: '070-8822-5535',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.482221152405025 126.69572325675477)',
          4326
        ),
        naver_spot_id: 'k1748942465',
        review_count: 0,
        review_score: null,
      },
      {
        name: '연리지가든',
        address: '제주특별자치도 제주시 한경면 두조로 190-20 다동 1층 (한경면 두모리)',
        tel: '010-3693-0085',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.34514012517377 126.20232347560196)',
          4326
        ),
        naver_spot_id: 'k1030718114',
        review_count: 0,
        review_score: null,
      },
      {
        name: '동백키친',
        address: '제주특별자치도 제주시 한림읍 수원7길 42 1층 (한림읍 수원리)',
        tel: '064-796-1014',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.42842727460456 126.26697163131912)',
          4326
        ),
        naver_spot_id: 'k347377655',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오데뜨',
        address: '제주특별자치도 제주시 한림읍 중산간서로 4995-6 1층 (한림읍 상대리)',
        tel: '064-796-4987',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.41088219568745 126.29557297890496)',
          4326
        ),
        naver_spot_id: 'k1012357847',
        review_count: 0,
        review_score: null,
      },
      {
        name: '보영반점',
        address: '제주특별자치도 제주시 한림읍 한림로 692-1 (한림읍 한림리)',
        tel: '064-796-2042',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(33.41656606465521 126.26515332976561)',
          4326
        ),
        naver_spot_id: 'k10377362',
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

    const existingImages_k1957836536 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1957836536'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1957836536[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1EC2E6E616234839A6220729F5C4C854' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AD37013072804227B82CA55A3DEE27FF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/519AB429888C45C0B3FDB2A6E73EEE68' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D138F1676EA44AFA84152278F5C715BE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D31B9ED19B3A4D79B161CB4EC3D73272' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B670CDEDCA9D4780B588138C88894FC5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/71EE07534ADB45A4B94AD65E8C8AF812' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/98BF98CFA22841C7AE60D04F7F3BD44D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E75919F56F3546459EDF22AE195CB4BA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5D07DC4CC99C42278C023FEB56CACB90' }
      ]);
    }

    const existingImages_k334369411 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k334369411'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k334369411[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_1644746145' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3AA6DEF4C54643F6A323ADDD991D572E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5522567145BE4F10920ED61DE8160519' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/64FD785ED95B4A0290755F62B469548A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A166687FF3BA4223A33CDE8462A4299A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DF5C24F41A544C30B6EC465E351A0C1D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B3280F50F73445258E113B6C36E763AC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E44794CF25A043FFB343ED8EEEFA00E5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/6908EEDF952C46799C7217E34612C738' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9DF1C1869D464BF4A02099BB9791E75D' }
      ]);
    }

    const existingImages_k20125337 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k20125337'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k20125337[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/89c64c61f53ef97aa7088f57f6f02684aab375fb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f7f7d4dd3d372fe031c37a655d390e1cdb971c5d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b684919c77d2676b8a1f231b50dd777ab49205c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac5e4ca0661139d52b1f62d69c43731b9b9db1e0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ad1bd10921ea77f50a0ea5c884636cdd14f6e2fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0802652bf6ed0eec4e3420115136ecf37cdc6881?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/64dce825b1d019d00d009642a015507966819995?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c617ae33571427f3467d92f448e02f31efcd16d1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db6d34f683143db0b26addbfa7d65a0d63c877b5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f3df4eff3364a19977da4d42818dabbfac266645?original' }
      ]);
    }

    const existingImages_k21301540 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21301540'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21301540[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNzkg/MDAxNzU3MDc1NTM3ODU1.WgzpcZecyXOxvvtoEC-U_LD0vNb-VdUTBivWHtWyyt8g.Q17bmYfwkpk99yNyiWC68DCWDdh5xOqi6E09IbJJHTEg.JPEG/FullSizeRender.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjc4/MDAxNzU3MDc1NTM3MjE0.hS_FK_oU651EjuMWgLss45BY3YDmP9SpqeiVW_rSahAg.N-8drXy8OIyh6Ji-LYDRXoy_qHp5QOciQueFpQOzYVwg.JPEG/IMG%EF%BC%BF3738.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNjMg/MDAxNzU3MDc1NTM3MDA1.iBlJ_FfH3hvGEshZ4Bn8hBL8FRijcpXjxdTa_SAae2Mg.7ARrxRGXGrXbG2xTpMSry75bLhNQMvouicWcyjuHgg4g.JPEG/IMG%EF%BC%BF3739.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfODAg/MDAxNzU3MDc1NTM3MDYx.LjWxKPqD-VGtjVBMibHRnbPr8Jp2ua3ZQf7GxsOXrLog.fZsZ8JaiAIUdQcdSLOCJ-Qz7L-ksmZ_-nASWCWhG-k4g.JPEG/IMG%EF%BC%BF3737.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjA3/MDAxNzU3MDc1NTM3ODcy.vI8-A0317ny0iUy68BKwZXwaJmG1antvRn2NBDiGbOgg.AR3hJ3-5N06oyQ0jCBHWWTUT9_Yvat65AJbMIsgQeqUg.JPEG/FullSizeRender.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTI2/MDAxNzU2NzkzMTI1NTM4.GfeDJmKhjsfd0V66buXUx4VV3UD5tozdeo2EcRb3m_Qg.4USyseLSZLadPPmo7c0ZRHrrZcjRwht86tfGCZeX9G8g.PNG/%EB%B2%A0%EC%9D%B4%EC%A7%80%EC%83%89_%EC%8B%AC%ED%94%8C%ED%95%9C_%EB%89%B4_%EB%B8%94%EB%A1%9C%EA%B7%B8_%ED%8F%AC%EC%8A%A4%ED%8A%B8_%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8_%ED%8F%AC%EC%8A%A4%ED%8A%B8_(11).png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTQw/MDAxNzU2ODA3MTU5MjY3.4cjQg1xMKopOxOeoh9y2rqallPuDRu209g7KZOk84b4g.R-6v2NNMbfS3BkG0tWg9NNEwkvw8zJ37Cxy90UNWGNsg.JPEG/SE-d71b8d77-b9bc-4667-af06-46af62162cbf.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjAw/MDAxNzU2ODA3MTcxMDYw.Qrbn70IHf-9qIq36F5iFSQ2G9ttzTVSz_hcAvalfi1Eg.bP30qAiakwRtj1yc5f5dZibpZk6CtP9knWhjSzNoiuIg.JPEG/SE-0fe59eba-c298-4582-898b-89f6c4e9c5d4.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjM0/MDAxNzU2ODA3MTU2NjMx.XxpsULvu_vqEvGaKq4XHzmPqwWbIG7iHqx4lj-FB3sIg.RLuKgO3e2qN5C7yKbQjVIcpHerQJw74p6I5rasjUNK8g.JPEG/SE-74e2922f-c746-424e-bb4f-162c441d606a.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjg3/MDAxNzU2ODA3MTg3MDAy.SGKalNugUa8__V2I7nWNzja2G3RNtx4Zpj2SUY7Jdocg.-tjceegRcbQbh52unOePiC0NicKcoFdGUYgQF4BE0-cg.JPEG/SE-6811bfb4-619a-41fb-b5ff-6241094e0e15.jpg?type=w773' }
      ]);
    }

    const existingImages_k1010408190 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1010408190'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1010408190[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7FA2330E09224F0A8787CE49A8196CA3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D9EF91D35FF946678542CF4F93BAB936' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F5F491BB189F497DB13AA444CB0E7C0C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4E88469C9ED441D9A1A77D8D71574FDC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/7345EB82AA5A4BAAA37F31CF3E080A3C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/87A6683D6B9A4677A22FB51B11E7252D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/EF393F4D67E34DF08909A74760F31197' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/E0F267D719244576B188AD51BC1A8699' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/388DB64275364F8E8ACFD5D16E1AB3D4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B053181F8ED24B59BF27C858FA80A2DE' }
      ]);
    }

    const existingImages_k8536676 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8536676'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8536676[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8220cfa15f197120e537e329cb7e6b873076e871?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d60cd63f144be0584dd3e9d1a9bfa32a1e4d69ac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/97b753c63743f2fa26fa88160f8634d241decce8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f0727973993f539dd0bffaf937a6b3ef90b79ffe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e7685c784de2ac5d375003dbcb2a562649f6dcbd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/65e5a525c60e8711e9eb6a28a2086cb926fc518c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e50038bc7f15cc3ab42b781273d761567c311969?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d37b4d97ef02338758929b8349edb9c3be2f6970?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f68b0575f5a41a4ea171acbabc92b8f13c66202?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/54a18da34936650ac83a25133f9192b04a513e10?original' }
      ]);
    }

    const existingImages_k107042576 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k107042576'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k107042576[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/6F1E7A9063E54242A91CF1B70B4F3166' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/75737b3cdfcc865b838b189873e09fb704e4fb44?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd015aace064ced706af82c2f4ac850395cf4eb8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d37e114ab15d78299669be71977d5d45487cfa2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a2bf4e9bb5ca55399411a4f37cfe3a9e6edb9780?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e51b50404b4c3a9251d29a8c170866ceb8ce4071?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/807a01324a64f9e6196728aafc479bef6b9b0326?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fbc5a1f50cbf43eb829253610720a8b8b476d2a1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/51e1298256ca710207c4e79de48fb19ee467462e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7b9b8e4444151eb836ab900d7c91f5c994061ca2?original' }
      ]);
    }

    const existingImages_k9236847 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9236847'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9236847[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e7e149b14753dc13c0bd9f11dcae0a07c85881f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ece65ec966aa6af1154c213dfcaa9529a9937f19?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8b9471cc9775d1c9bd5363cf4734cf6883a1b107?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1df8123bfd15e0c3a749ba9dc97a2279df319f7d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/771820a5814d3817b4ee225035cd08d25bd31f19?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d5531902364bbc6c46e46e5a49685a7c8e206ec1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b01df2b901b330dfa0c83e052666d5013594712b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2abbcf3ef9c8d95165636540d7a4711b0f8575f0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/18adbbcb0f00e6124da46b2cd8495962b3033ba7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9eefe3f32cf4ca23d2ff46886fdd334d76b1fb67?original' }
      ]);
    }

    const existingImages_k1352434661 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1352434661'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1352434661[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d29ba704872620f9aa6bfd3d2721a047d6423a2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b42a33973a2dea5ed79c2b2166cb306111dfad96?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f88ae3585ce7f121c68489bf58943c234c2d4a55?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f7fea104588109b00cc0345af2f4fd9f35b59567?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/058abf728fc5950abbf45de64e8dd9847f1db2f4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0d816a8799e89d8bb9d93fbfcdfcde71fa3c5da9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac607cfc9f23f0862db1ac5956346ff9cf92f183?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29da04a55115918a4930544884b316efeedd1c80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0fe992b9a165e001e23703c295f21659caae5e2b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/878ff55211851652e5f245d8f258cc5b797b2e94?original' }
      ]);
    }

    const existingImages_k981558300 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k981558300'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k981558300[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3B5E7CEB821C4CCB987159D338FDE113' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D09F13C13D7C48668BD9F63FB0E1F2B1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/72DB4B91020C4F9B80CCA0D6C6C8079B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bc4f2047837e94f6a21de5a6182990ec89e6290e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/be6d273e9d8cf86a7c29be12c60df481d1046aeb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/64ee5e8089875b7513d1de724b95ed7d2dd4f460?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8ed465dbd797d62ed44c384ba8e348079bf86ae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/87a05c5f912d36735dd7b2eca28df9f716ff3302?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/87cf5bb6e044caa65ce371bc477b0d8b6b07d092?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b305ef6d147661d5ee73daa3f4bce162f137569?original' }
      ]);
    }

    const existingImages_k1875134440 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1875134440'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1875134440[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/be7eca8e251473976a73744e86acb55deb15dd06?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTlfMTg1/MDAxNzUwMzE3NzI2ODk1.Chqa8Hm6fl-C2W_xdHp4A4KO9UbjK9eZrz0BXQCMfTAg.TxqIF6Mi4ODZshi7-StjJQM1u18_g6JFREKEVLNSim8g.JPEG/900%EF%BC%BF20250603%EF%BC%BF193622.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMTJfMjc1/MDAxNzM5MzIxOTA2ODIz.Qgkm4MAvGp1Rlj1mJNDn_ucJ2msvrxmFVrSF4bM5P70g.1Mb7rXqvG0rINdCbvkt9gzfsB-PHYVthXIZEO82_gggg.JPEG/IMG_0278.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDZfMjk1/MDAxNzMzNDQ4MTI2NDM1.rW_5Gkbt1D1zXJ9fKYmGM5opOx2PU1kTtHeFyycXBskg.-g8E34GOKr0KhQ0wmPUz-IWwsV6HpG7jD_4GUsujmKQg.JPEG/900%EF%BC%BF20240803%EF%BC%BF193235.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDZfMjg4/MDAxNzMzNDQ4MTI5Mjgy.omy8Q-f11Er_vIaqTLiAEsExnuzuePv2WNj0GRoQHckg.8yv9Jlaqz_y6HxK2ZtGblTlO5N5BaCu68T6N80a4gdcg.JPEG/900%EF%BC%BF20240803%EF%BC%BF204327.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDZfMjYy/MDAxNzMzNDQ4MTI3MTA0.rCDNc5Ta_tIycKf8MtlDZJgYOB_cEL1eCHoJJLPdshIg.vi4Sr_JHWgId0cT_3_E7Os-8_yfqPt0LX6s8vbdPhjUg.JPEG/900%EF%BC%BF20240803%EF%BC%BF193254.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDZfMjU3/MDAxNzMzNDQ4MTI2Mzcz.KHNdWUR9G98HkYVMizVMFDAC2-Isb2d-FBClfRItR6Ag.GsgE08ILE-8N7gDit2-FFd1oSUF5gtlzmcx-BPr-MJ0g.JPEG/900%EF%BC%BF20240803%EF%BC%BF195339.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDZfMTAw/MDAxNzMzNDQ4MTMwNTI0.uj6Fi93yAQIoHxzIOdzDfBG-mtQRhVdns7H69zr1_Ggg.1o9cxzjeFNJXljYRzLLmk2iEvLCItt6A2-h7n0JML1og.JPEG/900%EF%BC%BF20240803%EF%BC%BF193327.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDZfMjk3/MDAxNzMzNDQ4MTMyODcx.qNL6FEzBVmEKAfn04fX_UlogDYJUY32IV4F4KMF1wS4g.YK5poyE0gL6ALPf1r_hGck3Qp8tn-PTRbDHCwVgp4Nsg.JPEG/900%EF%BC%BF20240803%EF%BC%BF194349.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDZfMzgg/MDAxNzMzNDQ4MTI4NzQx.xFV8sZhT0_52fuE3mhnv8YWcw8RQQE6q8wwqbzH_eskg.-mtm_XWJsEZAphOjl9zhCw-Fo5A3mD8fb3flg2IpBe4g.JPEG/900%EF%BC%BF20240803%EF%BC%BF193316.jpg?type=w773' }
      ]);
    }

    const existingImages_k8195159 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8195159'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8195159[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60f4835530dbaaadfabd5814fd2a37b7fc0534e9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e2ed6f47a0274cc129cc4f92bc06a270d55a1ba1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/35c253cb61e027a8e7bb1d5b168f59a0117dc8b1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df8c4789874b26360bca95de4d97828592101e82?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8be40b9cf8ef04d342b7a803837f20593bdfdc5f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfMTkg/MDAxNzUyNDkxNzg0ODQ1.kZAuOTkQnHgjBHsR6cN57eUCgSU9oWs2q_o2nRZSQJIg.VOef0R66RwPWVvTRZgvZsxtQpgYnQKAqdug7UMW7zZog.JPEG/IMG%EF%BC%BF4919.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfMTA0/MDAxNzUyNDkxODU4OTA1.eLbcizBNR7cjaB8YYlIP0mtG7mBnw2vukSeZirraskQg.bLFXej1QQsr57ZQprgxC3Bj1JffNeZbbf1AajlOtWJYg.JPEG/IMG%EF%BC%BF4945.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfMjUg/MDAxNzUyNDkxODM2NDk3.rw2m-HDxsMxIAec402dUBoBBM32epaP3xxbNKMYSXTAg.8JAkclZXHv8aMcESGUg7UmaW8yqzZGWm2_cAXuQ1pBsg.JPEG/IMG%EF%BC%BF4940.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfODAg/MDAxNzUyNDkxNzkxMjQ3.4-0bN2pcPLEHUuWqsVlXroJOraF5HUmDV5903fwgfUMg.0cVCirZPwM9lDzbMLNy_Ljzt45VqgJ4B2N5KxowgCDMg.JPEG/IMG%EF%BC%BF4921.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfNzIg/MDAxNzUyNDkxODYwOTM0.ree5lZ2nITMJ0EPUvqPiJRu3qU5Iz_RnTouolOShieAg.5dBU_-Vv1qngpvYUFkA-Q09k4BzDjNYCneaxpJ-46v0g.JPEG/IMG%EF%BC%BF4947.JPG?type=w966' }
      ]);
    }

    const existingImages_k367412374 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k367412374'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k367412374[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/23E030E04CDF4305980CB679A8F3508C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EB208DE31DEA4D499000713F532F88DC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5DE65FA9E7C44545A958754CE3E7FC4A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1ACF39D048B34EC9A825F40BD8B563C8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0A2634802DF1490BB2BE1F7C7198BF8F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5202A9D55D544CE5B3AAB566330EA606' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/95CCC619911F499087C5D747995572A2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D46C86C01F0D44DEB260659CA5F8AF7B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C33B7A3572C348628A84F17C668CCB9A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A2589348DE884934B892239E3794389E' }
      ]);
    }

    const existingImages_k27321409 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27321409'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27321409[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aa1b501aa7dc98cb5505a9e0da38a2186f342d44?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ba5d76df3e2b4fbca6f68d95f025bba6dcdfc43?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4265184ee1aa63ab74188712e917ac850ead2ef1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d502c52f829629554c4154866573e625d53be5f8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a97510c9d3b97a5c2c748d731f1bc765ce77a5c4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c3c4c7c1554c07e54fe1b434fb7089a9729151a6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/796db7844a8a18d9217b1bb0031e8182d46718d6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e740448d87599d52673ed600a8e1855527b31c7f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dea01bffb95cfc94c7ffc3f2cf43a90b2f061ccf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3743f1d8fe9f356049231e8225bfb9bf87ce6e3b?original' }
      ]);
    }

    const existingImages_k27357866 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27357866'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27357866[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjk4/MDAxNzU3MDgzMzg2NDU0.IzYMCesjpLiZj_W5yj8n9rvTk8hMF4KLE5zXTAKVZrQg.nmDQD1CiGiz1fqbACMpmdRt9JZCUEzDIPx-bI-cGS58g.JPEG/IMG%EF%BC%BF9420.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjM1/MDAxNzU3MDgzNDg1NDA4.V1MsgxmaulG8g_c1EHh1_GYO6S7laRN52NSzTcA-fq4g.sTMsUf_AR64glu0aoeFnMUQkmzcfAMNsMht1p0D5cjMg.JPEG/output%EF%BC%BF1674857663.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNzkg/MDAxNzU3MDgzMzg4MjAz.JGUUusuBCGmF0hRNIFGv65p9XWiR5jRJBbUW3MbSecsg.5_Sin8xrysEZghZ5vXT0fFijgpk14k6ArV0SJ6uBDt0g.JPEG/IMG%EF%BC%BF9443.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTA4/MDAxNzU3MDgzNTAxNzgy._j6ciAWT3rs2IeoyC9rkNvsGq7rvkXV3GlWVhE8ip1Qg.yYnu2ARcM0MvnkTycH3InvA22R-vV4CTotvLbzoqfHAg.JPEG/output%EF%BC%BF3447585192.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTcz/MDAxNzU3MDgzNDY4NzUz.J7zTfBflU2EfswQhGx_2ojkPmEEFo-3G0ddlRSO6Nakg.BzQNgsetzZuj2WQpl4cjUK-y8pnGS4zV1m7K7dSToLwg.JPEG/output%EF%BC%BF1706260230.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTE2/MDAxNzU3MDgzMzg2NDU0.IcAvB-WwTB_PUvkAE5K2UUPJrOP9R5c--XDPOmwToKwg.6oJuPJ3TAY-rbdD9ey7RGgr2z6An64ekd0cPV97h530g.JPEG/IMG%EF%BC%BF9414.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNDgg/MDAxNzU3MDgzNDQ3OTEw.-FY7-BxVfXXl2nb7Lm2U49uudwdgcjOIkJ_Fm7VdLRQg.yqCMktP-HX7_nvxe3jUyN7gwzPwXlxsNuU5ZBrKWYDgg.JPEG/output%EF%BC%BF831814196.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTc5/MDAxNzU3MDgzMzg4MzI5.6SvMu95xDKHUFypicHsvVWr8j4cB4mnbmKxa2lBVwkIg.6UOyf7078_FfLmpLU2AD_ruV8_m9QfjqzuQ0e2xvurIg.JPEG/IMG%EF%BC%BF9446.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfODAg/MDAxNzU2OTQ0NjQ2Mzkz.jFifBdjF2dX56GLMir9kCLWHWU1sxVP9BwlYQNO2cj0g.occCEqcTzoSxcc26OYMnK5HZ36TAtg8jfXqFYIt2id8g.JPEG/BD6578DB%EF%BC%8D3C78%EF%BC%8D40E1%EF%BC%8DB7F7%EF%BC%8D3BADA4DF3321.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTQg/MDAxNzU2OTQ0MjE3MDE4.3pD3sbKAOMXMuANUXqJIFqCjuv7Fh71-V723zSdPXvAg.-DnTKVqiKhvlJiTC0eBlLcfMly7oPzJ_Zo6tA8azC8Ag.JPEG/435AD93F%EF%BC%8D582E%EF%BC%8D4097%EF%BC%8DAAA8%EF%BC%8DA9BC35AB4D1E.jpg?type=w966' }
      ]);
    }

    const existingImages_k16260200 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16260200'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16260200[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/51C8C1BABD8144498D76E784C3AB8DFA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CA2375CCC3364C968B5CDFA1A06C0EE2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FEEC1EE9EDE74B1880EFBC4FAFAEB249' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/87b0f113e1a26ed310fe2cdb813ddab0a153842d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/903f967d479c479ad9c9cc024493d89f4a82a616?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e60c4212b599c78de6f0e38c4c1e49b37a10cb77?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2fb62e160d151b2c7364f75e254b8c866137e1c8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/260a6e6e0e7959b881ea9ff464d2d518070ae178?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9f2973a08cbbf44f5eed52199e6d4e6ceeaa3424?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5310ccd0a823dab766fd0bb3c3ccedb7b8aecf2b?original' }
      ]);
    }

    const existingImages_k15942374 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15942374'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15942374[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/28172DD0A97F47D0AD31F29CB675F83A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/D96D633E8DD647D596B25E8470C83B05' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjM3/MDAxNzU2NDEyMTYwNTg0.HvdgS3kiiB7EaNP0txXuANymnkYcpXZrz39eOqh3A1kg.oFvzcv0qfOkl-QewDI10BnIjvTaAhVgUb3K8qdJfcYsg.JPEG/900%EF%BC%BF20241202%EF%BC%BF091645.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjIg/MDAxNzU2NDIyNjc2NjQx.0fAF4Z1vLlWJ0g-EFKHgZRYB7Sm9HDO5iAGerD7nSE4g.Vd9OVFSEqgH4hpEZdAjqxv6FMsrnHx0kELmsIbCMiBMg.JPEG/1756422675851.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTk0/MDAxNzU2NDEyMzY1MjMx.P6Cc6h1vSPKQJ--TwIEL3X2n1yVCChlAc_ngDCY3ES0g.9R-r9ns4f3im0GJlMbm_PMZI-gHrV24nDRJcC50oDnAg.JPEG/900%EF%BC%BF1756412364356.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjY2/MDAxNzU2NDEyMzk3NTA0.JGbQXGMW1OswP5TBx5RWwfj55Mw8E5S514vAu9k_Asog.L6Junsd_SA0C1JJbGM7sTJatMvbpDeqJzspbjNVsZCMg.JPEG/900%EF%BC%BF1756412396503.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTYw/MDAxNzU2NDEyNTE1Nzcx.D3mgyMhPIZdmaPGQrOUtNiaeyg7tOuU7HsUC68MfdN8g.2BOJq9WKa-MbR0YCtEQw3xRoGDbUPMJRQDmpW7l7zdIg.JPEG/900%EF%BC%BF1756412514886.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTc0/MDAxNzU2NDE3NjEzMjYw.gxebUkF9y2MJ6qWXdCtKZg8_ETMje4hFRYYbo6KPmrsg.N3JU3gHFa1wSapl30SKDImwmcvpKBxQE3PNuSL0uMWgg.JPEG/1756417612614.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfNDMg/MDAxNzU0NjI4ODYzOTc5.VeZN6wECLG4m7gKP_-KwUp-P7-xOjEu7BLdye_WTPjYg.4tkYLtuHj1I3Ae9i0UxSU4VyEuF20cQsa_VF3jFrWVgg.JPEG/KakaoTalk_20250731_141422655_08.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMTkz/MDAxNzU0NjI4NzcyNzEx.Bz4criHl7vKYK_CQDklaT_FjlLGU3Gu7Q_2DT4CdHRsg.PeIHzqDPHO-z4sZFvVL5ljKVWYIFOf-CGSWaDscKIUgg.JPEG/KakaoTalk_20250731_141422655_01.jpg?type=w386' }
      ]);
    }

    const existingImages_k15838018 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15838018'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15838018[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/95df74860ea4f961a6d3d7d1b7046648573fceba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a7399e4212aacaaf22b8681d5834663d34da612c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2ea2915b06e859b69f2fb69a0abe5da7ec086c47?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/92befeea70e4d7b8b11da12f32f0129aa8af8d1d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df6c6a9f25db9e9fd89c5dbe75936bc55bd6e34a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d161ab1d28d5c36354a6831088fe908e03377043?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d5ae24a421876efdb46d94d26d6cb5070b0d97a4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8272d15811a28278bcda556084187ea616872d43?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/572c4b06af7b490d64bdc2f5a215e27db18ebec6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe7b4a475821e3d636923dd772af7d5cdc6e32a1?original' }
      ]);
    }

    const existingImages_k1802546975 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1802546975'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1802546975[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2DA3512603FF4BC7B4F1065430B70560' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c23e1266faf0cfb72be1861159f189a70dfe6f4f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/18da922046ab2741c9ef7d9da200f195df7d7bec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2953fbf9d31a4bfb28514120d6c9f742ba00faf9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1909144ff3d9257dd2fc0bd2c3842f3ef60e0505?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/846ffdbbacdf14601ff8437bd7eadc9f3a08d2c9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cf1e1688151905bde60ae89ab1c326e263208ca5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2bfeb09871483fd71f6c6b753e9ded367f3ad9b3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6a52cc8f9db8dcb5ff9a8506f1762936ec70c635?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f0920f89e6cd7a3371e939b5c7af1de76aa86313?original' }
      ]);
    }

    const existingImages_k545169922 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k545169922'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k545169922[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DD3D5706326441089A2328F256B27EB8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/151CD02D1017423F8A4DF50BC0B9F9EB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4F19D214A2A24F8B8966E32A5C5AC2A5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/00B13F45F8CA464CB31459CF6BA901B7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D00EB70954C3471B9AC8CD87FDB1096C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B5580ADC522E4B1585EAD233540B8811' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/56A6A0E4D53143B5ADAC93A64BABBB3F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/ABD40E9B9F44489AA912958FF048607C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4B75B9D629C6448DBD08B894CB435CBF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/72CC09A5B0E448A3AC49038AFBD4A2A5' }
      ]);
    }

    const existingImages_k11010333 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11010333'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11010333[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aba8f3e89111d8fa05a39d0d7cab8db8b2f2d73e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjc0/MDAxNzU2OTk5NTQyMzM4.1SocjW0BYT9tW6cKdMVp8NMtbJOWBXtieky1LiNJx2Ag.zpqAkA9HizofqJ28GowHAL2M21GA_R-iE2XPuLzc3v0g.JPEG/550%EF%BC%BF20250903%EF%BC%BF174204.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTIw/MDAxNzU2OTk5NTQyMjAy.IcMyVsQldi--NY1qfcIuF6FW-ep5_GcZ4T10sa3Za5Mg.bKel892EUt87XOX6_c_1FPLbNPQSjixn9GCpE6yXvNsg.JPEG/550%EF%BC%BF20250903%EF%BC%BF190246.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfMjAw/MDAxNzUzMjYyMzMwOTMx.TdnzBbGuaYpDLJfkNOB0GrhjawjB0rYzeO_htVoI5VAg.kvrwvGHVwf_pgLxMa_K_rkpnfHv-QfW5Aj25T8xTSVcg.JPEG/IMG%EF%BC%BF3096.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfMjA4/MDAxNzUzMjYyMzMyMTI3.vcboql7o4Kvbs7Bt8JCkrMkYENMZML6EiyfCQZ71yhYg.EcVNwjv1hpLXMwDdlfo0UNr2qHc_rr9bzPYq5dKpAEgg.JPEG/IMG%EF%BC%BF3075.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjRfNzkg/MDAxNzQyODExMjUxNTUx.DUVY6x9zC6Fny4QpoedwJpcPNz3QKIw6zzWba6jpztUg._MqylbOY4wNO9SDYPXW4wZttEGZnwkMGqOcVU2ZxWfUg.JPEG/SE-51E38D86-B5D0-4DF9-8D41-B67B700B0182.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMTRfMTk1/MDAxNzM5NTI4OTc2NjEx.sQpRYJDC2KxtgdpMFjmut1K-nAKtTBup_DeIRGkmfZgg.lf3KFdR5v8e2zcy6n_4uGajjWqa7I5R42qYVymwUoNwg.JPEG/IMG_1444.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAyMTRfMTMx/MDAxNzM5NTI4OTc2Njkx.hhzo_55buZVTvLFSFTnmfYKj3-G8-BNpBKPZCWvaXa4g.i9Tdwq5NK_f0Ei3EcN6CeoWmRQwQykmB5gaBvzvhp3Ig.JPEG/IMG_1447.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzEyMTRfMjU1/MDAxNzAyNTUyODgwMTEx.woNPoQhUhm19ZDZseYbkT5dltbvTBzkpTCvCm4FZEN0g.mAHK8OEv_SnUQ_6uO1WNZhJzvqUQArggTDo8306FiAcg.JPEG.gm_enrl/KakaoTalk_20231214_180910860_03.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzEyMTRfMjU4/MDAxNzAyNTUyODgwMTUw.ELSZfwpTPveLaYUbZzJKIdTGIa0ewMKVBPgblMi39_Yg.G8g1oqpzEtxluiISiMicdNa9bYALxUIzfoQjpJpQTNsg.JPEG.gm_enrl/KakaoTalk_20231214_180910860_04.jpg?type=w773' }
      ]);
    }

    const existingImages_k8450432 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8450432'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8450432[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/18514D4A4E44885707' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/D9916406F8164E04A41C9F82BE533CCA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/75239C59F0C747F3BA6A8AD56031FF45' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/88929B740AC542D29AD55D3EB62015AC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4C4D07B328164816951F7E80EA4E0537' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/56B59CC3BC854C4A928D655A30C9643F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/93FEAD2F32354152B58CDB0DE39F680B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/363B3AF1626A4E0A8D7099E2DA60FB63' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FF6C459B150B4B79A67422CD149F2F00' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/807F75F38A67403D9964CE62CCAACA4F' }
      ]);
    }

    const existingImages_k1680496738 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1680496738'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1680496738[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/07585331690B4FC692A9069051B65726' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/764A916324F540569152DAE58A4E3E3A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3A7C0164B23541208261BE2F03A34FAF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C5CD5D00543B4AC59EFCDE0F2BE29397' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A28513ADF0BB455E9AB201EFE2025333' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B47B9D1686174BDBB49219769FE571E4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E861E4D300C9459DA0EB7DAE1D342CD8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DB4ECE8EEBDE42B9992BBC871F62B033' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/42A3350A26CE49C4BE40D0C9267431AC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5EE928F0B70B49218D09165A52506D68' }
      ]);
    }

    const existingImages_k7979469 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7979469'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7979469[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e7238df095576a286bc9752d3e86f8b76b72e6c9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/38ee50c1792965bf78844025bd5805185563f6ad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce8eaccdd6988804171b4e0c6eccc8a7ed27374b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79eeffbb0f003fb8317960e7e8aee69d14f23972?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/10bd6e2b971128c0e3afcee3e6feba56863e4599?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df21080c562db41b7166ef5aa890b3e67cb78797?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/212cff07991a4652ea448025a3bfcd88652fe6cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1f4f40a0a3c762c232aa08e88f55518bd6588467?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MThfMTg1/MDAxNzUyODExOTg2MjM2.yj9D2FDZHtu9NKhbcL1A5f6tti7NdICpeIqAY_077G4g.OX47vG3IWVZd1HHL17ZUVsqnlgKVHKfhZiYyfCP3w_gg.JPEG/SE-32712430-b0ec-441a-8868-042ff539c813.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MThfNzcg/MDAxNzUyODExOTk1NTQx.CtkCmeuP7r7NsnMjMA6xLVua_aOztH1t_wvyzaQzVvYg.b8LRoVTHFiL-MCsxfYcS4zB-_3OcJ44aLPdpBf6RXP8g.JPEG/SE-9d35c766-77c4-4ca3-8bff-e86a97a96816.jpg?type=w386' }
      ]);
    }

    const existingImages_k236724227 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k236724227'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k236724227[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2715A44358645A9D14' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2420F24358645BF10F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/27693F4258645AB515' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/230DBC4158645AA544' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2613924458645AAA12' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/2DE29AE71C3147CF8FC3633231825073' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1beeb7b1fed4fc5b7ea9b9f1513a3c7e1c537e05?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8d962c64a88b67b78cf9c44165ff8eab993c74b1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e918403457f44ba9e6b39b70f84f5b541c665b92?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9e9cf1e80bda63ccd7dec2183b1bfe11f4c5eb5e?original' }
      ]);
    }

    const existingImages_k367189126 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k367189126'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k367189126[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eba85f91c674fdcd54bd5509434cd08ac9e53960?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ed7f12803f431d59e0178df66d2ebb735adf931?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60c016f8959872f6dc09e6cb7ed19fb08e61a1f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b6b8d0ba714b9f1417468f37d4a1090c4ca5f4d2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/36117bdc751c5f8f19706a10bf16d043187361b6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/25f3df1e8747c55f533d986c4457f56f8ad29260?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7366a5d739e2c4d7457a132a0fa3648c999eb3da?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/21356d968d037874c56e981e74a592c125a4175a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/67249195361eff369ba409d2a823950b6643324c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c31ec0b99e5f4cbb21a0589d38b15e77493c0188?original' }
      ]);
    }

    const existingImages_k8260298 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8260298'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8260298[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca3ccb50840b5cca5930308e366b22acd7948501?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/94b00de958c68548be79e334e6de3c0f562eb8bc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/768b9d38cf0f3d3e63fef81cb2631a9dd4618cd5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/842b275f3df6ba1975eb7be78dee2abbec4eb355?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/19516859f3df91901b532088cc779a903b8ae25e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MjVfMTUg/MDAxNzE2NjExMjU2Mzkx.Zx2W5MS8wvri5Kd-KWilmOk_ZNa2BgvwYCoOW9OQp3sg.N8xVaheAMAbOMpSta3G0smNGvTMEVNsuLnkknpOb9Kgg.JPEG/SE-87389bb0-1a4e-11ef-9e9f-2787745401bf.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MjJfNjgg/MDAxNzE2MzY2MzQ3NTQ1.aknTVZukr5RtwMuDegUtZBshbIwYRYohH0_Xu5SNFwMg.IKV66ILKaV5D9y-k4mWNNcFU3FGDqOZ0e3KkJIZ0QfIg.JPEG/IMG_5589.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTZfMTA3/MDAxNzE1ODM5ODYzMjg2.0GRqYOjGuOEn8NN4BZTM4sLmppY5UrkVeXhAU1Ttatcg.WdD6pg0EO7lCtN-wt1uPjKzwGxxT4WiB_glRvOcMM7gg.JPEG/20.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MTZfMTQg/MDAxNzE1ODE5NDU4Mzc3.rcnBbsKJMW8eN9Hwu023XsCyTHl47R3sQ3wYS6wMhYgg.yPswUQVMIvLazaf07QoYV5Vm8SK_bwPifws8NGLInzYg.JPEG/%EC%A0%9C%EC%A3%BC%EB%8F%84%EB%AF%BC%EB%A7%9B%EC%A7%91_%EB%8F%84%EB%82%A8%EC%98%A4%EA%B1%B0%EB%A6%AC%EC%8B%9D%EB%8B%B9_%ED%95%9C%EC%9A%B0%EA%B5%AC%EC%9D%B4%EB%AA%A8%EB%93%AC_(7).jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bpxZSK/btsHqvdFo9Y/kWjg6qwjeCsKw8CG4PJjzK/img.jpg' }
      ]);
    }

    const existingImages_k1205344363 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1205344363'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1205344363[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjMw/MDAxNzU2OTA4ODM0NTkz.Lx2FIuUoRypor5VoV1lLnaLrGyJHZcL_jM1WuiCwxOYg.xvzj0R2jSBsEo3AzLwjINa6irB3EiqgqpYvvfreBf8sg.JPEG/output%EF%BC%BF3287935604.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTQ3/MDAxNzU2OTA1MzY2MzQz.qqDAuVnQWys0n577Ihtpy2LpXYiT_fXI5ZOg5RLbrhQg.h2kqLNjQnCxC6BV8i-cHDW-qFDSySJyy2VhVvf-HEXMg.JPEG/IMG%EF%BC%BF4355.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTU5/MDAxNzU2ODYxODc2NDQw.b3blhgQaLqlJRir_ExdB8EScnVohSinz990QYkGnNxUg.d20dnDt6xdr6Wtdd5-Xi3Fcd2v6Ep5Ft5Aie9QNvnO0g.JPEG/IMG%EF%BC%BF5828.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTQ5/MDAxNzU2ODYxODc1OTg1.u8JbjrF0SLpJH19_SSGb0xyYGya5rL-nIeMe6R2GJ-gg._-Wbm7XteWfrZ3L_JRHFPCDHKGjsrw-zbvG67jMIUPog.JPEG/IMG%EF%BC%BF5825.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfNDEg/MDAxNzU2ODY1NTc4MDU5.Xcr6Of6qXXN7cRdDMq4GFgKreMNMaJ7ZL7UXyUeV9kcg.guPAX3u32Hu9Fye7vXKmhkzlHcSBAx4UTJHd96dMRUUg.JPEG/SE-688E3B41-FB1F-4226-B6D9-611EB43599D8.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfOTIg/MDAxNzU2ODYxODc3NzEz._8MPo-G_GE5P-2y-9kelkiay_q07EHi8CMosiX31Opkg.5IA0dEGdYpCn1Od1TsXGG7ec-7y5ohdxLOVO4DBwH3cg.JPEG/IMG%EF%BC%BF5857.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfNzIg/MDAxNzU2ODYxODc3NzQ4.bbFbAZ3_q6UyfmkfbV5rP3R2FTyatLDJ_mOA_mRGYEAg.-LrLypOqSSl9xMDGnqPu4Kgt1gsKemCtxu9WQjovRSQg.JPEG/IMG%EF%BC%BF5858.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjc0/MDAxNzU2ODYxODc2NDEz.nmGAQsWubBXIdubWypj3KtK88B5D-GYlJA2S3uuwFVcg.E95D4nclofE5qopmnoHMlErqRrQCTWL7DvYQoKIzRA0g.JPEG/IMG%EF%BC%BF5827.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTI3/MDAxNzU2ODYxODc2NDA0.lobWFGNbTlmnZRzpCjp71BzffUaDNy3qqI0LQMrf1Eog.anDCZL115iuvpz4CHytdqfVhe_2f1clqO8DDHO4mSWQg.JPEG/IMG%EF%BC%BF5831.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDZfNzMg/MDAxNzUxODAyNDUzNzY2.47UioS2qZQI_wRBhK1tQbGSwdPfFDX3WXm8iMeoLc1Ug.C0xlx_XqRp1xD65oRmJ4CqZFkfu-i5AjbVHuD-9PvxUg.JPEG/KakaoTalk_20250706_204532680_04.jpg?type=w386' }
      ]);
    }

    const existingImages_k10817173 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10817173'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10817173[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/abbd932ded8eaa3b0b0b283369a9285e9a0bedf2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f6cfec5aecf9dd352049e6530503ecd4eac70692?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9642575c3afab72c8ea052066e72f446f4929323?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/665f927bdc4a5aa8df5e51052725de48920d2e7c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/90e15a796007df49c45c891325264b4293616ec4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0554798fb66c11ad7519d134ff356523486afefd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f47892607b4a1958b452e869cbfa6151df40e48f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c2455cf5659d7234f678467b88e042b14476c2ab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3e056bebe3d08c40e6db88ce9a2fecb1aa939477?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3cdc9a964df9a38b0d7dd60bba6e6f415a9962dc?original' }
      ]);
    }

    const existingImages_k1923949718 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1923949718'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1923949718[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/075526A6C115448084D09E2031574958' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/08899163CC6D450E98A51EEB709EDAE7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9BFD642AFD824CA18F8800EBA337554C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7D773A57207D444ABA3C0FAAC6B94B59' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DAC4278AC07E4D9B94DB9B6FFDA45A67' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/83F0988EC663413BBB2199A45D2A7C92' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D24053EDB6E34CF98B036D416305738E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D4D500E194F0486B99815F64F8224C38' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4E3DB69466F5485EB4DD532D6AB9D539' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C2B5B4E9E5494BEC8D89F6648681B31F' }
      ]);
    }

    const existingImages_k9251493 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9251493'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9251493[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/91525977bf2fa49ed26ce90e3cd17745c4be0af9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29d164449786ded69799aa564bf4279a42ee9a07?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c71763e1f686125968cc39d9a7b4ba639ab5417?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce3b92340494af11384f8e71f72ec19e40012dde?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd920860a59a81f8abd0a5d931280d3266ff9084?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/511509d92c84d5e4348d8bf6be5cef5d7bb28a97?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ddadeccc93875020d469d51035f5339915c68f9c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/31220dfb6ec64f806cf4bb77b1a6f0201d4d93b2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d53bf1b12309ba5f01cd13a83cc65744af8961c4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dd8b579b9b26a9d4ca8ec71b4f8b4850bf4bfa7c?original' }
      ]);
    }

    const existingImages_k673097455 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k673097455'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k673097455[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5AF3AE18D9F94CA799AE3363434E71AE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6BF35304D684417C9196B1DA6F129ED0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/783203E3073047E4BB4B1B891F89508B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/28C0F55BCD474A2E9C0F236E4AB74357' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CEEDAE1228704C0D9180160C4D2E4A8D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4B09C97180234595ADEE5A2E6E71DFAC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/559B8EC704DB4FB6B391612CCC3858E8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5B8C3F504B394248A196F288BC5D5FC3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1ED484B49D974ADFBCC10096816A0DCC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ef1db3cef56212c57dbf780120bc845b3056177?original' }
      ]);
    }

    const existingImages_k10915490 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10915490'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10915490[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/329C7C055C3144BFB7BBD276D6A9647A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/4D0EEB0D523744A1A58CF0C876D385D2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EC072534523D48078CC47222C4EC087D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FD66AF15C244422883CBF3E893746996' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8722DFB5377343848CCDF51D5BBEE550' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2912C0934634425DACDC9D8CDDEC9A8C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/456C97FB4E09466B87ECF86842327BCF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B62175CB0B024A43994EC2D1ACE72A2E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D6B53A3FD8414F0FA322B750E375D5D9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B0CC9A625CF843C7AD05FAD34C9E8009' }
      ]);
    }

    const existingImages_k316010726 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k316010726'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k316010726[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTg0/MDAxNzU3MjM4OTg5ODMz.puV1kLR9o0n2lSDDwizS0NWkcu2_2ptseBSB3Trir0Qg.QUwTvh1jDLAdWPsmX_by7Bzux4nMItgGU6eNjL3RqSgg.JPEG/IMG%EF%BC%BF5940.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfOTcg/MDAxNzU3MjM0OTY0NTUz.Xn49qSh2XcIGozcfuQ4B20HJbbXqN-evTTZFaIheYuEg.bUni-1-7PtBbx5r6Njttfvt5Nz7B2e5yfG2zwcjmajQg.JPEG/output%EF%BC%BF970405498.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTMg/MDAxNzU3MTQzODEyMTY2.aRWAtmBm210D3gyvON5ORktvPDZJpXjZhhbDckk-WHEg.CPb3XGvDhY-VB_HQ3IBvZM2KgDU96mnTN_vMgx2UfXUg.JPEG/900%EF%BC%BF20250731%EF%BC%BF114954.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfNjIg/MDAxNzU3MTQ0MjgyNjIw.kJd7Ms2rnENwiWdgRr_EIMouoLPLx7e4rTWNiG7c_XEg.n5_8pDjonrKYIVFzVH8m54ct01KTmTPUwsEsNtCCq24g.JPEG/900%EF%BC%BF20250731%EF%BC%BF115906.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTgy/MDAxNzU3MTQzODEyMTQz.6obzVuJESe4DwjZ40xg4Sdf31bPexlskAab6a7QNytUg.u9WvHaPaPM4k0Iae87dnc89m1RO-Ocu4OWBaOEw604cg.JPEG/900%EF%BC%BF20250731%EF%BC%BF114931.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/DjY1v/btsQopbn3El/TKTBl3pGIFbbrKPYBK3jo1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/y7Zut/btsQnSSvX7r/5KK33TzHBgqDCkrO12UV1k/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjcx/MDAxNzU3MTY3MTk2MjI2.YRdWU3XYqRgygc25FzKHz1nAoAxdPNVYTk_HMy2yOnMg.7sa28xP8UoR4v_GZ1BfwVMlRHqxXZJQtP9jO5dbJjRQg.JPEG/IMG%EF%BC%BF1040.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTAx/MDAxNzU3MTY3MDIyNzg4.tbGhisCrHLa0MZO2_F1ImK-rvfsDcCIIHjnSP4OTvuYg.7hrL7GHPACdbxs8GUmnVzIQkJ0h-wpViMg1ajXy5W7kg.JPEG/IMG%EF%BC%BF1038.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjY1/MDAxNzU2MTczOTAwNzUy.-hYwcVtL8fuf1MAyyvz-cxwUv17F12nzgJIE5fylNe0g.hieCLPF6fWLHCAoHWvH5jmQKdKBabI3CwoQC8E2mx9Qg.JPEG/IMG%EF%BC%BF9987.JPG?type=w966' }
      ]);
    }

    const existingImages_k534840856 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k534840856'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k534840856[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e42f7984ff2c1f33e951d2cf618375de0ff09039?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d7f36ca911b9974893145d96946e943cd335099c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/053963e34146e598fb0b3ce677e86fa05237bbc7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMjEw/MDAxNzU2MDEwNzg1MTEx.5rSVE_k50lFOOVwxx2MpOUtbbkM3x12d280fcKw4pvAg.u35aB9rEo-llc5deBa0j-4P-Pcmd7K3yawVH9XEH2T8g.JPEG/20240329_185318.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMjA0/MDAxNzU2MDEwNTY3Mzk2.4r1HOt0gGujexgf9M1KYYh4e59LDr9jiYDPjaOnwUnwg.tHbi8tf2CgDRwa4xKonx-MEJWY8gTWkwI7JwGOdtOscg.JPEG/20240329_180456.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfNSAg/MDAxNzU2MDEwNzg1NDUy.22qJ04DPtHjBVtguKiXryqpqi2NaaOvcAfrtFMEAL8Ug._zQ0RYhYI1empguY5XMV51Hu8mQeNLt_2bVRXbatNhAg.JPEG/20240329_180750.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjA1/MDAxNzUzODQzMTg5OTk4.hAEZK-iSXN-f8Le5C0mu3dxSRxCPN0DyKNMKyGR0m0wg.w2Jskmwg2Gce7dIwpJqqIzCMiG9v8k1jp2kGR1N9W_cg.JPEG/output%EF%BC%BF4114217925.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MTJfMjIz/MDAxNzIwNzc1NjkyNzQ1.84yUzOzTvw7IgOfLRdwXOk2kpl6lrD5tXb_Woqr05-Ag.6m7KyGot4mbxYaTtEYAXaDUPm0L-JpseDOgYqNz4B4Yg.JPEG/IMG_7762.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MTJfMTUg/MDAxNzIwNzc1NjkzMjg5.VPQsmpn-Ik3ffvzCi8QLuH4chlp8rXdU6FFXyR74AyMg.ZPO9slOnISe9TGTxAN4TaCNGgCt1zjMFYd-zwaps0iEg.JPEG/IMG_7765.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MTJfNDcg/MDAxNzIwNzc1NjkyMjkw.jGHDU1lP3h7scS5WMEykKamWn1UsTPFH2xc4a1SLWugg.obT-eWMKreHGLEs9A-nkoRn-oBcXJ_t6vpXCLl199nMg.JPEG/IMG_7761.jpg?type=w773' }
      ]);
    }

    const existingImages_k1748942465 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1748942465'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1748942465[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/3521B1983A9A44158F5391642DF3E4FF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/2D03C24225FB4CC8B4444579BFB88447' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/574E3D1A171E4C48B94972CD0D4230C5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/A3D21814C51A4B93A8A898F993F5DCC3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/C8D7311A314042FFAC0DA79E65E1871A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/EC0483D6CDE74BF7BEAF02F8BCD7D37C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/E3BAFF584CBA4AC9A0904E30E1BEFE1E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/1F214641266D4845AC96EF547F885F4B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/E7F326B044414BA1864EC78B6C39A208' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/0802C70C481A45E684481D9BEF6EEC5E' }
      ]);
    }

    const existingImages_k1030718114 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1030718114'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1030718114[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/409019b4eb2608c6fe80ccf5fe735870c3b009ff?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ef497142467861945dcd612036ec390aa2ed66e3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4f2d16687e10f1bd732704e0f2f6293cc8a68881?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aec922403a28219f65d9d8c89240832bbf14333f27fe8de0def22c7bc3e2b20a' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/266a1d2f542f1d60e982ba41adfbc878780a23ba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9a1213f05a0539f1878568d74853c3c0d3d658d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e17a7ed1bce80b6037d928dfdfdc651b0e7139cb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dd383579ac27a17738c6b8c012b87f19017f9c1f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bd2493783643b17c3f53ab964c97fe6f1041086f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/490a4b91c393cc978bf9a7d8b367208bda58970f?original' }
      ]);
    }

    const existingImages_k347377655 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k347377655'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k347377655[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_1505814184' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1670AA38297D48499241A0DB8A73C31B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/45055CF0133B4F25B2B3607B92FC3665' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6174F8EE00DF4A17989EFA173FD43506' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5AE4C9673D754428A78131E296EE8994' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E3BCD07DFAE9457FA52F1F9D70EA096A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0A75A0FD943E42AC8CA4F295F122757C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C0DAF1570C1E4316ACEEA06AF138AB2B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7871FF682662438890E429B55493ECEA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D6201BA714E44813904DE0B49FBA4AFF' }
      ]);
    }

    const existingImages_k1012357847 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1012357847'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1012357847[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/243836A7B48C4A12A425174B04F50CD4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/68C957EF048140B5BF4EDF9361678C5B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/25AA6BC82F8A4FD2A5D199FBF4C1EE64' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/ADE2391212FB4324AEF78737AE87BB74' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/6E7C2E34A701458199F9CE271B9D92D7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/017046DB226A4DDEBE0B4169BEA6FCCB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4FE0BF4339FB4B74B4B88948EF153D1C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9D31B7452B6F4B42B458395E07BA7083' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BB60C70D35CE4D518E326A4FAE823418' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DF45B044CA504E30BD76D2BC02023591' }
      ]);
    }

    const existingImages_k10377362 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10377362'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10377362[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a4c58fa219161f7dd7967e1ee3a5d7d513960f5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/51f7281b74e4022d245b28735482e8d072c04fe6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe8cab6f30d85266ca47632fedd23830ed21234d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d3310fa4541cd5d155cafa117b18e63078c99bcd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d995c3fea66fd7205c6c4a09672b5e3ea6b2bd3e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3115edb1934748c0d40d0865ce50a109cd9f55e4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4a1e0b11da1487f5d08f5b483fb30a5ba0ea1cf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f8285ad9bf61971844f161fc28d84fb57ba4301?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/50e39670a7657ba5b1a63b412610d18554f6fc52?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34c20757a2d939401a34c3fc70ed90dc9cd9360a?original' }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계: 결과에 담긴 categories 기준, 중복 방지
    const spotCategoryRelationData = [];

    const existingCats_k1957836536 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1957836536'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1957836536 = new Set(existingCats_k1957836536.map(r => r.spot_category_id));

    if (!existingSet_k1957836536.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1957836536' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k334369411 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k334369411'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k334369411 = new Set(existingCats_k334369411.map(r => r.spot_category_id));

    if (!existingSet_k334369411.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k334369411' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k20125337 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k20125337'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k20125337 = new Set(existingCats_k20125337.map(r => r.spot_category_id));

    if (!existingSet_k20125337.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k20125337' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21301540 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21301540'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21301540 = new Set(existingCats_k21301540.map(r => r.spot_category_id));

    if (!existingSet_k21301540.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21301540' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1010408190 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1010408190'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1010408190 = new Set(existingCats_k1010408190.map(r => r.spot_category_id));

    if (!existingSet_k1010408190.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1010408190' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8536676 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8536676'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8536676 = new Set(existingCats_k8536676.map(r => r.spot_category_id));

    if (!existingSet_k8536676.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8536676' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k107042576 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k107042576'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k107042576 = new Set(existingCats_k107042576.map(r => r.spot_category_id));

    if (!existingSet_k107042576.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k107042576' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9236847 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9236847'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9236847 = new Set(existingCats_k9236847.map(r => r.spot_category_id));

    if (!existingSet_k9236847.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9236847' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1352434661 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1352434661'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1352434661 = new Set(existingCats_k1352434661.map(r => r.spot_category_id));

    if (!existingSet_k1352434661.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1352434661' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k981558300 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k981558300'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k981558300 = new Set(existingCats_k981558300.map(r => r.spot_category_id));

    if (!existingSet_k981558300.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981558300' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1875134440 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1875134440'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1875134440 = new Set(existingCats_k1875134440.map(r => r.spot_category_id));

    if (!existingSet_k1875134440.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1875134440' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8195159 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8195159'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8195159 = new Set(existingCats_k8195159.map(r => r.spot_category_id));

    if (!existingSet_k8195159.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8195159' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k367412374 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k367412374'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k367412374 = new Set(existingCats_k367412374.map(r => r.spot_category_id));

    if (!existingSet_k367412374.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367412374' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27321409 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27321409'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27321409 = new Set(existingCats_k27321409.map(r => r.spot_category_id));

    if (!existingSet_k27321409.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27321409' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27357866 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27357866'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27357866 = new Set(existingCats_k27357866.map(r => r.spot_category_id));

    if (!existingSet_k27357866.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27357866' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16260200 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16260200'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16260200 = new Set(existingCats_k16260200.map(r => r.spot_category_id));

    if (!existingSet_k16260200.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16260200' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15942374 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15942374'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15942374 = new Set(existingCats_k15942374.map(r => r.spot_category_id));

    if (!existingSet_k15942374.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15942374' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15838018 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15838018'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15838018 = new Set(existingCats_k15838018.map(r => r.spot_category_id));

    if (!existingSet_k15838018.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15838018' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1802546975 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1802546975'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1802546975 = new Set(existingCats_k1802546975.map(r => r.spot_category_id));

    if (!existingSet_k1802546975.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1802546975' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k545169922 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k545169922'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k545169922 = new Set(existingCats_k545169922.map(r => r.spot_category_id));

    if (!existingSet_k545169922.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k545169922' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11010333 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11010333'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11010333 = new Set(existingCats_k11010333.map(r => r.spot_category_id));

    if (!existingSet_k11010333.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11010333' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8450432 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8450432'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8450432 = new Set(existingCats_k8450432.map(r => r.spot_category_id));

    if (!existingSet_k8450432.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8450432' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1680496738 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1680496738'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1680496738 = new Set(existingCats_k1680496738.map(r => r.spot_category_id));

    if (!existingSet_k1680496738.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680496738' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7979469 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7979469'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7979469 = new Set(existingCats_k7979469.map(r => r.spot_category_id));

    if (!existingSet_k7979469.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7979469' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k236724227 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k236724227'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k236724227 = new Set(existingCats_k236724227.map(r => r.spot_category_id));

    if (!existingSet_k236724227.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k236724227' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k367189126 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k367189126'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k367189126 = new Set(existingCats_k367189126.map(r => r.spot_category_id));

    if (!existingSet_k367189126.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k367189126' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8260298 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8260298'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8260298 = new Set(existingCats_k8260298.map(r => r.spot_category_id));

    if (!existingSet_k8260298.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8260298' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1205344363 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1205344363'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1205344363 = new Set(existingCats_k1205344363.map(r => r.spot_category_id));

    if (!existingSet_k1205344363.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1205344363' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10817173 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10817173'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10817173 = new Set(existingCats_k10817173.map(r => r.spot_category_id));

    if (!existingSet_k10817173.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10817173' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1923949718 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1923949718'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1923949718 = new Set(existingCats_k1923949718.map(r => r.spot_category_id));

    if (!existingSet_k1923949718.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923949718' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9251493 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9251493'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9251493 = new Set(existingCats_k9251493.map(r => r.spot_category_id));

    if (!existingSet_k9251493.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9251493' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k673097455 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k673097455'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k673097455 = new Set(existingCats_k673097455.map(r => r.spot_category_id));

    if (!existingSet_k673097455.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k673097455' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10915490 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10915490'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10915490 = new Set(existingCats_k10915490.map(r => r.spot_category_id));

    if (!existingSet_k10915490.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10915490' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k316010726 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k316010726'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k316010726 = new Set(existingCats_k316010726.map(r => r.spot_category_id));

    if (!existingSet_k316010726.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k316010726' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k534840856 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k534840856'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k534840856 = new Set(existingCats_k534840856.map(r => r.spot_category_id));

    if (!existingSet_k534840856.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k534840856' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1748942465 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1748942465'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1748942465 = new Set(existingCats_k1748942465.map(r => r.spot_category_id));

    if (!existingSet_k1748942465.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1748942465' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1030718114 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1030718114'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1030718114 = new Set(existingCats_k1030718114.map(r => r.spot_category_id));

    if (!existingSet_k1030718114.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1030718114' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k347377655 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k347377655'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k347377655 = new Set(existingCats_k347377655.map(r => r.spot_category_id));

    if (!existingSet_k347377655.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k347377655' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1012357847 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1012357847'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1012357847 = new Set(existingCats_k1012357847.map(r => r.spot_category_id));

    if (!existingSet_k1012357847.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012357847' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10377362 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10377362'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10377362 = new Set(existingCats_k10377362.map(r => r.spot_category_id));

    if (!existingSet_k10377362.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10377362' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    if (spotCategoryRelationData.length > 0) {
      await queryInterface.bulkInsert('spot_category_relation', spotCategoryRelationData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    const ids = ['k1957836536', 'k334369411', 'k20125337', 'k21301540', 'k1010408190', 'k8536676', 'k107042576', 'k9236847', 'k1352434661', 'k981558300', 'k1875134440', 'k8195159', 'k367412374', 'k27321409', 'k27357866', 'k16260200', 'k15942374', 'k15838018', 'k1802546975', 'k545169922', 'k11010333', 'k8450432', 'k1680496738', 'k7979469', 'k236724227', 'k367189126', 'k8260298', 'k1205344363', 'k10817173', 'k1923949718', 'k9251493', 'k673097455', 'k10915490', 'k316010726', 'k534840856', 'k1748942465', 'k1030718114', 'k347377655', 'k1012357847', 'k10377362'];
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
