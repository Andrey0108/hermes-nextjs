import SideNav from "@/app/ui/layout/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-12">
      <SideNav />
      <section className="col-span-11 mx-5">{children}</section>
    </main>
  );
}
