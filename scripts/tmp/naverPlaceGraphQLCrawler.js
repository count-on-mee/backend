/**
 * 네이버 지도 장소 정보 크롤링 스크립트 - GraphQL API 버전
 * GraphQL API를 활용하여 보다 안정적으로 장소 정보를 수집
 */
'use strict';

const axios = require('axios');
const fs = require('fs').promises;
const {
  sequelize,
  Spot,
  SpotImg,
  SpotCategory,
  SpotCategoryRelation,
} = require('../models');

/**
 * 네이버 지도 GraphQL API를 활용하여 장소 정보를 크롤링하는 클래스
 */
class NaverPlaceGraphQLCrawler {
  constructor() {
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

    // GraphQL API 설정
    this.apiUrl = 'https://pcmap-api.place.naver.com/graphql';

    // 필수 쿠키와 헤더 설정
    this.cookies =
      'NNB=XR2AZKO2G36WO; NAC=LnDnBkQj1YWfB; PLACE_LANGUAGE=ko; NACT=1';

    // 필수 헤더 설정
    this.defaultHeaders = {
      accept: '*/*',
      'accept-language': 'ko',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      cookie: this.cookies,
      origin: 'https://pcmap.place.naver.com',
      pragma: 'no-cache',
      priority: 'u=1, i',
      referer: 'https://pcmap.place.naver.com/place/list',
      'sec-ch-ua':
        '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
      'x-ncaptcha-violation': 'false',
    };
  }

  /**
   * 디버그 로그 출력
   * @param {string} message 출력할 메시지
   */
  log(message) {
    if (this.debug) {
      console.log(`[NaverPlaceGraphQLCrawler] ${message}`);
    }
  }

  /**
   * 초기화 및 설정
   */
  async initialize() {
    try {
      // 카테고리 ID 매핑 초기화
      await this.initCategoryIds();
      this.log('초기화 완료');
      return true;
    } catch (error) {
      console.error('초기화 실패:', error);
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
   * 지정된 시간(ms) 동안 대기
   * @param {number} ms 대기 시간(밀리초)
   */
  async wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  /**
   * GraphQL API를 통해 장소 정보 검색 및 데이터 추출
   * @param {string} keyword 검색어
   * @param {number} maxResults 최대 결과 수
   * @param {number} display 한 번에 요청할 결과 수 (최대 50)
   */
  async searchAndCollect(keyword, maxResults = 20, display = 50) {
    try {
      this.log(`'${keyword}' 검색 시작`);

      const collectedData = [];
      let start = 1;
      let resultCount = 0;

      // 최대 결과 수에 도달할 때까지 페이지네이션 처리
      while (resultCount < maxResults) {
        // 현재 페이지에서 가져올 결과 수 계산
        const currentPageDisplay = Math.min(display, maxResults - resultCount);

        this.log(`${start}부터 ${currentPageDisplay}개 결과 요청 중...`);

        // x-wtm-graphql 헤더값 생성
        const wtmGraphQLValue = Buffer.from(
          JSON.stringify({
            arg: keyword,
            type: 'place',
            source: 'place',
          })
        ).toString('base64');

        // 현재 요청을 위한 헤더 생성
        const headers = {
          ...this.defaultHeaders,
          referer: `https://pcmap.place.naver.com/place/list?query=${encodeURIComponent(
            keyword
          )}`,
          'x-wtm-graphql': wtmGraphQLValue,
        };

        // GraphQL 쿼리 생성
        const query = {
          operationName: 'getPlacesList',
          variables: {
            useReverseGeocode: true,
            input: {
              query: keyword,
              start: start,
              display: currentPageDisplay,
              adult: false,
              spq: false,
              queryRank: '',
              deviceType: 'pcmap',
            },
            isNmap: true,
            isBounds: true,
            reverseGeocodingInput: {},
          },
          query: `query getPlacesList($input: PlacesInput, $isNmap: Boolean!, $isBounds: Boolean!, $reverseGeocodingInput: ReverseGeocodingInput, $useReverseGeocode: Boolean = false) {
            businesses: places(input: $input) {
              total
              items {
                id
                name
                normalizedName
                category
                detailCid {
                  c0
                  c1
                  c2
                  c3
                  __typename
                }
                categoryCodeList
                dbType
                distance
                roadAddress
                address
                fullAddress
                commonAddress
                bookingUrl
                phone
                virtualPhone
                businessHours
                daysOff
                imageUrl
                imageUrls
                imageCount
                x
                y
                visitorReviewCount
                visitorReviewScore
                blogCafeReviewCount
                __typename
              }
              __typename
            }
          }`,
        };

        try {
          // API 요청
          const response = await axios.post(this.apiUrl, [query], {
            headers: headers,
            validateStatus: (status) => true, // 모든 상태 코드 허용
          });

          // 응답 상태 확인
          if (response.status === 400) {
            this.log(
              `API 요청 실패 (400 Bad Request): ${JSON.stringify(
                response.data
              )}`
            );

            if (start === 1) {
              // 첫 번째 요청에서 실패한 경우, 요청 데이터와 응답 저장 (디버깅용)
              await fs.writeFile(
                'graphql_request_failed.json',
                JSON.stringify(
                  {
                    request: {
                      url: this.apiUrl,
                      headers: headers,
                      data: [query],
                    },
                    response: {
                      status: response.status,
                      data: response.data,
                    },
                  },
                  null,
                  2
                )
              );
            }

            // 1초 대기 후 재시도
            await this.wait(1000);
            continue;
          }

          // 응답 데이터 확인
          if (
            !response.data ||
            !response.data[0] ||
            !response.data[0].data ||
            !response.data[0].data.businesses ||
            !response.data[0].data.businesses.items
          ) {
            this.log('API 응답에 예상된 데이터가 없습니다.');

            if (start === 1) {
              // 응답 저장 (디버깅용)
              await fs.writeFile(
                'graphql_response_no_data.json',
                JSON.stringify(response.data, null, 2)
              );
            }
            break;
          }

          const items = response.data[0].data.businesses.items;
          this.log(`${items.length}개 결과 수신됨`);

          // 결과가 없으면 중단
          if (items.length === 0) {
            break;
          }

          // 디버깅용 파일 저장
          if (start === 1) {
            await fs.writeFile(
              'graphql_response.json',
              JSON.stringify(response.data, null, 2)
            );
          }

          // 장소 데이터 처리
          for (const item of items) {
            try {
              const spotData = {
                name: item.name,
                naverSpotId: item.id.toString(),
                location: {
                  longitude: parseFloat(item.x),
                  latitude: parseFloat(item.y),
                },
                address: item.commonAddress
                  ? item.commonAddress + ' ' + (item.roadAddress || '')
                  : item.address || item.fullAddress,
                tel: item.phone || item.virtualPhone,
                reviewCount: parseInt(item.visitorReviewCount) || 0,
                reviewScore: item.visitorReviewScore || null,
                imageUrls: Array.isArray(item.imageUrls)
                  ? item.imageUrls
                  : item.imageUrl
                  ? [item.imageUrl]
                  : [],
                categories: [],
              };

              // 카테고리 처리
              if (item.category) {
                const categoryParts = item.category
                  .split(/[>|,]/)
                  .map((c) => c.trim());

                spotData.categories = categoryParts
                  .map((c) => this.mapNaverCategoryToSpotCategory(c))
                  .filter(Boolean);
              }

              // 수집된 데이터 저장
              collectedData.push(spotData);
              resultCount++;

              // DB에 저장
              await this.saveSpotData(spotData);

              // 최대 결과 수에 도달하면 종료
              if (resultCount >= maxResults) {
                break;
              }
            } catch (itemError) {
              console.error(`데이터 처리 중 오류:`, itemError);
              continue;
            }
          }

          // 다음 페이지 준비
          start += items.length;

          // API 요청 간 간격 설정 (서버 부하 방지)
          await this.wait(1500);

          // 모든 결과를 가져왔거나 최대 결과 수에 도달한 경우 중단
          if (items.length < currentPageDisplay || resultCount >= maxResults) {
            break;
          }
        } catch (error) {
          this.log(`API 요청 중 오류 발생: ${error.message}`);

          if (error.response) {
            this.log(
              `응답 상태: ${error.response.status}, 데이터: ${JSON.stringify(
                error.response.data
              )}`
            );

            // 네이버 캡챠 확인
            if (
              error.response.status === 403 ||
              error.response.status === 429
            ) {
              this.log(
                '요청이 차단되었습니다. 네이버 캡챠 또는 속도 제한 가능성 있음'
              );
              // 더 오래 대기하고 재시도
              await this.wait(5000);
              continue;
            }
          }

          if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
            this.log('타임아웃 발생, 재시도합니다.');
            await this.wait(3000);
            continue;
          }

          // 연속 오류 방지를 위해 잠시 대기
          await this.wait(2000);

          if (start === 1) {
            throw error; // 첫 번째 요청에서 실패하면 중단
          }

          // 다른 오류는 무시하고 다음 페이지 시도
          continue;
        }
      }

      this.log(`'${keyword}' 검색 완료, ${collectedData.length}개 장소 수집됨`);
      return collectedData;
    } catch (error) {
      console.error('검색 및 수집 중 오류 발생:', error);
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
 * @param {string|string[]} keyword 검색어 또는 검색어 배열
 * @param {number} maxResults 최대 결과 수
 */
async function runCrawler(keyword = '신촌', maxResults = 10) {
  const crawler = new NaverPlaceGraphQLCrawler();

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

module.exports = NaverPlaceGraphQLCrawler;
