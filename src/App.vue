<template>
  <v-app>
    <v-container fluid>
      <ProjectForm />
      <v-row>
        <v-col lg="6">
          <ProjectList listType="ACTIVE" />
        </v-col>
        <v-col lg="6">
          <ProjectList listType="FINISHED" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProjectForm from "@/components/ProjectForm.vue";
import ProjectList from "@/components/ProjectList.vue";

@Component({
  name: "App",
  components: {
    ProjectForm,
    ProjectList
  }
})
export default class App extends Vue {}
</script>
