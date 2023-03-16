<script setup lang="ts">
import { ref } from 'vue';

const list = ref([
    { imgUrl: "src/assets/Home/floor-1-b01.png", id: 0 },
    { imgUrl: "src/assets/Home/floor-1-b02.png", id: 1 },
    { imgUrl: "src/assets/Home/floor-1-b03.png", id: 2 },
    { imgUrl: "src/assets/Home/floor-1-b01.png", id: 3 },
])
</script>
<template>
    <div class="floor">
        <div class="floor_top">
            <div class="floor_top_left">家用电器</div>
            <ul class="floor_top_right">
                <li>热门</li>
                <li>大家电</li>
                <li>生活电器</li>
                <li>厨房电器</li>
                <li>应季电器</li>
                <li>空气/净水</li>
                <li>高端电器</li>
            </ul>
        </div>
        <div class="floor_content">
            <ul>
                <li class="floor_content_item1">
                    <div class="item1_top">
                        <ul class="item1_top_left">
                            <li>节能补贴</li>
                            <li>空气净化器</li>
                            <li>滚筒洗衣机</li>
                        </ul>
                        <ul class="item1_top_right">
                            <li>4K电视</li>
                            <li>IH电饭煲</li>
                            <li>电热水器</li>
                        </ul>
                    </div>
                    <img src="@/assets/Home/floor-1-1.png" alt="">
                </li>
                <li class="floor_content_item2">
                    <Carousel :list="list" />
                </li>
                <li class="floor_content_item3">
                    <div class="item3_top">
                        <img src="@/assets/Home/floor-1-2.png" alt="">
                    </div>
                    <div class="item3_bottom">
                        <img src="@/assets/Home/floor-1-3.png" alt="">
                    </div>
                </li>
                <li class="floor_content_item4">
                    <img src="@/assets/Home/floor-1-4.png" alt="">
                </li>
                <li class="floor_content_item5">
                    <div class="item5_top">
                        <img src="@/assets/Home/floor-1-5.png" alt="">
                    </div>
                    <div class="item_bottom">
                        <img src="@/assets/Home/floor-1-6.png" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less">
.floor {
    margin-top: 20px;

    &_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 98px 0 130px;
        border-bottom: 1px solid #c81623;

        &_left {
            color: #c81623;
            font-size: 20px;
            line-height: 30px;
            margin: 9px 0;
            font-weight: 700;
        }

        &_right {
            list-style: none;
            display: flex;

            &>li {
                border-right: 1px solid #e1e1e1;
                padding-right: 10px;
                padding-left: 10px;

                &:first-child {
                    color: red;
                    border-color: red;
                }

                &:hover {
                    color: skyblue;
                    cursor: pointer;
                    text-decoration: underline;
                }

                &:last-child {
                    border: none;
                }
            }
        }
    }

    &_content {
        margin: 0 98px 0 130px;

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;

            .floor_content_item1 {
                width: 210px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #f7f7f7;

                .item1_top {
                    display: flex;
                    justify-content: space-around;
                    width: 100%;
                    margin-bottom: 30px;
                    margin-top: 20px;

                    &>ul {
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        &>li {
                            display: block;
                            padding-bottom: 5px;
                            border-bottom: 1px solid #e1e1e1;
                            margin-bottom: 5px;
                        }
                    }
                }
            }

            .floor_content_item2 {
                width: 330px;
                border-bottom: 1px solid #e1e1e1;
                border-right: 1px solid #e1e1e1;
            }

            .floor_content_item3 {
                height: 100%;

                .item3_top {
                    height: 50%;
                    border-right: 1px solid #e1e1e3;
                    border-bottom: 1px solid #e1e1e3;
                }

                .item3_bottom {
                    height: 50%;
                    border-right: 1px solid #e1e1e3;
                    border-bottom: 1px solid #e1e1e3;
                }
            }

            .floor_content_item4 {
                border-bottom: 1px solid #e1e1e1;
                border-right: 1px solid #e1e1e1;
            }

            .floor_content_item5 {
                border-bottom: 1px solid #e1e1e1;
                border-right: 1px solid #e1e1e1;
            }
        }
    }
}
</style>