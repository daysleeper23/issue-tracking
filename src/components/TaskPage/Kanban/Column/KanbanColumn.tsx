import { ITask } from '@/lib/types';
import KanbanCard from '../KanbanCard';
import KanbanColumnTitle from './KanbanColumnTitle';
import TaskStatus from '../../TaskStatus';

export interface IKanbanColumnProps {
  column: {
    title: string;
    tasks: ITask[];
  };
}

export default function KanbanColumn ({ column }: IKanbanColumnProps) {
  return (
    <div className='w-80 bg-zinc-50 rounded-md border border-zinc-100 p-2 flex flex-col gap-4'>
      <KanbanColumnTitle length={column.tasks.length}>
        <TaskStatus status={column.title} />
      </KanbanColumnTitle>    
      <div className='flex flex-col overflow-y-auto gap-2'>
        {column.tasks.map((task, index) => {
          return (
            <KanbanCard key={index} task={task} />
          )
        })}
      </div>
    </div>
  );
}
