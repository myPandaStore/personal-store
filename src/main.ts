// @ts-nocheck
import {
    createApp
} from 'vue'
import App from './App.vue'
import mixin from '@/mixins/index';
import lazyDirective from './directives/lazy.ts'
import router from './router';
import TypeNav from '@/components/TypeNav.vue'
import Carousel from '@/components/Carousel.vue'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import { createPinia } from 'pinia'


// 定义规则
defineRule('required', required);
defineRule('email', email);


// 配置错误提示
configure({
    generateMessage: localize({
        en: {
            messages: {
                required: 'This field is required.',
                email: 'Please enter a valid email address.'
            }
        }
    })
});
setLocale('en');

const app = createApp(App)



// 注册全局组件
app.component('TypeNav', TypeNav)
app.component('Carousel', Carousel)
// 注册全局组件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)



// 图片webp处理
app.mixin(mixin)

// 图片懒加载
app.directive('lazy', lazyDirective)

// 路由
app.use(router);

// 集中式状态管理
app.use(createPinia())

app.mount("#app")