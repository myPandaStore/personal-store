import { defineStore } from 'pinia'
import { reqAddressInfo, reqOrderInfo } from '../api'

interface AddressItem {
    consignee: string;
    fullAddress: string;
    id: Number;
    isDefault?: boolean | number;
    phoneNum: string | number;
    username: string;
}

type AddressInfo = AddressItem[]

type OrderDetail = {
    imgUrl: string;
    skuName: string;
    skuId: string;
    orderPrice: number;
    skuNum: number;
};

type Order = {
    orderId: number;
    detailArrayList: OrderDetail[];
};

interface State {
    address: AddressInfo;
    orderInfo: Order
}
export const tradeStore = defineStore('trade', {
    // state: () => {
    //     return {
    //         address:[],
    //         orderInfo: {}
    //     }
    // },
    state: (): State => ({
        address: [],
        orderInfo: {}
    }),
    actions: {
        // 获取用户地址信息
        async getUserAddress() {
            let result = await reqAddressInfo()
            this.address = result
        },
        // 获取用户订单信息
        async getUserOrderInfo() {
            let res = await reqOrderInfo()
            this.orderInfo = res
        }
    }
})