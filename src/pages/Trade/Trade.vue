<script setup lang="ts">
import { ref, onMounted, computed, onBeforeMount } from "vue"
import {useRouter} from "vue-router"
import { tradeStore } from "../../stores/trade"
import { reqSubmitOrder } from "../../api"

// 初始化用户收货地址信息
const useTradeStore = tradeStore()
const addressInfo = computed(() => {
    return useTradeStore.address
})
onBeforeMount(() => {
    useTradeStore.getUserAddress()
    useTradeStore.getUserOrderInfo()
})

// 初始化订单
const orderInfo = computed(() => {
    return useTradeStore.orderInfo
})

// 初始化订单号
const orderId = ref("")

// 初始化留言信息
const msg = ref("")

// 改变默认收货地址
const changeDefault = (address, addressInfo) => {
    addressInfo.forEach((item) => (item.isDefault = 0))
    address.isDefault = 1
}

const totalNum = computed(() => {
    let sum = 0
    orderInfo.value?.detailArrayList?.forEach((item) => {
        sum += item.skuNum
    })
    return sum
})

const totalPrice = computed(() => {
    let sum = 0
    orderInfo.value?.detailArrayList?.forEach((item) => {
        sum += item.skuNum * item.orderPrice
    })
    return sum
})

// 商品订单提交的最终地址
const userDefaultAddress = computed(() => {
    let res = addressInfo?.value?.find((item) => item.isDefault == 1)
    if (res === undefined) {
        return
    }
    let address = res?.fullAddress
    return address
})

const router = useRouter()
// 提交订单
const submitOrder = async() => {
    // 订单交易编码
    let { orderId: tradeNo } = orderInfo.value
    let defaultAddress = addressInfo?.value?.find((item) => item.isDefault == 1)
    // console.log(defaultAddress)
    // debugger
    let data = {
        username: defaultAddress?.username, // 收件人姓名
        phoneNum: defaultAddress?.phoneNum, // 收件人联系电话
        address: defaultAddress?.fullAddress, // 收件人地址
        payWay: "ONLINE", // 支付方式
        orderComment: msg.value, // 买家的留言信息
        orderDetailList: orderInfo?.value?.detailArrayList // 商品清单
    }
    try {// 提交订单成功
        let result = await reqSubmitOrder(tradeNo,data)
        if (result?.code == 200) {
            orderId.value = result?.tradNo
            router.push('/pay?orderId=' + orderId.value)
        }
    } catch (error) {
        alert(error.message)
    }
    // console.log(data)
    // debugger
}
</script>

<template>
    <div class="trade">
        <div class="trade_top">
            填写并核对订单信息
        </div>
        <div class="trade_main">
            <div class="trade_main_people">
                <div class="trade_main_people_top">
                    收件人信息
                </div>
                <!---后续在此处便利数据v-for-->
                <div class="trade_main_people_main" v-for="(address) in addressInfo" :key="address.id">
                    <div class="trade_main_people_main_left" :class="{ selected: address.isDefault == 1 }">
                        {{ address.username }}
                    </div>
                    <div class="trade_main_people_main_middle" @click="changeDefault(address, addressInfo)">
                        <p> {{ address.fullAddress }}</p>
                        <p>{{ address.phoneNum }}</p>
                    </div>
                    <div class="trade_main_people_main_right" :style="{ opacity: address.isDefault == 1 }"> {{
                        address.isDefault == 1 ? '默认地址' : '可选地址' }}</div>
                </div>
            </div>
            <div class="trade_main_pay">
                <div class="trade_main_pay_top">支付方式</div>
                <div class="trade_main_pay_main">
                    <div class="trade_main_pay_main_left">在线支付</div>
                    <div class="trade_main_pay_main_right">货到付款</div>
                </div>
            </div>
            <div class="trade_main_order">
                <div class="trade_main_order_top">
                    送货清单
                </div>
                <div class="trade_main_order_delivery">
                    <div class="trade_main_order_delivery_top">配送方式</div>
                    <div class="trade_main_order_delivery_main">
                        <div class="trade_main_order_delivery_main_left">天天快递</div>
                        <div class="trade_main_order_delivery_main_right">配送时间：预计8月10日（周三）09:00-15:00送达</div>
                    </div>
                </div>
                <div class="trade_main_order_good">
                    <div class="trade_main_order_good_top">商品清单</div>
                    <div class="trade_main_order_good_main" v-for="(order) in orderInfo.detailArrayList" :key="order.skuId">
                        <div class="trade_main_order_good_main_col1">
                            <img :src="order.imgUrl" alt="商品图片">
                        </div>
                        <div class="trade_main_order_good_main_col2">
                            <div>
                                {{ order.skuName }}</div>
                            <div class="bottom">7天无理由退货</div>
                        </div>
                        <div class="trade_main_order_good_main_col3">￥{{ order.orderPrice }}</div>
                        <div class="trade_main_order_good_main_col4">X{{ order.skuNum }}</div>
                        <div class="trade_main_order_good_main_col5">有货</div>
                    </div>
                </div>
            </div>
            <div class="trade_main_message">
                <div class="trade_main_message_top">
                    买家留言
                </div>
                <textarea class="trade_main_message_bottom" placeholder="建议留言前先与商家沟通确认" v-model="msg"></textarea>
            </div>
            <div class="trade_main_bill">
                <div class="trade_main_bill_top">发票信息</div>
                <div class="trade_main_bill_middle">普通发票（电子）个人明细</div>
                <div class="trade_main_bill_bottom">使用优惠/抵用</div>
            </div>
        </div>
        <div class="trade_bottom">
            <div class="trade_bottom_top">
                <div class="trade_bottom_top_first">
                    <p>{{ totalNum }}件商品，总商品金额</p>
                    <p>¥{{ totalPrice }}</p>
                </div>
                <div class="trade_bottom_top_second">
                    <p>返现：</p>
                    <p>0.00</p>
                </div>
                <div class="trade_bottom_top_third">
                    <p>运费：</p>
                    <p>0.00</p>
                </div>
            </div>
            <div class="trade_bottom_mid">
                <div class="trade_bottom_mid_top">
                    <p>应付金额:　</p>
                    <p>¥{{ totalPrice }}</p>
                </div>
                <div class="trade_bottom_mid_bottom">
                    <p>
                        寄送至:
                    </p>
                    <p>{{ userDefaultAddress }}</p>
                    <p>
                        收货人：</p>
                    <p>张三</p>
                    <p>15010658793</p>
                </div>
            </div>
            <div class="trade_bottom_submit">
                <div class="container">
                    <a @click="submitOrder">提交订单</a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style lang="less">
.trade {
    margin: 0 110px;

    .selected {
        background: red;
    }

    &_top {
        margin-top: 30px;
        font-size: 14px;
        line-height: 21px;
        font-weight: bold;
    }

    &_main {
        border: 1px solid #e1e1e1;
        padding: 40px 20px;

        &_people {
            border-bottom: 1px solid #e1e1e1;
            padding-bottom: 20px;

            &_top {
                margin-bottom: 20px;
                font-size: 10px;
                font-weight: bold;
            }

            &_main {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 30px;
                width: 40%;

                &_left {
                    border: 1px solid red;
                    padding: 8px 30px;
                    position: relative;

                    &::after {
                        content: "";
                        // display: none;
                        width: 13px;
                        height: 13px;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        background: url(./images/choosed.png) no-repeat;
                    }
                }

                &_middle {
                    display: flex;

                    &:hover {
                        cursor: pointer;
                        background: #878787;
                    }

                    &>p:first-child {
                        margin-right: 10px;
                    }
                }

                &_right {
                    // padding: 5px;
                    margin-left: 10px;
                    background-color: #878787;
                    color: #fff;
                }
            }


        }

        &_pay {
            margin-top: 20px;
            border-bottom: 1px solid #e1e1e1;
            padding-bottom: 20px;

            &_top {
                font-size: 14px;
                line-height: 21px;
                font-weight: bold;
            }

            &_main {
                margin-top: 20px;
                margin-left: 30px;
                display: flex;
                justify-content: space-between;
                width: 16.3%;

                &_left {
                    border: 1px solid red;
                    padding: 8px 18px;
                    position: relative;

                    &::after {
                        content: "";
                        // display: none;
                        width: 13px;
                        height: 13px;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        background: url(./images/choosed.png) no-repeat;
                    }
                }

                &_right {
                    border: 1px solid #e1e1e1;
                    padding: 8px 18px;
                }
            }
        }

        &_order {
            margin-top: 20px;

            &_top {
                font-size: 14px;
                line-height: 21px;
                font-weight: bold;
            }

            &_delivery {
                margin-top: 20px;
                background: #f4f4f4;
                padding: 20px 0 20px 20px;
                margin-left: 30px;

                &_top {
                    font-size: 14px;
                    line-height: 21px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }

                &_main {
                    display: flex;
                    // justify-content: ;
                    align-items: center;

                    &_left {
                        border: 1px solid #e1e1e1;
                        padding: 10px;
                        margin-right: 20px;
                    }
                }
            }

            &_good {
                margin-top: 20px;
                background: pink;
                padding: 20px 0 20px 20px;
                margin-left: 30px;

                &_top {
                    font-size: 14px;
                    line-height: 21px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }

                &_main {
                    display: flex;
                    justify-content: space-between;
                    margin-right: 80px;

                    &_col2 {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .bottom {
                            color: #c81623;
                            font-weight: 400;
                        }
                    }

                    &_col3 {
                        color: #e12228;
                        font-size: 14px;
                        font-weight: bold;
                    }
                }

            }


        }

        &_message {
            margin-top: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e1e1e1;

            &_top {
                font-size: 14px;
                line-height: 21px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            &_bottom {
                width: 100%;
                height: 93px;
            }
        }

        &_bill {
            margin-top: 20px;

            &_top {
                font-size: 14px;
                line-height: 21px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            &_middle {
                margin-left: 20px;
            }

            &_bottom {
                font-size: 14px;
                line-height: 21px;
                font-weight: bold;
                margin-top: 10px;
            }
        }
    }

    &_bottom {
        margin-top: 20px;

        &_top {
            text-align: end;
            display: flex;
            flex-direction: column;

            &_first {
                display: flex;
                justify-content: flex-end;

                &>p:first-child {
                    margin-right: 60px;
                }
            }

            &_second {
                display: flex;
                justify-content: flex-end;

                &>p:first-child {
                    margin-right: 164px;
                }
            }

            &_third {
                display: flex;
                justify-content: flex-end;

                &>p:first-child {
                    margin-right: 164px;
                }
            }
        }

        &_mid {
            margin-top: 20px;
            background: #f1f1f1;
            border: 1px solid #e1e1e1;
            padding-right: 20px;

            &_top {
                display: flex;
                justify-content: flex-end;
                align-items: center;

                &>p:nth-child(2) {
                    color: red;
                    font-size: 14px;
                    font-weight: bold;
                }
            }

            &_bottom {
                display: flex;
                justify-content: flex-end;
            }
        }

        &_submit {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;

            .container {
                width: 164px;
                height: 56px;
                line-height: 56px;
                margin-top: 20px;
                text-align: center;
                background-color: rgb(225, 37, 27);

                &:hover {
                    cursor: pointer;
                }

                a {
                    text-decoration: none;
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                }
            }



        }
    }
}
</style>
  