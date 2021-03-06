'use strict'
import Vue from 'vue'
import Router from 'vue-router'
// 全加载
import Index from './views/Index'
// 懒加载
// const Index = () => import('./views/Index')
const Reg = () => import('./views/Reg')
const Login = () => import('./views/Login')
const Test = () => import('./views/Test')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '首页',
        // true为不进行权限验证,false或不写默认进行验证
        auth: true
      }
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
      meta: {
        title: '用户注册',
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '用户登录',
        auth: true
      }
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        title: '测试页面',
        auth: true
      }
    },
    // 404页面 或 重定向到首页
    {
      path: '*',
      redirect: '/'
    }
  ]
})
