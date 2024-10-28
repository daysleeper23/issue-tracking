import { ITask } from '@/lib/types';
import KanbanCard from '../Card/KanbanCard';
import KanbanColumnTitle from './KanbanColumnTitle';
import TaskStatus from '../../Properties/TaskStatus';
import { useDrop } from 'react-dnd';
import clsx from 'clsx';

export interface IKanbanColumnProps {
  column: {
    title: string;
    tasks: ITask[];
  };
}

export default function KanbanColumn ({ column }: IKanbanColumnProps) {

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: () => ({ name: column.title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver

  return (
    <div className='w-80 bg-zinc-50 rounded-md border border-zinc-100 p-2 flex flex-col gap-4 relative'>
      <KanbanColumnTitle length={column.tasks.length}>
        <TaskStatus status={column.title} />
      </KanbanColumnTitle>  

      <div 
        ref={drop} 
        role="column"
        aria-live="polite"
        aria-describedby="drag-instructions" 
        className="relative flex flex-col flex-1 overflow-y-auto"
      >
        <span id="drag-instructions" className="sr-only">
          Drag items here to move them to this column.
        </span>
        {/* Overlay (shown only if isActive is true) */}
        {isActive && (
          <div className="absolute inset-0 bg-zinc-300 opacity-30 rounded-md z-10 pointer-events-none"></div>
        )}

        {/* Cards */}
        <div className={clsx(
            'flex flex-col gap-2 overflow-y-auto',
            {
              "opacity-20": isActive,
              "opacity-100": !isActive,
            }
          )}
        >
          {column.tasks.map((task) => {
            return (
              <KanbanCard key={task.id} task={task} />
            )
          })}
        </div>
      </div>
    </div>
  );
}
