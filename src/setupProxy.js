const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api/web',
    createProxyMiddleware({
      target: 'http://supplier-h5.fat35.qa.nt.ctripcorp.com/web/',
      changeOrigin: true,
      pathRewrite: { '/api/web/': '/' }
    })
  )
}
