#!/bin/bash

# 시스템 업데이트
sudo apt-get update
sudo apt-get upgrade -y

# 필수 패키지 설치
sudo apt-get install -y curl git nginx

# Node.js 18.x LTS 설치
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# npm 최신 버전 설치
sudo npm install -g npm@latest

# PM2 설치
sudo npm install -g pm2

# Let's Encrypt 설치
sudo apt-get install -y certbot python3-certbot-nginx

# Nginx 설정
sudo rm /etc/nginx/sites-enabled/default
sudo cp deploy/nginx/count-on-me.conf /etc/nginx/sites-available/count-on-me
sudo ln -s /etc/nginx/sites-available/count-on-me /etc/nginx/sites-enabled/

# Nginx 재시작
sudo systemctl restart nginx

echo "초기 설치가 완료되었습니다." 