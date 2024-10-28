import PageTitle from '../PageTitle';

export interface IDraftsPageProps {
}

export default function DraftsPage (props: IDraftsPageProps) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden rounded-sm bg-white">
      <PageTitle title='Drafts' />
    </div>
  );
}
