<script setup>
import { ref} from "vue";
import { useRouter } from "vue-router";
// @ts-ignore
import { userStore } from "@/stores/user.ts";

// 用户名
const name = ref("");

// 登录密码
const code = ref("");

const router = useRouter()
const loginUserStore = userStore();
// 登录
const login = async () => {
  try {
    let data = {
      username: name.value,
      password: code.value,
    };
    name && code && (await loginUserStore.userLogin(data));
    router.push('/home')
  } catch (error) {
    alert(error.message);
  }
};
</script>
<template>
  <div class="login">
    <div class="login_main">
      <div class="login_main_item">
        <div class="login_main_item_top">
          <div class="login_main_item_top_left">扫描登录</div>
          <div class="login_main_item_top_right">账户登录</div>
        </div>
        <div class="login_main_item_phone">
          <div class="login_main_item_phone_left"></div>
          <input
            type="text"
            class="login_main_item_phone_right"
            placeholder="用户名"
            v-model="name"
          />
        </div>
        <div class="login_main_item_code">
          <div class="login_main_item_code_left"></div>
          <input
            type="text"
            class="login_main_item_code_right"
            placeholder="请输入密码"
            v-model="code"
          />
        </div>
        <div class="login_main_item_check">
          <div class="login_main_item_check_left">
            <input type="checkbox" /><span>自动登录</span>
          </div>

          <div class="login_main_item_check_right">忘记密码？</div>
        </div>
        <button class="login_main_item_login" @click="login">登录</button>
      </div>
    </div>
    <div class="login_bottom">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>
<style lang="less">
.login {
  height: 487px;
  margin-top: 20px;
  background: url(@/assets/Login/loginbg.png) no-repeat;
  background-color: #e93854;

  &_main {
    position: relative;
    height: 500px;
    &_item {
      position: absolute;
      top: 0;
      right: 70px;
      background-color: white;
      margin-top: 30px;
      padding: 20px;

      &_top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &_left {
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          font-weight: 700;
          color: #333;
          border: 1px solid #ddd;
          padding: 0 40px;
        }

        &_right {
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          font-weight: 700;
          color: red;
          border: 1px solid #ddd;
          padding: 0 40px;
        }
      }

      &_phone {
        margin-top: 20px;
        display: flex;

        &_left {
          background: url(@/assets/icons.png) no-repeat -10px -201px;
          width: 37px;
          height: 32px;
          border: 1px solid #ccc;

          box-sizing: border-box;
          border-radius: 2px 0 0 2px;
        }
        &_right {
          width: 100%;
        }
      }
      &_code {
        margin-top: 20px;
        display: flex;

        &_left {
          background: url(@/assets/icons.png) no-repeat -72px -201px;
          width: 37px;
          height: 32px;
          border: 1px solid #ccc;

          box-sizing: border-box;
          border-radius: 2px 0 0 2px;
        }
        &_right {
          width: 100%;
        }
      }
      &_check {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &_left {
          display: flex;
          align-items: center;
        }
      }
      &_login {
        width: 100%;
        height: 36px;
        background-color: red;
        margin-top: 20px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  &_bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > ul {
      margin-top: 20px;
      list-style: none;
      display: flex;

      & > li {
        padding-right: 10px;
        padding-left: 10px;
        border-right: 1px solid black;

        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>
