import { ProjectStatus } from "@/models/project";

export interface ChangeProjectStatusPayload {
  projectId: string;
  newStatus: ProjectStatus;
}
