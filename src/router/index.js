import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/Book'
import Books from '@/components/Books'
import Chapter from '@/components/Chapter'
import Login from '@/components/Login'
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/books/:id',
      name: 'Book',
      component: Book
    },
    {
      path: '/books/:id/:chapter',
      name: 'Chapter',
      component: Chapter
    },
  ]
})
