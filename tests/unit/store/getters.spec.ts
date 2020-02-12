import { StateModel } from '@/store/state';
import getters from '@/store/getters';
import { ProjectStatus } from '@/models/project';
import stateTestModel from './state-test-model';

describe('getters.ts', () => {
  let state: StateModel;

  beforeEach(() => {
    state = { ...stateTestModel };
  });

  test('Get all projects', () => {
    // act
    const projects = getters.getProjects(state);

    // assert
    expect(projects).toEqual(state.projects);
  });

  test('Get active projects', () => {
    // act
    const activeProjects = getters.getActiveProjects(state);

    // assert
    expect(activeProjects).toHaveLength(1);
    expect(activeProjects[0]).toEqual(state.projects[0]);
  });

  test('Get finished projects', () => {
    // act
    const finishedProjects = getters.getFinishedProjects(state);

    // assert
    expect(finishedProjects).toHaveLength(1);
    expect(finishedProjects[0]).toEqual(state.projects[1]);
  });
});
