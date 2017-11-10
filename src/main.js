import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import axios from 'axios'
import httpUrl from './url/url'
import element from 'element-ui'
import './style/common.less'
import './style/simple-line-icons.css'

// import './config/rem'
Vue.prototype.$http = axios
Vue.use(VueRouter, axios)
Vue.use(element, { size: 'small' })
const router = new VueRouter({
    routes
})
new Vue({
    router,
}).$mount('#main')