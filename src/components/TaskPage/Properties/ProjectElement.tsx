import { ITask } from '@/lib/types';

export interface IProjectElementProps {
  project: ITask['project'];
}

export default function ProjectElement ({ project }: IProjectElementProps) {
  return (
    <div className="flex gap-1 items-center text-nowrap">
      {project.title}
    </div>
  );
}
