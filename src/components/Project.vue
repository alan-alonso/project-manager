<template>
  <v-card draggable @dragstart="onDragStart">
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle>
      <v-icon>people</v-icon>
      {{ project.people }}
    </v-card-subtitle>
    <v-card-text>
      <p>{{ project.description }}</p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Project } from "../models/project";

@Component({
  name: "ProjectCmp"
})
export default class ProjectCmp extends Vue {
  @Prop({ required: true })
  project!: Project;

  /** Attach the projects ID to the data when the project card is dragged. */
  onDragStart(event: DragEventInit) {
    if (event.dataTransfer) {
      event.dataTransfer.setData("text/plain", this.project.id);
      event.dataTransfer.effectAllowed = "move";
    }
  }
}
</script>
