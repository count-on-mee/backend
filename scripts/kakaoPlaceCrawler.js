/**
 * 카카오 지도 북마크 크롤링
 */
'use strict';

const axios = require('axios');

class KakaoPlaceCrawler {
  constructor(options = {}) {
    this.debug = options.debug ?? false;
    this.categoryIds = {};
  }

  log(message, ...rest) {
    if (this.debug) console.log(`[KakaoPlaceCrawler] ${message}`, ...rest);
  }

  createFolderHeaders() {
    return {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'ko-KR,ko;q=0.9,en;q=0.8',
      Referer: 'https://map.kakao.com/',
      Origin: 'https://map.kakao.com',
    };
  }

  createSpotHeaders() {
    return {
      Referer: 'https://place.map.kakao.com/',
      pf: 'web',
    };
  }

  // 카카오맵 북마크 API
  async fetchSpotKeyByFolderId(folderId) {
    const url = `https://map.kakao.com/favorite/list.json?folderIds%5B%5D=${encodeURIComponent(
      folderId
    )}&type=S`;
    const headers = this.createFolderHeaders();
    this.log(`북마크 API 호출: ${url}`);
    const res = await axios.get(url, { headers, timeout: 30000 });
    if (res.status !== 200 || !res.data || !res.data.result) {
      this.log(`북마크 API 실패 status=${res.status}`);
      return [];
    }
    // PLACE 타입만 유지
    return res.data.result
      .filter((r) => r.favoriteType === 'PLACE')
      .map((r) => ({
        key: String(r.key),
      }));
  }

  // 카카오맵 스팟 정보 API
  async fetchSpotInfoBySpotKey(spotKey) {
    const url = `https://place-api.map.kakao.com/places/panel3/${spotKey}`;
    const headers = this.createSpotHeaders();
    this.log(`스팟 정보 API 호출: ${url}`);
    const res = await axios.get(url, { headers, timeout: 20000 });
    if (res.status !== 200 || !res.data) return null;

    const data = res.data;
    if (!data || typeof data !== 'object') return null;
    return this.parseSpotInfo(data);
  }

  // 필요한 스팟 정보만 추출
  parseSpotInfo(data) {
    const summary = data.summary || {};
    const name = summary.name || null;
    const address =
      (summary.address && (summary.address.disp || summary.address.road)) ||
      null;
    const point = summary.point || {};
    const longitude = typeof point.lon === 'number' ? point.lon : null;
    const latitude = typeof point.lat === 'number' ? point.lat : null;

    let tel = null;
    if (
      Array.isArray(summary.phone_numbers) &&
      summary.phone_numbers.length > 0
    ) {
      tel = summary.phone_numbers[0] && summary.phone_numbers[0].tel;
    }

    const images = [];
    if (data.photos && Array.isArray(data.photos.photos)) {
      for (const p of data.photos.photos) {
        if (p && p.url) images.push(p.url);
        if (images.length >= 20) break;
      }
    }

    // 보조: 메뉴 사진도 존재하면 추가
    if (
      images.length < 20 &&
      data.menu &&
      data.menu.menus &&
      Array.isArray(data.menu.menus.photos)
    ) {
      for (const mp of data.menu.menus.photos) {
        if (mp && mp.url) images.push(mp.url);
        if (images.length >= 20) break;
      }
    }

    return { name, address, latitude, longitude, tel: tel || null, images };
  }

  // spotData 생성
  async collectByFolder(folderId, categoryLabel) {
    const spotKeys = await this.fetchSpotKeyByFolderId(folderId);
    const results = [];
    for (const spotKey of spotKeys) {
      try {
        const spotInfo = await this.fetchSpotInfoBySpotKey(spotKey.key);
        if (!spotInfo) continue;

        const spotData = {
          name: spotInfo.name || '',
          naverSpotId: `k${spotKey.key}`,
          location: {
            longitude: spotInfo.longitude,
            latitude: spotInfo.latitude,
          },
          address: spotInfo.address || '',
          tel: spotInfo.tel || null,
          reviewCount: 0,
          reviewScore: null,
          imgUrls: Array.isArray(spotInfo.images)
            ? spotInfo.images.slice(0, 10)
            : [],
          categories: this.normalizeCategories([categoryLabel]),
        };

        results.push(spotData);
      } catch (e) {
        this.log(`항목 처리 실패: ${e.message}`);
      }
    }
    this.log(`수집 완료: ${results.length}개`);
    return results;
  }

  normalizeCategories(inputList) {
    if (!Array.isArray(inputList)) return [];
    const targetKeys = Object.keys(this.categoryIds); // DB의 category.type 키들
    const map = [
      { key: '식당', kws: ['식당', '음식', '맛집', 'restaurant'] },
      {
        key: '카페',
        kws: ['카페', 'cafe', '커피', '디저트', '베이커리', '빵집'],
      },
      {
        key: '숙소',
        kws: ['숙소', '숙박', '호텔', '모텔', '게스트하우스', '리조트'],
      },
      {
        key: '관광지',
        kws: ['관광', '명소', '공원', '테마파크', '거리', '골목'],
      },
      { key: '자연', kws: ['자연', '강', '산', '바다'] },
      {
        key: '복합 문화 공간',
        kws: ['문화', '전시', '예술', '공연', '몰', '영화관'],
      },
      { key: '박물관', kws: ['박물관', '뮤지엄'] },
      { key: '미술관', kws: ['미술관', '갤러리'] },
      { key: '도서관', kws: ['도서관', '서점', '책방'] },
      { key: '역사', kws: ['역사', '궁', '유적', '고택', '릉'] },
      { key: '종교', kws: ['종교', '사찰', '절', '교회', '성당'] },
    ];

    const out = new Set();
    for (const raw of inputList) {
      if (!raw) continue;
      const s = String(raw).toLowerCase().replace(/\s+/g, '');
      for (const m of map) {
        if (!targetKeys.includes(m.key)) continue;
        for (const kw of m.kws) {
          if (s.includes(String(kw).toLowerCase().replace(/\s+/g, ''))) {
            out.add(m.key);
            break;
          }
        }
      }
    }
    return [...out];
  }
}

module.exports = KakaoPlaceCrawler;
