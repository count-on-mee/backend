'use strict';

/**
 * Stayfolio API 크롤링 데이터를 시드 파일로 생성
 *
 * 사용법:
 * node createStayfolioSeeds.js [수집할 최대 페이지 수]
 *
 * 예시:
 * node createStayfolioSeeds.js 50
 */

const fs = require('fs');
const path = require('path');
const StayfolioCrawler = require('./stayfolioCrawler');

// 명령행 인자 파싱
const maxPages = parseInt(process.argv[2]) || 100;

console.log(`Stayfolio 숙소 데이터 수집 시작 (최대 ${maxPages}페이지)`);

// 현재 시간 기반으로 시드 파일명 생성 (YYYYMMDDHHMMSS 형식)
const now = new Date();
const timestamp =
  now.getFullYear().toString() +
  (now.getMonth() + 1).toString().padStart(2, '0') +
  now.getDate().toString().padStart(2, '0') +
  now.getHours().toString().padStart(2, '0') +
  now.getMinutes().toString().padStart(2, '0') +
  now.getSeconds().toString().padStart(2, '0');

const fileName = `${timestamp}-spot-seeds-stayfolio-${maxPages}pages.js`;
const filePath = path.join(__dirname, '..', 'seeders', fileName);

// 문자열 이스케이프 함수
function escapeJs(str) {
  if (!str) return '';
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}

// 크롤링 실행 및 시드 파일 생성 함수
async function createSeedFile() {
  const crawler = new StayfolioCrawler({ saveToDatabase: false, debug: true });

  try {
    console.log('----- Stayfolio 숙소 크롤링 시작 -----');
    console.log(`최대 페이지 수: ${maxPages}`);

    const results = await crawler.collectAccommodations(maxPages);

    console.log('----- 수집 완료 -----');
    console.log(`수집된 숙소 수: ${results.length}`);

    if (results.length === 0) {
      console.log('수집된 데이터가 없습니다.');
      return;
    }

    let seedFileContent = `'use strict';

/**
 * Stayfolio 숙소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 수집 페이지 수: ${maxPages}
 * 생성일시: ${new Date().toISOString()}
 * 총 수집 개수: ${results.length}개
 */

module.exports = {
  async up(queryInterface, Sequelize) {
    // 기존 스팟 데이터 조회 (naver_spot_id 기준 중복 방지)
    const existingSpots = await queryInterface.sequelize.query(
      'SELECT spot_id, naver_spot_id FROM spot WHERE naver_spot_id IS NOT NULL',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSpotMap = new Map(existingSpots.map(spot => [spot.naver_spot_id, spot.spot_id]));

    // 숙소 데이터 추가/업데이트
    const spotData = [
`;

    results.forEach((spot, index) => {
      seedFileContent += `      {
        name: '${escapeJs(spot.name)}',
        address: '${escapeJs(spot.address)}',
        tel: '${escapeJs(spot.tel)}',
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(${spot.location ? spot.location.latitude : 0} ${
        spot.location ? spot.location.longitude : 0
      })',
        4326
        ),
        naver_spot_id: '${escapeJs(spot.naverSpotId)}',
        review_count: ${spot.reviewCount || 0},
        review_score: ${spot.reviewScore || 'null'},
      }${index < results.length - 1 ? ',' : ''}
`;
    });

    seedFileContent += `    ];

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
`;

    results.forEach((spot, index) => {
      if (spot.imgUrls && spot.imgUrls.length > 0 && spot.naverSpotId) {
        seedFileContent += `
    // ${spot.name} 이미지
    const existingImages_${spot.naverSpotId.replace(
      /[^a-zA-Z0-9]/g,
      '_'
    )} = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['${escapeJs(spot.naverSpotId)}'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_${spot.naverSpotId.replace(
      /[^a-zA-Z0-9]/g,
      '_'
    )}[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
`;
        spot.imgUrls.forEach((url, idx) => {
          seedFileContent += `        {
          spot_id: Sequelize.literal(\`(SELECT spot_id FROM spot WHERE naver_spot_id = '${escapeJs(
            spot.naverSpotId
          )}' LIMIT 1)\`),
          img_url: '${escapeJs(url)}',
        }${idx < spot.imgUrls.length - 1 ? ',' : ''}
`;
        });
        seedFileContent += `      ]);
    }
`;
      }
    });

    seedFileContent += `
    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 처리 - 숙소 카테고리로 고정
    const spotCategoryRelationData = [];
    
    // 숙소 카테고리 ID 조회
    const accommodationCategory = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category WHERE type = ?',
      {
        replacements: ['숙소'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (accommodationCategory.length > 0) {
      const accommodationCategoryId = accommodationCategory[0].spot_category_id;
`;

    results.forEach((spot, index) => {
      if (spot.naverSpotId) {
        seedFileContent += `
      // ${spot.name} 카테고리 관계
      const existingCategories_${spot.naverSpotId.replace(
        /[^a-zA-Z0-9]/g,
        '_'
      )} = await queryInterface.sequelize.query(
        'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
        {
          replacements: ['${escapeJs(spot.naverSpotId)}'],
          type: queryInterface.sequelize.QueryTypes.SELECT
        }
      );
      const existingCategoryIds_${spot.naverSpotId.replace(
        /[^a-zA-Z0-9]/g,
        '_'
      )} = new Set(existingCategories_${spot.naverSpotId.replace(
          /[^a-zA-Z0-9]/g,
          '_'
        )}.map(cat => cat.spot_category_id));

      // 숙소 카테고리가 없으면 추가
      if (!existingCategoryIds_${spot.naverSpotId.replace(
        /[^a-zA-Z0-9]/g,
        '_'
      )}.has(accommodationCategoryId)) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(\`(SELECT spot_id FROM spot WHERE naver_spot_id = '${escapeJs(
            spot.naverSpotId
          )}' LIMIT 1)\`),
          spot_category_id: accommodationCategoryId,
        });
      }
`;
      }
    });

    seedFileContent += `
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
`;

    fs.writeFileSync(filePath, seedFileContent);

    console.log(`시드 파일이 생성되었습니다: ${filePath}`);
    console.log('\n시드 실행 방법:');
    console.log(`npm run seed:run ${fileName}`);

    // 수집 통계 출력
    console.log('\n수집 통계:');
    console.log(`- 총 수집된 숙소 수: ${results.length}개`);

    const cityStats = {};
    results.forEach((spot) => {
      const city = spot.city || '미분류';
      cityStats[city] = (cityStats[city] || 0) + 1;
    });

    console.log('- 지역별 분포:');
    Object.entries(cityStats)
      .sort(([, a], [, b]) => b - a)
      .forEach(([city, count]) => {
        console.log(`  ${city}: ${count}개`);
      });

    const placeTypeStats = {};
    results.forEach((spot) => {
      const placeType = spot.placeTypeToS || '미분류';
      placeTypeStats[placeType] = (placeTypeStats[placeType] || 0) + 1;
    });

    console.log('- 숙소 유형별 분포:');
    Object.entries(placeTypeStats)
      .sort(([, a], [, b]) => b - a)
      .forEach(([type, count]) => {
        console.log(`  ${type}: ${count}개`);
      });
  } catch (error) {
    console.error('시드 파일 생성 중 오류 발생:', error);
    throw error;
  }
}

createSeedFile()
  .then(() => {
    console.log('프로그램 종료');
    process.exit(0);
  })
  .catch((error) => {
    console.error('프로그램 실행 중 오류 발생:', error);
    process.exit(1);
  });
