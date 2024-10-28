export interface IAppProps {
  children?: React.ReactNode;
}

export default function InteractiveButton ({ children }: IAppProps) {
  return (
    <div className="bg-zinc-50 hover:bg-zinc-100 p-1 text-xs font-light text-zinc-500 rounded border border-zinc-200 flex">
      {children}
    </div>
  );
}