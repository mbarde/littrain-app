<template>
  <div class="chapter" v-on:click="onClick">
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
  box-shadow: 0 2px 3px rgba(0,0,0,0.06);
  border: 1px solid rgba(150,150,150,0.3);
  border-bottom-color: rgba(150, 150, 150, 0.3);
  border-bottom-color: rgba(125,125,125,0.3);
  margin-bottom: 20px;
  padding: 0 20px 20px 20px;
  cursor: pointer;
}
div.chapter:hover {
  background-color: rgba(130,0,130, 0.3);
}
div.chapter {
  text-align: left;
}
</style>
