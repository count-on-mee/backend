'use strict';

/**
 * 네이버 지도 크롤링 데이터를 시드 파일로 생성
 *
 * 사용법:
 * node createSpotSeeds.js <검색어> [수집할 최대 개수]
 *
 * 예시:
 * node createSpotSeeds.js "강남 맛집" 10
 */

const fs = require('fs');
const path = require('path');
const NaverMapCrawler = require('./naverMapCrawler');

// 명령행 인자 파싱
const keyword = process.argv[2];
const maxResults = parseInt(process.argv[3]) || 10;

if (!keyword) {
  console.error('사용법: node createSpotSeeds.js <검색어> [수집할 최대 개수]');
  process.exit(1);
}

// 현재 시간 기반으로 시드 파일명 생성
const timestamp = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 14);
const fileName = `${timestamp}-spot-seeds-${keyword.replace(/\s+/g, '-')}.js`;
const filePath = path.join(__dirname, '..', 'seeders', fileName);

// 크롤링 실행 및 시드 파일 생성 함수
async function createSeedFile() {
  const crawler = new NaverMapCrawler();

  try {
    // 초기화
    await crawler.initialize();

    // 검색 및 수집 실행 (DB에 저장하지 않고 데이터만 가져옴)
    const results = await crawler.searchAndCollect(keyword, maxResults);

    console.log('----- 수집 완료 -----');
    console.log(`검색어: ${keyword}`);
    console.log(`수집된 장소 수: ${results.length}`);

    if (results.length === 0) {
      console.log('수집된 데이터가 없습니다.');
      return;
    }

    // 카테고리 ID 매핑 가져오기
    const categoryIds = crawler.categoryIds;

    // 시드 파일 내용 생성
    let seedFileContent = `'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Spot 데이터 추가
    const spots = await queryInterface.bulkInsert(
      'spot',
      [
`;

    // Spot 데이터 작성
    results.forEach((spot, index) => {
      seedFileContent += `        {
          name: '${spot.name ? spot.name.replace(/'/g, "\\'") : ''}',
          address: '${spot.address ? spot.address.replace(/'/g, "\\'") : ''}',
          tel: ${spot.tel ? `'${spot.tel.replace(/'/g, "\\'")}'` : 'null'},
          location: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(${spot.location ? spot.location.longitude : 0} ${
        spot.location ? spot.location.latitude : 0
      })'
          ),
          naver_spot_id: ${spot.naverSpotId ? `'${spot.naverSpotId}'` : 'null'},
          review_count: ${spot.reviewCount || 0},
          review_score: ${spot.reviewScore || 'null'}
        }${index < results.length - 1 ? ',' : ''}
`;
    });

    seedFileContent += `      ],
      { returning: true }
    );

    // 각 스팟의 ID 매핑 생성
    const spotIdMap = {};
    spots.forEach((spot) => {
      spotIdMap[spot.name] = spot.spot_id;
    });

    // 이미지 데이터 추가
    const spotImgData = [];
`;

    // SpotImg 데이터 작성
    results.forEach((spot) => {
      if (spot.imageUrls && spot.imageUrls.length > 0) {
        seedFileContent += `    
    // ${spot.name} 이미지
    spotImgData.push(...[
`;
        spot.imageUrls.forEach((url, index) => {
          seedFileContent += `      {
        spot_id: spotIdMap['${spot.name.replace(/'/g, "\\'")}'],
        image_url: '${url.replace(/'/g, "\\'")}'
      }${index < spot.imageUrls.length - 1 ? ',' : ''}
`;
        });
        seedFileContent += `    ]);
`;
      }
    });

    seedFileContent += `
    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계 데이터 추가
    const spotCategoryRelationData = [];
`;

    // SpotCategoryRelation 데이터 작성
    results.forEach((spot) => {
      if (spot.categories && spot.categories.length > 0) {
        seedFileContent += `    
    // ${spot.name} 카테고리 관계
`;
        spot.categories.forEach((category) => {
          if (category && categoryIds[category]) {
            seedFileContent += `    spotCategoryRelationData.push({
      spot_id: spotIdMap['${spot.name.replace(/'/g, "\\'")}'],
      spot_category_id: ${categoryIds[category]}
    });
`;
          }
        });
      }
    });

    seedFileContent += `
    if (spotCategoryRelationData.length > 0) {
      await queryInterface.bulkInsert('spot_category_relation', spotCategoryRelationData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    // 생성한 스팟 관련 데이터 삭제
    await queryInterface.bulkDelete('spot_category_relation', null, {});
    await queryInterface.bulkDelete('spot_img', null, {});
    await queryInterface.bulkDelete('spot', null, {});
  }
};
`;

    // 파일 저장
    fs.writeFileSync(filePath, seedFileContent);

    console.log(`시드 파일이 생성되었습니다: ${filePath}`);
    console.log('\n시드 실행 방법:');
    console.log(`npx sequelize-cli db:seed --seed ${fileName}`);
  } catch (error) {
    console.error('시드 파일 생성 중 오류 발생:', error);
  } finally {
    // 리소스 정리
    await crawler.close();
  }
}

// 실행
createSeedFile()
  .then(() => {
    console.log('프로그램 종료');
    process.exit(0);
  })
  .catch((error) => {
    console.error('프로그램 실행 중 오류 발생:', error);
    process.exit(1);
  });
