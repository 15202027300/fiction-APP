/**
 * Created by 小哥 on 2018-11-09.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import  getters from './getters'
import  actions from './actions'
import  mutations from './mutations'

Vue.use(Vuex)

const state={
  data:{
    bookcase:[]
  },
  setDrawer:false, //是否进入侧边栏
  isAjax: true , //判断是否正在请求网络数据

  bookRealId: '', // 保存书的源Id
  bookId: '', // 保存书的id
  bookInfo: {}, // 存书的信息
  bookshelf: [], // 保存书架的内容
}

export default  new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
