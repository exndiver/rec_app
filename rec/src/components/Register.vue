<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense dark>
          <v-toolbar-title>Registration</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-4 pb-2">
           <v-flex xs12 offset-xs5 sm6 md3>
            <v-text-field label="Email" v-model="email" ></v-text-field>
           </v-flex>
          <v-flex xs12 offset-xs5 sm6 md3>
            <v-text-field label="PASSWORD" v-model="password" ></v-text-field>
           </v-flex>
           <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn class="cyan" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import AuthAPI from '@/spa/AuthAPI'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthAPI.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
