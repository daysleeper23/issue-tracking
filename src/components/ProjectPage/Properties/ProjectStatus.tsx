import { CheckCircle, CircleHalf, DotsThreeCircle, Circle, CircleDashed, XCircle } from "@phosphor-icons/react";
import clsx from "clsx";


export interface IProjectStatusProps {
  status: string;
  isDisplayText: boolean;
  iconSize: number;
}

const statusIcon = (status: string, size: number) => {
  if (status === 'Backlog') {
    return <CircleDashed className="text-gray-400" size={size} weight="bold" />
  } else if (status === 'Todo') {
    return <Circle className="text-orange-400" size={size} weight="bold" />
  } else if (status === 'In Progress') {
    return <CircleHalf className="text-blue-600" size={size} weight="fill" />;
  } else if (status === 'Review') {
    return <DotsThreeCircle className="text-purple-500" size={size} weight="fill" />
  } else if (status === 'Completed') {
    return <CheckCircle className="text-green-600" size={size} weight='fill' />;
  }
  return <XCircle className="text-red-600" size={size} weight="bold" />
}

export default function ProjectStatus ({ status, isDisplayText, iconSize }: IProjectStatusProps) {
  return (
    <div className={clsx(
      "flex gap-1 items-center justify-center",
      {
        "w-4 h-4": isDisplayText === false,
        "": isDisplayText === true
      }
      )}
    >
      {statusIcon(status, iconSize)}
      {isDisplayText && status}
    </div>
  );
}
