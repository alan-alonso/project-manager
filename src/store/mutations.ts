import { Project, ProjectStatus } from '@/models/project';
import { StateModel } from './state';

export default {
  addProject: (state: StateModel, project: Project) =>
    state.projects.push(project),
  changeProjectStatus: (
    state: StateModel,
    projectId: string,
    newStatus: ProjectStatus
  ) => {
    const project = state.projects.find(project => project.id === projectId);

    if (project) {
      project.status = newStatus;
    }
  }
};
