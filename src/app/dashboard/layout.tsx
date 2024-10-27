import SideNav from "../ui/dashboard/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

//Using React.ReactNode for the children prop in your Layout component means it can accept any valid React element or content as children. This is helpful when creating wrapper components like Layout, where the child content will vary widely depending on what is placed inside the component.
