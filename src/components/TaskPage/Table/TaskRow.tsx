import { ITask } from "@/lib/types";
import TaskNumber from "../Properties/TaskNumber";
import Assignee from "../Properties/Assignee";
import TaskTitle from "../Properties/TaskTitle";
import InteractiveButton from "../Properties/InteractiveButton";
import DueDate from "../Properties/DueDate";
import Priority from "../Properties/PriorityElement";
import Estimate from "../Properties/EstimateElement";
import SprintElement from "../Properties/SprintElement";
import TaskStatus from "../Properties/TaskStatus";
import ProjectElement from "../Properties/ProjectElement";
import { Link } from "react-router-dom";

export interface ITaskrowProps {
  task: ITask;
}

export default function Taskrow ({ task }: ITaskrowProps) {
  const propertyStyle = 'list';

  return (
    <Link to={`/tasks/${task.id}`} className="flex flex-1 gap-1 px-2 sm:px-6 h-11 items-center justify-between border-b border-zinc-100">
      <div className="flex flex-1 gap-1 px-2 sm:px-6 h-11 items-center justify-between border-b border-zinc-100">
        <div className="flex gap-1 items-center">
          
          <InteractiveButton style={propertyStyle}>
            <Priority priority={task.priority} />
          </InteractiveButton>

          <TaskNumber value={task.id} />

          <InteractiveButton style={propertyStyle}>
            <TaskStatus status={task.status} isDisplayText={false} iconSize={16}/>
          </InteractiveButton>
          
          <TaskTitle title={task.title} size='small' />
        </div>

        <div className="flex flex-row flex-wrap gap-1">
          <div className="hidden md:flex">
            <InteractiveButton style='board'>
              <ProjectElement project={task.project} />
            </InteractiveButton>
          </div>

          <div className="hidden md:flex">
            <InteractiveButton style='board'>
              <SprintElement sprint={task.sprint} />
            </InteractiveButton>
          </div>

          <div className="hidden md:flex">
            <InteractiveButton  style={propertyStyle}>
              <Estimate estimate={task.estimate} />
            </InteractiveButton>
          </div>
          
          <div className="hidden md:flex">
            <InteractiveButton style={propertyStyle}>
              <DueDate dueDate={task.dueDate} />
            </InteractiveButton>
          </div>

          <InteractiveButton  style={propertyStyle}>
            <Assignee assignee={task.assignee} />
          </InteractiveButton>
        </div>
      </div>
    </Link>
  );
}
