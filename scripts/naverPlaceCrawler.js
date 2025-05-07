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
} = require('../models');

/**
 * 네이버 지도 pcmap.place.naver.com 도메인의 장소 정보를 크롤링하는 클래스
 */
class NaverPlaceCrawler {
  constructor(options = {}) {
    this.browser = null;
    this.page = null;
    this.categoryIds = {};
    this.debug = true;
    this.saveToDatabase = options.saveToDatabase ?? true; // DB 저장 여부 옵션 추가
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

      // 페이지 로드
      await this.page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: 60000,
      });

      // 페이지가 완전히 로드될 때까지 대기
      await this.wait(5000);

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

      // 디버깅용 파일 저장 (필요시 주석 해제)
      await fs.writeFile(
        'apollo_state.json',
        JSON.stringify(parsedData, null, 2)
      );

      // 장소 데이터 추출 및 가공
      const collectedData = [];
      let count = 0;

      // Apollo State에서 RestaurantListSummary 또는 PlaceListSummary로 시작하는 키 찾기
      for (const key of Object.keys(parsedData)) {
        if (
          // 식당, 카페
          key.includes('RestaurantListSummary') ||
          // 숙소, 관광지, 도서관, 국가유산 (역사), 종교
          key.includes('PlaceSummary') ||
          // 박물관, 미술관
          key.includes('AttractionListItem')
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
              imageUrls: Array.isArray(data.imageUrls)
                ? data.imageUrls
                : data.imageUrl
                ? [data.imageUrl]
                : [],
              categories: [],
            };

            // 카테고리 처리
            if (data.businessCategory || data.category) {
              const categoryData = data.businessCategory || data.category;
              const categoryParts = categoryData
                .split(/[>|,]/)
                .map((c) => c.trim());

              // 중복 제거를 위해 Set 사용
              spotData.categories = [
                ...new Set(
                  categoryParts
                    .map((c) => this.mapNaverCategoryToSpotCategory(c))
                    .filter(Boolean)
                ),
              ];
            }

            // 수집된 데이터 저장
            collectedData.push(spotData);
            count++;

            // DB에 저장
            await this.saveSpotData(spotData);

            // 최대 결과 수에 도달하면 종료
            if (count >= maxResults) {
              break;
            }
          } catch (itemError) {
            console.error(`데이터 처리 중 오류:`, itemError);
            continue;
          }
        }
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
   * 네이버 카테고리를 스팟 카테고리로 매핑
   * @param {string} naverCategory 네이버 카테고리
   * @returns {string} 스팟 카테고리
   */
  mapNaverCategoryToSpotCategory(naverCategory) {
    if (!naverCategory) return null;

    const categoryKeywords = {
      식당: [
        'restaurant',
        'bar',
        '식당',
        '음식점',
        '음식',
        '맛집',
        '요리',
        '레스토랑',
        '분식',
        '한식',
        '일식',
        '중식',
        '양식',
        '분식',
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
        '숙박',
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
      관광지: [
        '관광',
        '관광명소',
        '명소',
        '유적',
        '유원지',
        '공원',
        '테마파크',
        '아쿠아리움',
        '거리',
        '골목',
        '체험여행',
        '체험마을',
        '도시',
        '기념관',
        '도보코스',
        '관람',
        '체험',
        '온천',
        '스파',
        '먹자거리',
      ],
      자연: [
        '강',
        '하천',
        '바다',
        '산',
        '자연',
        '공원',
        '자연환경',
        '자연관광',
      ],
      '복합 문화 공간': [
        '문화',
        '공연',
        '전시',
        '예술',
        '센터',
        '쇼핑',
        '몰',
        '영화관',
        '박람회',
        '홍보관',
        '복싱',
        '권투장',
        '화랑',
        '사진',
        '스튜디오',
        '도심공항터미널',
        '만화방',
        '연극시설',
        '백화점',
        '문화시설',
        '관리사무소',
        '부속시설',
      ],
      박물관: ['박물관', '뮤지엄', '유물', '전시관'],
      미술관: ['미술관', '갤러리', '예술관'],
      도서관: ['도서관', '서점', '책방', '북카페', '입시교육'],
      역사: [
        '역사',
        '고궁',
        '성',
        '유적지',
        '고택',
        '전통',
        '궁궐',
        '생가',
        '릉',
        '묘',
        '총',
        '재단',
        '은행',
        '협회',
        '경영컨설팅',
        '단체',
      ],
      종교: [
        '종교',
        '사찰',
        '절',
        '교회',
        '성당',
        '신사',
        '사원',
        '개신교',
        '원불교',
        '천주교',
        '템플스테이',
      ],
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
    // DB 저장 옵션이 false인 경우 저장하지 않고 데이터만 반환
    if (!this.saveToDatabase) {
      return spotData;
    }

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

      // 이미지 처리 - 기존 이미지가 있으면 스킵
      if (spotData.imageUrls && spotData.imageUrls.length > 0) {
        const existingImages = await SpotImg.findAll({
          where: { spotId: spot.spotId },
          transaction,
        });

        if (existingImages.length === 0) {
          // 새 이미지 추가
          const imageData = spotData.imageUrls.map((url) => ({
            spotId: spot.spotId,
            imageUrl: url,
          }));

          await SpotImg.bulkCreate(imageData, { transaction });
          this.log(`${imageData.length}개 이미지 저장됨`);
        } else {
          this.log('기존 이미지가 존재하여 스킵');
        }
      }

      // 카테고리 처리 - 중복되지 않는 카테고리만 추가
      if (spotData.categories && spotData.categories.length > 0) {
        // 기존 카테고리 관계 조회
        const existingRelations = await SpotCategoryRelation.findAll({
          where: { spotId: spot.spotId },
          transaction,
        });
        const existingCategoryIds = new Set(
          existingRelations.map((rel) => rel.spotCategoryId)
        );

        // 중복되지 않는 카테고리만 추가
        for (const categoryName of spotData.categories) {
          const categoryId = this.categoryIds[categoryName];
          if (categoryId && !existingCategoryIds.has(categoryId)) {
            await SpotCategoryRelation.create(
              {
                spotId: spot.spotId,
                spotCategoryId: categoryId,
              },
              { transaction }
            );
            this.log(`새 카테고리 연결됨: ${categoryName} (ID: ${categoryId})`);
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
 * @param {boolean} saveToDatabase DB 저장 여부
 */
async function runCrawler(
  keyword = '신촌',
  maxResults = 10,
  saveToDatabase = true
) {
  const crawler = new NaverPlaceCrawler({ saveToDatabase });

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
  // 두 번째 인자는 최대 결과 수 (기본값: 10, 최대: 50)
  const maxResults = Math.min(parseInt(process.argv[3]) || 10, 50);
  // 세 번째 인자는 DB 저장 여부 (기본값: true)
  const saveToDatabase = process.argv[4] !== 'false';

  console.log(
    `검색어: ${keyword}, 최대 결과 수: ${maxResults}, DB 저장: ${saveToDatabase}`
  );

  runCrawler(keyword, maxResults, saveToDatabase)
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('프로그램 실행 오류:', error);
      process.exit(1);
    });
}

module.exports = NaverPlaceCrawler;
