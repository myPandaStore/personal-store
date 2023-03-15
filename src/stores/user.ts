import { defineStore } from 'pinia'
import { reqGetVerifyCode,reqUserLogin } from '../api'
import {setToken, removeToken} from "@/utils/tool.ts"
export const userStore = defineStore('user', {
    state: () => {
        return {
            token: localStorage.getItem('TOKEN'),
        }
    },
    actions: {
        // 用户登录
        async userLogin(data) {
            let result = await reqUserLogin(data)
            if (result.status === 0) {
                this.token = result.token
                setToken(result.token)
            } else {
                return Promise.reject(new Error('faile'))
            }
        }
    }
})