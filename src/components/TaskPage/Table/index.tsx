import { ITask } from '@/lib/types';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import TaskNumber from '../Properties/TaskNumber';
import TaskTitle from '../Properties/TaskTitle';
import InteractiveButton from '../Properties/InteractiveButton';
import Sprint from '../Properties/SprintElement';
import DueDate from '../Properties/DueDate';
import Priority from '../Properties/PriorityElement';
import Estimate from '../Properties/EstimateElement';
import Assignee from '../Properties/Assignee';
import TaskStatus from '../Properties/TaskStatus';

const columnHelper = createColumnHelper<ITask>();

const columns = [
  columnHelper.accessor('priority', {
    cell: info =>
      <InteractiveButton style='list'>
        <Priority priority={info.getValue()} />
      </InteractiveButton>
  }),
  columnHelper.accessor('id', {
    cell: info => <TaskNumber value={info.getValue()} />,
  }),
  columnHelper.accessor('status', {
    cell: info =>
      <InteractiveButton style='list'>
        <TaskStatus status={info.getValue()} isDisplayText={false} iconSize={16}/>
      </InteractiveButton>
  }),
  columnHelper.accessor('title', {
    cell: info => <TaskTitle title={info.getValue()} size='mini' style='table' />,
  }),
  columnHelper.accessor('project.title', {
    cell: info => <InteractiveButton style='list' children={info.renderValue()} />,
  }),
  columnHelper.accessor('sprint', {
    cell: info => 
      <InteractiveButton style='list'>
        <Sprint sprint={info.getValue()} />
      </InteractiveButton>

  }),
  columnHelper.accessor('estimate', {
    cell: info => 
      <InteractiveButton style='list'>
        <Estimate estimate={info.getValue()} />
      </InteractiveButton>
  }),
  columnHelper.accessor('dueDate', {
    cell: info => 
      <InteractiveButton style='list'>
        <DueDate dueDate={info.getValue()} />
      </InteractiveButton>
  }),
  columnHelper.accessor('assignee', {
    cell: info => 
      <InteractiveButton style='list'>
        <Assignee assignee={info.getValue()} />
      </InteractiveButton>
  }),
]

export interface ITaskTableProps {
  data: {
    title: string;
    value: string;
    tasks: ITask[];
  }[];
}

export default function TaskTable ({ data }: ITaskTableProps) {

  const table = useReactTable({
    data: data.flatMap(column => column.tasks),
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className='flex-1 overflow-x-auto bg-white rounded-sm flex'>
      <table className='flex-1'>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='flex-1 items-center flex flex-nowrap'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
