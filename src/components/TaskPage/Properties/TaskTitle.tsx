import { ITask } from '@/lib/types';
import clsx from 'clsx';

export interface ITaskTitleProps {
  title: ITask['title'];
  size: 'large' | 'small' | 'mini';
  style: 'card' | 'table';
}

export default function TaskTitle ({ title, size, style }: ITaskTitleProps) {
  return (
    <div className={clsx(
        "font-medium text-zinc-900 flex-1 ",
        {
          "text-2xl font-semibold text-zinc-900": size === 'large',
          "text-sm": size === 'small',
          "text-xs": size === 'mini',
        },
        {
          "min-w-0 overflow-hidden text-nowrap text-clip": style === 'table',
          "text-wrap py-2": style === 'card',
        }
        )}>
      {title}
    </div>
  );
}
