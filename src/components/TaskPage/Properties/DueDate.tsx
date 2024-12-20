import { CalendarBlank, CalendarDot, CalendarX } from '@phosphor-icons/react';
// import clsx from 'clsx';

export interface IDueDateProps {
  dueDate: string;
}

const dueDateIcon = (dueDate: string): React.ReactNode => {
  const today = new Date();
  const due = new Date(dueDate);

  if (due < today) {
    return <CalendarX className='text-red-500' size={16} weight="bold" />
  } else if (due.getDate() >= today.getDate() - 3) {
    return <CalendarDot className='text-orange-500' size={16} weight="bold" />
  } else {
    return <CalendarBlank size={16} weight="bold" />;
  }
};


export default function DueDate ({ dueDate }: IDueDateProps) {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  return (
    <div className='flex gap-1 items-center w-16'>
      {dueDateIcon(dueDate)}
      {formatDate(dueDate)}
    </div>
  );
}
