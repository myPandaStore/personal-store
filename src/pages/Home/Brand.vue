<script setup lang="ts">
// @ts-nocheck
import brand1Img from "@/assets/Home/brand_03.png"
import brand2Img from "@/assets/Home/brand_05.png"
import brand3Img from "@/assets/Home/brand_07.png"
import brand4Img from "@/assets/Home/brand_03.png"
import brand5Img from "@/assets/Home/brand_09.png"
import brand6Img from "@/assets/Home/brand_11.png"
import brand7Img from "@/assets/Home/brand_21.png"
import brand8Img from "@/assets/Home/brand_15.png"
import brand9Img from "@/assets/Home/brand_17.png"
import brand10Img from "@/assets/Home/brand_19.png"

</script>
<template>
    <div class="brand">
        <div class="brand_item"><img v-lazy="brand1Img" alt="brand-1"></div>
        <div class="brand_item"><img v-lazy="brand2Img" alt="brand-2"></div>
        <div class="brand_item"><img v-lazy="brand3Img" alt="brand-3"></div>
        <div class="brand_item"><img v-lazy="brand4Img" alt="brand-4"></div>
        <div class="brand_item"><img v-lazy="brand5Img" alt="brand-5"></div>
        <div class="brand_item"><img v-lazy="brand6Img" alt="brand-6"></div>
        <div class="brand_item"><img v-lazy="brand7Img" alt="brand-7"></div>
        <div class="brand_item"><img v-lazy="brand8Img" alt="brand-8"></div>
        <div class="brand_item"><img v-lazy="brand9Img" alt="brand-9"></div>
        <div class="brand_item"><img v-lazy="brand10Img" alt="brand-10"></div>
    </div>
</template>
<style lang="less">
.brand {
    margin: 10px 98px 10px 130px;
    display: flex;
    justify-content: space-between;
    width: 1200px;

    &_item {
        width: 120px;
        padding-right: 2px;
        & img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>