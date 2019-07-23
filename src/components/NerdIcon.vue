<template>
  <div>
  <transition name="rotate">
    <object v-if="show" :class="imgClass" :data="imgSrc" type="image/svg+xml" />
  </transition>
</div>
</template>

<script>
export default {
  name: 'NerdIcon',
  props: ['number', 'size'],
  data () {
    return {
      imgSrc: false,
      imgClass: 'icon',
      show: false,
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
    this.show = true
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
.rotate-enter-active {
  animation: rotate-in .5s;
}
.rotate-leave-active {
  animation: rotate-in .5s reverse;
}
@keyframes rotate-in {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
