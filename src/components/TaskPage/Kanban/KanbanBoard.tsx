import { ITask } from '@/lib/types';
import KanbanColumn from './Column/KanbanColumn';

export interface IKanbanBoardProps {
  columns: {
    title: string;
    tasks: ITask[];
  }[];
}

export default function App ({ columns }: IKanbanBoardProps) {
  return (
    <div className='flex-1 overflow-x-auto bg-white rounded-sm'>
      <div className='inline-flex h-full gap-2 p-2'>
        {columns.map((column, index) => {
          return (
            <KanbanColumn key={index} column={column} />
          )
        })}
      </div>
    </div>
  );
}
