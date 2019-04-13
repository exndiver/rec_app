<template>
<v-toolbar>
  <v-toolbar-title @click="navigate({name: 'Main'})" class="main_page">Reciples!</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn flat @click="navigate({name: 'Register'})">
     Sign Up
    </v-btn>
  </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
  methods: {
    navigate (route) {
      this.$router.push(route)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_page{
  cursor: pointer;
}
</style>
