<script setup lang="ts">
import { ref } from "vue"

// 初始化用户收货地址信息
const addressInfo = ref([
    {
        "id": 0,
        "isDefault": "1",
        "consignee": "hhh",
        "fullAddress": "===",
        "phoneNum": "111"
    },
    {
        "id": 0,
        "isDefault": "1",
        "consignee": "hhh",
        "fullAddress": "===",
        "phoneNum": "111"
    },
    {
        "id": 0,
        "isDefault": "1",
        "consignee": "hhh",
        "fullAddress": "===",
        "phoneNum": "111"
    }
])

// 初始化订单
const orderInfo = ref({
    "skuId": "0",
    "detailArrayList": {
        "imgUrl": "111",
        "skuName": "111",
        "orderPrice": 123,
        "skuNum": 1111

    }

}
)

// 初始化留言信息
const msg = ref("")

// 改变默认收货地址
const changeDefault = (address, addressInfo) => {

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
                <div class="trade_main_people_main">
                    <div class="trade_main_people_main_left">张三</div>
                    <div class="trade_main_people_main_middle">
                        <p> 北京市昌平区宏福科技园综合楼6层 </p>
                        <p>15010658793</p>
                    </div>
                    <div class="trade_main_people_main_right">默认地址</div>
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
                    <div class="trade_main_order_good_main">
                        <div class="trade_main_order_good_main_col1">
                            <img src="./images/goods.png" alt="">
                        </div>
                        <div class="trade_main_order_good_main_col2">
                            <div>
                                Apple iPhone 6s (A1700) 64G 玫瑰金色 移动联通电信4G手机硅胶透明防摔软壳 本色系列</div>
                            <div class="bottom">7天无理由退货</div>
                        </div>
                        <div class="trade_main_order_good_main_col3">￥5399.00</div>
                        <div class="trade_main_order_good_main_col4">X1</div>
                        <div class="trade_main_order_good_main_col5">有货</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="trade_bottom"></div>
    </div>
</template>
  
<style lang="less">
.trade {
    margin: 0 110px;

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

                    &>p:first-child {
                        margin-right: 10px;
                    }
                }

                &_right {
                    padding: 5px;
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
    }
}
</style>
  