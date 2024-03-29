<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { shopCartStore } from "../../stores/shopCart"
import { throttle } from "../../utils/tool";

interface CartItem {
  skuName?: String;
  skuPrice?: Number;
  imgUrl?: String;
  isChecked?: Boolean | Number
}

type CartList = CartItem[]
// 初始化购物车数据
const cartInfoList = ref<CartList>([])

const useShopCartStore = shopCartStore()
onMounted(() => {
  getData()
})

const getData = async () => {
  await useShopCartStore.getCartList()
  cartInfoList.value = useShopCartStore.cartList
}


//修改某个产品的勾选状态
const updateChecked = async (cart: CartItem, event: Event) => {
  try {
    //如果修改数据成功，再次获取服务器数据（购物车）
    let isChecked = event.target.checked ? "1" : "0";
    useShopCartStore.updateCheckedById(cart.skuName, isChecked)
    getData();
  } catch (error) {
    //如果失败提示
    alert(error.message);
  }
}

// 修改全部产品的勾选状态
const updateAllCartChecked = async (event) => {
  try {
    let isChecked = event.target.checked ? "1" : "0"
    await useShopCartStore.updateAllCartIsChecked(isChecked)
    getData()
  } catch (error) {
    alert(error.message)
  }
}

// 修改某个产品的个数
const handler = throttle(async (type: string, disNum: number, cart: CartItem) => {
  // type: add minus change
  // disNum: +变化量（+1） -变化量（-1） input最终应该显示的数量
  // cart: 不同的产品
  switch (type) {
    case "add":
      disNum = 1;
      break;
    case "minus":
      // 产品的个数大于1，才可以执行 -1 逻辑
      // 如果出现了产品的个数小于等于1，给服务器传递参数为0
      disNum = cart.skuNum > 1 ? -1 : 0;
      break;
    case "change":
      // 用户直接输入的最终量，如果非法的（带有汉字|出现负数），带给服务器0
      if (isNaN(disNum) || disNum < 1) {
        disNum = 0;
      } else {
        disNum = parseInt(disNum)
      }
      break;
  }

  // 发送请求，获取修改后的数据
  try {
    await useShopCartStore.addOrUpdateShopCart(cart.skuName, disNum)
    getData();
  } catch (error) {
    console.log(error.message)
  }
}, 500)

// 删除某一个产品的操作
const deleteCartBySkuName = async (cart:CartItem) => {
  try {
    // 删除成功再次发请求获取新的数据进行展示
    await useShopCartStore.deleteCartBySkuName(cart.skuName)
    getData()
  } catch (error) {
    alert(error.message)
  }
}

// 判断是否全选
const isAllCheck = computed(() => {
  return cartInfoList.value.every((item) => item.isChecked == 1)
})

// 删除全部选中的产品
const deleteAllCheckedCart = async () => {
  await useShopCartStore.deleteAllCheckedCart()
  getData()
}

// 计算购买商品的总价
const totalPrice = computed(() => {
  let sum = 0
  cartInfoList.value.forEach((item:CartItem) => {
    sum += item.skuNum * item.skuPrice
  })
  return sum
})

</script>
<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="cart in cartInfoList" :key="cart.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cart.isChecked == 1" @change="updateChecked(cart, $event)" />
          </li>
          <li class="cart-list-con2">
            <img v-webp="cart.imgUrl" />
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>

          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="handler('minus', -1, cart)">-</a>
            <input autocomplete="off" type="text" :value="cart.skuNum" minnum="1" class="itxt"
              @change="handler('change', $event.target.value, cart)" />
            <a href="javascript:void(0)" class="plus" @click="handler('add', +1, cart)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuNum * cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCartBySkuName(cart)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isAllCheck && cartInfoList.length > 0"
          @change="updateAllCartChecked" />
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllCheckedCart">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;

  ul {
    list-style: none;
  }

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      &>div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        &>li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
            cursor: pointer;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
        cursor: pointer;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
