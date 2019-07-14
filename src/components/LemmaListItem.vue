<template>
  <div class="list-item lemma" v-on:click="onClick">
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

<style lang="less" scoped>
@import '../assets/globals.less';
div.lemma {
  text-align: left;
}
div.lemma:hover {
  background-color: @clr-d;
}
</style>
