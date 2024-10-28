import { CaretCircleDoubleRight, CheckSquare, Target } from '@phosphor-icons/react';
import CollapsibleMenu from './Shared/CollapsibleMenu';

export interface IPrimaryMenuProps {
}

const menuItemsPrimary= [
  {
    url: '/tasks',
    text: 'Issues',
    icon: CheckSquare
  },
  {
    url: '/team-projects',
    text: 'Projects',
    icon: Target
  },
  {
    url: '/sprints',
    text: 'Sprints',
    icon: CaretCircleDoubleRight
  }
]

export default function PrimaryMenu (props: IPrimaryMenuProps) {

  return (
    <CollapsibleMenu title="Exploring" items={menuItemsPrimary} />
  );
}
