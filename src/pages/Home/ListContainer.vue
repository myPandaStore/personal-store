<script setup lang="ts">
import { ref } from "vue";
const listContainerList = ref([
  { imgUrl: "src/pages/Home/images/banner1.jpg", id: 0 },
  { imgUrl: "src/pages/Home/images/banner2.jpg", id: 1 },
  { imgUrl: "src/pages/Home/images/banner3.jpg", id: 2 },
  { imgUrl: "src/pages/Home/images/banner4.jpg", id: 3 },
]);
</script>
<template>
  <div class="list_container">
    <div class="Carousel_container">
      <Carousel :list="listContainerList" />
    </div>

    <div class="list_right">
      <div class="list_right_news">
        <div class="list_right_news_top">
          <p>尚品汇快报</p>
          <p>更多></p>
        </div>
        <ul>
          <li>
            <p>[特惠]</p>
            <p>备战开学季</p>
            <p>全民半价购数码</p>
          </li>
          <li>
            <p>[公告]</p>
            <p>备战开学季</p>
            <p>全民半价购数码</p>
          </li>
          <li>
            <p>[特惠]</p>
            <p>备战开学季</p>
            <p>全民半价购数码</p>
          </li>
          <li>
            <p>[公告]</p>
            <p>备战开学季</p>
            <p>全民半价购数码</p>
          </li>
          <li>
            <p>[特惠]</p>
            <p>备战开学季</p>
            <p>全民半价购数码</p>
          </li>
        </ul>
      </div>
      <ul class="list_right_services_list">
        <li>
          <div class="list_right_servirces_item">
            <i></i>
            <span>话费</span>
          </div>
          <div class="list_right_servirces_item">
            <i></i>
            <span>机票</span>
          </div>
          <div class="list_right_servirces_item">
            <i></i>
            <span>电影城</span>
          </div>
          <div class="list_right_servirces_item">
            <i></i>
            <span>游戏</span>
          </div>
        </li>
        <li>
          <div class="list_right_servirces_item">
            <i></i>
            <span>彩票</span>
          </div>
          <div class="list_right_servirces_item">
            <i></i>
            <span>加油站</span>
          </div>
          <div class="list_right_servirces_item">
            <i></i>
            <span>酒店</span>
          </div>
          <div class="list_right_servirces_item">
            <i></i>
            <span>火车票</span>
          </div>
        </li>
        <li>
          <div class="list_right_servirces_item">
            <i></i>
            <span>众筹</span>
          </div>
          <div class="list_right_servirces_item">
            <i></i>
            <span>理财</span>
          </div>
          <div class="list_right_servirces_item">
            <i></i>
            <span>礼品卡</span>
          </div>
          <div class="list_right_servirces_item">
            <i></i>
            <span>白条</span>
          </div>
        </li>
      </ul>
      <div class="list_right_ads">
        <img src="@/assets/ad1.png" alt="广告图片">
      </div>
    </div>
  </div>
</template>
<style lang="less">
.list_container {
  display: flex;
  justify-content: center;
  min-width: 1380px;

  .Carousel_container {
    width: 600px;
    padding-left: 130px;
    padding-top: 5px;
  }
}

.list_right {
  width: 250px;
  margin: 0 0 0 10px;

  &_news {
    border: 1px solid #e4e4e4;
    margin-top: 4px;

    &_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      position: relative;
      height: 40px;

      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: auto;
        width: 94%;
        height: 1px;
        background-color: #e4e4e4;
      }

      &>p:first-child {
        font-size: 14px;
        line-height: 22px;
        font-weight: bold;
        font-style: normal;
        color: #333;
        margin-left: 10px;
      }
    }

    &>ul {
      list-style: none;
      margin: 0;
      padding: 0 10px;

      &>li {
        display: flex;
        align-items: center;
        height: 30px;

        &>p:first-child {
          margin-left: 10px;
          font-weight: bold;
          font-style: normal;
          color: #333;
        }

        &>p:nth-child(2) {
          margin-right: 10px;
        }
      }
    }
  }

  &_services_list {
    border-top: none;
    margin: 0;
    padding: 0;
    list-style: none;

    &>li {
      display: flex;
      justify-content: space-between;
      border: 1px solid #e4e4e4;

      &:first-child {
        border-top: none;
        border-bottom: none;
      }

      &:last-child {
        border-top: none;
      }

      &>.list_right_servirces_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #e4e4e4;

        &:last-child {
          border: none;
        }

        &>i {
          background-image: url(@/assets/icons.png);
          width: 61px;
          height: 40px;
          display: block;
        }
      }
    }

  }

  &_ads {
    margin-top: 18px;
  }
}
</style>