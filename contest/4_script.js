const fs = require('fs');
const axios = require('axios');

const SERVICE_KEY = '';
const NUM_OF_ROWS = 100;

function escape(str) {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

function parseCoordinates(spatialStr) {
  if (!spatialStr) return null;
  // 예: "127.12345,37.12345" 또는 "N37.12345, E127.12345"
  const parts = spatialStr.split(',').map((s) => s.trim());
  let latitude = null,
    longitude = null;
  for (const part of parts) {
    if (part.startsWith('N') || part.startsWith('S')) {
      latitude = parseFloat(part.replace(/[NS]/, ''));
      if (part.startsWith('S')) latitude = -latitude;
    } else if (part.startsWith('E') || part.startsWith('W')) {
      longitude = parseFloat(part.replace(/[EW]/, ''));
      if (part.startsWith('W')) longitude = -longitude;
    } else {
      const num = parseFloat(part);
      if (num > 120 && num < 130) longitude = num;
      else if (num > 30 && num < 40) latitude = num;
    }
  }
  if (latitude === null || longitude === null) return null;
  return { longitude, latitude };
}

async function fetchAllItems() {
  let allItems = [];
  let pageNo = 1;
  while (true) {
    const API_URL = `https://api.kcisa.kr/openapi/service/rest/convergence/conver8?serviceKey=${SERVICE_KEY}&numOfRows=${NUM_OF_ROWS}&pageNo=${pageNo}`;
    const res = await axios.get(API_URL);
    const items = res.data.response?.body?.items?.item || [];
    if (!Array.isArray(items) || items.length === 0) break;
    allItems = allItems.concat(items);
    console.log(`page ${pageNo} : ${items.length}건 수집`);
    if (items.length < NUM_OF_ROWS) break;
    if (pageNo > 10) break;
    pageNo++;
  }
  return allItems;
}

async function main() {
  const items = await fetchAllItems();
  console.log('총 수집 데이터:', items.length);

  if (items.length > 0) {
    console.log('첫 번째 row:', items[0]);
    console.log('필드명:', Object.keys(items[0]));
  } else {
    console.log('수집된 데이터가 없습니다.');
  }

  const values = [];
  for (const item of items) {
    const name = escape(item.title);
    const address = escape(item.address);
    const tel = escape(item.tel);
    const coords = parseCoordinates(item.spatial);

    if (!name || !address || !coords) continue;

    values.push(
      `('${name}', '${address}', '${tel}', ST_GeomFromText('POINT(${coords.latitude} ${coords.longitude})', 4326))`
    );
  }

  if (values.length === 0) {
    console.log('No valid rows found.');
    return;
  }

  const sql = `INSERT INTO spot (name, address, tel, location)\nVALUES\n${values.join(
    ',\n'
  )};\n`;

  fs.writeFileSync('insert_tour_spot.sql', sql, 'utf-8');
  console.log('SQL 파일이 생성되었습니다: insert_tour_spot.sql');
}

main();
