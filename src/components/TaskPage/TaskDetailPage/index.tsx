import InteractiveButton from '../Properties/InteractiveButton';
import TaskTitle from '../Properties/TaskTitle';
import { Button } from '@headlessui/react';
import { Copy, GitBranch, Link } from '@phosphor-icons/react';
import SprintElement from '../Properties/SprintElement';
import { DropdownWithIcon } from '@/components/Dropdown';
import { useAppSelector } from '@/store';
import { useLocation } from 'react-router-dom';
// import { DropdownHeadless } from '@/components/DropdownHeadless';

export interface ITaskDetailPageProps {

}

export default function TaskDetailPage (_props: ITaskDetailPageProps) {
  const buttonStyle = 'list';
  const location = useLocation();
  const { task } = location.state || {}; // Extract the `task` object

  const projects = useAppSelector(state => state.projects.data);
  const proj = projects.find(p => p.id === task.project);

  if (!proj) {
    return <div>No project found</div>;
  }

  return (
    <div className='flex h-full'>
      <div className='flex-1 border-r border-zinc-200 flex flex-col gap-2 py-8 px-24'>
        <TaskTitle title={task.title} size='large' style='card'/>
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
            <DropdownWithIcon selected={task.status} buttonText={true} type='task-status' size={1} />
          </div>

          {/* priority */}
          <div className='flex gap-1'>
            <DropdownWithIcon selected={task.priority} buttonText={true} type='priority' size={1}/>
          </div>

          {/* assignee */}
          <div className='flex gap-1'>
            <DropdownWithIcon selected={task.assignee} buttonText={true} type='assignee' size={1} />
          </div>

          {/* estimate */}
          <div className='flex gap-1'>
            <DropdownWithIcon selected={task.estimate.toString()} buttonText={true} type='estimate' size={1} />
          </div>

          {/* <div className='flex gap-1'>
            <DropdownHeadless selected={task.estimate.toString()} buttonText={true} type='estimate' />
          </div> */}

          {/* project */}
          <div className='flex flex-col gap-2'>
            <div className='text-zinc-600 text-xs font-medium'>Project</div>
            <InteractiveButton style={buttonStyle}>{proj.title}</InteractiveButton>
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
