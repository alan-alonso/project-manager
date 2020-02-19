import getters from "@/store/getters";
import stateTestModel from "./state-test-model";
import { StateModel } from "@/store/models/state";

describe("getters.ts", () => {
  let state: StateModel;

  beforeEach(() => {
    state = { ...stateTestModel };
  });

  test("Get all projects", () => {
    // act
    const projects = getters.projects(state);

    // assert
    expect(projects).toEqual(state.projects);
  });

  test("Get active projects", () => {
    // act
    const activeProjects = getters.activeProjects(state);

    // assert
    expect(activeProjects).toHaveLength(1);
    expect(activeProjects[0]).toEqual(state.projects[0]);
  });

  test("Get finished projects", () => {
    // act
    const finishedProjects = getters.finishedProjects(state);

    // assert
    expect(finishedProjects).toHaveLength(1);
    expect(finishedProjects[0]).toEqual(state.projects[1]);
  });
});
