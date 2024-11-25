import { ITask, Sprint } from "@/lib/types";
import { getById } from "@/services/sprints";
import { CaretCircleDoubleRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export interface ISprintElementProps {
  sprint: ITask["sprint"];
}

export default function SprintElement ({ sprint }: ISprintElementProps) {
  const [spr, setSpr] = useState<Sprint>();
  
  useEffect (() => {
    const fetchSprint = async () => {
      const sp = await getById(sprint);
      setSpr(sp);
    }
    fetchSprint();
  }, []);

  if (!spr) return 'Loading...'

  return (
    <div className="flex gap-1 items-center text-nowrap">
      <CaretCircleDoubleRight size={16} weight="bold" />
      {spr.name}
    </div>
  );
}
