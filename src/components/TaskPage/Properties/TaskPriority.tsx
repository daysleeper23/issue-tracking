import { ArrowSquareDownLeft, ArrowSquareLeft, ArrowSquareUp, ArrowSquareUpLeft, Warning } from '@phosphor-icons/react';
import * as React from 'react';

export interface ITaskPriorityProps {
  priority: string;
}

const priorityIcon = (priority: string): React.ReactNode => {
  const iconSize = 16;
  switch (priority) {
    case 'Low':
      return <ArrowSquareLeft className='text-zinc-500' size={iconSize} weight="bold" />
    case 'Medium':
      return <ArrowSquareUpLeft className='text-zinc-600' size={iconSize} weight="bold" />
    case 'High':
      return <ArrowSquareUp className='text-zinc-700' size={iconSize} weight="bold" />
    case 'Urgent':
      return <Warning className='text-red-400' size={iconSize} weight="fill" />
    default:
      return <ArrowSquareDownLeft className='text-zinc-400' size={iconSize} weight="bold" />
  }
}

export default function TaskPriority ({ priority }: ITaskPriorityProps) {
  return (
    <div className='flex items-center justify-center w-5 h-5'>
      {priorityIcon(priority)}
    </div>
  );
}
