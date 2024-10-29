import { ITask } from '@/lib/types';
import KanbanColumn from './Column/KanbanColumn';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export interface IKanbanBoardProps {
  columns: {
    title: string;
    value: string;
    tasks: ITask[];
  }[];
}

export default function KanbanBoard ({ columns }: IKanbanBoardProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex-1 overflow-x-auto bg-white rounded-sm'>
        <div className='inline-flex h-full gap-2 p-2'>
          {columns.map((column, index) => {
            return (
              <KanbanColumn key={index} column={column} />
            )
          })}
        </div>
      </div>
    </DndProvider>
  );
}
