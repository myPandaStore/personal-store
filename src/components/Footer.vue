<script setup lang="ts">
// @ts-ignore
import img from "@/assets/weChat.jpg";
import { ref } from "vue";
const weChatImg = ref<string>(img);
</script>
<template>
  <div class="footer">
    <div class="footer_list">
      <div class="footer_list_item">
        <ul>
          <h4>购物指南</h4>
          <li>购物流程</li>
          <li>会员介绍</li>
          <li>生活旅行/团购</li>
          <li>常见问题</li>
          <li>购物指南</li>
        </ul>
      </div>
      <div class="footer_list_item">
        <ul>
          <h4>配送方式</h4>
          <li>上门自提</li>
          <li>211限时达</li>
          <li>配送服务查询</li>
          <li>配送费收取标准</li>
          <li>海外配送</li>
        </ul>
      </div>
      <div class="footer_list_item">
        <ul>
          <h4>支付方式</h4>
          <li>货到付款</li>
          <li>在线支付</li>
          <li>分期付款</li>
          <li>邮局汇款</li>
          <li>公司转账</li>
        </ul>
      </div>
      <div class="footer_list_item">
        <ul>
          <h4>售后服务</h4>
          <li>售后政策</li>
          <li>价格保护</li>
          <li>退款说明</li>
          <li>返修/退换货</li>
          <li>取消订单</li>
        </ul>
      </div>
      <div class="footer_list_item">
        <ul>
          <h4>特色服务</h4>
          <li>夺宝岛</li>
          <li>DIY装机</li>
          <li>延保服务</li>
          <li>尚品汇E卡</li>
          <li>尚品汇通信</li>
        </ul>
      </div>
      <div class="footer_list_item">
        <img v-lazy="weChatImg" alt="weChat图片" />
      </div>
    </div>
    <div class="footer_copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>关于我们</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>友情链接</li>
        <li>关于我们</li>
        <li>营销中心</li>
        <li>友情链接</li>
        <li>关于我们</li>
      </ul>
      <p>地址:北京市昌平区宏福科技园综合楼6层</p>
      <p>京ICP备19006430号</p>
    </div>
  </div>
</template>
<style lang="less">
.footer {
  background: #eaeaea;
  padding: 0 130px;

  &_list {
    display: flex;
    justify-content: space-around;
    padding: 20px 20px 20px 40px;
    border-top: 1px solid #e4e1e1;
    border-bottom: 1px solid #e4e1e1;

    &_item {
      &:last-child {
        width: 120px;

        &>img {
          width: 100%;
        }
      }

      &>ul {
        list-style: none;

        &>h4 {
          margin-bottom: 0;
        }
      }
    }
  }

  &_copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    &>ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0 190px;

      &>li {
        padding: 0 6px;
        border-right: 1px solid #666;
      }
    }

    &>p {
      margin-top: 0;
    }
  }
}</style>