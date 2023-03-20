import { defineStore } from 'pinia'
import {  reqAddressInfo, reqOrderInfo} from '../api'

export const tradeStore = defineStore('trade', {
    state: () => {
        return {
            address:[],
            orderInfo: {}
        }
    },
    actions: {
        // 获取用户地址信息
        async getUserAddress() {
            let result = await reqAddressInfo()
            this.address = result
        },
        // 获取用户订单信息
        async getUserOrderInfo () {
            let res = await reqOrderInfo()
            this.orderInfo = res
        }
    }
})