import { ITask } from "@/lib/types";
import InteractiveButton from "../../InteractiveButton";
import DueDate from "../../Properties/DueDate";
import Estimate from "../../Properties/Estimate";
import Priority from "../../Properties/Priority";
import Sprint from "../../Properties/Sprint";
import { useDrag } from "react-dnd";
import clsx from "clsx";
import Assignee from "../../Properties/Assignee";

export interface IKanbanCardProps {
  task: ITask
}

interface DropResult {
  name: string
}

export default function KanbanCard ({ task }: IKanbanCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: { task },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        alert(`You dropped ${item.task.title} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div ref={drag} className={clsx(
      'bg-white p-3 rounded border border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50 transition-shadow cursor-pointer space-y-1',
      {
        "opacity-40": isDragging,  // Apply 40% opacity if isDragging is true
        "opacity-100": !isDragging, // Full opacity if isDragging is false
      }
    )}
    >
      <div className="flex flex-row justify-between items-center">
        <span className="font-extralight text-xs uppercase">{task.id}</span>
        <Assignee assignee={task.assignee} />
      </div>
      <div className="font-medium text-sm text-zinc-900">
        {task.title}
      </div>

      <div className="flex flex-row flex-wrap gap-2">
        <InteractiveButton>
          <DueDate dueDate={task.dueDate} />
        </InteractiveButton>
        <InteractiveButton>
          <Priority priority={task.priority} />
        </InteractiveButton>
        <InteractiveButton>
          <Estimate estimate={task.estimate} />
        </InteractiveButton>
        <InteractiveButton>
          <Sprint sprint={task.sprint} />
        </InteractiveButton>
        <InteractiveButton children={task.project.title} />
      </div>

    </div>
  );
}
