1. **프로젝트 준비**

   ```bash
   git clone https://github.com/count-on-mee/backend
   cd backend
   npm install
   ```

2. **MySQL 데이터베이스 준비**

   - MySQL 서버 설치 및 실행
   - 프로젝트에 필요한 데이터베이스 생성

   ```bash
   CREATE DATABASE count_on_me CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

3. **환경변수 파일 준비**

   - 프로젝트 루트에 다음 환경 파일을 생성:
     - `.env.development` (개발 환경)
     - `.env.test` (테스트 환경)
     - `.env.production` (배포 환경)
   - `.env.example` 파일을 참조하여 필요한 환경변수 설정

4. **데이터베이스 동기화**

- 데이터베이스 마이그레이션 실행

  ```bash
  npm run migrate
  ```

- 초기 데이터 시드 추가
  ```bash
  npm run seed:all
  ```

5. **서버 실행**

   ```bash
   npm run start
   ```

6. **환경별 실행 방법**

   이 프로젝트는 다음 환경을 지원합니다

- development: 로컬 개발 환경 (.env.development)
  ```bash
  npm start
  ```
- test: 테스트 환경 (.env.test)
  ```bash
  npm test
  ```
- production: 프로덕션 환경 (.env.production)
  ```bash
  NODE_ENV=production npm start
  ```
