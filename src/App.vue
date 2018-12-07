<template>
  <div id="app">

    <router-view></router-view>

    <div class="tabber">
      <bottomtab></bottomtab>
    </div>
  </div>
</template>

<script>
  import bottomtab from './components/bottomTab/BottomTab.vue'


  export default {
    name: 'App',
    components:{
      bottomtab
    }

  }
</script>

<style>
  .tabber{
    z-index: 20;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0px;
  }
</style>
