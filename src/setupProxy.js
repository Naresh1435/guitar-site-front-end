const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://guitar-site-87h3i.ondigitalocean.app',
      changeOrigin: true,
    })
  );
};