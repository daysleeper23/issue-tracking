import { ITask } from "@/lib/types";

export const SET_TASKS = 'SET_TASKS';


export interface TaskState {
  tasks: Array<ITask>;
}

interface SetTasksAction {
  type: typeof SET_TASKS;
  payload: Array<ITask>;
}

export type TaskAction = SetTasksAction;