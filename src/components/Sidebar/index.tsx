import PrimaryMenu from './PrimaryMenu';
import PersonalMenu from './PersonalMenu';

export interface IAppProps {
}

export function Sidebar (props: IAppProps) {
  return (
    <div className="w-64 hidden lg:block bg-zinc-200 p-2 border-r">
      <PersonalMenu />
      <PrimaryMenu />
    </div>
  );
}