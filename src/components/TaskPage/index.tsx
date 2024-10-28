import KanbanBoard from './Kanban/KanbanBoard';
import { backlog, canceled, completed, inProgress, review, todo } from '../../lib/data';

export interface ITaskPageProps {
}

const columns = [
  { title: 'Backlog', tasks: backlog },
  { title: 'To Do', tasks: todo },
  { title: 'In Progress', tasks: inProgress },
  { title: 'Review', tasks: review },
  { title: 'Completed', tasks: completed },
  { title: 'Canceled', tasks: canceled }
];

export function TaskPage (props: ITaskPageProps) {
  return (
    <>
      <div className="text-2xl font-bold p-4 border-b text-gray-800">
        Kanban Board
      </div>
      <KanbanBoard columns={columns} />
    </>
  );
}