<template>
  <div class="library">
    <div class="top">
      <Toplibrary></Toplibrary>
    </div>
    <settingDrawer></settingDrawer>

    <div class="content">
      <div class="left" >
        <div class="go">
          <div @click="go0" :class="{bg:active===0}"> 男生</div>
          <div @click="go1" :class="{bg:active===1}"> 出版</div>
          <div @click="go2" :class="{bg:active===2}"> 女生</div>
          <div @click="go3" :class="{bg:active===3}"> 漫画</div>
          <div @click="go4" :class="{bg:active===4}"> 音频</div>
        </div>
      </div>

      <div class="right">
        <div class="man" v-if="active === 0">
          <div class="first">
            <div class="fl">
              <span>风云榜</span>
              <span></span>
            </div>
            <div class="fr">
              <span>畅销榜</span>
              <span></span>
            </div>
          </div>
          <div class="second">
            <div class="sl">
              <span>新书榜</span>
              <span></span>
            </div>
            <div class="sr">
              <span>包月榜</span>
              <span></span>
            </div>
          </div>
        <!--男生列表-->
          <div class="man-con">
            <div class="con-l" >
              <div class="mg"  v-for="(item,index) in man1" :key="index">
                <div  @click="enter(item)">
                  <span class="img">
                    <img :src="item.cover" >
                  </span>
                  <div class="name">
                    <div>{{item.name}}</div>
                    <div>{{item.number}}册</div>
                  </div>
                </div>
              </div>

            </div>
            <div class="con-r">
              <div class="mg"  v-for="(it,index) in man2" :key="index">
                <div  @click="enter(it)">
                  <span class="img">
                    <img :src="it.cover" >
                  </span>
                  <div class="name">
                    <div>{{it.name}}</div>
                    <div>{{it.number}}册</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--出版列表-->
        <div class="publish" v-if="active === 1">
          <div class="publish-con">
            <div class="con-l" >
              <div class="mg" v-for="(ie,index) in publish1" :key="index">
                <span class="img" @click="enter(ie)">
                  <img :src="ie.cover" >
                </span>
                <div class="name">
                  <div>{{ie.name}}</div>
                  <div>{{ie.number}}册</div>
                </div>
              </div>
            </div>

            <div class="con-r">
              <div class="mg"  v-for="(im,index) in publish2" :key="index">
                <span class="img" @click="enter(im)">
                  <img :src="im.cover" >
                </span>
                <div class="name">
                  <div>{{im.name}}</div>
                  <div>{{im.number}}册</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lady" v-if="active ===2 ">
          <div class="first">
            <div class="fl">
              <span>风云榜</span>
              <span></span>
            </div>
            <div class="fr">
              <span>畅销榜</span>
              <span></span>
            </div>
          </div>
          <div class="second">
            <div class="sl">
              <span>新书榜</span>
              <span></span>
            </div>
            <div class="sr">
              <span>包月榜</span>
              <span></span>
            </div>
          </div>
          <!--女生列表-->
          <div class="man-con">
            <div class="con-l" >
              <div class="mg"  v-for="(on,index) in lady1" :key="index">
                <div  @click="enter(on)">
                  <span class="img">
                    <img :src="on.cover" >
                  </span>
                  <div class="name">
                    <div>{{on.name}}</div>
                    <div>{{on.number}}册</div>
                  </div>
                </div>
              </div>

            </div>
            <div class="con-r">
              <div class="mg"  v-for="(op,index) in lady2" :key="index">
                <div  @click="enter(op)">
                  <span class="img">
                    <img :src="op.cover" >
                  </span>
                  <div class="name">
                    <div>{{op.name}}</div>
                    <div>{{op.number}}册</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--漫画-->
        <div class="comic" v-if="active === 3">
          <div class="fbtn">
            <div class="fbl">
              <span>穿越</span>
            </div>
            <div class="fbr">
              <span>魔幻</span>
            </div>
          </div>
          <div class="sbtn">
            <div class="sbl">
              <span>冒险</span>
            </div>
            <div class="sbr">
              <span>后宫</span>
            </div>
          </div>
          <div class="man-con">
            <div class="con-l" >
              <div class="mg"  v-for="(ln,index) in comic1" :key="index">
                <div  @click="enter(ln)">
                  <span class="img">
                    <img :src="ln.cover" >
                  </span>
                  <div class="name">
                    <div>{{ln.name}}</div>
                    <div>{{ln.number}}册</div>
                  </div>
                </div>
              </div>

            </div>
            <div class="con-r">
              <div class="mg"  v-for="(sp,index) in comic2" :key="index">
                <div  @click="enter(sp)">
                  <span class="img">
                    <img :src="sp.cover" >
                  </span>
                  <div class="name">
                    <div>{{sp.name}}</div>
                    <div>{{sp.number}}册</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="audio" v-if="active === 4">
          <div class="imgbtn">
            <div class="audioname">音频专区</div>
            <div class="textbtn">解放双眼&nbsp;&nbsp;&nbsp;聆听世界</div>
          </div>
          <div class="man-con">
            <div class="con-l" >
              <div class="mg"  v-for="(bn,index) in audio1" :key="index">
                <div  @click="enter(bn)">
                  <span class="img">
                    <img :src="bn.cover" >
                  </span>
                  <div class="name">
                    <div>{{bn.name}}</div>
                    <div>{{bn.number}}册</div>
                  </div>
                </div>
              </div>

            </div>
            <div class="con-r">
              <div class="mg"  v-for="(np,index) in audio2" :key="index">
                <div  @click="enter(np)">
                  <span class="img">
                    <img :src="np.cover" >
                  </span>
                  <div class="name">
                    <div>{{np.name}}</div>
                    <div>{{np.number}}册</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>

  </div>
</template>

<script>
  import Toplibrary from '../topnav/Toplibrary.vue'
  import settingDrawer from '../settingDrawer/SettingDrawer.vue'
    export default {
        name: 'library',
        data(){
            return {
                active:0,
                man1:[],
                man2:[],
                publish1:[],
                publish2:[],
                lady1:[],
                lady2:[],
                audio1:[],
                audio2:[],
                comic1:[],
                comic2:[]
            }
        },
        created(){
            this.axios('./api/library')
              .then(res=>{
                  res=res.data
                  if(res.errno===0){
                    console.log(res.data[0].publish1);
                    this.man1=res.data[0].man1
                    this.man2=res.data[1].man2
                    this.publish1=res.data[2].publish1
                    this.publish2=res.data[3].publish2
                    this.lady1=res.data[4].lady1
                    this.lady2=res.data[5].lady2
                    this.comic1=res.data[6].comic1
                    this.comic2=res.data[7].comic2
                    this.audio1=res.data[8].audio1
                    this.audio2=res.data[9].audio2
                  }
              })
        },
        methods: {
            go0(){
                this.active=0
            },
            go1(){
              this.active=1
            },
            go2(){
              this.active=2
            },
            go3(){
              this.active=3
            },
            go4(){
              this.active=4
            },

//          进入下个页面
            enter(ss){
                this.$router.push({name:'list',params:{id:ss}})
            }
        },
        components:{
          Toplibrary,
          settingDrawer
        }
    }
</script>

<style scoped>
  .top{
    position: fixed;
    width: 100%;
  }
  .library{
    overflow-x: hidden;
  }
  .content{
    display: flex;
    margin-top: 56px;
  }
  /*左边侧导航*/
  .left{
    /*flex: 0 0 90px;*/
    flex: 0 0 25%;
    width: 25%;
    height: 555px;

  }
  .go{
    position: fixed;
    top: 56px;
    left: 0px;
    right: 286px;
    bottom: 56px;
    background: #ccc;
  }
  .go div{
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    padding: 5px 0;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .bg{
    background: #fff;
  }
  /*右边内容*/
  .right{
    /*flex: 1;*/
    flex: 75%;
  }
  /*男生*/
  .right .man{
    margin: 20px;
    margin-bottom: 57px;

  }
  /*出版*/
  .right .publish{
    margin: 20px;
    margin-bottom: 57px;
  }
 /*女生*/
  .right .lady{
    margin: 20px;
    margin-bottom: 57px;
  }
  .right .comic{
    margin: 20px;
    margin-bottom: 57px;
  }
  .right .audio{
    margin: 20px;
    margin-bottom: 57px;
  }
  .first{
    display: flex;
  }
  .first div{
    flex:1;
  }
  .first{
    color: #fff;
  }
  .first .fl{
    padding: 8px 0;
    padding-left: 10px;
    margin-right:30px;
    line-height: 25px;
    border-radius: 7px;
    background: #ff726f;
    background: linear-gradient(to right, #ff726f 0%, #ffdbb6 70%);
  }
  .first .fr{
    padding: 8px 0;
    padding-left: 10px;
    /*margin-right:50px;*/
    line-height: 25px;
    background: #79cfff;
    border-radius: 7px;
    background: linear-gradient(to right, #2f93ff 0%, #79cfff 70%);
  }
  .fl span:nth-child(1){
    font-size: 17px;
  }
  .fl span:nth-child(2){
    width: 18px;
    height: 22px;
    margin-left: 10px;
    vertical-align: bottom;
    background: url("../../../static/img/booklist3.png") no-repeat;
    display: inline-block;
    background-size: 18px 22px;
  }
  .fr span:nth-child(1){
    font-size: 17px;
  }
  .fr span:nth-child(2){
    width: 18px;
    height: 22px;
    margin-left: 10px;
    vertical-align: bottom;
    background: url("../../../static/img/booklist2.png") no-repeat;
    display: inline-block;
    background-size: 18px 22px;
  }

  .second{
    display: flex;
    color: #fff;
    margin-top: 10px;
  }
  .second div{
    flex:1;
  }
  .second .sl{
    padding: 8px 0;
    padding-left: 10px;
    margin-right:30px;
    line-height: 25px;
    border-radius: 7px;
    background: #d1d6ff;
    background: linear-gradient(to right, #a7c0ff 0%, #d8e1ff 70%);
  }
  .second .sr{
    padding: 8px 0;
    padding-left: 10px;
    /*margin-right:50px;*/
    line-height: 25px;
    background: #ffa737;
    border-radius: 7px;
    background: linear-gradient(to right, #ffa737 0%, #ffee78 70%);
  }
  .sl span:nth-child(1){
    font-size: 17px;
  }
  .sl span:nth-child(2){
    width: 18px;
    height: 22px;
    margin-left: 10px;
    vertical-align: bottom;
    background: url("../../../static/img/booklist1.png") no-repeat;
    display: inline-block;
    background-size: 18px 22px;
  }
  .sr span:nth-child(1){
    font-size: 17px;
  }
  .sr span:nth-child(2){
    width: 18px;
    height: 22px;
    margin-left: 10px;
    vertical-align: bottom;
    background: url("../../../static/img/booklist4.png") no-repeat;
    display: inline-block;
    background-size: 18px 22px;
  }
/*列表*/
  .man-con{
    display: flex;
    margin-top: 15px;
  }
  .publish-con{
    display: flex;
    margin-top: 15px;
  }
  .mg{
    margin-bottom:10px;
  }
  .con-l{
    flex: 1;
    /*background: red;*/
  }
  .con-r{
    flex: 1;
    margin-left: 10px;
    /*background: yellow;*/
  }
  .img{
    width: 50px;
    height: 45px;
  }
  .img img{
    width: 50px;
    height: 45px;
  }
  .name{
    vertical-align: top;
    display: inline-block;
    margin-left: 3px;
  }
  .name div:nth-child(1){
    font-size: 14px;
    font-weight: 400;
  }
  .name div:nth-child(2){
    font-size: 10px;
    color: rgba(0,0,0,0.4);
    margin-top: 4px;
  }
  /*漫画*/
  .fbtn{
    display: flex;
  }
  .fbtn .fbl{
    flex: 1;
    text-align: center;
    background: url("../../../static/img/bg1.jpg");
    background-size: 100% 100%;
    padding: 10px 0;
    margin-right: 35px;
    border-radius:4px;
  }
  .fbtn .fbr{
    flex: 1;
    text-align: center;
    background: url("../../../static/img/bg3.jpg");
    background-size: 100% 100%;
    padding: 10px 0;
    border-radius:4px;
  }
  .sbtn{
    display: flex;
    margin-top: 10px;
  }
  .sbtn .sbl{
    flex: 1;
    text-align: center;
    background: url("../../../static/img/bg2.jpg");
    background-size: 100% 100%;
    padding: 10px 0;
    margin-right: 35px;
    border-radius:4px;
  }
  .sbtn .sbr{
    flex: 1;
    text-align: center;
    background: url("../../../static/img/bg4.jpg");
    background-size: 100% 100%;
    padding: 10px 0;
    border-radius:4px;
  }



  /*音频*/
  .audio{

  }
  .audio .imgbtn{
    width: 250px;
    height: 50px;
    background: url("../../../static/img/bi3.jpg");
    background-size: 100% 100%;
    border-radius:4px;
  }
  .audio .imgbtn .audioname{
    margin-left: 10px;
    margin-top: 5px;
    font-size: 20px;
    color: #fff;
  }
  .audio .imgbtn .textbtn{
    margin-left: 10px;
    /*margin-top: 5px;*/
    font-size: 12px;
    line-height: 20px;
    color: #fff;
  }


</style>
