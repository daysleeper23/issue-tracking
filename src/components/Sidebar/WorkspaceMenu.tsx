import { CheckSquare, StackSimple, Target, UserSquare } from "@phosphor-icons/react";
import CollapsibleMenu from "./Shared/CollapsibleMenu";

export interface IWorkspaceMenuProps {
}

const menuItemsWorkspace= [
  {
    url: '/initiatives',
    text: 'Issues',
    icon: CheckSquare
  },
  {
    url: '/projects',
    text: 'Projects',
    icon: Target
  },
  {
    url: '/views',
    text: 'Views',
    icon: StackSimple
  },
  {
    url: '/teams',
    text: 'Teams',
    icon: UserSquare
  }
]

export default function WorkspaceMenu (props: IWorkspaceMenuProps) {

  return (
    <CollapsibleMenu title="Workspace" items={menuItemsWorkspace} />
  );
}
