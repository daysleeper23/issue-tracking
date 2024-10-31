import { CheckSquare, MinusSquare, PlusSquare, Square, XSquare, Selection } from "@phosphor-icons/react";
import clsx from "clsx";


export interface ITaskStatusProps {
  status: string;
  isDisplayText: boolean;
  iconSize: number;
}

const statusIcon = (status: string, size: number) => {
  if (status === 'Backlog') {
    return <Selection className="text-gray-400" size={size} weight="bold" />
  } else if (status === 'To Do') {
    return <Square className="text-orange-400" size={size} weight="bold" />
  } else if (status === 'In Progress') {
    return <MinusSquare className="text-blue-600" size={size} weight="bold" />;
  } else if (status === 'Review') {
    return <PlusSquare className="text-purple-500" size={size} weight="bold" />
  } else if (status === 'Completed') {
    return <CheckSquare className="text-green-600" size={size} weight='fill' />;
  }
  return <XSquare className="text-red-600" size={size} weight="bold" />
}

export default function TaskStatus ({ status, isDisplayText, iconSize }: ITaskStatusProps) {
  return (
    <div className={clsx(
      "flex gap-1 items-center justify-center",
      {
        "w-5 h-5": isDisplayText === false,
        "": isDisplayText === true
      }
      )}
    >
      {statusIcon(status, iconSize)}
      {isDisplayText && status}
    </div>
  );
}
