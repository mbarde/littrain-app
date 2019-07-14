<template>
  <div class="list-item book" v-on:click="onClick">
    <nerd-icon class="nerd-icon" number="12" size="small" />
    <h2>{{title}}</h2>
    <i>by {{author}}</i>
  </div>
</template>

<script>
import NerdIcon from './NerdIcon.vue'

export default {
  name: 'BookListItem',
  components: {
    NerdIcon,
  },
  props: ['title', 'author', 'id'],
  methods: {
    onClick: function() {
      this.$router.push(`${this.$route.path}/${this.id}`)
    }
  },
}
</script>

<style lang="less" scoped>
@import '../assets/globals.less';
div.book {
  text-align: left;
  &:hover {
    background-color: @clr-b;
  }
  .nerd-icon {
    margin-top: 25px;
    float: left;
    margin-right: 15px;
  }
}
</style>
