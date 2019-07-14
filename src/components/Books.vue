<template>
  <div>
    <h1>Books</h1>
    <div v-for="(book, index) in books" :key="index">
      <book-list-item :title="book.title"
            :author="book.author"
            :id="book.id">
      </book-list-item>
    </div>
  </div>
</template>

<script>
import { getContent } from '../utils/plone-api'
import BookListItem from './BookListItem.vue'

export default {
  name: 'Books',
  components: {
    BookListItem
  },
  data () {
    return {
      books: [],
    }
  },
  mounted () {
    getContent('/books').then((res) => {
      res.items.forEach((item) => {
        getContent(item['@id']).then((book) => {
          this.books.push(book)
        })
      })
    })
  }
}
</script>

<style scoped>
</style>
