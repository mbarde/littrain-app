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

<style lang="less" scoped>
@import '../assets/globals.less';
div.chapter {
  text-align: left;
  &:hover {
    background-color: @clr-c;
  }
}
</style>
