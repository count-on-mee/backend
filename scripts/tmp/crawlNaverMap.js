'use strict';

/**
 * 네이버 지도 크롤링 실행 스크립트
 *
 * 사용법:
 * node crawlNaverMap.js <검색어> [수집할 최대 개수]
 *
 * 예시:
 * node crawlNaverMap.js "강남 맛집" 10
 * node crawlNaverMap.js "서울 관광지" 20
 */

const NaverMapCrawler = require('./naverMapCrawler');

// 명령행 인자 파싱
const keyword = process.argv[2];
const maxResults = parseInt(process.argv[3]) || 10;

if (!keyword) {
  console.error('사용법: node crawlNaverMap.js <검색어> [수집할 최대 개수]');
  process.exit(1);
}

// 크롤링 실행 함수
async function runCrawling() {
  const crawler = new NaverMapCrawler();

  try {
    // 초기화
    await crawler.initialize();

    // 검색 및 수집 실행
    const results = await crawler.searchAndCollect(keyword, maxResults);

    console.log('----- 수집 완료 요약 -----');
    console.log(`검색어: ${keyword}`);
    console.log(`수집된 장소 수: ${results.length}`);

    // 수집된 장소 목록 출력
    if (results.length > 0) {
      console.log('\n수집된 장소 목록:');
      results.forEach((spot, index) => {
        console.log(`${index + 1}. ${spot.name} (${spot.address})`);
        console.log(`   카테고리: ${spot.categories.join(', ') || '없음'}`);
        console.log(
          `   리뷰: ${spot.reviewScore || '없음'} (${spot.reviewCount || 0}건)`
        );
        console.log(`   이미지 수: ${spot.imageUrls.length}개`);
        console.log('---');
      });
    }
  } catch (error) {
    console.error('크롤링 실행 중 오류 발생:', error);
  } finally {
    // 리소스 정리
    await crawler.close();
  }
}

// 크롤링 실행
runCrawling()
  .then(() => {
    console.log('프로그램 종료');
    process.exit(0);
  })
  .catch((error) => {
    console.error('프로그램 실행 중 오류 발생:', error);
    process.exit(1);
  });
