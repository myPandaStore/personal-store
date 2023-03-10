<script setup lang="ts">
import { ref } from 'vue'

const phoneNumber = ref(0)
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
            <div class="regist_container_main">
                <div class="regist_container_main_item">
                    <label>手机号:</label>
                    <el-input v-model="phoneNumber" type="password" placeholder="Please input password" size="small" />
                </div>
                <div class="regist_container_main_item">
                    <label>验证码:</label>
                    <el-input v-model="phoneNumber" type="pass
                    
                            word" placeholder="Please input password" size="small" />
                </div>
                <div class="regist_container_main_item">
                    <label>登录码:</label>
                    <el-input v-model="phoneNumber" type="password" placeholder="Please input password" size="small" />
                </div>
                <div class="regist_container_main_item">
                    <label>确认密码:</label>
                    <el-input v-model="phoneNumber" type="password" placeholder="Please input password" size="small" />
                </div>

            </div>
        </div>
        <div class="regist_bottom"></div>
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

                &>label {
                    font-size: 14px;
                    width: 96px;
                    text-align: right;
                    display: inline-block;
                }

                &>.el-input {
                    margin-left: 20px;
                    width: 270px;
                    height: 38px;

                    &:last-child {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
}
</style>