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
    // <div className="flex flex-1">
    //   <div className="flex flex-1 gap-2 min-w-0">
    //     <div className="flex-none">Left</div>
    //     <div className="flex-1 min-w-0 overflow-hidden text-nowrap text-clip">
    //       A very long text that should be truncated at some point in time and should be displayed as an ellipsis instead of overflowing the container and breaking the layout.
    //     </div>
    //   </div>
    //   <div className="flex flex-none">
    //     <div>
    //       Right 1
    //     </div>
    //     <div>
    //       Right 2
    //     </div>
    //     <div>
    //       Right 3
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-none">
      <Link to={`/tasks/${task.id}`} className="flex flex-1 w-full max-w-full">
        <div className="flex flex-1 w-full max-w-full gap-1 px-4 md:px-8 h-11 items-center border-b border-zinc-100">
          <div className="flex flex-1 gap-1 items-center min-w-0">
      
            <InteractiveButton style={propertyStyle}>
              <Priority priority={task.priority} iconSizeControl={16} />
            </InteractiveButton>

            <TaskNumber value={task.id} />
            
            <InteractiveButton style={propertyStyle}>
              <TaskStatus status={task.status} isDisplayText={false} iconSize={16}/>
            </InteractiveButton>
      
            {/* <div className="flex-grow flex-shrink"> */}
              <TaskTitle title={task.title} size='small' style="table" />
            {/* </div> */}
          </div>
          <div className="flex flex-none gap-1">
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
    </div>
  );
}
