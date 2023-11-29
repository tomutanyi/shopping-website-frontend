const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/reviews',
    createProxyMiddleware({
      target: 'http://localhost:5556',
      changeOrigin: true,
    })
  );
};
