import * as React from 'react';

export interface IPageTitleProps {
  title: string
}

export default function PageTitle ({ title }: IPageTitleProps) {
  return (
    <div className='flex flex-grow'>
      <h2 className='text-2xl font-bold'>{title}</h2>
    </div>
  );
}