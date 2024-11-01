import { Button } from "@headlessui/react";
import { FunnelSimple, SlidersHorizontal } from "@phosphor-icons/react";

export interface IFilterBarProps {
  setDisplayState?: (state: number) => void;
}

export default function FilterBar ({ setDisplayState = () => {} }: IFilterBarProps) {
  // const handleDisplayState = () => {

  // }
  return (
    <div className="px-4 md:px-8 py-2 border-b text-zinc-700 flex justify-between">
      <Button className='text-xs font-medium px-1 py-1 rounded hover:bg-zinc-100 flex gap-2 items-center'>
        <FunnelSimple size={16} weight="bold" />
        Filter
      </Button>

      <div className="flex gap-2">
        <Button 
            className='text-xs font-medium px-2 py-1 rounded border shadow-sm border-zinc-200 hover:bg-zinc-100 flex gap-2'
            onClick={() => setDisplayState(0)}
          >
            <SlidersHorizontal size={16} weight="bold" />
            Board
          </Button>

          <Button 
            className='text-xs font-medium px-2 py-1 rounded border shadow-sm border-zinc-200 hover:bg-zinc-100 flex gap-2'
            onClick={() => setDisplayState(1)}
          >
            <SlidersHorizontal size={16} weight="bold" />
            List
          </Button>
      </div>
      
    </div>
  );
}
