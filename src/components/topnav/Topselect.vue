<template><!--主页顶部栏-->
    <!--页面顶部-->
<div class="topselect">
    <mu-button icon color="warning"  slot="left" class="icon" @click="showDrawer(true)"><!--头像组件-->
      <mu-icon  color="#fff" value="person_outline"></mu-icon>
    </mu-button>

    <div class="search" @click="go">
      <mu-button icon color="warning" class="icon2" ><!--搜索组件-->
        <mu-icon  :size="30" color="" value="search"></mu-icon>
      </mu-button>
      <input type="text" placeholder="请输入书名或者作者">
    </div>
</div>

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
  .topselect{
    background: #2955F3;
    background: linear-gradient(to right, #2955F3 0%, #7db8e7 70%);
  }

  .icon{
    border:2px solid rgba(255,255,255,0.7);
    width: 35px;
    height: 35px;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 20px;
  }
  .mu-appbar {
    /*background: #2955F3;*/
    /*background: linear-gradient(to right, #2955F3 0%, #7db8e7 70%);*/
    height: 40px;
  }
  .search{
    display: inline-block;
    margin-top: 8px;
    height: 35px;
    width: 250px;
    line-height: 40px;
    vertical-align: top;
    background: #fff;
    border-radius: 5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .icon2{
    width: 40px;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
  }
  input{
    outline:none;
    line-height: 32px;
    height: 32px;
    vertical-align: top;
    border: none;
  }


</style>
