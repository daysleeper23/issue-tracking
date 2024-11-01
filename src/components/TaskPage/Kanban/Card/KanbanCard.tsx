import { ITask } from "@/lib/types";
import InteractiveButton from "../../Properties/InteractiveButton";
import DueDate from "../../Properties/DueDate";
import Estimate from "../../Properties/EstimateElement";
import Priority from "../../Properties/PriorityElement";
import Sprint from "../../Properties/SprintElement";
import { useDrag } from "react-dnd";
import clsx from "clsx";
import Assignee from "../../Properties/Assignee";
import TaskNumber from "../../Properties/TaskNumber";
import TaskTitle from "../../Properties/TaskTitle";
import { Link } from "react-router-dom";
import TaskStatus from "../../Properties/TaskStatus";

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
      <Link to={`/tasks/${task.id}`}>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-1">
            <InteractiveButton style="board">
              <TaskStatus status={task.status} isDisplayText={false} iconSize={16}/>
            </InteractiveButton>
            <TaskNumber value={task.id} />
          </div>
          
          <Assignee assignee={task.assignee} />
        </div>

        <TaskTitle title={task.title} size='small' style="card" />
        
        <div className="flex flex-row flex-wrap gap-2">
          <InteractiveButton style="board">
            <DueDate dueDate={task.dueDate} />
          </InteractiveButton>
          <InteractiveButton  style="board">
            <Priority priority={task.priority} />
          </InteractiveButton>
          <InteractiveButton  style="board">
            <Estimate estimate={task.estimate} />
          </InteractiveButton>
          <InteractiveButton  style="board">
            <Sprint sprint={task.sprint} />
          </InteractiveButton>
          <InteractiveButton style="board" children={task.project.title} />
        </div>
      </Link>

    </div>
  );
}
