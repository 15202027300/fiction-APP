// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

import Muse from './muse-ui.config'
Vue.use(Muse)


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//轮播图插件
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

//直接分发action
// store.dispatch('getAllData',axios)   //dispath 连接到 action

//全局监听页面跳转
// router.beforeEach((to,from,next)=>{
//   console.log(to.name);
//   store.commit('CHANGE_NAV_TITLE',to.name)   //commit连接到mutation
//   next()
// })

//将默认/路径默认为bookcase
router.replace('bookcase')
