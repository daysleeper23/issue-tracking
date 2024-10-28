import { CheckSquare, MinusSquare, PlusSquare, Square, XSquare, Selection } from "@phosphor-icons/react";


export interface ITaskStatusProps {
  status: string;
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

export default function TaskStatus ({ status }: ITaskStatusProps) {
  return (
    <div className="flex gap-1 items-center">
      {statusIcon(status, 20)}
      {status}
    </div>
  );
}
