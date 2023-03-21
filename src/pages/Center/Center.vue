<script setup lang="ts">

</script>
<template>
    <div class="center">
        <div class="center_left">
            <div class="center_left_item">
                <div class="center_left_item_head">
                    <span class="dot">.</span>
                    <span class="text">订单中心</span>
                </div>
                <ul>
                    <li>
                        <router-link to="/center/myOrder"> 我的订单</router-link>
                    </li>
                    <li>
                        <router-link to="/center/groupOrder">团购订单</router-link>
                    </li>
                    <li>我的预售</li>
                    <li>评价晒单</li>
                    <li>取消订单记录</li>
                </ul>
            </div>
            <div class="center_left_item">
                <div class="center_left_item_head">
                    <span class="dot">.</span>
                    <span class="text">关注中心</span>
                </div>
                <ul>
                    <li>关注的商品</li>
                    <li>关注的店铺</li>
                    <li>关注的专辑</li>
                    <li>关注的品牌</li>
                    <li>关注的活动</li>
                </ul>
            </div>
            <div class="center_left_item">
                <div class="center_left_item_head">
                    <span class="dot">.</span>
                    <span class="text">特色业务</span>
                </div>
                <ul>
                    <li>我的营业厅</li>
                    <li>京东通信</li>
                    <li>定期送</li>
                    <li>京东代下单</li>
                    <li>我的回收单</li>
                </ul>
            </div>
            <div class="center_left_item">
                <div class="center_left_item_head">
                    <span class="dot">.</span>
                    <span class="text">客户服务</span>
                </div>
                <ul>
                    <li>返修退换货</li>
                    <li>价格保护</li>
                    <li>购买咨询</li>
                    <li>交易纠纷</li>
                    <li>我的发票</li>
                </ul>
            </div>
            <div class="center_left_item">
                <div class="center_left_item_head">
                    <span class="dot">.</span>
                    <span class="text">设置</span>
                </div>
                <ul>
                    <li>个人信息</li>
                    <li>收货地址</li>
                </ul>
            </div>
        </div>
        <!--子组件--->
        <div class="center_right">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="less">
.center {
    margin: 20px 130px;
    display: flex;
    justify-content: space-between;

    &_left {
        &_item {
            margin-top: 20px;

            &_head {
                color: #333;
                font-weight: 700;
                display: flex;
                align-items: center;

                .dot {
                    padding-bottom: 4px;
                    padding-right: 10px;
                    color: green;
                }
            }

            &>ul {
                margin: 0;
                padding: 0;
                list-style: none;

                &>li {
                    margin-top: 10px;
                    padding-bottom: 20px;
                    min-width: 200px;
                    border-bottom: 1px solid #e1e1e1;
                    text-align: center;

                    &:first-child {
                        cursor: pointer;
                    }

                    &:nth-child(2) {
                        cursor: pointer;
                    }
                }
            }
        }
    }

    &_right {
        width: 100%;
    }
}
</style>