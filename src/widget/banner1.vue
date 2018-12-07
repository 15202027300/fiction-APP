<template>
  <div class="banner">
    <wc-swiper :duration="900" :interval="2000" >
      <!--duration:	一次滑动的时间   interval:	两次滑动间隔时间 -->
      <wc-slide v-for="(slide, index) in imgList" :key="index">
        <img :src="slide" width='100%' height='100%'>
      </wc-slide>
    </wc-swiper>
  </div>

</template>

<script>
    export default {
      name: '',
      data(){
        return{
          index:0,
          imgList:[
            require('../../static/img/3.jpg'),
            require('../../static/img/4.jpg'),
            require('../../static/img/2.jpg')
          ]
        }
      },
      methods: {}
    }
</script>

<style scoped>
  .banner{
    height: 50px
  }

</style>
