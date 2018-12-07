/**
 * Created by 小哥 on 2018-11-09.
 */
import  * as types from './mutation-type'

export default {
  [types.RECEVIVE_DATA](state,data){//data数据
    state.data=data
  },

  [types.REFRESH_AJAX](state,stutas){
    state.isAjax=stutas       //数据请求
  },

  [types.SET_BOOK_INFO] (state, bookInfo) {
    state.bookInfo = bookInfo
  },


  [types.SET_INDEX] (state, bookInfo) {
    let flag = false
    state.bookshelf.forEach((val) => {
      if (val._id === bookInfo._id) {
        flag = true
        // Object.assign(this.bookInfo)
      }
    })
    if (flag) {
      let index = state.bookshelf.findIndex(m => {
        return m._id === bookInfo._id
      })
      Vue.set(state.bookshelf[index], 'readedLastChapter', bookInfo.readedLastChapter)
    }
  },

  [types.TOGGLE_SETDRAWER](state, val) { // 显示/隐藏 侧边栏
    state.setDrawer = val
  }
}
