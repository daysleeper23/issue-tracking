import KanbanBoard from './Kanban';
import FilterBar from '../FilterBar';
import { ITask } from '@/lib/types';
import { useState } from 'react';
import TaskTableVirtualized from './Table/TaskTableVirtualized';

export interface ITaskPageProps {
  tasks: Array<{
    title: string;
    value: string;
    tasks: ITask[];
  }>;
}

export function TaskPage ({ tasks }: ITaskPageProps) {
  const [displayState, setDisplayState] = useState(1);

  return (
    <>
      {/* <PageTitle title='Issues' /> */}
      <FilterBar setDisplayState={setDisplayState} />
      {
        displayState === 0 
          ? <KanbanBoard columns={tasks} />
          : <TaskTableVirtualized data={tasks} />
      }
    </>
  );
}