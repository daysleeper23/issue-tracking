import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface IMenuItemProps {
  children: ReactNode
  url: string
}

export default function MenuItem ({ children, url }: IMenuItemProps) {
  return (
    <Link className='block px-4 py-2 rounded hover:bg-zinc-100' to={url}>
      {children}
    </Link>
  );
}
