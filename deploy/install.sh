#!/bin/bash

# 시스템 업데이트
sudo apt-get update
sudo apt-get upgrade -y

# 필수 패키지 설치
sudo apt-get install -y curl nginx

# Node.js 20.x LTS 설치
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 설치
sudo npm install -g pm2

# Let's Encrypt 설치
sudo apt-get install -y certbot python3-certbot-nginx

# Nginx 설정
sudo rm /etc/nginx/sites-enabled/default
sudo cp deploy/nginx/count-on-me.conf /etc/nginx/sites-available/count-on-me
sudo ln -s /etc/nginx/sites-available/count-on-me /etc/nginx/sites-enabled/

# Nginx 시작
sudo nginx -t
sudo systemctl reload nginx

# Let's Encrypt 인증서 발급
sudo certbot --nginx \
  -d api.countonme.me \
  --email insoosos1234@gmail.com \
  --agree-tos \
  --non-interactive \
  --redirect \
  --no-eff-email

echo "초기 설치가 완료되었습니다." 