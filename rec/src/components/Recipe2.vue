<template>
  <div class = "recipe">
    <v-layout>
    <v-flex>
        <v-img
          :src = "img_url"
          aspect-ratio="2"
        ></v-img>
        <div>
          <h3 class="headline mb-0">{{title}}</h3>
          <h6>{{time}} minutes {{kcal}} kcalories per serving</h6>
          <div>
            <p>1. Place the cashews in a big bowl, cover with water and soak overnight, or for at least 4 hours before making the cake.</p>
            <p>2. Start by preparing the crust. Add walnuts, cinnamon and salt into a blender or a food processor and grind until fine crumble. Cut the dates into smaller pieces and add in couple turns. Blend until you get a sticky dough. Line the bottom of a cake tin with baking paper and press the dough to the bottom of the cake tin. Place it in the freezer while making the filling.</p>
            <p>3. Rinse the blender. Drain and rinse the cashews and add them to the blender. Add all other ingredients and blend for a few minutes, until you get a creamy and smooth texture. Taste, and add some honey, if you&#8217;d like to add some sweetness.</p>
            <p>4. Take the cake tin from the freezer and pour the filling on top of the crust. Return to the freezer for 4 to 6 hours until the filling has set.</p>
            <p>5. When the filling has set, take the cake from the freezer and remove the sides of the cake tin carefully. Decorate with the fresh berries and edible flowers and let thaw for 15-20 minutes before serving. The cake will remain good in the fridge for a couple of days, for longer periods, store in the freezer.</p>
          </div>
        </div>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
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
        },
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
