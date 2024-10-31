import { ITask } from "@/lib/types";
import TaskNumber from "../Properties/TaskNumber";
import Assignee from "../Properties/Assignee";
import TaskTitle from "../Properties/TaskTitle";
import InteractiveButton from "../Properties/InteractiveButton";
import DueDate from "../Properties/DueDate";
import Priority from "../Properties/TaskPriority";
import Estimate from "../Properties/Estimate";
import SprintElement from "../Properties/SprintElement";
import TaskStatus from "../Properties/TaskStatus";
import ProjectElement from "../Properties/ProjectElement";

export interface ITaskrowProps {
  task: ITask;
}

export default function Taskrow ({ task }: ITaskrowProps) {
  const propertyStyle = 'list';

  return (
    <div className="flex flex-1 gap-1 px-6 h-11 items-center justify-between border-b border-zinc-100">
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
        <InteractiveButton style={propertyStyle}>
          <ProjectElement project={task.project} />
        </InteractiveButton>

        <InteractiveButton style={propertyStyle}>
          <SprintElement sprint={task.sprint} />
        </InteractiveButton>

        <InteractiveButton style={propertyStyle}>
          <DueDate dueDate={task.dueDate} />
        </InteractiveButton>
        
        <InteractiveButton  style={propertyStyle}>
          <Estimate estimate={task.estimate} />
        </InteractiveButton>
        <InteractiveButton  style={propertyStyle}>
          <Assignee assignee={task.assignee} />
        </InteractiveButton>
      </div>
    </div>
  );
}
