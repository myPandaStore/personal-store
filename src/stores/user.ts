import { defineStore } from 'pinia'
import { reqUserLogin, reqLogOut } from '../api'
// @ts-ignore
import { setToken } from "@/utils/tool.ts"
export const userStore = defineStore('user', {
    state: () => {
        return {
            token: localStorage.getItem('TOKEN'),
            userName: "",
            userInfo: []
        }
    },
    actions: {
        // 用户登录
        async userLogin(data) {
            let result = await reqUserLogin(data)
            if (result.status === 0) {
                this.token = result["token"]
                this.userName = result["userName"]
                this.userInfo = result["userInfo"]
                setToken(result["token"])
            } else {
                return Promise.reject(new Error('faile'))
            }
        },
        //退出登录
        async userLogOut() {
            let result = await reqLogOut()
            if (result.status == 0) {
                this.token = ""
                this.userName = ""
                this.userInfo = []
            } else {
                return Promise.reject(new Error('faile'))
            }
        }

        // 获取用户信息
        // async getUserInfo(data) {
        //     let result = await reqUserInfo(data);
        //     debugger
        //     if(result.status == 0) {
        //         this.userInfo = result[0]
        //     } else {
        //         return Promise.reject(new Error('faile'))
        //     }
        // },
    }
})