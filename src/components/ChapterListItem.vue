<template>
  <div class="list-item chapter" v-on:click="onClick">
    <h3>{{title}}</h3>
    <i v-if="chapter">{{chapter.items_total}} words to learn</i>
  </div>
</template>

<script>
import { getContent } from '../utils/plone-api'

export default {
  name: 'ChapterListItem',
  props: ['title', 'url'],
  data () {
    return {
      chapter: false,
    }
  },
  methods: {
    onClick: function() {
      this.$router.push(`${this.$route.fullPath}/${this.chapter.id}`)
    }
  },
  mounted () {
    getContent(this.url).then((chapter) => {
      this.chapter = chapter
    })
  }
}
</script>

<style scoped>
div.chapter {
  text-align: left;
}
div.chapter:hover {
  background-color: rgba(130,0,130, 0.3);
}
</style>
