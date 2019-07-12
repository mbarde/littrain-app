<template>
  <div class="book">
    <h1>{{title}}</h1>
    <i>by {{author}}</i>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: ['title', 'author']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
