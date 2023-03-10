// @ts-nocheck
import {
    createRouter,
    createWebHistory,
    // Router
} from 'vue-router'

// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location, onResolve, onReject) {
//     if (onResolve || onReject) {
//         return originalPush.call(this, location, onResolve, onReject);
//     }
//     return originalPush.call(this, location).catch(err => err);
// };

// 路由懒加载
const Regist = () => import("@/pages/Regist/Regist.vue")
const Home = () => import("@/pages/Home/Home.vue")
const Search = () => import("@/pages/Search/Search.vue")
const Detail = () => import("@/pages/Detail/Deatil.vue")


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/regist',
        component: Regist,
        name: 'Regist',
        meta: {
            show: false
        }
    },
    {
        path: '/home',
        component: Home,
        name: 'Home',
    },
    {
        path: '/search/:keyword',
        component: Search,
        name: 'Search',
    },
    {
        path: '/detail/:id',
        component: Detail,
        name: 'Detail'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router