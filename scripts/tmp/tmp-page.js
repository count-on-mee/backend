/**
 * 네이버 지도 장소 정보 크롤링 스크립트 - pcmap.place.naver.com 버전
 * Python 코드에서 JavaScript로 변환된 버전
 */
'use strict';

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const {
  sequelize,
  Spot,
  SpotImg,
  SpotCategory,
  SpotCategoryRelation,
} = require('../../models');

/**
 * 네이버 지도 pcmap.place.naver.com 도메인의 장소 정보를 크롤링하는 클래스
 */
class NaverPlaceCrawler {
  constructor() {
    this.browser = null;
    this.page = null;
    this.categoryMap = {
      음식점: '식당',
      한식: '식당',
      일식: '식당',
      중식: '식당',
      양식: '식당',
      분식: '식당',
      카페: '카페',
      디저트: '카페',
      베이커리: '카페',
      숙박: '숙소',
      호텔: '숙소',
      모텔: '숙소',
      게스트하우스: '숙소',
      펜션: '숙소',
      관광명소: '관광지',
      문화시설: '복합 문화 공간',
      박물관: '박물관',
      미술관: '미술관',
      도서관: '도서관',
      역사: '역사',
      종교: '종교',
      사찰: '종교',
      교회: '종교',
    };
    this.categoryIds = {};
    this.debug = true;
  }

  /**
   * 디버그 로그 출력
   * @param {string} message 출력할 메시지
   */
  log(message) {
    if (this.debug) {
      console.log(`[NaverPlaceCrawler] ${message}`);
    }
  }

  /**
   * 브라우저 초기화 및 설정
   */
  async initialize() {
    try {
      // 카테고리 ID 매핑 초기화
      await this.initCategoryIds();

      this.log('브라우저 시작 중...');

      // 브라우저 시작 설정
      this.browser = await puppeteer.launch({
        headless: 'new', // 새로운 headless 모드 사용
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-web-security',
          '--disable-features=IsolateOrigins,site-per-process',
          '--window-size=1920,1080',
          '--disable-gpu',
          '--disable-dev-shm-usage',
        ],
        defaultViewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
      });

      this.page = await this.browser.newPage();

      // 페이지 설정
      await this.page.setDefaultNavigationTimeout(120000); // 타임아웃 2분으로 설정
      await this.page.setDefaultTimeout(60000);

      // 최신 크롬 사용자 에이전트 설정
      await this.page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      );

      this.log('브라우저 초기화 완료');
      return true;
    } catch (error) {
      console.error('브라우저 초기화 실패:', error);
      throw error;
    }
  }

  /**
   * 카테고리 ID 조회
   */
  async initCategoryIds() {
    try {
      const categories = await SpotCategory.findAll();
      for (const category of categories) {
        this.categoryIds[category.type] = category.spotCategoryId;
      }
      this.log('카테고리 ID 조회 완료');
      return true;
    } catch (error) {
      console.error('카테고리 ID 조회 실패:', error);
      throw error;
    }
  }

  /**
   * 크롤링 종료 및 자원 정리
   */
  async close() {
    if (this.browser) {
      await this.browser.close();
      this.log('브라우저 종료 완료');
    }
  }

  /**
   * 지정된 시간(ms) 동안 대기
   * @param {number} ms 대기 시간(밀리초)
   */
  async wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  /**
   * pcmap.place.naver.com 기반으로 장소 정보 검색 및 데이터 추출
   * @param {string} keyword 검색어
   * @param {number} maxResults 최대 결과 수
   */
  async searchAndCollect(keyword, maxResults = 20) {
    try {
      this.log(`'${keyword}' 검색 시작`);

      // 네이버 지도 장소 검색 페이지 URL
      const url = `https://pcmap.place.naver.com/place/list?query=${encodeURIComponent(
        keyword
      )}`;
      this.log(`검색 URL: ${url}`);

      let collectedData = [];
      let count = 0;
      let currentPage = 1;
      let hasMorePages = true;

      // 필요한 결과 수만큼 데이터 수집할 때까지 반복
      while (count < maxResults && hasMorePages) {
        this.log(`페이지 ${currentPage} 처리 중...`);

        if (currentPage === 1) {
          // 첫 페이지는 URL로 직접 접근
          await this.page.goto(url, {
            waitUntil: 'networkidle2',
            timeout: 60000,
          });
        } else {
          // 다음 페이지로 이동
          const hasNextPage = await this.goToNextPage(currentPage);
          if (!hasNextPage) {
            this.log(
              `더 이상 페이지가 없습니다. 페이지 ${
                currentPage - 1
              }에서 종료합니다.`
            );
            hasMorePages = false;
            break;
          }
        }

        // 페이지가 완전히 로드될 때까지 대기
        await this.wait(5000);

        // 현재 페이지에서 데이터 추출
        const pageData = await this.extractDataFromCurrentPage();
        if (!pageData || pageData.length === 0) {
          this.log(
            `페이지 ${currentPage}에서 더 이상 데이터를 찾을 수 없습니다.`
          );
          hasMorePages = false;
          break;
        }

        // 데이터 처리 및 저장
        for (const spotData of pageData) {
          // 이미 충분한 데이터를 수집했는지 확인
          if (count >= maxResults) {
            break;
          }

          try {
            // DB에 저장
            await this.saveSpotData(spotData);

            // 수집된 데이터 저장
            collectedData.push(spotData);
            count++;

            this.log(`${count}/${maxResults} 항목 처리 완료`);
          } catch (itemError) {
            console.error(`데이터 처리 중 오류:`, itemError);
            continue;
          }
        }

        // 다음 페이지로
        currentPage++;
      }

      this.log(`'${keyword}' 검색 완료, ${collectedData.length}개 장소 수집됨`);
      return collectedData;
    } catch (error) {
      console.error('검색 및 수집 중 오류 발생:', error);

      // 디버깅용 스크린샷 저장
      await this.page.screenshot({
        path: 'pcmap-error.png',
        fullPage: true,
      });

      throw error;
    }
  }

  /**
   * 다음 페이지로 이동
   * @param {number} targetPage 이동할 페이지 번호
   * @returns {boolean} 페이지 이동 성공 여부
   */
  async goToNextPage(targetPage) {
    try {
      this.log(`페이지 ${targetPage}로 이동 시도 중...`);

      // 페이지네이션 요소가 있는지 확인
      const paginationExists = await this.page.evaluate(() => {
        return document.querySelectorAll('a.mBN2s').length > 0;
      });

      if (!paginationExists) {
        this.log('페이지네이션 요소를 찾을 수 없습니다.');
        return false;
      }

      // 현재 활성화된 페이지 번호 확인
      const currentActivePage = await this.page.evaluate(() => {
        const activePageElement = document.querySelector('a.mBN2s.qxokY');
        return activePageElement
          ? parseInt(activePageElement.textContent.trim())
          : null;
      });

      this.log(
        `현재 활성화된 페이지: ${currentActivePage}, 목표 페이지: ${targetPage}`
      );

      // 다음 페이지 버튼 클릭하기
      const nextPageSuccess = await this.page.evaluate((targetPageNum) => {
        // 페이지 번호로 이동
        const pageButtons = Array.from(document.querySelectorAll('a.mBN2s'));
        const targetButton = pageButtons.find(
          (button) => button.textContent.trim() === String(targetPageNum)
        );

        if (targetButton) {
          targetButton.click();
          return true;
        }

        // 페이지 번호가 보이지 않는 경우(다음 버튼으로 이동)
        const nextButton = document.querySelector(
          'a.eUTV2[aria-disabled="true"]'
        );
        if (nextButton) {
          nextButton.click();
          return true;
        }

        return false;
      }, targetPage);

      if (!nextPageSuccess) {
        this.log(`페이지 ${targetPage}로 이동 실패`);
        return false;
      }

      // 페이지 이동 후 로딩 대기
      await this.wait(5000);
      await this.page
        .waitForFunction(
          () => !document.querySelector('.loader_spinner__S2GQp'),
          { timeout: 60000 }
        )
        .catch(() => {
          this.log('로딩 인디케이터가 사라지지 않았습니다. 계속 진행합니다.');
        });

      this.log(`페이지 ${targetPage}로 이동 성공`);
      return true;
    } catch (error) {
      console.error(`페이지 이동 중 오류 발생:`, error);
      return false;
    }
  }

  /**
   * 현재 페이지에서 장소 데이터 추출
   * @returns {Array} 장소 데이터 배열
   */
  async extractDataFromCurrentPage() {
    try {
      // window.__APOLLO_STATE__ 데이터 추출
      const apolloStateData = await this.page.evaluate(() => {
        try {
          // window.__APOLLO_STATE__ 객체에 접근
          if (window.__APOLLO_STATE__) {
            return window.__APOLLO_STATE__;
          }
          return null;
        } catch (e) {
          console.error('Apollo state 추출 실패:', e);
          return null;
        }
      });

      // Apollo State 데이터가 없으면 페이지 소스에서 정규식으로 추출 시도
      let parsedData = apolloStateData;
      if (!parsedData) {
        this.log(
          'window.__APOLLO_STATE__ 직접 접근 실패, 페이지 소스에서 추출 시도...'
        );
        const pageSource = await this.page.content();
        const apolloStateRegex = /window\.__APOLLO_STATE__\s*=\s*({.*?});/s;
        const match = pageSource.match(apolloStateRegex);

        if (match && match[1]) {
          try {
            parsedData = JSON.parse(match[1]);
            this.log('정규식으로 Apollo state 추출 성공');
          } catch (e) {
            console.error('Apollo state JSON 파싱 실패:', e);
          }
        }
      }

      if (!parsedData) {
        throw new Error(
          '장소 데이터를 추출할 수 없습니다. 페이지 구조가 변경되었을 수 있습니다.'
        );
      }

      // 디버깅용 파일 저장
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      await fs.writeFile(
        `apollo_state_page_${timestamp}.json`,
        JSON.stringify(parsedData, null, 2)
      );

      // 장소 데이터 추출 및 가공
      const collectedData = [];

      // Apollo State에서 RestaurantListSummary 또는 PlaceListSummary로 시작하는 키 찾기
      for (const key of Object.keys(parsedData)) {
        if (
          key.includes('RestaurantListSummary') || // 식당
          key.includes('PlaceSummary') || // 숙소
          key.includes('AttractionListSummary') ||
          key.includes('AccommodationListSummary')
        ) {
          const data = parsedData[key];

          try {
            const spotData = {
              name: data.name,
              naverSpotId: data.id.toString(),
              location: {
                longitude: parseFloat(data.x),
                latitude: parseFloat(data.y),
              },
              address: data.commonAddress + ' ' + data.roadAddress,
              tel: data.phone || data.virtualPhone,
              reviewCount: parseInt(data.visitorReviewCount) || 0,
              reviewScore: data.visitorReviewScore || null,
              imageUrls: Array.isArray(data.imageUrls) ? data.imageUrls : [],
              categories: [],
            };

            // 카테고리 처리
            if (data.businessCategory || data.category) {
              const categoryData = data.businessCategory || data.category;
              const categoryParts = categoryData
                .split(/[>|,]/)
                .map((c) => c.trim());

              spotData.categories = categoryParts
                .map((c) => this.mapNaverCategoryToSpotCategory(c))
                .filter(Boolean);
            }

            // 수집된 데이터 저장
            collectedData.push(spotData);
          } catch (itemError) {
            console.error(`데이터 처리 중 오류:`, itemError);
            continue;
          }
        }
      }

      this.log(
        `현재 페이지에서 ${collectedData.length}개 장소 데이터 추출 성공`
      );
      return collectedData;
    } catch (error) {
      console.error('데이터 추출 중 오류 발생:', error);
      return [];
    }
  }

  /**
   * 네이버 카테고리를 스팟 카테고리로 매핑
   * @param {string} naverCategory 네이버 카테고리
   * @returns {string} 스팟 카테고리
   */
  mapNaverCategoryToSpotCategory(naverCategory) {
    if (!naverCategory) return null;

    // 정확한 매핑 먼저 시도
    if (this.categoryMap[naverCategory]) {
      return this.categoryMap[naverCategory];
    }

    // 키워드 기반 매핑 시도
    const categoryKeywords = {
      식당: [
        'restaurant',
        '식당',
        '음식',
        '맛집',
        '요리',
        '레스토랑',
        '분식',
        '한식',
        '일식',
        '중식',
        '양식',
        '주점',
        '음식점',
      ],
      카페: [
        'cafe',
        '카페',
        '다방',
        '디저트',
        '베이커리',
        '커피',
        '차',
        '빵집',
      ],
      숙소: [
        '숙소',
        '호텔',
        '모텔',
        '게스트하우스',
        '리조트',
        '펜션',
        '민박',
        '기타숙박업',
        '생활형숙박시설',
        '레지던스',
        '호스텔',
      ],
      관광지: ['관광', '명소', '유적', '유원지', '공원', '테마파크'],
      '복합 문화 공간': [
        '문화',
        '공연',
        '전시',
        '예술',
        '센터',
        '쇼핑',
        '몰',
        '백화점',
      ],
      박물관: ['박물관', '뮤지엄', '유물', '전시관'],
      미술관: ['미술관', '갤러리', '예술관'],
      도서관: ['도서관', '서점', '책방', '북카페'],
      역사: ['역사', '고궁', '성', '유적지', '고택', '전통', '궁궐'],
      종교: ['종교', '사찰', '절', '교회', '성당', '신사', '사원'],
    };

    // 정규화된 카테고리 (소문자, 공백 제거)
    const normalizedCategory = naverCategory.toLowerCase().replace(/\s+/g, '');

    // 카테고리 키워드 매칭
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      for (const keyword of keywords) {
        if (normalizedCategory.includes(keyword.toLowerCase())) {
          return category;
        }
      }
    }

    this.log(`매핑되지 않은 카테고리: ${naverCategory}`);
    return null;
  }

  /**
   * 스팟 데이터를 데이터베이스에 저장
   * @param {Object} spotData 수집한 스팟 데이터
   */
  async saveSpotData(spotData) {
    let transaction;

    try {
      // 트랜잭션 시작
      transaction = await sequelize.transaction();

      // 기존 스팟 확인 (네이버 ID로)
      let spot = null;
      if (spotData.naverSpotId) {
        spot = await Spot.findOne({
          where: { naverSpotId: spotData.naverSpotId },
          transaction,
        });
      }

      // 스팟 생성 또는 업데이트
      if (!spot) {
        // 새 스팟 생성
        spot = await Spot.create(
          {
            name: spotData.name,
            address: spotData.address,
            tel: spotData.tel,
            location: spotData.location,
            naverSpotId: spotData.naverSpotId,
            reviewCount: spotData.reviewCount,
            reviewScore: spotData.reviewScore,
          },
          { transaction }
        );

        this.log(`새 스팟 생성됨: ${spotData.name} (ID: ${spot.spotId})`);
      } else {
        // 기존 스팟 업데이트
        await spot.update(
          {
            name: spotData.name,
            address: spotData.address,
            tel: spotData.tel,
            location: spotData.location,
            reviewCount: spotData.reviewCount,
            reviewScore: spotData.reviewScore,
          },
          { transaction }
        );

        this.log(`기존 스팟 업데이트됨: ${spotData.name} (ID: ${spot.spotId})`);
      }

      // 이미지 처리
      if (spotData.imageUrls && spotData.imageUrls.length > 0) {
        // 기존 이미지 삭제
        await SpotImg.destroy({
          where: { spotId: spot.spotId },
          transaction,
        });

        // 새 이미지 추가
        const imageData = spotData.imageUrls.map((url) => ({
          spotId: spot.spotId,
          imageUrl: url,
        }));

        await SpotImg.bulkCreate(imageData, { transaction });
        this.log(`${imageData.length}개 이미지 저장됨`);
      }

      // 카테고리 처리
      if (spotData.categories && spotData.categories.length > 0) {
        // 기존 카테고리 관계 삭제
        await SpotCategoryRelation.destroy({
          where: { spotId: spot.spotId },
          transaction,
        });

        // 카테고리 관계 생성
        for (const categoryName of spotData.categories) {
          const categoryId = this.categoryIds[categoryName];
          if (categoryId) {
            await SpotCategoryRelation.create(
              {
                spotId: spot.spotId,
                spotCategoryId: categoryId,
              },
              { transaction }
            );
            this.log(`카테고리 연결됨: ${categoryName} (ID: ${categoryId})`);
          }
        }
      }

      // 트랜잭션 커밋
      await transaction.commit();
      this.log(`스팟 저장 완료: ${spotData.name}`);
      return spot;
    } catch (error) {
      // 오류 발생 시 롤백
      if (transaction) await transaction.rollback();
      console.error('스팟 데이터 저장 중 오류 발생:', error);
      throw error;
    }
  }
}

/**
 * 크롤러 실행 함수
 * @param {string} keyword 검색어
 * @param {number} maxResults 최대 결과 수
 */
async function runCrawler(keyword = '신촌', maxResults = 10) {
  const crawler = new NaverPlaceCrawler();

  try {
    await crawler.initialize();

    // 검색어가 배열인 경우 여러 검색어를 처리
    if (Array.isArray(keyword)) {
      for (const query of keyword) {
        await crawler.searchAndCollect(query, maxResults);
      }
    } else {
      // 단일 검색어 처리
      await crawler.searchAndCollect(keyword, maxResults);
    }

    console.log('크롤링 완료!');
  } catch (error) {
    console.error('크롤링 실패:', error);
  } finally {
    await crawler.close();
  }
}

// 명령행 인자 파싱
if (require.main === module) {
  // 첫 번째 인자는 검색어
  const keyword = process.argv[2];
  // 두 번째 인자는 최대 결과 수 (기본값: 10)
  const maxResults = parseInt(process.argv[3]) || 10;

  console.log(`검색어: ${keyword}, 최대 결과 수: ${maxResults}`);

  runCrawler(keyword, maxResults)
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('프로그램 실행 오류:', error);
      process.exit(1);
    });
}

module.exports = NaverPlaceCrawler;
