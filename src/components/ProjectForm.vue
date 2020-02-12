<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" counter="50" :rules="nameRules" label="Name" required></v-text-field>

    <v-textarea
      @input="e => (description = e)"
      :rules="descriptionRules"
      counter="200"
      label="Description"
    ></v-textarea>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">ADD PROJECT</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "ProjectForm"
})
export default class ProjectForm extends Vue {
  valid = true;

  name = "";
  nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (v && v.length <= 50) || "Name must be less than 50 characters"
  ];

  description = "";
  descriptionRules = [
    (v: string) => !!v || "Description is required",
    (v: string) =>
      (v && v.length >= 10) || "Description must have at least 10 characters",
    (v: string) =>
      (v && v.length <= 200) || "Description must have at most 200 characters"
  ];

  validate() {
    if ((this.$refs.form as any).validate()) {
      console.log("Passed!");
      console.log(this.description);
    }
  }
}
</script>
