import { ProjectStatus, Project } from "@/models/project";
import actions from "@/store/actions";
import { ChangeProjectStatusPayload } from "@/store/models/mutations";

describe("actions.ts", () => {
  let project: Project;
  const context = {
    commit: jest.fn()
  };

  beforeEach(() => {
    project = new Project("1", "Test", "Test", 1, ProjectStatus.ACTIVE);
  });

  test("Add Project", () => {
    // act
    actions.addProject(context, project);

    // assert
    expect(context.commit).toHaveBeenCalledWith("addProject", project);
  });

  test("Change Project Status", () => {
    // arrange
    const payload: ChangeProjectStatusPayload = {
      projectId: "1",
      newStatus: ProjectStatus.FINISHED
    };

    // act
    actions.changeProjectStatus(context, payload);

    // assert
    expect(context.commit).toHaveBeenCalledWith("changeProjectStatus", payload);
  });
});
