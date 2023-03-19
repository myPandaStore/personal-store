import express from "express";
import {
  sendVerifyCode,
  getUserInfo,
  getSearchInfo,
  getCartList,
  checkCart,
  addToCart,
  deleteCart
} from "../router_handler/userinfo.js";

const router = express.Router();

// 发送验证码
router.post("/sendCode/:phoneNumber", sendVerifyCode);

// 提供用户信息
router.get("/getUserInfo", getUserInfo);

// 根据用户搜索提供 search 模块数据
router.post("/list", getSearchInfo);

// 提供购物车列表数据
router.get("/cartList", getCartList);

// 根据前端提供的 skuid ischecked 字段
// 判断接下来成功添加到购物车的产品数量
router.get("/cartList/checkCart/:skuName/:isChecked", checkCart);

// 获取更新某一个产品的个数
router.post("/cartList/addToCart/:skuName/:skuNum", addToCart);

// 删除某一个购物产品
router.post("/cartList/deleteCart/:skuName", deleteCart);
// 将路由对象共享出去
export default router;
