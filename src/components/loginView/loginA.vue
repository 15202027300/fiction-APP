<template>
  <div class="login">
    <div class="pos">
      <mu-appbar style="width: 100%;" color="blue" >
        <mu-button icon slot="left" @click="goback">
          <mu-icon value="chevron_left" color="#fff" :size="40" ></mu-icon>
        </mu-button>
        <div class="name">账号登录</div>
        <mu-button icon slot="right">
        </mu-button>
      </mu-appbar>

      <div class="img">
        <img src="../../../static/img/login_logo.png">
      </div>


      <mu-flex justify-content="center" @click="openSimpleDialog">
        <div class="qqbtn">
          <div class="qq">
            <img src="../../../static/img/sign_commit_qq.png" >
            <span>QQ登录</span>
          </div>
        </div>
      </mu-flex>
      <!--<mu-dialog title="登录" width="360" :open.sync="openSimple">-->
         <!--QQ是否登录？-->
        <!--<mu-button slot="actions" flat color="primary" @click="login">确定</mu-button>-->
      <!--</mu-dialog>-->



        <mu-flex justify-content="center" @click="openSimpleDialog">
          <div class="wxbtn">
            <div class="wx">
              <img src="../../../static/img/weixin.png" >
              <span>微信登录</span>
            </div>
          </div>
        </mu-flex>
        <mu-dialog title="登录" width="360" :open.sync="openSimple">
          是否登录？
          <mu-button slot="actions" flat color="primary" @click="login">确定</mu-button>
        </mu-dialog>


      <div class="other">
        其他登录方式&gt;
      </div>

      <div class="lie">
        <img src="../../../static/img/login_tips.png">
        <span> QQ和微信登录是2个独立账号，账户信息不互通</span>
      </div>



      <div class="now">
        <span class="bgbtn" @click="nowbtn" :class="{active:item===0}"></span>
        <span class="txt">我已阅读并接受 <span class="bg">《QQ阅读软件许可及服务协议》</span>
              等及 <span class="bg"> 《隐私协议》</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'loginA',
        data(){
            return {
                item:'',
                openSimple: false
            }
        },
        methods: {
            goback(){
                this.$router.go(-2)
            },
            nowbtn(){
                this.item=0
            },
            openSimpleDialog () {
              this.openSimple = true;
            },
            closeSimpleDialog () {
              this.openSimple = false;
            },
            login(){
//              this.$router.push({name:'settingDrawer',params:{act:1}})
//              this.act=1
              this.$router.go(-1)
            }
        }
    }
</script>

<style  scoped>
  .login{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 50;
  }
  .pos{
    position: relative;
  }
  .name{
    color: #fff;
    text-align: center;
  }
  .img{
    text-align: center;
    margin-top: 20px;
  }
  .img img{
    height: 180px;
  }
  .qqbtn{
    width: 100%;
    margin-top: 10px;
    text-align: center;
    margin-left: 70px;
  }
  .qq,.wx{
    background: #3d9eff;
    width: 250px;
    height: 50px;
    line-height: 50px;
    border-radius: 50px;
  }
  .qq span,.wx span{
    font-size: 20px;
    margin-left: 5px;
    color: #fff;
  }
  .qq img,.wx img{
    width: 24px;
    height: 26px;
    line-height: 50px;
    vertical-align: middle;
  }

  .wxbtn{
    width: 100%;
    margin-top: 10px;
    text-align: center;
    margin-left: 70px;
  }
  .other{
    text-align: center;
    color: #2292ff;
    margin: 10px 0;
  }
  .lie{
    text-align: center;
  }
  .lie img{
    width: 16px;
    height: 16px;
    vertical-align: bottom;
  }
  .lie span{
    font-size: 10px;
    color: rgba(0,0,0,0.4);
  }

  .now{
    position: absolute;
    left: 50px;
    bottom: -180px;
    margin-right: 30px;
  }
  .bgbtn{
    background: url("../../../static/img/autopay_checkbox_normal.png");
    display: inline-block;
    background-size: 100% 100%;
    width: 14px;
    height: 14px;
  }
  .active{
    background: url("../../../static/img/avatar_deco_selected.png");
    display: inline-block;
    background-size: 100% 100%;
    width: 14px;
    height: 14px;
  }
  .now .txt{
    font-size: 10px;
  }
  .bg{
    color: #5adaff;
  }

</style>
