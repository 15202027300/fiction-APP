<template>
  <div class="searchResult">
    <div class="header">
      <mu-appbar style="width: 100%;" color="transparent" >
        <mu-button icon slot="left" @click="goback">
          <mu-icon value="chevron_left" :size="40" ></mu-icon>
        </mu-button>
        <div class="title">
          搜索结果
        </div>
      </mu-appbar>
    </div>

    <div class="resultListWrapper" ref="resultListWrapper">
      <div class="resultListBox">
        <div class="resultList" v-for="(item,index) in searchResultList" :key="index" @click="go(item._id)">
          <div class="b-cover">
            <img :src="decodeUrl(item.cover)" width="80">
          </div>

          <div class="b-text">
            <span class="b-title">{{item.title}}</span>
            <span class="b-author">{{item.author}}</span>
            <span class="b-lastC">{{item.lastChapter}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
      name: 'searchResult',
      data(){
          return {
            searchResultList:[]
          }
      },

      beforeRouteEnter(to,from,next){ //进入路由之前执行的函数
        next(vm=>{
            vm.search()
        })
      },
      methods: {
        goback(){
          this.$router.go(-1)  //返回按钮
        },
        search(){
          if(this.$route.params.value){
            this.axios.get('./api/book/fuzzy-search?query=' + this.$route.params.value)//模糊搜索
              .then(res=>{
                  if(res.status===200){
                    res=res.data
//                    console.log(res);

                    this.searchResultList=res.books.slice(0,20)  //获取前20个搜索结果
//                    console.log(this.searchResultList);

                    this.scroll.refresh()  //下拉刷新
                    this.scroll.scrollTo(0, 0)
                  }
              })
          }
        },
        go(id){
          this.$router.push({name: 'searchdetails', params: {bookId: id}}) //输出bookId
        },
        decodeUrl(url){
            return decodeURIComponent(url).substring(7)
        }
      },

      mounted(){
        console.log(this.$route.params.value)//获取搜索的关键词
        this.$nextTick(()=>{
            this.scroll=new BScroll(this.$refs.resultListWrapper,{
                click:true
            })
        })
      }
  }
</script>

<style  scoped>
  .searchResult{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index:50;
    background: #fff;
  }
  .header{

  }
  .mu-appbar {
    background: #2955F3;
    background: linear-gradient(to right, #2955F3 0%, #7db8e7 70%);
  }
  .title{
    text-align: center;
    padding-right: 56px;
  }
  .resultListWrapper{
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .resultListBox{
    width: 100%;
    height: auto;
    padding: 0 10px;
  }

  .resultList{
    display: flex;
    height: 120px;
    width: 100%;
    border-bottom:1px solid rgba(7, 17, 27, 0.4);
  }

  .b-cover{
    display: inline-block;
    flex: 0 0 80px;
    width: 80px;
    height: 100%;
    overflow: hidden;
  }

  .b-text{
    margin: 10px;
    display: inline-block;
    flex: 1;
  }

  .b-text > span{
    display: inline-block;
    width: 100%;
    font-size: 14px;
  }

  .b-title{
    flex: 1;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .b-author{
    margin-bottom: 20px;
  }

  .b-lastC{
    height: 20px;
    font-size: 16px;
    line-height: 20px;
    white-space: pre-line;
    text-overflow: ellipsis;
    overflow: hidden;
  }

</style>
