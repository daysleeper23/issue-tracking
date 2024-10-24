import * as React from 'react';
import PageTitle from '../PageTitle';

export interface IProjecPageProps {
}

export default function ProjectPage (props: IProjecPageProps) {
  return (
    <div className='p-4'>
      <PageTitle title='Projects' />
    </div>
  );
}