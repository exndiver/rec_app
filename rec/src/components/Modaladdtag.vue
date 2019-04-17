<template>

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
</template>

<script>
export default {
  name: 'modaladdtag'

}
</script>

<style scoped>

</style>
