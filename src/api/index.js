// 当前模块：API进行统一管理
import requests from './request'

// 获取验证码
export const reqGetVerifyCode = (phone) => requests({
    url: `/user/sendCode/${phone}`,
    method: "post"
})

// 注册
export const reqUserResiter = (data) => requests({
    url: `user/register`,
    data,
    method: 'post'
})