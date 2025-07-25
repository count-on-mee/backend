const fs = require('fs');

const startSpotId = 10521; // 시작 spotId
const endSpotId = 12997; // 마지막 spotId (원하는 범위로 수정)
const spotCategoryId = 6;

const values = [];
for (let spotId = startSpotId; spotId <= endSpotId; spotId++) {
  values.push(`(${spotId}, ${spotCategoryId})`);
}

const sql = `INSERT INTO spot_category_relation (spot_id, spot_category_id)\nVALUES\n${values.join(
  ',\n'
)};\n`;

fs.writeFileSync('insert_spot_category_relation.sql', sql, 'utf-8');
console.log('SQL 파일이 생성되었습니다: insert_spot_category_relation.sql');
