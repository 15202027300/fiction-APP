<template>
  <mu-bottom-nav @change="change" :value.async="tab" class="nav">
    <mu-bottom-nav-item value="bookcase" title="书架" icon="book"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="selectView" title="精选" icon="local_library"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="library" title="书库" icon="import_contacts"></mu-bottom-nav-item>
    </mu-bottom-nav>
</template>

<script>
    export default {
        name: 'bottomTab',
        data(){
          return{
              tab:''  //默认值
          }
        },
        methods: {
            change(val){
              console.log(val);  //获取到该值
              this.$router.push(val)   //路由连接
            }
        }
    }
</script>

<style scoped>
  .nav{
    z-index: 20;
  }
</style>
