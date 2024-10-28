import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export interface IMenuItemProps {
  children: ReactNode
  url: string
  text: string
}

export default function MenuItem ({ children, url, text }: IMenuItemProps) {
  const className = 'flex gap-2 px-2 py-2 rounded hover:bg-zinc-100 text-sm text-zinc-800 items-center';

  return (
    <NavLink 
      to={url}
      className={({ isActive }) =>
        [
          isActive 
            ? `${className} bg-zinc-100 text-zinc-900` 
            : className,
        ].join(" ")
      }
    >
      {children} {text}
    </NavLink>
  );
}
