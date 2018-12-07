<template>
  <div class="num">
    <mu-circular-progress v-if="loadingFlag" class="loading demo-circular-progress" :size="72"></mu-circular-progress>
    <!--用于向用户显示数据加载进度。-->

    <div class="readBookView" v-if="!loadingFlag" ref="readBookView">
      <div class="readBookBox">

        <!--返回按钮-->
        <div class="readBookHeader">
          <span @click="back" class="backBtn">返回</span>
          <span class="bookna">{{bookName}}</span>
        </div>

        <!--加载完成前flag为false-->
        <h1 v-if="!loadingFlag && !clickFlag" class="bookName">{{bookName}}</h1>
        <mu-circular-progress v-if="clickFlag && !contentFlag" class="contentLoading demo-circular-progress"
                              :size="32"></mu-circular-progress>
        <div v-if="contentFlag" class="contentWrapper">
          <h1>{{title}}</h1>
          <article v-html="content"></article>
        </div>

        <!--<div @click="getBookContent">获取信息</div>-->
        <mu-container class="button-wrapper">
          <mu-flex justify-content="center" align-items="center">
            <mu-button round color="#0aa" textColor="#fff" @click="getPrevChapter" v-if="beginFlag">上一章
            </mu-button>
            <mu-button round color="#0aa" textColor="#fff" @click="getNextChapter" v-if="beginFlag">下一章
            </mu-button>
            <mu-button round color="#0aa" textColor="#fff" @click="getRead" v-if="!beginFlag">
              开始阅读
            </mu-button>
          </mu-flex>
        </mu-container>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'contentBtn',
    beforeRouteEnter(to, from, next) {
      next(vm => {
//          在路由跳转完成之前进行网络请求
        vm.getBook()
      })
    },
//    让本页面的章节索引初始化
    beforeRouteLeave(to, from, next) {
      this.index = 0
      next()
    },
    mounted() {
    },
    data() {
      return {
        chapters: [], // 存放请求的章节的数组
        title: '', // 存放请求到的小说章节名字
        bookName: '',
        content: '', // 存放请求到的小说的具体内容
        contentFlag: false, // 限制显示与否
        loadingFlag: true, // 加载条是否显示
        clickFlag: false,
        beginFlag: false,
        bookInfo: {}, // 存放当前阅读的小说的信息(包括阅读章节数)
        index: 0 // 小说阅读的章节索引值
      }
    },
    methods: {
      // 通过上一级目录传过来的东西发起数据请求
      getBook() {
        if (this.$route.params.bookInfo) {
          // 先进行当前小说信息的存储
          this.bookInfo = this.$route.params.bookInfo
          this.bookName = this.bookInfo.title
          this.$store.commit('SET_BOOK_INFO', this.$route.params.bookInfo)
          this.getBookRealId(this.$route.params.bookInfo._id) // 获取小说源Id
        }

      },
      // 获取小说源id（通过小说存储的信息）
      getBookRealId(id) {
//        commit(types.SET_BOOK_ID, playload)
        this.axios.get('/api/btoc?view=summary&book=' + id) //获取小说正版源
          .then(res => {
            if (res.status === 200) {
              res = res.data[0]
              console.log(res)
//              commit(types.SET_BOOK_REAL_ID, res._id)
              // 通过源id发起请求获取小说章节信息
              this.getBookChapter(res)
            }
          })
      },

      // 获取章节信息(通过小说源id)
      getBookChapter(bookInfo) {
        // console.log(bookInfo._id)
        this.axios.get('/api/atoc/' + bookInfo._id + '?view=chapters')
          .then(res => {
            // console.log(res)
            if (res.status === 200) {
              res = res.data
//               console.log(res.chapters)
              // 存放章节(先进行50章的缓存)
              this.chapters = res.chapters
              this.loadingFlag = false
              console.log(this.chapters)//
            }
          })
      },

//      上一页
      getPrevChapter() {
        this.index--
        this.scroll.destroy()
        this.getBookContent()
        this.scroll.scrollTo(0, 0)
      },
//      下一页
      getNextChapter() {
        this.index++
        this.scroll.destroy()
        this.getBookContent()
        this.scroll.scrollTo(0, 0)
      },

      getRead() {
        // 遍历书架的数组，如果书架中有该小说，则索引值为该小说的已读章节，若没有，从初始化的索引值开始
        this.$store.state.bookshelf.forEach((val) => {
          let flag = false
          if (val._id === this.$route.params.bookInfo._id) {
            flag = true // 若是匹配到有相同的id，说明书架中有这本书
          }
          if (flag) { // 若是书架中有这本书，则索引等于这本小说的已读章节数
            this.index = this.$store.state.bookInfo.readedLastChapter
          }
        })
        this.beginFlag = true
        this.getBookContent()
      },
      // 获取小说内容
      getBookContent() {
        this.contentFlag = false
        this.clickFlag = true
//        console.log(this.index)
//        console.log(this.chapters)
//        通过索引获取小说内容
        this.axios.get('/chapterapi/' + this.chapters[this.index].link)
          .then(res => {
            // console.log(res)
            if (res.status === 200) {
              res = res.data.chapter
//              console.log(res)
              this.content = res.cpContent.replace(/\n/g, '<br>')
              this.title = res.title
              this.contentFlag = true
            }
          })
        Object.assign(this.bookInfo, { // 将当前的小说的阅读章节数存放在小说具体信息里，用于返回时候存放到总的数组里
          readedLastChapter: this.index
        })
        this.scroll = new BScroll(this.$refs.readBookView, {
          click: true
        })
        this.scroll.refresh()
      },
//      返回上一页，并保存当前阅读的章节数
      back() {
        this.$store.state.bookshelf.forEach((val) => {
          if (val._id === this.bookInfo._id) {
            this.$store.commit('SET_INDEX', this.bookInfo)
          }
        })
        this.content = ''
        this.title = ''
        this.loadingFlag = true
        this.beginFlag = false
        this.$router.go(-3)
      }
    }
  }
</script>

<style  scoped>
  .num{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index:50;
    background: #fff;
  }
  .loading{
    text-align: center;
    margin-top: 200px;
    margin-left: 160px;
  }
  .readBookView{
    width: 100%;
    height: 100%;
  }
  .readBookBox{
    width: 100%;
    height: auto;
  }
  .readBookHeader{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
  }
  .backBtn{
    display: inline-block;
    /*margin-left: 10px;*/
    margin-right: 20px;
    background: deepskyblue;
    padding: 3px 5px;
    border-radius:8px;
  }
  .bookna{
    text-align: center;
    margin-left: 100px;
  }
  .bookName{
    width: 100%;
    min-height: 300px;
    line-height: 300px;
    text-align: center;
  }
  .contentLoading{
    width: 100%;
    min-height: 300px;
    line-height: 300px;
    margin-left: 180px;
    text-align: center;
  }
  .contentWrapper{
    width: 100%;
    height: auto;
    padding: 0 10px;
  }
  h1{
    text-align: center;
  }
  article{
    text-indent: 25px;
    /*font-size: 1.5rem;*/
    font-size: 14px;
    line-height: 1.7rem;
    padding: 20px 20px;
    word-break: break-all;
  }
  .button-wrapper{
    text-align: center;
  }
  .mu-button{
    margin: 8px;
    vertical-align: middle;
  }
  a.mu-button{
    color: #fff;
    text-decoration: none;
  }

</style>
