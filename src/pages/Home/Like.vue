<script setup lang="ts">
// @ts-nocheck
import like01Img from "@/assets/Home/like_01.png"
import like02Img from "@/assets/Home/like_02.png"
import like03Img from "@/assets/Home/like_03.png"

</script>
<template>
    <div class="like">
        <div class="like_top">
            <div class="like_top_left">
                <h3> 猜你喜欢</h3>
            </div>
            <div class="like_top_right">
                <p> 换一换</p>
                <i></i>
            </div>
        </div>
        <div class="like_list">
            <div class="like_list_item">
                <img v-lazy="like01Img" alt="like01">
                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                <p>￥116</p>
            </div>
            <div class="like_list_item">
                <img v-lazy="like02Img" alt="like02">
                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                <p>￥116</p>
            </div>
            <div class="like_list_item">
                <img v-lazy="like03Img" alt="like03">
                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                <p>￥116</p>
            </div>
            <div class="like_list_item">
                <img v-lazy="like01Img" alt="like01">
                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                <p>￥116</p>
            </div>
            <div class="like_list_item">
                <img v-lazy="like02Img" alt="like02">
                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                <p>￥116</p>
            </div>
            <div class="like_list_item">
                <img v-lazy="like03Img" alt="like03">
                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                <p>￥116</p>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.like {
    min-width: 1380px;
    margin-top: 20px;

    &_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 100px 0 130px;

        &_left {
            h3 {
                font-size: 20px;
                line-height: 30px;
            }
        }

        &_right {
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                background-image: url(@/assets/icons.png);
                width: 40px;
                display: block;
                height: 24px;
                background-position: 150px -104px;
            }
        }


    }

    &_list {
        display: flex;
        justify-content: space-between;
        margin: 0 100px 0 130px;
        border: 1px solid #e1e1e1;

        &_item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px 0 0 10px;

            &>img {
                &:hover {
                    cursor: pointer;
                    transition: all 0.4s;
                    transform: scale(1.1);
                    opacity: 0.8;
                }
            }

            &>p {
                width: 142px;
                border-right: 1px solid #e1e1e1;

                &:last-child {
                    border: none;
                    color: #df3033;
                    font-size: 20px;
                    margin: 0;
                    font-weight: 700;
                }
            }

            &:last-child {
                &>p {
                    border: none;
                }
            }
        }

    }
}
</style>