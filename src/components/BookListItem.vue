<template>
  <div class="list-item book" v-on:click="onClick">
    <h1>{{title}}</h1>
    <i>by {{author}}</i>
  </div>
</template>

<script>
export default {
  name: 'BookListItem',
  props: ['title', 'author', 'id'],
  methods: {
    onClick: function() {
      this.$router.push(`${this.$route.path}/${this.id}`)
    }
  },
}
</script>

<style scoped>
div.book:hover {
  background-color: rgba(0,130,130, 0.3);
}
</style>
