import express from 'express'
import {sendVerifyCode} from "../router_handler/userinfo.js"

const router = express.Router()
// 发送验证码
router.post('/sendCode/:phoneNumber', sendVerifyCode)

// 将路由对象共享出去
export default router