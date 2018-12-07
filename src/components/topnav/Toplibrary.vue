<template><!--主页顶部栏-->
  <mu-appbar style="width: 100%;">   <!--页面顶部-->

    <mu-button icon color="warning"  slot="left" class="icon" @click="showDrawer(true)"><!--头像组件-->
      <mu-icon  color="#fff" value="person_outline"></mu-icon>
    </mu-button>
     <div class="title">   书库</div>
    <mu-button icon color="warning" slot="right" @click="go" ><!--搜索组件-->
      <mu-icon  color="#fff" value="search"></mu-icon>
    </mu-button>
  </mu-appbar>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import {TOGGLE_SETDRAWER} from '../../store/mutation-type'

    export default {
        name: 'TopNavigation',
        methods:{
          ...mapMutations({showDrawer:TOGGLE_SETDRAWER}),  //点击连接侧边栏
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
