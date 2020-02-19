<template>
  <v-container
    :class="projectClassObj"
    class="lighten-1 mt-1"
    fluid
    @dragover.prevent="onDragOver"
    @drop.prevent="onDrop"
  >
    <h2 class="white--text text-center mb-2">{{ listType }} PROJECTS</h2>
    <Project
      v-for="project in getProjectList()"
      :key="project.id"
      :project="project"
      class="mb-2"
    />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ProjectStatus, Project } from "../models/project";
import { Getter, Action } from "vuex-class";
import ProjectCmp from "@/components/Project.vue";
import { ChangeProjectStatusPayload } from "../store/models/mutations";

@Component({
  name: "ProjectList",
  components: {
    Project: ProjectCmp
  }
})
export default class ProjectList extends Vue {
  @Prop({ required: true })
  listType!: ProjectStatus;

  projectClassObj = {
    pink: this.listType === ProjectStatus.ACTIVE,
    indigo: this.listType === ProjectStatus.FINISHED
  };

  @Getter("activeProjects")
  activeProjects!: Project[];

  @Getter("finishedProjects")
  finishedProjects!: Project[];

  @Action("changeProjectStatus")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeProjectStatus: any;

  getProjectList() {
    switch (this.listType) {
      case ProjectStatus.ACTIVE:
        return this.activeProjects;
      case ProjectStatus.FINISHED:
        return this.finishedProjects;
      default:
        return [];
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onDragOver() {}

  onDrop(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      const projectId = event.dataTransfer.getData("text/plain");
      const payload: ChangeProjectStatusPayload = {
        projectId,
        newStatus: this.listType
      };
      this.changeProjectStatus(payload);
    }
  }
}
</script>
