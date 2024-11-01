import { ITask } from '@/lib/types';
import InteractiveButton from '../Properties/InteractiveButton';
import TaskStatus from '../Properties/TaskStatus';
import TaskTitle from '../Properties/TaskTitle';
import { Button } from '@headlessui/react';
import { Copy, GitBranch, Link } from '@phosphor-icons/react';
import SprintElement from '../Properties/SprintElement';
import TaskPriority from '../Properties/PriorityElement';
import Assignee from '../Properties/Assignee';
import EstimateElement from '../Properties/EstimateElement';

export interface ITaskDetailPageProps {
  task: ITask | null;
}

export default function TaskDetailPage ({ task }: ITaskDetailPageProps) {
  const buttonStyle = 'list';

  if (!task) {
    return <div>No task found</div>;
  }

  return (
    <div className='flex h-full'>
      <div className='flex-1 border-r border-zinc-200 flex flex-col gap-2 py-8 px-24'>
        <TaskTitle title={task.title} size='large' />
        <div>
          This is the task description that you're expecting to see.
        </div>
      </div>
      <div className='w-64 flex flex-col px-6 gap-4'>

        <div className='flex justify-between py-2 items-center'>
          <div className='text-zinc-600 text-xs font-medium'>
            Properties
          </div>
          <div className='flex flex-row-reverse gap-2 text-zinc-600'>
            <Button className='rounded hover:bg-zinc-100 p-1'>
              <Link size={16} weight="bold" />
            </Button>
            <Button className='rounded hover:bg-zinc-100 p-1'>
              <Copy size={16} weight="bold" />
            </Button>
            <Button className='rounded hover:bg-zinc-100 p-1'>
              <GitBranch size={16} weight="bold" />
            </Button>
          </div>
        </div>

        <div className='flex flex-col gap-4'>

          {/* status */}
          <div className='flex gap-1'>
            <InteractiveButton style={buttonStyle}>
              <TaskStatus status={task.status} isDisplayText={true} iconSize={20} />
            </InteractiveButton>
          </div>

          {/* priority */}
          <div className='flex gap-1'>
            <InteractiveButton style={buttonStyle}>
              <TaskPriority priority={task.priority} iconSizeControl={20} isDisplayText={true} />
            </InteractiveButton>
          </div>

          {/* assignee */}
          <div className='flex gap-1'>
            <InteractiveButton style={buttonStyle}>
              <Assignee assignee={task.assignee} isDisplayText={true}/>
            </InteractiveButton>
          </div>

          {/* estimate */}
          <div className='flex gap-1'>
            <InteractiveButton style={buttonStyle}>
              <EstimateElement estimate={task.estimate} iconSizeControl={20} />
            </InteractiveButton>
          </div>

          {/* project */}
          <div className='flex flex-col gap-2'>
            <div className='text-zinc-600 text-xs font-medium'>Project</div>
            <InteractiveButton style={buttonStyle}>{task.project.title}</InteractiveButton>
          </div>

          {/* sprint */}          
          <div className='flex flex-col gap-2'>
            <div className='text-zinc-600 text-xs font-medium'>Sprint</div>
            <InteractiveButton style={buttonStyle}>
              <SprintElement sprint={task.sprint} />
            </InteractiveButton>
          </div>

        </div>
      </div>
    </div>
  );
}
