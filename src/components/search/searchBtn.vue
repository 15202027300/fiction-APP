<template>
  <div class="search">
    <mu-container>
      <mu-text-field v-model="value" placeholder="搜索" @input="fuzzySearch"></mu-text-field>
      <mu-button color="#2955F3" @click="search">搜索</mu-button>
    </mu-container>

    <div class="fuzzyListWrapper" v-if="flag">
      <div class="fuzzyList" v-for="(item, index) in keywords" :key="index" @click="setKeywords(item)">
        <div>{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'searchBtn',
        data() {
          return {
            value: '',   //输入值
            keywords: [],  //搜索数组
//            fuzzySearchList: [],
            flag: false  //是否显示搜索结果
          }
        },
        methods: {
          fuzzySearch() {
            this.flag = false
            this.axios.get('/api/book/auto-complete?query=' + this.value)  //搜索自动补充   query:查询值
              .then(res => {
  //            console.log(res)
                if (res.status === 200) {  //设置状态码
                  res = res.data
//                  console.log(res)
                  this.keywords = res.keywords.slice(0, 6)  //搜索结果设置6个
                  this.flag = true  //显示搜索结果
                }
              })
          },
          setKeywords(val) {
            this.value = val
          },
          search() {
            this.$router.push({name: 'searchresult', params: {value: this.value}})
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
  .container{
    margin-top: 10px;
    width: 100%;
    height: 30px;
  }

  .mu-button{
    float: right;
    vertical-align: bottom;
    margin-top: 10px;
    height: 90%;
    background: #2955F3;
    background: linear-gradient(to right, #2955F3 0%, #7db8e7 70%);
    color: white;
  }

  .mu-text-field{
    height: 100%;
    width: 100%;
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

</style>
