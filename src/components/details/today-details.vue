<template>
  <div class="today">
    <!--顶部导航栏-->
    <div class="header">
      <mu-appbar style="width: 100%;" color="transparent" >
        <mu-button icon slot="left" @click="goback">
          <mu-icon value="chevron_left" :size="40" ></mu-icon>
        </mu-button>
        <mu-button flat slot="right">
          <mu-icon value="share"></mu-icon>
        </mu-button>
        <mu-button flat slot="right">
          <mu-icon value="more_vert"></mu-icon>
        </mu-button>
      </mu-appbar>

      <div class="content">
        <div class="left">
          <img :src="item.cover">
        </div>
        <div class="right">
          <div class="title">
            {{item.title}}
          </div>
          <div class="star">
            <mu-icon value="star" color="yellow" :size="14"></mu-icon>
            <mu-icon value="star" color="yellow" :size="14"></mu-icon>
            <mu-icon value="star" color="yellow" :size="14"></mu-icon>
            <mu-icon value="star" color="yellow" :size="14"></mu-icon>
            <span>7.9分（1.5万人评）</span>
          </div>
          <div class="author">
            <span>{{item.category}}</span> &nbsp;|
            <span>{{item.author}}</span>
          </div>
          <div class="word">
            <span>258万字</span> &nbsp;&nbsp;
            <span>0.05元/千字</span>
          </div>
          <div class="com">
            开通包月VIP，立享8折购书 &nbsp; &gt;
          </div>
        </div>
        <div class="img">
          <img :src="item.cover">
        </div>
      </div>
    </div>

    <!--分栏-->
    <div class="flex">
      <div class="flexbtn">
        <div>42.9万</div>
        <div>收藏</div>
      </div>
      <div class="flexbtn">
        <div>215万</div>
        <div>读过</div>
      </div>
      <div class="flexbtn btn">
        <div>37.3万</div>
        <div>赞赏</div>
      </div>
    </div>

    <!--<!-小说描述&ndash;&gt;-->
    <div class="desc">
      {{item.desc}}
    </div>

    <!--目录-->
    <div class="directory">
      <span  @click="go(item)" >查看目录</span>
      <span>{{item.first_chapter}}</span>
      <span>&gt;</span>
    </div>
    <div class="line"></div>

    <div class="bottom">
      <!--底部栏-->
      <div class="bl" @click="openSimpleDialog">
        <div class="bli"></div>
        <div class="blt">{{bl}}</div>

        <mu-dialog title="下载" width="360" :open.sync="openSimple">
          是否下载该小说？
          <mu-button slot="actions" flat color="primary" @click=" closeSimpleDialog">确定</mu-button>
        </mu-dialog>
      </div>

      <div class="bm"  @click="go(item)">
        <div class="bmi"></div>
        <div class="bmt">{{bm}}</div>
      </div>
      <div class="bf" @click="dowm">
        <div class="bfi"></div>
        <div class="bft">{{bf}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import ShowHidden from '../selectView/ShowHidden.vue'
  export default {
      name: 'today',
      data(){
          return {
              item:this.$route.params.id,
              tab:'free',  //默认值
              openSimple: false,
              bl:'下载',
              bm:'免费试读',
              bf:'加入书架'
          }
      },
      methods: {
          goback(){
              this.$router.go(-2)  //返回按钮
          },
        dowm(){
          this.bf='已在书架'
        },
        openSimpleDialog () {
          this.openSimple = true;
        },
        closeSimpleDialog () {
          this.openSimple = false;
          this.bl="下载成功"
        },
        go(ss){
          this.$router.push({name:'bookcontent',params:{id:ss}})
          //      params:  路由参数--是一个动态路由匹配 包含键值对的对象  ,传送item数据
//        $router 传数据   $route：接收数据
        },
      },
      mounted(){
        console.log(this.$route.params.id);
      },
      components:{
        ShowHidden
      }
  }
</script>

<style scoped>
  .today{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index:50;
    background: #fff;
  }
  /*  <!--顶部导航栏-->*/
  .header{
    position: relative;
    height: 205px;
  }
  .content{
    display: flex;
    margin: 10px 10px;

  }
  .content .left{
    flex: 0 0 100px;
  }
  .content .left img{
    width: 100px;
    height: 135px;
  }
  .content .right{
    flex: 1;
    margin-left: 10px;
  }
  .title{
    font-size: 20px;
    font-weight: 800;
  }
  .star{
    margin-top: 5px;
    line-height: 24px;
  }
  .star span{
    margin-left: 20px;
    color: rgba(0,0,0,0.5);
    font-size: 14px;
  }
  .author{
    color: rgba(0,191,255,0.9);
    margin-bottom:5px;
  }
  .com{
    margin: 5px 0;
    color: orange;
  }
  .img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    text-align: center;
    filter: blur(60px);
  }

  /*分栏*/
  .flex{
    display: flex;
    margin: 5px 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .flexbtn{
    flex: 1;
    /*height: 100px;*/
    /*background: #829;*/
    text-align: center;
    border-right: 1px solid rgba(0,0,0,0.1);
  }
  .btn{
    border-right: none;
  }
  .flexbtn div:nth-child(1){
    font-size:20px;
    font-weight: 700;
  }
  .flexbtn div:nth-child(2){
    color: rgba(0,0,0,0.5);
  }

  /*小说描述*/
  .desc{
    text-indent: 2em;
    margin: 10px;
    font-size: 15px;
    color: rgba(0,0,0,0.7);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* 行数*/
    overflow: hidden;
    line-height: 30px;
    /*border-bottom: 1px solid rgba(0,0,0,0.1);*/
  }
  /*目录*/
  .directory{
    margin: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(0,0,0,0.1);
  }
  .directory span:nth-child(1){
    font-size: 20px;
    font-weight: 700;
  }
  .directory span:nth-child(2){
    margin-left: 10px;
    color: rgba(0,0,0,0.4);
  }
  .directory span:nth-child(3){
    float: right;
    line-height: 32px;
    color: rgba(0,0,0,0.4);
  }
  .line{
    margin:0 10px ;
    height: 7px;
    background:rgba(204,204,204,0.3);

  }

  /*底部*/
  .bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    /*background: #ccc;*/
  }
  .bottom div{
    flex: 1;
    text-align: center;
    /*height: 30px;*/
    /*line-height: 20px;*/
  }
  .bl{

  }
  .bl:hover{
    color: deepskyblue;
  }
  .bli{
    margin-top: 4px;
    display: inline-block;
    width: 27px;
    height: 20px;
    background: url("../../../static/img/down.png") no-repeat;
    vertical-align: bottom;
    background-size: 100% 100%;
  }
  .bli:hover{
    margin-top: 4px;
    display: inline-block;
    width: 27px;
    height: 20px;
    background: url("../../../static/img/down1.png") no-repeat;
    vertical-align: bottom;
    background-size: 100% 100%;
  }
  .blt{
    margin-bottom:5px;
  }
  .blt:hover{
    margin-bottom:5px;
    color: deepskyblue;
  }

  .bm:hover{
    color: deepskyblue;
  }
  .bmi{
    margin-top: 4px;
    display: inline-block;
    width: 27px;
    height: 20px;
    background: url("../../../static/img/readb.png") no-repeat;
    vertical-align: bottom;
    background-size: 100% 100%;
  }
  .bmi:hover{
    margin-top: 4px;
    display: inline-block;
    width: 27px;
    height: 20px;
    background: url("../../../static/img/readb1.png") no-repeat;
    vertical-align: bottom;
    background-size: 100% 100%;
  }
  .bmt{
    margin-bottom:5px;
  }
  .bmt:hover{
    margin-bottom:5px;
    color: deepskyblue;
  }


  .bf:hover{
    color: deepskyblue;
  }
  .bfi{
    margin-top: 4px;
    display: inline-block;
    width: 27px;
    height: 20px;
    background: url("../../../static/img/add.png") no-repeat;
    vertical-align: bottom;
    background-size: 100% 100%;
  }
  .bfi:hover{
    margin-top: 4px;
    display: inline-block;
    width: 27px;
    height: 20px;
    background: url("../../../static/img/add1.png") no-repeat;
    vertical-align: bottom;
    background-size: 100% 100%;
  }
  .bft{
    margin-bottom:5px;
  }
  .bft:hover{
    margin-bottom:5px;
    color: deepskyblue;
  }
</style>
