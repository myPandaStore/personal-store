// 当前模块：API进行统一管理
import requests from './request'

// 获取验证码
export const reqGetVerifyCode = (phone) => requests({
    headers: {
        Authorization: localStorage.getItem('TOKEN')
    },
    url: `/my/sendCode/${phone}`,
    method: "post"
})

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