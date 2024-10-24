import * as React from 'react';
import PageTitle from '../PageTitle';

export interface ISprintPageProps {
}

export default function SprintPage (props: ISprintPageProps) {
  return (
    <div className='p-4'>
      <PageTitle title='Sprints' />
    </div>
  );
}
