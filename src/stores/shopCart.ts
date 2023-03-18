import { defineStore } from 'pinia'
import { reqUpdateCheckedByid, reqCartList } from '../api'
export const shopCartStore = defineStore('shopCart', {
    state: () => {
        return {
            cartList: [],
        }
    },
    actions: {
        // 获取购物车列表数据
        async getCartList() {
            let result = await reqCartList()
            this.cartList = result
            return result
        },

        //修改购物车某一个产品的选中状态
        async updateCheckedById(skuName, isChecked) {
            let result = await reqUpdateCheckedByid(skuName, isChecked);
            this.cartList = result
        },
    }
})