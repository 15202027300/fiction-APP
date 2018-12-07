<template>
  <div class="searchvn">
    <div class="header">
      <mu-appbar style="width: 100%;" color="transparent" >
        <mu-button icon slot="left" @click="goback">
          <mu-icon value="chevron_left" :size="40" ></mu-icon>
        </mu-button>
      </mu-appbar>
    </div>

    <div class="input">
      <mu-container>
        <mu-text-field v-model="value" placeholder="请输入书名或作者" @input="fuzzySearch"></mu-text-field>
        <mu-button color="blue" @click="goresult">搜索</mu-button>
      </mu-container>
    </div>

    <div v-if="flag"class="fuzzyListWrapper">
      <div class="fuzzyList" v-for="(item,index) in keywords" :key="index" @click="setkeywords(item)">
        <div>{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'searchVn',
      data(){
        return {
          flag:false,//是否显示搜索结果
          value:'',//输入值
          keywords:[]//搜索数组


        }
      },
      methods: {
        fuzzySearch(){
          this.flag=false;
          this.axios.get('./api/book/auto-complete?query='+this.value)  //搜索自动补充   query:查询值
            .then(res=>{
                if(res.status===200){ //设置状态码
                    res=res.data
//                    console.log(res)
                    this.keywords=res.keywords.slice(0,6)//搜索结果设置6个
                    this.flag=true//显示搜索结果
                }
            })
        },
        setkeywords(val){
          this.value=val
        },
        goback(){
          this.$router.go(-2)  //返回按钮
        },
        goresult(){
            this.$router.push({name:'searchResult',params:{value:this.value}})
        }
      }
  }
</script>

<style  scoped>
  .searchvn{
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
  .fuzzyListWrapper{
    width: 100%;
    margin-top: 10px
  }

  .fuzzyList{
    padding: 0 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom:1px solid rgba(7, 17, 27, 0.4);
  }
  .input{
    line-height: 64px;
  }
</style>
