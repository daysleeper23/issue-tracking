import PageTitle from '../PageTitle';
import FilterBar from '../FilterBar';

export interface IProjecPageProps {
}

export default function ProjectPage (_props: IProjecPageProps) {
  return (
    <>
      <PageTitle title='Projects' />
      <FilterBar />
    </>
  );
}