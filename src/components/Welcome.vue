<template>
  <div>
    <h1>Hello book worm!</h1>
    <a v-if="isLoggedIn" href="#/login">To the books</a>
    <a v-else href="#/login">Login</a>
  </div>
</template>

<script>
import { isLoggedIn } from '../utils/auth'

export default {
  name: 'Welcome',
  data () {
    return {
      isLoggedIn: false,
    }
  },
  mounted () {
    if (isLoggedIn()) {
      this.isLoggedIn = isLoggedIn
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
