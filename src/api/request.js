//对于axios进行封装
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"
//引入store,这里用 pinia代替
// import store from '@/store'

//1.利用axios对象的方法create,,去创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    baseURL: '/api',
    //代表请求超时的时间5s
    timeout: 5000,
})

//请求拦截器：在发送请求之前，请求拦截器可以监测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    //config：配置对象，对象里面headers很重要
    //进度条开始动
    // if(store.state.detail.uuid_token) {
    //     //请求头添加一个字段：与后台共同确定的
    //     config.headers.userTempId = store.state.detail.uuid_token
    // }
    //需要携带token带给服务器
    // if(store.state.user.token) {
    //     config.headers.token = store.state.user.token
    // }
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调
    //进度条结束
    nprogress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

//对外暴露
export default requests