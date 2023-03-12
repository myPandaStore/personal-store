<script setup lang="ts">
import { ref } from "vue";
import { useField } from "vee-validate";
import * as yup from "yup";
import {reqGetVerifyCode} from "@/api"

// 手机号
const phoneNumber = ref("");
const phoneNumberField = useField("phoneNumber");
const validatePhoneNumber = yup.number().required().min(7);
// 验证码
const verifyCode = ref(null);
const verifyCodeField = useField("verifyCode");
const validateverifyCode = yup.string().required().min(4);
// 登录密码
const loginCode = ref("");
// 确认密码
const confirmCode = ref("");
// 是否同意协议
const isAgree = ref(true);
// 获取验证码
const getVerifyCode = async () => {
  try {
    if (phoneNumber.value) {
        const result = await reqGetVerifyCode(phoneNumber.value)
        verifyCode.value = result
    }
  } catch(errors) {
    console.log(errors.message)
  }
};
// 用户注册成功
const submit = () => {
  phoneNumberField.validate();
  verifyCodeField.validate();

  //   if (phoneNumber.errors.value.length) {
  //     debugger;
  //     return;
  //   }

  // handle form submission
};
</script>
<template>
  <div class="regist">
    <div class="regist_container">
      <div class="regist_container_top">
        <div class="regist_container_top_left">注册新用户</div>
        <div class="regist_container_top_right">
          我有账号，去
          <router-link to="/login">登录</router-link>
        </div>
      </div>
      <Form @submit="submit" class="form">
        <div class="form_item">
          <label for="pnhoneNumber">手机号：</label>
          <Field
            name="phoneNumber"
            label="phoneNumber"
            v-model="phoneNumber"
            :rules="validatePhoneNumber"
          />
          <template v-if="!phoneNumberField.errors.value.length">
            <ErrorMessage name="phoneNumber" />
          </template>
        </div>
        <div class="form_item">
          <label for="verifyCode">验证码:</label>
          <Field
            name="verifyCode"
            label="verifyCode"
            v-model="verifyCode"
            :rules="validateverifyCode"
          />
          <template v-if="!verifyCodeField.errors.value.length">
            <ErrorMessage name="verifyCode" />
          </template>
          <button @click="getVerifyCode" style="width: 70px; height: 38px; color: red">
            获取验证码
          </button>
        </div>

        <!-- <label for="loginCode">登录密码：</label>
        <Field name="email" label="Email" :rules="validateEmail" />
        <ErrorMessage name="email" /> -->

        <!-- <label for="confirmCode">确认密码：</label>
        <Field name="email" label="Email" :rules="validateEmail" />
        <ErrorMessage name="email" /> -->

        <!-- <Field as="my-checkbox" name="terms" type="checkbox" :value="false" /> -->

        <button type="submit">注册</button>
      </Form>
    </div>
    <div class="regist_bottom">
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
.regist {
  margin: 20px 130px 0 130px;

  &_container {
    border: 1px solid #e1e1e1;
    min-width: 1178px;

    &_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ececec;

      &_left {
        margin: 0 20px;
        color: #333;
        border-bottom: 1px solid #dfdfdf;
        font-size: 20.04px;
        font-weight: 700;
        line-height: 30.06px;
      }

      &_right {
        font-size: 14px;
        color: #333;
        margin-right: 20px;

        & > a {
          color: red;
          text-decoration: none;
        }
      }
    }

    &_main {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;

      &_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        & > label {
          font-size: 14px;
          width: 96px;
          text-align: right;
          display: inline-block;
        }

        & > .el-input {
          margin-left: 20px;
          width: 270px;
          height: 38px;

          &:last-child {
            margin-left: 10px;
          }
        }
      }

      & > .controls {
        margin-left: 40px;
        margin-bottom: 10px;

        input {
          margin-top: 10px;
        }
      }

      & > .btn {
        margin-left: 104px;

        button {
          width: 270px;
          height: 38px;
          background-color: red;
          color: white;
          border-radius: 2px;
          margin-bottom: 50px;

          &:hover {
            cursor: pointer;
          }
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
