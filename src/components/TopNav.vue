<template>
  <nav class="top-nav">
    <button v-if="parentPath.length > 0"
            class="btn" id="btn-back" @click="gotoParent">Back</button>
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
    '$route' (to) {
      this.path = to.path
      var a = this.path.split('/')
      this.parentPath = a.slice(0, a.length-1).join('/')
    }
  },
  methods: {
    gotoParent: function() {
      this.$router.push(this.parentPath)
    }
  },
  mounted () {
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
  }
}
</style>
