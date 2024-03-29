import express from 'express'
import {
    regUser,
    login,
    logout,
    getBaseCategoryLis,
    getBanner,
    getFloorBanner
} from '../router_handler/user.js'
import reg_login_schema from '../schema/user.js'
import expressJoi from '@escook/express-joi'

const router = express.Router()


// 注册新用户
// 在注册新用户的路由中，声明局部中间件，读当前请求中携带的数据进行验证
// 在数据验证通过后，会把这次请求流转给后面的路由处理函数
// 数据验证失败后，终止后续代码的执行，并抛出一个全局的 Error 错误，进入全局错误级别中间件进行处理
router.post('/user/register', expressJoi(reg_login_schema), regUser)

// 登录
router.post('/user/login', expressJoi(reg_login_schema), login)

// 退出登录
router.get('/user/logout', logout)

// 首页轮播图
router.get('/getBanner', getBanner)

// 首页 floor banner
router.get('/getFloorBanner', getFloorBanner)

// 三级列表的数据
router.get('/product/getBaseCategoryList', getBaseCategoryLis)



// 将路由对象共享出去
export default router