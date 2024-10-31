import FilterBar from '../FilterBar';

export interface IMyTasksPageProps {
}

export default function MyTasksPage (_props: IMyTasksPageProps) {
  return (
    <>
      {/* <PageTitle title='My Tasks' /> */}
      <FilterBar />
    </>
  );
}
