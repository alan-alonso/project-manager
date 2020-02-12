import { ProjectStatus } from '@/models/project';
import { StateModel } from './state';

export default {
  getProjects: (state: StateModel) => state.projects,
  getActiveProjects: (state: StateModel) =>
    state.projects.filter(project => project.status === ProjectStatus.ACTIVE),
  getFinishedProjects: (state: StateModel) =>
    state.projects.filter(project => project.status === ProjectStatus.FINISHED)
};
