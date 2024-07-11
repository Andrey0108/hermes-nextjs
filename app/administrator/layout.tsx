import SideNav from "@/app/ui/layout/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 row-span-full h-full">
        <SideNav />
      </div>
      <div className="col-span-11 mx-5">{children}</div>
    </div>
  );
}
