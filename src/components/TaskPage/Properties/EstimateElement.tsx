import { Timer } from '@phosphor-icons/react';

export interface IEstimateProps {
  estimate: number;
  iconSizeControl?: number;
}

export default function EstimateElement ({ estimate, iconSizeControl }: IEstimateProps) {
  return (
    <div className='flex gap-1 items-center'>
      <Timer size={iconSizeControl ? iconSizeControl : 16} weight="bold" />
      {estimate}
    </div>
  );
}
