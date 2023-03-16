//对于axios进行封装
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import "nprogress/nprogress.css"
import {
    getToken
} from '../utils/tool'
//引入store,这里用 pinia代替
// import store from '@/store'

const requests = axios.create({
    timeout: 5000,
})

requests.interceptors.request.use((config) => {
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})

//对外暴露
export default requests