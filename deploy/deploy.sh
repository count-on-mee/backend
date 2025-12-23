#!/bin/bash

# 프로젝트 디렉토리 설정
APP_DIR=~/apps/count-on-me
cd $APP_DIR

# Git 최신 코드 가져오기
git fetch origin main
git reset --hard origin/main

# 의존성 설치
npm install --production

# PM2로 애플리케이션 재시작 (웹 앱만 대상)
if pm2 list | grep -q "count-on-me"; then
    # 기존 프로세스 중지
    pm2 delete count-on-me
fi

# ecosystem 파일을 사용하여 웹 앱만 시작
pm2 start ecosystem.config.js --only count-on-me --env production

# kakao-seed-batch PM2 앱이 없으면 한 번만 등록 (크론 포함)
if ! pm2 list | grep -q "kakao-seed-batch"; then
    echo "kakao-seed-batch PM2 앱이 없어 새로 등록합니다."
    pm2 start ecosystem.config.js --only kakao-seed-batch --env production
fi

# PM2 프로세스 저장
pm2 save

# 데이터베이스 마이그레이션
NODE_ENV=production npm run migrate

echo "배포가 완료되었습니다." 
