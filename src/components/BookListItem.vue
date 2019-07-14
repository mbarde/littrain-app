<template>
  <div class="book" v-on:click="onClick">
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
div.book {
  box-shadow: 0 2px 3px rgba(0,0,0,0.06);
  border: 1px solid rgba(150,150,150,0.3);
  border-bottom-color: rgba(150, 150, 150, 0.3);
  border-bottom-color: rgba(125,125,125,0.3);
  margin-bottom: 20px;
  padding: 0 20px 20px 20px;
  cursor: pointer;
}
div.book:hover {
  background-color: rgba(0,130,130, 0.3);
}
</style>
