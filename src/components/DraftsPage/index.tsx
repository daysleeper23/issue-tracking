import FilterBar from '../FilterBar';
import PageTitle from '../PageTitle';

export interface IDraftsPageProps {
}

export default function DraftsPage (props: IDraftsPageProps) {
  return (
    <>
      <PageTitle title='Drafts' />
      <FilterBar />
    </>
  );
}
