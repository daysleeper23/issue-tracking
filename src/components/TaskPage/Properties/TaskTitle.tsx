import { ITask } from '@/lib/types';
import clsx from 'clsx';

export interface ITaskTitleProps {
  title: ITask['title'];
  size: 'small' | 'mini';
}

export default function TaskTitle ({ title, size }: ITaskTitleProps) {
  return (
    <div className={clsx(
        "font-medium  text-zinc-900",
        {
          "text-sm": size === 'small',
          "text-xs": size === 'mini',
        }
        )}>
      {title}
    </div>
  );
}
