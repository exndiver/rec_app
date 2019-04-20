<template>
<v-layout>
  <v-flex>
    <v-toolbar class="elevation-0">
      <v-toolbar-title class="main_page" @click="displaymenu()">
          <v-toolbar-side-icon></v-toolbar-side-icon>
       <span>Recipes!</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

       <v-toolbar-title v-if="$store.state.isLoggedIn" class="hidden-sm-and-down"> {{$store.state.user.email}}</v-toolbar-title>
       <v-toolbar-title v-if="$store.state.isLoggedIn">  <v-icon large color="green darken-2">fas fa-user</v-icon> </v-toolbar-title>
       <v-toolbar-title v-if="!$store.state.isLoggedIn">  <v-icon large color="darken-2">fas fa-user</v-icon> </v-toolbar-title>

    </v-toolbar>
    <v-navigation-drawer v-model="menu" absolute temporary>
            <v-list>
              <v-list-tile @click="navigate({name: 'Main'})">
                  <v-list-tile-action>
                    <v-icon large color="blue darken-2">home</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-title>Home</v-list-tile-title>
              </v-list-tile>

              <v-divider align-end fill-height></v-divider>
              <v-list-tile align-end fill-height @click="navigate({name: 'AddRecipe'})">
                  <v-list-tile-action>
                    <v-icon large color="green darken-2">fas fa-plus</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-title>Add Recipe</v-list-tile-title>
              </v-list-tile>

              <v-divider align-end fill-height></v-divider>
              <v-list-tile align-end fill-height flat v-if="!$store.state.isLoggedIn" @click="navigate({name: 'Register'})">
                  <v-list-tile-action>
                    <v-icon large color="blue darken-2">fas fa-sign-in-alt</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-title>Sign Up</v-list-tile-title>
              </v-list-tile>
              <v-list-tile align-end fill-height v-if="!$store.state.isLoggedIn" @click="navigate({name: 'Login'})">
                  <v-list-tile-action>
                    <v-icon large color="blue darken-2">fas fa-sign-in-alt</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-title>Log in</v-list-tile-title>
              </v-list-tile>
              <v-list-tile align-end fill-height v-if="$store.state.isLoggedIn" @click="logout()">
                  <v-list-tile-action>
                    <v-icon large color="orange darken-2">fas fa-sign-out-alt</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-title>Log Out</v-list-tile-title>
              </v-list-tile>
              </v-list>
    </v-navigation-drawer>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    menu: false
  }),
  methods: {
    displaymenu () {
      this.menu = !this.menu
    },
    navigate (route) {
      this.$router.push(route)
    },
    logout () {
      this.$router.push({name: 'Main'})
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
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
