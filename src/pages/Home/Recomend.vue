<script></script>
<template>
    <div class="recommend">
        <div class="recommend_clock">
            <img src="@/assets/Home/clock.png" alt="">
            <h3>今日推荐</h3>
        </div>
        <div class="recommend_item">
            <img src="@/assets/Home/today01.png" alt="">
        </div>
        <div class="recommend_item">
            <img src="@/assets/Home/today02.png" alt="">
        </div>
        <div class="recommend_item">
            <img src="@/assets/Home/today03.png" alt="">
        </div>
        <div class="recommend_item">
            <img src="@/assets/Home/today04.png" alt="">
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