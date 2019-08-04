<template>
  <div v-if="chapter" class="chapter">
    <nerd-icon number="7" transition="rotate" />
    <h1>{{chapter.title}}</h1>
    <hr/>
    <div class="lemma" v-for="(lemma, index) in chapter.items" :key="index">
      <lemma-list-item :title="lemma.title"
                         :url="lemma['@id']">
      </lemma-list-item>
    </div>
    <btn-to-top/>
  </div>
</template>

<script>
import { getContent } from '../utils/plone-api'
import LemmaListItem from './LemmaListItem.vue'
import BtnToTop from './BtnToTop.vue'
import NerdIcon from './NerdIcon.vue'

export default {
  name: 'Chapter',
  components: {
    LemmaListItem,
    BtnToTop,
    NerdIcon,
  },
  data () {
    return {
      chapter: false,
      lemmas: [],
    }
  },
  mounted () {
    var chapterUrl = this.$route.path
    getContent(chapterUrl).then((chapter) => {
      this.chapter = chapter
    })
  }
}
</script>

<style scoped>
</style>
