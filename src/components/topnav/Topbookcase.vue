<template><!--主页顶部栏-->
  <mu-appbar style="width: 100%;">   <!--页面顶部-->

    <mu-button icon color="warning"  slot="left" class="icon" @click="showDrawer(true)"><!--头像组件-->
      <mu-icon  color="#fff" value="person_outline"></mu-icon>
    </mu-button>

    <mu-button icon color="warning" slot="right" @click="go"><!--搜索组件-->
      <mu-icon  color="#fff" value="search"></mu-icon>
    </mu-button>

    <mu-menu placement="left-end" cover slot="right">
      <mu-button icon color="warning" ><!--更多组件-->
        <mu-icon  color="#fff" value="more_vert"></mu-icon>
      </mu-button>
      <mu-list slot="content">
        <mu-list-item button icon>
          <mu-icon  color="#7db8e7" value="phone_iphone" style="margin-right:5px;"></mu-icon>
          <mu-list-item-title color="blue">导入书籍</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-icon  color="#7db8e7" value="equalizer" style="margin-right:5px;"></mu-icon>
          <mu-list-item-title>按分组找书</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-icon  color="#7db8e7" value="settings" style="margin-right:5px;"></mu-icon>
          <mu-list-item-title>批量管理</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-icon  color="#7db8e7" value="notifications" style="margin-right:5px;"></mu-icon>
          <mu-list-item-title>更新提醒</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-icon  color="#7db8e7" value="fullscreen"style="margin-right:5px;"></mu-icon>
          <mu-list-item-title>扫一扫</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-menu>
  </mu-appbar>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import {TOGGLE_SETDRAWER} from '../../store/mutation-type'

    export default {
        name: 'TopNavigation',
        methods: {
          ...mapMutations({showDrawer: TOGGLE_SETDRAWER}), //点击连接侧边栏
          go(){
//              this.$router.push({name:'search'})
//              this.$router.push({name:'searchBtn'})
              this.$router.push({name:'searchVn'})
          }
        }
    }
</script>

<style scoped>
  .icon{
    border:2px solid rgba(255,255,255,0.7);
    width: 30px;
    height: 30px;
    margin-left: 15px;
  }
  .mu-appbar {
    background: #2955F3;
    background: linear-gradient(to right, #2955F3 0%, #7db8e7 70%);
  }

  .mu-appbar .title {
    color: white;
    text-align: center;
  }
  .mu-appbar .mu-avatar {
    margin-left: 12px;
  }
</style>
