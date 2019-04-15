<template>
   <v-layout justify-center style="min">
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>

          <v-text-field ref="title" v-model="title" :rules="[() => !!title || 'This field is required']" :error-messages="errorMessages" label="Recipe title" required></v-text-field>
          <v-textarea
          ref="describtion"
          name="describtion"
          label="Recipe description"
          value=""
          hint="Enter description for your reciple"
          :rules="[() => !!title || 'This field is required']" :error-messages="errorMessages"
          required
        ></v-textarea>

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
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      errorMessages: '',
      formHasErrors: false,
      title: null,
      describtion: null

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
        describtion: this.describtion
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
        console.log(f)
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
    }
  }
}
</script>

<style scoped>

</style>
