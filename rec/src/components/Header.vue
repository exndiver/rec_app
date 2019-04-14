<template>
<v-layout row>
  <v-flex>
    <v-toolbar>

      <v-toolbar-title class="main_page" @click="displaymenu()">
          <v-toolbar-side-icon></v-toolbar-side-icon>
        <span>Reciples!</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-if="!$store.state.isLoggedIn" @click="navigate({name: 'Login'})">
        Login
        </v-btn>
        <v-btn flat v-if="!$store.state.isLoggedIn" @click="navigate({name: 'Register'})">
        Sign Up
        </v-btn>
        </v-toolbar-items>
        <v-toolbar-items >
          <v-btn flat v-if="$store.state.isLoggedIn" @click="logout()">
          Logout
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="menu" absolute temporary>
            <v-list>
              <v-list-tile @click="navigate({name: 'Main'})">
                  <v-list-tile-action>
                    <v-icon>home</v-icon>
                  </v-list-tile-action>
                    <v-list-tile-title>Home</v-list-tile-title>
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
