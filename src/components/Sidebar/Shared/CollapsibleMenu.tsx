import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { CaretDown, CaretRight, Icon } from '@phosphor-icons/react';
import ListMenuItem from './ListMenu';

export interface ICollapsibleMenuProps {
  title: string;
  items: Array<{
    url: string;
    text: string;
    icon: Icon;
  }>;
}

export default function CollapsibleMenu ({ title, items }: ICollapsibleMenuProps) {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <DisclosureButton className="w-full px-2 py-2 text-left text-zinc-600 flex gap-2 items-center rounded hover:bg-zinc-100">
            <h3 className="text-xs font-medium align-middle">{title} </h3>
            {open 
              ? <CaretDown size={12} weight='fill'/>
              : <CaretRight size={12} weight='fill'/>
            } 
          </DisclosureButton>
          <DisclosurePanel
            static
            className={`mt-1 overflow-hidden transition-max-height duration-100 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
          >
            <ListMenuItem items={items} />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
