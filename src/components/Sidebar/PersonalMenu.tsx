import { At, FileDashed, Tray } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export interface IPersonalMenuProps {
}

export default function PersonalMenu (props: IPersonalMenuProps) {
  const menuItemClass = 'flex gap-2 px-2 py-2 rounded hover:bg-zinc-100 text-sm text-zinc-800 items-center';
  const iconSize = 20;
  
  return (
    <div className="block gap-2">
      <Link className={menuItemClass} to='/inbox'>
        <Tray weight='bold' size={iconSize} color='#1f2937'/> Inbox
      </Link>
      <Link className={menuItemClass} to='/my-tasks'>
        <At weight='bold' size={iconSize}/> My Tasks
      </Link>
      <Link className={menuItemClass} to='/drafts'>
        <FileDashed weight='bold' size={iconSize}/> Drafts
      </Link>
    </div>
  );
}
