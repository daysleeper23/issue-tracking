import PrimaryMenu from './PrimaryMenu';
import PersonalMenu from './PersonalMenu';
import WorkspaceMenu from './WorkspaceMenu';
import clsx from 'clsx';

export interface ISidebarProps {
  // setPageTitle: (title: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar ({ isOpen, onClose }: ISidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden",
          { "opacity-100 visible": isOpen, "opacity-0 invisible": !isOpen }
        )}
        onClick={onClose}  // close sidebar when overlay is clicked
      ></div>

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-64 h-full bg-zinc-200 p-2 border-r z-50 transition-transform transform lg:relative lg:translate-x-0 lg:flex lg:flex-col",
          {
            "translate-x-0": isOpen,   // Sidebar visible on mobile
            "-translate-x-full": !isOpen  // Sidebar hidden on mobile
          }
        )}
      >
      {/* <div className="w-64 hidden lg:flex lg:flex-col bg-zinc-200 p-2 border-r"> */}
        <PersonalMenu />
        <WorkspaceMenu />
        <PrimaryMenu />
      </div>
    </>
    
  );
}