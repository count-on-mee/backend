'use strict';

const puppeteer = require('puppeteer');
const {
  sequelize,
  Spot,
  SpotImg,
  SpotCategory,
  SpotCategoryRelation,
} = require('../models');

/**
 * 네이버 지도 장소 정보 크롤링 클래스 - 개선된 버전
 */
class NaverMapCrawler {
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
    this.debug = true; // 디버깅 출력을 위한 플래그
  }

  /**
   * 디버그 로그 출력
   * @param {string} message 출력할 메시지
   */
  log(message) {
    if (this.debug) {
      console.log(`[NaverMapCrawler] ${message}`);
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
   * 브라우저 초기화
   */
  async initialize() {
    try {
      // 카테고리 ID 매핑 초기화
      await this.initCategoryIds();

      this.log('브라우저 시작 중...');

      // 브라우저 시작 - 개선된 옵션 설정
      this.browser = await puppeteer.launch({
        headless: false, // 디버깅을 위해 브라우저 표시
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

      // 페이지 설정 개선
      await this.page.setDefaultNavigationTimeout(120000); // 타임아웃 2분으로 증가
      await this.page.setDefaultTimeout(60000);

      // 리소스 로딩 최적화
      // await this.page.setRequestInterception(true);
      // this.page.on('request', (req) => {
      //   // 불필요한 리소스 차단하여 속도 향상
      //   const resourceType = req.resourceType();
      //   if (['image', 'media', 'font'].includes(resourceType)) {
      //     req.abort();
      //   } else {
      //     req.continue();
      //   }
      // });

      // 최신 크롬 사용자 에이전트 설정
      await this.page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      );

      // localStorage 접근 오류 방지: try-catch로 감싸서 오류 무시
      await this.page.evaluateOnNewDocument(() => {
        try {
          Object.defineProperty(window, 'localStorage', {
            get: function () {
              return {
                getItem: function () {
                  return null;
                },
                setItem: function () {
                  return null;
                },
                removeItem: function () {
                  return null;
                },
                clear: function () {
                  return null;
                },
              };
            },
          });

          Object.defineProperty(window, 'sessionStorage', {
            get: function () {
              return {
                getItem: function () {
                  return null;
                },
                setItem: function () {
                  return null;
                },
                removeItem: function () {
                  return null;
                },
                clear: function () {
                  return null;
                },
              };
            },
          });
        } catch (e) {
          console.warn('Failed to mock localStorage/sessionStorage');
        }
      });

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
   *
   * 크롤링 종료 및 자원 정리
   */
  async close() {
    if (this.browser) {
      await this.browser.close();
      this.log('브라우저 종료 완료');
    }
  }

  /**
   * 상세 페이지에서 이미지 URL 수집
   */
  async collectImagesFromDetailPage() {
    try {
      // entryIframe 찾기
      const entryFrameSelector = 'iframe#entryIframe';
      const hasEntryFrame = (await this.page.$(entryFrameSelector)) !== null;

      if (!hasEntryFrame) {
        this.log(
          'entryIframe을 찾을 수 없습니다. 메인 페이지에서 이미지 검색 시도...'
        );
        return await this.extractImagesFromMainPage();
      }

      // iframe 내부 내용 처리
      await this.page.waitForSelector(entryFrameSelector, { timeout: 5000 });
      const entryFrame = await this.page
        .frames()
        .find((frame) => frame.name() === 'entryIframe');

      if (!entryFrame) {
        this.log('entryIframe을 불러올 수 없습니다.');
        return [];
      }

      // 다양한 이미지 선택자 시도
      const imgSelectors = [
        '.place_section_content .K0PDV img',
        '.place_section_content .fIgFx img',
        '.UoIF_ img',
        '.place_photo img',
        '.K0PDV img',
        '.fIgFx img',
        '.uDR4i img',
        'img[src*="pstatic.net/place"]',
        'img.kR2jx', // 새로운 클래스 추가
      ];

      for (const selector of imgSelectors) {
        try {
          const urls = await entryFrame.evaluate((sel) => {
            const imgElements = document.querySelectorAll(sel);
            return Array.from(imgElements)
              .map((img) => img.src)
              .filter(
                (url) =>
                  url &&
                  !url.includes('transparent.gif') &&
                  !url.includes('blank.gif') &&
                  !url.includes('ico_noimage')
              );
          }, selector);

          if (urls && urls.length > 0) {
            this.log(`${urls.length}개 이미지 URL 수집됨`);
            return urls;
          }
        } catch (e) {
          this.log(`셀렉터 ${selector}에서 이미지 추출 실패: ${e.message}`);
        }
      }

      this.log('기본 선택자로 이미지를 찾지 못함. 일반 이미지 태그 검색...');
      return await entryFrame.evaluate(() => {
        const imgs = document.querySelectorAll('img');
        return Array.from(imgs)
          .map((img) => img.src)
          .filter(
            (url) =>
              url.includes('pstatic.net') &&
              !url.includes('transparent.gif') &&
              !url.includes('blank.gif') &&
              !url.includes('ico_noimage')
          );
      });
    } catch (error) {
      console.error('이미지 URL 수집 중 오류:', error);
      return [];
    }
  }

  /**
   * 메인 페이지에서 이미지 추출 시도
   */
  async extractImagesFromMainPage() {
    try {
      return await this.page.evaluate(() => {
        const imgs = document.querySelectorAll('img[src*="pstatic.net"]');
        return Array.from(imgs)
          .map((img) => img.src)
          .filter(
            (url) =>
              url &&
              (url.includes('/place/') ||
                url.includes('/restaurant/') ||
                url.includes('/shop/')) &&
              !url.includes('transparent.gif') &&
              !url.includes('blank.gif') &&
              !url.includes('ico_noimage')
          );
      });
    } catch (error) {
      console.error('메인 페이지 이미지 추출 중 오류:', error);
      return [];
    }
  }

  /**
   * 검색어로 장소 검색 및 데이터 수집
   * @param {string} keyword 검색어
   * @param {number} maxResults 최대 결과 수
   */
  async searchAndCollect(keyword, maxResults = 10) {
    return await this.searchWithWebInterface(keyword, maxResults);
  }

  /**
   * 웹 인터페이스를 통한 검색 (iframe 이동 최소화 버전)
   * @param {string} keyword 검색어
   * @param {number} maxResults 최대 결과 수
   */
  async searchWithWebInterface(keyword, maxResults = 10) {
    try {
      this.log(`웹 인터페이스로 '${keyword}' 검색 시작`);

      // 최신 네이버 지도 URL 패턴 사용 (P 버전)
      const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(
        keyword
      )}`;
      this.log(`검색 URL: ${searchUrl}`);

      // 네이버 지도 검색 페이지로 이동
      await this.page.goto(searchUrl, {
        waitUntil: 'networkidle2',
        timeout: 60000,
      });

      this.log('페이지 로드 완료, 검색 결과 iframe 대기 중...');
      await this.wait(5000);

      // 검색 결과 iframe 찾기
      const searchIframeSelector = 'iframe#searchIframe';
      let searchFrame = null;

      // 1. 직접적인 iframe 선택자로 시도
      try {
        await this.page.waitForSelector(searchIframeSelector, {
          timeout: 10000,
        });
        searchFrame = await this.page
          .frames()
          .find((frame) => frame.name() === 'searchIframe');
        this.log('searchIframe 직접 선택으로 발견');
      } catch (e) {
        this.log('직접 선택자로 searchIframe을 찾지 못함, 대체 방법 시도...');
      }

      // iframe을 찾지 못한 경우 오류 발생
      if (!searchFrame) {
        // 디버깅용 스크린샷 저장
        await this.page.screenshot({
          path: 'iframe-not-found.png',
          fullPage: true,
        });
        throw new Error(
          '검색 결과 iframe을 찾을 수 없습니다. 웹페이지 구조가 변경되었을 수 있습니다.'
        );
      }

      // 검색 결과 항목 선택자 찾기 (다양한 선택자 시도)
      const selectors = [
        // 'div.qbGlu',
        // 검색 결과 컨테이너
        'li.VLTHu', // 숙소
        'li.UEzoS', // 카페
      ];

      let resultSelector = null;

      for (const selector of selectors) {
        try {
          const count = await searchFrame.evaluate(
            (sel) => document.querySelectorAll(sel).length,
            selector
          );
          if (count > 0) {
            resultSelector = selector;
            this.log(`검색 결과 선택자 발견: ${selector} (${count}개 항목)`);
            break;
          }
        } catch (e) {
          continue;
        }
      }

      if (!resultSelector) {
        // 오류 발생 전 페이지 구조 로깅
        await searchFrame.evaluate(() => {
          console.log('페이지 HTML 구조:', document.body.innerHTML);
        });

        // 디버깅용 스크린샷 저장
        await this.page.screenshot({
          path: 'search-results-not-found.png',
          fullPage: true,
        });
        this.log(
          '검색 결과를 찾지 못했습니다. 스크린샷을 저장했습니다: search-results-not-found.png'
        );

        throw new Error(
          '검색 결과 항목 선택자를 찾을 수 없습니다. 네이버 지도 UI가 변경되었을 수 있습니다.'
        );
      }

      // 스크롤을 내려 더 많은 결과 로드 (필요한 경우)
      if (maxResults > 10) {
        this.log('추가 결과를 로드하기 위해 스크롤 다운 시도...');
        await this.scrollInFrame(searchFrame, 3); // 몇 번 스크롤할지 지정
      }

      // 검색 결과 목록 가져오기
      await searchFrame.waitForSelector(resultSelector, { timeout: 10000 });
      const listItems = await searchFrame.$$(resultSelector);
      this.log(`${listItems.length}개의 검색 결과 발견`);

      if (listItems.length === 0) {
        throw new Error('검색 결과가 없습니다.');
      }

      // 수집할 결과 수 제한
      const itemsToProcess = listItems.slice(
        0,
        Math.min(maxResults, listItems.length)
      );

      // 결과 기록용 배열
      const collectedData = [];

      // iframe 내에서 직접 모든 데이터 추출 (entryIframe으로 이동하지 않음)
      for (let i = 0; i < itemsToProcess.length; i++) {
        this.log(`[${i + 1}/${itemsToProcess.length}] 장소 정보 수집 중...`);

        try {
          // 각 항목에서 필요한 정보를 직접 추출
          const spotData = await searchFrame.evaluate(
            (index, resultSel) => {
              // 현재 항목 선택
              const item = document.querySelectorAll(resultSel)[index];
              if (!item) return null;

              // ID 추출 시도
              let id = null;
              if (item.getAttribute('data-id')) {
                id = item.getAttribute('data-id');
              } else if (item.getAttribute('data-place-id')) {
                id = item.getAttribute('data-place-id');
              } else if (item.getAttribute('data-loc-id')) {
                id = item.getAttribute('data-loc-id');
              } else {
                // href에서 ID 추출 시도
                const linkEl = item.querySelector('a[href*="place"]');
                if (linkEl && linkEl.href) {
                  const match = linkEl.href.match(/place\/(\d+)/);
                  if (match && match[1]) {
                    id = match[1];
                  }
                }
              }

              // 이름 추출 (다양한 선택자 시도)
              const nameSelectors = [
                // 최신 선택자
                'span.YwYLL',
                'span.TYaxT', // 카페
              ];

              let name = null;
              for (const sel of nameSelectors) {
                const el = item.querySelector(sel);
                if (el) {
                  name = el.textContent.trim() || el.getAttribute('title');
                  if (name) break;
                }
              }

              // 주소 추출
              const addressSelectors = [
                '.Q8Zql', // 최신 선택자
                '.address',
                '.IH7VW',
                '.Y3tQK',
                '.hClKF',
                '.hR5sB',
                '.place_address',
                '.addr',
              ];

              let address = null;
              for (const sel of addressSelectors) {
                const el = item.querySelector(sel);
                if (el) {
                  address = el.textContent.trim();
                  if (address) break;
                }
              }

              // 카테고리 추출
              const categorySelectors = [
                '.vUqKY', // 최신 선택자
                '.category',
                '.DJJvD',
                '.KCMnt',
                '.UvdDQ',
                '.place_category',
                '.type',
              ];

              let category = null;
              for (const sel of categorySelectors) {
                const el = item.querySelector(sel);
                if (el) {
                  category = el.textContent.trim();
                  if (category) break;
                }
              }

              // 전화번호 추출
              const telSelectors = [
                '.MxgIj', // 최신 선택자
                '.phone',
                '.xlx7Q',
                '.w9QyJ',
                '.place_tel',
                '.tel',
              ];

              let tel = null;
              for (const sel of telSelectors) {
                const el = item.querySelector(sel);
                if (el) {
                  tel = el.textContent.trim();
                  if (tel) break;
                }
              }

              // 리뷰 점수 추출
              const scoreSelectors = [
                '.MN48z', // 최신 선택자
                '.rating',
                '.LZ3Zm',
                '.place_rating',
                '.score',
              ];

              let reviewScore = null;
              for (const sel of scoreSelectors) {
                const el = item.querySelector(sel);
                if (el) {
                  const text = el.textContent.trim();
                  const match = text.match(/[\d\.]+/);
                  if (match) {
                    reviewScore = parseFloat(match[0]);
                    break;
                  }
                }
              }

              // 리뷰 수 추출
              const reviewCountSelectors = [
                '.FNlki', // 최신 선택자
                '.review_count',
                '.place_review_count',
                '.review_num',
                '.s_review_count',
              ];

              let reviewCount = null;
              for (const sel of reviewCountSelectors) {
                const el = item.querySelector(sel);
                if (el) {
                  const text = el.textContent.trim();
                  const match = text.match(
                    /리뷰\s*(\d+)|방문자\s*리뷰\s*(\d+)|평가\s*(\d+)/i
                  );
                  if (match) {
                    reviewCount = parseInt(match[1] || match[2] || match[3]);
                    break;
                  }
                }
              }

              // 이미지 URL 추출
              const imgSelectors = [
                'img.K0PDV', // 최신 선택자
                'img.place_thumb',
                'img[src*="pstatic.net"]',
                '.K0PDV',
                '.place_thumb',
              ];

              let imageUrl = null;
              for (const sel of imgSelectors) {
                const el = item.querySelector(sel);
                if (el) {
                  imageUrl =
                    el.src ||
                    el.getAttribute('data-src') ||
                    el.getAttribute('data-lazy-src');
                  if (imageUrl) break;
                }
              }

              // 배경 이미지가 있는 경우 처리
              if (!imageUrl) {
                const bgElements = item.querySelectorAll(
                  '[style*="background-image"]'
                );
                for (const el of bgElements) {
                  const style = getComputedStyle(el);
                  const bgImage = style.backgroundImage;
                  if (bgImage && bgImage !== 'none') {
                    const match = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
                    if (match && match[1]) {
                      imageUrl = match[1];
                      break;
                    }
                  }
                }
              }

              // 좌표 정보 추출 시도
              let location = null;
              if (
                item.getAttribute('data-lat') &&
                item.getAttribute('data-lng')
              ) {
                location = {
                  latitude: parseFloat(item.getAttribute('data-lat')),
                  longitude: parseFloat(item.getAttribute('data-lng')),
                };
              } else if (
                item.getAttribute('data-latitude') &&
                item.getAttribute('data-longitude')
              ) {
                location = {
                  latitude: parseFloat(item.getAttribute('data-latitude')),
                  longitude: parseFloat(item.getAttribute('data-longitude')),
                };
              }

              return {
                name,
                address,
                tel,
                naverSpotId: id,
                reviewCount,
                reviewScore,
                imageUrls: imageUrl ? [imageUrl] : [],
                categories: category
                  ? category.split(/[>|,]/).map((c) => c.trim())
                  : [],
                location,
              };
            },
            i,
            resultSelector
          );

          // 데이터 검증
          if (spotData && spotData.name) {
            // 이미지가 부족하면 추가로 이미지 찾기 시도
            if (spotData.imageUrls.length < 3 && spotData.naverSpotId) {
              try {
                // 항목 클릭하여 우측 패널에 상세 정보 표시
                await itemsToProcess[i].click();
                await this.wait(3000);

                // 미리보기로 표시된 추가 이미지 URL 수집 (메인 페이지에서)
                const additionalImages = await this.page.evaluate(() => {
                  // 메인 페이지에서 이미지 수집 시도
                  const imgElements = document.querySelectorAll(
                    'img[src*="pstatic.net"]:not([src*="transparent.gif"]):not([src*="blank.gif"]):not([src*="ico_noimage"])'
                  );
                  return Array.from(imgElements)
                    .map((img) => img.src)
                    .filter(
                      (src) =>
                        src.includes('/place/') ||
                        src.includes('/restaurant/') ||
                        src.includes('/shop/')
                    );
                });

                if (additionalImages && additionalImages.length > 0) {
                  // 중복 제거 후 기존 이미지에 추가
                  const uniqueImages = [
                    ...new Set([...spotData.imageUrls, ...additionalImages]),
                  ];
                  spotData.imageUrls = uniqueImages;
                  this.log(
                    `${spotData.name}에 대해 ${uniqueImages.length}개 이미지 URL 수집`
                  );
                }

                // 다시 검색 결과로 돌아가기
                await searchFrame.click(resultSelector);
                await this.wait(1000);
              } catch (imgError) {
                this.log(`추가 이미지 수집 중 오류: ${imgError.message}`);
              }
            }

            // 결과 저장
            collectedData.push(spotData);

            // DB에 저장
            await this.saveSpotData(spotData);
          } else {
            this.log('유효한 데이터를 수집하지 못했습니다.');
          }
        } catch (itemError) {
          console.error(`[${i + 1}] 항목 처리 중 오류:`, itemError);
          continue;
        }
      }

      this.log(`'${keyword}' 검색 완료, ${collectedData.length}개 장소 수집됨`);
      return collectedData;
    } catch (error) {
      console.error('검색 및 수집 중 오류 발생:', error);

      // 스크린샷 찍어서 디버깅
      await this.page.screenshot({
        path: 'error-screenshot.png',
        fullPage: true,
      });
      this.log(
        '오류 발생 시점의 스크린샷을 저장했습니다: error-screenshot.png'
      );

      throw error;
    }
    console.log(
      '🚀 ~ NaverMapCrawler ~ searchWithWebInterface ~ searchFrame:',
      searchFrame
    );
    console.log(
      '🚀 ~ NaverMapCrawler ~ searchWithWebInterface ~ searchFrame:',
      searchFrame
    );
    console.log(
      '🚀 ~ NaverMapCrawler ~ searchWithWebInterface ~ searchFrame:',
      searchFrame
    );
  }

  /**
   * URL에서 네이버 스팟 ID 추출
   * @param {string} url URL
   * @returns {string|null} 스팟 ID
   */
  extractSpotIdFromUrl(url) {
    const patterns = [
      /place\/(\d+)/,
      /place\?id=(\d+)/,
      /entry\/place\/(\d+)/,
      /v5\/entry\/place\/(\d+)/,
      /p\/place\/(\d+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  }

  /**
   * iframe 내에서 스크롤하여 더 많은 결과 로드
   * @param {Frame} frame 스크롤할 프레임
   * @param {number} times 스크롤 횟수
   */
  async scrollInFrame(frame, times = 3) {
    for (let i = 0; i < times; i++) {
      await frame.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      this.log(`스크롤 다운 ${i + 1}/${times}`);
      await this.wait(2000); // 추가 결과 로딩 대기
    }
  }

  /**
   * 개선된 상세 정보 추출 함수
   * @param {Frame} frame 상세 정보 프레임
   */
  async extractDetailDataImproved(frame) {
    try {
      // 이름 추출 (가장 중요한 정보이므로 더 많은 선택자 시도)
      const name = await this.extractTextWithSelectors(frame, [
        'span.GHAhO',
        // '.place_section_header .title',
        // 'h1.Fc1rA',
        // 'h2.place_name',
        // '.PXMot',
        // '.lsnAf',
        // '.Fc1rA',
        // '.K7Lms',
        // '.Jxtsc h2',
        // 'div[role="main"] h1',
        // 'div[role="main"] h2',
        // 'div.lsnAf',
        // 'span.Fc1rA',
        // 'span.K7Lms',
        // 업데이트된 선택자 추가
      ]);

      this.log(`장소 이름: ${name || '추출 실패'}`);

      // 나머지 정보는 기존 함수와 동일하게 추출
      const categoryText = await this.extractTextWithSelectors(frame, [
        'span.lnJFt',
        // '.place_section_header .category',
        // '.DJJvD',
        // '.category',
        // '.place_category',
        // '.O8qbU',
        // '.DjPUM',
        // '.N_KkG',
        // '.KDewF',
      ]);

      this.log(`장소 카테고리: ${categoryText || '추출 실패'}`);

      const address = await this.extractTextWithSelectors(frame, [
        'span.LDgIH',
        // '.place_section_content .LDgIH',
        // '.place_section_content .IH7VW',
        // '.address',
        // '.CwQv2',
        // '.place_address',
        // '.gWnvB',
        // '.mMymj',
        // '.IH7VW',
        // '.S3Exm',
        // '[title="주소"]',
      ]);

      this.log(`주소: ${address || '추출 실패'}`);

      const tel = await this.extractTextWithSelectors(frame, [
        'span.xlx7Q',
        // '.place_section_content .xlx7Q',
        // '.place_section_content .dry01',
        // '.phone',
        // '.place_phone',
        // '.wQFi8',
        // '.M8OgO',
        // '.xlx7Q',
        // '.hQRFH',
        // '.vFqNV',
        // '[title="전화번호"]',
      ]);

      this.log(`전화번호: ${tel || '추출 실패'}`);

      const reviewScore = await this.extractNumberWithSelectors(
        frame,
        [
          '.place_section_content .ANYgl',
          '.nWiXa',
          '.review_score',
          '.grade_star',
          '.qIaAq',
          '.PXMot',
          '.rQQII',
          '.PtIou',
          '.LZ3Zm',
        ],
        /[\d\.]+/
      );

      this.log(`리뷰 점수: ${reviewScore || '추출 실패'}`);

      const reviewCount = await this.extractNumberWithSelectors(
        frame,
        [
          '.place_section_content .PXMot',
          '.nWiXa',
          '.review_count',
          '.qIaAq span',
          '.XtBbS',
          '.tCti6',
          '.Yrsei',
        ],
        /리뷰\s*(\d+)/i
      );
      this.log(`리뷰 수: ${reviewCount || '추출 실패'}`);

      // 위치 정보 추출 시도 (여러 방법 사용)
      let location = null;

      // 1. JS 변수나 데이터 속성에서 좌표 찾기
      location = await frame.evaluate(() => {
        // a. 전역 변수에서 찾기
        if (window._lngLat || window._lng_lat || window.lngLat) {
          const coords = window._lngLat || window._lng_lat || window.lngLat;
          if (coords && coords.lng && coords.lat) {
            return {
              longitude: coords.lng,
              latitude: coords.lat,
            };
          }
        }

        // b. 데이터 속성에서 찾기
        const mapElements = document.querySelectorAll(
          '[data-longitude][data-latitude]'
        );
        if (mapElements.length > 0) {
          const el = mapElements[0];
          return {
            longitude: parseFloat(el.getAttribute('data-longitude')),
            latitude: parseFloat(el.getAttribute('data-latitude')),
          };
        }

        // c. 정적 지도 이미지 URL에서 추출
        const mapImgs = document.querySelectorAll(
          'img[src*="openapi.naver.com/v1/map/staticmap"]'
        );
        if (mapImgs.length > 0) {
          const src = mapImgs[0].getAttribute('src');
          const latMatch = src.match(/lat=([0-9.]+)/);
          const lngMatch = src.match(/lng=([0-9.]+)/);

          if (latMatch && lngMatch) {
            return {
              longitude: parseFloat(lngMatch[1]),
              latitude: parseFloat(latMatch[1]),
            };
          }
        }

        return null;
      });

      // 2. 지도 버튼 클릭해서 좌표 찾기
      if (!location) {
        try {
          const mapButtonSelectors = [
            '.fAUnt',
            '.place_section_content .Fc1rA',
            '.place_map_btn',
            '.total_wrap_map',
            '.E0Rct',
            '.YYisZ',
            '[title="지도"]',
          ];

          for (const selector of mapButtonSelectors) {
            const hasMapButton = (await frame.$(selector)) !== null;
            if (hasMapButton) {
              await frame.click(selector);
              await this.wait(2000);

              location = await frame.evaluate(() => {
                if (window.naver && window.naver.maps) {
                  const mapDivs = document.querySelectorAll('div[id^="map"]');
                  for (const div of mapDivs) {
                    if (div.__NAVER_MAP__) {
                      const center = div.__NAVER_MAP__.getCenter();
                      if (center) {
                        return {
                          longitude: center.x || center.lng || center._lng,
                          latitude: center.y || center.lat || center._lat,
                        };
                      }
                    }
                  }
                }
                return null;
              });

              if (location) break;
            }
          }
        } catch (e) {
          this.log('지도 버튼 클릭 중 오류: ' + e.message);
        }
      }

      // 이미지 URL 수집
      const imageUrls = await this.extractImagesImproved(frame);

      // 카테고리 변환
      let categories = [];
      if (categoryText) {
        const categoryParts = categoryText.split(/[>|,]/).map((c) => c.trim());
        categories = categoryParts
          .map((c) => this.mapNaverCategoryToSpotCategory(c))
          .filter(Boolean);
      }

      return {
        name,
        address,
        tel,
        location,
        naverSpotId: null, // URL에서 추출된 ID로 나중에 채워짐
        reviewCount,
        reviewScore,
        imageUrls,
        categories,
      };
    } catch (error) {
      console.error('상세 정보 추출 중 오류:', error);
      return {};
    }
  }

  /**
   * 개선된 이미지 추출 함수
   * @param {Frame} frame 상세 정보 프레임
   */
  async extractImagesImproved(frame) {
    try {
      // 1. 이미지 선택자 방식으로 추출
      const imgSelectors = [
        '.place_section_content .K0PDV img',
        '.place_section_content .fIgFx img',
        '.UoIF_ img',
        '.place_photo img',
        '.K0PDV img',
        '.fIgFx img',
        '.uDR4i img',
        '.kR2jx',
        '.K0PDV',
        '.jQ0Mm img',
        '.ohPal img',
        '.GYQd_ img',
        '.place_detail_photos img',
        '.place_section img[alt*="사진"]',
        '.N70fC img', // 최신 UI 클래스 추가
      ];

      for (const selector of imgSelectors) {
        try {
          const urls = await frame.evaluate((sel) => {
            const elements = document.querySelectorAll(sel);
            if (elements.length === 0) return [];

            return Array.from(elements)
              .map(
                (el) =>
                  el.src ||
                  el.getAttribute('data-src') ||
                  (el.style &&
                    el.style.backgroundImage &&
                    el.style.backgroundImage.match(
                      /url\(['"]?([^'"]+)['"]?\)/
                    )?.[1])
              )
              .filter(
                (url) =>
                  url &&
                  !url.includes('transparent.gif') &&
                  !url.includes('blank.gif') &&
                  !url.includes('ico_noimage')
              );
          }, selector);

          if (urls && urls.length > 0) {
            return urls;
          }
        } catch (e) {
          continue;
        }
      }

      // 2. 사진 탭 클릭 시도
      const photoTabSelectors = [
        '.place_fixed_maintab .tab_photo',
        '.place_fixed_maintab .K0PDV',
        '.K0PDV a',
        '[title="사진"]',
        '.fqzqF', // 최신 UI 클래스 추가
      ];

      for (const selector of photoTabSelectors) {
        try {
          const hasPhotoTab = (await frame.$(selector)) !== null;
          if (hasPhotoTab) {
            await frame.click(selector);
            await this.wait(2000);

            // 사진 탭에서 이미지 추출
            const photoUrls = await frame.evaluate(() => {
              const imgs = document.querySelectorAll('img[src*="pstatic.net"]');
              return Array.from(imgs)
                .map((img) => img.src)
                .filter(
                  (url) =>
                    url &&
                    !url.includes('transparent.gif') &&
                    !url.includes('blank.gif') &&
                    !url.includes('ico_noimage')
                );
            });

            if (photoUrls && photoUrls.length > 0) {
              return photoUrls;
            }
          }
        } catch (e) {
          this.log('사진 탭 클릭 중 오류: ' + e.message);
        }
      }

      // 3. 스타일 배경에서 이미지 URL 추출
      const bgImageUrls = await frame.evaluate(() => {
        const elements = document.querySelectorAll('*');
        const urls = [];

        for (const el of elements) {
          try {
            const style = window.getComputedStyle(el);
            const bgImage = style.backgroundImage;

            if (bgImage && bgImage !== 'none') {
              const match = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
              if (match && match[1]) {
                const url = match[1].trim();
                if (
                  url.includes('pstatic.net') &&
                  !url.includes('transparent.gif') &&
                  !url.includes('blank.gif') &&
                  !url.includes('ico_noimage')
                ) {
                  urls.push(url);
                }
              }
            }
          } catch (e) {
            continue;
          }
        }

        return urls;
      });

      if (bgImageUrls && bgImageUrls.length > 0) {
        return bgImageUrls;
      }

      // 4. 일반 이미지 태그에서 관련 이미지 추출
      return await frame.evaluate(() => {
        const imgs = document.querySelectorAll('img');
        return Array.from(imgs)
          .map((img) => img.src)
          .filter(
            (url) =>
              url &&
              url.includes('pstatic.net') &&
              !url.includes('transparent.gif') &&
              !url.includes('blank.gif') &&
              !url.includes('ico_noimage')
          );
      });
    } catch (error) {
      console.error('이미지 URL 추출 중 오류:', error);
      return [];
    }
  }

  /**
   * 메인 페이지에서 상세 정보 추출 시도
   */
  async extractDetailDataFromMainPage() {
    try {
      const pageUrl = await this.page.url();
      let naverSpotId = this.extractSpotIdFromUrl(pageUrl);

      // 기본 정보 추출
      const name = await this.page.evaluate(() => {
        const selectors = [
          '.place_section_header .title',
          'h1.Fc1rA',
          'h2.place_name',
          '.PXMot',
          '.lsnAf',
          '.Fc1rA',
          '.K7Lms',
          '.Jxtsc h2',
          'div[role="main"] h1',
          'div[role="main"] h2',
          'div.lsnAf',
          'span.Fc1rA',
          'span.K7Lms',
        ];

        for (const selector of selectors) {
          const el = document.querySelector(selector);
          if (el) return el.textContent.trim();
        }

        return null;
      });

      if (!name) {
        this.log('메인 페이지에서 장소 이름을 찾을 수 없습니다.');
        return null;
      }

      // 나머지 정보 추출
      const data = await this.page.evaluate(() => {
        // 주소 추출
        let address = null;
        const addressSelectors = [
          '.place_section_content .LDgIH',
          '.place_section_content .IH7VW',
          '.address',
          '.CwQv2',
          '.place_address',
          '.gWnvB',
          '.mMymj',
          '.IH7VW',
          '.S3Exm',
          '[title="주소"]',
        ];
        for (const selector of addressSelectors) {
          const el = document.querySelector(selector);
          if (el) {
            address = el.textContent.trim();
            break;
          }
        }

        // 전화번호 추출
        let tel = null;
        const telSelectors = [
          '.place_section_content .xlx7Q',
          '.place_section_content .dry01',
          '.phone',
          '.place_phone',
          '.wQFi8',
          '.M8OgO',
          '.xlx7Q',
          '.hQRFH',
          '.vFqNV',
          '[title="전화번호"]',
        ];
        for (const selector of telSelectors) {
          const el = document.querySelector(selector);
          if (el) {
            tel = el.textContent.trim();
            break;
          }
        }

        // 카테고리 추출
        let categoryText = null;
        const categorySelectors = [
          '.place_section_header .category',
          '.DJJvD',
          '.category',
          '.place_category',
          '.O8qbU',
          '.DjPUM',
          '.N_KkG',
          '.KDewF',
        ];
        for (const selector of categorySelectors) {
          const el = document.querySelector(selector);
          if (el) {
            categoryText = el.textContent.trim();
            break;
          }
        }

        // 이미지 URL 추출
        const imgs = document.querySelectorAll('img[src*="pstatic.net"]');
        const imageUrls = Array.from(imgs)
          .map((img) => img.src)
          .filter(
            (url) =>
              url &&
              !url.includes('transparent.gif') &&
              !url.includes('blank.gif') &&
              !url.includes('ico_noimage')
          );

        return { address, tel, categoryText, imageUrls };
      });

      // 카테고리 변환
      let categories = [];
      if (data.categoryText) {
        const categoryParts = data.categoryText
          .split(/[>|,]/)
          .map((c) => c.trim());
        categories = categoryParts
          .map((c) => this.mapNaverCategoryToSpotCategory(c))
          .filter(Boolean);
      }

      return {
        name,
        address: data.address,
        tel: data.tel,
        location: null, // 메인 페이지에서는 좌표 추출이 어려울 수 있음
        naverSpotId,
        reviewCount: null,
        reviewScore: null,
        imageUrls: data.imageUrls || [],
        categories,
      };
    } catch (error) {
      console.error('메인 페이지에서 상세 정보 추출 중 오류:', error);
      return null;
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
        '치킨',
        '피자',
        '패스트푸드',
        '카페테리아',
        '뷔페',
      ],
      카페: [
        '카페',
        '다방',
        '디저트',
        '베이커리',
        '커피',
        '차',
        '빵집',
        '제과점',
        '아이스크림',
      ],
      숙소: [
        '숙소',
        '호텔',
        '모텔',
        '게스트하우스',
        '리조트',
        '펜션',
        '민박',
        '콘도',
        '숙박',
        '여관',
        '비앤비',
        '한옥스테이',
      ],
      관광지: [
        '관광',
        '명소',
        '유적',
        '유원지',
        '공원',
        '테마파크',
        '휴양지',
        '해변',
        '산',
        '섬',
        '폭포',
        '동굴',
        '천연',
      ],
      '복합 문화 공간': [
        '문화',
        '공연',
        '전시',
        '예술',
        '센터',
        '쇼핑',
        '몰',
        '백화점',
        '아트',
        '스튜디오',
      ],
      박물관: ['박물관', '뮤지엄', '유물', '전시관'],
      미술관: ['미술관', '갤러리', '예술관'],
      도서관: ['도서관', '서점', '책방', '북카페'],
      역사: ['역사', '고궁', '성', '유적지', '고택', '전통', '궁궐', '왕릉'],
      종교: [
        '종교',
        '사찰',
        '절',
        '교회',
        '성당',
        '신사',
        '사원',
        '기도원',
        '수도원',
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
    // 기존 함수를 그대로 유지
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

  /**
   * 여러 CSS 선택자를 시도하여 텍스트 추출
   * @param {Frame} frame 프레임
   * @param {string[]} selectors 시도할 CSS 선택자 배열
   * @returns {Promise<string|null>} 추출된 텍스트 또는 null
   */
  async extractTextWithSelectors(frame, selectors) {
    try {
      for (const selector of selectors) {
        try {
          const hasElement = (await frame.$(selector)) !== null;
          if (hasElement) {
            const text = await frame.evaluate((sel) => {
              const element = document.querySelector(sel);
              return element ? element.textContent.trim() : null;
            }, selector);

            if (text) {
              return text;
            }
          }
        } catch (e) {
          continue;
        }
      }
      return null;
    } catch (error) {
      console.error('텍스트 추출 중 오류:', error);
      return null;
    }
  }

  /**
   * 여러 CSS 선택자를 시도하여 숫자 추출
   * @param {Frame} frame 프레임
   * @param {string[]} selectors 시도할 CSS 선택자 배열
   * @param {RegExp} regex 숫자를 추출할 정규식 패턴
   * @returns {Promise<number|null>} 추출된 숫자 또는 null
   */
  async extractNumberWithSelectors(frame, selectors, regex) {
    try {
      const text = await this.extractTextWithSelectors(frame, selectors);
      if (!text) return null;

      // 정규식이 캡처 그룹을 가지고 있는 경우
      if (regex.toString().includes('(')) {
        const match = text.match(regex);
        if (match && match[1]) {
          const num = parseFloat(match[1]);
          return isNaN(num) ? null : num;
        }
      } else {
        // 간단한 숫자 추출 (캡처 그룹 없음)
        const match = text.match(regex);
        if (match && match[0]) {
          const num = parseFloat(match[0]);
          return isNaN(num) ? null : num;
        }
      }

      return null;
    } catch (error) {
      console.error('숫자 추출 중 오류:', error);
      return null;
    }
  }

  /**
   * 검색 결과 iframe 찾기
   * @returns {Promise<Frame|null>} 검색 iframe 또는 null
   */
  async findSearchFrame() {
    try {
      // 1. 직접적인 iframe 선택자로 시도
      const searchIframeSelector = 'iframe#searchIframe';
      const hasSearchIframe =
        (await this.page.$(searchIframeSelector)) !== null;

      if (hasSearchIframe) {
        const searchFrame = await this.page
          .frames()
          .find((frame) => frame.name() === 'searchIframe');
        if (searchFrame) {
          this.log('searchIframe 직접 선택으로 발견');
          return searchFrame;
        }
      }
      return null;
    } catch (error) {
      console.error('검색 iframe 찾기 오류:', error);
      return null;
    }
  }

  /**
   * 검색 페이지로 돌아가기
   * @param {string} keyword 검색어
   */
  async navigateBackToSearch(keyword) {
    try {
      // 뒤로 가기 버튼 시도
      try {
        const backButtonSelectors = [
          '.naver-place-back',
          '.back_button',
          '.back-button',
          'button[aria-label="뒤로가기"]',
          'button.place_fixedBtn__7Rp3N',
          '.fvwqf',
          '.gm_svc_back',
          '.btn_prev',
          'a.a_prev',
        ];

        for (const selector of backButtonSelectors) {
          const hasBackButton = (await this.page.$(selector)) !== null;
          if (hasBackButton) {
            await this.page.click(selector);
            await this.wait(2000);

            // 검색 결과 iframe이 있는지 확인
            const searchFrame = await this.findSearchFrame();
            if (searchFrame) {
              this.log('뒤로 가기 버튼으로 검색 페이지로 돌아옴');
              return;
            }
          }
        }
      } catch (e) {
        this.log('뒤로 가기 버튼 클릭 실패: ' + e.message);
      }

      // URL로 직접 이동
      this.log('URL을 통해 검색 페이지로 돌아가기 시도');
      const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(
        keyword
      )}`;
      await this.page.goto(searchUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000,
      });
      await this.wait(3000);
    } catch (error) {
      console.error('검색 페이지로 돌아가기 실패:', error);
      // 실패 시 URL로 한 번 더 시도
      const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(
        keyword
      )}`;
      await this.page.goto(searchUrl, {
        waitUntil: 'networkidle2',
        timeout: 30000,
      });
      await this.wait(3000);
    }
  }
}

module.exports = NaverMapCrawler;

// 'use strict';

// const puppeteer = require('puppeteer');
// const {
//   sequelize,
//   Spot,
//   SpotImg,
//   SpotCategory,
//   SpotCategoryRelation,
// } = require('../models');

// /**
//  * 네이버 지도 장소 정보 크롤링 클래스 - 개선된 버전
//  */
// class NaverMapCrawler {
//   constructor() {
//     this.browser = null;
//     this.page = null;
//     this.categoryMap = {
//       음식점: '식당',
//       한식: '식당',
//       일식: '식당',
//       중식: '식당',
//       양식: '식당',
//       분식: '식당',
//       카페: '카페',
//       디저트: '카페',
//       베이커리: '카페',
//       숙박: '숙소',
//       호텔: '숙소',
//       모텔: '숙소',
//       게스트하우스: '숙소',
//       펜션: '숙소',
//       관광명소: '관광지',
//       문화시설: '복합 문화 공간',
//       박물관: '박물관',
//       미술관: '미술관',
//       도서관: '도서관',
//       역사: '역사',
//       종교: '종교',
//       사찰: '종교',
//       교회: '종교',
//     };
//     this.categoryIds = {};
//     this.debug = true; // 디버깅 출력을 위한 플래그
//   }

//   /**
//    * 디버그 로그 출력
//    * @param {string} message 출력할 메시지
//    */
//   log(message) {
//     if (this.debug) {
//       console.log(`[NaverMapCrawler] ${message}`);
//     }
//   }

//   /**
//    * 지정된 시간(ms) 동안 대기
//    * @param {number} ms 대기 시간(밀리초)
//    */
//   async wait(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

//   /**
//    * 브라우저 초기화
//    */
//   async initialize() {
//     try {
//       // 카테고리 ID 매핑 초기화
//       await this.initCategoryIds();

//       this.log('브라우저 시작 중...');

//       // 브라우저 시작 - 개선된 옵션 설정
//       this.browser = await puppeteer.launch({
//         headless: false, // 디버깅을 위해 브라우저 표시
//         args: [
//           '--no-sandbox',
//           '--disable-setuid-sandbox',
//           '--disable-web-security',
//           '--disable-features=IsolateOrigins,site-per-process',
//           '--window-size=1920,1080',
//           '--disable-gpu',
//           '--disable-dev-shm-usage',
//         ],
//         defaultViewport: { width: 1920, height: 1080 },
//         ignoreHTTPSErrors: true,
//       });

//       this.page = await this.browser.newPage();

//       // 페이지 설정 개선
//       await this.page.setDefaultNavigationTimeout(120000); // 타임아웃 2분으로 증가
//       await this.page.setDefaultTimeout(60000);

//       // 리소스 로딩 최적화
//       await this.page.setRequestInterception(true);
//       this.page.on('request', (req) => {
//         // 불필요한 리소스 차단하여 속도 향상
//         const resourceType = req.resourceType();
//         if (['image', 'media', 'font'].includes(resourceType)) {
//           req.abort();
//         } else {
//           req.continue();
//         }
//       });

//       // 최신 크롬 사용자 에이전트 설정
//       await this.page.setUserAgent(
//         'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
//       );

//       // localStorage 접근 오류 방지: try-catch로 감싸서 오류 무시
//       await this.page.evaluateOnNewDocument(() => {
//         try {
//           Object.defineProperty(window, 'localStorage', {
//             get: function () {
//               return {
//                 getItem: function () {
//                   return null;
//                 },
//                 setItem: function () {
//                   return null;
//                 },
//                 removeItem: function () {
//                   return null;
//                 },
//                 clear: function () {
//                   return null;
//                 },
//               };
//             },
//           });

//           Object.defineProperty(window, 'sessionStorage', {
//             get: function () {
//               return {
//                 getItem: function () {
//                   return null;
//                 },
//                 setItem: function () {
//                   return null;
//                 },
//                 removeItem: function () {
//                   return null;
//                 },
//                 clear: function () {
//                   return null;
//                 },
//               };
//             },
//           });
//         } catch (e) {
//           console.warn('Failed to mock localStorage/sessionStorage');
//         }
//       });

//       this.log('브라우저 초기화 완료');
//       return true;
//     } catch (error) {
//       console.error('브라우저 초기화 실패:', error);
//       throw error;
//     }
//   }

//   /**
//    * 카테고리 ID 조회
//    */
//   async initCategoryIds() {
//     try {
//       const categories = await SpotCategory.findAll();
//       for (const category of categories) {
//         this.categoryIds[category.type] = category.spotCategoryId;
//       }
//       this.log('카테고리 ID 조회 완료');
//       return true;
//     } catch (error) {
//       console.error('카테고리 ID 조회 실패:', error);
//       throw error;
//     }
//   }

//   /**
//    * 크롤링 종료 및 자원 정리
//    */
//   async close() {
//     if (this.browser) {
//       await this.browser.close();
//       this.log('브라우저 종료 완료');
//     }
//   }

//   /**
//    * API를 직접 호출하는 방식으로 검색 수행 (네이버 지도 API 활용)
//    * @param {string} keyword 검색어
//    * @param {number} maxResults 최대 결과 수
//    */
//   async searchWithAPI(keyword, maxResults = 10) {
//     try {
//       this.log(`API를 사용하여 '${keyword}' 검색 시작`);

//       // 네이버 지도 접속
//       await this.page.goto('https://map.naver.com', {
//         waitUntil: 'networkidle0',
//       });
//       await this.wait(2000);

//       // API URL 구성 (최신 네이버 지도 API URL 패턴으로 업데이트)
//       const apiUrl = `https://map.naver.com/p/api/search/all?query=${encodeURIComponent(
//         keyword
//       )}&displayCount=${maxResults}&page=1&lang=ko`;

//       this.log(`API URL: ${apiUrl}`);

//       // Puppeteer를 사용하여 직접 API 호출
//       const response = await this.page.goto(apiUrl, {
//         waitUntil: 'networkidle0',
//         timeout: 30000,
//       });

//       if (!response.ok()) {
//         throw new Error(
//           `API 응답 오류: ${response.status()} ${response.statusText()}`
//         );
//       }

//       // JSON 응답 파싱
//       const responseText = await response.text();
//       const apiResponse = JSON.parse(responseText);

//       // 새로운 API 응답 구조에 맞게 검증 로직 수정
//       if (!apiResponse || !apiResponse.result || !apiResponse.result.place) {
//         this.log('API 응답에서 장소 목록을 찾을 수 없습니다.');
//         return [];
//       }

//       const places = apiResponse.result.place.list || [];
//       this.log(`API에서 ${places.length}개 장소 정보 수집됨`);

//       // 네이버 지도 페이지로 다시 이동
//       await this.page.goto('https://map.naver.com', {
//         waitUntil: 'networkidle0',
//       });
//       await this.wait(1000);

//       // 결과 배열
//       const collectedData = [];

//       // 각 장소에 대해 상세 정보 수집
//       for (let i = 0; i < places.length && i < maxResults; i++) {
//         const place = places[i];
//         this.log(
//           `[${i + 1}/${Math.min(places.length, maxResults)}] "${
//             place.name
//           }" 정보 수집 중...`
//         );

//         try {
//           // 필요한 정보 추출
//           const spotData = {
//             name: place.name,
//             address: place.address,
//             tel: place.tel,
//             location: {
//               longitude: place.x,
//               latitude: place.y,
//             },
//             naverSpotId: place.id.toString(),
//             reviewCount: place.reviewCount || 0,
//             reviewScore: place.reviewScore || null,
//             imageUrls: [],
//             categories: [],
//           };

//           // 카테고리 처리
//           if (place.category) {
//             const categoryParts = place.category
//               .split('>')
//               .map((c) => c.trim());
//             spotData.categories = categoryParts
//               .map((c) => this.mapNaverCategoryToSpotCategory(c))
//               .filter(Boolean);
//           }

//           // 상세 페이지 방문하여 추가 정보(이미지 등) 수집
//           if (place.id) {
//             const detailUrl = `https://map.naver.com/v5/entry/place/${place.id}`;
//             await this.page.goto(detailUrl, {
//               waitUntil: 'networkidle2',
//               timeout: 60000,
//             });
//             await this.wait(3000);

//             // 이미지 URL 수집 시도
//             spotData.imageUrls = await this.collectImagesFromDetailPage();
//           }

//           // 수집 데이터 저장
//           collectedData.push(spotData);

//           // DB에 저장
//           await this.saveSpotData(spotData);
//         } catch (error) {
//           console.error(`[${i + 1}] 항목 처리 중 오류:`, error);
//           continue;
//         }
//       }

//       this.log(`'${keyword}' 검색 완료, ${collectedData.length}개 장소 수집됨`);
//       return collectedData;
//     } catch (error) {
//       console.error('API 검색 중 오류 발생:', error);
//       await this.page.screenshot({ path: 'api-error.png', fullPage: true });
//       throw error;
//     }
//   }

//   /**
//    * 상세 페이지에서 이미지 URL 수집
//    */
//   async collectImagesFromDetailPage() {
//     try {
//       // entryIframe 찾기
//       const entryFrameSelector = 'iframe#entryIframe';
//       const hasEntryFrame = (await this.page.$(entryFrameSelector)) !== null;

//       if (!hasEntryFrame) {
//         this.log(
//           'entryIframe을 찾을 수 없습니다. 메인 페이지에서 이미지 검색 시도...'
//         );
//         return await this.extractImagesFromMainPage();
//       }

//       // iframe 내부 내용 처리
//       await this.page.waitForSelector(entryFrameSelector, { timeout: 5000 });
//       const entryFrame = await this.page
//         .frames()
//         .find((frame) => frame.name() === 'entryIframe');

//       if (!entryFrame) {
//         this.log('entryIframe을 불러올 수 없습니다.');
//         return [];
//       }

//       // 다양한 이미지 선택자 시도
//       const imgSelectors = [
//         '.place_section_content .K0PDV img',
//         '.place_section_content .fIgFx img',
//         '.UoIF_ img',
//         '.place_photo img',
//         '.K0PDV img',
//         '.fIgFx img',
//         '.uDR4i img',
//         'img[src*="pstatic.net/place"]',
//         'img.kR2jx', // 새로운 클래스 추가
//       ];

//       for (const selector of imgSelectors) {
//         try {
//           const urls = await entryFrame.evaluate((sel) => {
//             const imgElements = document.querySelectorAll(sel);
//             return Array.from(imgElements)
//               .map((img) => img.src)
//               .filter(
//                 (url) =>
//                   url &&
//                   !url.includes('transparent.gif') &&
//                   !url.includes('blank.gif') &&
//                   !url.includes('ico_noimage')
//               );
//           }, selector);

//           if (urls && urls.length > 0) {
//             this.log(`${urls.length}개 이미지 URL 수집됨`);
//             return urls;
//           }
//         } catch (e) {
//           this.log(`셀렉터 ${selector}에서 이미지 추출 실패: ${e.message}`);
//         }
//       }

//       this.log('기본 선택자로 이미지를 찾지 못함. 일반 이미지 태그 검색...');
//       return await entryFrame.evaluate(() => {
//         const imgs = document.querySelectorAll('img');
//         return Array.from(imgs)
//           .map((img) => img.src)
//           .filter(
//             (url) =>
//               url.includes('pstatic.net') &&
//               !url.includes('transparent.gif') &&
//               !url.includes('blank.gif') &&
//               !url.includes('ico_noimage')
//           );
//       });
//     } catch (error) {
//       console.error('이미지 URL 수집 중 오류:', error);
//       return [];
//     }
//   }

//   /**
//    * 메인 페이지에서 이미지 추출 시도
//    */
//   async extractImagesFromMainPage() {
//     try {
//       return await this.page.evaluate(() => {
//         const imgs = document.querySelectorAll('img[src*="pstatic.net"]');
//         return Array.from(imgs)
//           .map((img) => img.src)
//           .filter(
//             (url) =>
//               url &&
//               (url.includes('/place/') ||
//                 url.includes('/restaurant/') ||
//                 url.includes('/shop/')) &&
//               !url.includes('transparent.gif') &&
//               !url.includes('blank.gif') &&
//               !url.includes('ico_noimage')
//           );
//       });
//     } catch (error) {
//       console.error('메인 페이지 이미지 추출 중 오류:', error);
//       return [];
//     }
//   }

//   /**
//    * 검색어로 장소 검색 및 데이터 수집
//    * @param {string} keyword 검색어
//    * @param {number} maxResults 최대 결과 수
//    */
//   async searchAndCollect(keyword, maxResults = 10) {
//     return await this.searchWithWebInterface(keyword, maxResults);
//     /**
//     // API 기반 검색 우선 시도
//     try {
//       return await this.searchWithAPI(keyword, maxResults);
//     } catch (apiError) {
//       console.error('API 검색 실패, 웹 인터페이스 검색으로 전환:', apiError);
//       return await this.searchWithWebInterface(keyword, maxResults);
//     }
//     */
//   }

//   /**
//    * 웹 인터페이스를 통한 검색 (iframe 처리 개선 버전)
//    * @param {string} keyword 검색어
//    * @param {number} maxResults 최대 결과 수
//    */
//   async searchWithWebInterface(keyword, maxResults = 10) {
//     try {
//       this.log(`웹 인터페이스로 '${keyword}' 검색 시작`);

//       // 최신 네이버 지도 URL 패턴 사용
//       const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(
//         keyword
//       )}`;
//       this.log(`검색 URL: ${searchUrl}`);

//       // 네이버 지도 검색 페이지로 이동
//       await this.page.goto(searchUrl, {
//         waitUntil: 'networkidle2',
//         timeout: 60000,
//       });

//       this.log('페이지 로드 완료, 검색 결과 iframe 대기 중...');
//       await this.wait(5000);

//       // 검색 결과 iframe 처리 개선
//       const searchIframeSelector = 'iframe#searchIframe';
//       let searchFrame = null;

//       // 1. 직접적인 iframe 선택자로 시도
//       try {
//         await this.page.waitForSelector(searchIframeSelector, {
//           timeout: 10000,
//         });
//         searchFrame = await this.page
//           .frames()
//           .find((frame) => frame.name() === 'searchIframe');
//         this.log('searchIframe 직접 선택으로 발견');
//       } catch (e) {
//         this.log('직접 선택자로 searchIframe을 찾지 못함, 대체 방법 시도...');
//       }

//       // 2. iframe URL 패턴으로 시도
//       if (!searchFrame) {
//         searchFrame = await this.page
//           .frames()
//           .find(
//             (frame) =>
//               frame.url().includes('/p/api/search') ||
//               frame.url().includes('/v5/api/search') ||
//               frame.url().includes('/search')
//           );

//         if (searchFrame) {
//           this.log('URL 패턴으로 검색 iframe 발견');
//         }
//       }

//       // 3. 내용 기반으로 iframe 식별
//       if (!searchFrame) {
//         for (const frame of this.page.frames()) {
//           try {
//             const hasResults = await frame.evaluate(() => {
//               const selectors = [
//                 '.place_list .item_search',
//                 '.PlaceListView_list_item__TA3cE',
//                 '.YeNZ7qQtTko',
//                 '.Pcbbk',
//                 '.qbGlu',
//                 '.L0xWP',
//                 '.SUaFB',
//                 '.Q0vdS',
//                 '.xHaT3',
//                 '.D_-iJ',
//                 '[role="listitem"]',
//                 // 검색 결과 항목을 식별할 수 있는 모든 가능한 선택자 추가
//               ];
//               return selectors.some(
//                 (selector) => document.querySelectorAll(selector).length > 0
//               );
//             });

//             if (hasResults) {
//               searchFrame = frame;
//               this.log('콘텐츠 기반으로 검색 iframe 발견');
//               break;
//             }
//           } catch (e) {
//             continue;
//           }
//         }
//       }

//       // iframe을 찾지 못한 경우 오류 발생
//       if (!searchFrame) {
//         // 디버깅용 스크린샷 저장
//         await this.page.screenshot({
//           path: 'iframe-not-found.png',
//           fullPage: true,
//         });
//         throw new Error(
//           '검색 결과 iframe을 찾을 수 없습니다. 웹페이지 구조가 변경되었을 수 있습니다.'
//         );
//       }

//       // 검색 결과 항목 선택자 찾기 (다양한 선택자 시도)
//       const selectors = [
//         // 최신 네이버 지도 선택자 (2025년 기준)
//         'li.UEzoS', // 최신 네이버 지도 검색 결과 항목
//         // 'div.qbGlu', // 검색 결과 컨테이너
//         // 'div[role="listitem"]', // 접근성 속성 기반
//         // 'li.VLTHu', // 또 다른 최신 리스트 아이템
//         // '.place-list li', // 일반 장소 리스트
//         // '.PlaceListView_list_item__TA3cE', // 장소 리스트 뷰 항목

//         // // 이전 버전 선택자들 (호환성 유지)
//         // '.place_list .item_search',
//         // '.YeNZ7qQtTko',
//         // '.Pcbbk',
//         // '.L0xWP',
//         // '.SUaFB',
//         // '.Q0vdS',
//         // '.xHaT3',
//         // '.D_-iJ',
//         // '[role="listitem"]',

//         // // 일반적인 목록 항목 선택자 (최후의 수단)
//         // 'li.item',
//         // 'li[data-id]',
//         // 'li[data-loc]',
//         // 'li[data-place-id]',
//         // 'div.item',
//         // '.search-item',
//       ];

//       let resultSelector = null;
//       for (const selector of selectors) {
//         try {
//           const count = await searchFrame.evaluate(
//             (sel) => document.querySelectorAll(sel).length,
//             selector
//           );
//           if (count > 0) {
//             resultSelector = selector;
//             this.log(`검색 결과 선택자 발견: ${selector} (${count}개 항목)`);
//             break;
//           }
//         } catch (e) {
//           continue;
//         }
//       }

//       // 선택자를 찾지 못한 경우 직접 요소 스캔 시도
//       if (!resultSelector) {
//         this.log(
//           '일반 선택자로 검색 결과를 찾지 못해 직접 스캔을 시도합니다...'
//         );

//         // 검색 결과 컨테이너 및 항목을 직접 식별하기 위한 휴리스틱 스캔
//         resultSelector = await searchFrame.evaluate(() => {
//           // 1. 반복되는 li 요소 찾기 (가장 일반적인 패턴)
//           const liGroups = {};
//           const allLis = document.querySelectorAll('li');

//           // 각 li의 부모별로 그룹화
//           allLis.forEach((li) => {
//             const parentSelector = getSimpleSelector(li.parentElement);
//             if (!liGroups[parentSelector]) {
//               liGroups[parentSelector] = [];
//             }
//             liGroups[parentSelector].push(li);
//           });

//           // 가장 많은 li를 가진 부모 찾기 (일정 개수 이상이면 검색 결과일 가능성 높음)
//           let bestParentSelector = null;
//           let maxCount = 0;

//           for (const [parentSelector, lis] of Object.entries(liGroups)) {
//             if (lis.length > maxCount && lis.length >= 3) {
//               // 최소 3개 이상의 결과가 있어야 함
//               maxCount = lis.length;
//               bestParentSelector = parentSelector;
//             }
//           }

//           if (bestParentSelector && maxCount > 0) {
//             // li 요소들의 공통 클래스 찾기
//             const firstLi = liGroups[bestParentSelector][0];
//             if (firstLi.classList.length > 0) {
//               return `${bestParentSelector} > li.${firstLi.classList[0]}`;
//             } else {
//               return `${bestParentSelector} > li`;
//             }
//           }

//           // 2. div[role="listitem"] 구조 스캔
//           const listItems = document.querySelectorAll('div[role="listitem"]');
//           if (listItems.length >= 3) {
//             return 'div[role="listitem"]';
//           }

//           // 3. 검색 결과 텍스트 주변 요소 찾기
//           const resultTextElements = Array.from(
//             document.querySelectorAll('*')
//           ).filter((el) => {
//             const text = el.textContent.trim().toLowerCase();
//             return text.includes('검색 결과') || text.includes('search result');
//           });

//           if (resultTextElements.length > 0) {
//             // 검색 결과 텍스트가 있는 요소의 부모나 형제 컨테이너에서 반복되는 요소 찾기
//             for (const el of resultTextElements) {
//               const parent = el.parentElement;
//               if (parent) {
//                 const siblings = Array.from(parent.children).filter(
//                   (child) => child !== el && child.children.length > 0
//                 );

//                 if (siblings.length === 1 && siblings[0].children.length >= 3) {
//                   // 자식 요소가 3개 이상인 형제 컨테이너 발견
//                   const container = siblings[0];
//                   const childSelector = getSimpleSelector(
//                     container.children[0]
//                   );
//                   return `${getSimpleSelector(container)} > ${childSelector}`;
//                 }
//               }
//             }
//           }

//           // 단순 선택자 생성 헬퍼 함수
//           function getSimpleSelector(element) {
//             if (!element) return '';
//             let selector = element.tagName.toLowerCase();

//             if (element.id) {
//               return `${selector}#${element.id}`;
//             }

//             if (element.classList.length > 0) {
//               return `${selector}.${element.classList[0]}`;
//             }

//             return selector;
//           }

//           // 아무것도 찾지 못했을 경우 null 반환
//           return null;
//         });

//         if (resultSelector) {
//           this.log(`동적 스캔으로 검색 결과 선택자 발견: ${resultSelector}`);
//         } else {
//           // 최후의 방법: 단순히 컨테이너 내의 모든 li 선택
//           try {
//             const foundContainer = await searchFrame.evaluate(() => {
//               // 가장 큰 컨테이너에서 li가 많은 요소 찾기
//               const containers = document.querySelectorAll(
//                 'div.sc-dPZUQH, div.sc-fctJkW, div.sc-dJjZJu, div[class*="list"], div[class*="List"]'
//               );
//               let bestContainer = null;
//               let maxLiCount = 0;

//               containers.forEach((container) => {
//                 const liCount = container.querySelectorAll('li').length;
//                 if (liCount > maxLiCount) {
//                   maxLiCount = liCount;
//                   bestContainer = container;
//                 }
//               });

//               if (bestContainer && maxLiCount >= 2) {
//                 return (
//                   bestContainer.tagName.toLowerCase() +
//                   (bestContainer.id ? `#${bestContainer.id}` : '') +
//                   (bestContainer.classList.length > 0
//                     ? `.${bestContainer.classList[0]}`
//                     : '')
//                 );
//               }

//               return null;
//             });

//             if (foundContainer) {
//               resultSelector = `${foundContainer} li`;
//               this.log(`컨테이너 스캔으로 선택자 발견: ${resultSelector}`);
//             }
//           } catch (e) {
//             this.log('컨테이너 스캔 중 오류: ' + e.message);
//           }
//         }
//       }

//       if (!resultSelector) {
//         // 오류 발생 전 페이지 구조 로깅
//         await searchFrame.evaluate(() => {
//           console.log('페이지 HTML 구조:', document.body.innerHTML);
//         });

//         // 디버깅용 스크린샷 저장
//         await this.page.screenshot({
//           path: 'search-results-not-found.png',
//           fullPage: true,
//         });
//         this.log(
//           '검색 결과를 찾지 못했습니다. 스크린샷을 저장했습니다: search-results-not-found.png'
//         );

//         throw new Error(
//           '검색 결과 항목 선택자를 찾을 수 없습니다. 네이버 지도 UI가 변경되었을 수 있습니다.'
//         );
//       }

//       //TODO: 스크롤 기능 확인
//       // 스크롤을 내려 더 많은 결과 로드 (필요한 경우)
//       if (maxResults > 10) {
//         this.log('추가 결과를 로드하기 위해 스크롤 다운 시도...');
//         await this.scrollInFrame(searchFrame, 3); // 몇 번 스크롤할지 지정
//       }

//       // 검색 결과 목록 가져오기
//       await searchFrame.waitForSelector(resultSelector, { timeout: 10000 });
//       const listItems = await searchFrame.$$(resultSelector);
//       this.log(`${listItems.length}개의 검색 결과 발견`);

//       if (listItems.length === 0) {
//         throw new Error('검색 결과가 없습니다.');
//       }

//       // 수집할 결과 수 제한
//       const itemsToProcess = listItems.slice(
//         0,
//         Math.min(maxResults, listItems.length)
//       );

//       // 결과 기록용 배열
//       const collectedData = [];

//       // 각 항목별 처리
//       for (let i = 0; i < itemsToProcess.length; i++) {
//         this.log(`[${i + 1}/${itemsToProcess.length}] 장소 정보 수집 중...`);

//         try {
//           // 항목 클릭 - 두 가지 방법 시도
//           try {
//             await itemsToProcess[i].click();
//             this.log('직접 클릭 성공');
//           } catch (clickError) {
//             // 직접 클릭이 실패한 경우 JavaScript 실행으로 클릭
//             await searchFrame.evaluate(
//               (index, sel) => {
//                 const elements = document.querySelectorAll(sel);
//                 if (elements[index]) elements[index].click();
//               },
//               i,
//               resultSelector
//             );
//             this.log('JavaScript 클릭 성공');
//           }

//           // 상세 정보가 로드될 때까지 충분한 대기 시간
//           await this.wait(5000);

//           // entryIframe 찾기 (상세 정보 프레임)
//           const entryIframeSelector = 'iframe#entryIframe';
//           let entryFrame = null;

//           try {
//             // 1. 직접 선택자로 시도
//             const hasEntryIframe =
//               (await this.page.$(entryIframeSelector)) !== null;
//             if (hasEntryIframe) {
//               entryFrame = this.page
//                 .frames()
//                 .find((frame) => frame.name() === 'entryIframe');
//               this.log('entryIframe 직접 선택으로 발견');
//             }
//           } catch (e) {
//             this.log(
//               '직접 선택자로 entryIframe을 찾지 못함, 대체 방법 시도...'
//             );
//           }

//           // 2. URL 패턴으로 시도
//           if (!entryFrame) {
//             entryFrame = this.page
//               .frames()
//               .find(
//                 (frame) =>
//                   frame.url().includes('/p/entry/place/') ||
//                   frame.url().includes('/v5/entry/place/') ||
//                   frame.url().includes('/place/')
//               );

//             if (entryFrame) {
//               this.log('URL 패턴으로 상세 정보 iframe 발견');
//             }
//           }

//           // 3. 내용 기반으로 프레임 식별
//           if (!entryFrame) {
//             for (const frame of this.page.frames()) {
//               try {
//                 const hasDetailContent = await frame.evaluate(() => {
//                   const detailSelectors = [
//                     '.place_section_content',
//                     '.place_detail_wrapper',
//                     '.place-detail',
//                     '.XUrfU',
//                     '.MxEho',
//                     '.Jxtsc',
//                     '.CR_Map',
//                     '.place_fixed_maintab',
//                     // 상세 정보 페이지를 식별할 수 있는 선택자 추가
//                   ];
//                   return detailSelectors.some((selector) =>
//                     document.querySelector(selector)
//                   );
//                 });

//                 if (hasDetailContent) {
//                   entryFrame = frame;
//                   this.log('콘텐츠 기반으로 상세 정보 iframe 발견');
//                   break;
//                 }
//               } catch (e) {
//                 continue;
//               }
//             }
//           }

//           let spotData = null;

//           // entryFrame을 찾았으면 상세 정보 추출
//           if (entryFrame) {
//             // 상세 페이지 URL에서 장소 ID 추출
//             const pageUrl = await this.page.url();
//             let naverSpotId = this.extractSpotIdFromUrl(pageUrl);

//             // 상세 정보 추출
//             spotData = await this.extractDetailDataImproved(entryFrame);

//             // ID 추가
//             if (naverSpotId && !spotData.naverSpotId) {
//               spotData.naverSpotId = naverSpotId;
//             }
//           } else {
//             // entryFrame을 찾지 못한 경우 메인 페이지에서 정보 추출 시도
//             this.log(
//               '상세 정보 iframe을 찾지 못함, 메인 페이지에서 추출 시도...'
//             );
//             spotData = await this.extractDetailDataFromMainPage();
//           }

//           // 데이터 검증
//           if (spotData && spotData.name) {
//             // 결과 저장
//             collectedData.push(spotData);

//             // DB에 저장
//             await this.saveSpotData(spotData);
//           } else {
//             this.log('유효한 데이터를 수집하지 못했습니다.');
//           }

//           // 검색 결과 페이지로 돌아가기
//           await this.navigateBackToSearch(keyword);

//           // 검색 iframe 다시 찾기
//           searchFrame = await this.findSearchFrame();
//           if (searchFrame) {
//             // 검색 결과 선택자 다시 찾기
//             for (const selector of selectors) {
//               try {
//                 const count = await searchFrame.evaluate(
//                   (sel) => document.querySelectorAll(sel).length,
//                   selector
//                 );
//                 if (count > 0) {
//                   resultSelector = selector;
//                   break;
//                 }
//               } catch (e) {
//                 continue;
//               }
//             }

//             if (resultSelector) {
//               await searchFrame.waitForSelector(resultSelector, {
//                 timeout: 10000,
//               });
//               const updatedItems = await searchFrame.$$(resultSelector);

//               // 리스트 아이템 갱신
//               if (i + 1 < itemsToProcess.length) {
//                 const remainingCount =
//                   Math.min(maxResults, updatedItems.length) - (i + 1);
//                 if (remainingCount > 0) {
//                   itemsToProcess.splice(i + 1); // 기존 항목 제거
//                   itemsToProcess.push(
//                     ...updatedItems.slice(i + 1, i + 1 + remainingCount)
//                   ); // 새 항목 추가
//                 }
//               }
//             }
//           }
//         } catch (itemError) {
//           console.error(`[${i + 1}] 항목 처리 중 오류:`, itemError);
//           // 오류 발생 시 검색 페이지로 돌아가고 다음 항목으로 진행
//           await this.navigateBackToSearch(keyword);
//           continue;
//         }
//       }

//       this.log(`'${keyword}' 검색 완료, ${collectedData.length}개 장소 수집됨`);
//       return collectedData;
//     } catch (error) {
//       console.error('검색 및 수집 중 오류 발생:', error);

//       // 스크린샷 찍어서 디버깅
//       await this.page.screenshot({
//         path: 'error-screenshot.png',
//         fullPage: true,
//       });
//       this.log(
//         '오류 발생 시점의 스크린샷을 저장했습니다: error-screenshot.png'
//       );

//       throw error;
//     }
//   }

//   /**
//    * URL에서 네이버 스팟 ID 추출
//    * @param {string} url URL
//    * @returns {string|null} 스팟 ID
//    */
//   extractSpotIdFromUrl(url) {
//     const patterns = [
//       /place\/(\d+)/,
//       /place\?id=(\d+)/,
//       /entry\/place\/(\d+)/,
//       /v5\/entry\/place\/(\d+)/,
//       /p\/place\/(\d+)/,
//     ];

//     for (const pattern of patterns) {
//       const match = url.match(pattern);
//       if (match && match[1]) {
//         return match[1];
//       }
//     }
//     return null;
//   }

//   /**
//    * iframe 내에서 스크롤하여 더 많은 결과 로드
//    * @param {Frame} frame 스크롤할 프레임
//    * @param {number} times 스크롤 횟수
//    */
//   async scrollInFrame(frame, times = 3) {
//     for (let i = 0; i < times; i++) {
//       await frame.evaluate(() => {
//         window.scrollTo(0, document.body.scrollHeight);
//       });
//       this.log(`스크롤 다운 ${i + 1}/${times}`);
//       await this.wait(2000); // 추가 결과 로딩 대기
//     }
//   }

//   /**
//    * 개선된 상세 정보 추출 함수
//    * @param {Frame} frame 상세 정보 프레임
//    */
//   async extractDetailDataImproved(frame) {
//     try {
//       // 이름 추출 (가장 중요한 정보이므로 더 많은 선택자 시도)
//       const name = await this.extractTextWithSelectors(frame, [
//         'span.GHAhO',
//         // '.place_section_header .title',
//         // 'h1.Fc1rA',
//         // 'h2.place_name',
//         // '.PXMot',
//         // '.lsnAf',
//         // '.Fc1rA',
//         // '.K7Lms',
//         // '.Jxtsc h2',
//         // 'div[role="main"] h1',
//         // 'div[role="main"] h2',
//         // 'div.lsnAf',
//         // 'span.Fc1rA',
//         // 'span.K7Lms',
//         // 업데이트된 선택자 추가
//       ]);

//       this.log(`장소 이름: ${name || '추출 실패'}`);

//       // 나머지 정보는 기존 함수와 동일하게 추출
//       const categoryText = await this.extractTextWithSelectors(frame, [
//         'span.lnJFt',
//         // '.place_section_header .category',
//         // '.DJJvD',
//         // '.category',
//         // '.place_category',
//         // '.O8qbU',
//         // '.DjPUM',
//         // '.N_KkG',
//         // '.KDewF',
//       ]);

//       this.log(`장소 카테고리: ${categoryText || '추출 실패'}`);

//       const address = await this.extractTextWithSelectors(frame, [
//         'span.LDgIH',
//         // '.place_section_content .LDgIH',
//         // '.place_section_content .IH7VW',
//         // '.address',
//         // '.CwQv2',
//         // '.place_address',
//         // '.gWnvB',
//         // '.mMymj',
//         // '.IH7VW',
//         // '.S3Exm',
//         // '[title="주소"]',
//       ]);

//       this.log(`주소: ${address || '추출 실패'}`);

//       const tel = await this.extractTextWithSelectors(frame, [
//         'span.xlx7Q',
//         // '.place_section_content .xlx7Q',
//         // '.place_section_content .dry01',
//         // '.phone',
//         // '.place_phone',
//         // '.wQFi8',
//         // '.M8OgO',
//         // '.xlx7Q',
//         // '.hQRFH',
//         // '.vFqNV',
//         // '[title="전화번호"]',
//       ]);

//       this.log(`전화번호: ${tel || '추출 실패'}`);

//       const reviewScore = await this.extractNumberWithSelectors(
//         frame,
//         [
//           '.place_section_content .ANYgl',
//           '.nWiXa',
//           '.review_score',
//           '.grade_star',
//           '.qIaAq',
//           '.PXMot',
//           '.rQQII',
//           '.PtIou',
//           '.LZ3Zm',
//         ],
//         /[\d\.]+/
//       );

//       this.log(`리뷰 점수: ${reviewScore || '추출 실패'}`);

//       const reviewCount = await this.extractNumberWithSelectors(
//         frame,
//         [
//           '.place_section_content .PXMot',
//           '.nWiXa',
//           '.review_count',
//           '.qIaAq span',
//           '.XtBbS',
//           '.tCti6',
//           '.Yrsei',
//         ],
//         /리뷰\s*(\d+)/i
//       );
//       this.log(`리뷰 수: ${reviewCount || '추출 실패'}`);

//       // 위치 정보 추출 시도 (여러 방법 사용)
//       let location = null;

//       // 1. JS 변수나 데이터 속성에서 좌표 찾기
//       location = await frame.evaluate(() => {
//         // a. 전역 변수에서 찾기
//         if (window._lngLat || window._lng_lat || window.lngLat) {
//           const coords = window._lngLat || window._lng_lat || window.lngLat;
//           if (coords && coords.lng && coords.lat) {
//             return {
//               longitude: coords.lng,
//               latitude: coords.lat,
//             };
//           }
//         }

//         // b. 데이터 속성에서 찾기
//         const mapElements = document.querySelectorAll(
//           '[data-longitude][data-latitude]'
//         );
//         if (mapElements.length > 0) {
//           const el = mapElements[0];
//           return {
//             longitude: parseFloat(el.getAttribute('data-longitude')),
//             latitude: parseFloat(el.getAttribute('data-latitude')),
//           };
//         }

//         // c. 정적 지도 이미지 URL에서 추출
//         const mapImgs = document.querySelectorAll(
//           'img[src*="openapi.naver.com/v1/map/staticmap"]'
//         );
//         if (mapImgs.length > 0) {
//           const src = mapImgs[0].getAttribute('src');
//           const latMatch = src.match(/lat=([0-9.]+)/);
//           const lngMatch = src.match(/lng=([0-9.]+)/);

//           if (latMatch && lngMatch) {
//             return {
//               longitude: parseFloat(lngMatch[1]),
//               latitude: parseFloat(latMatch[1]),
//             };
//           }
//         }

//         return null;
//       });

//       // 2. 지도 버튼 클릭해서 좌표 찾기
//       if (!location) {
//         try {
//           const mapButtonSelectors = [
//             '.fAUnt',
//             '.place_section_content .Fc1rA',
//             '.place_map_btn',
//             '.total_wrap_map',
//             '.E0Rct',
//             '.YYisZ',
//             '[title="지도"]',
//           ];

//           for (const selector of mapButtonSelectors) {
//             const hasMapButton = (await frame.$(selector)) !== null;
//             if (hasMapButton) {
//               await frame.click(selector);
//               await this.wait(2000);

//               location = await frame.evaluate(() => {
//                 if (window.naver && window.naver.maps) {
//                   const mapDivs = document.querySelectorAll('div[id^="map"]');
//                   for (const div of mapDivs) {
//                     if (div.__NAVER_MAP__) {
//                       const center = div.__NAVER_MAP__.getCenter();
//                       if (center) {
//                         return {
//                           longitude: center.x || center.lng || center._lng,
//                           latitude: center.y || center.lat || center._lat,
//                         };
//                       }
//                     }
//                   }
//                 }
//                 return null;
//               });

//               if (location) break;
//             }
//           }
//         } catch (e) {
//           this.log('지도 버튼 클릭 중 오류: ' + e.message);
//         }
//       }

//       // 이미지 URL 수집
//       const imageUrls = await this.extractImagesImproved(frame);

//       // 카테고리 변환
//       let categories = [];
//       if (categoryText) {
//         const categoryParts = categoryText.split(/[>|,]/).map((c) => c.trim());
//         categories = categoryParts
//           .map((c) => this.mapNaverCategoryToSpotCategory(c))
//           .filter(Boolean);
//       }

//       return {
//         name,
//         address,
//         tel,
//         location,
//         naverSpotId: null, // URL에서 추출된 ID로 나중에 채워짐
//         reviewCount,
//         reviewScore,
//         imageUrls,
//         categories,
//       };
//     } catch (error) {
//       console.error('상세 정보 추출 중 오류:', error);
//       return {};
//     }
//   }

//   /**
//    * 개선된 이미지 추출 함수
//    * @param {Frame} frame 상세 정보 프레임
//    */
//   async extractImagesImproved(frame) {
//     try {
//       // 1. 이미지 선택자 방식으로 추출
//       const imgSelectors = [
//         '.place_section_content .K0PDV img',
//         '.place_section_content .fIgFx img',
//         '.UoIF_ img',
//         '.place_photo img',
//         '.K0PDV img',
//         '.fIgFx img',
//         '.uDR4i img',
//         '.kR2jx',
//         '.K0PDV',
//         '.jQ0Mm img',
//         '.ohPal img',
//         '.GYQd_ img',
//         '.place_detail_photos img',
//         '.place_section img[alt*="사진"]',
//         '.N70fC img', // 최신 UI 클래스 추가
//       ];

//       for (const selector of imgSelectors) {
//         try {
//           const urls = await frame.evaluate((sel) => {
//             const elements = document.querySelectorAll(sel);
//             if (elements.length === 0) return [];

//             return Array.from(elements)
//               .map(
//                 (el) =>
//                   el.src ||
//                   el.getAttribute('data-src') ||
//                   (el.style &&
//                     el.style.backgroundImage &&
//                     el.style.backgroundImage.match(
//                       /url\(['"]?([^'"]+)['"]?\)/
//                     )?.[1])
//               )
//               .filter(
//                 (url) =>
//                   url &&
//                   !url.includes('transparent.gif') &&
//                   !url.includes('blank.gif') &&
//                   !url.includes('ico_noimage')
//               );
//           }, selector);

//           if (urls && urls.length > 0) {
//             return urls;
//           }
//         } catch (e) {
//           continue;
//         }
//       }

//       // 2. 사진 탭 클릭 시도
//       const photoTabSelectors = [
//         '.place_fixed_maintab .tab_photo',
//         '.place_fixed_maintab .K0PDV',
//         '.K0PDV a',
//         '[title="사진"]',
//         '.fqzqF', // 최신 UI 클래스 추가
//       ];

//       for (const selector of photoTabSelectors) {
//         try {
//           const hasPhotoTab = (await frame.$(selector)) !== null;
//           if (hasPhotoTab) {
//             await frame.click(selector);
//             await this.wait(2000);

//             // 사진 탭에서 이미지 추출
//             const photoUrls = await frame.evaluate(() => {
//               const imgs = document.querySelectorAll('img[src*="pstatic.net"]');
//               return Array.from(imgs)
//                 .map((img) => img.src)
//                 .filter(
//                   (url) =>
//                     url &&
//                     !url.includes('transparent.gif') &&
//                     !url.includes('blank.gif') &&
//                     !url.includes('ico_noimage')
//                 );
//             });

//             if (photoUrls && photoUrls.length > 0) {
//               return photoUrls;
//             }
//           }
//         } catch (e) {
//           this.log('사진 탭 클릭 중 오류: ' + e.message);
//         }
//       }

//       // 3. 스타일 배경에서 이미지 URL 추출
//       const bgImageUrls = await frame.evaluate(() => {
//         const elements = document.querySelectorAll('*');
//         const urls = [];

//         for (const el of elements) {
//           try {
//             const style = window.getComputedStyle(el);
//             const bgImage = style.backgroundImage;

//             if (bgImage && bgImage !== 'none') {
//               const match = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
//               if (match && match[1]) {
//                 const url = match[1].trim();
//                 if (
//                   url.includes('pstatic.net') &&
//                   !url.includes('transparent.gif') &&
//                   !url.includes('blank.gif') &&
//                   !url.includes('ico_noimage')
//                 ) {
//                   urls.push(url);
//                 }
//               }
//             }
//           } catch (e) {
//             continue;
//           }
//         }

//         return urls;
//       });

//       if (bgImageUrls && bgImageUrls.length > 0) {
//         return bgImageUrls;
//       }

//       // 4. 일반 이미지 태그에서 관련 이미지 추출
//       return await frame.evaluate(() => {
//         const imgs = document.querySelectorAll('img');
//         return Array.from(imgs)
//           .map((img) => img.src)
//           .filter(
//             (url) =>
//               url &&
//               url.includes('pstatic.net') &&
//               !url.includes('transparent.gif') &&
//               !url.includes('blank.gif') &&
//               !url.includes('ico_noimage')
//           );
//       });
//     } catch (error) {
//       console.error('이미지 URL 추출 중 오류:', error);
//       return [];
//     }
//   }

//   /**
//    * 메인 페이지에서 상세 정보 추출 시도
//    */
//   async extractDetailDataFromMainPage() {
//     try {
//       const pageUrl = await this.page.url();
//       let naverSpotId = this.extractSpotIdFromUrl(pageUrl);

//       // 기본 정보 추출
//       const name = await this.page.evaluate(() => {
//         const selectors = [
//           '.place_section_header .title',
//           'h1.Fc1rA',
//           'h2.place_name',
//           '.PXMot',
//           '.lsnAf',
//           '.Fc1rA',
//           '.K7Lms',
//           '.Jxtsc h2',
//           'div[role="main"] h1',
//           'div[role="main"] h2',
//           'div.lsnAf',
//           'span.Fc1rA',
//           'span.K7Lms',
//         ];

//         for (const selector of selectors) {
//           const el = document.querySelector(selector);
//           if (el) return el.textContent.trim();
//         }

//         return null;
//       });

//       if (!name) {
//         this.log('메인 페이지에서 장소 이름을 찾을 수 없습니다.');
//         return null;
//       }

//       // 나머지 정보 추출
//       const data = await this.page.evaluate(() => {
//         // 주소 추출
//         let address = null;
//         const addressSelectors = [
//           '.place_section_content .LDgIH',
//           '.place_section_content .IH7VW',
//           '.address',
//           '.CwQv2',
//           '.place_address',
//           '.gWnvB',
//           '.mMymj',
//           '.IH7VW',
//           '.S3Exm',
//           '[title="주소"]',
//         ];
//         for (const selector of addressSelectors) {
//           const el = document.querySelector(selector);
//           if (el) {
//             address = el.textContent.trim();
//             break;
//           }
//         }

//         // 전화번호 추출
//         let tel = null;
//         const telSelectors = [
//           '.place_section_content .xlx7Q',
//           '.place_section_content .dry01',
//           '.phone',
//           '.place_phone',
//           '.wQFi8',
//           '.M8OgO',
//           '.xlx7Q',
//           '.hQRFH',
//           '.vFqNV',
//           '[title="전화번호"]',
//         ];
//         for (const selector of telSelectors) {
//           const el = document.querySelector(selector);
//           if (el) {
//             tel = el.textContent.trim();
//             break;
//           }
//         }

//         // 카테고리 추출
//         let categoryText = null;
//         const categorySelectors = [
//           '.place_section_header .category',
//           '.DJJvD',
//           '.category',
//           '.place_category',
//           '.O8qbU',
//           '.DjPUM',
//           '.N_KkG',
//           '.KDewF',
//         ];
//         for (const selector of categorySelectors) {
//           const el = document.querySelector(selector);
//           if (el) {
//             categoryText = el.textContent.trim();
//             break;
//           }
//         }

//         // 이미지 URL 추출
//         const imgs = document.querySelectorAll('img[src*="pstatic.net"]');
//         const imageUrls = Array.from(imgs)
//           .map((img) => img.src)
//           .filter(
//             (url) =>
//               url &&
//               !url.includes('transparent.gif') &&
//               !url.includes('blank.gif') &&
//               !url.includes('ico_noimage')
//           );

//         return { address, tel, categoryText, imageUrls };
//       });

//       // 카테고리 변환
//       let categories = [];
//       if (data.categoryText) {
//         const categoryParts = data.categoryText
//           .split(/[>|,]/)
//           .map((c) => c.trim());
//         categories = categoryParts
//           .map((c) => this.mapNaverCategoryToSpotCategory(c))
//           .filter(Boolean);
//       }

//       return {
//         name,
//         address: data.address,
//         tel: data.tel,
//         location: null, // 메인 페이지에서는 좌표 추출이 어려울 수 있음
//         naverSpotId,
//         reviewCount: null,
//         reviewScore: null,
//         imageUrls: data.imageUrls || [],
//         categories,
//       };
//     } catch (error) {
//       console.error('메인 페이지에서 상세 정보 추출 중 오류:', error);
//       return null;
//     }
//   }

//   /**
//    * 네이버 카테고리를 스팟 카테고리로 매핑
//    * @param {string} naverCategory 네이버 카테고리
//    * @returns {string} 스팟 카테고리
//    */
//   mapNaverCategoryToSpotCategory(naverCategory) {
//     if (!naverCategory) return null;

//     // 정확한 매핑 먼저 시도
//     if (this.categoryMap[naverCategory]) {
//       return this.categoryMap[naverCategory];
//     }

//     // 키워드 기반 매핑 시도
//     const categoryKeywords = {
//       식당: [
//         '식당',
//         '음식',
//         '맛집',
//         '요리',
//         '레스토랑',
//         '분식',
//         '한식',
//         '일식',
//         '중식',
//         '양식',
//         '주점',
//         '음식점',
//         '치킨',
//         '피자',
//         '패스트푸드',
//         '카페테리아',
//         '뷔페',
//       ],
//       카페: [
//         '카페',
//         '다방',
//         '디저트',
//         '베이커리',
//         '커피',
//         '차',
//         '빵집',
//         '제과점',
//         '아이스크림',
//       ],
//       숙소: [
//         '숙소',
//         '호텔',
//         '모텔',
//         '게스트하우스',
//         '리조트',
//         '펜션',
//         '민박',
//         '콘도',
//         '숙박',
//         '여관',
//         '비앤비',
//         '한옥스테이',
//       ],
//       관광지: [
//         '관광',
//         '명소',
//         '유적',
//         '유원지',
//         '공원',
//         '테마파크',
//         '휴양지',
//         '해변',
//         '산',
//         '섬',
//         '폭포',
//         '동굴',
//         '천연',
//       ],
//       '복합 문화 공간': [
//         '문화',
//         '공연',
//         '전시',
//         '예술',
//         '센터',
//         '쇼핑',
//         '몰',
//         '백화점',
//         '아트',
//         '스튜디오',
//       ],
//       박물관: ['박물관', '뮤지엄', '유물', '전시관'],
//       미술관: ['미술관', '갤러리', '예술관'],
//       도서관: ['도서관', '서점', '책방', '북카페'],
//       역사: ['역사', '고궁', '성', '유적지', '고택', '전통', '궁궐', '왕릉'],
//       종교: [
//         '종교',
//         '사찰',
//         '절',
//         '교회',
//         '성당',
//         '신사',
//         '사원',
//         '기도원',
//         '수도원',
//       ],
//     };

//     // 정규화된 카테고리 (소문자, 공백 제거)
//     const normalizedCategory = naverCategory.toLowerCase().replace(/\s+/g, '');

//     // 카테고리 키워드 매칭
//     for (const [category, keywords] of Object.entries(categoryKeywords)) {
//       for (const keyword of keywords) {
//         if (normalizedCategory.includes(keyword.toLowerCase())) {
//           return category;
//         }
//       }
//     }

//     this.log(`매핑되지 않은 카테고리: ${naverCategory}`);
//     return null;
//   }

//   /**
//    * 스팟 데이터를 데이터베이스에 저장
//    * @param {Object} spotData 수집한 스팟 데이터
//    */
//   async saveSpotData(spotData) {
//     // 기존 함수를 그대로 유지
//     let transaction;

//     try {
//       // 트랜잭션 시작
//       transaction = await sequelize.transaction();

//       // 기존 스팟 확인 (네이버 ID로)
//       let spot = null;
//       if (spotData.naverSpotId) {
//         spot = await Spot.findOne({
//           where: { naverSpotId: spotData.naverSpotId },
//           transaction,
//         });
//       }

//       // 스팟 생성 또는 업데이트
//       if (!spot) {
//         // 새 스팟 생성
//         spot = await Spot.create(
//           {
//             name: spotData.name,
//             address: spotData.address,
//             tel: spotData.tel,
//             location: spotData.location,
//             naverSpotId: spotData.naverSpotId,
//             reviewCount: spotData.reviewCount,
//             reviewScore: spotData.reviewScore,
//           },
//           { transaction }
//         );

//         this.log(`새 스팟 생성됨: ${spotData.name} (ID: ${spot.spotId})`);
//       } else {
//         // 기존 스팟 업데이트
//         await spot.update(
//           {
//             name: spotData.name,
//             address: spotData.address,
//             tel: spotData.tel,
//             location: spotData.location,
//             reviewCount: spotData.reviewCount,
//             reviewScore: spotData.reviewScore,
//           },
//           { transaction }
//         );

//         this.log(`기존 스팟 업데이트됨: ${spotData.name} (ID: ${spot.spotId})`);
//       }

//       // 이미지 처리
//       if (spotData.imageUrls && spotData.imageUrls.length > 0) {
//         // 기존 이미지 삭제
//         await SpotImg.destroy({
//           where: { spotId: spot.spotId },
//           transaction,
//         });

//         // 새 이미지 추가
//         const imageData = spotData.imageUrls.map((url) => ({
//           spotId: spot.spotId,
//           imageUrl: url,
//         }));

//         await SpotImg.bulkCreate(imageData, { transaction });
//         this.log(`${imageData.length}개 이미지 저장됨`);
//       }

//       // 카테고리 처리
//       if (spotData.categories && spotData.categories.length > 0) {
//         // 기존 카테고리 관계 삭제
//         await SpotCategoryRelation.destroy({
//           where: { spotId: spot.spotId },
//           transaction,
//         });

//         // 카테고리 관계 생성
//         for (const categoryName of spotData.categories) {
//           const categoryId = this.categoryIds[categoryName];
//           if (categoryId) {
//             await SpotCategoryRelation.create(
//               {
//                 spotId: spot.spotId,
//                 spotCategoryId: categoryId,
//               },
//               { transaction }
//             );
//             this.log(`카테고리 연결됨: ${categoryName} (ID: ${categoryId})`);
//           }
//         }
//       }

//       // 트랜잭션 커밋
//       await transaction.commit();
//       this.log(`스팟 저장 완료: ${spotData.name}`);
//       return spot;
//     } catch (error) {
//       // 오류 발생 시 롤백
//       if (transaction) await transaction.rollback();
//       console.error('스팟 데이터 저장 중 오류 발생:', error);
//       throw error;
//     }
//   }

//   /**
//    * 여러 CSS 선택자를 시도하여 텍스트 추출
//    * @param {Frame} frame 프레임
//    * @param {string[]} selectors 시도할 CSS 선택자 배열
//    * @returns {Promise<string|null>} 추출된 텍스트 또는 null
//    */
//   async extractTextWithSelectors(frame, selectors) {
//     try {
//       for (const selector of selectors) {
//         try {
//           const hasElement = (await frame.$(selector)) !== null;
//           if (hasElement) {
//             const text = await frame.evaluate((sel) => {
//               const element = document.querySelector(sel);
//               return element ? element.textContent.trim() : null;
//             }, selector);

//             if (text) {
//               return text;
//             }
//           }
//         } catch (e) {
//           continue;
//         }
//       }
//       return null;
//     } catch (error) {
//       console.error('텍스트 추출 중 오류:', error);
//       return null;
//     }
//   }

//   /**
//    * 여러 CSS 선택자를 시도하여 숫자 추출
//    * @param {Frame} frame 프레임
//    * @param {string[]} selectors 시도할 CSS 선택자 배열
//    * @param {RegExp} regex 숫자를 추출할 정규식 패턴
//    * @returns {Promise<number|null>} 추출된 숫자 또는 null
//    */
//   async extractNumberWithSelectors(frame, selectors, regex) {
//     try {
//       const text = await this.extractTextWithSelectors(frame, selectors);
//       if (!text) return null;

//       // 정규식이 캡처 그룹을 가지고 있는 경우
//       if (regex.toString().includes('(')) {
//         const match = text.match(regex);
//         if (match && match[1]) {
//           const num = parseFloat(match[1]);
//           return isNaN(num) ? null : num;
//         }
//       } else {
//         // 간단한 숫자 추출 (캡처 그룹 없음)
//         const match = text.match(regex);
//         if (match && match[0]) {
//           const num = parseFloat(match[0]);
//           return isNaN(num) ? null : num;
//         }
//       }

//       return null;
//     } catch (error) {
//       console.error('숫자 추출 중 오류:', error);
//       return null;
//     }
//   }

//   /**
//    * 검색 결과 iframe 찾기
//    * @returns {Promise<Frame|null>} 검색 iframe 또는 null
//    */
//   async findSearchFrame() {
//     try {
//       // 1. 직접적인 iframe 선택자로 시도
//       const searchIframeSelector = 'iframe#searchIframe';
//       const hasSearchIframe =
//         (await this.page.$(searchIframeSelector)) !== null;

//       if (hasSearchIframe) {
//         const searchFrame = await this.page
//           .frames()
//           .find((frame) => frame.name() === 'searchIframe');
//         if (searchFrame) {
//           this.log('searchIframe 직접 선택으로 발견');
//           return searchFrame;
//         }
//       }

//       // 2. iframe URL 패턴으로 시도
//       const frameByUrl = await this.page
//         .frames()
//         .find(
//           (frame) =>
//             frame.url().includes('/p/api/search') ||
//             frame.url().includes('/v5/api/search') ||
//             frame.url().includes('/search')
//         );

//       if (frameByUrl) {
//         this.log('URL 패턴으로 검색 iframe 발견');
//         return frameByUrl;
//       }

//       // 3. 내용 기반으로 iframe 식별
//       for (const frame of this.page.frames()) {
//         try {
//           const hasResults = await frame.evaluate(() => {
//             const selectors = [
//               '.place_list .item_search',
//               '.PlaceListView_list_item__TA3cE',
//               '.YeNZ7qQtTko',
//               '.Pcbbk',
//               '.qbGlu',
//               '.L0xWP',
//               '.SUaFB',
//               '.Q0vdS',
//               '.xHaT3',
//               '.D_-iJ',
//               '[role="listitem"]',
//               'li.UEzoS',
//             ];
//             return selectors.some(
//               (selector) => document.querySelectorAll(selector).length > 0
//             );
//           });

//           if (hasResults) {
//             this.log('콘텐츠 기반으로 검색 iframe 발견');
//             return frame;
//           }
//         } catch (e) {
//           continue;
//         }
//       }

//       return null;
//     } catch (error) {
//       console.error('검색 iframe 찾기 오류:', error);
//       return null;
//     }
//   }

//   /**
//    * 검색 페이지로 돌아가기
//    * @param {string} keyword 검색어
//    */
//   async navigateBackToSearch(keyword) {
//     try {
//       // 뒤로 가기 버튼 시도
//       try {
//         const backButtonSelectors = [
//           '.naver-place-back',
//           '.back_button',
//           '.back-button',
//           'button[aria-label="뒤로가기"]',
//           'button.place_fixedBtn__7Rp3N',
//           '.fvwqf',
//           '.gm_svc_back',
//           '.btn_prev',
//           'a.a_prev',
//         ];

//         for (const selector of backButtonSelectors) {
//           const hasBackButton = (await this.page.$(selector)) !== null;
//           if (hasBackButton) {
//             await this.page.click(selector);
//             await this.wait(2000);

//             // 검색 결과 iframe이 있는지 확인
//             const searchFrame = await this.findSearchFrame();
//             if (searchFrame) {
//               this.log('뒤로 가기 버튼으로 검색 페이지로 돌아옴');
//               return;
//             }
//           }
//         }
//       } catch (e) {
//         this.log('뒤로 가기 버튼 클릭 실패: ' + e.message);
//       }

//       // URL로 직접 이동
//       this.log('URL을 통해 검색 페이지로 돌아가기 시도');
//       const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(
//         keyword
//       )}`;
//       await this.page.goto(searchUrl, {
//         waitUntil: 'networkidle2',
//         timeout: 30000,
//       });
//       await this.wait(3000);
//     } catch (error) {
//       console.error('검색 페이지로 돌아가기 실패:', error);
//       // 실패 시 URL로 한 번 더 시도
//       const searchUrl = `https://map.naver.com/p/search/${encodeURIComponent(
//         keyword
//       )}`;
//       await this.page.goto(searchUrl, {
//         waitUntil: 'networkidle2',
//         timeout: 30000,
//       });
//       await this.wait(3000);
//     }
//   }
// }

// module.exports = NaverMapCrawler;
