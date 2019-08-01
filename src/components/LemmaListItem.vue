<template>
  <div class="list-item lemma" v-on:click="onClick" v-if="lemma">
    <h3 :id="'h3-' + lemma.UID">{{title}}</h3>
    <i class="pos">{{lemma.partOfSpeech}}</i>
    <i class="occ">{{lemma.count}} occurences</i>
    <transition name="slide">
      <div class="content" v-if="showContent">
        <ul>
          <li v-for="(definition, index) in lemma.definitions" :key="index">
            {{definition}}
          </li>
        </ul>
      </div>
    </transition>
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
      showContent: false,
    }
  },
  methods: {
    onClick: function() {
      this.showContent = !this.showContent
      this.$scrollTo(`#h3-${this.lemma.UID}`, 600)
    }
  },
  mounted () {
    getContent(this.url).then((lemma) => {
      this.lemma = lemma
      this.lemma.definitions = JSON.parse(lemma.definitions)
    })
  }
}
</script>

<style lang="less" scoped>
@import '../assets/globals.less';
div.lemma {
  text-align: left;
  i.occ {
    float: right;
  }
}
div.lemma:hover {
  background-color: @clr-d;
}


.slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>
