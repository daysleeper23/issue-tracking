import { ITask, Project } from '@/lib/types';
import projectsService from '@/services/projects';
import { useState, useEffect } from 'react';

export interface IProjectElementProps {
  project: ITask['project'];
}

export default function ProjectElement ({ project }: IProjectElementProps) {
  const [proj, setProj] = useState<Project>();
  
  useEffect (() => {
    const fetchProject = async () => {
      const p = await projectsService.getProjectById(project);
      setProj(p);
    }
    fetchProject();
  }, []);

  if (!proj) return 'Loading...'

  return (
    <div className="flex gap-1 items-center text-nowrap">
      {proj.title}
    </div>
  );
}
