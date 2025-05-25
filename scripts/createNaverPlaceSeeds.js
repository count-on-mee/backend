'use strict';

/**
 * 네이버 지도 pcmap.place.naver.com 크롤링 데이터를 시드 파일로 생성
 *
 * 사용법:
 * node createNaverPlaceSeeds.js <검색어> [수집할 최대 개수]
 *
 * 예시:
 * node createNaverPlaceSeeds.js "강남 맛집" 20
 */

const fs = require('fs');
const path = require('path');
const NaverPlaceCrawler = require('./naverPlaceCrawler');

// 명령행 인자 파싱
const keyword = process.argv[2];
// 최대 결과 수 (기본값: 10, 최대값: 50)
const maxResults = Math.min(parseInt(process.argv[3]) || 10, 50);

if (!keyword) {
  console.error(
    '사용법: node createNaverPlaceSeeds.js <검색어> [수집할 최대 개수(최대 50)]'
  );
  process.exit(1);
}

// 현재 시간 기반으로 시드 파일명 생성 (YYYYMMDDHHMMSS 형식)
const now = new Date();
const timestamp =
  now.getFullYear().toString() +
  (now.getMonth() + 1).toString().padStart(2, '0') +
  now.getDate().toString().padStart(2, '0') +
  now.getHours().toString().padStart(2, '0') +
  now.getMinutes().toString().padStart(2, '0') +
  now.getSeconds().toString().padStart(2, '0');

const fileName = `${timestamp}-spot-seeds-${keyword.replace(/\s+/g, '-')}.js`;
const filePath = path.join(__dirname, '..', 'seeders', fileName);

// 크롤링 실행 및 시드 파일 생성 함수
async function createSeedFile() {
  const crawler = new NaverPlaceCrawler({ saveToDatabase: false });

  try {
    await crawler.initialize();

    console.log('----- 네이버 장소 크롤링 시작 -----');
    console.log(`검색어: ${keyword}`);
    console.log(`수집할 최대 개수: ${maxResults}`);

    const results = await crawler.searchAndCollect(keyword, maxResults);

    console.log('----- 수집 완료 -----');
    console.log(`검색어: ${keyword}`);
    console.log(`수집된 장소 수: ${results.length}`);

    if (results.length === 0) {
      console.log('수집된 데이터가 없습니다.');
      return;
    }

    const categoryIds = crawler.categoryIds;

    let seedFileContent = `'use strict';

/**
 * 네이버 장소 크롤링으로 생성된 Spot 데이터 시드 파일
 * 검색어: ${keyword}
 * 생성일시: ${new Date().toISOString()}
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
`;

    results.forEach((spot, index) => {
      seedFileContent += `      {
        name: '${spot.name ? spot.name.replace(/'/g, "\\'") : ''}',
        address: '${spot.address ? spot.address.replace(/'/g, "\\'") : ''}',
        tel: ${spot.tel ? `'${spot.tel.replace(/'/g, "\\'")}'` : 'null'},
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(${spot.location ? spot.location.latitude : 0} ${
        spot.location ? spot.location.longitude : 0
      })',
        4326
        ),
        naver_spot_id: ${spot.naverSpotId ? `'${spot.naverSpotId}'` : 'null'},
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
    const existingImages_${
      spot.naverSpotId
    } = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['${
          spot.naverSpotId ? spot.naverSpotId.replace(/'/g, "\\'") : ''
        }'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );

    if (existingImages_${spot.naverSpotId}[0].count === 0) {
      // 새 이미지 추가
      spotImgData.push(...[
`;
        spot.imgUrls.forEach((url, idx) => {
          seedFileContent += `        {
          spot_id: Sequelize.literal(\`(SELECT spot_id FROM spot WHERE naver_spot_id = '${
            spot.naverSpotId ? spot.naverSpotId.replace(/'/g, "\\'") : ''
          }' LIMIT 1)\`),
          img_url: '${url.replace(/'/g, "\\'")}',
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

    // 카테고리 관계 처리 - 중복되지 않는 카테고리만 추가
    const spotCategoryRelationData = [];
`;

    results.forEach((spot, index) => {
      if (spot.categories && spot.categories.length > 0 && spot.naverSpotId) {
        seedFileContent += `
    // ${spot.name} 카테고리 관계
    const existingCategories_${
      spot.naverSpotId
    } = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      {
        replacements: ['${
          spot.naverSpotId ? spot.naverSpotId.replace(/'/g, "\\'") : ''
        }'],
        type: queryInterface.sequelize.QueryTypes.SELECT
      }
    );
    const existingCategoryIds_${
      spot.naverSpotId
    } = new Set(existingCategories_${
          spot.naverSpotId
        }.map(cat => cat.spot_category_id));

    // 중복되지 않는 카테고리만 추가
    const uniqueCategories_${spot.naverSpotId} = [...new Set([
`;
        // 중복 제거를 위해 Set 사용
        const uniqueCategories = [...new Set(spot.categories)];
        uniqueCategories.forEach((category, idx) => {
          if (category && categoryIds[category]) {
            seedFileContent += `      '${category}'${
              idx < uniqueCategories.length - 1 ? ',' : ''
            }
`;
          }
        });
        seedFileContent += `    ])];

    for (const category of uniqueCategories_${spot.naverSpotId}) {
      const categoryId = ${JSON.stringify(categoryIds)};
      if (categoryId[category] && !existingCategoryIds_${
        spot.naverSpotId
      }.has(categoryId[category])) {
        spotCategoryRelationData.push({
          spot_id: Sequelize.literal(\`(SELECT spot_id FROM spot WHERE naver_spot_id = '${
            spot.naverSpotId ? spot.naverSpotId.replace(/'/g, "\\'") : ''
          }' LIMIT 1)\`),
          spot_category_id: categoryId[category],
        });
      }
    }
`;
      }
    });

    seedFileContent += `
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
  } catch (error) {
    console.error('시드 파일 생성 중 오류 발생:', error);
  } finally {
    await crawler.close();
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
