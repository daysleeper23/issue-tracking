export interface IPageTitleProps {
  title: string
}

export default function PageTitle ({ title }: IPageTitleProps) {
  return (
    <div className="text-sm font-medium px-8 py-3 border-b text-zinc-700">
      {title}
    </div>
  );
}