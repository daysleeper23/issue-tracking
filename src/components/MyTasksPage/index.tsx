import FilterBar from '../FilterBar';
import PageTitle from '../PageTitle';

export interface IMyTasksPageProps {
}

export default function MyTasksPage (props: IMyTasksPageProps) {
  return (
    <>
      <PageTitle title='My Tasks' />
      <FilterBar />
    </>
  );
}
