<template>
  <div>

     <v-btn depressed small @click="getRecipe()">Test Get Product id 3</v-btn>

     <v-dialog v-model="dialog" temporary absolute width="500">
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
      response: ''
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
    }
  }
}
</script>

<style scoped>

</style>
