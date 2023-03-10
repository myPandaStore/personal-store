<script></script>
<template>
    <div class="rank">
        <div class="rank_top">
            <div class="rank_top_item">
                <img src="@/assets/Home/hot1.png" alt="rank背景图片">
                <p>热卖排行</p>
            </div>
            <div class="rank_top_item">
                <img src="@/assets/Home/hot2.png" alt="rank背景图片">
                <p>特价排行</p>
            </div>
            <div class="rank_top_item">
                <img src="@/assets/Home/hot2.png" alt="rank背景图片">
                <p>新品排行</p>
            </div>
        </div>
        <div class="rank_list">
            <ul>
                <li class="rannk_list_item">
                    <img src="@/assets/Home/1.jpg" alt="iphone图片">
                    <p>【官网价直降1100】 Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
                    <p>定金： ￥100.00</p>
                </li>
                <li>
                    <img src="@/assets/Home/1.jpg" alt="iphone图片">
                    <p>【官网价直降1100】 Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
                    <p>定金： ￥100.00</p>
                </li>
                <li>
                    <img src="@/assets/Home/1.jpg" alt="iphone图片">
                    <p>【官网价直降1100】 Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
                    <p>定金： ￥100.00</p>
                </li>
                <li>
                    <img src="@/assets/Home/1.jpg" alt="iphone图片">
                    <p>【官网价直降1100】 Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
                    <p>定金： ￥100.00</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less">
.rank {
    min-width: 1380px;

    &_top {
        display: flex;
        justify-content: center;
        margin-top: 20px;

        &_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 20px;
            color: #999;

            &:first-child {
                color: #e60012;
            }

            img {
                width: 40px;
                height: 40px;
            }

            p {
                line-height: 28px;
                font-size: 16px;
                margin: 5px 0;
            }

            &:hover {
                cursor: pointer;
                color: skyblue;
            }
        }
    }

    &_list {
        ul {
            display: flex;
            justify-content: space-between;
            list-style: none;
            margin: 0 120px;

            &>li {
                width: 250px;
                border: 1px solid red;
                padding: 10px;



                &>img {
                    width: 100%;

                    &:hover {
                        cursor: pointer;
                    }
                }

                &>p:last-child {
                    font-size: 20px;
                    color: #e1251b;
                    height: 35px;
                    display: block;
                    line-height: 24px;
                    margin: 0;
                }
            }
        }
    }
}
</style>