<template>
  <div class="search">
    <div class="header">
      <mu-appbar style="width: 100%;" color="transparent" >
        <mu-button icon slot="left" @click="goback">
          <mu-icon value="chevron_left" :size="40" ></mu-icon>
        </mu-button>

        <div class="searchbtn">
          <input type="text" placeholder="请输入书名或作者" v-model="keyword">
          <mu-icon :size="20" class="delete" value="cancel" color="#b6b6b6"
                   v-show="keyword.length"   @click="deleteKeyWorld"></mu-icon>
        </div>


        <mu-button flat slot="right">
          <mu-icon value="search"></mu-icon>
        </mu-button>
      </mu-appbar>
    </div>



    <!--搜索框搜索功能-->
    <div class="content">
      <mu-list textline="two-line">
        <mu-list-item class="item" v-for="item in filterFriendsList"
                      @click="go(item)" :key="item.bid" avatar button ripple>
          <!-- filterFriendsList所有好友名单关键字查询（好友名单）    startChat（进入该好友聊天页面）-->

          <mu-list-item-action>
            <mu-avatar :size="30" slot="left">
              <img :src="item.cover">
            </mu-avatar>
          </mu-list-item-action>

          <mu-list-item-content>
            <mu-list-item-title>{{item.title}}</mu-list-item-title>
            <mu-list-item-sub-title>{{item.desc}}</mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </div>


  </div>
</template>

<script>
    export default {
        name: 'search',
        data(){
            return {
              keyword:'', //关键词
              bookcase:[]
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
        computed:{

          filterFriendsList(){  //用于关键字查询
            //              根据用户名查询
            let result =[]
            let str=this.keyword.trim()  //去掉前后空格后
            if(!str){// 内容为空不展示
              return result
            }

            result=this.bookcase.filter(f=>{  //.filter通过检查好友列表中符合条件的所有元素。
  //        RegExp 在一个字符串中检索时    "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配
              let reg=new RegExp(str,'gim')
              return reg.test(f.title)  //test() 方法检索字符串中的指定值  检索是否有好友名字
            })
            return result
          }
        },
        methods: {
          goback(){
            this.$router.go(-2)  //返回按钮
          },
          deleteKeyWorld(){  //删除关键词
            this.keyword=""
          },
          go(ss){
            this.$router.push({name:'today',params:{id:ss}} )
            //      params:  路由参数--是一个动态路由匹配 包含键值对的对象  ,传送item数据
//        $router 传数据   $route：接收数据
          }
        }
    }
</script>



<style scoped>

  .search{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index:50;
    background: #fff;
  }
  .mu-appbar {
    background: #2955F3;
    background: linear-gradient(to right, #2955F3 0%, #7db8e7 70%);
  }
  input{
    height: 30px;
    width: 230px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 30px;
    font-size: 12px;
    text-align: center;
    border:3px solid rgba(0,0,0,0.5);
    outline: none;
    padding-left: 3px;
  }

</style>
