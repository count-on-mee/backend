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
  ],
};
