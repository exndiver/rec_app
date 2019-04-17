<template>
  <div id="app" data-app>
    <page-header />
    <div id="content">
    <router-view/>
    </div>

  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-height: 100%;
  /* equal to footer height */
}
#app:after{
  content: "";
  display: block;
}
body{
  background: #a6aaad;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #757575, #a6aaad);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #757575, #a6aaad); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

html, body {
  height: 100%;
}
</style>
