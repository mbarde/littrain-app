<template>
  <div>
    <nav class="tabs">
      <ul>
        <li v-for="(title, index) in titles"
            :key="index"
            :class="getClassOfNavLi(index)"
            @click="setActiveTab(index)"
            @mouseover="setActiveTab(index)">
          {{title}}
        </li>
      </ul>
    </nav>
    <br/>
    <div v-for="(tab, index) in tabs" :key="index">
      <slot :name="tab" v-if="activeTab == tab"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  components: {
  },
  props: ['tabs', 'titles'],
  data () {
    return {
      activeTab: false,
    }
  },
  methods: {
    getClassOfNavLi: function(index) {
      if (index > this.tabs.length) return ''
      if (this.tabs[index] === this.activeTab) {
        return 'active'
      }
      return ''
    },
    setActiveTab: function(index) {
      if (index > this.tabs.length) return
      this.activeTab = this.tabs[index]
    }
  },
  mounted() {
    if (this.tabs.length > 0) this.activeTab = this.tabs[0]
  },
}
</script>

<style lang="less" scoped>
@import '../assets/globals.less';

nav.tabs {
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    cursor: pointer;
    border-bottom: 1px solid @btn-border-gray;
    float: left;
    display: block;
    margin-right: 20px;
    color: #939393;
    &.active,
    &:hover {
      color: @clr-font-default;
      border-color: @clr-e;
    }
  }
}
</style>
