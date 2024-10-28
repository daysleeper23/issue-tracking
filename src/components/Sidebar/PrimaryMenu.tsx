import { CaretCircleDoubleRight, CheckSquare, Target } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export interface IPrimaryMenuProps {
}

export default function PrimaryMenu (props: IPrimaryMenuProps) {
  const menuItemClass = 'flex gap-2 px-2 py-2 rounded hover:bg-zinc-100 text-sm text-zinc-800 items-center';
  const iconSize = 20;

  return (
    <div className="block gap-2">
      <h3 className="text-xl font-bold mb-2">Team Name</h3>
      <div className='grid grid-cols-1 space-y-2'>
        <Link className={menuItemClass} to='/tasks'>
          <CheckSquare weight='bold' size={iconSize} color='#1f2937'/> Tasks
        </Link>
        <Link className={menuItemClass} to='/projects'>
          <Target weight='bold' size={iconSize}/> Projects
        </Link>
        <Link className={menuItemClass} to='/sprints'>
          <CaretCircleDoubleRight weight='bold' size={iconSize}/> Sprints
        </Link>
      </div>
    </div>
  );
}
