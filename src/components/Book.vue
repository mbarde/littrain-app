<template>
  <div v-if="book" class="book">
    <nerd-icon number="14" />
    <h1>{{book.title}}</h1>
    <i>by {{book.author}}</i>
    <hr/>
    <div class="chapter" v-for="(chapter, index) in book.items" :key="index">
      <chapter-list-item :title="chapter.title"
                         :url="chapter['@id']">
      </chapter-list-item>
    </div>
  </div>
</template>

<script>
import { getContent } from '../utils/plone-api'
import ChapterListItem from './ChapterListItem.vue'
import NerdIcon from './NerdIcon.vue'

export default {
  name: 'Book',
  components: {
    ChapterListItem,
    NerdIcon,
  },
  data () {
    return {
      book: false,
    }
  },
  mounted () {
    var bookUrl = this.$route.path
    getContent(bookUrl).then((book) => {
      this.book = book
    })
  }
}
</script>

<style scoped>
</style>
