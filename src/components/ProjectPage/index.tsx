import * as React from 'react';
import PageTitle from '../PageTitle';

export interface IProjecPageProps {
}

export default function ProjectPage (props: IProjecPageProps) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden rounded-sm bg-white">
      <PageTitle title='Projects' />
    </div>
  );
}