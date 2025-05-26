#!/bin/bash

# 프로젝트 디렉토리 설정
APP_DIR=~/apps/count-on-me
cd $APP_DIR/backend

# Git 최신 코드 가져오기
git fetch origin deploy/36-cicd
git reset --hard origin/deploy/36-cicd

# 의존성 설치
npm install --production

# 데이터베이스 마이그레이션
npm run migrate

# PM2로 애플리케이션 재시작
if pm2 list | grep -q "count-on-me"; then
    pm2 restart count-on-me
else
    pm2 start npm --name "count-on-me" -- start
fi

# 로그 확인
pm2 logs count-on-me 