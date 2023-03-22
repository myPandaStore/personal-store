import { defineStore } from 'pinia'
import { reqCategoryList } from '../api'

interface Subcategory {
    [key: string]: string[];
}

interface Category {
    status?: number | string;
    cateGoryName?: string;
    cateGoryId: number;
    cateGoryChild: Subcategory;
}

type CategoryList = Category[];

export const homeStore = defineStore('home', {
    state: (): { categoryList: CategoryList } => ({ // 在这里定义类型
        categoryList: [],
    }),
    actions: {
        async getCategoryList() {
            let result = await reqCategoryList()
            if (result["0"].status === 0) {
                this.categoryList = result
            }
        },
    }
})