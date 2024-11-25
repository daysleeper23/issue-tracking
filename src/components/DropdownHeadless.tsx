import { useAppSelector } from '@/store';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CheckSquare, MinusSquare, PlusSquare, Square, XSquare, Selection, ArrowSquareLeft, ArrowSquareUpLeft, ArrowSquareUp, Warning, ArrowSquareDownLeft, Check, Timer, CaretDown } from "@phosphor-icons/react";
import clsx from 'clsx';
import { useState } from 'react';

export interface IDropdownHeadlessProps {
  selected: string;
  type: string;
  buttonText: boolean;
  
}

export function DropdownHeadless ({ selected, type }: IDropdownHeadlessProps) {
  const [select, setSelect] = useState(selected);

  const iconSize = 16;

  let list = Array<{ value: string, label: string, url: string, status: string }>();
  switch (type) {
    case 'assignee':
      list = useAppSelector(state => state.users.data);
      break;
    case 'task-status':
      list = ["Backlog", "Todo", "In Progress", "Review", "Completed", "Canceled"].map(s => {
        return { value: s, label: s, url: '', status: '' };
      });
      break;
    case 'priority':
      list = ["No priority", "Urgent", "High", "Medium", "Low"].map(s => {
        return { value: s, label: s, url: '', status: '' };
      });
      break;
    case 'estimate':
      list = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10].map(s => {
        return { value: s.toString(), label: s.toString() + `${s === 1 ? 'point' : 'points'}`, url: '', status: '' };
      });
      break;
    default:
      list = [];
  }

  
  return (
    <div className="top-24 w-72 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-sm bg-white py-1 px-2 text-sm font-normal text-zinc-600 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-zinc-100 data-[open]:bg-zinc-100 data-[focus]:outline-1 data-[focus]:outline-white">
          Options
          <CaretDown size={16} weight="bold" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 h-72 origin-top-right rounded-sm border border-zinc-200 bg-white p-1 text-sm text-zinc-600 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {list.map((s, index) => (
            <MenuItem key={s.value}>
              
              <button
                className="group flex w-full items-center gap-2 rounded-lg py-1 px-2 data-[focus]:bg-white/10 data-[hover]:bg-zinc-100 data-[open]:bg-zinc-100 data-[focus]:outline-1 data-[focus]:outline-white"
                onClick={() => setSelect(list[index].value)}>
                {type === 'assignee'
                              ? <UserElement user={s} buttonText={true} />
                              : <IconElement value={s.value} buttonText={true} iconSize={iconSize} type={type} selected={s.value === select} />
                            }
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">{index}</kbd>
              </button>
            </MenuItem>
          ))}
          
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/settings">
              Settings
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/support">
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/license">
              License
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
    
  );
}

type IconElementProps = {
  value: string;
  buttonText: boolean;
  iconSize: number;
  type: string;
  selected: boolean;
}

const IconElement = ({ value, buttonText, iconSize, type, selected }: IconElementProps) => {

  const statusIcon = (value: string, size: number) => {
    if (value === 'Backlog') {
      return <Selection className="text-gray-400" size={size} weight="bold" />
    } else if (value === 'Todo') {
      return <Square className="text-orange-400" size={size} weight="bold" />
    } else if (value === 'In Progress') {
      return <MinusSquare className="text-blue-600" size={size} weight="bold" />;
    } else if (value === 'Review') {
      return <PlusSquare className="text-purple-500" size={size} weight="bold" />
    } else if (value === 'Completed') {
      return <CheckSquare className="text-green-600" size={size} weight='fill' />;
    }
    return <XSquare className="text-red-600" size={size} weight="bold" />
  }

  const priorityIcon = (priority: string, size: number): React.ReactNode => {
    
    switch (priority) {
      case 'Low':
        return <ArrowSquareLeft className='text-zinc-500' size={size} weight="bold" />
      case 'Medium':
        return <ArrowSquareUpLeft className='text-zinc-600' size={size} weight="bold" />
      case 'High':
        return <ArrowSquareUp className='text-zinc-700' size={size} weight="bold" />
      case 'Urgent':
        return <Warning className='text-red-400' size={size} weight="fill" />
      default:
        return <ArrowSquareDownLeft className='text-zinc-400' size={size} weight="bold" />
    }
  }

  return (
    <div className={clsx(
      "flex gap-2 items-center justify-between",
      {
        "w-4 h-4": buttonText === false,
        "": buttonText === true
      }
      )}
    >
      <div className="flex gap-2 items-center">
        {type === 'task-status' && statusIcon(value, iconSize)}
        {type === 'priority' && priorityIcon(value, iconSize)}
        {type === 'estimate' && <Timer size={iconSize} weight="bold" />}
        <div className="text-sm text-zinc-600 font-medium antialiased">{buttonText && value}</div>
      </div>
      {selected && <Check size={16} weight="bold" className="text-zinc-600"/>}
    </div>
  )
}

export interface UserElementProps {
  user: {
    value: string;
    label: string;
    url: string;
    status: string;
  };
  buttonText: boolean;
}

const UserElement = ({ user, buttonText } : UserElementProps) => {

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

  return (
    <div className="flex gap-2 items-center">
      <div className="relative inline-block">
        <img className="w-5 h-5 rounded-full" src={user.url}></img>
        <span className={`absolute -bottom-1 -right-1 block w-3 h-3 border-2 border-white rounded-full ${onlineStatus(user.status)}`}></span>
      </div>
      {
        buttonText
          ? <div className="flex-1 min-w-0 text-sm font-normal text-zinc-600 overflow-hidden text-ellipsis whitespace-nowrap">{user.label}</div>
          : <></>
      }
    </div>
  )
}