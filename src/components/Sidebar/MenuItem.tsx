import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface IMenuItemProps {
  children: ReactNode
  url: string
}

export default function MenuItem ({ children, url }: IMenuItemProps) {
  return (
    <Link className='flex items-center p-2 hover:bg-zinc-300 text-gray-800 gap-2 rounded-md' to={url}>
      {children}
    </Link>
  );
}
