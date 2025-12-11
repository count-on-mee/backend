/**
 * Stayfolio API 크롤링 스크립트
 * 숙소 데이터를 Stayfolio API에서 수집
 */
'use strict';

const axios = require('axios');

class StayfolioCrawler {
  constructor(options = {}) {
    this.baseUrl = 'https://www.stayfolio.com/api/v1/places_v2';
    this.debug = options.debug ?? false;
    this.categoryIds = {};
    this.saveToDatabase = options.saveToDatabase ?? false;
  }

  log(message, ...rest) {
    if (this.debug) console.log(`[StayfolioCrawler] ${message}`, ...rest);
  }

  /**
   * Stayfolio API에서 숙소 데이터 수집
   * @param {number} maxPages 최대 페이지 수 (기본값: 100)
   * @returns {Array} 수집된 숙소 데이터 배열
   */
  async collectAccommodations(maxPages = 100) {
    const results = [];
    let currentPage = 1;
    let hasMoreData = true;

    this.log(`Stayfolio 숙소 데이터 수집 시작 (최대 ${maxPages}페이지)`);

    while (hasMoreData && currentPage <= maxPages) {
      try {
        this.log(`페이지 ${currentPage} 수집 중...`);

        const url = `${this.baseUrl}?country=한국&locale=ko&order=recommended&page=${currentPage}&per=20`;
        const response = await axios.get(url, {
          timeout: 30000,
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            Accept: 'application/json, text/plain, */*',
            'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
            Referer: 'https://www.stayfolio.com/',
            Origin: 'https://www.stayfolio.com',
          },
        });

        if (response.status !== 200 || !response.data || !response.data.items) {
          this.log(
            `페이지 ${currentPage} API 호출 실패: status=${response.status}`
          );
          break;
        }

        const items = response.data.items;

        if (items.length === 0) {
          this.log(`페이지 ${currentPage}에서 빈 배열 수신. 수집 완료.`);
          hasMoreData = false;
          break;
        }

        // 각 아이템을 처리하여 표준화된 데이터로 변환
        for (const item of items) {
          try {
            const accommodationData = await this.parseStayfolioItem(item);
            if (accommodationData) {
              results.push(accommodationData);
            }
          } catch (itemError) {
            this.log(`아이템 처리 실패: ${itemError.message}`);
          }
        }

        this.log(
          `페이지 ${currentPage} 완료: ${items.length}개 수집 (총 ${results.length}개)`
        );
        currentPage++;

        // API 부하 방지를 위한 대기
        await this.wait(1000);
      } catch (error) {
        this.log(`페이지 ${currentPage} 수집 실패: ${error.message}`);
        break;
      }
    }

    this.log(`수집 완료: 총 ${results.length}개 숙소 데이터`);
    return results;
  }

  /**
   * identifier를 사용하여 상세 정보 API 호출
   * @param {string} identifier 숙소 identifier
   * @returns {Object|null} 상세 정보 또는 null
   */
  async fetchPlaceDetail(identifier) {
    if (!identifier) return null;

    try {
      const url = `https://www.stayfolio.com/api/v1/places/${identifier}?locale=ko`;
      const response = await axios.get(url, {
        timeout: 30000,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
          Referer: 'https://www.stayfolio.com/',
          Origin: 'https://www.stayfolio.com',
        },
      });

      if (response.status === 200 && response.data) {
        return response.data;
      }
    } catch (error) {
      this.log(
        `상세 정보 조회 실패 (identifier: ${identifier}): ${error.message}`
      );
    }

    return null;
  }

  /**
   * Stayfolio 아이템을 표준화된 데이터로 변환
   * @param {Object} item Stayfolio API 응답 아이템
   * @returns {Object} 표준화된 숙소 데이터
   */
  async parseStayfolioItem(item) {
    if (!item || !item.id) return null;

    // 기본 정보 추출
    const name = item.name_kr || item.name || '';
    const identifier = item.identifier || '';
    const location = {
      longitude: parseFloat(item.longitude) || 0,
      latitude: parseFloat(item.latitude) || 0,
    };

    // identifier를 사용하여 상세 정보 가져오기
    let address = this.buildAddress(item);
    let tel = null;

    if (identifier) {
      const detailData = await this.fetchPlaceDetail(identifier);
      if (detailData) {
        // 상세 정보에서 주소 추출
        if (detailData.address) {
          address = detailData.address;
        }
        // 상세 정보에서 전화번호 추출
        if (detailData.phone) {
          tel = detailData.phone;
        }
      }
      // API 부하 방지를 위한 대기
      await this.wait(500);
    }

    // 가격 정보 추출
    const priceMin = parseFloat(item.price_min) || 0;
    const priceMax = parseFloat(item.price_max) || 0;
    const basePrice =
      parseFloat(item.realtime_base_price) ||
      parseFloat(item.display_base_price) ||
      0;

    // 이미지 URL 추출
    const imgUrls = this.extractImageUrls(item);

    // 카테고리 매핑 (숙소로 고정)
    const categories = ['숙소'];

    return {
      name,
      naverSpotId: `s${item.id}`, // s prefix 사용
      identifier,
      location,
      address,
      tel,
      reviewCount: 0, // Stayfolio API에는 리뷰 정보가 없음
      reviewScore: null,
      imgUrls,
      categories,
      // Stayfolio 특화 데이터
      placeType: item.place_type || '',
      placeTypeToS: item.place_type_to_s || '',
      passengerCntMin: parseInt(item.passenger_cnt_min) || 0,
      passengerCntMax: parseInt(item.passenger_cnt_max) || 0,
      priceMin,
      priceMax,
      basePrice,
      country: item.country || '한국',
      city: item.city || '',
      town: item.town || '',
      village: item.village || '',
      neighborhood: item.neighborhood || '',
      landmark: item.landmark || '',
    };
  }

  /**
   * 주소 정보 구성
   * @param {Object} item Stayfolio 아이템
   * @returns {string} 구성된 주소
   */
  buildAddress(item) {
    const addressParts = [];

    if (item.country) addressParts.push(item.country);
    if (item.city) addressParts.push(item.city);
    if (item.town) addressParts.push(item.town);
    if (item.village) addressParts.push(item.village);
    if (item.neighborhood) addressParts.push(item.neighborhood);
    if (item.landmark) addressParts.push(item.landmark);

    return addressParts.join(' ');
  }

  /**
   * 이미지 URL 추출
   * @param {Object} item Stayfolio 아이템
   * @returns {Array} 이미지 URL 배열
   */
  extractImageUrls(item) {
    const imgUrls = [];

    // 메인 배너 이미지
    if (item.main_banner && Array.isArray(item.main_banner)) {
      for (const banner of item.main_banner) {
        if (banner.image && banner.image.original) {
          const imageUrl = banner.image.original.startsWith('//')
            ? `https:${banner.image.original}`
            : banner.image.original;
          imgUrls.push(imageUrl);
        }
      }
    }

    // 갤러리 이미지
    if (item.pictures && Array.isArray(item.pictures)) {
      for (const picture of item.pictures) {
        if (
          picture.image &&
          picture.image.original &&
          picture.sub_type === 'gallery'
        ) {
          const imageUrl = picture.image.original.startsWith('//')
            ? `https:${picture.image.original}`
            : picture.image.original;
          imgUrls.push(imageUrl);
        }
        // 최대 10개 이미지만 수집
        if (imgUrls.length >= 10) break;
      }
    }

    return imgUrls;
  }

  /**
   * 카테고리 정규화 (숙소로 고정)
   * @param {Array} inputList 입력 카테고리 리스트
   * @returns {Array} 정규화된 카테고리 리스트
   */
  normalizeCategories(inputList) {
    return ['숙소'];
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
}

module.exports = StayfolioCrawler;
