/*
 * @Description: 后台入口文件
 * @Version: 1.0
 * @Autor: Alex
 * @Date: 2019-06-27 15:46:55
 * @LastEditors: Alex
 * @LastEditTime: 2019-06-28 01:02:01
 */

// npm install -g koa-generator
// koa2 server
// npm install
// npm start

const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');

const index = require('./routes/index')
const jwt = require('jsonwebtoken');

// const users = require('./routes/users')

// error handler
onerror(app)

// 处理跨域请求
app.use(cors({
//   origin: function (ctx) {
//     if (ctx.url === '/test') {
//         return "*"; // 允许来自所有域名请求
//     }
//     return 'http://localhost:8080'; // 这样就能只允许 http://localhost:8080 这个域名的请求了, 即前端运行的路径
// },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
  maxAge: 100,
  credentials: true,
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));

// middlewares

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
// app.use(require('koa-static')(__dirname + '/public'))

// 后台不需要提供界面, 提供接口即可
// app.use(views(__dirname + '/views', {
//   extension: 'html'
// }))
// app.use(require('koa-static')(__dirname + '/views/dist'))
// app.use(require('koa-static')(__dirname + '/views/static'))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
