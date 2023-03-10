// @ts-nocheck
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import mixin from '@/mixins/index';
import lazyDirective from './directives/lazy.ts'
import router from './router';
import TypeNav from '@/components/TypeNav.vue'
import Carousel from '@/components/Carousel.vue'

const app = createApp(App)

// 注册全局组件
app.component('TypeNav', TypeNav)
app.component('Carousel', Carousel)

// 图片webp处理
app.mixin(mixin)

// 图片懒加载
app.directive('lazy', lazyDirective)

// 路由
app.use(router);

app.mount("#app")
