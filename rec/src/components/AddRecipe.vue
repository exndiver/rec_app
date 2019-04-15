<template>
   <v-layout align-start justify-center fill-height style="min">
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field ref="title" v-model="title" clearable :rules="[() => !!title || 'This field is required']" :error-messages="errorMessages" label="Recipe title" required></v-text-field>
          <v-textarea ref="describtion" name="describtion" label="Recipe description" value="" hint="Enter description for your reciple" :rules="[() => !!describtion || 'This field is required']" :error-messages="errorMessages" required></v-textarea>
          <v-select v-model="resType" clearable chips deletable-chips :items="items" attach label="Type" multiple required></v-select>
          <v-layout align-center justify-space-around row ><v-select v-model="resTags" selection="disabled: false" type='text' clearable chips deletable-chips :items="tags" attach label="Tags" multiple ></v-select> <v-icon absolute top right @click="AddTagWindow = true">add</v-icon></v-layout>
          <v-layout align-center justify-space-around row ><p>Ingredients? </p><v-icon absolute top right @click="OpenAddProduct">add</v-icon></v-layout>

        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
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

     <v-dialog data-app v-model="AddTagWindow" max-width="290">
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

    <v-dialog v-model="AddProductWindow" max-width="900">
      <v-card>
        <v-card-title class="headline">Add Ingredient</v-card-title>
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
          <v-btn color="green darken-1" flat="flat" @click="AddIngredient ">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      errorMessages: '',
      formHasErrors: false,
      title: null,
      describtion: null,
      resType: null,
      items: ['Breakfast', 'Lunch', 'Diner', 'Snack'],
      resTags: null,
      tags: ['tag1', 'tag2'],
      AddTagWindow: false,
      newTag: null,
      AddProductWindow: false,
      Products: [{
        'id': '5ca910368cb40600621b0898',
        'name': 'Mango',
        'group': 'fruit',
        'kcal': 62,
        'composition': {
          'carbohydrate': 12.5,
          'protein': 0.6,
          'fat': 0.4
        }
      },
      {
        'id': '5cae443b0d2dfa36c10d7794',
        'name': 'Banana',
        'group': 'fruit',
        'kcal': 95,
        'composition': {
          'carbohydrate': 20.9,
          'protein': 1.2,
          'fat': 0.3
        }
      },
      {
        'id': '5cae4579a423bd2239a5e908',
        'name': 'Lemon',
        'group': 'fruit',
        'kcal': 18,
        'composition': {
          'carbohydrate': 2.9,
          'protein': 0.9,
          'fat': 0.3
        }
      },
      {
        'id': '5cae469d545f17641fdada6c',
        'name': 'Pomelos',
        'group': 'fruit',
        'kcal': 38,
        'composition': {
          'carbohydrate': 9.6,
          'protein': 0.8,
          'fat': 0
        }
      },
      {
        'id': '5cae476590e7374504d4244e',
        'name': 'Raspberry',
        'group': 'fruit',
        'kcal': 25,
        'composition': {
          'carbohydrate': 4.7,
          'protein': 1.3,
          'fat': 0.3
        }
      },
      {
        'id': '5cae4804685a3c94dd73e69b',
        'name': 'Strawberry',
        'group': 'fruit',
        'kcal': 28,
        'composition': {
          'carbohydrate': 5.99,
          'protein': 0.8,
          'fat': 0.1
        }
      }],
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
      AddedProducts: []
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
        resType: this.resType
      }
    }
  },
  methods: {
    resetForm () {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    submit () {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
    },
    AddNewTag () {
      this.AddTagWindow = false
      this.tags.push(this.newTag)
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
    }
  }
}
</script>

<style scoped>

</style>
