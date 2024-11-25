import clsx from "clsx";

export interface IAppProps {
  children?: React.ReactNode;
  style: string;
}

export default function InteractiveButton ({ children, style }: IAppProps) {
  return (
    <div className={clsx(
      "hover:bg-zinc-100 p-1 text-xs font-light tracking-wide text-zinc-500 rounded flex",
      {
        "bg-zinc-50 border border-zinc-200": style === "board",
        "": !(style === "board"),
      }
    )}>
      {children}
    </div>
  );
}