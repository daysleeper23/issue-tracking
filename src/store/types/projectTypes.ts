import { Project } from "@/lib/types";

export const SET_PROJECTS = 'SET_PROJECTS';

export interface ProjectState {
  data: Array<Project>;
}

interface SetProjectsAction {
  type: typeof SET_PROJECTS;
  payload: Array<Project>;
}

export type ProjectAction = SetProjectsAction;