<template>
  <div class="more">
    <mu-appbar style="width: 100%;" color="blue" >
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

    <div class="height"></div>
<!--书内容-->
    <div class="content" v-for="(btn,index) in item" :key="index">
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
            <span class="index1-bottom-right">
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
</template>

<script>
    export default {
        name: 'more',
        data(){
            return {
                item:this.$route.params.id
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
  .more{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index:50;
    background: #fff;
    overflow: scroll;
  }

  .height{
    height: 56px;
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
  .line{
    width: 100%;
    height: 7px;
    background:rgba(204,204,204,0.3);
    margin-top: 5px;

  }
</style>
