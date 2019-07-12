<template>
  <div>
    <h1>Books</h1>
    <div v-for="(book, index) in books" :key="index">
      <book :title="book.title"
            :author="book.author">
      </book>
    </div>
  </div>
</template>

<script>

import { getContent } from '../utils/plone-api'
import Book from './Book.vue'

export default {
  name: 'Books',
  components: {
    Book
  },
  data () {
    return {
      books: [
        {'title': 'Alice in Wonderland', 'author': 'Lewis Carroll'},
        {'title': 'His Dark Materials', 'author': 'Philipp Pullmann'},
      ]
    }
  },
  mounted () {
    getContent('http://localhost:5080/Plone/books').then((res) => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
