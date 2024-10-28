import * as React from 'react';
import PageTitle from '../PageTitle';
import { Filter } from 'lucide-react';
import FilterBar from '../FilterBar';

export interface ISprintPageProps {
}

export default function SprintPage (props: ISprintPageProps) {
  return (
    <>
      <PageTitle title='Sprints' />
      <FilterBar />
    </>
  );
}
