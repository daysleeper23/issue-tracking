import KanbanBoard from './Kanban/KanbanBoard';
import { backlog, canceled, completed, inProgress, review, todo } from '../../lib/data';
import { Button } from '@headlessui/react';
import { FunnelSimple, SlidersHorizontal } from '@phosphor-icons/react';
import PageTitle from '../PageTitle';
import FilterBar from '../FilterBar';

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
      <PageTitle title='Issues' />
      <FilterBar />
      <KanbanBoard columns={columns} />
    </>
  );
}