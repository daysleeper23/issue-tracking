import { ITask } from "@/lib/types";
import TaskNumber from "../Properties/TaskNumber";
import TaskTitle from "../Properties/TaskTitle";
import InteractiveButton from "../Properties/InteractiveButton";
import DueDate from "../Properties/DueDate";
import Priority from "../Properties/PriorityElement";
import Estimate from "../Properties/EstimateElement";
import SprintElement from "../Properties/SprintElement";
import TaskStatus from "../Properties/TaskStatus";
import ProjectElement from "../Properties/ProjectElement";
import { Link } from "react-router-dom";
import { DropdownWithIcon } from "@/components/Dropdown";

export interface ITaskrowProps {
  task: ITask;
}

export default function Taskrow ({ task }: ITaskrowProps) {
  const propertyStyle = 'list';

  return (
    <div className="relative flex flex-none">
      <Link to={`/tasks/${task.id}`} state = {{ task }} className="absolute inset-0 z-0 pointer-events-auto" />
      
      <div className="flex flex-1 w-full max-w-full gap-1 px-6 h-11 items-center border-b border-zinc-100 relative z-10 pointer-events-none">
        <div className="flex flex-1 gap-1 items-center min-w-0">
          <div className="pointer-events-auto">
            <InteractiveButton style={propertyStyle}>
              <Priority priority={task.priority} iconSizeControl={16} />
            </InteractiveButton>
          </div>
          <TaskNumber value={task.number} />
    
          <div className="pointer-events-auto">
            <InteractiveButton style={propertyStyle}>
              <TaskStatus status={task.status} isDisplayText={false} iconSize={16}/>
            </InteractiveButton>
          </div>
    
          {/* <div className="flex-grow flex-shrink"> */}
            <TaskTitle title={task.title} size='small' style="table" />
          {/* </div> */}
        </div>
        <div className="flex flex-none gap-1">
          <div className="hidden md:flex pointer-events-auto">
            <InteractiveButton style='board'>
              <ProjectElement project={task.project} />
            </InteractiveButton>
          </div>
          <div className="hidden md:flex pointer-events-auto">
            <InteractiveButton style='board'>
              <SprintElement sprint={task.sprint} />
            </InteractiveButton>
          </div>
          <div className="hidden md:flex pointer-events-auto">
            <InteractiveButton  style={propertyStyle}>
              <Estimate estimate={task.estimate} />
            </InteractiveButton>
          </div>
    
          <div className="hidden md:flex pointer-events-auto">
            <InteractiveButton style={propertyStyle}>
              <DueDate dueDate={task.dueDate} />
            </InteractiveButton>
          </div>
          <div className="pointer-events-auto">
            <DropdownWithIcon
              selected={task.assignee} 
              buttonText={false} type='assignee' />
          </div>
          {/* <div className="pointer-events-auto">
            <DropdownHeadless
              selected={task.assignee} 
              buttonText={false} type='assignee' />
          </div> */}
          
        </div>
      </div>
    
    </div>
  );
}
