import { defineStore } from 'pinia'
import { reqGetSearchInfo } from "../api";

export const searchStore = defineStore("search", {
    state: () => {
        return {
            searchList: {}
        }
    },
    actions: {
        //获取search模块数据
        async getSearchList(params = {}) {
            let result = await reqGetSearchInfo(params)
            this.searchList = result
        }
    }
})