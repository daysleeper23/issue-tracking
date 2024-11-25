import { Project } from '@/lib/types';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import ProjectRow from './ProjectRow';

export interface IProjectListVirtualizedProps {
  data: Project[];
}

export default function ProjectListVirtualized ({ data }: IProjectListVirtualizedProps) {
  const parentRef = useRef<HTMLDivElement | null>(null);
  // const all = data.flatMap((column) => column.tasks);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  });

  return (
    <>
      <div className='flex flex-1 w-full max-w-full gap-1 px-4 py-2 md:px-8 h-11 items-center border-b border-zinc-100 text-xs text-zinc-500'>
        
        <div className='flex flex-1'>
          Title
        </div>

        <div className='flex flex-none gap-4 items-center'>
          <div className='w-12 px-1'>
            Priority
          </div>

          <div className='w-10 px-1'>
            Lead
          </div>

          <div className='w-16 mr-2 px-1'>
            Start
          </div>

          <div className='w-16 mr-2 px-1'>
            Target
          </div>

          <div className='w-24 px-1'>
            Status
          </div>
        </div>
      </div>
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
              <ProjectRow project={data[virtualItem.index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
