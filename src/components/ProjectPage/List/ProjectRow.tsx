import { Project } from "@/lib/types";
import Assignee from "@/components/TaskPage/Properties/Assignee";
import TaskTitle from "@/components/TaskPage/Properties/TaskTitle";
import InteractiveButton from "@/components/TaskPage/Properties/InteractiveButton";
import DueDate from "@/components/TaskPage/Properties/DueDate";
import PriorityElement from "@/components/TaskPage/Properties/PriorityElement";
// import EstimateElement from "@/components/TaskPage/Properties/EstimateElement";

import ProjectStatus from "../Properties/ProjectStatus";
import { Link } from "react-router-dom";

export interface IProjectRowProps {
  project: Project;
}

export default function Taskrow ({ project }: IProjectRowProps) {
  const propertyStyle = 'list';

  return (
    <div className="flex flex-none">
      <Link to={`/team-projects/${project.id}`} className="flex flex-1 w-full max-w-full">
        <div className="flex flex-1 w-full max-w-full gap-1 px-4 md:px-8 h-11 items-center border-b border-zinc-100">
          <div className="flex flex-1 gap-3 items-center min-w-0">
      
            {/* <div className="flex-grow flex-shrink"> */}
              <TaskTitle title={project.title} size='small' style="table" />
            {/* </div> */}
          </div>
          <div className="flex flex-none gap-4 items-center">
            
            {/* 
              * Priority
              */}
            <div className="w-12">
              <InteractiveButton style={propertyStyle}>
                <PriorityElement priority={project.priority} iconSizeControl={20} />
              </InteractiveButton>
            </div>

            {/* 
              * Lead
              */}
            <div className="w-10">
              <InteractiveButton style={propertyStyle}>
                <Assignee assignee={project.lead} />
              </InteractiveButton>
            </div>

            {/* 
              * Start
              */}
            <div className="hidden md:flex">
              <InteractiveButton style={propertyStyle}>
                <DueDate dueDate={project.start} />
              </InteractiveButton>
            </div>

            {/* 
              * Target
              */}
            <div className="hidden md:flex">
              <InteractiveButton style={propertyStyle}>
                <DueDate dueDate={project.end} />
              </InteractiveButton>
            </div>

            {/* 
              * Status
              */}
            <div className="w-24">
              <InteractiveButton style={propertyStyle}>
                <ProjectStatus status={project.status} isDisplayText={true} iconSize={20}/>
              </InteractiveButton>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
