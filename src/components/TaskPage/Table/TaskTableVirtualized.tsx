import { ITask } from '@/lib/types';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import TaskRow from './TaskRow';

export interface ITaskTableVirtualizedProps {
  data: {
    title: string;
    value: string;
    tasks: ITask[];
  }[];
}

export default function TaskTableVirtualized ({ data }: ITaskTableVirtualizedProps) {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const all = data.flatMap((column) => column.tasks);

  const rowVirtualizer = useVirtualizer({
    count: all.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  });

  return (
    <>
      {/* The scrollable element for your list */}
      <div
        ref={parentRef}
        style={{
          height: `100%`,
          overflow: 'auto', // Make it scroll!
        }}
      >
        {/* The large inner element to hold all of the items */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Only the visible items in the virtualizer, manually positioned to be in view */}
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
              className='flex-1'
            >
              <TaskRow task={all[virtualItem.index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
