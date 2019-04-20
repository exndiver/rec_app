<template>
  <div class = "recipe">
    <v-layout>
    <v-flex>
        <v-img
          :src = "response.image"
          aspect-ratio="2"
        ></v-img>
        <div>
          <h3 class="headline mb-0">{{response.title}}</h3>
          <h6>{{response.time}} minutes {{response.kcal}} kcalories per serving</h6>
          <div>
            {{response.description}}
          </div>
        </div>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
/* export default {
  name: 'Recipe',
  data () {
    return {
      title: 'Raw mango cheesecake',
      ingredients: [{
        id: '5cae469d545f17641fdada6c',
        title: 'almonds',
        kcal: 38,
        composition: {
          carbohydrate: 9.6,
          protein: 0.8,
          fat: 0
        }
      },
      {
        id: '5cae469d545f17641fdada6c',
        title: 'dates',
        kcal: 38,
        composition: {
          carbohydrate: 9.6,
          protein: 0.8,
          fat: 0
        }
      },
      {
        id: '5cae469d545f17641fdada6c',
        title: 'lemon juice',
        kcal: 38,
        composition: {
          carbohydrate: 9.6,
          protein: 0.8,
          fat: 0
        }
      }],
      time: '3',
      kcal: '283',
      description: '',
      type: '',
      composition: {
        carbohydrate: 9.6,
        protein: 0.8,
        fat: 0
      },
      img_url: require('./../assets/recipe1.jpg'),
      tags: ['gluten-free', 'vegan', 'lactose-free']
    }
  }
} */

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
      const responseData = await RecipeAPI.getrecipebyid({ id: recipeId })
      /* Need to be ralaced */
      responseData.data.recipe.image = 'https://www.cookingclassy.com/wp-content/uploads/2014/03/hummus-31.jpg'
      // require('@/assets/recipe1.jpg')
      /* */
      this.response = responseData.data.recipe
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
