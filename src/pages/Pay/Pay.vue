<script setup lang="ts">
import { computed, ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router";
import qrcode from "qrcode"
import { reqPayInfo, reqPayStatus } from "../../api"
import pay1Img from "./images/pay2.jpg"
import pay2Img from "./images/pay3.jpg"
import pay3Img from "./images/pay10.jpg"
import pay4Img from "./images/pay11.jpg"
import pay5Img from "./images/pay12.jpg"
import pay6Img from "./images/pay13.jpg"
import pay7Img from "./images/pay14.jpg"
import pay8Img from "./images/pay15.jpg"
import pay9Img from "./images/pay16.jpg"
import pay10Img from "./images/pay17.jpg"
import pay11Img from "./images/pay18.jpg"
import pay12Img from "./images/pay19.jpg"
import pay13Img from "./images/pay20.jpg"

interface PayInfo {
    codeUrl: string;
    totalFee: number;
}

const route = useRoute()
const router = useRouter()

// 初始化一个 timer 以供支付使用
const timer = ref(null)

// 订单 ID
const orderId = computed<number | string>(() => {
    return route.query.orderId
})

// 初始化支付信息
const payInfo = ref<PayInfo>({})

// 初始化支付状态码
const code = ref<string>("")

// 获取支付信息
const getPayInfo = async () => {
    try {
        let result = await reqPayInfo(orderId.value)
        if (result?.code == 200) {
            payInfo.value = result.data
        }
    } catch (error) {
        alert(error.message)
    }
}

onMounted(() => {
    getPayInfo()
})

// 支付操作
const open = async () => {
    let url = await qrcode.toDataURL(payInfo.value.codeUrl)
    // @ts-ignore
    ElMessageBox.alert(`<img src=${url}>`, '请你微信支付',
        {
            dangerouslyUseHTMLString: true,
            //中间布局
            center: true,
            //是否显示取消按钮
            showCancelButton: true,
            //取消按钮的文本内容
            cancelButtonText: "支付遇见问题",
            //确定按钮的文本
            confirmButtonText: "已支付成功",
            //右上角的叉子没了
            showClose: false,
            //关闭弹出框的配置值
            beforeClose: (type:string, instance:any, done:any) => {
                //type:区分取消|确定按钮
                //instance：当前组件实例
                //done:关闭弹出框的方法
                if (type == "cancel") {
                    // debugger
                    alert("请联系管理员鹏哥");
                    //清除定时器
                    clearInterval(timer.value)
                    timer.value = null
                    //关闭弹出框
                    done();
                } else {
                    //判断是否真的支付了
                    //开发人员：为了自己方便，这里判断先不要了
                    if (code.value == 200) {
                        clearInterval(timer.value);
                        timer.value = null;
                        done();
                        router.push("/paySuccess");
                    }
                }
            },
        })
    if (!timer.value) {
        timer.value = setInterval(async () => {
            // 发请求获取用户支付状态
            let result = await reqPayStatus(orderId.value)
            if (result.code == 200) {
                clearInterval(timer.value)
                timer.value = null
                code.value = result.code
                ElMessageBox.close()
                router.push('/PaySuccess')
            }
            // debugger
        }, 1000)
    }
}
</script>
<template>
    <div class="pay-main">
        <el-button type="primary" icon="el-icon-phone">测试</el-button>
        <div class="pay-container">
            <div class="checkout-tit">
                <h4 class="tit-txt">
                    <span class="success-icon"></span>
                    <span class="success-info">订单提交成功，请您及时付款，以便尽快为您发货~~</span>
                </h4>
                <div class="paymark">
                    <span class="fl">请您在提交订单<em class="orange time">4小时</em>之内完成支付，超时订单会自动取消。订单号：<em>{{
                        orderId
                    }}</em></span>
                    <span class="fr"><em class="lead">应付金额：</em><em class="orange money">￥{{ payInfo.totalFee }}</em></span>
                </div>
            </div>
            <div class="checkout-info">
                <h4>重要说明：</h4>
                <ol>
                    <li>
                        尚品汇商城支付平台目前支持<span class="zfb">支付宝</span>支付方式。
                    </li>
                    <li>其它支付渠道正在调试中，敬请期待。</li>
                    <li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
                </ol>
                <h4>
                    支付宝账户信息：（很重要，<span class="save">请保存！！！</span>）
                </h4>
                <ul>
                    <li>支付帐号：11111111</li>
                    <li>密码：111111</li>
                    <li>支付密码：111111</li>
                </ul>
            </div>
            <div class="checkout-steps">
                <div class="step-tit">
                    <h5>支付平台</h5>
                </div>
                <div class="step-cont">
                    <ul class="payType">
                        <li><img v-lazy="pay1Img" alt="pay1" /></li>
                        <li><img v-lazy="pay2Img" alt="pay2" /></li>
                    </ul>
                </div>
                <div class="hr"></div>

                <div class="payshipInfo">
                    <div class="step-tit">
                        <h5>支付网银</h5>
                    </div>
                    <div class="step-cont">
                        <ul class="payType">
                            <li><img v-lazy="pay3Img" alt="test" /></li>
                            <li><img v-lazy="pay4Img" alt="test" /></li>
                            <li><img v-lazy="pay5Img" alt="test" /></li>
                            <li><img v-lazy="pay6Img" alt="test" /></li>
                            <li><img v-lazy="pay7Img" alt="test" /></li>
                            <li><img v-lazy="pay8Img" alt="test" /></li>
                            <li><img v-lazy="pay9Img" alt="test" /></li>
                            <li><img v-lazy="pay10Img" alt="test" /></li>
                            <li><img v-lazy="pay11Img" alt="test" /></li>
                            <li><img v-lazy="pay12Img" alt="test" /></li>
                            <li><img v-lazy="pay13Img" alt="test" /></li>
                            <li><img v-lazy="pay13Img" alt="test" /></li>
                            <li><img v-lazy="pay13Img" alt="test" /></li>
                        </ul>
                    </div>
                </div>
                <div class="hr"></div>

                <div class="submit">
                    <el-button class="btn" text @click="open">立即支付</el-button>
                </div>
                <div class="otherpay">
                    <div class="step-tit">
                        <h5>其他支付方式</h5>
                    </div>
                    <div class="step-cont">
                        <span><a href="weixinpay.html" target="_blank">微信支付</a></span>
                        <span>中国银联</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style lang="less" scoped>
.pay-main {
    margin-bottom: 20px;

    .pay-container {
        margin: 0 auto;
        width: 1200px;

        a:hover {
            color: #4cb9fc;
        }

        .orange {
            color: #e1251b;
        }

        .money {
            font-size: 18px;
        }

        .zfb {
            color: #e1251b;
            font-weight: 700;
        }

        .checkout-tit {
            padding: 10px;

            .tit-txt {
                font-size: 14px;
                line-height: 21px;

                .success-icon {
                    width: 30px;
                    height: 30px;
                    display: inline-block;
                    background: url(./images/icon.png) no-repeat 0 0;
                }

                .success-info {
                    padding: 0 8px;
                    line-height: 30px;
                    vertical-align: top;
                }
            }

            .paymark {
                overflow: hidden;
                line-height: 26px;
                text-indent: 38px;

                .fl {
                    float: left;
                }

                .fr {
                    float: right;

                    .lead {
                        margin-bottom: 18px;
                        font-size: 15px;
                        font-weight: 400;
                        line-height: 22.5px;
                    }
                }
            }
        }

        .checkout-info {
            padding-left: 25px;
            padding-bottom: 15px;
            margin-bottom: 10px;
            border: 2px solid #e1251b;

            h4 {
                margin: 9px 0;
                font-size: 14px;
                line-height: 21px;
                color: #e1251b;
            }

            ol {
                padding-left: 25px;
                list-style-type: decimal;
                line-height: 24px;
                font-size: 14px;
            }

            ul {
                padding-left: 25px;
                list-style-type: disc;
                line-height: 24px;
                font-size: 14px;
            }
        }

        .checkout-steps {
            border: 1px solid #ddd;
            padding: 25px;

            .hr {
                height: 1px;
                background-color: #ddd;
            }

            .step-tit {
                line-height: 36px;
                margin: 15px 0;
            }

            .step-cont {
                margin: 0 10px 12px 20px;

                ul {
                    font-size: 0;

                    li {
                        margin: 2px;
                        display: inline-block;
                        padding: 5px 20px;
                        border: 1px solid #ddd;
                        cursor: pointer;
                        line-height: 18px;
                    }
                }
            }
        }

        .submit {
            text-align: center;

            .btn {
                padding: 30px 45px;
                margin: 15px 0 10px;
                font: 18px "微软雅黑";
                font-weight: 700;
                border-radius: 0;
                background-color: #e1251b;
                border: 1px solid #e1251b;
                color: #fff;
                text-align: center;
                vertical-align: middle;
                cursor: pointer;
                user-select: none;
                text-decoration: none;
            }
        }
    }
}
</style>
  