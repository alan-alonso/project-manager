<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="title"
      id="title"
      autofocus
      clearable
      required
      counter="50"
      hint="Project Title"
      label="Title"
      prepend-inner-icon="title"
      :rules="titleRules"
      :success="!!title"
    />

    <v-textarea
      @input="e => (description = e)"
      id="description"
      clearable
      counter="200"
      hint="Some description text"
      label="Description"
      prepend-inner-icon="comment"
      :rules="descriptionRules"
      :success="!!description"
    />

    <v-text-field
      v-model="people"
      id="people"
      required
      hint="Number of people participating in the project"
      label="Number of Prople"
      min="1"
      prepend-inner-icon="people"
      type="number"
      :rules="peopleRules"
      step="1.0"
      :suffix="people >= 2 ? 'people' : 'person'"
      :success="!!people"
    />

    <v-btn
      @click="onSubmit"
      color="purple darken-1 white--text"
      class="mr-4"
      :disabled="!valid"
    >ADD PROJECT</v-btn>
  </v-form>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Vue, Component } from "vue-property-decorator";
import { Action } from "vuex-class";
import { Project, ProjectStatus } from "../models/project";

@Component({
  name: "ProjectForm"
})
export default class ProjectForm extends Vue {
  valid = true;

  title = "";
  titleRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (v && v.trim().length >= 10) || "Name must have at least 10 characters",
    (v: string) =>
      (v && v.trim().length <= 50) || "Name must be less than 50 characters"
  ];

  description = "";
  descriptionRules = [
    (v: string) => !!v || "Description is required",
    (v: string) =>
      (v && v.trim().length >= 10) ||
      "Description must have at least 10 characters",
    (v: string) =>
      (v && v.trim().length <= 200) ||
      "Description must have at most 200 characters"
  ];

  people = 1;
  peopleRules = [
    (v: string) => !isNaN(Number(v)) || "Number of prople must be a number",
    (v: number) => v >= 1 || "Number of people must be at least 1",
    (v: number) => v <= 5 || "Number of people must be at most 5"
  ];

  @Action("addProject")
  addProject: any;

  /**
   * Validates the form data and adds the project to the list.
   *
   * @public
   */
  onSubmit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      const newProject = new Project(
        Math.random().toString(),
        this.title,
        this.description,
        Math.floor(this.people),
        ProjectStatus.ACTIVE
      );
      this.addProject(newProject);
    }
  }
}
</script>
