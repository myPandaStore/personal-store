// 当前模块：API进行统一管理
import requests from "./request";

// 注册
export const reqUserResiter = (data) =>
  requests({
    url: `/api/user/register`,
    data,
    method: "post",
  });

// 登录
export const reqUserLogin = (data) =>
  requests({
    url: `/api/user/login`,
    data,
    method: "post",
  });

//退出登录
export const reqLogOut = () =>
  requests({
    url: `api/user/logout`,
    method: "get",
  });

//三级联动接口
export const reqCategoryList = () =>
  requests({
    url: "api/product/getBaseCategoryList",
    method: "get",
  });

// 获取首页 banner
export const reqBanner = () =>
  requests({
    url: "api/getBanner",
    method: "get",
  });

// 获取首页 floor banner
export const reqFloorBanner = () =>
  requests({
    url: "api/getFloorBanner",
  });

// my 开头的接口路径均需要携带 Authorization 字段
// 获取验证码
export const reqGetVerifyCode = (phone) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/sendCode/${phone}`,
    method: "post",
  });

// 获取用户信息
export const reqUserInfo = (data) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/getUserInfo`,
    data,
    method: "get",
  });

//获取搜索模块数据 地址：/api/list 请求方式：post 参数：需要带参数
//当前函数需要接收外部传递参数
//当前接口，给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: "/my/list",
    method: "post",
    data: params,
  });

//获取产品详情信息的接口
export const reqGoodsInfo = (skuId) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/item/${skuId}`,
    method: "get",
  });

//获取购物车列表数据接口
export const reqCartList = () =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: "/my/cartList",
    method: "get",
  });

//修改商品的选中状态
export const reqUpdateCheckedByid = (skuName, ischecked) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/cartList/checkCart/${skuName}/${ischecked}`,
    method: "get",
  });

//将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuName, skuNum) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/cartList/addToCart/${skuName}/${skuNum}`,
    method: "post",
  });

//删除购物产品的接口
export const reqDeleteCartBySkuName = (skuName) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/cartList/deleteCart/${skuName}`,
    method: "post",
  });

// 获取用户地址信息
export const reqAddressInfo = () =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: "/my/userAddress",
    method: "get",
  });

// 获取用户订单信息
export const reqOrderInfo = () =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: "/my/orderInfo",
    method: "get",
  });

// 提交订单的接口
export const reqSubmitOrder = (tradeNo, data) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: "post",
  });

// 获取支付信息
export const reqPayInfo = (orderId) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/pay/${orderId}`,
    method: "get",
  });

// 获取支付订单状态
export const reqPayStatus = (orderId) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/pay/status/${orderId}`,
    method: "get",
  });

// 获取个人中心的数据
export const reqMyOrderList = (page, limit) =>
  requests({
    headers: {
      Authorization: localStorage.getItem("TOKEN"),
    },
    url: `/my/order//${page}/${limit}`,
    method: "get",
  });
