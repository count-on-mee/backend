module.exports = {
  apps: [
    {
      name: 'count-on-me',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        PORT: 8888,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
    // Kakao 북마크 시드 배치 (매일 새벽 3시 실행)
    {
      name: 'kakao-seed-batch',
      script: 'npm',
      args: 'run crawl:kakao:seed:batch',
      cron_restart: '0 3 * * *',
      autorestart: false,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
