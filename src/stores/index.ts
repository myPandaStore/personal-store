import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
    state: () => {
        return {
            name: 'ming',
            doubleCount: 2
        }
    },
    getters: {
    },
    actions: {
    }
})