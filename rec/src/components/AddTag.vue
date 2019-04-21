<template>
   <v-layout align-start justify-center row fill-height >
    <v-flex xs12 sm10 md8 lg6 fill-height>
      <v-card ref="form">
        <v-container id="scroll-target" class="scroll-y" fluid ma-0 pa-0 fill-height >
        <v-card-text>
          <h1>Add New Tag</h1>
          <v-text-field ref="title" v-model="title" clearable :rules="[() => !!title || 'This field is required']" :error-messages="errorMessages" label="Tag title" required></v-text-field>
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
import TagsAPI from '@/spa/TagsAPI'

export default {
  name: 'AddTags',
  data () {
    return {
      errorMessages: '',
      formHasErrors: false,
      title: null
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
        title: this.title
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
        const response = await TagsAPI.addtag({
          name: this.title
        })
        this.resetForm()
      }
    }
  }
}
</script>

<style scoped>

</style>
