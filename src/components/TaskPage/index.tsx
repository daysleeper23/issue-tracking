import * as React from 'react';
import PageTitle from '../PageTitle';

export interface ITaskPageProps {
}

export function TaskPage (props: ITaskPageProps) {
  return (
    <div className='p-4'>
      {/* <h2>Tasks</h2> */}
      <PageTitle title='Tasks' />
    </div>
  );
}