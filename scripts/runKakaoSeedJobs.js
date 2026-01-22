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

async function runJob({ job, folderId, categoryLabel }) {
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

  // 마지막 실행 시간 업데이트
  if (job) {
    await job.update({ lastRunAt: new Date() });
  }

  console.log(
    `=== Kakao Seed Job 완료: folderId=${folderId}, category=${categoryLabel} ===\n`
  );
}

async function main() {
  try {
    // 데이터베이스에서 활성화된 작업들을 조회
    const jobs = await db.KakaoSeedJob.findAll({
      where: {
        isActive: true,
      },
      order: [['kakaoSeedJobId', 'ASC']],
    });

    if (!jobs || jobs.length === 0) {
      console.log(
        '실행할 JOB이 없습니다. `kakao_seed_job` 테이블에 활성화된 작업을 추가하세요.'
      );
      return;
    }

    console.log(`총 ${jobs.length}개의 작업을 실행합니다.\n`);

    for (const job of jobs) {
      // eslint-disable-next-line no-await-in-loop
      await runJob({
        job,
        folderId: job.folderId,
        categoryLabel: job.categoryLabel,
      });
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
