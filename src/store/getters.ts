import { ProjectStatus } from "@/models/project";
import { StateModel } from "@/store/models/state";

export default {
  projects: (state: StateModel) => state.projects,
  activeProjects: (state: StateModel) =>
    state.projects.filter(project => project.status === ProjectStatus.ACTIVE),
  finishedProjects: (state: StateModel) =>
    state.projects.filter(project => project.status === ProjectStatus.FINISHED)
};
