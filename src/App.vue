<template>
  <div id="app">
    <top-nav />
    <router-view />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'

export default {
  name: 'app',
  components: {
    TopNav,
  },
}
</script>

<style lang="less">
@import './assets/globals.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @clr-font-default;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

.list-item {
  box-shadow: 0 2px 3px rgba(0,0,0,0.06);
  border: 1px solid rgba(150,150,150,0.3);
  border-bottom-color: rgba(150, 150, 150, 0.3);
  border-bottom-color: rgba(125,125,125,0.3);
  margin-bottom: 20px;
  padding: 0 20px 20px 20px;
  cursor: pointer;
  &:hover {
    box-shadow: none;
  }
}
</style>
