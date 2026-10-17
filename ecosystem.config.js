module.exports = {
  apps: [
    {
      name: 'vexora-demo',
      script: 'demo/server.js',
      watch: false,
      env: {
        PORT: 3001,
        NODE_ENV: 'development'
      }
    },
    {
      name: 'vexora-bot',
      script: 'bot.js',
      watch: false,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
