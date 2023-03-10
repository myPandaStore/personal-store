<script setup lang="ts">
import { ref } from "vue";
import { useRouter} from "vue-router";
// @ts-ignore
import img from "@/assets/logo.png";
// head 部分 logo
const logoImg = ref<string>(img);

// 搜索框关键词
const keyWord = ref('')

const router = useRouter()
// 跳转到 search 页面
const goSearch = () => {
  router.push({
    // path: `/search/${keyWord.value}`,
    name: 'Search',
    params: {
      keyword: keyWord.value
    }
    // path: '/search',
    // query: {id:123}
  })
}
</script>
<template>
  <div class="head">
    <div class="head_top">
      <div class="head_top_left">
        <p>尚品汇欢迎您！</p>
        <a href="###">请登录</a>
        <router-link to="/regist">免费注册</router-link>
      </div>
      <div class="head_top_right">
        <a href="###">我的订单</a>
        <a href="###">我的购物车</a>
        <a href="###">我的尚品汇</a>
        <a href="###">尚品汇会员</a>
        <a href="###">企业采购</a>
        <a href="###">关注尚品汇</a>
        <a href="###">合作招商</a>
        <a href="###">商家后台</a>
      </div>
    </div>
    <div class="head_search">
      <router-link to="/" class="logo">
        <img v-lazy="logoImg" alt="logo图片" />
      </router-link>
      <div class="head_search_container">
        <form class="form" action="" @submit.prevent>
          <input type="text" id="autocomplete" class="head_search_container_input" v-model="keyWord" />
          <button class="head_search_container_button" @click="goSearch">搜索</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.head {
  .head_top {
    min-width: 1380px;
    display: flex;
    background: #eee;
    height: 30px;
    line-height: 30px;
    margin-bottom: 24px;

    &_left {
      display: flex;
      align-items: center;
      height: inherit;
      margin-left: 112px;

      &>p {
        margin-right: 10px;
      }

      &>a {
        text-decoration: none;
        color: #666;

        &:last-child {
          height: 18px;
          line-height: 18px;
          margin-left: 5px;
          padding: 0 5px;
          border-left: 1px solid #b3aeae;
        }
      }
    }

    &_right {
      display: flex;
      align-items: center;
      margin-left: 380px;

      &>a {
        text-decoration: none;
        color: #666;
        height: 18px;
        line-height: 18px;
        margin-right: 5px;
        padding: 0 10px;
        border-right: 1px solid #b3aeae;
      }
    }
  }

  .head_search {
    display: flex;
    align-items: center;

    &>.logo {
      margin-left: 160px;
    }

    &_container {
      margin-left: 414px;

      &>form {
        display: flex;
      }

      &_input {
        box-sizing: border-box;
        width: 490px;
        height: 32px;
        padding: 0 4px;
        border: 2px solid #ea4a36;
      }

      &_button {
        height: 32px;
        width: 68px;
        background: #ea4a36;
        border: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>