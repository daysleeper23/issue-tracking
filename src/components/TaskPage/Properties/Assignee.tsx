import { ITask } from '@/lib/types';
import clsx from 'clsx';

export interface IAssigneeProps {
  assignee: ITask["assignee"];
  isDisplayText?: boolean;
}

const onlineStatus = (status: string) => {
  if (status === 'Online') {
    return 'bg-green-500';
  } else if (status === 'Away') {
    return 'bg-yellow-500';
  } else if (status === 'Busy') {
    return 'bg-red-500';
  }
  return 'bg-gray-400';
}

export default function Assignee ({ assignee, isDisplayText }: IAssigneeProps) {
  return (
    <div className={clsx(
      "flex gap-1 items-center justify-center",
      {
        "w-5 h-5": isDisplayText === false,
        "": isDisplayText === true
      }
      )}
    >
      <div className="relative inline-block">
        <img className="w-5 h-5 rounded-full" src={assignee.avatarUrl}></img>
        <span className={`absolute -bottom-1 -right-1 block w-3 h-3 border-2 border-white rounded-full ${onlineStatus(assignee.onlineStatus)}`}></span>
      </div>
      {isDisplayText && assignee.name}
    </div>
    
  );
}
