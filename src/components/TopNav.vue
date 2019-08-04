<template>
  <nav class="top-nav">
    <button v-if="parentPath.length > 0"
            class="btn" id="btn-back" @click="gotoParent">☚</button>
  </nav>
</template>

<script>

export default {
  name: 'TopNav',
  props: [],
  data () {
    return {
      path: '',
      parentPath: '',
    }
  },
  watch: {
    '$route' () {
      this.updatePathes()
    }
  },
  methods: {
    gotoParent: function() {
      this.$router.push(this.parentPath)
    },
    updatePathes: function() {
      this.path = this.$router.currentRoute.fullPath
      var a = this.path.split('/')
      this.parentPath = a.slice(0, a.length-1).join('/')
    }
  },
  mounted () {
    this.updatePathes()
  }
}
</script>

<style lang="less" scoped>
@import '../assets/globals.less';

nav.top-nav {
  position: relative;
  #btn-back {
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    font-size: 20px;
    padding: 0;
    padding-bottom: 4px;
  }
}
</style>
