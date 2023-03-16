import express from 'express'
import {sendVerifyCode, getUserInfo} from "../router_handler/userinfo.js"

const router = express.Router()

// 发送验证码
router.post('/sendCode/:phoneNumber', sendVerifyCode)

// 提供用户信息
router.get('/getUserInfo', getUserInfo)
// 将路由对象共享出去
export default router