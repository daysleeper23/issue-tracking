import * as React from 'react';
import PageTitle from '../PageTitle';
import FilterBar from '../FilterBar';

export interface ITeamsPageProps {
}

export default function TeamsPage (props: ITeamsPageProps) {
  return (
    <div>
      <PageTitle title='Teams' />
      <FilterBar />
    </div>
  );
}
