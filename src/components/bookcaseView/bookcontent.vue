<template>
  <div class="content">
    <div class="cover">
      <img :src="item.cover" alt="">
    </div>
    <div class="title">
      {{item.title}}
    </div>
    <div class="author">
      {{item.author}}/作品
    </div>

    <div class="buttom">
      版权所有·侵权必究
    </div>

    <div class="menu">

    </div>
  </div>
</template>

<script>
    export default {
        name: 'bookcontent',
        data(){
            return {
                item:this.$route.params.id   //$route：接收id==>item数据 --bookcase
            }
        },
        methods: {},
        mounted(){
          console.log(this.$route.params.id);
          //        $router 传数据   $route：接收id==>item数据
        }
    }
</script>

<style scoped>
  .content{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #fff;
    z-index: 50;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .cover{
    margin-top: 80px;

  }
  .title{
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
  }
  .author{
    margin-top: 20px;
  }
  .buttom{
    margin-top: 120px;
    font-weight: 200;
    font-size: 12px;
    /*margin-bottom: 200px;*/

  }
  /*.menu{*/
    /*z-index: 999;*/
    /*width: 100%;*/
    /*height: 100px;*/
    /*background: #ccc;*/
  /*}*/
</style>
