import { Project } from "@/models/project";
import { Commit } from "../../node_modules/vuex/types/index";
import { ChangeProjectStatusPayload } from "@/store/models/mutations";

export default {
  addProject: ({ commit }: { commit: Commit }, project: Project) =>
    commit("addProject", project),
  changeProjectStatus: (
    { commit }: { commit: Commit },
    payload: ChangeProjectStatusPayload
  ) => commit("changeProjectStatus", payload)
};
