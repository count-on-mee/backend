'use strict';

/**
 * 카카오 지도 북마크 크롤링 결과로 시드 파일 생성
 * 사용법:
 * node scripts/createKakaoPlaceSeeds.js <folderId> <카테고리라벨>
 * 예: node scripts/createKakaoPlaceSeeds.js 15123835 음식점
 */

const fs = require('fs');
const path = require('path');
const KakaoPlaceCrawler = require('./kakaoPlaceCrawler');
const db = require('../models');

const folderId = process.argv[2];
const categoryLabel = process.argv[3];

if (!folderId || !categoryLabel) {
  console.error(
    '사용법: node scripts/createKakaoPlaceSeeds.js <folderId> <카테고리라벨>'
  );
  process.exit(1);
}

function nowTimestamp() {
  const now = new Date();
  return (
    now.getFullYear().toString() +
    (now.getMonth() + 1).toString().padStart(2, '0') +
    now.getDate().toString().padStart(2, '0') +
    now.getHours().toString().padStart(2, '0') +
    now.getMinutes().toString().padStart(2, '0') +
    now.getSeconds().toString().padStart(2, '0')
  );
}

function escapeJs(str) {
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

async function main() {
  const crawler = new KakaoPlaceCrawler({ saveToDatabase: false });
  try {
    // DB에서 spot_category를 조회하여 카테고리 매핑 구성
    const categories = await db.SpotCategory.findAll({
      attributes: ['spotCategoryId', 'type'],
      raw: true,
    });
    crawler.categoryIds = categories.reduce((acc, cur) => {
      acc[cur.type] = cur.spotCategoryId;
      return acc;
    }, {});

    const results = await crawler.collectByFolder(folderId, categoryLabel);

    const timestamp = nowTimestamp();
    const safeCategoryForName = String(categoryLabel).replace(/\s+/g, '-');
    const fileName = `${timestamp}-spot-seeds-kakao-${folderId}-${safeCategoryForName}.js`;
    const filePath = path.join(__dirname, '..', 'seeders', fileName);

    let seed = `'use strict';

/**
 * 카카오 북마크 크롤링으로 생성된 Spot 데이터 시드 파일
 * 폴더ID: ${folderId}
 * 카테고리라벨: ${categoryLabel}
 * 생성일시: ${new Date().toISOString()}
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
`;

    results.forEach((spot, idx) => {
      seed += `      {
        name: '${escapeJs(spot.name)}',
        address: '${escapeJs(spot.address || '')}',
        tel: ${spot.tel ? `'${escapeJs(spot.tel)}'` : 'null'},
        location: Sequelize.fn(
          'ST_GeomFromText',
          'POINT(${spot.location ? spot.location.latitude : 0} ${
        spot.location ? spot.location.longitude : 0
      })',
          4326
        ),
        naver_spot_id: '${escapeJs(spot.naverSpotId || '')}',
        review_count: ${spot.reviewCount || 0},
        review_score: ${spot.reviewScore || 'null'},
      }${idx < results.length - 1 ? ',' : ''}
`;
    });

    seed += `    ];

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
`;

    results.forEach((spot) => {
      if (!spot.imgUrls || spot.imgUrls.length === 0 || !spot.naverSpotId)
        return;
      const sid = escapeJs(spot.naverSpotId);
      seed += `
    const existingImages_${sid} = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as cnt FROM spot_img WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['${sid}'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (existingImages_${sid}[0].cnt === 0) {
      spotImgData.push(...[
`;
      spot.imgUrls.forEach((u, i) => {
        seed += `        { spot_id: Sequelize.literal(\`(SELECT spot_id FROM spot WHERE naver_spot_id = '${sid}' LIMIT 1)\`), img_url: '${escapeJs(
          u
        )}' }${i < spot.imgUrls.length - 1 ? ',' : ''}\n`;
      });
      seed += `      ]);
    }
`;
    });

    seed += `
    if (spotImgData.length > 0) {
      await queryInterface.bulkInsert('spot_img', spotImgData, {});
    }

    // 카테고리 관계: 결과에 담긴 categories 기준, 중복 방지
    const spotCategoryRelationData = [];
`;

    const categoryIds = crawler.categoryIds;
    results.forEach((spot) => {
      if (!spot.categories || spot.categories.length === 0 || !spot.naverSpotId)
        return;
      const sid = escapeJs(spot.naverSpotId);
      seed += `
    const existingCats_${sid} = await queryInterface.sequelize.query(
      'SELECT spot_category_id FROM spot_category_relation WHERE spot_id = (SELECT spot_id FROM spot WHERE naver_spot_id = ? LIMIT 1)',
      { replacements: ['${sid}'], type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const existingSet_${sid} = new Set(existingCats_${sid}.map(r => r.spot_category_id));
`;

      const uniques = [...new Set(spot.categories)].filter(
        (c) => categoryIds[c]
      );
      uniques.forEach((c) => {
        seed += `
    if (!existingSet_${sid}.has(${categoryIds[c]})) {
      spotCategoryRelationData.push({
        spot_id: Sequelize.literal(\`(SELECT spot_id FROM spot WHERE naver_spot_id = '${sid}' LIMIT 1)\`),
        spot_category_id: ${categoryIds[c]},
      });
    }
`;
      });
    });

    seed += `
    if (spotCategoryRelationData.length > 0) {
      await queryInterface.bulkInsert('spot_category_relation', spotCategoryRelationData, {});
    }
  },

  async down(queryInterface, Sequelize) {
    const ids = [${results
      .map((s) => `'${escapeJs(s.naverSpotId)}'`)
      .join(', ')}];
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
`;

    fs.writeFileSync(filePath, seed);
    console.log(`시드 파일이 생성되었습니다: ${filePath}`);
    console.log(`\n시드 실행: npm run seed:run ${fileName}`);
  } catch (e) {
    console.error('시드 생성 실패:', e);
    process.exit(1);
  } finally {
    // 연결 정리
    if (db && db.sequelize) {
      try {
        await db.sequelize.close();
      } catch (_) {}
    }
  }
}

if (require.main === module) {
  main();
}
