// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'

import routes from './base/router'
import store from './vuex/store'
import Vuex from 'vuex'
import utilApi from './common/utils';
import * as systemApi from './base/api/system';

// import Mock from './mock'
// Mock.bootstrap();


Vue.config.productionTip = false

// 在Vue中全局使用mintui
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)


//  将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用ajax方法了
import vueResource from 'vue-resource';
import base64 from 'js-base64'
let sysConfig = require('@/../config/sysConfig')
let openAuthenticate = sysConfig.openAuthenticate
let openAuthorize = sysConfig.openAuthorize
Vue.use(vueResource);
/* eslint-disable no-new */
const router = new VueRouter({
  routes:routes
})


import axios from 'axios'
import { Message } from 'element-ui';

function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}



// router.beforeEach((to, from, next) => {
//   if(openAuthenticate){
//     // console.log(to)
//     // console.log(from)
//     //***********身份校验***************
//     let activeUser
//     let uid
//     try{
//       activeUser = utilApi.getActiveUser()
//       uid = utilApi.getCookie("uid")
//     }catch(e){
//       //alert(e)
//     }
//     if(activeUser && uid && uid == activeUser.uid) {
//       next();
//     }else if(to.path =='/login' || to.path =='/logout'){
//       next();
//     }else if(uid){
//       //请求获取jwt
//       systemApi.getjwt().then((res)=>{
//         if(res.success){
//           let jwt = res.jwt;
//           let activeUser = utilApi.getUserInfoFromJwt(jwt)
//           if(activeUser){
//             utilApi.setUserSession("activeUser",JSON.stringify(activeUser))
//           }
//           next();
//         }else{
//           //跳转到统一登陆
//           window.location = "http://ucenter.xuecheng.com/#/login?returnUrl="+Base64.encode(window.location)
//         }
//       })
//     }else{
//       //跳转到统一登陆
//       window.location = "http://ucenter.xuecheng.com/#/login?returnUrl="+ Base64.encode(window.location)
//     }
//   }else{
//     next();
//   }
// });
//
// // 添加请求拦截器，实现http请求添加Authorization头信息
// axios.interceptors.request.use(function (config) {
//   // 在发送请求向header添加jwt
//   let jwt = utilApi.getJwt()
//   if(jwt){
//     config.headers['Authorization'] = 'Bearer '+jwt
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });
//
//
// // 响应拦截
// axios.interceptors.response.use(data => {
//   console.log("data=",data)
//   if(data && data.data){
//     if(data.data.code && data.data.code =='10001'){
//       //需要登录
//       // router.push({
//       //   path: '/login',
//       //   query: {returnUrl: Base64.encode(window.location)}
//       // })
//       window.location = "http://cms.xuecheng.com/#/login?returnUrl="+ Base64.encode(window.location)
//     }else if(data.data.code && data.data.code =='10002'){
//       Message.error('您没有权限操作该选项');
//       return
//     }else if(data.data.code && data.data.code =='10003'){
//       Message.error('认证被拒绝，请重新登录重试！');
//       return
//     }
//   }
//   return data
// })

//axios请求超时设置
// axios.defaults.retry = 5;
// axios.defaults.retryDelay = 2000;
// axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
//   var config = err.config;
//   // If config does not exist or the retry option is not set, reject
//   if(!config || !config.retry) return Promise.reject(err);
//
//   // Set the variable for keeping track of the retry count
//   config.__retryCount = config.__retryCount || 0;
//
//   // Check if we've maxed out the total number of retries
//   if(config.__retryCount >= config.retry) {
//     // Reject with the error
//     Message.error('系统忙，请稍后重试');
//     return Promise.reject(err);
//   }
//
//   // Increase the retry count
//   config.__retryCount += 1;
//
//   // Create new promise to handle exponential backoff
//   var backoff = new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve();
//     }, config.retryDelay || 1);
//   });
//
//   // Return the promise in which recalls axios to retry the request
//   return backoff.then(function() {
//     return axios(config);
//   });
// });


new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: c => c(App)
})
