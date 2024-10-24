import { ITask } from "@/lib/types";
import InteractiveButton from "../InteractiveButton";
import DueDate from "../DueDate";
import Estimate from "../Estimate";
import Priority from "../Priority";
import Sprint from "../Sprint";

export interface IKanbanCardProps {
  task: ITask
}

export default function KanbanCard ({ task }: IKanbanCardProps) {
  return (
    <div className='bg-white p-3 rounded border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-shadow cursor-pointer space-y-1'>
      <div className="flex flex-row justify-between items-center">
        <span className="font-extralight text-xs uppercase">{task.id}</span>
        <img className="w-5 h-5 rounded-full" src={task.assignee.avatarUrl}></img>
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
