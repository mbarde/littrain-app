<template>
  <object :class="imgClass" :data="imgSrc" type="image/svg+xml" />
</template>

<script>
export default {
  name: 'NerdIcon',
  props: ['number', 'size'],
  data () {
    return {
      imgSrc: false,
      imgClass: 'icon',
    }
  },
  mounted () {
    var nr = this.number.padStart(2, '0')
    var images = require.context('../assets/nerd-icons/SVG/', false, /\.svg/)
    this.imgSrc = images(`./${nr}.svg`)

    if (this.size == 'small') {
      this.imgClass = 'icon small'
    }
    if (this.size == 'medium') {
      this.imgClass = 'icon medium'
    }
    if (this.size == 'large') {
      this.imgClass = 'icon large'
    }
  }
}
</script>

<style lang="less" scoped>
.icon {
  width: 128px;
  height: 128px;
  &.small {
    width: 64px;
    height: 64px;
  }
  &.medium {
    width: 128px;
    height: 128px;
  }
  &.large {
    width: 256px;
    height: 256px;
  }
}
</style>
