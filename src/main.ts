// @ts-nocheck
import {
    createApp
} from 'vue'
import App from './App.vue'
import lazyDirective from './directives/lazy.ts'
import webpDirective from "./directives/webp"
import validateDirective from "./directives/validate"
import router from './router';
import TypeNav from '@/components/TypeNav.vue'
import Carousel from '@/components/Carousel.vue'
import { Field, Form, ErrorMessage } from 'vee-validate';
import { createPinia } from 'pinia'

const app = createApp(App)

// 注册全局组件
app.component('TypeNav', TypeNav)
app.component('Carousel', Carousel)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

// 图片webp处理
app.directive('webp', webpDirective)
// 图片懒加载
app.directive('lazy', lazyDirective)
// 表单验证
app.directive("validate",validateDirective)

// 路由
app.use(router);

// 集中式状态管理
app.use(createPinia())

app.mount("#app")