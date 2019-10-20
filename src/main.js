'use strict'
import Vue from 'vue'
import App from './App'
import router from './router'

/**
 * 引入vuex
 */
import store from './store'
/**
 * 引入Element
 */
import ElementUI from 'element-ui'
// 按需引入
// import { Button, Select, Loading, MessageBox, Notification, Message } from 'element-ui'
// Vue.use(Button)
// Vue.use(Select)
// Vue.use(Loading.directive)
// Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
// Vue.prototype.$message = Message
/**
 * axios
 */
import Axios from 'axios'
/**
 * 引入iconfont
 */
import MuIconfont from '@/components/Iconfont'
import MuHeader from '@/components/Header'
import MuFooter from '@/components/Footer'
Vue.use(ElementUI)
Vue.component('mu-iconfont', MuIconfont)
Vue.component('mu-header', MuHeader)
Vue.component('mu-footer', MuFooter)
Vue.prototype.$http = Axios

/**
 * 路由发生变化修改页面title
 */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // meta为false或者为空 并且 没有token 的返回登陆页
  if (!to.meta.auth && !localStorage.token) {
    return next('login')
  }
  // 如果有token,则默认请求获取数据
  if (localStorage.token) {
    store.dispatch('userInfo')
  }
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  components: { App },
  render: h => h(App)
}).$mount('#app')
