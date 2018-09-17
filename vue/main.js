// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'//引入路由模块
import Cart from './components/Cart'
import Home from './components/Home'
import axios from 'axios'
import VueAxios from 'vue-axios'//配置axios插件

Vue.config.productionTip = false
Vue.use(VueRouter)//注明使用
Vue.use(VueAxios, axios)

const router = new VueRouter({
	routes:[
        {path:"/",component:Home},
        {path:"/cart",component:Cart}//cart是路由名字
	],
	mode:"history"//去掉井号
})
//全局注册组件
// Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
  	URL: 'http://192.168.0.134:8082'
  },
  components: { App },
  template: '<App/>'
})

