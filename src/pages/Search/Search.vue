<script setup lang="ts">
import { ref, onBeforeMount, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { searchStore } from "../../stores/search";
import phone1Img from "@/assets/Search/phone01.png"
import phone2Img from "@/assets/Search/phone02.png"
import phone3Img from "@/assets/Search/phone06.png"
import phone4Img from "@/assets/Search/phone07.png"
import phone5Img from "@/assets/Search/mobile03.png"

interface SearchParams {
  keyword?: string | number;
  order?: string;
}

const route = useRoute();
const useSearchStore = searchStore();
let keyword = route.params.keyword;

// 分页器当前页码数
const currentPageNumber = ref<number>(1);
// 初始化向服务端发送请求的参数
const searchParams = ref<SearchParams>({
  keyword: "",
  order: "",
});
// 初始化商品详情数据
let good = ref({});

const getData = async () => {
  await useSearchStore.getSearchList(searchParams.value);
  good.value = useSearchStore.searchList;
  // debugger;
};

onBeforeMount(() => {
  Object.assign(searchParams.value, { keyword });
});

onMounted(() => {
  getData();
});

watch(
  () => route.params,
  async () => {
    Object.assign(searchParams.value, { keyword });
    // searchParams.value.keyword = "";
    // debugger;
    getData();
  },
  { immediate: true }
);

watch(
  () => route.params,
  (toParams, previousParams) => {
    //  console.log(toParams.keyword)
    //  console.log(previousParams.keyword)
    keyword = toParams.keyword;
    //  debugger
  }
);
</script>
<template>
  <TypeNav />
  <div class="search">
    <div class="search_bread">
      <ul>
        <li>全部结果</li>
        <li>手机</li>
        <li>
          <div class="text">iphone</div>
          <div class="delete">x</div>
        </li>
        <li>
          <div>华为</div>
          <div class="delete">x</div>
        </li>
      </ul>
    </div>
    <div class="search_main">
      <div class="search_main_attribute">
        <ul>
          <li class="item">
            <div class="item_left">品牌</div>
            <div class="item_right">
              <div class="item_right_img">
                <div class="item_right_img_top">
                  <div class="item_right_img_top_item">索尼（SONY）</div>
                  <div class="item_right_img_top_item">TCL</div>
                  <div class="item_right_img_top_item">长虹（CHANGHONG）</div>
                  <div class="item_right_img_top_item">飞利浦（PHILIPS）</div>
                  <div class="item_right_img_top_item">风行电视</div>
                  <div class="item_right_img_top_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_top_item">
                    <img v-lazy="phone2Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_top_item">
                    <img v-lazy="phone3Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_top_item">
                    <img v-lazy="phone4Img" alt="测试图片" />
                  </div>
                </div>
                <div class="item_right_img_bottom">
                  <div class="item_right_img_bottom_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_bottom_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_bottom_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_bottom_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_bottom_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_bottom_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_bottom_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_bottom_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                  <div class="item_right_img_bottom_item">
                    <img v-lazy="phone1Img" alt="测试图片" />
                  </div>
                </div>
              </div>
              <div class="item_right_mutiple">多选</div>
              <div class="item_right_more">更多</div>
            </div>
          </li>
          <li class="item">
            <div class="item_left">网络制式</div>
            <div class="item_right">
              <div class="item_right_item">GSM（移动/联通2G）</div>
              <div class="item_right_item">电信2G</div>
              <div class="item_right_item">电信3G</div>
              <div class="item_right_item">移动3G</div>
              <div class="item_right_item">联通3G</div>
              <div class="item_right_item">联通4G</div>
              <div class="item_right_item">电信3G</div>
              <div class="item_right_item">移动3G</div>
            </div>
          </li>
          <li class="item">
            <div class="item_left">显示屏尺寸</div>
            <div class="item_right">
              <div class="item_right_item">4.0-4.9英寸</div>
              <div class="item_right_item">4.0-4.9英寸</div>
            </div>
          </li>
          <li class="item">
            <div class="item_left">摄像头像素</div>
            <div class="item_right">
              <div class="item_right_item">1200万以上</div>
              <div class="item_right_item">800-1199万</div>
              <div class="item_right_item">1200-1599万</div>
              <div class="item_right_item">1600万以上</div>
              <div class="item_right_item">无摄像头</div>
            </div>
          </li>
          <li class="item">
            <div class="item_left">价格</div>
            <div class="item_right">
              <div class="item_right_item">0-500元</div>
              <div class="item_right_item">500-1000元</div>
              <div class="item_right_item">1000-1500元</div>
              <div class="item_right_item">1500-2000元</div>
              <div class="item_right_item">2000-3000元</div>
            </div>
          </li>
          <li class="item">
            <div class="item_left">更多筛选项</div>
            <div class="item_right">
              <div class="item_right_item">特点</div>
              <div class="item_right_item">系统</div>
              <div class="item_right_item">手机内存</div>
              <div class="item_right_item">单卡双卡</div>
              <div class="item_right_item">其他</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="search_main_bottom">
        <div class="search_main_tottom_item">综合</div>
        <div class="search_main_tottom_item">销量</div>
        <div class="search_main_tottom_item">新品</div>
        <div class="search_main_tottom_item">评价</div>
        <div class="search_main_tottom_item">价格⬆</div>
        <div class="search_main_tottom_item">价格⬇</div>
      </div>
    </div>
    <div class="search_deatil">
      <div class="search_detail_list">
        <div class="search_detail_list_top">
          <div class="search_detail_list_top_item">
            <router-link :to="`/shopcard/${good.title}`">
              <img v-lazy="phone5Img" alt="测试图片" />
            </router-link>
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
          <div class="search_detail_list_top_item">
            <img v-lazy="phone5Img" alt="测试图片" />
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
          <div class="search_detail_list_top_item">
            <img v-lazy="phone5Img" alt="测试图片" />
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
          <div class="search_detail_list_top_item">
            <img v-lazy="phone5Img" alt="测试图片" />
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
          <div class="search_detail_list_top_item">
            <img v-lazy="phone5Img" alt="测试图片" />
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
        </div>
        <div class="search_detail_list_top">
          <div class="search_detail_list_top_item">
            <img v-lazy="phone5Img" alt="测试图片" />
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
          <div class="search_detail_list_top_item">
            <img v-lazy="phone5Img" alt="测试图片" />
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
          <div class="search_detail_list_top_item">
            <img v-lazy="phone5Img" alt="测试图片" />
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
          <div class="search_detail_list_top_item">
            <img v-lazy="phone5Img" alt="测试图片" />
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
          <div class="search_detail_list_top_item">
            <img v-lazy="phone5Img" alt="测试图片" />
            <div class="price">¥6088.00</div>
            <div class="description">
              Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
              (A1699)Apple苹果iPhone 6s (A1699)
            </div>
            <div class="judge">
              已有
              <div class="judge_number">2000</div>
              人评价
            </div>
            <div class="bottom">
              <div class="bottom_left">加入购物车</div>
              <div class="bottom_right">收藏</div>
            </div>
          </div>
        </div>
      </div>
      <div class="demo-pagination-block">
        <el-pagination v-model:current-page="currentPageNumber" :page-size="10" :small="false" :disabled="false"
          :background="false" layout="total, prev, pager, next" :total="1000" />
      </div>
    </div>
  </div>
</template>
<style lang="less">
.search {
  margin: 0 130px;

  &_bread {
    & ul {
      list-style: none;
      margin-top: 10px;
      padding: 0;
      display: flex;
      align-items: center;

      &>li {
        border: 1px solid #e1e1e1;
        background-color: #f7f7f7;
        margin-right: 10px;
        display: flex;
        align-items: center;
        padding: 0 10px;

        &>.delete {
          margin-left: 10px;
          cursor: pointer;
          font: 400 14px tahoma;
        }
      }

      &>li:first-child {
        color: #666;
        text-decoration: none;
        margin: 0 20px 0 10px;
        border: none;
        background-color: white;
        padding: 0;
      }
    }
  }

  &_main {
    &_attribute {
      &>ul {
        list-style: none;
        margin: 10px 0 0 0;
        padding: 0;
        border: 1px solid #e1e1e1;

        &>.item:first-child {
          .item_left {
            width: 124px;
            height: 124px;
          }

          .item_right {
            position: relative;

            &_img {
              &_top {
                display: flex;
                align-items: center;
                border: 1px solid #e1e1e1;

                &_item {
                  width: 100px;
                  height: 52px;
                  line-height: 52px;
                  border-right: 1px solid #e1e1e1;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  text-align: center;
                  white-space: nowrap;
                  font-weight: 700;
                  color: #e1251b;
                  font-style: italic;
                  font-size: 14px;

                  &:last-child {
                    border: none;
                  }
                }
              }

              &_bottom {
                display: flex;
                align-items: center;
                border: 1px solid #e1e1e1;
                border-top: none;

                &_item {
                  width: 100px;
                  height: 52px;
                  line-height: 52px;
                  border-right: 1px solid #e1e1e1;

                  &>img {
                    max-width: 100%;
                    max-height: 100%;
                  }

                  &:last-child {
                    border: none;
                  }
                }
              }
            }

            &_mutiple {
              position: absolute;
              top: 15px;
              right: 30px;
              border: 1px solid #e1e1e1;
              padding: 0 2px;

              &:hover {
                cursor: pointer;
                color: blue;
                text-decoration: underline;
              }
            }

            &_more {
              position: absolute;
              top: 15px;
              right: 0;

              &:hover {
                cursor: pointer;
                color: blue;
                text-decoration: underline;
              }
            }
          }
        }

        &>.item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #e1e1e1;

          .item_left {
            width: 124px;
            height: 28px;
            line-height: 28px;
            background-color: #f1f1f1;
            text-align: right;
            padding: 10px 10px 0 0;
          }

          .item_right {
            flex: 1;
            display: flex;
            align-items: center;
            padding: 10px 10px 0;
            line-height: 28px;

            &_item {
              margin-right: 20px;
            }
          }
        }
      }
    }

    &_bottom {
      margin-top: 10px;
      display: flex;
      align-items: center;
      min-height: 40px;
      padding-right: 20px;
      background: #fbfbfb;
      border: 1px solid #e2e2e2;
      padding-left: 0;
      border-radius: 0;
      box-shadow: 0 1px 4px rgb(0 0 0 / 7%);

      &>.search_main_tottom_item {
        padding: 11px 15px;
        color: #777;
        text-decoration: none;

        &:first-child {
          background-color: red;
          color: white;
        }

        &:hover {
          color: blue;
          cursor: pointer;
        }
      }
    }
  }

  &_detail {
    &_list {
      margin-top: 10px;

      &_top {
        display: flex;
        justify-content: space-between;

        &_item {
          &>.price {
            font-weight: 700;
            font-size: 18px;
            color: #c81623;
          }

          &>.description {
            width: 85%;
            overflow: hidden;
            margin-bottom: 8px;
            min-height: 38px;
            cursor: pointer;
            line-height: 1.8;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }

          &>.judge {
            font-style: normal;
            display: flex;
            align-items: center;
            color: #a7a7a7;

            &>.judge_number {
              font-weight: 700;
              color: #646fb0;
            }
          }

          &>.bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 85%;
            margin-top: 10px;

            .bottom_left {
              border: 1px solid red;
              padding: 4px 10px;
              color: red;
            }

            .bottom_right {
              border: 1px solid #e3e3e3;
              padding: 4px 30px;
            }
          }
        }
      }
    }
  }

  .demo-pagination-block {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
}
</style>
