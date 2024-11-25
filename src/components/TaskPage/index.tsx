import KanbanBoard from './Kanban';
import FilterBar from '../FilterBar';
import { ITask, User } from '@/lib/types';
import { Suspense, useState } from 'react';
import TaskTableVirtualized from './List/TaskTableVirtualized';
import { useAppSelector } from '@/store';
import { sortByStatus } from '@/hooks/sortTasks';

export interface ITaskPageProps {
  tasks: Array<{
    title: string;
    value: string;
    tasks: ITask[];
  }>;
}

export function TaskPage ({ tasks }: ITaskPageProps) {
  const [displayState, setDisplayState] = useState(1);
  const taskArray = useAppSelector((state) => state.tasks.tasks);

  const sortedTasks = [...taskArray].sort(sortByStatus);
  console.log('sortedTasks', sortedTasks);

  return (
    <>
      {/* <PageTitle title='Issues' /> */}
      <FilterBar setDisplayState={setDisplayState} />
      {
        // displayState === 0 
        //   ? <KanbanBoard columns={tasks} />
        //   :
            <Suspense fallback={<div>Loading Task List...</div>}>
              <TaskTableVirtualized data={sortedTasks} />
            </Suspense>
            
      }
    </>
  );
}