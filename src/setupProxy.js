const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://guitar-front-end-h43oo.ondigitalocean.app',
      changeOrigin: true,
    })
  );
};