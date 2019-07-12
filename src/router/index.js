import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import Welcome from '@/components/Welcome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    }
  ]
})
