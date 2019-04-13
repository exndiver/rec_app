<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body{
  background: #a6aaad;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #757575, #a6aaad);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #757575, #a6aaad); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
