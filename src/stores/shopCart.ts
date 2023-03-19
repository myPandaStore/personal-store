import { defineStore } from 'pinia'
import { reqUpdateCheckedByid, reqCartList, reqAddOrUpdateShopCart } from '../api'
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
        //加入购物车的||修改某一个产品的个数
        async addOrUpdateShopCart(skuName, skuNum) {
            await reqAddOrUpdateShopCart(skuName, skuNum);
        },
    }
})