const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/reviews',
    createProxyMiddleware({
      target: 'https://shopping-database32.onrender.com/reviews',
      changeOrigin: true,
    })
  );
};