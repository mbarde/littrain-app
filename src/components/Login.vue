<template>
  <div>
    <nerd-icon number="45" transition="bounce" />
    <h1>Login</h1>

    <div class="login-form">
      <p v-if="errMsg">{{errMsg}}</p>
      <input type="text" id="username" name="username"
             v-model="username" placeholder="Username"
             @keyup.enter="handleLogin()" :disabled="tryingLogin" />
      <input type="password" id="password" name="password"
             v-model="password" placeholder="Password"
             @keyup.enter="handleLogin()" :disabled="tryingLogin" />
      <button id="btn-login"  class="btn block"
              @click="handleLogin()" :disabled="tryingLogin">Login
      </button>
    </div>
  </div>
</template>

<script>
import { isLoggedIn } from '../utils/auth'
import { login } from '../utils/plone-api'
import NerdIcon from './NerdIcon.vue'

export default {
  name: 'Login',
  components: {
    NerdIcon,
  },
  data () {
    return {
      username: '',
      password: '',
      errMsg: '',
      tryingLogin: false,
    }
  },
  methods: {
    handleLogin () {
      this.tryingLogin = true

      login(this.username, this.password).then((response) => {
        if (response === 401) {
          this.tryingLogin = false
          this.errMsg = 'Wrong username or password 🤔'
        }
        if (response === 200) {
          this.$router.push('/books')
        }
      })
    }
  },
  mounted () {
    if (isLoggedIn()) {
      this.$router.push('/books')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/globals.less';

.login-form {
  width: 50%;
  min-width: 290px;
  margin-left: auto;
  margin-right: auto;
}

input {
  font-size: @font-size-bigger;
  padding: 10px;
  display: block;
  width: 90%;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}

#btn-login {
  margin-left: auto;
  margin-right: auto;
  font-size: @font-size-bigger;
}
</style>
