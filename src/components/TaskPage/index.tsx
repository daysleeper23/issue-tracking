import KanbanBoard from './Kanban';
import PageTitle from '../PageTitle';
import FilterBar from '../FilterBar';
import { ITask } from '@/lib/types';

export interface ITaskPageProps {
  tasks: Array<{
    title: string;
    value: string;
    tasks: ITask[];
  }>;
}

// const columns = [
//   { title: 'Backlog', tasks: backlog },
//   { title: 'To Do', tasks: todo },
//   { title: 'In Progress', tasks: inProgress },
//   { title: 'Review', tasks: review },
//   { title: 'Completed', tasks: completed },
//   { title: 'Canceled', tasks: canceled }
// ];

export function TaskPage ({ tasks }: ITaskPageProps) {

  return (
    <>
      <PageTitle title='Issues' />
      <FilterBar />
      <KanbanBoard columns={tasks} />
    </>
  );
}