import { defineStore } from 'pinia'
import { reqGetSearchInfo } from "../api";

interface SearchList {
    id: number;
    price: number | string;
    title: string;
}
export const searchStore = defineStore("search", {
    // state: () => {
    //     return {
    //         searchList: {}
    //     }
    // },
    state: (): { searchList: SearchList } => ({
        searchList: {}
    }),
    actions: {
        //获取search模块数据
        async getSearchList(params = {}) {
            let result = await reqGetSearchInfo(params)
            this.searchList = result
        }
    }
})