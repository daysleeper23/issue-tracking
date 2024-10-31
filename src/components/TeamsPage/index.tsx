import PageTitle from '../PageTitle';
import FilterBar from '../FilterBar';

export interface ITeamsPageProps {
}

export default function TeamsPage (_props: ITeamsPageProps) {
  return (
    <div>
      {/* <PageTitle title='Teams' /> */}
      <FilterBar />
    </div>
  );
}
