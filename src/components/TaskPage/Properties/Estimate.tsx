import { Timer } from '@phosphor-icons/react';

export interface IEstimateProps {
  estimate: number;
}

export default function Estimate ({ estimate }: IEstimateProps) {
  return (
    <div className='flex gap-1 items-center'>
      <Timer size={16} weight="bold" />
      {estimate}
    </div>
  );
}
