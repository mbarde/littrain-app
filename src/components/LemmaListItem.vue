<template>
  <div class="lemma" v-on:click="onClick">
    <h3>{{title}}</h3>
    <i v-if="lemma">{{lemma.count}} occurences</i>
  </div>
</template>

<script>
import { getContent } from '../utils/plone-api'

export default {
  name: 'LemmaListItem',
  props: ['title', 'url'],
  data () {
    return {
      lemma: false,
    }
  },
  methods: {
    onClick: function() {
    }
  },
  mounted () {
    getContent(this.url).then((lemma) => {
      this.lemma = lemma
    })
  }
}
</script>

<style scoped>
div.lemma {
  box-shadow: 0 2px 3px rgba(0,0,0,0.06);
  border: 1px solid rgba(150,150,150,0.3);
  border-bottom-color: rgba(150, 150, 150, 0.3);
  border-bottom-color: rgba(125,125,125,0.3);
  margin-bottom: 20px;
  padding: 0 20px 20px 20px;
  cursor: pointer;
}
div.lemma:hover {
  background-color: rgba(0,0,130, 0.3);
}
div.lemma {
  text-align: left;
}
</style>
