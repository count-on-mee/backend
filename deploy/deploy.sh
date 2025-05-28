#!/bin/bash

# 프로젝트 디렉토리 설정
APP_DIR=~/apps/count-on-me
cd $APP_DIR

# Git 최신 코드 가져오기
git fetch origin main
git reset --hard origin/main

# 의존성 설치
npm install --production

# 데이터베이스 마이그레이션
npm run migrate

# PM2로 애플리케이션 재시작
if pm2 list | grep -q "count-on-me"; then
    # 기존 프로세스 중지
    pm2 delete count-on-me
fi

# ecosystem 파일을 사용하여 새로 시작
pm2 start ecosystem.config.js --env production

# PM2 프로세스 저장 및 시작
pm2 save

# 로그 확인 (최근 20줄만)
pm2 logs count-on-me --lines 20 