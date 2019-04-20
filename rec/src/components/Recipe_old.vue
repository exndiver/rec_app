<template>
  <v-layout align-start justify-center row fill-height >
    <v-flex xs6>
      {{response.data}}
    </v-flex>
  </v-layout>
</template>

<script>
import RecipeAPI from '@/spa/RecipeAPI'
export default {
  data () {
    return {
      response: ''
    }
  },
  async mounted () {
    try {
      const recipeId = this.$route.params.recipeId
      this.response = await RecipeAPI.getrecipebyid({ id: recipeId })
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>
