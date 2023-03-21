import { defineStore } from "pinia"
import { reqGoodsInfo } from "../api"
import { getUUID } from "../utils/tool"

export const detailStore = defineStore("detail", {
    state: () => {
        return {
            goodInfo: {},
            // 游客临时身份
            uuid_token: getUUID()
        }
    },
    actions: {
        // 获取产品信息
        async getGoodInfo(skuId) {
            let result = await reqGoodsInfo(skuId)
            if (result.code == 200) {
                this.goodInfo = result.data
            }
        }
    },
    getters: {
        categoryView() {
            return this.goodInfo.hhh || {}
        }
    }
})