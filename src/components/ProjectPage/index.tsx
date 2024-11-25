// import { useState } from 'react';
import { Project } from '@/lib/types';
import FilterBar from '../FilterBar';
// import KanbanBoard from '../TaskPage/Kanban';
import ProjectListVirtualized from './List/ProjectListVirtualized';
import { useAppSelector } from '@/store';

export interface IProjecPageProps {
}

export default function ProjectPage (_props: IProjecPageProps) {
  
  // const [projectsList] = useAtom(projectsListAtom)
  const projects = useAppSelector((state) => state.projects.data);
  
  if (!projects) return <div>Loading...</div>

  return (
    <>
      <FilterBar />
      <ProjectListVirtualized data={projects} />
      {/* {
        displayState === 1
          ? <KanbanBoard />
          : <ProjectListVirtualized data={} />
      } */}
    </>
  );
}