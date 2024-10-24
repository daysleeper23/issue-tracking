export interface IAppProps {
}

export function Header (props: IAppProps) {
  return (
    <header className="bg-blue-500 text-white p-4 text-center md:text-left">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">My React App</h1>
        <p className="mt-2 text-lg">A simple responsive page using Tailwind CSS</p>
      </div>
    </header>
  );
}
