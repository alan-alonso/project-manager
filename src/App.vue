<template>
  <v-app>
    <ProjectForm />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ProjectForm from "@/components/ProjectForm.vue";

@Component({
  name: "App",
  components: {
    ProjectForm
  }
})
export default class App extends Vue {}
</script>
