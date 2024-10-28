import PageTitle from '../PageTitle';

export interface IMyTasksPageProps {
}

export default function MyTasksPage (props: IMyTasksPageProps) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden rounded-sm bg-white">
      <PageTitle title='My Tasks' />
    </div>
  );
}
