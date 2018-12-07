import Vue from 'vue'
import Router from 'vue-router'

import  bookcase from '../components/bookcaseView/bookcaseView.vue'
import  selectView from '../components/selectView/selectView.vue'
import  library from '../components/libraryView/libraryView.vue'
import  bookcontent from '../components/bookcaseView/bookcontent.vue'
import  contentBtn from '../components/bookcaseView/content.vue'
import today from '../components/details/today-details.vue'
import searchdetails from '../components/details/search-details.vue'
import more from '../components/viewMore/more.vue'
import list from '../components/libraryView/librarylist.vue'
import loginA from '../components/loginView/loginA.vue'
import loginB from '../components/loginView/loginB.vue'
import settingDrawer from '../components/settingDrawer/SettingDrawer.vue'
import search from '../components/search/search.vue'
import searchBtn from '../components/search/searchBtn.vue'
import searchVn from '../components/search/searchVn.vue'
import searchResult from '../components/search/searchResult.vue'


Vue.use(Router)



export default new Router({
  routes: [
    {path: '/bookcase', name: 'bookcase ', component:bookcase},
    {path: '/selectView', name: 'selectView', component:selectView},
    {path: '/library', name: 'library', component: library},
    {path: '/bookcontent', name: 'bookcontent', component:bookcontent},
    {path: '/contentBtn', name: 'contentBtn', component:contentBtn},
    {path: '/settingDrawer', name: 'settingDrawer', component:settingDrawer},
    {path: '/search', name: 'search', component:search},
    {path: '/searchBtn', name: 'searchBtn', component:searchBtn},
    {path: '/searchVn', name: 'searchVn', component:searchVn},
    {path: '/searchResult', name: 'searchResult', component:searchResult},
    {path: '/more', name: 'more', component:more},
    {path: '/list', name: 'list', component:list},
    {path: '/loginA', name: 'loginA', component:loginA},
    {path: '/loginB', name: 'loginB', component:loginB},
    {path: '/today', name: 'today', component:today},
    {path: '/searchdetails', name: 'searchdetails', component:searchdetails}
  ]
})
