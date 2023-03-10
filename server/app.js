import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './router/user.js'
// import joi from '@hapi/joi'
// import config from './config.js'
// import {
//   expressjwt
// } from 'express-jwt'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({
  extended: false
}))
app.use('/api', userRouter)
// 错误中间件
// app.use(function (err, req, res, next) {
//   // 数据验证失败
//   if (err instanceof joi.ValidationError) {
//     return res.send({
//       status:1,
//       message: err instanceof Error ? err.message : err
//     })
//   }

//   // 未知错误
//   // 捕获身份认证失败的错误
//   if (err.name === 'UnauthorizedError'){
//       return res.send({
//         status: 1,
//         message: '身份认证失败！'
//       })
//   } 
//   res.send({
//     status: 1,
//     message: err
//   })
// })
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证

// app.use(expressjwt({
//   secret: config.jwtSecretKey,
//   algorithms: ["HS256"],
// }).unless({
//   path: [/^\/api\//]
// }))



// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
  console.log('api server running at http://127.0.0.1:3007')
})