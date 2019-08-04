<template>
  <transition name="bounce">
    <div class="btn to-top-btn" v-if="show" v-on:click="onClick">
      <span class="inner">&#8593;</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BtnToTop',
  components: {
  },
  data () {
    return {
      show: false,
    }
  },
  methods: {
    onClick: function() {
      this.$scrollTo('html', 600)
    },
    onScroll: function() {
      if (window.top.scrollY > 30) {
        this.show = true
      } else {
        this.show = false
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
}
</script>

<style lang="less" scoped>
.to-top-btn {
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 64px;
  height: 64px;
  padding: 0;
  box-shadow: 0 2px 3px rgba(0,0,0,0.06);
  background: white;

  span {
    line-height: 56px;
    font-size: 30px;
    font-weight: bolder;
    margin: 0;
    padding: 0;
  }

  &:hover {
    box-shadow: none;
  }
}

.bounce-enter-active {
  animation: bounce-in .4s;
}
.bounce-leave-active {
  animation: bounce-out .4s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
