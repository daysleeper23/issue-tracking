import { ITask } from "@/lib/types";
import { CaretCircleDoubleRight } from "@phosphor-icons/react";

export interface ISprintProps {
  sprint: ITask["sprint"];
}

export default function Sprint ({ sprint }: ISprintProps) {
  return (
    <div className="flex gap-1">
      <CaretCircleDoubleRight size={16} weight="bold" />
      {sprint.title}
    </div>
  );
}
