const { createProxyMiddleware } = require('http-proxy-middleware')
const express = require('express')
const app = express()
const { config = {} } = require('./package.json')

app.use(
  '/api/web',
  createProxyMiddleware({
    target: 'http://supplier-h5.fat35.qa.nt.ctripcorp.com/web/',
    changeOrigin: true,
    pathRewrite: { '/api/web/': '/' }
  })
)

// 健康检查
app.get('/vi/health', (req, res) => {
  res.end(`365ms`)
})

// 托管静态文件
app.use(express.static('dist'))

// 监听8080端口
app.listen(8080, function () {
  console.log('hi')
})
