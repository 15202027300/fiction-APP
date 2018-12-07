<template>
  <div class="bookcase">

    <div class="topB">
      <Topbookcase></Topbookcase>
    </div>
    <settingDrawer></settingDrawer>

    <div class="bookBtn">
      <div class="header">
        <div class="headerbtn">
          <span class="num">0</span>
          <mu-button class="icon" icon color="warning" slot="right" ><!--搜索组件-->
            <mu-icon  :size="18" color="#fff" class="iconbtn" value="business_center"></mu-icon>
          </mu-button>
        </div>

        <div class="weektime">
          本周阅读时长/分钟
        </div>

        <div class="buttom">
          <span class="today">
            今日奖励：<mu-icon  :size="20" color="green" class="iconbtn" value="spa"></mu-icon>成长值
          </span>
          <span class="sign-in" @click="test" :class="{bg:index===0}">{{text}}</span>
        </div>

        <div class="recommended">
          <span></span>
          <span>全球巅峰！万兵之王！</span>
          <span>&gt;</span>
        </div>
      </div>


      <div class="casecontent" >
        <div v-for="(item,index) in bookcase " :key="index" class="item">
          <div class="click" @click="go(item)">
            <div class="img">
              <img :src="item.cover" width="70" height="85">
            </div>
            <div class="right">
              <div class="middle">
                <span class="title">
                  {{item.title}}
                </span>
                <span class="author">
                  {{item.author}}
                </span>
                <div class="first_chapter">
                  {{item.first_chapter}}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import settingDrawer from '../settingDrawer/SettingDrawer.vue'
  import Topbookcase from '../topnav/Topbookcase.vue'
  import {mapState} from 'vuex'

  export default {
      name: 'bookcase',
      data(){
        return {
          bookcase:[],
          show:false,
          text:"立即签到",
          index:''
        }
      },
      created(){//请求数据
        this.axios('./api/bookcase')
          .then(res=>{
            res=res.data
            if(res.errno===0){
              console.log(res.data);
              this.bookcase=res.data

            }
          })
      },
      methods:{
        test(){
          this.text="签到成功",
          this.index=0
        },
        go(ss){
            this.$router.push({name:'bookcontent',params:{id:ss}})
          //      params:  路由参数--是一个动态路由匹配 包含键值对的对象  ,传送item数据
//        $router 传数据   $route：接收数据
        }

      },
      components:{
        Topbookcase,
        settingDrawer
      }
  }
</script>

<style  scoped>
  .topB{
    position: fixed;
    width: 100%;
    height: 56px;
    left: 0;
    top: 0;
    z-index: 20;
  }
  .bg{
    background: #ccbcbe;
  }
  .header{
    margin-top: 54px;
    width: 100%;
    height: 160px;
    background: #58adfd;
    background: linear-gradient(to right, #2955F3 0%, #7db8e7 70%);
    position: relative;
  }
  .headerbtn{
    text-align: center;
    padding-top: 10px;
  }
  span.num{
    display: inline-block;
    font-size:50px;
    line-height: 50px;
    color: #fff;
  }
  .icon{
    vertical-align: top;
    width: 20px;
    height: 20px;
    border:2px solid #fff;
  }
  .iconbtn{
    border-radius: 50%;
  }
  .weektime{
    margin-top: 10px;
    text-align: center;
    color: #fff;
  }
  .buttom{
    color: #fff;
    margin-top: 10px;
  }
  .buttom .today{
    float: left;
    margin-left: 20px;
  }
  .buttom .sign-in{
    float: right;
    margin-right: 20px;
    padding: 0 5px;
    border: 1px solid #fff;
    border-radius: 20px;
  }
  .recommended{
    left: 50px;
    display: inline-block;
    height: 40px;
    width: 300px;
    position: absolute;
    border: 1px solid #fff;
    border-radius:20px;
    bottom: -15px;
    background: #fff;
  }
  .recommended span:nth-child(1){
    margin-top: 5px;
    margin-left: 20px;
    vertical-align: bottom;
    display: inline-block;
    width: 30px;
    height: 25px;
    background:url("../../../static/img/recommended.png") no-repeat;
    background-size: 30px 25px ;
  }
  .recommended span:nth-child(2){
    color: #2f93ff;
  }
  .recommended span:nth-child(3){
    /*color: #fff;*/
    float: right;
    margin-top: 10px;
    margin-right:30px;
    vertical-align: bottom;
  }

  .casecontent{
    margin-top: 20px;
    /*background: #ccc;*/
    margin-left: 20px;
    margin-bottom: 70px;
  }
  .item{
    width: 100%;
    margin-bottom:10px;
  }
  .click{
    display: flex;
    width: 100%;
    /*background: red;*/
  }
  .img{
    flex: 0 0 40px;
  }
  .right{
    flex: 1;
  }
  .middle{
    flex:0 0 200px;
    /*background: yellow;*/
  }
  .title{
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
    padding-top: 5px;
  }
  .first_chapter{
    margin-left: 10px;
    margin-top: 15px;
    font-weight: 200;

  }
  .author{
    float: right;
    padding-left: 15px;
    margin-right: 10px;
  }
</style>

