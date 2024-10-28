import { At, FileDashed, Tray } from '@phosphor-icons/react';
import ListMenu from './Shared/ListMenu';

export interface IPersonalMenuProps {
}

const menuItemsPersonal = [
  {
    url: '/inbox',
    text: 'Inbox',
    icon: Tray
  },
  {
    url: '/my-tasks',
    text: 'My Tasks',
    icon: At
  },
  {
    url: '/drafts',
    text: 'Drafts',
    icon: FileDashed
  }
]

export default function PersonalMenu (props: IPersonalMenuProps) {
  
  return (
    <ListMenu items={menuItemsPersonal} />
  );
}
