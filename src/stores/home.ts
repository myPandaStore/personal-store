import { defineStore } from 'pinia'
import { reqCategoryList } from '../api'

export const homeStore = defineStore('home', {
    state: () => {
        return {
            //home仓库中存储三级菜单的数据
            categoryList: [],
        }
    },
    actions: {
        async getCategoryList() {
            let result = await reqCategoryList()
            if (result["0"].status === 0) {
                this.categoryList = result
            }
        },
    }
})