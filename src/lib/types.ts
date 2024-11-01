export interface ITask {
  id: string;
  title: string;
  project: {
    id: string;
    title: string;
  }
  sprint: {
    id: string;
    title: string;
  }
  dueDate: string;
  priority: string;
  status: string;
  estimate: number;
  assignee: {
    id: string;
    name: string;
    avatarUrl: string;
    onlineStatus: string;
  }
};