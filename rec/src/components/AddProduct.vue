<template>
   <v-layout align-start justify-center row fill-height >
    <v-flex xs12 sm10 md8 lg6 fill-height>
      <v-card ref="form">
        <v-container id="scroll-target" class="scroll-y" fluid ma-0 pa-0 fill-height >
        <v-card-text>
          <v-text-field ref="title" v-model="title" clearable :rules="[() => !!title || 'This field is required']" :error-messages="errorMessages" label="Product title" required></v-text-field>
          <v-layout align-center justify-space-between row fill-height>
            <v-text-field ref="imagefile" v-model="imagefile" clearable :rules="[() => !!imagefile || 'This field is required']" :error-messages="errorMessages" label="URL to image" required></v-text-field>
          </v-layout>
           <v-layout align-center justify-space-between row fill-height>
          <v-flex xs2 sm5 md2><v-text-field type="number" ref="kcal" v-model="kcal" :rules="[() => !!kcal || '*']" :error-messages="errorMessages" label="Calories" placeholder="0" required></v-text-field></v-flex>
          <v-flex xs2 sm5 md2><v-text-field type="number" ref="fat" v-model="fat"  :rules="[() => !!fat || '*']" :error-messages="errorMessages" label="Fat (g)" placeholder="0" required></v-text-field></v-flex>
          <v-flex xs2 sm5 md2><v-text-field type="number" ref="carbs" v-model="carbs" :rules="[() => !!carbs || '*']" :error-messages="errorMessages" label="Carbohydrate (g)" placeholder="0" required></v-text-field></v-flex>
          <v-flex xs2 sm5 md2><v-text-field type="number" ref="protein" v-model="protein" :rules="[() => !!protein || '*']" :error-messages="errorMessages" label="Protein (g)" placeholder="0" required></v-text-field></v-flex>
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
  </v-layout>
</template>

<script>
import RecipeAPI from '@/spa/RecipeAPI'

export default {
  name: 'AddProduct',
  data () {
    return {
      errorMessages: '',
      formHasErrors: false,
      title: null,
      imagefile: null,
      kcal: null,
      fat: null,
      carbs: null,
      protein: null
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
        imagefile: this.imagefile,
        kcal: this.kcal,
        fat: this.fat,
        carbs: this.carbs,
        protein: this.protein
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
    async submit () {
      this.formHasErrors = false
      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true
        return this.$refs[f].validate(true)
      })

      if (!this.formHasErrors) {
        this.product = {
          name: this.title,
          group: '',
          kcal: parseFloat(this.kcal),
          image: this.imagefile,
          composition: {
            carbohydrate: parseFloat(this.carbs),
            protein: parseFloat(this.protein),
            fat: parseFloat(this.fat)
          }
        }
      }
      await RecipeAPI.addproduct(this.product)
    }
  }
}
</script>

<style scoped>

</style>
