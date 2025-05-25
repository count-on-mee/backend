#!/bin/bash

# 스크립트가 실패하면 즉시 중단
set -e

echo "Nginx 설정 업데이트를 시작합니다..."

# SSL 인증서 상태 확인 및 갱신
echo "SSL 인증서 상태를 확인합니다..."
if ! sudo certbot certificates | grep -q "VALID: 30 days"; then
  echo "SSL 인증서 갱신이 필요합니다..."
  sudo certbot --nginx -d api.countonme.site --non-interactive --agree-tos --email your-email@example.com
else
  echo "SSL 인증서가 유효합니다."
fi

# Nginx 설정 파일 복사
echo "Nginx 설정 파일을 복사합니다..."
sudo cp deploy/nginx/nginx.conf /etc/nginx/nginx.conf
sudo cp deploy/nginx/sites-available/count-on-me /etc/nginx/sites-available/
sudo ln -sf /etc/nginx/sites-available/count-on-me /etc/nginx/sites-enabled/

# Nginx 설정 테스트
echo "Nginx 설정을 테스트합니다..."
if sudo nginx -t; then
  echo "Nginx 설정이 유효합니다. Nginx를 재시작합니다..."
  sudo systemctl restart nginx
  echo "Nginx가 성공적으로 재시작되었습니다."
else
  echo "Nginx 설정 테스트 실패. 재시작을 건너뜁니다."
  exit 1
fi 