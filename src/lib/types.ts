export interface ITask {
  id: string;
  number: number;
  title: string;
  project: string;
  sprint: string;
  dueDate: string;
  priority: string;
  status: string;
  estimate: number;
  assignee: string;
};

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  onlineStatus: string;
};

export interface Project {
  id: string;
  title: string;
  status: string;
  priority: string;
  lead: string;
  team: string;
  start: string;
  end: string;
}

export interface Sprint {
  id: string;
  name: string;
  description: string;
  status: string;
  team: string;
  start: string;
  end: string;
}