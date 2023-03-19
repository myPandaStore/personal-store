import { defineStore } from 'pinia'
import { reqUpdateCheckedByid, reqCartList, reqAddOrUpdateShopCart, reqDeleteCartBySkuName } from '../api'
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
        // 删除购物车某一个产品
        async deleteCartBySkuName(skuName) {
            await reqDeleteCartBySkuName(skuName)
        },
        // 删除全部勾选的产品（isChecked:1）
        deleteAllCheckedCart() {
            let promiseAll = []
            this.cartList.forEach((item) => {
                let promise = item.isChecked == 1 ? reqDeleteCartBySkuName(item.skuName) : ""
                promiseAll.push(promise)
            })
            return Promise.all(promiseAll)
        },
        // 修改全部产品的状态
        updateAllCartIsChecked(isChecked) {
            let promiseAll = []
            this.cartList.forEach(async (item) => {
                let promise = await reqUpdateCheckedByid(item.skuName, isChecked)
                promiseAll.push(promise)
            })
            return Promise.all(promiseAll)
        }
    }
})