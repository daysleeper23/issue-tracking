import { Button } from '@headlessui/react';
import { Sidebar } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';

export interface IPageTitleProps {
  setSidebarOpen: () => void;
}

export default function PageTitle ({ setSidebarOpen }: IPageTitleProps) {

  const location = useLocation();

  const title = () => {
    switch (true) {
      case location.pathname.includes('/my-tasks'):
        return 'My Tasks';
      case location.pathname.includes('/tasks'):
        return 'Issues';
      case location.pathname.includes('/team-projects'):
        return 'Team Projects';
      case location.pathname.includes('/projects'):
        return 'Projects';
      case location.pathname.includes('/teams'):
        return 'Teams';
      case location.pathname.includes('/inbox'):
        return 'Inbox';
      case location.pathname.includes('/drafts'):
        return 'Drafts';
      case location.pathname.includes('/initiatives'):
        return 'Initiatives';
      case location.pathname.includes('/views'):
        return 'Views';
      case location.pathname.includes('/sprints'):
        return 'Sprints';
      default:
        return 'Home';
    }
  }

  return (
    <div className="text-sm font-medium px-6 py-3 border-b text-zinc-700 flex justify-between">
      <div className='flex gap-1 items-center'>
        <div className='flex lg:hidden items-center'>
          <Button className="px-1 hover:bg-zinc-100 text-xs font-light text-zinc-700 rounded flex"
            onClick={setSidebarOpen}>
            <Sidebar size={16} weight="bold" />
          </Button>
        </div>
        <div className='px-1'>
          {title()}
        </div>
      </div>
    </div>
  );
}