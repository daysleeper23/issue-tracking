import { ArrowSquareDownLeft, ArrowSquareLeft, ArrowSquareUp, ArrowSquareUpLeft, Warning } from '@phosphor-icons/react';
import clsx from 'clsx';
import * as React from 'react';

export interface ITaskPriorityProps {
  priority: string;
  isDisplayText?: boolean;
  iconSizeControl?: number;
}



export default function PriorityElement ({ priority, isDisplayText, iconSizeControl }: ITaskPriorityProps) {

  const priorityIcon = (priority: string): React.ReactNode => {
    
    const iconSize = iconSizeControl ? iconSizeControl : 16;

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

  return (
    <div className={clsx(
      "flex gap-1 items-center justify-center",
      {
        "w-5 h-5": isDisplayText === false,
        "": isDisplayText === true
      }
      )}
    >
      {priorityIcon(priority)}
      {isDisplayText && priority}
    </div>
  );
}
