const fs = require('fs');
const path = require('path');
const csvFilePath = path.join(
  __dirname,
  '1_RB_HOTEL_SEARCH_DATA_NEW_INFO_2020.csv'
);

// csv 파싱을 위한 패키지 설치 필요: npm install csv-parse
const parse = require('csv-parse/sync').parse;

const csvData = fs.readFileSync(csvFilePath, 'utf-8');
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true,
});

// 첫 row의 컬럼명 확인용 로그 추가
console.log('첫 row:', records[0]);

// 컬럼명에 공백이 있을 경우를 대비해 컬럼명 trim 처리
function get(row, key) {
  if (!row) return '';
  // 모든 키를 trim해서 매칭
  const foundKey = Object.keys(row).find((k) => k.trim() === key);
  return foundKey ? row[foundKey] : '';
}

function escape(str) {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

const values = records
  .map((row) => {
    // Spot 모델에 맞는 컬럼 추출 (trim 처리된 컬럼명 사용)
    const name = escape(get(row, 'FCLTY_NM'));
    const address = escape(get(row, 'RDNMADR_NM'));
    const tel = escape(get(row, 'TEL_NO'));
    const longitude = get(row, 'FCLTY_LO');
    const latitude = get(row, 'FCLTY_LA');

    // 필수값이 없으면 건너뜀
    if (!name || !address || !longitude || !latitude) return null;

    return `('${name}', '${address}', '${tel}', ST_GeomFromText('POINT(${latitude} ${longitude})', 4326))`;
  })
  .filter(Boolean);

if (values.length === 0) {
  console.log('No valid rows found.');
  process.exit(1);
}

const sql = `INSERT INTO spot (name, address, tel, location) VALUES\n${values.join(
  ',\n'
)};`;

fs.writeFileSync('insert_spot.sql', sql, 'utf-8');
console.log('SQL 파일이 생성되었습니다: insert_spot.sql');
