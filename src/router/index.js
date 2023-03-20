// @ts-nocheck
import {
  createRouter,
  createWebHistory,
  // Router
} from "vue-router";

// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location, onResolve, onReject) {
//     if (onResolve || onReject) {
//         return originalPush.call(this, location, onResolve, onReject);
//     }
//     return originalPush.call(this, location).catch(err => err);
// };

// 路由懒加载
const Regist = () => import("@/pages/Regist/Regist.vue");
const Login = () => import("@/pages/Login/Login.vue");
const Home = () => import("@/pages/Home/Home.vue");
const Search = () => import("@/pages/Search/Search.vue");
const ShopCart = () => import("@/pages/ShopCart/ShopCart.vue");
const Trade = () => import("@/pages/Trade/Trade.vue");
const Pay = () => import("@/pages/Pay/Pay.vue");
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
    path: "/detail/:id",
    component: Detail,
    name: "Detail",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
