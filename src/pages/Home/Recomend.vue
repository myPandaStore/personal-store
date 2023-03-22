<script setup lang="ts">
import clockImg from "@/assets/Home/clock.png"
import today01Img from "@/assets/Home/today01.png"
import today02Img from "@/assets/Home/today02.png"
import today03Img from "@/assets/Home/today03.png"
import today04Img from "@/assets/Home/today04.png"

</script>
<template>
    <div class="recommend">
        <div class="recommend_clock">
            <img v-lazy="clockImg" alt="闹钟图片">
            <h3>今日推荐</h3>
        </div>
        <div class="recommend_item">
            <img v-lazy="today01Img" alt="推荐01">
        </div>
        <div class="recommend_item">
            <img v-lazy="today02Img" alt="推荐02">
        </div>
        <div class="recommend_item">
            <img v-lazy="today03Img" alt="推荐03">
        </div>
        <div class="recommend_item">
            <img v-lazy="today04Img" alt="推荐04">
        </div>
    </div>
</template>
<style lang="less">
.recommend {
    display: flex;
    min-width: 1380px;
    

    &_clock {
        background: #5c5251;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 132px;
        width: 204px;


        &>h3 {
            margin: 9px 0;
            font-weight: 700;
            font-size: 18px;
            line-height: 30.06px;
            color: white;
        }
    }

    @media screen and (max-width: 1420px) {
        .recommend_clock {
            width: 184px;
        }
    }
    &_item {
        &>img {
            width: 100%;
            height: 100%;
            transition: all 400ms;

            &:hover {
                opacity: 0.8;
            }
        }
    }
}
</style>