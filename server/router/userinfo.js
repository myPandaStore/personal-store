import express from 'express'
import {
    sendVerifyCode,
    getUserInfo,
    getSearchInfo,
    getCartList
} from "../router_handler/userinfo.js"

const router = express.Router()

// 发送验证码
router.post('/sendCode/:phoneNumber', sendVerifyCode)

// 提供用户信息
router.get('/getUserInfo', getUserInfo)

// 根据用户搜索提供 search 模块数据
router.post('/list', getSearchInfo)

// 提供购物车列表数据
router.get('/cartList', getCartList)
// 将路由对象共享出去
export default router