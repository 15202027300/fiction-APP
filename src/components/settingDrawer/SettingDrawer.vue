<template>
  <!--mu-drawer抽屉导航       ==> 用于侧边栏-->
  <mu-drawer class="test" :open="open" :docked="false"  @close="close(false)" >
<!--登录页面-->
  <div class="login">

    <div class="log1" v-if="act===0"  @click="go">
      <mu-button icon color="warning"
                 slot="left" class="icon" ><!--头像组件-->
        <mu-icon :size="70" color="blue" value="person_outline"></mu-icon>
      </mu-button>
      <div class="loginbox">
        <div>立即登录</div>
        <div>账户信息，购买记录云同步</div>
      </div>
    </div>



    <div class="log2"  v-if="act===1">
        <mu-button icon color="warning"
                   slot="left" class="icon" ><!--头像组件-->
          <mu-icon :size="70" color="#829833" value="adb"></mu-icon>
        </mu-button>


      <div class="loginbox2">
        <div class="lt"><span>小哥~</span> <span></span> </div>
        <div class="lm"><span></span><span></span><span></span></div>
        <div class="txt">暂无阅读时长，去畅谈好书</div>
      </div>

    </div>

  </div>

<!--列表栏-->
    <mu-list class="setlist">
      <mu-list-item button >
        <mu-icon color="#fff" value="payment"></mu-icon>
        <mu-list-item-title class="list">我的账户</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button >
        <mu-icon color="#fff" value="remove_red_eye"></mu-icon>
        <mu-list-item-title class="list">我的包月</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button >
        <mu-icon color="#fff"  value="color_lens"></mu-icon>
        <mu-list-item-title class="list">我的超值包</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button >
        <mu-icon color="#fff" value="folder_special"></mu-icon>
        <mu-list-item-title class="list"> 我的消息</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button >
        <mu-icon color="#fff"  value="crop_original"></mu-icon>
        <mu-list-item-title class="list">浏览历史</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button >
        <mu-icon color="#fff"  value="folder_open"></mu-icon>
        <mu-list-item-title class="list">我的收藏</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon  color="#fff" value="settings_input_antenna"></mu-icon>
        <mu-list-item-title class="list">我的基因</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button >
        <mu-icon color="#fff" value="remove_red_eye"></mu-icon>
        <mu-list-item-title class="list">成为作家</mu-list-item-title>
      </mu-list-item>
    </mu-list>

<!--底部功能栏-->
    <div class="footer">
      <div class="btn">
        <mu-icon class="icon1" :size="20" value="brightness_3"></mu-icon>
        <span class="name">夜间</span>
      </div>
      <div class="btn">
        <mu-icon class="icon1"  :size="20" value="settings"></mu-icon>
        <span class="name">设置</span>
      </div>

    </div>
  </mu-drawer>
</template>

<script>
  import {mapState, mapMutations,mapActions} from 'vuex'
  import {TOGGLE_SETDRAWER} from '../../store/mutation-type'  //聊天框

    export default {
      name: 'SettingDrawer',
      data(){
          return{
              act:0
          }
      },
      computed: mapState({
        open: 'setDrawer',   //默认值false
//        self: state => state.data.self ///json的self/
      }),
      methods: {
          ...mapMutations({
            close: TOGGLE_SETDRAWER  //点击事件，点击弹出侧边栏
          }),
          go(){
              this.$router.push({name:'loginA'})
              this.act=1
          }

        }
    }

</script>

<style scoped>
  .test{
    background-color: #54a2ec;
    background: linear-gradient(to right, #54a2ec 0%, #7db8e7 20%);
    color: #fff;
  }
  .icon{
    border:2px solid rgba(255,255,255,0.7);
    width: 65px;
    height: 65px;
    margin-top:40px;
    margin-left: 1px;
    background: #fff;
  }
  .loginbox{
    display: inline-block;
    /*float: right;*/
    margin-right: 10px;
    margin-top:40px;
    /*background: #ccc;*/
  }
  .loginbox div:nth-child(1){
    display: inline-block;
    font-size: 20px;
    /*color: red;*/
  }

  /*登录后*/
  .log2{
    /*float: left;*/
  }
  .loginbox2{
    display: inline-block;
    /*float: left;*/
    /*margin-left: px;*/
    margin-top: 40px;
    vertical-align: top;
  }
  .loginbox2 .lt{
    font-size: 24px;
    font-weight: 700;
  }

  .lm{

  }
  .lm span:nth-child(1){
    width: 50px;
    height: 20px;
    display: inline-block;
    background: url("../../../static/img/rank_icon_with_star_lv_1.png");
    background-size: 100% 100%;
  }
  .lm span:nth-child(2){
    margin-left: 10px;
    width: 30px;
    height: 20px;
    display: inline-block;
    background: url("../../../static/img/vip2.png");
    background-size: 100% 100%;
  }
  .lm span:nth-child(3){
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url("../../../static/img/bookvip_none.png");
    background-size: 100% 100%;
    margin-left: 10px;
  }
  .txt{
    font-size: 12px;
  }

  /*列表*/
  .setlist{
    color: #fff;

  }
  .list{
    color: #fff;
    margin-left: 20px;
  }

  .setlist mu-item-title {
    margin-left: 10px;

  }
  .footer{
    position: absolute;
    bottom: 10px;
    left: 0;
  }
  .footer .btn{
    display: inline-block;
    margin-left: 10px ;
    width: 80px;
    text-align: center;
  }
  .icon1{
    line-height: 25px;
    vertical-align: top;
  }

  .btn .name {
    font-size: 16px;
    line-height:25px;
  }
</style>
