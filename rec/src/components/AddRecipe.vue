<template>
   <v-layout align-start justify-center row fill-height >
    <v-flex xs12 sm10 md8 lg6 fill-height>
      <v-card ref="form">
        <v-container id="scroll-target" class="scroll-y" fluid ma-0 pa-0 fill-height >
        <v-card-text>
          <v-text-field ref="title" @change="saveProduct()" v-model="title" clearable :rules="[() => !!title || 'This field is required']" :error-messages="errorMessages" label="Recipe title" required></v-text-field>
          <v-textarea ref="describtion" @change="saveProduct()" v-model="describtion" name="describtion" label="Recipe description" value="" hint="Enter description for your reciple" :rules="[() => !!describtion || 'This field is required']" :error-messages="errorMessages" required></v-textarea>

          <v-select v-model="resType" @change="saveProduct()" clearable chips deletable-chips :items="items" attach label="Type" multiple ></v-select>

          <v-layout align-center justify-space-around row ><v-select @change="saveProduct()" v-model="resTags" selection="disabled: false" type='text' clearable chips deletable-chips :items="tags" item-text="name" item-value="id" attach label="Tags" multiple ></v-select> <v-icon absolute top right @click="AddTagWindow = true">add</v-icon></v-layout>

          <v-layout align-center justify-space-between row fill-height>
          <v-flex xs2 sm4 md1><v-text-field @change="saveProduct()" xs12  ref="timetocook" type="number" v-model="timetocook" :rules="[() => !!timetocook || '*']" :error-messages="errorMessages" label="Time" placeholder="Min" required></v-text-field></v-flex>
          <v-data-table :items="AddedProducts" :hide-actions="true" :hide-headers='true' class="elevation-1">

            <template v-slot:no-data>
                Add some Ingredients
            </template>
            <template v-slot:items="props">
              <tr>
                <td>{{ props.item.name }}</td>
                <td > <v-flex>
                  <v-text-field v-model="props.item.amount" value="100" label="Amount (g)" reverse type="number"></v-text-field>
                  </v-flex>
                </td>
              </tr>
            </template>
          </v-data-table>
          <v-btn right class="elevation-1" @click="OpenAddProduct" >
            <v-icon >add</v-icon>
          </v-btn></v-layout>

          <v-layout align-center justify-space-between row fill-height>
            <v-text-field @change="saveProduct()" ref="imagefile" v-model="imagefile" clearable :rules="[() => !!imagefile || 'This field is required']" :error-messages="errorMessages" label="URL to file" required></v-text-field>
          </v-layout>

           <v-layout align-center justify-space-between row fill-height>
          <v-flex xs2 sm5 md2><v-text-field @change="saveProduct()" type="number" ref="kcal" v-model="kcal" :rules="[() => !!kcal || '*']" :error-messages="errorMessages" label="Calories" placeholder="0" required></v-text-field></v-flex>
          <v-flex xs2 sm5 md2><v-text-field @change="saveProduct()" type="number" ref="fat" v-model="fat"  :rules="[() => !!fat || '*']" :error-messages="errorMessages" label="Fat (g)" placeholder="0" required></v-text-field></v-flex>
          <v-flex xs2 sm5 md2><v-text-field @change="saveProduct()" type="number" ref="carbs" v-model="carbs" :rules="[() => !!carbs || '*']" :error-messages="errorMessages" label="Carbohydrate (g)" placeholder="0" required></v-text-field></v-flex>
          <v-flex xs2 sm5 md2><v-text-field @change="saveProduct()" type="number" ref="protein" v-model="protein" :rules="[() => !!protein || '*']" :error-messages="errorMessages" label="Protein (g)" placeholder="0" required></v-text-field></v-flex>
          </v-layout>
        </v-card-text>
        </v-container>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions >
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
                <v-btn v-if="formHasErrors" icon class="my-0" @click="resetForm">
                  <v-icon>refresh</v-icon>
                </v-btn>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-dialog v-model="AddProductWindow" max-width="900">
      <v-card>
        <v-card-title class="headline">Add Ingredient<v-spacer></v-spacer>
         <v-tooltip bottom> <template v-slot:activator="{ on }">
          <v-btn fab dark color="indigo" v-on="on" @click="navigate({name: 'AddProduct'})"> <v-icon dark>add</v-icon></v-btn>
        </template> <span>Add New Product (You gonna lose oll the data on this form)</span></v-tooltip>
        </v-card-title>
        <v-card-text>

          <v-data-table v-model="selected" :headers="headers" :items="Products" :pagination.sync="pagination" select-all item-key="name" class="elevation-1">
            <template v-slot:headers="props">
              <tr>
                <th>
                  <v-checkbox :input-value="props.all" :indeterminate="props.indeterminate" primary hide-details @click.stop="toggleAll" ></v-checkbox>
                </th>
                <th v-for="header in props.headers" :key="header.text" :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']" @click="changeSort(header.value)" >
                  <v-icon small>arrow_upward</v-icon>
                  {{ header.text }}
                </th>
              </tr>
            </template>
            <template v-slot:items="props">
              <tr :active="props.selected" @click="props.selected = !props.selected">
                <td>
                  <v-checkbox :input-value="props.selected" primary hide-details ></v-checkbox>
                </td>
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.kcal }}</td>
                <td class="text-xs-right">{{ props.item.composition.fat }}</td>
                <td class="text-xs-right">{{ props.item.composition.carbohydrate }}</td>
                <td class="text-xs-right">{{ props.item.composition.protein }}</td>
              </tr>
            </template>
          </v-data-table>

          </v-card-text>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="AddProductWindow = false" >Cancel</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="AddIngredient ">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="AddTagWindow" max-width="290">
      <v-card>
        <v-card-title class="headline">New Tag</v-card-title>
        <v-card-text>
          <v-text-field ref="NewTag" v-model="newTag" clearable :rules="[() => !!newTag || 'This field is required']" :error-messages="errorMessages" label="New Tag" required></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="AddTagWindow = false" >Cancel</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="AddNewTag">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import RecipeAPI from '@/spa/RecipeAPI'
import TagsAPI from '@/spa/TagsAPI'
import Modaladdtag from './Modaladdtag.vue'

export default {
  name: 'AddRecipe',
  componens: {
    Modaladdtag: Modaladdtag
  },
  data () {
    return {
      recipe: null,
      errorMessages: '',
      formHasErrors: false,

      title: null,
      describtion: null,
      resType: null,
      resTags: null,
      AddedProducts: [],
      timetocook: null,
      imagefile: null,
      kcal: null,
      fat: null,
      carbs: null,
      protein: null,

      items: ['Breakfast', 'Lunch', 'Diner', 'Snack'],
      tags: [],
      AddTagWindow: false,
      newTag: null,
      AddProductWindow: false,
      Products: [],
      headers: [
        {
          text: 'Products (100g serving)',
          align: 'left',
          value: 'name'
        },
        { text: 'Calories', value: 'kcal' },
        { text: 'Fat (g)', value: 'composition.fat' },
        { text: 'Carbs (g)', value: 'composition.carbohydrate' },
        { text: 'Protein (g)', value: 'composition.protein' }
      ],
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      ProductLis: []
    }
  },
  async mounted () {
    try {
      this.title = this.$store.state.savedProduct.title
      this.describtion = this.$store.state.savedProduct.describtion
      this.resType = this.$store.state.savedProduct.resType
      this.resTags = this.$store.state.savedProduct.resTags
      this.AddedProducts = this.$store.state.savedProduct.AddedProducts
      this.timetocook = this.$store.state.savedProduct.timetocook
      this.imagefile = this.$store.state.savedProduct.imagefile
      this.kcal = this.$store.state.savedProduct.kcal
      this.fat = this.$store.state.savedProduct.fat
      this.carbs = this.$store.state.savedProduct.carbs
      this.protein = this.$store.state.savedProduct.protein
    } catch (err) {
      console.log(err)
    }
    try {
      this.response = await RecipeAPI.getallproducts()
      this.response.data.forEach((element) => this.Products.push(element))
      this.response = await TagsAPI.getalltags()
      this.response.data['tag'].forEach((element) => this.tags.push(element))
    } catch (err) {
      console.log(err)
    }
  },
  watch: {
    name () {
      this.errorMessages = ''
    }
  },
  computed: {
    form () {
      return {
        title: this.title,
        describtion: this.describtion,
        timetocook: this.timetocook,
        imagefile: this.imagefile,
        kcal: this.kcal,
        fat: this.fat,
        carbs: this.carbs,
        protein: this.protein
      }
    }
  },
  methods: {
    navigate (route) {
      this.$router.push(route)
    },
    resetForm () {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    saveProduct () {
      this.$store.dispatch('saveProduct', {
        title: this.title,
        describtion: this.describtion,
        resType: this.resType,
        resTags: this.resTags,
        AddedProducts: this.AddedProducts,
        timetocook: this.timetocook,
        imagefile: this.imagefile,
        kcal: this.kcal,
        fat: this.fat,
        carbs: this.carbs,
        protein: this.protein
      })
    },
    async AddNewTag () {
      const response = await TagsAPI.addtag({
        name: this.newTag
      })
      console.log(response)
      this.response = await TagsAPI.getalltags()
      this.response.data['tag'].forEach((element) => this.tags.push(element))
      this.AddTagWindow = false
    },
    OpenAddProduct () {
      this.AddProductWindow = true
      this.selected = this.AddedProducts.slice()
    },
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.Products.slice()
    },
    AddIngredient () {
      this.AddedProducts = this.selected.slice()
      this.AddProductWindow = false
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    async submit () {
      this.formHasErrors = false
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true
        return this.$refs[f].validate(true)
      })
      this.tagsString = JSON.stringify(this.resTags)
      this.typeString = JSON.stringify(this.resType)
      this.AddedProducts.forEach((element) => {
        this.ProductLis.push({
          id: element.id,
          name: element.name,
          amount: element.amount
        })
      })
      if (!this.formHasErrors) {
        this.recipe = {
          title: this.title,
          description: this.describtion,
          type: this.typeString,
          tags: this.tagsString,
          ingedients: JSON.stringify(this.ProductLis),
          time: this.timetocook,
          image: this.imagefile,
          kcal: this.kcal,
          composition: JSON.stringify({
            fat: this.fat,
            carbs: this.carbs,
            protein: this.protein
          })
        }
        this.response = await RecipeAPI.addrecipe(this.recipe)
        this.$router.push({
          name: 'Recipe',
          params: {
            recipeId: this.response.data.recipe.id
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
