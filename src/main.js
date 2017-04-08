// 引用 vue
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)
// 入口文件为src/App.vue
import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
// 引用API文件
import api from './config/api'
// 分页组件
import Pagination from './components/pagination'
Vue.component('pagination', Pagination)
// 将api文件绑定到全局
Vue.prototype.$api = api
// 使用配置文件规则
const router = new VueRouter({
  routes
})
// 跑起来
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
