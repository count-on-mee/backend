'use strict';

/**
 * 카카오 북마크 크롤링으로 생성된 Spot 데이터 시드 파일
 * 폴더ID: 14079121
 * 카테고리라벨: 음식점
 * 생성일시: 2025-09-09T16:07:18.967Z
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
        name: '흥덕식당',
        address: '전남 순천시 역전광장3길 21 1층 (풍덕동)',
        tel: '061-744-9208',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.94473146594628 127.5010010283441)',
          4326
        ),
        naver_spot_id: 'k9629667',
        review_count: 0,
        review_score: null,
      },
      {
        name: '할머니옛날순대국밥집',
        address: '전남 순천시 황전면 괴목길 21 1층 (황전면 괴목리)',
        tel: '061-754-0052',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.10251820664472 127.4284577226354)',
          4326
        ),
        naver_spot_id: 'k9582339',
        review_count: 0,
        review_score: null,
      },
      {
        name: '할매집풍천장어',
        address: '전북특별자치도 고창군 아산면 선운사로 29 1층 (아산면 삼인리)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.505645554162314 126.59947658497673)',
          4326
        ),
        naver_spot_id: 'k27189717',
        review_count: 0,
        review_score: null,
      },
      {
        name: '하늘아래가든',
        address: '전남 화순군 동면 건덕길 75 (동면 국동리)',
        tel: '061-373-9229',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.06974597567998 127.0216465967776)',
          4326
        ),
        naver_spot_id: 'k16836641',
        review_count: 0,
        review_score: null,
      },
      {
        name: '펄펄닭내장',
        address: '전북특별자치도 전주시 완산구 공북로 100 1층 (서노송동)',
        tel: '063-277-3257',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.82633993356457 127.14283598934676)',
          4326
        ),
        naver_spot_id: 'k10886743',
        review_count: 0,
        review_score: null,
      },
      {
        name: '트라이팟',
        address: '전남 목포시 당가두로14번길 28 1층 (옥암동)',
        tel: '070-8800-7698',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.80622869261923 126.43739337391355)',
          4326
        ),
        naver_spot_id: 'k670031710',
        review_count: 0,
        review_score: null,
      },
      {
        name: '토방',
        address: '전북특별자치도 전주시 완산구 평화18길 19 1층 (평화동1가)',
        tel: '063-226-1080',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.7948090379014 127.13446950454916)',
          4326
        ),
        naver_spot_id: 'k10893648',
        review_count: 0,
        review_score: null,
      },
      {
        name: '태광갈비',
        address: '전남 나주시 북망문길 36-15 (성북동)',
        tel: '061-334-8892',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.03907176007784 126.71759511992244)',
          4326
        ),
        naver_spot_id: 'k10819530',
        review_count: 0,
        review_score: null,
      },
      {
        name: '취락식당',
        address: '전남 장흥군 장흥읍 물레방앗간길 36 1층 (장흥읍 건산리)',
        tel: '061-863-2584',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.67998212618097 126.90685510659041)',
          4326
        ),
        naver_spot_id: 'k21251174',
        review_count: 0,
        review_score: null,
      },
      {
        name: '차차룸',
        address: '광주 북구 일곡택지로99번길 33 1층 (일곡동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.210087964951924 126.89109788857884)',
          4326
        ),
        naver_spot_id: 'k255503183',
        review_count: 0,
        review_score: null,
      },
      {
        name: '진안제일순대',
        address: '전북특별자치도 진안군 진안읍 우화4길 2 1층 (진안읍 군상리)',
        tel: '063-433-2246',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.792041035943186 127.43140224950925)',
          4326
        ),
        naver_spot_id: 'k1115266066',
        review_count: 0,
        review_score: null,
      },
      {
        name: '지린성',
        address: '전북특별자치도 군산시 미원로 87 1층 (미원동)',
        tel: '063-467-2905',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.97965657837907 126.71396307097893)',
          4326
        ),
        naver_spot_id: 'k421048086',
        review_count: 0,
        review_score: null,
      },
      {
        name: '조점례남문피순대',
        address: '전북특별자치도 전주시 완산구 풍남문2길 39 5동 117~119호 (전동3가)',
        tel: '063-232-5006',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.81262498598084 127.14696736708778)',
          4326
        ),
        naver_spot_id: 'k10186580',
        review_count: 0,
        review_score: null,
      },
      {
        name: '제일회식당',
        address: '전남 무안군 망운면 망운로 13 (망운면 목서리)',
        tel: '061-452-1139',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.01343775989384 126.39168108151549)',
          4326
        ),
        naver_spot_id: 'k8065995',
        review_count: 0,
        review_score: null,
      },
      {
        name: '제일반점',
        address: '광주 동구 구성로 174 (금남로5가)',
        tel: '062-223-6395',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15153165445024 126.91258518920294)',
          4326
        ),
        naver_spot_id: 'k10722147',
        review_count: 0,
        review_score: null,
      },
      {
        name: '장원회관',
        address: '전남 광양시 광양읍 매천로 821-5 (광양읍 읍내리)',
        tel: '061-761-6006',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.97571170175182 127.58526199333902)',
          4326
        ),
        naver_spot_id: 'k9388811',
        review_count: 0,
        review_score: null,
      },
      {
        name: '육전명가',
        address: '광주 서구 상무자유로 174 2층 (치평동)',
        tel: '062-384-6767',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15130849371629 126.85327015654077)',
          4326
        ),
        naver_spot_id: 'k10681971',
        review_count: 0,
        review_score: null,
      },
      {
        name: '유향',
        address: '광주 광산구 월계로 235-8 미르채리버파크 상가 2층 214~224호 (쌍암동)',
        tel: '062-954-9530',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.21396891567309 126.85179560588256)',
          4326
        ),
        naver_spot_id: 'k1157854722',
        review_count: 0,
        review_score: null,
      },
      {
        name: '원조치마살숯불구이',
        address: '전북특별자치도 전주시 완산구 산월2길 32 (중화산동2가)',
        tel: '063-225-9779',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.814176644479346 127.11961304693244)',
          4326
        ),
        naver_spot_id: 'k11241347',
        review_count: 0,
        review_score: null,
      },
      {
        name: '창평원조시장국밥',
        address: '전남 담양군 창평면 사동길 14-25 1층 (창평면 창평리)',
        tel: '061-383-4424',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.23802741121353 127.01480504484638)',
          4326
        ),
        naver_spot_id: 'k25052488',
        review_count: 0,
        review_score: null,
      },
      {
        name: '우리떡갈비',
        address: '전북특별자치도 군산시 백토로 36 (문화동)',
        tel: '063-463-4279',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.97608187026071 126.70559378300405)',
          4326
        ),
        naver_spot_id: 'k13612032',
        review_count: 0,
        review_score: null,
      },
      {
        name: '온천보리밥집',
        address: '광주 동구 지호로127번길 29 (지산동)',
        tel: '062-225-0776',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.149643292891476 126.94471128441181)',
          4326
        ),
        naver_spot_id: 'k11193838',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오원집 본점',
        address: '전북특별자치도 전주시 완산구 공북로 84 1동 1층 (태평동)',
        tel: '063-275-1123',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.82609708006303 127.14089667137385)',
          4326
        ),
        naver_spot_id: 'k8481800',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영미오리탕',
        address: '광주 북구 경양로 126 1층 (유동)',
        tel: '062-527-0248',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.16138362110569 126.90551933457843)',
          4326
        ),
        naver_spot_id: 'k8441874',
        review_count: 0,
        review_score: null,
      },
      {
        name: '어성장어센타',
        address: '전남 해남군 삼산면 해남화산로 464 (삼산면 봉학리)',
        tel: '061-534-4944',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.52546937159626 126.55639965691219)',
          4326
        ),
        naver_spot_id: 'k8008432',
        review_count: 0,
        review_score: null,
      },
      {
        name: '양미한옥가든',
        address: '전남 구례군 산동면 당골길 110 (산동면 좌사리)',
        tel: '061-783-7079',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.31448452783786 127.48681137298448)',
          4326
        ),
        naver_spot_id: 'k8470936',
        review_count: 0,
        review_score: null,
      },
      {
        name: '승일식당',
        address: '전남 담양군 담양읍 중앙로 98-1 1층 (담양읍 객사리)',
        tel: '061-382-9011',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.32200323233272 126.98232909118194)',
          4326
        ),
        naver_spot_id: 'k8438142',
        review_count: 0,
        review_score: null,
      },
      {
        name: '순심원',
        address: '전남 여수시 교동남1길 5-17 1층 (교동)',
        tel: '061-920-5482',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.73981044325411 127.73447635779713)',
          4326
        ),
        naver_spot_id: 'k10553175',
        review_count: 0,
        review_score: null,
      },
      {
        name: '숙이네식당',
        address: '전남 무안군 무안읍 성남1길 172 1층 (무안읍 성남리)',
        tel: '061-452-9857',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.98724904890221 126.47711113423922)',
          4326
        ),
        naver_spot_id: 'k21261695',
        review_count: 0,
        review_score: null,
      },
      {
        name: '세이토',
        address: '전북특별자치도 전주시 완산구 마전중앙로 13 1층 (효자동3가)',
        tel: '0507-1354-4322',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.8234675489896 127.10329309340747)',
          4326
        ),
        naver_spot_id: 'k1859520870',
        review_count: 0,
        review_score: null,
      },
      {
        name: '색동두부',
        address: '전남 화순군 도곡면 지강로 438 1-2층 (도곡면 원화리)',
        tel: '061-375-5066',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.0333874800506 126.90785863225815)',
          4326
        ),
        naver_spot_id: 'k7929238',
        review_count: 0,
        review_score: null,
      },
      {
        name: '삼희불낙 상무본점',
        address: '광주 서구 상무누리로 143 1층 (치평동)',
        tel: '062-383-3233',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.1555729538212 126.83848998676393)',
          4326
        ),
        naver_spot_id: 'k163939822',
        review_count: 0,
        review_score: null,
      },
      {
        name: '백학정',
        address: '전북특별자치도 정읍시 태인면 태인로 29-3 (태인면 태성리)',
        tel: '063-534-4290',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.651938738995035 126.94185839939944)',
          4326
        ),
        naver_spot_id: 'k9818793',
        review_count: 0,
        review_score: null,
      },
      {
        name: '미로횟집',
        address: '전남 여수시 시청서3길 18 1층 (학동)',
        tel: '061-682-3772',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.757666052750054 127.65670425820966)',
          4326
        ),
        naver_spot_id: 'k8984743',
        review_count: 0,
        review_score: null,
      },
      {
        name: '목리장어센터',
        address: '전남 강진군 강진읍 목리길 80 (강진읍 목리)',
        tel: '061-432-9292',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.63379702903325 126.78075554926124)',
          4326
        ),
        naver_spot_id: 'k10332017',
        review_count: 0,
        review_score: null,
      },
      {
        name: '모리',
        address: '전남 광양시 길호5길 2 1층 (중동)',
        tel: '061-792-8009',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.93180510324323 127.69897508966156)',
          4326
        ),
        naver_spot_id: 'k1857475664',
        review_count: 0,
        review_score: null,
      },
      {
        name: '맥문동',
        address: '광주 서구 마륵로 24 (마륵동)',
        tel: '062-373-0895',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14263223684412 126.83522353900754)',
          4326
        ),
        naver_spot_id: 'k1766016722',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마리오셰프 본점',
        address: '광주 남구 제중로 42 1층 (양림동)',
        tel: '062-682-5595',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.13826835136384 126.91417067567731)',
          4326
        ),
        naver_spot_id: 'k26840903',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마띠나',
        address: '전북특별자치도 익산시 하나로11길 32-7 훈하우스 1층 (영등동)',
        tel: '0507-1315-8048',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.95981496230462 126.97791804624732)',
          4326
        ),
        naver_spot_id: 'k1337449537',
        review_count: 0,
        review_score: null,
      },
      {
        name: '마노',
        address: '전북특별자치도 전주시 완산구 홍산로 253 (효자동2가)',
        tel: '063-229-9011',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.81637451819322 127.10549697291287)',
          4326
        ),
        naver_spot_id: 'k795234579',
        review_count: 0,
        review_score: null,
      },
      {
        name: '루나파스타',
        address: '전남 무안군 일로읍 황소안길 24-29 (일로읍 월암리)',
        tel: '0507-1331-7994',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.84591219700603 126.49242608063868)',
          4326
        ),
        naver_spot_id: 'k76529863',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라비올레따',
        address: '광주 남구 효천로92번길 40 2층 (임암동)',
        tel: '062-652-1369',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.105307507032904 126.8699324491573)',
          4326
        ),
        naver_spot_id: 'k144403566',
        review_count: 0,
        review_score: null,
      },
      {
        name: '라롱드꺄레',
        address: '광주 동구 의재로136번길 35 1층 (운림동)',
        tel: '062-232-3375',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.131998566808996 126.94546930790796)',
          4326
        ),
        naver_spot_id: 'k213858080',
        review_count: 0,
        review_score: null,
      },
      {
        name: '황금게장',
        address: '전남 여수시 돌산읍 돌산로 3396 (돌산읍 우두리)',
        tel: '061-644-3939',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.72039610271848 127.75831763455585)',
          4326
        ),
        naver_spot_id: 'k252015260',
        review_count: 0,
        review_score: null,
      },
      {
        name: '돈키호테',
        address: '전북특별자치도 군산시 구영6길 111-7 2호 (영화동)',
        tel: '010-3076-7467',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.98870458891253 126.7108032271542)',
          4326
        ),
        naver_spot_id: 'k29683452',
        review_count: 0,
        review_score: null,
      },
      {
        name: '독천식당',
        address: '전남 목포시 호남로64번길 3-1 1층 (호남동)',
        tel: '061-242-6528',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.79396443144214 126.38560061449503)',
          4326
        ),
        naver_spot_id: 'k7832260',
        review_count: 0,
        review_score: null,
      },
      {
        name: '덴푸라코에루 첨단본점',
        address: '광주 광산구 첨단강변로87번길 5 야스텍타워 2층 208호 (쌍암동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.214351366879335 126.85202335776661)',
          4326
        ),
        naver_spot_id: 'k824040310',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대일정',
        address: '전북특별자치도 정읍시 태인면 수학정석길 3 (태인면 태성리)',
        tel: '063-534-4030',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.651740988350824 126.94297163589184)',
          4326
        ),
        naver_spot_id: 'k7831396',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대반동201',
        address: '전남 목포시 해양대학로 59 유달유원지 2층 (죽교동)',
        tel: '0502-5550-8596',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.787734224852564 126.36734803467924)',
          4326
        ),
        naver_spot_id: 'k2110676770',
        review_count: 0,
        review_score: null,
      },
      {
        name: '달빛뜨락',
        address: '전남 담양군 봉산면 한수동로 155 1층 (봉산면 삼지리)',
        tel: '061-382-2355',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.268685060043865 126.94128066419444)',
          4326
        ),
        naver_spot_id: 'k26982052',
        review_count: 0,
        review_score: null,
      },
      {
        name: '단테',
        address: '전남 구례군 산동면 원좌1길 24-9 (산동면 좌사리)',
        tel: '061-781-7899',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.3182070323746 127.47913142910268)',
          4326
        ),
        naver_spot_id: 'k1836502897',
        review_count: 0,
        review_score: null,
      },
      {
        name: '늘푸른흑염소가든 보성본점',
        address: '전남 보성군 노동면 예재로 397 (노동면 학동리)',
        tel: '061-853-0206',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.82879060860243 127.07430864538756)',
          4326
        ),
        naver_spot_id: 'k1451528210',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나주곰탕원조집60년 남평할매집',
        address: '전남 나주시 금성관길 2 1층 (중앙동)',
        tel: '061-334-4682',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.031877420150366 126.71700619185388)',
          4326
        ),
        naver_spot_id: 'k27092752',
        review_count: 0,
        review_score: null,
      },
      {
        name: '기찻길옆오막살이',
        address: '전북특별자치도 전주시 덕진구 인교9길 71 (우아동1가)',
        tel: '063-245-5870',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.82873747820805 127.17536854883319)',
          4326
        ),
        naver_spot_id: 'k14931919',
        review_count: 0,
        review_score: null,
      },
      {
        name: '금생춘',
        address: '전북특별자치도 남원시 가방뜰길 117 (조산동)',
        tel: '063-631-7597',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.39800370960936 127.36775070811332)',
          4326
        ),
        naver_spot_id: 'k10209539',
        review_count: 0,
        review_score: null,
      },
      {
        name: '광주옥1947',
        address: '광주 서구 상무대로 1104-20 1층 (농성동)',
        tel: '062-362-1616',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.152592199361145 126.8832727494865)',
          4326
        ),
        naver_spot_id: 'k60825746',
        review_count: 0,
        review_score: null,
      },
      {
        name: '광양숯불구이 지산점',
        address: '광주 동구 필문대로 229 1층 (지산동)',
        tel: '062-226-8080',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.150320999914776 126.93048357820444)',
          4326
        ),
        naver_spot_id: 'k10150202',
        review_count: 0,
        review_score: null,
      },
      {
        name: '광명식당',
        address: '광주 서구 월드컵4강로28번길 50-14 광명아파트 상가동 1층 104호 (화정동)',
        tel: '062-367-2085',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.13997546651384 126.88194766361798)',
          4326
        ),
        naver_spot_id: 'k21223742',
        review_count: 0,
        review_score: null,
      },
      {
        name: '경방루',
        address: '전북특별자치도 남원시 광한북로 29 (금동)',
        tel: '063-631-2325',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.40556317659878 127.37965697185555)',
          4326
        ),
        naver_spot_id: 'k175076849',
        review_count: 0,
        review_score: null,
      },
      {
        name: '걸프델리마켓',
        address: '전북특별자치도 전주시 완산구 전주객사4길 96 (고사동)',
        tel: '0507-1362-6051',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.82201355571906 127.14311595724281)',
          4326
        ),
        naver_spot_id: 'k523407095',
        review_count: 0,
        review_score: null,
      },
      {
        name: '건봉국밥',
        address: '전남 순천시 장평로 65 (인제동)',
        tel: '061-752-0900',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.94553910858391 127.49395611781057)',
          4326
        ),
        naver_spot_id: 'k14502586',
        review_count: 0,
        review_score: null,
      },
      {
        name: '가매일식 본점',
        address: '광주 서구 상무대로 1104-26 1층 (농성동)',
        tel: '062-352-7711',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.152538636802035 126.88381278219632)',
          4326
        ),
        naver_spot_id: 'k10115439',
        review_count: 0,
        review_score: null,
      },
      {
        name: '연화식당',
        address: '광주 서구 마륵복개로 147 (치평동)',
        tel: '062-384-1142',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14783261170434 126.85307447273186)',
          4326
        ),
        naver_spot_id: 'k1595770402',
        review_count: 0,
        review_score: null,
      },
      {
        name: '송정떡갈비 1호점',
        address: '광주 광산구 광산로29번길 1 1층 (송정동)',
        tel: '062-944-1439',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.138954303498664 126.79482001166318)',
          4326
        ),
        naver_spot_id: 'k7960840',
        review_count: 0,
        review_score: null,
      },
      {
        name: '화정떡갈비',
        address: '광주 광산구 광산로29번길 6 1-2층 (송정동)',
        tel: '062-944-1275',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.139268168881564 126.79493334251036)',
          4326
        ),
        naver_spot_id: 'k8171788',
        review_count: 0,
        review_score: null,
      },
      {
        name: '수완지구폼',
        address: '광주 광산구 수완로10번길 94 1층 (수완동)',
        tel: '062-431-1777',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.18934329993234 126.83195397474529)',
          4326
        ),
        naver_spot_id: 'k1852932274',
        review_count: 0,
        review_score: null,
      },
      {
        name: '막동이회관',
        address: '광주 동구 남문로 614 1층 (소태동)',
        tel: '062-222-0840',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.125660493540146 126.93185179189854)',
          4326
        ),
        naver_spot_id: 'k8962407',
        review_count: 0,
        review_score: null,
      },
      {
        name: '퀴비',
        address: '광주 동구 동명로20번길 1 1,2층 (동명동)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15079647311158 126.92374922642945)',
          4326
        ),
        naver_spot_id: 'k1003907552',
        review_count: 0,
        review_score: null,
      },
      {
        name: '미미원',
        address: '광주 동구 백서로 218 1층 (동명동)',
        tel: '062-228-3101',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.146911592309465 126.92664558839692)',
          4326
        ),
        naver_spot_id: 'k9008180',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신락원 신관',
        address: '광주 동구 충장로 45-9 3층 (충장로5가)',
        tel: null,
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15068127221692 126.9132840751972)',
          4326
        ),
        naver_spot_id: 'k191901974',
        review_count: 0,
        review_score: null,
      },
      {
        name: '영발원',
        address: '광주 북구 서림로 141 1층 (임동)',
        tel: '062-525-7436',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.16008148918928 126.90030956122574)',
          4326
        ),
        naver_spot_id: 'k11892173',
        review_count: 0,
        review_score: null,
      },
      {
        name: '테이트모던',
        address: '광주 서구 상무대로673번길 24 (마륵동)',
        tel: '062-383-0895',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14398098004367 126.8381266203514)',
          4326
        ),
        naver_spot_id: 'k1432794635',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대광식당',
        address: '광주 서구 상무대로695번길 15 1층 (마륵동)',
        tel: '062-226-3939',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.14403640595194 126.83913607916692)',
          4326
        ),
        naver_spot_id: 'k7815872',
        review_count: 0,
        review_score: null,
      },
      {
        name: '나정상회',
        address: '광주 서구 상무자유로 24 (치평동)',
        tel: '062-944-1489',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.15106743862494 126.83675613719386)',
          4326
        ),
        naver_spot_id: 'k8883591',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대한식당',
        address: '전남 광양시 광양읍 매일시장길 12-15 1층 (광양읍 읍내리)',
        tel: '061-763-0095',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.97606314741122 127.5856543468879)',
          4326
        ),
        naver_spot_id: 'k8256361',
        review_count: 0,
        review_score: null,
      },
      {
        name: '대중식당',
        address: '전남 광양시 광양읍 매일시장길 12-9 (광양읍 읍내리)',
        tel: '061-762-5670',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.97631320558657 127.58538892339058)',
          4326
        ),
        naver_spot_id: 'k8908115',
        review_count: 0,
        review_score: null,
      },
      {
        name: '지곡산장',
        address: '전남 광양시 광양읍 서북로 59 (광양읍 구산리)',
        tel: '061-761-3335',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.97551215334561 127.57647797937287)',
          4326
        ),
        naver_spot_id: 'k165041631',
        review_count: 0,
        review_score: null,
      },
      {
        name: '삼대광양불고기집',
        address: '전남 광양시 광양읍 서천1길 52 (광양읍 칠성리)',
        tel: '061-762-9250',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.970157749563704 127.57880569838572)',
          4326
        ),
        naver_spot_id: 'k8401833',
        review_count: 0,
        review_score: null,
      },
      {
        name: '광양불고기 금목서',
        address: '전남 광양시 광양읍 읍성길 199 1층 (광양읍 칠성리)',
        tel: '061-761-3300',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.97757039637361 127.58711500768648)',
          4326
        ),
        naver_spot_id: 'k8236529',
        review_count: 0,
        review_score: null,
      },
      {
        name: '송현불고기 나주본점',
        address: '전남 나주시 건재로 193 (대호동)',
        tel: '061-332-6497',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.050726981526 126.72169828101453)',
          4326
        ),
        naver_spot_id: 'k11834459',
        review_count: 0,
        review_score: null,
      },
      {
        name: '담양앞집',
        address: '전남 담양군 담양읍 죽향문화로 22 1층 (담양읍 백동리)',
        tel: '061-381-1990',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.31005818276791 126.97895373004852)',
          4326
        ),
        naver_spot_id: 'k1190456459',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신식당',
        address: '전남 담양군 담양읍 담주2길 18-13 1층 (담양읍 담주리)',
        tel: '061-382-9901',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.32165341060454 126.98163412334539)',
          4326
        ),
        naver_spot_id: 'k7977614',
        review_count: 0,
        review_score: null,
      },
      {
        name: '남도예담',
        address: '전남 담양군 월산면 담장로 143 1층 (월산면 화방리)',
        tel: '061-381-7766',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.33536355944604 126.96206531144654)',
          4326
        ),
        naver_spot_id: 'k26602406',
        review_count: 0,
        review_score: null,
      },
      {
        name: '성식당',
        address: '전남 목포시 수강로4번길 6 1층 (영해동1가)',
        tel: '061-244-1401',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.785603995154325 126.38649733949029)',
          4326
        ),
        naver_spot_id: 'k21254211',
        review_count: 0,
        review_score: null,
      },
      {
        name: '중화루',
        address: '전남 목포시 영산로75번길 6 1층 (상락동2가)',
        tel: '061-244-6525',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.78975637143198 126.38481891445724)',
          4326
        ),
        naver_spot_id: 'k26805337',
        review_count: 0,
        review_score: null,
      },
      {
        name: '두암식당',
        address: '전남 무안군 몽탄면 우명길 52 1층 (몽탄면 사창리)',
        tel: '061-452-3775',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.96538480695096 126.51885406011405)',
          4326
        ),
        naver_spot_id: 'k16693198',
        review_count: 0,
        review_score: null,
      },
      {
        name: '무안식당',
        address: '전남 무안군 무안읍 면성2길 36 (무안읍 성내리)',
        tel: '061-453-1919',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.99050318703919 126.47673556696672)',
          4326
        ),
        naver_spot_id: 'k11070314',
        review_count: 0,
        review_score: null,
      },
      {
        name: '풍미통닭',
        address: '전남 순천시 성남뒷길 3 (장천동)',
        tel: '061-744-7041',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.946344516196774 127.49094832268939)',
          4326
        ),
        naver_spot_id: 'k21513162',
        review_count: 0,
        review_score: null,
      },
      {
        name: '금성가든',
        address: '전남 순천시 승주읍 선암사길 358 1층 (승주읍 죽학리)',
        tel: '061-754-6060',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.98940324184525 127.35484283532426)',
          4326
        ),
        naver_spot_id: 'k8708867',
        review_count: 0,
        review_score: null,
      },
      {
        name: '리노',
        address: '전남 순천시 영동길 71 1층 (행동)',
        tel: '061-753-0623',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.95620565508835 127.4819331230509)',
          4326
        ),
        naver_spot_id: 'k2003940571',
        review_count: 0,
        review_score: null,
      },
      {
        name: '르꼬앙',
        address: '전남 순천시 오천2길 3-15 1층 (오천동)',
        tel: '0502-5552-0615',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.930356440662706 127.4965619225299)',
          4326
        ),
        naver_spot_id: 'k2007353666',
        review_count: 0,
        review_score: null,
      },
      {
        name: '고력당',
        address: '전남 순천시 왕지3길 18-28 1층 101호 (왕지동)',
        tel: '061-727-0013',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.97054893905288 127.52610283378675)',
          4326
        ),
        naver_spot_id: 'k1831065736',
        review_count: 0,
        review_score: null,
      },
      {
        name: '산골산장어',
        address: '전남 여수시 봉산1로 24 1층 (봉산동)',
        tel: '061-642-3455',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(34.733298949798005 127.72299341485302)',
          4326
        ),
        naver_spot_id: 'k21288807',
        review_count: 0,
        review_score: null,
      },
      {
        name: '오케이목장가든',
        address: '전남 화순군 화순읍 안양산로 72 1,2층 (화순읍 유천리)',
        tel: '061-372-9433',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.070858397060995 126.9993421730952)',
          4326
        ),
        naver_spot_id: 'k1510491255',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명가풍천장어',
        address: '전북특별자치도 고창군 아산면 선운사로 16-5 (아산면 삼인리)',
        tel: '063-561-5389',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.50735012801309 126.59926971244775)',
          4326
        ),
        naver_spot_id: 'k9026794',
        review_count: 0,
        review_score: null,
      },
      {
        name: '꺼먹고무신',
        address: '전북특별자치도 고창군 아산면 선운사로 63-7 (아산면 삼인리)',
        tel: '063-561-1564',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.50332479983019 126.59652976174429)',
          4326
        ),
        naver_spot_id: 'k8815351',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신덕식당',
        address: '전북특별자치도 고창군 아산면 선운사로 8 1층 (아산면 삼인리)',
        tel: '063-562-1533',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.50809435347702 126.59973779104101)',
          4326
        ),
        naver_spot_id: 'k8402093',
        review_count: 0,
        review_score: null,
      },
      {
        name: '명월갈비',
        address: '전북특별자치도 군산시 구영7길 59 (신창동)',
        tel: '063-445-8283',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.986392298238805 126.71016850412556)',
          4326
        ),
        naver_spot_id: 'k9756425',
        review_count: 0,
        review_score: null,
      },
      {
        name: '쌍용반점',
        address: '전북특별자치도 군산시 내항2길 121 1층 (금동)',
        tel: '063-446-2633',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.99306878892436 126.7102372376425)',
          4326
        ),
        naver_spot_id: 'k18062985',
        review_count: 0,
        review_score: null,
      },
      {
        name: '복성루',
        address: '전북특별자치도 군산시 월명로 382 1층 (미원동)',
        tel: '063-445-8412',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.978240441589655 126.71573336686853)',
          4326
        ),
        naver_spot_id: 'k10379033',
        review_count: 0,
        review_score: null,
      },
      {
        name: '완주옥',
        address: '전북특별자치도 군산시 큰샘길 42 (죽성동)',
        tel: '063-445-2644',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.98559098302023 126.71729493078733)',
          4326
        ),
        naver_spot_id: 'k8459058',
        review_count: 0,
        review_score: null,
      },
      {
        name: '이탈',
        address: '전북특별자치도 익산시 무왕로17길 44-4 1층 (영등동)',
        tel: '063-833-1744',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.962345998803926 126.97994380242979)',
          4326
        ),
        naver_spot_id: 'k1626600322',
        review_count: 0,
        review_score: null,
      },
      {
        name: '신동양',
        address: '전북특별자치도 익산시 평동로11길 60 1층 (갈산동)',
        tel: '063-855-3100',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.93651957244543 126.95264855554365)',
          4326
        ),
        naver_spot_id: 'k10525877',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한국관 본점',
        address: '전북특별자치도 전주시 덕진구 기린대로 425 1층 (금암동)',
        tel: '063-272-9229',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.839073524586176 127.12956777477947)',
          4326
        ),
        naver_spot_id: 'k8645482',
        review_count: 0,
        review_score: null,
      },
      {
        name: '시즈너',
        address: '전북특별자치도 전주시 완산구 마전로 5 2층 (효자동3가)',
        tel: '063-211-1177',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.82159587098617 127.10406086654876)',
          4326
        ),
        naver_spot_id: 'k1704728222',
        review_count: 0,
        review_score: null,
      },
      {
        name: '가운데집',
        address: '전북특별자치도 전주시 덕진구 추천로 171 (팔복동2가)',
        tel: '063-211-5366',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.85148265387494 127.11092358179529)',
          4326
        ),
        naver_spot_id: 'k11039646',
        review_count: 0,
        review_score: null,
      },
      {
        name: '에루화 본점',
        address: '전북특별자치도 전주시 완산구 고사평5길 25 1층 (서신동)',
        tel: '063-252-9946',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.83707301955538 127.10733070121422)',
          4326
        ),
        naver_spot_id: 'k427123419',
        review_count: 0,
        review_score: null,
      },
      {
        name: '한국집',
        address: '전북특별자치도 전주시 완산구 어진길 119 (전동)',
        tel: '063-284-2224',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.81651688554749 127.1482271371823)',
          4326
        ),
        naver_spot_id: 'k8629568',
        review_count: 0,
        review_score: null,
      },
      {
        name: '고궁담',
        address: '전북특별자치도 전주시 완산구 유연로 170 2-3층 (효자동3가)',
        tel: '063-228-3711',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.82486926623483 127.10403857951619)',
          4326
        ),
        naver_spot_id: 'k18062180',
        review_count: 0,
        review_score: null,
      },
      {
        name: '성미당 본점',
        address: '전북특별자치도 전주시 완산구 전라감영5길 19-9 1~2층 (중앙동3가)',
        tel: '063-287-8800',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.817338709177285 127.14537820060865)',
          4326
        ),
        naver_spot_id: 'k8374461',
        review_count: 0,
        review_score: null,
      },
      {
        name: '파스톨로지',
        address: '전북특별자치도 전주시 완산구 전주객사3길 98 1층 (고사동)',
        tel: '0507-1327-3002',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.821489435867704 127.14124264194159)',
          4326
        ),
        naver_spot_id: 'k1752863906',
        review_count: 0,
        review_score: null,
      },
      {
        name: '다이닝스푼',
        address: '전북특별자치도 전주시 완산구 전주객사4길 74-11 1층 (고사동)',
        tel: '063-255-9636',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.82127766496129 127.14350416001469)',
          4326
        ),
        naver_spot_id: 'k26236019',
        review_count: 0,
        review_score: null,
      },
      {
        name: '일피오레',
        address: '전북특별자치도 전주시 완산구 홍산4길 8 2층 (효자동3가)',
        tel: '063-223-1454',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(35.81829941769528 127.10973985937638)',
          4326
        ),
        naver_spot_id: 'k1380651138',
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

    const existingImages_k9629667 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9629667'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9629667[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d51982f1181a60e6feed53832177807916ab37c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3fa82e7f7f325175532efcc3148d0f82705a3058?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/116c001970aa28a59b245471917e27caecd9c2f0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b5a84b567ef334c88b7c8e250b0fb55b5089ba0f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/456ae729df83ec27a88ea77f9f301497cdea18d8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7411409c4fb2847a58f5605931f39e074f673912?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8fca25d65978ca72b3b508bb8c7b6bdd09bb739d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e2b9e24959052f1c2b3f5f46f1a235263ef15d58?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e3479f61ba0373a73c71fa6499b1b888e32d9b8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eaa8a0c59b07a9a13bd7f22358cb04df47a52041?original' }
      ]);
    }

    const existingImages_k9582339 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9582339'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9582339[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6be24bb949537fcf3ef09d984a5d28f5040e73cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfNDcg/MDAxNzUzOTcxNDc1MjA1.Jb-TctdthUPkk5KqYrcrI1GHiNeNdJXjbn7p0palt5Eg.J0T3Fbamrw_mEwiK7rxGVBexwdHVnofHV_8pR_bYB2Eg.JPEG/SE-90df6623-6da0-11f0-b404-c50156f07cba.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfNTMg/MDAxNzUzOTcxNDk3NDE2.oGofxqIAWGGO-KdwjToSSE0flA0y5-OCTNXiLUXNmt4g.r7HZv1Xmx0euPWK7uo2mjFvM2IBubVy9X-xfHMQG5tcg.JPEG/SE-90f251f6-6da0-11f0-b404-7b6726ac37f7.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfNjIg/MDAxNzUzOTcxNDc0MTI4.u-CGdhmGbzgnIc9N7zjMTMk-9VFobJiP7BB2D0aYtZog.AdUbg4D6Uce8b_-2Xd138JiYQ3vBok4_04bSUQ1rNugg.JPEG/SE-90de54b2-6da0-11f0-b404-2b1311e0fbe6.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMTQ3/MDAxNzUzOTcxNDk1OTQ1.DZBFrsCU4zd8vKjNVxBzJe87p8Wwbk6Fso2AzVq4Rwog.ILF0VaefxxuOfds7BQjvMRm23B66WN9L1rOJ7yDgSBQg.JPEG/SE-90eef693-6da0-11f0-b404-e1a532ef651e.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMTI0/MDAxNzUzOTcxNDk5MTY1.J2ceLsFHiN_DXfbc85Wp-VYH9eUR8ZubAtaA1FILkTsg.VNKBprHQf86o57hEE98SF7BKwjW-YKDaIKg3gYJmoowg.JPEG/SE-90f4c2f8-6da0-11f0-b404-7f238be7f3f3.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMjc3/MDAxNzUzOTcxNDYyOTk2.m4I6EevbU-UQG6JOviCKh6LdyG8iEESX_psnocWtWNQg.ClhFHjO9sFZhSn9hgXDQpIiVAlv4je08D_uaZ8ZgQeIg.JPEG/SE-90d5a21a-6da0-11f0-b404-5bc8d3a01ae3.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMTgy/MDAxNzUzOTcxNTU3MjIz.4h5d_dz2U0OHBW15i17rkqibWITIMALmvUNkYQQZ6Mcg.1PfKY-6mIfh0tTci5jlW4QhQWqvhkM-uGHO5U-X4mA4g.JPEG/SE-90d79dec-6da0-11f0-b404-75dcdf9ebd98.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfOTUg/MDAxNzUzOTcxNDcxMjY3.r8EqyxVh2HDV2GWr49ZFoT_7c-4iuDohMrhrCGjl2Dsg.adQ3cJTQZMrD7TNur0yk5Mf78zJ33Sb0InR6JfIGPMIg.JPEG/SE-90da5d0f-6da0-11f0-b404-413bade6978b.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMTI4/MDAxNzUzOTcxNDc5MDYy.tjd3cGGd6YfSH2Z_DaHBqhH9K3Q7DMZ58Zda982Chiog.GYeuGzwO2pddHvp0SkpK_4aKSXXL9debZY2W1U20c1Eg.JPEG/SE-90e27366-6da0-11f0-b404-b7c23890a540.jpg?type=w966' }
      ]);
    }

    const existingImages_k27189717 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27189717'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27189717[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aa4906cbbaa89710e72c93df278589d73c0952d2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7f51ce150f42c5b9d78ac001a8d68352be1db332?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/67e2443b8d70f445d1d6c9a383717994d7d529ee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac828b0a07e67e1c2a5c80a5483c58791ca40074?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MzBfMjI1/MDAxNzQ4NTY4MzIzNDY3.RQEHslIzOqHWh0ZfQrBzxDfKhhlngq2YL9uOak2s-04g.VlHcG20RUjXvFIM5dLsk2sQcRA-Kk00yrMIHEwe7hekg.JPEG/output%EF%BC%BF1056976106.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MzBfNzEg/MDAxNzQ4NTY4MzIzMTYy.51bEQZhwuG-YKS8vEYECmKLFa9ANkp_EPBQlcpD5kWIg.71q7EDsVdPIwyZkeVVt3AmEKPIYSNDzNErFjcRPkCQAg.JPEG/IMG%EF%BC%BF4491.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MzBfMTc1/MDAxNzQ4NTY4MzIzNTcx.ldnvdFB59ztT686lzyvqslZXLWfA9kk_NqJX7uFtS-og.78kZsJiaT88xhvb5UURTW0GeOvztq9jaS3sZNth4askg.JPEG/output%EF%BC%BF3293615791.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjExMDVfOSAg/MDAxNjY3NjMyOTcxNzE3.qoTN-jzDUUHN9cetmThaceLKi5ESClXxRWRkTXuNVxAg.UPcccvuA-fzwsU7s8_0m3LCl8eAIDxjWGkC4DM7l6mMg.JPEG.kkotdonghee/20221025%EF%BC%BF113550.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjExMDVfMTQw/MDAxNjY3NjMyOTc0Njcy.2hNcvitj2UmygR53UXxD_V0XAB-usSgaxkv_vQEA_x4g.o46Y6246QaF0RTfhvp1XxqzOGYWfTirqi7xiFoRNHtwg.JPEG.kkotdonghee/20221025%EF%BC%BF114906.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/99487132888167ff10befcb8cb5d3b397848f7a5?original' }
      ]);
    }

    const existingImages_k16836641 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16836641'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16836641[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c96cc0cbe9e9f384770c0c26d58cae7c612b8b35?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db19b9ce1bf25091f653e72703d2e2f7719d0cd6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/22180b1ef37fef6f51a8e982df1c17afacf15b5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMjYy/MDAxNzU0MjczODkzODYy.GGileIayA6sVpXuXEhwAsXdKxGlKOaFko-uUr_LaQtAg.CHCQmuuZFd4VpxH4Tq5g_Z9DQSVnKHZsDatqkP5ouV4g.JPEG/SE-cc286464-3525-4384-9387-f171ee5b1e49.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMjMg/MDAxNzU0MjczOTIzODE1.-apVFGjt8CHcdZFIEWdoREggvbdF8ELyHiCQXyDJQN0g.2Nd-1QVOD0CqOdy6aiDAgKEznRyj27d2a40a4Hnm9Hog.JPEG/SE-5e55bc82-8a3c-4a97-8c81-957a84a3614c.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfMTg1/MDAxNzU0MjczNzU1MzE0.q0r7iGrqQzrH2mZ6JIA_Ad1Y37pOWvjzQM7_ILMYYakg.4xrMTGsNKCu50ETPI2HxRpje6nrbap_-eCVvib24uUkg.JPEG/SE-46b942cc-02f8-42db-9646-aac56d813ecf.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfNTUg/MDAxNzU0MjczNzUxMTkx.odGljyF5yegWtF5ujWfx74KoVHmQ0ZJ0GDcsqsb13Rcg.AXd5nw4VDaWY6OZm8JnfduKcW4tY5XzNdZxbEivcR60g.JPEG/SE-fb259a0f-3383-4f78-a129-71ef7357d2e5.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfOSAg/MDAxNzU0MjczOTAyMjQx.f77mmUIueijBsYyijPpcIc1ghFtgd-wXYjm7L5MS9kQg.cMP8Ivh7fD2QF15IhFxk6qp3ADv1ys2RxeS7S_umFM0g.JPEG/SE-0cdf2f2c-fb30-453b-8469-f2d0be68bdb8.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfOTAg/MDAxNzU0MjczOTE5Mjcx.Z-jOnQ_9JJpPHT1vX2sUZWlUES3z7yEYVDhqcLFFZvAg.KztDr38v6nwGbyuq4R8GwMM6aEJD70DUMBJmzhnYNUog.JPEG/SE-66735690-dc56-4a78-896a-6af777a162de.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDRfNzQg/MDAxNzU0MjczNzU5MjI4.AKCbaebJ_VHHC4DGlqyPi88iGH2gUF72HT0EC4Cr2CUg.JTbW57yh4Zc8DCagKERMuMA2LFETnfx1JBZGB0F5idog.JPEG/SE-1ac61fcd-1f3f-42a7-a582-66c95fb32dd2.jpg?type=w773' }
      ]);
    }

    const existingImages_k10886743 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10886743'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10886743[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjNfMjYz/MDAxNzUwNjc3NTY2NTQw.41fTkBb-RT7zbIVOmM623xKm6pCWvrLa_CnWXT5DKr8g.hp3zTHLOnEjn_wuQCGVXrL5uufOyH7P6UjVJrjOjG7Eg.JPEG/IMG%EF%BC%BF9452.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjNfMTc3/MDAxNzUwNjc3NTg2NDA1.FM1z6PxhaulzipZrk_G74d5CZCFS1tMA8aquoHbBXikg.9P3vIuqg73dZfKSX3aCi4nj50RVYx5DrtwLdrnlPlogg.JPEG/IMG%EF%BC%BF9439.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDRfMjU4/MDAxNzQ2MzMxMDY0MjUw.CfIY6peT2Jrj8qAl-HsvwTz9b_aGFtX3A0Wpc2vwzF0g.SMHVQAyoCvOrO2Sm2I7THXRBDRgX22fMejHWPs9WnUQg.JPEG/IMG_9156.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA3MjdfMjc2/MDAxNjU4OTE0NDE2OTgw.u-1Ty9L4d9Sp0RNOOHb5Uvll0KqT9G9yOeBQrlDyV2wg.PD5ikQBXIpDjwMHtJcPgXSWj7aV5ehztU_L5dqDO7fgg.JPEG.babu3712/12.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/place/8216DCE1BC864D2994340C8C10B22E42' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjNfODYg/MDAxNzUwNjc3NTY0MTYx.PHL35i_Kg22zjvtZ_kUm6t3ZFmWIkpuh-M_D24fZKLsg.ptyidsUWro9AncLVddraFwkNIrsdO2loklizno-SIo8g.JPEG/IMG%EF%BC%BF9462.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjNfMyAg/MDAxNzUwNjc3NTY2MjY2.1ajwHaUrpZ1aXWU24eHBLzs54A0mmghewJBEmpQV4z8g.G4UmfCLA2fqURfyMpwcMFCu-DCqicQBxi4DzdeirHQ0g.JPEG/IMG%EF%BC%BF9469.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjNfMjYz/MDAxNzUwNjc3NTYzNjkx.mm1THgNYnu5xhc-Esx3-WOF6k35BzCoxZtRsPBQwlukg.hZDgmya7kr9_QK9gshwFAcKUfWuese4e28qaoA7qcIAg.JPEG/IMG%EF%BC%BF9461.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjNfMjIw/MDAxNzUwNjc3NTczMDAz.IkcZTNYZPEIbdsUNsYN4jvV7NQ1UpLOmK7divW3Fdb4g.cH6Wf6RBkafIFeT9Ld2REp1B6XRfYC1u5iwfETEGitEg.JPEG/IMG%EF%BC%BF9492.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjNfMjky/MDAxNzUwNjc3NTczMjIx.9DX6b3wKD5FxBi7Jh7BYA7NIkt70xadgyKtPJYZJpn0g.542RyrO7Hybb5lBY1Re8V0XTFDIWX4WZHun7jglSILcg.JPEG/IMG%EF%BC%BF9488.JPG?type=w466' }
      ]);
    }

    const existingImages_k670031710 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k670031710'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k670031710[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b8ce1b6085222171ef52d74222239308a294dde5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/65fc614ffe0b71accdac93f1d4c34a008c693833?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b1c022f95bc4537737a69cae00b4ba40de6cf044?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/805159691b85390857a221c217d65a7e965e902c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4307fda0ad1cccdd7683d74463bb4bdf31baf45f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTA5/MDAxNzU2Njk3NjkxMzg5.HLtb3h7gDprlqW25Hd2xtY1rTlmosEgcghkuda1LCAQg.4AY-qwyREzWSOfYEZPGNE33BY0UPaJAOBguQx90s1BAg.JPEG/IMG%EF%BC%BF0269.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMjQ3/MDAxNzU2Njk3NjkyMzEw.qHZOAoHIr5xzR0MwYVb_kTupDx2bOac-OYLamk-zBmog.O9gAUr8HTtUeIwuRKxTSbYDj_9Reorbh2S4CP2osiycg.JPEG/IMG%EF%BC%BF0275.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMjg2/MDAxNzU2Njk3Njk3NDQ0.4j6t36KZiWN6-SdMMxck98KfYcTf7uKAAy9pTIWW0AQg.LuBohe93LmtNr9TOMHDcWzA5ddcjvzUPhNZtpYM7hhMg.JPEG/IMG%EF%BC%BF0257.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTg5/MDAxNzU2Njk3Njg3MDQ1.ZjuwDwtS4K0svWlebN4KvOa9X3gcAd1msjcBgCsOasEg.TbqHVcKhaKsv-q8dWyZ-6BbjlUvd0kx7lGbSk3EM5MAg.JPEG/C2581943%EF%BC%8D228E%EF%BC%8D473B%EF%BC%8D9EBD%EF%BC%8D62006C9867E4%EF%BC%8D17983%EF%BC%8D000004579EB41ABA.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTg5/MDAxNzU2Njk3Njg3MTYw.DhQv5XRzPgtkvWnTAicSWKKThGfcSS0QaNyUGHP_-8Ag.y6-zcdmWvnCVYQ5oUCcKoEOhVSsK-18DTAue1-i4I4Ag.JPEG/IMG%EF%BC%BF0243.jpg?type=w966' }
      ]);
    }

    const existingImages_k10893648 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10893648'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10893648[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1aee8172e2a66d94e7c9bc08c4828bfee50883db?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4049be2afbe90442647da3bad38edc773e232704?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd0a5b4268172841fefe85821b60b4d1630c119b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4caf7b3706438618577c9f7b851a2b986a13a512?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3faced99203166e6476263705e64df0404a3c5db?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c2e63492fed272f8309b059a2e418a1610256a42?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33b610c3ce955f156b1c4bef166a15b589243c2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1039036dc2168f67fcff67c8d9763ab908f432d4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/deb071d9c734df6881d1dac8a0c11c625bedbc49b82aeed1f0a1e8f0a18119bc' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/55a7edce68dd82513b8c5319df665e3f70ee02a7?original' }
      ]);
    }

    const existingImages_k10819530 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10819530'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10819530[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDJfNjYg/MDAxNzU0MDc3NjYyODE0.1FgWqHIUp1880-C-FkNQk2k1Ynd32Ldkm2n2zX9JC-Mg.1SoPPLsMFCxc_hHRPheDERRs_fpRiwT_cNR5vcttOsAg.PNG/Photo_3.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDJfMTk0/MDAxNzU0MDc3NjQ3NDIx.e5t5Kf5MmYBbVODsR330Kw8RaAymwYW4KFokBscnYtcg.l-SV9MLOyFlnFoyqELqa7sn59SdxFSyfIY7QXUyC5OMg.PNG/Photo_2.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMjYw/MDAxNzUzMzQwODM0NTg4.ErKSDf5GsZbsUInUZNPLBT5xHbxCe_E5ZdTtfMYs5VIg.z-VpOEDGTxbwiAgi1Lkkb0zbL85evs1gKMAOWHIinLgg.JPEG/900%EF%BC%BF20250720%EF%BC%BF155729.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMjM5/MDAxNzUzMzQwODM1NzU2.zvNNHilAs6ylM9K-C1NhuqH1im1rXv1zuVjj7TlJxrIg.k0RDuwFVKY0PZZ3G1M0ZjCowEwEV00-CKFz86PeuQcsg.JPEG/900%EF%BC%BF20250720%EF%BC%BF155823.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMTMz/MDAxNzUzMzQwODM3MTgw.BleYBAVI5Oe3CJN1vW6j7EyPwjNHS8WlnYMiqv55JVAg.yuH-PyxUsGL9S8DgQZfY2CTTKpDR-urts-DW1A2FarAg.JPEG/900%EF%BC%BF20250720%EF%BC%BF155906.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMjQ5/MDAxNzUzMzQwODMzMzA4.p7yZ_sv8cxqkiB3njcOS4AYFfCENZnyQ1RGunZdAs6Mg.2L0ec1HherHHy-Kdut4DqfIdYrK0XwX7F4mVUt_1M0kg.JPEG/900%EF%BC%BF20250720%EF%BC%BF153014.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMjE4/MDAxNzUzMzQwODM1OTkz.yhTbEJVSR2oTPpCn4JyznWYQqoNSSZspf1m2BsM32ggg.efhK8Ep1Urxous_f-wv-s7Y9QJgKNOZ8T02OXs5Lbq0g.JPEG/900%EF%BC%BF20250720%EF%BC%BF155428.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMjYw/MDAxNzUzMzQwODM4MTcx.PLrozqgMwwmrTyk8h8wQ_PIjEdl3CYG-6-aC7jt112Yg.3QnT074TDM1YcnYDmf_HAvlzicxzeffOapDo6tv2Jdkg.JPEG/900%EF%BC%BF20250720%EF%BC%BF155848.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDhfMjEw/MDAxNzUxOTY4MjkxMzAy.79DV0U-RUL_Wq8jNbc34BqY_JkWrgJYR85Tpku2V-OEg.szstZGjZKoHIGTJcrvjHdTVkIuW6LwoMkqmj_3cYcjYg.JPEG/IMG%EF%BC%BF4993.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDhfMjgw/MDAxNzUxOTY4MjkxMzAz.54N6CHFY4fpZRwp_LPgQEPwg2MHO_5TZRPrLqWMB2Psg.JeW94vZ2B1ULNH-GAtwU8rqF1sDDw--jIwHkeNuSwbUg.JPEG/IMG%EF%BC%BF4994.jpg?type=w466' }
      ]);
    }

    const existingImages_k21251174 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21251174'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21251174[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfMTI1/MDAxNzUzMjcwNTQyNzk4.FgHs9lzTBzcb-NylpRpNwCgeuvO4AhvO1Wqe3o3uoa0g.NWM8IjfrL39XPu1OITK87BWRy2Wn50fyojYdv7Xm3g0g.JPEG/SE-242b9788-1b28-4860-b707-ddaae7987217.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfMjAw/MDAxNzUzMjcwNTUyNzg1.bxU3p-5cAh40NCvg130PVI6hMoHUyyRZZzWV6mjimHYg.UPv4DtnskFkfahCPkmcxf2dEvF3syA55-pQ-zjaALjcg.JPEG/SE-3115cdc1-259f-4c9a-9373-7c38ae05f51a.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfOTAg/MDAxNzUzMjcwNTQwMjkw.AdqACXhw6zCam7KQfyqbj03Mzs9gplCx1g9lQ8oNnkwg.UqfgKrguo61JI2d7vSIbZZjL3MJpBav28y9SbrV7xxYg.JPEG/SE-7617b929-93dd-4a6d-8a44-9d54ed13a024.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMTU3/MDAxNzUzMzUzMzE5NTI2.3urpf-YGSaaM_jh6CbYUdBPOjzKTLhACp-F6aE_TRB8g.1vhiJuNpcHJsCjJ5Gt5EC-g4jBo5mxJ4Y8di527-1Tkg.JPEG/%EC%9E%A5%ED%9D%A5_%EC%B7%A8%EB%9D%BD%EC%8B%9D%EB%8B%B9.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfMTUx/MDAxNzUzMjcwNTU1Mjcz.dbAgyL6sxeNNIqqrcDg-pGgskituWcMbScQBq5V6vUkg.Dwf5BVzS2UKuTD2oyx4FoBVy4aMXdPgVa2YmPFnS3Fgg.JPEG/SE-80d9d66a-2f65-4154-975c-39d8557ddfba.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTJfMjM4/MDAxNzQ3MDIxNjEwMzI4.nt1gDsgE9xzDThp1NXc0IeXHGYvYPi2QZq6dMr1odeMg.u-1haikVBgISFS5Lih6lDAfDRCmIU2DbbiyVr_ClpQEg.JPEG/IMG_5998.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTJfNzgg/MDAxNzQ3MDIxNjAzOTUx.4-ft-__lb8DRVi1kgc3ulaOl_So1R2LzwJvru8PPK-sg.ZtO15wEzlpXo2fBAuDHO0qc1z3ACkuIYbBeSguQjbxUg.JPEG/IMG_5946.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTJfMjE0/MDAxNzQ3MDIxNjExNDQ3.Z5Wedxt90c5-r8KLrfHEK9zt1W_MRbcSbRO378YQv1Qg.UcI_O1aVhgkQcmcX1sG9NHbQdAWa-l2lyPPQ7p2OAYwg.JPEG/IMG_5945.JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTJfMzQg/MDAxNzQ3MDIxNjEwODU1.DtvONMFVPhsiYNt3nOlU-4LeP15T8gsWEVR28NumeLwg.mH5vo980XjyEgTIvaiMhwKC7aT6_iKHd9O95wmV4brQg.JPEG/IMG_5947.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTJfMTA3/MDAxNzQ3MDIxNjAzODE3.NpQ9LqKiWL6ng0W9HPg0HY_MZ3KjOsxnWUmmSq-jrwsg.8NvCaV2QZt698gWCOnTxFY1vxbkdx3BLDfml93yBooog.JPEG/IMG_5950.JPG?type=w386' }
      ]);
    }

    const existingImages_k255503183 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k255503183'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k255503183[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1e3a145316e697cfb457a0def3442df8788c21dc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bcfc872411dbd79cd3f3c0a19975d5ef122cc939?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9352c2a3422e07422c87b23c993223b185e1d395?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d8cce2d25f9e953c279f7f2af6d238aec1cd6fb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/351b923a09b20fbdc6f9ec2e07d6dfa83538d416?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjY1/MDAxNzU2OTI0ODA1ODM0.aiXkQ2LmMgg67Pix9CVsyfAu4diSCXQ1m5CFGQvE3UMg.-iMv9aIN2aKcG_Ot7xp0eIi8n2HTylYKe38k2nqiEjAg.JPEG/SE-60b4ad79-23cc-4f24-af75-0e160d7a71e8.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTIz/MDAxNzU2OTI0Nzk0MDAy.piQBb1zRAE7MnJ-P48zHl-1Fm-GKWib5G5mVmYCaS_Ag.6l1MAYL5KC5S81eQyc-R6X2w-lrFxhyVFV7Kx2ERKoAg.JPEG/SE-be910eac-9e9a-4989-a3d6-efa0c9352310.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNDMg/MDAxNzU2OTI0ODIzMTcz.yBXKHMmMUmnTCQppC-IDjNs1D273IDiAkjS_eIyf0Gog.TMOrskhf32sDokdZJx81h7xCp68ziPGxe66Nsom1oGwg.JPEG/SE-c37f871a-cd44-43ac-881d-1af48f705e4a.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTUx/MDAxNzU2OTI0OTIyNTc1.fc7Rn__8mOLOacoTd1ET4j1iIEDgUVA9kURcufU7dWEg.sV_fkexfBtn1782qLf8Q852EheROGuzeUu7dYZtnFh4g.JPEG/SE-5b686b0a-af45-4903-ac2a-80c2b25cdc7f.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMzQg/MDAxNzU2OTI0ODIwMTUx.pujLP4NR1S5kjliicjffwZtzYf2GutcHINEJ86ElEVsg.SdP0EyUHXisVZX79kuoYviuCfFc9zzPF_M_nJGGw7WYg.JPEG/SE-9dc02091-5b30-4450-bb8a-994afa5ecc2e.jpg?type=w466' }
      ]);
    }

    const existingImages_k1115266066 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1115266066'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1115266066[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2fdb99be85e1cbbb845eddd95cd7c5fa40c70ee1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa9b4248f34d6676d078363bd5061c1900449bce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b9e772eb5721a29fd1d912508bfcd6c036565625?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjY3/MDAxNzU1NjYzMTkxNDgz.9N2ZCfyBIBANi7w3PqJJcvTAzVCWv-nuG0hY__huFq8g.NLvDSeVVyMcnyZbx3RVq4RXre1YzcxKtj7dyAxFdeuUg.JPEG/1755662888084.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMjgg/MDAxNzU1NDgzNjE0MjUw.ewQv-oksah0DCpIMmVot7suTb2qxwPZxWGxHWwR_Sy4g.k8lOQYB-kWEsoFV4Yben05a6EjMD9Q1gn5qGrYvZA2wg.JPEG/SE-4c8512f6-79e0-11f0-ac7c-4b24c7a5a82a.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMjc0/MDAxNzU1MjY2NzM0NDA5.t8LB8dcAaj-9rogWGEiWVO29HZnPBhPbnTzpinvXQKUg.bYD59lW09dVUF3t4GlzTkFJIsR2cvltqk2wDIJSqyZAg.JPEG/900%EF%BC%BF20250815%EF%BC%BF175730.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMTky/MDAxNzU0NjI3NTg2NDY5.WcJtHVHFoqrSBV5k3w2iE0rZQ9HBsocBfV8BUmfl_z4g.LxrQMlH1dHQeIhXg4grvQ5wUBGMZWhb6DDU657U7hogg.JPEG/20250725_120020.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMjU3/MDAxNzU0NjI4NjU5OTIy.q7vIMyETuURGp6XJnnimXTB4-UZvRRDtGWOJQ8AW11Qg.m6vbP4wyZ8KFXkUAoNy8qyIfITeeGMHaWXC7mPWb71og.JPEG/SE-b3d57fab-467a-4044-8d87-558cfee6db6f.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMjI0/MDAxNzU0NjI3NTkxODA5.IxSc88UB9eIRW1Ik_A0Ev7XrSNliOJKx_X_qOssh5I8g.YoIvb-ngb8nyz-nVTsuGqjNAsv9HMBGQWOVPhSIF4lkg.JPEG/20250725_122915.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMTI4/MDAxNzU0NjI4NTkyOTE2.-8SrCVpA0cLz70FNCHaLYPZd9sFgXwSzzmNu3mEOT4Ug.he7MRnpwzhtpySJBRwGybRqQ1mvvFK2rDJUqJ4uMSP0g.JPEG/SE-9be7cd9f-d0dd-4293-ba36-2fa251a21583.jpg?type=w773' }
      ]);
    }

    const existingImages_k421048086 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k421048086'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k421048086[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0ded6d32abea6c79c9431ec7122c55b25143350c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/51a3c44a37b4b3fcd8dd77e3a1bc835a4d6611eb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bef2cdff609a4e00804debe665d71256e18e8a99?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/473cfea678e3ad35b01a127523c81a6449ca843f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7298a340ddf2dee4ec6f59e124d1a3f4254d5401?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e538d9da157807385189e53b713e67ccf26d8c2a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9dd92a211c21a73c6a40cb9b5af7ae2aa0fc2fbc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aeeb4e5ce104dbaa79878e1385ef7f0f17aada59?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e03a33d56fa127db4df689bc2998220d95140163?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2bd3d30a517f482769496a79182c456824b7d417?original' }
      ]);
    }

    const existingImages_k10186580 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10186580'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10186580[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FD54F6D91EBF4EEBA545FAACAB3EDEFA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4FAFE2AABFA849E2B756B89BE48DDC35' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/43985598104D4D6191F4B7D8457CE0A8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A7A2A713DD60479E8459202FBE6F5533' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E670FF7996DC47D4B7C1E0DF24274ABB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FFADB1F414A649DE86408300A25BEE67' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/53165d2dfc49f7c7dc7b53722e857edd91466ba1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5d2885307a5b4d53a8cb1de2a4ec320b018bd2e2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fd137f776766ecaa719e7bc2ff1809ca01114e21?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/81e9c2d588bd7fffc3012b9147b683970c20dd17?original' }
      ]);
    }

    const existingImages_k8065995 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8065995'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8065995[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d51eb011bb20cb1fdf9e1806b1b44060620f85a5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/625911373da008f7e267403dabf74e81c5997062?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/565167b21a2e74166091757d112350af51a08517?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e4ba872f72ab68b7809e44180d7396282dd55d64?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1bc2a5c17071d240d0d4e74f51611271bbe7880e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d84d64424f25e217d6e156d68b056e7de0ba5112?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b29134e0d47208d53b2cf6d87f3d11ba2d6db0de?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a97e6e90e1eda88ef591133f5de60d1966ba2fce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79946629df35a1891898d6aa67ed07fc14e240b5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/54952290a182ff3d61502397adc7d4cddcda90e6?original' }
      ]);
    }

    const existingImages_k10722147 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10722147'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10722147[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTgy/MDAxNzU2MjU4Mjg3MjIz.At2I9ZB2cHZePg17PKLQb2v229gGrOjyUlj-phLnMlUg.BBO5DV1WkDY0Idclsj2ARGMm_JUzVlINH_u3eQO2nBQg.JPEG/900%EF%BC%BF20250809%EF%BC%BF175631.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfNzIg/MDAxNzU2MjU4MjgzMzQx.gBIRJzXVJ6lhGMTDv36Z_CSPtkCibsx0h0pB4LE_sFkg.js9nenO0Fk_rlbq2sB4Y7Vt314rotWf7hGyFnTj3EKQg.JPEG/900%EF%BC%BF20250809%EF%BC%BF173313.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTg1/MDAxNzU2MjU4Mjg2MTY3.My5pgsathX8iXG9L5DM2ssOEf_srM8X9Tu4k3BAuss0g.EDdlkhj0Xsjh5_8D10CtGgeF3jujzLpfjjBpreboQ0Ag.JPEG/900%EF%BC%BF20250809%EF%BC%BF173258.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MDlfMjA3/MDAxNzQ0MTgyMTUwNTc0.o6Bj4NXO3JtrzPyjxb60BtznEEvNLJB4JcI21M0vBkEg.muWdJ5B9mphquWqJbZO8-HkUVCg7uUYXVHawUHCCpf4g.JPEG/IMG_4144.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjJfMjQ0/MDAxNzIxNjQwMTUyMzE0.7aw-9djrbGAuDu2G2U78WutL5P3GV7bsaEKA-xhsz30g.tuq15a_G5FO9yn039zDxIxmjPEpgZptoIUznwrdAuRMg.JPEG/20240617_121326.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MjRfMTQ4/MDAxNzIxNzk2NzIwOTQ2.DmIf2NV0oq10SwxtF99I6OgrI4QExaUtWhA-MPBekT0g.prd_7IK5kOlc2wJ-l895mcxscyEzIDba3jROn-ELp0Ag.JPEG/SE-1d0c0a33-0302-41c3-8e9c-db47b85d2967.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MDRfMTQ1/MDAxNzIwMDY3MzkxOTg2.rlsVJpElcPPu4XyEXybjwytFt0h3bZHvLLWxQAKYKyUg.4QAma3f91BEc_mtAONI6waCdnYy9OJvWTxP6oJYj70Eg.JPEG/1720067222595.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MDRfMTA3/MDAxNzIwMDY3Mzg5NTMy.W5o43uaJ6VZ4R0lUQYLFKhWcn-8miAFhyZ_uIcwkLokg.bQPjmG4gGcnHP1D5arASNfs273FH2HBRMqlV_4eUbOwg.JPEG/20240704%EF%BC%BF115413.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAzMjRfMTUw/MDAxNzExMjYwMDc3NDQ2.HW3N0DMJSJtY0_db62eIuimQwRpzgWsZhLLCFqCYWEYg.Havm-AZaHwvJdxyF3LpPWCBjGs9GwBerTJQYsRyPP-Ig.JPEG/output_197300243.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAzMjRfODIg/MDAxNzExMjYwODI4NDEw.L103vBGuFDwjystR882QHadXyL6jzSMgT55oHdeaRQ4g.qxf7yDmngQXef-GmD7BquoHxZnWC7Zt05ew4-hxbGk4g.JPEG/output_4087359627.jpg?type=w773' }
      ]);
    }

    const existingImages_k9388811 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9388811'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9388811[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/67e5c1b7c3a1524187764eaac33e86fc2879feb6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dbf9c63d50f26b104823da01a9ee9c06848856e4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/br7hal/btsP2YZOMfb/WvGoHYZbp8UEzBHzgqSfi1/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/9ZCNF/btsP59kH97P/F5XdRRYPdvVZCY24C45YA0/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/b8fCpy/btsP562A63i/5Lr5G6gJe5aQQB5cPTrI00/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/RKZlJ/btsP3uKYO1h/yEfmiPKQAllsm8J3HZ5czK/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bGUErO/btsP237ED8E/KeuTWSM6Bv6BxQI0uzCyak/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjA4/MDAxNzU0ODkxNjc2MTMz.BhDIS83stSu9h0stUx8DtOYJ6teCsmGIPODRyzAFVpog.BZQk27YGPaYzrg7R42e8D4aN1F442S0ugq8XH_4tybUg.JPEG/SE-5c644149-75e5-11f0-afcd-a759023c44b6.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMzYg/MDAxNzU0ODkxNjgyODYz.ISv7S8J8a9BjVoi4v3P9tJwiKPbhBRrOwqmS8uMWliwg.VOIvOtriBdk_JtmpvjcatoKnQvzdUiyZMAk5YTyOTiUg.JPEG/SE-5c6f8bec-75e5-11f0-afcd-e198f09396bf.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMTgx/MDAxNzU0ODkxNjc0ODgy.hv5ydayQG4ufi4FAK3PyM5ePUppGt7NV3OVXEaTiEmMg.aA_2xDhCPD8hyW3fqihcqwAxvostYy7GH_dbIEwfQZgg.JPEG/SE-5c6097c8-75e5-11f0-afcd-e7c63882278b.jpg?type=w966' }
      ]);
    }

    const existingImages_k10681971 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10681971'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10681971[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9a7f8043360ec6602eb774a9de87e8d308d1f324?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfyHeqPhO_xQ4ZEPw5TYVkjJFbocQ6gk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqeW3aJR3c_BBHyvT5QswU4so9akGMj40_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqeV4gFB2j_WW6jgj81yMVwC16Aap7Vn0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqeTJRTuzF_IPYIMb2lJ4iM6gT5KR0dfK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqeTJRTuCL_nX06Ie6X3BYkIswWFfdWE0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMTgz/MDAxNzU0MzcxMTU1MTY5.aUuSEoeiWaqInEQJOEPgc6hcVSCbAZbCfY4le7RobT4g.0JNWds5LIRkg22mB7pRKv-hlhyWiz-aFw0CkcGrMIhIg.JPEG/SE-93f96fbd-2fe7-4560-9d13-52714fbf780d.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjQ0/MDAxNzU0MzcxMTc0Njk5.Biw25XwWfBpuRBvBSPomFkcBLuuJ2uLdu9FbLfwgLqIg.wTB4zssDGX3LpfcPmSkN2tKcdDOD3ClYHenUGK-LZ-wg.JPEG/SE-545d9b0f-8633-4801-864a-50841b3da7ad.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMTg0/MDAxNzU0MzY3MDE2MzU2.53InRPdBu-nA3ZYVLAB0hZBrJ6aOuZxbaYKOUJhtQVMg.MZMp6yA9JFeeTMhkCWP5MBUpPKkBkRXuzPhDX9ZzDU0g.JPEG/SE-e9c79009-378a-4f2c-9e8a-62fd3c9b0c5c.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjc5/MDAxNzU0MzY2NDI5Njg1.CeE8yeN9oLHVtvztXJwU7yQZnvwE2NBGERxDxY1BSMMg.iyqSpER_PLt71WyBjE25LQNXdQo8Q41BoiEjFFX_RnIg.JPEG/KakaoTalk_20250805_123026256_03.jpg?type=w773' }
      ]);
    }

    const existingImages_k1157854722 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1157854722'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1157854722[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C37C9CAD3717472A843F716E511B4447' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9061CD7467BE4FE180A4E495227B41BA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/310D0EAA097B42A6AB537A5F9D5B18A2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e1a0130bae932f133dca30fc1cc0c4edbf37479?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/520c5e6507e434ddc18526ad2b36a0940102c639?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/99b5e78a55a3deff3c10602f85413699a5afcb96?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7d4de9e0501fdfd64d1fa188b1002e2bb5eddc2a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6be09569881250d7398355df7469d0c12c6d2257?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/165784357229323e8c08cccd19cd70f36260a031?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f3dc159f8fe2b0aaf92a3b896e11240454a07d6e?original' }
      ]);
    }

    const existingImages_k11241347 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11241347'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11241347[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTAg/MDAxNzU2Njg3ODk4ODg4.wjp5112U9eq9a5MIUVk6EWgxh4aq_FVXdhdToV4cUK8g.XXPF82nhrbidc8VFDQOcF-GfQEcbTEAQ8vws1EOktREg.PNG/cgj_jj.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjdfNjMg/MDAxNzUzNTk0NTc0ODY0.CxjcO_2dNA3VoutQ5Is9o9qEMB__DJz06IoYIHTS570g.sPkLZoe8m2DX9cq0aQy-q1giNFy2LEvn-TAkonrwIp8g.JPEG/900%EF%BC%BF20250726%EF%BC%BF191619.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjdfOTAg/MDAxNzUzNTk0NTczMjU1.NGhONGbMSoChWDJGShdsCaSIivId80ILgGlgAgoYOmsg.VouYX8hMp1A0whEqwVK5lTgk46T_l7gskbrBfHExubQg.JPEG/900%EF%BC%BF20250726%EF%BC%BF190517.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjdfMjIg/MDAxNzUzNTk0NTc1MzUw.cidvde-n2VfZgEUF6Cq7_yor8cus1bQliatYtKLqwqkg.pYrWNVckw2TtGa6tourlRp5qJN7B0FH2K-P1TOX-uP8g.JPEG/900%EF%BC%BF20250726%EF%BC%BF190854.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDJfMTY1/MDAxNzQ2MTQ4MTEyMjQx.YOUZqyMiUOgP0-G1YNlTBKln6x8Oshp2gIy8m8dN9lYg.ti6DRAsVO8YuP8ozJxBFBel5kEi6RgbgpxwytyRr7LQg.JPEG/20250501%EF%BC%BF190645.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDJfMjIw/MDAxNzQ2MTQ4MTI1NTA5.YysUYIxGGbQhRAC1qTz6ZuMt8MCadZosSikOyHHl28sg.H4qoxo9m_2jP1gWEaIgDFRD2lUOHlq7KQDpwTUt7TzUg.JPEG/20250501%EF%BC%BF185646.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MDJfMjI2/MDAxNzQ2MTQ4MTA5OTYz.1-7w6-ohpB-BWhshnqwZax0CJc6bXtIe0D3yYw0q6Ecg.gpwc3FyIMz4GctKP2kw8Uxo9Nk75Eiat6kB8oBmqwn4g.JPEG/20250502%EF%BC%BF100601.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEwMjBfMTM3/MDAxNzI5MzgyNjI0MzUz.GKVis_gq-avAA5y_ESlOVU6-NjZrjhT7onQEngJ0fuog.5hocqZBlvswbSGRaBsj0FlWlJ6L7uA7C-Sq5PVpmZ0sg.JPEG/SE-c403722d-8e2c-11ef-97fc-bbb270f9699b.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEwMjBfNyAg/MDAxNzI5MzgyNjI5NjUw.sLKwm7uI7jWZ-PLM2NsOfhSaN1-PHmWzTVMQv2A7AnYg.4L651IjlzSSQv4-yQT47kCKuIH7iOEIIy6AQtOj_DA8g.JPEG/SE-c4139ed3-8e2c-11ef-97fc-055b4c4cc316.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA1MzBfMjA5/MDAxNzE3MDQyMDc1OTU0.OSquKkR1EJc8PXzGTeVZIKlQ89P1q2BpjsREdHbWzTsg.a_UwX5-ypTRJ4prhmunJPhrtwK1KYZbjW-ZLQjgR-dIg.JPEG/1717041472536.jpg?type=w773' }
      ]);
    }

    const existingImages_k25052488 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25052488'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k25052488[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqpbP9NRYS_bLxPoeB1DK4fsfhGAvJr7K_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/yP028/btsFGLV94n6/oSy5pO4alwAFLz6rwp0S11/img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjExMTFfMTU0/MDAxNjY4MTQ5MTk3NzI2.rEKbOUNYjVnHixQCsgMIXaiAdZSDs9hEEUWtc8A-crcg.I7nfDiBXGApAPXja6xB-OAxJijicVbs2RxdpxPQTdy8g.JPEG.leesparm/%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%98_20221023_134244.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjExMTFfMTY4/MDAxNjY4MTQ5MjA0NjU0.VuxaeRkhR408E5U_BXNGPZYPzewofd4zpRZCCrTykhIg.N6eKLb5dU0UCNEcRN9qNrFdbXwIwwDuZ2t2HcYj-Tr0g.JPEG.leesparm/%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%98_20221023_134347.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjEwMjdfMTUz/MDAxNjY2ODY5MjIyOTYy.T9Rl1CUjDNQvHOfZEJXY02eETYg_YP63L8hggFqlg28g.JQ5j40Qb24Tajh2GxSMBFdlpRpNnVusi6J1qL3meTlEg.JPEG.cindy_an/IMG_0668.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA0MDVfMTI2/MDAxNjQ5MTM3MjY1MTg5.f_b3LZVrtSBAGBgtUtynH11EAivp1n-Y8yTFN8huTUog.vU0N5K6YgfuI4HF0bczonLULjdP7jAsbnJWzYYt__Zcg.JPEG.leesparm/%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%98_20220403_131006.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a76058238a04ed8187e8ed73ac238cbe2e5dea0e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/93461ae639ce367ff19ad64a0b89fd2454d88151?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/941d1be78321963e9597854b09328ef6fb497237?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5db827f698b7d7f35d6c1c3e26d1c313be22817e?original' }
      ]);
    }

    const existingImages_k13612032 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13612032'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k13612032[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a0c78d7bbc859fde7306a7704298c7098a977caf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMjAw/MDAxNzU1NDk1OTk1Njgy.MDYlbT8LkFEKcH0YeehyY5o_DNWzbv6qSIRczCCYs2wg.BuvX68P3iqXQW6Rn-0wfs4duzNPcYcv7xyChaB5sSBUg.JPEG/KakaoTalk_20250818_113317957_04.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMjkx/MDAxNzU1NDkyNzk4NDAz.SSFs1QpRLyJQ7BDdb06xhzRDDegX_cmeerTE9FCw1asg.Ul1R5mSkjTLhd13MI4tG1x5O9OL-4s-Oqou-cY_CTgwg.JPEG/IMG%EF%BC%BF6393.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMjI4/MDAxNzU1NDkyODQ3ODQz.7MthQ2ObwrMwK-mYUXmNxRZ5aP9V_O8RP8bgYmIt5H8g.JikqTaFpnc6BLKKQE0o2A77ggAnbOc7dEgvMUMdae6Qg.JPEG/IMG%EF%BC%BF6391.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMjI3/MDAxNzU1NDkyODQ4NjUx.ORY3gigMRwGoAEhwAjzcQuwpflMIViFc8QWm5V8vGGsg.VddTy_WfICVM2msRm4sK8gu7xByf6NVWvxLS_XD8w7Mg.JPEG/IMG%EF%BC%BF6377.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMjU3/MDAxNzU1NDkyODQ4NjE1.Ux7EO0sLQMsYLHk_0f92WbyR-exnZH-uywoIq4XH9L0g.EX4ERryQhgLe6jLm0r8_DjsMv78S0Bjw6f21iK1B97cg.JPEG/IMG%EF%BC%BF6378.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MThfMjQz/MDAxNzU1NDkyODQ3OTIw.3GJ5BxZGNRZ-GGlaMyRkehBANUkQNKhvBL1arV2OYSgg.6XCSzCZ_hL2yo_Ec6oEt5OMFMeLDMlGYa-nXmHVsXgEg.JPEG/IMG%EF%BC%BF6382.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDdfMjI0/MDAxNzUxODkyMTg1Nzcy._5MyXGCblyjrwLUEIDuteHRXIpOQvB60lyiG9H_4ul8g.1ZlSyH7nsAt-00IS136GfU8Rrp6_UbtBC71rVVR_MCAg.JPEG/SE-7ab5e8f3-894b-4afe-90ff-f5bc29dfaa52.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDdfMTQ2/MDAxNzUxODkyMTIyMTUy.iBxbv7qIWhVJMlgqLcYeUs-mB1ZesEbziTh-_RlF0vEg.NgD62CE66y-GOYg_9xIylW-aQFzUwerJl5mP_UG3dQEg.JPEG/IMG_4718.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTJfMyAg/MDAxNzQ5NzM2NjM1NjAy.7Wwm5RgSADQzVvlv6SMOnA12Fm4-7ygx3Ip7JO9qm28g.NVHPzYpVzjGTlJ_SxzYxDoBh6eKJNhYo-lbHiHPFbKAg.JPEG/IMG_6058.JPG?type=w966' }
      ]);
    }

    const existingImages_k11193838 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11193838'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11193838[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTJfMjY4/MDAxNzQ5NzIxNTM2NDYy.QGwf9NrLzSQB9bp2Kq2ppc7h19xoI1Gu6hr3enFD7fUg.dNDdeC-XBGi8rmQ6sK0d7F-QKdrlcdaG17oCPhFj1iYg.JPEG/IMG%EF%BC%BF5954.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTJfMTc5/MDAxNzQ5NzIxNTM2NTY1.ZyEFhhCC8UVdmlqFHw0XZ_P0oDRpgbGbM6ycTgh3CVEg.WyB-iABwba6XbBMZbP1IHfw9e0lM_PStDas-Pb0nVh8g.JPEG/IMG%EF%BC%BF5955.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTJfODMg/MDAxNzQ5NzIxNTM2NjI4.o_-kfpNsf7XOmLA-HQn_sRxh5EbmJuIBVAjMBLK7JDUg.PEtO5Up3l3QfP-kKh0jRO25mPvTW7RHnbdYBgDy34dEg.JPEG/IMG%EF%BC%BF5956.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTJfMiAg/MDAxNzQ5NzIxNDI5MDA0.tX1AhwxyVjn45hMRylcCbqeFAMXddpmhbFZTEPIgMzog.ZftlyP4yHnZh2KNg6gTbroFyiNvS3ML3I4uDF4tyCWEg.JPEG/IMG%EF%BC%BF5942.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMTIg/MDAxNzQ5MzczMzUwODI2.-zKXPxAk8Z151-mi9eK8AinALkyEtaOAxw5EiFOBDnIg.2OrEN3jZE-nDoowS89KWE8UDNPrNopikAvanPwUlqJUg.JPEG/output%EF%BC%BF1871059270.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMTU0/MDAxNzQ5MzcyODU5NzA0.t4WaKW5QD78RWOw_7UjJ8ySkIOzEmFKmsKvJ8uQ3cLQg.KfnVLKQSKVmu0j5es9oipbUlIo6PL78uJ7n0yYlzvFAg.JPEG/output%EF%BC%BF1152858586.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMjk0/MDAxNzQ5MzcyOTU5NTk0.pgrNWB-IR-KBaouE82Ue8IKm7ZOha1auQNWuPtZMVHcg.f_2LaqttdgrVNsxV7LubZPsuLQIKd3BPih3GbEfopSwg.JPEG/output%EF%BC%BF2298731677.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMTAw/MDAxNzQ5MzczMjc0ODU3.hOeYfxOHl8uGHzSTJyaAhd4rrSUwbb1FSXcFxcfDYk8g.gwoyG5vHuGFIJ7hOoAum_E-NUiLaUaBCVstxbk7ckYUg.JPEG/output%EF%BC%BF2322919458.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfNjIg/MDAxNzQ5MzcyODg2NDcx.1YyVt5FRx6oNi2GIZhMJNjTds5YV3vXuqZ1f5l4PSmEg.CIDsvYb_0qLkwztSCB3qe2WAVlILAbZodl1sjqkyLBYg.JPEG/output%EF%BC%BF1433701883.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDhfMjYy/MDAxNzQ5MzczMjUxMDE2.VMCWHOEr2h1J1njIkuKgxfMeIqkVgn0-oqeHiSKaMzwg.ix8LF0oBmCwXA8azGPF7HszyuSJLmmNYb_aFlxAzy1cg.JPEG/output%EF%BC%BF2205102141.jpg?type=w966' }
      ]);
    }

    const existingImages_k8481800 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8481800'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8481800[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/193340424F431FE737' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/6400DBE9D94045B69FFAB13EE7A9727F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0162686C57024677A6EB43515DD0B54F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/18BFDEE212F045AB80D78F2D4D2772D8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/662ABCCAD62F4778BED828B9C0D47976' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a7a7155165ee889a17370383b016079b640d23b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2989a37c43fd03a5c21999bda06c1c6c747573a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1a8acec25ea7cdfee028772fafac14516803ac62?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8cc6c1fe1b6343fed9ab8e72d4afffa54a533084?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f7aa00f817df6885c59d3f6700d0836ba61ec362?original' }
      ]);
    }

    const existingImages_k8441874 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8441874'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8441874[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/43e8bb4b28cc3bdb475c5de2a3fa374d71761dfc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/220ff0363adb4e7179793a9bcbb37f85619a4fab?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/376c503fec6589f47826f032ba93936c9e670cfa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e741bcc345166a518130b95a8752b18f420a2723?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c816b9ef137be3592374f4698ddaaece2a66a9cb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e0640bf497b7a7d321f73fe76bc2dc16898da044?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ac0e248a8d0eeb6dc90eb273c5a2e63acbaa1135?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/967885ebed57775b50650b2a815f43669cfafa0d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a817492561369d28bd6286a41c84436f7bf86b1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/003c34035bdb4403175b4d446d0c4f91884ba0b7?original' }
      ]);
    }

    const existingImages_k8008432 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8008432'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8008432[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfOTcg/MDAxNzU2MjA2ODI3MTY2.FQ4hJ-ae6r2cXqxfl-dEv7XP6H2s8A2F1TCswhMmzfQg.QRuJSPTk2qXHCT_r6byF8EcRwivL_KnGH24DJba_XmYg.JPEG/20250822_135434.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMzAw/MDAxNzU1MDA1ODY0NjIy.c8N_p4lhyFRgVLOeSS37E1bZfKgnjjRJqqqTsLPQXrog.637jB5LoZXQC9GgiwIx6YSCSHahcmz4mJ9qOYKuwoaIg.JPEG/output%EF%BC%BF3226263400.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMTA1/MDAxNzU1MDA1ODY0NzM0.Ay9PLGZlUA3mCFVHPeuv420mmZqOi7_B-gBLYu91HTkg.039gAk8kP3X-oUvd91fbeEBxrP4aZj0N7f58brtVKb0g.JPEG/output%EF%BC%BF4270262077.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMjY5/MDAxNzU1MDA1ODY0NjEx.Dm2kSUsKAULHftURqj7B9wtPg3J-VvcLdCfKVbTafzIg.3JwWbBGCKXS6p_-XsbyEr4xvbX31B2AGoGlIzKSVss4g.JPEG/output%EF%BC%BF3526872199.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMTk0/MDAxNzU1MDA1ODY0ODgy.5CY2wNAoofsy_AUnFy21GXh_FKHDb6M0xRfP6ZjdQ7gg.TC27iy-DXHPFKY_HFgU4EF338Uaje_jDwGm1_6xgmpYg.JPEG/output%EF%BC%BF3207896170.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA5MTlfMjkx/MDAxNzI2NzUwNzU1NjQ5.j_yS-JzR-AHt9JYUvx6P6s2hxll5z46pnegPB2BI2_Ug.QFW8CILkyO3OOUtr9SEpD8erfz3MQkJRIkAyZpNNo7og.PNG/%EC%96%B4%EC%84%B1%EC%9E%A5%EC%96%B4%EC%84%BC%ED%83%80.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA4MDhfOTMg/MDAxNzIzMDg2NzY2MDU2.3QYg0iT6ESCtDoTOprhfKIbEnSiLBlB8Dh0-Sc7Cfkkg.5CISgkEMvx7s3lpI3xFppY8PffqS5CuJN7GskGbrTqMg.JPEG/IMG_2361.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAxMDRfMjgy/MDAxNzA0Mzc1NDc2NzU1.7yWlGR1aJKwd88rKwaffgE6HLHz5Zaef26alSDFNu4Mg.2H_IwYHXQO9GvGAOcF-nFNHoj_iQT-GZO8D-uhaFCmcg.JPEG.dawa223/SE-7EE99552-D9C0-451D-9FA9-C4F3BF0EF033.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db19a0585e1436c8130a615dbc80eca0b1c1151d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9bc8d1a98474e759f12ca6db161c492208d7510f?original' }
      ]);
    }

    const existingImages_k8470936 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8470936'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8470936[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/421df166a4467e0a4d09b385484b4f6d7c35a42c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c272d2edc9290b2435a26d15358cf892e7d9b606a7ad47d4b47de084ccd67cfc' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/821d0c6ea2ddfcc78a2322b4b8b3e9b923db98929c2bdb0bf97aa296601c3844' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6a9378d43701afa4d3fb9754e782761debc5d2c70f5c07a1dcdd4ca61478b4cb' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMjQ5/MDAxNzUzMzU1MDE0NzYy.uZIqtinO1RxGpox5ApIgllVTlzjzI_IEkcNHAwN9cJog.9IdLnvqki08sUmEIaccL7qdfsptqyDZ8cQ4pU_Bm0cwg.JPEG/output%EF%BC%BF3590694239.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMzUg/MDAxNzUzMzU0NjYwNDA5.wRdmqlIsXgN9oks1C2XmlTdY3SZ9JzfNXVRpVy8l0rUg.-OHFzkKe5kbMVZBdrx-q1zcyg7PwNol01_9gvGYC86kg.JPEG/output%EF%BC%BF3541890866.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfMTA2/MDAxNzUzMzU0ODEzNjA3.KIShXREdEadM4TzaIa1Kmb6-A8a9ck3gR7DxdDICFKYg.DqlrgBuZDldunQ7QPuvGxcqw5SJXsr4ARU__A0Mmt1Ig.JPEG/output%EF%BC%BF3350410033.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfNjAg/MDAxNzUzMzU0MzI2MTk0.DYWt3WTMQidzu4CV7EXnqkHAUuTjTOde3GuWw-p5kvMg.OsGSWE84doeq8TXnTchY9yVE0ahXSZ-BR0pNF33Wec8g.JPEG/output%EF%BC%BF2894448726.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjhfMTA2/MDAxNzUxMTE1MDk1ODcx.tYipgovX5cG6ZryQ7e5as9DcsHmbdaVEYsqy0jqZ_B4g.g1u8QDODzUYdfJyCTBcmYbSY80BxiG0JHXOMnbX-GwEg.JPEG/KakaoTalk_20250628_210509760_13.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MjhfMTUx/MDAxNzUxMTE1MDk2MDM0.oVnfcXAfEEaoYnti0whhRwhGYKymWle0HdANdxozcQAg.e_q5cMlIJjaIrWGaPT7K8YFUH7WU0vIXoRK9mMyN6cgg.JPEG/KakaoTalk_20250628_210509760_16.jpg?type=w466' }
      ]);
    }

    const existingImages_k8438142 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8438142'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8438142[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7278f0890bb87c08e30cd82c8c3160c8cf32242f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/af9ce35bff4750af6353478e1fa9875fc3586f43?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/154de72429128bac21f2fbd95fd747cf3ad1a0c1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7ce46ec931121e73986ee021626e8d4565505266?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c6756a3b4ef8dfe975adbcda5fe641c7e6dbb27?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a6a70b962876ae3d7f14f38fb130725f679e4943?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3a3acc676cd8d477a34bb9c5459fb729794b6632?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/24e795f90ca81d95244bf8548765ee2db851cd21?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/590434657125c1d9fb8a4cd293b8e3254a65a549?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2a2982ed1efbce2ed16c4932d50cc342b3269d3a?original' }
      ]);
    }

    const existingImages_k10553175 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10553175'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10553175[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfODEg/MDAxNzU2OTY1NTM3NzM5.Aw-sGulI-jpsqAh8_91U0TooWhpHV_pGPrBizJhndR8g.e4YCkWFHMXVwyEtmUs5E9Pk4fPpGFs3ly57OvHnjG24g.JPEG/900%EF%BC%BF20250416%EF%BC%BF114303.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMTY1/MDAxNzU2OTY1NTM5OTAw.FqwxQhO5Hsilml58x1ElIdzRv04rUUAM56oKLf6y9Dkg.33a4BxoFuo07qySdCvxN6r8aZcxaEUmDAUVmoc5qYSYg.JPEG/900%EF%BC%BF20250416%EF%BC%BF114212.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjY1/MDAxNzU2OTY1NTQ2ODQ4.5ngPJAMX4xDm9_FcyAZ27CxW6MtzUIiXKnKUpAhtWpAg.yWQ6OxE01VqVMr6slE5AID95DCB2aOg36g3mv7oRcK4g.JPEG/900%EF%BC%BF20250416%EF%BC%BF115156.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNjIg/MDAxNzU2OTY1NTM2NDg4.qCQJIrwt2ibiF1T0EcmdNLe-ccWGQrbxr2ok-yXXIuwg.BgVcZT4ja0voVQBp2NEl2A7wBe-S5AdptemzDFyNulMg.JPEG/900%EF%BC%BF20250416%EF%BC%BF121012.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNjkg/MDAxNzU2OTUyNjE3OTM1.vf_VQxZvGt7MAKmQmVB5miJP6ojwAvvnkKIimORapOEg.WvkMfYbJlGQLMNbmE2I_EEiVG24SRxbl4VCEZAK1NzEg.JPEG/IMG%EF%BC%BF7072.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNDkg/MDAxNzU2OTUyNjEwNzU0.tvppxCdq85s5jNyVa1vChUrvMfG5eganuaQcFkxd4IYg.3LZKS4kJDLcPI3ym3yJuLYpS0tWqE58ky7puulwT8HEg.JPEG/IMG%EF%BC%BF7122.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNTcg/MDAxNzU2OTUyNjE3MDEw.-593EmPoj2Due_eynyJJW-6d1q1emVPeLmDg2VysV_Qg.hDt6ioKYzNXIx_fVzrzUTi9VyqSFhaKFtVg7FPMP4h4g.JPEG/IMG%EF%BC%BF7128.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTcx/MDAxNzU2NTIxNDM2NzAy.g2L9PbRlbwiijpfpcHVcz5M3QQfF3SK7DklX1j2ROd0g.0R6VlZrpGrnWqwJd39zthEL571Zyyd_IO4Bl2dAsjtsg.JPEG/IMG%EF%BC%BF2959.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfNjcg/MDAxNzU2NTM0MzAzOTU0.O4NIeQwUwl1yR6kbXuYvhn7vepRGWLJN3haNeOMj-5Mg.h1sLVosF62iHcbZmlVal2_Q3IwLQwkw10fD41qP4_0Ug.JPEG/SE-AB6CF4BC-CCBD-4435-982A-E699B0F99E3B.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTUg/MDAxNzU2NTIxNDM2NTYw.PcwA9Lcywcr6vS8j1tsgo5_2jSaQHfUIcRiUr87oO7gg.YrP8Isj8_DJefsYRJzBsPHb9CFFLKKUSP9tkDxOh_UMg.JPEG/IMG%EF%BC%BF2980.JPG?type=w773' }
      ]);
    }

    const existingImages_k21261695 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21261695'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21261695[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c8cdeb18c1573dd28b0df8d11557a764fd6ddc01?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed8703ceeb0028a3a54b27bc80d689e0b53b88af?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a7578fe6bdace4677905606e402da88c6c09fa4a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/92718b630a75c1d031753cd1bccc20696210d45d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc142c7cc0b02db8b77b774fcf9b1cc73eadc260e8c211036e9f1eaa44e5dc63' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/794e0e5b245538f28b0361d76b08ff031968fb6a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfODQg/MDAxNzUzMjUwNDc1NTk2.zCsaB7_UAz5XYyrOnAJYsbQepS51acyoXqlZ51G0QGkg.BJmy29f1mqkJbERcLIFF59hYc4UgXqztpq2H_RAEfj4g.JPEG/%EC%88%99%EC%9D%B4%EB%84%A4_%EC%8B%A4%EB%82%B4.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjNfMjA0/MDAxNzUzMjUwNjE2ODE0.6vQL7lCRCAhsRBMvcXZ2yradZVySR6y5V89ASkogJi8g.vyZALwUPlBO8HKmhWvQkkW5xC0bhuAODjkvVJ0k5EeYg.JPEG/SE-993dbe83-a43d-47aa-96c1-3de2a60249cb.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfNzUg/MDAxNzUzMzYyODg5NTM5.ihDcI4VCrjO_2PSHmN2FT18kmIoq-oLW5BkzU-R3faAg.rwC9TO-pWuqdD47wcZgkJ0sdeSxhDBkItD39Vi-edhYg.JPEG/SE-fd643de3-3935-4f8b-b03c-767aa6eac84c.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDZfMTk3/MDAxNzQ5MTU5NzQ0NDQ1.1GBaRaE8dphgqCbqttHIhVeKHyZDyAxiJz3z3KocS0Mg.DJGOZdKBbC-C9UZkrVN0f79nxN1955L0IGaFUN7w_74g.JPEG/900%EF%BC%BF20250530%EF%BC%BF113543.jpg?type=w386' }
      ]);
    }

    const existingImages_k1859520870 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1859520870'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1859520870[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5CA6B9A1B8D94AC6AFDC5941806C532E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/F0BAB0BED9BE4664A9865C689DA41E7F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/C77F824667EE49D18320CF42D7A67A30' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/472dc5de1febff5dcdc2919444691806f350e38f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2a40901abefbfc223c3c5d75f61fe155567cb396?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b7bfe9248ad1e5d86ddac96502311fb591397d1d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ebc89b281f60aca61c0607b925713b346864109?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/558a33d0ae607bfc0f234dfd602f27461d776dc5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4e396f9443ffcc35143c808b468b218c778cff77?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1c89e777dbefc42dde09e270658892f9c4fefb5c?original' }
      ]);
    }

    const existingImages_k7929238 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7929238'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7929238[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMTgg/MDAxNzU0NTYwMjMxMTk5.Y1PXVvrFlWHCt0EOcz-mVmFvDlwBfFO0Z4m-juwegEcg.iKPbqVBpzUa8UmsGkkTfTcelHVR4MIxuqsD702VCALAg.JPEG/KakaoTalk_20250807_175000437_11.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfOTYg/MDAxNzU0NTYxNzMzMTU5.43vTmNoQzk7pzrpnCkMCvQe-okw004I48I-hQmdEYJ8g.3veSkf0P0zRrbLGvBgpdkR7zMCXFMKzon9SLE3aaKXUg.JPEG/KakaoTalk_20250807_175000437_08.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjQ3/MDAxNzU0NTYxMzM1MjYw.avPWCYo7LIybPuulsDuq6ix8GNQ54bf7xT7vhJtmaJog.Xi3FW27J8-emwy-blyAty4cIehGiXxQ5Q9YALY1dfmcg.JPEG/KakaoTalk_20250807_175000437_17.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjUy/MDAxNzU0NTU5MzE5ODc0.i64Nv9Q-9Zc3CE7V9MDk-2CYH7x3_4Aw-_pRI-aj_I8g.KnQBnEFJSt-6kkf34JDPsQ0E27iF2w1dchROhBLNQw0g.JPEG/SE-166a1b0b-23ad-4307-aa76-f63def68420a.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMTY2/MDAxNzU0NTU5MjYxNzE1.4hPQDgiGMyuZP1Nas4s5aZ6X5glWD-4ZAzMwCYk9NtEg.fP7OdcSEgg4Uv8bTKyeE9WNFCIu0CErSEygtM8ddlHIg.JPEG/KakaoTalk_20250807_175000437_18.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjg5/MDAxNzU0NTU5MDUwOTEx.BXDG3mgp0gCl5ihuQHqeUPV93fNTjq8qAhmCag91sP4g.ObFZRNu8-EU45vs4Sbtb9Wz6hsoyYdHiVmamIl1WJbEg.JPEG/KakaoTalk_20250807_175000437_26.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjA4/MDAxNzU0NTYwMjMxMzEx.vJ0Ld35Wbn0Pqt8OgMz748tpRwKFVl2ek9xwCpBsOEUg.8DSIuSuaWK1AHwEfcqA6c1ZZKlmzsnJKfJ_FAjKo5swg.JPEG/KakaoTalk_20250807_175000437_13.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjc1/MDAxNzU0NTY2MjYzNDM4.6otyteNVr-1zcnJYehPMBcmFmNkmO7LeQguzyTaL2aAg.jTtIoHqEzEOHb2lQrh_DgUfBhYQUS0AuVOSEtH0wDlgg.JPEG/KakaoTalk_20250807_174950541_26.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjY3/MDAxNzU0NTU5NDYyNjU0.nHhxrbBtyi8jp1ixg4brogmm0vnR7qzoudGc8ZWcOG0g.Yu6fAJSdRyL96r0aXGQC0XRlOcGFJnq8lUDPcr7WhhMg.JPEG/KakaoTalk_20250807_175000437_10.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDdfMjAw/MDAxNzU0NTYwOTI5NDk0.6GPrLvgzcSMWEVVE0daZOfwlmFw56Y54Uye9tJw-WzIg.KFUku3i6kKRFpg0NPOIA-aR0fyT74VCN3bNVLvz8TW0g.JPEG/KakaoTalk_20250807_175000437_24.jpg?type=w386' }
      ]);
    }

    const existingImages_k163939822 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k163939822'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k163939822[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B658FA9012C04FD7B667C1D3F16DE107' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/37BF58FF9B124C7C8D3F75B4A169749E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMjAx/MDAxNzU2MjQ2ODY4NTgz.Qpi8EEerOARKKZF8WtwcMlDC1KuE91UevEcCV4-gHGkg.btlNwtCV88KWjQ0L8mJQHFOMmw4HAdHJJVUk92zjF3cg.JPEG/KakaoTalk_20250827_071701364_11.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMjE4/MDAxNzU2MjQ2ODYwNTY5.xh3T7HsJkM4OKY9ESyEpYpWsOyUgXnvTHnxcB9rEm7Ig.-ZPg1S4N5pZ5DkpOU7atl8-r3Qv8ye4-pb9YjZ-wnYsg.JPEG/KakaoTalk_20250827_071701364_01.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfNTMg/MDAxNzU2MjQ2ODY4NTIw.iaWMdPIY49VNR-ej_wAxfxrzYgYVM4sfeH2eB5DrNIgg.NDHa2TEO7XwMiDM0RV2zHAmyUUKbzv4yPQXbCDbnYqAg.JPEG/KakaoTalk_20250827_071701364_06.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTU2/MDAxNzU2MjQ2ODYwMTE5.7LYuTB3D40-QuU8qXN83ZVhzNgUUYW59FFCOoY8GkSkg.4iBdJuaBqW3fettLsPN-_7xRyga6GzG21Y6V2drIMJ0g.JPEG/KakaoTalk_20250827_071701364_05.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfNDAg/MDAxNzU2MjQ2OTI1MjM2.DkZyFDGPy1uGbQQbunDmbNMAqKmg6A9r64BDsfiueJog.sAyjNyatmwsVd274KfAjaHcs1EqFIaNw-DrrGcLobc4g.JPEG/SE-6a0e658c-7398-42db-9ab3-696f28fe6290.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTQ5/MDAxNzU2MjQ2ODY4NzEw.zLBYcyflbP7SNu3nFJBRIWNVmfb2PYFXcfsq27LTW8Mg.fCecz09YHSZgRCJuezRT9JeSIecErf0yH__WmF70f-og.JPEG/KakaoTalk_20250827_071701364_10.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTE3/MDAxNzU2MjQ2ODU5ODMx.hUiogTf4Q-_zYIvxfZG_9ByG94zY2oyiXTnuU5a8LBwg.fYjYHtaW8JYT6ppC5b3-iHhq6xhW5jaIRi3SFQwOHeQg.JPEG/KakaoTalk_20250827_071701364.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTkg/MDAxNzU2MjQ2ODU5NDYy.6qqli-UffJ1-TVwB7FMj5pD12-ul9r99css4OPlBfmIg.rhlwH_Htk0RfCGyGd46wtHfmp08gFo87FP70sDPXKdcg.JPEG/KakaoTalk_20250827_071701364_02.jpg?type=w773' }
      ]);
    }

    const existingImages_k9818793 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9818793'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9818793[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/391e2a3584a39a30eee639a240d21da0d3b7b565?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c15de50098e3c7b6a88855b616d5b3b16f778e44?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ce57195f891f59524c740b28fe82dd5f87c6487?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMTYw/MDAxNzUzOTUxNzE2MDc1.LmvyRqJKenhd1Zs5jlcDXGLaMCcU7ALOgyVv8O3bu9Eg.oq-DUMlai7dpN7v_-8R07nWC1dXKiIIH1f38oVf-dVsg.JPEG/output%EF%BC%BF3665576215.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMjc1/MDAxNzUzOTUxNzE2MDgw.f9hswns3bAcr-RYtNw7hRpxSewL-tdUvtj1x5FFt7Agg.vf_-LP1HYit1jn0VRyN4pVWDuQldDDpl76rV0-wAkfMg.JPEG/IMG%EF%BC%BF5624.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMTQ4/MDAxNzUzOTUxNzE2NjIz.CxHBVhxizDdHXPiCAsINO1EAX4tXyzvRrxmxABG7hDwg.6B1AVq52SsJOTzpg7iS11HnnWLzCfF2QfbJqXaBLGAYg.JPEG/output%EF%BC%BF887731306.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMTQx/MDAxNzUzOTUxNzE1MDA3.aHTivorHtVVHu2-yVudf88BJpg4Stcnbrj4koxJWED0g.2pqRZRG4MdALI1XCmvFrP6i0kEDMknlp6TLDxyWETRog.JPEG/output%EF%BC%BF2940625119.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfNjQg/MDAxNzUzOTUxNzE2NTky.kHwEMRB1RrA_Kn4d3nexU6XLW17LFQldd1XBxd1C9y4g.iLKKHM8VS-LZ7glzbhyb29Tx4k8OzvRUPAFnI_YSuaMg.JPEG/output%EF%BC%BF3742976282.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzFfMjI2/MDAxNzUzOTUxNzE2MDcy.o2tPkGXQYHBVALqYYayYM8BUts7Qw6JDFSAiJz_xJGEg.54nK-ME14GdhTHPLGHp0D0ZIMoKt7_mSKqgwvsN2Gf4g.JPEG/output%EF%BC%BF3313199433.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfMTgx/MDAxNzUyNDc4MTM4Njgx.YhDIsPHooNVNj8KtYEiO9dGFEL0wa-vSbaM_LkDLSp4g.6whxMGdNyEABTsTgL7uDGvRJUbRiJH8LJ_CdhqTe4Vkg.JPEG/IMG%EF%BC%BF7346.jpg?type=w386' }
      ]);
    }

    const existingImages_k8984743 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8984743'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8984743[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4d05f0bf11b34416a7b38907ebebf391b2e21d0a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cbfa34807dbffe62cdc241521110ebf7bf8543e6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/58b1b97c9d054ee22d098f7cd0ad98fc4978e1e9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ce4cec2831a239e408bb7c62ab12b55b830b53fb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a8902f02b73f79d646fbc1b1b0adb4d7f32b9f56cc5afd080355335064f87ef9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1024646636be9555f2ec489d5c13ae05afc073db02ff32fc0d462a3e9618a3a0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/960f1d32e437315ac87ecec78ed260ac1c6f2cb9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/644d11701b021302f0e94aa0917dcc717670104c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cf19390857759a04b0985907bf896845a338313a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/26c190d0a9fee08d02c35d870da941a620f0a48c?original' }
      ]);
    }

    const existingImages_k10332017 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10332017'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10332017[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjlfMTIg/MDAxNzUzNzg4NDMwODY3.NfGX2Ds9KeSfLafqQzxqzZO2MC9WbjTPNYIRFCkLPeog._Bl4RvNoXsLyFsLZQoeuiJrH4hrUtvjIqcJqn-EL8ykg.JPEG/IMG%EF%BC%BF8582.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA4MzBfOTgg/MDAxNjYxODM0ODY4MDA5.pCDeuAr3RcMzh0g7jiCypTblBhMmi1iyITDtRIUOo4Qg.mCWNAbZYqrfRMmKmat-DWJHhc2IDalsHB1edwhilVKAg.JPEG.zzeongv/IMG_1026.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA4MzBfMjAg/MDAxNjYxODM3MDAzNTYw.wi588472pl4wGiMWy5M4FBBiV76oJM1v5jLtoEdCJ3kg.LjxqBFFdVrpGAbkHV6U7sl52pVYm6I9eb7ou8Yrqjsog.JPEG.zzeongv/output_2100266243.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA4MzBfMTM3/MDAxNjYxODM0ODY4Nzk3.UllpOn19CbhQZqzdDJlnsoGg5PDp1fx32u-EHCXoFdAg.bEsLh_9ttBRp9YbVaIg7J3pFrnK1IKjeNRSwcwfCyWcg.JPEG.zzeongv/IMG_1023.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MDlfMjcg/MDAxNzIwNTI0ODg4OTIw.gM_n7iA6Ln1rOvJu3PLtqfGGy13ARTKAslgfTVE7QY0g.BTipgbKQtbaJ0uy7qXSp0Mtkkcpd0YrHPjztmu8f-2wg.JPEG/SE-3f20372e-bb11-4d54-ab0f-ed4cfd1dd9f2.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDA3MDlfMTM3/MDAxNzIwNTAyNjc0NjE2.r2soNLXn6vb2j9T0JY1Xf0ONBwk1VJaDdGHkG6OjPlEg.hCieLWhv6BAw4F7qpr6uGK7rhBP71wQrsJTF-NacvEEg.JPEG/20240509_133519.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDAyMTJfMTQw/MDAxNzA3NzA5MTI0NDUw.rjWEbKt_qZHxq8ZNhRDxg4HQGrOpuxGaqExga8AakB0g.H0OGJn6yHHgKUJlZfFao1owYn0Q_9baO6zaDnexLRj4g.JPEG.choisanoba/KakaoTalk_20240212_113426060_24.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzExMDJfMTU1/MDAxNjk4OTA2NzI0ODQw.1H2xbgCIF8N6pbVmpos0e1HOF4DtgeA-JadjCpF6AWUg.bG1dwn8qwQjz5cZ8az4tr8ei60MD2wNJ95kHCRUVE2Mg.JPEG.wngml237/20231017_124613.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMzA4MDlfNTgg/MDAxNjkxNTg4NTU1Nzgz.jPU3vH5bKhp6qzTTWQLxoixcjXciQ_uAYz6Wu_jEQ_Qg.3e_89_s1mRWbo80ck00yE5TScfmB73nM7tIuh3wvkDEg.JPEG.yaaho_1026/20230731%EF%BC%BF125313.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjA2MjVfNTEg/MDAxNjU2MTI0OTgyNjE0.huaP5a2FRzDfkQoHh0WsBnaUAlsdFbm5XF9gq7HdGUAg.Q69Zu5HKcJ09tlsJobPPdrrIlJkRX0k-wn7by7FTHQ0g.JPEG.uyuni-sol/SE-80a097ab-dcb4-4a0a-8929-ada6775990e3.jpg?type=w966' }
      ]);
    }

    const existingImages_k1857475664 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1857475664'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1857475664[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cdfc2cba51d5f0b34a2e09c43144be225a72531b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4a151b8ff63b673f2c8969769cc08ef0806eabaa?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTEz/MDAxNzU2ODAwODA3Mjc3.1aD_E-Is41v_2fCrR9cIbruhlhA0gJaJRO9sY3hLy5Ag.AOoXtLQzxblyOgDsa83blmoi0yr0xujneKRS99urOO4g.JPEG/P20221223_203450366_09F9A05D-8288-4295-90DC-809DCBB8389B.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjEx/MDAxNzU2NDM4MTE1NzU0.5wHSdVw2g5g-lI3qhDmVC_9GIlRml2hqzpPH3vEBGywg.EHR9SMeEf8tFkk7ERqzR_AyNl_kGAPvO8MzTFovJy8cg.JPEG/900%EF%BC%BF20250817%EF%BC%BF102501.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfNSAg/MDAxNzU2NDM4MDA4MDEw.QFSH6bcYE2TtwRBbUUuh7-TOn3KEM-VB3Ku7wblcE6og.KbCJqa7MZQbUMM3sUN95TBg4k1OjnuhWwsJ6v65H78gg.JPEG/900%EF%BC%BF20250818%EF%BC%BF111458.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjA3/MDAxNzU2NDM4MDA3OTk5.9LlWWhAePFOUKqm165XUbtABR9db51w6aGvNFYrOuZcg.Ag36SI9I9O-GCLnFvzyXCygSEV3d7sclMQhPWgWqDBQg.JPEG/900%EF%BC%BF20250818%EF%BC%BF111527.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMjYx/MDAxNzU2NDM5MTQ0MjU2.7zpjRb3bGhqaw4kaZ5DOhJ9cAb_JMEKwPfZL9WhEg7cg.VyGuUq_QocLBnDjy1WCmIM4GcWW1PcxVX7C29HCU2gYg.JPEG/900%EF%BC%BF20250712%EF%BC%BF122604.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTQ3/MDAxNzU2NDQ4NzkzODE2.wOet2eaHwu90DJDD3bFuzKcX1JdMdRvDH5RB9HoPmbog.8404WFgkteX7dK6MLCH1ZElFysU6C3jf7aQ-goDtpTcg.JPEG/IMG%EF%BC%BF8093.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMzIg/MDAxNzU2NDQ3Mjg3Njk2.DS0Hu6NNSXQ9--mZwGFr1_1-Pcfe5W7bvX2l8pPD3WMg.nZRbpPZdVgUkTMDd9Lr1LugUI0Ze11LnRHlZkpQyD_sg.JPEG/IMG%EF%BC%BF8108.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTg3/MDAxNzU2NDQ4ODE0Nzk1.Ms2NT3UxVb-xi6h_zDZmKXJytPW--AljGIlPENDhYuIg.umcBbodLdptzzavIke0wLIpW0xIXK6U29C9PAgKxRfcg.JPEG/IMG%EF%BC%BF8107.jpg?type=w773' }
      ]);
    }

    const existingImages_k1766016722 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1766016722'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1766016722[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/17CDF1E9F7E54C9B85226B0B41C6F66B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/56C2D3066F7A479B83986580AA9F0496' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/C1153D6C4D804D4C80113CB24254D7BF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/465AC769C53F44E6B76DA2791A395240' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E1319FCB82C54A9EBB0D25724E52E95D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/58D0649A419D4327B6EE24A239F903F0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/976C123BA3584F63BFD0E7200E997608' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/708E100AC5DE49E68822A51D96253F2E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0E11F83F5126493CB5F4973739499F73' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfOTAg/MDAxNzU3MjI2MDMxODc2._hTppWbRXaFq5T-IPtPMpBMbwca_kCb7-9r-_lGPkgog.bleAXsXpfat4bVgi55GEURk25XxZwZjOy4jTb0Cv53gg.JPEG/KakaoTalk_20250525_215106933_12.jpg?type=w580' }
      ]);
    }

    const existingImages_k26840903 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26840903'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26840903[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/F87214FD3FF347C4841F7FC7D371F264' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d60d310abbe09652c89cde375f9448e0d4945a61?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f443182902415cc9901557fbf462ada7f93d3230?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f0455957975f5c98acb1a6c4447a1819a048173?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a5c532fb7a4e274fdd1e0be64c3a403dcc263115?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d83fae9b3781255c8e2367dd40849e26db0384b6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/50798f3da76862487db06154b605caa76912412d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4f39640d3451b912702e91eac88d767a8bb5d918?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ab2a17e9a22342b79329e35579ab79461cb2edc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4f814be6752f2de08494093397a696dcc5664f6?original' }
      ]);
    }

    const existingImages_k1337449537 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1337449537'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1337449537[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/0D8E24EB2BB84CC7974E08EFB8DB4968' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/018DF496A6E24FD08B952EE744A55911' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/da9f92bf2dc209645b06facf4739561c1c5c141f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e43320d40024e7eec630fff1357ad0ffa02e21cb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b7ef2308ace6a5b6239406c06a4e911efd28e0d9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1b159f29096f1daf3727b1ea83861bafc41b292d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd8614980636c9a795f46fce5815fb9b6de2b214?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfNjgg/MDAxNzU2NTQ0MzU2MTU0.FAn_bDUYkKVFmdP6V00E2N-sepXiOhwT68dws1f4PaEg.DJoQJA26gbTVCk3sDaw1EfO5cXYRbKYFEzUoJXPYR1sg.JPEG/DSC07870.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzBfMTMy/MDAxNzU2NTQwODMwMzE0.dFGQoBlcnlLyd1BOLumYcn9P61p1V5RAJp3UfzKWF14g.yELYl1fGxRHEruubxAEhlp13wp0UAd-2RyCfiqgvsksg.JPEG/SE-8847d225-4b2e-4364-9fbd-b90d2f44e82d.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTQ0/MDAxNzU2NDIxMDg1MTYz.rBa0ay0wcl8mBHUlMHKD0stvoquCKtzrJ7LKXinPY2Mg.z2dM5HXRq-HMTrMnEw-l7WaGYViwP2l3t0DOrbwwqN8g.JPEG/SE-6225022f-845e-11f0-b6ee-d57408ef5f33.jpg?type=w966' }
      ]);
    }

    const existingImages_k795234579 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k795234579'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k795234579[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bc6f0bd6326bf2d91ef6d7f2ff5f2b7be64a2702?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d383482d20331351bce84cd4e2cf51aa37106a84?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b03ef251c8afa1b1666fd9182534df033ffcf4b8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0d8ca43381c7f30ad85a6ea623e9e2f977cd06b6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ecc8e485b6ee658f319bd180e4155089f0abb739?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a73c5906be51dd6c91fcd7b5616e14a638b08a0e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f306e2a7af65cf63d7873166cd62ce0af2f92ad6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1178f28cc5c5f2565903eb75ad997b6b593f8f36?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ead28182369eab463e188eea36ec842d7f7047c7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e250daa8d7d6b99d7911038942719ebf808e9c06?original' }
      ]);
    }

    const existingImages_k76529863 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k76529863'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k76529863[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a6d013cf4854ac6de5f17d40ca31d45b450fe1fc1f9ab87ab8790a8ffb2d9d94' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a046165c1b76e7558bf4249663b9102fc0124d37bfb6a8d481d4ae504294d20' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMTQx/MDAxNzUxNzEyOTUzNDc0.p4dQyEltg7ntZHgkKF56z8Ex64AEzVBKTzBj2CegyWUg.XZ5B6QwP1Z9nXeiO0PAbXiL-j_1ORRI1zR6ulOIMhAsg.JPEG/KakaoTalk_20250705_180554789_01.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMjIy/MDAxNzUxNzEyNjY3NjE4.sWonJk-XwHaBNXj4Vqid3TB0qVAlGEoEUioPitP0xd8g.hxVwVEM0rQop69p9dFY8Z-8iP_Hgukyz3bMjs6-U2Ewg.JPEG/KakaoTalk_20250705_180554789_05.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMTkx/MDAxNzUxNzExODkwNjYx.WO7G8YXyheIV3K0pbVEGb2slpSej3PNDPWgtAY1jZ8Ig.PxRxJKmnjMDx1vOPCmlVL9rss7rODfRo5cElZB4GOpAg.JPEG/KakaoTalk_20250705_180554789_09.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMzAg/MDAxNzUxNzExODk4NzA2.WhE10BijscnZRwxe2gaiHENLwAjOMVK3_YiDRrOGwzog.CRwJvMuv1NeU5ESb3h4cuEIWRwoMYa4vBubho5AL1Hwg.JPEG/KakaoTalk_20250705_180554789_07.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMjQy/MDAxNzUxNzEyOTU4MzU0.ND-0eE4ft7-jC4D01ZN1oPOVnLW5NrC1xwb1p5VadtUg.X55POrrhrfb-ICymRE87kccFNYnCRwtibP4EQGk81L8g.JPEG/KakaoTalk_20250705_180554789_02.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMzEg/MDAxNzUxNzEyNjYzMzU3.Cq_QUUFASrr0YXbOIUYqz_LMwrqROFQJliPUIU7w8Hkg.J11es3xjf5sEHA8U1UWQqMODZyuR_FfBuMNN_8M2O90g.JPEG/KakaoTalk_20250705_180554789_03.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDVfMTgx/MDAxNzUxNzExODk2NzUy.ljp-lNCtTmO-jP3JTaSR2chGaKl01gPNyoGBtKsstbkg.wuEP46xH_N4uScH3ygE7-Qdkqh3DRpCFjR42jyR06jIg.JPEG/KakaoTalk_20250705_180554789_08.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTJfMjA2/MDAxNzU0OTkyMTExNDM3.71JY8x3Axf97nUtDqn_GQEarglyKzu52Hc-WDWA2PY0g.v58lfo3xPlPdz2rphO-m5H5Esd756SJqbmLodatijXgg.JPEG/output%EF%BC%BF269334538.jpg?type=w773' }
      ]);
    }

    const existingImages_k144403566 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k144403566'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k144403566[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9cdf096f08f06e5e1b4def42b22135fe89f7e2c9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b84e6bb9d0189a9c2432e4aa3f784caf47a49585?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4ca9bb6e779eb5502cca6f63d6af6ceb9d1d2054?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8710a8fba8a7d3bc680ccb6bc53fbc0afade933d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/685b0cc04e1af43522c54aaf32ee329250976b10?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/29bbbd8c618b2bcd72460ed779d5f4f62fd11d7c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0ce51abd09cccf72965666cd4724d59cb0886758?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/872f4de158a7f4a791e9b4405d3470c1468d77f7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fbe08c34c01aba033849cc4c91a7f7778f92dcef?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eaf06b75c32bac176bb2606142bad2927bd83261?original' }
      ]);
    }

    const existingImages_k213858080 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k213858080'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k213858080[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ced837cfe9702caf3760852310030d208dae85fd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/72be5ff9098979a8b8af830f02286ac371232abe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f535d97cb232b92adc5f815df9b9585a38f22573?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3497a7c1fe687b32d39e301149abf0b7216a8ed5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/885015be21bd11ceee5fe4ceab307724f2397127?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fc19658897a9e1d7b08a5c21caee45ac7b5d5c80?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bf8b23d922988abae488c4d45cbd65ff86956fd9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a823039aba8e9c11a15aaf86b63c6ed884f72f38?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8ad93f1e0914496c07eaee7e1510854ac6a0e4cb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5e41da68fddef43042cf729d152680f7ae19af0e?original' }
      ]);
    }

    const existingImages_k252015260 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k252015260'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k252015260[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/934C79D2EBAB41FDB360E6523B0517B7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/FC7C1BE93F8F44F4819F65FCB32BE0FA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/7B79AFACE10448CEA714E310E8A64903' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/C8C3603B3FEF45918F09B6D284370BEB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7FD83B69B8714F7F89C9A567BD2BE083' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7510621497754CF2B330BA4EC5A3E370' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1433B6634B844062AC7D68ECFB1456AD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D0683BB725B74CC9A936A39672EDC6E0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BAE2E73802E04C24BCEC2BEBCD909B74' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8070B500CEA243C6ABBC6D4EA0C890F4' }
      ]);
    }

    const existingImages_k29683452 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k29683452'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k29683452[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/123eb92dde25cfb69d4dfaa16ea9499c8446e995?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfOTkg/MDAxNzU2ODgxNjE1NTY4.5Fv5oVf53nppb1LSOTAhV2yymSiDzgNIl5IhcciCSTwg.eK7r0gSJSvOysB48Mi_sqcYT5L5Fzd-Erlje-_AU57Eg.JPEG/1756879150477.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjQw/MDAxNzU2ODgxNjEwODQ2.qOLgN5g7usPyUDLkhwge_0SbhXDbCAn4gZL2-zCjWoog.VEpHaReSO0btxI62Yb7lMXXsRpHDmlTEZ6ceNW2jJdog.JPEG/1756879156473.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTYw/MDAxNzU2ODgxNjEyNTA3.EL9fnh0bfL53BbWEAjaXyqZQ97XviIFxDjjuI0WfOoQg.kgnmZfwx1fuLQIOqPPTpgiPbiBBMq-ZUiiH_wS_KOdgg.JPEG/1756879151119.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTcx/MDAxNzU2ODgxNjEzNTY5.HiVidovO4fqeURJOdaOhVSh7Yc2B0KJh8L2Ll3u-c0sg.8li5xmRY_LCoI3NE6vV3SFLngb88hL3J2pjbjbo4edcg.JPEG/1756879156416.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjQg/MDAxNzU2ODgxNjA5MDUw.e_DE44H73W38hbPZNcHUav_PJgWMd88Nu60H7C_64GUg.vVbhm5hJYwMedu7eZknCVpdk3ALx66csda_8UQK01KAg.JPEG/1756879151173.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMTkw/MDAxNzU1MjY4NTIyMDEy.Q-72h15Z-b_sS-VasnKYwRHbjwyIajiIVVhRC4psZKMg.AdESEqyNzjtExHXnfXpESCFCM5WqmfDQKBMjo75mmgsg.JPEG/IMG%EF%BC%BF9558.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMTM3/MDAxNzU1MjY4NTIzMTk2._FgFirRQsWK1EdaxsvffUf6f-6KTa2tPP7HKB7L46rsg._IsDUnX3EEAaqJxxQmGiN9EA7mxyPNxtVGl8jRunPswg.JPEG/IMG%EF%BC%BF9553.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTVfMTg5/MDAxNzU1MjY4NTIzNzQ0.UeTIRceIhSCvHxDPR7kafcijCmzKPcp7ri8eBQxDjYQg.j2rlOBJ1J9PQxjs_VHHlvWEYU9Lrk16BJUfLtfS5k3og.JPEG/IMG%EF%BC%BF9554.JPG?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMjUz/MDAxNzU2NjgxNzY1MjY0.165PuGFgAe8iFQgapAobrNbrvuQERAmKAuWiYo2sl7Ag.totcN-f4eDeDlQuoA2DIgftgWAnmJzlhpm5Q20yF67Mg.JPEG/IMG%EF%BC%BF7793.jpg?type=w386' }
      ]);
    }

    const existingImages_k7832260 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7832260'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7832260[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e01bd755c0a1807c61b90804891d5ad5cc010beb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvm6v50z9suh85afubyvw0jtl/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33308710964&kamp_tidx=0&signature=uobc8P1Q9UxUEd6Hm25roQ%2Bs7to%3D&ts=1751802164' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5c3949e463e797de88f0e57aaca7d246fd49acd6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/274985a62d49298ea5f9118002f4a68caf5814f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b3b279aefb0f0a15953c81fc1eaadd1b583d1af?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/30969be8e0a1eb65f6b927bff9348108d625661b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/93cf65f48d1186cb2fb3bd392c43cd7b288bab5e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6bb9e156fd91831802a1cddbbe1c211a2f275bd8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ae2b96923fa3352a345d58786828f23752abcf7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/37890f8e3370e71f507cd689d82cb41cf14eb401?original' }
      ]);
    }

    const existingImages_k824040310 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k824040310'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k824040310[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3062b89a9cc505d25c5dae3f953a11649a767787?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MzFfMjM5/MDAxNzU2NjE3NzY1NzA1.FqFZAGvGcKZ9kYn_AAczLYFBepa_UKOOItu5EGUagQog.3ZN2NFyEAXjVMGUBFN0HiQ3iuki09DNAFFTQn8kuW7cg.JPEG/900%EF%BC%BF20250830%EF%BC%BF173225.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMTQw/MDAxNzU2MDI3MjY2OTEw.E-4l5FyB6qdY-JJlyJBnIbLsmiL-toHNHYF3BFIEkoog.R1xRC4hiHiojJi0S69Ukti6qvhOiJJ4-ZsBM0sEC2Wsg.JPEG/IMG%EF%BC%BF0404.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTZfMTc1/MDAxNzU1MzQ5NTc0MjM1.IAub4pHJ56BWgruvk-9ojdt2iUi3my4cyffUDp3Mreog.neDYMIt-YWUW-6gzsUDDD1a0lbOgdfpICBaqwxdS7ykg.JPEG/SE-8DE8EA17-813A-4C01-843E-3BAC2BB359CF.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMjQw/MDAxNzUzNDE5NjA0MTIw.zicnQXsKZdbx-R2IsEl-Hi1pl23B67OEwKNA7DEBzFYg.VQssQQMOFPDtBY3MMQ1ZPsnN2KRS8YMb49Qy3CStgG0g.JPEG/IMG%EF%BC%BF6905.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfNjkg/MDAxNzUzNDE5NjA0MDg4.7MDRupCz3O8QcJEhiQp8m6c2fAND1kWCkQWuv7XgJA0g.qJkqadnsjU92kXTxxM8FfEi-peH1yu9ilpxjru30soIg.JPEG/IMG%EF%BC%BF6907.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMTI3/MDAxNzUzNDIyODkyNTIy.9cYh9va7KYq_vehi_uTCXABYerzMADPdQ4uOpkBM1Rwg.Wm8SnUbK7VElOhE3R4MaLuCj4kGk_t6qzDYjqsdubWsg.JPEG/output%EF%BC%BF534028407.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMjM5/MDAxNzUzNDIwNjg2OTYx.RngKExVkxjHsM-LH4utg8vb6Ua6DTLaJqIdiXCxaI9gg.lffzxylBYjez_fSylj4V0TdfeMCxV9JFi2iCPzqDgg8g.JPEG/output%EF%BC%BF1631217538.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMjUy/MDAxNzUzNDIzNDk2NzQ3.gn5VpPmtmDwio_BNYfFkH4iEnLMRq8UKevpJLzI2CSUg.bClg2kMzl-vcaitayB5ixZlQNKpkgik1fH0YnkBgmsYg.JPEG/output%EF%BC%BF2645576708.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfOTQg/MDAxNzUzNDIwOTQ1MDk2.FlTCdrsDoh7ft4qmC-hzD9cltUHZ-K5Kc6vflCcpacAg.J1hYs_9QvVGme7v2-nC-32j8uhxtvnCCIeR9OHzIh8Ag.JPEG/output%EF%BC%BF4105560678.jpg?type=w773' }
      ]);
    }

    const existingImages_k7831396 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7831396'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7831396[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/B8FE5ABC173E4C2B853B1A746462C614' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e7cc4b0b2a88f238f901f95298a6f084fe2808b4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f920fa02b3bab452ebc42c52f1eefe603b23a51c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2609737a18e8f4589ba4314a95d54c33e1049766?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfNTAg/MDAxNzU3MzI4OTExODI5.mdRezkc5nfThV68XvL0rXAoMrWkApipoWlYbNVtXU58g.Tzh-5ztsSqlFbJamEg59GuEnNmVpGLqnHmNBePVzaLog.JPEG/20250906_120907.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMjI5/MDAxNzU3MzI4OTEyOTE0.Pii5bNYIOXlITPBvTb4Z4en-3qqzpDEVv5qA-Rd9MdQg.vlTlls18SqsuD3ACyzSAsfmh-Gcp9r762waCXzex1wcg.JPEG/20250906_120910.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMjQy/MDAxNzU3MzI4OTEzODUz.akob1xMh450NoB2zM50T9rFUkUeTYD_n6bPH-KI558Ug.mLFsK8JxpweYYBDPwLQBNxmhSUCXzBAXkZL2ZcoMyrwg.JPEG/20250831_064740.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfMjAw/MDAxNzU3MzI4OTExODQ1.wnUpMHLMTxuVylRUGIOpiGPgW-8dU5j8s_zHrLQ6d0og.MaC7q4WPZE_lC2pe6stdlV-7JZAnHrlmOWlPl4RGmNMg.JPEG/20250831_064811.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDhfNDAg/MDAxNzU3MzI4OTEzOTgx._S5J6SiQpTnFAaZYwCDNvpfB_AanyWYkzg8QtHcVxMcg.4GYmDq5YKbbILsm3GJ40wW7FkAMl4QCA6pNMj91hHtcg.JPEG/20250906_121229.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfNzIg/MDAxNzU2OTUxOTMyMDQ1.pCs12icmvpUEVLlN7PpvWOJTOU19LLD0BT7bT36hqCsg.rHVW8TOocd_bpFxsm7q79y5XyVPgV-VuiZgewPfripkg.JPEG/DSC05240.jpg?type=w966' }
      ]);
    }

    const existingImages_k2110676770 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2110676770'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2110676770[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9C3D62724D7946199AD25C07EF2F3A12' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/58638a502f073d1976ad49c8cfbb3526b6a91168?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/abbd3e4fac5524382286afecfe77e74b0187798e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3c32e9ff7c392cd5b0b811e64bd107c04aac0dc5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4d00fc4b15526e6fdb10b70f4abe08ddec0d848b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bea5714da8e17b03dcee477c6a3433948354b257?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f7270f5a7f15986e41488bf6942e50b363cc585d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cc03f11a1ca5dfe84c85685b18f7479d2a2693a5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/81eec22f021cc18998c387166e39b4d73e711a6d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/be1eb7c160ea39c5b1ba37573bd539be8801d7b1?original' }
      ]);
    }

    const existingImages_k26982052 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26982052'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26982052[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/E210583DC31D4A58896A6F239712E89B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMjgy/MDAxNzU0MjIwMDc4MjQw.hbr4l346I8YT7fi8-_Kw4Yw8nTGeC748HQbtKsW8LY8g.T7uh0q5CLQSJ2dmDHxZhXrVGfcdTzvdE_pvM9OaJoYMg.JPEG/IMG%EF%BC%BF8858.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMTc1/MDAxNzU0MjIwMDc4MDk5.yqbcDg7CnoRioSws5Uyb0bPLG_rRMEqHKIGJzFo9uVcg.uCB1ECcaooItEKohenqowoTwmknOK44wJlHJpc9C_ggg.JPEG/IMG%EF%BC%BF8859.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMTg1/MDAxNzU1MDYxMDkzMjcx.AApGK9ePxFW_vy6-s0Nr0t8SUFaW6HH1FSGo-WeshYcg.yEwNrugcgWZumRB2lVM9dWkgXE4HG1qrqw_JKiftAK4g.JPEG/900%EF%BC%BF20250813%EF%BC%BF114554.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMTA5/MDAxNzU1MDYxMDkwNDE4.VC9uvFQngJL10hBtgFhYZczfCSQNGm2YB676WyEvsQ8g.GhNaRxvPbj_wxKWBBzDzsZD18TvuVKHNb6Ga2te0Na8g.JPEG/900%EF%BC%BF20250813%EF%BC%BF114228.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfNDUg/MDAxNzU1MDYxMDkzNzIw.5TIkCewXGB97OesFf_eRLNwO-VWCw3H_nBpd_QZ-YzEg.UXz7z06R3Lsppgd5sOXrPz-Bqc3k5k6DMRibZkMVo7kg.JPEG/900%EF%BC%BF20250813%EF%BC%BF122712.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMjgg/MDAxNzU1MDYxMDk1MTkw.1khU7aNAZXSKTQz5gW6YyAMxlE3v1T_LiLhgiTR-kxUg.2EIWlgYNH_l2kXJDg4xJlVyb5rCmwk_R_WNXjcIBHp0g.JPEG/900%EF%BC%BF20250813%EF%BC%BF114409.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTNfMzkg/MDAxNzU1MDYxMDkyMTAw.qDHIARQ03wLeIuGYAlc2aUsxpnjD7rDE1ea0jRgvWAgg.dmL-CwnJeIrZpUfRlpC3F7uBAL5UCpOY22AA3byX45Mg.JPEG/900%EF%BC%BF20250813%EF%BC%BF122720.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDNfNzMg/MDAxNzUxNTEyNTY2OTE4.1tIRseJgZMnnwtWHih4O2tebxtKIP9zqErwE7JydcHQg.LzTIpyrm7O0GnGbcW-JWUPrJEPkdWB6tn9GBOLPp0kAg.JPEG/7.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDNfMTI0/MDAxNzUxNTEyNTEwNDI5.VKB1xiMQfth3Eiw_kYHblJrFj9OrMWZReGXoDzZSwPwg.nclllwtTL3lml1fls0sMz92MgqdOtd0MG1PZEylH1fIg.JPEG/1.jpg?type=w966' }
      ]);
    }

    const existingImages_k1836502897 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1836502897'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1836502897[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/29B90D24086D471C9CA0BC85DBDB00EE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4847DC84A14042DC93DEDFE86DAC9315' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/496E46E684414C71A24A6446F6A57285' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B238664A4D1A4E679F79AF8EBA1CB1DC' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/10E2C5FA255442FB850F7AAC99BEC485' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5645CF5A8E854B309EF6EC0E9AB12D3D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3EC131BF12144BD4929633D1FD0429EB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BD909CEA624E43B591B530E332FB864D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/73F9EC98D8B44D4BA75250B44D760C2F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8CFE817F00634CDB8BA815FF575FF106' }
      ]);
    }

    const existingImages_k1451528210 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1451528210'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1451528210[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9195389a4ac12563c502529528a80b81ab20bacf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6164756f83b920e56e572dca0f8c8cc3fb7107e6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3831a530765c2502bd3635697c05ac9e0e5feb0b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTA0/MDAxNzU3MTUzNDY2NjIy.8SCHU6Tn193oEnyMAaAo0eDuer4m4kfraLvfwVt6Dt4g.NMY2SpMhBl4ww2XYLpUS3dqGTBjFC_CknIO4VYDUDzMg.JPEG/output%EF%BC%BF650908630.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMzIg/MDAxNzU3MTUzMzc5NzM1.xsnRReCJd-mYCAst_NI4dBa0VW9dTR389s3vXwMMZMMg.u_3GKT2IiHhahgIuFGrW5XfiNgsKZSNHFqtUNchxtAEg.JPEG/IMG%EF%BC%BF7083.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTgg/MDAxNzU3MTUzNDg4MTY2.YgxMav7JSAcfJ3EmSYhRy39rRH9a_hVg8HwCjBa9OBog.5i20pdTeEtY5IU8L3sohF1bTJQm8QU7_Il5bjV5zUegg.JPEG/IMG%EF%BC%BF7133.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfNTIg/MDAxNzU3MTUzNDU0NzI2.clQDvLMEsHc0kHDGOZRl__m8IBwGtVZ2ck7GTVCd_Hkg.z9pV7bBaUG46XH7u6hmK7X2I3B7qwAOFUbrVBOrJdH8g.JPEG/output%EF%BC%BF3075747220.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMjQ4/MDAxNzU3MTUzNjQ2MDc4.MI8lnutYWIj4gzUXZTpWAIFzlIE0npOIWnBm4z9WKusg.Q9FYvqPAOtbH-uWLYx8FL0tGlAxT_Y7TvzXXSksY7dog.JPEG/IMG%EF%BC%BF7090.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfMTc0/MDAxNzU3MTUzNTkyOTg5.IITDwevjaAsGIJqYned8rpLF7o5v13Lp-fu3WnuMzH0g.FYhtvyKeG2B1GDQxHi5QJwDRpVNZhDzmWu6WZTwZ9KMg.JPEG/output%EF%BC%BF2335987464.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDZfOTcg/MDAxNzU3MTUzODMyNzU2.wAYwdgrxVCM2RmNHEvXmYWE3f_z3I-pxEuRM_XtdmXwg.pn9tph8rPnxtwYBD9fSNwnbAg8emSWjQI3Ui8GqbvKwg.JPEG/output%EF%BC%BF3753578732.jpg?type=w773' }
      ]);
    }

    const existingImages_k27092752 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27092752'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k27092752[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/3f2bb7061e9b21aa2ad28d9a610bdaf7df0fcaae' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/A3A5DBEF0DA74877ACBBE045C80052D7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/AC4785D691314E4F8E0F7EB2CFDDB58E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/EC0E7F0001A64544AE19D4F40A9ED166' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTMy/MDAxNzU2NDMzNDY4NzA5.PCVmx8hiDkEBBwL3TMy08QnnVav2JuiNs7l1sBVbpz0g.Sst-BDy5Zi5uNJMmulHgzPu15YNCLdX67W57Cc1Q2GQg.JPEG/IMG%EF%BC%BF7602.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfNzgg/MDAxNzU2NDMzNDY4NzE1.fP8n_G8oT7kJ-O1lJHpp6ZNKw1w3fW1vn3XqPCxtIX8g.-Vng1A6wq0MOrMT4ZY6rn4mC9k7wc319LKrpRNFkP-wg.JPEG/IMG%EF%BC%BF7605.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfODMg/MDAxNzU2NDMzNDY4NzI0.NnnmEY5RN1R2K2L2Zl5javaTjlfjW1lLGFp7nVeIdoog.PLoEMLbyRpyKwYKC0sFji3lHj9hhsTAFXdovjFDRgecg.JPEG/IMG%EF%BC%BF7603.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjlfMTAg/MDAxNzU2NDMzNDY4NzI0.50Qdx5Zckc-Uwu95EN9Th6xxyeNQpySz6AnPdvMlqDEg.6N0zo5SMJfHSNgNJmQ78WPqNyXrQD9koP4voHMtyqagg.JPEG/IMG%EF%BC%BF7604.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjg1/MDAxNzU1Njg4MDU3MDA0.pWEJS-KtzQnKMXes_88HbH6m36eiQkK05pVJK8KMo2Qg.i_PjbD53mIR48wJY_s0adEbISfEq1VDwgFuOQUm7EyAg.JPEG/20250802%EF%BC%BF121905.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjI2/MDAxNzU1Njg4MDU2ODM4.uP0D4hS9lg_PdtMzvIQlEGSuf97Viex9EJy92vZ3jywg.ksLxp06CurPTPs5H_4KzhhEiiR6YTIaBVtHZzuIr1CAg.JPEG/20250802%EF%BC%BF121527.jpg?type=w773' }
      ]);
    }

    const existingImages_k14931919 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14931919'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k14931919[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/740BA2AC71F74637AFECA0F979BA559F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/CE0DF2BC1FC44D358B53927058F5F5B1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/5C7773B2A8974F569A3772EE716AFADB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/982F7A2E940D4DCAB2AEF36D651AA346' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/DF21473476D24E948CFC64F53770B96A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/4E87770AE93A42398A94ECFBAA3D1856' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/646F67E59C124E4E81369EEAD12D5C48' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/9C1D22B60473460C91305B60917B7DBB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/4728C197C10349DA9071ACD7B7277A28' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/06A2B36F95484D4B9777D2742EFE27A4' }
      ]);
    }

    const existingImages_k10209539 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10209539'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10209539[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTgz/MDAxNzU3MDY5MDEyNTU2.i_599rZhJtpeoCDRDB1FLPo86r_a_0zkaLuOvXYSQ_gg.qzIYzdK6bQiNjhvbtMTlX7jmm--9wMzLdQnXq3hOCXMg.JPEG/output%EF%BC%BF3466979281.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjcx/MDAxNzU3MDY5MTA0MDEx.wbg17uoJ4D3qd36XQaxnd8t1SMEqhsDpJ2DGhBqU6n0g.yXEfrYl6aAUhkq56pwwYdUt_sixLBFTKNm0kcH3m-NAg.JPEG/IMG%EF%BC%BF2773.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMTA1/MDAxNzU3MDY5MzM2NTEw.1dIAYR617RMn4p0AxfHFLhBZptWE8lo6MxB1mnlHftMg.7xILDjSCfT29kedzA-J7Y6hg_suFXZJ3AlLavhyzd0Ug.JPEG/IMG%EF%BC%BF2773.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfODkg/MDAxNzU0MTcwNzEzNDcy.__0pz9b2IlpK3fNNI7CyvsmBmCig0-LoyRUz-aj5HNsg.ZsaUu8OVQIUhogPQvZxRU4eHvFASzm4k5olx8h5zyCIg.JPEG/output%EF%BC%BF4005872190.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMTE5/MDAxNzU0MTcxMzM1NDIx.gbO9-U9QOsNMPrzSi4oOMkJd9LZoIQFZpMzi4p98e_4g.N3_5A3KGYt3ymEOsJFQBnW2DM8UIiF9KSP6MqI4rnqIg.JPEG/IMG%EF%BC%BF5713.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMjAz/MDAxNzU0MTcxMjExNjg4.cCkEDvVgnzk7hUv5RVnTHci-uOJIkV1Ge_Mj3uZAcZcg.fS-3W9y_pu7e2R4lVT7OjMwEXZIa8CJWLSP_gMMONKMg.JPEG/IMG%EF%BC%BF5717.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfNjIg/MDAxNzU0MTcxMjkyNzM5.M1F5WkuqYC51ltuOV9kGy5QVqgxKkgtSRlvz0U72GQ8g.HotOMvpJqP1TLCi3Sqo_ZqiKgdD8f6N8m9-cMxULln8g.JPEG/output%EF%BC%BF2394213675.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMTEx/MDAxNzU0MTcwOTM2MjQx.E7wOM3lZCBkwJddb_TdTLqYKc9OVAqnHwqqSSrKItRUg.CVJlId9DrB9TQ5HcHFxbmE_uu9hD5EWkFH6uF4AHEZEg.JPEG/IMG%EF%BC%BF5711.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTJfMjE5/MDAxNzQ5NjgxMzU2OTIz.UqWwIlvmS_RkSBCVdnoJt_FL2KKc3l3Yj9W6oEoqktog.64XDoYvLVnSKdySlEySPhEsA5-g3D72mgeqh2te2-pgg.JPEG/IMG_1193.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTJfMzIg/MDAxNzQ5NjgxMzYzNTQy.0gEDtJVtumj-B0cNTRUofvAjTLo64_eUU2uj0ldxQGgg.Tx0dZP4aLS9--rP18ySm_tdQ4aRl8NPD0MWv1WCuVQQg.JPEG/IMG_1196.jpg?type=w466' }
      ]);
    }

    const existingImages_k60825746 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k60825746'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k60825746[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b008932b5f3d50f305ff9790800a2fe63a292bd7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9f6b7bd03686ea8a6fb010a9598c26e0dad0712a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5f9b52680cbfbc3b156382a9a07bc7de03c8fdcb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/834f140e03cdfed855aa22078a5eec30a3bb9ca8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/db972f17e2fb924cccbeb3d0962baaf69b362312?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/45ed65a6ede6f063a5d29d0291b112f194d407eb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9b7a93a84342a4cc48ecb5608e6776dd445c5330?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/24fc1c64541b79c4310ad30220b66cee496c38ee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8b3bb1202466def22f15a665242d4c8c87a606a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ba3924213506a57914f1154a874ded6d32036a1f?original' }
      ]);
    }

    const existingImages_k10150202 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10150202'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10150202[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDZfMTAw/MDAxNzQ5MjA3Mzg4Mjc2.FXLJtRqM98D5qwoHPbMyt0OZNIm7TbfOaJAH3Nn3bpMg.indDepEjU8VWITBMZo3u7qbBIeMGaIiOiz_FWvb_6K0g.JPEG/SE-189700c0-631b-44d9-9268-a7c2b95907e8.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDZfMjE4/MDAxNzQ5MjA3MzA0OTE1.q_9yr0mEXkd5Z3kNdcQfIy7k-OHv_18wB13l6swM35Mg.-xZ1cW2bRPJwCszF9miUbYvdnWyzYAVUimeIzJGwSoMg.JPEG/SE-aa01b22f-f991-4734-a4e4-cfea1def7c82.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDZfMjUz/MDAxNzQ5MjA3MTUyNzY3.GceYwjHcB4bfUPdvhSZAXEsAhMzUAJi5yfOD-A0CGaIg.dfvptEa70PZ5FQboYL1Bu-DiyhL1i6iFUeTIUbYtv7wg.JPEG/SE-2cfe7628-d908-4485-987a-6f92c073ba0d.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDZfNjYg/MDAxNzQ5MjA3MzgxNzM5.-KEuOw43GoLN6O0NvDh6OYAyoKVD414BeNy6XPeVjb0g.YLLoXbu5glJ895YMoOG9kPmIf0nlYbPL4OjdIcGJeeUg.JPEG/SE-d9f6702d-7426-4cd5-bdca-af354a3b2cc9.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDZfMTIg/MDAxNzQ5MjA3Mzc1NDUy.x4Xx8ll5wAK9i2AQ4YXv3WAtdDKbqTiFPlmwejirv2kg.XH52fHxLuy6SuGh3yrwDfqCidTSBEpEW-jp6J8soL_kg.JPEG/SE-bc07e19d-9cf9-4e00-930d-3cadfe43a894.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDZfNiAg/MDAxNzQ5MjA3MTU3NjA4.KpKX89dhI4zXGAbr9pNzPTav6RDei4Ja2q_r4TmTSuYg.bA8PC6WJkgxMw_yf5luQIXB8SPKOHAjanmL1NviN3dkg.JPEG/SE-8b08b6af-186b-4bd0-b06c-221628a4bb40.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDZfMTI3/MDAxNzQ5MjA3MzQzMzIy.v7fdX551xodZAUKjrhXvFKkF7gnNwk5Xx-bngKD5Akgg.xDz84F-bJMLQ3IAn3TbHK_JvD6NyvNtmB6Ro06PcoZ0g.JPEG/SE-fd39860b-cd9c-457a-bf94-b0bdf088d416.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTNfMTI0/MDAxNzQ5ODIxNDYxMDA0.0eOihkTb-MvYoQ3UksPe-CJxqClMgqZ4DVk02hQ67aEg.2mjlkiBXwssbck8uVgYBp-2i6E8GdygV_77NLT5v6zwg.JPEG/900%EF%BC%BF20250529%EF%BC%BF190015.jpg?type=w275' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTNfMTQ5/MDAxNzQ5ODIxNDYzMDcw.f6wQ3jgBUrO6ao8lN4b6Wkj1EJylX-ydahJtCD6U-kIg.YALPitCUbUYWTw4bFJtcZWkIG3cr5Cd1sZSPTCL1HAwg.JPEG/900%EF%BC%BF20250529%EF%BC%BF185324.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTNfMjEx/MDAxNzQ5ODIxNDY1MTEy.Uo8_Uy2iY-Jb728Q3W8odCkg4AEy_v0U3eADv2wwqUkg.GaIi2SS8rmBwD7McxIV0uyj-IrGEjkoTr6RpTFHS39Ug.JPEG/900%EF%BC%BF20250529%EF%BC%BF185513.jpg?type=w275' }
      ]);
    }

    const existingImages_k21223742 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21223742'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21223742[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b41ebbe9ff9fe3acbf3e5fd6afc65957ef66b000?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dac37025e461aba6cb3d47e7b115004b770e7e82?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDVfMjAy/MDAxNzU3MDQzMzUyNDM0.ZvqukJ1qS_NggsXe9xf0Cn6untlR5RPtMLkXWgRjNH0g.WPRWbwimJ85lF_-S1GPtAOVfK4cJo_05r_Vyb9Q2_Mcg.JPEG/IMG%EF%BC%BF8610.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMjU2/MDAxNzU0NDU0MzUyOTY2.gUSuviU3Gs_8l4r7F675pBvvTFg2o_Fx98ZOKsrj-okg.8E5kXy3iy4asacR8v8FdCe0WumBvqMzJoWYteCUTT8Mg.JPEG/output%EF%BC%BF3008358229.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjQ3/MDAxNzU0MzU2NjExNTQ0.2zFj9jUYg7d9xEiaRrHY_Yw_GbnEcgrnuNL9llwCumgg.7trRv_SjFr0SopF3wQbiLz2cVy-t_3sgj-ZU1fxJtIAg.JPEG/output%EF%BC%BF2307902483.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMjk3/MDAxNzU0NDU0MjA2NTUx.A3U2BQEDWoJFz9Qz9aK1GbA_tL3bBZn4-Hpr0GSMe7Eg.GOwUmSjs6WxP88YtW-hAduQbVqtnvv0Dm0sTJW-MVycg.JPEG/IMG%EF%BC%BF7406.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMTcg/MDAxNzU0NjU3MDYwMTgz.t72vJHs11I29_78xt2IB4zP8U32sHkiYF4aAt-D9Ztgg.-vz2hIxLXC8wKpxRojHWPbb30dzkZ-9uWanbB9QKm40g.JPEG/IMG%EF%BC%BF7435.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDhfMjc5/MDAxNzU0NjU4NzUxNzg3.LK9fPJfMqWrWjhJ5zHYvoqhGfyZSUErI55YGf9px8ZMg.PEmetKwD7iMttAeQrvZ_eC5o0DRTkvrJsQaNwiSigJcg.JPEG/output%EF%BC%BF1523781718.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTBfMjU4/MDAxNzU0ODI4MTQ2NTM1.xndRR1w7F957RTE-eNkGsI_3Gd2bFeOuH0xk1rJiJb4g.I48ZS1DcUXrotuqcRCFqfZmcevSe6oj1GQlX1IyFE40g.JPEG/IMG%EF%BC%BF7602.JPG?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDZfMjIx/MDAxNzU0NDU0MzE4ODI0.pjMzslIt-PST9vZZmXsmEe4go5jaBlKp2b14DOErd7Ag.zvTgncLMb1L0QJNWYrgI68TxUf31RCN2jRn49XBT7dUg.JPEG/output%EF%BC%BF2045388041.jpg?type=w580' }
      ]);
    }

    const existingImages_k175076849 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k175076849'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k175076849[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rv64kn1c3o3vsuqx1qe99sndr/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33308241150&kamp_tidx=0&signature=DSCbfeZP9aneRaiBisaCMQVLcNE%3D&ts=1751332350' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvl8mvhpkw1q31c0htjv9mzaq/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33308241155&kamp_tidx=0&signature=lXWhYnKOai852o%2FmO0X8xbs9dyI%3D&ts=1751332355' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c0862e6aafd5141560c392ad4a340e9b5b8e64ee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/01a932fc4e420285ecdd7980ba1f3cf5a6b65525?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8d98f1a32289ba83144a8a744c687d53d946a957561671a6a449d3531ebecbae' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e5e79561f9552fac53554ae795a6ada07c07dd98?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5dbd7af172d39db532c75e07a573e32a14a6e1f5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e833faebb06dfdeecb143640fe12a5a980ed05ea?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/844be0b5744f5cfeb00723c9a0a2bbe7328724d7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/740509a7a675dceece900449e02ce4e5dd68de39?original' }
      ]);
    }

    const existingImages_k523407095 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k523407095'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k523407095[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A5E68518A00A4129BC24B7F145E1BA00' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7AF5ADC7FC4842C295D7DF45083D950A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1480151F081D4C23BE0644C408A6C588' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D410FE9A5DA8442DA2B5C46B97C22BD7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/78388ED9E0934DE2BC2FA2479896D40D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/812D20CF76B9414284CEA4376CA69456' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/63E164FACD0C4C7386F6820B8DCC48AA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/73696597E9F149ECAC1A8BD5CF4FA821' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AF44FC88718F4B5496AEF01FE5E9B8B6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DEFD3463FC384465A60F283BEA014EE5' }
      ]);
    }

    const existingImages_k14502586 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14502586'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k14502586[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F45F682618CC40AFBFE7F580F053E480' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/73B4D2E7889441E49834396CD23F4314' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E66937A0329843C3A6F4AE2DF54297C1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/24DF4B81C25B4CC98F5CA80F65409B4A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/F19D92EA90814F559AE000B662449F8D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E13943BB20054817B7469FD0EE90D2D0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DC6CB843B2EE46AEAEC1BC8FD1E5377E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/42EC99FE59C348AAB30D1A959094B17D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/32987BBD85AD49DBBE6EC8717C6A772C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BC78A6974AA14ABF98E3E20A82499643' }
      ]);
    }

    const existingImages_k10115439 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10115439'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10115439[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb3b99f49f2b4bce3b26dd456d9dd7d8d8245f08?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8488a50876112b2131018d521685429d160e3cd4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvq7jgn7tpy47y3eo2xtanya8/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33308814569&kamp_tidx=0&signature=%2BKDp7ndfhB5L6%2FIMkxHkcYFjfss%3D&ts=1751905769' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvo40pv0r9eup8yql67onublg/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33308814568&kamp_tidx=0&signature=PEy5wtZEKqouNNeO694Zcgp2JhI%3D&ts=1751905768' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rv2tlu5t0yp4u7apm6sd9mnuw/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33308814566&kamp_tidx=0&signature=8EaJoLJVeXlQxdNQOMRtGci9Yac%3D&ts=1751905766' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvre2k8jglc658wep4ke2tciv/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33308814570&kamp_tidx=0&signature=TL2ULcCzTJjIkTBguLzfHBGH80g%3D&ts=1751905770' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e65e571e1c2f73a5395069ca60a71e1b20a1fb70?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3397005387547fc15bb03a0bedfad6d6b58385fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7cef1dcc735d3eda3694af0a3d213c9b0720b0a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d2d96dd3243a567465d83228a1802deb1fd411fc?original' }
      ]);
    }

    const existingImages_k1595770402 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1595770402'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1595770402[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ef1cd50e9647a2eaaca9048a32d393131eef26e3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b5c55cb1529ecde3618abace9d6ea94cdc1a7b0e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/150b1d3d12ade0473d663a7d5c1547b98decdbc8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/02ba41939370007cba4fd693d7537c9de84dcf1d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9497dd9003d6a2794974d08f804d5eb83a0834d3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8207581a1b4a4b1bd4e10419526141a5f161e940?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/81a3cd804892a91869a562eaf6a2c00b36ac439c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDNfMjkg/MDAxNzQ4OTU3MTUyMDAx.1Se6D-4lya9jVX_TYfigqUWqUb3BrpOmJoBxXlTYu2Ug.SM4f58FDp8hkPi2SVV8DmFzFVpDddqfc53yx_8JaDXIg.JPEG/KakaoTalk_20250603_222007833_12.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDNfMTY1/MDAxNzQ4OTU3Njk5Mzgy.AKFW0IK4KnwCkrVvfu4rKAP4uCYDONUbGAt3Lhqnc-0g.3yuSsrBMM2t3VJcdv7qiqXbw_7ut9gVUqK4Q6BgGAGcg.JPEG/SE-89dea1b3-c18c-465d-aba5-dc57f0186655.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MDNfOTQg/MDAxNzQ4OTU3MTQ3Njg1.MQ1vvBPaA3ytZIgLnOk3CY_eWp-A31gRpOC5laETAGkg.NogMt3rKvXxP-hhTHDjc5LkWOLURgeE3XIDsMWlqOUUg.JPEG/KakaoTalk_20250603_222011111_03.jpg?type=w386' }
      ]);
    }

    const existingImages_k7960840 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7960840'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7960840[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0f1189d96435d1806cd4d55850789ddb3922f001?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/35e075f047acf24a71588e7de1242ff3bc67811a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d969f63afc2667d6c20d5c411c19b46afbde1017?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cae393ecd318e718b267ecb4b6c6d528449cf1b5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7703ba934ea6ee8b117772158556f8fa7bd776ce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3db36ecce6f856d63e8de19681e9d86d409e6643?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/02898eade4d7f20af5ce13414a6f5e3ccbb13143?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f74b6eb058f85a95993475e2647bedfea344ad0b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f3b8de487bf9d8e77865c0bccfe5c3caa64d8dc8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fe02929a97b8d0f0445d9d19941203a1722feec6?original' }
      ]);
    }

    const existingImages_k8171788 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8171788'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8171788[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9feabd0891d45e97e60c7f704ff18894e72eff11?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/51618bb1c1a436c2215c238a5e4be07d3506c745?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9b0534b70195205f0bd25fea57da43d2126d4a9e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6cfec3bbc37b66590f3f17ba30ab348efc4a7b28?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3a88ed1842503e9f007c6581cf967cb125ffebe5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/53822636f0a0ec98257af57975972e2b5f902959?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ab18436b6aec62929440ff546ea64b27b1931065?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/593f3b9725437889845b54771b9ceff7739dd83e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d3b172da33cddfd73aefec83da9c8a73ecba771e4f264b67ef53e8726e9feb2c' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cd8a981f1aa04d932fc6cf99291ea5eed24fcbc1e1d0b59d20338c76cab6b080' }
      ]);
    }

    const existingImages_k1852932274 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1852932274'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1852932274[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/18A7BB8E8389400CAB3FB07770DDEEF3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A5900DC8A04C4287AD05E0D30C5A0ADE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7CAAE209B1C147DBB576810554CC898C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2B3A79FABCCB41F8B992A62AC4CF60A6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/DDCA1BA488D745F5AE97BFD235B385C6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/79453B8A93344F3ABE99B4896D93FF6C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1a03f180270b5ed2c8ae3d8539b65e0ab6c0b570?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/409440931b16e619c9acc681506f72203df76223?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9f24c3d6ebe49ea9d3191e878495c7d342a2bb8d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/26c3be60302adab6a2dce3de3f426d3ef7b56e6b?original' }
      ]);
    }

    const existingImages_k8962407 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8962407'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8962407[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b6009448ef72a7ea886a8e3f061a5f784775b779?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83d9ee348aadf046f927d85a6297b0be0956fd96?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/62627034d0711b827d411f5a79b8750b1026a0cf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/372b2370475e0a498b8618b29f3823ea4205414d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff322f15b72812f1b07fa1b29105bd8d8589be51?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3ce343b1ad34fa849e0dfb15c7165065659d515a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2d405dbc9cbd9c8632422da53ce41166e5d9bb5a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfNjUg/MDAxNzU3MjE0MjQyNjky.Kt1nz9sQru4WH4AucYdwdwbjgHo_5aviFJ1ppPVWaQIg.aofm_YYHdRu-ofkyvhWF-sCWp0MbvoREV9Qck3guI_8g.JPEG/IMG%EF%BC%BF1139.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfNjAg/MDAxNzU3MjE1NzE4MTYz.cG2sKFymllREK_QwO9ZPwrG3IPh0ei6RAMWGnUTPFvgg.v-YOV1unFFxYxcwaG3JucYFh-8Bvz98InhB9rrj-FDMg.JPEG/output%EF%BC%BF1139493408.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDdfMjc4/MDAxNzU3MjE2MzA4MTIz.K5ffWHslrD3P56S1qPmpNcD4REhpdw8YZe4kfvyVtf8g.zB6XE9MyHnChk2uZZf9QqEGV1-zYz140cbV0nqbeuwUg.JPEG/IMG%EF%BC%BF1140.jpg?type=w773' }
      ]);
    }

    const existingImages_k1003907552 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1003907552'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1003907552[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfNiAg/MDAxNzU1Njc2MDY5Njcx.7K6aiGE0nlMNQo3o0Ua6o7seeRccL8mB3Img2OMMdBQg.LyfntBJPYJjTDXia4SGF4e9GipK6wDRY-qDU_JCu3yIg.JPEG/IMG%EF%BC%BF7958.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTk2/MDAxNzU1Njc2MDY5MDY5.hATcORrlJ2MOW79FYBiKlxHGR9tiVHLrc0YS47077CEg.s9bl-knViNPhdD3OhxIs0BWvRzHL0JiBAOUsiGqdK4Eg.JPEG/IMG%EF%BC%BF7956.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMzcg/MDAxNzU1Njc2MDY3ODQy.7bv0gcHVibSxdUD4ZQl8xbnnkY64ZGQY1Q3FwzFgnSIg.LISwr_rH8zdJwtKOi9qUcc-mkHU4pD2bAdyBshyYh4Ig.JPEG/IMG%EF%BC%BF7894.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTQg/MDAxNzU1Njc2MDY3MTYy.DQPNISfas2sz7mOevi7rUQ-JIK5b4_VXst_oY-5zqAMg.gDqM3VmM0EEZ_8miBlvEUwYxlDpGBetyTRvUOSu1Hgkg.JPEG/IMG%EF%BC%BF7891.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfNDIg/MDAxNzU1Njc2MDY3MTY0.Ob2nCmchshl5gAMD3FWQWjUPDkzQPFsdq71h3cZFvIsg.3bbSuZuBu6_L-KSeM4ddgPl6UrYaLAX2P87KPgZ25MMg.JPEG/IMG%EF%BC%BF7949.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjYy/MDAxNzU1Njc2MDY3OTM3.r6_LiRWre2XAGau6GPTDaIeoq7B0R7Czu-OlTouUml4g.Px4Hcegm7YbS6uWcBrLRET_TeRDlNxtwcYzcAI5zjmsg.JPEG/IMG%EF%BC%BF7986.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfOTMg/MDAxNzU1Njc2MDY3NzU5.7k7QhCnE80yrTtaOGoPCqO2_wwcvNy2Ei1Qg9Qq0S9kg.SDZkJ6gO9WFFl0xiA59RCl55XSfgrEknukrb9tdJwYMg.JPEG/IMG%EF%BC%BF7946.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjdfMTkg/MDAxNzU2MzA0OTYyNTY3.g0GoS8Pc2IdJDfux56UJN9OepYedf8z8Td3IkLWOSTIg.TIWq5k7cOIXNvll3qxFyIIOMuUu6wROrrEcXLk1f0iAg.JPEG/output%EF%BC%BF4156590625.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTEx/MDAxNzU1Njc2MDY5MDg5.L4j-eJIyQutU8ALNAujopcqUTueF_anBNBpAbkMH9cYg.bZflDPL_V5dsEan0icq5nU207aWfM6bF2sYnotvm8v8g.JPEG/IMG%EF%BC%BF7955.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTM0/MDAxNzU1Njc2MDY3OTY5.zn4epqshjn9T3j9L27KCCyroDfOgeLdW8fuHBS-W8CYg.BZVqy7WQ9XUDcb_6KUGytsnE2h73JKoSuPgIxMBBtpgg.JPEG/IMG%EF%BC%BF7987.jpg?type=w386' }
      ]);
    }

    const existingImages_k9008180 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9008180'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9008180[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d4251a57fdc5fc9910f206c88fcbeee739736062?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/afce335d3543f126e3fd09e77f750954c8a26298?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/012be3bba8f71986e4614cf71ec7070811a73796?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fb64e5f3141bab03b90da55da2970b9941f18bc3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5c2f68aa56e88dfdcfa7341402ce175a6562e34d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d6998fb7209adc72ab8b049f202c68b77ddedd2a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e8e975568221251f6c83b22203a7600fc1ba334?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/83ebe2bf7392a0b15d4c8c6ba332d03fb7ede1d7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/071c2d7641fcd842769687f0cc7a6deb332f5c2e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b38a315fa0304ab505de117774bc76a2eb571cd5?original' }
      ]);
    }

    const existingImages_k191901974 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k191901974'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k191901974[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d0ca50a0599810d56044204e4f548415d5c6133?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/420cd0099e59a0e61b6b93bfd017ff3a93f82878?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfMTM1/MDAxNzUyNDc4OTI2MTU2.0Dlrc1HFBR1zbNyO7mzSL2ZJcVssjKutWhWfaoMcYVYg.Ml8JxF-_SqGQwAYuS424GubooOdbCkBaT4X2kbRymV0g.JPEG/IMG%EF%BC%BF9695.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfNDUg/MDAxNzUyNDc5ODA5NzQ1.Y4CLd1CIF1Ycsp8_Z293cHXR-uD-YsklX1eM6pJ2uHog.JVIdOD6ixRbcaOH3e2BzZ9QfIFBxZsmL-S7ol7rzEJMg.JPEG/SE-3934F1BE-7E13-41DD-A1A4-15A3BF8550B5.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfMTQg/MDAxNzUyNDc4OTI1ODY0.HyiR6ElDx49hJcPNt-zE8inTWLwdCAjOAQp2aApcYpgg.1W8OYv6bDY7pEWZAsAv8t92IHtZA-6acIyz20qXc48Yg.JPEG/IMG%EF%BC%BF9694.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfMjY0/MDAxNzUyNDc5ODEyMDE2.l5q6hxQt3vLIUDlpTExlrUzX_AX-adNQri6YrzjFua4g.K_Fj5OKB3mZBKo3ykX-7vPV1d5yXDbTPo_jayUtxP1gg.JPEG/SE-4F7E499B-439E-4C70-A40C-A97D2E44A05D.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfOTUg/MDAxNzUyNDc5ODEwODgx.g8yRh9g8WCBcpcNHDCHh8FwCotWWMSYZjR8wTOBmVlwg.EBRnCzJ4jCiIld5Wcy04Xy4AWIcJ9AKMWwyPdv8LXqYg.JPEG/SE-2C61FACD-1A93-424E-8057-BB14AF45D093.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTRfMTcy/MDAxNzUyNDc4OTI3MzE5.AimKPVTKmU72DLAzbWO0ImXGBN8Tx7RI1M0tBADpaAQg.GUC4rHBT3nIg6UOqIKWXQtsk3Xjv0eIpqpB0Rb2PukIg.JPEG/IMG%EF%BC%BF9687.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDJfMjM0/MDAxNzUxNDI5Njc2NjMy.k_ZgcQivyQOfayrlkWDopQxHAy4Hl16WItdlouokhDsg.IzJhi3RnbULcfolvo26L5GtBMKYi15mZVBX-Njc3sPsg.JPEG/IMG%EF%BC%BF2494.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDJfMjg2/MDAxNzUxNDI5NjAxNzI0.m3lkzpAZEcjLOAz-KuRuXbvBvkhFPa-G5F4Mb66m4ekg.YmWDcXsrEfu1WMYmYzNMrCMywGO2QyUMjlV_-I8gwe4g.JPEG/IMG%EF%BC%BF2405.jpg?type=w386' }
      ]);
    }

    const existingImages_k11892173 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11892173'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11892173[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2fe970578cb67b44482ea0d63e227f9b6a3c7e8f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7e734be78b6858eddf10098d8e570a131d0484b0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e33eaed41b4e1b8e8769bb88c5d0bcf2c786d068?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btquat1TBUi_ewwz0Zr0VMYXBTxAhCU6G0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdSQ4V09M_RmUBYQzKrCPk65sGgpSL2K_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdTLoJcbe_xvUgK3B6l4xilqLm1v0RF1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdRaJk8Er_EKYiuhz9lVpI2m7UWCjuaK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqdRKRhXc6_kaD7m4JN3go9Q7NWWJbij0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcM1mtenm_XHjlymZi97HVNOtTI3HG1K_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWaiTyk6K0_ZLGJjuagVzYvXTuRW1PIf0_lkageAmhYij.jpeg' }
      ]);
    }

    const existingImages_k1432794635 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1432794635'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1432794635[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A527C3C4721B44BF8C983F2BCE0488FA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/61BDA86645E746D79F2D3A21FB563898' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/381E171F04674DE7A7457AF075F13EBE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/A3301C7A77AE4224A51D6B144F19B1FF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/97BA62EF8E4D4E4F85CC7A34127C5B38' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/841BDABA7C7C4627A222095649FC76D3' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3E010061422E46FFB87F65CF5BA7E18D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/84EE8E9575E14252ADD7063E59EA7D3F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/11AEF8E1341543C3A94CF79C5E1E1865' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4BDB37B17C5744D7B80345CD23D0DB6A' }
      ]);
    }

    const existingImages_k7815872 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7815872'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7815872[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfNCAg/MDAxNzU1Njc1OTQ3NTM1.kFx7U1cz3tNejSy370z2SWgYyRMhlxUjEyaGJw5m1v4g.A5AAY4V94S2LDC4QAsqSC_2hF7CZ5veykH43o65UtN0g.JPEG/IMG%EF%BC%BF8830.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjg1/MDAxNzU1Njc1OTQ3MzQ3.RDOM0dLjCgi2kOFta9V9ERlNCf-_z5bwYGTUKXJqPU8g.4_8GPAFdldEBOuHp8bkrmsbBjRyoFUC_-xXkMEj02Xcg.JPEG/IMG%EF%BC%BF4024.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfOTEg/MDAxNzU1Njc1OTQ2MzEy.dSO5DgPW0IxCzTU4kce4eNoXqWjXRkazAeyCabNrXR4g.GQDQHThbBehzhvgqIBLx-g3LqsPW9ZFZ1tnfg0U-wO4g.JPEG/IMG%EF%BC%BF8746.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMzEg/MDAxNzU1Njc1OTQ2ODI0.0OI5sZ92RpNVmG4hJmq2wCsCZNVB_SPjUQ3TsZa7KJwg.ChGcuuLCHpqGtnAAZNfpT8HeNTCdUBs1sRBotnXlAMYg.JPEG/IMG%EF%BC%BF8751.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMTc1/MDAxNzU1Njc1OTQ2NzAz.g_m_L4xSnUKlYz3GV_aCX0-Z2UA6T_0THhhm0RGAs8gg.RJpbwTjn_AJV1cdCJh-3jY_myHK3bRPeMIxORCxhrywg.JPEG/IMG%EF%BC%BF8742.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjBfMjgz/MDAxNzU1Njc1OTQ2Mzg2.vnasL8KpJ9xxZAqS0gxlXqsRAYXncUCD8fFPDvUV-aIg.68rONueJeQFMMqNPbggrZnp-LuG-r1XNBgmT7HbZ_IUg.JPEG/IMG%EF%BC%BF8786.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfNTQg/MDAxNzU2MDQzMzQ1MjIz.r73RnADXU9b4h5qHYOT84tfqgg-PKHrDWhjj90k0_sQg.iz1D3S06Acim2QnUa97UYWx0cd_eYu5HQz1LJbEjWDYg.JPEG/SE-3B07BABD-8836-4B74-AE67-D78CCBF8EC3D.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfMTQ0/MDAxNzU1OTI3MDMzMzk2.Smw6jyZMTyEmrgVGCsdtI5rt5H23h0x7zYuk3QZEIswg.7hDRJMxK06R-TCRNHPk9YrMVd1DJRf8YaBWDw3H5GAgg.JPEG/IMG%EF%BC%BF4064.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMjc0/MDAxNzU2MDQzMzQ0MTk5.QwSrkT0YvDDhqeXMChOinElxmTfqoyRSv0QWNAswqx8g.KDzMttRWmK4awFA9FeCqI-DOGWgGaDe8lUI-BnNpVrsg.JPEG/SE-0F057BB8-B6F9-42A0-A36F-B661A49626FF.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjNfMTg5/MDAxNzU1OTI3MDE1NDg4.aXmXgrQOcjNHx4VkewjAX3XoNfy1vUrBlj1vplIq_Cwg.1N8UAoGZJoiyzuG9TUPPEk56ns6fTBgkbf1RAJhuxx0g.JPEG/IMG%EF%BC%BF4066.JPG?type=w773' }
      ]);
    }

    const existingImages_k8883591 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8883591'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8883591[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e226e88ccb1a3c86b0c0502492c4a4c40a71793f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/841d438beb65da8fdfcbe2a46b6ecd88985904a1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a432bfc9a1bb4f19580126b8596f24ed6b490779?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/964812bc5fe6912ba019cbb0b0f4efd20a6e751e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/df15fcb8ad468e79780c6c3ee775fad43c78d6be?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fab25f152e145811e4a4f4f6ccaea9ebc2a97f74?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e2f862cf2e5452f0f2acd980cd253951d98ebf63?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/be9b3d25781dbf98c244b9ef96f2fdcdc25e24eb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bb2b9e4e59a1d7b196e6238cd598d997c04054af?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqgHSm34kc_7C3tftplhWJQpZLjyPtHK0_img.jpg' }
      ]);
    }

    const existingImages_k8256361 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8256361'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8256361[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvzftfw0pd3bz9jrqb96x9qae/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33306254228&kamp_tidx=0&signature=ywkBa7gHidcr5xyc96IRq%2BGV2Dg%3D&ts=1749345428' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e155109285d7da4d8bf9ecf09240fbdc6186bb8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/86953d594ac9d0615e53870bd2fcfa7aefc8baee?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/06e9f0cfb842a0604ae1add7a6b22d49203b784e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6209bce671ac787d45b6d309225e1e72bf05a79f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c6f16972078135587639532fa98ac0b6f88e6fb3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ad41b807e40ccb0dfd7241fde25d594039c9b730?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f2b6d05fcb5722de8822e67f0da2728c465fdf9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWaiEnEwaK_6or3PRuRSucbzWqd60TNtK_743d7c643e57e411561148f14325bb48bc2f7a77.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjJfMTcw/MDAxNzU1ODIzMzE1MzQ0.jWVrLBo8CCHQAm_FKXXR7Edqj62vrWdgiPCkrc5DFCgg.jF8WIoIaketUvDw2bX_wm_aJfadhvS3tnmZ5kKewTrog.JPEG/IMG%EF%BC%BF4189.jpg?type=w966' }
      ]);
    }

    const existingImages_k8908115 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8908115'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8908115[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/663cfb185646a0c96b858c177509b46643b1b4a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjgy/MDAxNzU2MTM0MDc5MzUz.JWCUILxugLculP7cAAX9Q6zbRZaLeiZ1hIRp9KvHbbQg.YB9BwoPJXVDLJp3iiBdYi_rruJlZb30vQyPocwsbezQg.JPEG/KakaoTalk_20250825_155606772_08.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjcz/MDAxNzU2MTM0NzI0MDYz._yG5eqsnA7fdgy5mjH9vs5AkR3ZiiOuuZ1ZLVjXjab0g.Bzl6e941BYF_ywnwTC16OvmH5EdvD2E3now45S1wlxQg.JPEG/KakaoTalk_20250825_155606772_05.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTMz/MDAxNzU2MTM1MjMzNzg2.AgSo4FgtvScYYzX73PQ6HIuhut1yd-MzmtoAwCpvI3Mg.zd8hk4AYxp76eoCpC6ovI7lHfKtQa5_pOzDDYtAjXc8g.JPEG/KakaoTalk_20250825_155606772_02.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfNDMg/MDAxNzU2MTM1MzczMTQx.1BeZwV29kJVpQ2KdnNXaM80UtQu4juqY4GJ-pZjY9-Ig.VDh9kRn55YSQvQQ2aMeHqGgWzV0aLGdKw7t70O_2y24g.JPEG/KakaoTalk_20250825_155606772_01.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjc2/MDAxNzU2MTM1MDc5NDE5.BcmzjZReGzrIAqSAlBP79bbu8CzUkV-iU59ZIXwDqx4g.THhK0S7bUS5weCkunvQocdWU7ReXz3vX3VLMXEBmRs0g.JPEG/KakaoTalk_20250825_155606772_03.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfOTkg/MDAxNzU2MTM1ODE5OTEz.edlabI3tC-Gyh8AQqe3icS6NqwBdZnoV2sWdsv2P3Z4g.6rvAnESEuZbxOEFqLmushPAe5xKJzSAeCR5CMXtm9EEg.JPEG/KakaoTalk_20250825_155602823_30.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjIy/MDAxNzU2MTM1NzU1NjE5.RsNoGUtR7uxCHGDQiw8pkxcG3NBJ9oHyvARKexjBlWog.aTtG_n2wtikCOv5DRKyulDStGFlftDXAD7LD0DeResUg.JPEG/KakaoTalk_20250825_155606772.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMTQg/MDAxNzU2MTM0MDc5MzYy.msGdYDRGjDttLv6Kvy_pSVHx6V4Z_TKFDqOhtpHoBQEg.VWL9GdiPqx-vjGKbIMZkWAEbeAXasQaQwKfGh9l42KUg.JPEG/KakaoTalk_20250825_155606772_06.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjZfMjgw/MDAxNzU2MTM1OTE3NTc2.l_nt7wVFlEbP1ttpVRlo2oglx3wmAobrGJnYNZHIhvcg.INfkr04F4XvlCbP5FOcEwPa_xq0HDTMN1yYg-FjGqxIg.JPEG/KakaoTalk_20250825_155602823_29.jpg?type=w773' }
      ]);
    }

    const existingImages_k165041631 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k165041631'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k165041631[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjQw/MDAxNzUzODQ5NjMxODQx.a9UiiR2evv99fpHnr5gPVhF7W4jLvQMNe0xmWrO00I4g.amFCnu5LmSe7NQL5P3yE0M26lpFhS_FKCIAiS8v_veYg.JPEG/900%EF%BC%BF20250219%EF%BC%BF192217%EF%BC%BFIMG%EF%BC%BF4904.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjQw/MDAxNzUzODUwMzUyODI1.xbY4-WpCAuvJensPzNpptr4CPjIw37FtdeBjWGjp-isg.yk-8tOwj4_xrCHmZHcJmEXS4YkwWrLFy91b3aCxBhJwg.JPEG/1753850343910.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjc4/MDAxNzUzODQ5NjMxODEz.-_QZObdxvgMprto4zzpgNFKc7MjHU1xFYijPnu_5co0g.64ERl8eoFdR7VbbnJNvFexsa7fB9euDHEYR4Uf3wF6wg.JPEG/900%EF%BC%BF20250219%EF%BC%BF192543%EF%BC%BFIMG%EF%BC%BF4911.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMTk5/MDAxNzUzMDE4NDU3NjUx.cWZeTAWW2fCKV9V8VChzxKbUJeZgWC7aDNr74vdWeOcg.hAFX6Iau6FeUJmJQy0c4xj98a00aRbJt62e0FzdCOe0g.JPEG/KakaoTalk_20250720_223349835_05.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMTAw/MDAxNzUzMDE4NTI1NDgz.b31794hOVl-E6wnmYTBkLHaM1BBqc9VMXn2_LnRF9H4g.1clFo9Yw03F_SJTffFPpur2gdoldjx1Km6hMMMfRMZog.JPEG/SE-424f0988-b499-4d07-8082-a8bb27e9fa22.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjBfMzgg/MDAxNzUzMDE4NTM4MzIw.lOpf04rkH5NQNImYzpDFVDtYDuiizoGEdCOdvVEXgJEg.YvSCyhwVVjfXHeuAuMrp1lWKMjQizPMTZl9NAVp2JQMg.JPEG/SE-73b093bf-0a6d-4fde-a7ee-748e0e4c7ddb.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTlfMzEg/MDAxNzQ1MDU4MDc5NTYz.yt7SHwi98qNkE369ajDTZkxZFxqpczi8hYmymzaMVT0g.Vck41_1vOjJKsfoE2TmKTHrr2pj6MH0WH2HpWV24sUog.JPEG/KakaoTalk_20250418_070425248.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTNfMTY5/MDAxNzQ0NTU2Mzc1NTUx.LnfZw6Adfm9b9DtrJCJtqi4MgrIJvYmHsHw0_M-Q-Ykg.FOoESjdDgO3HBHHpuZNs8nFiyZf2OaqXc9f0HUsyVx0g.JPEG/900%EF%BC%BF1744555979729.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTNfOTkg/MDAxNzQ0NTU2MzcwNTQ1.swYOMft7cSyOVg97kGNdoNafaN-5IuLDLEUd3eig4vMg.ZHD5FZVRk33I0uWJDvvCb5Mzoj9z3FEC6jJNEs9hw98g.JPEG/900%EF%BC%BF1744555760818.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MTNfOCAg/MDAxNzQ0NTU2Mzc4NzM5.4a5xEZDr8MrCCf7u00aVMYEGMouYFzW5w2SDJiZKJ2Mg.-Oim48IaFbf5GLDrK51g1g0hnYrybCHZ9Lervvw6gnsg.JPEG/900%EF%BC%BF1744556352966.jpg?type=w966' }
      ]);
    }

    const existingImages_k8401833 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8401833'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8401833[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/c5af3e392470a96f925b180c6213fe10c93cf633' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/ee8ded4705c7173bc7c73602ec7eeecdf8355d17' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/0950f65b103c31977c694d95c808700e5ba77a1d' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/b1c79ff5072c4cdb665b0c1a7b626c62cbc69297' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/330b7b582a6101859df69f84c3667a60b4802a11' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/bbefefd42df494b016d0b3da4628ca18c3acbf0e' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/9d6b48cad8fb17297a60880f64ebc2ffc66fce6f' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/b215d3f547a9a09ea0d18b447569046a78026aeb' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/1e476c5addaf1edfd2ddb1188c758c663e714a5b' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localad_thumb/t/ebb18b82198040a9bffe674cae3a9a8c809314ee' }
      ]);
    }

    const existingImages_k8236529 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8236529'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8236529[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/05F40A2D8C5E4CA2B60093432D1C798C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/place/A5CC3F56191349AC81328D55DF913CC7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/83CAB3E99B7C47FCAF0C1753C6085D57' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/8E15A23725724FE3AA84048D6F5A83BD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/3223E14617F74B31A116E698B774318C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/EF9774206FC346829C429CC0C80E5FBE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/32a0cdbc3fe06f1fc1bec062589c08e258ea0b4e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6fe2919c5cd7dd7c983bad3075ae7f937cbc5f5a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5205b7fa1ce1189fa4da67ac181254928234e91f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/087486092cac837d0ea4f2010b1f032ee9b333c4?original' }
      ]);
    }

    const existingImages_k11834459 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11834459'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11834459[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4c921f113d0db24398be99f92310ecca38129e76?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa6c46111933ed586d43439cef0803bc18b1dbaf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5e8ded4a15cfffcddad0573e4d37a22a10eb1427?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2284edb55e8ee9d6d8b03527810c0e2763273e65?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/79c39bfc6718767e240581d493ae3aa2bbc4c223?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca63c164bcf40755825003048791efe122a01ca2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6f926867a4998d5853b27a2bb1b4e35acd39003e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9631872520dd306a46b11ab46c7e14b9f2e1aa65?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/031c62fc888526e5e193b52df516e259d22b3e9a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4f1c8e1834e6468d2b04a4fc0d916be45be803a7?original' }
      ]);
    }

    const existingImages_k1190456459 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1190456459'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1190456459[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/acd291e78f87a6baf3e437cb49e1768c87a7ed4d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d004171fd003b8e08daaada65db6c78d82a36820?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/64b73ea58abe4e66f7919a3883eea69a3d4674e0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b85035726b210f8b1b8efc1aba91aee33cc02ebd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e54f822fe54220d311974e8f7fe9a7694f673054?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/80aee2a75d3ea9566306ca70df04e79efc160eec?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/03ef0f71e90ddf461e7a03c1c0f0fbfe797e08ba?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b8d2169585e880ab95581fa0be30b93b30edfe16?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7163269d4c8b07cc289105771447020617686355?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d8d168b1aea18035d71f47b365fff5a6b02429fb5c1036efd727825f84a39f9f' }
      ]);
    }

    const existingImages_k7977614 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7977614'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k7977614[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33046a2a8d4ba154abda8d82cda47b66b370f027?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'https://thumb.kakaocdn.net/dna/kamp/source/rvf475nt4tjk363p1os7o1tz7/thumbs/1.jpg?credential=TuMuFGKUIcirOSjFzOpncbomGFEIdZWK&expires=33310744085&kamp_tidx=0&signature=ZSDQOwDj7%2FSANxOlMLe9nHCoIp4%3D&ts=1753835285' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3d9fbcdc07c8652b3639ec9eed086a26b1e85b16?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6e26acbc4f197a09336eb269cb95d732d9c4229b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c89e5b8ba50f88b8381910c1764f9e79a0c5e41d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e66cac86f1d976845fb2765acb686dc0fbfd62ff?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7a79fbb7bdc28267a502927f78ef26aa399735d9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b9c48963fcfe49538b130aed019c831784f4315?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e66b67e82101c58c800b0b52e74983996fbf13fb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7b9a9929970f7cac976f779a355dd26f6cfdb509?original' }
      ]);
    }

    const existingImages_k26602406 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26602406'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26602406[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/8B0CADC9D15345C6938E50F331A63414' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/21421510D279481BA5E590A939A34151' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/6441DE7A451543DAB5885FA2073F0627' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/68A703E2FF8F48C482F4B73A95FDF90B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/52DEEDDFB36043C596CA309504B91A3C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/064452869741420BA281A72181702BBA' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/98091FF1090641DF84EFAF5B7FC4FA3C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/A911C55AE6F24940AC94AD2313CF71CD' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/315835AA824B4806BBBEF3D2C488A4CB' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5E26A6CF23BD49219BAE6DAC27165C72' }
      ]);
    }

    const existingImages_k21254211 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21254211'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21254211[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/999f7746d90be8bca7445317e98877c76b8b3662?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bc70930e4605a9779cdd107876e2e959980a7d26?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7da8642a6a574bdd04aabf127be3a8ef302ff8be?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/95dff6abf80378102b3ee5f474325b6d42b0803a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/098e1996bb8f9be6fbbc79e965f06095db96ecce?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/547c64e9216d0dccc290569a7d5bcb424664dc4c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/03411cb60dd54d9efb06b2d1791696d0a090c4bc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c5a62f4c99b55fdfa04bf26f4620d36fa5d9d5c1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d306106dc69777038f4755017937c5969a9284985aa1f489b46eb2e60d32b767' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c26de1ecfc55b82ffec5601595f11062a47362a4?original' }
      ]);
    }

    const existingImages_k26805337 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26805337'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26805337[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6d17e93320f8bd6162b46fd5aa1189f08882c876?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/001e9c4ff65d085a5495bfa2c235ed9976d9064d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/27f3f8b05460eafa03938b1f75a3a95bb8b7fb5c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c7cd115fc208cf72668441e8e21d73c00f938bac?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1603b89fdfd344699c28d367c9dad7ddad652d66?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/36688c5089e409b4016147ff445957359ca4aac4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/803a595f1206766ea62fef8cdafeabad3c3cfdcd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/44cca08dd9b88cb2e9184b443d9cef0f8ea8f4b7?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5058e1de2b72e45ea4d213e88f7ca58d569649a8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/45fb3cbe72d545405df9becddaadc439d9214448?original' }
      ]);
    }

    const existingImages_k16693198 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16693198'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k16693198[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0D653B19B0CB47FE8E2E0C3B0C170800' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D10B7B81BDFC42709ADFBE91FF0C8666' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/93ba7f83886bca3c49cff0ca43e249c0ff0265a6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8acbe5114077feca7daa91ce03ed08c15ae82d03?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bf11b4665f58a1bbdfc47c7339f04af99ba6e5ae?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c55b61466e930247d8e089b1c0e140c4502251a9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/11ecece98ebd8df178b1a15e37d1a072258a1bd4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a899ab159cecdda07f9c671f1baa140ad5dd8c29?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bcc87bb3bd5250f4107a260ed7442feec3de523c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/636ddb2a10dbec8ff90f9f83f36128826f511f93?original' }
      ]);
    }

    const existingImages_k11070314 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11070314'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11070314[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTFfMjYg/MDAxNzQ2ODg5MjExMDEx.Qrlja12opyGCzmJmeTL9QBgeO6uOJ4d_0mE96VmKiaIg.kxa1m_V9XFvKIm5hELX8a7V1ftHrxHfL_uUu6GjKRrYg.PNG/image.png?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA1MTNfMjky/MDAxNzQ3MTE2NDY2MjQz.Ftaod34sVz1QGnzUuMGKXL8hy0HVurYcWUf2PE902qog.yRPQ27-59d4Ju_sWwUsse1rnUKYW59_JEN0PTkctse4g.JPEG/IMG_1172.JPG?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA5MTFfOCAg%2FMDAxNjk0NDE1Mjc2ODky.ntAvJixjVQOXnpJ7vMKUercfBxy8LLbmi31kY6k9xzsg._yweAJteEOBrRpIuUSpB4Cb0mNMV6ZzsANiU2w4-SWYg.JPEG%2F2C0A5083-D861-4AAE-BF60-8C76E0875176.jpeg%3Ftype%3Dw1500_60_sharpen' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDJfMjEy%2FMDAxNjcyNjY0ODkwODQw.8yDZCbgOA8TujIREFRQz1joiIBHPrZdqLGrPmrtKTm0g.Tihczf8WM9Z3yB62aZvIIh8BV9ct44bwmZKJ9wJFlS8g.JPEG.httryu0%2F20230101_173348_HDR.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTJfNzAg/MDAxNzM0MDAyOTIzNjE0.bGM_VOuCaJgNya_XuIN9MyMuJU73zDc3KqOdiSfrQdIg.ul8mdHO_dlYyeEMbPdW2Tvp56HpTr_mJ_8-CpirZOMsg.JPEG/IMG_4208.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTJfMjM0/MDAxNzM0MDAyOTIxNjY4.2RXy6IAZWZT6Cx363nvPKKGapNTqccRI4vl4vdpx51Ig.isR5hrj2oxFQ9YhQHpHEYCkCFd8zUd5UBdwPP25kcFog.JPEG/IMG_4210.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTJfMTUg/MDAxNzM0MDAyOTIyOTE1.RFHHH_QnE07jQNzkV_Fmr6PgG9xpYD9nUdCePnZjoogg.1JLoo9iCUBnACQiZUo5HMWVi3nJfhRuBqTp-eHldWigg.JPEG/IMG_4207.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTJfMTkz/MDAxNzM0MDAyOTIzNzE1.7b72QFxSA_NZfByLw0ohYPC5qJKyoMzSOw7bxy76ntYg.YlaoB-R5FeVErR3G6Qcki4Sx0kWQHcf3P4XU2bjobIUg.JPEG/IMG_4222.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTJfNDQg/MDAxNzM0MDAyOTIzODAz.YUKo957k3MdRa0xHoPYnqwL_br8cWas8lFiWxgA9ikAg.8KKVPP94xZoS45OcZzSuwy022YL84daef7Y8dhJrcREg.JPEG/IMG_4221.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNDEyMTJfMjA2/MDAxNzM0MDAyOTIxNjE2.tKAOAKv_TAtSWCL4JxpB7UAvpxHFYOj_4UQX-JylzMIg.L6Z3FacGSrcG9mTlcQZy-S9XQhgdF-LtPv9dfE4ApOgg.JPEG/IMG_4209.jpg?type=w773' }
      ]);
    }

    const existingImages_k21513162 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21513162'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21513162[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5a6c29f7f6fe7de86599ad518c4d4913fe7249f8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/22c2472af3844a79a9f4743ac85060b2fdae86fe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b97dd6bdd65486a170caa533a074fe368def0b57?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/7c9db91ce43b0b8c44fcce297be8903d30d281cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/93c66498cb6b3d3943031fb991f122cbd8a672c8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9d7600ba9aebb0a8963889a6bb5a4541ea055d3c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aedb6f9a66269c15048befb3bca3d27644f2f39f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2b46e0a1f91c587d6275c5404513ff10e2d9da48?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b76b534b90911ed3aaa3dfaef514688ac2c5d4dc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0268436be34d8cd9a6da76ef44d0d686f66a3564?original' }
      ]);
    }

    const existingImages_k8708867 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8708867'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8708867[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjRfMTM3/MDAxNzU2MDEzMDIzMTcy.WFVOuWXiJ4ToPBfEbpIMIXbJsZTAaRaGU1KNr4Dtdfog.kJSKAVYyhZHSKxtCDbQ5NKrlbC3D6GeCIpwiRYVWrUkg.JPEG/20250607_121145.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MTFfMjg0/MDAxNzU0ODkxMTkzOTMz.xZxfu_s56QeVUd80e5DI4STiPTvyLGHGybJ7b63sxScg.w4Cuc273IE8jn7SLwlA7nqANTC7UD55sButhaU9RGjUg.JPEG/SE-33224a97-51fc-4b82-98a1-1ee5e06e811d.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfMjI0/MDAxNzUwMDg1ODg4Njg4.o_yJNj1f598yzuG8dIcS67waWk85vNpYitn_aRqehjgg.KuwUZGoHV8Akp7vJAZsnOGVnuW9KUz6AG1B438lMur4g.JPEG/900%EF%BC%BF20250614%EF%BC%BF104421.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfMTQ4/MDAxNzUwMDg1ODg3Mjg1.ZKhl08hEcGuo8oC_DF2rmW2jL2Votgn3UJl6EYySkeEg.M3PXORLZ5znmWUsMSErKptL1tZlZFO1Yl2wqyW1Lk2gg.JPEG/900%EF%BC%BF20250614%EF%BC%BF104501.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTdfMTYz/MDAxNzUwMDg2NzQ1ODI0.QKY1FvXt1sF9Ac3xZB7xrxcoTkWf1GJOAiL8JzDAoLog.qxCIzA25zLJ7H2qmxu14UU1RFTtdgALMREKroaDfDTsg.JPEG/900%EF%BC%BF1750086510595.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTZfODQg/MDAxNzUwMDg1ODg3NDc1.LcR07OI9DwBU6ceJlJx3YGZqOOZI-T2lTNMO5zGB7k0g.RsnVjpun6infsUtb9Rh0u8f3QlxGH5UIEqkF5hX7H2kg.JPEG/900%EF%BC%BF20250614%EF%BC%BF105007.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MDZfMjIg/MDAxNzQzOTM5NDAyNTY5.uLJ7gqrvbcUtgme0PLTFa9clY3pMEF7Kbb086CQf0EEg.1cGZnwyWw3r_JvfI61lQSQ7HEqBKgWM-Qj8_vqH4JVYg.JPEG/900%EF%BC%BF1743939401673.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MDZfMjgg/MDAxNzQzOTM4ODIwMjE0.hj6XGyoOPmpGrYDRLRbdDosRcKFA7ah4XUyJhvRkXXkg.jZluWtq0xzu-RAmUxKk4KawJJ2doOipf8tYc2HLCbl8g.JPEG/900%EF%BC%BF1743938819164.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MDZfNTIg/MDAxNzQzOTM4OTczMTI3._YfdwbNahoTUhkDJNZGLRWin5f5ozsv0PeiLSpHz7wEg.xwRG1Vxk5mFNWp_Jd_UNbaUxLSw-uritqyk1KiJr1Zsg.JPEG/900%EF%BC%BF1743938972293.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA0MDZfMTI0/MDAxNzQzOTM4ODY0NTAx.45ECKU0AD_4IIEVA17yIf8_0tObpSqLgglMHKWUZLTQg.AsUosU-dRL4S8Nl08ekSTyTIjtnLy1VFWviVJLXQfEsg.JPEG/900%EF%BC%BF1743938862809.jpg?type=w773' }
      ]);
    }

    const existingImages_k2003940571 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2003940571'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2003940571[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMTcz/MDAxNzUzNDQ4MjY5NzM1.VzgHFjCfPrYfdvB5riz8_PbOkdLczFJ_JH3nFec3nFEg.12eWmCHSrNZ4w3OrHIRCkTpYJ81-zo0rcaO6Q_L0i1Ag.JPEG/900%EF%BC%BF20250603%EF%BC%BF180045.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfODgg/MDAxNzUzNDM0Njc4OTQ4.Ac9N4XaCYq-baZ2S2LTdqXVCMI3SlcWzFqjVk9JkJ9gg.c3j6_cuSqfxP0B1DtYORYX1fLdtHibfesYqjXBhO2tAg.JPEG/900%EF%BC%BF20250603%EF%BC%BF175924.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMjE1/MDAxNzUzNDM1MjIxNjY3.uoUaDWOgdP8sT0udWxCiBNfXadOZNpBJ47ZD6UUnQUAg.P2q5hX1h9rIkzrnc9PXNa4ktKS1bkTL6dHLhRV2bVM8g.JPEG/900%EF%BC%BF20250603%EF%BC%BF175909.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfNTcg/MDAxNzUzNDQ4MzIyMDMy.t7_unGp6t2fsfgGjf-ep4jRAmXNLKCV3qQiydvshDXcg.bqEcycdo9_fyzA24n3EqC00OM448XpL-f3F_HMT8ck4g.JPEG/900%EF%BC%BF20250603%EF%BC%BF180037.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMjM4/MDAxNzUzNDM1MjAwNzcx.h68xg7PH5ndUFLr4QeXZdKuxtko4Gc-X-4h3uoIelPUg.s7FYsZZxMl_7IOYct06x0C5_KaOhkLcc4OqiktPsel4g.JPEG/900%EF%BC%BF20250603%EF%BC%BF175825.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMTc1/MDAxNzUzNDQ4NjMyMzAx.aKXaXwBqRshuB0tEnwURaCUeRbSQLxqqkuvCvnMQV1Eg.5wa_Fd2NCYPlh1a1bGzF_98YR5aTZBC64JpsIxfm5Esg.JPEG/900%EF%BC%BF1753448631317.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMjk1/MDAxNzUzNDM1MDU2NDIz.QLv3MIcHXD6fGgWlYe8TBfHmEJ2KAwTVyu2owzanHTog.ZhXdkhyXB-E9JJ_tUGJRjhGgdTzw2KVb3cLx76hYfMwg.JPEG/900%EF%BC%BF20250603%EF%BC%BF175839.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMTkw/MDAxNzUzNDUwMDM0ODc2.ZN0HbSa7_GZg3E_JpMT4F4dPh9FdAYRRgQCXMqKvk50g.WTy02YJ0xZlF2t3kWE69ZpBL_rbA1tT0HJKkiDKZeT8g.JPEG/900%EF%BC%BF20250603%EF%BC%BF184341.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMTQ2/MDAxNzUzNDUwMTIwMzkz.gpz47lBA0I_RgqhSMYSZisNYsJdpUVEPF3wcoLtDDTog.uKs1-LUL9gzLZc_VX26RS94r4KsCj89jh10tXmGGfk0g.JPEG/900%EF%BC%BF20250603%EF%BC%BF184422.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjVfMjQ3/MDAxNzUzNDUwMzA5MjA5.Vtxd-KaPKM99fv7ZwVzpLIUA9KC8mf3NLyz0xSh7q9og.v4uTDXRK_3vEAiFdMGkH8LpBKrvVfUjBrd5Y8UMRbF4g.JPEG/900%EF%BC%BF20250603%EF%BC%BF184501.jpg?type=w773' }
      ]);
    }

    const existingImages_k2007353666 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2007353666'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k2007353666[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/5AFE78A5336148919826B6092179F80A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/14829265ED4140FCA840164D78B44DBF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E50CF30ED31B46888B9A33BC2B525B5B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/2DFEEDF926984B77B97BD737DFA8BB51' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B8742EF54B814AD18B117B3200E72156' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BEE6E3823F0F4488942114DC7A2C0B97' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/45F5A4A73333497F9FD04E3B0D4D964C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6B781C8C365643CC8782EA0123F10D17' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D5814BE8BAD349B4913053DA54BEBEBE' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6FCB1407BC4E428E814FD262FD34190C' }
      ]);
    }

    const existingImages_k1831065736 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1831065736'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1831065736[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CCCAF3B896A34F30ACD58F1AD0D971D5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/010265087BA54786A990F84B33BC1727' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0D321DDFE3064DFDA1B96E850C9643F7' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/68236C240ACC44BDA74F59FDD62816C6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/D8C71AD087824F13B80CC932B500F1DF' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjE4/MDAxNzU2OTA5MTYyNjIx.JLgysaAi6y1CqMRB4IA-La1HtyEN9wlMU46mHZ781lUg.-ryjeBzH1AsLpEw2n_he9nve7bnW5BOZQKJ41jBBzmMg.JPEG/%EC%88%9C%EC%B2%9C%ED%98%84%EC%A7%80%EC%9D%B8%EB%A7%9B%EC%A7%91%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C%EA%B3%B3%ED%95%9C%EC%8B%9D%EC%9E%98%ED%95%98%EB%8A%94%EA%B3%A0%EB%A0%A5%EB%8B%B9_(6).JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjIz/MDAxNzU2OTA5MTc0NTQ5.Vd9n6GrTHDPXVLx9U79ZXOGJTo2BkKF4D2UCi-0nptAg.0TeutWey-iW3ngyJy5UhhNUrIcKLFMuKk5y7u2awscMg.JPEG/%EC%88%9C%EC%B2%9C%ED%98%84%EC%A7%80%EC%9D%B8%EB%A7%9B%EC%A7%91%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C%EA%B3%B3%ED%95%9C%EC%8B%9D%EC%9E%98%ED%95%98%EB%8A%94%EA%B3%A0%EB%A0%A5%EB%8B%B9_(46).JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMjMw/MDAxNzU2OTA5MTYyOTIy.QfhUcfmJxSsnHi-mrW1VEV9rceYm-dgz3K5eO1DsQ20g.cehCvOvfxLmkon2mSwlzziRlBGjXTQ-S9KnnCDeGIucg.JPEG/%EC%88%9C%EC%B2%9C%ED%98%84%EC%A7%80%EC%9D%B8%EB%A7%9B%EC%A7%91%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C%EA%B3%B3%ED%95%9C%EC%8B%9D%EC%9E%98%ED%95%98%EB%8A%94%EA%B3%A0%EB%A0%A5%EB%8B%B9_(7).JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMTkx/MDAxNzU2OTA5MTYwODc2.SOwdwkUiKcQJSq6zYb3FX96uM2AtKDANVxRvh6JVYzog.2ky6yJA-z0e5AM6q6TYcYNeKrCMOrD-wHsBjb0xGMpMg.JPEG/%EC%88%9C%EC%B2%9C%ED%98%84%EC%A7%80%EC%9D%B8%EB%A7%9B%EC%A7%91%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C%EA%B3%B3%ED%95%9C%EC%8B%9D%EC%9E%98%ED%95%98%EB%8A%94%EA%B3%A0%EB%A0%A5%EB%8B%B9_(5).JPG?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDNfMzgg/MDAxNzU2OTA5MTYyOTY5.dJ4O2W8UHI6dsEFbYh3dGrjBJ_hsHr0RmN_gualPGZ0g.K9wIMZhA9OARHU5e5IJzZqfuORPmUFjegYSh74ywaekg.JPEG/%EC%88%9C%EC%B2%9C%ED%98%84%EC%A7%80%EC%9D%B8%EB%A7%9B%EC%A7%91%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C%EA%B3%B3%ED%95%9C%EC%8B%9D%EC%9E%98%ED%95%98%EB%8A%94%EA%B3%A0%EB%A0%A5%EB%8B%B9_(1).JPG?type=w386' }
      ]);
    }

    const existingImages_k21288807 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21288807'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k21288807[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/99b79ebfeb0cbb87735cf1fc589793f66a6d442c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/134b6f515fcb2f6c9b3413488dfa1450648076bd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/abf3130800d7d0031e021fa7736a263764b58c4a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/45b9de8f8cf6d0534ee5eee7da81ebee9d8d4ac6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e926e1255ea93c84387d57b00f2a252c3d34857b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c2bd10d019f9f34e0de7fb8fc177db48fbdcae81?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/M2rWi/btsPXCatGCh/cfmCxyGkK3x5uDGENErjo1/img.png' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/bHsvoK/btsOWjJCmgK/9Y3PrXQDDdjLe7cDi0q710/tfile.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/Yws5v/btsOVH4ZfXH/aQYUvyKR3rE1iOWOMkw0NK/tfile.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`), img_url: 'https://blog.kakaocdn.net/dn/ItpOH/btsPfK8MKtG/IXfskDo4HvwGYMidtD2KNK/tfile.jpg' }
      ]);
    }

    const existingImages_k1510491255 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1510491255'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1510491255[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/6FE1BE0BBBD4447881A77043511DA04E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/EAC996D3244E474384C4D645E471D44C' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/8F40BC96E0C34573BA90BCDF0739F9D9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B2E0771C0DA44CAB8E8EC888F34A88C1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/B7F81158D733455395A8A9C8449AC89E' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/75A0F3ED147649008D871AD28B5FC491' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/11B18A596FED496EB35AEEE7268656E5' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/place/4A815936613E43059C4FECB7106B0BA0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/76B5131B97AC4201A95472445F3AB154' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/04E28CF2BAD74734962B2E35262B23D4' }
      ]);
    }

    const existingImages_k9026794 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9026794'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9026794[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f3513f27cc719f6efc007c23280c69964f3ca935?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b420e7ad2ae5a1fc26a757e6fd0acc2431f09f52?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/863f1460cbbef5f42fa8b4009ebe7f58403c05e4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/3ec0468c3d73cecc4493d879d4a41833d59d3500?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjAx/MDAxNzUzODM2MTE0NzY4.c7neSx5aMhB_qmyK-_E58PImgArUQMRl4lmuBruo59Ag.1YR2v7gsLU5t8Cs9H-Rsw9yQbzsSSjKmbLeYkbW5ijcg.JPEG/900%EF%BC%BF20250729%EF%BC%BF150021.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMTc1/MDAxNzUzODMyODY2NDkw.xoT0qknloZmZRye9ds7aL17KPLfG_yiFQCUu6L8XuFwg.ti7sBbZbd5DhwKnRwUVkoja7q4sOmIQrDQpNmrL_9zgg.JPEG/900%EF%BC%BF20250729%EF%BC%BF144626.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfNCAg/MDAxNzUzODM2NjE5NzA3.JvIwrOG-5uIYI_rEApOv1ARWaVIO_G4cAJY4xJxmI_Yg.K6phlUo6AnwieZys76pcBOHuCGum-SBipROjnBP26VUg.JPEG/900%EF%BC%BF20250729%EF%BC%BF135716.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjE5/MDAxNzUzODMzMTU0Mjk3.1Yyh11rs7IEJD9CW2RPKXinKUl1hl8dMNjy57dou4sYg.QLC8dAxAbeaWivF_bTxpytpb8t3S5PO8eHO53gPPgkwg.JPEG/900%EF%BC%BF20250728%EF%BC%BF141924.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfMjMx/MDAxNzUzODM2NjE3NjQ4.IW_6W-wQqDSsDc--Ql2cldVuW4BrY7BizAXvKPEJn5og.Ksn7uuffK8J7c9hewXC2Sk2zT_d5UyZQOLqr72n-L-Qg.JPEG/900%EF%BC%BF20250729%EF%BC%BF140052.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MzBfNjAg/MDAxNzUzODM2NjE5MDAy.HnBQEFWvhtH6M8Gtz7-gtkJgAGZKt6Gw8K8aAFEAy-Ag.xpSksHKEMCqXlq2xMVj49TlOQY1EAhpHUg47aTG8tRkg.JPEG/900%EF%BC%BF20250729%EF%BC%BF135818.jpg?type=w773' }
      ]);
    }

    const existingImages_k8815351 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8815351'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8815351[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/18489B3E4F5AF6BE10' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/cfile/1147213E4F5AF6BD0D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/113CAA52877A4D2EAC97779767E7B873' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/localfiy/9DFB0D56C53E42F6BC867DB38396BB46' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/5C684759BEBD4515A03976A491901068' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/874f05fa31ce41e30610307e9ff1382856e73ad9b33b9953c980a518658e6f01' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/525ebb40b4a40bc865931a284b6824dac79156d7a68ad1c7c845c61314093c39' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyMjEwMjhfMjg4/MDAxNjY2OTU3MDM5NTc5.eZ1kY4wGS9z-TBhi32LSPcWWvWuE-YqClHfm3J361IIg._PbZeGhEv0NnRPPG5hA65aT_bKKDRGNot480AOtDO_og.JPEG.suhyunjoa2/IMG_6598.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff7294098070faad48fdbfa7f92c236d10690839?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f2ba6cb0594cf3957bfa2a7d0151a70a0dca1f8a?original' }
      ]);
    }

    const existingImages_k8402093 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8402093'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8402093[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcOqsAT4y_42gLoiO5kb8nTXXWbqkfe1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcOmqcbVb_KiTByIu8HdvawNZqvKAnd0_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcOk0dG0C_aATbx9jXVv5lE0wV5YdERK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqcMVfwgXu_ISEc5QLpJVWC8hbro1vHfk_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/oWaiAFzweg_ChkZKjCm38qnCg2XNV6l31_lkageopuF54.jpeg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTMy/MDAxNzU2NzIwNzE3MDIy.NM9l7RHXOw6XF8E0aC02abRgPXKBikeKqDQS66EeNGsg.3SKJL-TjJAUVdfZHUxXKvlZN1rvO4H6-p63TmDvjQn8g.JPEG/1756720715838.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfOTgg/MDAxNzU2NzIwNjY3NDQ5.ONsuL60rAyV7kIrtcyD1G9nNvlJ9aHz3rcCF5a8vG7Mg.Xy_QvMnCQHDh9HqU5YvoeC-oA0hLzDpjzMq4s0JxvL4g.JPEG/20250831%EF%BC%BF105115.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfNzcg/MDAxNzU2NzIwNjczMzYz.43lSfsjQXCAY2i8ZbuK60KIYGyTFFjVdY4ReAgJG9Hkg.y-YpNbgHYO2W7sGAfh4p1uN33AXLeng7lO4PTGzYleMg.JPEG/20250831%EF%BC%BF113707.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMjEz/MDAxNzU2NzIxNzQwMTQx.jxfYEDydVuF0O_7em0vGSi6f_CdtylKa2wVLw0Lv434g.BIMtwe1i_WRgG9Bb6Ff-gL-HVAuLIZylh1hHyiGmsxEg.JPEG/20250831%EF%BC%BF105039.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDFfMTQ1/MDAxNzU2NzIxNzQxMzQ2.fLuSLbDwuCKdArh141RW1LLi5CffFos_CAE9r44BYcQg.CTUDiXiwzJK0vIpLRAiecKAGlqaocHEJNVVDMFPQo0Mg.JPEG/20250831%EF%BC%BF113723.jpg?type=w966' }
      ]);
    }

    const existingImages_k9756425 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9756425'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k9756425[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d5451c44a0361df6fb8933437d0a70922deac0f4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c06254b35d066f4e2ff38e5ef89508c06200798d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f6c8685aeffe265a56f92cb06c648fef2f771733?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjJfMjY0/MDAxNzUzMTc5Njc1NDY1.loBAryZi0Bd1bTNJ8vGQ_5jaCYYz6jQI5oyKQQgdq9wg.spSEC4_5fGyV4hOQNXwCiV8VnZvgNfx_75_Vy88Wy2og.JPEG/900%EF%BC%BF20250721%EF%BC%BF172538.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDFfMjE3/MDAxNzUxMzMwODA1OTkz.H9uGMBAqvzuAVJ0fEHTziwrjyJepM_9Oh8iwrRWs-wEg.jfxNC-u3wPYJYADlhCEri5ttfJwZiM-wY13grp0qBJsg.JPEG/KakaoTalk_20250630_011717972_16.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDFfOTgg/MDAxNzUxMzMwNTIwMzYz.3qxuxbRsOWgB55SZFjRakhlfSaGQEJxJnTNMfZEvmWgg.Szq-18REGEhzmcX_8IIhQrp52gtQjPjTOuCEan5w0cEg.JPEG/KakaoTalk_20250630_011717972_08.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDFfMTA1/MDAxNzUxMzMwNDQ2MjY3.6QWEP39aFQQO4OCciuKKyDRnlkE3O452EQR2sRwCvnog.swPfUncabhymOeZ30khV7W3Z0YD_BEtawiV67G00uYAg.JPEG/KakaoTalk_20250630_011717972.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDFfMjM0/MDAxNzUxMzMwNzczMjI1.ggimCQ_fIxNW8I0BQBJIPQ7nfctGR-dcaEnauxTGHfsg.oIl27ullZ4MIgZ5JluNi_sHY-SyToS0NhT1FH-hUcIAg.JPEG/KakaoTalk_20250630_011717972_14.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDFfNzEg/MDAxNzUxMzMwNDY5ODY1.qg_AbF0KBcHggb_Ub64etMmHMRc8KjAU_h6mhwX48bMg.zW4zFEDQ7slOceGIVzUVu1FCf47tgLrJNZXJg0ir4kcg.JPEG/KakaoTalk_20250630_011717972_05.jpg?type=w386' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MDFfMTY3/MDAxNzUxMzMwNzc3OTk2.moy4TINcedzePt_zsq-6pwi97RH_2b65dnxHdyRE4yMg.DpYb0xySJTky3q84-y3YrkSOr7tExX7yPk7lw8VacPwg.JPEG/KakaoTalk_20250630_011717972_15.jpg?type=w386' }
      ]);
    }

    const existingImages_k18062985 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18062985'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k18062985[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e9446509dede91face202cc630f875952ad1fa2b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0b8e9f6e820be508a4ae8fc463c145e97fefa214?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4759c720805406897d44657458eee040fe326b04?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/eb53c8e8c1a915435326533101e510421a3c5b87?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9ef806d15f3c21cf81c973aa80766bfcabd31287?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8d56ef49d2294a4964dd0a0f14e22aaf4516981?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8e1f3e2086a8b26bbc90db538018ec653c9c06a1?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f1310fd496f83599cf2330c7fbf24e78ecd047a3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b582d1283330d38da3ba2548139c1e529048c89?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d3ee52b0123cf5a5493f733776b89b8cf8085346?original' }
      ]);
    }

    const existingImages_k10379033 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10379033'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10379033[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b48574c703696307b0148bd7f16ec1cb90662459?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa9a08e8ce760b9fa83df9495b44d149e6479440?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/82079232d612fb7a7e43a57add59298ef3c33504?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/82cf2334641075901474b02724ca6dea298913b8?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/fa9fa065f75703c8c306f80fbcbe635798e0692f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/43c6c702fdaa44e4600f669fba444ecc35927233?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f66b1639f96935bfb5a790b8907214acb73edc83?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/cf698dfc9d7fdda9edd75d028c78b18072d044f9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4f0f742f8597637913e9a859c2461c606c15fdd9?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/9496113f3b3af00ec38b263e94694e0c47c6340a?original' }
      ]);
    }

    const existingImages_k8459058 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8459058'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8459058[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4d32f7a5251df4d7215453e6d99e18e9fcb678a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/747de97debc3b11deef9035159921432f1c27f04?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDRfMjYw/MDAxNzU2OTU1ODQwNDUy.z4uuEF-LDXoBGJVA_tSFBYgbagJNjnKzUhQKWmrxAkMg._FSnOGUZ2Q5QE-iPoBN7pAXJnsTXmOvq3G2JbGnpwE8g.JPEG/IMG%EF%BC%BF8649.JPG?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfOTgg/MDAxNzU2MzMzNzk3MDg1.Xn_eF7UNRpGnLueOREMd7bn5-pKf3lPK_XN0FeXuwPwg.S2f0vYsSNMc0Ivdqpa86S7I2RJGGujnLG4YdZMCng-gg.JPEG/output%EF%BC%BF2979423694.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMTkx/MDAxNzU2MzM0MDM5NTU0.rtdtZHLpEkBc4HwpZzRgyKecBZ2E-I0KL4nsx_CfKsog.XSGdBvCht2RhWcrYjQz7qwzBIraeJVCL1CdMjEVxShgg.JPEG/IMG%EF%BC%BF8151.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMzMg/MDAxNzU2MzMzODUwMzYz.baqeTAQwWkA203TZs-6ioI8g2leWO3P06K-5RmuAtWUg.xxu3CpKwgVqyAWj1IlXbuonmcQHgoF8NWNLz4HGfZH8g.JPEG/IMG%EF%BC%BF8152.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MjhfMTY0/MDAxNzU2MzMzODI0MDU2.iwu_u05hpvzPl0V-iyn8BqDcNn6pyDF_fA3rG1EpXMYg.Lq47eKnpoJLGjv52ipXjf3JkhUaC0CG3R1lQmPLKiTQg.JPEG/IMG%EF%BC%BF8150.jpg?type=w773' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDJfMzAg/MDAxNzU0MTE3NzYyNDMy.mtmPMMCdc2UkA-wDpH9NqkDbnRuYMJ2j0PnNS3UCnWcg.YfC2fyyxxXvLaYByBiDi5gw7InIzT8qSj7kIMIv_pdog.JPEG/IMG%EF%BC%BF4049.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDJfMjk3/MDAxNzU0MTE3NzYyNTc4.EMEzzpLldbj9bPnMbDgx74ppzWc9MCIYG4TdL1ZxE-wg.Ue0xV1vzY2Xe8Jup2YcgmdYYq9IMNTprLasOWLCAlFwg.JPEG/IMG%EF%BC%BF4048.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDVfMjk3/MDAxNzU0MzYwNjY5OTA4.YxjnkpVdiAYItr667sjxzI8Xui7dvXQ_JyFemmJIX1kg.CBv5UU3hpqYhNywTrtclLrT0S0BxHUfZeNqMRC0SCgkg.JPEG/KakaoTalk_20250805_111634155_24.jpg?type=w466' }
      ]);
    }

    const existingImages_k1626600322 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1626600322'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1626600322[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed6e452209d4c44098a2e30ec38668bf1b39cbe4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a72d8a9a5203b2f6c488a4640919a7c8076e191d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/58c2b676850f274484652f217fe5cd2d3b420ddf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4245d440b24a3fe908471548286a82a11343cfe4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2054ce95c14455155ab86fef95ddd0d2531d4cbe?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a3f517549104187291b54f28505bbdaee2e96a0e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e8474466e7fe916a4606bff8f2e67348e5cb3426?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/50f6b12e5269a5d8f8b74a3a85988310355f0133?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/48f37238b45cbe3fb03c5967a65450ddaa653c3d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ecde7d919f32e58fb1a02070aa3b4680adbfdaf3?original' }
      ]);
    }

    const existingImages_k10525877 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10525877'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k10525877[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b561086a058b693f20d78233ee763ace1ebff4bd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f838837ba5497f1482088c6f168a6a88ade1a36e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e080ca8956b0f40489d86d8eb554f6c17b15a9a6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b00769a51efca584d491901af24fc4d3b3b4079e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a7cb90d03a9a2391f6ead1d7510e59e222487909?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/766611754760320d1e1eb5b55ee69a30f9c8abc6?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f6e151fe15cca6a47a932e172f221fe9de3ef4e2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dcd1ecf8caba232b8cc2e4d43af3bd11137ce328?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/6c1834f7f2f6ddbe2e2ee2d7fc16f0a6ec772c4a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqfVVXvT6m_u96Rvpd77ko5U3w9njnQM1_img.jpg' }
      ]);
    }

    const existingImages_k8645482 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8645482'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8645482[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d1128ee37164ecb604a1ad50f22fe8fda1835d6f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/285c52fb5082a35976dbe2fc36dabe858798360b?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5562806fccbb3ae4c60337b52b90ee1fade83713?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/28be9d05a4c2726bfd8d9a9cf3b64881a050af34?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aac1d39689850c6f1c9b6b4c78b40a2f9c5fb313?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/5c01e8fd6bf22d7dfa719ed318ba0c3d24bc8744?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8a3c0fdddef199fd8c328f9471954197f22acfe5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1bf95a1d7fea28b78292ef1573998a2b88e09150?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8f58508af7c008ae88bc8336d913b765aba6f81e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ca36baf23d868bbaa62f27dd8ed90cd0206ec4a9?original' }
      ]);
    }

    const existingImages_k1704728222 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1704728222'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1704728222[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/1A8C838E6EAE453494DB0D8A3DE7525B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/3C584902038E4C1BAAD608A497A7A14F' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/AA2E84A96CB4454F9076E350D953A72A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9ADBE36BC6FF41FAAF8F8B10C20F237D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8219D497C87D49728854BCA182692FA2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/ABFCD513773342C1AE3E641DA44D44D1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/33ed007679e92c87b3a8c1cb08cc81b3b0fb3c13?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/72c9ecfb95e4e49a4dcafb00ce8230ce1eaa6ed5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/f4aa2313e3e4b608702eadc191c4caece5112d1f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/690bd5aeba785c5aaadb2e496c8305cb74f267d7?original' }
      ]);
    }

    const existingImages_k11039646 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11039646'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k11039646[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/fiy_reboot/place/8502FFEE669A4DCC8F4335A129634221' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTFfMTgg/MDAxNzQ5NjUyNTY2NDE0.mNvm2poO9p1rsM2hblBV0kheugsd8bKifwj0UdQR_yIg.XdKwqY5PH9SzN5cfZH0_YPJTfd1GvXpHVIGIC5xKSRkg.JPEG/SE-79a70575-fcd7-45b4-8222-2dbc74cd8981.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTFfODYg/MDAxNzQ5NjUyNTkzNjUw.fZyNEyikY49sQsDR8DONHO2e3zWu8fLMOOmEMXSY4Kwg.NpGxygOzagkN0GwWXFdi8FMxb9gClleRhsGvZIs5mUog.JPEG/SE-d60488ef-7d03-4578-ad36-bd677d746595.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTFfMTAg/MDAxNzQ5NjUyNTg5MTY4.FXe_5g1dUHeIJPQLQ0S7sSn371vkFk6HQD2m-vQnsMog.dElU0I6WfO6EEiqPInIBM4BSDM5z6EZFWBre8OEYVGUg.JPEG/SE-eaa7d482-2016-4045-b632-dd50e335baa4.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTFfMjI1/MDAxNzQ5NjUyNTc5Nzcy.HY2EqSUGV8_hC8kBLEP4lb5QwoMI40-tmYfOT8rRVeEg.-2T7rR_IKAWKCVtx-u5w7eCf9dOPIA7lMO6kVlLBC3cg.JPEG/SE-107e70fc-b43f-40c5-b442-0788b28a23e8.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTFfODkg/MDAxNzQ5NjUyNTgxNzUw.kJlsa9UgWwbOSJjfJ_xghRJ7GNSlv1VfKNcDCNoDpy4g.nsTJib5xiwbCh1x3jn6qb45Q7U2PpzHk0bdXrWZX1esg.JPEG/SE-7705fadc-2735-43e0-9b8e-a9635be60c1d.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTFfMjM1/MDAxNzQ5NjUyNTkwNzU5.GO-iZLn1-ciSkdTqge1a0NP6U6n47D2XHkeJth9uBGsg.-FkK4c-plv3BAy9XIBx_t_XY42OEHKBgo8Z2TgN1uqcg.JPEG/SE-ad62796f-0825-4b5f-9d48-bec1ddad4b23.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTFfMTkx/MDAxNzQ5NjUyNTg1Nzc2.g43Zu11FLo0KZgKJ7-oxj5DRg5kE9nRvEKrZlffO2vUg.NkxOiDFCdU-AHvp-m0-Yw3_kg9X9cYN2TNb86DW7kPAg.JPEG/SE-37d6e077-6f03-4890-aec2-4413cb1abbe4.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTFfMTAz/MDAxNzQ5NjUyNTkyMjk4.ZgUKHnjMR28fmb4mlMPh2xA1N7rDe8Kz2b8vczAbgnYg.EuuKifE75KdY1pokDx1gyIEy0oSR6yABZY5Qx3ORehkg.JPEG/SE-dea9588e-61ea-4f79-a00d-6cfb3ba20799.jpg?type=w466' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA2MTFfMTE0/MDAxNzQ5NjUyNTg0NjUx.D5uQWIcK2puJ5Yz_fGcDMn9MChqHUTUGZQatPxWsiUUg.j_-NSJM_XK1TLmOfzQhx-3OUVegzlkzKstJSOhKBBAYg.JPEG/SE-0e5c8cd9-5c28-469b-b86e-ad0903d684cc.jpg?type=w466' }
      ]);
    }

    const existingImages_k427123419 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k427123419'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k427123419[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/2141365EFE564183AB9A9D6A271AB885' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/51661d2dc594f2d32434a5d0da102b23871fd45d?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d64cffb6e853cb3f7326462d05b3715b386b60c3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/dbf7dedf6a9524dace2fbd4ff741a2115fc4f162?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ed6145f53858a6a79e214eaeea959aa5d6c197eb?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqq6PMr0St_2fAx9gbmw2Z6FZdzkQPLi1_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqq53K9I5F_Sdi8qGW6ZjujoLGtiSrOuK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqq526yCGY_rpxDXJUe6cSfFuAOrM2BKK_img.jpg' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d71df01a7c06f9102bafb2fac49cf17205903443?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`), img_url: 'https://t1.daumcdn.net/local/review_placeapp/btqghIwyrg0_KqkQyZbJiCBJAbrTMIQsok_img.jpg' }
      ]);
    }

    const existingImages_k8629568 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8629568'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8629568[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/394c982872b36eda4f2f490910450e1ea6d8f635?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/14737f4dab1a470cbbc76d4202ed0efc29ec5e20?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/8c33703acbbc9d3e39fe0ed2a4ab79b31fd9d3f3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b0bb6707c87c1c68930599c5859fdc521ca16446?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/c308dd6daaa3fb5fbd56ff6709890e089d06f2cc?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4497b6933254b7ff18291d3c6ca3537fef852642?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d95ec806eafa28425280f54c30fbc2e4b527d6c4?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/707810afc4d3ab9096b98fdd8e37f809277f5845?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2f02de61e1bf9afe0609921923ecdd344d9f005c?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b45729cb7604ac61e9cca48e40da6b4f9861de59?original' }
      ]);
    }

    const existingImages_k18062180 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18062180'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k18062180[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/4b423af38b0ffbb6c9c03dd10c55fa73ed73d3e3?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMTQ2/MDAxNzU2ODAxMTg5Nzc2.MXHJ5k_o3K4YwISWsoEscn-bJ9au1p3YYcWswMxCS5Mg.ZT7o2wiSK8k4Z8HgkSuxHZYHC18uTyYwmLq8QQ0gpi0g.JPEG/250705_%ED%99%A9%EC%84%9C%EC%95%88_%EA%B3%A0%EA%B6%81%EB%8B%B4_%EB%8F%8C%EC%9E%94%EC%B9%98_%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%EC%86%8C%ED%98%95_%EB%8F%8C%EC%83%814.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA5MDJfMjY0/MDAxNzU2ODAxMDgzMTgy.AAwp_5Z7-TqD7ghFjV4qvWV7FtiBk8PvP30vDvCDlOog.RA8FRKKD4e0axMTuttfaeXW5RZFndmNI6wZqPCOMW4kg.JPEG/250705_%ED%99%A9%EC%84%9C%EC%95%88_%EA%B3%A0%EA%B6%81%EB%8B%B4_%EB%8F%8C%EC%9E%94%EC%B9%98_%EB%A6%AC%ED%84%B0%EC%B9%AD11.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MjRfNTMg/MDAxNzUzMzU4NDg1MDA1.DjiIk9pne1zJkFMEKN1ufe7HjuyEuuuFOACdwzg79q4g.J4ZLltKXqixJPjgu-XhJrdhOB75AIfhl9TjwpvuToAMg.PNG/SE-f731a3ba-efd7-4b4e-aebc-3f7684cf6f15.png?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfMjEy/MDAxNzU0MTg3MDg2NDg4.0olfJffEm2xPSxPmPWKkovS7gQJ_3lFra7nYzqkaD-4g.4LG8SNbrBAFRGu3ukslZD4a7PJlByQ5WlP6AtJKjHNYg.JPEG/250531BSOH0049s_.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA4MDNfNTUg/MDAxNzU0MTg3MDg5NjMy.0IN9NB8lIcnwWMQpYkRGt-zyJOYPik7XPT2enyX7NYcg.KZ83NZZZy0ySSEi7VD6sygenZnYpRIe1htU0VanlDRwg.JPEG/250531BSOH0444s_.jpg?type=w966' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTlfMjEg/MDAxNzUyODU0OTQ3OTkw.DbJvyaj0UWRNz-I9KhVNisqHUQF8_gVS8xkamycfsEMg.gpgfxO7hJGhChcgkKN3LulFSt0Q1rHbsUnE4waYyboEg.JPEG/P20250628%EF%BC%BF113506362%EF%BC%BF88825A67%EF%BC%8D671E%EF%BC%8D44FB%EF%BC%8D9661%EF%BC%8DB21B37E2927B.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTlfMjA1/MDAxNzUyODU0OTQ3NDU0.dKIcMADLYJ74KIugoP5yN9SR_vMrTWeaG5oY8Xu9DMMg.HBQe4fSTYgPbGI2VIYuy5BjGjm8VGYjqv1xl-AKXqbYg.JPEG/P20250628%EF%BC%BF105656564%EF%BC%BF0D012B40%EF%BC%8D619C%EF%BC%8D4C89%EF%BC%8DAC67%EF%BC%8D279582E8541E.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTlfMTE1/MDAxNzUyODU0OTQ4MTc3.kh9g9E43rWB3kshlGBlrv4VggiUtL3qLJ9x9HOEAEMUg.kW0tredmqSXGFVW9wIMAHaxUNnRxvFMMhABVK-L6p6gg.JPEG/P20250628%EF%BC%BF105916163%EF%BC%BF5CF56F8B%EF%BC%8D225E%EF%BC%8D4B5A%EF%BC%8DBE76%EF%BC%8DB3FDD4DF10FA.jpg?type=w580' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`), img_url: 'https://postfiles.pstatic.net/MjAyNTA3MTlfMzIg/MDAxNzUyODU0OTQ3NjEy.PT_mf9zOah8JPp2JLtL0XqysSFI3u6BrwuAnEZnm8R8g.SlMEfFHd1tPcfbqpGb7e1tG_AWuhVv_JH4xKgSKGN7kg.JPEG/P20250628%EF%BC%BF105955000%EF%BC%BF2001BD9D%EF%BC%8D642F%EF%BC%8D4E44%EF%BC%8D8EDD%EF%BC%8D5DE4466D1537.jpg?type=w580' }
      ]);
    }

    const existingImages_k8374461 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8374461'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k8374461[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b9971daca2948532472a52c6f27a11862a597f41?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/00cb89e6e7b80068dd47a55a5c2f4b5e4d63e4c5?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/befd9e03e7d3e214b9a50065d4062c7c2334a17e?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/d43841886099df17ae61cd35c0c3c85fadadea39?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/89f0da91d486cdd9a86701dc5a6a532eaaf06505?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/12e4591f89699af3cb409d47a1ea807907a4ab62?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/28cfcba12d619cee9b9cc988c952285511812a94?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0dc461131cf604a62e12ecf5e1f9d4b0fd177daf?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/b492096e4ec675734fc8031e6562741602361efd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/004ea353cdff3a86710503a211cd2665708c5693?original' }
      ]);
    }

    const existingImages_k1752863906 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1752863906'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1752863906[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E9287D46BE0841528A71DA06EC18FA8D' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/4CC906B397474865864988DE00510230' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/CE4615860BA84EA8949C7A6AC7DCF0A0' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/81FDAF2974004528B74145B5DDC44A08' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/8E8676DDB944462A8C442AB08A877AD8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/853089FA1A504CBBA62570C43E0065F6' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9FB6FE8F670B49E7AC7582FE465946B1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/7AE64CC6855A43FBB6D1CD3AAAE90445' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9B060C0751E449D1BE8840CE64040850' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/010E5BB6769C4F69A759CA6C6FA950B2' }
      ]);
    }

    const existingImages_k26236019 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26236019'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k26236019[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/505004E3BFD24A5C8A830DAE25E2B368' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/03B09790DA154BD9B66440CE86EF80E8' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BFFC6F6BDBD64C67A867718C5C7071D1' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/E222A55C7D0346C2AD1A6A9144766683' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/9E65B117F5D14904B226EA7DDA7A315B' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/32AF348D40B5453C8A7C56A83717413A' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/B6270E6176E84A7EBE6E9EE243DBE211' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/BF4EC99BEE7C4BA0A7DA39B08CD372D2' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/0B4A0898114B42BFA565BC73A1DE16E9' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`), img_url: 'http://t1.kakaocdn.net/mystore/6D36E6A47D5F45D38B37C2673D33B77B' }
      ]);
    }

    const existingImages_k1380651138 = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1380651138'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_k1380651138[0].cnt === 0) {
      spotImgData.push(...[
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/ff5e3474411d0005da80d7ca3359166abce78369?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/902273bcbda2b795c97ce9cba1ef325db3ebc2dd?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/2dfdbcbb4040885d8999649d050c8abe84748756?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/0035be3360d39da3aadc194cc8eb53eea72fa19a?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/efd4a6919ec824a0b5955b705932a2c30cc72bb0?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/a740f0e6617b531adec8dd99b7059c56ad6ada5f?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/e7a0038ee2f4345b90757d80a15e0b4d3a672f98?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/aee4db3f4d6117f9701649d0572c37a4fbf227a2?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/1632c634986403db95e0126148476781eedea149?original' },
        { spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`), img_url: 'http://t1.daumcdn.net/local/kakaomapPhoto/review/bdd611b64d0a7bcc0d7d307f031e758f2ba1d438?original' }
      ]);
    }

    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계: 결과에 담긴 categories 기준, 중복 방지
    const spotCategoryRelationData = [];

    const existingCats_k9629667 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9629667'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9629667 = new Set(existingCats_k9629667.map(r => r.spot_category_id));

    if (!existingSet_k9629667.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9629667' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9582339 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9582339'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9582339 = new Set(existingCats_k9582339.map(r => r.spot_category_id));

    if (!existingSet_k9582339.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9582339' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27189717 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27189717'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27189717 = new Set(existingCats_k27189717.map(r => r.spot_category_id));

    if (!existingSet_k27189717.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27189717' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16836641 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16836641'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16836641 = new Set(existingCats_k16836641.map(r => r.spot_category_id));

    if (!existingSet_k16836641.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16836641' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10886743 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10886743'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10886743 = new Set(existingCats_k10886743.map(r => r.spot_category_id));

    if (!existingSet_k10886743.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10886743' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k670031710 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k670031710'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k670031710 = new Set(existingCats_k670031710.map(r => r.spot_category_id));

    if (!existingSet_k670031710.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k670031710' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10893648 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10893648'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10893648 = new Set(existingCats_k10893648.map(r => r.spot_category_id));

    if (!existingSet_k10893648.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10893648' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10819530 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10819530'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10819530 = new Set(existingCats_k10819530.map(r => r.spot_category_id));

    if (!existingSet_k10819530.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10819530' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21251174 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21251174'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21251174 = new Set(existingCats_k21251174.map(r => r.spot_category_id));

    if (!existingSet_k21251174.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21251174' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k255503183 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k255503183'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k255503183 = new Set(existingCats_k255503183.map(r => r.spot_category_id));

    if (!existingSet_k255503183.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k255503183' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1115266066 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1115266066'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1115266066 = new Set(existingCats_k1115266066.map(r => r.spot_category_id));

    if (!existingSet_k1115266066.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1115266066' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k421048086 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k421048086'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k421048086 = new Set(existingCats_k421048086.map(r => r.spot_category_id));

    if (!existingSet_k421048086.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k421048086' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10186580 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10186580'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10186580 = new Set(existingCats_k10186580.map(r => r.spot_category_id));

    if (!existingSet_k10186580.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10186580' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8065995 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8065995'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8065995 = new Set(existingCats_k8065995.map(r => r.spot_category_id));

    if (!existingSet_k8065995.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8065995' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10722147 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10722147'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10722147 = new Set(existingCats_k10722147.map(r => r.spot_category_id));

    if (!existingSet_k10722147.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10722147' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9388811 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9388811'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9388811 = new Set(existingCats_k9388811.map(r => r.spot_category_id));

    if (!existingSet_k9388811.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9388811' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10681971 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10681971'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10681971 = new Set(existingCats_k10681971.map(r => r.spot_category_id));

    if (!existingSet_k10681971.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10681971' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1157854722 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1157854722'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1157854722 = new Set(existingCats_k1157854722.map(r => r.spot_category_id));

    if (!existingSet_k1157854722.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1157854722' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11241347 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11241347'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11241347 = new Set(existingCats_k11241347.map(r => r.spot_category_id));

    if (!existingSet_k11241347.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11241347' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k25052488 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k25052488'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k25052488 = new Set(existingCats_k25052488.map(r => r.spot_category_id));

    if (!existingSet_k25052488.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k25052488' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k13612032 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k13612032'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k13612032 = new Set(existingCats_k13612032.map(r => r.spot_category_id));

    if (!existingSet_k13612032.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k13612032' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11193838 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11193838'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11193838 = new Set(existingCats_k11193838.map(r => r.spot_category_id));

    if (!existingSet_k11193838.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11193838' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8481800 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8481800'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8481800 = new Set(existingCats_k8481800.map(r => r.spot_category_id));

    if (!existingSet_k8481800.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8481800' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8441874 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8441874'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8441874 = new Set(existingCats_k8441874.map(r => r.spot_category_id));

    if (!existingSet_k8441874.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8441874' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8008432 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8008432'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8008432 = new Set(existingCats_k8008432.map(r => r.spot_category_id));

    if (!existingSet_k8008432.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8008432' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8470936 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8470936'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8470936 = new Set(existingCats_k8470936.map(r => r.spot_category_id));

    if (!existingSet_k8470936.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8470936' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8438142 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8438142'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8438142 = new Set(existingCats_k8438142.map(r => r.spot_category_id));

    if (!existingSet_k8438142.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8438142' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10553175 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10553175'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10553175 = new Set(existingCats_k10553175.map(r => r.spot_category_id));

    if (!existingSet_k10553175.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10553175' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21261695 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21261695'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21261695 = new Set(existingCats_k21261695.map(r => r.spot_category_id));

    if (!existingSet_k21261695.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21261695' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1859520870 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1859520870'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1859520870 = new Set(existingCats_k1859520870.map(r => r.spot_category_id));

    if (!existingSet_k1859520870.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1859520870' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7929238 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7929238'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7929238 = new Set(existingCats_k7929238.map(r => r.spot_category_id));

    if (!existingSet_k7929238.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7929238' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k163939822 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k163939822'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k163939822 = new Set(existingCats_k163939822.map(r => r.spot_category_id));

    if (!existingSet_k163939822.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k163939822' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9818793 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9818793'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9818793 = new Set(existingCats_k9818793.map(r => r.spot_category_id));

    if (!existingSet_k9818793.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9818793' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8984743 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8984743'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8984743 = new Set(existingCats_k8984743.map(r => r.spot_category_id));

    if (!existingSet_k8984743.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8984743' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10332017 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10332017'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10332017 = new Set(existingCats_k10332017.map(r => r.spot_category_id));

    if (!existingSet_k10332017.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10332017' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1857475664 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1857475664'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1857475664 = new Set(existingCats_k1857475664.map(r => r.spot_category_id));

    if (!existingSet_k1857475664.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1857475664' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1766016722 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1766016722'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1766016722 = new Set(existingCats_k1766016722.map(r => r.spot_category_id));

    if (!existingSet_k1766016722.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1766016722' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26840903 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26840903'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26840903 = new Set(existingCats_k26840903.map(r => r.spot_category_id));

    if (!existingSet_k26840903.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26840903' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1337449537 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1337449537'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1337449537 = new Set(existingCats_k1337449537.map(r => r.spot_category_id));

    if (!existingSet_k1337449537.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1337449537' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k795234579 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k795234579'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k795234579 = new Set(existingCats_k795234579.map(r => r.spot_category_id));

    if (!existingSet_k795234579.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k795234579' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k76529863 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k76529863'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k76529863 = new Set(existingCats_k76529863.map(r => r.spot_category_id));

    if (!existingSet_k76529863.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k76529863' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k144403566 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k144403566'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k144403566 = new Set(existingCats_k144403566.map(r => r.spot_category_id));

    if (!existingSet_k144403566.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k144403566' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k213858080 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k213858080'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k213858080 = new Set(existingCats_k213858080.map(r => r.spot_category_id));

    if (!existingSet_k213858080.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k213858080' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k252015260 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k252015260'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k252015260 = new Set(existingCats_k252015260.map(r => r.spot_category_id));

    if (!existingSet_k252015260.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k252015260' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k29683452 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k29683452'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k29683452 = new Set(existingCats_k29683452.map(r => r.spot_category_id));

    if (!existingSet_k29683452.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k29683452' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7832260 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7832260'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7832260 = new Set(existingCats_k7832260.map(r => r.spot_category_id));

    if (!existingSet_k7832260.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7832260' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k824040310 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k824040310'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k824040310 = new Set(existingCats_k824040310.map(r => r.spot_category_id));

    if (!existingSet_k824040310.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k824040310' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7831396 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7831396'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7831396 = new Set(existingCats_k7831396.map(r => r.spot_category_id));

    if (!existingSet_k7831396.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7831396' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2110676770 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2110676770'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2110676770 = new Set(existingCats_k2110676770.map(r => r.spot_category_id));

    if (!existingSet_k2110676770.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2110676770' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26982052 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26982052'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26982052 = new Set(existingCats_k26982052.map(r => r.spot_category_id));

    if (!existingSet_k26982052.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26982052' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1836502897 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1836502897'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1836502897 = new Set(existingCats_k1836502897.map(r => r.spot_category_id));

    if (!existingSet_k1836502897.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1836502897' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1451528210 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1451528210'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1451528210 = new Set(existingCats_k1451528210.map(r => r.spot_category_id));

    if (!existingSet_k1451528210.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1451528210' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k27092752 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k27092752'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k27092752 = new Set(existingCats_k27092752.map(r => r.spot_category_id));

    if (!existingSet_k27092752.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k27092752' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k14931919 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14931919'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k14931919 = new Set(existingCats_k14931919.map(r => r.spot_category_id));

    if (!existingSet_k14931919.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14931919' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10209539 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10209539'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10209539 = new Set(existingCats_k10209539.map(r => r.spot_category_id));

    if (!existingSet_k10209539.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10209539' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k60825746 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k60825746'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k60825746 = new Set(existingCats_k60825746.map(r => r.spot_category_id));

    if (!existingSet_k60825746.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k60825746' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10150202 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10150202'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10150202 = new Set(existingCats_k10150202.map(r => r.spot_category_id));

    if (!existingSet_k10150202.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10150202' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21223742 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21223742'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21223742 = new Set(existingCats_k21223742.map(r => r.spot_category_id));

    if (!existingSet_k21223742.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21223742' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k175076849 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k175076849'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k175076849 = new Set(existingCats_k175076849.map(r => r.spot_category_id));

    if (!existingSet_k175076849.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k175076849' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k523407095 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k523407095'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k523407095 = new Set(existingCats_k523407095.map(r => r.spot_category_id));

    if (!existingSet_k523407095.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k523407095' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k14502586 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k14502586'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k14502586 = new Set(existingCats_k14502586.map(r => r.spot_category_id));

    if (!existingSet_k14502586.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k14502586' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10115439 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10115439'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10115439 = new Set(existingCats_k10115439.map(r => r.spot_category_id));

    if (!existingSet_k10115439.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10115439' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1595770402 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1595770402'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1595770402 = new Set(existingCats_k1595770402.map(r => r.spot_category_id));

    if (!existingSet_k1595770402.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1595770402' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7960840 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7960840'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7960840 = new Set(existingCats_k7960840.map(r => r.spot_category_id));

    if (!existingSet_k7960840.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7960840' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8171788 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8171788'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8171788 = new Set(existingCats_k8171788.map(r => r.spot_category_id));

    if (!existingSet_k8171788.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8171788' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1852932274 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1852932274'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1852932274 = new Set(existingCats_k1852932274.map(r => r.spot_category_id));

    if (!existingSet_k1852932274.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1852932274' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8962407 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8962407'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8962407 = new Set(existingCats_k8962407.map(r => r.spot_category_id));

    if (!existingSet_k8962407.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8962407' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1003907552 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1003907552'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1003907552 = new Set(existingCats_k1003907552.map(r => r.spot_category_id));

    if (!existingSet_k1003907552.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1003907552' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9008180 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9008180'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9008180 = new Set(existingCats_k9008180.map(r => r.spot_category_id));

    if (!existingSet_k9008180.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9008180' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k191901974 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k191901974'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k191901974 = new Set(existingCats_k191901974.map(r => r.spot_category_id));

    if (!existingSet_k191901974.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k191901974' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11892173 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11892173'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11892173 = new Set(existingCats_k11892173.map(r => r.spot_category_id));

    if (!existingSet_k11892173.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11892173' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1432794635 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1432794635'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1432794635 = new Set(existingCats_k1432794635.map(r => r.spot_category_id));

    if (!existingSet_k1432794635.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1432794635' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7815872 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7815872'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7815872 = new Set(existingCats_k7815872.map(r => r.spot_category_id));

    if (!existingSet_k7815872.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7815872' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8883591 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8883591'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8883591 = new Set(existingCats_k8883591.map(r => r.spot_category_id));

    if (!existingSet_k8883591.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8883591' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8256361 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8256361'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8256361 = new Set(existingCats_k8256361.map(r => r.spot_category_id));

    if (!existingSet_k8256361.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8256361' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8908115 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8908115'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8908115 = new Set(existingCats_k8908115.map(r => r.spot_category_id));

    if (!existingSet_k8908115.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8908115' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k165041631 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k165041631'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k165041631 = new Set(existingCats_k165041631.map(r => r.spot_category_id));

    if (!existingSet_k165041631.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k165041631' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8401833 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8401833'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8401833 = new Set(existingCats_k8401833.map(r => r.spot_category_id));

    if (!existingSet_k8401833.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8401833' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8236529 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8236529'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8236529 = new Set(existingCats_k8236529.map(r => r.spot_category_id));

    if (!existingSet_k8236529.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8236529' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11834459 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11834459'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11834459 = new Set(existingCats_k11834459.map(r => r.spot_category_id));

    if (!existingSet_k11834459.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11834459' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1190456459 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1190456459'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1190456459 = new Set(existingCats_k1190456459.map(r => r.spot_category_id));

    if (!existingSet_k1190456459.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1190456459' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k7977614 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k7977614'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k7977614 = new Set(existingCats_k7977614.map(r => r.spot_category_id));

    if (!existingSet_k7977614.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k7977614' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26602406 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26602406'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26602406 = new Set(existingCats_k26602406.map(r => r.spot_category_id));

    if (!existingSet_k26602406.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26602406' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21254211 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21254211'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21254211 = new Set(existingCats_k21254211.map(r => r.spot_category_id));

    if (!existingSet_k21254211.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21254211' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26805337 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26805337'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26805337 = new Set(existingCats_k26805337.map(r => r.spot_category_id));

    if (!existingSet_k26805337.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26805337' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k16693198 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k16693198'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k16693198 = new Set(existingCats_k16693198.map(r => r.spot_category_id));

    if (!existingSet_k16693198.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k16693198' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11070314 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11070314'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11070314 = new Set(existingCats_k11070314.map(r => r.spot_category_id));

    if (!existingSet_k11070314.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11070314' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21513162 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21513162'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21513162 = new Set(existingCats_k21513162.map(r => r.spot_category_id));

    if (!existingSet_k21513162.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21513162' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8708867 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8708867'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8708867 = new Set(existingCats_k8708867.map(r => r.spot_category_id));

    if (!existingSet_k8708867.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8708867' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2003940571 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2003940571'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2003940571 = new Set(existingCats_k2003940571.map(r => r.spot_category_id));

    if (!existingSet_k2003940571.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2003940571' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k2007353666 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k2007353666'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k2007353666 = new Set(existingCats_k2007353666.map(r => r.spot_category_id));

    if (!existingSet_k2007353666.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k2007353666' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1831065736 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1831065736'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1831065736 = new Set(existingCats_k1831065736.map(r => r.spot_category_id));

    if (!existingSet_k1831065736.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1831065736' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k21288807 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k21288807'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k21288807 = new Set(existingCats_k21288807.map(r => r.spot_category_id));

    if (!existingSet_k21288807.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k21288807' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1510491255 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1510491255'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1510491255 = new Set(existingCats_k1510491255.map(r => r.spot_category_id));

    if (!existingSet_k1510491255.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1510491255' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9026794 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9026794'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9026794 = new Set(existingCats_k9026794.map(r => r.spot_category_id));

    if (!existingSet_k9026794.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9026794' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8815351 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8815351'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8815351 = new Set(existingCats_k8815351.map(r => r.spot_category_id));

    if (!existingSet_k8815351.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8815351' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8402093 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8402093'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8402093 = new Set(existingCats_k8402093.map(r => r.spot_category_id));

    if (!existingSet_k8402093.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8402093' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k9756425 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k9756425'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k9756425 = new Set(existingCats_k9756425.map(r => r.spot_category_id));

    if (!existingSet_k9756425.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k9756425' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k18062985 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18062985'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k18062985 = new Set(existingCats_k18062985.map(r => r.spot_category_id));

    if (!existingSet_k18062985.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062985' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10379033 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10379033'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10379033 = new Set(existingCats_k10379033.map(r => r.spot_category_id));

    if (!existingSet_k10379033.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10379033' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8459058 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8459058'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8459058 = new Set(existingCats_k8459058.map(r => r.spot_category_id));

    if (!existingSet_k8459058.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8459058' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1626600322 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1626600322'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1626600322 = new Set(existingCats_k1626600322.map(r => r.spot_category_id));

    if (!existingSet_k1626600322.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1626600322' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k10525877 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k10525877'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k10525877 = new Set(existingCats_k10525877.map(r => r.spot_category_id));

    if (!existingSet_k10525877.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k10525877' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8645482 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8645482'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8645482 = new Set(existingCats_k8645482.map(r => r.spot_category_id));

    if (!existingSet_k8645482.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8645482' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1704728222 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1704728222'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1704728222 = new Set(existingCats_k1704728222.map(r => r.spot_category_id));

    if (!existingSet_k1704728222.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1704728222' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k11039646 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k11039646'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k11039646 = new Set(existingCats_k11039646.map(r => r.spot_category_id));

    if (!existingSet_k11039646.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k11039646' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k427123419 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k427123419'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k427123419 = new Set(existingCats_k427123419.map(r => r.spot_category_id));

    if (!existingSet_k427123419.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k427123419' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8629568 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8629568'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8629568 = new Set(existingCats_k8629568.map(r => r.spot_category_id));

    if (!existingSet_k8629568.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8629568' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k18062180 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k18062180'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k18062180 = new Set(existingCats_k18062180.map(r => r.spot_category_id));

    if (!existingSet_k18062180.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k18062180' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k8374461 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k8374461'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k8374461 = new Set(existingCats_k8374461.map(r => r.spot_category_id));

    if (!existingSet_k8374461.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k8374461' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1752863906 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1752863906'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1752863906 = new Set(existingCats_k1752863906.map(r => r.spot_category_id));

    if (!existingSet_k1752863906.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1752863906' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k26236019 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k26236019'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k26236019 = new Set(existingCats_k26236019.map(r => r.spot_category_id));

    if (!existingSet_k26236019.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k26236019' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    const existingCats_k1380651138 = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['k1380651138'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_k1380651138 = new Set(existingCats_k1380651138.map(r => r.spot_category_id));

    if (!existingSet_k1380651138.has(1)) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(`(SELECT spot_id FROM spot WHERE naver_spot_id = 'k1380651138' LIMIT 1)`),
        spot_category_id: 1,
      });
    }

    if (spotCategoryRelationData.length > 0) {
      await queryInterface.bulkInsert('spot_category_relation', spotCategoryRelationData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    const ids = ['k9629667', 'k9582339', 'k27189717', 'k16836641', 'k10886743', 'k670031710', 'k10893648', 'k10819530', 'k21251174', 'k255503183', 'k1115266066', 'k421048086', 'k10186580', 'k8065995', 'k10722147', 'k9388811', 'k10681971', 'k1157854722', 'k11241347', 'k25052488', 'k13612032', 'k11193838', 'k8481800', 'k8441874', 'k8008432', 'k8470936', 'k8438142', 'k10553175', 'k21261695', 'k1859520870', 'k7929238', 'k163939822', 'k9818793', 'k8984743', 'k10332017', 'k1857475664', 'k1766016722', 'k26840903', 'k1337449537', 'k795234579', 'k76529863', 'k144403566', 'k213858080', 'k252015260', 'k29683452', 'k7832260', 'k824040310', 'k7831396', 'k2110676770', 'k26982052', 'k1836502897', 'k1451528210', 'k27092752', 'k14931919', 'k10209539', 'k60825746', 'k10150202', 'k21223742', 'k175076849', 'k523407095', 'k14502586', 'k10115439', 'k1595770402', 'k7960840', 'k8171788', 'k1852932274', 'k8962407', 'k1003907552', 'k9008180', 'k191901974', 'k11892173', 'k1432794635', 'k7815872', 'k8883591', 'k8256361', 'k8908115', 'k165041631', 'k8401833', 'k8236529', 'k11834459', 'k1190456459', 'k7977614', 'k26602406', 'k21254211', 'k26805337', 'k16693198', 'k11070314', 'k21513162', 'k8708867', 'k2003940571', 'k2007353666', 'k1831065736', 'k21288807', 'k1510491255', 'k9026794', 'k8815351', 'k8402093', 'k9756425', 'k18062985', 'k10379033', 'k8459058', 'k1626600322', 'k10525877', 'k8645482', 'k1704728222', 'k11039646', 'k427123419', 'k8629568', 'k18062180', 'k8374461', 'k1752863906', 'k26236019', 'k1380651138'];
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
