/**
 * Created by 小哥 on 2018-11-19.
 */
// 方法  dispath
import * as types from './mutation-type'

export default {
  async getAllData({commit}, axios) { //es7 async await  分发封装action
    commit(types.REFRESH_AJAX, true)  //正在请求

    let bookcase = await axios.get('./api/bookcase')  //连接数据
    // let friends = await axios.get('./api/friends')
    bookcase = bookcase.data.data
    // friends = friends.data.data
    commit(types.RECEVIVE_DATA, ['bookcase'])  //
    commit(types.REFRESH_AJAX, false)  //请求完毕
  }
}

