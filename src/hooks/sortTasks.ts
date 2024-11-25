import { ITask } from "@/lib/types";

export const sortByStatus = (task1: ITask, task2: ITask): number => {
  const statusOrder = ['Backlog', 'Todo', 'In Progress', 'Review', 'Completed', 'Canceled'];

  if (statusOrder.indexOf(task1.status) - statusOrder.indexOf(task2.status) !== 0) {
    return statusOrder.indexOf(task1.status) - statusOrder.indexOf(task2.status);
  }else {
    return sortByNumber(task1, task2);
  }
};

export const sortByNumber = (tasks1: ITask, task2: ITask):number => {
  return tasks1.number - task2.number;
}