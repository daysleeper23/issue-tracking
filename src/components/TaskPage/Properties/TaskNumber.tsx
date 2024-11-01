import { ITask } from "@/lib/types";

export interface ITaskNumberProps {
  value: ITask["id"];
}

export default function TaskNumber ({ value }: ITaskNumberProps) {
  return (
    <div className="hidden md:flex items-center">
      <span className="w-16 font-extralight text-xs uppercase text-zinc-500">{value}</span>
    </div>
  );
}