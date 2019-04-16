<template>
  <div class="white elevation-2 login-form">

    <v-btn depressed small @click="getRecipe()" dark>Test Get Product id 3</v-btn>

    <v-btn depressed small @click="getAllProducts()" dark>getAllProducts</v-btn>
    <br>
    <v-text-field label="Search Product" v-model="search"></v-text-field>
    <v-btn depressed small @click="searchProducts()" dark>Search Products (at least 2 chars)</v-btn>

     <v-dialog v-model="dialog" data-app temporary absolute width="500">
       <v-card>
        <v-card-title class="headline grey lighten-2" primary-title >
          Response
        </v-card-title>
        <v-card-text>
          {{response.data}}
        </v-card-text>
         <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import RecipeAPI from '@/spa/RecipeAPI'
export default {
  data () {
    return {
      dialog: false,
      response: '',
      search: ''
    }
  },
  methods: {
    async getRecipe () {
      try {
        this.response = await RecipeAPI.getrecipebyid({
          id: 3
        })
        this.dialog = true
      } catch (err) {
        console.log(err)
      }
    },
    async getAllProducts () {
      try {
        this.response = await RecipeAPI.getallproducts()
        this.dialog = true
      } catch (err) {
        console.log(err)
      }
    },
    async searchProducts () {
      try {
        if (this.search.length >= 2) { this.response = await RecipeAPI.searchproducts(this.search) } else { this.response.data = 'Enter more chars!' }
        this.dialog = true
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
