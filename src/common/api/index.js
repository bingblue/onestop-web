'use strict'
let hostname = window.location.hostname
// 默认本地环境
let baseUrl = 'http://rap2api.taobao.org/app/mock/83751/api/'
// 测试环境
if (hostname === 'test.e3-expo.com') baseUrl = 'http://test.e3-expo.com/api/'
// 正式环境
if (hostname === 'e3-expo.com') baseUrl = 'http://e3-expo.com/api/'

export default {
  // 登录
  login: baseUrl + 'auth/login',
  // 获取用户信息
  userInfo: baseUrl + 'user/userInfo',
  // 获取短信验证码
  sendMsgCode: 'http://106.14.2.143:18090/e3-webapp/veriCode',
  // 验证短信
  checkMsgCode: 'http://106.14.2.143:18090/e3-webapp/checkVeriCode'
}
