import { StateModel } from "@/store/models/state";
import { ProjectStatus } from "@/models/project";

const state: StateModel = {
  projects: [
    {
      id: "1",
      title: "Test 1",
      description: "Test 1",
      people: 1,
      status: ProjectStatus.ACTIVE
    },
    {
      id: "2",
      title: "Test 2",
      description: "Test 2",
      people: 1,
      status: ProjectStatus.FINISHED
    }
  ]
};

export default state;
