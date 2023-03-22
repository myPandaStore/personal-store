<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useField } from "vee-validate";
import * as yup from "yup";
import { reqGetVerifyCode, reqUserResiter } from "@/api";

// 手机号
const phoneNumber = ref("");
const phoneNumberField = useField("phoneNumber");
const validatePhoneNumber = yup.number().required().min(7);
// 用户名
const userName = ref(null);
const userNameField = useField("userName");
const validateUserName = yup.string().required().min(3);
// 验证码
const verifyCode = ref(null);
const verifyCodeField = useField("verifyCode");
const validateverifyCode = yup.string().required().min(4);
// 登录密码
const loginCode = ref(null);
const loginCodeField = useField("loginCode");
const validateLoginCode = yup.string().required().min(8).max(13);
// 确认密码
const confirmCode = ref("");
const confirmCodeField = useField("confirmCode");
const validateConfirmCode = yup.string().required().min(8).max(13);
// 是否同意协议
const isAgree = ref(true);
const isAgreeField = useField("agree");
const validateAgree = yup.boolean().required();

// 获取验证码
const getVerifyCode = async () => {
  try {
    if (phoneNumber.value) {
      const result = await reqGetVerifyCode(phoneNumber.value);
      verifyCode.value = result;
    }
  } catch (errors) {
    console.log(errors.message);
  }
};

const router = useRouter();

// 用户注册成功
const userRegister = async () => {
  const success =
    (await phoneNumberField.validate()) &&
    (await userNameField.validate()) &&
    (await verifyCodeField.validate()) &&
    (await loginCodeField.validate()) &&
    (await confirmCodeField.validate()) &&
    (await isAgreeField.validate());

  if (success) {
    // 表单验证通过
    // 执行用户注册的逻辑，并跳转到 login 页面

    let data = {
      username: userName.value,
      password: loginCode.value,
    };
    await reqUserResiter(data);
    router.push({ name: "Login" });
  }
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
      <Form @submit.prevent class="form" action="">
        <div class="form_item">
          <label for="pnhoneNumber">手机号:</label>
          <Field name="phoneNumber" label="phoneNumber" v-model="phoneNumber" :rules="validatePhoneNumber"
            placeholder="请输入你的手机号" />
          <template v-if="!phoneNumberField.errors.value.length">
            <ErrorMessage as="div" name="phoneNumber" class="error" />
          </template>
        </div>
        <div class="form_item">
          <label for="userName">用户名:</label>
          <Field name="userName" label="userName" v-model="userName" :rules="validateUserName" placeholder="请输入你的用户名" />
          <template v-if="!userNameField.errors.value.length">
            <ErrorMessage as="div" name="userName" class="error" />
          </template>
        </div>
        <div class="form_item">
          <label for="verifyCode">验证码:</label>
          <Field name="verifyCode" label="verifyCode" v-model="verifyCode" :rules="validateverifyCode"
            placeholder="请输入你的验证码" />
          <template v-if="!verifyCodeField.errors.value.length">
            <ErrorMessage as="div" name="verifyCode" class="error" />
          </template>
          <button @click="getVerifyCode" style="position: absolute; top: 0; right: 0; margin-left: 10px; color: red">
            获取验证码
          </button>
        </div>
        <div class="form_item">
          <label for="loginCode">登录密码:</label>
          <Field name="loginCode" label="loginCode" v-model="loginCode" :rules="validateLoginCode"
            placeholder="请输入你的登录密码" />
          <template v-if="!loginCodeField.errors.value.length">
            <ErrorMessage as="div" name="loginCode" class="error" />
          </template>
        </div>
        <div class="form_item">
          <label for="confirmCode">确认密码:</label>
          <Field name="confirmCode" label="confirmCode" v-model="confirmCode" :rules="validateConfirmCode"
            placeholder="请确认你的登录密码" />
          <template v-if="confirmCode !== loginCode">
            <div class="error">
              Please check whether it is the same as your login password
            </div>
          </template>
        </div>
        <div class="form_item">
          <Field type="checkbox" name="agree" label="agree" v-model="isAgree" :rules="validateAgree" />
          <span>同意协议并注册《尚品汇用户协议》</span>
          <template v-if="!isAgreeField.errors.value.length">
            <ErrorMessage as="div" name="loginCode" class="error" />
          </template>
        </div>

        <button @click="userRegister" class="regist">注册</button>
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

        &>a {
          color: red;
          text-decoration: none;
        }
      }
    }

    &>.form {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .form_item {
        // background-color: red;
        width: 400px;
        margin-top: 10px;

        label {
          margin-right: 20px;
        }

        &>.error {
          color: red;
          margin-left: 68px;
          margin-top: 10px;
        }

        &:nth-child(1) {
          label {
            margin-right: 32px;
          }
        }

        &:nth-child(2) {
          label {
            margin-right: 32px;
          }
        }

        &:nth-child(3) {
          position: relative;

          label {
            margin-right: 32px;
          }
        }
      }

      .regist {
        width: 177px;
        margin-left: 58px;
        margin-bottom: 40px;
      }
    }
  }

  &_bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    &>ul {
      margin-top: 20px;
      list-style: none;
      display: flex;

      &>li {
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
