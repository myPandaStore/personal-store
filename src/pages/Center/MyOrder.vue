<script></script>
<template>
    <div class="order">
        <div class="order_myOrder">我的订单</div>
        <div class="order_good">
            <ul>
                <li>
                    商品
                </li>
                <li>
                    订单详情
                </li>
                <li>收货人</li>
                <li>金额</li>
                <li>状态</li>
                <li>操作</li>
            </ul>
        </div>
        <div class="order_detail">
            <div class="order_detail_top">2017-02-11 11:59　订单编号：7867473872181848 </div>
            <div class="order_detail_main">
                <div class="order_detail_main_left">
                    <ul>
                        <li>
                            <img src="./images/goods.png" alt="">
                            <a href="">包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶 新款</a>
                            <span>x1</span>
                            <span>售后申请</span>
                        </li>
                        <li></li>
                    </ul>
                    <ul>
                        <li>
                            <img src="./images/goods.png" alt="">
                            <a href="">包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶 新款</a>
                            <span>x1</span>
                            <span>售后申请</span>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div class="order_detail_main_right">
                    <span>小丽</span>
                    <span>
                        <p>总金额¥138.00 </p>
                        <p>在线支付</p>
                    </span>
                    <span>已完成</span>
                    <span>评价|晒单</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.order {
    width: 100%;
    // background: red;
    margin-left: 20px;

    &_myOrder {
        background: #f1f1f1;
        padding: 15px;
        font-weight: 700;
        font-size: 16px;
        color: #666;
    }

    &_good {
        &>ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            padding: 10px 30px 10px 15px;
            background: #f1f1f1;

            &>li {
                font-weight: bold;
            }
        }
    }

    &_detail {
        margin-top: 20px;
        border: 1px solid #e1e1e1;

        &_top {
            background: #f1f1f1;
            padding: 8px;
            font-weight: bold;
            border-bottom: 1px solid #e1e1e1;
        }

        &_main {
            display: flex;

            &_left {
                &>ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    padding: 10px;
                    border-bottom: 1px solid #e1e1e1;
                    border-right: 1px solid #e1e1e1;

                    &:nth-child(2) {
                        border-bottom: none;
                    }

                    &>li {
                        display: flex;
                        justify-content: space-between;

                        &>a {
                            width: 250px;
                            margin-left: 20px;
                            text-decoration: none;
                            color: black;
                        }

                        span {
                            margin-left: 10px;
                        }
                    }

                }
            }

            &_right {
                width: 100%;
                display: flex;
                align-items: center;

                span {
                    position: relative;
                    text-align: center;
                    width: 25%;

                    &::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        right: 0;
                        margin-top: -94px;
                        width: 1px;
                        height: 206px;
                        background: #e1e1e1;

                    }

                    &:nth-child(2) {
                        &::after {
                            content: "";
                            position: absolute;
                            top: 0;
                            right: 0;
                            margin-top: -69px;
                            width: 1px;
                            height: 206px;
                            background: #e1e1e1;

                        }
                    }

                    &:last-child {
                        border: none;
                    }
                }

            }
        }
    }
}
</style>