// 当前模块：API进行统一管理
import requests from './request'

// 注册
export const reqUserResiter = (data) => requests({
    url: `/api/user/register`,
    data,
    method: 'post'
})

// 登录
export const reqUserLogin = (data) => requests({
    url: `/api/user/login`,
    data,
    method: 'post'
})

//退出登录
export const reqLogOut = () => requests({
    url: `api/user/logout`,
    method: 'get'
})

//三级联动接口 
export const reqCategoryList = () => requests({
    url: 'api/product/getBaseCategoryList',
    method: 'get'
})

// my 开头的接口路径均需要携带 Authorization 字段
// 获取验证码
export const reqGetVerifyCode = (phone) => requests({
    headers: {
        Authorization: localStorage.getItem('TOKEN')
    },
    url: `/my/sendCode/${phone}`,
    method: "post"
})

// 获取用户信息
export const reqUserInfo = (data) => requests({
    headers: {
        Authorization: localStorage.getItem('TOKEN')
    },
    url: `/my/getUserInfo`,
    data,
    method: 'get'
})

//获取搜索模块数据 地址：/api/list 请求方式：post 参数：需要带参数
//当前函数需要接收外部传递参数
//当前接口，给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => requests({
    headers: {
        Authorization: localStorage.getItem('TOKEN')
    },
    url: "/my/list",
    method: "post",
    data: params
})