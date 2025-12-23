'use strict';

/**
 * 미리 정의한 Kakao 북마크 폴더/카테고리 세트에 대해
 * 1) 시드 파일 생성 (`createKakaoPlaceSeeds.js`의 로직 재사용)
 * 2) 생성된 시드 파일을 바로 `npm run seed:run <fileName>`으로 실행
 * 을 순차적으로 수행하는 배치 스크립트입니다.
 *
 * 사용 예시(단발 실행):
 *   node scripts/runKakaoSeedJobs.js
 */

const path = require('path');
const { execSync } = require('child_process');
const db = require('../models');
const { generateKakaoSeedFor } = require('./createKakaoPlaceSeeds');

const JOBS = [
  { folderId: '20455060', categoryLabel: '문화' },
  { folderId: '18589915', categoryLabel: '카페' },
  { folderId: '18589771', categoryLabel: '식당' },
  { folderId: '18589856', categoryLabel: '식당' },
  { folderId: '18589831', categoryLabel: '식당' },
];

async function runJob({ folderId, categoryLabel }) {
  console.log(
    `\n=== Kakao Seed Job 시작: folderId=${folderId}, category=${categoryLabel} ===`
  );

  const { fileName, resultsCount } = await generateKakaoSeedFor(
    folderId,
    categoryLabel
  );

  console.log(
    `생성된 시드 파일: ${fileName} (수집된 스팟 수: ${resultsCount}개)`
  );

  // 생성된 시드 파일을 바로 실행하여 DB에 반영
  console.log(`시드 실행: npm run seed:run ${fileName}`);
  execSync(`npm run seed:run ${fileName}`, {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  });

  console.log(
    `=== Kakao Seed Job 완료: folderId=${folderId}, category=${categoryLabel} ===\n`
  );
}

async function main() {
  if (!JOBS.length) {
    console.log(
      '실행할 JOB 이 없습니다. `scripts/runKakaoSeedJobs.js`의 JOBS 배열을 먼저 설정하세요.'
    );
    return;
  }

  try {
    for (const job of JOBS) {
      // eslint-disable-next-line no-await-in-loop
      await runJob(job);
    }
  } catch (e) {
    console.error('카카오 시드 배치 작업 실패:', e);
    process.exitCode = 1;
  } finally {
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
