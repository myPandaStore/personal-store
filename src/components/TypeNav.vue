<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// @ts-ignore
import { homeStore } from "@/stores/home.ts";
// @ts-ignore
import { throttle } from "@/utils/tool.ts";

interface Subcategory {
  [key: string]: string[];
}

interface Category {
  status?: number | string;
  cateGoryName?: string;
  cateGoryId: number;
  cateGoryChild: Subcategory;
}

type CategoryList = Category[];

// 商品列表
const useHomeStore = homeStore();
const categoryList: CategoryList = useHomeStore.categoryList;

const route = useRoute();
const router = useRouter();

// 存储鼠标移入哪一个分类
const currentIndex = ref<string|number>(-1);
// 鼠标移入改变 currentIndex
const changeIndex = throttle((index: string | number) => {
  currentIndex.value = index;
}, 50);
// 鼠标移出
const leaveIndex = () => {
  currentIndex.value = -1;
};

// 默认不展示商品列表
const isShowCategoryList = ref<boolean>(false);
// 鼠标移入，商品分类进行展示
const enterShow = () => {
  if (route.path === "/home") {
    isShowCategoryList.value = true;
  }
};
// 鼠标离开，商品分类列表隐藏
const leaveShow = () => {
  currentIndex.value = -1;
  isShowCategoryList.value = false;
};

// 点击商品进行路由跳转
const goSearch = (event:Event) => {
  let element = event.target;
  let category1Id = element?.dataset["id"]
  router.push({
    name: "Search",
    params: {
      keyword: category1Id,
    },
  });
};
</script>
<template>
  <div class="type_nav">
    <div class="type_nav_navigate" @mouseleave="leaveShow" @mouseenter="enterShow">
      <h2>全部商品分类</h2>
      <transition class="sort">
        <ul class="type_list" v-show="isShowCategoryList" @click="goSearch">
          <li class="type_list_item" v-for="(item, index) in categoryList.slice(1, 16)" :key="item.cateGoryId"
            :class="{ cur: currentIndex === index }">
            <a @mouseenter="changeIndex(index)" @mouseleave="leaveIndex" :data-id="item.cateGoryId">
              {{ item["cateGoryName@1"] }}
              <div class="type_list_item_subitemList" :style="{ display: currentIndex == index ? 'block' : 'none' }">
                <ul v-for="(subItem, index) in item.cateGoryChild" :key="index + subItem">
                  <li v-for="(thirdItem, index) in subItem" :key="index + thirdItem">
                    {{ thirdItem }}
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </transition>
    </div>
    <nav>
      <a href="###">服装城</a>
      <a href="###">美妆馆</a>
      <a href="###">尚品汇超市</a>
      <a href="###">全球购</a>
      <a href="###">闪购</a>
      <a href="###">团购</a>
      <a href="###">有趣</a>
      <a href="###">秒杀</a>
    </nav>
  </div>
</template>
<style lang="less">
.type_nav {
  padding: 0 130px;
  margin-top: 20px;
  border-bottom: 2px solid #e1251b;
  //   position: relative;

  &_navigate {
    display: flex;
    min-width: 940px;
    align-items: center;
    margin-bottom: -34px;
    position: relative;

    &>h2 {
      width: 210px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background: #e1251b;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .type_list {
      width: 170px;
      height: 460px;
      padding: 0 20px;
      position: absolute;
      top: 44px;
      list-style: none;
      background: #fafafa;
      z-index: 3;

      &>li {
        &>a {
          text-decoration: none;
          color: #333;
          font-size: 14px;
          font-weight: 400;
          line-height: 30px;
          cursor: pointer;

          &:hover {
            .type_list_item_subitemList {
              display: block;
            }
          }
        }

        .type_list_item_subitemList {
          display: none;
          position: absolute;
          left: 210px;
          top: 0;
          width: 734px;
          min-height: 460px;
          background: #f7f7f7;

          &>ul {
            list-style: none;
            display: flex;
            padding: 20px 0 0 14px;

            &>li {
              border-right: 1px solid black;
              padding: 0 8px;
              height: 16px;
              line-height: 16px;
              color: #666;

              &:first-child {
                color: black;
              }

              &:last-child {
                border: none;
              }
            }
          }
        }
      }
    }
  }

  &>nav {
    margin-left: 210px;

    &>a {
      margin: 0 22px;
      font-size: 16px;
      color: #333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  //过渡动画的样式
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .cur {
    background-color: skyblue;
  }
}
</style>
