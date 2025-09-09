'use strict';

/**
 * 카카오 북마크 크롤링으로 생성된 Spot 데이터 시드 파일
 * 폴더ID: 17696289
 * 카테고리라벨: 음식점
 * 생성일시: 2025-09-09T16:00:50.143Z
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
        name: '페페피자',
        address: '경기 평택시 밀월로43번길 37 1층 (신장동)',
        tel: '031-662-8333',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.07837409725432 127.0509445358326)',
          4326
        ),
        naver_spot_id: 'k1125687908',
        review_count: 0,
        review_score: null,
      },
      {
        name: '밤가시버거 일산',
        address: '경기 고양시 일산동구 일산로372번길 46 1층 (정발산동)',
        tel: '031-813-9010',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.66908084209575 126.7846206467847)',
          4326
        ),
        naver_spot_id: 'k1771074804',
        review_count: 0,
        review_score: null,
      },
      {
        name: '긴자인도레스토랑',
        address: '경기 안산시 단원구 광덕대로 151 삼영타운 3층 304호 (고잔동)',
        tel: '031-405-3368',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.31005555464153 126.82902002703199)',
          4326
        ),
        naver_spot_id: 'k1562813267',
        review_count: 0,
        review_score: null,
      },
      {
        name: 'K헤밍웨이카페 분당점',
        address: '경기 성남시 분당구 대왕판교로34번길 21 (금곡동)',
        tel: '031-726-1001',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.348435790837094 127.10244247277342)',
          4326
        ),
        naver_spot_id: 'k1362526805',
        review_count: 0,
        review_score: null,
      },
      {
        name: '후이후이',
        address: '경기 수원시 영통구 덕영대로 1566 더판타지움 1층 (영통동)',
        tel: '031-8001-9700',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.24512942188337 127.0618990428071)',
          4326
        ),
        naver_spot_id: 'k824465369',
        review_count: 0,
        review_score: null,
      },
      {
        name: '화청갈비',
        address: '경기 수원시 팔달구 창룡대로41번길 12 1층 (매향동)',
        tel: '031-216-5005',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.28311378912801 127.0202208902961)',
          4326
        ),
        naver_spot_id: 'k1437199692',
        review_count: 0,
        review_score: null,
      },
      {
        name: '화양가옥 수원역점',
        address: '경기 수원시 팔달구 향교로 58 1층 (매산로3가)',
        tel: '0502-5552-2348',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.26954923564018 127.00718405065244)',
          4326
        ),
        naver_spot_id: 'k1348776376',
        review_count: 0,
        review_score: null,
      },
      {
        name: '홍밀면옥',
        address: '경기 수원시 팔달구 수성로157번길 5-16 1층 (화서동)',
        tel: '031-271-4842',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.286629110839286 126.98959362835893)',
          4326
        ),
        naver_spot_id: 'k19622978',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한성치킨',
        address: '경기 김포시 양촌읍 석모로73번길 85 1층 (양촌읍 석모리)',
        tel: '031-989-2744',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.649520216449204 126.64268365216789)',
          4326
        ),
        naver_spot_id: 'k19232119',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이천한내송어회',
        address: '경기 이천시 경충대로3070번길 48 1층 (사음동)',
        tel: '031-634-6525',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.30267488191909 127.40901529015262)',
          4326
        ),
        naver_spot_id: 'k1191233712',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하남장터곱창',
        address: '경기 하남시 하남대로787번길 10 1층 (신장동)',
        tel: '031-793-0582',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.53981785515086 127.20934951241895)',
          4326
        ),
        naver_spot_id: 'k994977541',
        review_count: 0,
        review_score: null,
      },
      {
        name: '핏제리아 수플리',
        address: '경기 안성시 원곡면 만세로 1140 1층 (원곡면 칠곡리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.04533135126186 127.15377000465979)',
          4326
        ),
        naver_spot_id: 'k934335737',
        review_count: 0,
        review_score: null,
      },
      {
        name: '피플즈',
        address: '인천 부평구 시장로30번길 11 2층 (부평동)',
        tel: '0507-1367-6612',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.493223504585465 126.7263345470681)',
          4326
        ),
        naver_spot_id: 'k26969937',
        review_count: 0,
        review_score: null,
      },
      {
        name: '포폴로피자',
        address: '경기 고양시 일산동구 정발산로 43-20 센트럴프라자 1층 102~103호 (장항동)',
        tel: '031-932-9337',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.658546512989076 126.77304614564308)',
          4326
        ),
        naver_spot_id: 'k108763820',
        review_count: 0,
        review_score: null,
      },
      {
        name: '까사',
        address: '경기 안양시 동안구 평촌대로227번길 26 (호계동)',
        tel: '031-476-3053',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.391525812075706 126.95396665669017)',
          4326
        ),
        naver_spot_id: 'k12555727',
        review_count: 0,
        review_score: null,
      },
      {
        name: '파니노구스토 구월점',
        address: '인천 남동구 인하로507번길 14 탑플라자 2층 (구월동)',
        tel: '032-421-0046',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.44381412567007 126.70323113071989)',
          4326
        ),
        naver_spot_id: 'k24580752',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오크우드프리미어인천 파노라믹65',
        address: '인천 연수구 컨벤시아대로 165 65층 (송도동)',
        tel: '032-726-0065',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.389139848570615 126.64421672421771)',
          4326
        ),
        naver_spot_id: 'k492426337',
        review_count: 0,
        review_score: null,
      },
      {
        name: '태원정육식당',
        address: '경기 안양시 만안구 박달로507번길 19 1층 (박달동)',
        tel: '031-443-9233',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.403504747581174 126.90871379569192)',
          4326
        ),
        naver_spot_id: 'k14564932',
        review_count: 0,
        review_score: null,
      },
      {
        name: '콘비노',
        address: '경기 성남시 분당구 돌마로522번길 10-1 1층 (서현동)',
        tel: '010-2700-9166',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.379035142564476 127.13748997225086)',
          4326
        ),
        naver_spot_id: 'k15239464',
        review_count: 0,
        review_score: null,
      },
      {
        name: '쿠치나 디 까사',
        address: '경기 성남시 분당구 문정로 136 (율동)',
        tel: '031-705-7866',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.381994785926445 127.15167261589805)',
          4326
        ),
        naver_spot_id: 'k19972104',
        review_count: 0,
        review_score: null,
      },
      {
        name: '칸티푸르레스토랑',
        address: '경기 안산시 단원구 다문화2길 28 2층 (원곡동)',
        tel: '031-493-9563',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.33022819257265 126.79105742129246)',
          4326
        ),
        naver_spot_id: 'k14100981',
        review_count: 0,
        review_score: null,
      },
      {
        name: '카야마구로',
        address: '경기 수원시 팔달구 효원로235번길 52 2층 (인계동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.26513808285118 127.0286849216371)',
          4326
        ),
        naver_spot_id: 'k1443953518',
        review_count: 0,
        review_score: null,
      },
      {
        name: '첫번째부엌',
        address: '인천 부평구 대정로36번길 21 2층 (부평동)',
        tel: '010-5769-2560',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.49529755389814 126.72398391615702)',
          4326
        ),
        naver_spot_id: 'k87364008',
        review_count: 0,
        review_score: null,
      },
      {
        name: '창석원조닭알탕',
        address: '인천 동구 샛골로 169 (송림동)',
        tel: '032-764-6160',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.47754160463744 126.64477936806351)',
          4326
        ),
        naver_spot_id: 'k1680791764',
        review_count: 0,
        review_score: null,
      },
      {
        name: '제이콥스핏제리아',
        address: '인천 중구 우현로45번길 29 1층 (신포동)',
        tel: '032-763-1117',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.471141905851695 126.62641940848125)',
          4326
        ),
        naver_spot_id: 'k27328777',
        review_count: 0,
        review_score: null,
      },
      {
        name: '정운갈비',
        address: '경기 평택시 중앙시장로9번길 5 1층 (신장동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.08025534116031 127.05138664996738)',
          4326
        ),
        naver_spot_id: 'k9390224',
        review_count: 0,
        review_score: null,
      },
      {
        name: '전라도대왕조개구이',
        address: '인천 중구 월미문화로 27 1층 (북성동1가)',
        tel: '0507-1325-9291',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.47592855889498 126.59802388748521)',
          4326
        ),
        naver_spot_id: 'k14095480',
        review_count: 0,
        review_score: null,
      },
      {
        name: '자선농원',
        address: '경기 수원시 장안구 광교산로 363 1층 (하광교동)',
        tel: '031-247-6093',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.31532425836577 127.01897504143156)',
          4326
        ),
        naver_spot_id: 'k12660235',
        review_count: 0,
        review_score: null,
      },
      {
        name: '일템포',
        address: '경기 용인시 수지구 용구대로 2701 테이스티에비뉴 1층 (죽전동)',
        tel: '031-266-6261',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.326618535771736 127.10818067554234)',
          4326
        ),
        naver_spot_id: 'k48353287',
        review_count: 0,
        review_score: null,
      },
      {
        name: '일등시골집 고덕직영점',
        address: '경기 평택시 고덕면 방축3길 73 1동 1층 (고덕면 방축리)',
        tel: '031-666-7707',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.02152266702484 127.04399764572742)',
          4326
        ),
        naver_spot_id: 'k2056654598',
        review_count: 0,
        review_score: null,
      },
      {
        name: '유정집',
        address: '경기 성남시 수정구 수정로 460-2 1-2층 (단대동)',
        tel: '031-748-8791',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.46168993022607 127.15569913016729)',
          4326
        ),
        naver_spot_id: 'k11892249',
        review_count: 0,
        review_score: null,
      },
      {
        name: '위드위치 인천구월점',
        address: '인천 남동구 선수촌공원로 36 더블루시티 1층 107호 (구월동)',
        tel: '032-467-8784',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.442444252783325 126.71036022198142)',
          4326
        ),
        naver_spot_id: 'k231017241',
        review_count: 0,
        review_score: null,
      },
      {
        name: '50년전통 원조할머니묵집',
        address: '경기 파주시 돌곶이길 108-5 1층 (서패동)',
        tel: '031-942-3017',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.71389911502408 126.69489421513617)',
          4326
        ),
        naver_spot_id: 'k16148731',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용현 장어구이',
        address: '인천 미추홀구 낙섬서로10번길 3-22 (용현동)',
        tel: '032-888-1195',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.45084451588881 126.63464841090695)',
          4326
        ),
        naver_spot_id: 'k9947449',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오 이탈리안 광교점',
        address: '경기 수원시 영통구 센트럴타운로 85 광교아브뉴프랑 cb39호 (이의동)',
        tel: '031-548-0066',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.29159269886722 127.05009551136837)',
          4326
        ),
        naver_spot_id: 'k1550048150',
        review_count: 0,
        review_score: null,
      },
      {
        name: '옛집',
        address: '경기 안양시 만안구 만안로55번길 40 (안양동)',
        tel: '031-442-4886',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.3871866467253 126.93189571931967)',
          4326
        ),
        naver_spot_id: 'k8449310',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영흥루',
        address: '경기 안성시 중앙로412번길 26 1층 (동본동)',
        tel: '031-675-2238',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.00587553599655 127.2720119435145)',
          4326
        ),
        naver_spot_id: 'k11892184',
        review_count: 0,
        review_score: null,
      },
      {
        name: '열두바구니 송도점',
        address: '인천 연수구 신송로125번길 7 이리옴프라자 201-1호 (송도동)',
        tel: '032-834-4433',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.39476233008275 126.65152161514285)',
          4326
        ),
        naver_spot_id: 'k13642764',
        review_count: 0,
        review_score: null,
      },
      {
        name: '엘피노323 평택본점',
        address: '경기 평택시 고덕갈평9길 76 1층 (고덕동)',
        tel: '031-666-3323',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.063012512082956 127.05121760479004)',
          4326
        ),
        naver_spot_id: 'k1290897759',
        review_count: 0,
        review_score: null,
      },
      {
        name: '에스쿱',
        address: '경기 수원시 장안구 덕영대로445번길 37 1층 102호 (율전동)',
        tel: '010-8548-3234',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.30247011040766 126.9720453404996)',
          4326
        ),
        naver_spot_id: 'k641918700',
        review_count: 0,
        review_score: null,
      },
      {
        name: '싼타나레스토랑',
        address: '경기 안성시 양성면 만세로 859 다동 2,3층 (양성면 동항리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.06017237133588 127.17559403114645)',
          4326
        ),
        naver_spot_id: 'k11700316',
        review_count: 0,
        review_score: null,
      },
      {
        name: '심스키친',
        address: '인천 남동구 논현남로 17 1층 102호 (논현동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.40317782195048 126.72229370427189)',
          4326
        ),
        naver_spot_id: 'k134789027',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신일반점',
        address: '인천 중구 서해대로 460-2 1층 (신흥동2가)',
        tel: '032-882-1812',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.46698583044432 126.63544705850276)',
          4326
        ),
        naver_spot_id: 'k9179430',
        review_count: 0,
        review_score: null,
      },
      {
        name: '쉐프맥나인',
        address: '경기 남양주시 천마산로 21 1층 (호평동)',
        tel: '070-7762-3003',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.66359390281456 127.24751043667965)',
          4326
        ),
        naver_spot_id: 'k1221772601',
        review_count: 0,
        review_score: null,
      },
      {
        name: '숙성명작',
        address: '인천 서구 담지로8번길 14 1동 1층 (청라동)',
        tel: '032-566-9298',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5307848173159 126.6611534152199)',
          4326
        ),
        naver_spot_id: 'k27602226',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수원소갈비해장국',
        address: '경기 화성시 장안면 3.1만세로 125 1층 (장안면 어은리)',
        tel: '031-358-7339',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.08635363137246 126.82669850700114)',
          4326
        ),
        naver_spot_id: 'k10549854',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수원만두',
        address: '경기 수원시 팔달구 창룡대로8번길 6 1층 (팔달로1가)',
        tel: '031-255-5526',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.28152839992851 127.01745554407596)',
          4326
        ),
        naver_spot_id: 'k7970465',
        review_count: 0,
        review_score: null,
      },
      {
        name: '송풍가든',
        address: '경기 수원시 장안구 경수대로 1013 1,2층 (송죽동)',
        tel: '031-252-4700',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.30625776114454 127.00068130492947)',
          4326
        ),
        naver_spot_id: 'k892278619',
        review_count: 0,
        review_score: null,
      },
      {
        name: '소굿',
        address: '경기 안산시 단원구 광덕2로 163-11 21세기빌딩 111호 (고잔동)',
        tel: '070-7542-8077',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.310919950485 126.8286074569628)',
          4326
        ),
        naver_spot_id: 'k1007093063',
        review_count: 0,
        review_score: null,
      },
      {
        name: '센뽀',
        address: '경기 평택시 자유로20번길 10 제니스오피스텔 1층 (합정동)',
        tel: '0503-7151-6649',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(36.992722092996615 127.09167810437685)',
          4326
        ),
        naver_spot_id: 'k915439914',
        review_count: 0,
        review_score: null,
      },
      {
        name: '사마르칸트',
        address: '경기 안산시 단원구 다문화2길 3 1층 (원곡동)',
        tel: '031-492-6984',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.32902188654761 126.78963004383955)',
          4326
        ),
        naver_spot_id: 'k11833940',
        review_count: 0,
        review_score: null,
      },
      {
        name: '비하니',
        address: '인천 부평구 광장로24번길 13 (부평동)',
        tel: '032-525-8771',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.49024405930655 126.72524633247053)',
          4326
        ),
        naver_spot_id: 'k17103455',
        review_count: 0,
        review_score: null,
      },
      {
        name: '비엣남(Vietnam)',
        address: '경기 파주시 교하로159번길 7 (목동동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.722967318368546 126.73875796394192)',
          4326
        ),
        naver_spot_id: 'k1890378983',
        review_count: 0,
        review_score: null,
      },
      {
        name: '비스트로지노',
        address: '경기 양주시 옥정동로7길 91 (옥정동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.821723368918406 127.09416128990476)',
          4326
        ),
        naver_spot_id: 'k1946946918',
        review_count: 0,
        review_score: null,
      },
      {
        name: '블루메쯔 분당수내점',
        address: '경기 성남시 분당구 발이봉남로25번길 2 1층 (수내동)',
        tel: '031-717-6658',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.36391994183055 127.1274833551962)',
          4326
        ),
        naver_spot_id: 'k278838995',
        review_count: 0,
        review_score: null,
      },
      {
        name: '브레드쏭 본점',
        address: '경기 남양주시 와부읍 경강로926번길 15 2, 3층 (와부읍 팔당리)',
        tel: '031-576-8522',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.554769941561425 127.23653000472319)',
          4326
        ),
        naver_spot_id: 'k242555220',
        review_count: 0,
        review_score: null,
      },
      {
        name: '봄날의정원 한식당',
        address: '인천 강화군 선원면 선원사지로 67 1층 (선원면 신정리)',
        tel: '032-934-0673',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.724265772866126 126.50700869683189)',
          4326
        ),
        naver_spot_id: 'k1164611593',
        review_count: 0,
        review_score: null,
      },
      {
        name: '베트남고향식당',
        address: '경기 안산시 단원구 중앙대로 443 1층 (원곡동)',
        tel: '031-492-0865',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.32887984706607 126.78879999313604)',
          4326
        ),
        naver_spot_id: 'k8333899',
        review_count: 0,
        review_score: null,
      },
      {
        name: '베네쿠치',
        address: '경기 성남시 분당구 운중로146번길 19 1층 (운중동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.39053781185031 127.08058777856348)',
          4326
        ),
        naver_spot_id: 'k15610994',
        review_count: 0,
        review_score: null,
      },
      {
        name: '백령도메밀청풍면옥',
        address: '인천 남동구 석정로 585 1층 (간석동)',
        tel: '032-426-8380',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4679699492749 126.69956809447716)',
          4326
        ),
        naver_spot_id: 'k27600571',
        review_count: 0,
        review_score: null,
      },
      {
        name: '미스리햄버거',
        address: '경기 평택시 쇼핑로 33 1층 104호 (신장동)',
        tel: '031-667-7171',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.081274597118764 127.05310129869483)',
          4326
        ),
        naver_spot_id: 'k7881525',
        review_count: 0,
        review_score: null,
      },
      {
        name: '몽연',
        address: '경기 화성시 노작로 195 (반송동)',
        tel: '031-613-9991',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.205375227673436 127.07436153172809)',
          4326
        ),
        naver_spot_id: 'k1876987237',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명지원',
        address: '경기 포천시 일동면 화동로 1258 (일동면 화대리)',
        tel: '031-536-9919',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.971980021574595 127.33107235331943)',
          4326
        ),
        naver_spot_id: 'k9757744',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명덕잣나무집',
        address: '경기 포천시 화현면 봉화로 107 (화현면 명덕리)',
        tel: '031-532-9734',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.86038204290983 127.27682193824656)',
          4326
        ),
        naver_spot_id: 'k8990558',
        review_count: 0,
        review_score: null,
      },
      {
        name: '만다복 본점',
        address: '인천 중구 차이나타운로 36 1-2층 (북성동2가)',
        tel: '032-773-3838',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.47611426501391 126.61927232112365)',
          4326
        ),
        naver_spot_id: 'k8294851',
        review_count: 0,
        review_score: null,
      },
      {
        name: '만강홍',
        address: '경기 성남시 분당구 황새울로 337 3층 (서현동)',
        tel: '031-705-8555',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.386285135594726 127.12240374396556)',
          4326
        ),
        naver_spot_id: 'k19358387',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마부시',
        address: '경기 안양시 동안구 시민대로 280 샤르망2오피스텔 2층 207, 208호 (관양동)',
        tel: '031-384-3436',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.3943217635491 126.96177523081202)',
          4326
        ),
        naver_spot_id: 'k26917106',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마리에뜨',
        address: '경기 화성시 동탄공원로3길 32-2 1층 (반송동)',
        tel: '031-8003-9211',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.20847843996369 127.06183304514344)',
          4326
        ),
        naver_spot_id: 'k27353196',
        review_count: 0,
        review_score: null,
      },
      {
        name: '림 청라점',
        address: '인천 서구 보석로12번길 11 1층 (청라동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5211494420457 126.62589420402757)',
          4326
        ),
        naver_spot_id: 'k470193360',
        review_count: 0,
        review_score: null,
      },
      {
        name: '리즈델리',
        address: '경기 성남시 분당구 정자일로 121 더샵스타파크 상가동 1층 B28~B29호 (정자동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.3611600131152 127.10460901852656)',
          4326
        ),
        naver_spot_id: 'k671838041',
        review_count: 0,
        review_score: null,
      },
      {
        name: '르샹띠에',
        address: '경기 평택시 진위면 하북4길 129-4 2층 (진위면 하북리)',
        tel: '010-5754-0522',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.112698597889434 127.06372627607075)',
          4326
        ),
        naver_spot_id: 'k1223543491',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라온식탁',
        address: '경기 과천시 관문로 92 힐스테이트과천중앙 B동 1층 133~134호 (중앙동)',
        tel: '0507-1344-9050',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.429773633054694 126.99005289796432)',
          4326
        ),
        naver_spot_id: 'k1193754757',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라비떼',
        address: '경기 성남시 분당구 판교공원로3길 16 1층 (판교동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.39155131811151 127.08955522531403)',
          4326
        ),
        naver_spot_id: 'k14589499',
        review_count: 0,
        review_score: null,
      },
      {
        name: '떼네룸 밤리단길',
        address: '경기 고양시 일산동구 대산로11번길 5-9 1층 (정발산동)',
        tel: '010-9911-1216',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.669023498658134 126.7751360702421)',
          4326
        ),
        naver_spot_id: 'k1709704120',
        review_count: 0,
        review_score: null,
      },
      {
        name: '디몰토',
        address: '경기 부천시 오정구 원종로79번길 24 1층 (원종동)',
        tel: '0507-1340-3529',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.52511937037 126.8089729474823)',
          4326
        ),
        naver_spot_id: 'k1083248979',
        review_count: 0,
        review_score: null,
      },
      {
        name: '들풀',
        address: '경기 가평군 설악면 한서로124번길 16-12 1층 (설악면 창의리)',
        tel: '031-585-4322',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.67105140839661 127.50314410713746)',
          4326
        ),
        naver_spot_id: 'k11097979',
        review_count: 0,
        review_score: null,
      },
      {
        name: '동추원불고기',
        address: '인천 미추홀구 학익소로 67 신세계빌딩 1층 (학익동)',
        tel: '032-872-2292',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.441709890175346 126.67076736068843)',
          4326
        ),
        naver_spot_id: 'k1857322630',
        review_count: 0,
        review_score: null,
      },
      {
        name: '도토리네 칼국수',
        address: '경기 안성시 사곡길 2 1층 (사곡동)',
        tel: '031-672-1621',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.036588773109585 127.26197862950566)',
          4326
        ),
        naver_spot_id: 'k410451556',
        review_count: 0,
        review_score: null,
      },
      {
        name: '다안토니오 이탈리안레스토랑',
        address: '경기 양평군 옥천면 향교길45번길 13 다안토니오 (옥천면 옥천리)',
        tel: '031-773-5228',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.52498022620568 127.45620049321606)',
          4326
        ),
        naver_spot_id: 'k1217276251',
        review_count: 0,
        review_score: null,
      },
      {
        name: '뉴욕반점',
        address: '인천 부평구 부평대로87번길 4 3층 (부평동)',
        tel: '032-516-4488',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.49936506915825 126.72184288459171)',
          4326
        ),
        naver_spot_id: 'k16145833',
        review_count: 0,
        review_score: null,
      },
      {
        name: '그린홀리데이',
        address: '인천 강화군 길상면 해안남로 814 (길상면 선두리)',
        tel: '032-937-0506',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.6096054335317 126.48035447796678)',
          4326
        ),
        naver_spot_id: 'k13095795',
        review_count: 0,
        review_score: null,
      },
      {
        name: '그레이락',
        address: '경기 수원시 팔달구 정조로 904-1 1층 (북수동)',
        tel: '010-9817-9665',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.288758694740885 127.01482735480043)',
          4326
        ),
        naver_spot_id: 'k981353914',
        review_count: 0,
        review_score: null,
      },
      {
        name: '군포식당',
        address: '경기 군포시 군포로556번길 6 1층 (당동)',
        tel: '031-452-0025',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.35549641803413 126.9472704996964)',
          4326
        ),
        naver_spot_id: 'k10228541',
        review_count: 0,
        review_score: null,
      },
      {
        name: '고모리691',
        address: '경기 포천시 소흘읍 고모루성길 267 고모리691 (소흘읍 고모리)',
        tel: '0507-1307-9691',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.79687140034361 127.1607281029408)',
          4326
        ),
        naver_spot_id: 'k8743858',
        review_count: 0,
        review_score: null,
      },
      {
        name: '원조강영감네닭내장수구레',
        address: '경기 하남시 하남대로 1039 (풍산동)',
        tel: '031-795-1821',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.549369602495 127.18490111560592)',
          4326
        ),
        naver_spot_id: 'k8476761',
        review_count: 0,
        review_score: null,
      },
      {
        name: '가보정 1관',
        address: '경기 수원시 팔달구 장다리로 282 (인계동)',
        tel: '1600-3883',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.274216979370266 127.02866581574696)',
          4326
        ),
        naver_spot_id: 'k8108863',
        review_count: 0,
        review_score: null,
      },
      {
        name: '홍태루',
        address: '경기 평택시 탄현로327번길 9 (신장동)',
        tel: '031-666-3871',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.081237534353875 127.05533256978843)',
          4326
        ),
        naver_spot_id: 'k10968167',
        review_count: 0,
        review_score: null,
      },
      {
        name: '홍춘관 양평점',
        address: '경기 양평군 양평읍 한빛길 4 (양평읍 양근리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.48852078330217 127.49247356858535)',
          4326
        ),
        naver_spot_id: 'k15300915',
        review_count: 0,
        review_score: null,
      },
      {
        name: '헬로오드리',
        address: '경기 성남시 분당구 석운로202번길 12 (석운동)',
        tel: '031-8017-8746',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.37994546441506 127.04703341325416)',
          4326
        ),
        naver_spot_id: 'k25430330',
        review_count: 0,
        review_score: null,
      },
      {
        name: '프롬이태리',
        address: '경기 포천시 소흘읍 죽엽산로 669 1층 (소흘읍 직동리)',
        tel: '031-544-0414',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.77578260461173 127.16528179134457)',
          4326
        ),
        naver_spot_id: 'k547879658',
        review_count: 0,
        review_score: null,
      },
      {
        name: '팔미옥',
        address: '경기 수원시 팔달구 효원로 3-1 1,2층 (매산로3가)',
        tel: '031-245-6325',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.27316762056794 127.00989940101769)',
          4326
        ),
        naver_spot_id: 'k44689514',
        review_count: 0,
        review_score: null,
      },
      {
        name: '툴롱',
        address: '인천 연수구 인천타워대로132번길 30 휴먼빌파크상가 208호 (송도동)',
        tel: '032-831-2003',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.38596987170537 126.64355419801471)',
          4326
        ),
        naver_spot_id: 'k27418130',
        review_count: 0,
        review_score: null,
      },
      {
        name: '타이마실 안양본점',
        address: '경기 안양시 만안구 양화로72번길 83-25 1층 (안양동)',
        tel: '031-466-8880',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.40030446453819 126.91879189035038)',
          4326
        ),
        naver_spot_id: 'k1657771872',
        review_count: 0,
        review_score: null,
      },
      {
        name: '쿠오체레',
        address: '경기 김포시 김포한강1로 240 라비드퐁네프 블루동 3층 302호 (운양동)',
        tel: '031-994-3437',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.6528179872565 126.68445137362895)',
          4326
        ),
        naver_spot_id: 'k730256197',
        review_count: 0,
        review_score: null,
      },
      {
        name: '카츠쇼쿠도우 판교본점',
        address: '경기 성남시 분당구 판교역로 152 알파돔타워3 지하1층 9호 (백현동)',
        tel: '031-622-7134',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.394161124855096 127.11034655334474)',
          4326
        ),
        naver_spot_id: 'k652267180',
        review_count: 0,
        review_score: null,
      },
      {
        name: '천현한우집',
        address: '경기 광주시 초월읍 무갑길 68 (초월읍 무갑리)',
        tel: '031-763-5762',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.42210676947965 127.31493492730864)',
          4326
        ),
        naver_spot_id: 'k11234505',
        review_count: 0,
        review_score: null,
      },
      {
        name: '진흥각',
        address: '인천 중구 신포로23번길 20 (중앙동4가)',
        tel: '032-772-3058',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.47170340011598 126.62391602889646)',
          4326
        ),
        naver_spot_id: 'k8568222',
        review_count: 0,
        review_score: null,
      },
      {
        name: '진미통닭',
        address: '경기 수원시 팔달구 정조로800번길 21 2층 (남수동)',
        tel: '031-255-3401',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.27966134832974 127.01810460547605)',
          4326
        ),
        naver_spot_id: 'k406816688',
        review_count: 0,
        review_score: null,
      },
      {
        name: '전가복',
        address: '인천 남동구 하촌로59번길 24 1층 (만수동)',
        tel: '032-468-7869',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.45332536615439 126.73195913891026)',
          4326
        ),
        naver_spot_id: 'k10091038',
        review_count: 0,
        review_score: null,
      },
      {
        name: '입주집',
        address: '경기 수원시 팔달구 팔달문로3번길 37 1층 (팔달로1가)',
        tel: '031-255-5384',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.279319024701906 127.01763093729876)',
          4326
        ),
        naver_spot_id: 'k10745910',
        review_count: 0,
        review_score: null,
      },
      {
        name: '인화루',
        address: '경기 평택시 탄현로 283 (신장동)',
        tel: '031-666-2370',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.07787122322862 127.05514568974316)',
          4326
        ),
        naver_spot_id: 'k10744547',
        review_count: 0,
        review_score: null,
      },
      {
        name: '인생화로 구래본점',
        address: '경기 김포시 김포한강9로12번길 7-15 1층 (구래동)',
        tel: '031-981-6227',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.63883659736479 126.62702703177757)',
          4326
        ),
        naver_spot_id: 'k470387639',
        review_count: 0,
        review_score: null,
      },
      {
        name: '윤몽',
        address: '경기 고양시 일산동구 대산로31번길 5-16 1층 (정발산동)',
        tel: '010-2743-2118',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.66967265419577 126.77348832235062)',
          4326
        ),
        naver_spot_id: 'k928936722',
        review_count: 0,
        review_score: null,
      },
      {
        name: '유니스의정원 레스토랑',
        address: '경기 안산시 상록구 반월천북길 139 (팔곡일동)',
        tel: '031-437-2045',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.311503838674 126.88904789356695)',
          4326
        ),
        naver_spot_id: 'k8037122',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용화반점',
        address: '인천 중구 참외전로174번길 7 1층 (경동)',
        tel: '032-761-5970',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.47200966696617 126.6353910073022)',
          4326
        ),
        naver_spot_id: 'k9287139',
        review_count: 0,
        review_score: null,
      },
      {
        name: '용성통닭 본점',
        address: '경기 수원시 팔달구 정조로800번길 15 1층 (팔달로1가)',
        tel: '031-242-8226',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.2796253788949 127.01762649839273)',
          4326
        ),
        naver_spot_id: 'k8022147',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오크힐스테이크하우스',
        address: '경기 의정부시 동일로150번길 102 (장암동)',
        tel: '031-876-3654',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.705337707146896 127.05930865864465)',
          4326
        ),
        naver_spot_id: 'k1171502343',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오스테리아308',
        address: '경기 하남시 미사대로 520 현대지식산업센터 한강미사2차 D동 2층 222호 (덕풍동)',
        tel: '070-8834-6673',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.5580762014386 127.20493235027824)',
          4326
        ),
        naver_spot_id: 'k27324859',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신영빈루',
        address: '경기 평택시 탄현로 341 1층 (신장동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.08262455910805 127.05665168655437)',
          4326
        ),
        naver_spot_id: 'k12084459',
        review_count: 0,
        review_score: null,
      },
      {
        name: '언피니쉬드',
        address: '경기 하남시 미사강변서로 16 하우스디스마트밸리 1층 118호 (풍산동)',
        tel: '031-5175-7099',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.55188577876772 127.18452256094152)',
          4326
        ),
        naver_spot_id: 'k996865236',
        review_count: 0,
        review_score: null,
      },
      {
        name: '어랑생선구이 본점',
        address: '경기 고양시 일산동구 정발산로 31-9 레이크프라자2 1층 107호 (장항동)',
        tel: '031-907-9295',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.65729003871434 126.77184869843096)',
          4326
        ),
        naver_spot_id: 'k21937028',
        review_count: 0,
        review_score: null,
      },
      {
        name: '양바위 본점',
        address: '경기 성남시 분당구 동판교로177번길 25 판교호반써밋플레이스 아브뉴프랑 1층 110,111호 (삼평동)',
        tel: '031-706-9288',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.397272162005315 127.11340487745593)',
          4326
        ),
        naver_spot_id: 'k1465537638',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아름다운땅',
        address: '경기 수원시 영통구 청명남로4번길 2 (영통동)',
        tel: '031-204-8875',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.250255119561125 127.07353094291214)',
          4326
        ),
        naver_spot_id: 'k21510716',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신승반점 본점',
        address: '인천 중구 차이나타운로44번길 31-3 (북성동2가)',
        tel: '032-762-9467',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.47546801561441 126.61780592363385)',
          4326
        ),
        naver_spot_id: 'k9175466',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신라갈비',
        address: '경기 수원시 영통구 동수원로 538 (원천동)',
        tel: '031-212-2354',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.27379212292514 127.04924936155074)',
          4326
        ),
        naver_spot_id: 'k7975283',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수레실',
        address: '경기 광주시 수레실길 129 (능평동)',
        tel: '031-718-5292',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.34642984488259 127.1541832587326)',
          4326
        ),
        naver_spot_id: 'k21293090',
        review_count: 0,
        review_score: null,
      },
      {
        name: '송유향',
        address: '경기 광주시 순암로 270 2층 (중대동)',
        tel: '031-765-1171',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.40109632632912 127.22238485564087)',
          4326
        ),
        naver_spot_id: 'k1946286415',
        review_count: 0,
        review_score: null,
      },
      {
        name: '송월관',
        address: '경기 동두천시 큰시장로 28-10 (생연동)',
        tel: '031-865-2428',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.901017391859554 127.05503557260894)',
          4326
        ),
        naver_spot_id: 'k7955423',
        review_count: 0,
        review_score: null,
      },
      {
        name: '셈프레베네',
        address: '경기 수원시 팔달구 효원로235번길 53 4층 (인계동)',
        tel: '031-235-2580',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.26534721250102 127.02831973055642)',
          4326
        ),
        naver_spot_id: 'k743890057',
        review_count: 0,
        review_score: null,
      },
      {
        name: '세렌',
        address: '경기 성남시 분당구 운중로188번길 11 1층 (운중동)',
        tel: '031-709-0775',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.38990853870284 127.08369929066947)',
          4326
        ),
        naver_spot_id: 'k25081012',
        review_count: 0,
        review_score: null,
      },
      {
        name: '상해루',
        address: '경기 화성시 노작로 147 DM프라자 202호 (반송동)',
        tel: '031-8015-0102',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.20096785826671 127.07344255548536)',
          4326
        ),
        naver_spot_id: 'k9091835',
        review_count: 0,
        review_score: null,
      },
      {
        name: '삼도갈비',
        address: '경기 부천시 원미구 상이로85번길 32 2-3층 (상동)',
        tel: '032-324-8600',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.49671270577004 126.74259691409637)',
          4326
        ),
        naver_spot_id: 'k19629369',
        review_count: 0,
        review_score: null,
      },
      {
        name: '산골농원',
        address: '경기 가평군 설악면 어비산길99번길 75-7 (설악면 가일리)',
        tel: '031-584-7415',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.59638496671287 127.51002378244766)',
          4326
        ),
        naver_spot_id: 'k12085051',
        review_count: 0,
        review_score: null,
      },
      {
        name: '부암갈비',
        address: '인천 남동구 용천로 149 (간석동)',
        tel: '0502-5550-3547',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.46304021541996 126.71433643705684)',
          4326
        ),
        naver_spot_id: 'k11057071',
        review_count: 0,
        review_score: null,
      },
      {
        name: '본수원갈비 본점',
        address: '경기 수원시 팔달구 중부대로223번길 41 (우만동)',
        tel: '031-211-8434',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.277961813527504 127.04060590321085)',
          4326
        ),
        naver_spot_id: 'k7908963',
        review_count: 0,
        review_score: null,
      },
      {
        name: '복화루',
        address: '인천 부평구 부평대로32번길 16 1층 (부평동)',
        tel: '032-503-9725',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.49433165401462 126.72397390118573)',
          4326
        ),
        naver_spot_id: 'k9803823',
        review_count: 0,
        review_score: null,
      },
      {
        name: '복성원',
        address: '경기 부천시 원미구 부천로122번길 16 1층 (원미동)',
        tel: '032-611-4278',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.494975658513745 126.7859946218313)',
          4326
        ),
        naver_spot_id: 'k1249881135',
        review_count: 0,
        review_score: null,
      },
      {
        name: '멜팅룸 소래포구 본점',
        address: '인천 남동구 은봉로312번길 29-16 1층 (논현동)',
        tel: '0503-7152-1112',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.4045376348567 126.72584421460603)',
          4326
        ),
        naver_spot_id: 'k289098095',
        review_count: 0,
        review_score: null,
      },
      {
        name: '멘야고코로',
        address: '경기 수원시 영통구 월드컵로179번길 16 1층 (원천동)',
        tel: '010-9190-1259',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.277974490249036 127.0453958105138)',
          4326
        ),
        naver_spot_id: 'k724819429',
        review_count: 0,
        review_score: null,
      },
      {
        name: '매향통닭',
        address: '경기 수원시 팔달구 수원천로 317 1층 (남수동)',
        tel: '031-255-3584',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.28167970991202 127.01788858562811)',
          4326
        ),
        naver_spot_id: 'k10340916',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라체나',
        address: '경기 광주시 퇴촌면 천진암로 360 1층 (퇴촌면 광동리)',
        tel: '031-798-7981',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.471748748526835 127.31225814015801)',
          4326
        ),
        naver_spot_id: 'k720045301',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라라테이블',
        address: '경기 성남시 분당구 발이봉남로31번길 2 (수내동)',
        tel: '031-711-9998',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.363519360264156 127.12797033817743)',
          4326
        ),
        naver_spot_id: 'k1422565065',
        review_count: 0,
        review_score: null,
      },
      {
        name: '비니에올리',
        address: '경기 용인시 기흥구 죽전로15번길 8-1 1층 (보정동)',
        tel: '031-889-4932',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.32137625481985 127.11021297131026)',
          4326
        ),
        naver_spot_id: 'k11831455',
        review_count: 0,
        review_score: null,
      },
      {
        name: '뜨라또리아 로마냐',
        address: '서울 서초구 사평대로14길 11 대성빌딩 2층 (반포동)',
        tel: '0507-1370-2944',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.497721012020655 126.99442711282757)',
          4326
        ),
        naver_spot_id: 'k1376500537',
        review_count: 0,
        review_score: null,
      },
      {
        name: '돈파스타',
        address: '경기 성남시 분당구 황새울로342번길 11 금호리빙스텔 2층 201호 (서현동)',
        tel: '031-701-2155',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.38613614673017 127.12357785222316)',
          4326
        ),
        naver_spot_id: 'k8256228',
        review_count: 0,
        review_score: null,
      },
      {
        name: '데이빗앤룰스 판교점',
        address: '경기 성남시 분당구 판교로319번길 13 지하1층 B101~B103호 (삼평동)',
        tel: '031-602-8915',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.403684297910004 127.10907294782817)',
          4326
        ),
        naver_spot_id: 'k43391333',
        review_count: 0,
        review_score: null,
      },
      {
        name: '데니스스모크하우스',
        address: '경기 양주시 장흥면 북한산로 1014-4 1층 (장흥면 교현리)',
        tel: '031-829-0290',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.71226141648066 126.9713522723907)',
          4326
        ),
        naver_spot_id: 'k2095763590',
        review_count: 0,
        review_score: null,
      },
      {
        name: '덕화원',
        address: '경기 양주시 덕정길 4 1층 (덕정동)',
        tel: '031-858-0103',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.84409529828656 127.06253260317811)',
          4326
        ),
        naver_spot_id: 'k11097883',
        review_count: 0,
        review_score: null,
      },
      {
        name: '덕소숯불고기 본점',
        address: '경기 남양주시 와부읍 수레로 213 1층 (와부읍 월문리)',
        tel: '031-577-3892',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.59722440131328 127.23122898261262)',
          4326
        ),
        naver_spot_id: 'k9786815',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나래한옥 레스토랑',
        address: '경기 광주시 곤지암읍 광여로313번길 22 (곤지암읍 오향리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.35969877669136 127.37310875606954)',
          4326
        ),
        naver_spot_id: 'k400794314',
        review_count: 0,
        review_score: null,
      },
      {
        name: '꼭대기집약수터',
        address: '인천 강화군 길상면 장흥로101번길 31-14 1층 (길상면 장흥리)',
        tel: '010-9923-3578',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.61162078631154 126.51088821325341)',
          4326
        ),
        naver_spot_id: 'k18344911',
        review_count: 0,
        review_score: null,
      },
      {
        name: '김근자할머니집',
        address: '경기 포천시 이동면 화동로 2099 (이동면 장암리)',
        tel: '031-531-2157',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(38.035145544222146 127.3663578282284)',
          4326
        ),
        naver_spot_id: 'k15225119',
        review_count: 0,
        review_score: null,
      },
      {
        name: '기와집양대창센타',
        address: '경기 하남시 감일남로 16 삼현PF 1차 1층 (감일동)',
        tel: '02-431-2329',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.50630774344461 127.14144174176822)',
          4326
        ),
        naver_spot_id: 'k21295354',
        review_count: 0,
        review_score: null,
      },
      {
        name: '금문도',
        address: '인천 강화군 강화읍 중앙로 43 2층 213호 (강화읍 남산리)',
        tel: '032-933-0833',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.73979612340242 126.49038252176605)',
          4326
        ),
        naver_spot_id: 'k9676423',
        review_count: 0,
        review_score: null,
      },
      {
        name: '고등반점',
        address: '경기 수원시 팔달구 팔달로52번길 43 1층 (고등동)',
        tel: '031-255-3291',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.275063783988074 127.00307588192815)',
          4326
        ),
        naver_spot_id: 'k8766434',
        review_count: 0,
        review_score: null,
      },
      {
        name: '가든갤러리',
        address: '경기 남양주시 강변북로632번길 57-28 2층 (수석동)',
        tel: '031-566-7777',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.58785850315114 127.17409071386976)',
          4326
        ),
        naver_spot_id: 'k8113534',
        review_count: 0,
        review_score: null,
      },
      {
        name: '행주만리',
        address: '경기 고양시 덕양구 행주산성로120번길 29 201,401호 (행주외동)',
        tel: '031-978-4980',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.60102956773152 126.8178066939094)',
          4326
        ),
        naver_spot_id: 'k61429712',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하누비노 정자점',
        address: '경기 성남시 분당구 정자일로 136 엠코헤리츠 301동 101호 (정자동)',
        tel: '031-719-2192',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.3620955946511 127.10627645993596)',
          4326
        ),
        naver_spot_id: 'k26913121',
        review_count: 0,
        review_score: null,
      },
      {
        name: '토리코코로',
        address: '경기 남양주시 불암로 25-39 1층 (별내동)',
        tel: '0507-1321-8794',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.64382194337878 127.11018000179142)',
          4326
        ),
        naver_spot_id: 'k1019519804',
        review_count: 0,
        review_score: null,
      },
      {
        name: '태국식당팟퐁',
        address: '경기 용인시 수지구 죽전로144번길 7-5 단대로데오타워 1층 110호 (죽전동)',
        tel: '031-898-1976',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.32365831495814 127.12412082850443)',
          4326
        ),
        naver_spot_id: 'k939028346',
        review_count: 0,
        review_score: null,
      },
      {
        name: '탈리',
        address: '경기 성남시 분당구 서현로 192 2층 208호 (서현동)',
        tel: '031-707-3192',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.38781132688142 127.12426716029269)',
          4326
        ),
        naver_spot_id: 'k9979566',
        review_count: 0,
        review_score: null,
      },
      {
        name: '타이씨암레스토랑',
        address: '경기 용인시 처인구 포곡읍 성산로 633 더숨포레스트 F동 2,3층 (포곡읍 전대리)',
        tel: '031-323-3235',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.28667257531903 127.20874089531938)',
          4326
        ),
        naver_spot_id: 'k14973680',
        review_count: 0,
        review_score: null,
      },
      {
        name: '타이로드',
        address: '경기 파주시 경의로 1046 이더펠리체 1층 104호 (야당동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.710657039007465 126.75935084461722)',
          4326
        ),
        naver_spot_id: 'k1703915972',
        review_count: 0,
        review_score: null,
      },
      {
        name: '키치키치다이닝',
        address: '인천 부평구 주부토로145번길 23 1층 (갈산동)',
        tel: '032-505-4102',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.50806033006929 126.72439838430863)',
          4326
        ),
        naver_spot_id: 'k1828944939',
        review_count: 0,
        review_score: null,
      },
      {
        name: '체나콜로',
        address: '인천 연수구 인천타워대로 257 아트포레 c동 2층 211호 (송도동)',
        tel: '032-773-5951',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.393430361063054 126.63181042384717)',
          4326
        ),
        naver_spot_id: 'k1012874482',
        review_count: 0,
        review_score: null,
      },
      {
        name: '중평떡볶이 본점',
        address: '경기 수원시 팔달구 효원로265번길 44 청산빌딩 1층 (인계동)',
        tel: '031-226-8878',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.26398039009311 127.03164717780713)',
          4326
        ),
        naver_spot_id: 'k1055393258',
        review_count: 0,
        review_score: null,
      },
      {
        name: '일용할양식',
        address: '인천 남동구 인주대로522번길 50 101호 (구월동)',
        tel: '0502-5550-9391',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.44824125000981 126.69526669203167)',
          4326
        ),
        naver_spot_id: 'k564683615',
        review_count: 0,
        review_score: null,
      },
      {
        name: '인브스키친',
        address: '인천 부평구 부평대로 39-6 1층 (부평동)',
        tel: '032-213-3027',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.495077169415815 126.72221612706142)',
          4326
        ),
        naver_spot_id: 'k2031523879',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이탈리안테이블',
        address: '경기 평택시 함박산8길 21 1층 (고덕동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.037727787633955 127.03237130770782)',
          4326
        ),
        naver_spot_id: 'k1657150205',
        review_count: 0,
        review_score: null,
      },
      {
        name: '유노미',
        address: '인천 남동구 성말로 43 1층 (구월동)',
        tel: '032-710-2076',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.445283142301655 126.70553970802793)',
          4326
        ),
        naver_spot_id: 'k1527981986',
        review_count: 0,
        review_score: null,
      },
      {
        name: '원보만두',
        address: '인천 중구 차이나타운로 48 1층 (북성동2가)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.47525553143355 126.61896917683599)',
          4326
        ),
        naver_spot_id: 'k10693502',
        review_count: 0,
        review_score: null,
      },
      {
        name: '운봉농장',
        address: '경기 수원시 영통구 중부대로 236 (매탄동)',
        tel: '031-213-5668',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.275197100413685 127.04153349847947)',
          4326
        ),
        naver_spot_id: 'k16393579',
        review_count: 0,
        review_score: null,
      },
      {
        name: '안나푸르나레스토랑',
        address: '경기 부천시 원미구 부흥로402번길 45 2층 (심곡동)',
        tel: '0503-5294-0904',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.48811091303044 126.78451714005918)',
          4326
        ),
        naver_spot_id: 'k7993084',
        review_count: 0,
        review_score: null,
      },
      {
        name: '아시아아시아',
        address: '경기 고양시 일산동구 정발산로 24 웨스턴돔 B동 2층 (장항동)',
        tel: '031-901-0086',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.65503085763287 126.77209585819809)',
          4326
        ),
        naver_spot_id: 'k21326012',
        review_count: 0,
        review_score: null,
      },
      {
        name: '써니스피자마켓',
        address: '경기 용인시 수지구 문인로31번길 8 1층 (풍덕천동)',
        tel: '010-6611-6866',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.332465176631864 127.09909883326382)',
          4326
        ),
        naver_spot_id: 'k1224687320',
        review_count: 0,
        review_score: null,
      },
      {
        name: '심슨더스파이스',
        address: '경기 파주시 운정벌판길 24-22 (상지석동)',
        tel: '031-941-9267',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.72717069891534 126.77053191569705)',
          4326
        ),
        naver_spot_id: 'k1503321639',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신호등장작구이 서오릉본점',
        address: '경기 고양시 덕양구 서오릉로 396-14 1-2층 (용두동)',
        tel: '02-382-4536',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.62587015018193 126.89717798278167)',
          4326
        ),
        naver_spot_id: 'k13584562',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수엠부 수원점',
        address: '경기 수원시 팔달구 매산로20번길 9 2층 (매산로2가)',
        tel: '031-258-3305',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.26695079488938 127.00360768552484)',
          4326
        ),
        naver_spot_id: 'k7966850',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수엠부 동탄점',
        address: '경기 화성시 노작로4길 18-15 1층 (반송동)',
        tel: '031-8015-2494',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.19812854430311 127.07783267587976)',
          4326
        ),
        naver_spot_id: 'k13127748',
        review_count: 0,
        review_score: null,
      },
      {
        name: '송도갈매기 본점',
        address: '인천 연수구 능허대로151번길 25 1~2층 (옥련동)',
        tel: '032-831-0010',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.42168915074307 126.64695484452108)',
          4326
        ),
        naver_spot_id: 'k16860063',
        review_count: 0,
        review_score: null,
      },
      {
        name: '별미정숯불장어',
        address: '인천 강화군 선원면 더리미길 10 (선원면 신정리)',
        tel: '032-934-5894',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.722932482633226 126.5122396966592)',
          4326
        ),
        naver_spot_id: 'k8326896',
        review_count: 0,
        review_score: null,
      },
      {
        name: '반마이',
        address: '경기 파주시 교하로 555 (동패동)',
        tel: '070-7764-8799',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.70590091265231 126.71756191696568)',
          4326
        ),
        naver_spot_id: 'k1600738498',
        review_count: 0,
        review_score: null,
      },
      {
        name: '미미곱창',
        address: '경기 하남시 미사강변중앙로 193 에코브리지 1층 120~122호 (망월동)',
        tel: '0502-5552-3371',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.563705938048194 127.18964506713904)',
          4326
        ),
        naver_spot_id: 'k1744411158',
        review_count: 0,
        review_score: null,
      },
      {
        name: '리오그릴',
        address: '경기 평택시 중앙시장로6번길 30-14 (신장동)',
        tel: '031-666-7136',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.08024851133144 127.05050493461944)',
          4326
        ),
        naver_spot_id: 'k15944041',
        review_count: 0,
        review_score: null,
      },
      {
        name: '로얄인디아 라페스타F동점',
        address: '경기 고양시 일산동구 무궁화로 20-11 라페스타 F동 207호 (장항동)',
        tel: '031-816-6692',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.66185853569324 126.76750534036945)',
          4326
        ),
        naver_spot_id: 'k10360255',
        review_count: 0,
        review_score: null,
      },
      {
        name: '레오네오리진',
        address: '경기 고양시 일산동구 대산로11번길 12 1층 (정발산동)',
        tel: '070-5147-0618',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.66916237039049 126.77425608945148)',
          4326
        ),
        naver_spot_id: 'k1923092063',
        review_count: 0,
        review_score: null,
      },
      {
        name: '피제리아 라쪼',
        address: '경기 안산시 단원구 광덕1로 165 동남레이크빌1 1층 108~109호 (고잔동)',
        tel: '010-4212-1531',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.30834226186765 126.82810344387195)',
          4326
        ),
        naver_spot_id: 'k754992038',
        review_count: 0,
        review_score: null,
      },
      {
        name: '델씨엘로',
        address: '경기 가평군 청평면 경춘로 1031 1층 (청평면 하천리)',
        tel: '031-584-1767',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.752861129442415 127.43369872439627)',
          4326
        ),
        naver_spot_id: 'k24450217',
        review_count: 0,
        review_score: null,
      },
      {
        name: '델리다바 인도요리',
        address: '경기 수원시 팔달구 매산로 6-2 지하1층 (매산로1가)',
        tel: '031-248-1090',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.266842700905535 127.00238106904318)',
          4326
        ),
        naver_spot_id: 'k27287602',
        review_count: 0,
        review_score: null,
      },
      {
        name: '다이닝1324',
        address: '경기 의정부시 시민로146번길 7 1층 (의정부동)',
        tel: '070-7543-5744',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.73719633700699 127.05106586908873)',
          4326
        ),
        naver_spot_id: 'k956062471',
        review_count: 0,
        review_score: null,
      },
      {
        name: '네이키드키친',
        address: '경기 안양시 동안구 귀인로190번길 140-9 1층 (평촌동)',
        tel: '031-381-3191',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(37.38463769955949 126.96218212869874)',
          4326
        ),
        naver_spot_id: 'k27504105',
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

    const existingImages_k1125687908 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1125687908'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1125687908[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e318636acf086ff356e3c62135eaa3a1338bae64?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA1MjRfNzIg/MDAxNjUzNDAwNzE0MTI1.QzRMynYNF3VW5dCunS4GNZUf9CF1CjZhFIuK4h4xz9Yg.9cFCDFWs4pRtWq8EfEcdSCc6PHANAT1PkjOrTeJQeNwg.JPEG.gkfls612/SE-74C15E02-84A0-41F8-9E17-7DD7357041BC.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA1MjRfMTYg/MDAxNjUzNDAwNzEzMTM3.wTH_nkNOg6GWVyFpELaMlzU1TOOjN9NSWEnQXs5KZxAg.0En-mrhkKhAtWRKuNCjCxUW5rQwCAW4IS9x5jiy43Hwg.JPEG.gkfls612/SE-0D98A50D-8811-4809-8C1F-8EB737947F7E.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA1MjRfMjcw/MDAxNjUzNDAwNzQ1MjAz.QKybe1YmGBBRrvpSgepGd6pqsI9Br9ZWN0zxrSQIa00g.DlV8P4Xl-AQESeS0WUu1bRyjYG3HQ6pTDHFj9TkDnUog.JPEG.gkfls612/SE-E3352FD7-DFFA-4CE1-A408-530A90E7DD5C.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA1MjRfMTk1/MDAxNjUzNDAwNzE3OTkx.CGX5cGhGrHL2T2MfT-sOMWEa6EnRshYQSrwGt9YQUX0g.HUBJtX3m7zLLZA5kAdaGvucXLqrhz5P5_-gmxurBO8Ig.JPEG.gkfls612/SE-CB955E6D-8DF3-4A7F-9813-05A0BC83E548.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA1MjRfMTIz/MDAxNjUzNDAwNzE3MDU5.db5o0l3E98rNZmkM8eju1Jylq4TGEavgQDaUOkWtTxgg.grJH3VtjT0yIT_mWq8X6zq3bEf6V2mkGqcg6eElRZyIg.JPEG.gkfls612/SE-0FE9C6DD-6EBD-4DE4-BDA7-939B8F906B92.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA1MjRfMjgx/MDAxNjUzNDAwNzMzODM0.9Dn9W88q7DP-J8mXhfiaIpKuVeWBm2KbbcojILbtGtQg.fMV2YRSKYL7RdnXhIlcTXT74XmsM4sGQx7bT8kn_FDUg.JPEG.gkfls612/SE-D1386994-99BA-4B5C-BA4F-FED73DB7B672.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA1MjRfNjkg/MDAxNjUzNDAwNzMzMTYw.PVLca0lSoFmH_XHkdxoQKD4_ENKbINSMGOlI8A_F3_wg.g071EHKvJqsCDPaMtUkwyoU-WyOKr-Jkn7rTGX5sTwgg.JPEG.gkfls612/SE-92791540-33F0-4644-B11A-468A6202F355.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA1MjRfNCAg/MDAxNjUzNDAwNzI1MTM4.poA5FJL93XQ_ahP8Wola-vYEWn5VokDPLC4UIO4eXCQg.cONch1rEyH_H6vc4chRbDYYQpzXpvDQKtOg-NWxqmt8g.JPEG.gkfls612/SE-2581FC66-2AF0-4311-B229-2F3DD5539947.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA1MjRfMjcw/MDAxNjUzNDAwNzM2NDI4.ouSLzMREaChgew06nGYQOJIgWoQ5JKUuVqUCIGjm5Kgg.Mbz3F-x-H-V4D7eiQ0Xo9RjNfXDHeuMdYp0a_8_nwlYg.JPEG.gkfls612/SE-4F200DF0-942E-420B-84B3-658F8650E393.jpg?type=w580' }
      ]);
    }

    const existingImages_k1771074804 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1771074804'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1771074804[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/69F847F9B2D0478EB603FB4F77C07AFA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0E016F5247154E7197A1113CCBF7095A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B007B82D661B4EA4B0872BF6EE141141' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/AA871BF368DD48A398FE34E95E34EDE1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B740919AF9B14E7A86113ACC2B104DE6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_102839838' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/5B3A30F82CBB4086ABCE5E428440DE85' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/0A28AC1DC77349498A93C5CD67962C23' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTMy/MDAxNzU3MDQ3Njg2ODI0.mwIVZaIAWq6uTBV9Z0wcgh64BlZNG1c1dI0CS-zSPCAg.hgG3Kc4pe6m-m5pG3QiZBv79pvpahcNMG0U0hUlq510g.JPEG/IMG%EF%BC%BF0165.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTM5/MDAxNzU3MDQ3Njg0OTAx.5mz55O9Ac5eRveplxqjOU3kIW6cYZtEWGSpGDd7Z9QAg.OaUQhnpprpF2HyvzNHX_9UXILNQc5Av69mVwVW9tCvsg.JPEG/IMG%EF%BC%BF0184.JPG?type=w580' }
      ]);
    }

    const existingImages_k1562813267 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1562813267'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1562813267[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f36e58f6210df330086a17db19eefc49886c8956?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/772d2ba8e64146101f46343d7a381386e6ebd357?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/625b6442628a630dd49dafa1e55aa9e22aafd824?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb7c3186c50df06a5d6be0ed83259a398b872c53?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d7d9e526f87cae906bfd2407740b40b48755718d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/84dc06c4acd2139511984a99b148ed8981294fa0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/78e983addb4a470bfb095c6cab5017533d9d39df?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/543ea4d3573c46bb07d8439764323d4d02b75c2a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0fc0d6154b7416832e16878460f9bbe2d0f6015e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfNDYg/MDAxNzU2MzAyMDk2Mjg4.31MPAA2CsrfURT9CaBmVWr5PpyjZ50CPCsqxkTkdomgg.AIt8YxKPch5Wzn9azhRFZB6c78j2BnuYPw1wAG5BreMg.JPEG/KakaoTalk_20250825_144857251_20.jpg?type=w966' }
      ]);
    }

    const existingImages_k1362526805 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1362526805'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1362526805[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A7D9E76445FD4198A8F274A72EF0CC40' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CA8CE4D5A440439A8810B9E3AAEE249C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/17AC1629087B4E93A0A71E2F4793E76B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EBF62409AC0243D4B956D1356D4C830D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1E03175E9F27432C857E4F75233C5A6E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FE84599C295F4605B41774242082929C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/94DB93BBEF1C4B8F8DF8E1075F58F95F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5F5E91D22ECF4206B8FF0725F3BB95D7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8FA242D82C7B4EC5BD559F7FB49BAC08' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfNTEg/MDAxNzU3MzE2OTExMTE5.VpKcR3HNeiiqVU6GfmMQSUTHhKxwjcS8FxYctT4OarUg.1gJNlXKThcHR3QeHoR5iz57QmjttMSzwV2giPq1bPnkg.JPEG/a_(34).jpg?type=w966' }
      ]);
    }

    const existingImages_k824465369 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k824465369'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k824465369[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dd1c90efc834fa3b0a0bc48e8d775a9bf2915591?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/af234853d9653135129ee17351686435de03c337?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjAx/MDAxNzU2OTgzOTk1ODM2.Zagt-HTgTufyG42Vs-jDoVZcaaA_-viGld7nyT2Vf1kg.DPxvc1mwHSSl6v6Hh97NrxzKrb2DmK6sQdbhe2Y-Vk4g.JPEG/SE-688c1384-8973-11f0-babb-4763b3066ae5.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNzkg/MDAxNzU2OTgyMTc3OTM5.3OdBgPA_C1GHYXoqjEcflnW4v5qHQOjGrcJdDZp3rVMg.pnIsskqJF8Mmx35wudQZzPT0xKIyZhggLMbz4hAsHpQg.JPEG/%ED%8C%90%ED%83%80%EC%A7%80%EC%9B%80.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjM2/MDAxNzU2OTgzNzk2MjM1.gUgNB3_dfecLhzQSdi8VHKFTDgpRF51dodWDKaG1G7Ig.a7CM2sH0Z0jough-G8YfsX5R4tylczM0genQlvmGlHIg.JPEG/SE-68897b73-8973-11f0-babb-f3d082b19acd.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMTAw/MDAxNzU0OTY3MDc1ODg5.gVsebNTRVhNVrQZbuBNd13KW-lnpIozipRrJm8ACgbgg.p3DGA8zdFtJfveApuKz-tkArw_Kt7SusHFgETt-aGIYg.JPEG/20250809_115913(1).jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDJfMjY2/MDAxNzU0MDYxOTUxNTUy.RFtCejO-UKq4Q9axqDsnQORKQmXzbhM8LNBNCVZjKfYg.mWO4aDdzwMVcaCT4nikhVwB1NCPdQBF0Z3VG651rnNwg.JPEG/IMG%EF%BC%BF3773.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMTAg/MDAxNzU0MjEwNzEyMzM5.tdq8pgQA3Fw6MSEqhSoaDRIgwLjJKGd1_D_D9r5jak4g._4-k32NkgA5NFyK8vfc2580QakeRX-y1kgn34v9Wlzog.JPEG/SE-5CA2D0EA-F6E4-4F92-AF42-4F67AD7E907A.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDJfMTM5/MDAxNzU0MDYxOTUxNDY2.pfLRPCJ3lEgoRs4eUyd2QA7H-NWnvwu7lVNr7w6i6m4g.ePNi7LxwpiT5hHm8yVLU2T6kSBwHnBhkx47UgoEcV30g.JPEG/IMG%EF%BC%BF3774.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfOTAg/MDAxNzU0MjA4NjQwOTgz.LH2jEhDWi-mYv2QNdqu-QmZ8iql085jHQ0h1Vo6DSvgg.i5i8HGG_r-1W31Hvyy_lU5SQOXL5p2tYogDoqtNcVeMg.JPEG/SE-100130F2-69B5-497F-B4F7-8E7132103C67.jpg?type=w386' }
      ]);
    }

    const existingImages_k1437199692 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1437199692'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1437199692[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce24303a62fa9fa58d405685ce47c1f629a6bfab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/af3243e00fad89bd7a3d13f26ad852a6eb5268a3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjcy/MDAxNzU2MTAwNzI2MDIz.q-i38RSephmupDj_1Fp0Vj1jKg46lU3J1k5IX8wUwSog.q_LMRu3yt_V2e3XKuy_8LAXgMJjQgzMMlGzzhYQCeuUg.JPEG/KakaoTalk_20250825_141825541_02.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfOTYg/MDAxNzU2MTAwNzI1OTEy.1y_zltE9XCyQoA2tWj1o8blOxn4KaEfZDNgI55PUzzEg.LyfRMxKTzzMbknewknndoBf4Kh__xmgEG1PRCGV9pvUg.JPEG/KakaoTalk_20250825_141825541_01.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfNCAg/MDAxNzU2MTAwNjczNzI4.YsIWJjYtv-cd2WkgaAwf-Zcnd-fm5kGJ-gI6gxskFKog.qOAOTy_2m4BP7sXefqKNoXn1xw0Qc9dkNzR38_HSUqUg.JPEG/KakaoTalk_20250825_141825541_20.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjUx/MDAxNzU2MTAwNzI1ODQ1.wPkmPFNkEu8cOHTXDX1cA5NuM5m1KQtE24ORz4i1YAEg.jhY61fMDjfqGh6yw1GhBYhE-hRIWLIQ_3ZBFQ7OeKZEg.JPEG/KakaoTalk_20250825_141825541_06.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjA3/MDAxNzU2MTAwNzI1NjEy.9GTozOTCK18XfFYUWPCF73C-QSmRzhrlQcyvD6yABcgg.4ByF_mU12zrT0ThyufL518hCjMa3ps2vu7lnFg938NYg.JPEG/KakaoTalk_20250825_141825541.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfMTA4/MDAxNzU1ODgxMzc3MTM5.kekj98vuuq43e9EzrdcSg701jhKetngs_ZIAC476hesg.OvEOwllObMkFuZhbt0dI7S-BrWf2J5pSiabBY_pZxZQg.JPEG/KakaoTalk_20250524_151152904_04.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfOTIg/MDAxNzU1ODgxMzc5Njcy.JflBundevFLGsG5LGsp6Y75yaUGbiFJlmSUB9p4VCq4g.5qUFeJUX5KpVtkRHie6WsGNDiJ_ft9zJlxyx_MNxrj4g.JPEG/KakaoTalk_20250524_151152904_05.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMjFfOTYg/MDAxNzQyNTU0MzM2MjU3.kbmlvi6xi-aVsGK9Xi-UnYo1BvgLw8VAfAPxqL46Hi4g.enCl0NIE1MT4OMTjOdKMQI9DVRmoNPASTkaREm1umLMg.JPEG/900%EF%BC%BF20250309%EF%BC%BF133638.jpg?type=w773' }
      ]);
    }

    const existingImages_k1348776376 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1348776376'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1348776376[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/501FB4B787E44D199E3E9A5431D17A98' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/c45ba7a3a60bd9cbf0c9e585ef23805569f63a9d' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/d52d53b46f2152fadfa19f9438bb85bfcb266b99' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/91f1e1f85f9e03b2e8dc834ca07cd0d19df868a5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/8c2913731137fcda8bb45e17a7ced9ba7952373f' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/c0571d01224b20c8743d098303f27c3b3d65db9b' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/71487845c6009e905e3dc6ca0a88ee1020b32ef4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CF6FD98C4B734AFBBD39FC555F11CB2D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D1291C6C356D4D308BB3B77A5F4FD37F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/24ADAC3168F7486BB37ABF2B4C6F8713' }
      ]);
    }

    const existingImages_k19622978 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19622978'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k19622978[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/931CAEF1A96D49E2ACF2EDCF41521F5D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4D75000B26B742358E470BA6160A9843' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3052B3009D9844D0ADD62B75408A0ABD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/58CBFA13EF254AED876D9050C6E147B1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E33743D5CBA8412EB2B9454BFF0760B6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7D3598B06A474EA6B586012858E6A270' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/69F5944BACD542BF90EFF0328486659E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E0FE3BCC082B4E1393BA9AB5E890B4BD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/23DEEEACE05A48F094E61B43F4A3F7AF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E34AE86DC43D4ED8906CE537CD7E9EFE' }
      ]);
    }

    const existingImages_k19232119 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19232119'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k19232119[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eea4cb2db0033f0dc26a1e48c8003b0d1a0d1067?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5524e20044fb0963e9f53d73679203151d65efd2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ba084da2e28f398dd91342bf68ac055c5febdb32?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a0fdb1b2657b771e00137af7aab353586947911d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a470d976a4750a3768fa49a0f731917f2dd91049?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a27919e1b4e8a80d3c8af1503f2f278e51e235e4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/759dcf06f76420f2d7f1dc0649d3094546d7488d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6188b2582d521831f3235c9481f6952e40409540?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/13d72965cc7c0aa8719aaec641ed31ecd1e1ac0b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/75c7c66374f3b3e335e14de6d379cc0c73c671e6?original' }
      ]);
    }

    const existingImages_k1191233712 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1191233712'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1191233712[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c1042ea0ca04829d5831df8ce8850d9dce8e8594?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/284eca99a1dfda6c0e85b6619f5d51f43d4bec2c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa6c9b2488f1d8dbc87d6476320f1f352c48e9e1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfNjcg/MDAxNzU1NzU0NTMxNjkx.qTngGIo9KqB5UTgMb0F8jB9Q0k4vqdOk-XYmfwq_H8Eg.3LykiTza-NBIyPOgR6bhatlz74KUMEngVfAldGhlABIg.JPEG/SE-4182c374-b667-40cf-8a3c-87afb64e5053.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfMTgg/MDAxNzU1NzU0NDgzNjg4.I5RQcRGw22lZ7HJSdOVmWQWDJXd4UTBGiqNEWdHW_Mgg.b24MLr3D1XpFYd2bJPbOIeKjon4YBFGII1DD4ZIqY_og.JPEG/SE-e8950352-96dd-4917-9e9b-c3a695bb9293.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjFfNzYg/MDAxNzU1NzU0NDc3Mjcw.hutIIkTQog8ZAd12V23h544OMS055KF1FJa7Me062j8g.pQ2W5kaIHle0-fr9lvdhedONWcYm9XI9Mx0Gnfd0bi8g.JPEG/SE-11c58f45-d685-40ff-93c7-485aae5ff92e.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/dcI2vf/btsORxHQ0HZ/V1J9GZ7e3UKobxkHkrUJuk/tfile.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/n0g2O/btsORWN6bHT/bGZIcqkKqud5E5vpOBBYf1/tfile.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMDlfMTQ3/MDAxNzQxNTI1NDU0NDk4.TQv7jUPmR1g7q-m4ilNXXbDkPCrjmXZJ1T_NBWT5pfcg.mfUFPxhxWff7ewgPZQwkVzyvNz89ib7eDuis3S4fkPQg.JPEG/DJI_20250216124611_0759_D.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTAzMDlfMTAw/MDAxNzQxNTI1NDU0MDM2.iMOYNNgFrLjGkkUhsqy-TUVelFyrZ-kH60c0bUbKXTIg.cE98UYzYXiyl55qmGvpA-MilIWpN4-7ibr20Ea0OHo0g.JPEG/DJI_20250216124507_0749_D.jpg?type=w966' }
      ]);
    }

    const existingImages_k994977541 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k994977541'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k994977541[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A58A22BB7E354794AA04BFB970E4BFC9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1ec783552beb0929243f667d548e2ccd3834a1e0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e310a0f2b4acc14f98f77f06cab67fe400fe5fce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/659dc5cf213735c783381577887edc626de33e36?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMTkw/MDAxNzUzMTcyODU5MTI4.Md49RNVwf47UtZ0JnWULruaZXNIZ6M1I0CPeDIM2zD0g.lmo1tP9WeI_l4_0ZCsKu55bPz8yTbLj5MvmT0tim4PMg.PNG/Photo_2.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMjMz/MDAxNzUzMTcyODczNzUy.JRboNSXe7-oUWjEu-qJ2OiyLZYfMn38SOlZMYixDOoIg.ktidaMZ_7I7IVMz2LYczK6P01WzfoOK_58k5toXnK0Qg.PNG/Photo_3.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMTI2/MDAxNzUzMTcyODg4MzY1.oEVmYtGLFl5NA-PdJDn8Z-bxl0MaO7TNmM7kdYNB4hwg.pIfLBx-G6wkbqBXIBVd14BbruIF6TKCLZbcHUq_umekg.PNG/Photo_4.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjFfMTM1/MDAxNzUwNTA1MDcyMjA3.DGhfAjkpmLPuskE7Bpw-qUjp2dcaJrXJjEj7kc8iA5wg.VFypcJgvwh9C-TtBuwK6gxpl9rAwf3M2bzj1OqP2u98g.JPEG/IMG%EF%BC%BF5234.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjFfNDIg/MDAxNzUwNTA1MDcyMjA0.f7lsx9Yk_yXd1sbWNI5b4DIwDXEd3nUweRt81Vz6Bd8g.HG9vfZ59nif2p-FV3HVAxjFzdxAe5zfopzKHvEoKXE8g.JPEG/IMG%EF%BC%BF5219.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjFfMzQg/MDAxNzUwNTA1MDcxOTg3.Dl5oRThKak5CuOA-l4mlk5Im5VBYen4ea7odIXnpFcIg.ALi1OUpNyQFixnqP9XqJpGhP7p7Kv86dJFc1RKjc45Ag.JPEG/IMG%EF%BC%BF5217.jpg?type=w773' }
      ]);
    }

    const existingImages_k934335737 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k934335737'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k934335737[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/99d445b6bbf1ef2d2f772654e99b989ff777debe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ceeae4c374ddf82cc24c62816e7f0b39b6689c9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/80818401cf13b3c82df2caaca5f633f1650b43cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/463c39ffc9d68991db0c424b66c3b6bd10f6e25a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/487e446dad512c87058cb7c47385a6ae0a6c2ceb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/96d821d7a151a65db6e1a6eb124a9e37af869ac5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b80d228bfc02d6a34f50f0dc4f847a6e4afc14a6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/84587cd3db1920550608bce944c00690b2cd77dd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ae0997f1c98b97adb93e7acf44a7d85140e66b9b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjgy/MDAxNzU3MjI5OTE5ODEx.f1AJf-lEeYxAtxurRbDyqu8KHS8cLp-ylT92cS9wyA4g.pJoZ5qhbQChLpMHdq7npEL10SvAvP_uexObMdiQu-bog.JPEG/900%EF%BC%BF20250825%EF%BC%BF113606.jpg?type=w773' }
      ]);
    }

    const existingImages_k26969937 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26969937'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26969937[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/009F6843573446729C0CAB006BADC0C0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/179017FF25FB49AB967538F788D889C6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7843941ADFB547C28A47E30A6E5C8279' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/888551CD228A4B29B2478903659DA4E3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/858FE89203244224BC1A7AC3B71A44C7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/195F9E71A6194C42820788D78A02FA0B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B4DA18D6F6CA436BA7FE68575CA39706' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/4BA21290DEC84DB5A9D4DCB8E320B4F6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/CDB85D51642E4A86BB82DCDD730F975E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/83880D0FB10245F3921453CA5BD53A0D' }
      ]);
    }

    const existingImages_k108763820 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k108763820'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k108763820[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2DFF666EF6A54443857C98E149142889' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/369B6A79E3194EEB85C3B42A302482A1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/73D324E2BF104D78A9C6684D37B6FD56' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BDAE1ADE7C1B4035BCFB7EF3FBA1EA2E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3E71C713FD2B492FAB7F73B402839C96' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTNfMTk3/MDAxNzUyMzg2MzgzNzQ0.mZBqofAX1pKYEHTMZeCDoRv3QBZ-yqZNJ5RIVy28Ms4g.xDYeBgI5pEQP9uP9JnrI-x1BQBsZJIrpzMwICMtTIVwg.JPEG/IMG%EF%BC%BF5713.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTNfODkg/MDAxNzUyMzg2MzgzMjM3.BRnfLQKJk3Ty5wkt7D9fjFStVy4oJ8jsYn0H3zlyOyEg.ryvvM4uRwYokz1xBTC31QPenIIoFwnXzJiiZTrHxFCsg.JPEG/IMG%EF%BC%BF5704.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTNfMTkw/MDAxNzUyMzg2Nzc3NjA2._nc0sE9EUaS1JV4r7bRP-TPU1pRgy2Hs2hZ1zb7GP3Eg.JYLBvJCJnnKtK83LhKVoKLPsa1DaKkRE0aLMOZo0Pcsg.JPEG/IMG%EF%BC%BF5733.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTNfMjE2/MDAxNzUyMzg2MzgzMTY3.PZbY4GEt7EislhhUTBMnPRdppzDG0hw7T3HSv-gI70wg._87iZ9mDEIg5OBbd5SX-tDjlIrElI6-5Svxivq6EbNYg.JPEG/IMG%EF%BC%BF5701.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTNfNDQg/MDAxNzUyMzg2Mzg0MzM2.2LmW1B0Ip8Yua05qWb3pzrFSfizof0KuoYZ2tQm-wW0g.QHuUfLosL1l2WaqWwNqqxGxMoQUp8zBnVGVrGAse2BAg.JPEG/IMG%EF%BC%BF5703.JPG?type=w466' }
      ]);
    }

    const existingImages_k12555727 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12555727'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12555727[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc95d07fd54aff07d8a7cdee2c8dbf8380a04146?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0fd963c56a4d07658dc998cc4ee68bbfef0330fb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4190068d7533c6f38d19015519dd67ae677e349d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2ca0654822240d7bab1d199d13f1853a808fab81?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2759668853bb11e818616baa3120a4f7004aea24?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/342c4ebd601f1343fbe4685f1d2922ae789223b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e171eef2d53357f57ecd8c79d993436603cab333?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a9f911d7583724f824f22dd39ca6923bde0df759?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6b6c10abec23ca12c9e00bc623b00a1890cc23ad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/36253cb330d8ec4adc688deb640a0f05ccaaa0f6?original' }
      ]);
    }

    const existingImages_k24580752 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24580752'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k24580752[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/148cfcb3a78e82c526c5f143b01633f337a3b3ab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1841da796cfea618fd24b46334d2f3c7a80e4b7f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a1e5d70fcbbdc4e9936135c6ed73754ae1871894?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/938bb4336ab9f71e86789a240bdf5457828c65a4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6b69baed69e4cb41fe347d2152a85c91614a2773?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/af7a79588b4454e64ec62d57ea1635ea6f911711?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b144ab9da2f45b3870b9f8d5199cd49a692f15a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d8c387a9c7f7c26f4bbeca3d2a887804e5988ef?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/043d5dd186d96d0ceceb1292dbcc01817e6794bb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/317963e57e408d9dd0b59601d2b49a6b9b5d76a4?original' }
      ]);
    }

    const existingImages_k492426337 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k492426337'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k492426337[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ebe0338c62549c0f6e0d4ac1e95562dcb4badec6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0508964ea54a252c5b7e569dcd687508936f0b7d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c09fd0d70c6923820c507b495e01195417526f60?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8cc67328c86d5614e44e08e0ed570153da7a9b74?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/852aed1fc83c9eb592dd3246ba8506a8f4e51b98?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/81f91a9e2068880ebd4b8588bb419483b4f7ea1e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/31fe9dd9b29c4b3f018769d52a1e53c37f1d3927?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2a2dee70e0a352009309ceacf21ed4c694f2db46?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTUx/MDAxNzU2ODg4OTc5NTM0.XcHRxB7cdLXlj6GSos-LOilidQm-F7-ERro8oG3-gPkg.nQ-5706ZSWhOS7LUgVoDvPNgTZSB5fxht0WIav-B1Esg.JPEG/IMG%EF%BC%BF1306.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMzUg/MDAxNzU2ODg4OTc4NDQ5.OG_ZsHvsWcwSe8qeCNhYqLvzY0x5wXJ-1HYUuB5U4g8g.WSLYbTzWJpcHHWtPtjapUDL5HMKDLRbM0rVkB-WnDyAg.JPEG/IMG%EF%BC%BF1345.JPG?type=w966' }
      ]);
    }

    const existingImages_k14564932 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14564932'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k14564932[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7b9ccdf324632e4b06612ac9d2eb968ea302c912?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/22fc39f320f57e5d3580103828adf58c75c4fa71?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/10ad947cf3f249962320cc9e43a173d682af46e2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTAz/MDAxNzU2OTM4NDIwNzA2.l4b_Gvwl9IYiVLlmnC4s9NLXlQvfP-F4nusU7dDgJWMg.2BXZNZTdHX2rzPxyAkzOcpo6kds_VHPJtXId3SFXkAIg.JPEG/IMG%EF%BC%BF6921.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTQz/MDAxNzU3MjEzMDEwODMw.AeEc2VF6RhswN64ZnCeUtNwF26Ih9pgQVjOU76nRuWcg.rxhatYOUw7ahoOr4JcsBD98CvVUFi7vhEYeC0oHJWEQg.JPEG/SE-4505A5C0-80ED-427D-A6AA-96A53A1EC66E.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNzQg/MDAxNzU2OTM4NDIzMTM5.hyoLSDL85H-49OUEGpm5VGoxRu7GF5tVw40e7VPnQl0g.hp_kZKLKKvtv8u0fhe6l-cCIYitS83pD0itAoDpbcP8g.JPEG/IMG%EF%BC%BF6952.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjU0/MDAxNzU2OTM4NDIyODA1.eBU_237U_fpwIQUBQceYK6Ng4Ydanm7MlpoXN23j_yIg.vq-YkkBbkGqhjdjl2DwaAlQhSWgcYxdbtz1nqNniQ0Eg.JPEG/IMG%EF%BC%BF6948.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNzIg/MDAxNzU2OTM4NDIyMzM5.Wgc39CUa7iw14rlrky3e-Ud5rjnhTI5hVs2uCbSA8FUg.edKq5wtXOJneVDjJD_t6JADmldjYmIXFhRUq8-_su0Ag.JPEG/IMG%EF%BC%BF6944.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfODIg/MDAxNzU2OTM4NDIzMDQ5.ZkVFMTJ9jJM2QhpDUsh1XoCIGB6j1wY1495z1GqbTbMg.sPlFaKQ_kGIkmFJQHRuqn9VVMTDsAjkN-MEVwI4mq1wg.JPEG/IMG%EF%BC%BF6953.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjgy/MDAxNzU2OTM4NDIyMzQx.yzs2lgIFyxWQkqcUjPIxQ9cqG86UIvMJ6Wyt4Ps7Oi4g.GviVIz-gTAPwq3tToK1HUmiWtil2jgAIVE6lM7DcBX4g.JPEG/IMG%EF%BC%BF6945.jpg?type=w773' }
      ]);
    }

    const existingImages_k15239464 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15239464'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15239464[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/54571CEC6AB54655A46D4D385FD3DDCF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/274D58D1FD1745728AAFD594DAD25E89' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/ACD0B878CB8C4304B8E3D0B7C756E932' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3312E3B7D3024FE6BFC8ACE6AD8D1A84' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/95E0EF1727CC424C9EA685A832F3E2AB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4554DC3521AF44D89EE0F0BF3372ED20' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D2CE2E67D1E34DBDA032E03DF81CCAA3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/52C3873AB60145829C182B2AB622FF83' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C69D9F1648CD4DA290F88881D8A2E979' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/452CB3810EFE4F14B5594AA4388C8541' }
      ]);
    }

    const existingImages_k19972104 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19972104'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k19972104[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4956d4cdbd85d6741db923f2a133a644a8036b66?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2aef0a1544ede679d6122e855d6373551be283d9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2fc1e50aaf08b3272d51d33b1bafe1e20eadb10c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/872a75122bc9334794a2f64ed470ca02118684bd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d9219298aea7e9a91c3921db9c11c91fb71b2bd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqnXq4zELc_jf9CYswX6ChRMjlbVkLjG0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTU0/MDAxNzU2ODA2NzY3MTA5.WneMULRbg2aOcpYtQwodzZXlxiEYtq8QkR0Tahrs2dEg.5kJXa1dazvwHvGDm4jYZTF09j2rYF--TD2eVkp4S7U8g.JPEG/900%EF%BC%BF20250902%EF%BC%BF174827.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTMw/MDAxNzU2ODA2NzYxOTM5.uCb7ei1YH2MVKFgTkVxPktDotNbNRZfu6t7OWEBqkPgg.pJu8Jb8_F1JGLUyyHD0lTH0MHb1Ky5hbGp9XG5tKRtog.JPEG/900%EF%BC%BF20250902%EF%BC%BF174752.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfOTUg/MDAxNzU2ODA2NzY0MDY5.6wKIbE3QYxvLSk2H_fTL7iE6qLd0fgTe4FT29nT337Ig.UkEpmVn_hVa19UZQAN9B1z87hLP1_uQR1-pGSJ2hjdcg.JPEG/900%EF%BC%BF20250902%EF%BC%BF174803.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjc4/MDAxNzU2ODA2NzYzOTMz.RAlqH1ke0GimNoezNBaf8lcgWEBVfrbGd41SiO7FV4sg.xwECLEppySjsSVVzxRrgB4bVLeaFh_dUcs1qLqzTHn0g.JPEG/900%EF%BC%BF20250902%EF%BC%BF174815.jpg?type=w386' }
      ]);
    }

    const existingImages_k14100981 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14100981'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k14100981[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/137fe0cf73c34aa26fa53a4fd5d48dbfdf2b234d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ebeaf4c5b339b8d9e07bc26a7b2dafc322d2e58?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fbad79e761277272974a68bc9926b0bb4a669c31?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ecc1ecb29cf61aafe708864a147c4b204224d07e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfsqQZJlk_SYOO5iTrYk0eeQVJSADej1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfMjA3/MDAxNzQ5MDQwOTIxMTMw.lm61syMCZJ931iwV2LD8qC1b8-Wqj8oyrEi7-6OAv5gg.DVOKVMX6lWHMaVVSazMf5UHwjRqB5OP4DgyIko039RAg.JPEG/20250503_143948.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDFfMTky/MDAxNzQ4NzgzMTAwOTY0.Ok6it-kvh5V77otuMPfFck_MyTapcwKTGgSkojeUT3Qg.bPo6h2Vinx1zFYptWvcyfEs4FbPOIYcZDUeU3W51kNUg.JPEG/SE-850094a2-1d4b-4ca6-a8d1-6d817db1692b.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDFfMTgz/MDAxNzQ4NzgzMDk4NjAy.g4EkOqFsbZGo-YJre4x5C50I4Joya_Cj5BW6z65_BL0g.YVvs_O1zueHUoQ7C5vhzJrBFzFEwEtkSCA2E8lbwogUg.JPEG/SE-c5dbd42c-acba-4660-8751-258d8597cc38.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDFfMjQy/MDAxNzQ4NzgzMDk1NjA2.GPbtTdKG8Zsp0RHIh9FgfFiXaXgOmX3fgDxKVt3X8IYg.XJAO9fLVqhEMB-yV2oYyQRD0-GPX9eBKvpO_2QqYX4og.JPEG/SE-c590b833-f64c-4831-b559-f9325faeb614.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MzFfMTc0/MDAxNzQ4Njg5NTczMTI4.XyxVxtR6N9JWs-rGoNnL3oAvZaeyYQKHDgSHfck-vMog.ma9o59Jgz7_KAiOOYGcXYlmvkZSbtMc-8HSPXFWt9KIg.JPEG/20250531%EF%BC%BF181819.jpg?type=w773' }
      ]);
    }

    const existingImages_k1443953518 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1443953518'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1443953518[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/64924cd62fbd6eb2edea4e1d8c8157ef72922bb3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8880fa0b84a75e06f5723308d30716774f654ad1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1923c69b0c3a840e808035075c920ef834775ab7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7b456ec5983f79ccbe78c59e15f351668becdc58?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c2be3469153cb85c0166ad53194d71ee097a4ad8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjFfMjM2/MDAxNzUwNDkxMjQyNjAx.m6cKz56i7EXdN2aESGY-9x_LioY7_jQZ6iS7n-b9mKIg.fzKkMpAysVn-2uwkDbhQnn9BWPmdBcJvjyf1-hIqtHkg.PNG/image.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjdfMiAg/MDAxNzUxMDA2NDE1MTE1.uRnsuq4X72Ie1KbR5nroZcdXlabilwLroDytxOhPyI0g.1g5x-qAea1Xlm4Iek04SeRuQehhFm6vBmJtwlhQfKB4g.JPEG/IMG%EF%BC%BF0735.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjdfMjA1/MDAxNzUxMDA0OTQzNjM3.diHUI7RofarjmjwfsD9ODtMpu3VquwUskzld9-8fD7Ag.JrWG1NJ9tF9uE03GQcaCstX1DcxQ5BXwS99_D_5NUGgg.JPEG/IMG%EF%BC%BF0724.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjdfMzAg/MDAxNzUxMDA1MDU3NTQy.YkY_DDbGFXza2XQgzni1S1jH32f6xNUIj-4XlC4EAkwg.CJn1s_qxxPoX3_CAgVxp6vssYEEakJwgAX41RSOgAG0g.JPEG/IMG%EF%BC%BF0788.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjdfMjQz/MDAxNzUxMDA2NDg1NTYy.ku3tW7xPCzF9e2vaeIcRFYLbod0hlYDS2bKFch5Z60Ig.iYuCc70cfyP6dZpXcj4ALj_FzgRUB0Z3RI-3eH2vMx4g.JPEG/IMG%EF%BC%BF0733.jpg?type=w773' }
      ]);
    }

    const existingImages_k87364008 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k87364008'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k87364008[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMTMy/MDAxNzU3MzI0MjkzODgw.e_c6cBRiCKXP8o-X-iQQk2x-Q0RQbfHb75Iq5oNHhBQg.7FYLbohmNAGMlc7ZnhGLJ1D7BLrwrowO3O9oT028Qhsg.JPEG/IMG%EF%BC%BF1571.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMTIw/MDAxNzU3MzAxMzIwNDIz.LfLAvWdLLGGsBfYZ-apBpzu53vGekHOTSW-YXW9R-Ucg._hZd3RfLrxZI7jaHDKWJTJc3brUAC0s6wAf9WZAOyIkg.JPEG/IMG%EF%BC%BF1196.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMzMg/MDAxNzU3MzAxMzIxNDU0.Ls9m6IEjg-yriXTOq3brMONaGWjYgoIfKaA6Fevidv4g.sIIHGOHUvURzXZx1FH6o24M3s4tG0p32J9Qz3BRn-Mkg.JPEG/IMG%EF%BC%BF1189.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMTgx/MDAxNzU3MzAxMzIwMjQ2.3S1N2k9cBKTmgZEMgIOsDMWVUtMz9QLsohEXAeZ8w2sg.lF9XS7yEBnxKnL5fg9SHqHga0hvtbZV6mFxFpR_S3yIg.JPEG/IMG%EF%BC%BF1191.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMTY3/MDAxNzU3MzAxMzIwMjAx.mkHO5uVXYGPimXM1PIQ6bHK3JZU5Pe-AnTOyc-cihjkg.U_btFUVeYpenZJpw5qtQO-7DeQrcrcieGF6a9mrcAFUg.JPEG/IMG%EF%BC%BF1200.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMTA2/MDAxNzU0ODI1OTI1MTA5.NH2k0zD7AY6-G-zWKLj9hEZegicCeZ74H9cDiYTIdEIg.SJ386KMo8i8miS4d0YJbwjcrtE-JSge13CPscBhS7Nog.JPEG/output%EF%BC%BF2314305996.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMTYx/MDAxNzU0ODI1ODcyNzE4.V63l3royKBq9jA0PNLnUzNowcOQ3plpQs-bTL1aBEYUg.7xsVLsF8Sg8BmccgZPTMVCSkJrNrlbSEjdZhg9iFz6Eg.JPEG/IMG%EF%BC%BF0527.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMTMg/MDAxNzU0ODI1OTM0MDM0.sfRTqGQhbEBkJJG1k6uMRHSSLGQXI5PKF-jsZGjRZlwg.3wpaH6V9mJhCnns1CtafgdUfir7puaLFNESaHddliBQg.JPEG/IMG%EF%BC%BF0528.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfNDEg/MDAxNzU2NDY2NzU3MTM5.ranYu2SCjGuXnjyRMa1aFEECwl_eS7Mwd1mVy9MuzZUg.4EfrTmH2qpXL6XBYtJrHxeaGwD_B8l80FCobrJEnX3Yg.JPEG/900%EF%BC%BF20250822%EF%BC%BF185651.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTc5/MDAxNzU2NDY2NzU2ODk5.EKE8k0WT0OtJzUWVwr0DK6qyBZp5Xw6e72Ujz3kdeHkg.PcLYhFnfcXmkYzyuLXptfn4B6N7CBUDZ2cOnqjoJMUEg.JPEG/900%EF%BC%BF20250822%EF%BC%BF190912.jpg?type=w773' }
      ]);
    }

    const existingImages_k1680791764 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1680791764'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1680791764[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bea143ff1d8fda4200389b2504c258d124f092bc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d35da091f72f33494c5156c71b1eccddb0f262b2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1fbd3e0554d24ce9b274c9852c785c12af0b5bea?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6968e725c19062ef7bc63a344d6b40d9e4e9bcdf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMjQx/MDAxNzU0MjkxMTM0MTMy.jSlDVqZMEoxfUDzA7aUBh9A4AF9Ug5FTLUmXVH6c1Oog.puONEYZvFA1S5GUpnjwLFO0ZX6SN3BWn31psSqFju4Eg.PNG/%EC%B0%BD%EC%84%9D%EB%8B%AD%EC%95%8C%ED%83%95_01.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMTA4/MDAxNzU0MjkxMTMzMTUx.C9V1JNUMamyYYlqLYUuvHo39r_fh1Oi1CPSvbAifs4og.HFvHRWf3ONZ3K1AZEb9ILZHJalNu_2tTBrx7DfXOGkkg.PNG/%EC%B0%BD%EC%84%9D%EB%8B%AD%EC%95%8C%ED%83%95_02.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMjA2/MDAxNzU1MjIwOTAxMzMy.HlgXRjxBeC8XiEJzXv6Hs08hHHpBkpH04ETB7Dhrm_8g.hMXWQoBVi6h0ZmFtegLJzFz50dxHXEyBUHUbCsdMVtEg.JPEG/IMG%EF%BC%BF4650.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMjcy/MDAxNzU1MjIwMDE4NDE1.wezGbOId_DVK042kQKMkh_fbkgNlt7rTZDJDiFKFu5cg.uHkMJTJcRrZDwpXrKKcHUHFwpYpnVMt4y9qEoiuLWS8g.JPEG/IMG%EF%BC%BF4634.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTlfOTMg/MDAxNzUyODkwMjczNTU0.xik9_nwqZIRwNTU70GW1oWTVbNCj4fPMVcmBV7GlsH0g.zdLowRKqZv05DXoT9tSD10VUJeiqyzhVTkRLQ0DsFRIg.JPEG/output%EF%BC%BF463691979.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTlfMjQg/MDAxNzUyODkwMjczMzkz.mLZzlGnrePnOJ61kfnVCOb1io9i9Pz68YmiFjyv61hQg.gneeZvoFK1PBN7AuiGxGvGaIS0k_wcUBkVGBVLmDCs0g.JPEG/IMG%EF%BC%BF8497.jpg?type=w580' }
      ]);
    }

    const existingImages_k27328777 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27328777'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27328777[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/83E6F5BB364048C4BE54FBDDFE25516F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5F1D155BA2BE4DAABB147D0A39144F89' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3d32f931b9b534f93cbeba6629a97ae6039a96b8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2c272150d05eecdbf616ae186930d187af56b580?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5d454123ad723e1ab5d20f6b81dce67d46218677?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f09c2a1e17b92811da3c17bb3797d5cd82fa31c4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/40f428c35d4f3666cfcae21df747409d32f7855f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/56e8b02569b4add693635fa20c5f1b6d37d9aaa8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca7d97e77e9312b152331b42e57c170c2ab279f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29c1e4698fa34f3749c24abfd61100432139c055?original' }
      ]);
    }

    const existingImages_k9390224 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9390224'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9390224[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7f936256b8cafaf78e2f02d3f3e4a71fb241ea37?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDdfMTA4/MDAxNzUxODY0NzQ5ODQ1.40MVL0-wH6C4_7F2VHeCMBw8g4-M98KyNsviQIsM5jEg.m5iPERtS7XTA02HGs4yWm_PwZKXNYdHvzUMqFfGSWXwg.JPEG/900%EF%BC%BF20250621%EF%BC%BF174443.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDdfMTgg/MDAxNzUxODY0NzUxMTUy.ZbYjqh7VtIykaxkbYd2wYoWnGx_2ArUr7KQnG86UpmUg.zbS6af9Ec0-OhjnIsbfeue493ayDT2BJLg-ymB3je90g.JPEG/900%EF%BC%BF20250621%EF%BC%BF172150.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDdfMzMg/MDAxNzUxODY0NzQzOTU1.CvUpjg3gx8cbpVHayjr5vCjGO0-u93zzXsqUa864YWAg.X-Ppsauemin2sV1DIfQ2-1zfEzK1r_V_yQ3tfhvwjqsg.JPEG/900%EF%BC%BF20250621%EF%BC%BF172155.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDdfNzYg/MDAxNzUxODY0NzQ1NjEw.fbUKK4JrjFty0PUd8oJ5EP_Djpn2yBc118DRnYJeYU4g.yL7SW19u2ikPzMec2LscQ6z9zShPkxrOFBCeYGIE7_Mg.JPEG/900%EF%BC%BF20250621%EF%BC%BF172216.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDdfMTU1/MDAxNzUxODY0NzQwNDI5.NWeOTpr98-yw0rv3tn17x32mgIzPi9G8ilfgDgWrSosg.uv4zQrIfHcDotR578NN2qWF-UtqlqMzcamolGPEtiUYg.JPEG/900%EF%BC%BF20250621%EF%BC%BF181111.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDlfMTk2/MDAxNzUyMDUwNzg3MDkw.pmFea5eiplQBJbGBAcymnTXjHFdFWWvLb_gZj7MpCs4g.Uk--lIukh63EADkPFupXx48zzMH0oI2tWEuHWlT4niAg.JPEG/SE-055ac161-5af0-11f0-803c-a5a17da9076e.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDlfNjUg/MDAxNzMzNzIyNzMzMzc2.IonLhDZZzsQRKUuyHHtQscHp2YpewM-q0nZI4FirV6cg.um-zhMB5YItg4gtJow8KPcTDuLWTXBpgGHIGJfG8AKkg.JPEG/KakaoTalk_20241209_141000071_04.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDlfMTQz/MDAxNzMzNzIyNDY4MTc3.YP1VFqFbLgzQ6EiQ1qZLVSVeett4_raOU2oonpiYlf8g.f58_Epl3eLZi0PoHLdfb_1XZZyvFU_8a3jJxwcohbMYg.JPEG/KakaoTalk_20241209_140802139_08.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMDlfMTE3/MDAxNzMzNzIyNTI1ODIz.vipj5wy6U4PGw-VhkpOVge5Fz0YUMtqjqEalF2efwOwg.0KCMqM9f5GHZHACdxn3JF3ux2eFBVep--uG2gbwMDGog.JPEG/KakaoTalk_20241209_141056142_03.jpg?type=w386' }
      ]);
    }

    const existingImages_k14095480 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14095480'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k14095480[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2540774155762B9D09' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FEE04E391D844CDDB395E604975AABB6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/227FF83F55762BA517' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/240DCB3F55762BA613' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2414693F55762BA410' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2437834155762B9C0D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2547454155762B9E06' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/262EE14155762BA011' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/273AB54155762B9F0C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2214D83F55762BA310' }
      ]);
    }

    const existingImages_k12660235 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12660235'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12660235[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/D1071279620D47048380979902765B10' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/3AB75EA5555C430798EF4D61D4551CE3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/83D67712021343658F3AB92CB75E8756' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f2e3a3e8b317f75bd935118004be9bb6728aa74?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7d8fa4f8fd6423fe301eb4ef59c6920dd08ba590?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/21b597c1e47a1c65e1203a51b5775e7db4232f52?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8a5d692e889d6f64967c60c1625cd4e7197428fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDFfMjEw/MDAxNzU0MDE0MTY0NDQ4.nOisbsMKn8ZjTlKEpO39Vd7zStsSE2OySoNXTW_pvNcg.b2LwnrJ2zYP4aeG_ux8Slehcw2kgly1yYeZROxO9xWcg.JPEG/KakaoTalk_20250728_135058235_21.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDFfNDQg/MDAxNzU0MDE0MTE5Mjkz.XhtlulWaNHPI__ZMm83wKIBGPM1K4b9rDU1dLOY1iHYg.s9lJxtMtjnFNCJ-looPaO1ulYHNy6FfV7wnDfZ_DJqsg.JPEG/KakaoTalk_20250728_135058235_23.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDFfMjkz/MDAxNzU0MDE0MTE5MTY0.fwZH2FDnXF2qfO4_9y91w3f4qJKaydyYp-Z5aXkJnsEg.ZrpGRqv6ZAZs_y2ueSL_3kOYpN6q7vco6SdFqrizYC4g.JPEG/KakaoTalk_20250728_135058235_22.jpg?type=w773' }
      ]);
    }

    const existingImages_k48353287 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k48353287'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k48353287[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ec2df80a1d000f56cdd684524aa7130b7b276a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/44655fbed49e2aa6ddd02ffcafa2213a8b4e69a0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8833c50763bf8f60032caf0bfeaae729ee238bda?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c8dc79a33cf0f4c9f17fd334ec8e7db314cf1c1a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/80e01d0cbfe3b212f01f9e562fb90707a5d2d079?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a73cda4e107e046bb1f0ad36f87576e00234e8d2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6b84437bbe28e6e5b44c0be48690908a2b25eb90?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/56481b1bcba4f7d88e4ea6f614281e7d658c29fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9d7cfa70b8575aad2a986882cb39f58f5789d1f6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8099cc850e3a6c384d46c44872869c00d3744a90?original' }
      ]);
    }

    const existingImages_k2056654598 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2056654598'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2056654598[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/98D3E184B48346D38E9CE31FA3C71470' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A0C7E1EC1E55488EA4A5DB354C8B7460' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F2C557E6BCAE4BAAA5AD56EE92F5E7D3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E23DC6EB5EB2420CB663749834A07656' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/04CA8B3FF950490AAD01620797CEC8D1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AD0264F103A4415C8B0CBE25391C3479' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FD709796567A4F419E13793B06A4A733' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A22C979F1194444E9D707D623B0BDEC4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0F9EC32D75B54A69BCD40D05C5F2AA15' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F855E1482F3E47CAB03C79AE2364E315' }
      ]);
    }

    const existingImages_k11892249 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11892249'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11892249[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A6FE80005AE84310AAC5648D6C915A22' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7F759D05DD3640058B20EB1047C4272D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9677AEDF82704997AD08F3A1BCD9C587' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8568256653CF46B9A82D4BBAF2550BF7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/2007E7454FB4BA210E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9F9DDD17A8C84C4298DD4C645C5D38ED' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/82627FF8EF8B46299E97B756834A4F2D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/16432218C421492C96F892E1EDFA6C56' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6062A6625E274683AB0F7D16573BD6F5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9F2C9C472D874C499B3A06ABE234C0C9' }
      ]);
    }

    const existingImages_k231017241 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k231017241'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k231017241[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/5ABC8581375343BA93B0AE06E005D290' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5D399979F12D44BF8BAF85963D65C1EB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3BCB8AEFF40440CE8ADA17CF9CDB3FB9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6AC2744A7C9E45A590A23F8F735F8898' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E39B547A804247BC910B37531B95DCAD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/15ADD9A7E83447879F1FA1D5ABC5F895' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6A09E255581C43ABA1DF37EEBDE08899' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C8CF0F234D3E4368B6A779B3FE80887F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/70C1164DC1B141C9BB1CB2F49304D544' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5EC99BB3FF624646AA8F6DD1CDD7712E' }
      ]);
    }

    const existingImages_k16148731 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16148731'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16148731[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/12B9EE17D44944BCB1F817D8CE603D1E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/519E5B2EBF81441995CAEE29F582D1E3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/C0F9DF678B484D8D90D657D9DC4D1221' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/F8132208AF94430180274FE85082D110' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B15BA8A59BB94D15A3C878BB70E802C0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9337D60AA05244FE80034629F1FE4EB2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/533F374CF54C4312B30B9BE00E456897' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/50D9020070D248CEA4D635A4B3B3BC4E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7D301760FECB4FB7A097D38580FBBF2C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/844FD832B80D4A9C9BA9966DD79B5DD4' }
      ]);
    }

    const existingImages_k9947449 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9947449'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9947449[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b1bf11fbbc5ba002e0c4c058ed644f12667c60b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMDFfMTkg/MDAxNzMwNDY3NDAzMjU0.oCct3O4Zp8nXR3S8oYSGbQqODuOQgNfr2X-FbsgwJp0g.xrBP9i0Kpzg-k0AMXjWNCGsGDLe2QmkZn_RoC1bQ7Qkg.JPEG/20241028%EF%BC%BF191614.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMDFfMjA0/MDAxNzMwNDY3NDAyMjI2.5QOfgvnk63Kc0zkG3k9-4V0e9k36iyb_2Z1NF4wwDSUg.-UWA5sphHvR6dGYuFmlGdmlbEu0uqBqAJavBEiCQQZUg.JPEG/20241028%EF%BC%BF191618.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMDFfODkg/MDAxNzMwNDY3NDA0MDUz.0A0_CiEU9GuEri1ilpHMyO2ckIQfOmW9jQ1dcTiRGaMg.gxwhyRUfWSxV2GSnWY4IdoDwEhxiib3-k1mNalf3wOIg.JPEG/20241028%EF%BC%BF191624.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMDFfNDEg/MDAxNzMwNDY3NDAxMzIx.PeaHPMB87rcaqmWpHnOVY_EU3oGyaYVvEQE7mr_JLmcg.KdVTy4tOfe36Dt8yV70jdwH9FUA88tL4pkFQpIi6uBgg.JPEG/20241028%EF%BC%BF191810.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMDFfMTIw/MDAxNzMwNDY3NDA1MTEx.4Q6W507ybNE_yfB3d1NK4x5evHeMRPhn_yX8S0stn4Eg.1LTuJAaiqsO4kbTB0NkDBy2XD5DbD5j722blWtNsAhkg.JPEG/20241028%EF%BC%BF191824.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMDFfMTU5/MDAxNzMwNDY3NDAyOTc2.yDt0TKwhu91qJcMUeadSNKxcNM3rFhHtIzplVmXnbUEg.8Xy9Gmz3vvxk6sgeDOKCLVgFa6nR52H4IUtwsWNQTckg.JPEG/20241028%EF%BC%BF191852.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMDFfODMg/MDAxNzMwNDY3NDAyMjI4.ZN0WB7chgrK_qO9rcwanFS_WAmWmBNeGwXF_BKcmR_8g.zhuCr38MLQT30jHYffO_BvFVDjid03lvf8otkUHLwJIg.JPEG/20241028%EF%BC%BF191905.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMDFfNDcg/MDAxNzMwNDY3NDA1MDQz.7DpYHE8sPcL1dkne55FzyCP8kr4N5za9hKRibAuMpE8g.sCYNJrp2omB8rpRTzklPBapC02J9JHx1Mh3aU5rVKgIg.JPEG/20241028%EF%BC%BF192258.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDExMDFfMTgg/MDAxNzMwNDY3NDA1MTI1.XXQzph7lJfVdUrpYIDPCGfZ9BT4qdb9OY10hx3Wx8R0g.Gom90vmtjRihqSTRqauYyIYID-LMe_KYqoMAIozAXpEg.JPEG/20241028%EF%BC%BF193715.jpg?type=w386' }
      ]);
    }

    const existingImages_k1550048150 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1550048150'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1550048150[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjM2/MDAxNzU2MTczNzEzMzg1.xpcApYpROND3HZ09mwGYxo0S7nZJpZCsrCohfiJXDacg.MfVUqAJhOPpLVxjRU231UZnYM2HfzhpFnwOYOdqIM_4g.JPEG/IMG%EF%BC%BF9660.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjEz/MDAxNzU2MTczNzA2NjYx.CNLNWp9yaSDFG62X3zWcg3Arf3jWVB6bsYRFsICwyz8g.IiTDBDqY3_ur6w-n4o_MRQuYMmELkiiUmjWci3Vedhwg.JPEG/IMG%EF%BC%BF9658.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTQw/MDAxNzU2MTczNzA0MjA5.GiSURy13UZR5pd-1Z2FOSm04znJgBt6TE9f4clU3r2sg.wje4o6xcajsZ6-NRN281A3vJanbk7sEZ5vHMr4oTnVAg.JPEG/IMG%EF%BC%BF9664.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTc1/MDAxNzU2MTczNzA2NTUx.qzze5dbjKjDDtRLzJEnoAHqe3YHpQ08K8HHxYE5Kpa4g._2emQt3tJfhB2kJxWpU5sAcJo2K7u0VKNbVqSfZkpIAg.JPEG/IMG%EF%BC%BF9655.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfNDIg/MDAxNzU2MTczNzA0NzUy._0-ykAjjzqvvUpGn2vQIqI4ky9UieQNpLLnalEc2tccg.-12mgAIaT9Ytrk1K7-q8FSBLyKX53flT47d70q2u4PUg.JPEG/IMG%EF%BC%BF9663.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfNCAg/MDAxNzU2MTczNzA2NTgw.tADfRMsK76aKgm0fgdS6s4qxddwRJa1k9ZjXJqRyPBsg.xKy8J_yDRFJsiD67UwAbog_dMKars6e_7f1_tL-EJLMg.JPEG/IMG%EF%BC%BF9656.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjUx/MDAxNzU2MTczNzA0Njk2.fSP4k4E-WGFqWGyWX4goTthMcoG_LMHr8af7nCshrTUg.Nr78WyNo8jyKHr09bMRKMWf9AD73uFKFyjTuLrVQNd4g.JPEG/IMG%EF%BC%BF9659.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTY5/MDAxNzU2MTczNzEzMzg1.6FtFisPkmnAatGkyK69pdOTfgWes46PyDtPym5JweG0g.WJdo7XRS5GhezsbPhtuFl-hPh6DKw3hOvm2Hd8FIHvog.JPEG/IMG%EF%BC%BF9661.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNDAg/MDAxNzU2OTkwOTMyMTgw.UKviveZB52-Zmc--XSZ1NoNcibMkkPpbnczAJCyBf60g.uaAnCx7VQAcye4zWmxhLFZi72R26W3pM_ACEU0zH05wg.JPEG/SE-cd0e114b-ae24-4132-87f3-c26cfb7da111.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfODQg/MDAxNzU2OTkxNTc4OTcz.85TDE5ykXO8oznaqXM8CSeB-Cq8Fc2xCDkmutTktZRQg.0VgLe3sZYojtdyhlO-w9XiYforGGWV_qlDMUtCkSsbEg.JPEG/20250820_125040.jpg?type=w966' }
      ]);
    }

    const existingImages_k8449310 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8449310'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8449310[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAyMDJfNDYg/MDAxNjc1MzQ1NDk5NjE2.ZUQbXrroxoeYrhqtPqaKhyWge_f5F32ON6a2KqzCAAYg.TPORqX2chk9z5HJYhJdidJw1b2lqme72xDEun1UcK3Yg.JPEG.china08/SE-edc86e7f-84eb-11ed-b994-6f7333f02f93.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDFfMjY4/MDAxNjkwODYzODA1NjAz.kb8t5YO33eZC_CQRfgeaWBkpbTjypdTlrYNm1GeU6I4g.OIMUzuyT5etEZrQbnEEK0INCIj_ErWwHC-1CriQYOOsg.JPEG.2eeminiya/IMG_3152.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDFfMTI1/MDAxNjkwODYzODA3MTY5.oih08tq_fsH-59DRFg5ubKwZ6ecDUx72-i-CFQ68s5cg.N1nj52rCiTD7MfrzjzoukSzKmWhqgbj6tTiUWNpsPpUg.JPEG.2eeminiya/IMG_3153.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjExMDJfMjQ2/MDAxNjY3MzYwNjk3NTk2.QKwKhpqxAnbqCvy4d30SmxtW4Ml87xmYhHy6DC3XOYog.RNuT1UX8rjjPuIJbdssNWMOQadlb3NtILrkEiAvCfkIg.JPEG.emymlove/20221031%EF%BC%BF112726.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAyMDJfOTUg/MDAxNjc1MzQ1NDc1OTAw.5I8aP99ARXzeP8SW70TdEKceGRW_oettyakhaemvbWkg.Bkfux9pgW1iSAt1S48v2HtcL35loyyi1Cti3jNdazmYg.JPEG.china08/SE-eda64071-84eb-11ed-b994-27175f700dff.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAyMDRfNTEg/MDAxNjc1NTE1NDY5MTc4.X7uUm6xwY92GBy7PitR9kEc9EyA6u2unp2bXxmoyMLgg.Wd0j-qk0yVn_UOHic8j98gye4lqf7jOe27H21MLMinwg.PNG.china08/SE-fb2c744d-0f11-4f5b-8c0c-5eb24eb3415e.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAyMDJfMjk3/MDAxNjc1MzQ1NTAzNzgy.QoMPB5ZYdXpBpu-F_Wr25yH6-Inv_JzP-XnKEwIQhqUg.lBhyS8K_gOopeKOmx2mP3z29qLVst9wAVbSQGCtGHawg.PNG.china08/SE-edc8bca3-84eb-11ed-b994-5d3d1b9daab4.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAyMDJfMTEz/MDAxNjc1MzQ0NDMxODY0.C1Z8G_7NJk9OKxWKdGFbF7pF19QXHrFYe_oOyqVlHWsg.iPgQDXm00xT5brDIEJVW1nfBC9IOxurr2i4_XZFVqG8g.JPEG.china08/SE-eda61957-84eb-11ed-b994-b304ee07da85.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAyMDJfMTE5/MDAxNjc1MzQ0NDQxMjY5.LU0NKhoy5ZhrCRLbrJC96MVIfzZitjm-Cyv-0kfyb1Ug.xphfQe-hmvVjoRCgimEQGeE-bVRDh6214-Brrn909Wgg.PNG.china08/SE-eda6406d-84eb-11ed-b994-3d26a96c8144.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzAyMDJfMTg0/MDAxNjc1MzQ1NTAxODMz.p9DmxfrpUqzvKU58KpSlBjVRobXHilbXqVA9yeh9pikg.XPnswRfNJoejwDHum_1hvyjLYvi7z70ZUsdk75geoCYg.PNG.china08/SE-edc89590-84eb-11ed-b994-df128104ec52.png?type=w966' }
      ]);
    }

    const existingImages_k11892184 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11892184'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11892184[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9742db3cd1fedd64c83fd92ce8fc6fecdeb4d8b8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/62256062c72ccbafc24edd20255958baea7a61a4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/18c51f4f1241e67ef1917eb36f7f73b5fd41b975?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3def0a95edefabc59b024ffe4cc6cd3ec773b9d4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMTIz/MDAxNzU0OTEyMzQ2MzA4._tefyImQTQXhOchrjLzOzCeJnfJFUk3wSCJd8I6_AX0g.bY9R2qo_sqIc8f2R_blt4A0ZC1B6-afxN5qHjrm_CcMg.JPEG/IMG%EF%BC%BF7128.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjUw/MDAxNzU0OTEyMzQ1MDY4.rmnPA7KQnsV4p1Ly4cHY1Yb4DE0O61sYsaneeQB_mCgg.lSAGhuagV6IiWmnYZLGKUw3_d2N5bd5v3aKqkz0CvT8g.JPEG/IMG%EF%BC%BF7120.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMTU1/MDAxNzU0OTEyMzQ2Mjk2.GuIfswaiMW8yeAcr24CvwsNvqprNkcRKAj0RvkUE0Csg.36lVPz3yVSebEusRX5trjGhov_R0lobEMlCP_lFxK3sg.JPEG/IMG%EF%BC%BF7129.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfNDAg/MDAxNzU1MDYyMDIwMjEx.nZuNhPdvMbAtTXxSFa0hPOZhfmOHRBuLqoDPEkrY46kg.Qf5RzTpmMi_3tHd9ZPXzM8znGm8B2adwOHlqYeMimsIg.JPEG/SE-64995438-7503-47BF-947F-BA3CF7367EE5.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMTU3/MDAxNzU0OTEyMzQ0OTIz.w0zakWQJOdYttSRlUuHgqEkDoCu_QUkkIyDDXodvhXIg.z7J2tbIeeQ4tgEenC4OQNRpiqE3f0s9dSd351VEn0PQg.JPEG/IMG%EF%BC%BF7114.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjk1/MDAxNzU0OTEyMzQ1MjEx.8E2iHzwsvvMpe9FRrrZImRE-ABkVyxuh6UVZUr-4JtQg.hjcwRPo_PavabFTzxIAsQhZrinFRtuNKPkeUZQokQqAg.JPEG/IMG%EF%BC%BF7115.jpg?type=w966' }
      ]);
    }

    const existingImages_k13642764 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13642764'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13642764[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/51252a5b50a121f1f563ec7ddbac6ab50b666a88?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDZfMTA5/MDAxNzQ2NDY2MDM0MjUy.tmmNLbSX43fRMHsFX1FcPX4tsvIgXOCw7DBCjxlcitsg.ISAtK8VOXHTKEk-f0ms0ugCI6r0AfRuheV8BLVzv_Zwg.JPEG/IMG_3734.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDZfMTMw/MDAxNzQ2NDY2MDM4Njgz.MyBvT3iK3zSy-vwBNIb9PRQGK0YgjmleAPQTDlO_vJog.27UIeygFgwohfTuAZbQ0wvDye9JdJF1GResptnMRJLcg.JPEG/IMG_3737.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDZfMjE4/MDAxNzQ2NDY2MDMzNjM4.84T7Xftvb7R4d21websOF1Tc3n5AEeJB5aeOf6DJtKUg.6-GtUmUelcmUnYSp_XQ4EIfsH3EVuQVbeKiGNZEf0Kkg.JPEG/IMG_3730.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDZfMjUy/MDAxNzQ2NDY2MDMxMzEw.7bHJNl3xM6WsbT6_fs1k4pTUxO7F9M65lI8pK6zAQysg.2xfXRRVLUGc-s75ZIRjJpgUvehy93L0mimlD-RVcW-sg.JPEG/IMG_3723.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDZfMTAx/MDAxNzQ2NDY2MDM4NzU5.NW_TSeMxQpDXkgUCZqeyoHUv43LJIhfaXFYN2UFruIIg.OEpAeY9Abv8VxS7rgmPK9jD9BxRaZmTBqF2e2kuvWPIg.JPEG/IMG_3740.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDZfMjcz/MDAxNzQ2NDY2MDMyMjU2.HZiFB4OreDQIN5mzMZ-OyiuGnrFSSUGCav2-lmCcJHIg.bmr96g5Hh3okFviQ0z6NDCgMMSLm6ZTXkMOxe6NcN4sg.JPEG/IMG_3736.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDZfMjAz/MDAxNzQ2NDY2MDMxNDEz.Az-78sIfPrasqob1fMlCb_e-PSypJPYCPQ2H9Tl6rn4g.SmRkbfIn2dUxUFWFP-5qDHVz8qk_gBVl5zkni7ncmHgg.JPEG/IMG_3727.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDZfMjMw/MDAxNzQ2NDY2MDMyMTEy.OP7JM1ahTRUWhY0RrmvYrC78H93lnwUIlGEMBPTL-0Eg.gcBHwZiGXAvppKevyD8gT2u6zckTDHVOU5lbDwKzED4g.JPEG/IMG_3726.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDZfMjM1/MDAxNzQ2NDY2MDMxMjI0.8NtVw3MFAXkj0GWdqVlhg_CFcMijsMFuCUYZyg4PG40g.Xf4IqQ2-JgtyLNThvkCFZgnTAwEX8lQNkbV1pMPZWfkg.JPEG/IMG_3724.jpg?type=w966' }
      ]);
    }

    const existingImages_k1290897759 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1290897759'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1290897759[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/571A1F7378664E31A1B46EA4C8DE866C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D51024E205814E2AB1DB3FB7425314A4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/296C6A46E9204B09AE51FE1A77466137' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C1CE09D8E2FB4AA29627F680CAEF939A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7F93D8FFF02B4E60B2ADF28EC9D600C2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6F5E550AD80645E28D8872582957F7E7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8AF9BE36A1174D8FBC3DE93E113A5CDF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D3BE53E57094485494C2791044812C9C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/63D688F3444B4D7B874193E7BFE02BB5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/40346575C1044FFEAAA549A9B4D55D3F' }
      ]);
    }

    const existingImages_k641918700 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k641918700'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k641918700[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8AB3950CDE4D4494B41E823D4190F67E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F2E1D263F84A4D5DB73D0EB73A5C01B6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F19C4271C894442CA74B2156ABF0A833' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/208E9737185D48E294CAB7E1B94DFEA2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f9a439fc1d7017b487592818efd507376e7a120c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/16cc05e9854deb5927538340185230de62dc31e7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dfc7083780db7f51c35b9e05d3fbe6a63e016166?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/afe22fa34ffe4671d6c4dfb778c5cad5aae61be3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e56201ac156b5a72d2667cca866cdbb817485ec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdf82943d4411f679335d3ff05b88f2c84858367?original' }
      ]);
    }

    const existingImages_k11700316 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11700316'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11700316[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/37e36779961df231a3bef513fd1831ad3af6a5e5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b9330763ff65c06d99e94a1606471874f1deabab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9f7121b2baa2b60c299903163f5ffed65ebdb5ba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e731ab7e8070a96c5dfc2ab949353c2cddc5293?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed322fe3fb249fcf5f11458bdffe90842de5b7a9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c33b0c916534de1369f07e524c249ae27620ad9e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2723208013bd5bdac17dba008705df1f134663d6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/181d0cc70c5bbd18f90efa02309f42276cf4f29a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjgy/MDAxNzU2OTY0NzgyMjM2.aetGcAVoryUqAn87Xmxi0SzWF4wiQJ0Me_ifKlQZBoog.UaNfHd7uO1zc4Ql-zuxPqE2FqZf55ZZPn2yqmCCGJ4sg.JPEG/SE-99211bd4-271d-4716-8cf4-9c4188c78dcd.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMzUg/MDAxNzU2OTY0Nzg3MDQ5.aazJ6f0EhdMLr_ePS1rr4UTZVNL-a94gp4M0WzkaGq0g.pzuf9zXu0TSBXQ4o5rgo__4W7hFu4wYD1pgumGNWubAg.JPEG/SE-0aa82cd1-acf5-4a25-817e-5b452700d053.jpg?type=w466' }
      ]);
    }

    const existingImages_k134789027 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k134789027'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k134789027[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f1391640e97a99d3f1e8ebca80621c2b1f8df28?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3fdd82a1b765f481a66dca7ebde50b4361ac8bdd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/52dba96cc6256096e047577bd7bec77e564e4cab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6e7c382381517acd95dc17a87aaa1f5f98c78a74?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/49c5b237c9422c5c309206c4e092d28f075c0cc9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac4affceedace4ae0c9619103573268844a6d08c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8aee98a78dde54c669335a3061a41f679bfa63a5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66a3a9c9ee252c1871db4ad31ff4bdb225816cf9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2c2880ed4b337e2f5a71f9b9d76b42147c8d5553?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/05e82113c3dc5810636b4674cf446bfc72425618?original' }
      ]);
    }

    const existingImages_k9179430 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9179430'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9179430[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e36b8d9bb6f7062b7fd6ae2b3ed690212caae9a5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d3346c6581158204d4a83d5e6071379c9f509f0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0371067f78479884133a569a9ae4e702dc398730?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b1e04c6973d508882ec0769ec1536e6a9e0d79f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29d1027e6fefb9cedf459ca4abfd05c56532b6d4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6396bc7649e19ad181cb555e43348001e7ae3032?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0daed96527e56cbe232be93eb95d8dfc2e2532ab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b4bc494b7c4e03fd5d867e57fbfa5f6f17e7f4d7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTgx/MDAxNzU2MTA5MTQyODE5.xbDZjvFmncrzztcG7N0skB6SEHZU7sXzY8ChRBg5Oagg.bgJGAbA5dNmyNwEbpbBeH1c93gf09HYr58reGWjx4QUg.JPEG/SE-a26e4dd3-ec34-4633-8cd7-29c3ea565c80.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfNDcg/MDAxNzU2MTA4MTcxNzc4.WlJq3BCfDSYeRLJc7zog6P3h_z2WSNunoMvKJ67JMX0g.1PVAYE_X5K3YBtVN0wmFH79Jfb0c_4kpa4doz9QPltEg.JPEG/P20250823_141207293_160ABDE2-0E73-474D-8507-66B91FFFD56E.JPG?type=w773' }
      ]);
    }

    const existingImages_k1221772601 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1221772601'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1221772601[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d74f2ac906037f2fb9f582cdb7cedb25dad6cf09?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/65ae6d122ad9e160c018decad425822555863166?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/53cef39364e70c7ebdc86fef5bc8f3d643a55121?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/11c96f778b02d3c6c86a9d338a2a8b2a8c48d679?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb91b0f80b3ccbf59f27f0a63f36d054fb275f58?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66f67d67aab77dd89815174e8f8b74f05c3fa1a5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/347ec06eac10ebfb8119ab265078d031016d7705?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/15c606834ee9d0b74f4ca88d644a76e71ef8b503?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dac1820996c3e181eab05e48e2bc45a54fd08b85?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDdfMjM3/MDAxNzQ5MjYzMzQ1NzEy.l_To0l_C2KrormnuR-KMBzBitOUH-Dkq9tG2eYb38aYg.NxbnYFXjhtuwe7nBaKZeMWQYV_EQGHNyy2xOpjaXUmIg.JPEG/SE-67604a07-4020-11f0-b7ff-672f13ad24d7.jpg?type=w966' }
      ]);
    }

    const existingImages_k27602226 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27602226'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27602226[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/91E273AC94A644C7A567D37BB4D8332E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FA52E989F31B43309EDA728574F6001D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/ED5C45931A0947ED95566BA868907669' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/54759E18036D4FD1AC99B66B404E2AB7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4947E334DD774C9882540676C4C443BE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B6AA927DA2594E618EDB2621C4F94B64' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BFE7010D274C45859BEDB9D14FBC70CC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DAEFCCA18CF14A4F913CC13C7CD29EA3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/03A05DF9CFF34F6AAA5077702293B855' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/88918EAA8E824AC2A31BCB9F116F3D97' }
      ]);
    }

    const existingImages_k10549854 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10549854'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10549854[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b5b795b842eda97a48d443997177f9c7673b884f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3b01d7b79653982086991753fea18641e52e2ace?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhmDOnWUA_K9KyfPQW4HIdiIwGb3nKm1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhl6XeP9J_iWHdoDZYTlxM30AnkVoN80_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhjTk3mVf_3WoNkswsFGvOIHeoV9Cdi0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMTU5/MDAxNzUzMzMxNzQxODM0.RCm-XBXRUJHyg_EMevuU4Bs-YkvM952iSG8ZpGlVK5og.6l51B7jlU8gkXVNkCzDH3Rj3lUhzbDvjX0tRbkjXyp8g.JPEG/KakaoTalk_20250724_132114674.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfOTYg/MDAxNzUzMzMyNDUwMjU0.DfGZMCScPRFMzehY0MaYOMO5hTQaQahSNpKChjU_qFYg.nhwe2RNfCllh2s43-wd7nomBg8m7uwAexDeZdDksAngg.JPEG/KakaoTalk_20250724_134610074.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTBfMTky/MDAxNzUyMTQwMjUxNDkx.gWGh80DipBb978g377NIUwj9Vh09j3Gg9UPk1E4nMycg.0zd3O1s-s9xKX11AB7Ptbgkrinfwn1mt_6V7wCG1NpUg.JPEG/SE-62379FF0-8020-44E0-83F9-5848729E847C.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjJfMjI1/MDAxNzUwNTU5ODc2NjA2.Ce8M_VeTivDMf3o7zNfli686Z6T0VF6R9IW4-kXxi5Mg.lddZUydD3lUmR8-796f-I2EFKBE5nUN4G2-GkO3ZFpkg.JPEG/IMG%EF%BC%BF3862.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTBfMTY1/MDAxNzUyMTQwMjUyODk3.q9tqLUvX96W_kofp2A5Yfjz7-s_qTHQVkaK8mN8OPugg.Y3drn1sji4d_OLec9ZsEUU-qT2sAvdoZNmit5x91Sgcg.JPEG/SE-371B7AC5-2613-4F86-BCD7-789A43B76037.jpg?type=w773' }
      ]);
    }

    const existingImages_k7970465 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7970465'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7970465[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/63c2010574120cf841489d586398be37468f829a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/376d0949558c43ae8c716ddb5478b24d2e602ff6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f9e2cb1509c4c186477527c3ba0956ccefdd6e4b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cef7a8893622cdf5e2d4ae1c90fce50a066e055f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df17fa7f9afab565f961dd697cf4ec98aad45ed0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a22b445ff6c3dc85d3f68c51c2df6f611c952c92?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ed5c7051ed6c1c2d40c0bceb8521e67b3be366d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3183d38697451ad3067955ee887a9a0b932235ac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bbab2c0a1c0e25cbbd1a5cde01694e9450f7c993?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/589bdcd09eec61ad84be638a2014cbc4b5bbff76?original' }
      ]);
    }

    const existingImages_k892278619 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k892278619'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k892278619[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/53EF19BAC3604FC3A0A493C6BC42DEE4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8E1AC272C60247EFA15F7F8D8D5AAFB2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CC7AC4686EF441BE9FEB88E0033B0192' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4B913CC6ABDA440E932D3DFFD91B9F2A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/479E0B4ED74E491F8733B5E98C4DCAD6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/726F573DD54640C68AFCFC43EAAAAA37' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/97AAC6C56FCD4CB3A9A5AF0469A65D1C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/10f34bc9bc4a31a51027c6dcf3eeae6271a4559c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bmIqeS/btsNUKW6JBj/WCpkXaPrGqPnxJKBzbD9P0/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/Fzlem/btsNXqPOrXM/IgkRaTB9kpcVWO1kNZROZk/img.png' }
      ]);
    }

    const existingImages_k1007093063 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1007093063'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1007093063[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EB3F2ABDE7674D06BB323A4404E2DD78' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfNjIg/MDAxNzU2MjA0NjQwNDA3.I36BOMVRC4B5LrkGctBOUF-F_BrtTwaIiMRMwEGv32gg.uIuR-6foOeNICgkMwe_Yf6gXemqIV9x5I1G6876mkugg.JPEG/900%EF%BC%BF20250802%EF%BC%BF203629.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMjM1/MDAxNzUzNzY2MDIzMTgw.LwSOYNHNwfmMx9qwz6S6B96I-zqM83kfwg4-E6-QTQQg.XlPTJOed01TbxgJyqV64CxdAnPO-qu8v45N3QViRqRsg.JPEG/KakaoTalk_20250729_140937194_08.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMTA1/MDAxNzUzNzY2MDIzMTA4.jYvlNQAS8lDAlW-Uno4tDDbl2Z_5WogzU40Afhxjx3wg.YWT3FySZnPsiCHqYfX3irEYolT8ILqu6JqG7GB0Mq_Ug.JPEG/KakaoTalk_20250729_140937194_12_-_%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfNTkg/MDAxNzUzNzY2MDgxMTg4.EsqYnFM1trP3K6iaEt-HQk2ju7JustF_q5DoGdkmQNwg.oDE70Ft20covO7XM0uDkHNmkduHgJLChmKX9YU2K3H4g.JPEG/KakaoTalk_20250729_140936430_25.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMjkz/MDAxNzUzNzY2MDgxNjg3.SOtyDfbpIN86jKwICyuuR2t--JFQdg5sPjCxX88pBXEg.NuYDNupCIPzLNSn82pdORXdiJyLqiVqKKTt3o1gUP0sg.JPEG/KakaoTalk_20250729_140937194_05.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMjcw/MDAxNzUzNzY2MDIyODU3.xqasdLQsmPLxHZC2eUlvXB4YXalFelw2e4Ju7hZfjTwg.5K5GmwOOVLnVs9hOjFzkt3r5pxbzM4xkEGOy3UGxM3Ig.JPEG/KakaoTalk_20250729_140937194_09_-_%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMTUx/MDAxNzUzNzY2MDgxMTgx.JUkRi-fvTKSjaoUPdyixFZhmudj24QTqB-oSQKbOWCIg.bqILh-Bsd9MYy77fa_DdYIJAGe3aQsht8iqfBWxx6gAg.JPEG/KakaoTalk_20250729_140937194_02.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfOSAg/MDAxNzUzNzY2MDgxNDEw.B9ow28Vz1jnllLLer7Dy1erECWBv9EFd7dzUJ93ES80g.8DdD0AEU1R2nESAuzmwyKdNt_cE0rrKQVQoRnt4Of4og.JPEG/KakaoTalk_20250729_140937194_01.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMTcy/MDAxNzUzNzY2MDgxMzUy.sXIvX4fJs8cEFl6nJiwXYJ2ZZwxviAy35ZJ355_y_AQg.lkJG8kLCoyJk0hogfY3QMUp6tR1JKm33mnSYi0VmfSsg.JPEG/KakaoTalk_20250729_140936430_23.jpg?type=w773' }
      ]);
    }

    const existingImages_k915439914 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k915439914'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k915439914[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTkg/MDAxNzU3MjIxMzk3MDQ2.NOaaf9wtyfllm1GIFFOtQWhN_A_rO32SWNO8lrS5_5Qg.AgHhBhdJF8R789h6TN6e_u2zqjNTvyI-DoktzSgkd40g.JPEG/SE-D8533B96-C8EA-4ECD-98E4-46CD15D61423.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfNDgg/MDAxNzU3MjIxMzk1MTEy.lJTNF0mbBmEYFG2g0rTlg-obRPTI-zPgh2HzvQqen6kg.AFAR0sPmnXAAQ_mYzPWXQxAVpLShGfMGoYuRbFBxMesg.JPEG/SE-3CBBAA87-E7E3-4253-AEC4-A62661B3F9F3.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTk3/MDAxNzU3MjIxMzk4MTQy.TvbxE7WpqtqRuVnVmGfZrPBELUcfWSV047KhxPGPQ6wg.rtLt0fIA-b8jl6dXcd2mUG9IQyqsxoumoDywEJFkrLsg.JPEG/SE-BB027198-C749-41CD-9E60-D18587212F56.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMTg2/MDAxNzUzNzU2NDIxNTcw.76tsEr8g9xJCpPYhflDADx3loRzkrq0qJRBSQQaAos0g.mwFKxUsLzoB807ahRnmjaXZMOCbtfh5tr9Dd5bNM_uog.JPEG/IMG%EF%BC%BF1108.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMTUy/MDAxNzUzNzU2Nzg3Mjgx.fHeJT5jvhCbXiqdGqNqQpgk4f10YdCmIh1Ix4H7rpVAg.PbkMfvTAAdZXTasc-CpRA0cpSw4mc8sLQJlVjvehgAIg.JPEG/IMG%EF%BC%BF1092.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfOCAg/MDAxNzUzNzU2NDIxNTU4.4gEguAzkXX9RL7mWoYJS9G4lnuVx2F7k2wynSfS9GbUg.FaXzAzmbXTdtUlHg-qJn8q6RkoJqtQ_Zu3q7e6A-7u4g.JPEG/IMG%EF%BC%BF1110.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTVfNTYg/MDAxNzUyNTM5MzU3NDMz.O8sn5IU36SYhuWQCSqZLT136QuS_Ik9cmEr37nmYoqYg.tmGATY2hPLUFla-jgW-e16DEibdW4eMmYFGnj2H3MTcg.JPEG/IMG%EF%BC%BF4370.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTVfMTgz/MDAxNzUyNTg5NjE4MjA3.wH4OKTMpwUa_kfR28ieN0M6sB4dPDIRe2PezxOdVQP0g.5gxoYJY3u9VdzdCboUcT_Pnw9BEOa7UzCshAzZNBr7Mg.JPEG/SE-4CC59FA8-6A17-4C05-9659-B23482D730A7.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTVfMTc3/MDAxNzUyNTg4MzY1ODYx.E24CAfXdumzSMUhf0FCgWGOP3tU5eZ4IfGkdbbrqyPcg.K9GUqphmc3cLT8UjegqUsOACoyoBM61ozVSD-ptfWKAg.JPEG/IMG%EF%BC%BF4400.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTVfMjA5/MDAxNzUyNTM5MzU3Njk4.ZriGJR4e4NLKxu6F0MRcXd6SKJ88GFOgJRz19s52ddkg.vQMNiJpueBN7reKZrHm-qzFkjKAepTy6Fhq0pYXXMP0g.JPEG/IMG%EF%BC%BF4378.jpg?type=w773' }
      ]);
    }

    const existingImages_k11833940 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11833940'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11833940[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f2eb77eef94e38ceaa5e6f22ae57cf3dfc60b8ae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4cc7b9db3e63ad6a729d0b53213d418abe7c73ec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/450107cde24fc2d4dcb7219a564efc8c2b7e784e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1289a652d3eb71117c72fb4133d5f5db8cafa22f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/232259ca24f04ab46573a0277a157c79471df761?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fcb71d6312f720c26b0d06f714075d6e1e105083?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3f7c8be6e8c4bd1f05c4ee7f7e6ab6ff73ee031f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0ed47ca6a2126ff6425c83edfab87ed951be2c24?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4298a08f00404aff135c32f8a60caf7a894ad824?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4d12f55f086aa95f6aeef8faed22f257c66b9aa8?original' }
      ]);
    }

    const existingImages_k17103455 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17103455'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k17103455[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac4785dec953eae8daac851106f081a92f3895b6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/870ce218d99016669ce464cc5b8e54967855af79?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/321784fd9daec66385fe310370d199df6d8683a1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/059901db6726c1ddb9f75628ee75f1e1d967d13e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3c1d9626d3b32b1e7e9df49489cb69a72200d334?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWaiO4Rr1U_jr9hVo55VKFSL9h7kr1Um0_lkagemL4ZKg.jpeg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMzgg/MDAxNzU2NjUyMDQ4ODE3.m7tMTrD-eKJmniR2oxi9aMT5lqTHZBaGQWe-7f1XcMsg.JYlKT4YtaC2lmnFi72jKaZ-zURlLj0rUwXg8-irnxFgg.JPEG/IMG%EF%BC%BF1003.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfOTMg/MDAxNzU2NjUyMDQ5MDE5.KaetMpg3QZjw9zwcbbAGIiyjGfdGD_x4BllcGh_HqXQg.9fON4NR1s9Mg7dNrb-bbfWbC2IXedSjVVurD4NfWBaEg.JPEG/IMG%EF%BC%BF1004.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjAz/MDAxNzU2NjUyMDQ4OTE4.wNMh1CH8YZXztL6po2aBoosXVxJ6hiMEWncYh1DalIYg.dwVRhMbJgC6B6LvkXKyT1iayxmR5Rvhcz7xxaKnswk0g.JPEG/IMG%EF%BC%BF1005.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjM2/MDAxNzU2NjUyMDQ4ODMy.PFeuXdeQkWCfI06V8r8l6PgKMJwQMFMO-6drmwqJJJEg.IeKDb5VUHvXVnm3iocvyVn-wHidqfXA_rjOyQ1TVvbEg.JPEG/IMG%EF%BC%BF1007.jpg?type=w386' }
      ]);
    }

    const existingImages_k1890378983 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1890378983'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1890378983[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5fa71c90de81a9399f41813a8e0971bc957eef6d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTAy/MDAxNzU2ODc2NjQ4NzI5.E9k8xhTKMAl_LlhDW_7Xk-0tJxSGPPGpRSw09iccFdAg.mSRhnopxGg-OCvDhp57Q7jdSpywSNvA4o2eGwT76G34g.JPEG/900%EF%BC%BF20250903%EF%BC%BF111211.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjUz/MDAxNzU2ODc2NjUwNTE4.JFEmvRZWaRORI3cSQQhwe2qZO12A3JQVOT_2kXaSQ2cg.93YjFGMbHn5oIvX_wPgBQvzIZIPJsI2Clp2hKqbwlGwg.JPEG/900%EF%BC%BF20250903%EF%BC%BF111054.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjk5/MDAxNzU2ODc2NjQ5MzE5.5hAwM3HTKWk4ypnp_QlcygyWP_hnVon9HOu73knMh88g.eKIDGUohsrIlFmvTprFS9eLD5GM6cYuFsbgp8vPlRKIg.JPEG/900%EF%BC%BF20250903%EF%BC%BF111128.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjc0/MDAxNzU2ODc2NjUwMTQx.0wJczMmhpDtFM8beULMqr9_1IhiN5UhFYZe4H6CHSgMg.Nq3gGfOF-YkFEOMQZB3KAWeDOYaxcoIVmcnUw0HpI1Yg.JPEG/900%EF%BC%BF20250903%EF%BC%BF111151.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTc1/MDAxNzU2OTI2NDc4ODc5.EI-SXeRhxlUhAvg6NsedSW09_HcCIaOj1pzOhaEVO0Eg.Xplx5NQVFyW4GoyvqwRPchPjDKlQrJad8ZksbFX-0vkg.JPEG/1756926477966.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfNDAg/MDAxNzU2ODc2NjQ2MjQy.uuEb9QPiJjWELfFRcheuSgSZwVRI-TJZ1JmqzgMfRQQg.hjZwhWCn-9Jr_gp5RB9bbx9RBiyMDvfli6dsjouHBVAg.JPEG/900%EF%BC%BF20250903%EF%BC%BF111104.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDlfMjQy/MDAxNzU0Njg5NDI1MTg5.FWYdeMpadNIPeW-2sRqA7MrF4SDMW6GpHr8Wd2ecBRsg.RKMC7OnX1DZ4MkwgO89QvPrl7N5P5we-LoIghZBenS0g.JPEG/IMG%EF%BC%BF4186.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDlfOTIg/MDAxNzU0Njg5NDI1Njcx.x2km7_IoEBid74AVXCog2uwFUMWTNEIstm36O6wuxAkg.j6JqzCKYq3wFEH3e_O0WLbMvSoNFwVNVuIo_OWyO-rcg.JPEG/IMG%EF%BC%BF4179.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDlfMjIw/MDAxNzU0Njg5NDI1Mjg2._XK-WeYcOKrAXYqf5w9cSHeLp2j-CIWUFniLVa61XAMg.LYBP1Q2etsrKmCOXoId4Pb87BwfrCF8s7Woin6pdHb4g.JPEG/IMG%EF%BC%BF4178.jpg?type=w966' }
      ]);
    }

    const existingImages_k1946946918 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1946946918'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1946946918[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjM2/MDAxNzU3MTE2NzUxOTQ2.w8FOKFG3bZg2DubG10MNHSPS-j6D3dvg5ibqA8_ZDZkg.nUZm14z4_6YgqzlGmrlCm6vFDGjY6TDeB82VBbpQg60g.JPEG/900%EF%BC%BF20250905%EF%BC%BF121426.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfNTgg/MDAxNzU3MTE4NTc2NDE5.vu2BNts7cu6epZpzcTNUqjYkR3kfNqPzOQ9qTWASwkEg.6G8XW1TPObLlcHnsNNws8wUkBf-HJMYE0vfgq3FDzPQg.JPEG/900%EF%BC%BF1757118199288.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjk3/MDAxNzU3MTE2NzQ5MTk3.4b6EvqRgf0nba6N4i0cw4mP6biKiMvfvj-9uJq4gRlgg.UIO7_pOn7pqWVNFOmo7S5iY8VDcfJA18hP_4vr7MCXMg.JPEG/900%EF%BC%BF20250905%EF%BC%BF121041.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTQg/MDAxNzU3MTE2NzQzNTUz.EKAGYEYaDu_gVclbOSzZGss8kA66ITknIuz8MGTRBA0g.JBiDDok1aXfz_0xKdh42p8QwBWd_oRK8NAPmdiWa7XUg.JPEG/900%EF%BC%BF20250905%EF%BC%BF121008.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjU5/MDAxNzU3MTE2NzQ0NTIx.RKd1Et613FEL9c0frPXih_TsvSLd8708yOQvu2HvD18g.2ha3OrOMFp4qIMCNZB7CHqsMPJT-OCv3ISuouvXILeMg.JPEG/900%EF%BC%BF20250905%EF%BC%BF120957.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTgg/MDAxNzU3MTE2NzUwMjc2.urigB8VzRCzUDAICBuC4c_qi0Pq9qOl3llqK8wKCEE0g.DmPIyqN17Z4PbIIvkICiKGfz9O5tN-Q6dbLbxLT2sSEg.JPEG/900%EF%BC%BF20250905%EF%BC%BF121120.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfNDcg/MDAxNzU3MTE2NzUxNDI5.UKRNdr2d1wH8WYqJLopYs2kzFKYSHMGMOdaqwE4czLgg.d30JJSry94uaLYti6H5yPIUdEkpVtN5L4eMnA7GE84kg.JPEG/900%EF%BC%BF20250905%EF%BC%BF121109.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjc0/MDAxNzU3MTE2NzUyMTA3.iJWypvXxjcwq2213gSWHIkbHysEWH22zJmid2t3CkbIg.jTrFv8n8CQyhK3zmnQpDMewyDFhPzsNalzo2bOReZikg.JPEG/900%EF%BC%BF20250905%EF%BC%BF121021.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjQw/MDAxNzU3MTE2NzQ1MTQw.-xjf-lCMAkKv5TLLbY7GrzOzwUh5hdikPyWQDq37z20g._Q0PoqpZ-LZ3FNh7r_yXSnPsooDEB5ma--MQzNyX0p8g.JPEG/900%EF%BC%BF20250905%EF%BC%BF121036.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjM4/MDAxNzU0NTY3NDQ0NTc1.8zfpZVgqbESAVkt8hosYA6MbCIJDSzrB7zDwl20auhsg.wrThtbLQpISyZJ_whqxvyCrdLIDN_L6HyKWaKqkxYHIg.JPEG/900%EF%BC%BF1754567351321.jpg?type=w386' }
      ]);
    }

    const existingImages_k278838995 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k278838995'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k278838995[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7205913F6F4547C3B342E9999F0A3524' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CCB586453BB645068EED87E432B1211E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/649B09811F2E4293AEA1AFAABF6E38AB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/56AD4C93823145AEB6952387303C4B22' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/7362AC474BC14EE08BA4A7A54E8E3703' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/8E1C29C0B72F42D98FC0BE492EA14529' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/548501C901BF4F768F1F3F38A0C51548' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/9D7668AB0B8A4713AA8E2A0BB98A8EA7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DB55677C63E94279913F5FB0D4542B18' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D2B80BF38D584274B452309A457F609A' }
      ]);
    }

    const existingImages_k242555220 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k242555220'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k242555220[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/place/6EF8EE9C1319484DBBBC75CE62AAAFBD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d12cdf9fab80ccf8d0feea8e51f024eb74ecf7a4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6335fea402607dbc714f045aace73f4f865bcce9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c4063d475c86ce27590e07199de0cf8b75b982eb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bc7d526caef9d2d224edf38fc443b80ae31dcbb2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c3a3cda2dd48284f515150687e12b1e74ff2970b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/977d7875a078cec3cf97865108d57c3c2d004306?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c50ae83c6bcb6949d2978009f394712489e9293?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a6e03074dc190b423e47bf327d93616cfaf203e7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0d4ca599aabfa4f8f3784f81d6726236ca54994a?original' }
      ]);
    }

    const existingImages_k1164611593 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1164611593'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1164611593[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/01222A4D68A040C8B704F3008BCD55E7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/92E6BE532EE545A996CAFC8C02B73031' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6898A75C908B4F15881FE8B6B4856A7D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DC10D98B08C0423684888762B1E61420' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5FF1034A3F3C484FA578D2D97E51FEAD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3AC00FBD538046E5A2CF166999EAA893' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/651EA32DAFCB464AAB3AE6B5E42096E6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D808AEE48313491E8FD6FCB1CFD70A19' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4177C21F9CC340A79D0CD620627FE69D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/704B645174EF48F9A1DE0C9817719C98' }
      ]);
    }

    const existingImages_k8333899 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8333899'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8333899[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33c0951b6ba9a48a154d8b21f550e330b89f91e2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83538192f19212a88085b13d8b94d90cc6a4a5fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0921149fda1c41f6d40a3bb7ddecdd8de1b8a74e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/80748325968b1b77207282b2ecc307c789c1a054?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/adaeb292c61f4a01c7d1f28c052ea22ae6938057?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/878cbe438497a4fc5261eb755686703f911b0eb0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6f3a02abc300b60def04c0473205201ca3f6e54a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/37adfd5adee0fff880c9c5c034b14798eea9255e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/360a8282178dcdcce911ef5dee079a76860dec32?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/02e52ba4214f9ca163a3c1e0c14e748dd7478241?original' }
      ]);
    }

    const existingImages_k15610994 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15610994'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15610994[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b3148f3d4735a025b920e37f414859e6840b3aa9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d2b9e2eada92ef8e1ef05d79982ada7455ab143a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c4a1bd15b2fe732ff21e56c5dbba2478bd3a5175?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb9edf221ac0e543c419cbab563f435e14d44df7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/73d8a51110ab48cb3ab99fd194a767a87b97ad80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0154edee15911be328a932bbe0cb26cdc3ce2dd0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/da611261d07f8adc4465cda4b1814c8a421d2e43?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcFno5unp_LOjOQZgkEKkYGckTUxQE5k_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcFm4MaD2_x08iZ7s2l0YPK2cTRefVf1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcFlx1YX8_uJ2bNhGs9HBRB26mHS2w8k_img.jpg' }
      ]);
    }

    const existingImages_k27600571 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27600571'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27600571[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1008025a7018789513c67ed94ef8a12bdd7b5c36?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cb37bacdd6510a74e8bde96573e3889317a085bc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f5a86ac3b8954b0ba46a1ba751433a3e1da28cd4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjMg/MDAxNzU0OTA5MDQyMDE0.p8idLcJKBm091mL4aWazSjuD4zuCoK1xPXImxh4x2Hkg.3wau-lbZHeBOdFTvbYoSeGl9EhiAxOvyOrRHogdPbLAg.JPEG/900%EF%BC%BF20250725%EF%BC%BF111825.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjcx/MDAxNzU0OTA5MDM4NTk4.ubaa1PfLK-zZiwRK2bhxxwmQBPMWAcWkJrZ370AqonMg.XcfJAanXEAa-I_QxuHtlHQJXnVdqObbJjuSvr0LhdHYg.JPEG/900%EF%BC%BF20250725%EF%BC%BF113531.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjI1/MDAxNzU0OTA5MDQyMTU0.IYwwNJ0HocbU5GzSIUXKB80ZimZJClssVqzozyenHIkg.qSdDC32sc8ruiKnEyy9djHsQ2zYF1GC-n_fMKIZr-hUg.JPEG/900%EF%BC%BF20250725%EF%BC%BF112047.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMzEg/MDAxNzU0OTA5MDM5OTU3.M-4REV7OvAmd2zmd2vfh8LvBrJmGae-RZrkMEP6B-CYg.B6UwwdXoGxHoQsngVpBvtBCfppv_F92DLLpw2Y14bKIg.JPEG/900%EF%BC%BF20250725%EF%BC%BF111922.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTdfMTEg/MDAxNzU1MzU4MTI3ODIw.Dt3CQg1iAn6H83GwPY_OEEPhQEoIOVy3xoCG5HBCLNEg.YYr8GywkknglKJLj21qZjYADAD7ewwcn7OKfIDs0CzYg.JPEG/IMG%EF%BC%BF2564.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjZfMjQ0/MDAxNzUzNDk5NjQ5MTE3.Zc2IQ2N6ACWvzTTSewNkKgHQeha2mP4eiJOzUQlY24cg.KxVHK72rGoCsZcHrvveOdE6aoqwAPujlJT4Xq8Vc2Yog.JPEG/900%EF%BC%BF20250726%EF%BC%BF115335.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDFfNCAg/MDAxNzU0MDIwNDg4MzY0.pqRmqiBVIxZYAzPJgyQ_yNPiQmcrpnc9KDeBbVFqoAgg.WvUY4HR007FG2QoEkauhsA_1jUBFK4t4PRwD_0jHpT8g.JPEG/SE-90ba4029-69ce-11f0-8856-bf1607c02453.jpg?type=w966' }
      ]);
    }

    const existingImages_k7881525 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7881525'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7881525[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/34803B7DE227418E9296D8EED39B5264' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/899D0F524AB64E5389084880D8E49E9A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F1FC7766A1F349AB8FFB177AE04EB872' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/854792D9B0D04D8181D78C7CCF6822D8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2571915B79B7432DA5B5BF5F0167F416' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/57C68855D1FD41B9BDBB666780442618' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d127f5f51e5b97c2aa3a28b9308edfd5f5b3b85?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c7c1208039449b131ce05759c8dbb74ad96ae061?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/268f0cdd5523e3114b2c23eb2dacd1323ebd9f47?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60ce3cd9333f19e894c3c91e608bb5237f66c5f3?original' }
      ]);
    }

    const existingImages_k1876987237 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1876987237'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1876987237[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b9eac2a2b9a9ce41f01b13e1d23da0468717b5f5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a603956e10c8674cf3869f859693f57fe6bee84b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTI5/MDAxNzU2NDQ4ODA2NDQ2.Jm1BC9Hmufk33-pG1T_3RVfIXdismwTX04bkrvxX0f4g.6yCXkfjDeIc0vMMq3uwR5r2k6YfHDe_v6MkqmBjYyGQg.JPEG/900%EF%BC%BFScreenshot%EF%BC%BF20250829%EF%BC%BF151101%EF%BC%BFNAVER_Map.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjUz/MDAxNzU2NDQ4ODc5MzIz.lkmOBbh6c_8acCQO24oGmnwFSaj7yhissBpZbsnmOTUg.Ff4CyM9fXCMnq6UtoApdUYPs_1z8x2Vm-P2RrEBqqwEg.JPEG/900%EF%BC%BF20240906%EF%BC%BF194703.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjc2/MDAxNzU2NDQ4ODA1NjYw.2AdvdZh6F4dxW6TpbP-Cl3e_xbbftytYt5dNwtVwo8Qg.bziF6sFj6QRWsYUkgEO8wBcfD0Nvla_DjsVtroBOg1kg.JPEG/900%EF%BC%BFScreenshot%EF%BC%BF20250829%EF%BC%BF151112%EF%BC%BFNAVER_Map.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTcy/MDAxNzU2NDQ4ODA0NDk3.UEgsdWR5u81gD3mlDIqbS65vxHdy2I1aB1Zfsn0-N9og.Dtwt4E3YSt9G5sw_nU6ZzUIe6die4SSPoYstEcHFFD0g.JPEG/900%EF%BC%BFScreenshot%EF%BC%BF20250829%EF%BC%BF151117%EF%BC%BFNAVER_Map.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMzkg/MDAxNzU2NDQ4ODAyNTQ0.S3-9eAc0XcpusoAiH036Fux-WV-zaoxbyr9PizM2dWsg.n9XlBH3qJk1TUe52pGxE8hRIXRzt7H26apDjj4zsEsEg.JPEG/900%EF%BC%BFScreenshot%EF%BC%BF20250829%EF%BC%BF151104%EF%BC%BFNAVER_Map.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfOTMg/MDAxNzU0MzEwNzc2Nzg5.2fuKr936NZZWX2J21rUWHDqKcsodp6sFcO7OhD2H6B0g.JTuqfX7Fuj9iUDNE7qqm90kUwWYfIpy_A_9vAC0pFEEg.JPEG/1754310766584.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MThfMTU4/MDAxNzUyODE0MTU3MDY0.q-W2dwRZTN_twKQOlG_J-eTYccA9B3Hil_ZRPT4hwlEg.VBpZ_SdqPCS2R3otnW7oUWUq_nyCMYdViJBDCWpBEAcg.JPEG/KakaoTalk_20250718_115813656_08.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MThfMTY3/MDAxNzUyODE0MTU2ODg5.zrxo3rgMOfKmBaDydLlcMr2QYWK-A4ERX-ICii8JzjQg.aeSa5uhG29QwugK1BCK-wCC1h3sqnTJYIcKpTV7Ytz8g.JPEG/KakaoTalk_20250718_115813656_07.jpg?type=w773' }
      ]);
    }

    const existingImages_k9757744 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9757744'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9757744[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a77e669539d0677b56977126fd99f90f5e003278?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66a05d257a13a5589a9e415aee28c6cd1d3f5ec7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3be526da2fd695978dab72b2d191d6af543194b9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c909a3941fa16d3789afa6bc24ff777c701a4f3e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/87175e2486909e2eb759d48174deb8babb7c06ab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29901b90959c8ad93980b52902f6d40e7823c12f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e60b4c85b94e062963838baea7f25f598ced843e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e4145cb2238d356b21761a22e6ff5f2a83eef7c6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4a43abdbe47184a492d1746ce887d30c591424a3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/23671856501c0a0f47f13d091eb837015edd1c48?original' }
      ]);
    }

    const existingImages_k8990558 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8990558'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8990558[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f051dcf5959b3f72eac1bb36be5304e85621ba26?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c386ff994dc4724e905582cfa241d1dc9463ba7e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfOTQg/MDAxNzU2MTkxNTg3MTkw.uX7J2qOYaG3NoD5WPUNQVphHcKOCi6nrIOuZelAPe20g.j8V33OrAfhG4VkwOqKTFhZzC6oWSAEMV7NOgq62MfR8g.JPEG/SE-180748C6-897C-44EE-9596-78FA48BEEC02.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTYy/MDAxNzU2MTkxNDcwMTY1.ba3tW9r3W0bxiA8W8iYA2OvGKKlibiaObtkbMFp2TbIg.TDSdbc0ArMKkgzoxp_tt7YkSA_FhZBQRH_TsEG_pR9wg.JPEG/SE-89A08146-E1D9-4D7C-A6A8-26B8944ADB89.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTU0/MDAxNzU2MTcwNTY2ODYy.N3aBXTWDx_yMGgqecYmp73RBXbrKtcaXdjYtL5f-4ocg.UWtx4Y91bDDvTu65ums0nRxlY5_Wp3U4P_QXGSmvmtog.JPEG/IMG%EF%BC%BF4691.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTQz/MDAxNzU2MTcwNTY2NDc2.Tnh1xI5SYtwJ9x3grgYU8g1LfhPPUPl5vQtodPEDSlYg.kgAKZsllvAv9xsK84Qgt7kZJQarwOowEfvCz5tUxzHYg.JPEG/IMG%EF%BC%BF4689.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTY1/MDAxNzU2MTcwNTY0OTkz.gjue4quN3AU6Udn4zAe1lHX0QDLN-PE1JZy-AV-R_uIg.t6LLjRejUsbo8AaAL90goqi4rGMY_Mkku4Mp2khiBpAg.JPEG/IMG%EF%BC%BF4677.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfNjMg/MDAxNzU2MTcwNTY3MzUz.wudZdX9bNn4kj60tADUAplAVz9-UABYbCgleEZAq0pUg.g4OCGPt_j_m2KeQo-VXjiandKt2ICe6SMrZuBABhAQ0g.JPEG/IMG%EF%BC%BF4692.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTI5/MDAxNzU2MTcwNTY3MzAy.SqcLDKtUruK4aZWs9cmNhH9SHPYfcy3-RTzSm52b3tAg.rApEj_MXWOWuZGoIrPasK4Unnf_s8xjreS2bOj6AaJwg.JPEG/IMG%EF%BC%BF4690.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMjU4/MDAxNzU2MTI1ODQ0MTQz.pM2ul9dHwiuGvphAuFzlxytgKDPZ2SeF4CIdfs5DbFwg.xzuYideXWZdBpH5k1Jrf_65kOG3Qvl1HIr_w43e0rwkg.JPEG/SE-360b61ea-80a5-11f0-a261-1deb8aff62db.jpg?type=w466' }
      ]);
    }

    const existingImages_k8294851 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8294851'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8294851[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/099aeee7b5f02d08e4a9495d454bf88ee70f1756?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0f76cae85f2af7012b9c9fa6b22e2b182ca9bf67?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b1bd316091d9910d102df0ce839fcf104309e1a4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/11ef3991b26eec2e74263cb0d1c473ced46eb907?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79861f58d51342974fd08f00354f336d2ddeec4e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/43896f32d7e09d9f3e1aaf61799ef018550b421f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/709c3a81219e32e45b856bda1005b30b9c0d65f1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1b56523dcdf61019ad40961a196eb147edc358b2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dc520e516b74d12b4878c7f400407132ba75291880a6016690105087a71a6c29' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/63d5605df495beaab374730f627799fea762eb24?original' }
      ]);
    }

    const existingImages_k19358387 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19358387'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k19358387[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9569b79a23c4e36e7aa9ae7fcaaad6a0e9103878?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c068be8aac3bf7e8f768a430fdf37deda821cf0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjkw/MDAxNzU3MTIxNzMyNjcx.e38J14KW5zbndeVtYn1ARXXWVDaoRO-qRJP4odsquIQg.kAwM8sDHntZMXhIpOW5UlS293CtZQ6KEqQN33pmUiyMg.JPEG/IMG_2963.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjU2/MDAxNzU3MTIxNzMyNjI5.kF5M9ciP6u2JyzIAb_JbHsQzYZj8oc88oj0FMnCk5qgg.Sv2I8Maytlh2QzlApmV8_MNstMH1v-c4af8kpNJmxUsg.JPEG/IMG_2972.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTQ5/MDAxNzU1ODQ2NTg0ODA4.rE_eVolzM7qTEiBEnK_Al6BujC70ZA1h1O4hfqHc_DAg.PK0fHLmVKohqWlW9dPaKDlFpMofuYPswAsuyTAR3p2sg.JPEG/IMG%EF%BC%BF5279.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTAy/MDAxNzU1ODQ2NTgzOTYy.yZtpnohCWA4qVgPWyBwoXsUUJDyQpr6nkoIXGRfYUnsg.-EoOzgcRgT6Zz9bh8Z2T4VZGpk8mzAQCRibbQvmVBsMg.JPEG/IMG%EF%BC%BF5253.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTAg/MDAxNzU1ODQ2NTg0MDAy.X4H6KtFbiOAx4RVaxzQ42igZ6dAtYHKW5KIZ7yZGkswg.DXHrXjhtqFn8FzcdDsigG9YmZ_r8g1o0ILYS6nGt0B8g.JPEG/IMG%EF%BC%BF5259.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMjc3/MDAxNzU1ODQ2NjQ2ODg3.q_3KGtPGZqpMwUfYBuucVpphgnkUohO6zOytTlGZJisg.6ugZVxRcdfT4T54eZ2zoCC5GGiwc5a0msa72sOiMYv4g.JPEG/output%EF%BC%BF158569725.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfOTcg/MDAxNzU1ODQ2NTg1MDU0.gY2AZdzuy-PXML6BJcalX_rNWSaTwZK_vD-6PIsBqsAg.TeVgVXzIfEI3_Dvuhda1o-Sq7bolnZx59A-woNHTI68g.JPEG/IMG%EF%BC%BF5257.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTg5/MDAxNzU1ODQ2NTg1Njcx.UiTfNpq14K8q7v-SSYtjX4x5IragzF0Zidrck9aCNlIg.kz-nuHkHasUqoW4Br-Yj57VzkOrsLEfb-_qP9GfEXf4g.JPEG/IMG%EF%BC%BF5256.JPG?type=w466' }
      ]);
    }

    const existingImages_k26917106 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26917106'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26917106[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EF0B9B8D9C53413EA4AB686CEFAEEBFB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMTc0/MDAxNzU3Mjk2MTQzOTU1.j0t0h7-6K0VZ7TboO04V1vU-BQQPs1Tz9gxnhSvPBgAg.W3NwKA_dxqiOhK9MOCf7rtLQ8sqAy-ujxkLLO-KsH1Ug.JPEG/SE-A3A4A2DB-2A1F-46A7-8B4A-1EC336B95132.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfNyAg/MDAxNzU3Mjk2MTQxMDQz.TFoY0NY63oUH1GR7RjmvJNGNOG2X16Nsn6yIXgjPBHwg.5YnCfHWMhwXciVV9N4SIT_YP59307aGOpq5LU45v_usg.JPEG/SE-D1610462-836E-4EBE-BD7C-FDB2213C14F9.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTcy/MDAxNzU2MjQ1NTQ1NTEy.o8UTxW8dSkDmXxPTDudXmpQqLC0HzWy0XDZ90zLXtnMg.VjSumJVzEUepjVOp8UOTumBJNCayAapbxjErqYNyBPwg.JPEG/IMG_2865.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTUy/MDAxNzU3MjMzMDg3Mzg5.a87R0Yze2liaVrHeb6uN0RhW9tb06-mpDuczeh3KW-gg.383Z4fFJTkLTkLO9yRbP9sxOAAk5vTtvCY0P9lt5P2og.JPEG/IMG%EF%BC%BF7409.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTE4/MDAxNzU3MjMzMDc0NTQ0.FmamQTqgFW4xb3kTyv7LGNiVxF6LAcmHXlnsMdSF2ZMg.3mqUJdcorK2Z1w_4uUtl1ofGUL9cHRx15pAOocz-B0Qg.JPEG/IMG%EF%BC%BF7411.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfOTUg/MDAxNzU3MjMzMDc2Nzc1.pYR9OEhsNGx8bH4gDtqbKn4yYRj4l5-Sl7_kR_BksYwg.BoZ1dV2851qOZcr9Kh5JZCSUhUCi5ynNGXMMMLJOFYEg.JPEG/IMG%EF%BC%BF7417.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfOTkg/MDAxNzU3MjMzMDc4MTQ3.dlVm1eCTTOtpGyTKNpXR1F7T7vHH7BwJuVNc3flO7bsg._6is2WzFvgnn5fhpd8J7n63pbNBrfrKvtAH_HRJ5QWQg.JPEG/IMG%EF%BC%BF7425.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjIw/MDAxNzU3MjMzMDkxNzgz.icVoYufGtHZA4uGz6WVqEo8SAfYMswP1Ct6byCLASV0g.zVEWh3aOPA_A9I0T4H2MV2NhbcNeFiRTmvQ4DMVEqZEg.JPEG/IMG%EF%BC%BF7412.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfNTQg/MDAxNzU3MjMzMDc4OTE2.irTpJ9xAL1PCAAW-K8XsAvL3yCUi6OD-cFeETxwOEW0g.aFKC-7zqL8VoQTvddEnCudNW4Ko8AfbPq_thinRNU2gg.JPEG/IMG%EF%BC%BF7423.jpg?type=w466' }
      ]);
    }

    const existingImages_k27353196 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27353196'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27353196[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/57f6b1a27f9863e12636898b56d0cf00994ad68d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8b61b74b1ded7b2a411bf1e7c5237c2cebc850d2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a5beeea9e000cad83a292f1a5ba40336bd9102c5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/77d15dec4f1760c1e5752a0803f2de5ba22205f0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dea2a6660da1f2d3678e957a2d9cd97259c1b626?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/74c7424fbd6cddb25a6da5a1a284149431756914?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f9fe65ec5d1b3f727a274010816162a26609fca5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e83262ead0762397959b44916b73775a62dec02e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aa3fbb89e4c992b000114a3f0bbc4064387a6e57?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b7bc1ceb7b117d58639914c94d0a65647c9e1c00?original' }
      ]);
    }

    const existingImages_k470193360 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k470193360'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k470193360[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f8465ccd32936a1a05574b8f8353d7b25c00e335?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/78fe89eb6577c9fdab366bb39062cb80e66e7332?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ab2abe70f87e4b9ae89d43f3462d9a6fdaf7037?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5990fda86d70da3439d3acc827cdfbbaf7a3a197?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5e5d2f234d8a9070598446fb1c1d305b06552bde?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/53e1844464cd64d0ff54767f6499448584e5127b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c09ea34c5c1989d21014c4d6121084e68563c97e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6edbba9be4f15ec5372418d94bbadfef617f56b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3e1e8e5686fed95a4e92d0de2f623cae7870ee50?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c99be962a7772c3228ec9d5a07b1bdbc0dafa36d?original' }
      ]);
    }

    const existingImages_k671838041 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k671838041'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k671838041[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/276a15f522c96a1f367c0afd21e1e24cb04bcb29?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/11f4c77d3e9c29184af73e6fc768b304cc1df6de?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/62a1b8d38a2969eb331a5a3355fa5b279af41f99?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4be6439368f14cb16acf43caf3f5009fd2ebf347?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b085b10c3f7a0dcee7cbced68465d5abd255da26?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTA1/MDAxNzU3MTU1NzYwNDIw.FJ-FeGHmIKKAXGVRptHyonGkW-pDdhS9LFB6NmeKzc8g.ILf5QCOnvwMEZpCJmGVfNPK_n0IWkvKEqO-nupXSZIQg.JPEG/SE-975de760-8b0b-11f0-a169-a344f5a4a102.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTEx/MDAxNzU3MTU1NzQ5NTY3.yvrLSWjoa_wVRut3r6G0yoOLvgP2db7MkDZerlqwfY0g.WiU5xEL8AHPzZwZ9Jy-7ZzpVbkf7je2p-EebhalHfpsg.JPEG/SE-9748b1a8-8b0b-11f0-a169-49a8d96ce787.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjEw/MDAxNzU3MTU1OTM5NjMy.59-E-2EWNAPXAtv38qW1NKJjHueJY2kYN491r-_3nzIg.FGRb0CY2kayGhVRtZZtC_HNuWCyzeK8fn6iRoly3k4sg.JPEG/SE-97457d57-8b0b-11f0-a169-a5ae67c3d527.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjg3/MDAxNzU3MTU1NzU5MDkx.egUfSDqdTDjyLpiyoAC-BQJ-veNQ1pjGnXy8nK1ypMIg.Pzm57BcywfOpEYVSqvpipp0oHq61447j5bhkudhYUmwg.JPEG/SE-975beb8f-8b0b-11f0-a169-535ea5108020.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfNDYg/MDAxNzU3MTU1NzU3NDk2.6i0-DKpZwDywkVIvtHWVeWPKgfTcNYEd4b4J5v09apYg.DsuB06MMiwHqMYm1DXA9lRFFgSpg6kNap8RKC_AY8x4g.JPEG/SE-9759537e-8b0b-11f0-a169-8d130caf17a3.jpg?type=w466' }
      ]);
    }

    const existingImages_k1223543491 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1223543491'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1223543491[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2a74ca5aa43ccb4c78178f6a919c12e9dc517363?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a97851f9ce75fcd6fa5a2f046a556710f31d1991?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b12f82c07a70c93f615d53ec39373e5d114c6c6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3f08c3811b1bf5785d2796facabc5a968577e10a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3eb2021cce7ab5d106d7129c922bf3fc1876a3a0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f142a9a138c831a3fe52f46b5c03a9de0d69654d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e51a7e42ca97d2583009cfd5f87155995348c3b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d0d6061b09120612471dd820c1b1dacf10dbeaf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1cf23bac979a6469cd7e57be40a7a9fb122db788?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfNDQg/MDAxNzU3MDc0MTMwMzcz.YA4lgYIz-8RrapFaU5uzCBDEVaKcm251eAAugiU76f4g.HwlyEbcm9WA9dyhpSE45y0adtG9ejP-jMY_sw_ledDsg.JPEG/KakaoTalk_20250905_210227597_16.jpg?type=w466' }
      ]);
    }

    const existingImages_k1193754757 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1193754757'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1193754757[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B5A0930E239B4577816FABF6EE9B75D4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A01EB5B63E9A40A69F1E0A334625E2D6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F1283A6F23204F45985E272DFB90B1FE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4E1629902E3445D883373BE133C556A1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/494C8ADC34D0494FA1B451CC35FEC37E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E16A799A1DF748A4B10D61E482F30CFE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9207B14529F842A396534A67A51BBD05' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F39EAC17C4CC4842982F333E4FAA7310' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A2B4C69D274046A7BAF6AE9565966267' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5A403769331F43F98639F1E1865DB124' }
      ]);
    }

    const existingImages_k14589499 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14589499'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k14589499[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/80a5647e3e98a342caeef74ad9f996d55030f1fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e7b749e91c1445d31946481661e4dca660ca943e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dd329d33adf0f52122d213f8da925bd5101dbafe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/446554de6c23735d5e0387be33b370aa7c18adaf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d745934381b680d25efff2133a3ef256e21ee7dc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/330c44c25af002ed70f943176d861e0a15b61a0a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dffdebf6c89a415291a92a9fd0c227543eeb1ff5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9249925bb033999f9822bc8b86cf9cadec6fc01e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6ec80a94faa3d8cd70cc73bf06472b1a7346279f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1def0ea4858280591039c8bb29fce9d0f315529a?original' }
      ]);
    }

    const existingImages_k1709704120 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1709704120'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1709704120[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BCB9F9FC27894F5080A77EC19CA8B95C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5D139F2F08754E119BBDBDC3C4589610' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E5592B61790B43FB8AA7FCA9D4F6BB72' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A7E5CD9259F54F60920DF3DD50FC5B74' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/02A5F1AE6EBA447D9829E90381E83FE9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/49a8e899c92655c9114e0e14f717880c686587d8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/47d53476005884cd57f6a729214f2c1d0ab64102?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/76c9841b54e0d0f6a7ce58848c75425c45b86326?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d2f086de6ca359eea3ae4efd38e71eb1f22df66?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c4f2e2e7d97927c8444031db4f5ea683298ae713?original' }
      ]);
    }

    const existingImages_k1083248979 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1083248979'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1083248979[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/547864F3979142F48986220F57F81B69' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/02c2c306dabddcd54fa6cc9e91ad87ff78b7e4f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bee00f120dd20d415333d6b1504ceec0b632aff4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/74412d3ee247ab3ea7e36bf1e17e39f27033c4548b82454a5f9d22d4a7531b1e' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0ff93c3f3f74d6593c2ad7b6a2b0f542dc2bc5c3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eee3899b32d0b1843c8aca9b359a2c359849d667?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/76b02cc71aeb4d8587650a7302ffdc09af2c4405?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b31bf12d5d3e6f354a7f5a102c07d2ff6ce44581?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac6bc39660dc78f8e2d7c6271e5abaa168b1e45f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33aaa67cd1ddcf36eb0f29d0f2d51a94a3b8d850?original' }
      ]);
    }

    const existingImages_k11097979 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11097979'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11097979[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/165F784F4FC425780B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/175DA74F4FC4257910' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/185EBA4F4FC425780E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/115FA34F4FC425780B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/CF13D886AB134AD1AAD97D47DEC9CDE5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTE5/MDAxNzU3MDc4Njc3ODUz.E9SSfV02VYUQzXioFTULTiLTAMq4KyKjHfIqGrGIxwwg.38B7pnmwIdVahQ_fyDGvv32SQLH5Wu3S64oeJ4d2_fkg.JPEG/IMG%EF%BC%BF9139.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjEw/MDAxNzU3MDc4NzA0NjM1.8S5A240w6PTg4KyIFZHpYWzhytD6Fgq7fZa5myJnAqsg._qDqXvhvF5FddFldWD7xKF-3Ly7_nWzb4lvx9UcTIXwg.JPEG/IMG%EF%BC%BF9167.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTU2/MDAxNzU3MDc4Njk0NjI3.bu1orL_oMvHXbuFQXvhnFQRnd9l147e37mnz9_KARmYg.ajTSNwQzsuSOKSSDWQsEkOZQ8ppwMX1hKeQXuILcrhYg.JPEG/IMG%EF%BC%BF9143.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTQx/MDAxNzU3MDc4NzA0MTU4.bdXbKFbA1o83qLDgGwt56D6K65-nLdAI12FYXxqd9REg.QZ9fqlC2DMn6iSg7VWosk1WRGfuYOhWVv4YrzLudgy0g.JPEG/IMG%EF%BC%BF9147.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMzMg/MDAxNzU3MDc4ODE0OTEx.8svjvcb9ahKS29D3bIuTPHrw6jklsYoksCVxQXibhRUg.chLqScL_HUZyV_PGGVJmVTWOGqQMJmZt8VAonndcGjIg.JPEG/IMG%EF%BC%BF9054.JPG?type=w466' }
      ]);
    }

    const existingImages_k1857322630 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1857322630'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1857322630[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aaefc5b0bc74c52798f6038e5144517606fb08d2573185808c606f38def07c5f' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ae4345bb7c2cc8dea08202556c4448f8724c1acb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a4fe60009424145344b7526fcb5440b9bc29bf5a3a72e9b2c7db40e2a85e1921' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/56d54714d5beb4d35cb47b8c7816a07ade506098af48ad82efe60bfbe8e0f943' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c11478c64add9b7a16322395e45066e0f14b5b31150c915c8532cddc5d0f2232' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMzQg/MDAxNzU2NTk3MDA2MTM2.0llBfEH2QtvGsvrgORwSf3vEFd7ftST0IHC__bNSzzUg.Cm4p2eX8k2L1YJhfqK7drJG8ZamYiICButTA4mq-fTcg.JPEG/IMG%EF%BC%BF4159.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjQ1/MDAxNzU2NTk2OTc0Mzg5.waPvrF9InPgROQlWDzzuCFhYoMgwKU18OVHtbtvZYYEg.L3GvutVLNwaW9SztiJKRdZgDauG-k2jijTp4BpdrD_0g.JPEG/IMG%EF%BC%BF4160.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjQy/MDAxNzU2NTk2MjAwNDE5.n7gSSFADfdqL-FNv1KtVrke7ARpPeJDdh1bBWcA-ELEg.MDByrh_-BortWCSmnHSo6LH0RJaRc38Ai61Sfwl_AGAg.JPEG/IMG%EF%BC%BF4143.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMTIz/MDAxNzU2NTk1OTQzOTkw.4jWXW0amS7tIfybEGrLNGwKaZHc5LdbgqKlyhGSmtS8g.9qY_lBl_3dkwaquVRHmYuk68QiNMU70MZ9IjjxFf8bkg.JPEG/IMG%EF%BC%BF4137.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjg2/MDAxNzU2NTk1OTY5Mzcy.PRS9ka5o7VoVgWyJHz9nqbBuom_sNFOq3tH8Cb2Nb-cg.4eGqgqAiAv_Smsac6Xw4kijWaESS91nJhGLSGk0BckEg.JPEG/IMG%EF%BC%BF4139.jpg?type=w773' }
      ]);
    }

    const existingImages_k410451556 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k410451556'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k410451556[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3658503a135bce94ed5cdfde756306ce74a7f71e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/072db29a378bb4f8ed763c5a469b27a97eb6682c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd502b642e803fdd80365137675d69f7008c74c5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7cad2c1f3637e389e7626ea04b9a99cadbc606a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3ec0040ead0e1c7b4367f736bac2f0018608374e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTVfMTcw/MDAxNzQ5OTc5NjUzMDg4.apT25LMFMJOPtkQeuWjWJu6MDGv23uTpb5TCC2I3wVAg.0rhqSRyJI469w_xlnlgBn1eg5tWNlwyweiYOgNJctqAg.JPEG/900%EF%BC%BF20250615%EF%BC%BF123620.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTVfNjgg/MDAxNzQ5OTc5NjU0MDcx.uYQADRhKop_UJuX3DhKqfj518XaT1N-tJE4XnjGmssUg.6BZUXPbA0Cij4DEpS4MvLqlbbtTKbBpJpp1AMWD5CNog.JPEG/900%EF%BC%BF20250615%EF%BC%BF124556.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTVfNzUg/MDAxNzQ5OTc5NjU0MTgw.AH2yWIqyAjOOosZvxfXeSrnN3nrENIMYhrju2xykG_Ig.CSGAI6aw6z4sZMvbmsQZfwhoiLKsoyN2BkAfBsV3SKMg.JPEG/900%EF%BC%BF20250615%EF%BC%BF124645.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfMjEy/MDAxNzUwMDU1MTY2NTcx.k2IBmAQJuSI5ExAKIZyMN4Dn1wlXCJt1egXkUz4nhC4g.Q4Hap7ZzgLzEl1ZrUJCNyOrUo6MgizgDCSZviFd9EoYg.JPEG/SE-f32f4cd0-49ca-11f0-9ca1-450aa4b126ae.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MjRfODIg/MDAxNzQ1NDc2MDk1ODc3.wl9XMBzfIikTIFA15RriGkrBrswozKT6lOSc5QHYZS4g.A2nlrYLywsaELioqRKkavVrIr_OtLinP9Gaw37bCR_Yg.JPEG/900%EF%BC%BF1745476091598.jpg?type=w966' }
      ]);
    }

    const existingImages_k1217276251 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1217276251'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1217276251[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B95D4A4846D644B9B841D7E705723604' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/AF01850F6E7A473ABCB5BD1ADA02E820' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/87FFCE39753445E186AA6F9FB17A69C1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/1D455108A4244845BA52BBBEAB486909' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5F599F0172E5465F8B37A2E7E491B5F8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/2D028D6C3F1D4CBAB04A965367E02414' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/7FB3014DF3E74110A3A0F1A68D88012D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/EE50384D4BFE49AFB9A9BB138D43A7BF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/4703981B0D6343ECB166F3BEE1FDCDFB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/0D80D9832F46481D8FBD65AFC1796725' }
      ]);
    }

    const existingImages_k16145833 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16145833'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16145833[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhuegprBg_mctAjaeY8JHhqieXhRFrHk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhtyGVAK7_vM0aFH5TiLYRA3qfOZ1GRK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqhsZyLrcq_AdsOGwC2lpTavioGMqtAPK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjg4/MDAxNzU2MTczMDE3NTQ0.uwDfi38XSCMCgvo6EPXsjCVKsHsHHmNAOPkDJ78wqF4g.su0e5-QH0PStZ-09vPv3g3E3ya0svLJ3Slu-3twQ8mkg.JPEG/SE-14592961-0811-41CE-8303-6A0E3E4E4469.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjQw/MDAxNzU2MTczMDQ2MDI0.LZfa6v9e0NSN5E-R4GFB_JWP9-Ms2q5BxwYSVq4o1W4g.4x8Mu2y8pD4BtoshzlkVOYdaF5bqC1lcLbabUIKZx7Eg.JPEG/SE-C6604CBB-9E5B-4020-8047-E55DA9224F13.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjc3/MDAxNzU2MTczMDIwNTEy.SH7JlXCs6JhmN0QW0aSR-_8bfuxL7H4a5ZRsj3U7gaEg.OQLGgo7NiMa9uDL0alKsscILtZHqDE6AsbXgQ_O8n2Mg.JPEG/SE-B66F5CA9-67CF-41C3-81D5-8ED0C8331054.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTY1/MDAxNzU2MTczMDUyMzM2.J8Lj2UpyTyj5yzxdk4JmZq_MdOzBt92hJsxzYhpf8bUg.XsKYJuFxRKtbDR1ALTIHPRmywdYiWdxDoeNIsvGpMYsg.JPEG/SE-70A9009D-CA39-4261-897C-AC30BD0F7796.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfNTUg/MDAxNzUzMzE2NDEyMDk1.5ZPor4dm6ZzI7NKXRuZv2MNwcs7ccqzAHgZIkWp6di4g.nP4z2C-NXvO1Pd_hadWAeQGD62UeWSajqThivHbgSGMg.JPEG/IMG%EF%BC%BF7926.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMjYg/MDAxNzUzMzE2NDEzMDUz.-nBvF90jVDCuMWwhuP0LYksIStJE0e7s5nAexbT4BZsg.ZxBU8ypLD2B59aX-ZmRIt9F9-86qdCwJK9hHM2ENWdMg.JPEG/IMG%EF%BC%BF7923.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMTI5/MDAxNzUzMzE2NDEwMTY5.eI2BHxYGo53QkAildd2D8V0HUV7M3IT-UrpReuIiuFYg.XizZ7DKbc_-aTb00tbc3CFMWNNETSaQLsiIjthMB-gcg.JPEG/IMG%EF%BC%BF7940.jpg?type=w275' }
      ]);
    }

    const existingImages_k13095795 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13095795'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13095795[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9eff88c4535c5a316b3e85a1284e0ab25ae7096d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3105458dbd75132800197456d4eff209da2d8761?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/66c5c371b3f79b2263bb5e4888a8cf39942f2415?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cebfa40d7eb5a836dd1baaac22f18e5a50d7274d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9833a5010620cd4b7e2f53a1ffae3de16cfedb2f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f0bb788c563a4e9df18dd65d9c3106b4c9803c6d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9d1ec038df07a425096a249649c2aeeb6fc59f4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d59e8602b4df568b2edccbadce07615f1a0a108a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b3ec1cd8126c2738294c3267cd07cce9ba734da1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b0c8415ae427877a22d2a8847f7ba628c9c72d82?original' }
      ]);
    }

    const existingImages_k981353914 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k981353914'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k981353914[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f8817417f117d58195e00d0b93a0ff049b83d98?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ea0702f6118d4fffd71cd3959b1c35670364175c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f097627c0d84129a8fa6a5d373a9a851c5ed3215?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/87a16ebad09d123e39baffdfff846a9c474e6747?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9cd8d37459928f8961f7b68ec940c309c8da69a3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9bc6d71190c955f611b24e9e179f973db4a5cf98?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9acd18bd6593fe4b5d9b7238802ebaf27054262f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a1f967f16e82335c8f39b5dc19681d93cd8c6374?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9bd92195c3d0c2e909510c02d910626dfb0a08bb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a68e65c29fb0cba8cc37d5b988b7041b4bbfe563?original' }
      ]);
    }

    const existingImages_k10228541 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10228541'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10228541[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b54bfa7ded9629edf37fa0b4c8decc5a8b775be7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b85d5b06d0a54dfebca964e4f15d08aa7fe5def3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe04bf5bfc03a8c89e50e74d353c146cebce5e45?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f78cd31d1abf096442e3dfe9811b7ba7243289b06391b2dba42658335676d14' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/825230450c747699021232f46945d99d7fca60c8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/738653ac3b3a90169fa897466a59b683d1225468ce225f04d7cf42c2bcbb6df4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/102b58f62b6e4f2ebbee57841cd44db6638ad0956149c301bb33cd7f7070ad20' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/14e0fa2a8b7a778eec06ae61880c9281590e604b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqjCYcsFqx_79EU15Mr0gjm7YrdEk6Jn1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdYvAbnTg_2AO5Ks2pqplKZeYjhuBcLk_img.jpg' }
      ]);
    }

    const existingImages_k8743858 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8743858'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8743858[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3B5B58664D884C0989CA540FC4E06BC1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4E44561F00D4434598ABAC7713C1641E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/A4F5C0AC938049819742E227E1761FB6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/002155EEC58045EABD2CAEDF0B1C0DD3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B220A8DAC3954889BE4F34F04BCD1625' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/27D54CC2ACAE4A36B6AECB7E5761BD22' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5EF01B1850AE41EF9303ADD79BF507B1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1EE54E50268449D1B39A906C82D98398' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E18947A7652A42A1AD8138A8417E0F04' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B1E84CF8C3244A32A5DF7EE7A0E35143' }
      ]);
    }

    const existingImages_k8476761 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8476761'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8476761[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqjBAJxnDL_Cyy93nmcA0aealKoPdBAk0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTlfMjQ2/MDAxNzUyOTMxMTMyNjc5.DTDwC4CH6v-rMYOXnd86gmSVZuyDhvdMA5zMkZ_ZY2Qg.PjQgdfaSsOP8QCZM1hJ_1hM_KepJCoFWCGoG337TAnkg.JPEG/KakaoTalk_20250719_200723633_06.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfMjIy/MDAxNzUwMDczMDI0NzA3.S88zFyDOEodnPE0FVdI35VfbvJkM6Ad3DiSoqS5QIY4g.46ggQ_tKF2PE_UYuXSwgOMxjkFHpUCoxY4U62zMMc10g.JPEG/IMG%EF%BC%BF9227.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfMjgg/MDAxNzUwMDczNjYyOTc2.BGe2yx-0nb0xeUEpbCGVnkZRBM9ub7a-FEKiVn_fNsgg.9yya5SbdXPx3-QCBl3NnZ-YS9MXUmORlfgJVmG3BKIEg.JPEG/SE-BBEC4B7B-B650-484A-861E-6C854EEA9501.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfMjY1/MDAxNzUwMDczNjY4ODE3.1aMcfOxhqeCkMAtj1w6GIpzwoszndYRmZaWd7NDFdnMg.Dc-5PSiaG4Aqw2KgQIzVMH7qCz3Cvzk8RgkaV7ItEuwg.JPEG/SE-DC9D5823-8CF5-49CD-9178-7AB30809F9A8.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfMTg1/MDAxNzUwMDczNjYzOTIy.TK7lEZ8GozbzXqXplwqo7BVoIHS7njB8QgLuGnJ8IwUg.aD6FT4iNuJrC4r1D2s67pr3DrZ-dM9PJnlUB6wR6UyEg.JPEG/SE-863DD50E-A6B9-407A-9137-651B2B1EF17A.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfMTA2/MDAxNzUwMDczMDI2MDUy.9VzpxZfbANzwL5nx49YGr68yNgQDvwFrtesYixr0Uzkg.SW4CCGGdR_SnH8Xbm_5MjIcjS7snTIaui-a1uxVNj_0g.JPEG/IMG%EF%BC%BF9221.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfMjYx/MDAxNzUwMDczNjY3OTc2.esqmRuIJKym5XdfvH1UIuXSgdg03XaSvQY_mUlSvfjEg.JoEB6yoHuBslt8pCATeoS3O2HoCchHV294cIJDTXq5gg.JPEG/SE-6958B8E4-0280-4AD2-91FC-D13AA7B1F20B.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfNzMg/MDAxNzUwMDczNjY0ODEz.Y6gb9upREgjd6qm3Nr3lwN2ibiKF0ip13IwQsiCPJu0g.h6lzUU5snTeoPUVKOQU-Mz3fugHjw3d5NxWeI8KiSjQg.JPEG/SE-2DA1E4A9-1E4A-4781-87CC-7978A550BE39.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA4MjlfMTM1/MDAxNzI0OTEzMDIyODE5.eUEfjg1SIj8S30amPOcX7I7UMr300Xlzv9jBHbE6O2Qg.buFlpRApibaTlk7YsD09cenN3x9AcQRJUUugTT05DVIg.JPEG/SE-865fa2ca-65c2-11ef-a070-378d0ce38261.jpg?type=w580' }
      ]);
    }

    const existingImages_k8108863 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8108863'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8108863[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/57FE5EC9A7064777BAC8D04BC1116A9C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/811DD91DE817473A864B02157C9AC36B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0AA51E94BED445D286956105946DF0D4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F9511272C28D4E41AA7D0E67F9A7CF1F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E761F59EC98E47048867B93F9FBEB13D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5ED63C5323144CD99C4D94FD1720F12F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0a8c4eb4924802cd72bd467a5944e710a921d077?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/47c9ea99df9aa4fb4dd03a1743960556405748fb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/81a745b7fcebef8d31fb7387e5d72fefa8daa4b2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e0bb96c27a5095edc9ba0934ae20b72f4a952f3e?original' }
      ]);
    }

    const existingImages_k10968167 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10968167'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10968167[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdda97543475583342d95983f941c9a8d0e4ba7f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd1e1cca4a963fd0f9bc06f49d5505982bd84385?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/85440f34e009582b77d62924e222730255df7d24?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWajwpz92I_s8O9PUgSI15JmUqswVXCO1_lkageR5EDcE.jpeg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjc5/MDAxNzU0OTIzMDkxODQ4.JY9F3mKQleDJq2P3lYiwH9NuOpD56NWo69HgM2ycPbog.-wytcSvfs41RwMkRW_yC9aifQ7XXVCE2_cv8e4dPOxMg.JPEG/IMG_3190.jpeg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfNDIg/MDAxNzU0OTI0Nzk2Mzk2.posTcYdqL7v5gwoR7jaHM7WfdYdtk3cBR7CpowLxM-Mg.89SSb4OwcnPbQEwjfa4cTu_ixfw_t1Bbti03R1-0Plwg.JPEG/SE-d2f606d9-1d48-4c7e-9060-a85f226be3b9.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfOCAg/MDAxNzU0OTI0ODU4NzA5.T1AWO2zojw548v_TYmP8jzatpPQGtI8OBESGMxsm5Owg.gI3MO04Gb6m-xvyLUton9Ii_JUxjEfu4GhM10gy1vR8g.JPEG/SE-99c7b157-ddb7-4e86-ab5d-a836ae6170fd.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMTAz/MDAxNzU0OTI0NzcxODcz.rYL2pUXaUvITWk8f0tv58hMPZCWUD__7ax-hc5I3Wb4g.G3ZuwQYL9LMtiRkjsAfVWVfuBiLlGPG_07ZkHJJ9W8Ug.JPEG/SE-6b0425dd-4f0f-4a1a-af27-b8d89e4f5891.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMjYz/MDAxNzU0OTI0ODM2MDM0.cxwn9iOjR_AbYuoCwlpDSC7chTMk3oGEoe8e1tFaW3gg.0Tnbh32nH9HaF48g7wRAhp1EEhRV8Qc3M6nhDeezfhUg.JPEG/SE-bd29e79c-69de-4a25-8f53-ccf1478c8656.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMTU3/MDAxNzU0OTI0ODg1NDI1.wHj_o6sQG3e8mLufRrYK-75Q66DIU8DjASOAyLoTzVkg.TTia7gSwXmiDnvGDip-CfdMUTOZg297kkMmORmiof_Ag.JPEG/SE-ed98fb5d-fe9c-405c-8433-b5892f2cab05.jpg?type=w773' }
      ]);
    }

    const existingImages_k15300915 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15300915'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15300915[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6027bcb34b810e107b1a7ac514163e8cc8ef4990?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/225424b9cf7f162d7bd2c4c41363d616e5bcd276?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e0f87ca994ec7c43fcd2061aabb4dc7669722be?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5e128ffa4ddf5007e515d5b9345fa5b73c3dded8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83821a8353ab2d2e0902fcc2a2b188163e170596?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/452d9d2cdadb3cc7681dc4c1d377b60ad2fcdfc8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2bf41557518ad48effc3193f0a2b7d1b185e29ec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfODgg/MDAxNzU2OTc5MzgzMzAz.ioqAiR6xX5iVf4ZjdGMmzbNVaPc9r7Q0pWoeivsaIbEg.GAxkwUeHiEdMRZ6j3-LBzPIQMjVdNhTNZ2gkDCkicxcg.JPEG/SE-77a8d22a-0fb0-4297-9440-8351b62b2d81.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTBfMjA4/MDAxNzQ2ODY2MDYwNjg0.9TDVuBSP_YWxfT1yGCLseJ53f2eJ5YOGtlaXqxrAxxIg.z5xeZViRgTM4YAbdj9jKPxna-BciJnUOL8rCxowQMccg.JPEG/DSC09539.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTBfMTY5/MDAxNzQ2ODY2MDQxMjE3.m0qEMOKG6TvrCp9yijsJMkgDBkQLSEWG2XVTV5L_4JAg.S-cfwtS0s0E3wMk5lV1lNUFIEsFsTEQmg5HgJv8Iidog.JPEG/DSC09536.jpg?type=w966' }
      ]);
    }

    const existingImages_k25430330 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25430330'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k25430330[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D6318B1A0B5F4E2796A60D3FC5A8D269' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6E9206CE3C2142489F36BAB7A358B718' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/068A7F814CCF4371BB27AB12CE987AB3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EE85D329E2354D1D9D1F2CDA192FEFBB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/285328B5920C43C5BB965A6A803D279E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BB5A0D6ECC4B40FB9E925C8827646057' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6E24E8BAEF984B7F85C8F965A3E3856E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9ECB213AAF8242BCB1AFAA19699E291C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5BCDA12E24FD49CCB0CFD5D1234D397E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5AA8D9AE5CFE49E096CDBB51343EE6D4' }
      ]);
    }

    const existingImages_k547879658 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k547879658'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k547879658[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6A4F5C0B6ED042C69E41624682871600' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/60B29292A485425E961481E80BEDB9BA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A0B6926047954280964AFA5E800850D5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AB73C5C8E41D483B8E26E627842D760C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/737CD4FD90BC475EBAE55742C11D1AE4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/94DCBBF6A9044A0C9241FD72721D9FD4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjE5/MDAxNzU3MjUwNzYyMTgw.Ue57ZkYJnT1D36HqJtUdB-9R3tmnpFubFn-lestntKQg.Tq8bCwLJyIv9PHccogE4a4lcJQzTpbx29zSfMhLL1x0g.JPEG/KakaoTalk_20250907_132339643_03.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTIw/MDAxNzU3MjUwNzczNzYx.U2sx5uWQyrovoOidvYENuoa_01etcR69W9M_QK1bwscg.gxLkhPH2DUKNKEuOHPwIr6xtszx3GDZBF8jXPmWgiY0g.JPEG/KakaoTalk_20250907_132339643_04.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTA1/MDAxNzU3MjUwNzgwNzk3.69u0DhR-VErazj5hY5MNrBom-PMmqeTiIt4SeJmnmisg.HYihBYKksvZxsaEWXt1zhlp6K6q_O1CbE-Eb_oPoXdIg.JPEG/KakaoTalk_20250907_132339643_05.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTg0/MDAxNzU3MjUwODM1ODI0.9hSfTsyvF7PK1v8bxmPqPT9HNGXyDh_NXxBYa4bE7-Yg.4M0Iz8F7va96Oyes-Jm_G0Mojo0JxLGsDCyelqjryB8g.JPEG/KakaoTalk_20250907_132339643_11.jpg?type=w966' }
      ]);
    }

    const existingImages_k44689514 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k44689514'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k44689514[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/24D4300BFBD0499A8E10C575FBA192C8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/E14F37F002394EC18F8DD184A2A4672B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5124781c054082b620f25bfbaebabf5b328b39ad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ea296f74bbcfb8aa7861df33987c525ad21144d4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMjU2/MDAxNzQ2NjI0ODE5MjU1.WGjtwguoK92uAFWJxHJVoybqP9OB4nzrfe4Z0YKM-P8g.7lo1nThRcEQJmwVveHrRY9UMq2eZq039ZdocKsqPx3Ag.JPEG/%ED%8C%94%EB%AF%B8%EC%98%A5_%EB%B9%84%EB%B9%94%EB%83%89%EB%A9%B41.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMTk5/MDAxNzQ2NjI0Nzk4OTYy.B8tI2sS-5TNwG7r8dXhNy8lCe97Cy7QxKjl6Klf5JOgg.aEc9bO6Wcg98fHzOXWM6IuHT17i-9mcTG2UPlrkh7vgg.JPEG/%ED%8C%94%EB%AF%B8%EC%98%A5_%EB%90%9C%EC%9E%A5%EC%B0%8C%EA%B0%9C.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMTc3/MDAxNzQ2NjIzMjIwMjg2.-kG6Ab8iriUyWdvMYFOiB1E-XcGRyKaV9PxOZOdulqEg.l0lWojvigA9axlFAnO4oIE7VIn0R6gDiWx_v6RXsYSMg.JPEG/%ED%8C%94%EB%AF%B8%EC%98%A5_%EB%A7%A4%EC%9E%A53.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMTYw/MDAxNzQ2NjIyOTE0MDk1.e4wM9Fcmq_mPoSFB5tbYJ88Xg4Rjc2LGLJW9rKnPYI8g.wDLs_9IiQ22bmbv5f1HD41KlnhAwV_DAK7i_CJOx868g.JPEG/%ED%8C%94%EB%AF%B8%EC%98%A5_%EA%B0%84%ED%8C%90.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfNzUg/MDAxNzQ2NjIzMjIwMzAy.ho7qt_zDNEvx-Z8wXKmSX4o2XKFbSmdSD8yieGJYaEgg.t-t42Y6CuyUAWrJUC2CO30KB7AY8qZHwKaxLG75ggx4g.JPEG/%ED%8C%94%EB%AF%B8%EC%98%A5_%EB%A7%A4%EC%9E%A52.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDdfMjAw/MDAxNzQ2NjIzMDQ1OTA0.h8hcSsX2YSspbvdNU2NtuOEFt3SGdCJsGOiTnOK0Zpcg.V8qpO1EImcEhNoPWKNWNKzTDvx47R55Mi9ujn1RDECkg.JPEG/%ED%8C%94%EB%AF%B8%EC%98%A5_%EB%A7%A4%EC%9E%A51.jpg?type=w773' }
      ]);
    }

    const existingImages_k27418130 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27418130'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27418130[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/886240deb8d5a4dec57b101add2441e0b8887c5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvpqc9p99x7xab357t13t7km0/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33309866337&kamp_tidx=0&signature=l%2BCiZPnZda10ksagreTRLDCm4GY%3D&ts=1752957537' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/68adeee6c16d4ff09771a953669f7a793bb0b798?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f42a3a6580bbbc5dfe705987ae48a3aac6e3d43c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5b57a5f744d7cb49f38cdbd1a2e3c6f5a64ae34d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eccaf52a01854403476cdae1d31df1850962c837?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c444eb06455c7b98a9a8cd2ce6e156d1e2f25d47?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9bb3c5a8bf172983be838f0f32afef3c90b5b776?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8737c75766f41ab4b1bcfa26bb6844cc0fabd3f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9571eca1a11dc49aa28f3d87578deab115da51a7acdc5ececfa90a693d65060e' }
      ]);
    }

    const existingImages_k1657771872 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1657771872'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1657771872[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5C481722A4344785B39F97B76CCE76BF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a763159eae223e3a6708691c0a6ca095c4277d7e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f91ac4dbef1ab99e967a94feba63ccde5377cd28?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6157dc93e3e7ab64b1fd5564fe0977c066e2e054?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5750596bc457b38de9d7e6b5b17cc032b04bc145?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dc600a24ed5c67d99bd87591849cf0b621f567f2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9d2681195e70188b947a361bc94d0459abdccde2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ccd06915f63b7e1127201ba83b60ae2f3aaa128?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMTEz/MDAxNzU2NjM5NDU1MjQ0.6yRImMvQxW-IQw2i7TJ57dExEy9R5tX2oKJuG0vMxCog.NXhDVAobpeFqQCM3u-SJ_Q8xLbrWewFeClqA2F9hJtwg.JPEG/SE-d627c92e-f955-4177-ae15-8dcc7573577f.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMyAg/MDAxNzU2NjM5NDUyNDI0.oNK51W3V0vVWa5mFSHm6F9OegRI8vZMZbVv53voc4tQg.EiRNEiyPUnjrCqDEHJKOw770zF-eC7_wpac6nAZSEZMg.JPEG/SE-deafb1bc-18a0-4a01-8e6b-f84d2e9372ee.jpg?type=w773' }
      ]);
    }

    const existingImages_k730256197 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k730256197'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k730256197[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9E9E31BD48B149A2A12F5F66390D2948' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A274EB6C8E354F1BB958384F83120E6B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C5CDA7E4C2724FE790C63B43A8317522' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/15bedb08ba23d8e2b15c5af9082a1a68e0eef0c6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0d76197190e305c01465c3c605aa20a67bd7bcb9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e6ef689edd8555ce1c3eff6d927973d22be2dc3b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0102732933b58b1bb64c6370efe00920904dbafb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ecab93052e8d08cd646f42e347e66e68433f424e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f8b710917cb7a9e4a31e8840c269570adfd3824?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/76bd389936d2aa3226e82c23edc2333ca9b5f752?original' }
      ]);
    }

    const existingImages_k652267180 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k652267180'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k652267180[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/E08DFB864DAB4371BA443B43E55B8FB7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/18E9BA5208934147955077A5B5CF083A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/6718D6BC0BE1420A82542A7F5AA1F4ED' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/BD5D853F4A3D43F3B3C738114DFE5751' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/DD9F34E1133847418451775B6141AE14' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/F44D11E273234B7CA2F6B0841827A5BF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/FAC2D13791B84FD8805E9480B285521F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/AC0BB954AAD248F99E156C35F6CF1327' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5BEA7AD1EDE348F49D9363BE6737BD00' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/ED80427B3F0D487294346431D0ED7471' }
      ]);
    }

    const existingImages_k11234505 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11234505'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11234505[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c27d772291208eaf1a1c6b403053a0bc767513f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqlDbgfElV_MShhArXwHENnMlOhJMMLWK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqj0N89Svn_o3hPHuuL8OKfDZYgFIekTk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEwMjdfMjMz/MDAxNzMwMDMzOTMzNjM3.G2TjyLIms8_pE3ZA6LUXfTvgb5Wld2LQ0i7S6x4mP5kg.blPx4MTdEFpbFhy_8S2YsEekv-kiCoJDHGyEp90Br2gg.JPEG/output_3316506853.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MTVfOTEg/MDAxNzI2MzkxODEyMTA5.e9aWyvhoDQtbJKizam-lDYrkbgzgY6eo1wNePnksyW8g.6JZsTaJgw8Mv0FBrgVWXyKRD5OHrv2Unnms9OsYVS9gg.JPEG/IMG_1976.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MTdfMTMw/MDAxNzEzMzE4MDA3NTk1.G35rHkh0IWPA64RhQdsUHANepnAgksxPqQLjdXPDgqwg.3JB7qAZldhof4abwZeBBh6svn4ePCO8BbXBy2cjOMSsg.JPEG/P20240403_115018648_8F4DA859-1B00-45B9-9451-E68ED10C6B5A.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MTdfMjYg/MDAxNzEzMzE4MDA3NTgx.RqpHiSNzbFNMBZCC8ij40xPZ5MOm2bXrODU59JkzqXIg.1TMYZAFGq2-rE6qkaWwoJWkz42rvUHBaaJDupCe8LiEg.JPEG/P20240403_115015989_D8DA3978-63BE-4A17-B577-7B896356009A.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA0MTdfNjQg/MDAxNzEzMzE4MDA3NjE5.EPdSqnVCIgKDflbLluxM4qmX0TNOm9njBgZlEG0hKyAg.w-BjTGygExdKeKBPGQmPrEJgS2aC4K5FpOBYMAI3Utsg.JPEG/P20240403_115216507_59C06460-ADA3-4D2B-9421-97240C38ABFC.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjVfMTA3/MDAxNzI3MjMzMDA1NzI4.i66Br69ezjsJ0wVnwIgR0FRp9OvKADeeLRm8y_7QQkAg.wZuJz3I2b_vAsaQD3kKUfPCPqPm67tnwQdH4Eyk2zMkg.JPEG/IMG_6582.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MjVfNDUg/MDAxNzI3MjMzMDA5OTU4.7yUO0up15RXUBw9-Z4sRTwvQ1oJsv6-Ij_Ejr46Azk0g.e-Lp6x7lRXkFQAhL_3eCibr6mLMgFzUNEA0pqf6W0r0g.JPEG/IMG_6583.jpg?type=w773' }
      ]);
    }

    const existingImages_k8568222 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8568222'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8568222[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c6974562b079fe49d50a16587d55689dd784ce18?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/973b2adfaad9ac58a5fb53782a69a36f9003b1e5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e6d7157dff6e2a795cfe93b13c4c6c1720bd9c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1a115006d780bd00c95212d13567c99fb7fc63fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/72c77b61103fab96fffd6aed9814f04e4550fef2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b2bdf5b676c05912e4cab9b4d1c61b864c6154e8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edffd5c354e856c812da73465a39bfcb484dd799?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/13c4e5ad89d608b68d11d905af8dc75b7135c3fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3e8576bab1a7356c95b3af00907a1acfab99ff79?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e503ce64cdb555ef02fec05236df3925cb91abad?original' }
      ]);
    }

    const existingImages_k406816688 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k406816688'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k406816688[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9271be86936311cf4ed500507c547edd9c9d9fd5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/87f0a24ec069baa177e43696bc0a7f3762c1e6d4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2ceefa09907b63b8813245ff175cad2b9cc5a863890a46aee245ec92e6508c55' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ba22ab41204d53b32eea76a189521b9472570991?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aec622ace9a48acea25f5fc910a256ad2c13e3da?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e07db0e480afc378eb363440fb439bcb2276b7a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6a00406dba61f0f755938de2bf3edb1b58d4ca7a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/221b53d54be89b64ce98fc8f989fe6b4abbaa745?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4ba482558bc1081934ccfa47beaf8ed8e95c22b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60b7c5b000d9936680f09a940b837f9d0259b59c?original' }
      ]);
    }

    const existingImages_k10091038 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10091038'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10091038[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f5db91fd6c60dfd1fb58b27032e040e614293237?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWajsnbFuN_iTufXHHK6AKsh9ynPGtaZK_lkage5eFN6P.jpeg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTk1/MDAxNzU1ODMzNjU1Njcz._b9D9jmZ-H4Wl4ChxOu9Wzfm0MnnVJf0oc0MIdo-E-Eg.gq30GSNKZoBM_pqkvG0HMM7mv5zBFHNByrMhhQbBIM8g.JPEG/SE-63E8925B-322C-4AD5-97FA-8E17DC45172D.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTMw/MDAxNzU1ODMzNjU0NDA1.1N7EtCEx-aBjIbeBgLS-UpNIDgswkrOpv-TRYbeY0KMg.dZyOgjvPzErqVeAsiWGu5VBKVgf4LQ1OFAJh9VQKa9cg.JPEG/SE-F6664F3D-4420-4024-82F5-8CA052B600C4.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMTYx/MDAxNzU1MDUzNDM5MTg3.GNulfRT6FbITGUtdCyTP6WPeC0nIioj5cnEcPpOPjPgg.wTwyT9vqGjteU2NIG_WickSR7bn2RQ5ui249A_J3ixQg.JPEG/IMG%EF%BC%BF0442.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfOTUg/MDAxNzU1MDUzNDUwMTAw.8KI3at4t5gnju7XWmOY8lcE5rJgWMXFvotfUdiuSuKQg.V_LlFCe_taaBuN5XluTL9sATDvaBuxhBCZOXXMDXGjEg.JPEG/IMG%EF%BC%BF0575.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMTAx/MDAxNzU1MDUzNDUwNTI5.rnZbbFTUwG-QnhDH_JUgU1sMZxMpXYrYS606SCi5NOwg.ldLFFhIDeeFvx9Awv6pHxL3rnGfEgUM5R3oYV9O5VG8g.JPEG/IMG%EF%BC%BF0574.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMjU3/MDAxNzU1MDUzNDUwMjM3.dnu08KG443SRSObB_5JGIiIzF54J19CEFeu7j2C6FfAg.89Wgr6EE0YTX3pC87iOAPSvCX0_j5OX8Fbi0zMRmkcAg.JPEG/IMG%EF%BC%BF0573.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMTgz/MDAxNzU1MDUzNDE4MDQ5.-8IpRRdCPPipmpaOE0gtX1SlP-X92huUIDPtOuVIxDQg.2iPaBVkhk6olN6ripcG2S5svI7epT0pJOxdK9qs6a5og.JPEG/IMG%EF%BC%BF0430.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMjEg/MDAxNzU1MDUzNDM5MDUy.1zLYU1mo5eTSX1pfQNI7XK1Hv9nlTti1wZPDKij9ovQg.ASkmYnpNpjwnuiJ6Yom5VlOXMjoP_-tGC8yHaT5cBmkg.JPEG/IMG%EF%BC%BF0441.jpg?type=w386' }
      ]);
    }

    const existingImages_k10745910 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10745910'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10745910[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa8bb281d80be2b39fb96527788efff701e474a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f04e5df58055a9a6b96f28562d04c075ba62d0bc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/777f8851aba4cb8708e9cf2dee8d82117b92edcf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34e81acaa7158d5a7956b316f032099af46d50c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/21573e7e0e31334e6baa0b7909c70a84e97cd476?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/051d694117ca1f099050285f337904be4798e40e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c868b879d86def1405e27b015b44c9f50a4acf2c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7518d706baeacd8c57a5fd29a8f31418cf3e0d7c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4fa2f123877d40c17de13b19e7c28618e3855268?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqsiPdXsj4_yByH5yWl2CGsxcQpmk6yh0_img.jpg' }
      ]);
    }

    const existingImages_k10744547 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10744547'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10744547[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34aad79cfd07ddc8fc3a0f197bb6cb7899de760b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b77ff64728f90f754145300df9b2b7125013d3f2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfNDYg/MDAxNzU1NTUyMDYyMzk5.AtF_nyqQGjqENmo78RZtogTL4-XzRrIWCGR18ZPsIhUg.KKR0zMM6KVLllyfu4LVzWhWyZ626pf6AmFjQz0IT3LIg.JPEG/output%EF%BC%BF1405411324.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMTc3/MDAxNzU1NTUyMDY2MzE4.6tg8P_ZHMDlC6NxQVeDMDbzbUmCacya6f1YkK7b_eEUg.SsKC9oQguW-Y9DOwl3ZcF79IBDCpzCx6BgzzI12zzlgg.JPEG/output%EF%BC%BF3205222349.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMTcg/MDAxNzU1NTUyMTA4ODU0.a_ocii4PS42Fs4mn5wPNz6ZouyAXCi9fX7FFAFN1x1Ig.j94EtpGkNcDWw0Bu9wndY0b-O8T2FVeZ24pUgsuqpC0g.JPEG/900%EF%BC%BF1755501842363.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMjQ2/MDAxNzU1NTUyMDYzODYx.6mUbPdRd3_J8feupUu5Qd1YnW4E9ap3deVU8jtqwfbUg.nbgefZga78AE1utMChjEXy3Hpt9jXf-1J7jEegn242Ig.JPEG/IMG%EF%BC%BF8448.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMjIx/MDAxNzU1NTUyMTA3MzAz.rlGNuzuC5h9aKBFvLCL500_-sPqIznJ7nRQBn_M1inMg.xSEvS8DZ8QjWvtuNYABjF9a19fD-EDnPAUSG_FhuJLUg.JPEG/900%EF%BC%BF1755501902854.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfNjUg/MDAxNzU1NTUyMDY0Njc1.sG7e3dQpNDjeWeHmpquub9W8fcKQT1O7K7wexaBk0bsg.CtvWb-ji92B6mol48uOfB7SzsPhCPaWW9aXegfB0C_wg.JPEG/IMG%EF%BC%BF8410.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMTA0/MDAxNzU1NTUyMTY5Njkw.kiQTLwpJNXUUnKBO30qWhqz2pmf_QcRiAZTkHtjN0F4g.Mww9bRJW1C8zGHELpwICQmoPNmH2dJ3Whc-LHX8-R2Mg.JPEG/900%EF%BC%BF20250818%EF%BC%BF112337.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfNCAg/MDAxNzU1NTUyMDY1NDQw.M7Nv-q8d9yEWFLkG7l2bzdm4fPYqFGa06h_DJo5Vtswg.6VeemYScicnB4d8Cx105m_OGW45YrYlJ2idrKN0VZxUg.JPEG/IMG%EF%BC%85EF%EF%BC%85BC%EF%BC%85BF8409.jpg?type=w386' }
      ]);
    }

    const existingImages_k470387639 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k470387639'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k470387639[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_259544535' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/57A54226BA7D48ADAE050B9CD7267C1F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E6AAC42DA5A3409BB21D295285BFAA5A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EBA0C0726E6848DC966CCC2AE581310D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/28CD07A10A4A40BDBCFC08DFB4BB9405' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a228d9ca752354681a51a3867ad72098d56a655a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1ad9d5b19acf1d4aff2a706722196c2986ef846d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8933090fdcae2d127cd711eda20f94d6daa6c157?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2da9b9c3650693edef2291d6aa4a27e9141528d6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/21db52da4bc4f8d43e2d011dcbb9931699750a8e?original' }
      ]);
    }

    const existingImages_k928936722 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k928936722'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k928936722[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E821BAFA12014D079BB3DAE21EE2CBE2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6DA90366BCE847C489C767FD2AE94EF5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0C4DFF9529DD41E8BDA9B83E8AA08807' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3E87727BF4404DAEA1CD2D225DF4D6CA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3F464C7D8B7948BCB84079D71D423F86' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D0B90A21C046425FAAFD0566FBC516A3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1403B78D07FD49C4863FE103A15DAF87' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C269BF528C9242FEB227EE4B0B88CD3A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/35A32ED3E8BC48C5B6C7D792EB6D8A7C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4A6AAD7284194411ADB4DDCEB1FC8725' }
      ]);
    }

    const existingImages_k8037122 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8037122'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8037122[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/83FF32046215452D9EBBDC8CFDA783C6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/55DE717B9A6B402D9E81F5AC3886F569' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/9606BF53F8504E009C436D0846791F24' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/8BCD7F2B9B234CF0919ECD20DFFD153D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/de3c4cb5423341a6f9d442b63a1bce20760e817e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c7cf4c7d8621b381db008a7c09b77153796032ba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c9f52eea95f0d201912aaeeecf0165a08eb433f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/edbb9057bdb028962008b759c4b085c3bb9ffb16?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7647b8b050fcb4b54eb89343665e7ae9ce958c04?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60a3ed3c7dd3d9570fd6a76b7aa6f2d72ea020ad?original' }
      ]);
    }

    const existingImages_k9287139 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9287139'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9287139[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d234965d440ed9a9d20b403bd64f96ea8553eb7b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aad4547006bd68078f9e6223dcd0856736635296?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/835f7ae4f3e43d41cb73da39575242e0c2a7d433?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/61e07a3f0422e537968afa6538d91bcd7516bf96?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60137150cbc094abc0619865d2ef85dcae951fe7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3bc8105a5075d611fbbbc3879885f2bbf1652b6b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/43a6b114319b1080c126c0fbf90df82f2a45e241?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe2be80f1a9927ed908bc95e683dcb73ac4c9a65?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/69fd777db7be3bbad2dd53f11478ab86eb7a88d9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a5b3db65134d71889d4ecc29bf51c57ffbb9a009?original' }
      ]);
    }

    const existingImages_k8022147 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8022147'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8022147[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5E89933887984B45A585C9E9FCFACAAA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e0ef6a3114e859078a8e4035e295c29d4b495c43?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/008fcc51813303f9c80ae1bbb2d2602d1a5e81b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5a4fc1f18889225c346f19df98477da8004068e5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/76ae7082b439bc4a14d3ce447736a5018eadda7c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/116a7b03c6f9b2eea7850d7070cef6bfcc242d5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/76a2a9ae5ec7a823718286d3a0685014bf1eddac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/259416af8a5ca6a392890606ddcb54838bac2d31?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/742fbc4276f5abec9f7b35e89e86ca45ac389a7a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6ccde6b86636812d81516138d672c212ebf36774?original' }
      ]);
    }

    const existingImages_k1171502343 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1171502343'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1171502343[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/da9101f7f384f41f7fe61f06205445da7858f483?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c4a3547061ada1a0cbbe505e75f73f94e9b51462?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8b8900938b33ff98fdaadc92c947dc1bd6650abc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d690ecbfc4b61bc56569969ce398524b32261caf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c8e794bd0cbefa91032a37339743605ac9dd6492?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df8e8858ae5b385c4dfaed28b8b02a11bf8071d6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/da276322c894d4d34fc9533682a0b5fd75715ef5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1a576dc1c12a310ca84f54fbaefaf6609d32ee58?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d748fbaa4699f3193bb7f162bbb9399a8731ef5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/76fb46b1eacf7b745491ab1dd31ffec24826ab50?original' }
      ]);
    }

    const existingImages_k27324859 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27324859'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27324859[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/24910F706B8440A1A45BE54F1F606855' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/71708CDF8C6D42C4AB9924C24933377E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/71A69F378F5A4AFEACDCB778CD3BD8BB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0729142468C24D9C82D14168FE5BDAF4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FA52A4BADB014E38AE1BA1C33B19FED7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E16B7A3074A94668A77A02F5A01C2B4A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/243B02E7A9FF44CEAD14F95DEDAA0992' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D7966321264541A89D01EF6C28B55DC1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C9E79933C6C14361811A03499DBBE2D1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B826B3B63B394FA8A35DD90316E4BEA1' }
      ]);
    }

    const existingImages_k12084459 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12084459'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12084459[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3831531e364aed7f5da6820475c3054c686d2801?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3629646f248d8d156be010f17e46a22a00f61482?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvf4qtvfqrix34cn03mjmfxnz/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33313427347&kamp_tidx=0&signature=RtTXttqJEez4O64j%2FbzcY78nRXk%3D&ts=1756518547' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ae9039de8886f16e7356abc004f0267b2e78294f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/930bcdd4d426fb6ac3c6527c9202ed51b189fbea?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7cfc0458000dd35238a36efe21dd4f0275f17ee8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa5fa0b834740426cb3cfc415dc271211b5e155f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/450342e0e3d34b8da88bfd3130c8906030698660?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f5bc3ad796455c884b2128f9cf68bf6a81cd8f29?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8d2d87070d115c84d5408499ef2bce3d4c3d4a4c?original' }
      ]);
    }

    const existingImages_k996865236 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k996865236'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k996865236[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f7c63ce53f13c23fea59c0e40d298a48ddcb063c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5cfc31dfc7eda57a2abfefb444813806c8789edc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c3968b6e43577eb794fd24a35a2db5815497db24?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/abd0bf45eae1700c9672db7569a24084198265fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfNjkg/MDAxNzUzOTMxNDkyMjE1.otT8dA7F75RfEeFayQcYn_nIKH-wQvcvO_MRSiddc1Ag.CezcdyiSotJuuSdElE9qzHKSQcV6LCxcxni3txhxC0gg.PNG/IMG%EF%BC%BF9104.PNG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfNTMg/MDAxNzUzODY0MDgyMDMy.txj88GlT0bHMHGO_Q9JH-pxzfpOLnFqDXA19E3vfjEAg.JRXMpAlhtM5RuzjsKmlvOqmasARPKadHxmoRNwPtPHMg.JPEG/IMG%EF%BC%BF9067.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMTg4/MDAxNzUzODY0MDgyMDAw.TWIdYltFoXWsi91rdnYRQttKPV_L5sp5HGJjhdhkjH8g.LEQwyMEH6o5ttrJil91biEhBC3Z-Iz1qImDfpSON5_sg.JPEG/IMG%EF%BC%BF9068.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMTI5/MDAxNzUzODY0MDgzNTY2.WSO2pIFodzB6SGRf_cgEwgQkKCBXP5A26FXQrwCT9CMg.YZ3g7dKaH3ONToSjhmkmnSM1bEuDNQGSGjOgOIPwsM4g.JPEG/IMG%EF%BC%BF9069.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDFfMTA3/MDAxNzU0MDA5OTM0ODE5.Xc7kxhdIHY9HtUcqwJFjc3zQ7FpnsYIo0f9bSy3nilYg.hEkAGF05DwDGbJXQ090dLeYUuCTdTLrv07i0UJ39bXUg.JPEG/IMG%EF%BC%BF8782.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDFfMjI1/MDAxNzU0MDA5OTM0ODk3.YpCbpXz9UoyPdDAUaf5RGDQ7opt7r7YJqGRj738lhp8g.6X_fm8iEHPQ7yZ6H66OYDxnILkBCVUt55DPhAZTZY3sg.JPEG/IMG%EF%BC%BF8785.jpg?type=w966' }
      ]);
    }

    const existingImages_k21937028 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21937028'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21937028[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/16089d4ef43c7a4bea35fd6e45a5ee905998dbf4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a950461678a05b2849fc8a80ffd1a1f49ed755f4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bf390ca7dfe9d2e00af5d3251558f634ed76f4c3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b2ea016d3f78c786b839943e68e7dd57c74b6452?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c86bc5b7a167048b9b872068966bd22ae00c4ab2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8f555faf3da6fa541735021269a8ed7770c9580?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f0d6053c5a6966d7df48f178647600deb181543c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c63321a22259e004b5f28648ef4d193d364113f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1d7085dce6f12b94f2c1f42c4caeffb16b008d2a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c19f2bdbb497765797237093d376785aff8622e6?original' }
      ]);
    }

    const existingImages_k1465537638 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1465537638'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1465537638[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/WGhUb/btsPWfAB1ub/VO7Zs8mKoVj1nozCjr6gWK/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/TyxFB/btsPXRyB2N5/aI57enwDBhlkVWRchimqh1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/mcHS7/btsPVfALvzj/Bm4261t9oyte7bCVZOI6g1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/begJVR/btsPZtwW2UT/mNdY3mK643QqlqRQ6WDcB0/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/d1FhtA/btsPXU9U4UA/mulKAarz6imiV1kWwI2tL1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMiAg/MDAxNzU0ODExNzE0MzM5.p1lcIX932rRurwbYS8W76KMD4A1XqcO3N_lXAVG2TDsg.j5UJCPXwAQKYpd23lb477elVSqZ7D7rldstXS_ZV5dwg.JPEG/900%EF%BC%BF1754811508386.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMjI3/MDAxNzU0ODExNzE1ODk4.k9i0iX4JKvdILHRnvWBawZ1jYJhDud_H6qErytHgS8gg.qDoYVjuSeMEx70Ah-r4H7v8cQkp60BZ4EW__tR8aPycg.JPEG/900%EF%BC%BF20250810%EF%BC%BF141300.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMjA5/MDAxNzU0ODExNzExNTU4.Ul1s7Brcoi5AA2FaOznqSlYQuQH60w9SDGS2G4kBhAkg.2mh_XeRiSOZnE5HtfMVRcuaT6g4sE8d3xt6YOiCSphEg.JPEG/900%EF%BC%BF1754811508619.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMjMz/MDAxNzU0ODExNzA3MjE3.q7MwO4FJAUjekFXKLSAoKW8XLaG59oIS6dHhBcAt-cAg.dF0eFHQZQi9GlIxxrUryM7hsE5SevqZbinZrtZoJQ6Ig.JPEG/900%EF%BC%BF20250810%EF%BC%BF141347.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfNyAg/MDAxNzU0ODExNzEyMzM0.nPlVWZutBPLLKd75Z4ixXEDADOYzpCgeAKveR2IwUGIg.gCvNZpt2QZHa-lH-rnZ81hNc4Z0ZtpxgqphNTiAGCbYg.JPEG/900%EF%BC%BF1754811508848.jpg?type=w386' }
      ]);
    }

    const existingImages_k21510716 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21510716'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21510716[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/911c22d4bb46f7bc8b5253331bcd024764f510c4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/03a82d48e1cbc9fec6b187311e19302dc9d6284d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cecd420abd0b45b59450fc3a3bacfb652f42e2464573eb2016c67cd08ee044ef' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/09d61a8a8b524db8e8df6ad6088be6bfd5641a5d9dad57575a3e89f406d3a032' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/nVram/btsPXP8yKvW/gHeIwuvNJn9mi3A4HxqlsK/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/QqPHh/btsPXq9npo1/rxRwkZ9eL3PYRSqfczDeO1/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMTY5/MDAxNzU0MzQ3MTUyNTA2.4X_ZgnwUhb3EDLHzJsnsf3kvoCva3Y0O-mURfY-3lwYg.OR-W6yktAKoj0_yJ_-kYk6uTJjfLzdW4IHadpEI1W0Mg.JPEG/R0004478.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjYw/MDAxNzU0MzQ3MTU1MTgw.YGrhipwzrL6Kr8dhDa14ir9p6a595PjGCjE-qPrCE7Ig.lhyzuyR6ep6pE6-M5b6onkWqBTqtWfWY_k_sDrZdYYwg.JPEG/R0004445.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjI0/MDAxNzU0MzQ3MTUzMTc2.wFk8YdveaelWj4VTp0eYu8AKl_7hy-his4sa3Zmzv3Eg.UMcuEnhyCkGxpKbXx-vUXPoE02LICBsXO1NzG-PFSbwg.JPEG/R0004477.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMTkg/MDAxNzU0MzQ3MTc5NDgx.N7HSsgJ6EKtlXk3XIkFIY8d2L6_lCRYTgQLiQMMJl5Ag.CBYjdCPHiQty6IezBqRtRH5GXS9sJoc8PQNYpQ-1SWQg.JPEG/R0004476.JPG?type=w386' }
      ]);
    }

    const existingImages_k9175466 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9175466'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9175466[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/052A67D5491247688D5A345DA0234C1F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/45FB7FE016164D638E47F6927EAC6830' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/725DE6C9B7E64ED4BF6B2FF578B90D01' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/searchregister_2140661277' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/42E81A1C25EE4BCE9244CD494CB47381' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C6B3152551A3494E9E20DC6C534BC47F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/10775E9132974220AF7BEDADEE22E44D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B5FE0BE7560E418BB6E008B72610934A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c0915edb867abefce5621457d8fe14706776ea2f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/90c1522055ec9e4f254481c97826866ea930741c?original' }
      ]);
    }

    const existingImages_k7975283 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7975283'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7975283[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/adb22a16ade2bfc8156a0850a623f4386c8cdd79?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d7233ab9c114fe73d42f9b4dd88459f1f721b969?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6665e2ef3370766872fde754d5f1f681a59da6d4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0c54d2c1f24b6c955aec5cd89cd77dbc2a6dad45?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1dc126bec0ee695af5c5c9704d335b363fc89ff3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0068d65c0a6e062d08c3911f757077e99a8c640bef0ef693e58c67e6f644b8e8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e4e6a10430f66cc038f0acbcd5d2574b8a6ed0bd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/55c8bc076e733235e4c9f927da4801f08a87497d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34a73dd879e8d355a7e8ca50bae3ffd75f716da9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjU1/MDAxNzU2ODY4NzIxOTQ2.77gcHhajRBPomK0xAa0oYkf08a6DX363tlXDf73wzHwg.imS8fbIA8S33Jk31Hyf2MV4y_M26bHUal_I7LU0Bkl8g.JPEG/output%EF%BC%BF1967675802.jpg?type=w773' }
      ]);
    }

    const existingImages_k21293090 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21293090'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21293090[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ecb15ed14848868c34a7c50812533811e5cf0fae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9e33ac3e0e5a7749818f547d93929e98a089de8c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdNJdvQ3w_vrKtKS8QEON0bzNkMlinH1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdJct1tx5_7TaFFq4HuKGqenv9txFiK1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdLJyc1v4_AwwdoyrV8NRDFJc8wqfsy0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdLIMOUsP_bF5KNMAD64xkTsTgICfa9K_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bNaYwL/btsLTGIqk0K/kZ2CjYVkM1kx3dZkThB7v1/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/8908U/btsLSpUSEbU/kZwbwd9jlIaGhAC4cLD96K/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/dDqp9Q/btsLTp72MWt/VJbckokMggzKv8Cgopestk/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/QGCZV/btsLViTDZ4q/UyHQu0FgcP7VWkXBAzMOa0/img.jpg' }
      ]);
    }

    const existingImages_k1946286415 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1946286415'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1946286415[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/D5BBBE30E9A44D1F80313D5A15A31185' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9dc81ac3ec32658cbac634379e2ca55bb537704?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c1665430afb88c1ddfd75a5955cd3d7eb9f41dc4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/60e60aeea0d7c6fdc2cbeab65ec0a1f978c9e820?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ebb9162626df422fcf5f459fe4c24796604bff8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/104ad783f959db3854a8ca31ef5ed095c526ce46?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9c728a3c7a0701b7bb5408e9c13b3ca611aa1ebc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/20d93eea7cf3b1d646545028db7988ec0896f630?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cb29e7578c6d6c343cda5533bd1c84ea41e318f2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8707b010e000bfa0ea5ab5c29ffe5852dd652fb1?original' }
      ]);
    }

    const existingImages_k7955423 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7955423'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7955423[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0b55571ff902dd409869025f387116d2395a7408?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df7709c0ab8f82cbec59b5f770a6127b96946b40?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqnpSUmdRI_LEk7J67OaFQvEJN75TgUi0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjI3/MDAxNzU3MTU5ODg4NjI0.xMfxqUS512e8rhOY0UQ4L2ypOya3Kz1h3gfBH9wH-Icg.0UsdIcsBCVpqbO2Rds8RTV_2410doIXpdO-BjxNw53sg.JPEG/IMG%EF%BC%BF1713.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTI2/MDAxNzU3MjA5OTg3MzY0.m3kXm6EZEM4V3J2cllX5JY1tXYMgo1j6UlUardxgmmkg.i8JV5c34tpD6Txu797y1i1UHPyv6NnjdeXQsiRtWpTIg.JPEG/SE-e68bab25-23c2-476a-a4e7-5036847d5737.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTc3/MDAxNzU3MTU5ODg3OTk5.M6wVjnK8j0H-enIALV2v6vrJZSr5MaTTqWUQYxTeflsg.1M1srY6zEVeQYEq7hIsQuafhmk1Gi8HrPQYUxrVhLRsg.JPEG/IMG%EF%BC%BF1748.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTcw/MDAxNzU3MTU5ODkzODIx.wisc3fj0SBrypPohXweGer3mxlFFfct85zXl7GZ6pCog.hgcE4sLQprrAhs61LN5CVDdbfY6r5c0XoIH_LIGTm2Ag.JPEG/IMG%EF%BC%BF1711.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjMw/MDAxNzU3MjA5MjgyMTAx.PE8qEBzvF4DTKKuYeb53vpX51y8tYTwpPz-q9d8d9IMg.w97YKamrMtmpf5laVlz-6RvxJNcD_yjBZeiERaGjUEog.JPEG/SE-5E210BA4-4073-4F43-9E5C-D41226259C84.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjk5/MDAxNzU3MTU5ODg3OTI3.Fw1Q5EJ37ZcFUw0bLsQ135kUNz6SmU8hzzbQ4--20oYg.ILWi6abqYTd2ttwmNTrrUih7INtaMpq8pOFD_QMxxHkg.JPEG/IMG%EF%BC%BF1749.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjA4/MDAxNzU3MjM1MDg4NjE0.D_AtMlatIdnkkpGuB1D7StuzBaiV5phn24UgUxUhrgsg.rukeL8BGNHwaYUIQbjI0QPZPGqvSabWhErhfnIocR1Ug.JPEG/KakaoTalk_20250907_123659566_07.jpg?type=w466' }
      ]);
    }

    const existingImages_k743890057 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k743890057'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k743890057[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8BE82F248C294B2C886A7371BABCFA45' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B5EB184D27D9449098199185C6C84060' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0E7E0047E165478D83C26DBE09C01EC1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/562CD00058144913911065ED1F49A88F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/84F2B1239DBC4B4A890BAC10F6F09B71' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/36F785A996D24C2790B43A736324461E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2601987B25C4476CAE64C782853E18D5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A3E1BF1D3E204C0CBF508F1E30CED018' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9F4C8D42E38843C084A9520B466713EF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B198BD83A85043489B20D95B72FA3A94' }
      ]);
    }

    const existingImages_k25081012 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25081012'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k25081012[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8E755B7FAD1E430D922B36CA7640E9D1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B6CBADE9BC8D49398417EBB9575B7E96' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/8C33E2AC305D476FAF92A95714FDA3D5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5F721969BE9B4BB5B562DEEC09565971' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bf6159374b7067c9e9d77b5cb0dcf2ce04272775?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fd27df13e9441ba8dabad9d458f5c5b0f1f6b1b3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/97985fffd2250a9b9b26bd950d084e7123440979?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ff6c07f6768c604162e22db85099c9ea58d7b66?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3ef18a91d0c8348dfdb5fa61cbfa9fe68f7bc789?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/34559801f6d98f23c5c807c85adf7562fe9f688c?original' }
      ]);
    }

    const existingImages_k9091835 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9091835'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9091835[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dcfacd5fa193fb39c64018bde1869d4480c5975d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fea5674abb63b87f87ff14dcbd8ec2fb9fc29f4b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqpnLrF2Gp_K1RNQmHAfDtrnKdXIwmI90_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqpmjilsRO_Yfo6miSywgYZcf277JkzVk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqpmT4MA3L_MUEHKaA9aUGWCZxuITUJf0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqnjjdFpMR_jwWUPPL27l0yehlIC91pvK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqniCExx7A_S5cqhgNKlC1g7MabsWX33k_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqe9DQDjXu_YpEp9aQby6QEKEKQLGCwl1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqe86rRQiy_KUO7uJ4Ry5UodBZNVuXkJk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTgg/MDAxNzU2NzA5NzQ0ODg5.ZYwGWRT91z6slHlri3gfYubnFxyV9Dwiuw3Z8F498pcg.QF1C_CTmtYgsHIrpCZ81Elryj9CVSiaS5jcRdMegIUkg.JPEG/SE-e03f90ee-c9ae-4e58-9390-afb49d689219.jpg?type=w773' }
      ]);
    }

    const existingImages_k19629369 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19629369'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k19629369[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c20536037d07c7612b3b2ff03a257f3da0d38d16?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ae616cd6abf2b73a54b70df4ce501f5db4c810d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/346d896ab65c3e81fc865e94fa47ad96cbb37eae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/99440d57fabd9fe783f4f0c750aa4d8f4848c9fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4f92774889185980fb3349de2d98ec468f7624ad?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b4bbddaa086659833c14dad0b0d562d7061dfbd8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a4e90e163228ab34a81a89a7f0a684c735d956de?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e8d6efe94278220da7a4f0d2c37c6a05f2e055e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgplvUcJA_zUwNQbZuVJHU0oxJSST400_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgJWPcKJw_JRI3XO8ccdZU3JoIKplRA0_img.jpg' }
      ]);
    }

    const existingImages_k12085051 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12085051'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k12085051[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvub0jb0ghccs1nsnstplb8nz/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33306624130&kamp_tidx=0&signature=QmaHqnkb5hI7j%2FrIYhUMVjlLaNY%3D&ts=1749715330' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/203590599b591d2cf04b9fe5849af51312dee015?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/78ca4a7f62dbff009ef7504cb8ccdfb5a3b4e31a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e2f12c064b5252a7a3da340200c24ecaa0c93d5d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b4179322fdf7a4f1afefef744f76e6bb5e66702?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2ed67ae05a352569a2436ed7464c460481b7593a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/32139605b43d3cf327711f115aa1b0580fc91a7d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/057338d1756c8ec8ad45255985bda2b0031bccdb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/41ad02b7b0c41eaec5ff27e83ab441c80e203b72?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/78038c7a16eba2fdcf95058312c57076b23d8cac?original' }
      ]);
    }

    const existingImages_k11057071 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11057071'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11057071[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5ACE7AA1084E4A3B834792AA077F3BAE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C8E906C04F5D4F9D91A5ED89B9107BF1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2EB37F8A0AF144AEA30DCD68B110F34F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3f696b0c547c930297afd7df7aaa5b42e25b7ba6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/93765886e53878aecf7c2ac2ecc18b1c1a578d5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bf818d22453afe6ff01d75685ffe7a548f67f53c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/52b339f69e82a210812fa4c897fadf7aa7954b7d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/72629da35df7ba3de4625a56615e0c4d1e8f1207?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/19cf8ed45d32084f9ba84f4af7447104d2fd5e8a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/af03376bdc83f45606a163eb74c06f6f37835cc5?original' }
      ]);
    }

    const existingImages_k7908963 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7908963'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7908963[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/be6849a68343a52900e7c544e9226daec0786ff5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d88fd239d21ad08b43a2e8becbe8e06a41a459ba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b88d8c8a88a5087f71aa8f2f1a27cd8fdc65e20?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/87b403627c9e99b2141c7e0ca69b455550a6afd7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5701b0336655f15a4b0538ced4b2171a95d397ec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/17e7e9403c75ac479cfbac361908eb07220c0a12?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc0c38c1ad845e87afc0dc1c2b7b4b82617cbd0a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c884f9c694ebaa120ad0fa9a1e6de0edbb438db8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f7cdb27b96a3c3046d1b306890c3e8df4ef5fd1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6f91d308f9d8601e495d758760b4cddb5f6d4824?original' }
      ]);
    }

    const existingImages_k9803823 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9803823'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9803823[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTA4MDFfNzEg%2FMDAxNzU0MDQ5MDE1OTMy.n7RXd1zsb4coeLknom3NLuGQOQxNhrYIPLfuTvuMId4g.wl_0kfqNDPD_3ynduCtZ20M-fb-4zxGV6QKVkt1icZ4g.JPEG%2F2C9EA993-61C2-4E60-B0C5-1E0763496483.jpeg%3Ftype%3Dw1500_60_sharpen' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjA2/MDAxNzU0ODUwNDM5NDI2.-GMSDATv8MWNiTo1nTegnJ74dNugwhK0Vlu65ZalWOYg.jqddH8xbojkQ2kt_ylxSV8WYF3KNCtYciORloOPg2YYg.JPEG/SE-57da6541-b910-47c5-9c38-62fe549f1f75.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fblogthumb.pstatic.net%2FMjAyNTA1MDhfNjAg%2FMDAxNzQ2Njg1MjA1NzYz.EEaHJPb5gglPngN-3wqD_svCRw3sHGmZeWxOWF-_uPYg.6rvmMvYbi5Rhp00W-R722htcOwwdhLojqK_fHcpfWFQg.JPEG%2F900%25A3%25DF20250427%25A3%25DF142012.jpg%3Ftype%3Dw2%22&type=ff500_300' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfNjkg/MDAxNzU1OTU2NDcxNDg3.dSiIqylRHXAS-RqJVAMvjM2cOOFiGJqqBX3kVXzwo3cg.zZ2_aVPKoNpbex_rK0CfUr_FoR08p_gHyY-sZJf4kEwg.JPEG/20250614_174400.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfMjkw/MDAxNzU1OTU2NDQ4Mjcy.XcywnewS1i6kiDEKvfI9dkKXSHN1HDQFbV6rfkf9-40g.-LzLI97vx-6llhDuvriT6ZEwlXBOyg5QPw5U43LSLmMg.JPEG/20250614_165425.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfNzYg/MDAxNzU1OTU2NDQ0NzYz.RNasTYnC8IYZbX4wh5LzMeSngXQiVUeYGHeFEIdSRwsg.xx0RYqy7utTJuY4y0BjKWAMbMghBVMV6eiKbndg1Uksg.JPEG/20250614_170030.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfNDUg/MDAxNzU1OTU2NDQ0NTUw.Z8Xraw656T9Zjh25ev087OHEPYMBxSmEqhQli7MdSOYg.5n2mVe_H3eQxNmoK_7hXO69o-QKcYi3njb0DxjAYafwg.JPEG/20250614_170024.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfMTcy/MDAxNzU1OTU2NDQzMTA3.nESL9NpkiDvAiVhjJVROjj1SoATz3BsCM9Li-1Xki24g.4aZKTY6bKxQnzJhOZTU4mqaWzZPKi41QNqSmpjk2xfEg.JPEG/20250614_165316(0).jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfNzcg/MDAxNzU1OTU2NDQ2ODY0.66b2R7IitjMqUIRQmlks8SFTu1Tm1OT2QgtFvMFkAYgg.G0eUmlangE2Xw2xRCaesh60vZ5mguLmEJdl72JG2PVIg.JPEG/20250614_170343.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMjM4/MDAxNzU1MDA3MTI5Mzk3.qJz6xGaWLCQH7R8JoONItLChLJuHG416ksDsZ7g6QR4g.RnsvAxIQo0rZ3UdiFTuME-qWd6Xjqhs26sCj3jmsrSIg.JPEG/900%EF%BC%BF20250812%EF%BC%BF125041.jpg?type=w580' }
      ]);
    }

    const existingImages_k1249881135 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1249881135'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1249881135[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/0E7C555CC0824368A4CCBFDA270755D7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/22bb659fd4d8edfa5a6a4c6eabbd93c89e6a8529?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e50222f8e2062a6ea6bfb92958377c7b9530b03e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eaf25ceeb86943da453d61880248a71b6a37096b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/89eacc538c59318d6c39e4f03ccdaadf8cc43799?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ab51467d2902dd2d479340f35655b0c59d8b777?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfvp5Yu18_1LIAnHUN0Hj6PizJqRD271_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/b9oJp8/btsQgeztC6c/gRo47aLGgdiqNhmPGeTF0k/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTRfMTY3/MDAxNzQ3MjIwODM5MjIz.Tx4npG5n8-s3ZRQow1wzafaF3Xaa7W8e2mWosX0nOa4g.aqaWeVu-Rqme_xW6piUqMN_etVZsZi1M1ZPtoZ86Qfcg.JPEG/IMG_8964.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTRfMTUg/MDAxNzQ3MjIwODM5MjMy.QGnV2fQWwjTUCueBZ4KiCUDDv21pUQnnkGgtne81rzQg.idH2h0B2jOlzqakjp4ojmi2ryCKQSQw57byhNE8dsYgg.JPEG/IMG_8966.JPG?type=w466' }
      ]);
    }

    const existingImages_k289098095 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k289098095'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k289098095[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C857D7DDAC5A473C9BC6EC9BC5DD1358' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AC8E5EF06DC743DE9BDA43B7CC515DF6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/46190DFBF789478CB72FF6BCCE510E60' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9CBBE7A67A724F19AFFDFB81F2487A0D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/884B58F6386740698EBF20924296D732' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F5F692F381474BE684C9A346FD5A1430' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8C3672769E7D4BA98CF09131E8D1C5C8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F1A45C12C3CA4202BA1C10F4EE3ABA72' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EAF4529BB1BD445D8A15FAC965892D33' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F0F26FC28459419B863FD0512EBB21F4' }
      ]);
    }

    const existingImages_k724819429 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k724819429'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k724819429[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/01ed7096a8bf637fc647f9f1b092bf0be841c95e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6927dc181069a164ac021f27e18468786103a576?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/42c36d5801832f49b5a3406df76990c665fff426?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d32f651965a027e899a1e2f532351106fa40121b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d06a2fce219d6717ef1f5efad7940353a3855286?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3edab32eb54a1521e4494b3c597e0d16cba94900?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c500da9e1c68f0c45af01471ed60b5a930920fa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c517316388027f9f8fc31819fca071801bf128ea?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cee6fcba263976c74f89bc878e80795676191e8c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9c21e4e9ef162ddf3078abb59a725f4fcf5e2297?original' }
      ]);
    }

    const existingImages_k10340916 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10340916'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10340916[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/2C6AE11144D444F3A9F9DE9FA4CAFE6E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a4a4c5db69e9e1a6643f6753b5d7b553064aa4c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cdcf38748199064be4e45f7ce60691ba29595e0c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6a2412deff6827a90efd87df82c18e8e127bfad8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5d9c600acdc15f583c5f5b1e1a28df673fc56627?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqsatVA7a0_2hm7kdkkYjnSnZCpsVfp20_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfMZeAd63_Kl3kK2KM9cHgAKj72OZIQk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqe01jXxZP_bccGPzVBa1rgXO33acrZG0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjAy/MDAxNzU2OTYzMzI5NDEw.xH4CemDK71b9kSFozCFzB2T4jX-WRG4EwPH3D3Aa2eAg.tor8_A8ZlKt02P5hNqkG-6HfRY1nS3cfibbHpXUFG20g.PNG/image.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTcz/MDAxNzU2NzEzNDI4MTA1.FiSeZXY8M0EJJIjr6fBiUrjSBG0nBExvQZr3VDcNoP0g.6aR6-5e7E_inJihRxyHT2A7FxgpqG67aamVeo2DCskQg.PNG/7.png?type=w966' }
      ]);
    }

    const existingImages_k720045301 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k720045301'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k720045301[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/76a5bed8f6a35d31b95b745b2ae355c45057f71e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3e1741cf3f6ef799cc95845250360b6113bdb97b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0922b991635b2901809c075b85c4a62ed073e350?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7136d2bd3f23e7e1080bb32ba1bdb8baa9322c5a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8071923a2dba569ab930f100f3920d274d0d52f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1def36a06dacc655b82a84b95f8f27c98098f9c4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/63f4453029960d061a32b1ad18ed55b0cf784e77df995a83f6b5347ba6974b75' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/386fa4e8f41427a5c379aab244924ba6b869812c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/efa2b95b46c5d431ca4f0fcec1fcc8645f7ae5bd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b275502000e5fedfb84f51e4be125bfefaa90774?original' }
      ]);
    }

    const existingImages_k1422565065 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1422565065'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1422565065[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4986bea4ff7296bcb85e66a5d303668b761690fc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eab82f97826aaf0bac52e3585f6c1ca16fbf5fce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c015b2c66fa25042af6311e20c261b0761af474f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f1853821772e50527c75b2a40739d70b4af5b339?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/01d9aa987a597d66d3f77292e1f77564dff812da?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cea5eed6508374933ccae835c91e6ad5c6356899?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/636bf150fa48c4d16a0db327caae5ae674b178b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/300edb49242542ca0a91bafebb473c59ba900960?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f11601eef2eef6a74da45825d25ffedc18d0b1f6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7269997f9c4839832b1d038f91f22f8c03e94b5b?original' }
      ]);
    }

    const existingImages_k11831455 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11831455'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11831455[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d675c988c4b633e92d33200a041db560a8b6639f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc900b48a902c5f0b5101ea56e562ff9994a334b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/26e32ddacb1832f21b04e8ebf1e17941d443b510?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d787da529feff74d1519756e1286193c0b076137?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2cae9eb720f7d6f350a53522ad025f638e770686f1ab4b4b7c8e9c7159f8cfd4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cfc40dc3164ac45e7642d7dc4d61df833d76c3ee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/84ed1813ea909dc2717e2e32bc657191dcb0ee1d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b75a45b4321243df7ba484bbe43c97df9113e4e6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aa399887945d8b812bc9e5f0abc4e650685cef01?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5dccf585ef929bc8feddaf7a66315ea2271d79da?original' }
      ]);
    }

    const existingImages_k1376500537 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1376500537'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1376500537[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F439FF4963FA49AFAD3272B9972972EC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/571C0F5044F144FAB7331BC55F261800' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/50F88145BE4B4DD78FB0BA13F8B4977C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C09AB9127B5B47D9A61AAEBB553DB4EB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EA22635E8AF44AD7B249C1E0FBF84434' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/47A25D9D5F184959BEF4D2EFEB95D84C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/280D544D57F04B01BB48153ADA744155' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c8414bbcae5490aee8810a09b239eff1d66e0ac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f9826b1fc4c12cdd5dd1083dc4c0dc1f2dec6915?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/40279e92beee51c0a72dba2f6db9d37d81eb9e79?original' }
      ]);
    }

    const existingImages_k8256228 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8256228'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8256228[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9299a84a08bd07a57a21cd7040e252208f17bbaa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b758cd9ca8354091095e827fc02dd888cc488f12?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4afa202295ca121a9a5660682e2248f341e7b609?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8db4832db2dd531bfd0e5e7caf838d5c6e8055fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dc0e22552fee13af77bc460b8c8706441fbe9af3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dda1c0a6163bf97de1ffbdf0d6f0edeeb7571217?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8254a477a687c18ba1f0235bc54c07efffa77522?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce4efac933afcb30bef6f4c4fdb950cdd3a70fca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ef9b914b03a7bc05f9f0f67c6e0a8d7f9dc46191?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8bec3fcd52237a9b83f58787637d224581d9f38f?original' }
      ]);
    }

    const existingImages_k43391333 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k43391333'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k43391333[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/19D314CB2A8D4E58B2819638B22D333B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/99708BF9E6CE42C19244BA66A919C2A2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/662E1AA129DE45FF9A7CC74DC7C82E52' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9D087EEB1AA44B36811F607EE608100E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0A9A6B2F158346DBB42088465912DF23' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/37BF1DD11D214097BB9A0C81EDBD9809' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/60B6FE1C20E64C82BEB959C2E2A7B5E9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F125F1E5A2C54180A0F1757C3CCC407B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CE6A3A78974B4A418611B4BA9067210E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BE1502CB8CF5427A9E8F34FA08B1D06C' }
      ]);
    }

    const existingImages_k2095763590 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2095763590'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2095763590[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E235C550501A459BB93BC8C30E642244' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/827BEC2C98F14E1E89B5496A3661341F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EF8180BBC9F84E499206DA253B227D71' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F8DCD045B4D54B09A67C471494217AFE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/337C798E66564432B11A6DAAF491715B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4F5D40336EF241268EF36BEAB26C104B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BDC61C00E81944F4BF6389EB32933AE3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5B0144A58FCB46BF86E21D0491C1997F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/208270095A384941974378A75AF1F08C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3D94D9A984AD4122B8D3F7E339ACD25B' }
      ]);
    }

    const existingImages_k11097883 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11097883'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11097883[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjg5/MDAxNzU2MjEyNTMzOTI0.TDqjgdvdCoBn4v2zx5H5xn4BgfGorDrezjqKixINzsIg.dou473gelD7cE0On1p-BtgwxUEI4yQO0phyikX4rC14g.JPEG/SE-80c990e2-06c3-4103-832f-a9b15a81ee75.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTA2/MDAxNzU2MjEyNTM4ODg4.VHMaKhf-1ateoHzxOomDJGpqiPAqGsOvjVD41LXMI5Mg.TISklIdCnkA7syTWs4Q5nxAeJh2dxEe7o1VCLTLO50Ug.JPEG/SE-c8c26e08-ff0a-439e-b669-af94e2789463.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjI0/MDAxNzU2MjEyNTM1ODg5.n_Txa5QAfBtZak_C838DCl9EFBhyhYvZr37lcmNaOnQg.C6P2UZOOxYBvfZwVb4f5fCxBoTyH6I9jU40NaLS3yUEg.JPEG/SE-8e6caa5e-d8f8-4a55-a29b-7988dda19a3e.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjg5/MDAxNzU2MjEyNTQxODk1.91qTCGIo4N7iHhMHGnBO6TA-wgCj0ZtBbgv5-PKjEC8g.4Ekw725H0-8_JjHGHtIvMmz0ehEPH4L5-Q6zJG7MeD0g.JPEG/SE-3d447e08-2194-40e2-a34d-3074bd3e3a82.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfNjgg/MDAxNzU2MjEyMjUwNTcy.LepGinihj7GKeWOzzJOYudgZgyfu-xj1o0Pf8E1Kaigg.cURHjV7_7aiNIZv2PFhg1bs52ssnc6amEMi-uz_LWK0g.JPEG/SE-bc8f316f-10e5-4fbf-bfbb-f5a5d6563a4f.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTYy/MDAxNzU2MjEyMDk1ODk5.foURwD4uSOTmZxWMBM-ZVzfIRxnCtVJuCz4gA4IH4Ngg.SGPt1w6c9d5dSZEH0Md4srZ7kLSqUIpUv5eRFSfMVqgg.JPEG/KakaoTalk_20250728_022645125_09.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjQg/MDAxNzU2MjEyMzEzMjcw.Zi66BvBtxRb1DrMmUZ3G51A-2kGw64E_jmorqKEkX1wg.WP315qaG98BsXdfZVcYDIjGx1ouxsKjDVaG2201A1Lcg.JPEG/KakaoTalk_20250728_022645125_27.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjU2/MDAxNzU2NjM1NTk3NTQx.w0qy-EMln1JooAnu2I2wNG5mLEJGPiaYEDBRz8MBPYwg.wWV14H9wZ58uYPmZBoLX5BtyxQNXApiBa8leMDORIJUg.JPEG/SE-b742dbda-8582-11f0-86ce-fbb1e7451e26.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMjkz/MDAxNzU2NTQ1ODk3MzEz.YjsA29d7weeyhZ1qFOw19_L2VfewfeoII1LsBdljy-4g.LARwAlIzrJB59Y5fBMIoBcj_Dk6gvsoQRyqp2Frjdcog.JPEG/900%EF%BC%BF20250830%EF%BC%BF124659.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMTEw/MDAxNzU2NjM1NjI5NzAz.e4BFRCaMHV-Nj5nOmBpyJvfY9JF17Kj2_4ztSlwiS0gg.PYa0DUYpHQ8G_McH9E91WPLcyuCI2xCNz3QkIjf1jhQg.JPEG/SE-b7415539-8582-11f0-86ce-070dd872a739.jpg?type=w773' }
      ]);
    }

    const existingImages_k9786815 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9786815'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9786815[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce4d6fd0d757fc9e7b346267edc30b158afd185b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2720fdc0659ebf79c833cb7de838ea5c8da44db8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4a0be01e38b980e81f6ebb7f716e5c6b95e7eebe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/affdfb230a39615a0a3f4aaa0e9449dd95ce1f4c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b0de0ad1a111d09beec8e26068cbaeed496155da?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d8da8c403411ebd11759046cda25895224eb88a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/822d02ad9ab4fea14ff2bd8577f3fdf0509fd04b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/09d4e98d1d80eb0684d78139fec29aad05b89ba6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d81f0703319850e17bcb2e1b45e0158a90b37fef?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2129cf4bd1a1f34307309d2c472503acaa23d896?original' }
      ]);
    }

    const existingImages_k400794314 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k400794314'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k400794314[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4a291db80d5d5b6eefd6e3c5fa096634a926f5d9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/90496662dfd24a93af9e36117a4275bf74a044f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce31e29f308e1045f36a71eeb2a8da8de13fa14d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1132e51e195f2c7d7a910fadeba9df7da2122f53?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79c4db6d587f2afef99d3338a22841fe3de3e5d9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ddf156f3925db866fa1c5e4018b24ae89bad2eb2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/647c40008c9acc3055695f8b0d66243c497a2bf8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/350796fd0634864bd3bf19778a47a341c18ae34d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db50a4ed0f48e169de5450c3b497d81604fdc07a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d402559cb5a277eaeab83e2a4eca33e26d0a0f8?original' }
      ]);
    }

    const existingImages_k18344911 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18344911'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k18344911[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWaiw4eoDC_XKtkDBZhoMjiPatCn8REj1_lkagepsX3xV.jpeg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDVfNTUg/MDAxNzQ2NDI4OTEyMTEw.xCN3ixwpfMimcuSmJWGqPV0GTROejxN5tEhqqo6k1xwg.7d7V0bEioUwdoKCIdiX6NXFQL0x_dkz2opPRyWUw5gIg.JPEG/IMG_4937.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDVfMjIy/MDAxNzQ2NDI4OTExMjI4.bH9MHiFnhpgwxfGRo7akNGBt3-KgjfHpsWLjxYCzTQEg.Jv7pK2785fmL6zvk8TuLdhW9Pq54TLQkih078KPR8Nog.JPEG/IMG_4936.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDVfMTU2/MDAxNzQ2NDI4OTI4ODcy.8QDgs_aQbHtFwA8hWknrxa6XFiWmeizqw-SOOMk75bcg.184NIQWJMx2Y3r7EzmZ_gsMfFL8zgjobG1tKIXaNoxkg.JPEG/IMG_4939.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTBfMjg1/MDAxNzQ2ODE2ODY5MDIz.XB0EOs7c2pkfvAh_8HBfBHEOnKeAjHcKEFSx55nhUWYg.qAvYRkwgkiFy2wPIjV3ueDwDWY-K3ALI4lEIamjozKQg.JPEG/IMG_6607.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTBfMTc3/MDAxNzQ2ODE2MDYyMTky.g4UYUSpGDgW6tPm1eIggw_-ekY2epurSTtInqlRL90sg.HV1R66DZbH0NrDPo-iPuzQqRtH03GpDeHSDNimkB3DYg.JPEG/IMG_6588.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTBfMjI2/MDAxNzQ2ODE2ODY5MTIw._1T23uZct41xJmKKWfr75QphAEi9rkOB8AaO6tFFw5Ug.jJbelf8wupXd034jJ9GECIp513Z465N9wB3OYgU3xVcg.JPEG/IMG_6608.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjExMjlfMTM1/MDAxNjY5NzAxNTA5MTU3.RfYahfvIcTfsAfBEifvYMRJN8B9bFCVOuJgkqACTqXEg.eUG19Sn-qQyofS4zX5nZLqB0FcUYUx2OPNjpo2EyBIUg.JPEG.sulgi1016/IMG_0795.JPEG?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjExMjlfNDcg/MDAxNjY5NzAxNTA4Mjc0.hYmm2PNRQzmeIRH0ZU9cRYny6OZi4p5DVwkc88HsyuUg.bzKr146gyBTtoLyDRc1FmnS8qlWNyclUIJ00B6DE8qcg.JPEG.sulgi1016/IMG_0793.JPEG?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjExMjlfMTk2/MDAxNjY5NzAxNTA5MTA0.QRyUfGOD3zqtih3uFouY7EoLAgg1x7c_3LsZmizv2_Ag.fTkktLGw3ijaRSMPWT9FSYleg8YYxr6ASIKMRBP3q4sg.JPEG.sulgi1016/IMG_0779.JPEG?type=w275' }
      ]);
    }

    const existingImages_k15225119 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15225119'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15225119[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7b37db081c4cad654ae4302c9a9d7b30b57f9623?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5e9cf86f33b2ef06db850d9618cccdaa10160908?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNTkg/MDAxNzU2OTQ1MzY4NzI1.crHB8bKDDgnZsHnC829HBfsI88LJnNYG6lZ8gnMPXYAg.kdBuBjPW26FfC5V-LySWSu7kuRcDVlWlt973N6Mz1tAg.JPEG/KakaoTalk_20250904_090950955_26.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjgx/MDAxNzU2OTQ1MzYzNzE3.BJoxatZbazDvDzEnhkyb0DhOXt9uw8ECF6qjz68oBlMg.8vmvCyGWtzzwzoGOa9H_ufRzJX1e-ikiNUKp_sXCrCEg.JPEG/KakaoTalk_20250904_090950955_11.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjI5/MDAxNzU2OTQ1MzY4Mjcx.uyRIMC9rJo4bAiJnn5RwpFoTSVYEZHxigVt1i5SDRtcg.LNSKnLruBC4I-qpu2rjM4rVAiOFeN8txwAzMKshMWzIg.JPEG/KakaoTalk_20250904_090950955_25.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTk3/MDAxNzU2OTQ1MzY3OTk5.AsECZFsiEP1Ltasg3opGTFx_q8B88qegse99smMrXNog.coUfOnKbsaxuYABaT9SzVCVMz66oQy6Ztwjr22vhkYgg.JPEG/KakaoTalk_20250904_090950955_07.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTIg/MDAxNzU2OTQ1MzY3MDg2.GoOH5gv0HXnZq4XpxbPQZKNuR9u6XAOFI9i8r8Ldhhog.p54SwmHRlsVXmJb0RtGZwItAI5ekxyFhLf9AgW4B9qEg.JPEG/KakaoTalk_20250904_090950955_05.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTMy/MDAxNzU2OTQ1MzYzOTM1.9IAGZT4ai7vp0doR5X7TT8IS3sjR6iTeH5yT2JHJsiIg.-Kkz3vCziTMp6J8XzV-GA45YFTMOkb9debHW-0Vh7dwg.JPEG/KakaoTalk_20250904_090950955_08.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTkz/MDAxNzU2OTQ1MzcwODc0.aOUWYMbJ0bkppb8cnszQ0GLUHrs7oQm8KRTwPC2Yow8g.gNus3vZdoJ7LRHC41Rner5j2-npuEvsGChg9QBfddbgg.JPEG/KakaoTalk_20250904_090950955_21.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTQy/MDAxNzU2OTQ1MzY1ODg4.DwXvdf0EiShMEZj9K0v3yiSiph7Ah61D-V2s58spilcg.T3AFS1mfqI84UJCpw7qgBy6IOLs-nvjdTKfrJjPZfIEg.JPEG/KakaoTalk_20250904_090950955_01.jpg?type=w466' }
      ]);
    }

    const existingImages_k21295354 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21295354'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21295354[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C47C6309705A4BAC9E71D4126445B816' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/575FEC70D52F40979C6F95737BC501B5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6c1700eb14ef7ce069e84616723b1e32c04050f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e73c98fa3e026a33bb42b2bfd5fa556b7cacf8ee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6c8f8d7b0a758c505e8dc183f08a1ac8437e471b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/28be148238cdb173d491340c06edc1ba6d321f7e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a82325afaf56568cf8d1ce23cfb8da92a16cfe71?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/15af07ffb14b0be8abd7df5b2de93df69fdaf398?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f2326a96ba431b28f55761cf8101dc8cbda73caa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0ddb330bdaca03a7d02fa2c56fde93d735b8f866?original' }
      ]);
    }

    const existingImages_k9676423 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9676423'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9676423[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTU1/MDAxNzU3MTQ5NzMxNTk1.jgwW6GEh0udgs8JkAo554fDs_PRtFsidAWrXTaUrcTYg.5q04zKzWD41wix-b1sDTF6Ft0qa8c57lY1_s7BxHNf4g.JPEG/IMG_7229.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjI4/MDAxNzU3MDQwMTUzNDA5.GeDTn2PYGHUGoprzUEUJ1IAAqkHryK_d3pG6w5sWlWog.ZPnjtK9xAqNLBHg-gRMqUO7HbkjvyaRgiqIdx1mK1x8g.JPEG/IMG%EF%BC%BF0293.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMjQ2/MDAxNzU2NzEzNzU0NDY0.qNeS4-WS45va5agupxnF3z7ocm6zGmZCSWzvA1Risykg.cEW4d5FwRCr95TYMaLt8RJRUNakqQ3EKpn0XDSOas-Ug.JPEG/%EC%A0%84%ED%98%84%EB%AC%B4%EA%B3%84%ED%9A%8D2_%EA%B0%95%ED%99%94%EB%8F%84_%EA%B8%88%EB%AC%B8%EB%8F%84_30.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTgg/MDAxNzU2NzEyNjIyNTk4.3XwoqhFFf5QDtCyz--f2mE5GJbMEjNu-ozO7AJBFDFMg.9V3EbAM_JlxyqauI9gvdThqt9EXPSdQIxRnm--hxxAMg.JPEG/%EC%A0%84%ED%98%84%EB%AC%B4%EA%B3%84%ED%9A%8D2_%EA%B0%95%ED%99%94%EB%8F%84_%EA%B8%88%EB%AC%B8%EB%8F%84_27.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfOTcg/MDAxNzU2NzIzMzkzMzE4.fs6ACf80kGwCCFuAVLj2nIuUVZ3w1QsiIRMZ-SAnVcYg.t65LYbQI_JTwVWWQtidMSisO9Ilyr5S6_IaIjaUyfs0g.JPEG/IMG%EF%BC%BF5413.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTkz/MDAxNzU2NzIzMzkxNDQ3.Rnp909SilOeu4Y3sIjyFuKZpSZuolZukvcekJhVqwc4g.Q3fOJZQsftlSlIgmsDNSN7tUlUIYRGdmu4LjYaLdrbkg.JPEG/IMG%EF%BC%BF5415.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bQvlUY/btsQpgKZmzK/qBQ3xlpORYMC7P6mvojZa1/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTc0/MDAxNzU3MDQyMTU0Mjk2.YZkaIkpStQYOglF6kM_hN34ocSquFbEwikZvyZYsrWkg.pxgTGGcqzTFVdkadJ0_PAzLflyS3gk12MwI5uQcFb38g.JPEG/20241215%EF%BC%BF110042.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjY4/MDAxNzU3MDU2OTAyMzg3.HQ_vGCtRKkNM7k__ncybSzxfbx-ZfbyqPCufLEYnobEg.7gixIGnV6KTBiro-e7KoZJPCBXpUdB6uoE1cy7I_MbEg.JPEG/KakaoTalk_20250905_161551167_11.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjEz/MDAxNzU3MDU2OTAyMDEw.TvCdn9ZBLX9TLGc-2euNZJ3GAbtFHqNy37YUzJCqjaMg.52CWzFiyyrg5jdPC35QH001a9JvPTiNxbdGFpoCzwtAg.JPEG/KakaoTalk_20250905_161551167_06.jpg?type=w386' }
      ]);
    }

    const existingImages_k8766434 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8766434'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8766434[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7327a41536647b469e72a8101fe4537ae7727664?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2acc317d91fb68d44f0a285f017766d0da38c4ce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a15d03de161cb2da7d8f453b15008139973b41a3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b0f566ea4b3d0e372bdec4647bc5dbbe519ea459?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/258259c846e0b9546d0d15803908ec1d98f099f1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6918b3074551a80c86d3dd80bd4778a2db56e580?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/40a86ca9a7bbe510abe0685176d96cfcef83d59d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAC9h4nrjEIBz9P24VwjFwoxpEP4gjfkYqKdIlozEzCnRlY8XEkpuinlD2QTr2IkTtO6YHYaFIE56O6uErPAwbKi-n138ZiSYbWPcrIibdZZtDB_d03iRkz2aUUUqfuMVelbG4qC-lo_C6JvzoFI%3Dw900-h900-p-k-no%22&type=ff500_300' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjVfMTgz/MDAxNzU2MTE2MjUxNTMy.dz7kDg96kTuL2afgDFEaw-fsjA8Ff_4QEFs3VOutItMg.qVFvtP_HMIB0k1IGLIPAXXmSpsbWAlepM5KLv1szn8Mg.JPEG/IMG%EF%BC%BF9269.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMjEx/MDAxNzU0MzE3NTU2MTEy.kD5d9qMS43w2KH0rm5LT-rTxdO_BfXrbxRp5i0W3aiYg.y4fkWwwD8yrWusJAzEfjXrH-Zj5y46F7VB55DYoPvGkg.JPEG/SE-8502609c-c1bf-4b44-a188-7c6e31adbf49.jpg?type=w966' }
      ]);
    }

    const existingImages_k8113534 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8113534'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8113534[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6166C2F478C740E4A0749434C77B6EE5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CEBE0FA4EFF54C06B37F962E1CFF2C51' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/340D1FB9BFD54A6C86FAB4A9668E8120' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FBE154ABDF5C4A76B6509B6B31E9D1D6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/19C73A864E824DA484E080C28A1E322F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/85AE6B1140D448738942E0BC72215551' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/13ED5D21FEE64F849FF36A394DE6A5D4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2C086C64A399494394D468885BB1BD8C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8F5FC76F3BA64CF4905B2362E9284241' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7920D7A86BFC4165B6DF17EF828D4476' }
      ]);
    }

    const existingImages_k61429712 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k61429712'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k61429712[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EB9C0CE35FB84F56A3C2607522C997DA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F192904F71374418BCF9E74CAECBCC06' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/28B787CC971D4C1CB4EC2AF55D3B9CFB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9867249C523D438CBD7EEDB6CC59DBF2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3CEBBEAA4FC8456397683B9936371F61' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C5E515475DB14DB3B9F61C43769C4357' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/047E906AA756474583DDFBDADDA5E0B6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AF859D4BE5FB4A7DA0D6E82F3BD16314' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D891234257C742CCB81DD2D891A9BE88' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EABBBF3D3313411FA61FFBD5E0AECB0D' }
      ]);
    }

    const existingImages_k26913121 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26913121'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26913121[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/756e9626364748b04aa1787fa403b8d84c539f6d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/682123d359283551edbc4652f0cc5ea3df7bf36d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/538c3072d15fae4933fcc403dcc1811011418cb4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c32b0f4590f6150ba333bd23f044b0cbb2774c3b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/92426c2ce70c189ea69cdae6dead6b5e18e8a7a3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7340c8aa119a21a9d4ae9e814468bbc94affd9a7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjhfMTAz/MDAxNzUzNzA5NDU2MTI4.mTQNPcTFGwWArRISIdGSIKe_8-yaRqLdf3dqpH5wn0Yg.kVIAJN_BCIWnzEo3FCUMm2sFOYv4uKGsU_LnvcjZ45Ug.JPEG/IMG%EF%BC%BF3012.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjhfMTE5/MDAxNzUzNzA5NDY5MDI0.xJunbpJzwYebmqmSS36AVatsqzcM6nCs0FgVeXDB6DIg.lcpCh3SzlB4dxmBXVNL7Y7DMN2iATxvsMU7KiuLydZYg.JPEG/IMG%EF%BC%BF2993.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjhfMjY3/MDAxNzUzNzA5MzgxMDk4._EaHfyBb0y3yyizKj_LhLxYWx6tQOU8xQu-qyk6wwuYg.E4k5OX6C0amY3UOJi3hx1qYTySFwCiS0AOlUPzsClbAg.JPEG/IMG%EF%BC%BF3014.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjhfMTA4/MDAxNzUzNzA5Mzg1NTcz.-mFNzOZY7KAd01iZGBYbofP-c6_gxNXrRZCEio7M32kg.vt0LoWXzsPUSdeGFIIDsUp4r6VRSfuCvnRmp7Wakcn0g.JPEG/IMG%EF%BC%BF3013.jpg?type=w275' }
      ]);
    }

    const existingImages_k1019519804 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1019519804'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1019519804[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9BFBCD274E6E44ACBFD95ACE5AA12C74' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/142F943EBCC7430380CE2533CC6F7C9D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E796839D99964D999D41172D30499C53' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/38F93CAF129D4E8F9BB15826A27DDBB8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1748AC0B49C3498C9817D713848121F9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7344D88C7A2E418EA6B657F73FCB4E59' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E41D684D779445F29B9D7986447D3E3A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/386CC8FA6D2B409CA78FD963D5354DA2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMzcg/MDAxNzU3MDYyMjkwNjA1.94yPIqE3ZDY1QWyG8AKBp__dkg8u6Um16Jl3IfqMamUg.kA4t8JlQtVydHDl4GDLrKreUlB149NnYdiAAwXEJvscg.JPEG/IMG%EF%BC%BF8907.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMzUg/MDAxNzU3MjU5MDQxNTQz.0Hr3VqNdMc4u_rhIHdc0BBOiogc-OQRNu2d7FTVCr4Ug.eCUiWGFQXgMXSvra_JVDoLYh0txZDPgsXQLp0MUX6lMg.JPEG/SE-3b0a561a-8be5-11f0-a1c5-d30a12b18843.jpg?type=w466' }
      ]);
    }

    const existingImages_k939028346 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k939028346'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k939028346[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A9CD960CE7784C878C55F6758095D131' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/7CBD1F9A648546C1A978174CD1FF0427' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/718D8489BF3F48E19224605E4F0AB389' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D1793326D06149DFA271BF52190D27FF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/19B4CA8B1E3746839B4BABC7D1B75004' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/22712852608A40B2966CC214CFDA198E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2AD5704B5FA547B1A0C1282D54402B6B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/51D194BADBEA4FE7A30A3B80C1C2AA33' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/19EFBC638C424C629D90FBDD6A06706D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4fae5f7228eafb33fff95d817ecd7cce9384411f?original' }
      ]);
    }

    const existingImages_k9979566 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9979566'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9979566[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bc73d134efecf2e0c4bc2aa1e5d9213bed5a4048?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ede11ffc8b371b4d26fac8de9c95f952b2e12113?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e1df34d710b8caa6d699c7e48da2dcc04ea4ac8f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2577529b46c9c9fc20c3fd9de60c3b6c569793ae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0bff80402000fb690c42c92153509bffed803b38?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e0af5d1f0a32805c004c2166f6facc7fda915f74a8c23e32872753851abafcd0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6ae8fdef3724d99dcac0dc0d074171ff116bf14fe73b82435397025e223a8369' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3be1338a9ade03c9220aaddf64cd2bc0b6203915d8254bd7e3aa49fe2e05ab25' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/32f030d7c31b0d5918a5e1744fad165956fe368c8fc24128b93043b4a5ada89e' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/57a382e9d99297eb070a66139befbbea26787b1e?original' }
      ]);
    }

    const existingImages_k14973680 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14973680'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k14973680[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/03fd663a60dd08c239213ced924e31ec9d056eee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cdf1def862ae27a88aeac8859572b08a35cbaf6b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cdda72afad649ea3bd45875d91e68d8d9b2ab40b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d684d8b79d8204efee85546d23bfef2cbb4a0403?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ba32eba1ee363ab2a08d4b71c4df4a46798c3283?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3c7a24d3fc144a809911d1c0ce744ccd8f0a7821?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWaiD97Lr6_rXjc7kZUy53HgLKi6YIDO0_lkagesHThph.jpeg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMjY1/MDAxNzU1MjQ0NDMyNzUw.c-mrUzCD81YRddtszAGELzD7cxoZGDakHRadnBQAoAUg.H389CJr_-WLNddy1MxheEzq_Tvn-RShIW7FGCeGWcvUg.JPEG/900%EF%BC%BF20250810%EF%BC%BF172349.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfNjEg/MDAxNzU1MjQ0NDM2NjI1.HKAJDQs_6z8Ui4v4Lmb6D4mPpUXd293rOmih3sEI_dQg.gYEQf_oaNTV2eRU5GAh_o6kW-GLxntS3sXJ9mQxtW08g.JPEG/900%EF%BC%BF20250810%EF%BC%BF171032.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMzAg/MDAxNzU1MjYwMDczMTM0.iS7gi7ojhGnWSVH-lMqLsnosrMRC_9CzY0m0HL9SIksg.0QqK8SQVOb9hIzstvU_5xX7i2ZLd9JHL70Xi6w0uQP8g.JPEG/SE-faf9dccf-79ac-11f0-85c0-e583fbce5f53.jpg?type=w773' }
      ]);
    }

    const existingImages_k1703915972 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1703915972'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1703915972[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/840cf39aab07745c81b5f41a91a86c212d3371e5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/96d228b9c4bf5685570eca675bb65f1413b66ec1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMzUg/MDAxNzU2OTk0NjY4OTQ1.uXNlsUAocc5O58oZl3W5uP_d6wI82QR3CgDc8_KFYQ0g.oTA8jdMHrAUEJSiQk1ogrP_piIdxFV8vKwRZzyJv_M4g.JPEG/%EB%82%B4%EB%B6%80-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B42.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTA5/MDAxNzU2OTk0NTgzNTU3.YcyfK3N1aInc_3fAymqD-BXB24jLJdhM86pN0M1m_DMg.EyfbdWPpoT_4PjT_ojZUqt2YCg4RH3MXOI5UhOFTmsYg.JPEG/%EC%99%B8%EB%B6%80.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjYg/MDAxNzU2OTk0NjY4OTc4.19Le-OVOVBUFQ3vTv5DddP97XXaVHSnn9mQ2IfbEJ70g.vavATi6kmems4K4u8QTy75nILuPtDhkrCsGa5XnE-I8g.JPEG/%EB%82%B4%EB%B6%80-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTUg/MDAxNzU2OTkyNzMyMDQz._f7-l-pHXHkyV-l_FxdDpOFVezMe1qpHigbsQ2z7rJwg.mFnBAzOGGAUkoV5ycFwPpfkFl3s-dy9CzjSV1Q9F5TYg.JPEG/SE-641aafac-110e-40bf-8763-ea0bb093df17.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDVfMTYw/MDAxNjgzMjk2OTE3MjYz.vTP3Uvmyw5dlpUbiyH0hQgVxzWnm-fNKXD1t2rnNknwg.azR7RHSDBebPdn6VgUZ4IFEY3P1sxPiDLnoYblFcJs8g.JPEG.qadkr2/20230408%EF%BC%BF202249.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA1MDVfMTUx/MDAxNjgzMjk2OTE4NzQ1.u8hqsZQdupHn6Ma5SZ9yZDKD6BxqWkW2_AgQv2ByDKIg.SoeQ5hN3F_mJ1OHEbMyXBwfZSPU6vhwPeMWE7N7yR1Ig.JPEG.qadkr2/20230408%EF%BC%BF202600.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMTIg/MDAxNzU2MDEwMzU0ODU2.pU7MKdeCluBem5_ktgZAZfml-2_3tIxBGW1OKgpbVDog.j9WrNxsh1jb4PaZGR4rkyJT_lhxbNnfTMG7BtQiSgwEg.JPEG/IMG_1893.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMjAw/MDAxNzU2MDEwNDE5NTA5.qT3OpI1ir-18-mgwTht4GWLYxUY_u1Zs5ezP3jl20Gwg.Xg34BVj-2pgHOMt5-Sw9vfnZG3QmAyjB9I5tGlvHKawg.JPEG/IMG_1897.jpg?type=w386' }
      ]);
    }

    const existingImages_k1828944939 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1828944939'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1828944939[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9A2F750772A046DD9316EEC65299E7D1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5E0F25A687DB4F7DA2ABE25D98D977A7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/66FA708F571540D2A4D102B2B40CDC64' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2E2DC5D118594CE7947B44DD2BA0F988' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2987A383C7EC48A1B68E452E911CFEB8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/33675445A94844308FD2B4906119A109' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1C27519B2D6A4444973FDCED5A27D8C4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D70335B0B7EB49B8B96F78FB4C01FC04' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7646CB56F66849E7A94828A6D44D7EAF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5B32767FD8AC42CE86752D6F0FAE1A68' }
      ]);
    }

    const existingImages_k1012874482 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1012874482'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1012874482[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMTMx/MDAxNzU1NTMwNjA5ODkx.hPP0FBMinrbFYGN3VhExt2neZdVDIxp_PMKQjwqZ9v8g.G9A8RYNjYL_yTAfn9NkiGwlEoaeFJKVxPe0HD3q8_rYg.JPEG/KakaoTalk_20250818_225633715_24.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMjUw/MDAxNzU1NTI5ODg5NjAw.GWO50E3bCXYBWb9HFlK2Nn82jwBxlFgp_09jJ3txRYMg.WIsdC7VoElAR8XeSWei3MeV0syuiWhiTui_UAr7txp0g.JPEG/KakaoTalk_20250818_225633715_02.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMTYx/MDAxNzU1NTMwNjQxNTA0.Pw0A26J6RJpsMF7wOcZTHdo3rWzBCmmmF3fW3dOPHLgg.GB5AwDxrMO7MD1myfNQlG-C9kbnyl1fqcZAce0NdYdIg.JPEG/KakaoTalk_20250818_225633715_22.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMTM5/MDAxNzU1NTMwNjA5ODI3.5AmjLms0RMVbAh9AtFSZyrsEm6oqoRuIEhbaGc7iba0g.E9wp9hfqXW1zErdnwjmUFhWmEAAnjkeTHEUIHyI1t1gg.JPEG/KakaoTalk_20250818_225633715_18.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfNTUg/MDAxNzU1NTMwNjM5ODkx.t7rdghcVFkEiMw-GVFlVQT1TT6XgEbIOFrnezW_Opkog.hjewhHw9waLVpRffOkMBOsUjDBaJhXndndCrax3NT94g.JPEG/KakaoTalk_20250818_225633715_19.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfODgg/MDAxNzU1NTMwNzY4MjUx.c1EdqY0W5JMqzap4mbwcMDvD27025Vjq0rXAqWZncxwg.yEfSAMwwQKBeLWJ6Hn0NXOAfzrPDQj2DC-jd6Bg4SFsg.JPEG/KakaoTalk_20250818_225633715_09.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMjI3/MDAxNzU1NTMwNzMwMTk3.dCQibHdn_2U1u2ff9Sl6z5IrLfGOCGrKqFW_RJLHAEMg.Mc9YSRmR0uT3KsyN5qjof_yWu5MvlhgKTGd5LU2Blvsg.JPEG/SE-613a3189-962d-49e2-8a55-f81e7fa6832d.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMjUy/MDAxNzU1NTI5ODg5NTc0.g6_vsLyK2BYm-bpHOrzMUBT46nGuIn9XPoELI8V_q2wg.ZsT-9jlztak0fjUw5U-_cIRWBRU2iDEuvnIwxLWlB1Mg.JPEG/KakaoTalk_20250818_225633715_01.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfNTIg/MDAxNzU1NTMwNzE4MjE3.NAmYybcNiwoZ2kSMh0zF1zoHi4oFDHbnddPuAUJKwUAg.DCBWtSHTD5k1zZl4e8f1f4jr33kb0yQHE95EfMhjeiUg.JPEG/SE-c5891fc4-b0c5-4d16-804b-685a4a2b662d.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTlfMTM0/MDAxNzU1NTMwNjQwNzQ3.cYuJHbM1snniejr2rknGDJi6v2Mc4TEUVpmEcFv6r38g._VOLxtFBoIpp5Apey9PeOVbw4n5PcnGUroD3sATqg48g.JPEG/KakaoTalk_20250818_225633715_20.jpg?type=w275' }
      ]);
    }

    const existingImages_k1055393258 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1055393258'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1055393258[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8db8439e399a7ea7d3ee9484e5aaaa871d338872?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa79e1e9de0128972930e8f083754c7ffbe44d9e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c4073f142a4ce4c47667eaa48384a3ae14adff7d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bc387e80536b01dd6cfccff8c83ddf05af3620a6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cdc71378f1f790b2bb17f65fa536341c9c2e6f79?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac187faeb5a8227e79a7590631090b53e6fb622c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/55458bf839406ed1493e9113d70661366755f3b9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/15d440433e560a3c6803a39a8cb4d8a8abe3e3f1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9605379d4830d1ca6502e83868c1d8e13496dae0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ad3d8d2b04f71ffb7d315248bbfd815953ccc32?original' }
      ]);
    }

    const existingImages_k564683615 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k564683615'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k564683615[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/76FB4C27ACF649598D715A08E65ABF02' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D49D3C9E0C68434F8B085BF28172ACB9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2172E2EE30184BA0AFAF83A2F94E1B30' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/91530242804E443F9AE7504F09EE4FC2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/97CEBD5D8DE2417E9E84BFD88468A355' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7A4A21AD3D1C4D2D81150A22A5206872' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/60664646A7504CBB93F847CC112E0BFF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/69210A53E91B4CBBB490C828231F47D4' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4EB550AA27D442679596085532E5BEAF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B8569F0A1C19450A9DE0C092B3383A0E' }
      ]);
    }

    const existingImages_k2031523879 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2031523879'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2031523879[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FEE90C9D3965429581FDBE234A914FEB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D16F0696EABE4C459A0D46CAEA1C4102' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5C0121AA737F4C37AD363934764CFDF1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d19806e369e337e5f372725d8581f2b978312afb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9bceebea895a928ad03f479d3bbabf4fa3a68f34?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/54dbdc2a9c7f556422efa6c109cf459159942a5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eedc3a26c95ba70edd583b6d9aab707830f0bd8c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f2290910f1b946efd657173a5c4d3c492f8e32c3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c411870a2d59f4ff96dcb644b9e11edbb1645b78?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e3e0971e3ae25d8fa33bbe8caccb19769634eb0a?original' }
      ]);
    }

    const existingImages_k1657150205 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1657150205'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1657150205[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6eede7271f68a1e1ad8e5af7c525d8e1714675cf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/efdef31de0d09587794749167e365c3142603e34?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/59290311008e7830522077baef08c2ca2472c40d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c020e1707ac2d67a4176bb2fb9166bd7744fc6ca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a473e21d89f7f0b8aa9faa603d600f6ff8c7d1b8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a0d08caa1bee9ea29eb73e8d014ddb699664c8ce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f0365fe1637779bad902b0dec3c95971b4df6b45?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/63e67972334c1df876b51b45b9ad32a8d90ab8f1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eed8548782cfcd3b441006dd7ac5f3e652221183?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5536bd4edb8fd4b8a90dc9d47660b4cd13b56bc3?original' }
      ]);
    }

    const existingImages_k1527981986 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1527981986'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1527981986[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/916B9FF987D141C2B11522C62622C5B5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9930820F53C145F0AC4AB18AE95F6B3F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F683518EB1C44588B8B09DAB61B1A488' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1966704947724E4DA4831A6FBCA75690' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3055A70423F34877A735BBE44EF05E9A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/44D7C810EAF545FD96ABC130F01A583B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3CB0F4FBB31A4826B8313375567D6BEC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/854D8EA05B26428BBC802BD7EF28A767' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E6F158A3A46542C3B4A9DD1474AEB851' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7E8BD3E3549544949A70269FB84228B4' }
      ]);
    }

    const existingImages_k10693502 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10693502'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10693502[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b750ae4de60d46f146515320998a29d2c806c2e0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8cbc1eeb9d210a7f63ea84ccbf9f4be981560c27?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e30a1101c57eb4cbd34bfe59ae830dfaedff09dd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/69ed7fc9c0600e79f4bc87c993929627386af617?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c6b9a58de6026aa7e3301febabd4ce4d905fd0dc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/afd472d9cdbaa3fd60b099386639e960d4af154e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3568ce49a37c9bb03a212f50024b3099f5e93e65?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e7fa0dae0457cdd5bfd5fb110d8a4c3b573b1ce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a30528f9e88a9dce3b68387eeff4ce47d280eb71?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a3958c643d3449347356d67bb89c233ab5e437ed?original' }
      ]);
    }

    const existingImages_k16393579 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16393579'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16393579[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/58341353C42B402FAF57DAE926922D45' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B663E52C6FF84E4F915D02C978E5B0B1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/CCC2E6D5B46E49358E8A4EE014BAE9F2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a9345f69904596ee65cf15137710489ef050398f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/81fd667fbbfb6b01e5c69fc68ded1ed235da6d83?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqrAAPOWfa_H0pwbzWxYxBZjUUbFIKFjK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqpZH208nb_lZCMJfIzy4408NK2QhOKDk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqpYHh89wp_vnAO0KOkKzkFB1Cv2ryFRK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjM3/MDAxNzU3MjE5MTc5MTE3.PtWi_up34Lvma53Bt5ISaq6g_uf7l_w4Ukrp_IEWtAEg.tH1sTZoLFcgPqVlbe8oozN2SdnGZt5T_9ohiPBkSl30g.JPEG/IMG%EF%BC%BF8641.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfNyAg/MDAxNzU3MjE4NzA4ODg4.b67j1UfbtcJ-umCdy3KmZ8YprydMikURdvhyzgrJh9sg.vThhXIFH3ZCtQhomTXNUXDTNC1dwBY2nzvwEVqTQfhMg.JPEG/IMG%EF%BC%BF8635.jpg?type=w386' }
      ]);
    }

    const existingImages_k7993084 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7993084'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7993084[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dc23fe57ba8f7121b467a4e579186700bc79abc1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b092db5a7aae90f7b959d2127c03d0ccf13fe7bf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8bd5efd7853091942e23b93b305d76edbb52ba44?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5a97a9b33bbd468e7401d41ed5947af1a968cc1e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33f6b553e32de6c93b4e292c570e78c01d41a4ff?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0952d193291da21a7cc90fa84383ec8b0e1dbfdc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/596f7a2ac8c5ec6b76888c731c635ac05e9c6333?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2879703d48b854b0e3335217e581095087b4a348?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b81d2b1ca3cb3711e8cbf354522cdec714370e62?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5acec89f29a027a65293f382eb21eb047feaad68?original' }
      ]);
    }

    const existingImages_k21326012 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21326012'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21326012[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c109bf5a1db7d088d295a59167928245f1bf4cdd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4d98903b502457f6a9c101b5f522891495704a4d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ddba55bfa840b54b6fc6b07855426bf7608de568?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c86064cc55b8cb1ba437b2a48b3b9f3c0602b0a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29f9bbdc279a08a1a597ea7f87fec5850d118186?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWaiQ2Gu4A_NOfsS0asdgLZUhfKrMuq91_lkageh6iWP0.jpeg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMTg0/MDAxNzU1MjUwMTQzOTU4.R4QDIhEMILeRRrrELM5WbyDB-phmng7ZUNQj2TxEYbYg.B7cXVv-a17e1KKqV-r0xOALFCJjmYxpTtuEzhZ4Cgzgg.JPEG/IMG%EF%BC%BF9805.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMjc4/MDAxNzU1MjUwMTQ0NjQw.PdJaKFidQOHmRNlnsgnbeyWu1peSAeUf79yC6ENJ4yQg.gNlZMjce67DqFhzZOszRkewagxTKaFHq9_17uRJ29K4g.JPEG/IMG%EF%BC%BF9803.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMTIw/MDAxNzU1MjUwMTQzOTM5.vLU0DnziTF4LUwosMF4-EWijf5KQCUFvq57_S7dAMyYg.VpWr5rlofhMfFlBiW-Z-XgvSPmsP71jwb5v5wS8i4q0g.JPEG/IMG%EF%BC%BF9797.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMTAg/MDAxNzU1MjUwMTQzOTA0._qdlR3C_vKE9ZbwKswMsTYM16UX4IYnpR7IIRfFb9p0g.Nv-7rtqeThwUI605ZX03vytE4ANvPnS11ZbLkjsWHvYg.JPEG/IMG%EF%BC%BF9806.jpg?type=w386' }
      ]);
    }

    const existingImages_k1224687320 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1224687320'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1224687320[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMjM5/MDAxNzU1ODY5MzU5NDc4.iB8MSdW_lHCf9mJboknq7BVwkG7ZMY4pxbzRbPlsyXYg.mtS8MKl6yNIvgcFzwfPUb6cto8UX30nBIr0d9IiesZUg.JPEG/900%EF%BC%BF1755869332772.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMSAg/MDAxNzU1ODY5MzYwNTY3.A-QAsj_thxhYUiKVBUDf8M3CR96F4MuxKBepgsxTcQYg.OdbjD3IBHwVKGD6oEme9GHmbq57fe0UyXlBSTRCYIYIg.JPEG/900%EF%BC%BF20250821%EF%BC%BF210223.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjdfOTcg/MDAxNzUzNjIyNzUyOTE5.0zQFw4z6Q56Jy7XRJEiAAHALg4DOsKUsM3ei09eEzr4g.YlDmnRn7ij7nRflr2Udpd6Cxf3w6F_tEQ2s6z3Pimt8g.JPEG/SE-327e2ce5-545d-47a3-bb6c-a6e49c49e607.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjdfMjEz/MDAxNzUzNjIyNzU2MzA4.5c9okGmnWX8R9AMibR_hCLEM1oYUjDbNQ49uq1H14xUg.9LryFX9_Nll4mNAJ_TYSrkjNy9Ij8NlS9nu__L_vt4og.JPEG/SE-e5ac6693-2d4a-428b-8193-210933bc5d5f.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjdfNDMg/MDAxNzUzNjIyNzU0ODQy.8R9GVLT1B4dJ1GImQ1Mu6tpYNz23V221Zie-oS6DIv0g.e3nPt_tncueXz2z-RGOrTYuhPCLOwV794MTNQhij6Kkg.JPEG/SE-ed41cd7d-3ebd-4f5c-9109-e1775c96153f.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjdfMzMg/MDAxNzUzNjIyNzY3NDAz.MC9UwCVJYcJwRwoGLgz3dH1QHCSHxGfStZeR07Gkxisg.ulR6d0zlp72kWY91LMLOzQE-48Wx66uyepuRxjMiaBEg.JPEG/SE-87abcbbb-621d-49ce-89aa-720619858895.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjdfMjM2/MDAxNzUzNjIyNzU3ODE0.JQ3Zqs0OX43CErezsvaY41FLmgwGnLtsZU3NG4_Leocg.uPvAKvPL_mTOYOO9PJ-j65WVn8x65yufMmBbRQUwEzYg.JPEG/SE-26090a97-957e-40f1-bd75-da41a720674f.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfODEg/MDAxNzUzMTYwNjc2ODI2.8IOCRL6uo9Rr03QNpJyFhyj45I6LEFPKanVl7IHP2GAg.b45CYS8ERjYXuGIEh5ApbMKoTPw41inHL1srcwHVfIAg.JPEG/IMG%EF%BC%BF6081.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMTM5/MDAxNzUzMTYxMjgxMzQ5.CCghwJsCj2I_Kjfgr7nOvooyFtLBoAm0aK9vg-XPQqgg.Jm8k4R8sW6CInz9gAbvEjimkR3jymIPJo6Quo-pTqlIg.JPEG/IMG%EF%BC%BF6085.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMTA5/MDAxNzUzMTU4OTcxNzc0.j3LG_rRbZ7IHg3unsoHKQONrH5s6aPV-b-TCvTus0CYg.qxuymAPC-j5lRArZZapJ0P0s6MOLXVpo4nyapN0espAg.JPEG/output%EF%BC%BF3021670957.jpg?type=w773' }
      ]);
    }

    const existingImages_k1503321639 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1503321639'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1503321639[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FE61E2DBA6B541EC84F401424721B7D5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CC57AD7689634ABD845AD40F95140557' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/31642228B8694EC5B50739A87C1E9DEE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A5062224FD6245DBA6757C1577559FF8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F6EFB86C512D4A68AF44F79919523C3D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/767E97A2100447518CE1A40F486A8B28' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A3904867B10F4CC4BA7C1AC77312F105' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6404E290FDC647188E21CC686FE37D1D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cb2b6d85d0aebc1b3b3fdcfa8bf01d51d2025927?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7ce05fe116999561175c4b2b45f0c374714b9236?original' }
      ]);
    }

    const existingImages_k13584562 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13584562'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13584562[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/D5237E13C0CC4D36B5863414AA0F0BC5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d5c0cc66d694857e8b0f207e32ad4fa906ed2ec5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0dbe3b2092a7a375054af16baea7611fce24d37f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dc7e9415473b883b780753a5e4d3f85ce076728f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4d748e04bff0534b1bcbb627c26f1d9ddc586746?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f57105b0cbf54fe5fec983120a933198029f55ca?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ddfdc44aa53be66d9268fefdd61a6e6bcb6a1ec7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5ae4efae2e56d258f696031aabaaca2f0aa9c165?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/46e108940e9e0a0379709452ca82a09d13b4cf48?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eeffa536e589628762f71e29765a26e4228a364e?original' }
      ]);
    }

    const existingImages_k7966850 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7966850'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7966850[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3073456abf74a5317da9d9f2764e83301d01e1f1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d81c6504cb2a4d8685f8f67e5ad0c8c899a4c04?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0fbda3d22d935bbef552d10a813d0b896afd8333?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83b03a6d93b27b1c24063ce23fe976f0f32fe9b5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/793bf86f2c9d42af44a897604a9dff7e8e3d22a7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e6acc6059f45c4696e8aebc1538c21ea273ea0c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTAw/MDAxNzU3MjMzNjcwNjkx.TzPc-F0vXfX7ygT1Rk3iT7ukd3W-6fZBu1UZnX4IX-gg.M_E7DXy5QY_0wPXomsvHo9eR2916KObuA-xzV1leWYgg.JPEG/SE-f4495d8b-f32d-4411-a4b4-24cabfb6911e.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMTk1/MDAxNzU3MjMzNjcyOTYx.Id95iGJVWieLAnDsSk8qKSO7GGllzaGWYSAXxQ8yOcog.uHseb2hILiWLCDUITGcaZEjxEoaPkS2rdl_LqTIX30Mg.JPEG/SE-0413055e-c5aa-4fa6-a72a-62d1f4806d63.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjQy/MDAxNzU3MjU0MjU2NTUz.qAPU2vnIPm1GFz85AYV5FDbjb2q7GjX8ZYMScFvjkT8g.mZDjhnCLrTEPBfOiaLJCzEqYy-C-CsVh8aew3InqY2sg.JPEG/IMG_1293.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfOTUg/MDAxNzU3MTk4NDk5NDUw.CuuiK1VP3ifaN1bewiaMDMWgR3FD10Lc_1AbqyG7N0cg.ATTZuzzm_uzWv7wBPE3mSYIgOWELy8OS5Kjb4e5c5Ukg.JPEG/SE-8d9de8ed-6978-4269-b28e-66ed28b996de.jpg?type=w966' }
      ]);
    }

    const existingImages_k13127748 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13127748'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13127748[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/123946494F2B3BFC19' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FE97D7D4A2AD48DAB92B0E1627647395' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D7BFF449795D4CF3ABB7BE9310476CC3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B1A085966A5E44689658B8AC77D4E632' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B3998EA63158485ABBD5755AE8B95E42' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6C04E6849B604632AB60F58AC9367995' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B36CC72CDEA740079C904E43B80FBBAD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A7201073B4FE4FC7A302A4FEA1C0A40F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/204926344F419DC013' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/13254F4D4F2B3C831A' }
      ]);
    }

    const existingImages_k16860063 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16860063'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16860063[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DDFE0E0BE5774805BA1D050182BDD538' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/191013FFE70B4DDFA73BDAF9D2A1FAD5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/1FDCBDDCDA0A4EC1BC4B00041DA5809D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AEBE0A5B452D4D3699D23EBD3BDD4061' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b9265074b546e77ffb940ea09b1095bcd2eb236?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/566d217c96ffe80c8acac1f767f57368fbbc3f3a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ef6094bb7c7bdc0e3d7bafb9ec76b3091d352003?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1962c3f6c224e5dce7401857958b61397216c75b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e926204042e3b2182334651bf1684bfffd80c551?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f8ecffa9a866b049a091e364339ea8245cb8fe08?original' }
      ]);
    }

    const existingImages_k8326896 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8326896'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8326896[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8BAD4BCD109F4F33AB3C56B6694E4D71' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EEA66444616B44E1984F78A1D252811A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6CC23C7E72C3463CA59BCAB1D357BD6D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/29C65EED68B54224AEFBBE044DEC7252' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1CF70FA6329C4E6496E6E5174E00229C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/112DAC4E501780601E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/12494A475017805A14' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/1334D2475017805738' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/1433654E5017805F14' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/6AC3DEF430AD4B86A1FFDA10B1F413F4' }
      ]);
    }

    const existingImages_k1600738498 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1600738498'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1600738498[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7137841ff29846670aaa525145c79bd4c0f41e57?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c63211d94c0a1986a2d78a49917caeaa51d474e2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0a2252bdfdf8f6f597acc6331db5794f81765df7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3a3547808ca31c05dc5b050e58dcdc3e0551c22d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ba70e894a726566fea11da300428f092a3a695f8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/363f0a6effbb2f052d91b28a1063d60e5225c218?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTQg/MDAxNzU3MTY0NjEzMTc2.4SWm3XFAyeVuNTmERVNOR2Z45nCoixRtcODrD1FS4gMg.ZnzvJAVbiWpgdFyTLbMMrfvLmu5PEoYRjZTzfJxYr5Ig.JPEG/IMG_7158.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjYg/MDAxNzU3MTY0NDkxMTU4.FkF0SOwrnMZ7XL73V52f30oQ2_fImbYMQ8SPryMrGswg.mJ_g3cbIcbFkKaM2sZs_u02ZlYKM0y2jCJI79vmqAWcg.JPEG/IMG_7153.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMzYg/MDAxNzU3MTY0NTk5Mjgx.s-ZV4HRlxYJDPBeOkpF2aFfuQ3vsNMk5b6RrFq3uNzIg.TThGQP56uIPnRE4PJWMtkYZr4fLrSzCUE8HXfV6VV0sg.JPEG/IMG_7157.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjUg/MDAxNzU3MTY0NDk4MjI5.ewAM9Tbv0Yun28gMICOdV387lPTvF03Ep028pyN4DGYg.tBq970vxeSIoedCMBtrzSLm7myJndBPkyeD1VoRF2zwg.JPEG/IMG_7154.jpg?type=w466' }
      ]);
    }

    const existingImages_k1744411158 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1744411158'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1744411158[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/B163094D1B614EC2A7D1AC9017FE35C1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/9CB52C53E76B4D81B4DB32FF6E118A1C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfOSAg/MDAxNzU2OTA3ODQwODQ5.HzCpm1VsdH1teis8Na9xFiwhJF-5j2BN0nKsBBp6hBcg.18-jj-v82Z2wH_iSVHSQjrUi0kaffr06ESzfYKuvtcAg.JPEG/IMG%EF%BC%BF8339.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTgx/MDAxNzU2OTA3ODQxNjMx.Qx_SLFMV8-XVTNEtK00Il21wPUTZb-F9a49sx7e6RN8g.3ytmIXCu_4hf2eh5dSSZhIzU_FC7_j2MlNHOaoftHjAg.JPEG/IMG%EF%BC%BF8340.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTAz/MDAxNzU2OTA4MTAzMzQy.1z76CTWJbwxtw4P3yKA06xU48Y5vhBXn3pjn-kyG5Oog.y2yELLyWjrHiGaqCQ7mTQ5TyiUDKVexWMBXvsF_daC8g.JPEG/output%EF%BC%BF3615234212.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDlfMTM5/MDAxNzQ5NDMxMDk4MzE1.hSeb1kRoccaUbkEhEah7n3BFgwsizZg-bnrQbye1Gisg.Y0nrPjtLkroHUUuVym8JHDvujNLa_Efxl_vw5P9GBLog.JPEG/SE-899e3f67-96f2-44d5-aff7-a4e9d3fa2ee0.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDlfMjQy/MDAxNzQ5NDMxMDk1MDQ3.TByUE1FPvVANmfeApOkl6JNbdqiYzqfz8Pc6HaW0o9gg.keiyXySTKjgP0G72C1r0BwcBUXkpqDkLw5LKSQD5Qhkg.JPEG/SE-0cd5d5f1-e369-4566-95ba-9aeaa21ed53d.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDlfODQg/MDAxNzQ5NDMxMDk5Mjg4.bSlP-cMRGs2Os-c8HiTvamHN0EtXz_Q1LAo3bP2ISdgg.5ApENsfYjumEUVKohOi8qvp5ZBQISvmMdReHbCKFOoog.JPEG/SE-312f1f9e-32a5-4821-bee6-88f0ae5c9698.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfMTQz/MDAxNzQ5MDIzMjYxMDQy.Itc1DgY9dgekEVFnw0WNzTQrSZwKbwFMulUah0b6iiQg.9t8nKvK46WXWdKfeG9utDTNg8ZJsUQ_WLDCt7QYzr8Eg.JPEG/KakaoTalk_20250604_162326609_13.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDRfNzEg/MDAxNzQ5MDIzMzUxMjEx._wgDsL_vpt6-IXkmDxJ35PaJXWaaaMPT9WG25szijsYg.NO2orHSu-HhDpXl90TayySINlKO6d4BrVtxjK0z3r2og.JPEG/KakaoTalk_20250604_162326609_25.jpg?type=w466' }
      ]);
    }

    const existingImages_k15944041 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15944041'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k15944041[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac1d9d618da666ddc3f6ec5483ea6d604672c3d1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/faf124679ad00fb4119ea86e02591a9d1ae60414?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e42d358eaa1d201cf2a1ee2e36aa51df89506562?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b93b572836f9f1801a2d16cfb205ddc84062c22c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcWzimhxe_0lBgYGbJYvpDJk5VAfdDz1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcWxSolNL_1KdUVwKmQ9Z5enJ2SKSFKk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcWwTtAs4_Qytr1ldmDaPqxFcPOBGfZk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcWw60tex_LivBKAA2U2rCQMAELWKaU0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcWth87qA_OiBqnpYMSKbudVJKII7f8K_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcVyq1n6V_glP2IKNnKKwIQWv7g90KbK_img.jpg' }
      ]);
    }

    const existingImages_k10360255 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10360255'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10360255[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4fc6f662afb24bb2681a34dd80faea859bcde4c3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b2303e33a1d83a72d51f8f5882e087f503c419df?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f1cce92cde52310e989990df392bf0e2445981ee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9aeaddaee966e4b2c126ef23fbc89ed6457c219e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c49cc18cd8b166c0d6f47cf1439bd24aa4c722faf3f1b84c55dded0e2470c8ef' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/59280eb895e706fb0a69518cb2a9d594aa0ef921?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqudLl9jOM_iCAukucqRkp3fXYGfLXI2K_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqud0QUjFz_gUE9eVm1B23FSonVrwVTAK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqt9yB0cyK_8IOTyvKiP5VqAROyUf6ORk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfz4m6Ka2_UewTm2WKqJlRZYid4KB3Kk_img.jpg' }
      ]);
    }

    const existingImages_k1923092063 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1923092063'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1923092063[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FCC6A5F2453A45E8880C23ECFE8B5EA9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5A567F08327A40B1842386DBE7AAB840' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EEFCB9A0F711409FA27E8728A20838BC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/413D922C19A648A6A2D0E83C8F306540' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3C6DABC8CD2C40BEA0D180336FB0A2A1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D010FFEDC0F540D7BE619ABCAF11AC9B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/EAC9D06C326B4D498F3EDD0B6C902A79' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6AED04FA10084E80AD293973B6E698E3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9FF9D43EDD304D2FBF0CBD7E9E0CB734' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AECAA01E90924D78A9F825B66143EF65' }
      ]);
    }

    const existingImages_k754992038 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k754992038'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k754992038[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/824ce99171597330763a639e2763ec25be32d2eb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/716b4a02a33b06ee41e4d2bac17d20bea3aaf887?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/080f6c8be7c1fa288f17ebbb92a729edf7949c2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/38b0aef07df612ea72291c3fdd61d48401c2e766?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c35a68bc9fe0e713f37dea53a183a8ae4b13f5e7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e5c203849812a5da18786aad7280bbe830a9261?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c75bcc655300c88806dbbea2604194d82d68ba17?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/42cdbbae8de86654b3484ab1269a4006865acd4e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/21ff07420df5236f4d3575ff4f7f205fb8a9fadd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e92539be342cfcc29bd9944dbecf36838de057c7?original' }
      ]);
    }

    const existingImages_k24450217 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24450217'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k24450217[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F1AA5731B1174AF6B9C24819B85B21E3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7F8A2137330B492BBDBB43E8D4835084' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6A93D0ABED114A28BF7D079689280DD7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/057FA81F1ED84F1EA7B36054031F792F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D4EF5F20E2634690A9E3875934C9E998' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2F3E57A7E5524FC8B435ABD8E7B3C390' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6C05A5D3B222450CABAE8A2F02B9022E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/99F1640C41944592A60F84DDD2B2924F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FED2FEC803DA4D299E3AD8000D727DDA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5969DA850DC3445887467A8F0C73BB3D' }
      ]);
    }

    const existingImages_k27287602 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27287602'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27287602[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d9853d52316ed388b03f6347451862d465375465?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2877d39d53fcb5162cb32afef50ef05e14444be2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/F71B9F54CC6F40F0860AFC1B2A907D72' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/9663002F4C8944339CCCA87AE2CF6820' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/D208DE3692BB41298AE4F586EEBC66E3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/50A77023FE0E4E05B4D5652D2E114B31' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/185E0B63004D4DF59A9555BE8C2B6B6C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/18075CB2F1774408880B270B0B078263' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA2MDdfMTU3/MDAxNjU0NTc0NTQ1NDI3.4U2v8Twe3DXoBRiOeXZQW6kcv2vJ4v40s3h_AJxHALEg.93JhMfI18ILyU3WNndjcVtzgwzVoimSSFbAn9eDFhNAg.JPEG.sunwater1997/IMG_4199.jpeg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA2MDdfMTU4/MDAxNjU0NTc2MTU1OTcy.3oXzMl6Ye2Fg6-wYEqNrhQC9qAOM5iaEQVd2jsZrASsg.9MXFfoMAoYH4L599Ob9jF9Ze2psTEaSaUGXXudj0Okog.JPEG.sunwater1997/IMG_4209.jpeg?type=w580' }
      ]);
    }

    const existingImages_k956062471 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k956062471'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k956062471[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5A1DE5064E4B4FA089C7DD96DB9BACC5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D95D0B51B1D34D4687BFEB9C2607F5E0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AB171428940E4020835A7B9055580113' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1FB6932DF2BA4228AF542025792317B3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A00E733BE91340BB8B86ED0DFE259F38' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/DEDF6350659248B9823B858248F9D41B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b546b52b3ba6ff1cc048798dc1b488ff4d591f541b886406330cad289751b6a' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/448e7c4f1bb1bd0ba07a405f59bd2000e670d309?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e3a16f92ba9ebd7322291046374f6320218c88a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fcd136527aa1adee6a31973bf1e14347adcc754b?original' }
      ]);
    }

    const existingImages_k27504105 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27504105'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27504105[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b33ae1ccd98cf1eda60ee5b5b06c8420f16e1d41?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d48a14968fc3725dbc0d2ea683833e6f0ab33a40?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9b1a40ef4b224b50b30f3ea321de6c2c2cb58bf7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/75990dbd6a5d233b81bfe078b5c4c9481d5918fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/696495259c8c3a4fae2bb1fcaebe263a251ea29a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e47d901225ba84922b2510f56e01ab2b94053ba3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMjc0/MDAxNzU0NDkwOTM4NDk5.lK-ALju03tC2_7NY7ytEQyQ-w7eeNISWyMOxGyw2EbAg.fUxvM5UzOXDISitU_IeJh2uYpn04Rkfw0GKZqsm4e4Ug.PNG/%EC%A0%84%EB%A9%B4.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTdfMTUg/MDAxNzUyNzIzNDAyNjcw.JpECfcpNpQZv2uJYTDfxs0Pkg5bbBWNNq8XdaAmsxdMg.vgY5bee4iDAxa6Jr501ZsAMJRp322_AhA3lnqXt6i7kg.JPEG/SE-8B558B0A-7FA9-4572-948D-EE9B3C70FBBF.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTdfMzQg/MDAxNzUyNzIzNDE5MzU5.JkpLuAPzwaDahXyu5oykNG9Iu0OkPDDxcl61aD0wjV0g.yQxcKF5GPkdu8roHtiYh9PEVXI4iJKejnSxbFb2Xnm4g.JPEG/SE-548B5C0A-B6E0-4091-841C-BB4A12405A6E.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTdfMjEx/MDAxNzUyNzIzNDE1NTU4.zB3gFhrSG5Yr9ry8wkJt-SxdAJsOiHjlQZVe4pXCnycg.7JVUbS77pti26Jshw7FVAOlHBduy4Dxz7bJet_nEFRog.JPEG/SE-360B3E48-7756-42C9-8E6F-6268760AEB23.jpg?type=w966' }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계: 결과에 담긴 categories 기준, 중복 방지
    const spotCategoryRelationData = [];

    const existingCats_k1125687908 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1125687908'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1125687908 = new Set(existingCats_k1125687908.map(r => r.spot_category_id));

    if (!existingSet_k1125687908.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1125687908' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1771074804 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1771074804'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1771074804 = new Set(existingCats_k1771074804.map(r => r.spot_category_id));

    if (!existingSet_k1771074804.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1771074804' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1562813267 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1562813267'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1562813267 = new Set(existingCats_k1562813267.map(r => r.spot_category_id));

    if (!existingSet_k1562813267.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1562813267' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1362526805 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1362526805'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1362526805 = new Set(existingCats_k1362526805.map(r => r.spot_category_id));

    if (!existingSet_k1362526805.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1362526805' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k824465369 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k824465369'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k824465369 = new Set(existingCats_k824465369.map(r => r.spot_category_id));

    if (!existingSet_k824465369.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824465369' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1437199692 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1437199692'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1437199692 = new Set(existingCats_k1437199692.map(r => r.spot_category_id));

    if (!existingSet_k1437199692.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1437199692' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1348776376 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1348776376'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1348776376 = new Set(existingCats_k1348776376.map(r => r.spot_category_id));

    if (!existingSet_k1348776376.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1348776376' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k19622978 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19622978'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k19622978 = new Set(existingCats_k19622978.map(r => r.spot_category_id));

    if (!existingSet_k19622978.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19622978' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k19232119 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19232119'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k19232119 = new Set(existingCats_k19232119.map(r => r.spot_category_id));

    if (!existingSet_k19232119.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19232119' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1191233712 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1191233712'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1191233712 = new Set(existingCats_k1191233712.map(r => r.spot_category_id));

    if (!existingSet_k1191233712.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1191233712' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k994977541 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k994977541'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k994977541 = new Set(existingCats_k994977541.map(r => r.spot_category_id));

    if (!existingSet_k994977541.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k994977541' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k934335737 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k934335737'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k934335737 = new Set(existingCats_k934335737.map(r => r.spot_category_id));

    if (!existingSet_k934335737.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k934335737' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26969937 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26969937'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26969937 = new Set(existingCats_k26969937.map(r => r.spot_category_id));

    if (!existingSet_k26969937.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26969937' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k108763820 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k108763820'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k108763820 = new Set(existingCats_k108763820.map(r => r.spot_category_id));

    if (!existingSet_k108763820.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k108763820' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12555727 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12555727'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12555727 = new Set(existingCats_k12555727.map(r => r.spot_category_id));

    if (!existingSet_k12555727.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12555727' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k24580752 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24580752'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k24580752 = new Set(existingCats_k24580752.map(r => r.spot_category_id));

    if (!existingSet_k24580752.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24580752' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k492426337 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k492426337'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k492426337 = new Set(existingCats_k492426337.map(r => r.spot_category_id));

    if (!existingSet_k492426337.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k492426337' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k14564932 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14564932'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k14564932 = new Set(existingCats_k14564932.map(r => r.spot_category_id));

    if (!existingSet_k14564932.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14564932' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15239464 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15239464'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15239464 = new Set(existingCats_k15239464.map(r => r.spot_category_id));

    if (!existingSet_k15239464.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15239464' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k19972104 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19972104'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k19972104 = new Set(existingCats_k19972104.map(r => r.spot_category_id));

    if (!existingSet_k19972104.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19972104' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k14100981 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14100981'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k14100981 = new Set(existingCats_k14100981.map(r => r.spot_category_id));

    if (!existingSet_k14100981.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14100981' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1443953518 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1443953518'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1443953518 = new Set(existingCats_k1443953518.map(r => r.spot_category_id));

    if (!existingSet_k1443953518.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1443953518' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k87364008 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k87364008'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k87364008 = new Set(existingCats_k87364008.map(r => r.spot_category_id));

    if (!existingSet_k87364008.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k87364008' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1680791764 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1680791764'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1680791764 = new Set(existingCats_k1680791764.map(r => r.spot_category_id));

    if (!existingSet_k1680791764.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1680791764' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27328777 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27328777'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27328777 = new Set(existingCats_k27328777.map(r => r.spot_category_id));

    if (!existingSet_k27328777.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27328777' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9390224 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9390224'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9390224 = new Set(existingCats_k9390224.map(r => r.spot_category_id));

    if (!existingSet_k9390224.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9390224' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k14095480 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14095480'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k14095480 = new Set(existingCats_k14095480.map(r => r.spot_category_id));

    if (!existingSet_k14095480.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14095480' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12660235 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12660235'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12660235 = new Set(existingCats_k12660235.map(r => r.spot_category_id));

    if (!existingSet_k12660235.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12660235' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k48353287 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k48353287'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k48353287 = new Set(existingCats_k48353287.map(r => r.spot_category_id));

    if (!existingSet_k48353287.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k48353287' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2056654598 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2056654598'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2056654598 = new Set(existingCats_k2056654598.map(r => r.spot_category_id));

    if (!existingSet_k2056654598.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2056654598' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11892249 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11892249'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11892249 = new Set(existingCats_k11892249.map(r => r.spot_category_id));

    if (!existingSet_k11892249.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892249' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k231017241 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k231017241'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k231017241 = new Set(existingCats_k231017241.map(r => r.spot_category_id));

    if (!existingSet_k231017241.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k231017241' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16148731 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16148731'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16148731 = new Set(existingCats_k16148731.map(r => r.spot_category_id));

    if (!existingSet_k16148731.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16148731' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9947449 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9947449'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9947449 = new Set(existingCats_k9947449.map(r => r.spot_category_id));

    if (!existingSet_k9947449.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9947449' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1550048150 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1550048150'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1550048150 = new Set(existingCats_k1550048150.map(r => r.spot_category_id));

    if (!existingSet_k1550048150.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1550048150' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8449310 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8449310'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8449310 = new Set(existingCats_k8449310.map(r => r.spot_category_id));

    if (!existingSet_k8449310.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8449310' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11892184 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11892184'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11892184 = new Set(existingCats_k11892184.map(r => r.spot_category_id));

    if (!existingSet_k11892184.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892184' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13642764 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13642764'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13642764 = new Set(existingCats_k13642764.map(r => r.spot_category_id));

    if (!existingSet_k13642764.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13642764' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1290897759 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1290897759'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1290897759 = new Set(existingCats_k1290897759.map(r => r.spot_category_id));

    if (!existingSet_k1290897759.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1290897759' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k641918700 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k641918700'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k641918700 = new Set(existingCats_k641918700.map(r => r.spot_category_id));

    if (!existingSet_k641918700.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k641918700' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11700316 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11700316'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11700316 = new Set(existingCats_k11700316.map(r => r.spot_category_id));

    if (!existingSet_k11700316.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11700316' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k134789027 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k134789027'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k134789027 = new Set(existingCats_k134789027.map(r => r.spot_category_id));

    if (!existingSet_k134789027.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k134789027' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9179430 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9179430'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9179430 = new Set(existingCats_k9179430.map(r => r.spot_category_id));

    if (!existingSet_k9179430.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9179430' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1221772601 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1221772601'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1221772601 = new Set(existingCats_k1221772601.map(r => r.spot_category_id));

    if (!existingSet_k1221772601.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1221772601' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27602226 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27602226'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27602226 = new Set(existingCats_k27602226.map(r => r.spot_category_id));

    if (!existingSet_k27602226.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27602226' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10549854 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10549854'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10549854 = new Set(existingCats_k10549854.map(r => r.spot_category_id));

    if (!existingSet_k10549854.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10549854' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7970465 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7970465'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7970465 = new Set(existingCats_k7970465.map(r => r.spot_category_id));

    if (!existingSet_k7970465.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7970465' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k892278619 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k892278619'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k892278619 = new Set(existingCats_k892278619.map(r => r.spot_category_id));

    if (!existingSet_k892278619.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k892278619' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1007093063 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1007093063'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1007093063 = new Set(existingCats_k1007093063.map(r => r.spot_category_id));

    if (!existingSet_k1007093063.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1007093063' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k915439914 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k915439914'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k915439914 = new Set(existingCats_k915439914.map(r => r.spot_category_id));

    if (!existingSet_k915439914.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k915439914' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11833940 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11833940'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11833940 = new Set(existingCats_k11833940.map(r => r.spot_category_id));

    if (!existingSet_k11833940.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11833940' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k17103455 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k17103455'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k17103455 = new Set(existingCats_k17103455.map(r => r.spot_category_id));

    if (!existingSet_k17103455.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k17103455' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1890378983 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1890378983'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1890378983 = new Set(existingCats_k1890378983.map(r => r.spot_category_id));

    if (!existingSet_k1890378983.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1890378983' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1946946918 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1946946918'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1946946918 = new Set(existingCats_k1946946918.map(r => r.spot_category_id));

    if (!existingSet_k1946946918.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946946918' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k278838995 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k278838995'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k278838995 = new Set(existingCats_k278838995.map(r => r.spot_category_id));

    if (!existingSet_k278838995.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k278838995' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k242555220 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k242555220'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k242555220 = new Set(existingCats_k242555220.map(r => r.spot_category_id));

    if (!existingSet_k242555220.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k242555220' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1164611593 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1164611593'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1164611593 = new Set(existingCats_k1164611593.map(r => r.spot_category_id));

    if (!existingSet_k1164611593.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1164611593' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8333899 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8333899'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8333899 = new Set(existingCats_k8333899.map(r => r.spot_category_id));

    if (!existingSet_k8333899.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8333899' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15610994 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15610994'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15610994 = new Set(existingCats_k15610994.map(r => r.spot_category_id));

    if (!existingSet_k15610994.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15610994' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27600571 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27600571'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27600571 = new Set(existingCats_k27600571.map(r => r.spot_category_id));

    if (!existingSet_k27600571.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27600571' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7881525 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7881525'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7881525 = new Set(existingCats_k7881525.map(r => r.spot_category_id));

    if (!existingSet_k7881525.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7881525' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1876987237 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1876987237'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1876987237 = new Set(existingCats_k1876987237.map(r => r.spot_category_id));

    if (!existingSet_k1876987237.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1876987237' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9757744 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9757744'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9757744 = new Set(existingCats_k9757744.map(r => r.spot_category_id));

    if (!existingSet_k9757744.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9757744' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8990558 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8990558'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8990558 = new Set(existingCats_k8990558.map(r => r.spot_category_id));

    if (!existingSet_k8990558.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8990558' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8294851 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8294851'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8294851 = new Set(existingCats_k8294851.map(r => r.spot_category_id));

    if (!existingSet_k8294851.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8294851' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k19358387 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19358387'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k19358387 = new Set(existingCats_k19358387.map(r => r.spot_category_id));

    if (!existingSet_k19358387.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19358387' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26917106 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26917106'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26917106 = new Set(existingCats_k26917106.map(r => r.spot_category_id));

    if (!existingSet_k26917106.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26917106' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27353196 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27353196'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27353196 = new Set(existingCats_k27353196.map(r => r.spot_category_id));

    if (!existingSet_k27353196.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27353196' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k470193360 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k470193360'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k470193360 = new Set(existingCats_k470193360.map(r => r.spot_category_id));

    if (!existingSet_k470193360.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470193360' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k671838041 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k671838041'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k671838041 = new Set(existingCats_k671838041.map(r => r.spot_category_id));

    if (!existingSet_k671838041.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k671838041' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1223543491 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1223543491'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1223543491 = new Set(existingCats_k1223543491.map(r => r.spot_category_id));

    if (!existingSet_k1223543491.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1223543491' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1193754757 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1193754757'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1193754757 = new Set(existingCats_k1193754757.map(r => r.spot_category_id));

    if (!existingSet_k1193754757.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1193754757' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k14589499 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14589499'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k14589499 = new Set(existingCats_k14589499.map(r => r.spot_category_id));

    if (!existingSet_k14589499.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14589499' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1709704120 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1709704120'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1709704120 = new Set(existingCats_k1709704120.map(r => r.spot_category_id));

    if (!existingSet_k1709704120.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1709704120' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1083248979 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1083248979'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1083248979 = new Set(existingCats_k1083248979.map(r => r.spot_category_id));

    if (!existingSet_k1083248979.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1083248979' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11097979 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11097979'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11097979 = new Set(existingCats_k11097979.map(r => r.spot_category_id));

    if (!existingSet_k11097979.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097979' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1857322630 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1857322630'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1857322630 = new Set(existingCats_k1857322630.map(r => r.spot_category_id));

    if (!existingSet_k1857322630.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857322630' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k410451556 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k410451556'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k410451556 = new Set(existingCats_k410451556.map(r => r.spot_category_id));

    if (!existingSet_k410451556.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k410451556' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1217276251 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1217276251'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1217276251 = new Set(existingCats_k1217276251.map(r => r.spot_category_id));

    if (!existingSet_k1217276251.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1217276251' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16145833 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16145833'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16145833 = new Set(existingCats_k16145833.map(r => r.spot_category_id));

    if (!existingSet_k16145833.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16145833' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13095795 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13095795'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13095795 = new Set(existingCats_k13095795.map(r => r.spot_category_id));

    if (!existingSet_k13095795.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13095795' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k981353914 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k981353914'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k981353914 = new Set(existingCats_k981353914.map(r => r.spot_category_id));

    if (!existingSet_k981353914.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k981353914' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10228541 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10228541'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10228541 = new Set(existingCats_k10228541.map(r => r.spot_category_id));

    if (!existingSet_k10228541.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10228541' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8743858 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8743858'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8743858 = new Set(existingCats_k8743858.map(r => r.spot_category_id));

    if (!existingSet_k8743858.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8743858' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8476761 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8476761'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8476761 = new Set(existingCats_k8476761.map(r => r.spot_category_id));

    if (!existingSet_k8476761.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8476761' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8108863 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8108863'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8108863 = new Set(existingCats_k8108863.map(r => r.spot_category_id));

    if (!existingSet_k8108863.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8108863' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10968167 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10968167'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10968167 = new Set(existingCats_k10968167.map(r => r.spot_category_id));

    if (!existingSet_k10968167.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10968167' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15300915 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15300915'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15300915 = new Set(existingCats_k15300915.map(r => r.spot_category_id));

    if (!existingSet_k15300915.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15300915' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k25430330 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25430330'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k25430330 = new Set(existingCats_k25430330.map(r => r.spot_category_id));

    if (!existingSet_k25430330.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25430330' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k547879658 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k547879658'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k547879658 = new Set(existingCats_k547879658.map(r => r.spot_category_id));

    if (!existingSet_k547879658.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k547879658' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k44689514 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k44689514'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k44689514 = new Set(existingCats_k44689514.map(r => r.spot_category_id));

    if (!existingSet_k44689514.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k44689514' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27418130 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27418130'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27418130 = new Set(existingCats_k27418130.map(r => r.spot_category_id));

    if (!existingSet_k27418130.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27418130' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1657771872 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1657771872'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1657771872 = new Set(existingCats_k1657771872.map(r => r.spot_category_id));

    if (!existingSet_k1657771872.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657771872' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k730256197 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k730256197'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k730256197 = new Set(existingCats_k730256197.map(r => r.spot_category_id));

    if (!existingSet_k730256197.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k730256197' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k652267180 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k652267180'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k652267180 = new Set(existingCats_k652267180.map(r => r.spot_category_id));

    if (!existingSet_k652267180.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k652267180' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11234505 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11234505'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11234505 = new Set(existingCats_k11234505.map(r => r.spot_category_id));

    if (!existingSet_k11234505.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11234505' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8568222 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8568222'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8568222 = new Set(existingCats_k8568222.map(r => r.spot_category_id));

    if (!existingSet_k8568222.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8568222' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k406816688 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k406816688'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k406816688 = new Set(existingCats_k406816688.map(r => r.spot_category_id));

    if (!existingSet_k406816688.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k406816688' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10091038 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10091038'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10091038 = new Set(existingCats_k10091038.map(r => r.spot_category_id));

    if (!existingSet_k10091038.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10091038' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10745910 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10745910'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10745910 = new Set(existingCats_k10745910.map(r => r.spot_category_id));

    if (!existingSet_k10745910.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10745910' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10744547 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10744547'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10744547 = new Set(existingCats_k10744547.map(r => r.spot_category_id));

    if (!existingSet_k10744547.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10744547' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k470387639 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k470387639'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k470387639 = new Set(existingCats_k470387639.map(r => r.spot_category_id));

    if (!existingSet_k470387639.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k470387639' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k928936722 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k928936722'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k928936722 = new Set(existingCats_k928936722.map(r => r.spot_category_id));

    if (!existingSet_k928936722.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k928936722' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8037122 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8037122'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8037122 = new Set(existingCats_k8037122.map(r => r.spot_category_id));

    if (!existingSet_k8037122.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8037122' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9287139 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9287139'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9287139 = new Set(existingCats_k9287139.map(r => r.spot_category_id));

    if (!existingSet_k9287139.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9287139' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8022147 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8022147'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8022147 = new Set(existingCats_k8022147.map(r => r.spot_category_id));

    if (!existingSet_k8022147.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8022147' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1171502343 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1171502343'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1171502343 = new Set(existingCats_k1171502343.map(r => r.spot_category_id));

    if (!existingSet_k1171502343.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1171502343' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27324859 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27324859'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27324859 = new Set(existingCats_k27324859.map(r => r.spot_category_id));

    if (!existingSet_k27324859.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27324859' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12084459 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12084459'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12084459 = new Set(existingCats_k12084459.map(r => r.spot_category_id));

    if (!existingSet_k12084459.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12084459' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k996865236 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k996865236'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k996865236 = new Set(existingCats_k996865236.map(r => r.spot_category_id));

    if (!existingSet_k996865236.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k996865236' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21937028 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21937028'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21937028 = new Set(existingCats_k21937028.map(r => r.spot_category_id));

    if (!existingSet_k21937028.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21937028' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1465537638 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1465537638'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1465537638 = new Set(existingCats_k1465537638.map(r => r.spot_category_id));

    if (!existingSet_k1465537638.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1465537638' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21510716 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21510716'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21510716 = new Set(existingCats_k21510716.map(r => r.spot_category_id));

    if (!existingSet_k21510716.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21510716' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9175466 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9175466'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9175466 = new Set(existingCats_k9175466.map(r => r.spot_category_id));

    if (!existingSet_k9175466.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9175466' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7975283 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7975283'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7975283 = new Set(existingCats_k7975283.map(r => r.spot_category_id));

    if (!existingSet_k7975283.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7975283' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21293090 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21293090'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21293090 = new Set(existingCats_k21293090.map(r => r.spot_category_id));

    if (!existingSet_k21293090.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21293090' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1946286415 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1946286415'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1946286415 = new Set(existingCats_k1946286415.map(r => r.spot_category_id));

    if (!existingSet_k1946286415.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1946286415' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7955423 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7955423'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7955423 = new Set(existingCats_k7955423.map(r => r.spot_category_id));

    if (!existingSet_k7955423.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7955423' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k743890057 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k743890057'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k743890057 = new Set(existingCats_k743890057.map(r => r.spot_category_id));

    if (!existingSet_k743890057.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k743890057' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k25081012 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25081012'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k25081012 = new Set(existingCats_k25081012.map(r => r.spot_category_id));

    if (!existingSet_k25081012.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25081012' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9091835 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9091835'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9091835 = new Set(existingCats_k9091835.map(r => r.spot_category_id));

    if (!existingSet_k9091835.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9091835' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k19629369 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k19629369'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k19629369 = new Set(existingCats_k19629369.map(r => r.spot_category_id));

    if (!existingSet_k19629369.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k19629369' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k12085051 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k12085051'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k12085051 = new Set(existingCats_k12085051.map(r => r.spot_category_id));

    if (!existingSet_k12085051.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k12085051' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11057071 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11057071'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11057071 = new Set(existingCats_k11057071.map(r => r.spot_category_id));

    if (!existingSet_k11057071.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11057071' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7908963 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7908963'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7908963 = new Set(existingCats_k7908963.map(r => r.spot_category_id));

    if (!existingSet_k7908963.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7908963' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9803823 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9803823'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9803823 = new Set(existingCats_k9803823.map(r => r.spot_category_id));

    if (!existingSet_k9803823.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9803823' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1249881135 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1249881135'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1249881135 = new Set(existingCats_k1249881135.map(r => r.spot_category_id));

    if (!existingSet_k1249881135.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1249881135' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k289098095 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k289098095'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k289098095 = new Set(existingCats_k289098095.map(r => r.spot_category_id));

    if (!existingSet_k289098095.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k289098095' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k724819429 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k724819429'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k724819429 = new Set(existingCats_k724819429.map(r => r.spot_category_id));

    if (!existingSet_k724819429.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k724819429' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10340916 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10340916'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10340916 = new Set(existingCats_k10340916.map(r => r.spot_category_id));

    if (!existingSet_k10340916.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10340916' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k720045301 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k720045301'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k720045301 = new Set(existingCats_k720045301.map(r => r.spot_category_id));

    if (!existingSet_k720045301.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k720045301' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1422565065 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1422565065'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1422565065 = new Set(existingCats_k1422565065.map(r => r.spot_category_id));

    if (!existingSet_k1422565065.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1422565065' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11831455 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11831455'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11831455 = new Set(existingCats_k11831455.map(r => r.spot_category_id));

    if (!existingSet_k11831455.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11831455' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1376500537 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1376500537'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1376500537 = new Set(existingCats_k1376500537.map(r => r.spot_category_id));

    if (!existingSet_k1376500537.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1376500537' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8256228 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8256228'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8256228 = new Set(existingCats_k8256228.map(r => r.spot_category_id));

    if (!existingSet_k8256228.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256228' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k43391333 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k43391333'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k43391333 = new Set(existingCats_k43391333.map(r => r.spot_category_id));

    if (!existingSet_k43391333.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k43391333' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2095763590 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2095763590'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2095763590 = new Set(existingCats_k2095763590.map(r => r.spot_category_id));

    if (!existingSet_k2095763590.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2095763590' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11097883 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11097883'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11097883 = new Set(existingCats_k11097883.map(r => r.spot_category_id));

    if (!existingSet_k11097883.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11097883' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9786815 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9786815'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9786815 = new Set(existingCats_k9786815.map(r => r.spot_category_id));

    if (!existingSet_k9786815.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9786815' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k400794314 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k400794314'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k400794314 = new Set(existingCats_k400794314.map(r => r.spot_category_id));

    if (!existingSet_k400794314.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k400794314' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k18344911 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18344911'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k18344911 = new Set(existingCats_k18344911.map(r => r.spot_category_id));

    if (!existingSet_k18344911.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18344911' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15225119 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15225119'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15225119 = new Set(existingCats_k15225119.map(r => r.spot_category_id));

    if (!existingSet_k15225119.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15225119' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21295354 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21295354'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21295354 = new Set(existingCats_k21295354.map(r => r.spot_category_id));

    if (!existingSet_k21295354.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21295354' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9676423 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9676423'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9676423 = new Set(existingCats_k9676423.map(r => r.spot_category_id));

    if (!existingSet_k9676423.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9676423' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8766434 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8766434'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8766434 = new Set(existingCats_k8766434.map(r => r.spot_category_id));

    if (!existingSet_k8766434.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8766434' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8113534 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8113534'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8113534 = new Set(existingCats_k8113534.map(r => r.spot_category_id));

    if (!existingSet_k8113534.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8113534' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k61429712 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k61429712'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k61429712 = new Set(existingCats_k61429712.map(r => r.spot_category_id));

    if (!existingSet_k61429712.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k61429712' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26913121 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26913121'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26913121 = new Set(existingCats_k26913121.map(r => r.spot_category_id));

    if (!existingSet_k26913121.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26913121' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1019519804 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1019519804'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1019519804 = new Set(existingCats_k1019519804.map(r => r.spot_category_id));

    if (!existingSet_k1019519804.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1019519804' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k939028346 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k939028346'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k939028346 = new Set(existingCats_k939028346.map(r => r.spot_category_id));

    if (!existingSet_k939028346.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k939028346' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9979566 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9979566'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9979566 = new Set(existingCats_k9979566.map(r => r.spot_category_id));

    if (!existingSet_k9979566.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9979566' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k14973680 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14973680'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k14973680 = new Set(existingCats_k14973680.map(r => r.spot_category_id));

    if (!existingSet_k14973680.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14973680' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1703915972 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1703915972'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1703915972 = new Set(existingCats_k1703915972.map(r => r.spot_category_id));

    if (!existingSet_k1703915972.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1703915972' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1828944939 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1828944939'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1828944939 = new Set(existingCats_k1828944939.map(r => r.spot_category_id));

    if (!existingSet_k1828944939.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1828944939' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1012874482 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1012874482'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1012874482 = new Set(existingCats_k1012874482.map(r => r.spot_category_id));

    if (!existingSet_k1012874482.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1012874482' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1055393258 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1055393258'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1055393258 = new Set(existingCats_k1055393258.map(r => r.spot_category_id));

    if (!existingSet_k1055393258.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1055393258' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k564683615 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k564683615'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k564683615 = new Set(existingCats_k564683615.map(r => r.spot_category_id));

    if (!existingSet_k564683615.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k564683615' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2031523879 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2031523879'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2031523879 = new Set(existingCats_k2031523879.map(r => r.spot_category_id));

    if (!existingSet_k2031523879.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2031523879' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1657150205 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1657150205'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1657150205 = new Set(existingCats_k1657150205.map(r => r.spot_category_id));

    if (!existingSet_k1657150205.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1657150205' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1527981986 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1527981986'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1527981986 = new Set(existingCats_k1527981986.map(r => r.spot_category_id));

    if (!existingSet_k1527981986.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1527981986' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10693502 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10693502'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10693502 = new Set(existingCats_k10693502.map(r => r.spot_category_id));

    if (!existingSet_k10693502.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10693502' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16393579 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16393579'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16393579 = new Set(existingCats_k16393579.map(r => r.spot_category_id));

    if (!existingSet_k16393579.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16393579' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7993084 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7993084'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7993084 = new Set(existingCats_k7993084.map(r => r.spot_category_id));

    if (!existingSet_k7993084.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7993084' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21326012 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21326012'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21326012 = new Set(existingCats_k21326012.map(r => r.spot_category_id));

    if (!existingSet_k21326012.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21326012' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1224687320 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1224687320'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1224687320 = new Set(existingCats_k1224687320.map(r => r.spot_category_id));

    if (!existingSet_k1224687320.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1224687320' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1503321639 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1503321639'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1503321639 = new Set(existingCats_k1503321639.map(r => r.spot_category_id));

    if (!existingSet_k1503321639.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1503321639' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13584562 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13584562'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13584562 = new Set(existingCats_k13584562.map(r => r.spot_category_id));

    if (!existingSet_k13584562.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13584562' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7966850 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7966850'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7966850 = new Set(existingCats_k7966850.map(r => r.spot_category_id));

    if (!existingSet_k7966850.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7966850' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13127748 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13127748'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13127748 = new Set(existingCats_k13127748.map(r => r.spot_category_id));

    if (!existingSet_k13127748.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13127748' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16860063 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16860063'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16860063 = new Set(existingCats_k16860063.map(r => r.spot_category_id));

    if (!existingSet_k16860063.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16860063' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8326896 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8326896'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8326896 = new Set(existingCats_k8326896.map(r => r.spot_category_id));

    if (!existingSet_k8326896.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8326896' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1600738498 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1600738498'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1600738498 = new Set(existingCats_k1600738498.map(r => r.spot_category_id));

    if (!existingSet_k1600738498.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1600738498' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1744411158 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1744411158'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1744411158 = new Set(existingCats_k1744411158.map(r => r.spot_category_id));

    if (!existingSet_k1744411158.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1744411158' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k15944041 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k15944041'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k15944041 = new Set(existingCats_k15944041.map(r => r.spot_category_id));

    if (!existingSet_k15944041.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k15944041' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10360255 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10360255'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10360255 = new Set(existingCats_k10360255.map(r => r.spot_category_id));

    if (!existingSet_k10360255.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10360255' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1923092063 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1923092063'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1923092063 = new Set(existingCats_k1923092063.map(r => r.spot_category_id));

    if (!existingSet_k1923092063.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1923092063' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k754992038 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k754992038'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k754992038 = new Set(existingCats_k754992038.map(r => r.spot_category_id));

    if (!existingSet_k754992038.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k754992038' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k24450217 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k24450217'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k24450217 = new Set(existingCats_k24450217.map(r => r.spot_category_id));

    if (!existingSet_k24450217.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k24450217' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27287602 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27287602'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27287602 = new Set(existingCats_k27287602.map(r => r.spot_category_id));

    if (!existingSet_k27287602.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27287602' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k956062471 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k956062471'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k956062471 = new Set(existingCats_k956062471.map(r => r.spot_category_id));

    if (!existingSet_k956062471.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k956062471' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27504105 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27504105'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27504105 = new Set(existingCats_k27504105.map(r => r.spot_category_id));

    if (!existingSet_k27504105.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27504105' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    if (spotCategoryRelationData.length > 0) {
      await queryInterface.bulkInsert('spot_category_relation', spotCategoryRelationData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    const ids = ['k1125687908', 'k1771074804', 'k1562813267', 'k1362526805', 'k824465369', 'k1437199692', 'k1348776376', 'k19622978', 'k19232119', 'k1191233712', 'k994977541', 'k934335737', 'k26969937', 'k108763820', 'k12555727', 'k24580752', 'k492426337', 'k14564932', 'k15239464', 'k19972104', 'k14100981', 'k1443953518', 'k87364008', 'k1680791764', 'k27328777', 'k9390224', 'k14095480', 'k12660235', 'k48353287', 'k2056654598', 'k11892249', 'k231017241', 'k16148731', 'k9947449', 'k1550048150', 'k8449310', 'k11892184', 'k13642764', 'k1290897759', 'k641918700', 'k11700316', 'k134789027', 'k9179430', 'k1221772601', 'k27602226', 'k10549854', 'k7970465', 'k892278619', 'k1007093063', 'k915439914', 'k11833940', 'k17103455', 'k1890378983', 'k1946946918', 'k278838995', 'k242555220', 'k1164611593', 'k8333899', 'k15610994', 'k27600571', 'k7881525', 'k1876987237', 'k9757744', 'k8990558', 'k8294851', 'k19358387', 'k26917106', 'k27353196', 'k470193360', 'k671838041', 'k1223543491', 'k1193754757', 'k14589499', 'k1709704120', 'k1083248979', 'k11097979', 'k1857322630', 'k410451556', 'k1217276251', 'k16145833', 'k13095795', 'k981353914', 'k10228541', 'k8743858', 'k8476761', 'k8108863', 'k10968167', 'k15300915', 'k25430330', 'k547879658', 'k44689514', 'k27418130', 'k1657771872', 'k730256197', 'k652267180', 'k11234505', 'k8568222', 'k406816688', 'k10091038', 'k10745910', 'k10744547', 'k470387639', 'k928936722', 'k8037122', 'k9287139', 'k8022147', 'k1171502343', 'k27324859', 'k12084459', 'k996865236', 'k21937028', 'k1465537638', 'k21510716', 'k9175466', 'k7975283', 'k21293090', 'k1946286415', 'k7955423', 'k743890057', 'k25081012', 'k9091835', 'k19629369', 'k12085051', 'k11057071', 'k7908963', 'k9803823', 'k1249881135', 'k289098095', 'k724819429', 'k10340916', 'k720045301', 'k1422565065', 'k11831455', 'k1376500537', 'k8256228', 'k43391333', 'k2095763590', 'k11097883', 'k9786815', 'k400794314', 'k18344911', 'k15225119', 'k21295354', 'k9676423', 'k8766434', 'k8113534', 'k61429712', 'k26913121', 'k1019519804', 'k939028346', 'k9979566', 'k14973680', 'k1703915972', 'k1828944939', 'k1012874482', 'k1055393258', 'k564683615', 'k2031523879', 'k1657150205', 'k1527981986', 'k10693502', 'k16393579', 'k7993084', 'k21326012', 'k1224687320', 'k1503321639', 'k13584562', 'k7966850', 'k13127748', 'k16860063', 'k8326896', 'k1600738498', 'k1744411158', 'k15944041', 'k10360255', 'k1923092063', 'k754992038', 'k24450217', 'k27287602', 'k956062471', 'k27504105'];
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
