import { ITask } from '@/lib/types';

export interface IAssigneeProps {
  assignee: ITask["assignee"];
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

export default function Assignee ({ assignee }: IAssigneeProps) {
  return (
    <div className="relative inline-block">
      <img className="w-5 h-5 rounded-full" src={assignee.avatarUrl}></img>
      <span className={`absolute -bottom-1 -right-1 block w-3 h-3 border-2 border-white rounded-full ${onlineStatus(assignee.onlineStatuses)}`}></span>
    </div>
  );
}
