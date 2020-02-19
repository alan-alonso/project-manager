import { Project } from "@/models/project";
import { StateModel } from "@/store/models/state";
import { ChangeProjectStatusPayload } from "@/store/models/mutations";

export default {
  addProject: (state: StateModel, project: Project) =>
    state.projects.push(project),
  changeProjectStatus: (
    state: StateModel,
    payload: ChangeProjectStatusPayload
  ) => {
    const project = state.projects.find(
      project => project.id === payload.projectId
    );

    if (project) {
      project.status = payload.newStatus;
    }
  }
};
