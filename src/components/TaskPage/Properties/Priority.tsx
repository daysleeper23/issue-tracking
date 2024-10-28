import { ArrowSquareDownLeft, ArrowSquareLeft, ArrowSquareUp, ArrowSquareUpLeft, Warning } from '@phosphor-icons/react';
import * as React from 'react';

export interface IPriorityProps {
  priority: string;
}

const priorityIcon = (priority: string): React.ReactNode => {
  switch (priority) {
    case 'Low':
      return <ArrowSquareLeft className='text-zinc-500' size={16} weight="bold" />
    case 'Medium':
      return <ArrowSquareUpLeft className='text-zinc-600' size={16} weight="bold" />
    case 'High':
      return <ArrowSquareUp className='text-zinc-700' size={16} weight="bold" />
    case 'Urgent':
      return <Warning className='text-red-400' size={16} weight="fill" />
    default:
      return <ArrowSquareDownLeft className='text-zinc-400' size={16} weight="bold" />
  }
}

export default function Priority ({ priority }: IPriorityProps) {
  return (
    <div>
      {priorityIcon(priority)}
    </div>
  );
}
