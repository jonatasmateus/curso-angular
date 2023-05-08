const PROXY_CONFIG = [
    {
      context: ['/api'],
      target: 'http://localhost:8080/',
      secure: false,
      logLevel: 'debug'
    }
  ];
  
module.exports = PROXY_CONFIG;

// In git bash: "npm run start" instead of "ng serve"