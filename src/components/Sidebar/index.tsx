import PrimaryMenu from './PrimaryMenu';
import PersonalMenu from './PersonalMenu';
import WorkspaceMenu from './WorkspaceMenu';

export interface ISidebarProps {
}

export function Sidebar (_props: ISidebarProps) {
  return (
    <div className="w-64 hidden lg:flex lg:flex-col bg-zinc-200 p-2 border-r">
      <PersonalMenu />
      <WorkspaceMenu />
      <PrimaryMenu />
    </div>
  );
}