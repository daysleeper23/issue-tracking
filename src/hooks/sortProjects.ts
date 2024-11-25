import { Project } from "@/lib/types";

export const sortByStatus = (p1: Project, p2: Project): number => {
  const statusOrder = ['Backlog', 'Todo', 'In Progress', 'Review', 'Completed', 'Canceled'];

  if (statusOrder.indexOf(p1.status) - statusOrder.indexOf(p2.status) !== 0) {
    return statusOrder.indexOf(p1.status) - statusOrder.indexOf(p2.status);
  }else {
    return sortByStart(p1, p2);
  }
};

export const sortByStart = (p1: Project, p2: Project):number => {
  return Number(p1.start) - Number(p2.start);
}