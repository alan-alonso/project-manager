import { Project } from '@/models/project';

export interface StateModel {
  projects: Project[];
}

const state: StateModel = {
  projects: []
};

export default state;
