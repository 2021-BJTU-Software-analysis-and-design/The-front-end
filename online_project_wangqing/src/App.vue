<template>
  <div id="app">
    <MyHeader />
     <router-view></router-view>
    <Bottom />
  </div>
</template>

<script>
import MyHeader from "./components/myHeader.vue"
import Bottom from './components/bottom.vue'
export default {
  name: 'App',
  components: {
    MyHeader, Bottom
    // News
    // HelloWorld
  }
}
</script>

<style lang='less' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  .placeholder {
      height: 1500px;
  }
}
</style>
