<template>
  <div v-if="lemma" :class="classes.join(' ')" @click="showContent()">
    <button class="btn btn-close" @click.stop="hideContent()">⨉</button>
    <h3 :id="'h3-' + lemma.UID">{{title}}</h3>
    <i class="pos">{{lemma.partOfSpeech}}</i>
    <i class="occ">{{lemma.count}} occurences</i>
    <transition name="slide">
      <div class="content" v-if="isContentVisible">
        <tabs :tabs="tabs"
              :titles="tabsTitles">
          <template v-slot:definitions>
            <ul>
              <li v-for="(definition, index) in lemma.definitions" :key="index">
                {{definition}}
              </li>
            </ul>
          </template>
          <template v-if="lemma.relatedWords.length > 0" v-slot:related>
            <ul>
              <li v-for="(item, index) in lemma.relatedWords" :key="index">
                <label>{{item.relationshipType}}</label>
                <ul>
                  <li v-for="(word, index) in item.words"
                      :key="index">{{word}}</li>
                </ul>
              </li>
            </ul>
          </template>
          <template v-if="lemma.examples.length > 0" v-slot:examples>
            <ul>
              <li v-for="(example, index) in lemma.examples" :key="index">
                {{example}}
              </li>
            </ul>
          </template>
        </tabs>
      </div>
    </transition>
  </div>
</template>

<script>
import { getContent } from '../utils/plone-api'
import Tabs from './Tabs.vue'

export default {
  name: 'LemmaListItem',
  components: {
    Tabs,
  },
  props: ['title', 'url'],
  data () {
    return {
      lemma: false,
      isContentVisible: false,
      classes: ['list-item', 'lemma', 'collapsed'],
      tabs: [],
      tabsTitles: [],
    }
  },
  methods: {
    addClass: function(className) {
      if (this.classes.indexOf(className) === -1) {
        this.classes.push(className)
      }
    },
    removeClass: function(className) {
      var idx = this.classes.indexOf(className)
      if (idx > -1) {
        this.classes.splice(idx, 1)
      }
    },
    showContent: function() {
      if (!this.isContentVisible) {
        this.isContentVisible = true
        this.removeClass('collapsed')
        this.$scrollTo(`#h3-${this.lemma.UID}`, 600)
      }
    },
    hideContent: function() {
      this.isContentVisible = false
      this.addClass('collapsed')
    },
  },
  mounted () {
    getContent(this.url).then((lemma) => {
      this.lemma = lemma
      this.lemma.definitions = JSON.parse(lemma.definitions)
      this.lemma.examples = JSON.parse(lemma.examples)
      this.lemma.relatedWords = JSON.parse(lemma.relatedWords)

      this.tabs = ['definitions']
      this.tabsTitles = ['Definitions']
      if (this.lemma.relatedWords.length > 0) {
        this.tabs.push('related')
        this.tabsTitles.push('Related words')
      }
      if (this.lemma.examples.length > 0) {
        this.tabs.push('examples')
        this.tabsTitles.push('Examples')
      }
    })
  }
}
</script>

<style lang="less" scoped>
@import '../assets/globals.less';
div.lemma {
  cursor: initial;
  cursor: normal;
  text-align: left;
  i.occ {
    float: right;
  }
  &.collapsed {
    cursor: pointer;
    &:hover {
      background-color: @clr-d;
    }
    .btn-close {
      display: none;
    }
  }

  .btn-close {
    float: right;
    margin-top: 18px;
    min-width: 39px;
  }
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
