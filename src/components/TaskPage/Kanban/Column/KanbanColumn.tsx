import { ITask } from '@/lib/types';
import KanbanCard from '../Card/KanbanCard';
import KanbanColumnTitle from './KanbanColumnTitle';
import TaskStatus from '../../Properties/TaskStatus';
import { useDrop } from 'react-dnd';
import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface IKanbanColumnProps {
  column: {
    title: string;
    tasks: ITask[];
  };
}

const PAGE_SIZE = 20; // Number of items to load per "page"

export default function KanbanColumn ({ column }: IKanbanColumnProps) {

  const [visibleTasks, setVisibleTasks] = useState(column.tasks.slice(0, PAGE_SIZE));
  const [page, setPage] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  //calculate max page for each column
  const maxPage = Math.ceil(column.tasks.length / PAGE_SIZE);

  // Load more items when user reaches the end
  const loadMoreTasks = useCallback(() => {
    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setVisibleTasks((prevTasks) => [
      ...prevTasks,
      ...column.tasks.slice(start, end)
    ]);
    setPage((prevPage) => prevPage + 1);
  }, [page, column.tasks]);

  // Set up an intersection observer to detect when the last item is visible
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      loadMoreTasks();
    }
  }, [loadMoreTasks]);

  useEffect(() => {
    if (observerRef.current) 
      observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(observerCallback);
    
    const target = document.getElementById(`infinite-scroll-trigger-${column.title}`);
    if (target) 
      observerRef.current.observe(target);
    
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [observerCallback, column.title]);

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
          {visibleTasks.map((task) => {
            return (
              <KanbanCard key={task.id} task={task} />
            )
          })}

          {/* Trigger element for infinite scroll 
            (only shown if there are more tasks to load)
          */}
          {page < maxPage && 
            <div
              id={`infinite-scroll-trigger-${column.title}`}
              className="infinite-scroll-trigger"
              style={{ height: '0px' }} 
            />
          }
        </div>
      </div>
    </div>
  );
}
