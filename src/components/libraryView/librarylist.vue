<template>
  <div class="list">
    <mu-appbar style="width: 100%;" color="blue" >
      <mu-button icon slot="left" @click="goback">
        <mu-icon value="chevron_left" :size="40" ></mu-icon>
      </mu-button>
      <div class="name">{{item.name}}</div>
      <mu-button icon slot="right">
      </mu-button>
    </mu-appbar>

    <div class="menu">
      <div>默认 <span class="bottom"></span></div>
      <div>最畅销</div>
      <div>筛选 <span class="bottom"></span></div>
    </div>
    <div class="line"></div>

    <div class="commend">
      <div class="com-l">
        <div class="clt">
          <span>{{item.name}}</span>
          <span>主编推荐</span>
        </div>
        <div class="clm">
          {{item.title}}

        </div>
        <div class="clb">
          <span>最近一周有807万书友在读</span>
        </div>
      </div>
      <div class="com-r">
        <div class="img">
          <img :src="item.cover">
        </div>
      </div>
    </div>
    <div class="line1"></div>

    <div class="conlist">
      <div class="content" v-for="(btn,index) in bin" :key="index">
        <div class="contentbtn" @click="go(btn)">
          <div class="img" >
            <img :src="btn.cover">
          </div>
          <!--右边框-->
          <div class="right">
            <div class="title">
              {{btn.title}}
            </div>
            <div class="desc">
              {{btn.desc}}
            </div>
            <div class="index1-bottom">
          <span class="index1-author">
            <span></span>
            {{btn.author}}
          </span>
              <span class="index1-bottom-right" v-if="index<3">
             <span class="xiao">
                小编力荐
             </span>
          </span>
          <span class="index1-bottom-right" v-if="index>=3">
             <span class="index1-tags">
                 {{btn.category}}
             </span>
             <span class="index1-words">
               {{btn.top_class}}万字
             </span>
          </span>
            </div>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'list',
        data(){
            return {
                item:this.$route.params.id,
                bin:this.$route.params.id.data
            }
        },
        methods: {
          goback(){
            this.$router.go(-1)
          },
          go(ss){
            this.$router.push({name:'today',params:{id:ss}} )
          }
        },
        mounted(){
          console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>
  .mu-appbar {
    background: #2955F3;
    background: linear-gradient(to right, #39A2E7 0%, #7db8e7 70%);
    position: fixed;
    left: 0;
    top: 0;
    height: 56px;
  }
  .name{
    text-align: center;
    color: #fff;
  }
  .menu{
    display: flex;
    margin-top: 56px;
    /*background: #ccc;*/
    line-height: 24px;
    padding: 2px 0;
  }
  .menu div{
    text-align: center;
    flex: 1;
  }
  .bottom{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../../../static/img/bottom.png");
    vertical-align: middle;
  }
  .line{
    background: #ccc;
    width: 100%;
    height: 1px;
  }
  .line1{
    background: #ccc;
    width: 100%;
    height: 5px;
  }

  /*推荐*/
  .commend{
    display: flex;
    margin: 7px 10px;
  }
  .com-l{
    flex: 0 0 265px;
  }
  .com-l .clt{

  }
  .com-l .clt span:nth-child(1){
    padding: 2px;
    border: 1px solid rgba(0,0,0,0.5);
    color: rgba(0,0,0,0.5);
    border-radius: 5px;
  }
  .com-l .clt span:nth-child(2){
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    margin-left: 5px;
  }
  .com-l .clm{
    margin: 10px 0;
    color: rgba(0,0,0,0.7);
    font-size: 14px;
  }
  .com-l .clb{
    color: rgba(0,0,0,0.7);
    font-size: 12px;
    margin-top: 5px;
  }
  .com-r{
    flex: 1;
  }
  .com-r .img{

  }
  .com-r .img img{
    width: 70px;
    height: 80px;
  }

  /*内容列表*/
  .conlist{
    margin-bottom: 56px;
  }
  .content{
    margin: 10px;
  }
  .contentbtn{
    display: flex;
  }
  .content .img{
    flex:0 0 100px;
  }
  .content .img img{
    width: 100px;
    height: 140px;
  }
  .content .right{
    flex: 1;
  }
  .title{
    margin-left: 10px;
    font-size: 18px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 250px;

  }
  .desc{
    color: rgba(0,0,0,0.5);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-size: 12px;
    margin-left: 10px;
    margin-top: 8px;
  }

  /*右边底部作者*/
  .index1-bottom{
    margin-top: 30px;
    margin-left: 10px;
  }
  .index1-author span{
    color: rgba(0,0,0,0.5);
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../../../static/img/header.png");
    vertical-align: bottom;
    margin-top: 2px;
  }
  .index1-bottom-right{
    float: right;
  }
  .index1-tags{
    padding:1px;
    border-radius:4px;
    font-size: 11px;
    border:1px solid  rgba(0,0,0,0.5);
  }
  .index1-words{
    margin-left: 8px;
    padding:1px;
    border-radius:4px;
    font-size: 11px;
    border:1px solid  rgba(0,0,0,0.5);
  }
  .xiao{
    font-size: 11px;
    color: #4f220f;
    margin-right: 8px;
  }
</style>
