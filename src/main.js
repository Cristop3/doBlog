// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入路由
import router from './router/router.js'

//引入axios http模块
import axios from 'axios'
//改写vue的原型链
Vue.prototype.$ajax = axios

// axios.interceptors.response.use(
//   response => {
//     if(response.data.code == 4002){
//       alert(4002)
//     }else{
//       return response
//     }

//   },
//   error => {
//     if(error.message == 'Network Error'){
//       alert('服务连接关闭')
//     }
//     if(error.response){
//       let errmsg = ""
//       switch(error.response.status){
//         case 500:
//       }
//     }
//   }
// )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//使用axios 如果使用的是resource的话 可以使用vue.use
//但是axios不支持这种格式
//要想在后面的所有组件中发起http请求的话 可以修改vue原型链
//Vue.use(axios)
