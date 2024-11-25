import { ITask, User } from '@/lib/types';
import usersService from '@/services/users';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

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

  const [assign, setAssign] = useState<User>();
  
  useEffect (() => {
    const fetchTasks = async () => {
      const a = await usersService.getUserById(assignee);
      setAssign(a);
    }
    fetchTasks();
  }, []);

  if (!assign) return 'Loading...'

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
        <img className="w-5 h-5 rounded-full" src={assign.avatarUrl}></img>
        <span className={`absolute -bottom-1 -right-1 block w-3 h-3 border-2 border-white rounded-full ${onlineStatus(assign.onlineStatus)}`}></span>
      </div>
      {isDisplayText && assign.name}
    </div>
    
  );
}
