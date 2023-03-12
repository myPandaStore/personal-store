//当前模块：API进行统一管理
import requests from './request'

//获取验证码
///api/user/passport/sendCode/{phone} get
export const reqGetVerifyCode = (phone) => requests({
    url: `/user/sendCode/${phone}`,
    method: "post"
})

// 测试 express 接口是否可用
export const testapi = () => requests({
    url: `/test`,
    method: "get"
})