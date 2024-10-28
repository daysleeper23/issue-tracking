import * as React from 'react';
import PageTitle from '../PageTitle';

export interface IInboxPageProps {
}

export default function InboxPage (props: IInboxPageProps) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden rounded-sm bg-white">
      <PageTitle title='Inbox' />
    </div>
  );
}
