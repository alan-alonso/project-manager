import mutations from "@/store/mutations";
import { ProjectStatus, Project } from "@/models/project";
import stateTestModel from "./state-test-model";
import { ChangeProjectStatusPayload } from "@/store/models/mutations";
import { StateModel } from "@/store/models/state";

describe("mutations.ts", () => {
  let state: StateModel;

  beforeEach(() => {
    state = { ...stateTestModel };
  });

  test("Add project", () => {
    // arrange
    const project = new Project(
      "3",
      "Test 3",
      "Test 3",
      3,
      ProjectStatus.ACTIVE
    );

    // act
    mutations.addProject(state, project);

    // assert
    expect(state.projects).toContain(project);
  });

  test("Change Project Status", () => {
    // arrange
    const payload: ChangeProjectStatusPayload = {
      projectId: state.projects[0].id,
      newStatus: ProjectStatus.FINISHED
    };

    // act
    mutations.changeProjectStatus(state, payload);

    // assert
    expect(state.projects[0].status).toBe(ProjectStatus.FINISHED);
  });
});
