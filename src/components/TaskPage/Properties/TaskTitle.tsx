import { ITask } from '@/lib/types';
import clsx from 'clsx';

export interface ITaskTitleProps {
  title: ITask['title'];
  size: 'large' | 'small' | 'mini';
}

export default function TaskTitle ({ title, size }: ITaskTitleProps) {
  return (
    <div className={clsx(
        "font-medium  text-zinc-900",
        {
          "text-2xl font-semibold text-zinc-900": size === 'large',
          "text-sm": size === 'small',
          "text-xs": size === 'mini',
        }
        )}>
      {title}
    </div>
  );
}
