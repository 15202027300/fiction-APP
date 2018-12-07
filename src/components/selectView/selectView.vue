<template>
  <div class="select">
    <div class="topselect">
      <Topselect></Topselect>
    </div>
    <settingDrawer></settingDrawer>

    <div class="banner">
      <banner1></banner1>     <!--轮播图-->
    </div>

    <!--导航-->
    <div class="menu">
      <div class="top">
        <div></div>
        <span>排行榜</span>
      </div>
      <div class="free">
        <div></div>
        <span>免费</span>
      </div>
      <div class="month">
        <div></div>
        <span>包月</span>
      </div>
      <div class="form">
        <div></div>
        <span>书单</span>
      </div>
      <div class="finish">
        <div></div>
        <span>完本</span>
      </div>
    </div>
    <div class="line"></div>

    <!--今日必读-->
    <div class="today">
      <div class="today-title">今日必读</div>
      <div class="today-content" v-for="(item,index) in select" :key="index">
         <div class="index1" v-show="index===0" @click="go(item)">
           <div class="index1-img">  <!--书照片-->
             <img :src="item.cover">
           </div>
           <div class="index1-right"> <!--右边内容-->
             <div class="index1-title">
               {{item.title}}
             </div>
             <div class="index1-desc">
               {{item.desc}}
             </div>
             <div class="index1-bottom">
              <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
               <span class="index1-bottom-right">
                 <span class="index1-tags">
                     {{item.tags}}
                </span>
                <span class="index1-words">
                  {{item.words}}
                </span>
              </span>
             </div>
           </div>
         </div>

        <div class="today-middle">
        <div class="tm-left" v-show="index===3" @click="go(item)">
          <div> {{item.title}}</div>
          <div class="mi">
              <span class="index1-desc">
                {{item.desc}}
              </span>
            <span class="index1-img">  <!--书照片-->
               <img :src="item.cover">
              </span>
          </div>
          <div class="index1-bottom"><!--作者-->
            <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
          </div>
        </div>
        <div class="tm-right" v-show="index===4"  @click="go(item)">
          <div> {{item.title}}</div>
          <div class="mi">
              <span class="index1-desc">
                {{item.desc}}
              </span>
            <span class="index1-img">  <!--书照片-->
               <img :src="item.cover">
              </span>
          </div>
          <div class="index1-bottom"><!--作者-->
            <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
          </div>
        </div>
      </div>

        <div class="today-bottom">
          <div class="tm-left" v-show="index===5"  @click="go(item)">
            <div> {{item.title}}</div>
            <div class="mi">
              <span class="index1-desc">
                {{item.desc}}
              </span>
              <span class="index1-img">  <!--书照片-->
               <img :src="item.cover">
              </span>
            </div>
            <div class="index1-bottom"><!--作者-->
              <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
            </div>
          </div>
          <div class="tm-right" v-show="index===6"  @click="go(item)">
            <div> {{item.title}}</div>
            <div class="mi">
              <span class="index1-desc">
                {{item.desc}}
              </span>
              <span class="index1-img">  <!--书照片-->
               <img :src="item.cover">
              </span>
            </div>
            <div class="index1-bottom"><!--作者-->
              <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="many" @click="more(select)">查看更多</div>
    </div>
    <div class="line"></div>

    <!--爆款限免-->
    <div class="freeBtn">
      <div class="free-title">爆款限免</div>
      <div class="free-content" v-for="(it,index) in free" :key="index">
        <div class="index1" v-show="index===0"  @click="go(it)">
          <div class="index1-img">  <!--书照片-->
            <img :src="it.cover">
          </div>
          <div class="index1-right"> <!--右边内容-->
            <div class="index1-title">
              {{it.title}}
            </div>
            <div class="index1-desc">
              {{it.desc}}
            </div>
            <div class="index1-bottom">
              <span class="index1-author">
                <span></span>
                {{it.author}}
              </span>
              <span class="index1-bottom-right">
                 免费
              </span>
            </div>
          </div>
        </div>
        <div class="index1" v-show="index===1"  @click="go(it)">
          <div class="index1-img">  <!--书照片-->
            <img :src="it.cover">
          </div>
          <div class="index1-right"> <!--右边内容-->
            <div class="index1-title">
              {{it.title}}
            </div>
            <div class="index1-desc">
              {{it.desc}}
            </div>
            <div class="index1-bottom">
              <span class="index1-author">
                <span></span>
                {{it.author}}
              </span>
              <span class="index1-bottom-right">
                 免费
              </span>
            </div>
          </div>
        </div>
        <div class="index1" v-show="index===2"  @click="go(it)">
          <div class="index1-img">  <!--书照片-->
            <img :src="it.cover">
          </div>
          <div class="index1-right"> <!--右边内容-->
            <div class="index1-title">
              {{it.title}}
            </div>
            <div class="index1-desc">
              {{it.desc}}
            </div>
            <div class="index1-bottom">
              <span class="index1-author">
                <span></span>
                {{it.author}}
              </span>
              <span class="index1-bottom-right">
                 免费
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="many" @click="more(free)">查看更多</div>
    </div>
    <div class="line"></div>

<!--主编推荐-->
    <div class="recommend">
      <div class="recommend-title">主编推荐</div>
      <div class="recommend-content">
          <div class="com1" v-for="(num,index) in recommend" v-if="index<1" :key="index" >
            <div v-show="index===0"  @click="go(num)">
              <span class="index1-img">  <!--书照片-->
               <img :src="num.cover">
              </span>
              <div class="com-title">{{num.title}}</div>
              <div class="com-author">{{num.author}}</div>
            </div>
          </div>
          <div class="com2" v-for="(num,index) in recommend" v-if="index===2":key="index">
            <div v-show="index===2" @click="go(num)">
              <span class="index1-img">  <!--书照片-->
               <img :src="num.cover">
              </span>
              <div class="com-title">{{num.title}}</div>
              <div class="com-author">{{num.author}}</div>
            </div>
          </div>
          <div class="com3" v-for="(num,index) in recommend" v-if="index===3" :key="index">
            <div v-show="index===3" @click="go(num)">
              <span class="index1-img">  <!--书照片-->
               <img :src="num.cover">
              </span>
              <div class="com-title">{{num.title}}</div>
              <div class="com-author">{{num.author}}</div>
            </div>
          </div>
          <div class="com4" v-for="(num,index) in recommend" v-if="index===4" :key="index">
            <div v-show="index===4" @click="go(num)">
              <span class="index1-img">  <!--书照片-->
               <img :src="num.cover">
              </span>
              <div class="com-title">{{num.title}}</div>
              <div class="com-author">{{num.author}}</div>
            </div>
          </div>
      </div>
<!--v-for="(num,index) in recommend" :key="index"-->
    </div>
    <div class="line"></div>

<!--品质好书-->
    <div class="good">
      <div class="good-title">品质好书</div>
      <div class="goodcontent">
        <div class="good-l" v-for="(go,index) in good" :key="index" v-if="index===0"  @click="now(go)">
          <div class="good-top"  >
            <div class="tl">
              <img :src="go.cover">
            </div>
            <div class="tr">
              <div>{{go.title}}</div>
              <div>{{go.author}}</div>
              <div class="conbtn">
                <span>小说</span>
                <span>{{go.tags}}</span>
              </div>
            </div>
          </div>
          <div class="good-bottom">
            {{go.desc}}
          </div>
        </div>

        <div class="good-r" v-for="(to,index) in good" :key="index" v-if="index===1" @click="now(to)">
          <div class="good-top">
            <div class="tl">
              <img :src="to.cover">
            </div>
            <div class="tr">
              <div>{{to.title}}</div>
              <div>{{to.author}}</div>
              <div class="conbtn">
                <span>小说</span>
                <span>{{to.tags}}</span>
              </div>
            </div>
          </div>
          <div class="good-bottom">
            {{to.desc}}
          </div>
        </div>
      </div>
    </div>
    <div class="many" @click="more(good)">查看更多</div>
    <div class="line"></div>


    <div class="margin">
    </div>

  </div>
</template>

<script>
import banner1 from '../../widget/banner1.vue'
import Topselect from '../topnav/Topselect.vue'
import settingDrawer from '../settingDrawer/SettingDrawer.vue'

export default {
    name: 'selectView',
    data(){
        return {
            select:[],
            free:[],
            recommend:[],
            good:[]
        }
    },
    created(){
      this.axios('./api/select')
        .then(res=>{
            res=res.data
            if(res.errno===0){
//              console.log(res.data[0].today);
              this.select=res.data[0].today

//              console.log(res.data[1].free);
              this.free=res.data[1].free

//              console.log(res.data[2].recommend);
              this.recommend=res.data[2].recommend

//              console.log(res.data[3].good);
              this.good=res.data[3].good
            }
        })
    },
    methods: {
        go(idname){
            this.$router.push({name:'today',params:{id:idname}})
        },
        now(idname){
          this.$router.push({name:'today',params:{id:idname}})
        },
        more(jsonname){
            this.$router.push({name:'more',params:{id:jsonname}})
        }
    },
    components:{
      Topselect,
      settingDrawer,
      banner1
    }
}
</script>

<style scoped>
  .select{
    width: 100%;
    height: 100%;
    overflow-x:hidden
    /*用于隐藏多余x*/
  }
  .topselect{
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .banner{
    margin-top: 15px;
    display: inline-block;
    height: 135px;

  }
  .menu{
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    /*background: red;*/
  }
  .menu div{
    flex:1;
    text-align:center;
  }
  .top div:nth-child(1){
    /*display: inline-block;*/
    text-align: center;
    line-height: 42px;
    margin-left: 13px;
    width: 42px;
    height: 42px;
    background: url("../../../static/img/top.png") no-repeat;
    background-size: 42px 42px ;
  }
  .free div:nth-child(1){
    text-align: center;
    line-height: 42px;
    margin-left: 13px;
    width: 42px;
    height: 42px;
    background: url("../../../static/img/free.png") no-repeat;
    background-size: 42px 42px ;
  }
  .month div:nth-child(1){
    text-align: center;
    line-height: 42px;
    margin-left: 13px;
    width: 42px;
    height: 42px;
    background: url("../../../static/img/month.png") no-repeat;
    background-size: 42px 42px ;
  }
  .form div:nth-child(1){
    text-align: center;
    line-height: 42px;
    margin-left: 13px;
    width: 42px;
    height: 42px;
    background: url("../../../static/img/form.png") no-repeat;
    background-size: 42px 42px ;
  }
  .finish div:nth-child(1){
    text-align: center;
    line-height: 42px;
    margin-left: 13px;
    width: 42px;
    height: 42px;
    background: url("../../../static/img/finish.png") no-repeat;
    background-size: 42px 42px ;
  }
  .line{
    height: 7px;
    background:rgba(204,204,204,0.3);

  }
  /*今日必读*/
  .today{
    margin-left: 10px;
    margin-right:10px;
  }
  .today .today-title{
    margin-top: 10px;
    font-weight: 800;
    font-size: 16px;
  }
  .index1{
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .index1-img{
    flex: 0 0 70px;
  }
  .index1-img img{
    width: 70px;
    height: 100px;
  }
  .index1-right{
    flex: 1;
    margin-left: 15px;
  }
  .index1-title{
    font-size: 18px;
    font-weight: 700;
  }
  .index1-desc{
    margin-top: 5px;
    /*height: 50px;*/
    font-size: 13px;
    color: rgba(0,0,0,0.5);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .index1-bottom{
    margin-top: 5px;
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
  .today-middle{

  }
  .tm-left{
    float: left;
    width: 49%;
    border-right: 1px solid #ccc;

  }
  .tm-right{
    float: right;
    width: 49%;
    margin-left: 5px;
  }
  .mi{
    padding-bottom:40px;
  }
  .tm-left .index1-desc{
    width: 100px;
    font-size: 12px;
    float: left;
  }
  .tm-right .index1-desc{
    width: 100px;
    font-size: 12px;
    float: left;
  }
  .tm-left img{
    float: right;
    width: 50px;
    height: 65px;
    margin-right:10px;

  }
  .tm-right img{
    /*display: inline-block;*/
    float: right;
    width: 50px;
    height: 65px;
    margin-right:10px;

  }
  .tm-left .index1-bottom{
    padding-top: 5px;
    font-weight:200;
    font-size: 13px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .tm-right .index1-bottom{
    padding-top: 5px;
    font-weight:200;
    font-size: 13px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .many{
    width: 100%;
    text-align: center;
    line-height: 50px;
    color: deepskyblue;
    /*background: #ccc;*/
  }
/*爆款限免*/
  .freeBtn{
    margin-left: 10px;
    margin-right:10px;
    width: 100%;
    height:413px;
  }
  .freeBtn .free-title{
    margin-top: 10px;
    font-weight: 800;
    font-size: 16px;
  }
  .free-content{
    width: 100%;
  }
  .free-content .index1-right{
    /*background: #ccc;*/
    margin-right: 20px;
  }
  .free-content .index1-bottom-right{
    margin-right: 10px;
    color: indianred;
  }
/*主编推荐*/
  .recommend{
    margin-left: 10px;
    margin-right:10px;
    width: 100%;
    /*background: #ccc;*/
    height:174px;
  }
  .recommend-title{
    margin-top: 10px;
    font-weight: 800;
    font-size: 16px;
  }
  .recommend-content{
    display: flex;
  }
  .recommend-content div{
    flex: 1;
  }
  .com div{
    display: inline-block;
  }
  .com-title{
    width: 70px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .com-author{
    font-size: 12px;
    color: rgba(0 ,0 ,0 ,0.5) ;
  }
  /*品质好书*/
  .good{
    margin-left: 10px;
    margin-right:10px;
    width: 100%;
    /*background: #ccc;*/
    height:200px;
  }
  .good-title{
    margin-top: 10px;
    font-weight: 800;
    font-size: 16px;
  }
  .goodcontent{
    display: flex;
    margin-right: 10px;
  }
  .goodcontent .good-l{
    flex: 1;
    /*background: #ccc;*/
    margin-right: 5px;
  }
  .good-top{
    display: flex;
  }
  .good-top .tl{
    flex: 1;
  }
  .good-top .tl img{
    width: 90px;
    height: 120px;
  }
  .good-top .tr{
    flex: 1;

  }
  .good-top .tr div:nth-child(1){
    font-size: 16px;
    margin-left: 10px;
    margin-top: 8px;
    font-weight: 700;
  }
 .good-top .tr div:nth-child(2){
   color: rgba(0,0,0,0.6);
   font-size: 12px;
   margin-left: 10px;
   margin-top: 5px;
 }
 .conbtn{
   margin-top: 40px;

 }
  .conbtn span{
    color:rgba(0,0,0,0.4) ;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 4px;
    margin-left: 4px;
    padding: 1px 2px;
  }
  .conbtn span:nth-child(1){

  }
  .good-bottom{
    margin-top: 5px;
    /*height: 50px;*/
    font-size: 13px;
    color: rgba(0,0,0,0.7);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .goodcontent .good-r{
    flex: 1;
    margin-right: 5px;
  }
  .margin{
    margin-bottom:60px;
  }
</style>
