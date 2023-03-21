// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
import { userStore } from "../stores/user";

// 路由懒加载
const Regist = () => import("@/pages/Regist/Regist.vue");
const Login = () => import("@/pages/Login/Login.vue");
const Home = () => import("@/pages/Home/Home.vue");
const Search = () => import("@/pages/Search/Search.vue");
const ShopCart = () => import("@/pages/ShopCart/ShopCart.vue");
const Trade = () => import("@/pages/Trade/Trade.vue");
const Pay = () => import("@/pages/Pay/Pay.vue");
const PaySuccess = () => import("@/pages/PaySuccess/PaySucess.vue");
const Center = () => import("@/pages/Center/Center.vue");
const MyOrder = () => import("@/pages/Center/MyOrder.vue");
const GroupOrder = () => import("@/pages/Center/GroupOrder.vue");
const Detail = () => import("@/pages/Detail/Deatil.vue");

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/regist",
    component: Regist,
    name: "Regist",
    meta: {
      show: false,
    },
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: {
      show: false,
    },
  },
  {
    path: "/home",
    component: Home,
    name: "Home",
    meta: {
      show: true,
    },
  },
  {
    path: "/search/:keyword",
    component: Search,
    name: "Search",
    meta: {
      show: true,
    },
  },
  {
    path: "/shopcard/:title",
    component: ShopCart,
    name: "ShopCart",
    meta: {
      show: true,
    },
  },
  {
    path: "/trade",
    component: Trade,
    name: "Trade",
    meta: {
      show: true,
    },
  },
  {
    path: "/pay",
    component: Pay,
    name: "Pay",
    meta: {
      show: true,
    },
  },
  {
    path: "/PaySuccess",
    component: PaySuccess,
    name: "PaySuccess",
    meta: {
      show: true,
    },
    beforeEnter: (to, from) => {
      if (from.path == "/pay") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    path: "/center",
    component: Center,
    name: "Center",
    meta: {
      show: true,
    },
    children: [
      {
        path: "/center/myOrder",
        component: MyOrder,
      },
      {
        path: "/center/groupOrder",
        component: GroupOrder,
      },
    ],
  },
  {
    path: "/detail/:id",
    component: Detail,
    name: "Detail",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局前置守卫
router.beforeEach((to, from) => {
  let TOKEN = localStorage.getItem("TOKEN");
  const useUserStore = userStore();
  let name = useUserStore.userName;
  // 用户已经登陆
  if (TOKEN) {
    // 已经登陆注册，不能在去登陆注册页面
    if (to.path == "/login" || to.path == "/regist") {
      return false;
    } else {
      // 登陆了且拥有用户信息放行
      if (name) {
        return true;
      }
    }
  } else {
    // 未登陆：不能去交易相关、支付相关、个人中心
    let toPath = to.path;
    if (
      toPath.indexOf("/trade") !== -1 ||
      toPath.indexOf("/pay") !== -1 ||
      toPath.indexOf("/center") !== -1
    ) {
      return false;
    } else {
      return true;
    }
  }
});

export default router;
