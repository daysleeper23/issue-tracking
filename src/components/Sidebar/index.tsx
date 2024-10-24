import * as React from 'react';
import { Link } from 'react-router-dom';
import { CaretCircleDoubleRight, CheckSquare, Target } from '@phosphor-icons/react';

export interface IAppProps {
}

export function Sidebar (props: IAppProps) {
  const menuItemClass = 'flex items-center p-2 hover:bg-zinc-300 text-gray-800 gap-2 rounded-md'
  return (
    <div className="hidden lg:block bg-zinc-200 p-4 border-r">
      <h3 className="text-xl font-bold mb-2">Team Name</h3>
      <div className='grid grid-cols-1 space-y-2'>
        <Link className={menuItemClass} to='/tasks'>
          <CheckSquare weight='bold' size={20} color='#1f2937'/> Tasks
        </Link>
        <Link className={menuItemClass} to='/projects'>
          <Target weight='bold' size={20}/> Projects
        </Link>
        <Link className={menuItemClass} to='/sprints'>
          <CaretCircleDoubleRight weight='bold' size={20}/> Sprints
        </Link>
      </div>
    </div>
  );
}
