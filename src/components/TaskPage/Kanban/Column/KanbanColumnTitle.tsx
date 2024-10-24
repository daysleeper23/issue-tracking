import { Plus } from '@phosphor-icons/react';
import * as React from 'react';

export interface IKanbanColumnTitleProps {
  length: number;
  children?: React.ReactNode;
}

export default function KanbanColumnTitle ({ length, children }: IKanbanColumnTitleProps) {
  return (
    <div className='text-sm font-medium text-zinc-700 flex justify-between items-center'>
      <div className='flex gap-2'>
        {children}
        <div className='font-light'>
          {length}
        </div>
      </div>
      
      <div>
        <button className='p-1 rounded-md hover:bg-zinc-100'>
          <Plus size={16} weight='bold'/>
        </button>
      </div>
    </div>
  );
}
