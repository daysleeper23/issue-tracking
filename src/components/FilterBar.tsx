import { Button } from "@headlessui/react";
import { FunnelSimple, SlidersHorizontal } from "@phosphor-icons/react";

export interface IFilterBarProps {
}

export default function FilterBar (_props: IFilterBarProps) {
  return (
    <div className="px-6 py-2 border-b text-zinc-700 flex justify-between">
      <Button className='text-xs font-medium px-2 py-1 rounded hover:bg-zinc-100 flex gap-2'>
        <FunnelSimple size={16} weight="bold" />
        Filter
      </Button>

      <Button className='text-xs font-medium px-2 py-1 rounded border shadow-sm border-zinc-200 hover:bg-zinc-100 flex gap-2'>
        <SlidersHorizontal size={16} weight="bold" />
        Display
      </Button>
    </div>
  );
}
