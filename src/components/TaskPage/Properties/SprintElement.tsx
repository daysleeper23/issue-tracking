import { ITask } from "@/lib/types";
import { CaretCircleDoubleRight } from "@phosphor-icons/react";

export interface ISprintElementProps {
  sprint: ITask["sprint"];
}

export default function SprintElement ({ sprint }: ISprintElementProps) {
  return (
    <div className="flex gap-1 items-center text-nowrap">
      <CaretCircleDoubleRight size={16} weight="bold" />
      {sprint.title}
    </div>
  );
}
