import { StateModel } from '@/store/state';
import mutations from '@/store/mutations';
import { ProjectStatus, Project } from '@/models/project';
import stateTestModel from './state-test-model';

describe('mutations.ts', () => {
  let state: StateModel;

  beforeEach(() => {
    state = { ...stateTestModel };
  });

  test('Add project', () => {
    // arrange
    const project = new Project(
      '3',
      'Test 3',
      'Test 3',
      3,
      ProjectStatus.ACTIVE
    );

    // act
    mutations.addProject(state, project);

    // assert
    expect(state.projects).toContain(project);
  });

  test('Change Project Status', () => {
    // act
    mutations.changeProjectStatus(
      state,
      state.projects[0].id,
      ProjectStatus.FINISHED
    );

    // assert
    expect(state.projects[0].status).toBe(ProjectStatus.FINISHED);
  });
});
